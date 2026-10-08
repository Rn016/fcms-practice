/* ==========================================================================
   AMA1702 刷题系统 — 答案判定引擎 (answer checking engine)
   --------------------------------------------------------------------------
   学生只需输入答案本身。本引擎判断输入答案与标准答案是否等价。

   判定顺序（严格 -> 宽松）：
     1. 归一化后字符串完全相等
     2. 集合 / 区间 / 不等式等价      (-5,5) ≡ -5<x<5 ≡ (-∞,∞) ≡ R
     3. 符号等价 — 两者之差 simplify 得 0
     4. 数值等价 — 在多个样本点求值比较（相对误差）
     5. 常量回退 — 精确值 vs 小数、π、e
     6. 文字答案 — DNE / 不存在 / 发散 / 收敛 / 是 / 否

   归一化采用「词法切分」而不是正则替换，因此对下列写法都稳健：
     sqrt(2)  pi  e  ln(x)  log(x)  arcsin(x)  sin^-1(x)  atan(x)
     e^x  exp(x)  x^2  1/3  0.5  (x+1)/(x-2)  |x|  -inf  2pi  2sinxcosx
   ========================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../vendor/nerdamer/nerdamer.min.js'));
  } else {
    root.Grader = factory(root.nerdamer);
  }
})(typeof self !== 'undefined' ? self : this, function (nerdamer) {
  'use strict';
  if (!nerdamer) throw new Error('nerdamer not loaded');

  /* ================================================ 名称表（先声明，后面要用） */

  // 函数别名 -> 标准名（nerdamer 认这些）
  const CANON = {
    ln: 'log', lg: 'log10', arcsin: 'asin', arccos: 'acos', arctan: 'atan',
    arcsec: 'asec', arccsc: 'acsc', arccot: 'acot',
    cosec: 'csc', csc: 'csc', ctg: 'cot', cotg: 'cot', cot: 'cot',
    sin: 'sin', cos: 'cos', tan: 'tan', sec: 'sec',
    asin: 'asin', acos: 'acos', atan: 'atan', asec: 'asec', acsc: 'acsc', acot: 'acot',
    sinh: 'sinh', cosh: 'cosh', tanh: 'tanh',
    log: 'log', log10: 'log10', sqrt: 'sqrt', exp: 'exp', abs: 'abs', cbrt: 'cbrt',
    // 反三角也要有键，否则 bindFunctions 会把 arccos 里的 cos 当成函数名
    arcsin: 'asin', arccos: 'acos', arctan: 'atan',
    arcsec: 'asec', arccsc: 'acsc', arccot: 'acot'
  };
  const CANST = { pi: 'pi', e: 'e', inf: 'inf', theta: 'theta', alpha: 'alpha',
    beta: 'beta', phi: 'phi', gamma: 'gamma', lambda: 'lambda', nan: 'nan' };

  const BARE_FN_ALIASES = ['arcsin', 'arccos', 'arctan', 'arcsec', 'arccsc', 'arccot',
    'cosec', 'ctg', 'cotg', 'ln', 'lg'];
  const NAMES = Object.keys(CANON).concat(Object.keys(CANST)).concat(BARE_FN_ALIASES)
    .filter(function (v, i, a) { return a.indexOf(v) === i; })
    .sort(function (a, b) { return b.length - a.length; });

  function isDigit(c) { return c >= '0' && c <= '9'; }
  function isAlphaCh(c) {
    if (!c) return false;
    const n = c.charCodeAt(0);
    return (n >= 65 && n <= 90) || (n >= 97 && n <= 122);
  }
  function isAlnumCh(c) { return isAlphaCh(c) || isDigit(c); }
  function toParens(s) { return s.replace(/\{/g, '(').replace(/\}/g, ')').replace(/\[/g, '(').replace(/\]/g, ')'); }

  /* ============================================== ① LaTeX 片段展开 */

  const TEX_ARG = '(?:\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\}|\\\\[a-zA-Z]+|[0-9A-Za-z])';

  function unwrap(t) { t = String(t).trim(); while (t[0] === '{' && t[t.length-1] === '}') t = t.slice(1,-1); return t; }

  function expandSqrtFrac(s) {
    let out = s, guard = 0;
    while (guard++ < 300) {
      const before = out;
      out = out.replace(new RegExp('\\\\sqrt\\s*' + TEX_ARG, 'g'), function (m) {
        return 'sqrt(' + unwrap(m.replace(/\\sqrt\s*/, '')) + ')';
      });
      out = out.replace(new RegExp('\\\\[dt]?frac\\s*' + TEX_ARG + '\\s*' + TEX_ARG, 'g'), function (m) {
        const rest = m.replace(/^\\[dt]?frac\s*/, '');
        const mm = rest.match(new RegExp('^(' + TEX_ARG + ')\\s*(' + TEX_ARG + ')$'));
        if (!mm) return m;
        return '((' + unwrap(mm[1]) + ')/(' + unwrap(mm[2]) + '))';
      });
      if (out === before) break;
    }
    return out;
  }

  /* ============================================== ② \sin x / \sin^{-1} x */

  const TEXFN_RE = /\\(arccsc|arccot|arcsec|arccos|arcsin|arctan|sinh|cosh|tanh|sqrt|log|exp|abs|sin|cos|tan|sec|csc|cot|ln)\b(\s*\^\s*\{?\s*(-?[0-9]+)\s*\}?)?(\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|\s*\([^()]*\)|\s+\\?[a-zA-Z0-9]|\\?[0-9])?/g;

  function texFuncReplace(s) {
    return s.replace(TEXFN_RE, function (m, name, expPart, expVal, argPart) {
      const nm = CANON[name] || name;
      const inv = (nm === 'sin' || nm === 'cos' || nm === 'tan' || nm === 'sec' || nm === 'csc' || nm === 'cot');
      if (expVal === '-1' && inv) {
        return 'arc' + nm + (argPart || '');
      }
      let sup = '';
      let arg = argPart || '';
      // \sqrt2 这种：数字紧跟命令，视为参数
      if (/^[0-9]+(\.[0-9]+)?$/.test(arg)) { arg = '{' + arg + '}'; }
      if (expVal !== undefined) sup = '^{' + expVal + '}';
      return nm + (arg ? ' ' + arg : '') + sup;
    });
  }

  /** 把 \left( ... \right) 变成 ( ... )，并把紧随其后的 ^{...}/^n 一并带出（支持嵌套） */
  /** 把 \left( ... \right) 变成 ( ... )，并把紧随其后的 ^{...}/^n 带出（支持嵌套）。
   *  注意偏移量：\\left 占 5 个字符、\\right 占 6 个字符，分隔符在紧随其后。 */
  function expandLeftRight(s) {
    const OPEN = { '(': 1, '[': 1, '\\{': 2 };
    const CLOSE = { ')': 1, ']': 1, '\\}': 2 };
    let out = s, guard = 0;
    while (guard++ < 400) {
      const idx = out.indexOf('\\left');
      if (idx < 0) break;
      // \left 后面必须紧跟分隔符
      const openTok = out.slice(idx + 5, idx + 7) === '\\{' ? '\\{' : out.charAt(idx + 5);
      if (!(openTok in OPEN)) { out = out.slice(0, idx) + out.slice(idx + 5); continue; }
      const innerStart = idx + 5 + OPEN[openTok];
      let depth = 1, j = innerStart, end = -1;
      while (j < out.length) {
        if (out.startsWith('\\left', j)) {
          const t = out.slice(j + 5, j + 7) === '\\{' ? '\\{' : out.charAt(j + 5);
          if (t in OPEN) { depth++; j += 5 + OPEN[t]; continue; }
          j += 5; continue;
        }
        if (out.startsWith('\\right', j)) {
          const t = out.slice(j + 6, j + 8) === '\\}' ? '\\}' : out.charAt(j + 6);
          if (t in CLOSE) { depth--; if (depth === 0) { end = j; j += 6 + CLOSE[t]; break; } j += 6 + CLOSE[t]; continue; }
          j += 6; continue;
        }
        const ch = out.charAt(j);
        if (ch === '(' || ch === '[' || ch === '{') { depth++; j++; continue; }
        if (ch === ')' || ch === ']' || ch === '}') { depth--; if (depth === 0) { end = j; j++; break; } j++; continue; }
        j++;
      }
      if (end < 0) break;
      const inner = out.slice(innerStart, end);
      // 找 \right 命令的结束位置
      let after = end;
      if (out.startsWith('\\right', end)) {
        const t = out.slice(end + 6, end + 8) === '\\}' ? '\\}' : out.charAt(end + 6);
        after = end + 6 + (CLOSE[t] || 1);
      } else {
        after = end + 1;
      }
      const tail = out.slice(after);
      const m = tail.match(/^\s*\^\s*(\{[^{}]*\}|-?[0-9]+|[a-zA-Z])/);
      let sup = '', rest = tail;
      if (m) {
        let t = m[1];
        if (t.charAt(0) === '{') t = t.slice(1, -1);
        sup = '^' + (t.length > 1 ? '{' + t + '}' : t);
        rest = tail.slice(m[0].length);
      }
      out = out.slice(0, idx) + '(' + inner + ')' + sup + rest;
    }
    return out;
  }

  function stripLatex(s) {
    s = s.replace(/\\left\||\\right\|/g, '|')
         .replace(/\\lvert|\\rvert|\\lVert|\\rVert|\\vert|\\Vert/g, '|')
         .replace(/\\!|\\,|\\;|\\:|\\ /g, '');
    // \left(...\right) 统一成 (...)，并把紧跟的 ^ 指数保留在外面。
    // 若只做字符级替换，\left(\frac{a}{b}\right)^{2} 会退化成 (a)/(b)*(^2)，
    // 因此这里按「配对括号 + 可选指数」整体处理。
    s = expandLeftRight(s);
    s = expandSqrtFrac(s);
    // 下标对数：\log_{a}b / \log_{a}{b} -> log(b)/log(a)
    s = s.replace(/\\?log_\s*\{\s*([^{}]+?)\s*\}\s*\{?\s*([0-9A-Za-z]+)\s*\}?/g, function (m, base, arg) {
      return '(log(' + toParens(arg) + ')/log(' + toParens(base) + '))';
    });
    s = s.replace(/\\?log_\s*([0-9A-Za-z])\s*\{?\s*([0-9A-Za-z]+)\s*\}?/g, function (m, base, arg) {
      return '(log(' + toParens(arg) + ')/log(' + toParens(base) + '))';
    });
    s = s.replace(/\\cdot|\\times/g, '*').replace(/\\div/g, '/');
    s = s.replace(/\\pi\b/g, 'pi ').replace(/\\infty\b/g, 'inf ');
    s = texFuncReplace(s);
    s = s.replace(/\\[a-zA-Z]+/g, ' ');
    return s;
  }

  /* ============================================== ③ Unicode 符号 */

  const UNI = {
    '\u2212': '-', '\u2013': '-', '\u2014': '-', '\u2010': '-', '\u2011': '-',
    '\u00d7': '*', '\u00b7': '*', '\u2219': '*', '\u2217': '*', '\u00f7': '/',
    '\u03c0': 'pi ', '\u03a0': 'pi ', '\u221e': 'inf ', '\u221a': 'sqrt', '\u221b': 'cbrt',
    '\u2264': '<=', '\u2265': '>=', '\u2260': '!=', '\u2248': '=',
    '\u00b2': '^2', '\u00b3': '^3', '\u2074': '^4', '\u2075': '^5', '\u2076': '^6',
    '\u2077': '^7', '\u2078': '^8', '\u2079': '^9', '\u2070': '^0', '\u00b9': '^1',
    '\u207b': '^-', '\u03b8': 'theta', '\u03b1': 'alpha', '\u03b2': 'beta',
    '\u03c6': 'phi', '\u03d5': 'phi', '\uff08': '(', '\uff09': ')', '\uff0c': ',',
    '\u3000': ' ', '\u00a0': ' ', '\u2009': ' ', '\u200b': ''
  };
  function unicodeToAscii(s) {
    let out = '';
    for (const ch of s) out += (ch in UNI ? UNI[ch] : ch);
    return out;
  }

  /* ============================================== ④ 函数名 + 参数绑定 */

  // sin^2 x -> sin(x)^2 ；arctan x -> atan(x)
  // 注意参数用否定前瞻排除 "("：已经写成 f(x) 的不要重复加括号
  const BIND_NAMES = NAMES.filter(function (n) { return CANON[n]; }).join('|');
  const BIND_RE = new RegExp(
    '(^|[^a-zA-Z0-9])(' + BIND_NAMES + ')' +
    '\\s*(\\^\\s*(?:\\{[^{}]*\\}|-?[0-9]+))?\\s*' +
    '(\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\}|\\((?:[^()]|\\([^()]*\\))*\\)|[a-zA-Z]|[0-9]+(?:\\.[0-9]+)?)',
    'g');

  function bindFunctions(s) {
    let guard = 0;
    while (guard++ < 200) {
      const before = s;
      s = s.replace(BIND_RE, function (m, pre, name, sup, argRaw) {
        // 已经是 f(...) 形式的不再处理
        if (String(argRaw).charAt(0) === '(') return m;
        const nm = CANON[name] || name;
        const arg = unwrap(argRaw);
        let sx = (sup || '').replace(/\s+/g, '');
        if (sx.charAt(0) === '^' && sx.charAt(1) === '{') sx = '^' + sx.slice(2, -1);
        return pre + nm + '(' + toParens(arg) + ')' + sx;
      });
      if (s === before) break;
    }
    return s;
  }

  /* ============================================== ⑤ 词法切分（核心） */

  function clean(s) {
    return s.replace(/\s+/g, '')
            .replace(/\*\*/g, '^')
            .replace(/\\/g, '')
            .replace(/\{/g, '(').replace(/\}/g, ')')
            .replace(/\[/g, '(').replace(/\]/g, ')');
  }

  /** 把一段连续字母拆成 已知名(函数/常量) 与 单字母变量 的序列。
   *  'sinx' -> [sin][x] ; 'bx' -> [b][x] ; 'arc' -> [a][r][c] ; 'logx' -> [log][x] */
  function parseNameRun(run) {
    const memo = new Map();
    function go(pos) {
      if (pos >= run.length) return [];
      if (memo.has(pos)) return memo.get(pos);
      let best = null;
      const head = run.charAt(pos);
      for (const nm of NAMES) {
        if (!run.startsWith(nm, pos)) continue;
        const rest = go(pos + nm.length);
        if (rest === null) continue;
        const cand = [{ t: CANON[nm] ? 'fn' : 'const', v: CANON[nm] || CANST[nm] || nm }].concat(rest);
        if (!best || cand.length < best.length) best = cand;
      }
      const fallback = go(pos + 1);
      if (fallback !== null) {
        const cand = [{ t: 'var', v: head }].concat(fallback);
        if (!best || cand.length < best.length) best = cand;
      }
      memo.set(pos, best);
      return best;
    }
    return go(0) || [{ t: 'var', v: run }];
  }

  function normaliseTokens(s) {
    // 反复扫描名字：2pi -> 2*pi ； sinx -> s*i*n*x
    const out = [];
    let i = 0;
    while (i < s.length) {
      const c = s.charAt(i);
      if (isDigit(c) || (c === '.' && isDigit(s.charAt(i + 1)))) {
        let j = i;
        while (j < s.length && (isDigit(s.charAt(j)) || s.charAt(j) === '.')) j++;
        // 科学计数法：<数字>e<可选符号><数字> 必须当作一个数，
        // 否则 6.9144e-13 会被拆成 6.9144 * e - 13，导致与 e^{-28} 之类误判相等。
        if (s.charAt(j) === 'e' || s.charAt(j) === 'E') {
          let k = j + 1;
          if (s.charAt(k) === '+' || s.charAt(k) === '-') k++;
          if (isDigit(s.charAt(k))) {
            while (k < s.length && isDigit(s.charAt(k))) k++;
            out.push({ t: 'num', v: s.slice(i, k) });
            i = k;
            continue;
          }
        }
        out.push({ t: 'num', v: s.slice(i, j) });
        i = j;
        continue;
      }
      if (isAlphaCh(c)) {
        // 取出整段连续字母，再拆成 已知名字 / 单字母变量
        let j = i;
        while (j < s.length && isAlphaCh(s.charAt(j))) j++;
        const run = s.slice(i, j);
        const pieces = parseNameRun(run);
        for (const p of pieces) out.push(p);
        i = j;
        continue;
      }
      if (c === '(' || c === ')' || c === '[' || c === ']' || c === '{' || c === '}') {
        out.push({ t: 'paren', v: (c === '(' || c === '[' || c === '{') ? '(' : ')' });
        i += 1;
        continue;
      }
      out.push({ t: 'op', v: c });
      i += 1;
    }
    return emitTokens(out);
  }

  /// 把 token 流拼成表达式：按其间是否需要隐式乘号插入 '*'；
  /// 函数名后紧跟自己的 '(' 时不插乘号。
  function emitTokens(out) {
    const parts = [];
    let prev = null;
    for (let k = 0; k < out.length; k++) {
      const cur = out[k];
      // 函数名后面直接跟一个值（log5 / ln2）：视为函数调用 log(5)
      if (prev && prev.t === 'fn' && (cur.t === 'num' || cur.t === 'var' || cur.t === 'const')) {
        parts.push('(' + cur.v + ')');
        prev = { t: 'paren', v: ')' };
        continue;
      }
      const isFnCall = prev && prev.t === 'fn' && cur.t === 'paren' && cur.v === '(';
      if (prev && !isFnCall && isValueEnd(prev) && isValueStart(cur)) parts.push('*');
      parts.push(cur.v);
      prev = cur;
    }
    return parts.join('');
  }

  function isValueEnd(t) {
    return !!t && (t.t === 'num' || t.t === 'var' || t.t === 'const' || t.t === 'fn' || (t.t === 'paren' && t.v === ')'));
  }
  function isValueStart(t) {
    return !!t && (t.t === 'num' || t.t === 'var' || t.t === 'const' || t.t === 'fn' || (t.t === 'paren' && t.v === '('));
  }

  /* ============================================== 归一化入口 */

  function norm(s) {
    if (s == null) return '';
    s = unicodeToAscii(String(s));
    s = stripLatex(s);
    // |x| -> abs(x)
    let g = 0;
    while (g++ < 12) {
      const a = s.indexOf('|');
      if (a < 0) break;
      const b = s.indexOf('|', a + 1);
      if (b < 0) { s = s.slice(0, a) + s.slice(a + 1); break; }
      s = s.slice(0, a) + 'abs(' + s.slice(a + 1, b) + ')' + s.slice(b + 1);
    }
    s = s.replace(/\bInfinity\b|\bINF\b|\binfty\b|\binfinity\b/g, 'inf ');
    s = s.replace(/\bcosec\b/g, 'csc').replace(/\bctg\b|\bcotg\b/g, 'cot');
    s = bindFunctions(s);
    s = clean(s);
    s = s.replace(/\^\(([^()]+)\)/g, '^($1)');   // 保持结构，交给下面简化
    s = collapseParens(s);
    s = s.replace(/\^\((-?[0-9]+|[a-zA-Z])\)/g, '^$1');
    return normaliseTokens(s);
  }

  /** 去掉冗余括号：((x)) -> (x)；((1)/(2)) -> (1/2) */
  function collapseParens(s) {
    let out = s;
    for (let pass = 0; pass < 6; pass++) {
      // 若 ( ... ) 的内部整体被一对括号包住，内层括号可去
      const next = out.replace(/\(\s*\(([^()]*)\)\s*\)/g, '($1)');
      const next2 = next.replace(/\(\(([^()]*)\)\)/g, '($1)');
      if (next2 === out) break;
      out = next2;
    }
    return out;
  }

  /* ============================================================= 文字答案 */

  // 注意：不要把 'inf' 单列进来 —— 它也可能是「收敛半径 = ∞」这类题的正确答案
  const DNE_WORDS = ['dne', 'undefined', 'doesnotexist', 'nonexistent', 'nosolution',
    'na', 'notexist', '未定义', '不存在'];
  const DIV_WORDS = ['divergent', 'diverges', 'diverging', '发散', '不收敛'];
  const CONV_WORDS = ['convergent', 'converges', 'converging', '收敛'];
  // 判断题 / 是非题的答案；涵盖中英与「对错」「真假」「是否」几种说法
  const YES_WORDS = ['yes', 'true', '是', '对', '正确', '真', '成立', '有',
    'istrue', 'correct', 'exists', '存在', '可以', '能'];
  const NO_WORDS = ['no', 'false', '否', '错', '错误', '假', '不成立', '没有',
    'isfalse', 'incorrect', 'doesnotexist', '不存在', '不可以', '不能'];

  function canonWord(s) { return String(s).toLowerCase().replace(/[\s.。!！]/g, ''); }
  // 列表里是否"恰好"含有该项。
  // 必须用严格相等：若用 indexOf/substring，'不可' 会因为含有 '可' 而被判成 yes 类，
  // 导致错答被判对。
  function inList(list, c) {
    for (let i = 0; i < list.length; i++) if (list[i] === c) return true;
    return false;
  }
  function wordKind(s) {
    const c = canonWord(s);
    if (!c) return null;
    if (inList(DNE_WORDS, c)) return 'dne';
    if (inList(DIV_WORDS, c)) return 'div';
    if (inList(CONV_WORDS, c)) return 'conv';
    if (inList(YES_WORDS, c) || c === 'yes' || c === 'true' || c === '是' || c === '对' || c === '正确' || c === '真') return 'yes';
    if (inList(NO_WORDS, c) || c === 'no' || c === 'false' || c === '否' || c === '错' || c === '错误' || c === '假') return 'no';
    return null;
  }

  /* ========================================================= 数值与符号 */

  /**
   * 数值近似相等。用「相对 + 绝对」混合容差：
   *   |a-b| <= max( rel*max(|a|,|b|), absTol )
   * 只用相对容差时，量级很小的量（如 e^{-28}≈6.9e-13）会把 0 误判为相等，
   * 因此必须补一个绝对下限。absTol 默认 rel*1e-9，用于符号求值时的浮点噪声。
   */
  function close(a, b, rel, absTol) {
    if (!isFinite(a) || !isFinite(b)) return a === b;
    rel = rel || 1e-7;
    const m = Math.max(Math.abs(a), Math.abs(b));
    const tol = Math.max(rel * m, (absTol === undefined ? rel * 1e-9 : absTol));
    return Math.abs(a - b) <= tol;
  }

  const parseCache = new Map();
  function parse(s) {
    if (parseCache.has(s)) return parseCache.get(s);
    let r = null;
    try { r = nerdamer(s); } catch (e) { r = null; }
    parseCache.set(s, r);
    return r;
  }

  const fnCache = new Map();
  function buildFn(s) {
    if (fnCache.has(s)) return fnCache.get(s);
    let r = null;
    const ex = parse(s);
    if (ex) {
      try {
        const vars = ex.variables().slice().sort();
        r = { vars: vars, f: ex.buildFunction(vars) };
      } catch (e) { r = null; }
    }
    fnCache.set(s, r);
    return r;
  }

  function evalPoint(fnObj, map) {
    if (!fnObj) return NaN;
    try {
      const args = fnObj.vars.map(function (v) { return (v in map) ? map[v] : NaN; });
      const r = fnObj.f.apply(null, args);
      if (r && typeof r === 'object' && typeof r.text === 'function') {
        return parseFloat(r.text('decimals', 18));
      }
      return parseFloat(r);
    } catch (e) { return NaN; }
  }

  const SAMPLES = [0.37, 0.61, 0.93, 1.27, 1.71, 2.33, -0.41, -0.83,
    -1.39, -1.97, 3.19, -2.71, 0.23, 4.51, -3.61, 2.03, 0.79, -0.53];

  function numericEqual(a, b, opts) {
    opts = opts || {};
    const A = buildFn(a), B = buildFn(b);
    if (!A || !B) return false;
    const vars = Array.from(new Set(A.vars.concat(B.vars))).sort();
    if (vars.length === 0) {
      const va = evalPoint(A, {}), vb = evalPoint(B, {});
      return isFinite(va) && isFinite(vb) && close(va, vb, opts.rel);
    }
    if (vars.length > 3) return false;
    let tested = 0;
    for (let i = 0; i < SAMPLES.length; i++) {
      const map = {};
      for (let k = 0; k < vars.length; k++) map[vars[k]] = SAMPLES[i] * (1 + 0.41 * k);
      const va = evalPoint(A, map), vb = evalPoint(B, map);
      if (!isFinite(va) || !isFinite(vb)) continue;
      if (Math.abs(va) > 1e9 || Math.abs(vb) > 1e9) continue;
      tested++;
      if (!close(va, vb, opts.rel || 1e-6)) return false;
    }
    return tested >= 6;
  }

  function convertRecip(s) {
    return s.replace(/\bsec\(/g, '(1/cos(')
            .replace(/\bcsc\(/g, '(1/sin(')
            .replace(/\bcot\(/g, '(cos(/sin(');
  }

  function tryZero(expr) {
    const cmds = ['simplify(', 'expand(', 'simplify(expand('];
    for (const c of cmds) {
      const cmd = c + expr + (c === 'simplify(expand(' ? '))' : ')');
      try {
        const r = parse(cmd);
        if (!r) continue;
        const str = r.toString().replace(/\s/g, '');
        if (str === '0') return true;
        // 只有当化简结果本身就是「干净的 0」时才认为相等。
        // 这里必须用「相对」判据：若用绝对阈值（例如 1e-11），
        // 那么 e^{-28}≈6.9e-13 这类小量级的差就会被误判为 0。
        const v = parseFloat(r.text('decimals', 20));
        if (isFinite(v)) {
          // 仅当表达式确实是数值常量（无变量）时，才允许用浮点阈值
          const hasVar = (function () { try { return r.variables().length > 0; } catch (e) { return true; } })();
          if (!hasVar && Math.abs(v) < 1e-15) return true;
          // 含有变量时：要求 nerdamer 化简后就是字面 0（上面已判），否则不认
        }
      } catch (e) { /* next */ }
    }
    return false;
  }

  function symbolicEqual(a, b) {
    if (tryZero('(' + a + ')-(' + b + ')')) return true;
    if (tryZero('(' + a + ')/(' + b + ')-1')) return true;
    const ca = convertRecip(a), cb = convertRecip(b);
    if (ca !== a || cb !== b) {
      if (tryZero('(' + ca + ')-(' + cb + ')')) return true;
    }
    try {
      const t = nerdamer('trigexpand((' + a + ')-(' + b + '))');
      if (t && t.toString().replace(/\s/g, '') === '0') return true;
    } catch (e) { /* ignore */ }
    return false;
  }

  function constEqual(a, b, rel) {
    const fa0 = buildFn(a), fb0 = buildFn(b);
    // 含变量的表达式不是常量，禁止走这条「常数」通道
    if ((fa0 && fa0.vars.length) || (fb0 && fb0.vars.length)) return false;
    const va = evalPoint(fa0, {}), vb = evalPoint(fb0, {});
    if (isFinite(va) && isFinite(vb)) return close(va, vb, rel || 1e-12);
    try {
      const A = parse(a), B = parse(b);
      if (!A || !B) return false;
      const fa = parseFloat(A.evaluate().text('decimals', 24));
      const fb = parseFloat(B.evaluate().text('decimals', 24));
      if (isFinite(fa) && isFinite(fb)) return close(fa, fb, rel);
    } catch (e) { /* ignore */ }
    return false;
  }

  /* ========================================================= 集合 / 区间 */

  function canonSet(s) {
    let t = unicodeToAscii(String(s)).toLowerCase();
    t = t.replace(/\\left|\\right|\\/g, '').replace(/\s+/g, '');
    t = t.replace(/infinity|infty|inf/g, 'inf');
    t = t.replace(/\u222a|\\cup|\bor\b|\bu\b/g, '|');
    t = t.replace(/\u2264|<=|\u2a7d/g, '<=').replace(/\u2265|>=|\u2a7e/g, '>=');
    t = t.replace(/[{}[\]]/g, function (m) { return (m === '{' || m === '[') ? '(' : ')'; });
    t = t.replace(/^\(\(/, '(').replace(/\)\)$/, ')');
    t = t.replace(/\*\*/g, '^');
    return t;
  }

  function setEndpoints(s) {
    const t = canonSet(s).replace(/\s/g, '');
    if (t === 'r') return 'R';
    if (t === '(-inf,inf)' || t === '(inf,-inf)') return 'R';
    let m = t.match(/^\(([^,]+),([^,]+)\)$/);
    if (m) return 'INT(' + m[1] + ',' + m[2] + ')';
    m = t.match(/^(-?[\d.a-z\/^+*-]+)(<=|<)x(<=|<)(-?[\d.a-z\/^+*-]+)$/);
    if (m) return 'INT(' + m[1] + ',' + m[4] + ')';
    m = t.match(/^x(<=|<)(-?[\d.a-z\/^+*-]+)$/);
    if (m) return 'INT(-inf,' + m[2] + ')';
    m = t.match(/^x(>=|>)(-?[\d.a-z\/^+*-]+)$/);
    if (m) return 'INT(' + m[2] + ',inf)';
    return t;
  }

  /* ================================================ 文字（散文）答案 */

  var STOPWORDS = ('a an the is are was were be been being of to in into on for with and or that this these those ' +
    'it its as by from at we you they he she i do does did can could should would may might will shall ' +
    'some any all each every no not than then so such very more most much many few less least ' +
    'problem problems part parts way ways thing things').split(' ');

  /**
   * 该答案是否是「文字 / 散文」型（而不是数学表达式或数值）。
   * 关键作用：英文散文绝不能经过数学归一化 ——
   *   norm('breaking') → 'b*r*e*a*k*i*n*g'，norm('complex') 甚至被当成 exp(r)！
   */
  function isProseAnswer(t) {
    var s = String(t).trim();
    if (!s) return false;
    // 短的中文判断词（有 / 无 / 对 / 错 / 是 / 否）不是「散文」，交给 wordKind 处理
    var cjkOnly = s.replace(/[\u4e00-\u9fa5]/g, '');
    if (/[\u4e00-\u9fa5]/.test(s)) {
      return cjkOnly.replace(/[\s。，、；：！？（）]/g, '').length === 0 && s.replace(/[^\u4e00-\u9fa5]/g, '').length >= 6;
    }
    var stripped = s.replace(/\$[^$]*\$/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
    var lower = stripped.toLowerCase();
    // ① 序列防护：若几乎全是「单字符标记」（顶点/缩写序列），绝不是散文
    //    例：S-A-B-C-D-E、FG,DF,AB,CE,DE,BD、A B C D
    var allToks = lower.split(/[^a-z0-9]+/).filter(function (x) { return x; });
    if (allToks.length >= 3) {
      var short = allToks.filter(function (x) { return x.length <= 2; }).length;
      if (short / allToks.length >= 0.7) return false;
    }
    // ② 含数字的绝不按散文处理（数值 / 序列）
    if (/[0-9]/.test(stripped)) return false;
    // ③ 至少两个「≥2 字母」的词
    var tokens = lower.match(/[a-z]{2,}/g) || [];
    if (tokens.length < 2) return false;
    var mathCh = (stripped.match(/[+\-*/^=<>()\[\]{}|]/g) || []).length;
    var letters = (stripped.match(/[A-Za-z]/g) || []).length;
    if (letters < 12) return false;
    // ④ 标点（含连字符）在散文里很常见，阈值放宽到 30%
    return mathCh / letters <= 0.30;
  }

  /** 文字答案归一化：小写、去标点、压空白、去虚词 */
  function textKey(t) {
    var s = String(t).toLowerCase();
    s = s.replace(/[\u2018\u2019\u201c\u201d]/g, "'");
    s = s.replace(/[^a-z0-9\u4e00-\u9fa5' ]+/g, ' ');
    var words = s.split(/\s+/).filter(function (w) { return w && STOPWORDS.indexOf(w) < 0; });
    // 简单词形归并：去复数 s / 去 ing / 去 ed（只做最长匹配，避免误伤）
    words = words.map(function (w) {
      if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + 'y';
      if (w.length > 4 && /(ses|xes|zes|ches|shes)$/.test(w)) return w.slice(0, -2);
      if (w.length > 3 && /s$/.test(w) && !/ss$/.test(w)) return w.slice(0, -1);
      return w;
    });
    return words.filter(function (w) { return w.length > 1; });
  }

  function textCoverage(userKey, goldKey) {
    if (!goldKey.length) return false;
    var us = {};
    userKey.forEach(function (w) { us[w] = true; });
    var hit = goldKey.filter(function (w) { return us[w]; }).length;
    return hit / goldKey.length >= 0.6;
  }

  /**
   * 文字答案比较：
   *  ① 归一化后完全相同 → 对
   *  ② 用户的答案包含了标准答案中 ≥60% 的关键实词，
   *     且没有引入新的关键实词（避免把 abstraction 写成 decomposition 也判对）→ 对
   *  ③ 若用户答案里的关键实词「几乎都能在标准答案里找到」（≥85%），也判对
   */
  /** 中文字符级 bigram 相似度（Jaccard）。中文没有词形变化，换个说法字面就完全不同，
   *  因此需要字符级兜底。 */
  function cjkBigrams(t) {
    var s = String(t).replace(/[^\u4e00-\u9fa5]/g, '');
    var out = [];
    for (var k = 0; k + 1 < s.length; k++) out.push(s.substr(k, 2));
    return out;
  }
  /** 中文字符 bigram 覆盖率。
   *  中文口语句子没有词边界，token 化会把整句当一个词，因此必须用字符级。
   *  用「覆盖率」而不是 Jaccard：标准答案通常较短，用户的复述通常更长，
   *  Jaccard 会被用户多出来的字稀释到阈值以下。 */
  function cjkBigrams(t) {
    var s = String(t).replace(/[^\u4e00-\u9fa5]/g, '');
    var out = [];
    for (var k = 0; k + 1 < s.length; k++) out.push(s.substr(k, 2));
    return out;
  }
  function cjkCover(a, b) {
    var A = cjkBigrams(a), B = cjkBigrams(b);
    if (!A.length || !B.length) return { self: 0, other: 0 };
    var setB = {}; B.forEach(function (x) { setB[x] = true; });
    var hit = A.filter(function (x) { return setB[x]; }).length;
    return { self: hit / A.length, other: hit / B.length };
  }
  function cjkSimilar(a, b) { return cjkCover(a, b).self; }

  function proseEqual(user, gold) {
    var uk = textKey(user), gk = textKey(gold);
    if (!gk.length) return false;
    if (uk.join(' ') === gk.join(' ')) return true;

    var us = {}; uk.forEach(function (w) { us[w] = true; });
    var gs = {}; gk.forEach(function (w) { gs[w] = true; });

    var goldHit = gk.filter(function (w) { return us[w]; }).length / gk.length;
    var userHit = uk.length ? uk.filter(function (w) { return gs[w]; }).length / uk.length : 0;

    // ① 用户覆盖了标准答案的大部分关键实词 → 对。
    //    用户可以更啰嗦（多写 large / complex / manageable 等修饰），不应因此判错，
    //    所以这里不要求 userHit 高；误答由「覆盖不足」自然拦下。
    if (goldHit >= 0.65) return true;
    // ② 反过来：用户答案的词几乎都能在标准答案里找到（用户写得更短）→ 对
    if (goldHit >= 0.35 && userHit >= 0.85) return true;
    // ③ 中文兜底：字符 bigram 覆盖率（覆盖「换个说法」与「加修饰语」两种情况）
    if (/[\u4e00-\u9fa5]/.test(String(user)) && /[\u4e00-\u9fa5]/.test(String(gold))) {
      var cov = cjkCover(user, gold);
      if (cov.self >= 0.50 && cov.other >= 0.30) return true;   // 用户覆盖了标准答案大半 → 对
      if (cov.self >= 0.30 && cov.other >= 0.45) return true;   // 换个说法/加修饰语 → 对
    }
    return false;
  }

  /** 该 spec 是否应按「文字答案」判定 */
  function specIsProse(specObj) {
    var answers = [].concat(specObj.exact || [], specObj.alts || [], specObj.accept || [])
      .filter(function (x) { return typeof x === 'string' && x.length; });
    if (!answers.length) return false;
    if (specObj.seq === true || specObj.strset === true || specObj.setLike === true) return false;
    if (specObj.vars && specObj.vars.length) return false;
    if (specObj.rel !== undefined) return false;
    // 主答案必须是散文，且多数答案也是散文（不能要求「全部」：
    // 列表里常混着更短的英文措辞，会把整条 spec 否掉）
    if (!isProseAnswer(answers[0])) return false;
    // 主答案必须真的是「一段话」：至少 3 个实词
    if (textKey(answers[0]).length < 3) return false;
    // 含代码痕迹（列表/字典/箭头/引号）的答案按输出字面量处理，不走散文判定
    if (answers.some(function (a) { return /\[|\]|\{|\}|->|=>|'|"/.test(String(a)); })) return false;
    var nProse = answers.filter(isProseAnswer).length;
    return nProse / answers.length >= 0.5;
  }

  /* ============================================ 有序序列 / 无序集合（字符型） */

  /**
   * 把 "S-A-B-C-E" / "S,A,B,C,E" / "S A B C E" / "S→A→B→C→E" 统一切成 ['S','A','B','C','E']
   * 只用于 spec.seq / spec.strset 类型 —— 这类答案的元素是「名字」而不是数学量，
   * 不能交给符号引擎（S-A-B 会被当成代数式相减）。
   */
  function splitSeq(t) {
    var x = String(t).trim();
    x = x.replace(/[\u2192\u21d2>\-\u2013\u2014\u00b7\u2022,;|\/\\]+/g, ',');
    x = x.replace(/\s+/g, ',');
    x = x.replace(/,+/g, ',').replace(/^,|,$/g, '');
    if (!x) return [];
    return x.split(',').map(function (v) { return v.trim(); }).filter(function (v) { return v !== ''; });
  }

  /** 有序序列比较：元素顺序必须一致 */
  function seqEqual(user, gold, spec) {
    var a = splitSeq(user), b = splitSeq(gold);
    if (!a.length || !b.length) return false;
    if (a.length !== b.length) return false;
    // 归一：去空格、大小写不敏感（顶点名 A/a 视为同一）
    var normE = function (v) { return String(v).replace(/\s/g, '').toLowerCase(); };
    for (var i = 0; i < a.length; i++) {
      if (normE(a[i]) !== normE(b[i])) return false;
    }
    return true;
  }

  /** 无序集合比较（元素为名字）：顺序无关、不重复计数 */
  function strSetEqual(user, gold) {
    var a = splitSeq(user).map(function (v) { return v.replace(/\s/g, '').toLowerCase(); });
    var b = splitSeq(gold).map(function (v) { return v.replace(/\s/g, '').toLowerCase(); });
    if (!a.length || !b.length) return false;
    var ua = {}, ub = {};
    a.forEach(function (v) { ua[v] = true; });
    b.forEach(function (v) { ub[v] = true; });
    var ka = Object.keys(ua).sort(), kb = Object.keys(ub).sort();
    return ka.join('|') === kb.join('|');
  }

  /* ===================================================== 多值（集合）比较 */

  /** 把用户输入切成若干值：支持 , 、 ; 空格 "和" "与" "及" 作分隔符 */
  function splitMulti(t) {
    let x = String(t);
    x = x.replace(/[、；;，]|\s+和\s*|\s+与\s*|\s+及\s*|和|与/g, ',');
    x = x.replace(/,+/g, ',').replace(/^,|,$/g, '');
    if (x.indexOf(',') < 0) {
      // 没有逗号时，只有当整串都是"简单数字"（可带符号/小数/分数）才按空格切。
      // 这样 '2 5' 能识别为两个特征值，而矩阵写法 '[[1,2],[3,4]]' 或
      // '1 2 3' 这类含括号的输入不会被误切。
      if (/^[-+]?[0-9.\/]+(\s+[-+]?[0-9.\/]+)+$/.test(x.trim())) {
        x = x.trim().replace(/\s+/g, ',');
      }
    }
    if (x.indexOf(',') < 0) return null;
    const parts = x.split(',').map(function (v) { return v.trim(); }).filter(function (v) { return v !== ''; });
    return parts.length >= 2 ? parts : null;
  }

  /** 多值按"集合"比较：顺序无关，各元素用数值+符号等价判断 */
  function multiEqual(user, gold, rel) {
    const a = splitMulti(user), b = splitMulti(gold);
    if (!b) return false;                      // 标准答案不是多值
    if (!a) return false;                      // 用户没给多值
    if (a.length !== b.length) return false;
    // 两边都是纯数字/简单表达式时，逐元素做数值比较（顺序无关贪心配对）
    const usedB = b.map(function () { return false; });
    for (let i = 0; i < a.length; i++) {
      let matched = false;
      for (let j = 0; j < b.length; j++) {
        if (usedB[j]) continue;
        const ua = norm(a[i]), ub = norm(b[j]);
        if (ua === ub) { usedB[j] = true; matched = true; break; }
        // 数值等价
        const fa = buildFn(ua), fb = buildFn(ub);
        const va = fa ? evalPoint(fa, {}) : null;
        const vb = fb ? evalPoint(fb, {}) : null;
        if (va !== null && vb !== null && isFinite(va) && isFinite(vb) && close(va, vb, rel)) {
          usedB[j] = true; matched = true; break;
        }
      }
      if (!matched) return false;
    }
    return true;
  }

  function setEqual(user, gold) {
    if (canonSet(user) === canonSet(gold)) return true;
    const eu = setEndpoints(user), eg = setEndpoints(gold);
    if (eu === eg) return true;
    const soft = function (x) {
      return x.replace(/\s/g, '').replace(/abs\(/g, '').replace(/\)/g, '').replace(/[{}[\]]/g, '');
    };
    return soft(eu) === soft(eg);
  }

  function splitRel(t) {
    const m = String(t).match(/^(.+?)(<=|>=|<|>)(.+)$/);
    if (!m) return null;
    return { l: m[1], op: m[2], r: m[3] };
  }

  /* ===================================================== 不等式等价比较 */

  // 把 "a<=b" 拆成 {l:'a',op:'<=',r:'b'}
  function splitRelFull(t) {
    const m = String(t).match(/^(.+?)(<=|>=|<|>)(.+)$/);
    if (!m) return null;
    return { l: m[1], op: m[2], r: m[3] };
  }

  function relHoldsAt(t, x) {
    const s = splitRelFull(t);
    if (!s) return null;
    const map = { x: x };
    const lv = evalPoint(buildFn(s.l), map);
    const rv = evalPoint(buildFn(s.r), map);
    if (!isFinite(lv) || !isFinite(rv)) return null;
    switch (s.op) {
      case '<': return lv < rv;
      case '<=': return lv <= rv + 1e-12;
      case '>': return lv > rv;
      case '>=': return lv >= rv - 1e-12;
    }
    return null;
  }

  const REL_SAMPLES = [-4, -2.5, -1.5, -1.05, -0.95, -0.6, -0.25, 0, 0.25, 0.6, 0.95, 1.05, 1.5, 2.5, 4];

  /** 两个含 x 的不等式在样本点上取值一致 -> 等价 */
  function relEquivalent(a, b) {
    if (!splitRelFull(a) || !splitRelFull(b)) return false;
    let tested = 0;
    for (const x of REL_SAMPLES) {
      const ha = relHoldsAt(a, x), hb = relHoldsAt(b, x);
      if (ha === null || hb === null) continue;
      tested++;
      if (ha !== hb) return false;
    }
    return tested >= 8;
  }

  /** 把解集按采样点写成 0/1 指纹 */
  function ineqFingerprint(t) {
    const parts = [];
    for (const x of REL_SAMPLES) {
      const h = relHoldsAt(t, x);
      parts.push(h === null ? '?' : (h ? '1' : '0'));
    }
    return parts.join('');
  }

  /** 区间/集合与不等式也能比：把 (-1,1) 也采样成指纹 */
  function intervalFingerprint(t) {
    const c = canonSet(t);
    let m = c.match(/^\(([^,]+),([^,]+)\)$/);
    let lo = null, hi = null, loClosed = false, hiClosed = false;
    if (m) { lo = m[1]; hi = m[2]; loClosed = c[0] === '['; hiClosed = c[c.length - 1] === ']'; }
    else {
      const e = setEndpoints(t);
      const em = e.match(/^INT\(([^,]+),([^,]+)\)$/);
      if (!em) return null;
      lo = em[1]; hi = em[2];
      const cc = canonSet(t);
      loClosed = cc[0] === '[';
      hiClosed = cc[cc.length - 1] === ']';
    }
    const loV = (lo === '-inf' || lo === 'inf') ? -Infinity : evalPoint(buildFn(lo), {});
    const hiV = (hi === 'inf' || hi === '-inf') ? Infinity : evalPoint(buildFn(hi), {});
    if (!isFinite(loV) && loV !== -Infinity) return null;
    if (!isFinite(hiV) && hiV !== Infinity) return null;
    const parts = [];
    for (const x of REL_SAMPLES) {
      const okLo = loClosed ? (x >= loV - 1e-12) : (x > loV);
      const okHi = hiClosed ? (x <= hiV + 1e-12) : (x < hiV);
      parts.push((okLo && okHi) ? '1' : '0');
    }
    return parts.join('');
  }

  function setFingerprint(t) {
    if (/<=|>=|<|>/.test(t)) {
      const asInt = relToInterval(t);
      if (asInt) return asInt;                 // 端点含 inf 时转成区间指纹
      return ineqFingerprint(t);
    }
    return intervalFingerprint(t);
  }

  /** a<x<b / x>a / x<b 之类（端点可为 inf）转成区间指纹；失败返回 null */
  function relToInterval(t) {
    let m = t.match(/^(.+?)(<=|<)x(<=|<)(.+)$/);
    if (m) {
      const lo = m[1], hi = m[4];
      if (isInfStr(lo) || isInfStr(hi)) {
        const loS = isInfStr(lo) ? lo : lo;
        const hiS = isInfStr(hi) ? hi : hi;
        const closed = (m[2] === '<=') && (m[3] === '<=');
        return intervalFpFromBounds(loS, hiS, m[2] === '<=', m[3] === '<=');
      }
      return null;
    }
    m = t.match(/^x(<=|<)(.+)$/);
    if (m) return intervalFpFromBounds('-inf', m[2], false, m[1] === '<=');
    m = t.match(/^x(>=|>)(.+)$/);
    if (m) return intervalFpFromBounds(m[2], 'inf', m[1] === '>=', false);
    return null;
  }

  function isInfStr(s) { return /^-?inf$/.test(String(s)); }

  function intervalFpFromBounds(lo, hi, loClosed, hiClosed) {
    let loV, hiV;
    if (isInfStr(lo)) loV = /^-/.test(String(lo)) ? -Infinity : Infinity;
    else loV = evalPoint(buildFn(String(lo)), {});
    if (isInfStr(hi)) hiV = /^-/.test(String(hi)) ? -Infinity : Infinity;
    else hiV = evalPoint(buildFn(String(hi)), {});
    if (isNaN(loV) || isNaN(hiV)) return null;
    const parts = [];
    for (const x of REL_SAMPLES) {
      const okLo = loClosed ? (x >= loV - 1e-12) : (x > loV);
      const okHi = hiClosed ? (x <= hiV + 1e-12) : (x < hiV);
      parts.push((okLo && okHi) ? '1' : '0');
    }
    return parts.join('');
  }

  /* ============================================================== 主入口 */

  function check(raw, spec, opts) {
    opts = opts || {};
    const user = String(raw == null ? '' : raw).trim();
    const specObj = (spec && typeof spec === 'object' && !Array.isArray(spec)) ? spec : { exact: spec };
    const answers = [].concat(specObj.exact || [], specObj.alts || [], specObj.accept || [])
      .filter(function (x) { return typeof x === 'string' && x.length; });

    if (!user) return { ok: false, reason: 'empty', normalised: '' };
    if (!answers.length) return { ok: false, reason: 'nospec', normalised: '' };

    /* --- 0. 文字（散文）答案：绝不经过数学归一化 ---
       英文散文若交给 norm()，'breaking' 会变成 'b*r*e*a*k*i*n*g'，
       'complex' 甚至会被当成 exp(r) —— 必须在这里就拦住。 */
    if (specIsProse(specObj)) {
      for (const a of answers) {
        if (proseEqual(raw, a)) return { ok: true, reason: 'prose', normalised: String(raw).trim() };
      }
      return { ok: false, reason: 'prose', normalised: String(raw).trim() };
    }

    /* --- 文字类答案（DNE / 发散 / 收敛 / 是 / 否） --- */
    const goldKinds = {};
    answers.forEach(function (a) { const k = wordKind(a); if (k) goldKinds[k] = true; });
    const uk = wordKind(user);

    // 学生答的就是标准答案之一（含文字）—— 直接判对
    for (const a of answers) {
      if (String(a) === user) return { ok: true, reason: 'word', normalised: user };
    }

    // 「纯文字」判定：只由字母/汉字/空格/点组成（不含数字与运算符）。
    // 注意：这里必须提前收手 —— 把中文交给符号化简会让 nerdamer 卡死数分钟。
    const looksLikeWord = function (t) {
      return /^[a-zA-Z一-龥\s.]+$/.test(String(t));
    };
    // 含中文的答案必定是文字型答案 —— 绝不能送去符号化简（会把 nerdamer 卡死数分钟）
    if (answers.some(function (t) { return /[\u4e00-\u9fa5]/.test(String(t)); })) {
      if (uk && goldKinds[uk]) return { ok: true, reason: 'word', normalised: user };
      if (looksLikeWord(user)) return { ok: false, reason: 'word', normalised: user };
      return { ok: false, reason: 'word', normalised: user };
    }
    const allWords = answers.every(looksLikeWord);
    if (allWords) {
      if (uk && goldKinds[uk]) return { ok: true, reason: 'word', normalised: user };
      if (looksLikeWord(user)) return { ok: false, reason: 'word', normalised: user };
    }

    const goldIsWordOnly = answers.every(function (a) { return wordKind(a) !== null; }) &&
      (answers.length >= 2 || answers.some(function (a) {
        const k = wordKind(a); return k === 'dne' || k === 'div' || k === 'conv' || k === 'yes' || k === 'no';
      }));
    if (goldIsWordOnly) {
      if (uk && goldKinds[uk]) return { ok: true, reason: 'word', normalised: user };
      return { ok: false, reason: 'word', normalised: user };
    }

    /* --- 归一化 --- */
    const un = norm(user);
    if (!un) return { ok: false, reason: 'parse', normalised: '' };

    /* --- 变量白名单 --- */
    if (specObj.vars) {
      const allowed = new Set(specObj.vars);
      const ex = parse(un);
      if (!ex) return { ok: false, reason: 'parse', normalised: un };
      let vars = [];
      try { vars = ex.variables(); } catch (e) { vars = []; }
      for (const v of vars) {
        if (v === 'pi' || v === 'e') continue;
        if (!allowed.has(v)) return { ok: false, reason: 'var', normalised: un, unknownVar: v };
      }
    }

    /* --- 1. 精确字符串 --- */
    for (const a of answers) {
      if (norm(a) === un) return { ok: true, reason: 'exact', normalised: un };
    }

    /* --- 1a. 有序序列 / 字符集合（顶点序列、边列表等） ---
       这类答案的元素是名字而不是数学量，必须走字符串比较：
       'S-A-B-C-E' 若交给符号引擎会被当成 S 减 A 减 B … */
    if (specObj.seq === true) {
      for (const a of answers) {
        if (seqEqual(raw, a, specObj)) return { ok: true, reason: 'seq', normalised: String(raw).trim() };
      }
      return { ok: false, reason: 'seq', normalised: String(raw).trim() };
    }
    if (specObj.strset === true) {
      for (const a of answers) {
        if (strSetEqual(raw, a)) return { ok: true, reason: 'strset', normalised: String(raw).trim() };
      }
      return { ok: false, reason: 'strset', normalised: String(raw).trim() };
    }

    /* --- 1b. 多值答案（特征值等）：顺序无关的集合比较 ---
       例：答案 '2,5' 应接受 '5,2' / '2 5' / '2和5' / '2、5'，但拒绝 '2,3'。 */
    // 这里必须用原始输入 raw 而不是归一化后的 un：
    // norm('2 5') 会把空格当隐式乘法吃掉变成 '25'，多值信息就丢了。
    for (const a of answers) {
      if (multiEqual(raw, norm(a), specObj.rel)) return { ok: true, reason: 'multi', normalised: un };
    }

    /* --- 2. 集合 / 区间 / 不等式 --- */
    const specSetLike = specObj.setLike === true ||
      answers.some(function (a) { return /[{}[\]()]/.test(String(a)) && /inf|,|<=|>=/.test(canonSet(a)); });
    const hasRel = function (t) { return /<=|>=|<|>/.test(t); };

    if (specSetLike || hasRel(un)) {
      for (const a of answers) {
        const na = norm(a);
        if (!na) continue;
        if (setEqual(user, a) || setEqual(un, na)) return { ok: true, reason: 'set', normalised: un };
        if (relEquivalent(un, na)) return { ok: true, reason: 'set', normalised: un };
        // 区间 / 不等式 统一成解集指纹再比较
        const fu = setFingerprint(un), fg = setFingerprint(na);
        if (fu && fg && fu === fg && fu.indexOf('?') < 0) {
          return { ok: true, reason: 'set', normalised: un };
        }
      }
      if (specSetLike) return { ok: false, reason: 'set', normalised: un };
    }

    /* --- 2c. 明显不是数学式的输入：直接判错（避免把中文喂给符号化简而卡死） --- */
    const MATHISH = /[0-9+\-*/^()\[\]，,<>=\u03b1-\u03c9]|\b(?:pi|inf|e|theta|alpha|beta|phi|lambda|nan|sin|cos|tan|sec|csc|cot|log|sqrt|exp|abs|asin|acos|atan|sinh|cosh|tanh)\b/i;
    if (!MATHISH.test(user)) return { ok: false, reason: 'word', normalised: un };

    /* --- 3. 可解析性 --- */
    if (!parse(un)) return { ok: false, reason: 'parse', normalised: un };

    /* --- 4. 符号 / 数值 / 常量 ---
       预算保护：某些复杂表达式（嵌套对数、含 π 的超越式）的 simplify 可能耗时数十秒。
       这里给整次判定设一个时间上限，超时即放弃后续（更贵的）策略，避免卡住界面。
       阈值可通过 spec.timeBudget 覆盖。 */
    const budget = (specObj.timeBudget || 1500);
    const t0 = Date.now();
    const outOfTime = function () { return (Date.now() - t0) > budget; };

    const nOpts = { rel: specObj.rel || 1e-6 };
    let anyParsed = false;
    for (const a of answers) {
      const na = norm(a);
      if (!na || !parse(na)) continue;
      anyParsed = true;
      // 便宜的数值比较优先；贵重的符号化简放后面，且受时间预算约束
      if (numericEqual(un, na, nOpts)) return { ok: true, reason: 'numeric', normalised: un };
      if (outOfTime()) break;
      if (constEqual(un, na, specObj.rel)) return { ok: true, reason: 'const', normalised: un };
      if (outOfTime()) break;
      if (symbolicEqual(un, na, nOpts)) return { ok: true, reason: 'symbolic', normalised: un };
      if (outOfTime()) break;
    }
    if (!anyParsed) {
      // 纯字母的输入（如 asdf）没有任何可比对的对象 —— 报错更友好
      if (/^[a-zA-Z\u4e00-\u9fa5\s.]+$/.test(user)) {
        return { ok: false, reason: 'word', normalised: un };
      }
      return { ok: false, reason: 'parse', normalised: un };
    }
    return { ok: false, reason: 'value', normalised: un };
  }

  return {
    check: check,
    norm: norm,
    wordKind: wordKind,
    _internal: {
      symbolicEqual: symbolicEqual, numericEqual: numericEqual,
      constEqual: constEqual, setEqual: setEqual, canonSet: canonSet, multiEqual: multiEqual, splitMulti: splitMulti,
      seqEqual: seqEqual, strSetEqual: strSetEqual, splitSeq: splitSeq,
      isProseAnswer: isProseAnswer, proseEqual: proseEqual, textKey: textKey, specIsProse: specIsProse,
      cjkSimilar: cjkSimilar, cjkCover: cjkCover,
      normaliseTokens: normaliseTokens, NAMES: NAMES
    }
  };
});
