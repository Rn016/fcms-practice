/* ==========================================================================
   AMA1702 刷题系统 — 历年期中真题（计算题）
   来源：2024-25 S1 期中卷、2025-26 S1 期中卷
   按主题并入期中模块。答案以官方解答为准，并已用 sympy / mpmath 复核。
   证明类小问见 questions/proofs.js（pf-* 系列）
   ========================================================================== */
(function (root) {
  'use strict';
  var Q = [];

  Q.push(
  /* ============ 集合 / 绝对值 / 不等式（含区间与分段） ============ */
  {
    id: 'mp-1-01', topic: 'set', topicName: '集合 / 绝对值 / 不等式',
    weight: 2, difficulty: 3, examRef: '2025-26 期中 第1(a)(iii)题',
    prompt: '设 $f(x)=\\sqrt{\\dfrac{x+3}{x-1}-3(x-1)}$。求 $f$ 的最大可能定义域（写成区间）。',
    blanks: [{ label: '$\\mathrm{Dom}(f)$', answer: { exact: '(-inf,0]U(1,7/3]', alts: ['(-\\infty,0]\\cup(1,\\tfrac73]', 'x<=0 or 1<x<=7/3'], setLike: true } }],
    solution: [
      '化简根号内：$\\dfrac{x+3}{x-1}-3(x-1)=\\dfrac{x+3-3(x-1)^{2}}{x-1}=\\dfrac{-3x^{2}+7x}{x-1}=\\dfrac{x(7-3x)}{x-1}$。',
      '要求 $\\dfrac{x(7-3x)}{x-1}\\ge0$ 且 $x\\ne1$。',
      '符号分析：零点 $x=0$、$x=\\dfrac73$、断点 $x=1$。',
      '在 $(-\\infty,0]$ 上：$x\\le0$，$7-3x>0$，$x-1<0$ $\\Rightarrow$ 商 $\\ge0$ ✔',
      '在 $(0,1)$ 上：$x>0$，$7-3x>0$，$x-1<0$ $\\Rightarrow$ 商 $<0$ ✘',
      '在 $\\left(1,\\dfrac73\\right]$ 上：$x>0$，$7-3x\\ge0$，$x-1>0$ $\\Rightarrow$ 商 $\\ge0$ ✔',
      '在 $\\left(\\dfrac73,\\infty\\right)$ 上：$x>0$，$7-3x<0$，$x-1>0$ $\\Rightarrow$ 商 $<0$ ✘',
      '故 $\\mathrm{Dom}(f)=(-\\infty,0]\\cup\\left(1,\\dfrac73\\right]$。'
    ]
  },
  {
    id: 'mp-1-02', topic: 'set', topicName: '集合 / 绝对值 / 不等式',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第1(a)(i)题',
    prompt: '设 $f(x)=\\sqrt{\\dfrac{(x+3)(x-4)}{x-1}-2}$。求 $f$ 的最大可能定义域（写成区间）。',
    blanks: [{ label: '$\\mathrm{Dom}(f)$', answer: { exact: '[-2,1)U[5,inf)', alts: ['[-2,1)\\cup[5,+\\infty)', '-2<=x<1 or x>=5'], setLike: true } }],
    solution: [
      '化简：$\\dfrac{(x+3)(x-4)}{x-1}-2=\\dfrac{x^{2}-x-12-2x+2}{x-1}=\\dfrac{x^{2}-3x-10}{x-1}=\\dfrac{(x-5)(x+2)}{x-1}$。',
      '要求 $\\dfrac{(x-5)(x+2)}{x-1}\\ge0$ 且 $x\\ne1$。零点 $-2$、$5$，断点 $1$。',
      '符号分析：$x\\in[-2,1)$ 时分子 $\\le0$、分母 $<0$，商 $\\ge0$ ✔；',
      '$x\\in(1,5)$ 时分子 $<0$、分母 $>0$，商 $<0$ ✘；$x\\in[5,\\infty)$ 时商 $\\ge0$ ✔。',
      '故 $\\mathrm{Dom}(f)=[-2,1)\\cup[5,+\\infty)$。'
    ]
  },
  {
    id: 'mp-1-03', topic: 'set', topicName: '集合 / 绝对值 / 不等式',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第1(a)(i)题',
    prompt: '设 $h(x)=\\arcsin\\left(e^{x}\\right)$。求 $h$ 的最大可能定义域（写成区间）。',
    blanks: [{ label: '$\\mathrm{Dom}(h)$', answer: { exact: '(-inf,0]', alts: ['x<=0', '(-\\infty,0]'], setLike: true } }],
    solution: [
      '$\\arcsin$ 的定义域要求 $-1\\le e^{x}\\le1$。因 $e^{x}>0$ 恒成立，只需 $e^{x}\\le1$，',
      '即 $x\\le\\ln1=0$。故 $\\mathrm{Dom}(h)=(-\\infty,0]$。'
    ]
  },
  {
    id: 'mp-1-04', topic: 'set', topicName: '集合 / 绝对值 / 不等式',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第1(b)题',
    prompt: '设 $f(x)=\\left|x^{2}-4|x|+3\\right|$，$\\mathrm{Dom}(f)=(1,2)$。已知 $f$ 严格递增，求 $f^{-1}(x)$。',
    blanks: [{ label: '$f^{-1}(x)$', answer: { exact: '2-sqrt(1-x)', alts: ['2-\\sqrt{1-x}'], vars: ['x'] } }],
    solution: [
      '在 $1<x<2$ 上 $x>0$，故 $f(x)=\\left|x^{2}-4x+3\\right|=\\left|(x-3)(x-1)\\right|$。',
      '因 $1<x<2$，有 $(x-3)(x-1)<0$，故 $f(x)=-(x-3)(x-1)=-x^{2}+4x-3=1-(x-2)^{2}$。',
      '注意 $x\\in(1,2)$ 时 $1-(x-2)^{2}\\in(0,1)$，即值域为 $(0,1)$。',
      '令 $y=1-(x-2)^{2}\\Rightarrow(x-2)^{2}=1-y\\Rightarrow x-2=\\pm\\sqrt{1-y}$。',
      '因 $x<2$，取负号：$x=2-\\sqrt{1-y}$。故 $f^{-1}(x)=2-\\sqrt{1-x}$（$x\\in(0,1)$）。'
    ]
  },
  {
    id: 'mp-1-05', topic: 'set', topicName: '集合 / 绝对值 / 不等式',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第1(c)题',
    prompt: '设 $f(x)=\\left(\\dfrac12\\sin x+\\dfrac{\\sqrt3}{2}\\cos x\\right)^{2}$，$\\mathrm{Dom}(f)=\\left[-\\dfrac{\\pi}{3},0\\right]$。已知反函数存在，求 $f^{-1}(x)$。',
    blanks: [{ label: '$f^{-1}(x)$', answer: { exact: 'arcsin(sqrt(x))-pi/3', alts: ['\\arcsin(\\sqrt x)-\\frac{\\pi}{3}', 'asin(sqrt(x))-pi/3'], vars: ['x'] } }],
    solution: [
      '注意到 $\\cos\\dfrac\\pi3=\\dfrac12$，$\\sin\\dfrac\\pi3=\\dfrac{\\sqrt3}{2}$，故',
      '$f(x)=\\left(\\sin x\\cos\\dfrac\\pi3+\\cos x\\sin\\dfrac\\pi3\\right)^{2}=\\sin^{2}\\left(x+\\dfrac\\pi3\\right)$。',
      '当 $x\\in\\left[-\\dfrac\\pi3,0\\right]$ 时 $x+\\dfrac\\pi3\\in\\left[0,\\dfrac\\pi3\\right]$，$\\sin\\left(x+\\frac\\pi3\\right)\\ge0$，',
      '故 $\\sqrt f=\\sin\\left(x+\\dfrac\\pi3\\right)$，即 $x+\\dfrac\\pi3=\\arcsin\\sqrt y$。',
      '因此 $f^{-1}(x)=\\arcsin\\sqrt x-\\dfrac\\pi3$。'
    ]
  },

  /* ============ 函数 / 定义域 / 复合 / 反函数 ============ */
  {
    id: 'mp-2-01', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 2, examRef: '2025-26 期中 第1(a)(ii)题',
    prompt: '设 $h(x)=\\arccos\\left(\\dfrac{5-x}{7}\\right)$，$g(x)=\\sin x$。求复合函数 $(g\\circ h)(x)$ 的表达式（化简后）。',
    blanks: [{ label: '$(g\\circ h)(x)$', answer: { exact: 'sqrt(1-((5-x)/7)^2)', alts: ['\\sqrt{1-\\left(\\frac{5-x}{7}\\right)^{2}}', '\\frac{1}{7}\\sqrt{49-(5-x)^2}'], vars: ['x'] } }],
    solution: [
      '$(g\\circ h)(x)=g(h(x))=\\sin\\left(\\arccos\\left(\\dfrac{5-x}{7}\\right)\\right)$。',
      '用恒等式 $\\sin(\\arccos t)=\\sqrt{1-t^{2}}$（$-1\\le t\\le1$），',
      '得 $(g\\circ h)(x)=\\sqrt{1-\\left(\\dfrac{5-x}{7}\\right)^{2}}=\\dfrac17\\sqrt{49-(5-x)^{2}}$。'
    ]
  },
  {
    id: 'mp-2-02', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 3, examRef: '2025-26 期中 第1(b)题',
    prompt: '设 $f(x)=2^{x^{2}+6x+10}$，$\\mathrm{Dom}(f)=(-\\infty,-3)$。已知反函数存在，求 $f^{-1}(x)$。',
    blanks: [{ label: '$f^{-1}(x)$', answer: { exact: '-3-sqrt(log2(x)-1)', alts: ['-3-\\sqrt{\\log_{2}x-1}', '-3-\\sqrt{\\frac{\\ln x}{\\ln 2}-1}'], vars: ['x'] } }],
    solution: [
      '配方：$x^{2}+6x+10=(x+3)^{2}+1$，故 $f(x)=2^{(x+3)^{2}+1}$。',
      '令 $y=2^{(x+3)^{2}+1}$，取以 2 为底的对数：$\\log_{2}y=(x+3)^{2}+1$，',
      '$\\Rightarrow(x+3)^{2}=\\log_{2}y-1\\Rightarrow x+3=\\pm\\sqrt{\\log_{2}y-1}$。',
      '因 $\\mathrm{Dom}(f)=(-\\infty,-3)$ 即 $x<-3$，故 $x+3<0$，取负号：',
      '$f^{-1}(x)=-3-\\sqrt{\\log_{2}x-1}$。'
    ]
  },
  {
    id: 'mp-2-03', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 2, examRef: '2024-25 期中 第1(a)(iii)题',
    prompt: '设 $h(x)=\\arcsin\\left(e^{x}\\right)$，$g(x)=\\cos x$。求 $(g\\circ h)(x)$ 的表达式（化简后）。',
    blanks: [{ label: '$(g\\circ h)(x)$', answer: { exact: 'sqrt(1-e^(2x))', alts: ['\\sqrt{1-e^{2x}}', '\\sqrt{1-(e^x)^2}'], vars: ['x'] } }],
    solution: [
      '$(g\\circ h)(x)=\\cos\\left(\\arcsin\\left(e^{x}\\right)\\right)$。',
      '用恒等式 $\\cos(\\arcsin t)=\\sqrt{1-t^{2}}$（$-1\\le t\\le1$），',
      '得 $(g\\circ h)(x)=\\sqrt{1-\\left(e^{x}\\right)^{2}}=\\sqrt{1-e^{2x}}$。'
    ]
  },
  {
    id: 'mp-2-04', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 2, examRef: '2024-25 期中 第1(a)(ii)题',
    prompt: '设 $f(x)=\\sqrt{\\dfrac{(x+3)(x-4)}{x-1}-2}$，$g(x)=\\cos x$，$h(x)=\\arcsin\\left(e^{x}\\right)$。写出 $f(x)g(x)+h(x)$ 的表达式。',
    blanks: [{ label: '$f(x)g(x)+h(x)$', answer: { exact: 'sqrt((x+3)*(x-4)/(x-1)-2)*cos(x)+arcsin(e^x)', alts: ['\\sqrt{\\frac{(x+3)(x-4)}{x-1}-2}\\,\\cos x+\\arcsin(e^{x})'], vars: ['x'] } }],
    solution: [
      '直接相乘相加：$f(x)g(x)+h(x)=\\sqrt{\\dfrac{(x+3)(x-4)}{x-1}-2}\\;\\cos x+\\arcsin\\left(e^{x}\\right)$。',
      '（定义域需同时满足 $f$、$g$、$h$ 的要求，即 $[-2,1)\\cup[5,\\infty)\\cap(-\\infty,0]=\\varnothing$ 之外的公共部分；',
      '实际上 $h$ 要求 $x\\le0$，$f$ 要求 $x\\in[-2,1)\\cup[5,\\infty)$，交集为 $[-2,0]$。）'
    ]
  },
  {
    id: 'mp-2-05', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 2, examRef: '2025-26 期中 第1(a)(ii)题',
    prompt: '承 $f(x)=\\sqrt{\\dfrac{x+3}{x-1}-3(x-1)}$ 与 $h(x)=\\arccos\\left(\\dfrac{5-x}{7}\\right)$，写出 $\\dfrac{f(x)}{h(x)}$ 的表达式。',
    blanks: [{ label: '$f(x)/h(x)$', answer: { exact: 'sqrt((x+3)/(x-1)-3*(x-1))/arccos((5-x)/7)', alts: ['\\frac{\\sqrt{\\frac{x+3}{x-1}-3(x-1)}}{\\arccos\\left(\\frac{5-x}{7}\\right)}'], vars: ['x'] } }],
    solution: [
      '$\\dfrac{f(x)}{h(x)}=\\dfrac{\\sqrt{\\dfrac{x+3}{x-1}-3(x-1)}}{\\arccos\\left(\\dfrac{5-x}{7}\\right)}$。',
      '需 $h(x)\\ne0$，即 $\\dfrac{5-x}{7}\\ne1$，即 $x\\ne-2$。'
    ]
  },

  /* ============ 极限（历年期中重点，占分最重） ============ */
  {
    id: 'mp-3-01', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2025-26 期中 第2(a)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to0}\\frac{\\left(x-\\sin x\\right)^{1702x+1}}{x^{2}\\sin x}$。（不允许用 Taylor 展开）',
    blanks: [{ label: '极限值', answer: { exact: '1/6', alts: ['0.1666666667'], rel: 1e-6 } }],
    solution: [
      '把指数部分分离出来：$\\dfrac{(x-\\sin x)^{1702x+1}}{x^{2}\\sin x}=\\dfrac{x-\\sin x}{x^{2}\\sin x}\\cdot\\left(\\dfrac{x}{\\sin x}\\right)^{1702x+1}$。',
      '第一因子：$\\dfrac{x-\\sin x}{x^{2}\\sin x}=\\dfrac{x-\\sin x}{x^{3}}\\cdot\\dfrac{x}{\\sin x}$。',
      '用 L\'Hôpital 两次：$\\displaystyle\\lim_{x\\to0}\\frac{x-\\sin x}{x^{3}}=\\lim_{x\\to0}\\frac{1-\\cos x}{3x^{2}}=\\lim_{x\\to0}\\frac{\\sin x}{6x}=\\frac16$。',
      '又 $\\dfrac{x}{\\sin x}\\to1$，故第一因子 $\\to\\dfrac16$。',
      '第二因子：$\\left(\\dfrac{x}{\\sin x}\\right)^{1702x+1}\\to1^{1}=1$。',
      '所以原极限 $=\\dfrac16$。'
    ]
  },
  {
    id: 'mp-3-02', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 5, examRef: '2025-26 期中 第2(b)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(\\left(x^{5}+3x^{4}+7\\right)^{1/5}-\\left(243x^{5}-5x^{4}+9\\right)^{1/5}+2x\\right)$。',
    blanks: [{ label: '极限值', answer: { exact: '248/405', alts: ['0.6123456790'], rel: 1e-6 } }],
    solution: [
      '提出 $x$：原式 $=\\displaystyle\\lim_{x\\to\\infty}x\\left[\\left(1+\\frac3x+\\frac{7}{x^{5}}\\right)^{1/5}-\\left(243-\\frac5x+\\frac{9}{x^{5}}\\right)^{1/5}+2\\right]$。',
      '写成 $\\dfrac{\\left(1+\\frac3x+\\frac7{x^5}\\right)^{1/5}-\\left(243-\\frac5x+\\frac9{x^5}\\right)^{1/5}+2}{1/x}$，这是 $\\dfrac00$ 型，用 L\'Hôpital。',
      '分别求导（注意 $(243+\\cdots)^{1/5}$ 这一项的因子 $243^{1/5}=3$）：',
      '$\\dfrac{d}{dx}\\left(1+\\frac3x+\\frac7{x^5}\\right)^{1/5}=\\frac15\\left(1+\\frac3x+\\frac7{x^5}\\right)^{-4/5}\\left(-\\frac{3}{x^{2}}-\\frac{35}{x^{6}}\\right)$，',
      '$\\dfrac{d}{dx}\\left(243-\\frac5x+\\frac9{x^5}\\right)^{1/5}=\\frac15\\left(243-\\frac5x+\\frac9{x^5}\\right)^{-4/5}\\left(\\frac{5}{x^{2}}-\\frac{45}{x^{6}}\\right)$，',
      '$\\dfrac{d}{dx}\\left(\\frac1x\\right)=-\\dfrac{1}{x^{2}}$。',
      '同乘 $x^{2}$ 后取极限：分子 $\\to\\frac15(-3)-\\frac15\\left(243^{-4/5}\\right)(5)=\\frac15(-3)-\\frac15\\cdot\\frac{5}{81}=-\\frac35-\\frac{1}{81}$，',
      '而 $\\left(1+\\cdots\\right)^{-4/5}\\to1$、$\\left(243-\\cdots\\right)^{-4/5}\\to243^{-4/5}=\\dfrac{1}{3^{4}}=\\dfrac1{81}$，分母 $\\to-1$，',
      '故极限 $=\\dfrac{-\\frac35-\\frac1{81}}{-1}=\\dfrac35+\\dfrac1{81}=\\dfrac{243+5}{405}=\\dfrac{248}{405}\\approx0.6123456790$。'
    ]
  },
  {
    id: 'mp-3-03', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2025-26 期中 第2(c)题',
    prompt: '讨论 $\\displaystyle\\lim_{x\\to1}\\frac15\\left(\\frac{1}{x-1}-\\frac{1}{x+4}\\right)\\sqrt{x^{2}-2x+1}$ 是否存在（不存在请填 DNE）。',
    blanks: [{ label: '极限', answer: { exact: 'DNE', alts: ['does not exist', '不存在'] } }],
    solution: [
      '注意 $\\sqrt{x^{2}-2x+1}=\\sqrt{(x-1)^{2}}=|x-1|$，所以必须分左右极限。',
      '通分：$\\dfrac15\\left(\\dfrac{1}{x-1}-\\dfrac{1}{x+4}\\right)=\\dfrac15\\cdot\\dfrac{(x+4)-(x-1)}{(x-1)(x+4)}=\\dfrac{5}{5(x-1)(x+4)}=\\dfrac{1}{(x-1)(x+4)}$。',
      '故原式 $=\\dfrac{|x-1|}{(x-1)(x+4)}=\\dfrac{\\operatorname{sgn}(x-1)}{x+4}$。',
      '右极限（$x\\to1^{+}$）：$\\dfrac{1}{1+4}=\\dfrac15=0.2$；',
      '左极限（$x\\to1^{-}$）：$-\\dfrac{1}{1+4}=-\\dfrac15=-0.2$。',
      '左右极限不等，故极限<b>不存在</b>（DNE）。'
    ]
  },
  {
    id: 'mp-3-04', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2025-26 期中 第2(d)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(5+\\sin\\left(2x+\\frac{3}{\\ln x}\\right)\\right)^{-2\\ln\\left(x+\\frac1x\\right)}$。',
    blanks: [{ label: '极限值', answer: { exact: '0' } }],
    solution: [
      '<b>夹逼。</b>因 $-1\\le\\sin(\\cdot)\\le1$，故 $4\\le5+\\sin\\left(2x+\\dfrac{3}{\\ln x}\\right)\\le6$。',
      '幂指数 $-2\\ln\\left(x+\\dfrac1x\\right)\\to-\\infty$（当 $x\\to\\infty$）。',
      '对 $a>1$ 与指数 $\\to-\\infty$，有 $a^{\\text{指数}}\\to0$，于是',
      '$4^{-2\\ln(x+1/x)}\\le\\left(5+\\sin(\\cdot)\\right)^{-2\\ln(x+1/x)}\\le6^{-2\\ln(x+1/x)}$。',
      '两端：$4^{-2\\ln(x+1/x)}=\\left(x+\\frac1x\\right)^{-2\\ln4}\\to0$，同理 $6^{-2\\ln(x+1/x)}\\to0$。',
      '由夹逼定理，原极限 $=0$。'
    ]
  },
  {
    id: 'mp-3-05', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2025-26 期中 第2(e)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to0}\\left(\\frac{e^{x}-1}{x}\\right)^{1/x}$。',
    blanks: [{ label: '极限值', answer: { exact: 'e^(1/2)', alts: ['\\sqrt{e}', 'e^{1/2}', '1.6487212707'], rel: 1e-6 } }],
    solution: [
      '这是 $1^{\\infty}$ 型。取对数：设 $L$ 为所求，则 $\\ln L=\\displaystyle\\lim_{x\\to0}\\frac{\\ln\\left(\\frac{e^{x}-1}{x}\\right)}{x}$，为 $\\dfrac00$ 型。',
      '用 L\'Hôpital：$\\ln L=\\displaystyle\\lim_{x\\to0}\\left[\\dfrac{e^{x}}{e^{x}-1}-\\dfrac1x\\right]$。',
      '通分：$\\dfrac{xe^{x}-(e^{x}-1)}{x(e^{x}-1)}$，仍为 $\\dfrac00$ 型，再用 L\'Hôpital：',
      '$\\displaystyle\\lim_{x\\to0}\\frac{e^{x}+xe^{x}-e^{x}}{e^{x}-1+xe^{x}}=\\lim_{x\\to0}\\frac{xe^{x}}{e^{x}-1+xe^{x}}=\\lim_{x\\to0}\\frac{e^{x}}{\\frac{e^{x}-1}{x}+e^{x}}=\\frac{1}{1+1}=\\frac12$。',
      '故 $L=e^{1/2}=\\sqrt e\\approx1.6487212707$。'
    ]
  },
  {
    id: 'mp-3-06', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2025-26 期中 第2(f)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(\\frac{3x+5}{3x}\\right)^{3x^{2}}e^{-5x}$。',
    blanks: [{ label: '极限值', answer: { exact: 'e^(-25/6)', alts: ['\\exp\\left(-\\frac{25}{6}\\right)', '0.0154963238'], rel: 1e-6 } }],
    solution: [
      '写成指数形式：原式 $=\\exp\\left\\{\\displaystyle\\lim_{x\\to\\infty}\\left[3x^{2}\\ln\\left(1+\\dfrac{5}{3x}\\right)-5x\\right]\\right\\}$。',
      '把括号内写成 $\\dfrac{3\\ln\\left(1+\\frac{5}{3x}\\right)-\\frac5x}{1/x^{2}}$，为 $\\dfrac00$ 型，用 L\'Hôpital。',
      '分子求导：$3\\cdot\\dfrac{1}{1+\\frac{5}{3x}}\\cdot\\left(-\\dfrac{5}{3x^{2}}\\right)+\\dfrac{5}{x^{2}}=\\dfrac{-5}{x^{2}\\left(1+\\frac{5}{3x}\\right)}+\\dfrac{5}{x^{2}}=\\dfrac{5}{x^{2}}\\left(1-\\dfrac{1}{1+\\frac{5}{3x}}\\right)$；',
      '分母求导：$-\\dfrac{2}{x^{3}}$。',
      '故极限 $=\\displaystyle\\lim_{x\\to\\infty}\\dfrac{\\frac{5}{x^{2}}\\cdot\\frac{\\frac{5}{3x}}{1+\\frac{5}{3x}}}{-\\frac{2}{x^{3}}}=\\lim_{x\\to\\infty}-\\dfrac{25}{6}\\cdot\\dfrac{x}{3x+5}=-\\dfrac{25}{6}$。',
      '所以原极限 $=e^{-25/6}\\approx0.0154963238$。'
    ]
  },
  {
    id: 'mp-3-07', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 5, examRef: '2025-26 期中 第2(g)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to0^{+}}\\left(x^{4}\\right)^{\\frac{7+\\sin x}{\\ln(1/x)-\\cos x}}$。',
    blanks: [{ label: '极限值', answer: { exact: 'e^(-28)', alts: ['\\exp(-28)', '6.914400107e-13'], rel: 1e-5 } }],
    solution: [
      '设 $y=\\left(x^{4}\\right)^{\\frac{7+\\sin x}{\\ln(1/x)-\\cos x}}$，取对数：',
      '$\\ln y=\\dfrac{7+\\sin x}{\\ln(1/x)-\\cos x}\\cdot\\ln\\left(x^{4}\\right)=\\dfrac{4(7+\\sin x)\\ln x}{-\\ln x-\\cos x}$。',
      '当 $x\\to0^{+}$ 时这是 $\\dfrac{-\\infty}{\\infty}$ 型，用 L\'Hôpital（对 $x$ 求导）：',
      '分子导数：$4\\left[\\cos x\\ln x+\\dfrac{7+\\sin x}{x}\\right]$；分母导数：$-\\dfrac1x+\\sin x$。',
      '把分子分母同乘 $x$：$\\ln y=\\displaystyle\\lim_{x\\to0^{+}}\\dfrac{4\\left[x\\cos x\\ln x+7+\\sin x\\right]}{-1+x\\sin x}=\\dfrac{4(0+7+0)}{-1}= -28$。',
      '故 $y\\to e^{-28}\\approx6.9144\\times10^{-13}$。'
    ]
  },
  {
    id: 'mp-3-08', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2025-26 期中 第4(ii)题',
    prompt: '承第4题（$b=1,c=0$，$f(x)=x^{2}\\sin(\\ln x)+\\cos x$（$x>0$）、$f(0)=1$、$f(x)=e^{1-\\cos x}$（$x<0$））：判断 $f\'(x)$ 在 $x=0$ 处是否连续？',
    blanks: [{ label: '是否连续（填 是 或 否）', answer: { exact: '是', alts: ['yes', 'true', 'continuous'] } }],
    solution: [
      '已求得 $f\'(0)=0$，且当 $x>0$ 时 $f\'(x)=2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x$。',
      '由 $|2x\\sin(\\ln x)|\\le2|x|\\to0$ 与 $|x\\cos(\\ln x)|\\le|x|\\to0$（夹逼），$\\sin x\\to0$，',
      '故 $\\displaystyle\\lim_{x\\to0^{+}}f\'(x)=0$。',
      '当 $x<0$ 时 $f\'(x)=e^{1-\\cos x}\\sin x\\to0$。',
      '两侧极限都等于 $f\'(0)=0$，故 $f\'$ 在 $x=0$ 处<b>连续</b>。'
    ]
  },
  {
    id: 'mp-3-09', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 3, examRef: '2024-25 期中 第2(b)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to1}\\frac{(x-1)^{4}}{\\sin\\left((x-1)^{2}\\right)\\cos\\left(\\frac{\\pi}{2}-\\frac{1}{(x-1)^{2}}\\right)}$。',
    blanks: [{ label: '极限值', answer: { exact: '0' } }],
    solution: [
      '用余角公式 $\\cos\\left(\\dfrac\\pi2-\\theta\\right)=\\sin\\theta$，取 $\\theta=\\dfrac{1}{(x-1)^{2}}$：',
      '原式 $=\\dfrac{(x-1)^{4}}{\\sin\\left((x-1)^{2}\\right)\\sin\\left(\\dfrac{1}{(x-1)^{2}}\\right)}$。',
      '拆开：$=\\dfrac{(x-1)^{2}}{\\sin\\left((x-1)^{2}\\right)}\\cdot(x-1)^{2}\\sin\\left(\\dfrac{1}{(x-1)^{2}}\\right)$。',
      '第一因子 $\\to1$（用 $\\frac{u}{\\sin u}\\to1$，$u=(x-1)^{2}\\to0$）。',
      '第二因子：$\\left|(x-1)^{2}\\sin\\left(\\frac{1}{(x-1)^{2}}\\right)\\right|\\le(x-1)^{2}\\to0$，由夹逼为 $0$。',
      '故原极限 $=1\\times0=0$。'
    ]
  },
  {
    id: 'mp-3-10', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2024-25 期中 第2(d)题',
    prompt: '讨论 $\\displaystyle\\lim_{x\\to4}\\left(x^{2}-16\\right)\\left|1+\\frac{2}{x-4}\\right|$ 是否存在（不存在填 DNE）。',
    blanks: [{ label: '极限', answer: { exact: 'DNE', alts: ['does not exist', '不存在'] } }],
    solution: [
      '注意 $\\left|1+\\dfrac{2}{x-4}\\right|=\\left|\\dfrac{x-4+2}{x-4}\\right|=\\dfrac{|x-2|}{|x-4|}$。',
      '故原式 $=(x-4)(x+4)\\cdot\\dfrac{|x-2|}{|x-4|}$。',
      '右极限（$x\\to4^{+}$，$|x-4|=x-4$）：$(x+4)|x-2|\\to8\\cdot2=16$。',
      '左极限（$x\\to4^{-}$，$|x-4|=-(x-4)$）：$-(x+4)|x-2|\\to-16$。',
      '左右极限不等，故极限<b>不存在</b>（DNE）。'
    ]
  },
  {
    id: 'mp-3-11', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2024-25 期中 第2(e)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^{2}+\\frac{\\ln x+1}{x}}-x\\right)$。',
    blanks: [{ label: '极限值', answer: { exact: '0' } }],
    solution: [
      '有理化：$\\sqrt{x^{2}+\\dfrac{\\ln x+1}{x}}-x=\\dfrac{\\left(x^{2}+\\frac{\\ln x+1}{x}\\right)-x^{2}}{\\sqrt{x^{2}+\\frac{\\ln x+1}{x}}+x}=\\dfrac{\\frac{\\ln x+1}{x}}{\\sqrt{x^{2}+\\frac{\\ln x+1}{x}}+x}$。',
      '把分子分母同除以 $x$：$=\\dfrac{\\frac{\\ln x+1}{x^{2}}}{\\sqrt{1+\\frac{\\ln x+1}{x^{3}}}+1}$。',
      '用 $\\dfrac{\\ln x}{x^{2}}\\to0$ 与 $\\dfrac{1}{x^{2}}\\to0$，分子 $\\to0$；分母 $\\to1+1=2$。',
      '故极限 $=\\dfrac02=0$。'
    ]
  },
  {
    id: 'mp-3-12', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2024-25 期中 第2(g)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(x\\sin\\frac1x\\right)^{x^{2}}$。',
    blanks: [{ label: '极限值', answer: { exact: 'e^(-1/6)', alts: ['\\exp\\left(-\\frac16\\right)', '0.8464817249'], rel: 1e-6 } }],
    solution: [
      '设 $L$ 为所求，取对数：$\\ln L=\\displaystyle\\lim_{x\\to\\infty}x^{2}\\ln\\left(x\\sin\\dfrac1x\\right)$。',
      '令 $u=\\dfrac1x\\to0^{+}$，则 $\\ln L=\\displaystyle\\lim_{u\\to0^{+}}\\dfrac{\\ln\\left(\\frac{\\sin u}{u}\\right)}{u^{2}}$，为 $\\dfrac00$ 型。',
      '用 L\'Hôpital 两次（或用 $\\frac{\\sin u}{u}=1-\\frac{u^{2}}{6}+O(u^{4})$，故 $\\ln\\frac{\\sin u}{u}\\sim-\\frac{u^{2}}{6}$）：',
      '$\\ln L=\\displaystyle\\lim_{u\\to0}\\dfrac{\\frac{\\cos u}{\\sin u}-\\frac1u}{2u}=\\lim_{u\\to0}\\dfrac{u\\cos u-\\sin u}{2u^{2}\\sin u}$。',
      '再用 $u\\cos u-\\sin u=-\\dfrac{u^{3}}{3}+O(u^{5})$ 与 $2u^{2}\\sin u\\sim2u^{3}$，得 $\\ln L=-\\dfrac16$。',
      '故 $L=e^{-1/6}\\approx0.8464817249$。'
    ]
  },
  {
    id: 'mp-3-13', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第2(a)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to1}\\frac{x^{2}-12x+11}{\\left(x^{2}-1\\right)\\cos(\\pi x)}$。',
    blanks: [{ label: '极限值', answer: { exact: '5' } }],
    solution: [
      '分子因式分解：$x^{2}-12x+11=(x-1)(x-11)$；分母 $x^{2}-1=(x-1)(x+1)$。',
      '约去 $(x-1)$：原式 $=\\displaystyle\\lim_{x\\to1}\\frac{x-11}{(x+1)\\cos(\\pi x)}$。',
      '代入 $x=1$：$\\cos\\pi=-1$，得 $\\dfrac{1-11}{2\\cdot(-1)}=\\dfrac{-10}{-2}=5$。'
    ]
  },
  {
    id: 'mp-3-14', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第2(f)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(5+\\cos 2x\\right)^{-2\\ln x}$。',
    blanks: [{ label: '极限值', answer: { exact: '0' } }],
    solution: [
      '因 $-1\\le\\cos2x\\le1$，故 $4\\le5+\\cos2x\\le6$。',
      '指数 $-2\\ln x\\to-\\infty$，且底数 $>1$，故',
      '$4^{-2\\ln x}\\le\\left(5+\\cos2x\\right)^{-2\\ln x}\\le6^{-2\\ln x}$。',
      '两端：$4^{-2\\ln x}=x^{-2\\ln4}\\to0$，$6^{-2\\ln x}=x^{-2\\ln6}\\to0$。',
      '由夹逼定理，原极限 $=0$。'
    ]
  },
  {
    id: 'mp-3-15', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 3, difficulty: 4, examRef: '2024-25 期中 第2(c)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to1}\\left(\\frac{\\ln x}{x-1}-\\frac{1}{e^{x-1}-1}+\\frac{1}{x-1}\\right)$ 的值可化为 $\\dfrac{a}{2}$，填 $a$。',
    blanks: [{ label: '$a$', answer: { exact: '3' } }],
    solution: [
      '整理：$\\dfrac{\\ln x}{x-1}+\\dfrac{1}{x-1}=\\dfrac{\\ln x+1}{x-1}$，故原式 $=\\dfrac{\\ln x+1}{x-1}-\\dfrac{1}{e^{x-1}-1}$。',
      '通分：$=\\dfrac{(\\ln x+1)\\left(e^{x-1}-1\\right)-\\left(x-1\\right)}{\\left(x-1\\right)\\left(e^{x-1}-1\\right)}$，为 $\\dfrac00$ 型。',
      '用 $\\ln x=x-1-\\frac{(x-1)^{2}}{2}+\\cdots$、$e^{x-1}-1=(x-1)+\\frac{(x-1)^{2}}{2}+\\cdots$，',
      '或连续用两次 L\'Hôpital，最终得极限 $=\\dfrac32$。',
      '故 $a=3$。'
    ]
  },

  /* ============ 导数与高阶导数（期中重点） ============ */
  {
    id: 'mp-4-01', topic: 'deriv', topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 3, difficulty: 5, examRef: '2025-26 期中 第3(b)题',
    prompt: '设 $f(x)=\\dfrac{1}{\\sqrt{9-x^{2}}}$（$x\\in(-3,3)$）。利用递推式 $(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+n^{2}f^{(n-1)}(x)$，求 $f^{(6)}(0)$。',
    blanks: [{ label: '$f^{(6)}(0)$', answer: { exact: '25/243', alts: ['\\frac{25}{243}', '0.1028806584'], rel: 1e-6 } }],
    solution: [
      '因 $f$ 是偶函数，所有奇阶导数在 $0$ 处为 $0$；取 $x=0$ 时递推式化为',
      '$9f^{(n+1)}(0)=n^{2}f^{(n-1)}(0)$，即 $f^{(n+1)}(0)=\\dfrac{n^{2}}{9}f^{(n-1)}(0)$。',
      '初始：$f(0)=\\dfrac13$，$f\'(0)=0$，$f\'\'(0)=\\dfrac{1^{2}}{9}f(0)=\\dfrac{1}{27}$。',
      '$n=3$：$f^{(4)}(0)=\\dfrac{3^{2}}{9}f^{(2)}(0)=\\dfrac{1}{27}$。',
      '$n=5$：$f^{(6)}(0)=\\dfrac{5^{2}}{9}f^{(4)}(0)=\\dfrac{25}{9}\\cdot\\dfrac{1}{27}=\\dfrac{25}{243}\\approx0.1028806584$。'
    ]
  },
  {
    id: 'mp-4-02', topic: 'deriv', topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2, difficulty: 4, examRef: '2025-26 期中 第3(b)题',
    prompt: '承上题，求 $f^{(7)}(0)$。',
    blanks: [{ label: '$f^{(7)}(0)$', answer: { exact: '0' } }],
    solution: [
      '由递推式 $f^{(n+1)}(0)=\\dfrac{n^{2}}{9}f^{(n-1)}(0)$ 可归纳：若 $f^{(n-1)}(0)$ 阶数为奇数则值为 $0$。',
      '具体地 $f^{(7)}(0)=\\dfrac{6^{2}}{9}f^{(5)}(0)$，而 $f^{(5)}(0)=\\dfrac{4^{2}}{9}f^{(3)}(0)$，',
      '又 $f^{(3)}(0)=\\dfrac{2^{2}}{9}f^{(1)}(0)=\\dfrac49\\cdot0=0$。',
      '故 $f^{(5)}(0)=0$，从而 $f^{(7)}(0)=0$。',
      '（本质上：$f(x)=\\dfrac{1}{\\sqrt{9-x^{2}}}$ 是偶函数，一切奇阶导数在 $0$ 处为 $0$。）'
    ]
  },
  {
    id: 'mp-4-03', topic: 'deriv', topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 3, difficulty: 5, examRef: '2025-26 期中 第3(c)题',
    prompt: '承上题，用递推式求 $f^{(2k)}(0)$ 的一般公式。结果可写成 $f^{(2k)}(0)=\\dfrac{1}{3\\cdot 9^{k}}\\left(\\text{若干个奇数之积}\\right)$。填写这些奇数的平方根形式中的通项：$f^{(2k)}(0)=\\dfrac{f(0)}{9^{k}}\\displaystyle\\prod_{j=1}^{k}c_{j}$，填 $c_j$。',
    blanks: [{ label: '$c_j$', answer: { exact: '(2*j-1)^2', alts: ['(2j-1)^{2}', '4*j^2-4*j+1'], vars: ['j'] } }],
    solution: [
      '递推式取 $x=0$ 且令 $n=2k+1$：$9f^{(2k+2)}(0)=(2k+1)^{2}f^{(2k)}(0)$，',
      '即 $f^{(2k+2)}(0)=\\dfrac{(2k+1)^{2}}{9}f^{(2k)}(0)$。',
      '迭代 $k$ 次（从 $j=1$ 到 $k$）：',
      '$f^{(2k)}(0)=f(0)\\displaystyle\\prod_{j=1}^{k}\\frac{(2j-1)^{2}}{9}=\\frac{1}{3\\cdot9^{k}}\\prod_{j=1}^{k}(2j-1)^{2}$。',
      '故 $c_j=(2j-1)^{2}$。',
      '等价写法（乘积形式）：$f^{(2k)}(0)=\\dfrac{1}{3}\\left(\\dfrac{1\\cdot3\\cdot5\\cdots(2k-1)}{3^{k}}\\right)^{2}=\\dfrac{\\left[(2k-1)!!\\right]^{2}}{3^{2k+1}}$。'
    ]
  },
  {
    id: 'mp-4-04', topic: 'deriv', topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2, difficulty: 4, examRef: '2024-25 期中 第3(a)题',
    prompt: '设 $y=e^{\\arcsin x}$。求曲线 $y=f(x)$ 在 $x=0$ 处的切线方程中 $x$ 的系数（即斜率）。',
    blanks: [{ label: '斜率', answer: { exact: '1' } }],
    solution: [
      '$f(0)=e^{\\arcsin0}=e^{0}=1$，曲线过点 $(0,1)$。',
      '$y\'=e^{\\arcsin x}\\cdot\\dfrac{1}{\\sqrt{1-x^{2}}}$，故 $y\'(0)=e^{0}\\cdot\\dfrac{1}{1}=1$。',
      '切线：$y-1=1\\cdot(x-0)$，即 $y=x+1$，斜率为 $1$。'
    ]
  },
  {
    id: 'mp-4-05', topic: 'deriv', topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2, difficulty: 4, examRef: '2024-25 期中 第3(b)题',
    prompt: '设 $y=e^{\\arcsin x}$。证明 $(1-x^{2})y\'\'-xy\'-y=0$。填写该式中 $xy\'$ 的系数。',
    blanks: [{ label: '$xy\'$ 的系数', answer: { exact: '-1' } }],
    solution: [
      '$y=e^{\\arcsin x}\\Rightarrow y\'=\\dfrac{e^{\\arcsin x}}{\\sqrt{1-x^{2}}}=\\dfrac{y}{\\sqrt{1-x^{2}}}$。',
      '故 $y\'\\sqrt{1-x^{2}}=y$，即 $y\'\\left(1-x^{2}\\right)^{1/2}=y$。',
      '两边对 $x$ 求导：$y\'\'\\left(1-x^{2}\\right)^{1/2}+y\'\\cdot\\dfrac{-2x}{2\\sqrt{1-x^{2}}}=y\'$。',
      '两边乘 $\\sqrt{1-x^{2}}$：$y\'\'\\left(1-x^{2}\\right)-xy\'=y\'\\sqrt{1-x^{2}}=y$。',
      '移项得 $(1-x^{2})y\'\'-xy\'-y=0$，其中 $xy\'$ 的系数为 $-1$。'
    ]
  },

  /* ============ 分段函数的连续与可导性 ============ */
  {
    id: 'mp-5-01', topic: 'contdiff', topicName: '连续性 / 可导性 / 分段函数',
    weight: 3, difficulty: 5, examRef: '2025-26 期中 第4(i)题',
    prompt: '设 $f(x)=\\begin{cases}x^{2}\\sin(\\ln x)+b\\cos x, & x>0,\\\\ 1, & x=0,\\\\ be^{1-\\cos x}+c, & x<0.\\end{cases}$ 求使 $f$ 在 $\\mathbb{R}$ 上处处可导的 $b$（先填 $b$）。',
    blanks: [
      { label: '$b$', answer: { exact: '1' } },
      { label: '$c$', answer: { exact: '0' } }
    ],
    solution: [
      '<b>连续性。</b>$\\displaystyle\\lim_{x\\to0^{+}}f(x)=\\lim_{x\\to0^{+}}\\left[x^{2}\\sin(\\ln x)+b\\cos x\\right]$。',
      '由 $\\left|x^{2}\\sin(\\ln x)\\right|\\le x^{2}\\to0$ 与 $b\\cos x\\to b$，得右极限 $=b$。',
      '左极限：$\\displaystyle\\lim_{x\\to0^{-}}\\left[be^{1-\\cos x}+c\\right]=be^{0}+c=b+c$。',
      '要求 $b=b+c=1$，故 $b=1$，$c=0$。',
      '<b>可导性。</b>右导数：$f\'_{+}(0)=\\displaystyle\\lim_{x\\to0^{+}}\\dfrac{x^{2}\\sin(\\ln x)+\\cos x-1}{x}=\\lim_{x\\to0^{+}}\\left[x\\sin(\\ln x)+\\dfrac{\\cos x-1}{x}\\right]=0+0=0$。',
      '左导数：$f\'_{-}(0)=\\displaystyle\\lim_{x\\to0^{-}}\\dfrac{e^{1-\\cos x}-1}{x}$，用 L\'Hôpital $=\\lim_{x\\to0^{-}}e^{1-\\cos x}\\sin x=0$。',
      '两者相等，故 $b=1,\\ c=0$ 时 $f$ 处处可导，且',
      '$f\'(x)=\\begin{cases}2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x, & x>0,\\\\ 0, & x=0,\\\\ e^{1-\\cos x}\\sin x, & x<0.\\end{cases}$'
    ]
  },
  {
    id: 'mp-5-02', topic: 'contdiff', topicName: '连续性 / 可导性 / 分段函数',
    weight: 3, difficulty: 5, examRef: '2025-26 期中 第4(ii)题',
    prompt: '承上题（$b=1,c=0$）。判断 $f\'\'(0)$ 是否存在；若存在填其值，若不存在填 DNE。',
    blanks: [{ label: "$f''(0)$", answer: { exact: 'DNE', alts: ['does not exist', '不存在'] } }],
    solution: [
      '先用二阶导数的定义，看 $f\'$ 在 $0$ 处的差商：$f\'\'(0)=\\displaystyle\\lim_{x\\to0}\\dfrac{f\'(x)-f\'(0)}{x}$。',
      '<b>左极限</b>（$x<0$，$f\'(x)=e^{1-\\cos x}\\sin x$）：',
      '$\\displaystyle\\lim_{x\\to0^{-}}\\frac{e^{1-\\cos x}\\sin x}{x}=1\\cdot1=1$，存在。',
      '<b>右极限</b>（$x>0$，$f\'(x)=2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x$）：',
      '$\\displaystyle\\lim_{x\\to0^{+}}\\frac{2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x}{x}=\\lim_{x\\to0^{+}}\\left(2\\sin(\\ln x)+\\cos(\\ln x)-\\frac{\\sin x}{x}\\right)$。',
      '当 $x\\to0^{+}$ 时 $\\ln x\\to-\\infty$，故 $\\sin(\\ln x)$ 与 $\\cos(\\ln x)$ 都<b>无界振荡</b>，',
      '例如取 $x_{k}=\\exp(-2k\\pi)$ 时 $\\cos(\\ln x_{k})=1$，取 $x_{k}=\\exp(-(2k+1)\\pi)$ 时 $\\cos(\\ln x_{k})=-1$。',
      '所以右极限不存在，从而 $f\'\'(0)$ <b>不存在</b>（填 DNE）。',
      '注意区分：$f\'$ 在 $0$ 处是<b>连续</b>的（上一题），但 $f\'$ 在 $0$ 处不可导 —— 这与 2023 卷「$x^{3}\\cos(1/x)$」一族是同类现象。'
    ]
  },
  {
    id: 'mp-5-03', topic: 'contdiff', topicName: '连续性 / 可导性 / 分段函数',
    weight: 3, difficulty: 5, examRef: '2024-25 期中 第5题',
    prompt: '设 $f(x)=\\begin{cases}e^{-\\frac{1}{x-1}}+ax+b, & x>1,\\\\ 1702, & x=1,\\\\ (x-1)^{3}\\sin\\dfrac{1}{x-1}+1702, & x<1.\\end{cases}$ 求使 $f$ 处处可导的 $a$。',
    blanks: [
      { label: '$a$', answer: { exact: '0' } },
      { label: '$b$', answer: { exact: '1702' } }
    ],
    solution: [
      '<b>连续性。</b>右极限：$\\displaystyle\\lim_{x\\to1^{+}}\\left[e^{-\\frac{1}{x-1}}+ax+b\\right]=0+a+b=a+b$（用 $e^{-1/h}\\to0$，$h\\to0^{+}$）。',
      '左极限：由 $\\left|(x-1)^{3}\\sin\\frac{1}{x-1}\\right|\\le(x-1)^{3}\\to0$，得 $\\lim_{x\\to1^{-}}f(x)=1702$。',
      '要求 $a+b=1702$。',
      '<b>可导性。</b>左导数：$f\'_{-}(1)=\\displaystyle\\lim_{h\\to0^{-}}\\dfrac{h^{3}\\sin\\frac1h+1702-1702}{h}=\\lim_{h\\to0^{-}}h^{2}\\sin\\dfrac1h=0$。',
      '右导数：$f\'_{+}(1)=\\displaystyle\\lim_{h\\to0^{+}}\\dfrac{e^{-1/h}+ah+b-1702}{h}$，由 $a+b=1702$ 化为 $\\lim_{h\\to0^{+}}\\left[\\dfrac{e^{-1/h}}{h}+a\\right]$。',
      '而 $\\displaystyle\\lim_{h\\to0^{+}}\\dfrac{e^{-1/h}}{h}=\\lim_{u\\to\\infty}\\dfrac{u}{e^{u}}=0$（$u=1/h$），故 $f\'_{+}(1)=a$。',
      '要求 $f\'_{-}(1)=f\'_{+}(1)$，即 $0=a$，故 $a=0$，代回得 $b=1702$。'
    ]
  },
  {
    id: 'mp-5-04', topic: 'contdiff', topicName: '连续性 / 可导性 / 分段函数',
    weight: 2, difficulty: 4, examRef: '2024-25 期中 第5(b)题',
    prompt: '承上题（$a=0,\\ b=1702$），判断 $f\'(x)$ 在 $x=1$ 处是否连续（填 是 或 否）。',
    blanks: [{ label: '是否连续', answer: { exact: '是', alts: ['yes', 'true', 'continuous'] } }],
    solution: [
      '当 $a=0,b=1702$ 时：$f\'(x)=\\begin{cases}e^{-\\frac{1}{x-1}}\\cdot\\dfrac{1}{(x-1)^{2}}, & x>1,\\\\ 0, & x=1,\\\\ 3(x-1)^{2}\\sin\\dfrac{1}{x-1}-(x-1)\\cos\\dfrac{1}{x-1}, & x<1.\\end{cases}$',
      '右极限：$\\displaystyle\\lim_{x\\to1^{+}}\\dfrac{1}{(x-1)^{2}e^{\\frac{1}{x-1}}}$，令 $u=\\dfrac{1}{x-1}\\to\\infty$，得 $\\lim\\dfrac{u^{2}}{e^{u}}=0$。',
      '左极限：$\\left|3(x-1)^{2}\\sin\\frac{1}{x-1}\\right|\\le3(x-1)^{2}\\to0$，$\\left|(x-1)\\cos\\frac{1}{x-1}\\right|\\le|x-1|\\to0$，故为 $0$。',
      '两侧极限均为 $0=f\'(1)$，故 $f\'$ 在 $x=1$ 处<b>连续</b>。'
    ]
  },

  /* ============ 周期性与奇偶性 ============ */
  {
    id: 'mp-6-01', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 2, examRef: '2024-25 期中 第4(a)题',
    prompt: '设 $f:[-1,1]\\to[0,\\pi]$，$f(x)=\\arccos x$，$g:\\mathbb{R}\\to\\mathbb{R}$，$g(x)=f(\\cos x)$。判断 $g$ 是否为偶函数且周期函数（填 是 或 否）。',
    blanks: [{ label: '是否偶且周期', answer: { exact: '是', alts: ['yes', 'true'] } }],
    solution: [
      '<b>偶函数：</b>对任意 $x\\in\\mathbb{R}$，$g(-x)=f(\\cos(-x))=f(\\cos x)=g(x)$。',
      '<b>周期函数：</b>对任意整数 $k$，$g(x+2k\\pi)=f(\\cos(x+2k\\pi))=f(\\cos x)=g(x)$。',
      '故 $g$ 既偶又周期（周期 $2\\pi$）。'
    ]
  },
  {
    id: 'mp-6-02', topic: 'function', topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2, difficulty: 3, examRef: '2024-25 期中 第4(b)题',
    prompt: '承上题，当 $x\\in[0,\\pi]$ 时 $g(x)=\\arccos(\\cos x)$ 等于什么？',
    blanks: [{ label: '$g(x)$', answer: { exact: 'x', vars: ['x'] } }],
    solution: [
      '因 $\\arccos$ 的值域为 $[0,\\pi]$，当 $x\\in[0,\\pi]$ 时 $\\cos x$ 的对应角恰好就是 $x$ 本身，',
      '故 $g(x)=\\arccos(\\cos x)=x$（$x\\in[0,\\pi]$）。',
      '（这也是 $g$ 的「三角波」形状：在 $[0,\\pi]$ 上为 $y=x$，在 $[-\\pi,0]$ 上由偶性得 $y=-x$，此后每 $\\pi$ 折返。）'
    ]
  }
  );

  root.AMA1702_MIDPAST = Q;
})(typeof window !== 'undefined' ? window : globalThis);
