/* ==========================================================================
   FCMS 题库练习 — 前端逻辑（多学科）
   视图：首页（学科选择）/ 练习 / 证明与简答 / 模拟卷 / 统计
   进度与错题按学科分开保存在 localStorage，完全离线运行。
   ========================================================================== */
(function () {
  'use strict';

  /* ----------------------------------------------------------- 学科装配 */

  const SUBJECTS = (window.FCMS ? window.FCMS.all() : []);
  if (!SUBJECTS.length) {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.innerHTML = '<div style="padding:60px;text-align:center;font-family:sans-serif;color:#8a93a6">'
        + '没有载入任何学科题库。请检查 subjects/*.js 是否正常加载。</div>';
    });
    return;
  }

  // 全部题目（含学科标记），用于统计与快速查找
  const ALL_Q = [];
  const ALL_P = [];          // 证明题
  const BY_ID = {};
  const PROOF_BY_ID = {};
  SUBJECTS.forEach(function (sub) {
    (sub.questions || []).forEach(function (q) {
      const o = Object.assign({}, q, { subjectId: sub.id, subjectName: sub.name, kind: 'calc' });
      ALL_Q.push(o); BY_ID[o.id] = o;
    });
    // 证明 / 简答题：改为并进练习模式，作为「无需输入」的一类题目。
    // 仍单独存一份 ALL_P 便于统计与「只看证明题」筛选。
    (sub.proofs || []).forEach(function (q) {
      const o = Object.assign({}, q, {
        subjectId: sub.id, subjectName: sub.name, kind: 'proof',
        // 证明题没有输入空，用 topicName 复用主题分类
        blanks: []
      });
      ALL_P.push(o); PROOF_BY_ID[o.id] = o;
      BY_ID[o.id] = o;
    });
  });

  // 练习模式的题池 = 计算填空 + 证明简答（按学科）
  const SUBJ_ALL = {};
  SUBJECTS.forEach(function (sub) {
    SUBJ_ALL[sub.id] = (sub.questions || []).concat((sub.proofs || []).map(function (q) { return BY_ID[q.id]; }));
  });

  // 当前选中的学科（''=全部）
  let curSubject = localStorage.getItem('fcms.subject') || SUBJECTS[0].id;
  if (!SUBJECTS.some(function (x) { return x.id === curSubject; })) curSubject = SUBJECTS[0].id;

  function subject() { return SUBJECTS.find(function (x) { return x.id === curSubject; }) || SUBJECTS[0]; }
  function subjectById(id) { return SUBJECTS.find(function (x) { return x.id === id; }); }
  function qOf(id) { return BY_ID[id] || null; }
  function proofsOf(id) { return subjectById(id) ? (subjectById(id).proofs || []).map(function (q) { return BY_ID[q.id]; }) : []; }
  // 该学科「计算填空」题（不含证明）
  function calcOf(id) { return subjectById(id) ? (subjectById(id).questions || []) : []; }
  // 该学科「全部可练题」= 计算填空 + 证明简答
  function questionsOf(id) { return SUBJ_ALL[id] || []; }
  function papersOf(id) { return subjectById(id) ? (subjectById(id).papers || []) : []; }
  // 讲义精读（可能只有部分学科有）
  function notesOf(id) { return (window.FCMS && window.FCMS.notesOf) ? window.FCMS.notesOf(id) : []; }
  function hasNotes(id) { return (window.FCMS && window.FCMS.hasNotes) ? window.FCMS.hasNotes(id) : false; }
  // 是否存在任何带讲义的学科（用于决定是否显示「讲义精读」导航）
  function anyNotes() {
    return SUBJECTS.some(function (sub) { return hasNotes(sub.id); });
  }

  // 兼容旧的「全库」视图：当前学科的题
  function curQuestions() { return questionsOf(curSubject); }
  function curProofs() { return proofsOf(curSubject); }
  function curPapers() { return papersOf(curSubject); }

  // 供试卷结构引用的 bank 索引（按 id 直接查）
  // 题池索引：试卷结构里的 pool.qids 直接按 id 查；pool.topic 按主题筛。
  // 为了兼容 AMA1702 既有的 paper 结构（其中 pool.bank 写的是 'MIDPAST' 这类旧名），
  // 这里按旧名建立别名索引。
  /**
   * 题池（bank）。按学科 + id 前缀自动生成，例如：
   *   BANKS['AMA1751:la-1'] / BANKS['AMA1751:system']
   *   BANKS['COMP2012:cm-5'] / BANKS['COMP2012:counting']
   * 同时保留 AMA1702 的历史别名 MID / MIDPAST / FINAL / PAST。
   * 这样各学科的模拟卷都能用 { bank: 'la-1' } 这样的写法取题，
   * 而不用把前缀硬编码进 app.js。
   */
  const BANKS = {};
  (function () {
    SUBJECTS.forEach(function (sub) {
      const qs = (sub.questions || []).map(function (q) { return BY_ID[q.id]; }).filter(Boolean);
      // 按 id 前缀分组：la-1-03 → 'la-1'；mid-3-01 → 'mid'
      const byPrefix = {}, byTopic = {};
      qs.forEach(function (q) {
        const parts = String(q.id).split('-');
        const pre = parts.length > 2 ? parts.slice(0, -1).join('-') : parts[0];
        (byPrefix[pre] = byPrefix[pre] || []).push(q);
        if (q.topic) (byTopic[q.topic] = byTopic[q.topic] || []).push(q);
      });
      Object.keys(byPrefix).forEach(function (k) { BANKS[sub.id + ':' + k] = byPrefix[k]; });
      Object.keys(byTopic).forEach(function (k) { BANKS[sub.id + ':' + k] = byTopic[k]; });
      // 该学科全部题目
      BANKS[sub.id + ':*'] = qs;
    });
    // AMA1702 历史别名（旧试卷配置沿用）
    const ama = subjectById('AMA1702');
    if (ama) {
      BANKS.MID     = BANKS['AMA1702:mid'];
      BANKS.MIDPAST = BANKS['AMA1702:mp'];
      BANKS.FINAL   = BANKS['AMA1702:fin'];
      BANKS.PAST    = BANKS['AMA1702:past'];
    }
  })();

  /** 取题池：优先「本学科 + 名称」，再退到全局名称，最后退到该学科全部题目 */
  function resolveBank(name, subjectId) {
    if (!name) return null;
    if (subjectId && BANKS[subjectId + ':' + name]) return BANKS[subjectId + ':' + name];
    if (BANKS[name]) return BANKS[name];
    return null;
  }
  let paperSubjectId = null;

  const WEIGHTS = [
    { t: '第 1 题　连续 / 可导 / 分段函数', m: 10, topics: ['contdiff'] },
    { t: '第 2 题　各类积分（换元·部分分式·三角·广义）', m: 30, topics: ['integral'] },
    { t: '第 3 题　面积 / 弧长 / 旋转体体积', m: 30, topics: ['appl'] },
    { t: '第 4 题　幂级数与用级数算积分', m: 10, topics: ['series'] },
    { t: '第 5 题　定积分性质与对称性', m: 20, topics: ['symm'] }
  ];
  const MID_WEIGHTS = [
    { t: '模块一　集合 / 绝对值 / 不等式', m: 15, topics: ['set'] },
    { t: '模块二　函数 / 定义域 / 复合 / 反函数', m: 25, topics: ['function'] },
    { t: '模块三　极限 / 夹逼 / 连续 / 介值定理', m: 25, topics: ['limit', 'ivt'] },
    { t: '模块四　导数 / 链式法则 / 隐函数 / 高阶', m: 20, topics: ['deriv'] },
    { t: '模块五　中值定理 / 单调性 / 极值', m: 15, topics: ['topics'] }
  ];

  /* ------------------------------------------------------------ 本地存储 */

  const LS_KEY = 'ama1702.practice.v1';
  let store = { done: {}, wrong: {}, star: {}, reviewed: {}, todo: {} };
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) store = Object.assign(store, JSON.parse(raw));
  } catch (e) { /* ignore */ }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  /* --------------------------------------------------------------- 工具 */

  const $ = s => document.querySelector(s);
  const $$ = s => Array.prototype.slice.call(document.querySelectorAll(s));

  function render(el) {
    if (!window.renderMathInElement) return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        strict: false
      });
    } catch (e) { /* ignore */ }
  }

  /** 安全滚动：某些环境（无头浏览器 / 旧内核）没有 scrollIntoView */
  function safeScroll(el, opts) {
    if (el && typeof el.scrollIntoView === 'function') {
      try { el.scrollIntoView(opts || { behavior: 'smooth', block: 'start' }); } catch (e) {}
    }
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function isReviewed(id) { return !!store.reviewed[id]; }
  function isTodo(id) { return !!store.todo[id]; }
  function isCorrect(q) {
    const d = store.done[q.id];
    return !!(d && d.ok);
  }
  function isWrong(q) { return !!store.wrong[q.id]; }
  function isStar(q) { return !!store.star[q.id]; }

  /* ------------------------------------------------------------- 双语显示 */

  // 语言：'both'（默认，上英下中） | 'en' | 'zh'
  let lang = localStorage.getItem('fcms.lang') || 'both';
  function setLang(v) {
    lang = v;
    try { localStorage.setItem('fcms.lang', v); } catch (e) {}
  }

  function pickEn(subjectId, path, zh) {
    return (window.FCMS && window.FCMS.pick) ? window.FCMS.pick(subjectId, path, zh) : zh;
  }
  function isEnSub(subjectId) {
    return !!(window.FCMS && window.FCMS.enFor && window.FCMS.enFor(subjectId));
  }

  /** 上英下中的双语块。英文缺失时只显示中文。 */
  function bi(subjectId, path, zh, cls) {
    const en = pickEn(subjectId, path, null);
    const c = cls ? ' ' + cls : '';
    if (lang === 'en') return '<span class="bi' + c + '"><span class="bi-en">' + (en || zh) + '</span></span>';
    if (lang === 'zh' || !en || en === zh) return '<span class="bi' + c + '"><span class="bi-zh">' + zh + '</span></span>';
    return '<span class="bi' + c + '"><span class="bi-en">' + en + '</span><span class="bi-zh">' + zh + '</span></span>';
  }

  /** 纯文本双语（用于 textContent 场景），返回 {en, zh} 供调用方拼装 */
  function biText(subjectId, path, zh) {
    return { en: pickEn(subjectId, path, null), zh: zh };
  }

  /** 主题名（双语：英文 / 中文） */
  function topicLabel(q) {
    const sub = subjectById(q.subjectId);
    if (!sub) return q.topicName;
    const t = (sub.topics || []).find(function (x) { return x.id === q.topic; });
    const zh = q.topicName || (t && t.name) || q.topic;
    const en = pickEn(q.subjectId, ['topics', zh], null);
    if (!en || lang === 'zh') return zh;
    if (lang === 'en') return en;
    return en + ' / ' + zh;
  }

  /** 填空标签：上英下中（行内） */
  function blankLabel(q, i) {
    const b = (q.blanks || [])[i] || {};
    const ev = pickEn(q.subjectId, ['questions', q.id, 'blanks', i], null);
    if (!b.label) {
      const d = '答案 ' + (i + 1);
      const de = ev || ('Answer ' + (i + 1));
      return lang === 'zh' ? esc(d)
        : '<span class="bi bi-inline"><span class="bi-en">' + esc(de) + '</span>' +
          (lang === 'en' ? '' : '<span class="bi-zh">' + esc(d) + '</span>') + '</span>';
    }
    if (!ev || lang === 'zh') return esc(b.label);
    if (lang === 'en') return esc(ev);
    return '<span class="bi bi-inline"><span class="bi-en">' + esc(ev) + '</span>' +
      '<span class="bi-zh">' + esc(b.label) + '</span></span>';
  }

  /**
   * 解答/证明步骤的英文翻译层格式为「稀疏数组」：
   *   layer.questions[id].solution = [ {i: 原步骤下标, en: '英文'} , ... ]
   * 用原下标 i 对齐，因此未翻译的步骤（纯公式行）自动保持中文原样。
   */
  function stepEn(subjectId, qid, seg, idx) {
    const e = (window.FCMS && window.FCMS.enFor) ? window.FCMS.enFor(subjectId) : null;
    if (!e) return null;
    // 两种翻译都存在 questions[qid] 下：
    //   .solution[]  —— 计算题的解答步骤
    //   .proof[]     —— 证明题的证明步骤
    const qe = e.questions && e.questions[qid];
    const bucket = qe ? qe[seg === 'solution' ? 'solution' : 'proof'] : null;
    if (!bucket) return null;
    for (let k = 0; k < bucket.length; k++) {
      if (bucket[k] && bucket[k].i === idx && typeof bucket[k].en === 'string' && bucket[k].en) return bucket[k].en;
    }
    return null;
  }

  /** 解答步骤：有英文翻译时上下并列；纯公式行原样输出 */
  function stepBi(q, si, zh) {
    const ev = stepEn(q.subjectId, q.id, 'solution', si);
    if (!ev || lang === 'zh' || ev === zh) return zh;
    if (lang === 'en') return ev;
    return '<span class="bi bi-block"><span class="bi-en-part">' + ev +
      '</span><span class="bi-zh-part">' + zh + '</span></span>';
  }

  /** 证明步骤同样处理 */
  function proofStepBi(q, si, zh) {
    const ev = stepEn(q.subjectId, q.id, 'proof', si);
    if (!ev || lang === 'zh' || ev === zh) return zh;
    if (lang === 'en') return ev;
    return '<span class="bi bi-block"><span class="bi-en-part">' + ev +
      '</span><span class="bi-zh-part">' + zh + '</span></span>';
  }

  /** 证明题的「已知/提示」也做双语 */
  function givenBi(q) {
    if (!q.given) return '';
    const en = pickEn(q.subjectId, ['proofs', q.id, 'given'], null);
    const zh = '<b>已知 / 提示 Given：</b>' + q.given;
    if (!en || lang === 'zh') return zh;
    if (lang === 'en') return '<b>Given / Hint:</b>' + en;
    return '<div class="bi-block"><div class="bi-en-part"><b>Given / Hint:</b>' + en +
      '</div><div class="bi-zh-part">' + zh + '</div></div>';
  }

  /** 证明题陈述：上英下中 */
  function statementBi(q) {
    const en = pickEn(q.subjectId, ['proofs', q.id, 'statement'], null);
    const zh = q.statement || '';
    if (!en || lang === 'zh') return zh;
    if (lang === 'en') return en;
    return '<div class="bi-block"><div class="bi-en-part">' + en + '</div><div class="bi-zh-part">' + zh + '</div></div>';
  }

  function record(q, ok) {
    store.done[q.id] = { ok: ok, at: Date.now(), attempts: ((store.done[q.id] || {}).attempts || 0) + 1 };
    if (ok) delete store.wrong[q.id];
    else store.wrong[q.id] = Date.now();
    save();
    updateProgressChip();
  }

  function updateProgressChip() {
    const qs = curQuestions(), ps = curProofs();
    const total = qs.length + ps.length;
    const ok = qs.filter(isCorrect).length + ps.filter(function (q) { return isReviewed(q.id); }).length;
    $('#progressChip').textContent = curSubject + '　' + ok + ' / ' + total;
  }

  /* ------------------------------------------------------------ 视图切换 */

  let currentView = 'home';
  // 视图的中文/英文名，用于面包屑
  var VIEW_NAME = {
    home:     ['首页', 'Home'],
    practice: ['练习模式', 'Practice'],
    notes:    ['讲义精读', 'Study Notes'],
    exam:     ['模拟卷', 'Mock Papers'],
    stats:    ['统计', 'Statistics']
  };

  function showView(v) {
    currentView = v;
    ['home', 'practice', 'notes', 'exam', 'stats'].forEach(name => {
      $('#view-' + name).classList.toggle('hidden', name !== v);
    });
    // 顶栏只保留「首页」一个按钮：首页时高亮，进入模块后取消高亮并显示当前位置
    $$('.mode-btn').forEach(b => b.classList.toggle('active', v === 'home' && b.dataset.view === 'home'));
    var crumb = $('#navCrumb');
    if (crumb) {
      if (v === 'home') { crumb.textContent = ''; crumb.classList.remove('show'); }
      else {
        var sub = subjectById(curSubject);
        var nm = VIEW_NAME[v] || ['', ''];
        var extra = (v === 'practice') ? '' : ((sub ? sub.id + ' ' + sub.name + ' · ' : ''));
        crumb.textContent = '›  ' + extra + nm[0] + ' ' + nm[1];
        crumb.classList.add('show');
      }
    }
    if (v === 'stats') renderStats();
    if (v === 'home') renderHome();
    if (v === 'exam') renderPaperPick();
    if (v === 'notes') renderNotes();
  }

  /* --------------------------------------------------------------- 首页 */

  function renderHome() {
    // 学科选择卡片
    const cards = SUBJECTS.map(function (sub) {
      const qs = sub.questions || [], ps = sub.proofs || [], pp = sub.papers || [];
      const okQ = qs.filter(isCorrect).length;
      const okP = ps.filter(function (q) { return isReviewed(q.id); }).length;
      const total = qs.length + ps.length;
      const pct = total ? Math.round((okQ + okP) / total * 100) : 0;
      const isProofSub = false;
      const enName = pickEn(sub.id, ['name'], null);
      const enDesc = pickEn(sub.id, ['desc'], null);
      return `<div class="subj-card" data-subject="${esc(sub.id)}" style="--sc:${esc(sub.color || '#2f5bd7')}">
        <div class="subj-head">
          <span class="subj-id">${esc(sub.id)}</span>
          <span class="subj-name">${esc(sub.name)}</span>
        </div>
        <div class="subj-full">${esc(sub.fullName || '')}</div>
        <div class="subj-desc">${esc(enDesc || sub.desc || '')}${enDesc && lang !== 'en' ? '<br><span style="color:#98a1b3">' + esc(sub.desc || '') + '</span>' : ''}</div>
        <div class="subj-stats">
          <span>填空 <b>${qs.length}</b></span>
          <span>证明 <b>${ps.length}</b></span>
          ${pp.length ? `<span>模拟卷 <b>${pp.length}</b></span>` : ''}
          <span>已掌握 <b>${okQ + okP}</b>/${total}（${pct}%）</span>
        </div>
        <div class="subj-stats" style="font-size:12px;color:#98a1b3">共 ${total} 题可练（填空需输入答案，证明题点开看完整过程）</div>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="subj-topics">${(sub.topics || []).slice(0, 6).map(function (t) {
          const en = pickEn(sub.id, ['topics', t.name], null);
          return esc(en ? (en + ' / ' + t.name) : t.name);
        }).join(' · ')}${(sub.topics || []).length > 6 ? ' …' : ''}</div>

        <div class="subj-actions">
          <button class="subj-go" data-act="practice"><b>练习</b><i>Practice</i></button>
          ${hasNotes(sub.id) ? '<button class="subj-go alt" data-act="notes"><b>讲义精读</b><i>Study Notes</i></button>' : ''}
          ${pp.length ? '<button class="subj-go alt" data-act="paper"><b>模拟卷</b><i>Mock Paper</i></button>' : ''}
          ${(sub.proofs || []).length ? '<button class="subj-go alt" data-act="proof"><b>证明题</b><i>Proofs</i></button>' : ''}
        </div>
      </div>`;
    }).join('');

    const totalQ = ALL_Q.length, totalP = ALL_P.length;
    $('#moduleCards').innerHTML = cards;

    // 统计条
    const bar = document.getElementById('homeTotals');
    if (bar) {
      bar.textContent = '共 ' + SUBJECTS.length + ' 个学科 · 填空 ' + totalQ + ' 题 · 证明简答 ' + totalP + ' 题';
    }

    // 学科卡 = 该学科的模块目录。点具体入口按钮进入对应模块；
    // 整卡点击的默认行为 = 进入「练习」，且把筛选重置为「全部主题」，
    // 避免「总是打开上次停留的那道题」造成歧义。
    $$('#moduleCards .subj-card').forEach(function (c) {
      const sid = c.dataset.subject;
      const enter = function (act) {
        curSubject = sid;
        try { localStorage.setItem('fcms.subject', curSubject); } catch (e) {}
        if ($('#subjectSelect')) $('#subjectSelect').value = curSubject;

        if (act === 'notes') { showView('notes'); renderNotes(); return; }

        // 练习 / 证明 / 模拟卷 都先准备好该学科的题目池，并重置筛选
        if ($('#topicSelect')) $('#topicSelect').value = 'all';
        if ($('#onlyWrong')) $('#onlyWrong').checked = false;
        if ($('#onlyStar')) $('#onlyStar').checked = false;
        if ($('#onlyProof')) $('#onlyProof').checked = (act === 'proof');
        buildTopicSelect(); buildQList();

        if (act === 'paper') { showView('exam'); renderPaperPick(); return; }
        showView('practice');
        const f = filtered();
        if (f.length) openQuestion(f[0].id);
        else $('#qpanel').innerHTML = '<div class="empty">该学科下暂无题目</div>';
      };
      c.addEventListener('click', function (ev) {
        const btn = ev.target.closest && ev.target.closest('[data-act]');
        enter(btn ? btn.dataset.act : 'practice');
      });
    });
  }

  /* --------------------------------------------------------------- 练习 */

  let curId = null;

  function filterTopic() { return $('#topicSelect').value; }

  function filtered() {
    const top = filterTopic();
    const onlyWrong = $('#onlyWrong').checked, onlyStar = $('#onlyStar').checked;
    const onlyProof = $('#onlyProof') && $('#onlyProof').checked;
    return curQuestions().filter(q => {
      if (top !== 'all' && q.topic !== top) return false;
      if (onlyProof && q.kind !== 'proof') return false;
      if (onlyWrong && !isWrong(q)) return false;
      if (onlyStar && !isStar(q)) return false;
      return true;
    });
  }

  function buildSubjectSelect() {
    const sel = $('#subjectSelect');
    if (!sel) return;
    sel.innerHTML = SUBJECTS.map(function (sub) {
      const n = (sub.questions || []).length + (sub.proofs || []).length;
      return '<option value="' + esc(sub.id) + '">' + esc(sub.id + ' ' + sub.name) + ' (' + n + ')</option>';
    }).join('');
    sel.value = curSubject;
  }

  function buildTopicSelect() {
    const sub = subject();
    const pool = curQuestions();
    // 用学科定义里的主题顺序，只显示有题的主题
    const ordered = (sub.topics || []).filter(function (t) {
      return pool.some(function (q) { return q.topic === t.id; });
    });
    // 题库里有但学科没定义的兜底
    pool.forEach(function (q) {
      if (!ordered.some(function (t) { return t.id === q.topic; })) {
        ordered.push({ id: q.topic, name: q.topicName || q.topic });
      }
    });
    const enAll = isEnSub(sub.id);
    const allTxt = lang === 'en' ? 'All topics' : (lang === 'zh' ? '全部主题' : 'All topics 全部主题');
    $('#topicSelect').innerHTML = '<option value="all">' + allTxt + ' (' + pool.length + ')</option>' +
      ordered.map(function (t) {
        const n = pool.filter(function (q) { return q.topic === t.id; }).length;
        const en = enAll ? pickEn(sub.id, ['topics', t.name], null) : null;
        let label = (en && lang !== 'zh') ? (lang === 'en' ? en : en + ' / ' + t.name) : t.name;
        return '<option value="' + esc(t.id) + '">' + esc(label) + ' (' + n + ')</option>';
      }).join('');
  }

  function buildQList() {
    const qs = filtered();
    $('#qlist').innerHTML = qs.length ? qs.map(q => {
      const isPf = q.kind === 'proof';
      const cls = isPf ? (isReviewed(q.id) ? 'ok' : '') : (isCorrect(q) ? 'ok' : (isWrong(q) ? 'bad' : ''));
      const mark = isPf ? '<span class="pfmark" title="证明题">证</span>' : '';
      return `<div class="qlist-item ${cls} ${q.id === curId ? 'active' : ''}" data-id="${esc(q.id)}">
        <span class="dot"></span>
        ${mark}
        <span>${esc(q.topicName)}</span>
        <span class="qid">${esc(q.id.replace(/^(mid|fin|mid_past|mp|la|cm|cp|lp)-/, ''))}</span>
      </div>`;
    }).join('') : '<div class="empty" style="padding:20px">没有符合条件的题目</div>';
    $$('#qlist .qlist-item').forEach(el => {
      el.addEventListener('click', () => openQuestion(el.dataset.id));
    });
  }

  const DIFF_TEXT = { 1: '基础', 2: '中等', 3: '较难', 4: '困难', 5: '挑战' };
  const DIFF_EN = { 1: 'basic', 2: 'moderate', 3: 'harder', 4: 'difficult', 5: 'challenging' };
  function diffText(d) {
    const zh = DIFF_TEXT[d] || d, en = DIFF_EN[d] || '';
    if (lang === 'zh') return zh;
    if (lang === 'en') return en || zh;
    return en ? ('难度 ' + zh + ' / ' + en) : zh;
  }

  function openQuestion(id) {
    const q = BY_ID[id];
    if (!q) return;
    curId = id;
    buildQList();
    if (q.kind === 'proof') return openProof(q);

    const panel = $('#qpanel');
    panel.innerHTML = `<div class="qcard">
      <div class="qhead">
        <span class="tag">${esc(q.moduleName)}</span>
        <span class="tag">${esc(topicLabel(q))}</span>
        <span class="tag diff">${diffText(q.difficulty)}</span>
        <span class="tag weight">${q.weight} 分权重</span>
        ${q.examRef ? `<span class="tag examref">${esc(q.examRef)}</span>` : ''}
        <button class="star-btn ${isStar(q) ? 'on' : ''}" id="starBtn">${isStar(q) ? '★ 已标记' : '☆ 标记'}</button>
      </div>
      <div class="prompt" id="prompt"></div>
      <div class="blanks" id="blanks"></div>
      <div class="actions">
        <button class="btn primary" id="checkBtn">检查答案</button>
        <button class="btn" id="showBtn">查看解答</button>
        <button class="btn ghost" id="clearBtn">清空输入</button>
      </div>
      <div class="verdict" id="verdict"></div>
      <div class="solution hidden" id="solution"></div>
      <div class="navbar">
        <button class="btn" id="prevBtn">← 上一题</button>
        <button class="btn" id="nextBtn">下一题 →</button>
      </div>
    </div>`;

    // 题面双语（上英下中；英文缺失时只显示中文）
    const enPrompt = pickEn(q.subjectId, ['questions', q.id, 'prompt'], null);
    if (lang === 'zh' || !enPrompt) {
      $('#prompt').innerHTML = q.prompt;
    } else if (lang === 'en') {
      $('#prompt').innerHTML = enPrompt;
    } else {
      $('#prompt').innerHTML = '<div class="bi-block"><div class="bi-en-part">' + enPrompt +
        '</div><div class="bi-zh-part">' + q.prompt + '</div></div>';
    }

    // 组装「可输入的空」与「只需阅读的小问」
    const inputIdx = {};      // 原 blanks 下标 -> 输入框序号
    let nInput = 0;
    const rows = [];
    (q.parts || []).forEach((pt, pi) => {
      if (pt && pt.label) rows.push(`<div class="part-title">${esc(pt.label)}</div>`);
      if (pt && pt.prompt) rows.push(`<div class="part-prompt">${pt.prompt}</div>`);
      const idxs = (pt && pt.blanks) ? pt.blanks : [];
      idxs.forEach(bi => {
        const b = q.blanks[bi];
        inputIdx[bi] = nInput;
        rows.push(`<div class="blank-row">
            <span class="blank-label">${blankLabel(q, bi)}</span>
            <input type="text" id="blank-${bi}" data-idx="${nInput}" autocomplete="off" spellcheck="false"
                   placeholder="输入答案，例如 1/2 或 sqrt(2)">
          </div>`);
        if (b.hint) rows.push(`<div class="blank-hint">提示：${esc(b.hint)}</div>`);
        nInput++;
      });
    });
    if (!q.parts) {   // 没有 parts 时按老格式平铺
      q.blanks.forEach((b, i) => {
        inputIdx[i] = nInput++;
        rows.push(`<div class="blank-row">
            <span class="blank-label">${blankLabel(q, i)}</span>
            <input type="text" id="blank-${i}" autocomplete="off" spellcheck="false"
                   placeholder="输入答案，例如 1/2 或 sqrt(2)">
          </div>`);
        if (b.hint) rows.push(`<div class="blank-hint">提示：${esc(b.hint)}</div>`);
      });
    }
    $('#blanks').innerHTML = rows.join('');
    q._inputIdx = inputIdx;
    if (!nInput) {
      $('#checkBtn').disabled = true;
      $('#checkBtn').textContent = '本题只给参考答案';
    }

    $('#solution').innerHTML = `
      <h4>参考解答 <span style="font-weight:400;color:#98a1b3;font-size:13px">Reference solution</span></h4>
      <ol>${q.solution.map(function (st, si) { return '<li>' + stepBi(q, si, st) + '</li>'; }).join('')}</ol>
      <div class="answer-key">
        ${q.blanks.map((b, i) => {
          const spec = b.answer;
          const vals = [].concat(typeof spec === 'string' ? spec : (spec.exact || []));
          return `<div><span class="k">${esc(b.label || ('答案 ' + (i + 1)))}：</span>
                  <span class="v">${esc(vals.join('　或　'))}</span></div>`;
        }).join('')}
      </div>`;

    $('#checkBtn').disabled = false;
    $('#checkBtn').textContent = '检查答案';
    $('#starBtn').addEventListener('click', () => {
      if (isStar(q)) delete store.star[q.id]; else store.star[q.id] = Date.now();
      save();
      $('#starBtn').classList.toggle('on', isStar(q));
      $('#starBtn').textContent = isStar(q) ? '★ 已标记' : '☆ 标记';
      buildQList();
    });
    $('#checkBtn').addEventListener('click', () => checkCurrent(q));
    $('#showBtn').addEventListener('click', () => $('#solution').classList.toggle('hidden'));
    $('#clearBtn').addEventListener('click', () => {
      q.blanks.forEach((b, i) => { const el = $('#blank-' + i); if (el) { el.value = ''; el.classList.remove('ok', 'bad'); } });
      $('#verdict').classList.remove('show');
    });
    $('#prevBtn').addEventListener('click', () => step(-1));
    $('#nextBtn').addEventListener('click', () => step(1));

    // 回车即检查；已有记录则回填
    q.blanks.forEach((b, i) => {
      const el = $('#blank-' + i);
      el.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); checkCurrent(q); } });
    });
    const saved = store.done[q.id];
    if (saved && saved.lastInput) {
      saved.lastInput.forEach((v, i) => { const el = $('#blank-' + i); if (el) el.value = v; });
    }
    render(panel);
  }

  function step(d) {
    const qs = filtered();
    const i = qs.findIndex(q => q.id === curId);
    if (i < 0) return;
    const j = (i + d + qs.length) % qs.length;
    openQuestion(qs[j].id);
  }

  /** 证明 / 简答题：练习模式里的一种题，无需输入，直接读完整过程 */
  function openProof(q) {
    const panel = $('#qpanel');
    panel.innerHTML = `<div class="qcard proof-qcard">
      <div class="qhead">
        <span class="tag" style="background:#fff4e0;color:#8a5a00">${lang === 'zh' ? '证明 / 简答' : (lang === 'en' ? 'Proof / Short answer' : 'Proof 证明')}</span>
        <span class="tag">${esc(q.topicName)}</span>
        ${q.year ? `<span class="tag examref">${esc(q.year)}</span>` : ''}
        <span class="tag weight">${q.marks || '—'} 分</span>
        <span style="flex:1"></span>
        <button class="star-btn ${isStar(q) ? 'on' : ''}" id="starBtn">${isStar(q) ? '★ 已标记' : '☆ 标记'}</button>
      </div>
      <h3 class="proof-title">${esc(pickEn(q.subjectId, ['proofs', q.id, 'title'], null) || q.title || '')}</h3>
      <div class="prompt" id="prompt">${statementBi(q)}</div>
      ${q.given ? '<div class="proof-given"><b>已知 / 提示 Given：</b>' + q.given + '</div>' : ''}
      <div class="actions">
        <button class="btn primary" id="showBtn">查看完整证明</button>
        <button class="btn" id="markBtn">${isReviewed(q.id) ? '✓ 已掌握' : '标记为已掌握'}</button>
        <button class="btn ghost" id="todoBtn">${isTodo(q.id) ? '★ 待复习' : '标记待复习'}</button>
      </div>
      <div class="solution hidden" id="solution">
        <h4>参考证明 / 解答 <span style="font-weight:400;color:#98a1b3;font-size:13px">Reference proof</span></h4>
        <ol class="proof-steps">${q.proof.map(function (st, si) { return '<li>' + proofStepBi(q, si, st) + '</li>'; }).join('')}</ol>
        ${q.conclusion ? '<div class="conclusion"><b>结论：</b>' + q.conclusion + '</div>' : ''}
        <div class="mark-note">证明题不参与填空题正确率统计</div>
      </div>
      <div class="navbar">
        <button class="btn" id="prevBtn">← 上一题</button>
        <button class="btn" id="nextBtn">下一题 →</button>
      </div>
    </div>`;

    $('#starBtn').addEventListener('click', function () {
      if (isStar(q)) delete store.star[q.id]; else store.star[q.id] = Date.now();
      save(); updateProgressChip(); openProof(q);
    });
    $('#markBtn').addEventListener('click', function () {
      if (isReviewed(q.id)) delete store.reviewed[q.id]; else store.reviewed[q.id] = Date.now();
      save(); updateProgressChip(); buildQList(); openProof(q);
    });
    $('#todoBtn').addEventListener('click', function () {
      if (isTodo(q)) delete store.todo[q.id]; else store.todo[q.id] = Date.now();
      save(); updateProgressChip(); openProof(q);
    });
    $('#showBtn').addEventListener('click', function () {
      const sol = $('#solution');
      sol.classList.toggle('hidden');
      const shown = !sol.classList.contains('hidden');
      $('#showBtn').textContent = shown ? '收起证明' : '查看完整证明';
      if (shown) render(sol);
    });
    $('#prevBtn').addEventListener('click', function () { step(-1); });
    $('#nextBtn').addEventListener('click', function () { step(1); });
    render(panel);
    panel.scrollTop = 0;
  }

  function checkCurrent(q) {
    // 只对「需要输入的」空做判定
    const graded = [];
    q.blanks.forEach((b, i) => {
      const el = $('#blank-' + i);
      if (el) graded.push({ i: i, b: b, el: el });
    });
    if (!graded.length) return;
    const results = graded.map(g => {
      const r = window.Grader.check(g.el.value, g.b.answer);
      g.el.classList.remove('ok', 'bad');
      g.el.classList.add(r.ok ? 'ok' : 'bad');
      return r;
    });
    const vals = graded.map(g => g.el.value);
    const allOk = results.every(r => r.ok);

    const v = $('#verdict');
    v.classList.add('show');
    v.classList.toggle('ok', allOk);
    v.classList.toggle('bad', !allOk);

    if (allOk) {
      v.innerHTML = `<b>✓ 全部正确！</b><div class="detail">你的答案与标准答案等价。</div>`;
    } else {
      const bad = results.map((r, i) => (!r.ok ? i : -1)).filter(i => i >= 0);
      const reasons = bad.map(i => {
        const r = results[i];
        const label = graded[i].b.label || ('答案 ' + (graded[i].i + 1));
        const why = {
          empty: '还没有填写',
          parse: '无法识别这个写法，请检查括号与函数名',
          var: '出现了不该有的未知量「' + (r.unknownVar || '?') + '」',
          value: '与标准答案不等价',
          set: '区间 / 解集写法与标准答案不一致',
          word: '这题要填数值或表达式'
        }[r.reason] || '与标准答案不等价';
        return `<li><b>${esc(label)}</b>：${esc(why)}
          <span style="opacity:.7">（你输入：${esc(vals[i] || '空')}）</span></li>`;
      }).join('');
      v.innerHTML = `<b>✗ 部分答案不正确</b><div class="detail"><ul style="margin:6px 0 0;padding-left:20px">${reasons}</ul></div>`;
    }
    // 保存本次输入，便于回看
    store.done[q.id] = Object.assign({}, store.done[q.id], { lastInput: vals });
    record(q, allOk);
    buildQList();
  }

  /* ------------------------------------------------------------- 模拟卷 */

  let examState = null;
  let examTimer = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /** 从试卷结构中抽题：按 pools 优先级依次取，先满足 qids 再按 topic */
  function pickForSection(sec, used) {
    const chosen = [];
    // 题池：优先用试卷所属学科的题库
    const pool0 = questionsOf(sec.subjectId || paperSubjectId || curSubject);
    for (const pool of sec.pools) {
      let src;
      if (pool.bank) {
        src = resolveBank(pool.bank, sec.subjectId || paperSubjectId || curSubject) || pool0;
      } else {
        src = pool0;
      }
      let cands;
      if (pool.qids) {
        cands = pool.qids.map(id => src.find(q => q.id === id)).filter(Boolean);
      } else if (pool.topic) {
        cands = src.filter(q => q.topic === pool.topic);
      } else {
        cands = src.slice();
      }
      cands = shuffle(cands);
      for (const q of cands) {
        if (chosen.length >= sec.count) break;
        if (used.has(q.id)) continue;
        if (chosen.some(x => x.id === q.id)) continue;
        chosen.push(q);
      }
      if (chosen.length >= sec.count) break;
    }
    return chosen;
  }

  /** 按官方配分把大题分数分摊到小题，再分摊到每个空 */
  function assignMarks(sec, qs) {
    if (!qs.length) return [];
    const totalW = qs.reduce((s, q) => s + (q.weight || 1), 0);
    return qs.map(q => {
      const qMarks = sec.marks * (q.weight || 1) / totalW;
      const n = Math.max(1, q.blanks.length);
      return { q: q, marks: qMarks, perBlank: qMarks / n };
    });
  }

  /** 按官方结构生成一份模拟卷 */
  function buildPaper(paper) {
    const used = new Set();
    const sections = [];
    paper.sections.forEach(sec => {
      const qs = pickForSection(sec, used);
      qs.forEach(q => used.add(q.id));
      sections.push({ sec: sec, items: assignMarks(sec, qs) });
    });
    return { paper: paper, sections: sections };
  }

  function renderPaperPick() {
    const box = $('#paperPick');
    if (!box) return;
    const PAPERS = curPapers();
    if (!PAPERS.length) { box.innerHTML = '<div class="empty">本学科暂无按官方结构编排的模拟卷。<br>（' + esc(subject().id) + ' 的题目请在「练习模式」按主题刷。）</div>'; return; }
    box.innerHTML = PAPERS.map(p => {
      const sum = p.sections.reduce((a, s) => a + s.marks, 0);
      const cnt = p.sections.reduce((a, s) => a + s.count, 0);
      return `<div class="paper-card" data-paper="${esc(p.id)}">
        <h4>${esc(p.name)}</h4>
        <div class="meta">${p.sections.length} 道大题 · ${cnt} 道小题 · 满分 ${sum} 分 · ${p.time} 分钟</div>
        <div class="note">${esc(p.note)}</div>
        <div class="struct">${p.sections.map(s =>
          `<span><b>${esc(s.no)}</b>${esc(s.title)}<em style="margin-left:auto;font-style:normal;color:#8a93a6">${s.marks} 分</em></span>`
        ).join('')}</div>
        <div class="go">开始答题 →</div>
      </div>`;
    }).join('');
    box.querySelectorAll('.paper-card').forEach(c => {
      c.addEventListener('click', () => {
        const p = PAPERS.find(x => x.id === c.dataset.paper);
        if (p) launchPaper(p);
      });
    });
  }

  function launchPaper(paper) {
    paperSubjectId = paper.subjectId || curSubject;
    const built = buildPaper(paper);
    examState = {
      paper: paper, built: built, submitted: false,
      remain: paper.time * 60, blankTotal: 0
    };
    built.sections.forEach(s => s.items.forEach(it => { examState.blankTotal += it.q.blanks.length; }));

    $('#examIntro').classList.add('hidden');
    const body = $('#examBody');
    body.classList.remove('hidden');

    let html = `<div class="exam-head">
        <span class="score" id="examScore">总分 —</span>
        <span class="timer" id="examTimer"></span>
        <span class="spacer"></span>
        <button class="btn primary" id="submitExam">交卷并评分</button>
        <button class="btn" id="quitExam">退出</button>
      </div>
      <div class="exam-head" style="position:static;display:block">
        <div style="font-weight:700;margin-bottom:6px">${esc(paper.name)}</div>
        <div style="font-size:13px;color:#4a5468">${esc(paper.note)}</div>
      </div>`;

    let n = 0;
    built.sections.forEach(s => {
      html += `<div class="exam-q">
        <div class="part-head" style="font-size:14px;color:var(--brand-dk)">
          ${esc(s.sec.no)} ${esc(s.sec.title)}　（${s.sec.marks} 分）
        </div>`;
      if (!s.items.length) {
        html += `<div class="qcard" style="color:#8a93a6">本题库暂无匹配的题目（不影响其他大题的满分计算）</div>`;
      }
      s.items.forEach(it => {
        n++;
        const q = it.q;
        html += `<div class="qcard" style="margin-bottom:12px" data-exam-index="${n - 1}" data-qid="${esc(q.id)}">
          <div class="qhead">
            <span class="tag">第 ${n} 小题</span>
            <span class="tag">${esc(q.topicName)}</span>
            <span class="tag weight">${it.marks.toFixed(1)} 分</span>
            ${q.examRef ? `<span class="tag examref">${esc(q.examRef)}</span>` : ''}
          </div>
          <div class="prompt ex-prompt" data-qid="${esc(q.id)}"></div>
          <div class="blanks">
            ${q.blanks.map((b, i) => `
              <div class="blank-row">
                <span class="blank-label">${esc(b.label || ('答案 ' + (i + 1)))}</span>
                <input type="text" data-qid="${esc(q.id)}" data-bi="${i}" autocomplete="off" spellcheck="false"
                       placeholder="输入答案">
                <span style="font-size:12px;color:#8a93a6">${it.perBlank.toFixed(1)} 分</span>
              </div>`).join('')}
          </div>
        </div>`;
      });
      html += '</div>';
    });
    body.innerHTML = html;

    // 渲染题面（含公式）
    built.sections.forEach(s => s.items.forEach(it => {
      const el = body.querySelector('.ex-prompt[data-qid="' + it.q.id + '"]');
      if (el) el.innerHTML = it.q.prompt;
    }));
    body.querySelectorAll('input[data-qid]').forEach(inp => {
      inp.addEventListener('keydown', ev => { if (ev.key === 'Enter') ev.preventDefault(); });
    });

    $('#quitExam').addEventListener('click', quitExam);
    $('#submitExam').addEventListener('click', () => submitExam(false));
    render(body);
    tick();
    if (examTimer) clearInterval(examTimer);
    examTimer = setInterval(tick, 1000);
  }

  function tick() {
    if (!examState || examState.submitted) return;
    examState.remain--;
    if (examState.remain <= 0) { examState.remain = 0; submitExam(true); return; }
    const m = Math.floor(examState.remain / 60), sec = examState.remain % 60;
    const el = $('#examTimer');
    if (el) el.textContent = '剩余 ' + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
  }

  function quitExam() {
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    examState = null;
    $('#examBody').classList.add('hidden');
    $('#examBody').innerHTML = '';
    $('#examIntro').classList.remove('hidden');
  }

  function submitExam(auto) {
    if (!examState || examState.submitted) return;
    examState.submitted = true;
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    const body = $('#examBody');

    let earned = 0, total = 0;
    const rows = [];

    examState.built.sections.forEach(s => {
      let secEarned = 0, secTotal = 0;
      s.items.forEach(it => {
        const q = it.q;
        let qEarned = 0;
        q.blanks.forEach((b, i) => {
          const inp = body.querySelector('input[data-qid="' + q.id + '"][data-bi="' + i + '"]');
          const r = window.Grader.check(inp ? inp.value : '', b.answer);
          if (inp) { inp.classList.remove('ok', 'bad'); inp.classList.add(r.ok ? 'ok' : 'bad'); }
          if (r.ok) qEarned += it.perBlank;
        });
        secEarned += qEarned;
        secTotal += it.marks;
        total += it.marks;
        earned += qEarned;
        rows.push({ sec: s.sec, q: q, marks: it.marks, earned: qEarned, ok: qEarned >= it.marks - 1e-9 });
        record(q, qEarned >= it.marks - 1e-9);
      });
      s.secEarned = secEarned;
      s.secTotal = secTotal;
    });

    // 逐题展开参考解答
    rows.forEach(r => {
      const holder = body.querySelector('.ex-prompt[data-qid="' + r.q.id + '"]');
      if (!holder) return;
      const card = holder.closest('.qcard');
      if (!card || card.querySelector('.solution')) return;
      const div = document.createElement('div');
      div.className = 'solution';
      div.innerHTML = `<h4>参考解答（本题 ${r.marks.toFixed(1)} 分，得 ${r.earned.toFixed(1)} 分）</h4>
        <ol>${r.q.solution.map(function (x, xi) { return '<li>' + stepBi(r.q, xi, x) + '</li>'; }).join('')}</ol>
        <div class="answer-key">${r.q.blanks.map((b, i) => {
          const spec = b.answer;
          const vals = [].concat(typeof spec === 'string' ? spec : (spec.exact || []));
          return `<div><span class="k">${esc(b.label || ('答案 ' + (i + 1)))}：</span><span class="v">${esc(vals.join('　或　'))}</span></div>`;
        }).join('')}</div>`;
      card.appendChild(div);
      render(div);
    });

    const pct = total ? Math.round(earned / total * 100) : 0;
    const scoreEl = $('#examScore');
    if (scoreEl) scoreEl.textContent = '总分 ' + earned.toFixed(1) + ' / ' + total.toFixed(0) + '　（' + pct + '%）';
    const sub = $('#submitExam');
    if (sub) { sub.disabled = true; sub.textContent = auto ? '时间到，已自动交卷' : '已交卷'; }

    // 评分表（按官方大题逐条列出）
    const table = document.createElement('div');
    table.innerHTML = `
      <div class="exam-head" style="position:static;display:block">
        <div class="exam-result">
          <span class="big">${earned.toFixed(1)}<span style="font-size:16px;color:#8a93a6"> / ${total.toFixed(0)}</span></span>
          <span style="color:#4a5468">得分率 <b>${pct}%</b></span>
        </div>
      </div>
      <table class="mark-table">
        <thead><tr><th>题号</th><th>题型</th><th style="text-align:right">配分</th><th style="text-align:right">得分</th></tr></thead>
        <tbody>
          ${examState.built.sections.map(s => `
            <tr class="sec-row"><td>${esc(s.sec.no)}</td><td>${esc(s.sec.title)}</td>
              <td class="num">${s.sec.marks}</td><td class="num">${(s.secEarned || 0).toFixed(1)}</td></tr>
            ${s.items.map(it => `
              <tr><td></td>
                <td style="padding-left:22px;font-size:13px;color:#4a5468">${esc(it.q.topicName)} · ${esc(it.q.id)}</td>
                <td class="num">${it.marks.toFixed(1)}</td>
                <td class="num"><span class="${(rows.find(r => r.q.id === it.q.id) || {}).ok ? 'got-full' : ((rows.find(r => r.q.id === it.q.id) || {}).earned > 0 ? 'got-part' : 'got-none')}">
                  ${(rows.find(r => r.q.id === it.q.id) || {}).earned !== undefined ? (rows.find(r => r.q.id === it.q.id)).earned.toFixed(1) : '0.0'}</span></td></tr>
            `).join('')}
          `).join('')}
          <tr class="sec-row"><td></td><td>合计</td><td class="num">${total.toFixed(0)}</td><td class="num">${earned.toFixed(1)}</td></tr>
        </tbody>
      </table>
      ${examState.paper.proofs && examState.paper.proofs.length ? `
        <div style="margin-top:10px;font-size:14px;color:#4a5468">
          <b>本卷还包含以下证明/简答题</b>（不参与填空评分，请到「证明与简答」专区对照）：
          <div style="margin-top:6px;display:flex;gap:8px;flex-wrap:wrap">
            ${examState.paper.proofs.map(pr => {
              const pf = PROOF_BY_ID[pr.id];
              return pf ? `<button class="btn" data-goproof="${esc(pr.id)}">${esc(pf.title)}（${pr.marks} 分）</button>` : '';
            }).join('')}
          </div>
        </div>` : ''}
    `;
    body.insertBefore(table, body.children[2] || null);
    // 卷末的证明题按钮：跳到练习模式并直接打开该证明题
    table.querySelectorAll('[data-goproof]').forEach(btn => btn.addEventListener('click', () => {
      const q = BY_ID[btn.dataset.goproof];
      if (!q) return;
      curSubject = q.subjectId;
      try { localStorage.setItem('fcms.subject', curSubject); } catch (e) {}
      $('#subjectSelect').value = curSubject;
      buildTopicSelect(); buildQList(); showView('practice');
      openQuestion(q.id);
      const sol = $('#solution');
      if (sol) { sol.classList.remove('hidden'); render(sol); }
      const sb = $('#showBtn'); if (sb) sb.textContent = '收起证明';
    }));
    updateProgressChip();
  }

  /* --------------------------------------------------------------- 统计 */

  function renderStats() {
    const answered = ALL_Q.filter(q => store.done[q.id]);
    const okCount = ALL_Q.filter(isCorrect).length;
    const wrongCount = ALL_Q.filter(isWrong).length;
    const starred = ALL_Q.filter(isStar).length;
    const attempts = ALL_Q.reduce((s, q) => s + ((store.done[q.id] || {}).attempts || 0), 0);
    const proofDone = ALL_P.filter(q => isReviewed(q.id)).length;

    // 按学科汇总
    const bySub = SUBJECTS.map(function (sub) {
      const qs = sub.questions || [], ps = sub.proofs || [];
      const okQ = qs.filter(isCorrect).length;
      const okP = ps.filter(function (q) { return isReviewed(q.id); }).length;
      const total = qs.length + ps.length;
      return { id: sub.id, name: sub.name, total: total, ok: okQ + okP, pct: total ? Math.round((okQ + okP) / total * 100) : 0 };
    });

    // 按主题汇总（全部学科）
    const byTopic = {};
    ALL_Q.forEach(function (q) {
      const k = q.subjectId + ' · ' + q.topicName;
      byTopic[k] = byTopic[k] || { total: 0, ok: 0 };
      byTopic[k].total++;
      if (isCorrect(q)) byTopic[k].ok++;
    });

    $('#statsBody').innerHTML = `
      <div class="stat-cards">
        <div class="stat-card"><div class="n">${okCount}</div><div class="l">填空已答对</div></div>
        <div class="stat-card"><div class="n">${answered.length}</div><div class="l">填空做过</div></div>
        <div class="stat-card"><div class="n">${proofDone}</div><div class="l">证明已掌握</div></div>
        <div class="stat-card"><div class="n">${wrongCount}</div><div class="l">当前错题</div></div>
        <div class="stat-card"><div class="n">${starred}</div><div class="l">标记待复习</div></div>
        <div class="stat-card"><div class="n">${attempts}</div><div class="l">累计提交次数</div></div>
        <div class="stat-card"><div class="n">${ALL_Q.length + ALL_P.length}</div><div class="l">题库总题数</div></div>
      </div>

      <h3 style="font-size:15px;margin:18px 0 8px">按学科</h3>
      <table class="topic-table">
        <thead><tr><th>学科</th><th>名称</th><th>已掌握 / 总数</th><th>掌握度</th></tr></thead>
        <tbody>
          ${bySub.map(function (v) { return `<tr>
            <td style="font-family:monospace">${esc(v.id)}</td>
            <td>${esc(v.name)}</td>
            <td>${v.ok} / ${v.total}</td>
            <td><div style="display:flex;align-items:center;gap:10px">
              <div class="mini-bar ${v.pct < 50 ? 'bad' : ''}" style="flex:1"><i style="width:${v.pct}%"></i></div>
              <span style="font-size:13px;color:#4a5468;min-width:38px">${v.pct}%</span></div></td>
          </tr>`; }).join('')}
        </tbody>
      </table>

      <h3 style="font-size:15px;margin:18px 0 8px">按主题</h3>
      <table class="topic-table">
        <thead><tr><th>学科 · 主题</th><th>答对 / 总数</th><th>掌握度</th></tr></thead>
        <tbody>
          ${Object.keys(byTopic).sort().map(function (t) {
            const v = byTopic[t];
            const pct = Math.round(v.ok / v.total * 100);
            return `<tr>
              <td>${esc(t)}</td>
              <td>${v.ok} / ${v.total}</td>
              <td><div style="display:flex;align-items:center;gap:10px">
                <div class="mini-bar ${pct < 50 ? 'bad' : ''}" style="flex:1"><i style="width:${pct}%"></i></div>
                <span style="font-size:13px;color:#4a5468;min-width:38px">${pct}%</span></div></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>

      ${wrongCount ? `<div><h3 style="font-size:15px">当前错题</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${ALL_Q.filter(isWrong).map(function (q) {
          return '<button class="btn" data-goto="' + esc(q.id) + '">' + esc(q.subjectId) + ' · ' + esc(q.topicName) + '</button>';
        }).join('')}
        </div></div>` : ''}
    `;
    $$('#statsBody [data-goto]').forEach(function (b) {
      b.addEventListener('click', function () {
        const q = qOf(b.dataset.goto);
        if (!q) return;
        curSubject = q.subjectId;
        try { localStorage.setItem('fcms.subject', curSubject); } catch (e) {}
        $('#subjectSelect').value = curSubject;
        buildTopicSelect(); buildQList(); showView('practice');
        openQuestion(q.id);
      });
    });
  }

  /* --------------------------------------------------------------- 启动 */

  /* --------------------------------------------------------- 讲义精读 */

  // 当前选中的讲义（按学科记忆）
  var curNote = {};

  /**
   * 行内标记渲染：
   *   **粗体**            → <b>
   *   `代码`              → <code>
   *   [[english|中文]]    → 术语标注（英文 + 中文），用于「英文作为专有名词标注」
   *   $公式$              → 原样保留，交给 KaTeX
   * 注意：$...$ 里的内容不做任何替换，避免破坏数学。
   */
  function inlineMd(t) {
    var s = String(t == null ? '' : t);
    var parts = s.split(/(\$[^$]*\$)/g);      // 奇数下标是公式，保持原样
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 1) continue;
      var seg = parts[i];
      // 术语标注：[[english|中文]]
      seg = seg.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, function (m, en, zh) {
        return '<span class="term-badge"><b>' + en + '</b><i>' + zh + '</i></span>';
      });
      // 反引号代码
      seg = seg.replace(/`([^`]+)`/g, '<code>$1</code>');
      // 粗体
      seg = seg.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
      parts[i] = seg;
    }
    return parts.join('');
  }

  /** 渲染一个讲义区块 */
  function noteBlock(b) {
    switch (b.t) {
      case 'h':
        return '<h3 class="nt-h">' + inlineMd(b.md) + '</h3>';
      case 'p':
        return '<p class="nt-p">' + inlineMd(b.md) + '</p>';
      case 'ul':
        return '<ul class="nt-ul">' + b.items.map(function (x) { return '<li>' + inlineMd(x) + '</li>'; }).join('') + '</ul>';
      case 'ol':
        return '<ol class="nt-ol">' + b.items.map(function (x) { return '<li>' + inlineMd(x) + '</li>'; }).join('') + '</ol>';
      case 'code':
        return '<pre class="nt-code"><code>' + esc(b.code) + '</code></pre>';
      case 'note':
        return '<div class="nt-box nt-note"><span class="nt-ico">💡</span><div>' + inlineMd(b.md) + '</div></div>';
      case 'warn':
        return '<div class="nt-box nt-warn"><span class="nt-ico">⚠️</span><div>' + inlineMd(b.md) + '</div></div>';
      case 'tbl':
        return '<div class="nt-tbl-wrap"><table class="nt-tbl"><thead><tr>' +
          b.head.map(function (h) { return '<th>' + inlineMd(h) + '</th>'; }).join('') +
          '</tr></thead><tbody>' +
          b.rows.map(function (r) {
            return '<tr>' + r.map(function (c) { return '<td>' + inlineMd(c) + '</td>'; }).join('') + '</tr>';
          }).join('') +
          '</tbody></table></div>';
      default:
        return '';
    }
  }

  function renderNotes() {
    const box = $('#notesBody');
    const nav = $('#notesNav');
    if (!box) return;
    // 只显示「有讲义」的学科
    const subs = SUBJECTS.filter(function (sub) { return hasNotes(sub.id); });
    if (!subs.length) { nav.innerHTML = ''; box.innerHTML = '<div class="empty">暂无讲义资料</div>'; return; }

    let sid = curSubject;
    if (!hasNotes(sid)) sid = subs[0].id;
    const topics = notesOf(sid);
    if (!curNote[sid]) curNote[sid] = topics.length ? topics[0].no : null;

    // 侧栏：学科切换 + 讲次列表
    const subSwitcher = subs.length > 1
      ? '<div class="notes-subswitch">' + subs.map(function (sub) {
          return '<button class="btn ' + (sub.id === sid ? 'primary' : '') + '" data-nsub="' + esc(sub.id) + '">' +
            esc(sub.id) + '</button>';
        }).join('') + '</div>'
      : '';
    nav.innerHTML = subSwitcher +
      topics.map(function (t) {
        return '<div class="notes-navitem ' + (t.no === curNote[sid] ? 'active' : '') + '" data-nno="' + esc(t.no) + '">' +
          '<span class="nn-no">' + esc(t.no) + '</span>' +
          '<span class="nn-t">' + esc(t.title) + '</span></div>';
      }).join('');

    const cur = topics.find(function (t) { return t.no === curNote[sid]; }) || topics[0];

    box.innerHTML =
      '<div class="nt-head">' +
        '<div class="nt-no">' + esc(cur.no) + '</div>' +
        '<div>' +
          '<h2 class="nt-title">' + esc(cur.title) + '</h2>' +
          '<div class="nt-title-en">' + esc(cur.titleEn || '') + '</div>' +
          (cur.tags && cur.tags.length ? '<div class="nt-tags">' + cur.tags.map(function (g) {
            return '<span class="nt-tag">' + esc(g) + '</span>'; }).join('') + '</div>' : '') +
        '</div>' +
      '</div>' +
      '<div class="nt-blocks">' + cur.blocks.map(noteBlock).join('') + '</div>' +
      // 相关练习：直接跳到该主题的练习题（讲义 → 刷题打通）
      (function () {
        const ids = (cur.qids || []).filter(function (id) { return !!BY_ID[id]; });
        if (!ids.length) return '';
        return '<div class="nt-practice"><div class="nt-practice-head">' +
          '<span class="nt-practice-title">相关练习 <i>Practice</i></span>' +
          '<span class="nt-practice-hint">点击可直接跳到题库中对应题目</span></div>' +
          '<div class="nt-practice-list">' +
          ids.map(function (id) {
            const q = BY_ID[id];
            const kind = q.kind === 'proof' ? '证明' : '填空';
            return '<button class="nt-pbtn" data-goq="' + esc(id) + '">' +
              '<span class="nt-pbtn-topic">' + esc(topicLabel(q)) + '</span>' +
              '<span class="nt-pbtn-meta">' + esc(kind) + ' · ' + esc(q.id) + '</span>' +
              '</button>';
          }).join('') +
          '</div></div>';
      })() +
      (cur.terms && cur.terms.length
        ? '<div class="nt-terms"><h3 class="nt-h">术语对照表 <span class="nt-h-en">Key Terms</span></h3>' +
          '<div class="nt-termgrid">' + cur.terms.map(function (p) {
            return '<div class="nt-term"><span class="nt-term-en">' + esc(p[0]) + '</span>' +
              '<span class="nt-term-zh">' + esc(p[1]) + '</span></div>';
          }).join('') + '</div></div>'
        : '') +
      '<div class="nt-pager">' +
        '<button class="btn" id="ntPrev">← 上一讲</button>' +
        '<span class="nt-pos">' + (topics.indexOf(cur) + 1) + ' / ' + topics.length + '</span>' +
        '<button class="btn" id="ntNext">下一讲 →</button>' +
      '</div>';

    $$('#notesNav .notes-navitem').forEach(function (el) {
      el.addEventListener('click', function () {
        curNote[sid] = el.dataset.nno;
        renderNotes();
        safeScroll(box, { behavior: 'smooth', block: 'start' });
      });
    });
    $$('#notesNav [data-nsub]').forEach(function (b) {
      b.addEventListener('click', function () {
        curSubject = b.dataset.nsub;
        try { localStorage.setItem('fcms.subject', curSubject); } catch (e) {}
        renderNotes();
      });
    });
    const go = function (d) {
      const i = topics.indexOf(cur);
      const j = Math.max(0, Math.min(topics.length - 1, i + d));
      if (j !== i) { curNote[sid] = topics[j].no; renderNotes(); safeScroll(box, { behavior: 'smooth', block: 'start' }); }
    };
    // 讲义 → 练习：点相关练习题直接跳过去
    $$('#notesBody [data-goq]').forEach(function (b) {
      b.addEventListener('click', function () {
        const q = BY_ID[b.dataset.goq];
        if (!q) return;
        curSubject = q.subjectId;
        try { localStorage.setItem('fcms.subject', curSubject); } catch (e) {}
        if ($('#subjectSelect')) $('#subjectSelect').value = curSubject;
        if ($('#topicSelect')) $('#topicSelect').value = 'all';
        if ($('#onlyProof')) $('#onlyProof').checked = (q.kind === 'proof');
        if ($('#onlyWrong')) $('#onlyWrong').checked = false;
        if ($('#onlyStar')) $('#onlyStar').checked = false;
        buildTopicSelect(); buildQList();
        showView('practice');
        openQuestion(q.id);
      });
    });

    const pv = $('#ntPrev'), nx = $('#ntNext');
    if (pv) pv.addEventListener('click', function () { go(-1); });
    if (nx) nx.addEventListener('click', function () { go(1); });

    render(box);
    updateProgressChip();
  }

  /* ------------------------------------------------------------- 水印 */

  /**
   * 注入斜向平铺水印「RadoN」。
   * 要点：
   *   · pointer-events:none —— 完全不影响点击输入框、按钮
   *   · position:fixed + z-index 低于内容 —— 只在空白处显示，不压字
   *   · SVG <pattern> 平铺，随窗口自适应，无额外网络请求
   */
  var WATERMARK_TEXT = 'RadoN';
  function buildWatermark() {
    var host = document.getElementById('wmHost');
    if (!host || host.dataset.built) return;
    var text = WATERMARK_TEXT;
    // 用 pattern 平铺：斜 30°，间距够大，避免密集
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="230">' +
      '<defs><pattern id="wmPat" width="360" height="230" patternUnits="userSpaceOnUse" ' +
      'patternTransform="rotate(-28)">' +
      '<text x="30" y="120" font-family="-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif" ' +
      'font-size="23" font-weight="700" fill="#2f5bd7" fill-opacity="0.055" ' +
      'letter-spacing="0.6">' + text + '</text>' +
      '<text x="210" y="215" font-family="-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif" ' +
      'font-size="23" font-weight="700" fill="#2f5bd7" fill-opacity="0.055" ' +
      'letter-spacing="0.6">' + text + '</text>' +
      '</pattern></defs>' +
      '<rect width="100%" height="100%" fill="url(#wmPat)"/></svg>';
    host.innerHTML = svg;
    host.dataset.built = '1';
  }

  function init() {
    buildWatermark();
    buildSubjectSelect();
    buildTopicSelect();
    buildQList();
    renderHome();
    updateProgressChip();
    buildWatermark();
    $('#footCount').textContent = ALL_Q.length + ALL_P.length;
    $('#footSubjects').textContent = SUBJECTS.length;

    $$('.mode-btn').forEach(b => b.addEventListener('click', () => showView(b.dataset.view)));
    // 各模块左上角的「返回首页」
    $$('.back-home').forEach(b => b.addEventListener('click', function () { showView('home'); renderHome(); }));

    // 语言切换
    $$('#langSwitch button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.lang === lang);
      b.addEventListener('click', function () {
        setLang(b.dataset.lang);
        $$('#langSwitch button').forEach(function (x) { x.classList.toggle('on', x.dataset.lang === lang); });
        renderHome(); buildSubjectSelect(); buildTopicSelect(); buildQList();
        if (curId) openQuestion(curId);
      });
    });

    const ss = $('#subjectSelect');
    if (ss) ss.addEventListener('change', function () {
      curSubject = ss.value;
      try { localStorage.setItem('fcms.subject', curSubject); } catch (e) {}
      buildTopicSelect(); buildQList(); renderPaperPick(); updateProgressChip(); renderHome();
      const f = filtered();
      if (f.length) openQuestion(f[0].id);
      else $('#qpanel').innerHTML = '<div class="empty">该学科下没有符合条件的题目</div>';
    });

    $('#topicSelect').addEventListener('change', buildQList);
    $('#onlyWrong').addEventListener('change', buildQList);
    $('#onlyStar').addEventListener('change', buildQList);
    renderPaperPick();
    const op = $('#onlyProof'); if (op) op.addEventListener('change', buildQList);

    $('#resetStats').addEventListener('click', function () {
      if (!confirm('确定要清空所有作答记录吗？此操作不可撤销。')) return;
      store = { done: {}, wrong: {}, star: {}, reviewed: {}, todo: {} };
      save(); updateProgressChip(); renderStats(); renderHome(); buildQList();
    });

    if (!ALL_Q.length) {
      $('#qpanel').innerHTML = '<div class="empty">题库未载入，请检查 subjects/*.js 是否正常加载。</div>';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
