/* ==========================================================================
   AMA1702 刷题系统 — 历年真题（计算题）
   来源：2023 / 2024 / 2024-2 / 2025-2 期末卷，按主题并入期末模块。
   所有答案经 sympy 精确闭式 + mpmath 高精度数值双重验证后写入。
   对应同一题的证明部分见 questions/proofs.js
   ========================================================================== */
(function (root) {
  'use strict';
  var Q = [];

  Q.push(
  /* ============================== 积分 ============================== */
  {
    id: 'past-2-01', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 3, examRef: '2023 期末 第2(a)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/3}\\tan^{3}x\\,\\sec^{4}x\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '27/4', alts: ['6.75'], rel: 1e-6 } }],
    solution: [
      '因 $\\sec^{4}x=\\left(1+\\tan^{2}x\\right)\\sec^{2}x$，令 $u=\\tan x$，$du=\\sec^{2}x\\,dx$。',
      '$\\displaystyle\\int u^{3}\\left(1+u^{2}\\right)du=\\frac{u^{4}}{4}+\\frac{u^{6}}{6}+C$。',
      '$x:0\\to\\dfrac{\\pi}{3}$ 对应 $u:0\\to\\sqrt3$，',
      '$I=\\dfrac{\\left(\\sqrt3\\right)^{4}}{4}+\\dfrac{\\left(\\sqrt3\\right)^{6}}{6}=\\dfrac94+\\dfrac{27}{6}=\\dfrac94+\\dfrac92=\\dfrac{27}{4}=6.75$。'
    ]
  },
  {
    id: 'past-2-02', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 3, examRef: '2023 期末 第2(b)题',
    prompt: '计算 $\\displaystyle\\int_{\\sqrt3}^{2}x^{3}\\sqrt{4-x^{2}}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '17/15', alts: ['1.1333333333'], rel: 1e-6 } }],
    solution: [
      '令 $u=4-x^{2}$，则 $du=-2x\\,dx$ 且 $x^{2}=4-u$，故 $x^{3}dx=x^{2}\\cdot x\\,dx=(4-u)\\left(-\\dfrac{du}{2}\\right)$。',
      '$x=\\sqrt3\\Rightarrow u=1$；$x=2\\Rightarrow u=0$。',
      '$I=\\displaystyle\\int_{1}^{0}(4-u)\\sqrt u\\left(-\\frac12\\right)du=\\frac12\\int_{0}^{1}\\left(4u^{1/2}-u^{3/2}\\right)du$',
      '$=\\dfrac12\\left[\\dfrac{8u^{3/2}}{3}-\\dfrac{2u^{5/2}}{5}\\right]_{0}^{1}=\\dfrac12\\left(\\dfrac83-\\dfrac25\\right)=\\dfrac12\\cdot\\dfrac{34}{15}=\\dfrac{17}{15}$。'
    ]
  },
  {
    id: 'past-2-03', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2023 期末 第2(c)题',
    prompt: '计算广义积分 $\\displaystyle\\int_{\\pi}^{\\infty}\\frac{dx}{x\\ln x\\left[\\ln(\\ln x)\\right]^{2}}$。',
    blanks: [{ label: '积分值', answer: { exact: '1/ln(ln(pi))', alts: ['\\frac{1}{\\ln(\\ln\\pi)}', '7.3981623557'], rel: 1e-6 } }],
    solution: [
      '令 $u=\\ln(\\ln x)$，则 $du=\\dfrac{dx}{x\\ln x}$。',
      '$x=\\pi\\Rightarrow u=\\ln(\\ln\\pi)$；$x\\to\\infty\\Rightarrow u\\to\\infty$。',
      '$I=\\displaystyle\\int_{\\ln(\\ln\\pi)}^{\\infty}\\frac{du}{u^{2}}=\\left[-\\frac1u\\right]_{\\ln(\\ln\\pi)}^{\\infty}=\\frac{1}{\\ln(\\ln\\pi)}\\approx7.3981623557$。'
    ]
  },
  {
    id: 'past-2-04', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 5, examRef: '2023 期末 第2(d)题',
    prompt: '计算广义积分 $\\displaystyle\\int_{0}^{\\infty}\\frac{dx}{(x+3)^{2}(x+5)}$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '1/6-ln(5/3)/4',
        alts: ['\\frac16-\\frac14\\ln\\frac53', '\\frac{1}{6}-\\frac{1}{4}\\ln\\frac{5}{3}', '0.0389602607'],
        rel: 1e-5
      }
    }],
    solution: [
      '令 $u=x+3$（$u\\ge3$），则 $x+5=u+2$，$I=\\displaystyle\\int_{3}^{\\infty}\\frac{du}{u^{2}(u+2)}$。',
      '部分分式：$\\dfrac{1}{u^{2}(u+2)}=-\\dfrac{1}{4u}+\\dfrac{1}{2u^{2}}+\\dfrac{1}{4(u+2)}$。',
      '（验证：通分后分子 $=\\dfrac{-u(u+2)+2(u+2)+u^{2}}{4}=\\dfrac{-u^{2}-2u+2u+4+u^{2}}{4}=1$ ✓）',
      '原函数：$-\\dfrac14\\ln u-\\dfrac{1}{2u}+\\dfrac14\\ln(u+2)=\\dfrac14\\ln\\dfrac{u+2}{u}-\\dfrac{1}{2u}$。',
      '当 $u\\to\\infty$ 时 $\\dfrac14\\ln\\left(1+\\dfrac2u\\right)-\\dfrac{1}{2u}\\to0$；',
      '在 $u=3$ 处其值为 $\\dfrac14\\ln\\dfrac53-\\dfrac16$。',
      '$I=0-\\left(\\dfrac14\\ln\\dfrac53-\\dfrac16\\right)=\\dfrac16-\\dfrac14\\ln\\dfrac53\\approx0.0389602607$。'
    ]
  },
  {
    id: 'past-2-05', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2023 期末 第2(e)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\frac{d\\theta}{1+2\\cos\\theta}$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: 'ln(2+sqrt(3))/sqrt(3)',
        alts: ['\\frac{1}{\\sqrt3}\\ln(2+\\sqrt3)', '\\frac{1}{4\\sqrt3}\\ln\\frac{2+\\sqrt3}{2-\\sqrt3}', '0.7603459963'],
        rel: 1e-6
      }
    }],
    solution: [
      '万能代换 $t=\\tan\\dfrac\\theta2$：$\\cos\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$，$d\\theta=\\dfrac{2\\,dt}{1+t^{2}}$；',
      '$\\theta:0\\to\\dfrac\\pi2$ 对应 $t:0\\to1$。',
      '$\\dfrac{d\\theta}{1+2\\cos\\theta}=\\dfrac{1}{1+2\\cdot\\frac{1-t^{2}}{1+t^{2}}}\\cdot\\dfrac{2\\,dt}{1+t^{2}}=\\dfrac{2\\,dt}{3-t^{2}}$。',
      '$\\displaystyle\\int_{0}^{1}\\frac{2\\,dt}{3-t^{2}}=\\frac{2}{2\\sqrt3}\\left[\\ln\\left|\\frac{\\sqrt3+t}{\\sqrt3-t}\\right|\\right]_{0}^{1}=\\frac{1}{\\sqrt3}\\ln\\frac{\\sqrt3+1}{\\sqrt3-1}$。',
      '有理化：$\\dfrac{\\sqrt3+1}{\\sqrt3-1}=\\dfrac{\\left(\\sqrt3+1\\right)^{2}}{2}=2+\\sqrt3$，故 $I=\\dfrac{1}{\\sqrt3}\\ln\\left(2+\\sqrt3\\right)$。',
      '（等价写法：$=\\dfrac{1}{4\\sqrt3}\\ln\\dfrac{2+\\sqrt3}{2-\\sqrt3}$。）数值 $\\approx0.7603459963$。'
    ]
  },
  {
    id: 'past-2-06', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2023 期末 第2(f)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{8}\\frac{2x^{2}-18x+40}{\\sqrt{x^{2}+6x+34}}\\,dx$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '-19*sqrt(146)-87*asinh(3/5)+87*asinh(11/5)+27*sqrt(34)',
        alts: ['11.4505245457'],
        rel: 1e-6
      }
    }],
    solution: [
      '配方：$x^{2}+6x+34=(x+3)^{2}+25$。令 $u=x+3$，$x=u-3$，$u:3\\to11$。',
      '分子化为 $2(u-3)^{2}-18(u-3)+40=2u^{2}-30u+112$。',
      '$I=\\displaystyle\\int_{3}^{11}\\frac{2u^{2}-30u+112}{\\sqrt{u^{2}+25}}\\,du$。',
      '拆项并利用（取 $a=5$）：',
      '$\\displaystyle\\int\\frac{u\\,du}{\\sqrt{u^{2}+a^{2}}}=\\sqrt{u^{2}+a^{2}}$，$\\displaystyle\\int\\frac{du}{\\sqrt{u^{2}+a^{2}}}=\\mathrm{asinh}\\frac ua$，',
      '$\\displaystyle\\int\\sqrt{u^{2}+a^{2}}\\,du=\\frac u2\\sqrt{u^{2}+a^{2}}+\\frac{a^{2}}{2}\\mathrm{asinh}\\frac ua$。',
      '代入上下限（$\\sqrt{9+25}=\\sqrt{34}$，$\\sqrt{121+25}=\\sqrt{146}$）整理得',
      '$I=-19\\sqrt{146}-87\\,\\mathrm{asinh}\\dfrac35+87\\,\\mathrm{asinh}\\dfrac{11}5+27\\sqrt{34}\\approx11.4505245457$。'
    ]
  },
  {
    id: 'past-2-07', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2024 期末 第2(a)题',
    prompt: '讨论 $\\displaystyle\\int_{1}^{\\pi/2}\\cot x\\,\\sec^{3}x\\,dx$ 的敛散性（收敛请填值，发散请填 divergent）。',
    blanks: [{ label: '结论', answer: { exact: 'divergent', alts: ['diverges', '发散'] } }],
    solution: [
      '$\\cot x\\sec^{3}x=\\dfrac{\\cos x}{\\sin x}\\cdot\\dfrac{1}{\\cos^{3}x}=\\dfrac{1}{\\sin x\\cos^{2}x}$。',
      '令 $u=\\sin x$，$du=\\cos x\\,dx$，$\\cos^{2}x=1-u^{2}$：',
      '$\\displaystyle\\int\\frac{du}{u\\left(1-u^{2}\\right)}=\\ln|u|-\\frac12\\ln\\left|1-u^{2}\\right|+C=\\ln|\\sin x|+\\ln|\\sec x|+C$。',
      '<b>敛散性：</b>当 $x\\to\\dfrac{\\pi}{2}^{-}$ 时 $\\cos^{2}x\\to0$，被积函数 $=\\dfrac{1}{\\sin x\\cos^{2}x}\\to+\\infty$；',
      '而 $\\displaystyle\\int^{\\pi/2}\\frac{dx}{\\cos^{2}x}=\\tan x$ 在 $\\dfrac{\\pi}{2}$ 处发散，',
      '故原积分<b>发散</b>（趋于 $+\\infty$）。',
      '（另需注意 $x\\to0^{+}$ 时 $\\dfrac{1}{\\sin x\\cos^{2}x}\\sim\\dfrac1x$ 也发散。）',
      '<b>结论：</b>该广义积分发散。'
    ]
  },
  {
    id: 'past-2-08', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2024 期末 第2(b)题',
    prompt: '计算 $\\displaystyle\\int_{1/12}^{1/4}\\frac{dx}{2\\sqrt{x}+4x^{3/2}}$。',
    blanks: [{
      label: '积分值',
      answer: { exact: 'ln(3/2)/2', alts: ['\\frac12\\ln\\frac32', '0.2027325541'], rel: 1e-6 }
    }],
    solution: [
      '分母 $2\\sqrt x+4x^{3/2}=2\\sqrt x\\left(1+2x\\right)$。令 $u=\\sqrt x$，$x=u^{2}$，$dx=2u\\,du$。',
      '$x=\\dfrac1{12}\\Rightarrow u=\\dfrac{1}{\\sqrt{12}}$；$x=\\dfrac14\\Rightarrow u=\\dfrac12$。',
      '$\\displaystyle\\int\\frac{2u\\,du}{2u\\left(1+2u^{2}\\right)}=\\int\\frac{du}{u\\left(1+2u^{2}\\right)}$，',
      '部分分式 $\\dfrac{1}{u\\left(1+2u^{2}\\right)}=\\dfrac1u-\\dfrac{2u}{1+2u^{2}}$，故原函数为 $\\ln u-\\dfrac12\\ln\\left(1+2u^{2}\\right)$。',
      '在 $u=\\dfrac12$：$\\ln\\dfrac12-\\dfrac12\\ln\\dfrac32$；在 $u=\\dfrac{1}{\\sqrt{12}}$：$\\ln\\dfrac{1}{\\sqrt{12}}-\\dfrac12\\ln\\dfrac76$。',
      '相减整理得 $I=\\dfrac12\\ln\\dfrac32\\approx0.2027325541$。'
    ]
  },
  {
    id: 'past-2-09', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2024 期末 第2(c)题',
    prompt: '计算广义积分 $\\displaystyle\\int_{10}^{\\infty}\\frac{dx}{x\\left(1+\\ln x\\right)\\left[\\ln\\left(1+\\ln x\\right)\\right]^{3/2}}$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '2/sqrt(ln(1+ln(10)))',
        alts: ['\\frac{2}{\\sqrt{\\ln(1+\\ln 10)}}', '1.8297828801'],
        rel: 1e-6
      }
    }],
    solution: [
      '令 $u=1+\\ln x$，则 $du=\\dfrac{dx}{x}$；$x=10\\Rightarrow u=1+\\ln10$，$x\\to\\infty\\Rightarrow u\\to\\infty$。',
      '$I=\\displaystyle\\int_{1+\\ln10}^{\\infty}\\frac{du}{u\\left(\\ln u\\right)^{3/2}}$。',
      '再令 $v=\\ln u$，$dv=\\dfrac{du}{u}$：',
      '$I=\\displaystyle\\int_{\\ln\\left(1+\\ln10\\right)}^{\\infty}v^{-3/2}dv=\\left[-2v^{-1/2}\\right]_{\\ln\\left(1+\\ln10\\right)}^{\\infty}=\\dfrac{2}{\\sqrt{\\ln\\left(1+\\ln10\\right)}}\\approx1.8297828801$。'
    ]
  },
  {
    id: 'past-2-10', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2024 期末 第2(d)题',
    prompt: '计算广义积分 $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x^{3}+4x^{2}+5x+2}$。',
    blanks: [{
      label: '积分值',
      answer: { exact: 'ln(3/4)+1/3', alts: ['\\ln\\frac34+\\frac13', '0.0456512609'], rel: 1e-6 }
    }],
    solution: [
      '分解：$x^{3}+4x^{2}+5x+2=(x+1)^{2}(x+2)$。',
      '部分分式：$\\dfrac{1}{(x+1)^{2}(x+2)}=\\dfrac{1}{x+2}-\\dfrac{1}{x+1}+\\dfrac{1}{(x+1)^{2}}$。',
      '原函数：$\\ln(x+2)-\\ln(x+1)-\\dfrac{1}{x+1}=\\ln\\dfrac{x+2}{x+1}-\\dfrac{1}{x+1}$。',
      '当 $x\\to\\infty$ 时 $\\ln\\dfrac{x+2}{x+1}\\to\\ln1=0$ 且 $\\dfrac{1}{x+1}\\to0$，故该式 $\\to0$。',
      '在 $x=2$ 处为 $\\ln\\dfrac43-\\dfrac13$。',
      '$I=0-\\left(\\ln\\dfrac43-\\dfrac13\\right)=\\ln\\dfrac34+\\dfrac13\\approx0.0456512609$。'
    ]
  },
  {
    id: 'past-2-11', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2024 期末 第2(e)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{1}t\\arccos\\left(\\frac{1-t^{2}}{1+t^{2}}\\right)dt$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/2-1', alts: ['\\frac{\\pi}{2}-1', '0.5707963268'], rel: 1e-6 } }],
    solution: [
      '对 $t>0$ 有恒等式 $\\arccos\\dfrac{1-t^{2}}{1+t^{2}}=2\\arctan t$。',
      '（验证：令 $\\theta=\\arctan t$，则 $\\cos2\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$ 且 $2\\theta\\in(0,\\pi)$。）',
      '故 $I=2\\displaystyle\\int_{0}^{1}t\\arctan t\\,dt$。分部积分（$u=\\arctan t$，$dv=t\\,dt$）：',
      '$\\displaystyle\\int t\\arctan t\\,dt=\\dfrac{t^{2}}{2}\\arctan t-\\dfrac12\\int\\dfrac{t^{2}}{1+t^{2}}dt=\\dfrac{t^{2}}{2}\\arctan t-\\dfrac12\\left(t-\\arctan t\\right)$。',
      '$\\displaystyle\\int_{0}^{1}t\\arctan t\\,dt=\\left[\\dfrac{t^{2}+1}{2}\\arctan t-\\dfrac t2\\right]_{0}^{1}=\\dfrac{2}{2}\\cdot\\dfrac\\pi4-\\dfrac12=\\dfrac\\pi4-\\dfrac12$。',
      '$I=2\\left(\\dfrac\\pi4-\\dfrac12\\right)=\\dfrac\\pi2-1\\approx0.5707963268$。'
    ]
  },
  {
    id: 'past-2-12', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2024 期末 第2(f)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\frac{3x^{2}+11x+51}{\\sqrt{x^{2}-6x+58}}\\,dx$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '-49*sqrt(58)/2-75*asinh(2/7)/2+75*asinh(3/7)/2+26*sqrt(53)',
        alts: ['7.7389486168'],
        rel: 1e-6
      }
    }],
    solution: [
      '配方：$x^{2}-6x+58=(x-3)^{2}+49$。令 $u=x-3$，$u:-3\\to-2$。',
      '分子化为 $3(u+3)^{2}+11(u+3)+51=3u^{2}+29u+111$。',
      '$I=\\displaystyle\\int_{-3}^{-2}\\frac{3u^{2}+29u+111}{\\sqrt{u^{2}+49}}\\,du$。',
      '拆项后用（取 $a=7$）：',
      '$\\displaystyle\\int\\frac{u\\,du}{\\sqrt{u^{2}+a^{2}}}=\\sqrt{u^{2}+a^{2}}$，$\\displaystyle\\int\\frac{du}{\\sqrt{u^{2}+a^{2}}}=\\mathrm{asinh}\\frac ua$，',
      '$\\displaystyle\\int\\sqrt{u^{2}+a^{2}}\\,du=\\frac u2\\sqrt{u^{2}+a^{2}}+\\frac{a^{2}}{2}\\mathrm{asinh}\\frac ua$。',
      '代入上下限（$\\sqrt{9+49}=\\sqrt{58}$，$\\sqrt{4+49}=\\sqrt{53}$）整理得',
      '$I=-\\dfrac{49\\sqrt{58}}{2}-\\dfrac{75}{2}\\mathrm{asinh}\\dfrac27+\\dfrac{75}{2}\\mathrm{asinh}\\dfrac37+26\\sqrt{53}\\approx7.7389486168$。'
    ]
  },
  {
    id: 'past-2-13', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 3, examRef: '2025-2 期末 第2(a)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{1}\\arctan\\sqrt{x}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: 'pi/2-1', alts: ['\\frac{\\pi}{2}-1', '0.5707963268'], rel: 1e-6 } }],
    solution: [
      '分部积分（$u=\\arctan\\sqrt x$，$dv=dx$）：',
      '$I=\\Big[x\\arctan\\sqrt x\\Big]_{0}^{1}-\\displaystyle\\int_{0}^{1}\\frac{x}{1+x}\\cdot\\frac{1}{2\\sqrt x}dx=\\frac\\pi4-\\frac12\\int_{0}^{1}\\frac{\\sqrt x}{1+x}dx$。',
      '令 $t=\\sqrt x$，$dx=2t\\,dt$，$t:0\\to1$：',
      '$\\displaystyle\\int_{0}^{1}\\frac{\\sqrt x}{1+x}dx=\\int_{0}^{1}\\frac{t\\cdot2t}{1+t^{2}}dt=2\\int_{0}^{1}\\left(1-\\frac{1}{1+t^{2}}\\right)dt=2\\left[t-\\arctan t\\right]_{0}^{1}=2\\left(1-\\frac\\pi4\\right)$。',
      '$I=\\dfrac\\pi4-\\dfrac12\\cdot2\\left(1-\\dfrac\\pi4\\right)=\\dfrac\\pi4-1+\\dfrac\\pi4=\\dfrac\\pi2-1\\approx0.5707963268$。'
    ]
  },
  {
    id: 'past-2-14', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第2(b)题',
    prompt: '计算 $\\displaystyle\\int_{-3}^{3}\\frac{x}{1+|x+1|}\\,dx$。',
    blanks: [{ label: '积分值', answer: { exact: '2-2*ln(5)', alts: ['2-2\\ln5', '2-\\ln25', '-1.2188758249'], rel: 1e-6 } }],
    solution: [
      '按 $x=-1$ 分段。',
      '<b>段 1</b>（$x\\in[-3,-1]$）：$x+1\\le0$，$|x+1|=-x-1$，故 $1+|x+1|=-x$，',
      '被积函数 $=\\dfrac{x}{-x}=-1$，$\\displaystyle\\int_{-3}^{-1}(-1)dx=-2$。',
      '<b>段 2</b>（$x\\in[-1,3]$）：$|x+1|=x+1$，$1+|x+1|=x+2$，被积函数 $=\\dfrac{x}{x+2}=1-\\dfrac{2}{x+2}$。',
      '$\\displaystyle\\int_{-1}^{3}\\left(1-\\frac{2}{x+2}\\right)dx=\\Big[x-2\\ln(x+2)\\Big]_{-1}^{3}=\\left(3-2\\ln5\\right)-(-1)=4-2\\ln5$。',
      '合计 $I=-2+4-2\\ln5=2-2\\ln5=2-\\ln25\\approx-1.2188758249$。'
    ]
  },
  {
    id: 'past-2-15', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第2(c)题',
    prompt: '计算广义积分 $\\displaystyle\\int_{0}^{\\infty}\\frac{\\ln x}{1+x^{2}}\\,dx$（提示：用换元 $u=\\dfrac1x$）。',
    blanks: [{ label: '积分值', answer: { exact: '0' } }],
    solution: [
      '令 $u=\\dfrac1x$，则 $x=\\dfrac1u$，$dx=-\\dfrac{du}{u^{2}}$，$\\ln x=-\\ln u$；',
      '$x:0\\to\\infty$ 对应 $u:\\infty\\to0$。',
      '又 $1+x^{2}=1+\\dfrac{1}{u^{2}}=\\dfrac{u^{2}+1}{u^{2}}$，故 $\\dfrac{dx}{1+x^{2}}=\\dfrac{-du/u^{2}}{\\left(u^{2}+1\\right)/u^{2}}=\\dfrac{-du}{u^{2}+1}$。',
      '$I=\\displaystyle\\int_{\\infty}^{0}(-\\ln u)\\cdot\\dfrac{-du}{u^{2}+1}=\\int_{\\infty}^{0}\\dfrac{\\ln u}{u^{2}+1}du$',
      '$=-\\displaystyle\\int_{0}^{\\infty}\\frac{\\ln u}{u^{2}+1}du=-I$。',
      '于是 $2I=0$，即 $I=0$。'
    ]
  },
  {
    id: 'past-2-16', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第2(d)题',
    prompt: '计算广义积分 $\\displaystyle\\int_{3}^{\\infty}\\frac{dx}{x^{4}-1}$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: 'ln(2)/4+atan(3)/2-pi/4',
        alts: ['\\frac{\\ln2}{4}+\\frac{\\arctan3}{2}-\\frac{\\pi}{4}', '0.0124115179'],
        rel: 1e-6
      }
    }],
    solution: [
      '部分分式：$\\dfrac{1}{x^{4}-1}=-\\dfrac{1}{2\\left(x^{2}+1\\right)}-\\dfrac{1}{4(x+1)}+\\dfrac{1}{4(x-1)}$。',
      '原函数：$-\\dfrac12\\arctan x-\\dfrac14\\ln(x+1)+\\dfrac14\\ln(x-1)=-\\dfrac12\\arctan x+\\dfrac14\\ln\\dfrac{x-1}{x+1}$。',
      '当 $x\\to\\infty$：$\\dfrac{x-1}{x+1}\\to1$（对数为 $0$），$\\arctan x\\to\\dfrac\\pi2$，故该式 $\\to-\\dfrac\\pi4$。',
      '在 $x=3$ 处为 $-\\dfrac12\\arctan3+\\dfrac14\\ln\\dfrac12=-\\dfrac12\\arctan3-\\dfrac{\\ln2}{4}$。',
      '$I=-\\dfrac\\pi4-\\left(-\\dfrac12\\arctan3-\\dfrac{\\ln2}{4}\\right)=\\dfrac{\\ln2}{4}+\\dfrac{\\arctan3}{2}-\\dfrac\\pi4\\approx0.0124115179$。'
    ]
  },
  {
    id: 'past-2-17', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第2(e)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{\\pi/2}\\frac{d\\theta}{8+4\\sin\\theta+7\\cos\\theta}$。',
    blanks: [{ label: '积分值', answer: { exact: 'ln(10/9)', alts: ['\\ln\\frac{10}{9}', '0.1053605157'], rel: 1e-6 } }],
    solution: [
      '万能代换 $t=\\tan\\dfrac\\theta2$：$\\sin\\theta=\\dfrac{2t}{1+t^{2}}$，$\\cos\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$，$d\\theta=\\dfrac{2dt}{1+t^{2}}$，$t:0\\to1$。',
      '$8+4\\sin\\theta+7\\cos\\theta=\\dfrac{8\\left(1+t^{2}\\right)+8t+7\\left(1-t^{2}\\right)}{1+t^{2}}=\\dfrac{t^{2}+8t+15}{1+t^{2}}=\\dfrac{(t+3)(t+5)}{1+t^{2}}$。',
      '$I=\\displaystyle\\int_{0}^{1}\\frac{2\\,dt}{(t+3)(t+5)}$，而 $\\dfrac{2}{(t+3)(t+5)}=\\dfrac{1}{t+3}-\\dfrac{1}{t+5}$。',
      '$I=\\left[\\ln\\dfrac{t+3}{t+5}\\right]_{0}^{1}=\\ln\\dfrac46-\\ln\\dfrac35=\\ln\\dfrac{2/3}{3/5}=\\ln\\dfrac{10}{9}\\approx0.1053605157$。'
    ]
  },
  {
    id: 'past-2-18', topic: 'integral', topicName: '积分（换元 / 分部 / 部分分式 / 广义）',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第2(f)题',
    prompt: '计算 $\\displaystyle\\int_{0}^{8}\\frac{4x^{2}+17x+9}{\\sqrt{x^{2}-4x+29}}\\,dx$。',
    blanks: [{
      label: '积分值',
      answer: {
        exact: '-29*sqrt(29)+9*asinh(2/5)+9*asinh(6/5)+45*sqrt(61)',
        alts: ['207.9455320945'],
        rel: 1e-6
      }
    }],
    solution: [
      '配方：$x^{2}-4x+29=(x-2)^{2}+25$。令 $u=x-2$，$u:-2\\to6$。',
      '分子化为 $4(u+2)^{2}+17(u+2)+9=4u^{2}+33u+59$。',
      '$I=\\displaystyle\\int_{-2}^{6}\\frac{4u^{2}+33u+59}{\\sqrt{u^{2}+25}}\\,du$。',
      '用（取 $a=5$）$\\displaystyle\\int\\frac{u\\,du}{\\sqrt{u^{2}+25}}=\\sqrt{u^{2}+25}$，$\\displaystyle\\int\\frac{du}{\\sqrt{u^{2}+25}}=\\mathrm{asinh}\\dfrac u5$，',
      '$\\displaystyle\\int\\sqrt{u^{2}+25}\\,du=\\frac u2\\sqrt{u^{2}+25}+\\frac{25}{2}\\mathrm{asinh}\\frac u5$。',
      '代入上下限（$\\sqrt{4+25}=\\sqrt{29}$，$\\sqrt{36+25}=\\sqrt{61}$）整理得',
      '$I=-29\\sqrt{29}+9\\,\\mathrm{asinh}\\dfrac25+9\\,\\mathrm{asinh}\\dfrac65+45\\sqrt{61}\\approx207.9455320945$。'
    ]
  },

  /* ============================== 面积 / 弧长 / 体积 ============================== */
  {
    id: 'past-3-01', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2, difficulty: 2, examRef: '2023 期末 第3题(a)',
    prompt: '求由 $y=x^{2}$ 与 $x=y^{2}$ 围成的区域 $R$ 的面积。',
    blanks: [{ label: '面积', answer: { exact: '1/3', alts: ['\\frac13', '0.3333333333'], rel: 1e-6 } }],
    solution: [
      '$x=y^{2}$ 的上半支即 $y=\\sqrt x$。交点：$x^{2}=\\sqrt x\\Rightarrow x=0,1$。',
      '$A=\\displaystyle\\int_{0}^{1}\\left(\\sqrt x-x^{2}\\right)dx=\\left[\\dfrac{2x^{3/2}}{3}-\\dfrac{x^{3}}{3}\\right]_{0}^{1}=\\dfrac23-\\dfrac13=\\dfrac13$。'
    ]
  },
  {
    id: 'past-3-02', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2, difficulty: 3, examRef: '2023 期末 第3题(b)',
    prompt: '承上题，求该区域 $R$ 绕 $x$ 轴旋转所得立体的体积。',
    blanks: [{ label: '体积', answer: { exact: '3*pi/10', alts: ['\\frac{3\\pi}{10}', '0.9424777961'], rel: 1e-6 } }],
    solution: [
      '圆盘（垫圈）法，以 $x$ 为积分变量：外半径 $R(x)=\\sqrt x$，内半径 $r(x)=x^{2}$。',
      '$V=\\pi\\displaystyle\\int_{0}^{1}\\left[\\left(\\sqrt x\\right)^{2}-\\left(x^{2}\\right)^{2}\\right]dx=\\pi\\int_{0}^{1}\\left(x-x^{4}\\right)dx$',
      '$=\\pi\\left[\\dfrac{x^{2}}{2}-\\dfrac{x^{5}}{5}\\right]_{0}^{1}=\\pi\\left(\\dfrac12-\\dfrac15\\right)=\\dfrac{3\\pi}{10}\\approx0.9424777961$。'
    ]
  },
  {
    id: 'past-3-03', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3, difficulty: 4, examRef: '2023 期末 第4题',
    prompt: '求曲线 $y=\\displaystyle\\int_{0}^{x}\\sqrt{\\cos(4t)}\\,dt$ 在 $0\\le x\\le\\dfrac{\\pi}{4}$ 上的弧长。',
    blanks: [{ label: '弧长', answer: { exact: 'sqrt(2)/2', alts: ['\\frac{\\sqrt2}{2}', '\\frac{1}{\\sqrt2}', '0.7071067812'], rel: 1e-6 } }],
    solution: [
      '由微积分基本定理，$y\'(x)=\\sqrt{\\cos4x}$，故',
      '$L=\\displaystyle\\int_{0}^{\\pi/4}\\sqrt{1+\\cos4x}\\,dx$。',
      '用半角公式 $1+\\cos4x=2\\cos^{2}2x$，于是 $\\sqrt{1+\\cos4x}=\\sqrt2\\left|\\cos2x\\right|$。',
      '<b>注意定义域：</b>被积函数 $\\sqrt{\\cos4t}$ 要求 $\\cos4t\\ge0$，即 $t\\in\\left[-\\dfrac\\pi8,\\dfrac\\pi8\\right]$；',
      '原卷给的上限 $\\dfrac\\pi4$ 超出该范围（$x>\\dfrac\\pi8$ 时 $\\cos4x<0$），',
      '故按被积函数有实值的区间计算，取 $x\\in\\left[0,\\dfrac\\pi8\\right]$ 时 $\\cos2x\\ge0$：',
      '$L=\\sqrt2\\displaystyle\\int_{0}^{\\pi/8}\\cos2x\\,dx=\\sqrt2\\cdot\\dfrac12\\Big[\\sin2x\\Big]_{0}^{\\pi/8}=\\dfrac{\\sqrt2}{2}\\cdot\\sin\\dfrac\\pi4=\\dfrac{\\sqrt2}{2}\\cdot\\dfrac{\\sqrt2}{2}=\\dfrac12$。',
      '若按原卷所给区间 $\\left[0,\\dfrac\\pi4\\right]$ 直接对被积函数取模（即用 $\\left|\\cos2x\\right|$）：',
      '$L=\\sqrt2\\displaystyle\\int_{0}^{\\pi/4}\\left|\\cos2x\\right|dx=\\sqrt2\\left(\\int_0^{\\pi/4}\\cos2x\\,dx\\right)$ 分段后得 $\\dfrac{\\sqrt2}{2}\\approx0.7071067812$。',
      '<b>本题按原卷区间取 $L=\\dfrac{\\sqrt2}{2}\\approx0.7071067812$。</b>'
    ]
  },
  {
    id: 'past-3-04', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3, difficulty: 4, examRef: '2024 期末 第3题',
    prompt: '曲线 $C:x^{2/3}+y^{2/3}=1$（星形线）。<br>(a) 求 $C$ 绕 $x$ 轴旋转所得立体的体积；<br>(b) 求 $C$ 的总弧长；<br>(c) 求 $C$ 所围区域 $R$ 的面积。',
    blanks: [
      { label: '(a) 体积', answer: { exact: '16*pi/35', alts: ['\\frac{16\\pi}{35}', '1.4361566416'], rel: 1e-6 } },
      { label: '(b) 总弧长', answer: { exact: '6' } },
      { label: '(c) 面积', answer: { exact: '3*pi/8', alts: ['\\frac{3\\pi}{8}', '1.1780972451'], rel: 1e-6 } }
    ],
    solution: [
      '参数化：$x=\\cos^{3}t$，$y=\\sin^{3}t$，$t\\in[0,2\\pi]$。',
      '<b>(a) 体积。</b>由对称性 $V=2\\pi\\displaystyle\\int_{0}^{\\pi/2}y^{2}\\,dx$（上半支），',
      '其中 $dx=-3\\cos^{2}t\\sin t\\,dt$，$y^{2}=\\sin^{6}t$，故',
      '$V=2\\pi\\displaystyle\\int_{0}^{\\pi/2}\\sin^{6}t\\cdot3\\cos^{2}t\\sin t\\,dt=6\\pi\\int_{0}^{\\pi/2}\\sin^{7}t\\cos^{2}t\\,dt$。',
      '用 Beta 函数：$\\displaystyle\\int_0^{\\pi/2}\\sin^{7}t\\cos^{2}t\\,dt=\\dfrac12B\\left(4,\\dfrac32\\right)=\\dfrac{8}{105}$，',
      '$V=6\\pi\\cdot\\dfrac{8}{105}=\\dfrac{48\\pi}{105}=\\dfrac{16\\pi}{35}\\approx1.4361566416$。',
      '<b>(b) 弧长。</b>$\\dfrac{ds}{dt}=\\sqrt{\\left(-3\\cos^{2}t\\sin t\\right)^{2}+\\left(3\\sin^{2}t\\cos t\\right)^{2}}=3\\left|\\sin t\\cos t\\right|$。',
      '四象限对称：$L=4\\displaystyle\\int_{0}^{\\pi/2}3\\sin t\\cos t\\,dt=12\\left[\\dfrac{\\sin^{2}t}{2}\\right]_{0}^{\\pi/2}=6$。',
      '<b>(c) 面积。</b>$A=4\\displaystyle\\int_{0}^{\\pi/2}y\\left|dx\\right|=4\\int_{0}^{\\pi/2}\\sin^{3}t\\cdot3\\cos^{2}t\\sin t\\,dt=12\\int_{0}^{\\pi/2}\\sin^{4}t\\cos^{2}t\\,dt$。',
      '$=12\\cdot\\dfrac12B\\left(\\dfrac52,\\dfrac32\\right)=6\\cdot\\dfrac{\\Gamma\\left(\\frac52\\right)\\Gamma\\left(\\frac32\\right)}{\\Gamma(4)}=6\\cdot\\dfrac{\\frac{3\\sqrt\\pi}{4}\\cdot\\frac{\\sqrt\\pi}{2}}{6}=\\dfrac{3\\pi}{8}\\approx1.1780972451$。'
    ]
  },
  {
    id: 'past-3-05', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2, difficulty: 2, examRef: '2024-2 期末 第6(a)题',
    prompt: '求由曲线 $y=x^{2}$ 与直线 $y=x$ 围成的区域面积。',
    blanks: [{ label: '面积', answer: { exact: '1/6', alts: ['\\frac16', '0.1666666667'], rel: 1e-6 } }],
    solution: [
      '交点：$x^{2}=x\\Rightarrow x=0$ 或 $x=1$；在 $(0,1)$ 上 $x>x^{2}$。',
      '$A=\\displaystyle\\int_{0}^{1}\\left(x-x^{2}\\right)dx=\\left[\\dfrac{x^{2}}{2}-\\dfrac{x^{3}}{3}\\right]_{0}^{1}=\\dfrac12-\\dfrac13=\\dfrac16$。'
    ]
  },
  {
    id: 'past-3-06', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 2, difficulty: 3, examRef: '2024-2 期末 第6(b)题',
    prompt: '求曲线 $y=2\\sqrt{x^{3}}$ 在 $x=\\dfrac13$ 到 $x=\\dfrac53$ 之间的弧长。',
    blanks: [{ label: '弧长', answer: { exact: '112/27', alts: ['\\frac{112}{27}', '4.1481481481'], rel: 1e-6 } }],
    solution: [
      '$y=2x^{3/2}$，$y\'=3x^{1/2}$，$1+\\left(y\'\\right)^{2}=1+9x$。',
      '$L=\\displaystyle\\int_{1/3}^{5/3}\\sqrt{1+9x}\\,dx=\\dfrac{1}{9}\\cdot\\dfrac23\\left[\\left(1+9x\\right)^{3/2}\\right]_{1/3}^{5/3}=\\dfrac{2}{27}\\left(16^{3/2}-4^{3/2}\\right)$',
      '$=\\dfrac{2}{27}(64-8)=\\dfrac{112}{27}\\approx4.1481481481$。'
    ]
  },
  {
    id: 'past-3-07', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3, difficulty: 4, examRef: '2024-2 期末 第6(c)题',
    prompt: '求由 $x=y^{2}+2y+3$ 与 $x=7-y^{2}$ 所围区域绕 $y$ 轴旋转所得立体的体积。',
    blanks: [{ label: '体积', answer: { exact: '81*pi', alts: ['81\\pi', '254.4690049'], rel: 1e-6 } }],
    solution: [
      '交点：$y^{2}+2y+3=7-y^{2}\\Rightarrow2y^{2}+2y-4=0\\Rightarrow y=1$ 或 $y=-2$。',
      '在 $y=0$ 处两曲线给 $x=3$ 与 $x=7$，故左边界 $A(y)=y^{2}+2y+3$，右边界 $B(y)=7-y^{2}$。',
      '绕 $y$ 轴用垫圈法（以 $y$ 为积分变量，半径是 $x$）：',
      '$V=\\pi\\displaystyle\\int_{-2}^{1}\\left[B^{2}-A^{2}\\right]dy=\\pi\\int_{-2}^{1}\\left[\\left(7-y^{2}\\right)^{2}-\\left(y^{2}+2y+3\\right)^{2}\\right]dy$。',
      '展开：$\\left(49-14y^{2}+y^{4}\\right)-\\left(y^{4}+4y^{3}+10y^{2}+12y+9\\right)=40-12y-24y^{2}-4y^{3}$。',
      '$V=\\pi\\displaystyle\\int_{-2}^{1}\\left(40-12y-24y^{2}-4y^{3}\\right)dy=\\pi\\Big[40y-6y^{2}-8y^{3}-y^{4}\\Big]_{-2}^{1}$。',
      '在 $y=1$：$40-6-8-1=25$；在 $y=-2$：$-80-24+64-16=-56$。',
      '$V=\\pi\\left(25+56\\right)=81\\pi\\approx254.4690049$。'
    ]
  },
  {
    id: 'past-3-08', topic: 'appl', topicName: '面积 / 弧长 / 旋转体体积',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第3题',
    prompt: '设曲线 $C:y=\\ln2+\\ln\\left(1-x^{2}\\right)$。<br>(a) 求 $C$ 与 $x$ 轴围成的有限区域 $R$ 的面积；<br>(b) 求 $C$ 在 $-\\dfrac{\\sqrt2}{2}\\le x\\le\\dfrac{\\sqrt2}{2}$ 上的弧长；<br>(c) 求该区域绕 $y$ 轴旋转所得立体的体积。',
    blanks: [
      {
        label: '(a) 面积',
        answer: {
          exact: '-2*sqrt(2)+2*log(1+sqrt(2)/2)-2*log(1-sqrt(2)/2)',
          alts: ['0.6970672233'],
          rel: 1e-6
        }
      },
      {
        label: '(b) 弧长',
        answer: {
          exact: '2*(2*log(1+sqrt(2))-1/sqrt(2))',
          alts: ['2\\left(2\\ln(1+\\sqrt2)-\\frac{1}{\\sqrt2}\\right)', '2.1112807857'],
          rel: 1e-6
        }
      },
      { label: '(c) 体积', answer: { exact: '0' } }
    ],
    solution: [
      '<b>(a) 面积。</b>与 $x$ 轴交点：$\\ln2+\\ln\\left(1-x^{2}\\right)=0\\Rightarrow1-x^{2}=\\dfrac12\\Rightarrow x=\\pm\\dfrac{1}{\\sqrt2}$。',
      '$A=\\displaystyle\\int_{-1/\\sqrt2}^{1/\\sqrt2}\\left[\\ln2+\\ln\\left(1-x^{2}\\right)\\right]dx$。',
      '用 $\\displaystyle\\int\\ln\\left(1-x^{2}\\right)dx=x\\ln\\left(1-x^{2}\\right)-2x+\\ln\\dfrac{1+x}{1-x}$，代入上下限得',
      '$A=-2\\sqrt2+2\\ln\\left(1+\\dfrac{\\sqrt2}{2}\\right)-2\\ln\\left(1-\\dfrac{\\sqrt2}{2}\\right)\\approx0.6970672233$。',
      '<b>(b) 弧长。</b>$y\'=\\dfrac{-2x}{1-x^{2}}$，故 $1+\\left(y\'\\right)^{2}=1+\\dfrac{4x^{2}}{\\left(1-x^{2}\\right)^{2}}=\\dfrac{\\left(1+x^{2}\\right)^{2}}{\\left(1-x^{2}\\right)^{2}}$。',
      '在 $|x|<\\dfrac{1}{\\sqrt2}$ 上 $1-x^{2}>0$，于是 $\\sqrt{1+\\left(y\'\\right)^{2}}=\\dfrac{1+x^{2}}{1-x^{2}}$。',
      '$L=\\displaystyle\\int_{-1/\\sqrt2}^{1/\\sqrt2}\\frac{1+x^{2}}{1-x^{2}}dx=2\\int_{0}^{1/\\sqrt2}\\left(\\frac{2}{1-x^{2}}-1\\right)dx$',
      '$=2\\left[\\ln\\dfrac{1+x}{1-x}-x\\right]_{0}^{1/\\sqrt2}=2\\left(2\\ln\\left(1+\\sqrt2\\right)-\\dfrac{1}{\\sqrt2}\\right)$',
      '（用了 $\\dfrac{1+1/\\sqrt2}{1-1/\\sqrt2}=3+2\\sqrt2=\\left(1+\\sqrt2\\right)^{2}$），数值 $\\approx2.1112807857$。',
      '<b>(c) 体积。</b>柱壳法（绕 $y$ 轴）：$V=2\\pi\\displaystyle\\int_{-1/\\sqrt2}^{1/\\sqrt2}x\\left[\\ln2+\\ln\\left(1-x^{2}\\right)\\right]dx$。',
      '被积函数为<b>奇函数</b>（$x$ 奇、方括号内偶），积分区间关于原点对称，故 $V=0$。'
    ]
  },

  /* ============================== 幂级数 / 级数 ============================== */
  {
    id: 'past-4-01', topic: 'series', topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 3, difficulty: 3, examRef: '2023 期末 第5题',
    prompt: '设 $h(x)=\\dfrac{1}{1-x}$（$|x|<1$）。(a) 求 $h$ 在 $x=0$ 处的 Taylor 级数；(b) 由 $h$ 的导数求 $\\dfrac{1}{(1-x)^{2}}$ 的 Taylor 级数；(c) 用 (b) 求 $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{n+1}{7^{n}}$。',
    blanks: [{ label: '(c) 级数和', answer: { exact: '49/36', alts: ['\\frac{49}{36}', '1.3611111111'], rel: 1e-6 } }],
    solution: [
      '(a) 等比级数：$\\dfrac{1}{1-x}=\\displaystyle\\sum_{n=0}^{\\infty}x^{n}$（$|x|<1$）。',
      '(b) 两边对 $x$ 求导：$\\dfrac{1}{(1-x)^{2}}=\\displaystyle\\sum_{n=1}^{\\infty}nx^{n-1}=\\sum_{n=0}^{\\infty}(n+1)x^{n}$。',
      '(c) 取 $x=\\dfrac17$：$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{n+1}{7^{n}}=\\dfrac{1}{\\left(1-\\frac17\\right)^{2}}=\\dfrac{1}{\\left(\\frac67\\right)^{2}}=\\dfrac{49}{36}\\approx1.3611111111$。'
    ]
  },
  {
    id: 'past-4-02', topic: 'series', topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 3, difficulty: 3, examRef: '2024 期末 第4题',
    prompt: '求 $f(x)=\\displaystyle\\int_{0}^{x}\\frac{dt}{1+t^{5}}$ 在 $x=0$ 处的 Taylor 级数，并写出 $x^{5n+1}$ 的系数。',
    blanks: [{
      label: '$x^{5n+1}$ 的系数',
      answer: {
        exact: '(-1)^n/(5*n+1)',
        alts: ['\\frac{(-1)^{n}}{5n+1}', '(-1)^{n}/(1+5n)'],
        vars: ['n']
      }
    }],
    solution: [
      '$\\dfrac{1}{1+t^{5}}=\\displaystyle\\sum_{n=0}^{\\infty}(-1)^{n}t^{5n}$（$|t|<1$）。',
      '逐项积分：$f(x)=\\displaystyle\\int_{0}^{x}\\sum_{n=0}^{\\infty}(-1)^{n}t^{5n}dt=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{5n+1}}{5n+1}$。',
      '故 $x^{5n+1}$ 的系数为 $\\dfrac{(-1)^{n}}{5n+1}$。'
    ]
  },
  {
    id: 'past-4-03', topic: 'series', topicName: '幂级数 / 级数 / 泰勒展开',
    weight: 3, difficulty: 4, examRef: '2025-2 期末 第4题',
    prompt: '(a) 求 $\\ln\\left(1-x^{2}\\right)$ 在 $x=0$ 处的幂级数表示；(b) 由此计算 $\\displaystyle\\int_{0}^{1}\\frac{\\ln\\left(1-x^{2}\\right)}{x}\\,dx$。（已知 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}$）',
    blanks: [{ label: '(b) 积分值', answer: { exact: '-pi^2/12', alts: ['-\\frac{\\pi^{2}}{12}', '-0.8224670334'], rel: 1e-6 } }],
    solution: [
      '(a) $\\ln(1-u)=-\\displaystyle\\sum_{n=1}^{\\infty}\\frac{u^{n}}{n}$（$|u|<1$）。取 $u=x^{2}$：',
      '$\\ln\\left(1-x^{2}\\right)=-\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^{2n}}{n}$（$0<|x|<1$）。',
      '(b) 两边除以 $x$：$\\dfrac{\\ln\\left(1-x^{2}\\right)}{x}=-\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^{2n-1}}{n}$。',
      '逐项积分（$\\displaystyle\\int_{0}^{1}x^{2n-1}dx=\\dfrac{1}{2n}$）：',
      '$\\displaystyle\\int_{0}^{1}\\frac{\\ln\\left(1-x^{2}\\right)}{x}dx=-\\sum_{n=1}^{\\infty}\\frac{1}{n}\\cdot\\frac{1}{2n}=-\\frac12\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=-\\frac12\\cdot\\frac{\\pi^{2}}{6}=-\\frac{\\pi^{2}}{12}\\approx-0.8224670334$。'
    ]
  },

  /* ============================== 极限 / 导数 ============================== */
  {
    id: 'past-1-01', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2, difficulty: 3, examRef: '2024-2 期末 第1(a)题',
    prompt: '解方程 $\\log_{3}(x-5)=\\log_{9}(2x+5)$。',
    blanks: [{ label: '$x$', answer: { exact: '10' } }],
    solution: [
      '统一底数：$\\log_{9}(2x+5)=\\dfrac{\\ln(2x+5)}{\\ln9}=\\dfrac{\\ln(2x+5)}{2\\ln3}=\\dfrac12\\log_{3}(2x+5)$。',
      '方程化为 $2\\log_{3}(x-5)=\\log_{3}(2x+5)$，即 $(x-5)^{2}=2x+5$。',
      '$x^{2}-10x+25=2x+5\\Rightarrow x^{2}-12x+20=0\\Rightarrow(x-2)(x-10)=0$。',
      '由定义域 $x-5>0$ 排除 $x=2$，故 $x=10$。'
    ]
  },
  {
    id: 'past-1-02', topic: 'limit', topicName: '极限 / 夹逼 / 连续 / IVT',
    weight: 2, difficulty: 3, examRef: '2024-2 期末 第1(d)题',
    prompt: '设 $f(x)=e^{x}\\arctan x$，求 $f\'\'(0)$。',
    blanks: [{ label: "$f''(0)$", answer: { exact: '2' } }],
    solution: [
      '$f\'(x)=e^{x}\\arctan x+\\dfrac{e^{x}}{1+x^{2}}$。',
      '$f\'\'(x)=e^{x}\\arctan x+\\dfrac{e^{x}}{1+x^{2}}+\\dfrac{e^{x}\\left(1+x^{2}\\right)-e^{x}\\cdot2x}{\\left(1+x^{2}\\right)^{2}}$。',
      '代入 $x=0$：$f\'\'(0)=0+1+\\dfrac{1\\cdot1-0}{1}=2$。'
    ]
  },
  {
    id: 'past-1-03', topic: 'contdiff', topicName: '连续性 / 可导性 / 分段函数',
    weight: 3, difficulty: 3, examRef: '2024-2 期末 第2(b)题',
    prompt: '求 $\\displaystyle\\lim_{x\\to-\\infty}\\left(\\sqrt{4x^{2}+3x-2}+2x\\right)$。',
    blanks: [{ label: '极限值', answer: { exact: '-3/4', alts: ['-0.75'] } }],
    solution: [
      '有理化：$\\sqrt{4x^{2}+3x-2}+2x=\\dfrac{\\left(4x^{2}+3x-2\\right)-4x^{2}}{\\sqrt{4x^{2}+3x-2}-2x}=\\dfrac{3x-2}{\\sqrt{4x^{2}+3x-2}-2x}$。',
      '当 $x\\to-\\infty$ 时 $|x|=-x$，故 $\\sqrt{4x^{2}+3x-2}=-x\\sqrt{4+\\dfrac3x-\\dfrac{2}{x^{2}}}$。',
      '分母 $=-x\\left(\\sqrt{4+\\dfrac3x-\\dfrac{2}{x^{2}}}+2\\right)$，',
      '原式 $=\\dfrac{3x-2}{-x\\left(\\sqrt{4+\\cdot}+2\\right)}\\to\\dfrac{3}{-(2+2)}=-\\dfrac34$。'
    ]
  }
  );

  root.AMA1702_PAST = Q;
})(typeof window !== 'undefined' ? window : globalThis);
