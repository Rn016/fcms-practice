/* ==========================================================================
   AMA1702 刷题系统 — 期中模块题库
   覆盖：Lecture 1–5  +  Assignment 1 题型
      · 集合 / 绝对值 / 不等式        (L1)
      · 函数、定义域、复合、反函数      (L1, L2)
      · 指数 / 对数 / 三角 / 反三角     (L2)
      · 极限、夹逼定理、特殊极限        (L3)
      · 连续性、IVT / 介值定理         (L3, L5)
      · 求导法则、链式法则、隐函数、高阶 (L4)
      · 中值定理 MVT、单调性、极值      (L5)

   题目来源：2025/26 Assignment 1 与期中题型、Lecture 1–5 例题风格。
   所有数值答案均已用 sympy / 数值积分独立验证。
   ========================================================================== */
(function (root) {
  'use strict';
  var Q = [];

  /* ------------------------------------------------------------------ 工具 */
  // 说明：本文件在 node 与浏览器中都能用；id 手工编号便于引用。
  Q.push(
  /* ============================ 模块一：集合、不等式、绝对值 ============== */
  {
    id: 'mid-1-01',
    topic: 'set',
    topicName: '集合 / 绝对值 / 不等式',
    weight: 1,
    difficulty: 1,
    prompt: '解不等式 $|2x-3| < 7$，并将解集写成区间形式。',
    blanks: [
      { label: '解集', answer: { exact: '(-2,5)', alts: ['-2<x<5', '(-2, 5)', '(-2,5)', 'x>-2 and x<5'], setLike: true }, hint: '写成区间，例如 (a,b)' }
    ],
    solution: [
      '$|2x-3| < 7 \\iff -7 < 2x-3 < 7$',
      '$\\iff -4 < 2x < 10 \\iff -2 < x < 5$',
      '因此解集为 $(-2,\\,5)$。'
    ]
  },
  {
    id: 'mid-1-02',
    topic: 'set',
    topicName: '集合 / 绝对值 / 不等式',
    weight: 1,
    difficulty: 1,
    prompt: '求集合 $S = \\{\\,x\\in\\mathbb{R} : |x+1| \\ge 3\\,\\}$，用区间表示。',
    blanks: [
      { label: 'S', answer: { exact: '(-inf,-4]U[2,inf)', alts: ['x<=-4 or x>=2', '(-\\infty,-4]\\cup[2,\\infty)'], setLike: true } }
    ],
    solution: [
      '$|x+1|\\ge 3 \\iff x+1\\ge 3$ 或 $x+1\\le -3$',
      '$\\iff x\\ge 2$ 或 $x\\le -4$',
      '所以 $S = (-\\infty,-4]\\cup[2,\\infty)$。'
    ]
  },
  {
    id: 'mid-1-03',
    topic: 'set',
    topicName: '集合 / 绝对值 / 不等式',
    weight: 1,
    difficulty: 2,
    prompt: '设 $A=[-1,3)$，$B=(1,5]$。求 $A\\cup B$。',
    blanks: [{ label: '$A\\cup B$', answer: { exact: '[-1,5]', setLike: true } }],
    solution: ['两区间相接（3 在 B 内，1 在 A 内），并集为 $[-1,5]$。']
  },
  {
    id: 'mid-1-04',
    topic: 'set',
    topicName: '集合 / 绝对值 / 不等式',
    weight: 1,
    difficulty: 2,
    prompt: '解不等式 $x^2 - 5x + 6 \\le 0$，用区间表示解集。',
    blanks: [{ label: '解集', answer: { exact: '[2,3]', alts: ['2<=x<=3'], setLike: true } }],
    solution: ['$x^2-5x+6=(x-2)(x-3)\\le 0 \\iff 2\\le x\\le 3$，解集 $[2,3]$。']
  },

  /* ============================ 模块二：函数、定义域、复合、反函数 ======= */
  {
    id: 'mid-2-01',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 1,
    difficulty: 2,
    prompt: '求函数 $f(x)=\\dfrac{x+5}{\\sqrt{5-|x|}}$ 的最大可能定义域（写成区间）。',
    blanks: [{ label: '$\\mathrm{Dom}(f)$', answer: { exact: '(-5,5)', setLike: true } }],
    solution: [
      '需要根号内为正：$5-|x| > 0 \\iff |x| < 5$',
      '即 $-5 < x < 5$，故定义域为 $(-5,5)$。'
    ]
  },
  {
    id: 'mid-2-02',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 1,
    difficulty: 2,
    prompt: '求 $g(x)=\\cos(\\sqrt{x})$ 的最大可能定义域（区间形式）。',
    blanks: [{ label: '$\\mathrm{Dom}(g)$', answer: { exact: '[0,inf)', alts: ['x>=0'], setLike: true } }],
    solution: ['根号要求 $x\\ge 0$，而 $\\cos$ 对任意实数有定义，故定义域为 $[0,\\infty)$。']
  },
  {
    id: 'mid-2-03',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2,
    difficulty: 2,
    prompt: '设 $h(x)=\\arccos(x^3)$，其定义域取 $[-1,1]$；$g(x)=\\cos x$。求复合函数 $(g\\circ h)(x)$ 的表达式（化简后）。',
    blanks: [{ label: '$(g\\circ h)(x)$', answer: { exact: 'x^3', vars: ['x'] } }],
    solution: [
      '$(g\\circ h)(x) = g(h(x)) = \\cos(\\arccos(x^3))$。',
      '因为 $x^3\\in[-1,1]$，$\\cos(\\arccos u)=u$，所以 $(g\\circ h)(x)=x^3$。'
    ]
  },
  {
    id: 'mid-2-04',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2,
    difficulty: 3,
    prompt: '设 $f(x)=\\sqrt[3]{(x+1)(x+2)}$，$\\mathrm{Dom}(f)=(-\\infty,-2)$。已知 $f$ 在该区间上严格递减，求 $f^{-1}(x)$ 的公式。',
    blanks: [
      { label: '$f^{-1}(x)$', answer: { exact: '-3/2-sqrt(x^3+1/4)', alts: ['-3/2-\\sqrt{x^3+\\tfrac14}', '-\\frac32-\\sqrt{x^3+\\frac14}'], vars: ['x'] }, hint: '输入含 x 的表达式' }
    ],
    solution: [
      '令 $y=\\sqrt[3]{(x+1)(x+2)}$，则 $y^3=x^2+3x+2=\\left(x+\\tfrac32\\right)^2-\\tfrac14$。',
      '$\\Rightarrow \\left(x+\\tfrac32\\right)^2 = y^3+\\tfrac14 \\Rightarrow x = -\\tfrac32 \\pm \\sqrt{y^3+\\tfrac14}$。',
      '因 $\\mathrm{Dom}(f)=(-\\infty,-2)$，取负号，所以 $f^{-1}(x) = -\\dfrac32-\\sqrt{x^3+\\dfrac14}$。'
    ]
  },
  {
    id: 'mid-2-05',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2,
    difficulty: 3,
    prompt: '设 $f(x)=(\\pi-\\tan x)(\\pi+\\tan x)$，$\\mathrm{Dom}(f)=\\left[-\\dfrac{\\pi}{4},0\\right]$。求 $f$ 的值域（区间）。',
    blanks: [{ label: '$\\mathrm{Range}(f)$', answer: { exact: '[pi^2-1,pi^2]', setLike: true } }],
    solution: [
      '$f(x)=\\pi^2-\\tan^2 x$。当 $x\\in\\left[-\\tfrac\\pi4,0\\right]$，$\\tan x\\in[-1,0]$，',
      '故 $\\tan^2 x\\in[0,1]$，$f(x)\\in[\\pi^2-1,\\pi^2]$。'
    ]
  },
  {
    id: 'mid-2-06',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2,
    difficulty: 3,
    prompt: '承上题 $f(x)=\\pi^2-\\tan^2 x$（$\\mathrm{Dom}(f)=\\left[-\\frac{\\pi}{4},0\\right]$）。求 $f^{-1}(x)$ 的公式。',
    blanks: [
      { label: '$f^{-1}(x)$', answer: { exact: 'arctan(-sqrt(pi^2-x))', alts: ['atan(-sqrt(pi^2-x))', '-\\arctan(\\sqrt{\\pi^2-x})', '-\\tan^{-1}\\sqrt{\\pi^2-x}'], vars: ['x'] } }
    ],
    solution: [
      '令 $y=\\pi^2-\\tan^2 x \\Rightarrow \\tan^2 x=\\pi^2-y \\Rightarrow \\tan x=\\pm\\sqrt{\\pi^2-y}$。',
      '因 $x\\in\\left[-\\tfrac\\pi4,0\\right]$ 时 $\\tan x\\le 0$，取负号：$\\tan x=-\\sqrt{\\pi^2-y}$。',
      '所以 $f^{-1}(x)=\\arctan\\!\\left(-\\sqrt{\\pi^2-x}\\right)$。'
    ]
  },
  {
    id: 'mid-2-07',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 2,
    difficulty: 3,
    prompt: '设 $f(x)=x\\ln x$（$x>0$）。求 $f^{-1}$ 在 $x=e$ 处的值，即 $f^{-1}(e)$。',
    blanks: [{ label: '$f^{-1}(e)$', answer: { exact: 'e', alts: ['\\mathrm{e}'] } }],
    solution: [
      '$f(x)=x\\ln x$，$f(e)=e\\ln e=e$。$f$ 在 $(e^{-1},\\infty)$ 上严格递增，故反函数存在。',
      '由 $f(e)=e$ 得 $f^{-1}(e)=e$。'
    ]
  },
  {
    id: 'mid-2-08',
    topic: 'function',
    topicName: '函数 / 定义域 / 复合 / 反函数',
    weight: 1,
    difficulty: 2,
    prompt: '设 $f(x)=\\dfrac{2x+1}{x-3}$。求 $f^{-1}(x)$。',
    blanks: [{ label: '$f^{-1}(x)$', answer: { exact: '(3x+1)/(x-2)', alts: ['\\frac{3x+1}{x-2}', '(1+3x)/(x-2)'], vars: ['x'] } }],
    solution: [
      '令 $y=\\dfrac{2x+1}{x-3} \\Rightarrow y(x-3)=2x+1 \\Rightarrow xy-3y=2x+1$',
      '$\\Rightarrow x(y-2)=3y+1 \\Rightarrow x=\\dfrac{3y+1}{y-2}$，故 $f^{-1}(x)=\\dfrac{3x+1}{x-2}$。'
    ]
  },

  /* ============================ 模块三：极限 ============================ */
  {
    id: 'mid-3-01',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 1,
    prompt: '求 $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 3x}{x}$。',
    blanks: [{ label: '极限值', answer: { exact: '3' } }],
    solution: ['$\\dfrac{\\sin 3x}{x}=3\\cdot\\dfrac{\\sin 3x}{3x}\\to 3\\cdot 1 = 3$。']
  },
  {
    id: 'mid-3-02',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$。',
    blanks: [{ label: '极限值', answer: { exact: '1/2', alts: ['0.5'] } }],
    solution: [
      '$1-\\cos x = 2\\sin^2\\dfrac{x}{2}$，故 $\\dfrac{1-\\cos x}{x^2}=\\dfrac{2\\sin^2(x/2)}{x^2}=\\dfrac12\\left(\\dfrac{\\sin(x/2)}{x/2}\\right)^2\\to\\dfrac12$。'
    ]
  },
  {
    id: 'mid-3-03',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+3x}-x\\right)$。',
    blanks: [{ label: '极限值', answer: { exact: '3/2', alts: ['1.5'] } }],
    solution: [
      '有理化：$\\sqrt{x^2+3x}-x=\\dfrac{3x}{\\sqrt{x^2+3x}+x}=\\dfrac{3}{\\sqrt{1+3/x}+1}\\to\\dfrac{3}{2}$。'
    ]
  },
  {
    id: 'mid-3-04',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\displaystyle\\lim_{x\\to 0}\\frac{e^{2x}-1}{x}$。',
    blanks: [{ label: '极限值', answer: { exact: '2' } }],
    solution: ['$\\dfrac{e^{2x}-1}{x}=2\\cdot\\dfrac{e^{2x}-1}{2x}\\to 2$。']
  },
  {
    id: 'mid-3-05',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\displaystyle\\lim_{x\\to 0}\\frac{\\ln(1+3x)}{x}$。',
    blanks: [{ label: '极限值', answer: { exact: '3' } }],
    solution: ['$\\dfrac{\\ln(1+3x)}{x}=3\\cdot\\dfrac{\\ln(1+3x)}{3x}\\to 3$。']
  },
  {
    id: 'mid-3-06',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 2,
    prompt: '用夹逼定理求 $\\displaystyle\\lim_{x\\to 0}x^2\\sin\\frac1x$。',
    blanks: [{ label: '极限值', answer: { exact: '0' } }],
    solution: [
      '因 $-1\\le\\sin\\dfrac1x\\le 1$，故 $-x^2\\le x^2\\sin\\dfrac1x\\le x^2$。',
      '而 $\\lim_{x\\to0}(\\pm x^2)=0$，由夹逼定理得极限为 $0$。'
    ]
  },
  {
    id: 'mid-3-07',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\displaystyle\\lim_{x\\to 0}\\frac{\\tan x-x}{x^3}$。',
    blanks: [{ label: '极限值', answer: { exact: '1/3' } }],
    solution: [
      '$\\tan x = x+\\dfrac{x^3}{3}+O(x^5)$（或连续用 L\'Hôpital 三次）',
      '故 $\\dfrac{\\tan x-x}{x^3}\\to\\dfrac13$。'
    ]
  },
  {
    id: 'mid-3-08',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\displaystyle\\lim_{x\\to 0}\\frac{e^x-1-x}{x^2}$。',
    blanks: [{ label: '极限值', answer: { exact: '1/2', alts: ['0.5'] }, vars: [] }],
    solution: [
      '这是 2025 年期末第 1 题的核心极限。',
      '$e^x = 1+x+\\dfrac{x^2}{2}+O(x^3)$，故 $\\dfrac{e^x-1-x}{x^2}\\to\\dfrac12$。',
      '（用 L\'Hôpital 两次：$\\dfrac{e^x-1}{2x}\\to\\dfrac{e^x}{2}\\to\\dfrac12$。）'
    ]
  },
  {
    id: 'mid-3-09',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac1x\\right)^{5x}$。',
    blanks: [{ label: '极限值', answer: { exact: 'e^5', alts: ['\\exp(5)', 'e^{5}', '148.413159'] } }],
    solution: [
      '$\\left(1+\\dfrac1x\\right)^{5x}=\\left[\\left(1+\\dfrac1x\\right)^{x}\\right]^{5}\\to e^{5}$。'
    ]
  },
  {
    id: 'mid-3-10',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2,
    difficulty: 3,
    prompt: '设 $a>0$，求 $\\displaystyle\\lim_{x\\to 0}\\frac{a^{x}-1}{x}$（用 $a$ 表示）。',
    blanks: [{ label: '极限值', answer: { exact: 'ln(a)', alts: ['\\ln a', '\\log a'], vars: ['a'] } }],
    solution: [
      '$a^x=e^{x\\ln a}$，故 $\\dfrac{a^x-1}{x}=\\dfrac{e^{x\\ln a}-1}{x\\ln a}\\cdot\\ln a\\to \\ln a$。'
    ]
  },
  {
    id: 'mid-3-11',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2,
    difficulty: 2,
    prompt: '讨论 $f(x)=\\dfrac{|x|}{x}$ 在 $x=0$ 处的极限。若不存在请填 DNE。',
    blanks: [{ label: '$\\lim_{x\\to0}f(x)$', answer: { exact: 'DNE', alts: ['does not exist', '不存在'] } }],
    solution: [
      '左极限 $\\lim_{x\\to0^-}\\dfrac{|x|}{x}=\\lim_{x\\to0^-}\\dfrac{-x}{x}=-1$；',
      '右极限 $\\lim_{x\\to0^+}\\dfrac{|x|}{x}=+1$。两者不等，故极限不存在（DNE）。'
    ]
  },
  {
    id: 'mid-3-12',
    topic: 'limit',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2,
    difficulty: 3,
    prompt: '设 $f(x)=\\begin{cases}\\dfrac{e^{x}-1-x}{x^{2}}, & x\\ne 0\\\\[4pt] c, & x=0\\end{cases}$。求使 $f$ 在 $x=0$ 处连续的 $c$。',
    blanks: [{ label: '$c$', answer: { exact: '1/2', alts: ['0.5'] } }],
    solution: [
      '连续性要求 $c=\\lim_{x\\to0}\\dfrac{e^x-1-x}{x^2}=\\dfrac12$。',
      '故 $c=\\dfrac12$。'
    ]
  },
  {
    id: 'mid-3-13',
    topic: 'ivt',
    topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2,
    difficulty: 2,
    prompt: '设 $f(x)=x^3+x-1$。已知 $f$ 连续且 $f(0)=-1<0$，$f(1)=1>0$。由介值定理（IVT），方程 $x^3+x-1=0$ 在 $(0,1)$ 内至少有一个根。若该根记为 $r$，求 $r$ 的近似值（保留 4 位小数）。',
    blanks: [{ label: '$r\\approx$', answer: { exact: '0.6823', rel: 1e-3 } }],
    solution: [
      '由 IVT，因 $f(0)<0<f(1)$，存在 $r\\in(0,1)$ 使 $f(r)=0$。',
      '数值求解 $x^3+x-1=0$：$r\\approx 0.6823278038$，保留 4 位小数为 $0.6823$。'
    ]
  },

  /* ============================ 模块四：导数与求导法则 ================== */
  {
    id: 'mid-4-01',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\dfrac{d}{dx}\\left(x^{2}\\sin x\\right)$。',
    blanks: [{ label: "f'(x)", answer: { exact: 'x^2*cos(x)+2*x*sin(x)', alts: ['2x\\sin x+x^2\\cos x'], vars: ['x'] } }],
    solution: ['乘积法则：$(x^2)\'\\sin x+x^2(\\sin x)\'=2x\\sin x+x^2\\cos x$。']
  },
  {
    id: 'mid-4-02',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 1,
    difficulty: 1,
    prompt: '求 $\\dfrac{d}{dx}\\arctan x$。',
    blanks: [{ label: "f'(x)", answer: { exact: '1/(1+x^2)', alts: ['1/(x^2+1)'], vars: ['x'] } }],
    solution: ['标准公式：$(\\arctan x)\'=\\dfrac{1}{1+x^2}$。']
  },
  {
    id: 'mid-4-03',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\dfrac{d}{dx}\\left(x^{\\sin x}\\right)$（$x>0$）。',
    blanks: [
      { label: "f'(x)", answer: { exact: 'x^(sin(x))*(cos(x)*ln(x)+sin(x)/x)', alts: ['x^{\\sin x}\\left(\\cos x\\ln x+\\frac{\\sin x}{x}\\right)'], vars: ['x'] }, hint: '可用对数求导法' }
    ],
    solution: [
      '设 $y=x^{\\sin x}$，取对数 $\\ln y=\\sin x\\cdot\\ln x$。',
      '两边求导：$\\dfrac{y\'}{y}=\\cos x\\ln x+\\dfrac{\\sin x}{x}$。',
      '故 $y\'=x^{\\sin x}\\left(\\cos x\\ln x+\\dfrac{\\sin x}{x}\\right)$。'
    ]
  },
  {
    id: 'mid-4-04',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\dfrac{d}{dx}\\arcsin\\sqrt{x}$（$0<x<1$）。',
    blanks: [{ label: "f'(x)", answer: { exact: '1/(2*sqrt(x)*sqrt(1-x))', alts: ['\\frac{1}{2\\sqrt{x}\\sqrt{1-x}}'], vars: ['x'] } }],
    solution: [
      '链式法则：$\\dfrac{1}{\\sqrt{1-(\\sqrt x)^2}}\\cdot\\dfrac{1}{2\\sqrt x}=\\dfrac{1}{2\\sqrt{x}\\sqrt{1-x}}$。'
    ]
  },
  {
    id: 'mid-4-05',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2,
    difficulty: 3,
    prompt: '设 $x^{3}+y^{3}=6xy$（$y$ 是 $x$ 的隐函数）。求 $\\dfrac{dy}{dx}$。',
    blanks: [{ label: '$dy/dx$', answer: { exact: '(x^2-2*y)/(2*x-y^2)', alts: ['\\frac{x^2-2y}{2x-y^2}'], vars: ['x', 'y'] } }],
    solution: [
      '两边对 $x$ 求导：$3x^2+3y^2y\'=6y+6xy\'$',
      '$\\Rightarrow 3y^2y\'-6xy\'=6y-3x^2 \\Rightarrow y\'=\\dfrac{2y-x^2}{y^2-2x}=\\dfrac{x^2-2y}{2x-y^2}$。'
    ]
  },
  {
    id: 'mid-4-06',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 1,
    difficulty: 2,
    prompt: '求 $\\dfrac{d^{2}}{dx^{2}}\\left(xe^{x}\\right)$。',
    blanks: [{ label: '$f\'\'(x)$', answer: { exact: '(x+2)*e^x', alts: ['e^x(x+2)'], vars: ['x'] } }],
    solution: [
      '$f\'(x)=e^x+xe^x=(x+1)e^x$；$f\'\'(x)=e^x+(x+1)e^x=(x+2)e^x$。'
    ]
  },
  {
    id: 'mid-4-07',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\dfrac{d^{3}}{dx^{3}}\\left(x^{2}e^{x}\\right)$。',
    blanks: [{ label: '$f^{(3)}(x)$', answer: { exact: 'e^x*(x^2+6*x+6)', alts: ['e^x(x^2+6x+6)'], vars: ['x'] } }],
    solution: [
      '用 Leibniz 法则：$D^3(x^2e^x)=\\binom30x^2e^x+\\binom31(2x)e^x+\\binom32(2)e^x$',
      '$=x^2e^x+6xe^x+6e^x=e^x(x^2+6x+6)$。'
    ]
  },
  {
    id: 'mid-4-08',
    topic: 'deriv',
    topicName: '导数 / 链式法则 / 隐函数 / 高阶',
    weight: 2,
    difficulty: 3,
    prompt: '设 $h(x)=\\displaystyle\\int_{8}^{x^{2}}x\\sin(x^{2}t^{2})\\,dt$（$x>0$）。求 $h\'(2)$。（此题出自 2025 年期末第 2(b) 题）',
    blanks: [{ label: "$h'(2)$", answer: { exact: '(3/2)*sin(4)-8*cos(4)', alts: ['\\frac32\\sin 4-8\\cos 4', '-8\\cos 4+1.5\\sin 4'], vars: [] }, hint: '可用换元 u=xt 化简后再求导' }],
    solution: [
      '换元 $u=xt$（$t$ 从 $8$ 到 $x^2$，$u$ 从 $8x$ 到 $x^3$，$dt=du/x$）：',
      '$h(x)=\\displaystyle\\int_{8x}^{x^{3}}\\frac{x\\sin(u^{2})}{x}\\,du=\\int_{8x}^{x^{3}}\\sin(u^{2})\\,du$。',
      '对 $x$ 求导（Leibniz）：$h\'(x)=3x^{2}\\sin(x^{6})-8\\sin(64x^{2})$。',
      '代入 $x=2$：$h\'(2)=12\\sin 64-8\\sin 256$。',
      '用倍角公式 $\\sin 2u=2\\sin u\\cos u$：$\\sin 256 = 2\\sin 128\\cos 128 = \\cdots = 8\\sin 4\\cos 4\\cos 8\\cos 16\\cos 32\\cos 64$，',
      '$\\sin 64 = 2\\sin 32\\cos 32=\\cdots=32\\sin2\\cos2\\cos4\\cos8\\cos16\\cos32$，化简后得',
      '$h\'(2)=\\dfrac{3}{2}\\sin 4-8\\cos 4\\approx -5.7729$。'
    ]
  },

  /* ============================ 模块五：中值定理、单调性、极值 ========== */
  {
    id: 'mid-5-01',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 2,
    difficulty: 2,
    prompt: '对 $f(x)=\\sqrt{x}$ 在区间 $[1,4]$ 上用中值定理（MVT）。求满足 $f\'(c)=\\dfrac{f(4)-f(1)}{4-1}$ 的 $c$。',
    blanks: [{ label: '$c$', answer: { exact: '9/4', alts: ['2.25'] } }],
    solution: [
      '平均变化率：$\\dfrac{2-1}{3}=\\dfrac13$。',
      '$f\'(x)=\\dfrac{1}{2\\sqrt x}$，令 $\\dfrac{1}{2\\sqrt c}=\\dfrac13 \\Rightarrow \\sqrt c=\\dfrac32 \\Rightarrow c=\\dfrac94$。'
    ]
  },
  {
    id: 'mid-5-02',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 2,
    difficulty: 3,
    prompt: '设 $a>b>0$。用 MVT 证明 $e^{a^{2}}-e^{b^{2}} > 2(ab-b^{2})e^{b^{2}}$。由 MVT，存在 $c\\in(b,a)$ 使 $\\dfrac{e^{a^2}-e^{b^2}}{a-b}=2ce^{c^2}$。若已知 $2ce^{c^2}>2be^{b^2}$，则只需比较 $2b(a-b)e^{b^{2}}$ 与原式。请填写此题的中间结论：$e^{a^{2}}-e^{b^{2}} > \\underline{\\hspace{2cm}}$。',
    blanks: [
      { label: '下界', answer: { exact: '2*b*(a-b)*e^(b^2)', alts: ['2b(a-b)e^{b^2}', '2(ab-b^2)e^{b^2}'], vars: ['a', 'b'] } }
    ],
    solution: [
      '令 $f(x)=e^{x^{2}}$，在 $[b,a]$ 上连续、$(b,a)$ 内可导。',
      '由 MVT，存在 $c\\in(b,a)$ 使 $\\dfrac{e^{a^2}-e^{b^2}}{a-b}=2ce^{c^2}$。',
      '因 $f\'(x)=2e^{x^2}(1+2x^2)>0$，$f\'$ 在 $(b,a)$ 上严格递增，故 $2ce^{c^2}>2be^{b^2}$。',
      '于是 $e^{a^2}-e^{b^2} > 2b(a-b)e^{b^2} = 2(ab-b^2)e^{b^2}$。'
    ]
  },
  {
    id: 'mid-5-03',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 1,
    difficulty: 2,
    prompt: '求 $f(x)=x^{3}-3x$ 的所有临界点（critical points），并指出其中的局部极大值点。临界点按从小到大填写第一个。',
    blanks: [
      { label: '最小的临界点', answer: { exact: '-1' } },
      { label: '是否局部极大值点（填 是 或 否）', answer: { exact: '是', alts: ['yes', 'true', 'local max'] } }
    ],
    solution: [
      '$f\'(x)=3x^{2}-3=3(x-1)(x+1)=0 \\Rightarrow x=\\pm1$。',
      '$f\'\'(x)=6x$：$f\'\'(-1)=-6<0$，故 $x=-1$ 是局部极大值点；$f\'\'(1)=6>0$，$x=1$ 是局部极小值点。'
    ]
  },
  {
    id: 'mid-5-04',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 1,
    difficulty: 2,
    prompt: '求 $f(x)=x^{3}-3x$ 在 $[-2,2]$ 上的最大值。',
    blanks: [{ label: '最大值', answer: { exact: '2' } }],
    solution: [
      '候选点：临界点 $x=\\pm1$ 与端点 $x=\\pm2$。',
      '$f(-2)=-2,\\ f(-1)=2,\\ f(1)=-2,\\ f(2)=2$。最大值为 $2$。'
    ]
  },
  {
    id: 'mid-5-05',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 2,
    difficulty: 3,
    prompt: '设 $f(x)=x-\\ln(1+x)$（$x\\ge 0$）。求 $g(x)=f(x)-\\dfrac{x^{2}}{2(1+x)}$ 的导数 $g\'(x)$，并将结果化简。',
    blanks: [{ label: "$g'(x)$", answer: { exact: 'x^2/(2*(1+x)^2)', alts: ['\\frac{x^2}{2(1+x)^2}'], vars: ['x'] } }],
    solution: [
      '$f\'(x)=1-\\dfrac{1}{1+x}=\\dfrac{x}{1+x}$。',
      '$\\left(\\dfrac{x^2}{2(1+x)}\\right)\'=\\dfrac{2x\\cdot 2(1+x)-x^2\\cdot 2}{4(1+x)^2}=\\dfrac{2x(1+x)-x^2}{2(1+x)^2}=\\dfrac{2x+x^2}{2(1+x)^2}$。',
      '故 $g\'(x)=\\dfrac{x}{1+x}-\\dfrac{2x+x^2}{2(1+x)^2}=\\dfrac{2x(1+x)-(2x+x^2)}{2(1+x)^2}=\\dfrac{x^{2}}{2(1+x)^{2}}$。'
    ]
  },
  {
    id: 'mid-5-06',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 1,
    difficulty: 2,
    prompt: '设 $f$ 在 $[0,1]$ 上连续、在 $(0,1)$ 内可导，且 $f(0)=f(1)=0$。由 Rolle 定理，存在 $c\\in(0,1)$ 使 $f\'(c)=0$。若 $f(x)=\\sin(\\pi x)$，求这样的 $c$（取 $[0,1]$ 内最大的一个）。',
    blanks: [{ label: '$c$', answer: { exact: '1/2', alts: ['0.5'] } }],
    solution: [
      '$f\'(x)=\\pi\\cos(\\pi x)=0 \\Rightarrow \\pi x=\\dfrac{\\pi}{2}+k\\pi$。',
      '在 $(0,1)$ 内只有 $x=\\dfrac12$，故 $c=\\dfrac12$。'
    ]
  },
  {
    id: 'mid-5-07',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 2,
    difficulty: 3,
    prompt: '证明：对任意 $x\\in(0,1)$，有 $\\sin x > x-\\dfrac{x^{3}}{6}$。令 $h(x)=\\sin x-x+\\dfrac{x^{3}}{6}$，求 $h\'(x)$。',
    blanks: [{ label: "$h'(x)$", answer: { exact: 'cos(x)-1+x^2/2', alts: ['\\cos x-1+\\frac{x^2}{2}'], vars: ['x'] } }],
    solution: [
      '$h\'(x)=\\cos x-1+\\dfrac{x^{2}}{2}$。',
      '再用 $\\cos x>1-\\dfrac{x^2}{2}$（对 $x\\neq0$）可得 $h\'(x)>0$，',
      '而 $h(0)=0$，故 $h(x)>0$，即 $\\sin x>x-\\dfrac{x^{3}}{6}$。'
    ]
  },
  {
    id: 'mid-5-08',
    topic: 'mvt',
    topicName: '中值定理 / 单调性 / 极值',
    weight: 2,
    difficulty: 3,
    prompt: '设 $f$ 在 $[0,1]$ 上二阶连续可导且 $f(0)=f(1)=0$。利用分部积分可得 $\\displaystyle\\int_0^1 f(x)f\'\'(x)\\,dx=-\\int_0^1[f\'(x)]^{2}\\,dx$。若 $\\displaystyle\\int_0^1[f\'(x)]^{2}dx=1$，求 $\\displaystyle\\int_0^1 x f(x)f\'\'(x)\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '-1/2', alts: ['-0.5', '-\\frac12'] } }],
    solution: [
      '分部积分：$\\displaystyle\\int_0^1 xf(x)f\'\'(x)dx=\\Big[xf(x)f\'(x)\\Big]_0^1-\\int_0^1\\big(f(x)f\'(x)+x[f\'(x)]^2+xf(x)f\'\'(x)\\big)dx$。',
      '注意 $f(0)=f(1)=0$ 使边界项为 $0$，且 $\\displaystyle\\int_0^1 f(x)f\'(x)dx=\\tfrac12[f(x)]^2\\Big|_0^1=0$。',
      '于是 $2\\displaystyle\\int_0^1 xf(x)f\'\'(x)dx=-\\int_0^1[f\'(x)]^2dx=-1$，故积分值为 $-\\dfrac12$。'
    ]
  }
  );

  root.AMA1702_MID = Q;
})(typeof window !== 'undefined' ? window : globalThis);
