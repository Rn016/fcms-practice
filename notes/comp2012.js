/* ==========================================================================
   COMP2012 Discrete Mathematics 讲义精读
   依据 Lecture 1–13 与 Tutorial 讲义整理；中文讲解为主，英文标注专有名词。
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('notes/comp2012.js: 必须先加载 js/registry.js');
  var T = [];

  /* ---------- D1 逻辑与证明 ---------- */
  T.push({
    no: 'D1', title: '命题逻辑与证明方法', titleEn: 'Propositional Logic and Proof Techniques',
    tags: ['logic', 'truth table', 'contrapositive', 'proof methods'],
    qids: ['cm-1-01', 'cm-1-02', 'cm-1-03', 'cm-1-04', 'cp-1'],
    blocks: [
      { t: 'p', md: '离散数学的语言是**逻辑**。本讲建立符号系统，并给出数学证明的四种标准武器。' },
      { t: 'h', md: '一、联结词与真值表' },
      { t: 'tbl', head: ['联结词（英文）', '符号', '何时为真'],
        rows: [
          ['否定 negation', '$\\neg p$', '$p$ 为假时'],
          ['合取 conjunction', '$p\\land q$', '两者都为真'],
          ['析取 disjunction', '$p\\lor q$', '至少一个为真'],
          ['<b>条件 conditional</b>', '$p\\to q$', '<b>只有 $p$ 真 $q$ 假时为假</b>'],
          ['双条件 biconditional', '$p\\leftrightarrow q$', '两者真值相同'],
          ['异或 XOR', '$p\\oplus q$', '两者真值不同']
        ]},
      { t: 'note', md: '**$p\\to q$ 的关键直觉**：它只在「前提真而结论假」时为假。所以「若 $2+2=5$，则月亮是奶酪做的」是**真命题**（前提为假）。这叫**虚真**（vacuously true），是考试常设的陷阱。' },
      { t: 'h', md: '二、四个必须区分的命题' },
      { t: 'tbl', head: ['名称', '形式', '与原命题的关系'],
        rows: [
          ['原命题', '$p\\to q$', '——'],
          ['<b>逆否命题</b><br>contrapositive', '$\\neg q\\to\\neg p$', '<b>逻辑等价</b>（同真同假）'],
          ['<b>逆命题</b><br>converse', '$q\\to p$', '<b>不等价</b>'],
          ['<b>否命题</b><br>inverse', '$\\neg p\\to\\neg q$', '<b>不等价</b>（但与逆命题等价）']
        ]},
      { t: 'warn', md: '**只有逆否命题与原命题等价**。证明 $p\\to q$ 时，证明 $\\neg q\\to\\neg p$ 是**合法且常用**的（反证法的变体）。' },
      { t: 'h', md: '三、量词与否定' },
      { t: 'p', md: '$\\forall$（对所有，for all）、$\\exists$（存在，there exists）。**否定时量词互换**：' },
      { t: 'p', md: '$\\neg(\\forall x\\,P(x))\\equiv\\exists x\\,\\neg P(x)$，$\\neg(\\exists x\\,P(x))\\equiv\\forall x\\,\\neg P(x)$。' },
      { t: 'p', md: '例：$\\neg(\\forall\\epsilon>0\\,\\exists\\delta>0\\,P)=\\exists\\epsilon>0\\,\\forall\\delta>0\\,\\neg P$ —— 这正是「极限不存在」的严格表述。' },
      { t: 'h', md: '四、四种证明方法' },
      { t: 'tbl', head: ['方法（英文）', '思路', '适用'],
        rows: [
          ['<b>直接证明</b><br>direct proof', '从前提出发，逐步推出结论', '一般情形'],
          ['<b>反证法</b><br>proof by contradiction', '假设结论不成立，推出矛盾', '结论难以正面处理时'],
          ['<b>逆否证明</b><br>proof by contrapositive', '证明 $\\neg q\\to\\neg p$', '结论含「不」「无」时'],
          ['<b>数学归纳法</b><br>mathematical induction', '基础 + 归纳步', '命题与自然数 $n$ 有关'],
          ['<b>分类讨论</b><br>proof by cases', '把情形划分穷尽后逐一证明', '含绝对值、奇偶、符号时']
        ]},
      { t: 'note', md: '**如何选方法**：结论形如「若 $A$ 则 $B$」且 $A$ 不好用 → 试逆否；结论形如「不存在」「无理数」 → 试反证；结论含 $\\forall n\\ge n_0$ → 试归纳。' }
    ],
    terms: [
      ['proposition', '命题'], ['negation', '否定'],
      ['conjunction', '合取（与）'], ['disjunction', '析取（或）'],
      ['conditional / implication', '条件（蕴含）'],
      ['biconditional', '双条件'],
      ['contrapositive', '逆否命题'], ['converse', '逆命题'],
      ['inverse', '否命题'], ['quantifier', '量词'],
      ['vacuously true', '虚真'], ['direct proof', '直接证明'],
      ['proof by contradiction', '反证法'],
      ['proof by contrapositive', '逆否证明'],
      ['mathematical induction', '数学归纳法']
    ]
  });

  /* ---------- D2 集合、函数与序列 ---------- */
  T.push({
    no: 'D2', title: '集合、函数与序列求和', titleEn: 'Sets, Functions, Sequences and Sums',
    tags: ['set', 'function', 'cardinality', 'summation'],
    qids: ['cm-2-01', 'cm-2-02', 'cm-2-03', 'cm-2-04', 'cm-2-05'],
    blocks: [
      { t: 'p', md: '本讲是离散数学的「词汇表」：集合、函数、序列、求和 —— 后续所有内容都建立在这些概念上。' },
      { t: 'h', md: '一、集合运算与恒等式' },
      { t: 'tbl', head: ['运算', '符号', '含义'],
        rows: [
          ['并', '$A\\cup B$', '属于 $A$ 或属于 $B$'],
          ['交', '$A\\cap B$', '同时属于两者'],
          ['差', '$A-B$', '属于 $A$ 但不属于 $B$'],
          ['补', '$\\overline A$', '相对于全集 $U$'],
          ['幂集', '$\\mathcal P(A)$', '所有子集构成的集合，$|\\mathcal P(A)|=2^{|A|}$'],
          ['笛卡尔积', '$A\\times B$', '所有有序对，$|A\\times B|=|A|\\cdot|B|$']
        ]},
      { t: 'note', md: '**两个必背等式**：$|\\mathcal P(A)|=2^{n}$（含空集与自身）、$|A\\cup B|=|A|+|B|-|A\\cap B|$（容斥原理的起点）。' },
      { t: 'h', md: '二、函数的性质' },
      { t: 'ul', items: [
        '**单射**（injective / one-to-one）：不同输入给不同输出，即 $f(a)=f(b)\\Rightarrow a=b$；',
        '**满射**（surjective / onto）：值域等于陪域，每个 $y$ 都有原像；',
        '**双射**（bijective）：既单射又满射；**只有双射才有反函数**。'
      ]},
      { t: 'warn', md: '**有限集上的判据**：若 $|A|=|B|=n$ 且 $f:A\\to B$，则「单射」「满射」「双射」三者**等价**。但无限集不成立（如 $f(n)=2n$ 在 $\\mathbb N\\to\\mathbb N$ 上单射但非满射）。' },
      { t: 'h', md: '三、常用求和公式' },
      { t: 'tbl', head: ['和式', '结果'],
        rows: [
          ['$\\sum_{i=1}^{n}i$', '$\\dfrac{n(n+1)}{2}$'],
          ['$\\sum_{i=1}^{n}i^{2}$', '$\\dfrac{n(n+1)(2n+1)}{6}$'],
          ['$\\sum_{i=1}^{n}i^{3}$', '$\\left(\\dfrac{n(n+1)}{2}\\right)^{2}$'],
          ['等比 $\\sum_{i=0}^{n}r^{i}$（$r\\neq1$）', '$\\dfrac{r^{n+1}-1}{r-1}$'],
          ['无穷等比（$|r|<1$）', '$\\dfrac{1}{1-r}$']
        ]},
      { t: 'note', md: '**记忆技巧**：$\\sum i^{3}=\\left(\\sum i\\right)^{2}$ —— 立方和等于和的平方，这是最美的恒等式之一。' },
      { t: 'h', md: '四、递推关系' },
      { t: 'p', md: '**递推**（recurrence relation）用前面的项定义后面的项。求**闭式解**（closed form）常用：' },
      { t: 'ul', items: [
        '**迭代展开**（iteration）：逐步代入找规律；',
        '**特征方程法**：用于线性常系数递推，如 $a_n=pa_{n-1}+qa_{n-2}$；',
        '**主定理**（Master Theorem）：用于分治算法的复杂度。'
      ]},
      { t: 'p', md: 'Fibonacci 型 $a_n=a_{n-1}+a_{n-2}$ 的特征方程为 $r^{2}=r+1$，解得 $r=\\frac{1\\pm\\sqrt5}{2}$。' }
    ],
    terms: [
      ['set', '集合'], ['subset', '子集'],
      ['union / intersection / difference', '并 / 交 / 差'],
      ['complement', '补集'], ['power set', '幂集'],
      ['Cartesian product', '笛卡尔积'],
      ['cardinality', '基数（元素个数）'],
      ['injective / one-to-one', '单射'],
      ['surjective / onto', '满射'], ['bijective', '双射'],
      ['inverse function', '反函数'], ['composition', '复合'],
      ['sequence', '序列'], ['summation', '求和'],
      ['recurrence relation', '递推关系'],
      ['closed form', '闭式（通项）'],
      ['geometric series', '等比级数']
    ]
  });

  /* ---------- D3 算法与复杂度 ---------- */
  T.push({
    no: 'D3', title: '算法与复杂度', titleEn: 'Algorithms and Complexity',
    tags: ['algorithm', 'big-O', 'growth of functions', 'complexity'],
    qids: ['cm-3-01', 'cm-3-02', 'cm-3-03', 'cm-3-04'],
    blocks: [
      { t: 'p', md: '本讲给「算法有多快」这件事一个严格的数学定义 —— **大 O 记号**。' },
      { t: 'h', md: '一、大 O 的严格定义' },
      { t: 'p', md: '$f(n)=O(g(n))$ 当且仅当存在常数 $C>0$ 与 $n_0$，使**对所有 $n\\ge n_0$** 有 $|f(n)|\\le C|g(n)|$。' },
      { t: 'note', md: '**两个常数缺一不可**：$C$ 是「倍数」的容忍度，$n_0$ 是「只看大 $n$」的体现。大 O 描述的是**增长趋势**，不是精确步数。' },
      { t: 'h', md: '二、五个记号的区别' },
      { t: 'tbl', head: ['记号', '名称', '含义'],
        rows: [
          ['$O$', 'big-O', '上界：$f$ 增长不快于 $g$'],
          ['$\\Omega$', 'big-Omega', '下界：$f$ 增长不慢于 $g$'],
          ['$\\Theta$', 'big-Theta', '<b>紧确界</b>：同阶（$O$ 且 $\\Omega$）'],
          ['$o$', 'little-o', '严格慢于（$f/g\\to0$）'],
          ['$\\omega$', 'little-omega', '严格快于（$f/g\\to\\infty$）']
        ]},
      { t: 'h', md: '三、增长阶排序（必背）' },
      { t: 'p', md: '$1 \\prec \\log n \\prec \\sqrt n \\prec n \\prec n\\log n \\prec n^{2} \\prec n^{3} \\prec 2^{n} \\prec n!$' },
      { t: 'warn', md: '**考试高频陷阱**：$\\log n$ 的**底数不影响阶**（$\\log_a n=\\frac{\\log_b n}{\\log_b a}$，只差常数倍），所以 $O(\\log_2 n)=O(\\log_{10} n)$。但 $2^{n}$ 与 $3^{n}$ **不同阶**（底数是变量的一部分）。' },
      { t: 'h', md: '四、判断大 O 的方法' },
      { t: 'ol', items: [
        '**取极限**：算 $\\lim_{n\\to\\infty}\\frac{f(n)}{g(n)}$。为常数（或 0）⇒ $f=O(g)$；为 $\\infty$ ⇒ 不成立。',
        '**抓主导项**：多项式只看最高次，系数与低次项可丢。',
        '**用不等式放缩**：如 $n\\le n^{2}$（$n\\ge1$）、$\\log n\\le n$。',
        '**对复杂式先化简**：$\\frac{n^{3}+2n}{n^{2}+1}$ 的阶要化成 $\\frac{n^{3}(1+2/n^{2})}{n^{2}(1+1/n^{2})}\\approx n$。'
      ]},
      { t: 'h', md: '五、常见算法的复杂度' },
      { t: 'tbl', head: ['算法', '复杂度'],
        rows: [
          ['线性查找', '$O(n)$'], ['二分查找', '$O(\\log n)$'],
          ['冒泡 / 选择 / 插入排序', '$O(n^{2})$'],
          ['归并 / 堆排序', '$O(n\\log n)$'],
          ['矩阵乘法（朴素）', '$O(n^{3})$'],
          ['求子集（枚举）', '$O(2^{n})$'],
          ['旅行商（暴力）', '$O(n!)$']
        ]},
      { t: 'note', md: '**复杂度预测可解性**：$n=100$ 时，$O(n^{3})=10^{6}$ 可行，$O(2^{n})\\approx10^{30}$ **不可行**（宇宙寿命也跑不完）。这就是 Lecture 6（问题难度）要展开的主题。' }
    ],
    terms: [
      ['algorithm', '算法'], ['time complexity', '时间复杂度'],
      ['space complexity', '空间复杂度'],
      ['big-O notation', '大 O 记号'],
      ['big-Omega / big-Theta', '下界 / 紧确界'],
      ['little-o / little-omega', '严格上界 / 严格下界'],
      ['growth of functions', '函数的增长'],
      ['dominant term', '主导项'],
      ['worst / average / best case', '最坏 / 平均 / 最好情况']
    ]
  });

  /* ---------- D4 归纳法与递归 ---------- */
  T.push({
    no: 'D4', title: '数学归纳法与递归', titleEn: 'Induction and Recursion',
    tags: ['induction', 'strong induction', 'recursion', 'well-ordering'],
    qids: ['cm-4-01', 'cm-4-02', 'cm-4-03', 'cm-4-04', 'cp-2', 'cp-3'],
    blocks: [
      { t: 'p', md: '归纳法是证明「对所有自然数成立」的**标准武器**，它也是递归算法正确性的依据。' },
      { t: 'h', md: '一、弱归纳法的两步' },
      { t: 'ol', items: [
        '**基础步**（basis step）：验证 $P(n_0)$ 成立（$n_0$ 通常是 0 或 1）；',
        '**归纳步**（inductive step）：证明「若 $P(k)$ 成立，则 $P(k+1)$ 成立」，即 $P(k)\\to P(k+1)$。'
      ]},
      { t: 'p', md: '结论：$\\forall n\\ge n_0,\\ P(n)$ 成立。' },
      { t: 'note', md: '**多米诺骨牌类比**：基础步是「推倒第一张」，归纳步是「每一张倒下会带倒下一张」。两者缺一不可 —— 只证归纳步而基础步不成立（如「所有马都是同色」的经典谬误），结论无效。' },
      { t: 'h', md: '二、强归纳法' },
      { t: 'p', md: '归纳步改为：假设 $P(n_0),P(n_0+1),\\dots,P(k)$ **全部**成立，推出 $P(k+1)$。' },
      { t: 'p', md: '**何时用强归纳**：当 $P(k+1)$ 的证明需要**多个**前面的值时。典型例子：' },
      { t: 'ul', items: [
        '证明「每个 $n\\ge2$ 都能分解为素数之积」（需要拆成两个更小的数）；',
        '证明「任意邮资 $n\\ge8$ 可用 3 分与 5 分邮票凑出」（需要 $P(k-2)$ 或 $P(k-3)$）。'
      ]},
      { t: 'h', md: '三、常见归纳证明的结构' },
      { t: 'tbl', head: ['要证的内容', '关键技巧'],
        rows: [
          ['求和公式', '把 $\\sum_{i=1}^{k+1}$ 拆成 $\\sum_{i=1}^{k}+(k+1)$，代入归纳假设'],
          ['整除性', '把 $f(k+1)$ 写成 $f(k)+$ 可被整除的部分'],
          ['不等式', '利用 $f(k+1)\\le$（归纳假设的界）+ 显然的界'],
          ['集合 / 组合', '用「取或不取」把情形分为两类']
        ]},
      { t: 'warn', md: '**归纳步中最常见的错误**：直接假设 $P(k+1)$ 成立（循环论证），或用 $P(k)$ 时**未声明假设**。写解答时必须明确写出「归纳假设：设 $P(k)$ 成立」。' },
      { t: 'h', md: '四、递归定义与递归算法' },
      { t: 'p', md: '**递归**（recursion）用自身定义自身，必须包含：**基础情形**（base case）与**递归步**（recursive step）。' },
      { t: 'code', lang: 'python', code: '# 递归：阶乘\ndef fact(n):\n    if n <= 1:          # base case\n        return 1\n    return n * fact(n-1) # recursive step\n\n# 递归：二分查找\ndef bsearch(a, lo, hi, target):\n    if lo > hi:\n        return -1                    # base case：未找到\n    mid = (lo + hi) // 2\n    if a[mid] == target: return mid\n    if a[mid] < target:  return bsearch(a, mid+1, hi, target)\n    return bsearch(a, lo, mid-1, target)' },
      { t: 'note', md: '**递归的正确性由归纳法保证**：base case 对应基础步，recursive step 对应归纳步。所以「递归为什么正确」与「归纳法为什么正确」是同一个问题。' },
      { t: 'warn', md: '**递归必须有「向基础情形前进」的趋势**，否则会**无限递归**（Python 报 `RecursionError`）。例如 `fact(n)` 必须调用 `fact(n-1)` 而不是 `fact(n)`。' }
    ],
    terms: [
      ['mathematical induction', '数学归纳法'],
      ['basis step', '基础步（归纳基）'],
      ['inductive step', '归纳步'],
      ['inductive hypothesis', '归纳假设'],
      ['strong induction', '强归纳法'],
      ['well-ordering principle', '良序原理'],
      ['recursion', '递归'], ['base case', '基础情形'],
      ['recursive step', '递归步'],
      ['recursion depth', '递归深度'], ['stack overflow', '栈溢出']
    ]
  });

  /* ---------- D5 计数 ---------- */
  T.push({
    no: 'D5', title: '计数原理', titleEn: 'Counting',
    tags: ['permutation', 'combination', 'pigeonhole', 'inclusion-exclusion'],
    qids: ['cm-5-01', 'cm-5-02', 'cm-5-03', 'cm-5-04', 'cm-5-05', 'cm-5-06', 'cm-5-07'],
    blocks: [
      { t: 'p', md: '计数的核心是**不重不漏**。本讲整理四大工具。' },
      { t: 'h', md: '一、两个基本法则' },
      { t: 'ul', items: [
        '**乘法法则**（product rule）：分步完成任务，各步**相乘**；',
        '**加法法则**（sum rule）：分类完成任务，各类**相加**。'
      ]},
      { t: 'h', md: '二、排列与组合' },
      { t: 'tbl', head: ['类型', '公式', '特点'],
        rows: [
          ['<b>排列</b> $P(n,r)$', '$\\dfrac{n!}{(n-r)!}$', '<b>有顺序</b>，从 $n$ 个中取 $r$ 个排列'],
          ['<b>组合</b> $\\binom nr$', '$\\dfrac{n!}{r!(n-r)!}$', '<b>无顺序</b>'],
          ['可重复排列', '$n^{r}$', '每位都有 $n$ 种选择'],
          ['可重复组合', '$\\binom{n+r-1}{r}$', '隔板法'],
          ['圆排列', '$(n-1)!$', '围成一圈，旋转视为相同']
        ]},
      { t: 'note', md: '**判断有无顺序**：「选出 3 人当委员」→ 组合；「选出 3 人分别当主席、秘书、财务」→ 排列。**关键看「换个位置是否算不同」**。' },
      { t: 'h', md: '三、容斥原理' },
      { t: 'p', md: '$|A\\cup B|=|A|+|B|-|A\\cap B|$' },
      { t: 'p', md: '$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$' },
      { t: 'p', md: '**规律**：奇数次交集取正，偶数次交集取负。' },
      { t: 'h', md: '四、鸽巢原理' },
      { t: 'p', md: '**鸽巢原理**（Pigeonhole Principle）：若把 $n+1$ 个物体放进 $n$ 个盒子，则至少有一个盒子含 **≥2** 个物体。' },
      { t: 'ul', items: [
        '**推广形式**：把 $N$ 个物体放进 $k$ 个盒子，则至少有一个盒子含 $\\left\\lceil N/k\\right\\rceil$ 个物体；',
        '**应用套路**：识别「物体」与「盒子」。例：13 个人中必有 2 人同月出生（12 个月 = 12 个盒子）。',
        '**存在性证明**：鸽巢原理只能证明**存在**，不能指出是哪一个 —— 这是它与其他计数方法的区别。'
      ]},
      { t: 'h', md: '五、二项式定理' },
      { t: 'p', md: '$(x+y)^{n}=\\displaystyle\\sum_{k=0}^{n}\\binom nk x^{n-k}y^{k}$' },
      { t: 'p', md: '**两个常用推论**：$\\sum_k\\binom nk=2^{n}$（令 $x=y=1$）、$\\sum_k(-1)^{k}\\binom nk=0$（令 $x=1,y=-1$）。' },
      { t: 'note', md: '**恒等式 $\n\\binom nk=\\binom{n-1}{k-1}+\\binom{n-1}{k}$**（Pascal 恒等式）的组合意义：固定某个元素，含它的组合数 + 不含它的组合数。这是**组合证明**（combinatorial proof）的典型例子 —— 用两种方式数同一个量。' }
    ],
    terms: [
      ['counting', '计数'], ['product rule', '乘法法则'],
      ['sum rule', '加法法则'], ['permutation', '排列'],
      ['combination', '组合'], ['binomial coefficient', '二项式系数'],
      ['with / without repetition', '可重复 / 不可重复'],
      ['circular permutation', '圆排列'],
      ['inclusion–exclusion principle', '容斥原理'],
      ['Pigeonhole Principle', '鸽巢原理'],
      ['binomial theorem', '二项式定理'],
      ['combinatorial proof', '组合证明'],
      ['Pascal\'s identity', '帕斯卡恒等式']
    ]
  });

  /* ---------- D6 图论基础 ---------- */
  T.push({
    no: 'D6', title: '图论基础与连通性', titleEn: 'Graph Theory Basics and Connectivity',
    tags: ['graph', 'degree', 'path', 'connectivity', 'isomorphism'],
    qids: ['cm-6-01', 'cm-6-02', 'cm-6-03', 'cm-6-04'],
    blocks: [
      { t: 'p', md: '图论研究**关系**。本讲建立基本术语与「图是否连成一片」的判据。' },
      { t: 'h', md: '一、基本定义' },
      { t: 'tbl', head: ['术语', '英文', '说明'],
        rows: [
          ['图', 'graph $G=(V,E)$', '顶点集 $V$ + 边集 $E$'],
          ['简单图', 'simple graph', '无自环、无重边'],
          ['多重图', 'multigraph', '允许重边'],
          ['度', 'degree $\\deg(v)$', '与 $v$ 相连的边数（自环算 2）'],
          ['子图', 'subgraph', '顶点与边都是原图的子集'],
          ['完全图', '$K_n$', '$n$ 个顶点、每对都相连，边数 $\\binom n2$'],
          ['二分图', 'bipartite graph', '顶点可分成两部分，边只跨部分'],
          ['同构', 'isomorphic', '存在保持邻接关系的双射']
        ]},
      { t: 'h', md: '二、握手定理与推论' },
      { t: 'p', md: '$\\displaystyle\\sum_{v\\in V}\\deg(v)=2|E|$' },
      { t: 'ul', items: [
        '度数和必为**偶数**；',
        '**奇度顶点的个数必为偶数**；',
        '**用途**：快速判定给定的度序列是否可实现。如 $(3,3,3)$ 不可能（和为 9，奇数）。'
      ]},
      { t: 'h', md: '三、路径、回路与连通性' },
      { t: 'ul', items: [
        '**通路**（walk）允许重复顶点与边；**路径**（path）不允许重复顶点；',
        '**回路**（circuit）起点终点相同；**圈**（cycle）除起终点外不重复顶点；',
        '**连通**（connected）：任意两顶点间有路径；',
        '**连通分量**（connected component）：极大的连通子图。'
      ]},
      { t: 'h', md: '四、割点与桥' },
      { t: 'ul', items: [
        '**割点**（cut vertex / articulation point）：删去后连通分量数**增加**的顶点；',
        '**桥**（bridge / cut edge）：删去后连通分量数增加的边；',
        '**用途**：网络可靠性分析 —— 割点/桥是网络的**单点故障**。'
      ]},
      { t: 'h', md: '五、二分图与匹配' },
      { t: 'p', md: '$G$ 是二分图 $\\iff$ **不含奇长度的圈**。' },
      { t: 'note', md: '**匹配**（matching）是不共享端点的边的集合；**完美匹配**（perfect matching）覆盖所有顶点。**Hall 婚姻定理**：二分图存在覆盖一侧所有顶点的匹配，当且仅当该侧任意 $k$ 个顶点都至少与另一侧的 $k$ 个顶点相邻。' },
      { t: 'h', md: '六、同构的判定' },
      { t: 'p', md: '两个图同构的**必要条件**（可用于排除）：顶点数相同、边数相同、**度序列相同**、连通分量数相同、含相同长度的圈。' },
      { t: 'warn', md: '**度序列相同不保证同构**。要证明同构需**构造**一个保持邻接的双射；要证明不同构，找任一不变量不同即可（度序列、圈结构、割点个数等）。' }
    ],
    terms: [
      ['graph', '图'], ['vertex / edge', '顶点 / 边'],
      ['simple graph / multigraph', '简单图 / 多重图'],
      ['degree', '度'], ['handshaking lemma', '握手定理'],
      ['subgraph', '子图'], ['complete graph', '完全图'],
      ['bipartite graph', '二分图'], ['isomorphic', '同构'],
      ['walk / path / circuit / cycle', '通路 / 路径 / 回路 / 圈'],
      ['connected component', '连通分量'],
      ['cut vertex / bridge', '割点 / 桥'],
      ['matching', '匹配'], ['Hall\'s marriage theorem', '霍尔婚姻定理']
    ]
  });

  /* ---------- D7 欧拉、哈密顿与最短路 ---------- */
  T.push({
    no: 'D7', title: '欧拉、哈密顿与最短路径', titleEn: 'Euler, Hamilton and Shortest Paths',
    tags: ['Euler', 'Hamilton', 'shortest path', 'Dijkstra', 'MST'],
    qids: ['cm-7-01', 'cm-7-02', 'cm-7-03', 'cm-7-04', 'cm-14-01'],
    blocks: [
      { t: 'p', md: '本讲处理「走遍全部边／全部顶点」以及「走最省力的一段路」这三类经典问题。' },
      { t: 'h', md: '一、欧拉通路与欧拉回路' },
      { t: 'tbl', head: ['类型', '英文', '充要条件（连通图）'],
        rows: [
          ['<b>欧拉回路</b>', 'Euler circuit', '<b>所有顶点度为偶数</b>'],
          ['<b>欧拉通路</b>（非回路）', 'Euler path', '<b>恰有 2 个奇度顶点</b>，且以它们为端点'],
          ['都不存在', '—', '奇度顶点个数 $\\ne0,2$']
        ]},
      { t: 'note', md: '**为什么**：欧拉通路「经过」一个顶点要用掉 2 条边（进 + 出）。只有起点可以「只出不进」、终点「只进不出」，故这两个点度为奇数。这是握手定理的直接推论。' },
      { t: 'warn', md: '**必须先验证连通性**。即使所有度为偶数，若图不连通（有孤立部分），也不存在欧拉回路。' },
      { t: 'h', md: '二、哈密顿路径与哈密顿回路' },
      { t: 'p', md: '**哈密顿路径**经过每个顶点**恰好一次**；**哈密顿回路**是闭合版本。' },
      { t: 'ul', items: [
        '与欧拉问题形成对照：欧拉管**边**（每条边一次），哈密顿管**点**（每个点一次）；',
        '**没有简洁的充要条件**！判定哈密顿回路是 **NP-完全**问题；',
        '**必要条件的排除法**：若某顶点度为 1，则它在哈密顿回路中的两条边无法凑齐 ⇒ 无哈密顿回路；',
        '**Dirac 定理**（充分条件）：$n\\ge3$ 且每个顶点度 $\\ge n/2$ ⇒ 必有哈密顿回路。'
      ]},
      { t: 'h', md: '三、带权图与最短路径' },
      { t: 'p', md: '**Dijkstra 算法**（非负权）与 **Bellman–Ford**（可含负权）用于单源最短路；**Floyd–Warshall** 求全源最短路。' },
      { t: 'ul', items: [
        'Dijkstra 是**贪心**：每轮取出当前距离最小的未确定顶点，**松弛**（relax）其邻居；',
        '**不能处理负权边**（会使已确定的距离失效）；',
        '朴素实现 $O(n^{2})$，用二叉堆 $O(e\\log n)$。'
      ]},
      { t: 'h', md: '四、最小生成树' },
      { t: 'tbl', head: ['算法', '策略', '注意'],
        rows: [
          ['<b>Kruskal</b>', '按边权<b>从小到大</b>，能加就加（不加出圈）', '需<b>并查集</b>判环'],
          ['<b>Prim</b>', '从一点出发，每次选连接「已选集」与「未选集」的<b>最小边</b>', '类似 Dijkstra']
        ]},
      { t: 'note', md: '**两者都基于贪心且都正确**（割性质 / 圈性质）。结果总权重相同（可能有多个不同的最小生成树）。若图有 $n$ 个顶点，MST 恰有 $n-1$ 条边。' },
      { t: 'h', md: '五、最大流最小割' },
      { t: 'p', md: '**最大流最小割定理**：网络中从源点到汇点的**最大流量**等于**最小割容量**。' },
      { t: 'ul', items: [
        '**割**（cut）：把顶点分成含源点与含汇点两部分的划分；',
        '**割容量**：所有从源侧指向汇侧的边容量之和（反向边不计）；',
        '求最大流可用 **Ford–Fulkerson** 增广路方法或 **Dinic** 算法。'
      ]}
    ],
    terms: [
      ['Euler circuit / path', '欧拉回路 / 通路'],
      ['Hamiltonian path / cycle', '哈密顿路径 / 回路'],
      ['Dirac\'s theorem', '狄拉克定理'],
      ['weighted graph', '带权图'],
      ['shortest path', '最短路径'],
      ['Dijkstra\'s algorithm', '迪杰斯特拉算法'],
      ['relaxation', '松弛'], ['greedy', '贪心'],
      ['minimum spanning tree', '最小生成树'],
      ['Kruskal / Prim', '克鲁斯卡尔 / 普里姆算法'],
      ['union-find', '并查集'],
      ['max-flow min-cut theorem', '最大流最小割定理'],
      ['augmenting path', '增广路'], ['cut capacity', '割容量']
    ]
  });

  /* ---------- D8 树、布尔代数与真题 ---------- */
  T.push({
    no: 'D8', title: '树、Huffman 与布尔代数', titleEn: 'Trees, Huffman Coding and Boolean Algebra',
    tags: ['tree', 'traversal', 'Huffman', 'Boolean', 'logic circuit'],
    qids: ['cm-9-01', 'cm-10-01', 'cm-10-02', 'cm-10-04', 'cm-11-01', 'cm-11-02', 'cm-14-02', 'cm-14-04'],
    blocks: [
      { t: 'p', md: '树是**无圈的连通图**，布尔代数是**逻辑运算的代数**。二者是离散数学通向实际应用的两座桥。' },
      { t: 'h', md: '一、树的基本性质' },
      { t: 'p', md: '$n$ 个顶点的树满足（下列各条**互相等价**）：' },
      { t: 'ul', items: [
        '连通且无圈；',
        '恰有 $n-1$ 条边；',
        '任意两点间**恰有一条**路径；',
        '删去任一条边后**不连通**（每条边都是桥）；',
        '添上任一条新边必**产生唯一的圈**。'
      ]},
      { t: 'h', md: '二、二叉树与三种遍历' },
      { t: 'tbl', head: ['遍历', '英文', '顺序'],
        rows: [
          ['前序', 'preorder', '<b>根 → 左 → 右</b>'],
          ['中序', 'inorder', '<b>左 → 根 → 右</b>'],
          ['后序', 'postorder', '<b>左 → 右 → 根</b>']
        ]},
      { t: 'note', md: '**BST 的关键性质**：**中序遍历必为升序**。因此「给定 BST 求中序」就是在考排序；反之若中序升序，则可判定它是 BST。' },
      { t: 'h', md: '三、Huffman 编码' },
      { t: 'ol', items: [
        '把每个符号当作权重为其频率的树；',
        '每次取出**权重最小**的两棵树，合并成一棵新树（权重为两者之和）；',
        '重复直到只剩一棵；',
        '**左分支标 0、右分支标 1**，从根到叶的路径即该符号的码字。'
      ]},
      { t: 'p', md: '**加权路径长度** $\\text{WPL}=\\sum_i f_i\\ell_i$（频率 × 码长），Huffman 保证 WPL 最小。' },
      { t: 'ul', items: [
        '频率越高 → 码长越短（贪心的直观体现）；',
        '**前缀性质**（prefix property）：没有任何码字是另一个的前缀，故解码无歧义；',
        '平均码长 $=\\text{WPL}/\\sum f_i$。'
      ]},
      { t: 'h', md: '四、布尔代数' },
      { t: 'p', md: '变量只取 0/1，运算为 AND（$\\cdot$）、OR（$+$）、NOT（$\\overline{\\ }$）。' },
      { t: 'tbl', head: ['定律', '形式'],
        rows: [
          ['交换律', '$x+y=y+x$，$xy=yx$'],
          ['结合律', '$(x+y)+z=x+(y+z)$'],
          ['分配律', '$x(y+z)=xy+xz$'],
          ['同一律', '$x+0=x$，$x\\cdot1=x$'],
          ['互补律', '$x+\\overline x=1$，$x\\overline x=0$'],
          ['<b>德摩根律</b>', '$\\overline{x+y}=\\overline x\\,\\overline y$，$\\overline{xy}=\\overline x+\\overline y$'],
          ['吸收律', '$x+xy=x$']
        ]},
      { t: 'note', md: '**德摩根律是化简逻辑表达式的核心工具**：「整体取反」要把 AND 与 OR **互换**。记忆：**「反穿括号，与或互换」**。' },
      { t: 'h', md: '五、逻辑电路对应' },
      { t: 'tbl', head: ['逻辑运算', '门电路', '符号'],
        rows: [
          ['NOT', '非门 inverter', '三角 + 小圆'],
          ['AND', '与门', 'D 形'],
          ['OR', '或门', '弧形'],
          ['NAND', '与非门', '与门 + 小圆'],
          ['XOR', '异或门', '或门 + 双弧线']
        ]},
      { t: 'p', md: '**功能完备性**（functional completeness）：NAND 与 NOR **各自单独**就能实现所有逻辑函数 —— 这是集成电路制造偏爱 NAND 的原因。' }
    ],
    terms: [
      ['tree', '树'], ['root / leaf', '根 / 叶'],
      ['binary tree', '二叉树'], ['preorder / inorder / postorder', '前序 / 中序 / 后序'],
      ['binary search tree', '二叉搜索树'],
      ['spanning tree', '生成树'],
      ['Huffman coding', '哈夫曼编码'],
      ['weighted path length (WPL)', '加权路径长度'],
      ['prefix property', '前缀性质'],
      ['Boolean algebra', '布尔代数'],
      ['De Morgan\'s laws', '德摩根律'],
      ['logic gate', '逻辑门'],
      ['functional completeness', '功能完备性']
    ]
  });

  FCMS.registerNotes({ subjectId: 'COMP2012', topics: T });
})(typeof window !== 'undefined' ? window : globalThis);
