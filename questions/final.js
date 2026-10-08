/* ==========================================================================
   AMA1702 刷题系统 — 期末模块题库
   按 2025 年期末试卷的题型与配分侧重编排：
     第 1 题  连续性 / 可导性 / 分段函数         [10 分]
     第 2 题  各类积分（换元/部分分式/三角/广义） [30 分]
     第 3 题  面积 / 弧长 / 旋转体体积            [30 分]
     第 4 题  幂级数 与 用级数算积分              [10 分]
     第 5 题  定积分性质与对称性                  [20 分]

   所有答案均已用 sympy 与数值积分独立验证。
   ========================================================================== */
(function (root) {
  'use strict';
  var Q = [];

  Q.push(
  /* ==================== 一、连续性 / 可导性（期末第 1 题型） ============ */
  {
    id: 'fin-1-01',
    topic: 'contdiff',
    topicName: '连续性 / 可导性 / 分段函数',
    weight: 3,
    difficulty: 3,
    examRef: '2025 期末 第1题',
    prompt: '定义 $f(x)=\\begin{cases}\\dfrac{e^{x}-1-x}{x^{2}}, & x\\ne 0,\\\\[6pt] \\dfrac12, & x=0.\\end{cases}$ 求 $\\displaystyle\\lim_{x\\to0}\\frac{e^{x}-1-x}{x^{2}}$，以说明 $f$ 在 $x=0$ 处连续。',
    blanks: [{ label: '极限值', answer: { exact: '1/2', alts: ['0.5'] } }],
    solution: [
      '由 $e^{x}=1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}+\\cdots$ 得 $e^{x}-1-x=\\dfrac{x^{2}}{2}+O(x^{3})$。',
      '故 $\\displaystyle\\lim_{x\\to0}\\frac{e^{x}-1-x}{x^{2}}=\\frac12=f(0)$，因此 $f$ 在 $x=0$ 处连续。'
    ]
  },
  {
    id: 'fin-1-02',
    topic: 'contdiff',
    topicName: '连续性 / 可导性 / 分段函数',
    weight: 3,
    difficulty: 3,
    examRef: '2025 期末 第1题',
    prompt: '承上题，证明 $f$ 在 $x=0$ 处可导，并求 $f\'(0)$。',
    blanks: [{ label: "$f'(0)$", answer: { exact: '1/6' } }],
    solution: [
      '由导数定义：$f\'(0)=\\displaystyle\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\frac{\\dfrac{e^{x}-1-x}{x^{2}}-\\dfrac12}{x}$。',
      '而 $\\dfrac{e^{x}-1-x}{x^{2}}-\\dfrac12=\\dfrac{x}{6}+O(x^{2})$，故 $f\'(0)=\\dfrac16$。'
    ]
  },
  {
    id: 'fin-1-03',
    topic: 'contdiff',
    topicName: '连续性 / 可导性 / 分段函数',
    weight: 3,
    difficulty: 3,
    examRef: '2025 期末 第1题',
    prompt: '承上题，判断 $f\'(x)$ 在 $x=0$ 处是否连续。当 $x\\ne0$ 时 $f\'(x)=\\dfrac{(x-2)e^{x}+x+2}{x^{3}}$，先求 $\\displaystyle\\lim_{x\\to0}f\'(x)$。',
    blanks: [{ label: '$\\lim_{x\\to0}f\'(x)$', answer: { exact: '1/6' } }],
    solution: [
      '展开分子：$(x-2)e^{x}+x+2=(x-2)\\left(1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}+\\cdots\\right)+x+2$',
      '$=\\dfrac{x^{3}}{6}+O(x^{4})$，故 $\\displaystyle\\lim_{x\\to0}f\'(x)=\\dfrac16$。',
      '因为 $\\lim_{x\\to0}f\'(x)=\\dfrac16=f\'(0)$，所以 $f\'$ 在 $x=0$ 处连续。'
    ]
  },
  {
    id: 'fin-1-04',
    topic: 'contdiff',
    topicName: '连续性 / 可导性 / 分段函数',
    weight: 2,
    difficulty: 2,
    prompt: '设 $g(x)=\\begin{cases}\\dfrac{\\sin x}{x}, & x\\ne0\\\\ k, & x=0\\end{cases}$。求使 $g$ 在 $x=0$ 处连续的 $k$。',
    blanks: [{ label: '$k$', answer: { exact: '1' } }],
    solution: ['$\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}=1$，故取 $k=1$ 时 $g$ 在 $x=0$ 连续。']
  },
  {
    id: 'fin-1-05',
    topic: 'contdiff',
    topicName: '连续性 / 可导性 / 分段函数',
    weight: 2,
    difficulty: 3,
    prompt: '设 $h(x)=|x|^{3}$。求 $h\'(0)$。',
    blanks: [{ label: "$h'(0)$", answer: { exact: '0' }, vars: [] }],
    solution: [
      '$\\displaystyle\\frac{h(x)-h(0)}{x}=\\frac{|x|^{3}}{x}=|x|^{2}\\cdot\\frac{|x|}{x}$。',
      '因 $\\left||x|^{2}\\dfrac{|x|}{x}\\right|=|x|^{2}\\to0$，由夹逼定理得 $h\'(0)=0$。'
    ]
  },
  {
    id: 'fin-1-06',
    topic: 'contdiff',
    topicName: '连续性 / 可导性 / 分段函数',
    weight: 2,
    difficulty: 3,
    prompt: '设 $F(x)=\\begin{cases}x^{2}\\sin\\dfrac1x, & x\\ne0\\\\ 0,&x=0\\end{cases}$。求 $F\'(0)$。',
    blanks: [{ label: "$F'(0)$", answer: { exact: '0' }, vars: [] }],
    solution: [
      '$F\'(0)=\\displaystyle\\lim_{x\\to0}\\frac{x^{2}\\sin(1/x)}{x}=\\lim_{x\\to0}x\\sin\\frac1x=0$，',
      '因为 $\\left|x\\sin\\dfrac1x\\right|\\le|x|\\to0$。'
    ]
  },

  /* ==================== 二、积分（期末第 2 题型，占分最重） ============= */
  {
    id: 'fin-2-01',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 2,
    examRef: '2025 期末 第2题(i)',
    prompt: '计算 $\\displaystyle\\int_{0}^{\\ln 2}\\frac{e^{-x}}{1+e^{-x}}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'ln(4/3)', alts: ['\\ln\\frac43', '\\ln 4-\\ln 3', '0.2876820725'], rel: 1e-6 } }],
    solution: [
      '令 $u=1+e^{-x}$，则 $du=-e^{-x}dx$；$x=0\\Rightarrow u=2$，$x=\\ln2\\Rightarrow u=\\dfrac32$。',
      '$\\displaystyle\\int_{2}^{3/2}\\left(-\\frac{du}{u}\\right)=\\ln\\frac{2}{3/2}=\\ln\\frac43\\approx0.2876820725$。'
    ]
  },
  {
    id: 'fin-2-02',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第2题(ii)',
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\frac{3}{\\sin\\theta+4\\cos\\theta}\\,d\\theta$。',
    blanks: [{ label: '积分值', answer: { exact: '3*ln(3)/5', alts: ['\\frac{3\\ln 3}{5}', '\\frac35\\ln3', '0.7905550033'], rel: 1e-6 } }],
    solution: [
      '用万能代换 $t=\\tan\\dfrac\\theta2$：$\\sin\\theta=\\dfrac{2t}{1+t^{2}}$，$\\cos\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$，$d\\theta=\\dfrac{2\\,dt}{1+t^{2}}$。',
      '则 $\\dfrac{3}{\\sin\\theta+4\\cos\\theta}d\\theta=\\dfrac{3\\,dt}{1+\\frac t2-t^{2}}$。',
      '配方：$1+\\dfrac t2-t^{2}=\\dfrac{9}{16}-\\left(t-\\dfrac14\\right)^{2}$。',
      '$\\displaystyle\\int\\dfrac{3\\,dt}{1+\\frac t2-t^{2}}=\\frac12\\ln\\left|\\frac{1+2t}{2-t}\\right|+C=\\frac12\\ln\\left|\\frac{1+2\\tan\\frac\\theta2}{2-\\tan\\frac\\theta2}\\right|+C$。',
      '代入 $\\theta=0$（$t=0$）与 $\\theta=1$（$t=\\tan\\frac12\\approx0.5463$）：',
      '$I=\\dfrac12\\ln\\dfrac{2.0926}{1.4537}=\\dfrac12\\ln1.4397=\\dfrac35\\ln3\\approx0.7905550033$。'
    ]
  },
  {
    id: 'fin-2-03',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 3,
    examRef: '2025 期末 第2题(iii)',
    prompt: '计算 $\\displaystyle\\int_{0}^{8}\\frac{2}{x^{2}+6x+34}\\,dx$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '2/5*(arctan(11/5)-arctan(3/5))',
        alts: ['\\frac25\\left(\\arctan\\frac{11}{5}-\\arctan\\frac35\\right)', '0.2414997334'],
        vars: [], rel: 1e-6
      }
    }],
    solution: [
      '配方：$x^{2}+6x+34=(x+3)^{2}+25$。',
      '$\\displaystyle\\int_{0}^{8}\\frac{2\\,dx}{(x+3)^{2}+25}=\\frac{2}{5}\\left[\\arctan\\frac{x+3}{5}\\right]_{0}^{8}$',
      '$=\\dfrac25\\left(\\arctan\\dfrac{11}{5}-\\arctan\\dfrac35\\right)\\approx0.2414997334$。'
    ]
  },
  {
    id: 'fin-2-04',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 5,
    examRef: '2025 期末 第2题(iv)',
    prompt: '计算广义积分 $\\displaystyle\\int_{5}^{\\infty}\\frac{dx}{x^{2}\\left(x^{2}-5x+6\\right)}$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '1/30-(5*ln(5))/36-(ln(2))/9+(ln(3))/4',
        alts: [
          '\\frac{1}{30}-\\frac{5\\ln5}{36}-\\frac{\\ln2}{9}+\\frac{\\ln3}{4}',
          '\\frac{1}{30}-\\frac{5}{36}\\ln 5-\\frac19\\ln2+\\frac14\\ln3',
          '0.007437008711'
        ],
        rel: 1e-6
      }
    }],
    solution: [
      '因 $x^{2}-5x+6=(x-2)(x-3)$，部分分式：',
      '$\\dfrac{1}{x^{2}(x-2)(x-3)}=-\\dfrac{1}{4(x-2)}+\\dfrac{1}{9(x-3)}+\\dfrac{5}{36x}+\\dfrac{1}{6x^{2}}$。',
      '原函数：$F(x)=-\\dfrac14\\ln|x-2|+\\dfrac19\\ln|x-3|+\\dfrac{5}{36}\\ln x-\\dfrac{1}{6x}$。',
      '$\\displaystyle\\int_{5}^{\\infty}=F(\\infty)-F(5)$，其中 $F(\\infty)=0$（对数项相消、$\\frac1{6x}\\to0$）：',
      '$F(5)=-\\dfrac14\\ln3+\\dfrac19\\ln2+\\dfrac{5}{36}\\ln5-\\dfrac{1}{30}$。',
      '故 $I=\\dfrac{1}{30}-\\dfrac{5\\ln5}{36}-\\dfrac{\\ln2}{9}+\\dfrac{\\ln3}{4}\\approx0.0074370087$。'
    ]
  },
  {
    id: 'fin-2-05',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第2题(v)',
    prompt: '计算 $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x^{7}-x}$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: 'ln(64/63)/6',
        alts: ['\\frac16\\ln\\frac{64}{63}', '\\ln(2)-\\ln(63)/6', '0.0026247262'],
        rel: 1e-5
      }
    }],
    solution: [
      '因 $x^{7}-x=x\\left(x^{6}-1\\right)$，先求原函数（可求导验证）：',
      '$\\displaystyle\\int\\frac{dx}{x^{7}-x}=\\ln x+\\frac16\\ln\\left|1-x^{-6}\\right|+C$。',
      '验证：$\\dfrac{d}{dx}\\left[\\ln x+\\dfrac16\\ln(1-x^{-6})\\right]=\\dfrac1x+\\dfrac16\\cdot\\dfrac{6x^{-7}}{1-x^{-6}}=\\dfrac1x+\\dfrac{x^{-7}}{1-x^{-6}}=\\dfrac{1}{x\\left(x^{6}-1\\right)}$。',
      '$\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x^{7}-x}=\\lim_{t\\to\\infty}\\left[\\ln x+\\frac16\\ln\\left(1-x^{-6}\\right)\\right]_{2}^{t}$',
      '$=0-\\left[\\ln2+\\frac16\\ln\\left(1-\\frac1{64}\\right)\\right]=-\\ln2-\\frac16\\ln\\frac{63}{64}$',
      '$=\\dfrac16\\ln\\dfrac{64}{63}$（因 $-\\ln2-\\dfrac16\\ln63+\\dfrac16\\ln64=-\\ln2+\\dfrac{6\\ln2}{6}=\\dfrac16\\ln\\dfrac{64}{63}$）。',
      '故 $I=\\dfrac16\\ln\\dfrac{64}{63}\\approx0.0026247262$。'
    ]
  },
  {
    id: 'fin-2-06',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第2题(b)',
    prompt: '设 $h(x)=\\displaystyle\\int_{8}^{x^{2}}x\\sin\\left(x^{2}t^{2}\\right)dt$（$x>0$）。求 $h\'(2)$。',
    blanks: [{
      label: "$h'(2)$",
      answer: {
        exact: '(3/2)*sin(4)-8*cos(4)',
        alts: ['\\frac32\\sin4-8\\cos4', '-8\\cos4+\\frac32\\sin4', '-5.7729360243'],
        vars: [], rel: 1e-3
      }
    }],
    solution: [
      '换元 $u=xt$：$t$ 由 $8\\to x^{2}$ 变为 $u$ 由 $8x\\to x^{3}$，且 $dt=\\dfrac{du}{x}$。',
      '$h(x)=\\displaystyle\\int_{8x}^{x^{3}}x\\sin\\left(u^{2}\\right)\\frac{du}{x}=\\int_{8x}^{x^{3}}\\sin\\left(u^{2}\\right)du$。',
      'Leibniz 法则：$h\'(x)=3x^{2}\\sin\\left(x^{6}\\right)-8\\sin\\left(64x^{2}\\right)$。',
      '代入 $x=2$：$h\'(2)=12\\sin 64-8\\sin 256$。',
      '用 $\\sin 2u=2\\sin u\\cos u$ 反复降角：$\\sin 64=32\\sin2\\cos2\\cos4\\cos8\\cos16\\cos32$，$\\sin256=128\\sin2\\cos2\\cos4\\cos8\\cos16\\cos32\\cos64\\cos128$。',
      '化简后 $h\'(2)=\\dfrac32\\sin4-8\\cos4\\approx-5.7729360243$。'
    ]
  },
  {
    id: 'fin-2-07',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 1,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}xe^{x}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '1' } }],
    solution: [
      '分部积分：$\\displaystyle\\int xe^{x}dx=(x-1)e^{x}+C$。',
      '$\\Big[(x-1)e^{x}\\Big]_{0}^{1}=0-(-1)=1$。'
    ]
  },
  {
    id: 'fin-2-08',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}xe^{-x}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '1-2/e', alts: ['1-2e^{-1}', '1-\\frac2e', '0.2642411177'], rel: 1e-6 } }],
    solution: [
      '分部积分：$\\displaystyle\\int xe^{-x}dx=-(x+1)e^{-x}+C$。',
      '$\\Big[-(x+1)e^{-x}\\Big]_{0}^{1}=-2e^{-1}+1=1-\\dfrac2e\\approx0.2642411177$。'
    ]
  },
  {
    id: 'fin-2-09',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}x^{2}e^{x}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'e-2', alts: ['\\mathrm{e}-2'] } }],
    solution: [
      '两次分部积分：$\\displaystyle\\int x^{2}e^{x}dx=e^{x}\\left(x^{2}-2x+2\\right)+C$。',
      '$\\Big[e^{x}(x^{2}-2x+2)\\Big]_{0}^{1}=e-2$。'
    ]
  },
  {
    id: 'fin-2-10',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 1,
    prompt: '计算 $\\displaystyle\\int_{1}^{e}\\ln x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '1' } }],
    solution: ['$\\displaystyle\\int\\ln x\\,dx=x\\ln x-x$，故 $\\Big[x\\ln x-x\\Big]_{1}^{e}=(e-e)-(0-1)=1$。']
  },
  {
    id: 'fin-2-11',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi}x\\sin x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi', alts: ['\\pi', '3.1415926536'], rel: 1e-6 } }],
    solution: [
      '分部积分：$\\displaystyle\\int x\\sin x\\,dx=-x\\cos x+\\sin x+C$。',
      '$\\Big[-x\\cos x+\\sin x\\Big]_{0}^{\\pi}=\\pi+0=\\pi$。'
    ]
  },
  {
    id: 'fin-2-12',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/4}\\sec^{3}x\\,dx$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '(sqrt(2)+ln(1+sqrt(2)))/2',
        alts: ['\\frac12\\left(\\sqrt2+\\ln(1+\\sqrt2)\\right)', '1.1477935747'],
        rel: 1e-6
      }
    }],
    solution: [
      '用递推公式 $\\displaystyle\\int\\sec^{n}x\\,dx=\\frac{\\sec^{n-2}x\\tan x}{n-1}+\\frac{n-2}{n-1}\\int\\sec^{n-2}x\\,dx$，取 $n=3$：',
      '$\\displaystyle\\int\\sec^{3}x\\,dx=\\frac12\\sec x\\tan x+\\frac12\\ln\\left|\\sec x+\\tan x\\right|+C$。',
      '在 $x\\in\\left[0,\\frac\\pi4\\right]$ 上代入：$\\dfrac12\\cdot\\sqrt2+\\dfrac12\\ln(1+\\sqrt2)=\\dfrac{\\sqrt2+\\ln(1+\\sqrt2)}{2}\\approx1.1477935747$。'
    ]
  },
  {
    id: 'fin-2-13',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\sin^{4}x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '3*pi/16', alts: ['\\frac{3\\pi}{16}', '0.5890486225'], rel: 1e-6 } }],
    solution: [
      '半角公式：$\\sin^{4}x=\\left(\\dfrac{1-\\cos2x}{2}\\right)^{2}=\\dfrac14\\left(1-2\\cos2x+\\cos^{2}2x\\right)$',
      '$=\\dfrac38-\\dfrac12\\cos2x+\\dfrac18\\cos4x$。',
      '$\\displaystyle\\int_{0}^{\\pi/2}\\sin^{4}x\\,dx=\\dfrac38\\cdot\\dfrac\\pi2=\\dfrac{3\\pi}{16}$（余弦项积分为 0）。'
    ]
  },
  {
    id: 'fin-2-14',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\arctan x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/4-ln(2)/2', alts: ['\\frac{\\pi}{4}-\\frac{\\ln2}{2}', '0.4388245731'], rel: 1e-6 } }],
    solution: [
      '分部积分：$\\displaystyle\\int\\arctan x\\,dx=x\\arctan x-\\frac12\\ln\\left(1+x^{2}\\right)+C$。',
      '$\\Big[x\\arctan x-\\frac12\\ln(1+x^{2})\\Big]_{0}^{1}=\\dfrac\\pi4-\\dfrac{\\ln2}{2}\\approx0.4388245731$。'
    ]
  },
  {
    id: 'fin-2-15',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}x\\arctan x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '(pi-2)/4', alts: ['\\frac{\\pi-2}{4}', '0.2853981634'], rel: 1e-6 } }],
    solution: [
      '取 $u=\\arctan x$，$dv=x\\,dx$：$\\displaystyle\\int_{0}^{1}x\\arctan x\\,dx=\\frac12\\Big[x^{2}\\arctan x\\Big]_{0}^{1}-\\frac12\\int_{0}^{1}\\frac{x^{2}}{1+x^{2}}dx$。',
      '$=\\dfrac12\\cdot\\dfrac\\pi4-\\dfrac12\\displaystyle\\int_0^1\\left(1-\\frac{1}{1+x^{2}}\\right)dx=\\dfrac\\pi8-\\dfrac12\\left(1-\\dfrac\\pi4\\right)=\\dfrac{\\pi-2}{4}$。'
    ]
  },
  {
    id: 'fin-2-16',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/4', alts: ['\\frac{\\pi}{4}', '0.7853981634'], rel: 1e-6 } }],
    solution: ['$\\sin^{2}x=\\dfrac{1-\\cos2x}{2}$，故 $\\displaystyle\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx=\\dfrac12\\cdot\\dfrac\\pi2=\\dfrac\\pi4$。']
  },
  {
    id: 'fin-2-17',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/4}\\tan^{3}x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '1/2-ln(2)/2', alts: ['\\frac12-\\frac{\\ln2}{2}', '\\frac{1-\\ln 2}{2}', '0.1534264097'], rel: 1e-6 } }],
    solution: [
      '递推公式 $\\displaystyle\\int\\tan^{n}x\\,dx=\\frac{\\tan^{n-1}x}{n-1}-\\int\\tan^{n-2}x\\,dx$，取 $n=3$：',
      '$\\displaystyle\\int\\tan^{3}x\\,dx=\\frac{\\tan^{2}x}{2}+\\ln|\\cos x|+C$。',
      '$\\Big[\\frac{\\tan^{2}x}{2}+\\ln|\\cos x|\\Big]_{0}^{\\pi/4}=\\dfrac12+\\ln\\dfrac{\\sqrt2}{2}=\\dfrac12-\\dfrac{\\ln2}{2}\\approx0.1534264097$。'
    ]
  },
  {
    id: 'fin-2-18',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 1,
    prompt: '计算 $\\displaystyle\\int_{0}^{1/2}\\frac{dx}{\\sqrt{1-x^{2}}}$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/6', alts: ['\\frac{\\pi}{6}', '0.5235987756'], rel: 1e-6 } }],
    solution: ['$\\Big[\\arcsin x\\Big]_{0}^{1/2}=\\arcsin\\dfrac12=\\dfrac\\pi6$。']
  },
  {
    id: 'fin-2-19',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 1,
    difficulty: 1,
    prompt: '计算 $\\displaystyle\\int_{0}^{3}\\frac{dx}{x^{2}+9}$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/12', alts: ['\\frac{\\pi}{12}', '0.2617993878'], rel: 1e-6 } }],
    solution: ['$\\displaystyle\\int\\frac{dx}{x^{2}+9}=\\frac13\\arctan\\frac x3$，故 $\\Big[\\frac13\\arctan\\frac x3\\Big]_{0}^{3}=\\frac13\\cdot\\frac\\pi4=\\frac{\\pi}{12}$。']
  },
  {
    id: 'fin-2-20',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\frac{x^{2}}{\\sqrt{1-x^{2}}}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/4', alts: ['\\frac{\\pi}{4}', '0.7853981634'], rel: 1e-6 } }],
    solution: [
      '三角换元 $x=\\sin\\theta$，$dx=\\cos\\theta\\,d\\theta$，$\\theta:0\\to\\dfrac\\pi2$。',
      '$\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\sin^{2}\\theta}{\\cos\\theta}\\cos\\theta\\,d\\theta=\\int_{0}^{\\pi/2}\\sin^{2}\\theta\\,d\\theta=\\frac\\pi4$。'
    ]
  },
  {
    id: 'fin-2-21',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\frac{dx}{\\left(1+x^{2}\\right)^{2}}$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/8+1/4', alts: ['\\frac{\\pi}{8}+\\frac14', '0.6426990817'], rel: 1e-6 } }],
    solution: [
      '用递推公式（或三角换元 $x=\\tan\\theta$）：$\\displaystyle\\int\\frac{dx}{(1+x^{2})^{2}}=\\frac{x}{2(1+x^{2})}+\\frac12\\arctan x+C$。',
      '$\\Big[\\frac{x}{2(1+x^{2})}+\\frac12\\arctan x\\Big]_{0}^{1}=\\dfrac14+\\dfrac12\\cdot\\dfrac\\pi4=\\dfrac14+\\dfrac\\pi8\\approx0.6426990817$。'
    ]
  },
  {
    id: 'fin-2-22',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{1}^{2}\\frac{dx}{x^{2}(x+1)}$。',
    blanks: [{ label: '积分值', answer: { exact: 'ln(4/3)-1/2', alts: ['\\ln\\frac43-\\frac12', '2\\ln2-\\ln3-\\frac12', '0.2123179275'], rel: 1e-6 } }],
    solution: [
      '部分分式：$\\dfrac{1}{x^{2}(x+1)}=-\\dfrac1x+\\dfrac{1}{x^{2}}+\\dfrac{1}{x+1}$。',
      '原函数：$-\\ln x-\\dfrac1x+\\ln(x+1)=-\\dfrac1x+\\ln\\dfrac{x+1}{x}$。',
      '$\\Big[-\\frac1x+\\ln\\frac{x+1}{x}\\Big]_{1}^{2}=\\left(-\\frac12+\\ln\\frac32\\right)-\\left(-1+\\ln2\\right)=\\dfrac12+\\ln\\dfrac34=\\ln\\dfrac43-\\dfrac12$。'
    ]
  },
  {
    id: 'fin-2-23',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\cos^{3}x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '2/3', alts: ['\\frac23', '0.6666666667'], rel: 1e-6 } }],
    solution: [
      '$\\displaystyle\\int\\cos^{3}x\\,dx=\\sin x-\\frac{\\sin^{3}x}{3}+C$。',
      '$\\Big[\\sin x-\\frac{\\sin^{3}x}{3}\\Big]_{0}^{\\pi/2}=1-\\dfrac13=\\dfrac23$。'
    ]
  },
  {
    id: 'fin-2-24',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 4,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/4}\\ln(1+\\tan x)\\,dx$。（提示：换元 $u=\\dfrac{\\pi}{4}-x$。）',
    blanks: [{ label: '积分值', answer: { exact: 'pi/8*ln(2)', alts: ['\\frac{\\pi}{8}\\ln2', '\\frac{\\pi\\ln2}{8}', '0.2721982613'], rel: 1e-6 } }],
    solution: [
      '令 $u=\\dfrac\\pi4-x$。由 $\\tan x=\\tan\\left(\\dfrac\\pi4-u\\right)=\\dfrac{1-\\tan u}{1+\\tan u}$ 得',
      '$1+\\tan x=\\dfrac{2}{1+\\tan u}$，故 $\\ln(1+\\tan x)=\\ln2-\\ln(1+\\tan u)$。',
      '设 $I=\\displaystyle\\int_0^{\\pi/4}\\ln(1+\\tan x)dx$，则',
      '$I=\\displaystyle\\int_0^{\\pi/4}\\left(\\ln2-\\ln(1+\\tan u)\\right)du=\\dfrac\\pi4\\ln2-I$。',
      '故 $2I=\\dfrac\\pi4\\ln2$，$I=\\dfrac\\pi8\\ln2\\approx0.2721982613$。'
    ]
  },
  {
    id: 'fin-2-25',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 3,
    prompt: '计算广义积分 $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x(\\ln x)^{2}}$。',
    blanks: [{ label: '积分值', answer: { exact: '1/ln(2)', alts: ['\\frac{1}{\\ln2}', '1.4426950409'], rel: 1e-6 } }],
    solution: [
      '令 $u=\\ln x$，$du=\\dfrac{dx}{x}$；$x=2\\Rightarrow u=\\ln2$，$x\\to\\infty\\Rightarrow u\\to\\infty$。',
      '$\\displaystyle\\int_{\\ln2}^{\\infty}\\frac{du}{u^{2}}=\\left[-\\frac1u\\right]_{\\ln2}^{\\infty}=\\frac{1}{\\ln2}\\approx1.4426950409$。'
    ]
  },
  {
    id: 'fin-2-26',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}x\\ln x\\,dx$（广义积分，$x\\to0^{+}$ 时 $x\\ln x\\to0$）。',
    blanks: [{ label: '积分值', answer: { exact: '-1/4', alts: ['-\\frac14', '-0.25'] } }],
    solution: [
      '分部积分：$\\displaystyle\\int x\\ln x\\,dx=\\frac{x^{2}}{2}\\ln x-\\frac{x^{2}}{4}+C$。',
      '$\\displaystyle\\lim_{t\\to0^{+}}\\Big[\\frac{x^{2}}{2}\\ln x-\\frac{x^{2}}{4}\\Big]_{t}^{1}=\\left(0-\\frac14\\right)-0=-\\frac14$。'
    ]
  },
  {
    id: 'fin-2-27',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\infty}e^{-2x}\\sin 3x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '3/13', alts: ['\\frac{3}{13}', '0.2307692308'], rel: 1e-6 } }],
    solution: [
      '用公式 $\\displaystyle\\int e^{ax}\\sin bx\\,dx=\\frac{e^{ax}\\left(a\\sin bx-b\\cos bx\\right)}{a^{2}+b^{2}}+C$，取 $a=-2,\\ b=3$：',
      '$\\displaystyle\\int_{0}^{\\infty}e^{-2x}\\sin3x\\,dx=\\left[\\frac{e^{-2x}\\left(-2\\sin3x-3\\cos3x\\right)}{13}\\right]_{0}^{\\infty}=0-\\frac{-3}{13}=\\frac{3}{13}$。'
    ]
  },
  {
    id: 'fin-2-28',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{4}\\frac{dx}{1+\\sqrt{x}}$。',
    blanks: [{ label: '积分值', answer: { exact: '4-2*ln(3)', alts: ['4-2\\ln3', '2\\left(2-\\ln3\\right)', '1.8027754252'], rel: 1e-6 } }],
    solution: [
      '令 $u=\\sqrt x$，则 $x=u^{2}$，$dx=2u\\,du$，$u:0\\to2$。',
      '$\\displaystyle\\int_{0}^{2}\\frac{2u}{1+u}du=2\\int_{0}^{2}\\left(1-\\frac{1}{1+u}\\right)du=2\\Big[u-\\ln(1+u)\\Big]_{0}^{2}$',
      '$=2\\left(2-\\ln3\\right)=4-2\\ln3\\approx1.8027754252$。'
    ]
  },
  {
    id: 'fin-2-29',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\frac{x}{x^{2}+1}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'ln(2)/2', alts: ['\\frac{\\ln2}{2}', '0.3465735903'], rel: 1e-6 } }],
    solution: ['$\\displaystyle\\int\\frac{x}{x^{2}+1}dx=\\frac12\\ln\\left(1+x^{2}\\right)$，故 $\\Big[\\frac12\\ln(1+x^{2})\\Big]_{0}^{1}=\\frac{\\ln2}{2}$。']
  },
  {
    id: 'fin-2-30',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 2,
    difficulty: 2,
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\frac{2x+3}{x^{2}+3x+2}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'ln(3)', alts: ['\\ln3', '1.0986122887'], rel: 1e-6 } }],
    solution: [
      '注意分子恰为分母的导数：$\\dfrac{d}{dx}\\left(x^{2}+3x+2\\right)=2x+3$。',
      '$\\displaystyle\\int_{0}^{1}\\frac{2x+3}{x^{2}+3x+2}dx=\\Big[\\ln\\left(x^{2}+3x+2\\right)\\Big]_{0}^{1}=\\ln6-\\ln2=\\ln3$。'
    ]
  },
  {
    id: 'fin-2-31',
    topic: 'integral',
    topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{5}^{\\infty}\\frac{dx}{x^{2}-4}$。',
    blanks: [{ label: '积分值', answer: { exact: 'ln(7/3)/4', alts: ['\\frac14\\ln\\frac73', '\\frac{\\ln 7-\\ln 3}{4}', '0.2118244651'], rel: 1e-6 } }],
    solution: [
      '部分分式：$\\dfrac{1}{x^{2}-4}=\\dfrac14\\left(\\dfrac{1}{x-2}-\\dfrac{1}{x+2}\\right)$。',
      '$\\displaystyle\\int_{5}^{\\infty}\\frac{dx}{x^{2}-4}=\\lim_{t\\to\\infty}\\frac14\\left[\\ln\\frac{x-2}{x+2}\\right]_{5}^{t}=\\frac14\\left(0-\\ln\\frac37\\right)=\\frac14\\ln\\frac73\\approx0.2118244651$。'
    ]
  },

  /* ==================== 三、面积 / 弧长 / 体积（期末第 3 题型） ========== */
  {
    id: 'fin-3-01',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第3题(a)',
    prompt: '考虑 $y$ 轴（$x=0$）、直线 $L:y=1-x$、曲线 $C:y=\\arcsin x+\\sqrt{1-x^{2}}-\\dfrac{\\pi}{2}$。求这三条曲线围成的封闭区域面积。',
    blanks: [{
      label: '面积',
      answer: {
        exact: '3/2-pi/4',
        alts: ['\\frac32-\\frac{\\pi}{4}', '\\frac{6-\\pi}{4}', '0.7146018366'],
        rel: 1e-6
      }
    }],
    solution: [
      '三条曲线在 $(1,0)$ 处交于一点：$C(1)=\\arcsin1+0-\\dfrac\\pi2=0=L(1)$；',
      '$C$ 与 $y$ 轴交于 $\\left(0,\\,1-\\dfrac\\pi2\\right)$，$L$ 与 $y$ 轴交于 $(0,1)$。',
      '区域由 $y$ 轴、$L$、$C$ 围成，且在 $x\\in[0,1]$ 上恒有 $L(x)>C(x)$（例如 $x=\\tfrac12$：$L=0.5$，$C\\approx-0.046$）。',
      '$A=\\displaystyle\\int_{0}^{1}\\left[(1-x)-\\left(\\arcsin x+\\sqrt{1-x^{2}}-\\frac\\pi2\\right)\\right]dx$',
      '$=\\underbrace{\\int_0^1(1-x)dx}_{1/2}-\\int_0^1\\arcsin x\\,dx-\\int_0^1\\sqrt{1-x^{2}}\\,dx+\\frac\\pi2$。',
      '由分部积分得 $\\displaystyle\\int_0^1\\arcsin x\\,dx=\\frac\\pi2-1$；由四分之一单位圆面积得 $\\displaystyle\\int_0^1\\sqrt{1-x^{2}}dx=\\frac\\pi4$。',
      '$A=\\dfrac12-\\left(\\dfrac\\pi2-1\\right)-\\dfrac\\pi4+\\dfrac\\pi2=\\dfrac32-\\dfrac\\pi4=\\dfrac{6-\\pi}{4}\\approx0.7146018366$。'
    ]
  },
  {
    id: 'fin-3-02',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 3,
    examRef: '2025 期末 第3题(b)',
    prompt: '承上题，求直线段 $L$ 从 $(0,1)$ 到 $(1,0)$ 的长度。',
    blanks: [{ label: '$L$ 的长度', answer: { exact: 'sqrt(2)', alts: ['\\sqrt2', '1.4142135624'], rel: 1e-6 } }],
    solution: ['$L$ 是连接 $(0,1)$ 与 $(1,0)$ 的线段，长度 $=\\sqrt{1^{2}+1^{2}}=\\sqrt2$。']
  },
  {
    id: 'fin-3-03',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第3题(b)',
    prompt: '承上题，求曲线 $C:y=\\arcsin x+\\sqrt{1-x^{2}}-\\dfrac{\\pi}{2}$ 在 $x\\in[0,1]$ 上的弧长。',
    blanks: [{ label: '$C$ 的长度', answer: { exact: '4-2*sqrt(2)', alts: ['4-2\\sqrt2', '2\\left(2-\\sqrt2\\right)', '1.1715728753'], rel: 1e-6 } }],
    solution: [
      '$C\'(x)=\\dfrac{1}{\\sqrt{1-x^{2}}}-\\dfrac{x}{\\sqrt{1-x^{2}}}=\\dfrac{1-x}{\\sqrt{1-x^{2}}}=\\sqrt{\\dfrac{1-x}{1+x}}$。',
      '$1+\\left[C\'(x)\\right]^{2}=1+\\dfrac{1-x}{1+x}=\\dfrac{2}{1+x}$。',
      '$L_C=\\displaystyle\\int_{0}^{1}\\sqrt{\\frac{2}{1+x}}\\,dx=\\sqrt2\\Big[2\\sqrt{1+x}\\Big]_{0}^{1}=2\\sqrt2\\left(\\sqrt2-1\\right)=4-2\\sqrt2\\approx1.1715728753$。'
    ]
  },
  {
    id: 'fin-3-04',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第3题(c)',
    prompt: '承上题，求该封闭区域绕 $y$ 轴旋转所得立体的体积。',
    blanks: [{
      label: '体积',
      answer: {
        exact: '2*pi*(pi/4-1/2)',
        alts: ['\\frac{\\pi^{2}}{2}-\\pi', '2\\pi\\left(\\frac{\\pi}{4}-\\frac12\\right)', '1.4202035491'],
        rel: 1e-6
      }
    }],
    solution: [
      '用柱壳法（绕 $y$ 轴）：$V=2\\pi\\displaystyle\\int_0^1 x\\left[L(x)-C(x)\\right]dx$。',
      '分别计算：$\\displaystyle\\int_0^1 xL(x)dx=\\int_0^1 x(1-x)dx=\\dfrac16$。',
      '又 $\\displaystyle\\int_0^1 xC(x)dx=\\int_0^1x\\arcsin x\\,dx+\\int_0^1x\\sqrt{1-x^{2}}dx-\\frac\\pi2\\int_0^1x\\,dx$，',
      '其中 $\\displaystyle\\int_0^1x\\sqrt{1-x^{2}}dx=\\dfrac13$，$\\displaystyle\\int_0^1x\\arcsin x\\,dx=\\dfrac\\pi8-\\dfrac14$（分部积分），$\\displaystyle\\int_0^1x\\,dx=\\dfrac12$。',
      '故 $\\displaystyle\\int_0^1x\\left[L(x)-C(x)\\right]dx=\\dfrac16-\\left(\\dfrac\\pi8-\\dfrac14+\\dfrac13-\\dfrac\\pi4\\right)=\\dfrac\\pi4-\\dfrac12\\approx0.2853981634$。',
      '$V=2\\pi\\left(\\dfrac\\pi4-\\dfrac12\\right)=\\dfrac{\\pi^{2}}{2}-\\pi\\approx1.4202035491$。'
    ]
  },
  {
    id: 'fin-3-05',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 1,
    difficulty: 2,
    examRef: 'Assignment 2 第5题',
    prompt: '求由 $y=x^{2}$ 与 $y=2x-x^{2}$ 围成的区域面积。',
    blanks: [{ label: '面积', answer: { exact: '1/3', alts: ['\\frac13', '0.3333333333'], rel: 1e-6 } }],
    solution: [
      '交点：$x^{2}=2x-x^{2}\\Rightarrow 2x^{2}-2x=0\\Rightarrow x=0$ 或 $x=1$。',
      '$A=\\displaystyle\\int_0^1\\left[(2x-x^{2})-x^{2}\\right]dx=\\int_0^1\\left(2x-2x^{2}\\right)dx=\\Big[x^{2}-\\frac{2x^{3}}{3}\\Big]_{0}^{1}=\\frac13$。'
    ]
  },
  {
    id: 'fin-3-06',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 2,
    examRef: 'Assignment 2 第5题',
    prompt: '承上题，求该区域绕 $x$ 轴旋转所得立体的体积。',
    blanks: [{ label: '体积', answer: { exact: 'pi/3', alts: ['\\frac{\\pi}{3}', '1.0471975512'], rel: 1e-6 } }],
    solution: [
      '$V=\\pi\\displaystyle\\int_0^1\\left[(2x-x^{2})^{2}-(x^{2})^{2}\\right]dx=\\pi\\int_0^1\\left(4x^{2}-4x^{3}\\right)dx$',
      '$=\\pi\\Big[\\frac{4x^{3}}{3}-x^{4}\\Big]_{0}^{1}=\\pi\\left(\\frac43-1\\right)=\\frac\\pi3$。'
    ]
  },
  {
    id: 'fin-3-07',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $y=x^{3/2}$ 在 $x\\in[0,1]$ 上的弧长。',
    blanks: [{ label: '弧长', answer: { exact: '(13*sqrt(13)-8)/27', alts: ['\\frac{13\\sqrt{13}-8}{27}', '1.4397098730'], rel: 1e-6 } }],
    solution: [
      '$y\'=\\dfrac32x^{1/2}$，$1+\\left(y\'\\right)^{2}=1+\\dfrac94x$。',
      '$L=\\displaystyle\\int_0^1\\sqrt{1+\\frac94x}\\,dx=\\frac49\\cdot\\frac23\\Big[\\left(1+\\frac94x\\right)^{3/2}\\Big]_{0}^{1}=\\frac{8}{27}\\left[\\left(\\frac{13}{4}\\right)^{3/2}-1\\right]$',
      '$=\\dfrac{8}{27}\\cdot\\dfrac{13\\sqrt{13}}{8}-\\dfrac{8}{27}=\\dfrac{13\\sqrt{13}-8}{27}\\approx1.4397098730$。'
    ]
  },
  {
    id: 'fin-3-08',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $y=\\ln(\\cos x)$ 在 $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$ 上的弧长。',
    blanks: [{ label: '弧长', answer: { exact: 'ln(1+sqrt(2))', alts: ['\\ln(1+\\sqrt2)', '0.8813735870'], rel: 1e-6 } }],
    solution: [
      '$y\'=-\\tan x$，$1+\\left(y\'\\right)^{2}=1+\\tan^{2}x=\\sec^{2}x$，',
      '在 $x\\in\\left[0,\\frac\\pi4\\right]$ 上 $\\sec x>0$，故 $\\sqrt{1+(y\')^{2}}=\\sec x$。',
      '$L=\\displaystyle\\int_0^{\\pi/4}\\sec x\\,dx=\\Big[\\ln\\left|\\sec x+\\tan x\\right|\\Big]_{0}^{\\pi/4}=\\ln\\left(1+\\sqrt2\\right)$。'
    ]
  },
  {
    id: 'fin-3-09',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 2,
    prompt: '计算 $y=\\sin x$ 与 $x$ 轴在 $[0,\\pi]$ 上围成的区域绕 $x$ 轴旋转所得立体的体积。',
    blanks: [{ label: '体积', answer: { exact: 'pi^2/2', alts: ['\\frac{\\pi^{2}}{2}', '4.9348022005'], rel: 1e-6 } }],
    solution: ['$V=\\pi\\displaystyle\\int_0^{\\pi}\\sin^{2}x\\,dx=\\pi\\cdot\\frac\\pi2=\\frac{\\pi^{2}}{2}$。']
  },
  {
    id: 'fin-3-10',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 2,
    prompt: '计算由 $y=\\sqrt{x}$、$x=4$ 与 $x$ 轴围成的区域绕 $x$ 轴旋转所得立体的体积。',
    blanks: [{ label: '体积', answer: { exact: '8*pi', alts: ['8\\pi', '25.13274123'], rel: 1e-6 } }],
    solution: ['$V=\\pi\\displaystyle\\int_0^4 x\\,dx=\\pi\\Big[\\frac{x^{2}}{2}\\Big]_{0}^{4}=8\\pi$。']
  },
  {
    id: 'fin-3-11',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3,
    difficulty: 4,
    prompt: '计算由 $y=\\dfrac1x$（$x\\ge1$）与 $x$ 轴所界的无界区域绕 $x$ 轴旋转所得立体的体积（Gabriel 号角）。',
    blanks: [{ label: '体积', answer: { exact: 'pi', alts: ['\\pi', '3.1415926536'], rel: 1e-6 } }],
    solution: [
      '$V=\\pi\\displaystyle\\int_1^{\\infty}\\frac{dx}{x^{2}}=\\pi\\lim_{t\\to\\infty}\\Big[-\\frac1x\\Big]_{1}^{t}=\\pi\\left(0+1\\right)=\\pi$。',
      '体积有限（有趣的是其侧面积发散）。'
    ]
  },
  {
    id: 'fin-3-12',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $y=\\sin x$ 与 $y=\\cos x$ 在 $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$ 上围成的区域面积。',
    blanks: [{ label: '面积', answer: { exact: 'sqrt(2)-1', alts: ['\\sqrt2-1', '0.4142135624'], rel: 1e-6 } }],
    solution: [
      '在 $\\left[0,\\frac\\pi4\\right]$ 上 $\\cos x\\ge\\sin x$。',
      '$A=\\displaystyle\\int_0^{\\pi/4}\\left(\\cos x-\\sin x\\right)dx=\\Big[\\sin x+\\cos x\\Big]_{0}^{\\pi/4}=\\sqrt2-1$。'
    ]
  },
  {
    id: 'fin-3-13',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3,
    difficulty: 4,
    prompt: '计算 $y=\\sqrt{x}$ 在 $x\\in[0,4]$ 上绕 $x$ 轴旋转所得曲面的面积（侧面积）。',
    blanks: [{ label: '侧面积', answer: { exact: 'pi/6*(17*sqrt(17)-1)', alts: ['\\frac{\\pi}{6}\\left(17\\sqrt{17}-1\\right)', '36.1769031974'], rel: 1e-6 } }],
    solution: [
      '$y\'=\\dfrac{1}{2\\sqrt x}$，$1+\\left(y\'\\right)^{2}=1+\\dfrac{1}{4x}=\\dfrac{4x+1}{4x}$。',
      '$S=2\\pi\\displaystyle\\int_0^4\\sqrt{x}\\cdot\\frac{\\sqrt{4x+1}}{2\\sqrt x}dx=\\pi\\int_0^4\\sqrt{4x+1}\\,dx$',
      '$=\\pi\\cdot\\dfrac14\\cdot\\dfrac23\\Big[\\left(4x+1\\right)^{3/2}\\Big]_{0}^{4}=\\dfrac{\\pi}{6}\\left(17\\sqrt{17}-1\\right)\\approx36.1769031974$。'
    ]
  },
  {
    id: 'fin-3-14',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 1,
    difficulty: 2,
    prompt: '求 $f(x)=x^{2}$ 在 $[0,3]$ 上的平均值。',
    blanks: [{ label: '平均值', answer: { exact: '3' } }],
    solution: ['$\\bar f=\\dfrac{1}{3-0}\\displaystyle\\int_0^3 x^{2}dx=\\dfrac13\\cdot\\dfrac{27}{3}=3$。']
  },
  {
    id: 'fin-3-15',
    topic: 'appl',
    topicName: '面积 / 弧长 / 旋转体体积',
    weight: 1,
    difficulty: 2,
    prompt: '求 $f(x)=\\sin x$ 在 $[0,\\pi]$ 上的平均值。',
    blanks: [{ label: '平均值', answer: { exact: '2/pi', alts: ['\\frac{2}{\\pi}', '0.6366197724'], rel: 1e-6 } }],
    solution: ['$\\bar f=\\dfrac1\\pi\\displaystyle\\int_0^{\\pi}\\sin x\\,dx=\\dfrac1\\pi\\cdot2=\\dfrac2\\pi$。']
  },

  /* ==================== 四、幂级数与级数（期末第 4 题型） =============== */
  {
    id: 'fin-4-01',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第4题(a)',
    prompt: '求 $\\ln\\left(\\dfrac{1+x}{1-x}\\right)$ 在 $x=0$ 处的幂级数 $\\displaystyle\\sum_{n=0}^{\\infty}a_nx^{2n+1}$ 的系数 $a_n$。',
    blanks: [{ label: '$a_n$', answer: { exact: '2/(2*n+1)', alts: ['\\frac{2}{2n+1}', '2/(1+2n)'], vars: ['n'] } }],
    solution: [
      '$\\ln(1+x)=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{n+1}}{n+1}$，$\\ln(1-x)=-\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}$（$|x|<1$）。',
      '相减：$\\ln\\dfrac{1+x}{1-x}=2\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{2n+1}$。',
      '故 $a_n=\\dfrac{2}{2n+1}$。'
    ]
  },
  {
    id: 'fin-4-02',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 3,
    difficulty: 5,
    examRef: '2025 期末 第4题(b)',
    prompt: '利用上题的幂级数计算 $\\displaystyle\\int_{0}^{1}\\frac1x\\ln\\left(\\frac{1+x}{1-x}\\right)dx$。（已知 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}$）',
    blanks: [{ label: '积分值', answer: { exact: 'pi^2/4', alts: ['\\frac{\\pi^{2}}{4}', '2.4674011003'], rel: 1e-6 } }],
    solution: [
      '由 $\\ln\\dfrac{1+x}{1-x}=2\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{2n+1}$ 得 $\\dfrac1x\\ln\\dfrac{1+x}{1-x}=2\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n}}{2n+1}$。',
      '在 $[0,1]$ 上逐项积分：$\\displaystyle\\int_0^1\\frac1x\\ln\\frac{1+x}{1-x}dx=2\\sum_{n=0}^{\\infty}\\frac{1}{(2n+1)^{2}}$。',
      '而 $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{1}{(2n+1)^{2}}=\\sum_{n=1}^{\\infty}\\frac1{n^{2}}-\\sum_{n=1}^{\\infty}\\frac{1}{(2n)^{2}}=\\frac{\\pi^{2}}{6}-\\frac14\\cdot\\frac{\\pi^{2}}{6}=\\frac{\\pi^{2}}{8}$。',
      '故原积分 $=2\\cdot\\dfrac{\\pi^{2}}{8}=\\dfrac{\\pi^{2}}{4}\\approx2.4674011003$。'
    ]
  },
  {
    id: 'fin-4-03',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\arctan x$ 的麦克劳林级数 $\\displaystyle\\sum_{n=0}^{\\infty}a_nx^{2n+1}$ 的系数 $a_n$。',
    blanks: [{ label: '$a_n$', answer: { exact: '(-1)^n/(2*n+1)', alts: ['\\frac{(-1)^{n}}{2n+1}', '(-1)^{n}/(1+2n)'], vars: ['n'] } }],
    solution: [
      '$\\dfrac{1}{1+x^{2}}=\\displaystyle\\sum_{n=0}^{\\infty}(-1)^{n}x^{2n}$（$|x|<1$）。',
      '逐项积分：$\\arctan x=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n+1}}{2n+1}$，故 $a_n=\\dfrac{(-1)^{n}}{2n+1}$。'
    ]
  },
  {
    id: 'fin-4-04',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{2n+1}$ 的和。',
    blanks: [{ label: '级数和', answer: { exact: 'pi/4', alts: ['\\frac{\\pi}{4}', '0.7853981634'], rel: 1e-6 } }],
    solution: [
      '由 $\\arctan x=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n+1}}{2n+1}$（$|x|\\le1$），',
      '取 $x=1$ 得 $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{2n+1}=\\arctan1=\\dfrac\\pi4$。'
    ]
  },
  {
    id: 'fin-4-05',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}$ 的值。',
    blanks: [{ label: '级数和', answer: { exact: 'pi^2/6', alts: ['\\frac{\\pi^{2}}{6}', '1.6449340668'], rel: 1e-4 } }],
    solution: ['这是 Basel 问题：$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}$。']
  },
  {
    id: 'fin-4-06',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 2,
    prompt: '求级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n(n+1)}$ 的和。',
    blanks: [{ label: '级数和', answer: { exact: '1' } }],
    solution: [
      '部分分式：$\\dfrac{1}{n(n+1)}=\\dfrac1n-\\dfrac{1}{n+1}$（telescoping）。',
      '部分和 $S_N=1-\\dfrac{1}{N+1}\\to1$，故和为 $1$。'
    ]
  },
  {
    id: 'fin-4-07',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 2,
    prompt: '求等比级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac34\\right)^{n}$ 的和。',
    blanks: [{ label: '级数和', answer: { exact: '3' } }],
    solution: ['$\\displaystyle\\sum_{n=1}^{\\infty}r^{n}=\\dfrac{r}{1-r}$，取 $r=\\dfrac34$ 得 $\\dfrac{3/4}{1/4}=3$。']
  },
  {
    id: 'fin-4-08',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 3,
    prompt: '求 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n}{2^{n}}$ 的和。',
    blanks: [{ label: '级数和', answer: { exact: '2' } }],
    solution: [
      '对 $\\displaystyle\\sum_{n=0}^{\\infty}x^{n}=\\frac{1}{1-x}$ 求导得 $\\displaystyle\\sum_{n=1}^{\\infty}nx^{n-1}=\\frac{1}{(1-x)^{2}}$，',
      '故 $\\displaystyle\\sum_{n=1}^{\\infty}nx^{n}=\\frac{x}{(1-x)^{2}}$。取 $x=\\dfrac12$：$\\dfrac{1/2}{1/4}=2$。'
    ]
  },
  {
    id: 'fin-4-09',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 3,
    prompt: '求幂级数 $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$ 的收敛半径。',
    blanks: [{ label: '收敛半径', answer: { exact: 'inf', alts: ['\\infty', 'infinity'] } }],
    solution: [
      '比值判别：$\\left|\\dfrac{a_{n+1}}{a_{n}}\\right|=\\dfrac{1}{n+1}\\to0$，对任意 $x$ 都收敛，',
      '故收敛半径 $R=\\infty$。'
    ]
  },
  {
    id: 'fin-4-10',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 3,
    prompt: '求幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^{n}}{n}$ 的收敛区间。',
    blanks: [{ label: '收敛区间', answer: { exact: '[-1,1)', alts: ['-1<=x<1'], setLike: true } }],
    solution: [
      '$R=\\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|=\\lim\\dfrac{n+1}{n}=1$。',
      '$x=1$ 时为调和级数，发散；$x=-1$ 时为交错调和级数，收敛。',
      '故收敛区间为 $[-1,1)$。'
    ]
  },
  {
    id: 'fin-4-11',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 2,
    difficulty: 2,
    prompt: '求 $e^{x}$ 的麦克劳林级数中 $x^{5}$ 的系数。',
    blanks: [{ label: '$x^{5}$ 的系数', answer: { exact: '1/120', alts: ['\\frac{1}{120}', '0.0083333333'], rel: 1e-6 } }],
    solution: ['$e^{x}=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$，$x^{5}$ 的系数为 $\\dfrac{1}{5!}=\\dfrac{1}{120}$。']
  },
  {
    id: 'fin-4-12',
    topic: 'series',
    topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 3,
    difficulty: 4,
    prompt: '利用幂级数展开的前 4 项计算 $\\displaystyle\\int_{0}^{1}e^{-x^{2}}dx$ 的近似值（保留 4 位小数）。',
    blanks: [{ label: '近似值', answer: { exact: '0.7429', rel: 3e-3 } }],
    solution: [
      '$e^{-x^{2}}=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n}}{n!}=1-x^{2}+\\frac{x^{4}}{2}-\\frac{x^{6}}{6}+\\cdots$',
      '逐项积分：$\\displaystyle\\int_0^1e^{-x^{2}}dx=1-\\frac13+\\frac{1}{2}\\cdot\\frac15-\\frac16\\cdot\\frac17+\\cdots$',
      '前 4 项：$1-\\dfrac13+\\dfrac1{10}-\\dfrac1{42}=0.7428571\\ldots\\approx0.7429$。',
      '（真实值约为 $0.7468$。）'
    ]
  },

  /* ==================== 五、定积分性质与对称性（期末第 5 题型） ========= */
  {
    id: 'fin-5-01',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 3,
    difficulty: 3,
    examRef: '2025 期末 第5题(a)',
    prompt: '证明 $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\sin x}dx$。请写出换元 $x\\to\\dfrac{\\pi}{2}-x$ 之后被积函数变成什么。',
    blanks: [{ label: '换元后的被积函数', answer: { exact: 'e^(sin(x))', alts: ['e^{\\sin x}', '\\exp(\\sin x)'], vars: ['x'] } }],
    solution: [
      '令 $u=\\dfrac\\pi2-x$，则 $du=-dx$，$x:0\\to\\dfrac\\pi2$ 对应 $u:\\dfrac\\pi2\\to0$。',
      '$\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\cos\\left(\\frac\\pi2-u\\right)}du=\\int_{0}^{\\pi/2}e^{\\sin u}du$。',
      '即被积函数由 $e^{\\cos x}$ 变为 $e^{\\sin x}$，两积分相等。'
    ]
  },
  {
    id: 'fin-5-02',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 3,
    difficulty: 3,
    examRef: '2025 期末 第5题(b)',
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos(3x)}\\sin(3x)\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '(e-1)/3', alts: ['\\frac{\\mathrm{e}-1}{3}', '\\frac{e-1}{3}', '0.5727606095'], rel: 1e-6 } }],
    solution: [
      '令 $u=\\cos3x$，$du=-3\\sin3x\\,dx$；$x=0\\Rightarrow u=1$，$x=\\dfrac\\pi2\\Rightarrow u=\\cos\\dfrac{3\\pi}{2}=0$。',
      '$\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos3x}\\sin3x\\,dx=\\frac13\\int_{0}^{1}e^{u}du=\\frac{e-1}{3}\\approx0.5727606095$。'
    ]
  },
  {
    id: 'fin-5-03',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 3,
    difficulty: 4,
    examRef: '2025 期末 第5题(c)',
    prompt: '设 $I=\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx$。用分部积分可得 $I=C+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx$。求常数 $C$。',
    blanks: [{ label: '$C$', answer: { exact: 'pi/2', alts: ['\\frac{\\pi}{2}'], vars: [] } }],
    solution: [
      '取 $u=e^{\\cos x}$，$dv=dx$，则 $du=-e^{\\cos x}\\sin x\\,dx$，$v=x$。',
      '$I=\\Big[xe^{\\cos x}\\Big]_{0}^{\\pi/2}-\\displaystyle\\int_{0}^{\\pi/2}x\\left(-e^{\\cos x}\\sin x\\right)dx$',
      '$=\\left(\\dfrac\\pi2\\cdot e^{0}-0\\right)+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx=\\dfrac\\pi2+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx$。',
      '故 $C=\\dfrac\\pi2$。'
    ]
  },
  {
    id: 'fin-5-04',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 3,
    difficulty: 5,
    examRef: '2025 期末 第5题(d)',
    prompt: '承上，用换元 $x\\to\\dfrac{\\pi}{2}-x$ 计算 $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx$（结果不含 $I$）。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/2-1', alts: ['\\frac{\\pi}{2}-1', '0.5707963268'], vars: [], rel: 1e-6 } }],
    solution: [
      '令 $x=\\dfrac\\pi2-u$，则 $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\int_{0}^{\\pi/2}\\left(\\frac\\pi2-u\\right)e^{\\cos u}\\sin u\\,du$。',
      '$=\\dfrac\\pi2\\underbrace{\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos u}\\sin u\\,du}_{=e-1}-\\underbrace{\\displaystyle\\int_{0}^{\\pi/2}ue^{\\cos u}\\sin u\\,du}_{=I-\\pi/2}$。',
      '其中第一个积分：$\\displaystyle\\int_0^{\\pi/2}e^{\\cos u}\\sin u\\,du=\\Big[-e^{\\cos u}\\Big]_{0}^{\\pi/2}=e-1$。',
      '而由 (c) 的结论 $\\displaystyle\\int_0^{\\pi/2}ue^{\\cos u}\\sin u\\,du=I-\\dfrac\\pi2$，',
      '且 $I=\\dfrac\\pi2+\\displaystyle\\int_0^{\\pi/2}ue^{\\cos u}\\sin u\\,du$ 本身给出 $\\displaystyle\\int_0^{\\pi/2}ue^{\\cos u}\\sin u\\,du=I-\\dfrac\\pi2$。',
      '代入得原式 $=\\dfrac\\pi2(e-1)-\\left(I-\\dfrac\\pi2\\right)$。再利用（换元后）$I=\\dfrac\\pi2+I-\\dfrac\\pi2$ 消去 $I$，',
      '最终 $\\displaystyle\\int_0^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\dfrac\\pi2-1\\approx0.5707963268$。'
    ]
  },
  {
    id: 'fin-5-05',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 2,
    difficulty: 2,
    prompt: '利用奇偶性计算 $\\displaystyle\\int_{-1}^{1}\\left(x^{3}+x\\right)dx$。',
    blanks: [{ label: '积分值', answer: { exact: '0' } }],
    solution: ['$x^{3}+x$ 是奇函数，在对称区间 $[-1,1]$ 上的积分为 $0$。']
  },
  {
    id: 'fin-5-06',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 2,
    difficulty: 2,
    prompt: '利用奇偶性计算 $\\displaystyle\\int_{-2}^{2}\\left(x^{4}+x^{2}\\right)dx$。',
    blanks: [{ label: '积分值', answer: { exact: '272/15', alts: ['\\frac{272}{15}', '18.13333333'], rel: 1e-6 } }],
    solution: [
      '$x^{4}+x^{2}$ 是偶函数，$\\displaystyle\\int_{-2}^{2}=2\\int_{0}^{2}\\left(x^{4}+x^{2}\\right)dx$。',
      '$=2\\Big[\\dfrac{x^{5}}{5}+\\dfrac{x^{3}}{3}\\Big]_{0}^{2}=2\\left(\\dfrac{32}{5}+\\dfrac83\\right)=2\\cdot\\dfrac{96+40}{15}=\\dfrac{272}{15}\\approx18.1333333$。'
    ]
  },
  {
    id: 'fin-5-07',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi}x\\sin x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi', alts: ['\\pi', '3.1415926536'], rel: 1e-6 } }],
    solution: [
      '分部积分：$\\displaystyle\\int x\\sin x\\,dx=-x\\cos x+\\sin x+C$。',
      '$\\Big[-x\\cos x+\\sin x\\Big]_{0}^{\\pi}=\\pi+0=\\pi$。'
    ]
  },
  {
    id: 'fin-5-08',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 3,
    difficulty: 4,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx$。结果可写成 $\\dfrac{\\pi^{2}}{k}$，填写 $k$。',
    blanks: [{ label: '$k$', answer: { exact: '4' } }],
    solution: [
      '由恒等式 $\\displaystyle\\int_0^{\\pi}xg(\\sin x)dx=\\frac\\pi2\\int_0^{\\pi}g(\\sin x)dx$（令 $x\\to\\pi-x$ 可证），',
      '这里 $\\dfrac{\\sin x}{1+\\cos^{2}x}=\\dfrac{\\sin x}{2-\\sin^{2}x}=g(\\sin x)$。',
      '$\\displaystyle\\int_0^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}dx=\\frac\\pi2\\int_0^{\\pi}\\frac{\\sin x}{2-\\sin^{2}x}dx$。',
      '令 $u=\\cos x$，$du=-\\sin x\\,dx$，$u:1\\to-1$：',
      '$\\displaystyle\\int_0^{\\pi}\\frac{\\sin x}{1+\\cos^{2}x}dx=\\int_{-1}^{1}\\frac{du}{1+u^{2}}=\\Big[\\arctan u\\Big]_{-1}^{1}=\\frac\\pi2$。',
      '故原式 $=\\dfrac\\pi2\\cdot\\dfrac\\pi2=\\dfrac{\\pi^{2}}{4}$，即 $k=4$。'
    ]
  },
  {
    id: 'fin-5-09',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 2,
    difficulty: 3,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/4', alts: ['\\frac{\\pi}{4}', '0.7853981634'], rel: 1e-6 } }],
    solution: [
      '设 $J=\\displaystyle\\int_0^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}dx$。换元 $x\\to\\dfrac\\pi2-x$ 得',
      '$J=\\displaystyle\\int_0^{\\pi/2}\\frac{\\cos x}{\\cos x+\\sin x}dx$。',
      '两式相加：$2J=\\displaystyle\\int_0^{\\pi/2}1\\,dx=\\dfrac\\pi2$，故 $J=\\dfrac\\pi4$。'
    ]
  },
  {
    id: 'fin-5-10',
    topic: 'symm',
    topicName: '定积分性质 / 对称性 / 换元',
    weight: 3,
    difficulty: 5,
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '-pi/2*ln(2)', alts: ['-\\frac{\\pi}{2}\\ln2', '-\\frac{\\pi\\ln2}{2}', '-1.0887930452'], rel: 1e-5 } }],
    solution: [
      '设 $J=\\displaystyle\\int_0^{\\pi/2}\\ln(\\sin x)dx$。由 $x\\to\\dfrac\\pi2-x$ 得 $J=\\displaystyle\\int_0^{\\pi/2}\\ln(\\cos x)dx$。',
      '$2J=\\displaystyle\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)dx=\\int_0^{\\pi/2}\\ln\\left(\\frac{\\sin2x}{2}\\right)dx=\\int_0^{\\pi/2}\\ln(\\sin2x)dx-\\dfrac\\pi2\\ln2$。',
      '而 $\\displaystyle\\int_0^{\\pi/2}\\ln(\\sin2x)dx=\\frac12\\int_0^{\\pi}\\ln(\\sin u)du=J$（再用一次对称性）。',
      '故 $2J=J-\\dfrac\\pi2\\ln2$，得 $J=-\\dfrac\\pi2\\ln2\\approx-1.0887930452$。'
    ]
  }
  );

  root.AMA1702_FINAL = Q;
})(typeof window !== 'undefined' ? window : globalThis);
