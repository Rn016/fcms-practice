/* ==========================================================================
   AMA1702 Calculus 讲义精读
   依据 Lecture 1–11 与 Tutorial 讲义整理；中文讲解为主，英文标注专有名词。
   qids 指向题库中可立即练习的题目。
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('notes/ama1702.js: 必须先加载 js/registry.js');
  var T = [];

  /* ---------- T1 极限与连续 ---------- */
  T.push({
    no: 'T1', title: '极限与连续', titleEn: 'Limits and Continuity',
    tags: ['limit', 'squeeze theorem', 'continuity', 'IVT'],
    qids: ['mid-3-01', 'mid-3-02', 'mid-3-06', 'mp-3-09', 'mp-3-04'],
    blocks: [
      { t: 'p', md: '[[limit|极限]] 是整门微积分的地基：**导数**是差商的极限，**积分**是黎曼和的极限。本讲把求极限的手段系统化。' },
      { t: 'h', md: '一、极限存在的条件' },
      { t: 'p', md: '左右极限都存在且相等，极限才存在：$\\displaystyle\\lim_{x\\to a}f(x)=L \\iff \\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L$。' },
      { t: 'note', md: '**考试高频**：题目给出 $\\sqrt{(x-a)^2}=|x-a|$ 这类式子时，**必须分左右极限**讨论 —— 因为 $|x-a|$ 在 $a$ 两侧符号不同。' },
      { t: 'h', md: '二、求极限的四类手段' },
      { t: 'tbl', head: ['手段（英文）', '何时使用', '关键动作'],
        rows: [
          ['直接代入', '函数在点连续', '代入即可'],
          ['<b>因式分解约分</b><br>factor and cancel', '$\\frac00$ 型且能分解', '约掉公共因子 $(x-a)$'],
          ['<b>有理化</b><br>rationalise', '含根号的 $\\frac00$ 或 $\\infty-\\infty$', '分子分母同乘共轭式'],
          ['<b>L\'Hôpital 法则</b>', '$\\frac00$ 或 $\\frac\\infty\\infty$', '分子分母分别求导后再求极限'],
          ['<b>夹逼定理</b><br>Squeeze Theorem', '含 $\\sin\\frac1x$、$\\cos$ 的振荡项', '用 $\\pm1$ 界夹住']
        ]},
      { t: 'h', md: '三、两个必须背下来的极限' },
      { t: 'p', md: '$\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}=1$，$\\displaystyle\\lim_{x\\to0}(1+x)^{1/x}=e$，以及 $\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac{a}{x}\\right)^{x}=e^{a}$。' },
      { t: 'h', md: '四、L\'Hôpital 法则的陷阱' },
      { t: 'ul', items: [
        '**只能用于 $\\frac00$ 或 $\\frac\\infty\\infty$** —— 其他形式必须先化成这两种（如 $0\\cdot\\infty$ 化成分式）。',
        '**不能用两次以上而不检查**：每次用完都要重新确认仍是未定式。',
        '**分子分母要分别求导**，不是用商法则 —— 这是最常见的错误。',
        '若求导后极限不存在但原极限存在（如含振荡项），L\'Hôpital 会给出错误结论，应改用夹逼。'
      ]},
      { t: 'h', md: '五、$1^{\\infty}$ 型的标准解法' },
      { t: 'p', md: '遇到 $\\left(1+\\frac{a}{x}\\right)^{x}$ 或 $\\left(\\frac{e^x-1}{x}\\right)^{1/x}$ 这类，**取对数**化为 $\\frac00$：' },
      { t: 'p', md: '设 $L$ 为所求，则 $\\ln L=\\lim \\dfrac{\\ln(\\text{底})}{1/\\text{指数}}$，再用 L\'Hôpital。' },
      { t: 'h', md: '六、夹逼定理的标准套路' },
      { t: 'p', md: '遇到 $\\sin(\\text{爆} )$、$\\cos(\\text{爆})$ 时：' },
      { t: 'ol', items: [
        '用 $-1\\le\\sin(\\cdot)\\le1$ 写出上下界；',
        '若底数 $>1$、指数 $\\to-\\infty$，则两端都 $\\to0$；',
        '若指数 $\\to\\infty$、底数 $\\to0$，则两端都 $\\to0$；',
        '两端极限相同 ⇒ 中间也趋于该值。'
      ]},
      { t: 'h', md: '七、连续与介值定理' },
      { t: 'p', md: '**连续**（continuous）的三条件：$f(a)$ 有定义、$\\lim_{x\\to a}f(x)$ 存在、二者相等。' },
      { t: 'note', md: '**介值定理（IVT）**：若 $f$ 在 $[a,b]$ 连续且 $N$ 介于 $f(a)$ 与 $f(b)$ 之间，则存在 $c\\in(a,b)$ 使 $f(c)=N$。它是**证明方程有根**的标准工具 —— 只需验证两点函数值异号。' }
    ],
    terms: [
      ['limit', '极限'], ['one-sided limit', '单侧极限'],
      ['indeterminate form', '未定式'], ['L\'Hôpital\'s rule', '洛必达法则'],
      ['Squeeze Theorem', '夹逼定理'], ['rationalise', '有理化'],
      ['continuity', '连续性'], ['removable discontinuity', '可去间断点'],
      ['Intermediate Value Theorem (IVT)', '介值定理'],
      ['Extreme Value Theorem', '最值定理'], ['oscillation', '振荡']
    ]
  });

  /* ---------- T2 导数与求导技巧 ---------- */
  T.push({
    no: 'T2', title: '导数与求导技巧', titleEn: 'Differentiation Techniques',
    tags: ['derivative', 'chain rule', 'implicit', 'higher-order'],
    qids: ['mid-4-01', 'mid-4-05', 'mp-4-01', 'mp-4-03', 'fin-1-04'],
    blocks: [
      { t: 'p', md: '[[derivative|导数]] 衡量「变化率」。本讲把求导从定义推进到成套技巧。' },
      { t: 'h', md: '一、定义与可导性' },
      { t: 'p', md: '$f\'(a)=\\displaystyle\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$。**可导 ⇒ 连续**，反之不成立（如 $|x|$ 在 0 处连续但不可导）。' },
      { t: 'h', md: '二、核心法则' },
      { t: 'tbl', head: ['法则（英文）', '公式'],
        rows: [
          ['乘积法则 product rule', '$(uv)\'=u\'v+uv\'$'],
          ['商法则 quotient rule', '$\\left(\\dfrac uv\\right)\'=\\dfrac{u\'v-uv\'}{v^{2}}$'],
          ['<b>链式法则 chain rule</b>', '$\\dfrac{d}{dx}f(g(x))=f\'(g(x))\\,g\'(x)$'],
          ['反函数求导', '$(f^{-1})\'(y)=\\dfrac{1}{f\'(x)}$，其中 $y=f(x)$']
        ]},
      { t: 'note', md: '**链式法则是最高频的考点**。识别「外层函数」与「内层函数」是关键：$\\sin(x^{2})$ 的外层是 $\\sin$、内层是 $x^{2}$，故导数为 $\\cos(x^{2})\\cdot2x$。' },
      { t: 'h', md: '三、隐函数求导' },
      { t: 'ol', items: [
        '把 $y$ 视为 $x$ 的函数，方程两边**同时对 $x$ 求导**；',
        '遇到 $y$ 的项要用**链式法则**（$\\frac{d}{dx}y^{2}=2y\\,y\'$）；',
        '把含 $y\'$ 的项移到一边，解出 $y\'$。'
      ]},
      { t: 'h', md: '四、高阶导数与递推（期中重点）' },
      { t: 'p', md: '当 $f(x)=\\frac{1}{\\sqrt{9-x^{2}}}$ 这类无法直接求六阶导的函数，考试用**递推关系**（recurrence relation）：' },
      { t: 'p', md: '先建立低阶关系如 $(9-x^{2})f\'(x)=xf(x)$，再对两边求 $n$ 阶导（用 **Leibniz 法则**），得到 $f^{(n+1)}$ 与 $f^{(n)},f^{(n-1)}$ 的递推式。' },
      { t: 'note', md: '**关键技巧**：代入 $x=0$ 后递推式往往大幅简化；再利用**奇偶性**（偶函数的奇阶导数在 0 处为 0）可跳过一半计算。' },
      { t: 'h', md: '五、Leibniz 法则' },
      { t: 'p', md: '$(uv)^{(n)}=\\displaystyle\\sum_{k=0}^{n}\\binom{n}{k}u^{(k)}v^{(n-k)}$。当其中一个是多项式（$k$ 次以上导数为 0）时，求和只剩有限几项 —— 这正是考试的设计意图。' }
    ],
    terms: [
      ['derivative', '导数'], ['differentiable', '可导的'],
      ['product rule', '乘积法则'], ['quotient rule', '商法则'],
      ['chain rule', '链式法则'], ['implicit differentiation', '隐函数求导'],
      ['higher-order derivative', '高阶导数'], ['recurrence relation', '递推关系'],
      ['Leibniz rule', '莱布尼茨法则'], ['even / odd function', '偶函数 / 奇函数'],
      ['critical point', '临界点（驻点）']
    ]
  });

  /* ---------- T3 中值定理与应用 ---------- */
  T.push({
    no: 'T3', title: '中值定理与函数性态', titleEn: 'Mean Value Theorem and Curve Analysis',
    tags: ['MVT', 'Rolle', 'monotonicity', 'extremum', 'concavity'],
    qids: ['mid-5-01', 'mid-5-02', 'mid-5-03', 'pf-mvt-01', 'pf-mvt-02'],
    blocks: [
      { t: 'p', md: '中值定理把「函数在区间上的整体行为」与「某点的局部导数」联系起来，是用导数证明不等式与方程根的唯一性的核心工具。' },
      { t: 'h', md: '一、三个定理的关系' },
      { t: 'tbl', head: ['定理（英文）', '条件', '结论'],
        rows: [
          ['<b>Rolle 定理</b>', '$f$ 在 $[a,b]$ 连续、$(a,b)$ 可导、$f(a)=f(b)$', '存在 $c$ 使 $f\'(c)=0$'],
          ['<b>MVT 中值定理</b>', '$f$ 在 $[a,b]$ 连续、$(a,b)$ 可导', '$f\'(c)=\\dfrac{f(b)-f(a)}{b-a}$'],
          ['<b>最值定理 EVT</b>', '$f$ 在闭区间 $[a,b]$ 连续', '$f$ 必取到最大值与最小值']
        ]},
      { t: 'note', md: '**Rolle 是 MVT 的特例**（当 $f(a)=f(b)$ 时，MVT 的右边为 0）。证明 MVT 的标准做法是构造辅助函数 $g(x)=f(x)-\\dfrac{f(b)-f(a)}{b-a}(x-a)$，使 $g(a)=g(b)$，再用 Rolle。' },
      { t: 'h', md: '二、导数的符号决定函数性态' },
      { t: 'tbl', head: ['$f\'$ 的符号', '$f$ 的性态', '$f\'\'$ 的符号', '凹凸性'],
        rows: [
          ['$f\'>0$', '单调递增 increasing', '$f\'\'>0$', '凹向上 concave up'],
          ['$f\'<0$', '单调递减 decreasing', '$f\'\'<0$', '凹向下 concave down'],
          ['$f\'=0$ 且变号', '极值点 extremum', '$f\'\'=0$ 且变号', '拐点 inflection point']
        ]},
      { t: 'h', md: '三、极值判定：两个充分条件' },
      { t: 'ul', items: [
        '**一阶导数判别法**：$f\'$ 在 $c$ 左右由正变负 ⇒ 极大值；由负变正 ⇒ 极小值。',
        '**二阶导数判别法**：$f\'(c)=0$ 且 $f\'\'(c)<0$ ⇒ 极大值；$f\'\'(c)>0$ ⇒ 极小值；$f\'\'(c)=0$ 时**失效**，需回到一阶判别。'
      ]},
      { t: 'warn', md: '**$f\'\'(c)=0$ 不等于拐点**。必须验证 $f\'\'$ 在 $c$ 两侧**变号**。反例：$y=x^{4}$ 在 0 处 $f\'\'=0$ 但两侧都为正，不是拐点。' },
      { t: 'h', md: '四、用中值定理证明不等式（考试重点）' },
      { t: 'p', md: '**标准套路**：' },
      { t: 'ol', items: [
        '把待证不等式整理成 $\\dfrac{f(b)-f(a)}{b-a}$ 或 $f(b)-f(a)$ 的形式；',
        '对 $f$ 在 $[a,b]$ 上用 MVT，得到 $f(b)-f(a)=f\'(c)(b-a)$；',
        '估计 $f\'(c)$ 的**取值范围**（由 $c\\in(a,b)$ 及 $f\'$ 的单调性）；',
        '代入即得不等式。'
      ]},
      { t: 'note', md: '常见变体：证明「方程只有一个实根」—— 先由 IVT 证**存在**，再用 Rolle 反证**唯一**（若有两个根，则中间必有 $f\'=0$，与 $f\'$ 恒不为 0 矛盾）。' }
    ],
    terms: [
      ['Mean Value Theorem (MVT)', '中值定理'],
      ['Rolle\'s Theorem', '罗尔定理'],
      ['Extreme Value Theorem (EVT)', '最值定理'],
      ['monotonic increasing / decreasing', '单调递增 / 递减'],
      ['local maximum / minimum', '局部极大值 / 极小值'],
      ['concave up / down', '凹向上 / 向下'],
      ['inflection point', '拐点'], ['asymptote', '渐近线'],
      ['uniqueness of root', '根的唯一性']
    ]
  });

  /* ---------- T4 积分技巧 ---------- */
  T.push({
    no: 'T4', title: '积分技巧', titleEn: 'Integration Techniques',
    tags: ['integration', 'substitution', 'by parts', 'partial fractions', 'improper'],
    qids: ['fin-2-01', 'fin-2-02', 'fin-2-03', 'past-2-01', 'past-2-04'],
    blocks: [
      { t: 'p', md: '求导有「成套规则」，求积分则更像**识别模式并选对方法**。本讲给出选择顺序。' },
      { t: 'h', md: '一、方法选择顺序（重要）' },
      { t: 'ol', items: [
        '**能直接套基本公式** → 直接积（$\\int x^{n}dx$、$\\int e^{x}dx$、$\\int\\frac{dx}{x}$ 等）。',
        '**是复合函数的导数形式** → 用**换元**（substitution）。',
        '**是两类函数之积**（如 $x e^{x}$、$\\ln x$）→ 用**分部积分**（integration by parts）。',
        '**是有理函数** → 用**部分分式**（partial fractions）拆分后逐项积。',
        '**含 $\\sqrt{a^{2}-x^{2}}$、$\\sqrt{x^{2}+a^{2}}$** → **三角换元**。'
      ]},
      { t: 'h', md: '二、换元法' },
      { t: 'p', md: '设 $u=g(x)$，则 $du=g\'(x)dx$。关键是**把整个被积表达式化为只含 $u$ 的形式**，包括 $dx$。' },
      { t: 'warn', md: '**定积分换元必须同时换上下限**。忘了换限是最高频的失分点。若嫌麻烦，可先求不定积分再用原变量代入。' },
      { t: 'h', md: '三、分部积分：$\\int u\\,dv=uv-\\int v\\,du$' },
      { t: 'p', md: '选择 $u$ 的优先级（**LIATE 口诀**）：' },
      { t: 'p', md: '**L**ogarithmic > **I**nverse trig > **A**lgebraic（多项式）> **T**rigonometric > **E**xponential。排在前的选作 $u$。' },
      { t: 'ul', items: [
        '例：$\\int x e^{x}dx$ —— 代数 $x$ 在 $e^{x}$ 前，故取 $u=x$、$dv=e^{x}dx$。',
        '例：$\\int \\ln x\\,dx$ —— 取 $u=\\ln x$、$dv=dx$。',
        '**循环出现的型**：$\\int e^{x}\\sin x\\,dx$ 用两次分部后回到原式，移项即可解出。'
      ]},
      { t: 'h', md: '四、部分分式' },
      { t: 'p', md: '把 $\\dfrac{P(x)}{Q(x)}$ 拆成简单分式之和。分母因式类型决定拆法：' },
      { t: 'tbl', head: ['分母因式', '拆成'],
        rows: [
          ['$(x-a)$', '$\\dfrac{A}{x-a}$'],
          ['$(x-a)^{k}$', '$\\dfrac{A_1}{x-a}+\\cdots+\\dfrac{A_k}{(x-a)^{k}}$'],
          ['不可分解二次式 $x^{2}+bx+c$', '$\\dfrac{Ax+B}{x^{2}+bx+c}$']
        ]},
      { t: 'warn', md: '**必须先检查是否为假分式**：若分子次数 ≥ 分母次数，要先用**长除法**分出多项式部分。' },
      { t: 'h', md: '五、广义积分' },
      { t: 'p', md: '**广义积分**（improper integral）有两大类：' },
      { t: 'ol', items: [
        '**无穷区间**：$\\int_{a}^{\\infty}f\\,dx=\\lim_{b\\to\\infty}\\int_{a}^{b}f\\,dx$',
        '**无界函数**：被积函数在区间内部或端点发散，如 $\\int_{0}^{1}\\frac{dx}{\\sqrt x}$'
      ]},
      { t: 'p', md: '**收敛判据（p-积分）**：$\\displaystyle\\int_{1}^{\\infty}\\frac{dx}{x^{p}}$ 当 $p>1$ 收敛、$p\\le1$ 发散；$\\displaystyle\\int_{0}^{1}\\frac{dx}{x^{p}}$ 当 $p<1$ 收敛、$p\\ge1$ 发散。' },
      { t: 'note', md: '**考试常见陷阱**：区间内部有奇点时必须**拆成两段**分别判断，例如 $\\int_{-1}^{1}\\frac{dx}{x}$ 不能因「奇函数积分为 0」而错判为收敛 —— 它在 0 处发散，正确结论是**发散**。' }
    ],
    terms: [
      ['integration', '积分'], ['substitution', '换元'],
      ['integration by parts', '分部积分'], ['partial fractions', '部分分式'],
      ['improper integral', '广义积分'], ['convergent / divergent', '收敛 / 发散'],
      ['trigonometric substitution', '三角换元'],
      ['rational function', '有理函数'], ['long division', '长除法'],
      ['LIATE', '分部积分的选择口诀']
    ]
  });

  /* ---------- T5 定积分应用 ---------- */
  T.push({
    no: 'T5', title: '积分的几何应用', titleEn: 'Applications of Integration',
    tags: ['area', 'volume', 'arc length', 'revolution'],
    qids: ['fin-3-01', 'fin-3-02', 'fin-3-03', 'fin-3-04', 'past-3-07', 'past-3-08'],
    blocks: [
      { t: 'p', md: '本讲的核心是**把几何量写成积分的「微元」之和**。理解微元 $dV$、$ds$ 怎么来的，比背公式重要。' },
      { t: 'h', md: '一、面积' },
      { t: 'p', md: '$\\displaystyle A=\\int_{a}^{b}\\left[f(x)-g(x)\\right]dx$，其中 $f$ 在上方。' },
      { t: 'warn', md: '**必须先找交点**确定上下限；若两曲线在区间内**交叉**，必须拆区间 —— 否则会得到正负相消的错误结果。' },
      { t: 'h', md: '二、旋转体体积：两种方法' },
      { t: 'tbl', head: ['方法', '适用情形', '微元', '公式'],
        rows: [
          ['<b>圆盘 / 垫圈法</b><br>disk / washer', '绕坐标轴旋转，函数形式为 $y=f(x)$', '垂直于轴的薄片', '$V=\\pi\\int_a^b\\left[f(x)^{2}-g(x)^{2}\\right]dx$'],
          ['<b>柱壳法</b><br>cylindrical shells', '绕 $y$ 轴旋转，且 $y=f(x)$ 容易表示', '同心薄圆柱壳', '$V=2\\pi\\int_a^b x f(x)\\,dx$']
        ]},
      { t: 'note', md: '**怎么选**：若以 $x$ 为积分变量时体积要拆成几段（因为 $y=f(x)$ 有正负或需分段），改用**柱壳法**常能一步完成；反之亦然。考试题目往往有「更省事的那一种」。' },
      { t: 'h', md: '三、弧长' },
      { t: 'p', md: '$\\displaystyle L=\\int_a^b\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,dx$' },
      { t: 'p', md: '微元推导：小段近似为直线，$ds=\\sqrt{dx^{2}+dy^{2}}=\\sqrt{1+(dy/dx)^{2}}\\,dx$。' },
      { t: 'p', md: '**参数方程**情形：$L=\\displaystyle\\int_{\\alpha}^{\\beta}\\sqrt{\\left(\\frac{dx}{dt}\\right)^{2}+\\left(\\frac{dy}{dt}\\right)^{2}}\\,dt$。' },
      { t: 'h', md: '四、旋转曲面面积' },
      { t: 'p', md: '$\\displaystyle S=2\\pi\\int_a^b f(x)\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,dx$（绕 $x$ 轴）。' },
      { t: 'p', md: '记忆：**弧长 × 绕一圈的周长**，即把 $L$ 的微元乘以 $2\\pi f(x)$。' },
      { t: 'h', md: '五、解题流程' },
      { t: 'ol', items: [
        '**画图**并标出关键点（交点、极值点）；',
        '**选择积分变量**（$x$ 还是 $y$），目标是**不用分段**；',
        '写出**微元**（$dA$、$dV$、$ds$）并确认公式；',
        '确定**上下限**（交点或题目给定范围）；',
        '计算积分，检查结果**量纲与正负**是否合理。'
      ]},
      { t: 'warn', md: '**结果必为正**（面积、体积、弧长都是正值）。若算出负数，一定是上下限颠倒或微元写错。' }
    ],
    terms: [
      ['area between curves', '曲线间面积'], ['solid of revolution', '旋转体'],
      ['disk / washer method', '圆盘 / 垫圈法'],
      ['cylindrical shells', '柱壳法'], ['arc length', '弧长'],
      ['surface of revolution', '旋转曲面'], ['parametric equations', '参数方程'],
      ['differential element', '微元'], ['intersection point', '交点']
    ]
  });

  /* ---------- T6 级数与泰勒展开 ---------- */
  T.push({
    no: 'T6', title: '级数与泰勒展开', titleEn: 'Series and Taylor Expansion',
    tags: ['series', 'power series', 'Taylor', 'Maclaurin', 'convergence'],
    qids: ['fin-4-01', 'fin-4-02', 'past-4-01', 'past-4-02', 'past-4-03'],
    blocks: [
      { t: 'p', md: '级数是「无穷项求和」。核心问题有两个：**它收敛吗**、**收敛到什么**。' },
      { t: 'h', md: '一、收敛判别的工具箱' },
      { t: 'tbl', head: ['判别法（英文）', '适用', '判据'],
        rows: [
          ['<b>比值判别法</b><br>ratio test', '含阶乘、$a^{n}$', '$L=\\lim\\left|\\frac{a_{n+1}}{a_n}\\right|$；$L<1$ 收敛，$L>1$ 发散，$L=1$ 失效'],
          ['<b>根值判别法</b><br>root test', '含 $n$ 次方', '$L=\\lim\\sqrt[n]{|a_n|}$，判据同比值'],
          ['<b>比较判别法</b>', '与已知级数对比', '找同阶的 p-级数或几何级数'],
          ['<b>交错级数判别法</b>', '正负交替', '项递减且趋于 0 ⇒ 收敛'],
          ['<b>p-级数</b>', '$\\sum\\frac1{n^{p}}$', '$p>1$ 收敛，$p\\le1$ 发散']
        ]},
      { t: 'note', md: '**绝对收敛 ⇒ 收敛**，但反之不成立（如 $\\sum\\frac{(-1)^{n}}{n}$ 条件收敛）。考试若问「收敛性」，通常需要分别讨论绝对收敛与条件收敛。' },
      { t: 'h', md: '二、幂级数与收敛半径' },
      { t: 'p', md: '对 $\\sum a_n(x-c)^{n}$，**收敛半径**（radius of convergence）$R$ 由比值判别法求得：' },
      { t: 'p', md: '$\\displaystyle R=\\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right|$。在 $|x-c|<R$ 内绝对收敛，$|x-c|>R$ 发散，**两个端点需单独判断**。' },
      { t: 'h', md: '三、必须记住的麦克劳林级数' },
      { t: 'tbl', head: ['函数', '展开式', '收敛域'],
        rows: [
          ['$e^{x}$', '$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$', '$(-\\infty,\\infty)$'],
          ['$\\sin x$', '$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n+1}}{(2n+1)!}$', '$(-\\infty,\\infty)$'],
          ['$\\cos x$', '$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n}}{(2n)!}$', '$(-\\infty,\\infty)$'],
          ['$\\dfrac{1}{1-x}$', '$\\displaystyle\\sum_{n=0}^{\\infty}x^{n}$', '$|x|<1$'],
          ['$\\ln(1+x)$', '$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}x^{n}}{n}$', '$(-1,1]$'],
          ['$(1+x)^{\\alpha}$', '$\\displaystyle\\sum_{n=0}^{\\infty}\\binom{\\alpha}{n}x^{n}$', '$|x|<1$']
        ]},
      { t: 'h', md: '四、用级数求积分（考试常见）' },
      { t: 'ol', items: [
        '把被积函数**展开成幂级数**（常用 $\\frac{1}{1-u}$ 或 $e^{u}$ 的展开）；',
        '**逐项积分**（幂级数在收敛区间内可逐项积分）；',
        '整理成 $\\sum a_n x^{\\text{幂}}$ 的形式。'
      ]},
      { t: 'p', md: '例：$\\displaystyle\\int_0^x \\frac{dt}{1+t^{2}}=\\int_0^x\\sum(-t^{2})^{n}dt=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n+1}}{2n+1}=\\arctan x$。' },
      { t: 'h', md: '五、泰勒公式的余项' },
      { t: 'p', md: '$f(x)=\\displaystyle\\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x-a)^{k}+R_n(x)$，其中**拉格朗日余项** $R_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}$。' },
      { t: 'note', md: '**用途**：估算近似值的误差上界 —— 找到 $|f^{(n+1)}|$ 在该区间上的最大值代入即可。这是「用多项式近似函数」的严格依据。' }
    ],
    terms: [
      ['series', '级数'], ['convergent / divergent series', '收敛 / 发散级数'],
      ['ratio test', '比值判别法'], ['root test', '根值判别法'],
      ['power series', '幂级数'], ['radius of convergence', '收敛半径'],
      ['Taylor / Maclaurin series', '泰勒 / 麦克劳林级数'],
      ['absolute / conditional convergence', '绝对 / 条件收敛'],
      ['remainder term', '余项'], ['term-by-term integration', '逐项积分']
    ]
  });

  /* ---------- T7 定积分性质与对称性 ---------- */
  T.push({
    no: 'T7', title: '定积分性质与对称性', titleEn: 'Properties and Symmetry of Definite Integrals',
    tags: ['symmetry', 'even/odd', 'substitution', 'properties'],
    qids: ['fin-5-01', 'fin-5-02', 'fin-5-03', 'fin-5-04', 'pf-int-01', 'pf-int-02'],
    blocks: [
      { t: 'p', md: '定积分有若干**结构性性质**，用好它们可以把看似复杂（甚至无法直接积）的题一步化简。这是考试区分度较高的部分。' },
      { t: 'h', md: '一、奇偶对称性（最常用）' },
      { t: 'p', md: '若积分区间**关于原点对称** $[-a,a]$：' },
      { t: 'ul', items: [
        '**偶函数**（even，$f(-x)=f(x)$）：$\\displaystyle\\int_{-a}^{a}f=2\\int_{0}^{a}f$',
        '**奇函数**（odd，$f(-x)=-f(x)$）：$\\displaystyle\\int_{-a}^{a}f=0$'
      ]},
      { t: 'note', md: '**识别技巧**：把被积函数拆成「奇部 + 偶部」。例如 $\\dfrac{x^{2}\\sin x}{1+x^{4}}$ 中 $x^{2}$ 偶、$\\sin x$ 奇、$1+x^{4}$ 偶，故整体是**奇函数**，在对称区间上积分为 **0** —— 无需任何计算。' },
      { t: 'h', md: '二、区间可加与平移' },
      { t: 'ul', items: [
        '**可加性**：$\\int_a^b=\\int_a^c+\\int_c^b$（用于处理分段函数或绝对值）；',
        '**翻转**：$\\int_a^b f=-\\int_b^a f$；',
        '**线性**：$\\int(\\alpha f+\\beta g)=\\alpha\\int f+\\beta\\int g$。'
      ]},
      { t: 'h', md: '三、区间再现公式（高频）' },
      { t: 'p', md: '$\\displaystyle\\int_{0}^{a}f(x)\\,dx=\\int_{0}^{a}f(a-x)\\,dx$' },
      { t: 'p', md: '常用于**分母含 $\\sin$ 与 $\\cos$ 对称**的积分。例：' },
      { t: 'p', md: '$I=\\displaystyle\\int_0^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}dx$。用区间再现把 $x\\to\\frac\\pi2-x$，得 $I=\\int_0^{\\pi/2}\\frac{\\cos x}{\\cos x+\\sin x}dx$。' },
      { t: 'p', md: '两式相加：$2I=\\int_0^{\\pi/2}1\\,dx=\\frac\\pi2$，故 $I=\\frac\\pi4$。' },
      { t: 'h', md: '四、周期函数的积分' },
      { t: 'p', md: '若 $f$ 以 $T$ 为周期，则 $\\displaystyle\\int_{a}^{a+T}f=\\int_{0}^{T}f$ —— **积分值与起点无关**（长度为一个周期）。' },
      { t: 'h', md: '五、估值与中值' },
      { t: 'ul', items: [
        '**保序性**：若 $f\\le g$ 则 $\\int f\\le\\int g$；',
        '**估值**：$m(b-a)\\le\\int_a^b f\\le M(b-a)$，其中 $m,M$ 为 $f$ 在该区间上的最值；',
        '**积分中值定理**：$f$ 连续时存在 $c\\in[a,b]$ 使 $\\int_a^b f=f(c)(b-a)$。'
      ]},
      { t: 'h', md: '六、变上限积分与求导' },
      { t: 'p', md: '$\\displaystyle\\frac{d}{dx}\\int_{a}^{g(x)}f(t)\\,dt=f(g(x))\\,g\'(x)$（**微积分基本定理** + 链式法则）。' },
      { t: 'warn', md: '**易错**：忘记乘**内层导数** $g\'(x)$。若上下限都含 $x$，要拆成两个积分再分别求导。' }
    ],
    terms: [
      ['definite integral', '定积分'], ['symmetry', '对称性'],
      ['even / odd function', '偶函数 / 奇函数'],
      ['additivity', '区间可加性'], ['periodic function', '周期函数'],
      ['Mean Value Theorem for integrals', '积分中值定理'],
      ['Fundamental Theorem of Calculus', '微积分基本定理'],
      ['variable upper limit', '变上限积分']
    ]
  });

  /* ---------- T8 连续性与可导性（分段函数） ---------- */
  T.push({
    no: 'T8', title: '分段函数的连续与可导', titleEn: 'Continuity and Differentiability of Piecewise Functions',
    tags: ['continuity', 'differentiability', 'piecewise', 'undetermined coefficients'],
    qids: ['mp-5-01', 'mp-5-02', 'mp-5-03', 'mp-5-04', 'fin-1-01', 'fin-1-04'],
    blocks: [
      { t: 'p', md: '这是期中与期末的**固定第一题**：给出含待定常数的分段函数，要求选择常数使函数处处连续 / 可导。' },
      { t: 'h', md: '一、解题三步' },
      { t: 'ol', items: [
        '**连续性**：分段点处左右极限都等于函数值 $\\Rightarrow$ 得到一个**方程**；',
        '**可导性**：分段点处左右**导数**相等 $\\Rightarrow$ 得到第二个方程；',
        '**解方程组**求出待定常数，最后写出 $f\'$ 的分段表达式。'
      ]},
      { t: 'note', md: '**顺序不能颠倒**：不连续必不可导，所以先解出连续性方程，再解可导性方程，能大幅简化计算。' },
      { t: 'h', md: '二、分段点处的导数必须用定义' },
      { t: 'p', md: '在分段点 $x_0$ 处，**不能直接对某一支求导后代入**（因为该点两侧表达式不同）。必须用定义：' },
      { t: 'p', md: '$f\'_+(x_0)=\\displaystyle\\lim_{h\\to0^+}\\frac{f(x_0+h)-f(x_0)}{h}$，左导数同理，二者相等才可导。' },
      { t: 'h', md: '三、处理「爆增／爆减」型极限' },
      { t: 'p', md: '考试常在分段函数里放 $e^{-1/h}$、$h^{2}\\sin\\frac1h$ 这类项。处理要点：' },
      { t: 'ul', items: [
        '$\\displaystyle\\lim_{h\\to0^+}\\frac{e^{-k/h}}{h^{n}}=0$（指数衰减远快于任何多项式）—— 令 $u=k/h$ 化为 $\\lim_{u\\to\\infty}\\frac{u^{n}}{e^{u}}=0$。',
        '$\\left|h^{n}\\sin\\frac1h\\right|\\le h^{n}\\to0$（**夹逼**），故极限为 0。',
        '$\\left|h^{n}\\cos\\frac1h\\right|\\le h^{n}\\to0$，同样为 0。'
      ]},
      { t: 'h', md: '四、$f\'$ 的连续性（延伸问题）' },
      { t: 'p', md: '有些题目进一步问「$f\'$ 是否处处连续」。这时要算 $\\displaystyle\\lim_{x\\to x_0}f\'(x)$ 是否等于 $f\'(x_0)$。' },
      { t: 'warn', md: '**注意区分**：$f\'(x_0)$ **存在** 不等于 $f\'$ 在 $x_0$ **连续**。经典反例：$f(x)=x^{2}\\sin\\frac1x$，$f\'(0)=0$ 存在，但 $\\lim_{x\\to0}f\'(x)$ 不存在，故 $f\'$ 在 0 处不连续。' },
      { t: 'h', md: '五、二阶导数是否存在的问题' },
      { t: 'p', md: '若 $f\'(x)$ 在 $x_0$ 附近含 $\\cos(\\ln x)$ 这类**振荡项**，则 $\\displaystyle\\lim_{x\\to x_0}\\frac{f\'(x)-f\'(x_0)}{x-x_0}$ 可能**不存在** —— 此时 $f\'\'(x_0)$ 不存在（虽然 $f\'$ 连续）。' },
      { t: 'note', md: '**总结记忆**：连续 → 可导 → 导数连续 → 二阶可导，这是**逐级增强**的条件，后一级不蕴含前一级的逆命题。考试常在这条链上设陷阱。' }
    ],
    terms: [
      ['piecewise function', '分段函数'], ['continuity at a point', '在某点连续'],
      ['left-hand / right-hand derivative', '左导数 / 右导数'],
      ['differentiable everywhere', '处处可导'],
      ['undetermined constant', '待定常数'],
      ['oscillation', '振荡'], ['Squeeze Theorem', '夹逼定理'],
      ['first principle', '定义法（用极限求导）']
    ]
  });

  FCMS.registerNotes({ subjectId: 'AMA1702', topics: T });
})(typeof window !== 'undefined' ? window : globalThis);
