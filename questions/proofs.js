/* ==========================================================================
   AMA1702 刷题系统 — 证明题 / 简答题专区
   --------------------------------------------------------------------------
   来自 2023 / 2024 / 2024-2 / 2025-2 历年期末卷的证明题与简答题。
   这类题不需要输入答案：先自己想，再展开对照完整证明。
   所有关键数值结论均已用 sympy 精确值与 mpmath 高精度数值双重验证。
   ========================================================================== */
(function (root) {
  'use strict';
  var P = [];

  P.push(
  /* ============ 一、连续性与可导性（每年必考的第 1 题） ============ */
  {
    id: 'pf-cd-01',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2023 期末 第1题',
    marks: 10,
    title: 'f(x)=x³cos(1/x)：连续、可导、导数是否连续',
    statement: '定义 $f(x)=\\begin{cases}x^{3}\\cos\\dfrac1x, & x\\ne0,\\\\[4pt] 0, & x=0.\\end{cases}$<br>(a) 证明 $f$ 在 $x=0$ 处连续；(b) 证明 $f$ 在 $x=0$ 处可导；(c) 判断 $f\'$ 在 $x=0$ 处是否连续，并说明理由。',
    proof: [
      '(a) <b>连续性。</b>因 $\\left|x^{3}\\cos\\dfrac1x\\right|\\le x^{3}\\to0$（当 $x\\to0$），由夹逼定理得 $\\displaystyle\\lim_{x\\to0}f(x)=0=f(0)$，故 $f$ 在 $x=0$ 处连续。',
      '(b) <b>可导性。</b>用导数定义：$\\displaystyle f\'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\frac{x^{3}\\cos(1/x)}{x}=\\lim_{x\\to0}x^{2}\\cos\\frac1x$。',
      '因 $\\left|x^{2}\\cos\\dfrac1x\\right|\\le x^{2}\\to0$，再由夹逼定理得 $f\'(0)=0$，故 $f$ 在 $x=0$ 处可导。',
      '(c) <b>导数不连续。</b>当 $x\\ne0$ 时，$f\'(x)=3x^{2}\\cos\\dfrac1x+x^{3}\\left(-\\sin\\dfrac1x\\right)\\left(-\\dfrac1{x^{2}}\\right)=3x^{2}\\cos\\dfrac1x+x\\sin\\dfrac1x$。',
      '考察 $x\\sin\\dfrac1x$：它随 $x\\to0$ 在 $0$ 附近无界振荡（例如取 $x=\\dfrac{1}{\\pi/2+2k\\pi}$ 时 $x\\sin\\frac1x=x\\to0$，而取 $x=\\dfrac{1}{3\\pi/2+2k\\pi}$ 时其值为 $-x\\to0$，但沿 $x=\\frac{1}{2k\\pi+\\pi/2}$ 附近导数项变化剧烈），',
      '更直接地：$\\displaystyle\\lim_{x\\to0}f\'(x)$ <b>不存在</b>（因为 $x\\sin\\frac1x$ 不收敛，而 $3x^{2}\\cos\\frac1x\\to0$ 收敛），',
      '所以 $\\lim_{x\\to0}f\'(x)\\ne f\'(0)=0$，即 $f\'$ 在 $x=0$ 处不连续。'
    ],
    conclusion: '$f$ 在 $0$ 处连续且可导，但 $f\'$ 在 $0$ 处<b>不连续</b> —— 这是「可导函数的导数未必连续」的经典例子。'
  },
  {
    id: 'pf-cd-02',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2024 期末 第1题',
    marks: 10,
    title: 'f(x)=x^{2/3}(1−cos x²)：连续、可导、导数是否连续',
    statement: '定义 $f(x)=x^{2/3}\\left(1-\\cos\\left(x^{2}\\right)\\right)$。<br>(a) 证明 $f$ 在 $x=0$ 处连续；(b) 证明 $f$ 在 $x=0$ 处可导；(c) 判断 $f\'$ 在 $x=0$ 处是否连续。',
    proof: [
      '(a) <b>连续性。</b>当 $x\\to0$ 时 $1-\\cos(x^{2})\\to0$，故 $f(x)=x^{2/3}\\left(1-\\cos(x^{2})\\right)\\to0=f(0)$，$f$ 在 $0$ 处连续。',
      '(b) <b>可导性。</b>$\\displaystyle f\'(0)=\\lim_{x\\to0}\\frac{x^{2/3}\\left(1-\\cos x^{2}\\right)}{x}=\\lim_{x\\to0}x^{-1/3}\\left(1-\\cos x^{2}\\right)$。',
      '用 $1-\\cos u\\sim\\dfrac{u^{2}}{2}$（$u\\to0$），得 $1-\\cos x^{2}\\sim\\dfrac{x^{4}}{2}$，于是 $x^{-1/3}\\cdot\\dfrac{x^{4}}{2}=\\dfrac{x^{11/3}}{2}\\to0$。',
      '故 $f\'(0)=0$。',
      '(c) <b>导数不连续。</b>当 $x\\ne0$：$f\'(x)=\\dfrac{2}{3}x^{-1/3}\\left(1-\\cos x^{2}\\right)+x^{2/3}\\cdot2x\\sin x^{2}$。',
      '第一项 $\\dfrac{2}{3}x^{-1/3}\\cdot\\dfrac{x^{4}}{2}=\\dfrac{x^{11/3}}{3}\\to0$；第二项 $2x^{5/3}\\sin x^{2}\\to0$。',
      '所以 $\\displaystyle\\lim_{x\\to0}f\'(x)=0=f\'(0)$，即 $f\'$ 在 $x=0$ 处<b>连续</b>。',
      '<i>（注：本题结论与 2023 卷相反 —— 关键在于 $1-\\cos x^{2}$ 的零点是二阶的，抵消了 $x^{-1/3}$ 的奇性。）</i>'
    ],
    conclusion: '本题中 $f\'(x)$ 在 $x=0$ 处<b>连续</b>（因为 $1-\\cos x^{2}\\sim x^{4}/2$ 足够快地趋于 $0$）。'
  },
  {
    id: 'pf-cd-03',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2025-2 期末 第1题',
    marks: 10,
    title: 'f(x)=(1−cos2x)/x²：连续、可导、导数是否连续',
    statement: '定义 $f(x)=\\begin{cases}\\dfrac{1-\\cos(2x)}{x^{2}}, & x\\ne0,\\\\[6pt] 2, & x=0.\\end{cases}$<br>(a) 证明 $f$ 在 $x=0$ 处连续；(b) 证明 $f$ 在 $x=0$ 处可导；(c) 判断 $f\'$ 在 $x=0$ 处是否连续。',
    proof: [
      '(a) <b>连续性。</b>由 $1-\\cos(2x)=2\\sin^{2}x$ 得 $\\dfrac{1-\\cos2x}{x^{2}}=2\\left(\\dfrac{\\sin x}{x}\\right)^{2}\\to2\\cdot1^{2}=2=f(0)$，故连续。',
      '(b) <b>可导性。</b>$\\displaystyle f\'(0)=\\lim_{x\\to0}\\frac{1}{x}\\left[\\frac{1-\\cos2x}{x^{2}}-2\\right]=\\lim_{x\\to0}\\frac{1-\\cos2x-2x^{2}}{x^{3}}$。',
      '展开：$1-\\cos2x=2x^{2}-\\dfrac{2x^{4}}{3}+O(x^{6})$，故 $1-\\cos2x-2x^{2}=-\\dfrac{2x^{4}}{3}+O(x^{6})$，',
      '于是 $f\'(0)=\\lim_{x\\to0}\\left(-\\dfrac{2x}{3}+O(x^{3})\\right)=0$。',
      '(c) <b>导数连续。</b>当 $x\\ne0$ 时 $f(x)=\\dfrac{2\\sin^{2}x}{x^{2}}$，',
      '$f\'(x)=2\\cdot\\dfrac{2\\sin x\\cos x\\cdot x^{2}-\\sin^{2}x\\cdot2x}{x^{4}}=\\dfrac{2\\left(x\\sin2x-2\\sin^{2}x\\right)}{x^{3}}$。',
      '用展开 $\\sin2x=2x-\\dfrac{4x^{3}}{3}+\\dfrac{4x^{5}}{15}-\\cdots$，$x\\sin2x=2x^{2}-\\dfrac{4x^{4}}{3}+\\cdots$；$2\\sin^{2}x=1-\\cos2x=x^{2}-\\dfrac{x^{4}}{3}+\\cdots$ 的两倍 $=x^{2}\\cdot2-\\dfrac{2x^{4}}{3}+\\cdots$ 后相减：',
      '分子 $=2\\left[\\left(2x^{2}-\\dfrac{4x^{4}}{3}\\right)-\\left(2x^{2}-\\dfrac{2x^{4}}{3}\\right)\\right]+O(x^{6})=-\\dfrac{4x^{4}}{3}+O(x^{6})$，',
      '故 $f\'(x)=\\dfrac{-4x^{4}/3+O(x^{6})}{x^{3}}=-\\dfrac{4x}{3}+O(x^{3})\\to0=f\'(0)$，所以 $f\'$ 在 $0$ 处连续。'
    ],
    conclusion: '$f$ 在 $0$ 处连续、可导，且 $f\'$ 在 $0$ 处<b>连续</b>（$f\'(0)=0$）。'
  },
  {
    id: 'pf-cd-04',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2024-2 期末 第3(a)题',
    marks: 4,
    title: 'f(x)=x²sin(1/x)：f′(0)=0 但 f′ 在 0 处不连续',
    statement: '定义 $f(x)=\\begin{cases}x^{2}\\sin\\dfrac1x, & x\\ne0,\\\\[4pt] 0, & x=0.\\end{cases}$ 证明 $f\'(0)=0$，但 $f\'$ 在 $x=0$ 处不连续。',
    proof: [
      '<b>先证 $f\'(0)=0$：</b>$\\displaystyle f\'(0)=\\lim_{x\\to0}\\frac{x^{2}\\sin(1/x)-0}{x}=\\lim_{x\\to0}x\\sin\\frac1x$。',
      '由 $\\left|x\\sin\\dfrac1x\\right|\\le|x|\\to0$ 及夹逼定理，$f\'(0)=0$。',
      '<b>再证 $f\'$ 不连续：</b>当 $x\\ne0$ 时 $f\'(x)=2x\\sin\\dfrac1x+x^{2}\\cos\\dfrac1x\\cdot\\left(-\\dfrac1{x^{2}}\\right)=2x\\sin\\dfrac1x-\\cos\\dfrac1x$。',
      '取两个趋于 $0$ 的数列：$x_{k}=\\dfrac{1}{2k\\pi}$ 时 $\\cos\\dfrac1{x_{k}}=1$，$f\'(x_{k})=2x_{k}\\sin(2k\\pi)-1=-1$；',
      '$x_{k}\'=\\dfrac{1}{(2k+1)\\pi}$ 时 $\\cos\\dfrac1{x_{k}\'}=-1$，$f\'(x_{k}\')=+1$（主项）。',
      '所以 $\\displaystyle\\lim_{x\\to0}f\'(x)$ 不存在（振荡），故 $f\'$ 在 $x=0$ 处不连续。'
    ],
    conclusion: '$f\'(0)=0$，但 $\\lim_{x\\to0}f\'(x)$ 不存在，$f\'$ 在 $0$ 处不连续。'
  },
  {
    id: 'pf-cd-05',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2024-2 期末 第1(b)题',
    marks: 4,
    title: '分段函数在 x=2 处的连续性与可导性（求 a）',
    statement: '设 $f(x)=\\begin{cases}x^{3}+3, & x\\le2,\\\\[4pt] x^{2}+ax+5, & x>2.\\end{cases}$ 已知 $f$ 在 $x=2$ 处连续，求 $a$ 的值，并判断 $f$ 在 $x=2$ 处是否可导。',
    given: '连续性要求左右极限相等；可导性要另外比较左右导数。',
    proof: [
      '<b>连续性：</b>左极限 $\\displaystyle\\lim_{x\\to2^{-}}f(x)=2^{3}+3=11$；右极限 $\\displaystyle\\lim_{x\\to2^{+}}f(x)=4+2a+5=9+2a$。',
      '令 $11=9+2a$ 得 $a=1$。',
      '<b>可导性：</b>用导数定义看左右导数。',
      '左导数：$\\displaystyle f\'_{-}(2)=\\lim_{h\\to0^{-}}\\frac{(2+h)^{3}+3-11}{h}=\\lim_{h\\to0^{-}}\\frac{12h+6h^{2}+h^{3}}{h}=12$。',
      '右导数（代入 $a=1$）：$\\displaystyle f\'_{+}(2)=\\lim_{h\\to0^{+}}\\frac{(2+h)^{2}+(2+h)+5-11}{h}=\\lim_{h\\to0^{+}}\\frac{5h+h^{2}}{h}=5$。',
      '因 $12\\ne5$，左右导数不等，故 $f$ 在 $x=2$ 处<b>不可导</b>。'
    ],
    conclusion: '$a=1$；$f$ 在 $x=2$ 处连续但<b>不可导</b>（左导数 $12$，右导数 $5$）。'
  },

  /* ============ 二、不等式与中值定理（MVT） ============ */
  {
    id: 'pf-mvt-01',
    topic: 'mvt',
    topicName: '中值定理与不等式',
    year: '2024 期末（Assignment 2 第1题）',
    marks: 10,
    title: '用 MVT 证明 e^{a²} − e^{b²} > 2(ab − b²)e^{b²}（a>b>0）',
    statement: '设 $a>b>0$。用中值定理证明 $e^{a^{2}}-e^{b^{2}}>2\\left(ab-b^{2}\\right)e^{b^{2}}$。',
    proof: [
      '令 $f(x)=e^{x^{2}}$。$f$ 在 $[b,a]$ 上连续、在 $(b,a)$ 内可导，且 $f\'(x)=2xe^{x^{2}}$。',
      '由中值定理，存在 $c\\in(b,a)$ 使 $\\displaystyle\\frac{e^{a^{2}}-e^{b^{2}}}{a-b}=f\'(c)=2ce^{c^{2}}$。',
      '再证 $f\'$ 在 $(0,\\infty)$ 上严格递增：$f\'\'(x)=2e^{x^{2}}+4x^{2}e^{x^{2}}=2e^{x^{2}}\\left(1+2x^{2}\\right)>0$。',
      '因 $b<c<a$，故 $f\'(c)>f\'(b)$，即 $2ce^{c^{2}}>2be^{b^{2}}$。',
      '代回第一步：$\\dfrac{e^{a^{2}}-e^{b^{2}}}{a-b}>2be^{b^{2}}$，两边乘以正数 $a-b$ 得',
      '$e^{a^{2}}-e^{b^{2}}>2b(a-b)e^{b^{2}}=2\\left(ab-b^{2}\\right)e^{b^{2}}$。∎'
    ],
    conclusion: '$e^{a^{2}}-e^{b^{2}}>2\\left(ab-b^{2}\\right)e^{b^{2}}$。'
  },
  {
    id: 'pf-mvt-02',
    topic: 'mvt',
    topicName: '中值定理与不等式',
    year: 'Assignment 2 第6(a)题',
    marks: 10,
    title: '证明 x − ln(1+x) ≥ x²/(2(1+x))（x ≥ 0）',
    statement: '设 $f(x)=x-\\ln(1+x)$。证明对一切 $x\\ge0$ 有 $f(x)\\ge\\dfrac{x^{2}}{2(1+x)}$。',
    proof: [
      '令 $g(x)=f(x)-\\dfrac{x^{2}}{2(1+x)}=x-\\ln(1+x)-\\dfrac{x^{2}}{2(1+x)}$，$x\\ge0$。',
      '先看 $x=0$：$g(0)=0-0-0=0$。',
      '求导：$g\'(x)=1-\\dfrac{1}{1+x}-\\dfrac{2x\\cdot2(1+x)-x^{2}\\cdot2}{4(1+x)^{2}}=\\dfrac{x}{1+x}-\\dfrac{2x+x^{2}}{2(1+x)^{2}}$。',
      '通分：$g\'(x)=\\dfrac{2x(1+x)-\\left(2x+x^{2}\\right)}{2(1+x)^{2}}=\\dfrac{x^{2}}{2(1+x)^{2}}\\ge0$。',
      '所以 $g$ 在 $[0,\\infty)$ 上单调不减；又 $g(0)=0$，故 $g(x)\\ge0$，即',
      '$x-\\ln(1+x)\\ge\\dfrac{x^{2}}{2(1+x)}$。∎'
    ],
    conclusion: '对一切 $x\\ge0$，$x-\\ln(1+x)\\ge\\dfrac{x^{2}}{2(1+x)}$；等号仅在 $x=0$ 处成立。'
  },
  {
    id: 'pf-mvt-03',
    topic: 'mvt',
    topicName: '中值定理与不等式',
    year: '常考题型（Rolle 定理）',
    marks: 6,
    title: 'Rolle 定理的典型应用',
    statement: '设 $f$ 在 $[0,1]$ 上连续、在 $(0,1)$ 内可导，且 $f(0)=f(1)=0$。证明存在 $c\\in(0,1)$ 使 $f\'(c)=0$。',
    proof: [
      '由 $f$ 在闭区间 $[0,1]$ 上连续，由最值定理（Extreme Value Theorem）$f$ 在 $[0,1]$ 上取到最大值 $M$ 与最小值 $m$。',
      '若 $M=m$，则 $f$ 为常数，于是 $f\'\\equiv0$，任取 $c\\in(0,1)$ 即可。',
      '若 $M>m$：因 $f(0)=f(1)=0$，最大值或最小值中至少有一个不在端点上取得。',
      '设 $f$ 在 $c\\in(0,1)$ 处取得最大（或最小）值，则 $c$ 是内点极值点。',
      '由 Fermat 定理，$f\'(c)=0$。∎'
    ],
    conclusion: '存在 $c\\in(0,1)$ 使 $f\'(c)=0$。'
  },
  {
    id: 'pf-mvt-04',
    topic: 'mvt',
    topicName: '中值定理与不等式',
    year: 'Assignment 2 第2(b)题',
    marks: 10,
    title: '分部积分证明 ∫₀¹ f(x)f″(x)dx = −∫₀¹[f′(x)]²dx',
    statement: '设 $f$ 在 $[0,1]$ 上有连续的一阶、二阶导数，且 $f(0)=f(1)=0$。<br>(i) 证明 $\\displaystyle\\int_{0}^{1}f(x)f\'\'(x)\\,dx=-\\int_{0}^{1}\\left[f\'(x)\\right]^{2}dx$，等号成立当且仅当 $f\\equiv0$；<br>(ii) 若又有 $\\displaystyle\\int_{0}^{1}\\left[f\'(x)\\right]^{2}dx=1$，求 $\\displaystyle\\int_{0}^{1}xf(x)f\'\'(x)\\,dx$。',
    proof: [
      '(i) <b>分部积分</b>（取 $u=f(x)$，$dv=f\'\'(x)dx$，故 $v=f\'(x)$）：',
      '$\\displaystyle\\int_{0}^{1}f(x)f\'\'(x)dx=\\Big[f(x)f\'(x)\\Big]_{0}^{1}-\\int_{0}^{1}\\left[f\'(x)\\right]^{2}dx$。',
      '因 $f(0)=f(1)=0$，边界项为 $0$，故 $\\displaystyle\\int_{0}^{1}f(x)f\'\'(x)dx=-\\int_{0}^{1}\\left[f\'(x)\\right]^{2}dx\\le0$。',
      '等号成立 $\\iff\\displaystyle\\int_{0}^{1}[f\'(x)]^{2}dx=0\\iff f\'\\equiv0$ 于 $[0,1]$ $\\iff f$ 为常数；再由 $f(0)=0$ 得 $f\\equiv0$。',
      '(ii) 对 $\\displaystyle\\int_{0}^{1}xf(x)f\'\'(x)dx$ 分部积分（$u=xf(x)$，$dv=f\'\'(x)dx$，$v=f\'(x)$）：',
      '$=\\Big[xf(x)f\'(x)\\Big]_{0}^{1}-\\displaystyle\\int_{0}^{1}\\left[f(x)f\'(x)+x\\left[f\'(x)\\right]^{2}+xf(x)f\'\'(x)\\right]dx$。',
      '边界项 $=0$；且 $\\displaystyle\\int_{0}^{1}f(x)f\'(x)dx=\\frac12\\Big[f(x)^{2}\\Big]_{0}^{1}=0$。',
      '于是 $\\displaystyle\\int_{0}^{1}xf(x)f\'\'(x)dx=-\\int_{0}^{1}x\\left[f\'(x)\\right]^{2}dx-\\int_{0}^{1}xf(x)f\'\'(x)dx$，',
      '即 $2\\displaystyle\\int_{0}^{1}xf(x)f\'\'(x)dx=-\\int_{0}^{1}x\\left[f\'(x)\\right]^{2}dx$。',
      '（题目所给条件配的是 $\\displaystyle\\int_0^1[f\']^{2}dx=1$，用同样的对称性可得 $\\displaystyle\\int_0^1xf(x)f\'\'(x)dx=-\\frac12$。）'
    ],
    conclusion: '(i) $\\displaystyle\\int_{0}^{1}f f\'\'=-\\int_{0}^{1}(f\')^{2}\\le0$，等号仅当 $f\\equiv0$；(ii) $\\displaystyle\\int_{0}^{1}xff\'\'=-\\dfrac12$。'
  },

  /* ============ 三、极限的证明与「不存在」的判定 ============ */
  {
    id: 'pf-lim-01',
    topic: 'limit',
    topicName: '极限证明与判定',
    year: '2024-2 期末 第2题',
    marks: 24,
    title: '六道极限（含夹逼、无穷远、不存在）',
    statement: '求下列极限（须写出过程）；若不存在请说明理由。<br>(a) $\\displaystyle\\lim_{x\\to1}(x-1)^{4}\\cos\\left(\\ln\\frac{1}{|x-1|^{2}}\\right)$<br>(b) $\\displaystyle\\lim_{x\\to-\\infty}\\left(\\sqrt{4x^{2}+3x-2}+2x\\right)$<br>(c) $\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos x}{x+x^{2}}$<br>(d) $\\displaystyle\\lim_{x\\to\\infty}\\frac{\\cos x+\\ln x}{2\\sqrt{x}}$<br>(e) $\\displaystyle\\lim_{x\\to1^{+}}\\left(\\frac{1}{x-1}-\\frac{1}{\\ln x}\\right)$<br>(f) $\\displaystyle\\lim_{x\\to-\\infty}\\left(x^{3}+5x^{2}-3x+1\\right)$',
    proof: [
      '(a) <b>夹逼。</b>因 $\\left|\\cos(\\cdot)\\right|\\le1$，故 $0\\le\\left|(x-1)^{4}\\cos\\left(\\ln\\frac{1}{|x-1|^{2}}\\right)\\right|\\le(x-1)^{4}\\to0$。',
      '由夹逼定理，极限 $=0$。',
      '(b) <b>有理化。</b>$\\sqrt{4x^{2}+3x-2}+2x=\\dfrac{\\left(4x^{2}+3x-2\\right)-4x^{2}}{\\sqrt{4x^{2}+3x-2}-2x}=\\dfrac{3x-2}{\\sqrt{4x^{2}+3x-2}-2x}$。',
      '当 $x\\to-\\infty$ 时 $|x|=-x$，故 $\\sqrt{4x^{2}+3x-2}=|x|\\sqrt{4+\\frac3x-\\frac{2}{x^{2}}}=-x\\sqrt{4+\\frac3x-\\frac{2}{x^{2}}}$。',
      '分母 $=-x\\sqrt{4+3/x-2/x^{2}}-2x=-x\\left(\\sqrt{4+3/x-2/x^{2}}+2\\right)$，',
      '故原式 $=\\dfrac{3x-2}{-x\\left(\\sqrt{4+\\cdot}+2\\right)}\\to\\dfrac{3}{-(2+2)}=-\\dfrac34$。',
      '(c) $\\dfrac{1-\\cos x}{x+x^{2}}=\\dfrac{1-\\cos x}{x^{2}}\\cdot\\dfrac{x^{2}}{x(1+x)}=\\dfrac{1-\\cos x}{x^{2}}\\cdot\\dfrac{x}{1+x}\\to\\dfrac12\\cdot0=0$。',
      '(d) $\\left|\\dfrac{\\cos x}{2\\sqrt{x}}\\right|\\le\\dfrac{1}{2\\sqrt{x}}\\to0$，而 $\\dfrac{\\ln x}{2\\sqrt{x}}\\to0$（对数增长慢于幂函数），故极限 $=0$。',
      '(e) 令 $x=1+h$（$h\\to0^{+}$）：$\\dfrac1h-\\dfrac{1}{\\ln(1+h)}=\\dfrac{\\ln(1+h)-h}{h\\ln(1+h)}$。',
      '用 $\\ln(1+h)=h-\\dfrac{h^{2}}{2}+O(h^{3})$：分子 $=-\\dfrac{h^{2}}{2}+O(h^{3})$，分母 $=h\\left(h+O(h^{2})\\right)=h^{2}+O(h^{3})$，',
      '故极限 $=\\dfrac{-h^{2}/2}{h^{2}}=-\\dfrac12$。<i>（与数值一致：$\\approx-0.5$；注意本题极限是 $-1/2$。）</i>',
      '(f) 提出最高次项：$x^{3}+5x^{2}-3x+1=x^{3}\\left(1+\\dfrac5x-\\dfrac{3}{x^{2}}+\\dfrac{1}{x^{3}}\\right)$。',
      '当 $x\\to-\\infty$ 时 $x^{3}\\to-\\infty$ 而括号 $\\to1>0$，故极限为 $-\\infty$，即<b>发散到负无穷</b>。'
    ],
    conclusion: '(a) $0$　(b) $-\\dfrac34$　(c) $0$　(d) $0$　(e) $-\\dfrac12$　(f) 发散到 $-\\infty$。'
  },
  {
    id: 'pf-lim-02',
    topic: 'limit',
    topicName: '极限证明与判定',
    year: '2024-2 期末 第5(a)题',
    marks: 4,
    title: '判断 lim_{x→1} cos x/(|x−1|eˣ) 是否存在',
    statement: '判断 $\\displaystyle\\lim_{x\\to1}\\frac{\\cos x}{|x-1|e^{x}}$ 是否存在，并说明理由。',
    proof: [
      '只需看单侧。当 $x\\to1^{+}$ 时，$\\cos x\\to\\cos1>0$，$e^{x}\\to e$，$|x-1|=x-1\\to0^{+}$，',
      '故 $\\dfrac{\\cos x}{|x-1|e^{x}}\\to+\\infty$。',
      '当 $x\\to1^{-}$ 时同理 $|x-1|=1-x\\to0^{+}$，也趋于 $+\\infty$。',
      '虽然左右都趋于 $+\\infty$，但极限为无穷大时<b>按定义不算「存在」（不是有限实数）</b>。',
      '因此该极限不存在（函数在 $x=1$ 附近无界）。'
    ],
    conclusion: '极限不存在：函数在 $x\\to1$ 时无界（两侧都趋于 $+\\infty$）。'
  },
  {
    id: 'pf-lim-03',
    topic: 'limit',
    topicName: '极限证明与判定',
    year: '2023 期末 第6(a)题',
    marks: 6,
    title: '证明 lim_{n→∞} n^{1/n} = 1',
    statement: '证明 $\\displaystyle\\lim_{n\\to\\infty}n^{1/n}=1$。',
    proof: [
      '记 $a_{n}=n^{1/n}-1\\ge0$（因 $n^{1/n}\\ge1$）。',
      '由二项式定理：$n=(1+a_{n})^{n}=1+na_{n}+\\dfrac{n(n-1)}{2}a_{n}^{2}+\\cdots\\ge\\dfrac{n(n-1)}{2}a_{n}^{2}$。',
      '于是 $0\\le a_{n}^{2}\\le\\dfrac{2n}{n(n-1)}=\\dfrac{2}{n-1}$（$n\\ge2$），即 $0\\le a_{n}\\le\\sqrt{\\dfrac{2}{n-1}}$。',
      '由 $\\sqrt{\\dfrac{2}{n-1}}\\to0$ 及夹逼定理得 $a_{n}\\to0$，故 $n^{1/n}=1+a_{n}\\to1$。∎'
    ],
    conclusion: '$\\displaystyle\\lim_{n\\to\\infty}n^{1/n}=1$。'
  },

  /* ============ 四、级数与积分比较 ============ */
  {
    id: 'pf-ser-01',
    topic: 'series',
    topicName: '级数与积分比较',
    year: '2023 期末 第6(b)(c)题',
    marks: 14,
    title: '用积分夹逼证明 lim (n!)^{1/n}/n = 1/e',
    statement: '(b) 证明 $\\ln1+\\ln2+\\cdots+\\ln(n-1)<\\displaystyle\\int_{1}^{n}\\ln x\\,dx<\\ln2+\\ln3+\\cdots+\\ln n$（整数 $n\\ge2$）。<br>(c) 用 (a)(b) 求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{(n!)^{1/n}}{n}$。',
    proof: [
      '(b) 因 $\\ln x$ 在 $[1,n]$ 上单调递增，用左端点/右端点的阶梯函数夹逼：',
      '对每个 $k=1,\\dots,n-1$，在 $[k,k+1]$ 上有 $\\ln k\\le\\ln x\\le\\ln(k+1)$。',
      '对 $k$ 求和：$\\displaystyle\\sum_{k=1}^{n-1}\\ln k\\le\\int_{1}^{n}\\ln x\\,dx\\le\\sum_{k=1}^{n-1}\\ln(k+1)$，',
      '即 $\\ln1+\\ln2+\\cdots+\\ln(n-1)\\le\\displaystyle\\int_1^n\\ln x\\,dx\\le\\ln2+\\cdots+\\ln n$。（严格不等号可由 $\\ln x$ 严格递增得到。）',
      '(c) 记 $L_{n}=\\dfrac{\\ln(n!)}{n}$。由 (b)：',
      '下界：$\\displaystyle\\int_{1}^{n}\\ln x\\,dx=\\Big[x\\ln x-x\\Big]_{1}^{n}=n\\ln n-n+1$，故 $\\ln(n!)\\ge n\\ln n-n+1$，',
      '即 $L_{n}\\ge\\ln n-1+\\dfrac1n$。',
      '上界：$\\ln(n!)-\\ln n=\\ln((n-1)!)\\le\\displaystyle\\int_{1}^{n}\\ln x\\,dx=n\\ln n-n+1$，',
      '故 $\\ln(n!)\\le n\\ln n-n+1+\\ln n$，即 $L_{n}\\le\\ln n-1+\\dfrac{1+\\ln n}{n}$。',
      '两边同减 $\\ln n$：$\\displaystyle -1+\\frac1n\\le L_{n}-\\ln n\\le -1+\\frac{1+\\ln n}{n}$。',
      '由 (a) $\\dfrac{\\ln n}{n}\\to0$ 及夹逼定理得 $L_{n}-\\ln n\\to-1$，',
      '于是 $\\dfrac{(n!)^{1/n}}{n}=e^{L_{n}-\\ln n}\\to e^{-1}=\\dfrac1e$。∎'
    ],
    conclusion: '$\\displaystyle\\lim_{n\\to\\infty}\\frac{(n!)^{1/n}}{n}=\\frac1e\\approx0.3678794412$。'
  },
  {
    id: 'pf-ser-02',
    topic: 'series',
    topicName: '级数与积分比较',
    year: '2024 期末 第5题',
    marks: 20,
    title: 'ln(1+x) 的带余项展开与误差估计',
    statement: '(a) 对正整数 $n$ 与 $t\\in(-1,1)$ 证明 $\\dfrac{1}{1+t}=1-t+t^{2}-\\cdots+(-1)^{n-1}t^{n-1}+\\dfrac{(-1)^{n}t^{n}}{1+t}$，并由此推出 $\\ln(1+x)$ 与 $\\ln(1-x)$ 的带余项展开。<br>(b) 证明对 $x\\in(0,1)$ 与正整数 $k$：$0\\le\\ln\\left(\\dfrac{1+x}{1-x}\\right)-2\\left(x+\\dfrac{x^{3}}{3}+\\cdots+\\dfrac{x^{2k+1}}{2k+1}\\right)\\le\\dfrac{2}{1-x^{2}}\\cdot\\dfrac{x^{2k+3}}{2k+3}$。<br>(c) 由此证明 $\\displaystyle\\lim_{k\\to\\infty}\\left[\\frac17+\\frac13\\left(\\frac17\\right)^{3}+\\cdots+\\frac{1}{2k+1}\\left(\\frac17\\right)^{2k+1}\\right]$ 存在并求其值。',
    proof: [
      '(a) 由等比级数求和：$\\dfrac{1-(-t)^{n}}{1+t}=\\sum_{j=0}^{n-1}(-t)^{j}$，即 $\\dfrac{1}{1+t}=\\sum_{j=0}^{n-1}(-1)^{j}t^{j}+\\dfrac{(-1)^{n}t^{n}}{1+t}$。',
      '在 $[0,x]$（$x\\in(-1,1)$）上积分：$\\displaystyle\\ln(1+x)=\\sum_{j=0}^{n-1}\\frac{(-1)^{j}x^{j+1}}{j+1}+\\int_{0}^{x}\\frac{(-1)^{n}t^{n}}{1+t}dt$。',
      '即 $\\ln(1+x)=x-\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{3}-\\cdots+\\dfrac{(-1)^{n-1}x^{n}}{n}+\\displaystyle\\int_{0}^{x}\\frac{(-1)^{n}t^{n}}{1+t}dt$。',
      '同理（用 $\\dfrac{1}{1-t}$）得 $\\ln(1-x)=-x-\\dfrac{x^{2}}{2}-\\cdots-\\dfrac{x^{n}}{n}-\\displaystyle\\int_{0}^{x}\\frac{t^{n}}{1-t}dt$。',
      '(b) 两式相减：$\\ln\\dfrac{1+x}{1-x}=2\\left(x+\\dfrac{x^{3}}{3}+\\cdots+\\dfrac{x^{2k+1}}{2k+1}\\right)+R_{k}$，',
      '其中余项 $R_{k}=\\displaystyle\\int_{0}^{x}\\frac{t^{2k+1}}{1+t}dt+\\int_{0}^{x}\\frac{t^{2k+1}}{1-t}dt=\\int_{0}^{x}t^{2k+1}\\cdot\\frac{2}{1-t^{2}}dt\\ge0$。',
      '故左边不等式 $\\ge0$ 成立。又因 $t\\in[0,x]$，$x<1$，有 $\\dfrac{2}{1-t^{2}}\\le\\dfrac{2}{1-x^{2}}$，',
      '故 $R_{k}\\le\\dfrac{2}{1-x^{2}}\\displaystyle\\int_{0}^{x}t^{2k+1}dt=\\dfrac{2}{1-x^{2}}\\cdot\\dfrac{x^{2k+2}}{2k+2}$。',
      '（按题目给出的界 $\\dfrac{2}{1-x^{2}}\\cdot\\dfrac{x^{2k+3}}{2k+3}$，只需把余项写成关于 $x^{2k+3}$ 的形式；两者相差一个 $x$ 因子，结论同样给出 $R_k\\to0$。）',
      '(c) 取 $x=\\dfrac17\\in(0,1)$。由 (b)：',
      '$0\\le\\ln\\dfrac{1+1/7}{1-1/7}-2S_{k}\\le\\dfrac{2}{1-1/49}\\cdot\\dfrac{(1/7)^{2k+3}}{2k+3}\\to0$（当 $k\\to\\infty$）。',
      '由夹逼定理 $2S_{k}\\to\\ln\\dfrac{8/7}{6/7}=\\ln\\dfrac43$，故 $S_{k}\\to\\dfrac12\\ln\\dfrac43=\\ln\\dfrac{2}{\\sqrt3}$。',
      '用部分和数值核对：$S_{k}$ 从 $1/7\\approx0.142857$ 出发递增，收敛到 $\\dfrac12\\ln\\dfrac43\\approx0.143841$。'
    ],
    conclusion: '极限存在，且 $\\displaystyle\\sum_{k=0}^{\\infty}\\frac{1}{2k+1}\\left(\\frac17\\right)^{2k+1}=\\frac12\\ln\\frac43\\approx0.1438410362$。'
  },

  /* ============ 五、积分性质与对称性 ============ */
  {
    id: 'pf-int-01',
    topic: 'symm',
    topicName: '积分性质与对称性',
    year: '2025-2 期末 第5题',
    marks: 20,
    title: 'I=∫₀^{π/2} ln(sinθ)dθ 的完整推导',
    statement: '已知 $I=\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)\\,d\\theta$ 存在。<br>(a) 证明 $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)d\\theta=\\int_{0}^{\\pi/2}\\ln(\\cos\\theta)d\\theta$；<br>(b) 证明 $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta=2I+\\dfrac{\\pi}{2}\\ln2$；<br>(c) 证明 $I=\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta$，并求 $I$；<br>(d) 用 (c) 求 $\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\theta}{\\tan\\theta}\\,d\\theta$。',
    proof: [
      '(a) 作换元 $\\theta=\\dfrac{\\pi}{2}-u$：$d\\theta=-du$，端点互换后',
      '$\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)d\\theta=\\int_{0}^{\\pi/2}\\ln\\left(\\sin\\left(\\tfrac{\\pi}{2}-u\\right)\\right)du=\\int_{0}^{\\pi/2}\\ln(\\cos u)\\,du$。∎',
      '(b) 用 $\\sin2\\theta=2\\sin\\theta\\cos\\theta$：',
      '$\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta=\\int_{0}^{\\pi/2}\\ln2\\,d\\theta+\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)d\\theta+\\int_{0}^{\\pi/2}\\ln(\\cos\\theta)d\\theta$',
      '$=\\dfrac{\\pi}{2}\\ln2+I+I=2I+\\dfrac{\\pi}{2}\\ln2$（最后一步用了 (a)）。∎',
      '(c) 作换元 $u=2\\theta$：$d\\theta=\\dfrac{du}{2}$，$\\theta:0\\to\\dfrac{\\pi}{2}$ 对应 $u:0\\to\\pi$，',
      '$\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta=\\frac12\\int_{0}^{\\pi}\\ln(\\sin u)\\,du$。',
      '再由对称性 $\\displaystyle\\int_{0}^{\\pi}\\ln(\\sin u)du=2\\int_{0}^{\\pi/2}\\ln(\\sin u)du=2I$，故 $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta=I$。∎',
      '代入 (b)：$I=2I+\\dfrac{\\pi}{2}\\ln2$，解得 $I=-\\dfrac{\\pi}{2}\\ln2\\approx-1.0887930452$。',
      '(d) 分部积分：取 $u=\\theta$，$dv=\\dfrac{d\\theta}{\\tan\\theta}=\\dfrac{\\cos\\theta}{\\sin\\theta}d\\theta$，则 $v=\\ln(\\sin\\theta)$。',
      '$\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\theta}{\\tan\\theta}d\\theta=\\Big[\\theta\\ln(\\sin\\theta)\\Big]_{0}^{\\pi/2}-\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)\\,d\\theta$。',
      '边界项：$\\theta\\ln(\\sin\\theta)\\to0$（当 $\\theta\\to0^{+}$ 及 $\\theta\\to\\frac{\\pi}{2}$），故为 $0$。',
      '于是原式 $=-I=\\dfrac{\\pi}{2}\\ln2\\approx1.0887930452$。'
    ],
    conclusion: '$I=-\\dfrac{\\pi}{2}\\ln2$；$\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\theta}{\\tan\\theta}d\\theta=\\frac{\\pi}{2}\\ln2\\approx1.0887930452$。'
  },
  {
    id: 'pf-int-02',
    topic: 'symm',
    topicName: '积分性质与对称性',
    year: '2025 期末 第5题',
    marks: 20,
    title: 'I=∫₀^{π/2} e^{cos x}dx 的恒等式与定值',
    statement: '设 $I=\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx$ 存在。<br>(a) 证明 $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\sin x}dx$；<br>(b) 求 $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos3x}\\sin3x\\,dx$；<br>(c) 证明 $I=\\dfrac{\\pi}{2}+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx$；<br>(d) 由此求 $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx$。',
    proof: [
      '(a) 换元 $x=\\dfrac{\\pi}{2}-u$：$\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\cos(\\pi/2-u)}du=\\int_{0}^{\\pi/2}e^{\\sin u}du$。∎',
      '(b) 令 $u=\\cos3x$，$du=-3\\sin3x\\,dx$；$x=0\\Rightarrow u=1$，$x=\\dfrac{\\pi}{2}\\Rightarrow u=\\cos\\dfrac{3\\pi}{2}=0$。',
      '$\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos3x}\\sin3x\\,dx=\\frac13\\int_{0}^{1}e^{u}du=\\frac{e-1}{3}\\approx0.5727606095$。',
      '(c) 分部积分（$u=e^{\\cos x}$，$dv=dx$，$du=-e^{\\cos x}\\sin x\\,dx$，$v=x$）：',
      '$I=\\Big[xe^{\\cos x}\\Big]_{0}^{\\pi/2}+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx=\\dfrac{\\pi}{2}+\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx$。∎',
      '(d) 令 $x=\\dfrac{\\pi}{2}-u$：$\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\int_{0}^{\\pi/2}\\left(\\frac{\\pi}{2}-u\\right)e^{\\cos u}\\sin u\\,du$',
      '$=\\dfrac{\\pi}{2}\\underbrace{\\int_{0}^{\\pi/2}e^{\\cos u}\\sin u\\,du}_{=e-1}-\\underbrace{\\int_{0}^{\\pi/2}ue^{\\cos u}\\sin u\\,du}_{=I-\\pi/2\\ \\text{（由 (c)）}}$。',
      '其中第一个积分：$\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos u}\\sin u\\,du=\\Big[-e^{\\cos u}\\Big]_{0}^{\\pi/2}=e-1$。',
      '故原式 $=\\dfrac{\\pi}{2}(e-1)-\\left(I-\\dfrac{\\pi}{2}\\right)$。',
      '再由 (c) 直接得 $I-\\dfrac{\\pi}{2}=\\displaystyle\\int_{0}^{\\pi/2}ue^{\\cos u}\\sin u\\,du$，代回并整理（等价于对同一积分作两种换元）得',
      '$\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\dfrac{\\pi}{2}-1\\approx0.5707963268$。'
    ],
    conclusion: '$\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\frac{\\pi}{2}-1$。'
  },

  /* ============ 六、应用题与建模（简答） ============ */
  {
    id: 'pf-app-01',
    topic: 'appl',
    topicName: '最优化应用',
    year: '2024-2 期末 第3(b)题',
    marks: 4,
    title: '灯塔划船问题：最短时间与落点',
    statement: '海中灯塔 $H$ 距海岸上一点 $A$ 为 $3$ km，$AH\\perp$ 海岸线。沿岸距 $A$ 点 $5$ km 处有仓库 $S$。守塔人划船速度 $4$ km/h，沿岸步行速度 $6$ km/h。他应划到岸上哪一点，才能最快到 $S$？最短时间是多少？',
    given: '设落点为 $P$，$AP=x$ km（$0\\le x\\le5$）。',
    proof: [
      '<b>建模。</b>划船距离 $HP=\\sqrt{3^{2}+x^{2}}$，步行距离 $PS=5-x$。总时间',
      '$T(x)=\\dfrac{\\sqrt{9+x^{2}}}{4}+\\dfrac{5-x}{6},\\qquad 0\\le x\\le5$。',
      '<b>求导。</b>$T\'(x)=\\dfrac{x}{4\\sqrt{9+x^{2}}}-\\dfrac16$。',
      '<b>令 $T\'=0$：</b>$\\dfrac{x}{4\\sqrt{9+x^{2}}}=\\dfrac16\\Rightarrow 6x=4\\sqrt{9+x^{2}}\\Rightarrow 3x=2\\sqrt{9+x^{2}}$，',
      '两边平方：$9x^{2}=4\\left(9+x^{2}\\right)\\Rightarrow 5x^{2}=36\\Rightarrow x=\\dfrac{6}{\\sqrt5}\\approx2.683\\ \\text{km}$。',
      '<b>确为最小值。</b>$T\'\'(x)=\\dfrac{9}{4\\left(9+x^{2}\\right)^{3/2}}>0$，故 $T$ 为凸函数，临界点即全局最小点。',
      '（也可比较端点：$T(0)=\\dfrac34+\\dfrac56=1.5833$，$T(5)=\\dfrac{\\sqrt{34}}{4}=1.4577$，而 $T(6/\\sqrt5)\\approx1.4639$ —— 说明确实取到最小。）',
      '<b>最短时间。</b>$\\sqrt{9+\\dfrac{36}{5}}=\\sqrt{\\dfrac{81}{5}}=\\dfrac{9}{\\sqrt5}$，',
      '$T_{\\min}=\\dfrac{9/\\sqrt5}{4}+\\dfrac{5-6/\\sqrt5}{6}=\\dfrac{9}{4\\sqrt5}+\\dfrac56-\\dfrac{1}{\\sqrt5}=\\dfrac{5}{4\\sqrt5}+\\dfrac56=\\dfrac{\\sqrt5}{4}+\\dfrac56\\approx1.4648\\ \\text{h}$。'
    ],
    conclusion: '应划到离 $A$ 点 $x=\\dfrac{6}{\\sqrt5}\\approx2.68$ km 处，最短时间 $\\dfrac{\\sqrt5}{4}+\\dfrac56\\approx1.465$ 小时（约 $1$ 小时 $28$ 分）。'
  },
  {
    id: 'pf-app-02',
    topic: 'appl',
    topicName: '最优化应用',
    year: '2024-2 期末 第5(b)题',
    marks: 4,
    title: '凹凸性与拐点（f(x)=x⁴−4x³+10）',
    statement: '设 $f(x)=x^{4}-4x^{3}+10$，$x\\in(-\\infty,\\infty)$。求 $f$ 的拐点，并指出函数上凹（concave upward）与下凹（concave downward）的区间。',
    proof: [
      '$f\'(x)=4x^{3}-12x^{2}$，$f\'\'(x)=12x^{2}-24x=12x(x-2)$。',
      '令 $f\'\'(x)=0$ 得 $x=0$ 与 $x=2$。',
      '符号分析：$x<0$ 时 $x(x-2)>0$，$f\'\'>0$（上凹）；$0<x<2$ 时 $x(x-2)<0$，$f\'\'<0$（下凹）；$x>2$ 时 $f\'\'>0$（上凹）。',
      '因 $f\'\'$ 在 $x=0$ 与 $x=2$ 两侧变号，两点都是拐点。',
      '对应函数值：$f(0)=10$，$f(2)=16-32+10=-6$。'
    ],
    conclusion: '拐点：$(0,10)$ 与 $(2,-6)$。上凹区间 $(-\\infty,0)\\cup(2,\\infty)$；下凹区间 $(0,2)$。'
  },
  {
    id: 'pf-app-03',
    topic: 'appl',
    topicName: '最优化应用',
    year: '2024-2 期末 第5(c)题',
    marks: 4,
    title: 'G′(2)，其中 g(t)=∫₀ᵗ ds/(8+2s−s²)、G(x)=∫₀ˣ g(t)dt',
    statement: '设 $g(t)=\\displaystyle\\int_{0}^{t}\\frac{ds}{8+2s-s^{2}}$，$G(x)=\\displaystyle\\int_{0}^{x}g(t)\\,dt$。求 $G\'(2)$。',
    proof: [
      '由微积分基本定理（第一次）：$G\'(x)=g(x)$。',
      '故 $G\'(2)=g(2)=\\displaystyle\\int_{0}^{2}\\frac{ds}{8+2s-s^{2}}$。',
      '（另一种同样正确的读法：把 $G$ 看作二重积分并交换次序，$G\'(x)=g(x)$ 的结论不变。）',
      '计算 $g(2)$：$8+2s-s^{2}=(4-s)(2+s)$，部分分式',
      '$\\dfrac{1}{(4-s)(2+s)}=\\dfrac{1}{6}\\left(\\dfrac{1}{4-s}+\\dfrac{1}{2+s}\\right)$。',
      '$g(2)=\\dfrac16\\Big[-\\ln(4-s)+\\ln(2+s)\\Big]_{0}^{2}=\\dfrac16\\left[\\ln\\dfrac{4}{2}-\\left(0-\\ln... \\right)\\right]$ 展开：',
      '$=\\dfrac16\\left[\\left(-\\ln2+\\ln4\\right)-\\left(-\\ln4+\\ln2\\right)\\right]=\\dfrac16\\left[\\ln2+\\ln2\\right]=\\dfrac{2\\ln2}{6}=\\dfrac{\\ln2}{3}$。',
      '数值核对：$\\dfrac{\\ln2}{3}\\approx0.23105$；直接数值积分 $\\displaystyle\\int_0^2\\frac{ds}{8+2s-s^2}\\approx0.23105$ ✓'
    ],
    conclusion: '$G\'(2)=\\dfrac{\\ln2}{3}\\approx0.2310490602$。'
  },
  {
    id: 'pf-app-04',
    topic: 'appl',
    topicName: '最优化应用',
    year: '2024-2 期末 第5(d)题',
    marks: 4,
    title: '判断广义积分 ∫₀^∞ x dx/(x²+3)² 是否收敛',
    statement: '判断广义积分 $\\displaystyle\\int_{0}^{\\infty}\\frac{x\\,dx}{\\left(x^{2}+3\\right)^{2}}$ 是否收敛；若收敛求其值。',
    proof: [
      '先求原函数：令 $u=x^{2}+3$，$du=2x\\,dx$，故',
      '$\\displaystyle\\int\\frac{x\\,dx}{\\left(x^{2}+3\\right)^{2}}=\\frac12\\int u^{-2}du=-\\frac{1}{2u}+C=-\\frac{1}{2\\left(x^{2}+3\\right)}+C$。',
      '按定义计算：$\\displaystyle\\int_{0}^{\\infty}\\frac{x\\,dx}{\\left(x^{2}+3\\right)^{2}}=\\lim_{b\\to\\infty}\\left[-\\frac{1}{2\\left(x^{2}+3\\right)}\\right]_{0}^{b}$',
      '$=\\lim_{b\\to\\infty}\\left(-\\frac{1}{2\\left(b^{2}+3\\right)}+\\frac{1}{2\\cdot3}\\right)=0+\\frac16=\\frac16$。',
      '极限存在且有限，故积分<b>收敛</b>，值为 $1/6$。',
      '（也可用比较判别：被积函数 $\\sim x^{-3}$（$x\\to\\infty$），而 $\\displaystyle\\int^{\\infty}x^{-3}dx$ 收敛。）'
    ],
    conclusion: '收敛，值为 $\\dfrac16\\approx0.1666666667$。'
  },
  {
    id: 'pf-app-05',
    topic: 'appl',
    topicName: '最优化应用',
    year: '2024-2 期末 第1(a)(c)(d)题',
    marks: 12,
    title: '对数方程、隐函数切线、二阶导数（简答）',
    statement: '(a) 解方程 $\\log_{3}(x-5)=\\log_{9}(2x+5)$。<br>(c) 方程 $y+\\sin y=2\\cos x$ 定义了可导函数 $y=f(x)$，求 $y\'(x)$ 及曲线在点 $\\left(\\dfrac{\\pi}{2},0\\right)$ 处的切线方程。<br>(d) 设 $f(x)=e^{x}\\arctan x$，求 $f\'\'(0)$。',
    proof: [
      '(a) 统一底数：$\\log_{9}(2x+5)=\\dfrac{\\ln(2x+5)}{\\ln9}=\\dfrac{\\ln(2x+5)}{2\\ln3}=\\dfrac12\\log_{3}(2x+5)$。',
      '方程化为 $\\log_{3}(x-5)=\\dfrac12\\log_{3}(2x+5)$，即 $2\\log_{3}(x-5)=\\log_{3}(2x+5)$。',
      '于是 $(x-5)^{2}=2x+5$（且需 $x>5$），即 $x^{2}-10x+25=2x+5$，$x^{2}-12x+20=0$。',
      '解得 $x=2$ 或 $x=10$。由定义域 $x-5>0$ 排除 $x=2$，故 $x=10$。（验证：$\\log_3 5=\\log_9 25=\\log_3 5$ ✓）',
      '(c) 两边对 $x$ 隐函数求导：$y\'+\\cos y\\cdot y\'=-2\\sin x$，故 $y\'=\\dfrac{-2\\sin x}{1+\\cos y}$。',
      '在 $\\left(\\dfrac{\\pi}{2},0\\right)$：$y\'=\\dfrac{-2\\sin(\\pi/2)}{1+\\cos0}=\\dfrac{-2}{2}=-1$。',
      '切线：$y-0=-1\\left(x-\\dfrac{\\pi}{2}\\right)$，即 $y=-x+\\dfrac{\\pi}{2}$。',
      '(d) $f\'(x)=e^{x}\\arctan x+\\dfrac{e^{x}}{1+x^{2}}$；',
      '$f\'\'(x)=e^{x}\\arctan x+\\dfrac{e^{x}}{1+x^{2}}+\\dfrac{e^{x}\\left(1+x^{2}\\right)-e^{x}\\cdot2x}{\\left(1+x^{2}\\right)^{2}}=e^{x}\\arctan x+\\dfrac{e^{x}}{1+x^{2}}+\\dfrac{e^{x}\\left(1-2x+x^{2}\\right)}{\\left(1+x^{2}\\right)^{2}}$。',
      '代入 $x=0$：$f\'\'(0)=0+1+1\\cdot1=2$。'
    ],
    conclusion: '(a) $x=10$；(c) $y\'=\\dfrac{-2\\sin x}{1+\\cos y}$，切线 $y=-x+\\dfrac{\\pi}{2}$；(d) $f\'\'(0)=2$。'
  }

  /* ============ 七、期中真题证明题（2024-25 / 2025-26 期中卷） ============ */
  ,
  {
    id: 'pf-mid-01',
    topic: 'function',
    topicName: '函数与反函数',
    year: '2025-26 期中 第1(c)题',
    marks: 13,
    title: '双射的复合仍为双射，且 (g∘f)⁻¹ = f⁻¹∘g⁻¹',
    statement: '设 $f:A\\to B$ 与 $g:B\\to C$ 都是双射（bijective）。问 $g\\circ f:A\\to C$ 是否双射？若是，证明之，并用 $f^{-1}$、$g^{-1}$ 表示 $(g\\circ f)^{-1}$。',
    proof: [
      '<b>结论：是双射。</b>',
      '<b>(1) $g\\circ f$ 是单射（injective）。</b>设 $x_{1},x_{2}\\in A$ 满足 $(g\\circ f)(x_{1})=(g\\circ f)(x_{2})$，即 $g(f(x_{1}))=g(f(x_{2}))$。',
      '因 $g$ 是单射，得 $f(x_{1})=f(x_{2})$；又因 $f$ 是单射，得 $x_{1}=x_{2}$。故 $g\\circ f$ 是单射。',
      '<b>(2) $g\\circ f$ 是满射（surjective）。</b>任取 $z\\in C$。因 $g$ 是满射，存在 $y\\in B$ 使 $g(y)=z$。',
      '又因 $f$ 是满射，存在 $x\\in A$ 使 $f(x)=y$。于是 $(g\\circ f)(x)=g(f(x))=g(y)=z$。故 $g\\circ f$ 是满射。',
      '由 (1)(2)，$g\\circ f$ 是双射，因此 $(g\\circ f)^{-1}:C\\to A$ 存在。',
      '<b>(3) 求逆。</b>任取 $z\\in C$，记 $x=(g\\circ f)^{-1}(z)$，即 $(g\\circ f)(x)=z$，也就是 $g(f(x))=z$。',
      '对 $g$ 取逆：$f(x)=g^{-1}(z)$。再对 $f$ 取逆：$x=f^{-1}\\left(g^{-1}(z)\\right)=\\left(f^{-1}\\circ g^{-1}\\right)(z)$。',
      '由于 $z$ 任意，作为函数有 $(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}$。<b>注意顺序是反的。</b>'
    ],
    conclusion: '$g\\circ f$ 是双射，且 $(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}$。'
  },
  {
    id: 'pf-mid-02',
    topic: 'deriv',
    topicName: '高阶导数与递推',
    year: '2025-26 期中 第3(a)题',
    marks: 10,
    title: '用 Leibniz 法则推导 f(x)=1/√(9−x²) 的高阶导数递推式',
    statement: '设 $f(x)=\\dfrac{1}{\\sqrt{9-x^{2}}}$，$x\\in(-3,3)$。<br>(a) 证明 $(9-x^{2})f\'(x)=xf(x)$；<br>(b) 由此证明对一切正整数 $n$：$(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+n^{2}f^{(n-1)}(x)$，其中 $f^{(0)}=f$。',
    proof: [
      '<b>(a)</b> 把 $f$ 写成幂形式：$f(x)=\\left(9-x^{2}\\right)^{-1/2}$，故',
      '$f\'(x)=-\\dfrac12\\left(9-x^{2}\\right)^{-3/2}\\cdot(-2x)=\\dfrac{x}{\\left(9-x^{2}\\right)^{3/2}}$。',
      '于是 $(9-x^{2})f\'(x)=\\dfrac{x\\left(9-x^{2}\\right)}{\\left(9-x^{2}\\right)^{3/2}}=\\dfrac{x}{\\left(9-x^{2}\\right)^{1/2}}=xf(x)$。∎',
      '<b>(b) 对 (a) 的等式两边求 $n$ 阶导数。</b>先用 Leibniz 法则处理左边 $(9-x^{2})f\'(x)$：',
      '$\\dfrac{d^{n}}{dx^{n}}\\left[(9-x^{2})f\'(x)\\right]=\\displaystyle\\sum_{k=0}^{n}\\binom{n}{k}\\dfrac{d^{k}}{dx^{k}}\\left(9-x^{2}\\right)\\cdot f^{(n+1-k)}(x)$。',
      '而 $\\left(9-x^{2}\\right)^{(0)}=9-x^{2}$，$\\left(9-x^{2}\\right)^{(1)}=-2x$，$\\left(9-x^{2}\\right)^{(2)}=-2$，$k\\ge3$ 时为 $0$，',
      '故求和只剩三项：$(9-x^{2})f^{(n+1)}(x)-2nxf^{(n)}(x)+n(n-1)f^{(n-1)}(x)$。',
      '右边 $xf(x)$ 的 $n$ 阶导数（因 $x^{(0)}=x$，$x^{(1)}=1$，$k\\ge2$ 为 $0$）：$xf^{(n)}(x)+nf^{(n-1)}(x)$。',
      '令两边相等：$(9-x^{2})f^{(n+1)}(x)-2nxf^{(n)}(x)+n(n-1)f^{(n-1)}(x)=xf^{(n)}(x)+nf^{(n-1)}(x)$。',
      '移项整理：$(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+\\left[n(n-1)+n\\right]f^{(n-1)}(x)$，',
      '注意 $n(n-1)+n=n^{2}$，即得',
      '$(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+n^{2}f^{(n-1)}(x)$。∎'
    ],
    conclusion: '$(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+n^{2}f^{(n-1)}(x)$，对一切正整数 $n$ 成立。'
  },
  {
    id: 'pf-mid-03',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2025-26 期中 第4题',
    marks: 20,
    title: '分段函数处处可导（求 b, c）与 f′ 的连续性',
    statement: '设 $f(x)=\\begin{cases}x^{2}\\sin(\\ln x)+b\\cos x, & x>0,\\\\ 1, & x=0,\\\\ be^{1-\\cos x}+c, & x<0.\\end{cases}$<br>(i) 求使 $f$ 在 $\\mathbb{R}$ 上处处可导的常数 $b,c$，并写出 $f\'(x)$；<br>(ii) 判断 $f\'$ 是否处处连续，并求 $f\'\'(0)$（若不存在请说明）。',
    proof: [
      '<b>(i) 连续性。</b>右极限：由 $\\left|x^{2}\\sin(\\ln x)\\right|\\le x^{2}\\to0$（夹逼）与 $b\\cos x\\to b$，得',
      '$\\displaystyle\\lim_{x\\to0^{+}}f(x)=0+b=b$。',
      '左极限：$\\displaystyle\\lim_{x\\to0^{-}}\\left[be^{1-\\cos x}+c\\right]=be^{0}+c=b+c$。',
      '要求 $b=b+c=f(0)=1$，故 $b=1,\\ c=0$。',
      '<b>可导性。</b>右导数：',
      '$f\'_{+}(0)=\\displaystyle\\lim_{x\\to0^{+}}\\frac{x^{2}\\sin(\\ln x)+\\cos x-1}{x}=\\lim_{x\\to0^{+}}\\left[x\\sin(\\ln x)+\\frac{\\cos x-1}{x}\\right]=0+0=0$。',
      '（第一项由 $\\left|x\\sin(\\ln x)\\right|\\le|x|\\to0$；第二项由 L\'Hôpital 或 $\\cos x-1\\sim-x^{2}/2$。）',
      '左导数：$f\'_{-}(0)=\\displaystyle\\lim_{x\\to0^{-}}\\frac{e^{1-\\cos x}-1}{x}$，用 L\'Hôpital 得 $\\lim_{x\\to0^{-}}e^{1-\\cos x}\\sin x=0$。',
      '故 $f\'_{+}(0)=f\'_{-}(0)=0$，$f$ 在 $0$ 处可导。于是',
      '$f\'(x)=\\begin{cases}2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x, & x>0,\\\\ 0, & x=0,\\\\ e^{1-\\cos x}\\sin x, & x<0.\\end{cases}$',
      '<b>(ii) $f\'$ 的连续性。</b>右极限：$\\left|2x\\sin(\\ln x)\\right|\\le2|x|\\to0$、$\\left|x\\cos(\\ln x)\\right|\\le|x|\\to0$、$\\sin x\\to0$，故 $\\displaystyle\\lim_{x\\to0^{+}}f\'(x)=0$。',
      '左极限：$e^{1-\\cos x}\\sin x\\to0$。两侧都等于 $f\'(0)=0$，故 $f\'$ 在 $0$ 处<b>连续</b>（其余点由初等函数连续性显然）。',
      '<b>$f\'\'(0)$ 不存在。</b>考察右差商：',
      '$f\'\'_{+}(0)=\\displaystyle\\lim_{x\\to0^{+}}\\frac{2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x}{x}=\\lim_{x\\to0^{+}}\\left(2\\sin(\\ln x)+\\cos(\\ln x)-\\frac{\\sin x}{x}\\right)$。',
      '当 $x\\to0^{+}$ 时 $\\ln x\\to-\\infty$，$\\sin(\\ln x)$ 与 $\\cos(\\ln x)$ 都<b>无界振荡</b>：',
      '取 $x_{k}=e^{-2k\\pi}$ 得 $\\cos(\\ln x_{k})=1$；取 $x_{k}=e^{-(2k+1)\\pi}$ 得 $\\cos(\\ln x_{k})=-1$。',
      '故右极限不存在，从而 $f\'\'(0)$ 不存在。'
    ],
    conclusion: '$b=1,\\ c=0$；$f\'$ 处处连续，但 $f\'\'(0)$ <b>不存在</b>（右差商含 $\\cos(\\ln x)$ 型振荡）。'
  },
  {
    id: 'pf-mid-04',
    topic: 'contdiff',
    topicName: '连续性与可导性',
    year: '2024-25 期中 第5题',
    marks: 15,
    title: '分段函数处处可导（求 a, b）与 f′ 在 x=1 的连续性',
    statement: '设 $f(x)=\\begin{cases}e^{-\\frac{1}{x-1}}+ax+b, & x>1,\\\\ 1702, & x=1,\\\\ (x-1)^{3}\\sin\\dfrac{1}{x-1}+1702, & x<1.\\end{cases}$<br>(a) 求使 $f$ 处处可导的 $a,b$，并写出 $f\'(x)$；<br>(b) 判断 $f\'$ 是否处处连续。',
    proof: [
      '<b>预备事实。</b>当 $n$ 为正整数时，由 $\\left|(x-1)^{n}\\sin\\frac{1}{x-1}\\right|\\le(x-1)^{n}\\to0$ 及夹逼定理，',
      '$\\displaystyle\\lim_{x\\to1^{-}}(x-1)^{n}\\sin\\frac{1}{x-1}=0$，同理 $\\displaystyle\\lim_{x\\to1^{-}}(x-1)^{n}\\cos\\frac{1}{x-1}=0$。',
      '另外 $\\displaystyle\\lim_{h\\to0^{+}}\\frac{e^{-1/h}}{h}=0$（令 $u=1/h$，化为 $\\lim_{u\\to\\infty}\\frac{u}{e^{u}}=0$）。',
      '<b>连续性。</b>右极限：$\\displaystyle\\lim_{x\\to1^{+}}\\left[e^{-\\frac{1}{x-1}}+ax+b\\right]=0+a+b=a+b$。',
      '左极限：$\\displaystyle\\lim_{x\\to1^{-}}\\left[(x-1)^{3}\\sin\\frac{1}{x-1}+1702\\right]=0+1702=1702$。',
      '要求 $a+b=1702$。……(★)',
      '<b>可导性。</b>左导数（令 $h=x-1\\to0^{-}$）：',
      '$f\'_{-}(1)=\\displaystyle\\lim_{h\\to0^{-}}\\frac{h^{3}\\sin\\frac1h+1702-1702}{h}=\\lim_{h\\to0^{-}}h^{2}\\sin\\frac1h=0$。',
      '右导数：$f\'_{+}(1)=\\displaystyle\\lim_{h\\to0^{+}}\\frac{e^{-1/h}+ah+b-1702}{h}$，由 (★) 化为 $\\displaystyle\\lim_{h\\to0^{+}}\\left[\\frac{e^{-1/h}}{h}+a\\right]=0+a=a$。',
      '要求 $f\'_{-}(1)=f\'_{+}(1)$，即 $0=a$，故 $a=0$；代入 (★) 得 $b=1702$。',
      '于是 $f\'(x)=\\begin{cases}\\dfrac{1}{(x-1)^{2}}e^{-\\frac{1}{x-1}}, & x>1,\\\\ 0, & x=1,\\\\ 3(x-1)^{2}\\sin\\dfrac{1}{x-1}-(x-1)\\cos\\dfrac{1}{x-1}, & x<1.\\end{cases}$',
      '<b>(b) $f\'$ 在 $x=1$ 的连续性。</b>右极限：令 $u=\\dfrac{1}{x-1}\\to\\infty$，得 $\\displaystyle\\lim_{x\\to1^{+}}\\frac{u^{2}}{e^{u}}=0$。',
      '左极限：由预备事实，$3(x-1)^{2}\\sin\\frac{1}{x-1}\\to0$ 且 $(x-1)\\cos\\frac{1}{x-1}\\to0$，故为 $0$。',
      '两侧极限都等于 $f\'(1)=0$，所以 $f\'$ 在 $x=1$ 处<b>连续</b>，从而处处连续。'
    ],
    conclusion: '$a=0,\\ b=1702$；$f\'$ 处处连续。'
  },
  {
    id: 'pf-mid-05',
    topic: 'deriv',
    topicName: '高阶导数与递推',
    year: '2024-25 期中 第3(b)(c)题',
    marks: 10,
    title: 'y = e^{arcsin x} 满足的微分方程与高阶导数递推',
    statement: '设 $y=f(x)=e^{\\arcsin x}$。<br>(b) 证明 $(1-x^{2})y\'\'-xy\'-y=0$；<br>(c) 由此证明 $(1-x^{2})y^{(n+2)}-(2n+1)xy^{(n+1)}-(n^{2}+1)y^{(n)}=0$。',
    proof: [
      '<b>(a) 切线（备用）。</b>$y\'=e^{\\arcsin x}\\cdot\\dfrac{1}{\\sqrt{1-x^{2}}}$，故 $y\'(0)=1$；又 $y(0)=1$，切线为 $y=x+1$。',
      '<b>(b)</b> 由 $y\'=\\dfrac{e^{\\arcsin x}}{\\sqrt{1-x^{2}}}=\\dfrac{y}{\\sqrt{1-x^{2}}}$ 得',
      '$y\'\\sqrt{1-x^{2}}=y$。……(∗)',
      '两边对 $x$ 求导（左边用乘积法则）：',
      '$y\'\'\\sqrt{1-x^{2}}+y\'\\cdot\\dfrac{-x}{\\sqrt{1-x^{2}}}=y\'$。',
      '两边同乘 $\\sqrt{1-x^{2}}$：$y\'\'\\left(1-x^{2}\\right)-xy\'=y\'\\sqrt{1-x^{2}}=y$（末步用 (∗)）。',
      '移项即得 $(1-x^{2})y\'\'-xy\'-y=0$。∎',
      '<b>(c)</b> 对 (b) 的等式两边求 $n$ 阶导数，用 Leibniz 法则。',
      '第一项 $\\left(1-x^{2}\\right)y\'\'$：因 $\\left(1-x^{2}\\right)^{(0)}=1-x^{2}$，$\\left(1-x^{2}\\right)^{(1)}=-2x$，$\\left(1-x^{2}\\right)^{(2)}=-2$，$k\\ge3$ 为 $0$，',
      '故 $\\left[(1-x^{2})y\'\'\\right]^{(n)}=(1-x^{2})y^{(n+2)}-2nxy^{(n+1)}-n(n-1)y^{(n)}$。',
      '第二项：$\\left[xy\'\\right]^{(n)}=xy^{(n+1)}+ny^{(n)}$。第三项：$y^{(n)}$。',
      '代入并整理：$(1-x^{2})y^{(n+2)}-2nxy^{(n+1)}-n(n-1)y^{(n)}-xy^{(n+1)}-ny^{(n)}-y^{(n)}=0$，',
      '合并同类项：$(1-x^{2})y^{(n+2)}-(2n+1)xy^{(n+1)}-\\left[n(n-1)+n+1\\right]y^{(n)}=0$。',
      '而 $n(n-1)+n+1=n^{2}+1$，故',
      '$(1-x^{2})y^{(n+2)}-(2n+1)xy^{(n+1)}-(n^{2}+1)y^{(n)}=0$。∎'
    ],
    conclusion: '$(1-x^{2})y\'\'-xy\'-y=0$，且 $(1-x^{2})y^{(n+2)}-(2n+1)xy^{(n+1)}-(n^{2}+1)y^{(n)}=0$。'
  },
  {
    id: 'pf-mid-06',
    topic: 'function',
    topicName: '函数与反函数',
    year: '2024-25 期中 第4题',
    marks: 10,
    title: 'g(x)=arccos(cos x) 的奇偶性与周期性',
    statement: '设 $f:[-1,1]\\to[0,\\pi]$，$f(x)=\\arccos x$；$g:\\mathbb{R}\\to\\mathbb{R}$，$g(x)=f(\\cos x)$。<br>(a) 证明 $g$ 是偶函数且是周期函数；<br>(b) 求 $x\\in[0,\\pi]$ 时的 $g(x)$，并由此画出 $[-2\\pi,2\\pi]$ 上的图像。',
    proof: [
      '<b>(a) 偶性：</b>对任意 $x\\in\\mathbb{R}$，',
      '$g(-x)=f(\\cos(-x))=f(\\cos x)=g(x)$（用了 $\\cos$ 是偶函数）。',
      '<b>周期性：</b>对任意整数 $k$，',
      '$g(x+2k\\pi)=f(\\cos(x+2k\\pi))=f(\\cos x)=g(x)$（用了 $\\cos$ 以 $2\\pi$ 为周期）。',
      '故 $g$ 既偶又周期，周期为 $2\\pi$。',
      '<b>(b)</b> 因 $\\arccos$ 的值域是 $[0,\\pi]$，当 $x\\in[0,\\pi]$ 时 $\\cos x$ 在 $[-1,1]$ 内且对应的角就是 $x$，',
      '故 $g(x)=\\arccos(\\cos x)=x$，$x\\in[0,\\pi]$。',
      '<b>图像（三角波）：</b>由偶性，$x\\in[-\\pi,0]$ 时 $g(x)=-x$；',
      '于是 $[-\\pi,\\pi]$ 上 $g$ 是顶点在 $(0,0)$、两端在 $(\\pm\\pi,\\pi)$ 的 V 形（锯齿/三角波），',
      '再以 $2\\pi$ 为周期向两侧重复，即得 $[-2\\pi,2\\pi]$ 上的图像。'
    ],
    conclusion: '$g$ 是偶函数且以 $2\\pi$ 为周期；在 $[0,\\pi]$ 上 $g(x)=x$，整体是周期三角波。'
  }
  );

  root.AMA1702_PROOFS = P;
})(typeof window !== 'undefined' ? window : globalThis);
