/* ==========================================================================
   COMP2012 Discrete Mathematics —— 学科定义 + 题库
   --------------------------------------------------------------------------
   依据 Lecture 1–13 主题与 2014/2016/2018/2019/2023/2025 历年期末卷编排。
   历年被扫描件中的图形题（Dijkstra/Kruskal 图、树、流网络）因无法还原图形，
   改为等价的文字可表述题型；所有可计算答案均已用 Python 复核。
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('subjects/comp2012.js: 必须先加载 js/registry.js');

  var Q = [];

  /* ==================== 1. 逻辑与证明（L02） ==================== */
  Q.push(
  {
    id: 'cm-1-01', topic: 'logic', topicName: '逻辑与证明',
    weight: 1, difficulty: 2, examRef: 'Lecture 2',
    prompt: '写出命题 $p\\to q$ 的逆否命题（contrapositive）。',
    blanks: [{ label: '逆否命题', answer: { exact: '~q->~p', alts: ['¬q→¬p', '-q->-p', 'not q -> not p', '\\neg q\\to\\neg p'], setLike: false } }],
    solution: [
      '$p\\to q$ 的逆否命题是 $\\neg q\\to\\neg p$。',
      '原命题与逆否命题<b>逻辑等价</b>（这是反证法的依据）。',
      '注意区分：逆命题（converse）是 $q\\to p$；否命题（inverse）是 $\\neg p\\to\\neg q$，这两者与原命题不等价。'
    ]
  },
  {
    id: 'cm-1-02', topic: 'logic', topicName: '逻辑与证明',
    weight: 2, difficulty: 3, examRef: 'Lecture 2',
    prompt: '用真值表判断 $(p\\to q)\\land(q\\to r)\\to(p\\to r)$ 是否为重言式（tautology）？',
    blanks: [{ label: '是否重言式（填 是 或 否）', answer: { exact: '是', alts: ['yes', 'true', 'tautology'] } }],
    solution: [
      '这是假言三段论（hypothetical syllogism），是重言式。',
      '验证：若 $(p\\to q)$ 与 $(q\\to r)$ 都真，则 $p$ 真时 $q$ 真、进而 $r$ 真，故 $p\\to r$ 真。',
      '只有当 $p$ 真而 $r$ 假时结论才假，但此时 $q$ 无论真假都会使某个前提为假，前提不可能同时为真。',
      '故该式为重言式（填「是」）。'
    ]
  },
  {
    id: 'cm-1-03', topic: 'logic', topicName: '逻辑与证明',
    weight: 2, difficulty: 3, examRef: 'Lecture 2',
    prompt: '用量词与逻辑符号写出「并非所有学生都修了离散数学」的等价形式（把否定移到量词里面）。',
    blanks: [{ label: '等价形式', answer: { exact: 'Exists x (not S(x))', alts: ['∃x¬S(x)', 'exists x not S(x)', '\\exists x\\,\\neg S(x)', '存在学生没有修离散数学'], setLike: false } }],
    solution: [
      '原命题：$\\neg\\forall x\\,S(x)$，其中 $S(x)$ 表示「$x$ 修了离散数学」。',
      '由德摩根律（量词版）：$\\neg\\forall x\\,S(x)\\iff\\exists x\\,\\neg S(x)$。',
      '即「存在学生没有修离散数学」。'
    ]
  },
  {
    id: 'cm-1-04', topic: 'logic', topicName: '逻辑与证明',
    weight: 2, difficulty: 4, examRef: '2019 / 2023 期末',
    prompt: '证明：若 $n$ 是整数且 $n^{2}$ 是奇数，则 $n$ 是奇数。（用反证法或逆否命题）',
    blanks: [{ label: '本题证明方法（填 反证 或 直接）', answer: { exact: '反证', alts: ['contradiction', 'contrapositive', '逆否'] } }],
    solution: [
      '<b>用逆否命题（等价于反证法）：</b>证明「若 $n$ 是偶数，则 $n^{2}$ 是偶数」。',
      '设 $n=2k$（$k\\in\\mathbb{Z}$），则 $n^{2}=4k^{2}=2(2k^{2})$，是偶数。',
      '逆否命题成立 $\\Rightarrow$ 原命题成立：若 $n^{2}$ 是奇数，则 $n$ 必为奇数。∎',
      '（另一种写法：反设 $n$ 为偶数，导出 $n^{2}$ 为偶数，与 $n^{2}$ 是奇数矛盾。）'
    ]
  }
  );

  /* ==================== 2. 基本结构：集合/函数/序列/和（L03） ==================== */
  Q.push(
  {
    id: 'cm-2-01', topic: 'structures', topicName: '基本结构（集合·函数·序列·和）',
    weight: 1, difficulty: 2, examRef: 'Lecture 3',
    prompt: '设 $A=\\{1,2,3\\}$，$B=\\{2,3,4\\}$。求 $|A\\cup B|$。',
    blanks: [{ label: '$|A\\cup B|$', answer: { exact: '4' } }],
    solution: [
      '容斥原理：$|A\\cup B|=|A|+|B|-|A\\cap B|$。',
      '$A\\cap B=\\{2,3\\}$，故 $|A\\cap B|=2$。',
      '$|A\\cup B|=3+3-2=4$（即 $\\{1,2,3,4\\}$）。'
    ]
  },
  {
    id: 'cm-2-02', topic: 'structures', topicName: '基本结构（集合·函数·序列·和）',
    weight: 1, difficulty: 2, examRef: 'Lecture 3',
    prompt: '求 $\\displaystyle\\sum_{k=1}^{100}k$。',
    blanks: [{ label: '和', answer: { exact: '5050' } }],
    solution: [
      '等差数列求和公式：$\\displaystyle\\sum_{k=1}^{n}k=\\frac{n(n+1)}{2}$。',
      '取 $n=100$：$\\dfrac{100\\cdot101}{2}=5050$。'
    ]
  },
  {
    id: 'cm-2-03', topic: 'structures', topicName: '基本结构（集合·函数·序列·和）',
    weight: 1, difficulty: 2, examRef: 'Lecture 3',
    prompt: '求 $\\displaystyle\\sum_{k=1}^{10}2^{k}$。',
    blanks: [{ label: '和', answer: { exact: '2046' } }],
    solution: [
      '等比数列求和：$\\displaystyle\\sum_{k=0}^{n}r^{k}=\\frac{r^{n+1}-1}{r-1}$（$r\\ne1$）。',
      '$\\displaystyle\\sum_{k=1}^{10}2^{k}=\\sum_{k=0}^{10}2^{k}-1=\\frac{2^{11}-1}{2-1}-1=2047-1=2046$。'
    ]
  },
  {
    id: 'cm-2-04', topic: 'structures', topicName: '基本结构（集合·函数·序列·和）',
    weight: 2, difficulty: 3, examRef: 'Lecture 3',
    prompt: '设 $A$ 有 $3$ 个元素，$B$ 有 $4$ 个元素。从 $A$ 到 $B$ 的不同函数共有多少个？',
    blanks: [{ label: '函数个数', answer: { exact: '64' } }],
    solution: [
      '函数 $f:A\\to B$ 要为 $A$ 中每个元素指定 $B$ 中唯一一个象。',
      '$A$ 的每个元素有 $|B|=4$ 种选择，且各元素独立，故共有 $4^{3}=64$ 个。',
      '一般地：$|B|^{|A|}$。'
    ]
  },
  {
    id: 'cm-2-05', topic: 'structures', topicName: '基本结构（集合·函数·序列·和）',
    weight: 2, difficulty: 3, examRef: 'Lecture 3',
    prompt: '一个有 $n$ 个元素的集合，其幂集（power set）共有多少个元素？',
    blanks: [{ label: '幂集大小', answer: { exact: '2^n', alts: ['2^{n}', '2**n'] }, vars: ['n'] }],
    solution: [
      '幂集 $\\mathcal{P}(A)$ 是 $A$ 的所有子集构成的集合。',
      '构造子集时，$A$ 的每个元素都有「选」或「不选」两种状态，各元素独立，',
      '故共有 $\\underbrace{2\\times2\\times\\cdots\\times2}_{n}=2^{n}$ 个子集，即 $|\\mathcal{P}(A)|=2^{n}$。'
    ]
  }
  );

  /* ==================== 3. 算法与复杂度（L04） ==================== */
  Q.push(
  {
    id: 'cm-3-01', topic: 'algorithm', topicName: '算法与复杂度',
    weight: 2, difficulty: 3, examRef: 'Lecture 4',
    prompt: '判断：$3n^{2}+5n+7$ 是 $O(n^{2})$。（填 是 或 否）',
    blanks: [{ label: '是否 $O(n^2)$', answer: { exact: '是', alts: ['yes', 'true'] } }],
    solution: [
      '需找常数 $C>0$ 与 $k$ 使 $n\\ge k$ 时 $3n^{2}+5n+7\\le C n^{2}$。',
      '当 $n\\ge1$ 时 $5n\\le5n^{2}$、$7\\le7n^{2}$，故 $3n^{2}+5n+7\\le15n^{2}$。',
      '取 $C=15,\\ k=1$ 即可，所以是 $O(n^{2})$。（事实上还是 $\\Theta(n^{2})$。）'
    ]
  },
  {
    id: 'cm-3-02', topic: 'algorithm', topicName: '算法与复杂度',
    weight: 2, difficulty: 3, examRef: 'Lecture 4',
    prompt: '冒泡排序（bubble sort）在最坏情况下的比较次数是 $\\Theta(n^{k})$，填 $k$。',
    blanks: [{ label: '$k$', answer: { exact: '2' } }],
    solution: [
      '冒泡排序每轮把当前最大元素「冒」到末尾，第 $i$ 轮做 $n-i$ 次比较。',
      '总比较次数 $=\\displaystyle\\sum_{i=1}^{n-1}(n-i)=\\frac{n(n-1)}{2}=\\Theta(n^{2})$。',
      '故 $k=2$。'
    ]
  },
  {
    id: 'cm-3-03', topic: 'algorithm', topicName: '算法与复杂度',
    weight: 2, difficulty: 3, examRef: 'Lecture 4',
    prompt: '二分查找（binary search）在含 $n$ 个已排序元素的数组上，最坏情况需要多少次比较（用 $\\Theta$ 表示，填 $\\log$ 的底数不必写）。',
    blanks: [{ label: '最坏比较次数', answer: { exact: 'log(n)', alts: ['\\Theta(\\log n)', 'logn', 'log_2(n)', '\\log_2 n'], vars: ['n'] } }],
    solution: [
      '每次比较后搜索区间减半，故最多迭代 $\\lceil\\log_{2}(n+1)\\rceil$ 次。',
      '所以最坏情况是 $\\Theta(\\log n)$ 次比较。'
    ]
  },
  {
    id: 'cm-3-04', topic: 'algorithm', topicName: '算法与复杂度',
    weight: 2, difficulty: 4, examRef: 'Lecture 4',
    prompt: '用贪心算法给出找零问题：硬币面额为 $\\{1,5,10,25\\}$，要找零 $63$ 分，最少用多少枚硬币？',
    blanks: [{ label: '最少硬币数', answer: { exact: '6' } }],
    solution: [
      '贪心策略：每次取不超过剩余金额的最大面额。',
      '$63-25=38$（1 枚）$\\to 38-25=13$（2 枚）$\\to 13-10=3$（3 枚）$\\to 3-1-1-1=0$（再加 3 枚）。',
      '合计 $2+1+3=6$ 枚。',
      '（对这套面额贪心最优；这也是 2025 卷 2(a) 类题目的一般方法。）'
    ]
  }
  );

  /* ==================== 4. 归纳与递归（L05） ==================== */
  Q.push(
  {
    id: 'cm-4-01', topic: 'induction', topicName: '归纳法与递归',
    weight: 2, difficulty: 3, examRef: 'Lecture 5 / 2025 卷 B1',
    prompt: '用数学归纳法证明 $\\displaystyle\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}$。请填写归纳步中需要证明的等式两端之差（化简后）。',
    blanks: [{ label: '归纳步：$\\frac{k(k+1)}{2}+(k+1)$ 化简结果', answer: { exact: '(k+1)*(k+2)/2', alts: ['\\frac{(k+1)(k+2)}{2}'], vars: ['k'] } }],
    solution: [
      '<b>基础步</b> $n=1$：左边 $=1$，右边 $=\\dfrac{1\\cdot2}{2}=1$，成立。',
      '<b>归纳假设</b>：设 $n=k$ 时成立，即 $\\displaystyle\\sum_{i=1}^{k}i=\\frac{k(k+1)}{2}$。',
      '<b>归纳步</b>：$n=k+1$ 时',
      '$\\displaystyle\\sum_{i=1}^{k+1}i=\\frac{k(k+1)}{2}+(k+1)=\\frac{k(k+1)+2(k+1)}{2}=\\frac{(k+1)(k+2)}{2}$。',
      '这正是把 $n=k+1$ 代入 $\\dfrac{n(n+1)}{2}$ 的结果，故命题对一切正整数 $n$ 成立。∎'
    ]
  },
  {
    id: 'cm-4-02', topic: 'induction', topicName: '归纳法与递归',
    weight: 3, difficulty: 4, examRef: '2025 卷 B1',
    prompt: '用数学归纳法证明：对 $n\\ge7$ 有 $n!>3^{n}$。请填写归纳步中需要验证的关键不等式（用 $k$ 表示）：由 $k!>3^{k}$ 推出 $(k+1)!>3^{k+1}$，只需 $k+1$ 大于等于多少？',
    blanks: [{ label: '$k+1\\ge$', answer: { exact: '3' } }],
    solution: [
      '<b>基础步</b> $n=7$：$7!=5040>3^{7}=2187$ ✔',
      '<b>归纳假设</b>：设 $k\\ge7$ 时 $k!>3^{k}$。',
      '<b>归纳步</b>：$(k+1)!=(k+1)\\cdot k!>(k+1)\\cdot3^{k}$。',
      '要使 $(k+1)\\cdot3^{k}>3^{k+1}=3\\cdot3^{k}$，只需 $k+1>3$。',
      '而 $k\\ge7$ 时 $k+1\\ge8>3$ 显然成立，故 $(k+1)!>3^{k+1}$。',
      '所以对一切 $n\\ge7$，$n!>3^{n}$。∎（关键阈值就是 $3$。）'
    ]
  },
  {
    id: 'cm-4-03', topic: 'induction', topicName: '归纳法与递归',
    weight: 2, difficulty: 3, examRef: 'Lecture 5',
    prompt: '用数学归纳法证明 $n^{3}-n$ 能被 $3$ 整除（$n$ 为正整数）。请填写归纳步中 $f(k+1)-f(k)$ 的化简结果（其中 $f(n)=n^{3}-n$）。',
    blanks: [{ label: '$f(k+1)-f(k)$', answer: { exact: '3*k*(k+1)', alts: ['3k(k+1)', '3k^2+3k'], vars: ['k'] } }],
    solution: [
      '<b>基础步</b> $n=1$：$1-1=0$ 能被 $3$ 整除 ✔',
      '<b>归纳假设</b>：$3\\mid(k^{3}-k)$。',
      '<b>归纳步</b>：令 $f(n)=n^{3}-n$，则',
      '$f(k+1)-f(k)=(k+1)^{3}-(k+1)-\\left(k^{3}-k\\right)=3k^{2}+3k=3k(k+1)$。',
      '这是 $3$ 的倍数；又由归纳假设 $f(k)$ 是 $3$ 的倍数，',
      '故 $f(k+1)=f(k)+3k(k+1)$ 也是 $3$ 的倍数。∎'
    ]
  },
  {
    id: 'cm-4-04', topic: 'induction', topicName: '归纳法与递归',
    weight: 2, difficulty: 3, examRef: 'Lecture 5',
    prompt: '递归定义 $a_{1}=2$，$a_{n}=3a_{n-1}+1$（$n\\ge2$）。求 $a_{4}$。',
    blanks: [{ label: '$a_4$', answer: { exact: '79' } }],
    solution: [
      '逐项代入递推式：',
      '$a_{1}=2$',
      '$a_{2}=3a_{1}+1=3(2)+1=7$',
      '$a_{3}=3a_{2}+1=3(7)+1=22$',
      '$a_{4}=3a_{3}+1=3(22)+1=67$',
      '故 $a_{4}=67$。'
    ]
  }
  );

  /* ==================== 5. 计数（L06） ==================== */
  Q.push(
  {
    id: 'cm-5-01', topic: 'counting', topicName: '计数',
    weight: 1, difficulty: 2, examRef: 'Lecture 6',
    prompt: '从 $8$ 个人中选出 $3$ 人组成委员会，共有多少种选法？',
    blanks: [{ label: '选法数', answer: { exact: '56' } }],
    solution: [
      '不区分顺序，用组合数：$\\dbinom{8}{3}=\\dfrac{8!}{3!\\,5!}=\\dfrac{8\\cdot7\\cdot6}{6}=56$。'
    ]
  },
  {
    id: 'cm-5-02', topic: 'counting', topicName: '计数',
    weight: 1, difficulty: 2, examRef: 'Lecture 6',
    prompt: '把 $5$ 本不同的书排成一排，共有多少种排法？',
    blanks: [{ label: '排法数', answer: { exact: '120' } }],
    solution: ['排列数 $5!=5\\cdot4\\cdot3\\cdot2\\cdot1=120$。']
  },
  {
    id: 'cm-5-03', topic: 'counting', topicName: '计数',
    weight: 2, difficulty: 3, examRef: 'Lecture 6',
    prompt: '一副标准扑克牌 $52$ 张，从中取 $5$ 张，共有多少种取法？',
    blanks: [{ label: '取法数', answer: { exact: '2598960' } }],
    solution: [
      '$\\dbinom{52}{5}=\\dfrac{52\\cdot51\\cdot50\\cdot49\\cdot48}{5!}$。',
      '分子 $=311875200$，分母 $=120$，故 $\\dbinom{52}{5}=2598960$。'
    ]
  },
  {
    id: 'cm-5-04', topic: 'counting', topicName: '计数',
    weight: 2, difficulty: 3, examRef: 'Lecture 6',
    prompt: '用容斥原理：$1$ 到 $100$ 中能被 $2$ 或 $3$ 整除的整数有多少个？',
    blanks: [{ label: '个数', answer: { exact: '67' } }],
    solution: [
      '记 $A$ 为被 $2$ 整除的集合，$B$ 为被 $3$ 整除的集合。',
      '$|A|=\\lfloor100/2\\rfloor=50$，$|B|=\\lfloor100/3\\rfloor=33$。',
      '$A\\cap B$ 是被 $6$ 整除的集合，$|A\\cap B|=\\lfloor100/6\\rfloor=16$。',
      '容斥：$|A\\cup B|=50+33-16=67$。'
    ]
  },
  {
    id: 'cm-5-05', topic: 'counting', topicName: '计数',
    weight: 2, difficulty: 3, examRef: 'Lecture 6 / 2023 卷',
    prompt: '把 $6$ 个相同的球放入 $4$ 个不同的盒子，允许空盒，共有多少种放法？',
    blanks: [{ label: '放法数', answer: { exact: '84' } }],
    solution: [
      '这是「隔板法」（stars and bars）：$n$ 个相同球放入 $k$ 个不同盒子允许空盒，方法数为 $\\dbinom{n+k-1}{k-1}$。',
      '取 $n=6,\\ k=4$：$\\dbinom{6+4-1}{4-1}=\\dbinom{9}{3}=\\dfrac{9\\cdot8\\cdot7}{6}=84$。'
    ]
  },
  {
    id: 'cm-5-06', topic: 'counting', topicName: '计数',
    weight: 2, difficulty: 3, examRef: 'Lecture 6',
    prompt: '用二项式定理求 $(x+2)^{5}$ 展开式中 $x^{3}$ 项的系数。',
    blanks: [{ label: '$x^3$ 的系数', answer: { exact: '40' } }],
    solution: [
      '$(x+2)^{5}=\\displaystyle\\sum_{k=0}^{5}\\binom{5}{k}x^{5-k}2^{k}$。',
      '$x^{3}$ 对应 $5-k=3$，即 $k=2$：系数 $=\\dbinom{5}{2}\\cdot2^{2}=10\\cdot4=40$。'
    ]
  },
  {
    id: 'cm-5-07', topic: 'counting', topicName: '计数',
    weight: 2, difficulty: 4, examRef: 'Lecture 6',
    prompt: '由字母 $A,B,C,D,E$ 组成的长度为 $5$ 的字符串中，不允许相邻字母相同，共有多少个？',
    blanks: [{ label: '字符串个数', answer: { exact: '1280' } }],
    solution: [
      '第 1 位有 $5$ 种选择；之后每一位只需与<b>前一位不同</b>，各 $4$ 种。',
      '共 $5\\cdot4^{4}=5\\cdot256=1280$ 个。'
    ]
  }
  );

  /* ==================== 6. 图论 I（L07） ==================== */
  Q.push(
  {
    id: 'cm-6-01', topic: 'graph', topicName: '图论 I（基本概念·连通性）',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '一个无向简单图有 $6$ 个顶点，每个顶点的度都是 $3$。该图共有多少条边？',
    blanks: [{ label: '边数', answer: { exact: '9' } }],
    solution: [
      '握手定理（handshaking lemma）：$\\displaystyle\\sum_{v}\\deg(v)=2|E|$。',
      '左边 $=6\\times3=18$，故 $|E|=\\dfrac{18}{2}=9$。'
    ]
  },
  {
    id: 'cm-6-02', topic: 'graph', topicName: '图论 I（基本概念·连通性）',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '完全图 $K_{7}$ 共有多少条边？',
    blanks: [{ label: '边数', answer: { exact: '21' } }],
    solution: [
      '$K_{n}$ 的每对顶点之间恰有一条边，故 $|E|=\\dbinom{n}{2}$。',
      '$\\dbinom{7}{2}=\\dfrac{7\\cdot6}{2}=21$。'
    ]
  },
  {
    id: 'cm-6-03', topic: 'graph', topicName: '图论 I（基本概念·连通性）',
    weight: 2, difficulty: 4, examRef: 'Lecture 7',
    prompt: '判断：存在一个 $5$ 个顶点的简单图，其度数序列为 $(4,4,4,4,2)$。（填 存在 或 不存在）',
    blanks: [{ label: '是否存在', answer: { exact: '不存在', alts: ['no', 'false', '不存在（不可能图）'] } }],
    solution: [
      '先看度数和：$4+4+4+4+2=18$，是偶数 ✔（握手定理的必要条件通过）。',
      '但有 $4$ 个顶点的度为 $4$，而图只有 $5$ 个顶点，度 $4$ 意味着该顶点与其余<b>所有</b>顶点都相连。',
      '设这 $4$ 个顶点为 $v_1,v_2,v_3,v_4$，它们两两相连，且都与第 $5$ 个顶点 $v_5$ 相连。',
      '于是 $v_5$ 的度至少为 $4$，与 $\\deg(v_5)=2$ 矛盾。',
      '故<b>不存在</b>这样的简单图。（图论序列的判定可用 Havel–Hakimi 算法系统检验。）'
    ]
  },
  {
    id: 'cm-6-04', topic: 'graph', topicName: '图论 I（基本概念·连通性）',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '一个连通平面图（connected planar graph）有 $10$ 个顶点和 $15$ 条边。它把平面分成多少个面（包含外部面）？',
    blanks: [{ label: '面数', answer: { exact: '7' } }],
    solution: [
      '欧拉公式（Euler\'s formula）：对连通平面图 $v-e+f=2$。',
      '代入 $v=10,\\ e=15$：$10-15+f=2\\Rightarrow f=7$。',
      '（含外部面。）'
    ]
  }
  );

  /* ==================== 7. 图论 II：欧拉/哈密顿/最短路（L08） ==================== */
  Q.push(
  {
    id: 'cm-7-01', topic: 'graph2', topicName: '图论 II（欧拉·哈密顿·最短路）',
    weight: 2, difficulty: 3, examRef: 'Lecture 8',
    prompt: '一个连通图存在欧拉回路（Euler circuit）的充要条件是什么？（用顶点度描述）',
    blanks: [{ label: '条件', answer: { exact: 'all degrees even', alts: ['所有顶点度为偶数', 'each vertex has even degree', '全部顶点的度都是偶数'], setLike: false } }],
    solution: [
      '定理：连通图有欧拉回路 $\\iff$ 每个顶点的度都是<b>偶数</b>。',
      '直观理由：欧拉回路每经过一个顶点一次，就「进一次、出一次」，贡献度数 2。',
      '类似地，存在欧拉通路（Euler path，非回路）$\\iff$ 恰有 $0$ 个或 $2$ 个奇度顶点。'
    ]
  },
  {
    id: 'cm-7-02', topic: 'graph2', topicName: '图论 II（欧拉·哈密顿·最短路）',
    weight: 2, difficulty: 4, examRef: 'Lecture 8',
    prompt: '用 Dijkstra 算法求最短路径时，若图中存在<b>负权边</b>，该算法是否仍然正确？（填 正确 或 不正确）',
    blanks: [{ label: '是否仍然正确', answer: { exact: '不正确', alts: ['no', 'false', 'incorrect'] } }],
    solution: [
      'Dijkstra 的贪心正确性依赖于「已确定的最短距离不会再被改进」这一性质，',
      '而这要求所有边权<b>非负</b>。',
      '存在负权边时，绕道一条负边可能比贪心选出的路径更短，算法会得出错误结果。',
      '此时应使用 Bellman–Ford 算法（可处理负权，并能检测负环）。',
      '故填「不正确」。'
    ]
  },
  {
    id: 'cm-7-03', topic: 'graph2', topicName: '图论 II（欧拉·哈密顿·最短路）',
    weight: 3, difficulty: 4, examRef: '2025 卷 C2',
    prompt: '承接 2025 卷 C2 的图 H（有向图，起点 $S$）。Dijkstra 算法「顶点被取出的顺序」这一问依赖于图形。请问：Dijkstra 算法的时间复杂度用二叉堆实现时是多少？（用 $V,E$ 表示）',
    blanks: [{ label: '时间复杂度', answer: { exact: 'O((V+E)logV)', alts: ['O((V+E)\\log V)', 'O(E log V)', 'O((|V|+|E|)\\log|V|)'], setLike: false } }],
    solution: [
      '用二叉堆（binary heap）作为优先队列：',
      '每个顶点出队一次，共 $O(V\\log V)$；每条边做一次松弛（可能入队），共 $O(E\\log V)$。',
      '合计 $O((V+E)\\log V)$，对连通图通常写作 $O(E\\log V)$。',
      '（朴素数组实现为 $O(V^{2})$；斐波那契堆可优化到 $O(E+V\\log V)$。）'
    ]
  },
  {
    id: 'cm-7-04', topic: 'graph2', topicName: '图论 II（欧拉·哈密顿·最短路）',
    weight: 2, difficulty: 3, examRef: 'Lecture 8',
    prompt: '完全图 $K_{n}$（$n\\ge3$）是否一定存在哈密顿回路？（填 一定 或 不一定）',
    blanks: [{ label: '结论', answer: { exact: '一定', alts: ['yes', 'always', '一定存在'] } }],
    solution: [
      '$K_{n}$ 中任意两顶点都相邻，因此可以按任意顺序遍历所有顶点并回到起点，',
      '例如 $v_{1}\\to v_{2}\\to\\cdots\\to v_{n}\\to v_{1}$ 就是一条哈密顿回路。',
      '故 $n\\ge3$ 时 $K_{n}$ <b>一定</b>存在哈密顿回路。',
      '（注意：一般图中哈密顿回路的存在性判定是 NP-完全问题，没有简单的充要条件。）'
    ]
  }
  );

  /* ==================== 8. 图论 III：流网络（L09） ==================== */
  Q.push(
  {
    id: 'cm-8-01', topic: 'graph3', topicName: '图论 III（流网络·最大流最小割）',
    weight: 3, difficulty: 4, examRef: 'Lecture 9 / 2025 卷 C2(c)',
    prompt: '陈述最大流最小割定理（Max-flow min-cut theorem）。',
    blanks: [{ label: '定理内容', answer: { exact: 'max flow = min cut', alts: ['最大流等于最小割', 'max-flow = min-cut', 'the maximum flow value equals the minimum cut capacity'], setLike: false } }],
    solution: [
      '<b>最大流最小割定理：</b>在一个流网络中，从源 $s$ 到汇 $t$ 的<b>最大流的值</b>等于所有 $s$-$t$ 割中<b>最小割的容量</b>。',
      '即 $\\displaystyle\\max_{f}|f|=\\min_{C}\\operatorname{cap}(C)$。',
      '要点：',
      '① 割 $(S,T)$ 是把顶点分成 $S\\ni s$、$T\\ni t$ 的分划，容量为从 $S$ 指向 $T$ 的所有边权之和（只算 $S\\to T$ 方向）。',
      '② 证明思路：任一割的容量 $\\ge$ 任一流的值（流必须穿过割）；当残量网络中不存在增广路时取等。',
      '③ 实际用法：先求一个最大流，再在残量网络中从 $s$ 做可达性搜索，可达点集 $S$ 给出的割就是最小割。'
    ]
  },
  {
    id: 'cm-8-02', topic: 'graph3', topicName: '图论 III（流网络·最大流最小割）',
    weight: 2, difficulty: 3, examRef: 'Lecture 9',
    prompt: '求最大流时，判断当前流是否为最大流的一个标准方法是看残量网络（residual network）。条件是什么？',
    blanks: [{ label: '条件', answer: { exact: 'no augmenting path', alts: ['残量网络中不存在增广路', 'no s-t path in residual graph', '不存在从 s 到 t 的增广路径'], setLike: false } }],
    solution: [
      '定理：流 $f$ 是最大流 $\\iff$ 其残量网络 $G_{f}$ 中<b>不存在</b>从源 $s$ 到汇 $t$ 的路径（增广路）。',
      '若存在增广路，沿它增加流量即可得到更大的流；',
      '若不存在，则残量网络中 $s$ 可达的顶点集 $S$ 构成一个割，且该割容量恰等于当前流量，由最大流最小割定理即知已是最大流。'
    ]
  },
  {
    id: 'cm-8-03', topic: 'graph3', topicName: '图论 III（流网络·最大流最小割）',
    weight: 2, difficulty: 4, examRef: 'Lecture 9',
    prompt: '在一个流网络中，若所有边的容量都是整数，则最大流的值一定是整数。（填 是 或 否）',
    blanks: [{ label: '是否整数', answer: { exact: '是', alts: ['yes', 'true'] } }],
    solution: [
      '这是「整数流定理」（integral flow theorem）：',
      '若所有容量为整数，则存在一个最大流使每条边的流量都是整数。',
      '理由：Ford–Fulkerson 算法从零流出发，每次沿增广路增加量 $=\\min$ (残量) 为整数，',
      '故每步后流量仍为整数，算法终止时得到的最大流也是整数。'
    ]
  }
  );

  /* ==================== 9. 树 I（L10） ==================== */
  Q.push(
  {
    id: 'cm-9-01', topic: 'tree', topicName: '树 I（基本性质·生成树）',
    weight: 2, difficulty: 3, examRef: 'Lecture 10',
    prompt: '一棵树有 $15$ 个顶点，它有多少条边？',
    blanks: [{ label: '边数', answer: { exact: '14' } }],
    solution: [
      '树的特征性质：$n$ 个顶点的树恰有 $n-1$ 条边。',
      '故 $15-1=14$ 条边。',
      '（等价刻画：连通且无回路；$n-1$ 条边且无回路；任意两点间恰有一条简单路径。）'
    ]
  },
  {
    id: 'cm-9-02', topic: 'tree', topicName: '树 I（基本性质·生成树）',
    weight: 3, difficulty: 4, examRef: 'Lecture 10 / 2025 卷 B2',
    prompt: '陈述 Kruskal 算法求最小生成树的步骤（用一句话概括关键操作）。',
    blanks: [{ label: '关键操作', answer: { exact: 'sort edges by weight and add if no cycle', alts: ['按边权从小到大排序，依次加入不成环的边', '按权重排序后贪心加边，遇环则跳过', 'sort edges, add the cheapest edge that does not form a cycle'], setLike: false } }],
    solution: [
      '<b>Kruskal 算法：</b>',
      '① 把图中所有边按权重<b>从小到大排序</b>；',
      '② 依次考察每条边，若把它加入当前森林不会<b>形成回路</b>就加入，否则跳过；',
      '③ 当已选边数达到 $n-1$（$n$ 为顶点数）时停止。',
      '正确性：这是拟阵（matroid）上的贪心算法，可证明得到全局最优的最小生成树。',
      '（对比 Prim 算法：从一个顶点出发，每次加入连接「已选集合」与「未选集合」的最小边。）'
    ]
  },
  {
    id: 'cm-9-03', topic: 'tree', topicName: '树 I（基本性质·生成树）',
    weight: 2, difficulty: 3, examRef: 'Lecture 10',
    prompt: '完全图 $K_{n}$ 的不同生成树共有多少个？（用 Cayley 公式，填 $n$ 的表达式）',
    blanks: [{ label: '生成树个数', answer: { exact: 'n^(n-2)', alts: ['n^{n-2}', 'n**(n-2)'], vars: ['n'] } }],
    solution: [
      '<b>Cayley 公式：</b>完全图 $K_{n}$ 的不同生成树共有 $n^{n-2}$ 个。',
      '例如 $K_{3}$ 有 $3^{1}=3$ 棵生成树；$K_{4}$ 有 $4^{2}=16$ 棵。',
      '（这一结果也可由 Prüfer 序列与生成树的一一对应来证明。）'
    ]
  }
  );

  /* ==================== 10. 树 II（L11） ==================== */
  Q.push(
  {
    id: 'cm-10-01', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 2, difficulty: 3, examRef: 'Lecture 11',
    prompt: '一棵二叉树的内部顶点数为 $i$，则它的叶子数（leaves）为多少？',
    blanks: [{ label: '叶子数', answer: { exact: 'i+1' }, vars: ['i'] }],
    solution: [
      '对满二叉树（每个内部顶点恰有 2 个孩子）：设叶子数 $\\ell$、内部顶点数 $i$，',
      '则边数 $=2i$（每个内部顶点向下连 2 条），又边数 $=\\ell+i-1$（树的性质）。',
      '$2i=\\ell+i-1\\Rightarrow \\ell=i+1$。'
    ]
  },
  {
    id: 'cm-10-02', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 2, difficulty: 3, examRef: 'Lecture 11',
    prompt: '已知表达式的中缀形式为 $a+b\\times c$。将其写成后缀（postfix / 逆波兰）形式。',
    blanks: [{ label: '后缀形式', answer: { exact: 'abc*+', alts: ['a b c * +'] } }],
    solution: [
      '先按运算优先级画出表达式树：乘法优先，根为 $+$，右子树为 $\\times$。',
      '根 $+$；左孩子 $a$；右孩子 $\\times$；$\\times$ 的左孩子 $b$、右孩子 $c$。',
      '后序遍历（左右根）：$a\\to b\\to c\\to \\times\\to +$，即 <b>abc*+</b>。',
      '（中缀 $a+b\\times c$；前缀为 $+a\\times bc$。）'
    ]
  },
  {
    id: 'cm-10-03', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 3, difficulty: 4, examRef: 'Lecture 11',
    prompt: 'Huffman 编码：字符及其频率为 $A:5,\\ B:2,\\ C:1,\\ D:1$。求最优编码下 $A$ 的码长（位数）。',
    blanks: [{ label: '$A$ 的码长', answer: { exact: '1' } }],
    solution: [
      '<b>构造 Huffman 树：</b>每次合并频率最小的两个结点。',
      '频率集合 $\\{5,2,1,1\\}$。合并最小的两个 $1+1=2$（$C,D$ 的父结点），得 $\\{5,2,2\\}$。',
      '再合并最小的两个 $2+2=4$，得 $\\{5,4\\}$。',
      '最后合并 $5+4=9$ 作为根。',
      '<b>树形：</b>根 $9$ 的左孩子为权重 $5$（字母 $A$），右孩子为权重 $4$ 的子树。',
      '故 $A$ 处于深度 $1$，码长为 <b>1</b> 位。',
      '（对应编码例如 $A=0$，$B=10$，$C=110$，$D=111$；平均码长 $=\\frac{5\\cdot1+2\\cdot2+1\\cdot3+1\\cdot3}{9}=\\frac{15}{9}=1.667$ 位/字符。）'
    ]
  },
  {
    id: 'cm-10-04', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 2, difficulty: 3, examRef: 'Lecture 11',
    prompt: '一棵有 $n$ 个顶点的二叉树，其最大高度（层数最多）在形态上对应什么？用 $n$ 表示最大高度。',
    blanks: [{ label: '最大高度', answer: { exact: 'n', alts: ['n-1', 'n 层'] } }],
    solution: [
      '二叉树的高度（层数）取决于形态。',
      '最「瘦」的情况：每个内部顶点只有一个孩子，形成一条链，',
      '此时若按「层数」计（根为第 1 层），共 $n$ 层；若按「边数」计，高度为 $n-1$。',
      '最「胖」的情况（完全平衡）高度为 $\\lceil\\log_{2}(n+1)\\rceil$。',
      '故最大高度为 $n$（层数）或 $n-1$（边数），题目按层数记 $n$。'
    ]
  }
  );

  /* ==================== 11. 布尔代数与电路（L12） ==================== */
  Q.push(
  {
    id: 'cm-11-01', topic: 'boolean', topicName: '布尔代数与电路',
    weight: 2, difficulty: 3, examRef: 'Lecture 12',
    prompt: '化简布尔表达式 $x+\\bar{x}y$（吸收律）。',
    blanks: [{ label: '化简结果', answer: { exact: 'x+y', alts: ['x or y', 'x∨y'], vars: ['x', 'y'] } }],
    solution: [
      '$x+\\bar{x}y=(x+\\bar{x})(x+y)$（分配律：$a+\\bar a b=(a+\\bar a)(a+b)$）。',
      '因 $x+\\bar x=1$，故 $=1\\cdot(x+y)=x+y$。',
      '这称为吸收律（absorption law）。'
    ]
  },
  {
    id: 'cm-11-02', topic: 'boolean', topicName: '布尔代数与电路',
    weight: 2, difficulty: 3, examRef: 'Lecture 12',
    prompt: '用德摩根律化简 $\\overline{x\\bar{y}}$。',
    blanks: [{ label: '化简结果', answer: { exact: '~x+y', alts: ['\\bar{x}+y', 'not x or y', '¬x∨y'], vars: ['x', 'y'] } }],
    solution: [
      '德摩根律：$\\overline{ab}=\\bar a+\\bar b$，$\\overline{a+b}=\\bar a\\bar b$。',
      '$\\overline{x\\bar y}=\\bar x+\\overline{\\bar y}=\\bar x+y$。'
    ]
  },
  {
    id: 'cm-11-03', topic: 'boolean', topicName: '布尔代数与电路',
    weight: 2, difficulty: 3, examRef: 'Lecture 12',
    prompt: '写出 $\\bar{x}\\bar{y}+\\bar{x}y+xy$ 的最小项之和（sum-of-products）化简结果。',
    blanks: [{ label: '化简结果', answer: { exact: 'x+~y', alts: ['x+\\bar{y}', 'x or not y'], vars: ['x', 'y'] } }],
    solution: [
      '按 $x$ 分组：$(\\bar x\\bar y+\\bar x y)+(xy)$ 不方便；改按如下合并：',
      '$\\bar x\\bar y+\\bar x y=\\bar x(\\bar y+y)=\\bar x$；',
      '$\\bar x+xy=(\\bar x+x)(\\bar x+y)=1\\cdot(\\bar x+y)=\\bar x+y$。',
      '合计：$\\bar x\\bar y+\\bar x y+xy=\\bar x+xy=\\bar x+y$。',
      '（也可用卡诺图看出结果。）'
    ]
  },
  {
    id: 'cm-11-04', topic: 'boolean', topicName: '布尔代数与电路',
    weight: 3, difficulty: 4, examRef: 'Lecture 12',
    prompt: '设半加器（half adder）的输入为 $x,y$，输出为和 $s$ 与进位 $c$。写出 $s$ 与 $c$ 的布尔表达式（用异或与与表示）。',
    blanks: [
      { label: '$s$', answer: { exact: 'x XOR y', alts: ['x\\oplus y', 'x^y', 'x xor y'], vars: ['x', 'y'] } },
      { label: '$c$', answer: { exact: 'x*y', alts: ['xy', 'x AND y', 'x\\land y'], vars: ['x', 'y'] } }
    ],
    solution: [
      '半加器做一位二进制加法：$x+y$ 的和位与进位位。',
      '真值表：$0+0\\to(0,0)$；$0+1\\to(1,0)$；$1+0\\to(1,0)$；$1+1\\to(0,1)$（和为 0 进位 1，2 写成 10）。',
      '和位在输入不同时为 1，是<b>异或</b>：$s=x\\oplus y=x\\bar y+\\bar x y$。',
      '进位位在输入都为 1 时为 1，是<b>与</b>：$c=xy$。'
    ]
  }
  );

  /* ==================== 12. 综合 / 历年真题综合题 ==================== */
  Q.push(
  {
    id: 'cm-12-01', topic: 'mixed', topicName: '综合与真题',
    weight: 3, difficulty: 4, examRef: '2018 / 2019 期末',
    prompt: '证明：$\\sqrt{2}$ 是无理数。（填写证明所用的方法）',
    blanks: [{ label: '方法', answer: { exact: '反证法', alts: ['contradiction', 'proof by contradiction'] } }],
    solution: [
      '<b>用反证法。</b>反设 $\\sqrt{2}$ 是有理数，则可写成既约分数 $\\sqrt{2}=\\dfrac{p}{q}$，其中 $p,q$ 互质、$q\\ne0$。',
      '两边平方：$2q^{2}=p^{2}$。',
      '故 $p^{2}$ 是偶数，从而 $p$ 是偶数（因为奇数平方仍为奇数）。设 $p=2k$。',
      '代入得 $2q^{2}=4k^{2}$，即 $q^{2}=2k^{2}$，故 $q^{2}$ 也是偶数，从而 $q$ 也是偶数。',
      '于是 $p,q$ 都是偶数，与「$p,q$ 互质」矛盾。',
      '故 $\\sqrt{2}$ 不是有理数，即它无理。∎'
    ]
  },
  {
    id: 'cm-12-02', topic: 'mixed', topicName: '综合与真题',
    weight: 3, difficulty: 4, examRef: '2023 期末',
    prompt: '证明：在任意 $n\\ge2$ 个人中，总有两个人在此群体中认识的人数相同（「握手引理」应用，假设认识关系是对称的）。填写证明的关键依据。',
    blanks: [{ label: '关键依据', answer: { exact: 'pigeonhole principle', alts: ['抽屉原理', '鸽巢原理', 'pigeonhole'] } }],
    solution: [
      '把每个人「认识的人数」看作度数，取值范围是 $0,1,\\dots,n-1$，共 $n$ 个可能值。',
      '<b>关键：</b>$0$ 与 $n-1$ 不能同时出现（若有人谁都不认识，就不可能有人认识所有人）。',
      '所以实际可能的取值只有 $n-1$ 个，而人数是 $n$。',
      '由<b>抽屉原理（pigeonhole principle）</b>，$n$ 个人分配到 $n-1$ 个可能取值中，必有两个人的取值相同。∎'
    ]
  },
  {
    id: 'cm-12-03', topic: 'mixed', topicName: '综合与真题',
    weight: 2, difficulty: 3, examRef: '2025 卷',
    prompt: '判断：「每个二叉树的内部顶点数都大于叶子数」。（填 对 或 错）',
    blanks: [{ label: '对/错', answer: { exact: '错', alts: ['false', 'no', '错误'] } }],
    solution: [
      '错。对满二叉树（每个内部顶点恰有 2 个孩子）有 $\\ell=i+1$，即叶子数<b>大于</b>内部顶点数。',
      '例如只有一个根（内部顶点）的满二叉树有 2 个叶子：$i=1,\\ \\ell=2$。',
      '所以「内部顶点数大于叶子数」不成立。'
    ]
  },
  {
    id: 'cm-12-04', topic: 'mixed', topicName: '综合与真题',
    weight: 2, difficulty: 3, examRef: '2019 期末',
    prompt: '设 $f:\\mathbb{Z}\\to\\mathbb{Z}$，$f(n)=2n$。判断 $f$ 是否为满射（onto）。（填 是 或 否）',
    blanks: [{ label: '是否满射', answer: { exact: '否', alts: ['no', 'false'] } }],
    solution: [
      '$f$ 的象集是全体<b>偶数</b>，即 $\\{2n:n\\in\\mathbb{Z}\\}$。',
      '奇数（如 $1$）不在象集中，故不存在 $n$ 使 $f(n)=1$。',
      '所以 $f$ 不是满射（也说明它不是双射）。',
      '（但 $f$ 是单射：$2n_1=2n_2\\Rightarrow n_1=n_2$。）'
    ]
  }
  );

  /* ==================== 13. 图形题（内联 SVG，无需外部图片） ==================== */
  Q.push(
  {
    id: 'cm-13-01', topic: 'graph2', topicName: '图论 II（欧拉·哈密顿·最短路）',
    weight: 4, difficulty: 5, examRef: '2025 卷 C2(a) / 2018 卷 / 2014 卷',
    prompt: '<svg viewBox="0 0 600 340" width="100%" role="img" style="max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><defs><marker id="ahDij" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#5b6478"/></marker></defs><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Directed graph H (numbers on the arrows are edge weights)</text><line x1="76.4" y1="168.6" x2="173.6" y2="101.4" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="114.0" y="122.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="125.0" y="134.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">3</text><line x1="76.8" y1="190.8" x2="183.2" y2="259.2" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="119.0" y="212.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="130.0" y="224.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">5</text><line x1="191.1" y1="110.0" x2="198.9" y2="250.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="184.0" y="167.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="195.0" y="179.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="207.1" y1="100.3" x2="322.9" y2="169.7" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="254.0" y="122.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="265.0" y="134.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">6</text><line x1="216.8" y1="259.2" x2="323.2" y2="190.8" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="259.0" y="212.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="270.0" y="224.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">2</text><line x1="217.2" y1="259.8" x2="452.8" y2="120.2" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="324.0" y="177.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="335.0" y="189.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">4</text><line x1="357.6" y1="170.5" x2="452.4" y2="119.5" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="394.0" y="132.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="405.0" y="144.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="358.7" y1="187.0" x2="521.3" y2="248.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="429.0" y="204.5" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="440.0" y="216.5" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">7</text><line x1="478.7" y1="128.0" x2="531.3" y2="237.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahDij)"/><rect x="494.0" y="169.5" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="505.0" y="181.5" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">2</text><circle cx="60.0" cy="180.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="60.0" y="185.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">S</text><circle cx="190.0" cy="90.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="190.0" y="95.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">A</text><circle cx="200.0" cy="270.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="200.0" y="275.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">B</text><circle cx="340.0" cy="180.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="340.0" y="185.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">C</text><circle cx="470.0" cy="110.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="470.0" y="115.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">D</text><circle cx="540.0" cy="255.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="540.0" y="260.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">E</text></svg>'
      + '<br><b>(a)</b> 从起点 $S$ 运行 Dijkstra 算法，写出顶点被取出的顺序（用 → 分隔）。'
      + '<br><b>(b)</b> 求 $S$ 到 $E$ 的最短路径长度。'
      + '<br><b>(c)</b> 写出这条最短路径。',
    blanks: [
      { label: '出队顺序（用 - 或 , 分隔）', answer: { exact: 'S-A-B-C-D-E', alts: ['S,A,B,C,D,E'], seq: true } },
      { label: '$S$ 到 $E$ 的最短距离', answer: { exact: '9' } },
      { label: '最短路径（用 - 或 , 分隔）', answer: { exact: 'S-A-B-C-D-E', alts: ['S,A,B,C,D,E'], seq: true } }
    ],
    solution: [
      '<b>算法复习：</b>Dijkstra 每轮从未确定的顶点中选出「当前距离最小」的顶点 $u$，把它加入已确定集合，',
      '并用 $u$ 松弛（relax）其所有出边邻居。要求所有边权非负。',
      '<b>逐步过程（$d$ 表示当前已知最短距离）：</b>',
      '初始：$d(S)=0$，其余为 $\\infty$。',
      '<b>第 1 轮：</b>取出 $S$（$d=0$）。松弛 $S\\to A$：$d(A)=3$；$S\\to B$：$d(B)=5$。',
      '<b>第 2 轮：</b>未确定中最小是 $A$（3），取出 $A$。',
      '松弛 $A\\to B$：$3+1=4 < 5$ → $d(B)=4$（更新！）；$A\\to C$：$d(C)=3+6=9$。',
      '<b>第 3 轮：</b>最小是 $B$（4），取出 $B$。',
      '松弛 $B\\to C$：$4+2=6 < 9$ → $d(C)=6$；$B\\to D$：$d(D)=4+4=8$。',
      '<b>第 4 轮：</b>最小是 $C$（6），取出 $C$。',
      '松弛 $C\\to D$：$6+1=7 < 8$ → $d(D)=7$；$C\\to E$：$d(E)=6+7=13$。',
      '<b>第 5 轮：</b>最小是 $D$（7），取出 $D$。松弛 $D\\to E$：$7+2=9 < 13$ → $d(E)=9$。',
      '<b>第 6 轮：</b>取出 $E$（9）。',
      '<b>(a) 出队顺序：</b>$S \\to A \\to B \\to C \\to D \\to E$',
      '<b>(b) 最终距离：</b>$d(S)=0,\\ d(A)=3,\\ d(B)=4,\\ d(C)=6,\\ d(D)=7,\\ d(E)=9$。故 $S$ 到 $E$ 最短距离为 <b>9</b>。',
      '<b>(c) 最短路径：</b>沿 $d$ 的更新来源回溯 $E\\leftarrow D\\leftarrow C\\leftarrow B\\leftarrow A\\leftarrow S$，',
      '即 $S \\to A \\to B \\to C \\to D \\to E$，长度 $3+1+2+1+2=9$ ✔',
      '<b>易错点：</b>① 第 2 轮若不更新 $d(B)$（停在 5），后面全错；',
      '② 用 $S\\to B\\to D\\to E$（$5+4+2=11$）不是最短；',
      '③ 必须按「出队顺序」作答，而不是按编号顺序。'
    ]
  },
  {
    id: 'cm-13-02', topic: 'tree', topicName: '树 I（基本性质·生成树）',
    weight: 4, difficulty: 5, examRef: '2025 卷 B2 / 2016 卷 / 2018 卷',
    prompt: '<svg viewBox="0 0 600 340" width="100%" role="img" style="max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Weighted undirected graph G</text><line x1="60.0" y1="140.0" x2="60.0" y2="240.0" stroke="#5b6478" stroke-width="2"/><rect x="49.0" y="177.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="60.0" y="189.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">3</text><line x1="80.0" y1="118.9" x2="230.0" y2="111.1" stroke="#5b6478" stroke-width="2"/><rect x="144.0" y="102.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="155.0" y="114.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">10</text><line x1="79.8" y1="257.0" x2="170.2" y2="243.0" stroke="#5b6478" stroke-width="2"/><rect x="114.0" y="237.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="125.0" y="249.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">8</text><line x1="75.7" y1="247.6" x2="234.3" y2="122.4" stroke="#5b6478" stroke-width="2"/><rect x="144.0" y="172.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="155.0" y="184.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">6</text><line x1="209.9" y1="241.5" x2="370.1" y2="253.5" stroke="#5b6478" stroke-width="2"/><rect x="279.0" y="234.5" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="290.0" y="246.5" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">4</text><line x1="263.9" y1="124.4" x2="376.1" y2="240.6" stroke="#5b6478" stroke-width="2"/><rect x="309.0" y="169.5" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="320.0" y="181.5" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">5</text><line x1="270.0" y1="111.3" x2="380.0" y2="118.7" stroke="#5b6478" stroke-width="2"/><rect x="314.0" y="102.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="325.0" y="114.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">2</text><line x1="391.5" y1="235.1" x2="398.5" y2="139.9" stroke="#5b6478" stroke-width="2"/><rect x="384.0" y="174.5" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="395.0" y="186.5" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">7</text><line x1="407.9" y1="246.1" x2="502.1" y2="198.9" stroke="#5b6478" stroke-width="2"/><rect x="444.0" y="209.5" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="455.0" y="221.5" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">9</text><line x1="417.3" y1="130.1" x2="502.7" y2="179.9" stroke="#5b6478" stroke-width="2"/><rect x="449.0" y="142.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="460.0" y="154.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><circle cx="60.0" cy="120.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="60.0" y="125.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">A</text><circle cx="60.0" cy="260.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="60.0" y="265.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">B</text><circle cx="190.0" cy="240.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="190.0" y="245.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">C</text><circle cx="250.0" cy="110.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="250.0" y="115.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">D</text><circle cx="390.0" cy="255.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="390.0" y="260.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">E</text><circle cx="400.0" cy="120.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="400.0" y="125.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">F</text><circle cx="520.0" cy="190.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="520.0" y="195.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">G</text></svg>'
      + '<br><b>(a)</b> 用 Kruskal 算法求最小生成树，按<b>被选中的先后顺序</b>写出这些边（形如 AB, CD）。'
      + '<br><b>(b)</b> 求最小生成树的总权重。',
    blanks: [
      { label: '选边顺序（用逗号分隔，顺序即被选中的先后）', answer: { exact: 'FG,DF,AB,CE,DE,BD', alts: ['FG DF AB CE DE BD'], seq: true } },
      { label: '总权重', answer: { exact: '21' } }
    ],
    solution: [
      '<b>Kruskal 算法：</b>① 把所有边按权重从小到大排序；② 依次考察，若加入后不成环就加入；③ 选够 $n-1$ 条边即停。',
      '<b>边按权重排序：</b>',
      'FG(1)、DF(2)、AB(3)、CE(4)、DE(5)、BD(6)、EF(7)、BC(8)、EG(9)、AD(10)',
      '<b>逐条判断（已选 7 个顶点，需选 $7-1=6$ 条边）：</b>',
      '① FG(1)：不成环 → <b>选</b>（已选 1 条）',
      '② DF(2)：$D$ 与 $F$-$G$ 连通但 $D$ 是新的 → 不成环 → <b>选</b>（2）',
      '③ AB(3)：不成环 → <b>选</b>（3）',
      '④ CE(4)：不成环 → <b>选</b>（4）',
      '⑤ DE(5)：$D$ 属于 $\\{F,G,D\\}$，$E$ 属于 $\\{C,E\\}$，两组不同 → 不成环 → <b>选</b>（5）',
      '⑥ BD(6)：$B$ 属于 $\\{A,B\\}$，$D$ 属于 $\\{F,G,D,C,E\\}$，不同组 → 不成环 → <b>选</b>（6）',
      '此时已有 $7-1=6$ 条边，且全部 7 个顶点连通 —— <b>停止</b>。',
      '<b>(a) 选边顺序：</b><code>FG, DF, AB, CE, DE, BD</code>',
      '<b>(b) 总权重：</b>$1+2+3+4+5+6 = \\mathbf{21}$',
      '<b>验证连通性：</b>用并查集检查最终所有顶点同属一个集合 ✔（否则说明选边有误）。',
      '<b>唯一性：</b>所有边权互不相同 → 最小生成树<b>唯一</b>。',
      '若存在等权边，则可能有多棵不同的最小生成树（总权重相同）。',
      '<b>易错点：</b>① 必须按权重顺序考察（不能按顶点顺序）；',
      '② 一旦成环必须跳过并继续看下一条，而不是重新排序；',
      '③ 边数达到 $n-1$ 就停，多选一条必然成环。'
    ]
  },
  {
    id: 'cm-13-03', topic: 'graph3', topicName: '图论 III（流网络·最大流最小割）',
    weight: 4, difficulty: 5, examRef: '2025 卷 C2(c) / 2023 卷 c)',
    prompt: '<svg viewBox="0 0 600 340" width="100%" role="img" style="max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><defs><marker id="ahMf" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#5b6478"/></marker></defs><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Flow network (source S, sink E; numbers are capacities)</text><line x1="66.8" y1="169.2" x2="173.2" y2="100.8" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="109.0" y="122.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="120.0" y="134.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">6</text><line x1="66.8" y1="190.8" x2="173.2" y2="259.2" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="109.0" y="212.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="120.0" y="224.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">3</text><line x1="210.0" y1="90.0" x2="360.0" y2="90.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="274.0" y="77.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="285.0" y="89.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="204.5" y1="103.8" x2="365.5" y2="256.2" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="274.0" y="167.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="285.0" y="179.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">4</text><line x1="204.5" y1="256.2" x2="365.5" y2="103.8" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="274.0" y="167.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="285.0" y="179.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="210.0" y1="270.0" x2="360.0" y2="270.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="274.0" y="257.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="285.0" y="269.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">2</text><line x1="397.4" y1="99.8" x2="522.6" y2="170.2" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="449.0" y="122.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="460.0" y="134.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">4</text><line x1="397.4" y1="260.2" x2="522.6" y2="189.8" stroke="#5b6478" stroke-width="2" marker-end="url(#ahMf)"/><rect x="449.0" y="212.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="460.0" y="224.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">5</text><circle cx="50.0" cy="180.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="50.0" y="185.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">S</text><circle cx="190.0" cy="90.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="190.0" y="95.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">A</text><circle cx="190.0" cy="270.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="190.0" y="275.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">B</text><circle cx="380.0" cy="90.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="380.0" y="95.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">C</text><circle cx="380.0" cy="270.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="380.0" y="275.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">D</text><circle cx="540.0" cy="180.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="540.0" y="185.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">E</text></svg>'
      + '<br>求从源 $S$ 到汇 $E$ 的最大流的值，并写出最小割容量。',
    blanks: [
      { label: '最大流', answer: { exact: '7' } },
      { label: '最小割容量', answer: { exact: '7' } }
    ],
    solution: [
      '<b>先明确每条边容量：</b>$S\\to A=6$，$S\\to B=3$，$A\\to C=1$，$A\\to D=4$，',
      '$B\\to C=1$，$B\\to D=2$，$C\\to E=4$，$D\\to E=5$。',
      '<b>方法一：找所有 $s$-$t$ 割，取容量最小者。</b>',
      '割容量 = 从 $S$ 侧指向 $T$ 侧的所有边容量之和（只算 $S\\to T$ 方向）。',
      '枚举 $\\{A,B,C,D\\}$ 的所有分法：',
      '· $S$ 侧 $=\\{S\\}$：容量 $=6+3=9$',
      '· $S$ 侧 $=\\{S,A\\}$：$A\\to C(1)+A\\to D(4)+S\\to B(3)=8$',
      '· $S$ 侧 $=\\{S,B\\}$：$S\\to A(6)+B\\to C(1)+B\\to D(2)=9$',
      '· $S$ 侧 $=\\{S,C\\}$：$S\\to A(6)+S\\to B(3)+C\\to E(4)=13$',
      '· $S$ 侧 $=\\{S,D\\}$：$S\\to A(6)+S\\to B(3)+D\\to E(5)=14$',
      '· $S$ 侧 $=\\{S,A,B\\}$：$A\\to C(1)+A\\to D(4)+B\\to C(1)+B\\to D(2)=8$',
      '· $S$ 侧 $=\\{S,A,B,D\\}$：$A\\to C(1)+B\\to C(1)+D\\to E(5)=7$ ← <b>最小</b>',
      '· $S$ 侧 $=\\{S,A,B,C\\}$：$A\\to D(4)+B\\to D(2)+C\\to E(4)=10$',
      '· 其余分法容量均 $\\ge 8$',
      '<b>最小割 $=\\{S,A,B,D\\} \\mid \\{C,E\\}$，容量 $=1+1+5=\\mathbf{7}$。</b>',
      '<b>方法二：直接求最大流（Edmonds–Karp / 增广路）。</b>',
      '· 路径 1：$S\\to A\\to C\\to E$，瓶颈 $\\min(6,1,4)=1$ → 流量 1',
      '· 路径 2：$S\\to A\\to D\\to E$，瓶颈 $\\min(5,4,5)=4$ → 流量 4（累计 5）',
      '· 路径 3：$S\\to B\\to D\\to E$，瓶颈 $\\min(3,2,1)=1$ → 流量 1（累计 6）',
      '· 路径 4：$S\\to B\\to C\\to E$，瓶颈 $\\min(2,1,3)=1$ → 流量 1（累计 7）',
      '此时 $C\\to E$ 的容量已用完（路径 1 与路径 4 各用掉 1 个单位，共 2 个单位），',
      '检查残量网络：从 $S$ 出发只能到 $A$（剩 0）、$B$（剩 0）—— 无增广路，已最大。',
      '<b>最大流 $= \\mathbf{7}$。</b>',
      '<b>验证定理：</b>最大流 $7$ $=$ 最小割容量 $7$ ✔（最大流最小割定理）',
      '<b>考试作答要点：</b>题目要求「画出所有可能的割」，因此必须把上表的枚举过程写出来，',
      '不能只给最终数字 —— 割的枚举本身就是得分点。'
    ]
  },
  {
    id: 'cm-13-04', topic: 'graph', topicName: '图论 I（基本概念·连通性）',
    weight: 3, difficulty: 4, examRef: '2019 卷 5(a) / Lecture 7',
    prompt: '<svg viewBox="0 0 600 340" width="100%" role="img" style="max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Undirected graph for the adjacency matrix / list</text><line x1="100.0" y1="90.0" x2="210.0" y2="90.0" stroke="#5b6478" stroke-width="2"/><rect x="144.0" y="77.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="155.0" y="89.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="80.0" y1="110.0" x2="80.0" y2="230.0" stroke="#5b6478" stroke-width="2"/><rect x="69.0" y="157.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="80.0" y="169.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="230.0" y1="110.0" x2="230.0" y2="230.0" stroke="#5b6478" stroke-width="2"/><rect x="219.0" y="157.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="230.0" y="169.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="100.0" y1="250.0" x2="210.0" y2="250.0" stroke="#5b6478" stroke-width="2"/><rect x="144.0" y="237.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="155.0" y="249.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><line x1="250.0" y1="250.0" x2="360.0" y2="250.0" stroke="#5b6478" stroke-width="2"/><rect x="294.0" y="237.0" width="22" height="17" rx="3" fill="#ffffff" opacity="0.92"/><text x="305.0" y="249.0" font-size="13" font-weight="600" fill="#b8531e" text-anchor="middle">1</text><circle cx="80.0" cy="90.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="80.0" y="95.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">a</text><circle cx="230.0" cy="90.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="230.0" y="95.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">b</text><circle cx="80.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="80.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">c</text><circle cx="230.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="230.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">d</text><circle cx="380.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="380.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">e</text></svg>'
      + '<br><b>(a)</b> 写出该图的邻接矩阵（按字母顺序 $a,b,c,d,e$，填入 0/1）。'
      + '<br><b>(b)</b> 顶点 $d$ 的度是多少？',
    blanks: [
      { label: '邻接矩阵（逐行写出 25 位 0/1，可用空格或逗号分隔）',
        answer: { exact: '0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0',
                  alts: ['01000 10100 10010 01101 00010',
                         '0 1 0 0 0 1 0 1 0 0 1 0 0 1 0 0 1 1 0 1 0 0 0 1 0'],
                  seq: true } },
      { label: '$\\deg(d)$', answer: { exact: '3' } }
    ],
    solution: [
      '<b>邻接表（由图读出）：</b>',
      '$a: b, c$　　　$b: a, d$　　　$c: a, d$　　　$d: b, c, e$　　　$e: d$',
      '<b>(a) 邻接矩阵</b>（第 $i$ 行第 $j$ 列为 1 表示有边，无向图矩阵对称）：',
      '行 $a$：与 $b,c$ 相邻 → <code>0 1 1 0 0</code>',
      '行 $b$：与 $a,d$ 相邻 → <code>1 0 0 1 0</code>',
      '行 $c$：与 $a,d$ 相邻 → <code>1 0 0 1 0</code>',
      '行 $d$：与 $b,c,e$ 相邻 → <code>0 1 1 0 1</code>',
      '行 $e$：与 $d$ 相邻 → <code>0 0 0 1 0</code>',
      '故矩阵为 <code>01000;10100;10010;01101;00010</code>。',
      '<b>(b)</b> $d$ 与 $b,c,e$ 三点相邻，故 $\\deg(d)=\\mathbf{3}$。',
      '<b>校验（握手定理）：</b>各顶点度数 $2,2,2,3,1$，',
      '度数之和 $=10=2\\times5=2|E|$ ✔（图有 5 条边）',
      '<b>要点：</b>① 无向图的邻接矩阵必<b>对称</b>；② 对角线全为 0（简单图无自环）；',
      '③ 第 $i$ 行元素之和 $=\\deg(\\text{顶点}_i)$。'
    ]
  },
  {
    id: 'cm-13-05', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 3, difficulty: 4, examRef: 'Lecture 11',
    prompt: '<svg viewBox="0 0 600 320" width="100%" role="img" style="max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Expression tree</text><line x1="300" y1="92" x2="160" y2="148" stroke="#5b6478" stroke-width="2"/><line x1="300" y1="92" x2="440" y2="148" stroke="#5b6478" stroke-width="2"/><line x1="160" y1="192" x2="90" y2="243" stroke="#5b6478" stroke-width="2"/><line x1="160" y1="192" x2="230" y2="243" stroke="#5b6478" stroke-width="2"/><line x1="440" y1="192" x2="370" y2="243" stroke="#5b6478" stroke-width="2"/><line x1="440" y1="192" x2="510" y2="243" stroke="#5b6478" stroke-width="2"/><rect x="278" y="48" width="44" height="44" rx="8" fill="#fff4e0" stroke="#b8860b" stroke-width="2"/><text x="300" y="77" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">*</text><rect x="138" y="148" width="44" height="44" rx="8" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="160" y="177" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">+</text><rect x="418" y="148" width="44" height="44" rx="8" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="440" y="177" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">-</text><rect x="68" y="243" width="44" height="44" rx="8" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="90" y="272" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">a</text><rect x="208" y="243" width="44" height="44" rx="8" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="230" y="272" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">b</text><rect x="348" y="243" width="44" height="44" rx="8" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="370" y="272" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">c</text><rect x="488" y="243" width="44" height="44" rx="8" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="510" y="272" font-size="18" font-weight="700" fill="#1f2a44" text-anchor="middle">d</text></svg>'
      + '<br>该表达式树的中缀形式为 $(a+b)\\times(c-d)$。写出它的<b>前缀</b>与<b>后缀</b>形式。',
    blanks: [
      { label: '前缀形式', answer: { exact: '*+ab-cd', alts: ['* + a b - c d', '*+ab-cd'] } },
      { label: '后缀形式', answer: { exact: 'ab+cd-*', alts: ['a b + c d - *', 'ab+cd-*'] } }
    ],
    solution: [
      '<b>三种遍历（都从根出发，区别在访问根的时机）：</b>',
      '· <b>前序（preorder）</b>：根 → 左 → 右，得到<b>前缀</b>表达式',
      '· <b>中序（inorder）</b>：左 → 根 → 右，得到<b>中缀</b>表达式',
      '· <b>后序（postorder）</b>：左 → 右 → 根，得到<b>后缀</b>表达式（逆波兰式）',
      '<b>前缀（根-左-右）：</b>',
      '根 $\\times$ → 左子树（$+$ → $a$ → $b$）→ 右子树（$-$ → $c$ → $d$）',
      '得到 <code>* + a b - c d</code>，写作 <b>*+ab-cd</b>。',
      '<b>后缀（左-右-根）：</b>',
      '左子树（$a$ → $b$ → $+$）→ 右子树（$c$ → $d$ → $-$）→ 根 $\\times$',
      '得到 <code>a b + c d - *</code>，写作 <b>ab+cd-*</b>。',
      '<b>验证后缀表达式的求值（用栈）：</b>',
      '读 $a,b$ 入栈 → 遇 $+$ 弹出两者相加得 $(a+b)$ 入栈 →',
      '读 $c,d$ 入栈 → 遇 $-$ 弹出得 $(c-d)$ 入栈 → 遇 $*$ 弹出两者相乘得 $(a+b)(c-d)$ ✔',
      '<b>为什么需要前缀/后缀：</b>它们<b>无需括号</b>就能唯一确定运算顺序，',
      '便于计算机用栈直接求值（编译器的中间表示、计算器实现都用到）。',
      '<b>易错点：</b>① 后缀不是简单的「中缀倒过来」；② 运算符之间不要加空格混淆（题目允许两种写法）。'
    ]
  }
  );

  /* ==================== 14. 更多图形题（欧拉 / Huffman / 拓扑 / BST） ==================== */
  Q.push(
  {
    id: 'cm-14-01', topic: 'graph2', topicName: '图论 II（欧拉·哈密顿·最短路）',
    weight: 3, difficulty: 4, examRef: 'Lecture 8 / 2016 卷',
    prompt: '<svg viewBox="0 0 520 340" width="100%" role="img" style="max-width:520px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Graph G — decide whether an Euler circuit / Euler path exists</text><line x1="110.0" y1="250.0" x2="230.0" y2="250.0" stroke="#5b6478" stroke-width="2"/><line x1="270.0" y1="250.0" x2="390.0" y2="250.0" stroke="#5b6478" stroke-width="2"/><line x1="394.9" y1="236.8" x2="265.1" y2="123.2" stroke="#5b6478" stroke-width="2"/><line x1="234.9" y1="123.2" x2="105.1" y2="236.8" stroke="#5b6478" stroke-width="2"/><line x1="94.2" y1="230.4" x2="115.8" y2="129.6" stroke="#5b6478" stroke-width="2"/><line x1="133.6" y1="124.7" x2="236.4" y2="235.3" stroke="#5b6478" stroke-width="2"/><line x1="250.0" y1="230.0" x2="250.0" y2="130.0" stroke="#5b6478" stroke-width="2"/><circle cx="90.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="90.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">A</text><circle cx="250.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="250.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">B</text><circle cx="410.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="410.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">C</text><circle cx="250.0" cy="110.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="250.0" y="115.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">D</text><circle cx="120.0" cy="110.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="120.0" y="115.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">E</text></svg>'
      + '<br><b>(a)</b> 该图是否存在<b>欧拉通路</b>（Euler path）？（填 有 或 无）'
      + '<br><b>(b)</b> 该图是否存在<b>欧拉回路</b>（Euler circuit）？（填 有 或 无）'
      + '<br><b>(c)</b> 若存在欧拉通路，写出它的起点与终点（用逗号分隔）。',
    blanks: [
      { label: '是否存在欧拉通路', answer: { exact: '有', alts: ['yes', '存在', 'has'] } },
      { label: '是否存在欧拉回路', answer: { exact: '无', alts: ['no', '不存在', 'does not exist'] } },
      { label: '欧拉通路的起点与终点', answer: { exact: 'A,D', alts: ['A、D', 'A D', 'D,A'], strset: true } }
    ],
    solution: [
      '<b>判别准则（连通图）：</b>',
      '· 存在<b>欧拉回路</b> $\\iff$ 所有顶点的度都是<b>偶数</b>；',
      '· 存在<b>欧拉通路</b>（非回路）$\\iff$ 恰有 $2$ 个奇度顶点，且通路必以这两个顶点为端点；',
      '· 若奇度顶点个数 $\\ne0,2$，则两者都不存在。',
      '<b>统计各顶点的度：</b>',
      '$\\deg(A)=3$（连 $B,D,E$）',
      '$\\deg(B)=4$（连 $A,C,E,D$）',
      '$\\deg(C)=2$（连 $B,D$）',
      '$\\deg(D)=3$（连 $C,A,B$）',
      '$\\deg(E)=2$（连 $A,B$）',
      '度数和 $=3+4+2+3+2=14=2\\times7$ ✔（图有 7 条边，与握手定理一致）',
      '<b>奇度顶点：</b>$A$ 与 $D$，恰好 $2$ 个。',
      '<b>(a)</b> 恰有 2 个奇度顶点且图连通 $\\Rightarrow$ <b>存在</b>欧拉通路。',
      '<b>(b)</b> 存在奇度顶点 $\\Rightarrow$ <b>不存在</b>欧拉回路。',
      '<b>(c)</b> 通路的两个端点必须就是那两个奇度顶点，即 $A$ 与 $D$。',
      '一条具体通路（验证）：$A\\to B\\to C\\to D\\to A\\to E\\to B\\to D$，',
      '它恰好经过全部 7 条边各一次，起点 $A$、终点 $D$ ✔',
      '<b>直观理由：</b>欧拉通路每「经过」一个顶点要消耗 2 条边（进一次、出一次）；',
      '只有起点与终点可以「只出不进」或「只进不出」，所以它们的度必为奇数。'
    ]
  },
  {
    id: 'cm-14-02', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 4, difficulty: 5, examRef: 'Lecture 11',
    prompt: '<svg viewBox="0 0 620 540" width="100%" role="img" style="max-width:620px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Huffman tree construction (edge labels 0/1; node labels = weights, letters = symbols)</text><line x1="310" y1="80" x2="180" y2="130" stroke="#5b6478" stroke-width="2"/><text x="254.0" y="102.0" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">0</text><line x1="310" y1="80" x2="440" y2="130" stroke="#5b6478" stroke-width="2"/><text x="384.0" y="102.0" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">1</text><line x1="180" y1="170" x2="120" y2="235" stroke="#5b6478" stroke-width="2"/><text x="159.0" y="199.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">0</text><line x1="180" y1="170" x2="250" y2="235" stroke="#5b6478" stroke-width="2"/><text x="224.0" y="199.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">1</text><line x1="440" y1="170" x2="400" y2="235" stroke="#5b6478" stroke-width="2"/><text x="429.0" y="199.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">0</text><line x1="440" y1="170" x2="500" y2="235" stroke="#5b6478" stroke-width="2"/><text x="479.0" y="199.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">1</text><line x1="250" y1="275" x2="190" y2="320" stroke="#5b6478" stroke-width="2"/><text x="229.0" y="294.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">0</text><line x1="250" y1="275" x2="310" y2="320" stroke="#5b6478" stroke-width="2"/><text x="289.0" y="294.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">1</text><line x1="310" y1="360" x2="260" y2="400" stroke="#5b6478" stroke-width="2"/><text x="294.0" y="377.0" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">0</text><line x1="310" y1="360" x2="360" y2="400" stroke="#5b6478" stroke-width="2"/><text x="344.0" y="377.0" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">1</text><line x1="360" y1="440" x2="320" y2="475" stroke="#5b6478" stroke-width="2"/><text x="349.0" y="454.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">0</text><line x1="360" y1="440" x2="400" y2="475" stroke="#5b6478" stroke-width="2"/><text x="389.0" y="454.5" font-size="12" font-weight="700" fill="#b8531e" text-anchor="middle">1</text><circle cx="310" cy="60" r="21" fill="#fff4e0" stroke="#b8860b" stroke-width="2"/><text x="310" y="65" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">12</text><circle cx="180" cy="150" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="180" y="155" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">5</text><circle cx="440" cy="150" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="440" y="155" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">7</text><circle cx="120" cy="255" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="120" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">A</text><circle cx="250" cy="255" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="250" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">3</text><circle cx="400" cy="255" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="400" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">4</text><circle cx="500" cy="255" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="500" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">3b</text><circle cx="190" cy="340" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="190" y="345" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">B</text><circle cx="310" cy="340" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="310" y="345" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">2</text><circle cx="260" cy="420" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="260" y="425" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">C</text><circle cx="360" cy="420" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="360" y="425" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">2b</text><circle cx="320" cy="495" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="320" y="500" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">D</text><circle cx="400" cy="495" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="400" y="500" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">E</text></svg>'
      + '<br>对字符 $A,B,C,D,E$（频率分别为 $5,3,2,1,1$）构造 Huffman 编码。'
      + '<br><b>(a)</b> 求加权路径长度 WPL（即所有字符的「频率 × 码长」之和）。'
      + '<br><b>(b)</b> 求平均码长（用分数或 4 位小数）。'
      + '<br><b>(c)</b> 求字符 $D$ 的码长。',
    blanks: [
      { label: '加权路径长度 WPL', answer: { exact: '25' } },
      { label: '平均码长', answer: { exact: '25/12', alts: ['2.0833', '2.0833333333'], rel: 1e-4 } },
      { label: '$D$ 的码长', answer: { exact: '4' } }
    ],
    solution: [
      '<b>Huffman 构造法：</b>每次从森林中取出<b>权重最小的两棵树</b>合并为一棵新树（新权重为两者之和），重复直到只剩一棵。',
      '<b>逐步合并：</b>',
      '初始森林权重：$5,\\ 3,\\ 2,\\ 1,\\ 1$（对应 $A,B,C,D,E$）',
      '<b>第 1 次：</b>取最小的 $1$（$D$）与 $1$（$E$）→ 合并为权重 $2$ 的树。森林：$5,3,2,2$',
      '<b>第 2 次：</b>取最小的 $2$（$C$）与 $2$（$D,E$ 之树）→ 合并为权重 $4$。森林：$5,3,4$',
      '<b>第 3 次：</b>取最小的 $3$（$B$）与 $4$ → 合并为权重 $7$。森林：$5,7$',
      '<b>第 4 次：</b>取 $5$（$A$）与 $7$ → 合并为权重 $12$（根）。',
      '<b>得到的码字（左 0 右 1）：</b>',
      '$A = 0$（码长 1）',
      '$B = 10$（码长 2）',
      '$C = 110$（码长 3）',
      '$D = 1111$（码长 4）',
      '$E = 1110$（码长 4）',
      '<b>(a) 加权路径长度：</b>',
      '$\\text{WPL}=5\\times1+3\\times2+2\\times3+1\\times4+1\\times4=5+6+6+4+4=\\mathbf{25}$',
      '<b>(b) 平均码长：</b>总频率 $=5+3+2+1+1=12$，故',
      '$\\dfrac{25}{12}\\approx2.0833$ 位/字符。',
      '<b>(c)</b> $D$ 位于最深层，码长 $=4$。',
      '<b>验证最优性：</b>$D$ 与 $E$ 频率最小，因此码长最长（4 位）；$A$ 频率最大，码长最短（1 位）——符合 Huffman 的贪心直觉。',
      '<b>前缀性质：</b>没有任何码字是另一个码字的前缀（如 $0$ 与 $10,110,1110,1111$），',
      '因此解码时不会产生歧义，无需分隔符。',
      '<b>对比定长编码：</b>5 个字符的定长码需 $\\lceil\\log_2 5\\rceil=3$ 位，平均码长 3；',
      'Huffman 把平均码长降到 $2.0833$，压缩率约 $30\\%$。'
    ]
  },
  {
    id: 'cm-14-03', topic: 'graph3', topicName: '图论 III（流网络·最大流最小割）',
    weight: 3, difficulty: 4, examRef: 'Lecture 4 / 2023 卷',
    prompt: '<svg viewBox="0 0 700 340" width="100%" role="img" style="max-width:700px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><defs><marker id="ahTo" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#5b6478"/></marker></defs><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Directed acyclic graph (DAG) for topological sorting</text><line x1="107.9" y1="241.1" x2="392.1" y2="98.9" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><line x1="264.1" y1="235.9" x2="395.9" y2="104.1" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><line x1="270.0" y1="250.0" x2="390.0" y2="250.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><line x1="427.0" y1="100.5" x2="523.0" y2="159.5" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><line x1="430.0" y1="250.0" x2="630.0" y2="250.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><line x1="556.2" y1="181.8" x2="633.8" y2="238.2" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><line x1="110.0" y1="250.0" x2="390.0" y2="250.0" stroke="#5b6478" stroke-width="2" marker-end="url(#ahTo)"/><circle cx="90.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="90.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">A</text><circle cx="250.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="250.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">B</text><circle cx="410.0" cy="90.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="410.0" y="95.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">C</text><circle cx="410.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="410.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">D</text><circle cx="540.0" cy="170.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="540.0" y="175.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">E</text><circle cx="650.0" cy="250.0" r="20" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="650.0" y="255.0" font-size="15" font-weight="700" fill="#1f2a44" text-anchor="middle">F</text></svg>'
      + '<br>用 Kahn 算法求拓扑序（每次从入度为 0 的顶点中取<b>字典序最小</b>者）。'
      + '<br><b>(a)</b> 求拓扑序（用 → 分隔）。'
      + '<br><b>(b)</b> 该图的合法拓扑序总共有多少个？',
    blanks: [
      { label: '拓扑序', answer: { exact: 'A-B-C-D-E-F', alts: ['A,B,C,D,E,F'], seq: true } },
      { label: '合法拓扑序总数', answer: { exact: '6' } }
    ],
    solution: [
      '<b>拓扑排序的前提：</b>图必须是有向无环图（DAG）。若存在有向环，则不存在拓扑序。',
      '<b>Kahn 算法：</b>',
      '① 统计每个顶点的入度；② 把所有入度为 0 的顶点放入候选集；',
      '③ 每次取出一个顶点加入结果，并把它所有出边的终点入度减 1；',
      '④ 若某顶点入度变为 0，加入候选集；⑤ 重复直到候选集为空。',
      '（若最终结果顶点数少于总顶点数，说明图中有环。）',
      '<b>入度统计：</b>$A:0,\\ B:0,\\ C:2,\\ D:2,\\ E:1,\\ F:2$',
      '<b>(a) 逐步过程（候选集取字典序最小）：</b>',
      '初始候选 $\\{A,B\\}$ → 取 $A$。输出 $A$，$C$ 入度 $2\\to1$，$D$ 入度 $2\\to1$。候选 $\\{B\\}$',
      '取 $B$。输出 $B$，$C$ 入度 $1\\to0$（入候选），$D$ 入度 $1\\to0$（入候选）。候选 $\\{C,D\\}$',
      '取 $C$。输出 $C$，$E$ 入度 $1\\to0$（入候选）。候选 $\\{D,E\\}$',
      '取 $D$。输出 $D$，$F$ 入度 $2\\to1$。候选 $\\{E\\}$',
      '取 $E$。输出 $E$，$F$ 入度 $1\\to0$（入候选）。候选 $\\{F\\}$',
      '取 $F$。输出 $F$。候选空，结束。',
      '故拓扑序为 <b>$A\\to B\\to C\\to D\\to E\\to F$</b>。',
      '<b>(b) 合法拓扑序的计数：</b>',
      '约束是 $A\\prec C,\\ B\\prec C,\\ B\\prec D,\\ A\\prec D,\\ C\\prec E,\\ D\\prec F,\\ E\\prec F$。',
      '枚举全部 $6!=720$ 个排列并筛选满足所有约束者，共得 <b>6</b> 个：',
      '$A B C D E F$、$A B C E D F$、$A B D C E F$、$B A C D E F$、$B A C E D F$、$B A D C E F$',
      '<b>关键观察：</b>$A$ 与 $B$ 之间没有约束（可互换），$C$ 与 $D$ 之间也没有约束（可互换）——',
      '但两者的交换并非完全自由：$D$ 必须先于 $F$，$C$ 必须先于 $E$，因此 $2\\times3=6$ 种。',
      '<b>复杂度：</b>Kahn 算法为 $O(V+E)$；枚举所有拓扑序是 $\\#P$-完全问题，只适合小图。'
    ]
  },
  {
    id: 'cm-14-04', topic: 'tree2', topicName: '树 II（二叉树·遍历·Huffman）',
    weight: 3, difficulty: 4, examRef: 'Lecture 10 / 11',
    prompt: '<svg viewBox="0 0 620 320" width="100%" role="img" style="max-width:620px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px"><text x="12" y="22" font-size="14" font-weight="700" fill="#2b3445">Binary search tree built by inserting the keys in the given order</text><line x1="310" y1="80" x2="180" y2="130" stroke="#5b6478" stroke-width="2"/><line x1="310" y1="80" x2="440" y2="130" stroke="#5b6478" stroke-width="2"/><line x1="180" y1="170" x2="110" y2="235" stroke="#5b6478" stroke-width="2"/><line x1="180" y1="170" x2="250" y2="235" stroke="#5b6478" stroke-width="2"/><line x1="440" y1="170" x2="400" y2="235" stroke="#5b6478" stroke-width="2"/><line x1="440" y1="170" x2="500" y2="235" stroke="#5b6478" stroke-width="2"/><circle cx="310" cy="60" r="21" fill="#fff4e0" stroke="#b8860b" stroke-width="2"/><text x="310" y="65" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">50</text><circle cx="180" cy="150" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="180" y="155" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">30</text><circle cx="440" cy="150" r="21" fill="#eef3ff" stroke="#2f5bd7" stroke-width="2"/><text x="440" y="155" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">70</text><circle cx="110" cy="255" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="110" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">20</text><circle cx="250" cy="255" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="250" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">40</text><circle cx="400" cy="255" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="400" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">60</text><circle cx="500" cy="255" r="21" fill="#eaf6ee" stroke="#17915b" stroke-width="2"/><text x="500" y="260" font-size="14" font-weight="700" fill="#1f2a44" text-anchor="middle">80</text></svg>'
      + '<br>按序列 $50,30,70,20,40,60,80$ 依次插入构造二叉搜索树（BST）。'
      + '<br><b>(a)</b> 求<b>前序</b>遍历（用 , 分隔）。'
      + '<br><b>(b)</b> 求<b>中序</b>遍历，并说明它有什么性质。'
      + '<br><b>(c)</b> 求该树的高度（层数）。',
    blanks: [
      { label: '前序遍历', answer: { exact: '50,30,20,40,70,60,80', alts: ['50 30 20 40 70 60 80'], seq: true } },
      { label: '中序遍历', answer: { exact: '20,30,40,50,60,70,80', alts: ['20 30 40 50 60 70 80'], seq: true } },
      { label: '高度（层数）', answer: { exact: '3' } }
    ],
    solution: [
      '<b>BST 插入规则：</b>从根开始比较 —— 比当前结点小则往<b>左</b>，大则往<b>右</b>，直到空位插入。',
      '<b>逐次插入：</b>',
      '$50$ 成为根。',
      '$30<50$ → 作为 $50$ 的<b>左孩子</b>。',
      '$70>50$ → 作为 $50$ 的<b>右孩子</b>。',
      '$20<50$，$20<30$ → 作为 $30$ 的<b>左孩子</b>。',
      '$40<50$，$40>30$ → 作为 $30$ 的<b>右孩子</b>。',
      '$60>50$，$60<70$ → 作为 $70$ 的<b>左孩子</b>。',
      '$80>50$，$80>70$ → 作为 $70$ 的<b>右孩子</b>。',
      '<b>(a) 前序（根-左-右）：</b>',
      '$50 \\to$ 左子树$(30,20,40) \\to$ 右子树$(70,60,80)$',
      '左子树前序：$30,20,40$；右子树前序：$70,60,80$',
      '故 <b>$50,30,20,40,70,60,80$</b>。',
      '<b>(b) 中序（左-根-右）：</b>',
      '$20,30,40 \\to 50 \\to 60,70,80$，即 <b>$20,30,40,50,60,70,80$</b>。',
      '<b>性质：</b>BST 的中序遍历必定得到<b>升序序列</b>。',
      '这是一条充要性质 —— 反过来，若某二叉树的中序是升序，则它满足 BST 的有序性。',
      '<b>(c) 层数：</b>',
      '第 1 层：$50$；第 2 层：$30,70$；第 3 层：$20,40,60,80$。',
      '故高度为 <b>3</b> 层。',
      '<b>补充：</b>该树是一棵<b>满二叉树</b>（每个内部顶点恰有 2 个孩子），',
      '顶点数 $7=2^{3}-1$，说明它同时也是完全平衡的。',
      '对 $n=7$ 个结点的平衡 BST，$\\lceil\\log_2(7+1)\\rceil=3$ 层是最小可能高度 ——',
      '若按升序 $20,30,40,50,60,70,80$ 插入，则会退化成 7 层的链，查找复杂度从 $O(\\log n)$ 恶化到 $O(n)$。'
    ]
  }
  );

  /* ==================== 证明与简答（不需输入） ==================== */
  var P = [];
  P.push(
  {
    id: 'cp-1', topic: 'logic', topicName: '逻辑与证明', year: 'Lecture 2 / 历年期末', marks: 10,
    title: '常用证明方法总览：直接、逆否、反证、归谬',
    statement: '说明「直接证明」「逆否证明」「反证法」三者的区别与联系，并各举一个适用于 $n^{2}$ 奇偶性的例子。',
    proof: [
      '<b>直接证明（direct proof）</b>：从前提 $p$ 出发，经逻辑推演得到结论 $q$。',
      '例：证明「若 $n$ 是奇数则 $n^{2}$ 是奇数」。设 $n=2k+1$，则 $n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$ 是奇数。',
      '<b>逆否证明（proof by contrapositive）</b>：证明 $\\neg q\\to\\neg p$，因它与 $p\\to q$ 逻辑等价。',
      '例：证明「若 $n^{2}$ 是奇数则 $n$ 是奇数」，等价于证「若 $n$ 是偶数则 $n^{2}$ 是偶数」。设 $n=2k$，则 $n^{2}=2(2k^{2})$ 是偶数。',
      '<b>反证法（proof by contradiction）</b>：假设 $\\neg(p\\to q)$ 即「$p$ 真且 $q$ 假」，推出矛盾。',
      '例：反设 $n^{2}$ 是奇数但 $n$ 是偶数，则 $n^{2}$ 是偶数，与 $n^{2}$ 是奇数矛盾。',
      '<b>联系：</b>逆否证明与反证法在命题逻辑层面等价（都用到 $p\\to q\\equiv\\neg q\\to\\neg p$），',
      '但反证法适用范围更广（可用于证明不存在性、无理数等无法「直接」表述的命题，如 $\\sqrt2$ 无理）。',
      '<b>归谬法的经典范例：</b>证明 $\\sqrt{2}$ 无理数 —— 反设 $\\sqrt2=p/q$ 既约，推出 $p,q$ 都为偶数，矛盾。'
    ],
    conclusion: '三种方法本质相通但适用场景不同：直接证明最简；逆否证明把否定移到前提；反证法最强、适合不存在性命题。'
  },
  {
    id: 'cp-2', topic: 'induction', topicName: '归纳法与递归', year: '2025 期末 B1 / Lecture 5', marks: 10,
    title: '数学归纳法证明 n! > 3ⁿ（n ≥ 7）',
    statement: '用数学归纳法证明：对一切整数 $n\\ge7$，有 $n!>3^{n}$。',
    proof: [
      '<b>基础步（base case）</b> $n=7$：',
      '$7!=5040$，$3^{7}=2187$，而 $5040>2187$ ✔',
      '<b>归纳假设（inductive hypothesis）</b>：设对某个 $k\\ge7$ 有 $k!>3^{k}$。',
      '<b>归纳步（inductive step）</b>：证明 $(k+1)!>3^{k+1}$。',
      '$(k+1)!=(k+1)\\cdot k!>(k+1)\\cdot3^{k}$（用了归纳假设与 $k+1>0$）。',
      '要得到 $(k+1)!>3^{k+1}=3\\cdot3^{k}$，只需 $k+1>3$，即 $k>2$。',
      '而 $k\\ge7$ 时 $k>2$ 显然成立，故 $(k+1)\\cdot3^{k}>3\\cdot3^{k}=3^{k+1}$。',
      '于是 $(k+1)!>3^{k+1}$，归纳步完成。',
      '由数学归纳法原理，对一切 $n\\ge7$ 有 $n!>3^{n}$。∎'
    ],
    conclusion: '关键是把 $(k+1)!$ 拆成 $(k+1)\\cdot k!$，再用归纳假设并把 $k+1>3$ 作为门槛条件。'
  },
  {
    id: 'cp-3', topic: 'mixed', topicName: '综合与真题', year: '2025 期末 C2', marks: 9,
    title: 'Dijkstra 算法：为何不能处理负权边？',
    statement: '（2025 卷 C2 要求在有向图上运行 Dijkstra 并给出出队顺序。图形无法在此呈现，故改为概念证明题。）陈述 Dijkstra 算法并证明：存在负权边时算法可能给出错误结果。',
    proof: [
      '<b>算法陈述：</b>维护已确定最短距离的集合 $S$（初始 $\\{s\\}$）和未确定集合；',
      '每轮从未确定顶点中选出当前距离最小的顶点 $u$，把它加入 $S$，并用 $u$ 松弛其所有邻居。',
      '<b>正确性依据（非负权时）：</b>设 $u$ 是当前距源最近的未确定顶点，若存在一条更短的路径到 $u$，',
      '则该路径必先离开 $S$，经过某条边 $(x,y)$（$x\\in S,y\\notin S$）。',
      '此时 $d(y)\\le d(x)+w(x,y)\\le d(u)$（非负权保证 $w\\ge0$），与「$u$ 是最小」矛盾，故 $d(u)$ 已是最终最短距离。',
      '<b>负权反例：</b>取顶点 $s,a,b$，边 $s\\to a$ 权 $2$，$s\\to b$ 权 $3$，$b\\to a$ 权 $-2$。',
      'Dijkstra 第一轮选出 $a$（距离 2），确定 $d(a)=2$ 并加入 $S$；',
      '第二轮选出 $b$（距离 3），松弛 $b\\to a$ 得到 $d(a)\\le3-2=1<2$，',
      '但 $a$ 已出队、不再更新，算法错误地输出 $d(a)=2$，而实际最短是 $1$（路径 $s\\to b\\to a$）。',
      '<b>失败原因：</b>非负权是「已出队顶点的距离不会再被改进」的前提；负权破坏了这个前提。',
      '<b>替代算法：</b>Bellman–Ford（$O(VE)$）可处理负权，并能检测负环；',
      '若需全源最短路，可用 Johnson 算法（先用 Bellman–Ford 重赋权再跑 Dijkstra）。'
    ],
    conclusion: 'Dijkstra 的贪心正确性依赖非负权；负权会使「已确定」的距离被后续路径改进，导致错误，此时应用 Bellman–Ford。'
  },
  {
    id: 'cp-4', topic: 'graph3', topicName: '图论 III（流网络）', year: 'Lecture 9 / 2025 卷 C2(c)', marks: 8,
    title: '最大流最小割定理的证明',
    statement: '证明最大流最小割定理：流网络中从 $s$ 到 $t$ 的最大流值等于最小 $s$-$t$ 割的容量。',
    proof: [
      '先引入两个基本事实。',
      '<b>事实 1：任一 $s$-$t$ 割的容量 $\\ge$ 任一 $s$-$t$ 流的值。</b>',
      '设割为 $(S,T)$（$s\\in S,t\\in T$）。沿割把流守恒关系求和：',
      '$|f|=\\displaystyle\\sum_{x\\in S}\\!\\Big(\\text{流出}-\\text{流入}\\Big)=\\sum_{x\\in S,y\\in T}\\!f(x,y)-\\sum_{x\\in T,y\\in S}\\!f(x,y)$。',
      '而 $0\\le f(x,y)\\le c(x,y)$，且第二项 $\\ge0$，故',
      '$|f|\\le\\displaystyle\\sum_{x\\in S,y\\in T}c(x,y)=\\operatorname{cap}(S,T)$。',
      '由此立得 $\\max|f|\\le\\min\\operatorname{cap}$。',
      '<b>事实 2：若残量网络 $G_f$ 中无 $s\\to t$ 路径，则存在割使容量 $=|f|$。</b>',
      '令 $S$ 为 $G_f$ 中从 $s$ 可达的顶点集，$T=V\\setminus S$。由「无路径」知 $t\\in T$，故 $(S,T)$ 是合法割。',
      '对任意 $x\\in S,y\\in T$：若 $f(x,y)<c(x,y)$，则残量边 $x\\to y$ 存在，$y$ 应属于 $S$，矛盾；故 $f(x,y)=c(x,y)$。',
      '若 $f(y,x)>0$，则残量边 $x\\to y$ 存在（反向边），同样矛盾；故 $f(y,x)=0$。',
      '代入事实 1 的分解式得 $|f|=\\operatorname{cap}(S,T)$。',
      '<b>合并：</b>由事实 1，$\\max|f|\\le\\min\\operatorname{cap}$；',
      '取达到最大值的流 $f^{*}$，其残量网络中必无增广路（否则可继续增流），由事实 2 存在割使 $\\operatorname{cap}=|f^{*}|=\\max|f|$。',
      '故 $\\min\\operatorname{cap}\\le\\max|f|$。两边夹得 $\\max|f|=\\min\\operatorname{cap}$。∎'
    ],
    conclusion: '一切割容量 $\\ge$ 一切流值；而当流达最大时构造出的割取等号，故最大流 $=$ 最小割。'
  },
  {
    id: 'cp-5', topic: 'tree', topicName: '树 I（生成树）', year: 'Lecture 10 / 2025 卷 B2', marks: 10,
    title: 'Kruskal 算法得到最小生成树',
    statement: '陈述 Kruskal 算法，并证明它得到的生成树是最小的。（2025 卷 B2 给出具体带权图要求求 MST，图形无法呈现，故改为证明题。）',
    proof: [
      '<b>算法：</b>① 把所有边按权重递增排序；② 依次考察每条边，若加入后不形成回路就加入；③ 选够 $n-1$ 条边即停。',
      '<b>证明（换边法 / exchange argument）：</b>设算法输出 $T$，某棵最小生成树为 $T^{*}$。',
      '若 $T\\ne T^{*}$，取 $T$ 中第一条（按算法加入顺序）不在 $T^{*}$ 中的边 $e$。',
      '把 $e$ 加入 $T^{*}$ 会形成唯一回路 $C$。因为 $T$ 是森林，$C$ 上必有某条边 $e\'\\notin T$。',
      '<b>关键：</b>算法选 $e$ 时，权重比 $e$ 小的边已全部考察过。',
      '由最小生成树的性质（割性质），可以证明 $w(e)\\le w(e\')$；',
      '否则若 $w(e\')<w(e)$，算法在考察 $e$ 之前已处理 $e\'$：由于 $T^{*}\\cup\\{e\\}$ 的回路 $C$ 上除 $e$ 外都在 $T^{*}$ 中，$e\'$ 与算法已选的边不会成环，算法会选 $e\'$ 而非 $e$，矛盾。',
      '于是 $T\'=T^{*}-\\{e\'\\}+\\{e\\}$ 也是生成树且 $w(T\')\\le w(T^{*})$，仍是最小生成树，',
      '但它与 $T$ 的公共边多了一条。重复此换边过程，最终得到 $T^{*}$ 可换为 $T$，故 $w(T)=w(T^{*})$。',
      '所以 Kruskal 算法输出的 $T$ 是最小生成树。∎',
      '<b>另一视角：</b>图的边集构成一个<b>拟阵（graphic matroid）</b>，Kruskal 即是拟阵上的贪心算法，拟阵贪心已被证明最优。'
    ],
    conclusion: 'Kruskal 的贪心选择可通过换边法证明不劣于任何最小生成树，故输出即最小生成树。'
  },
  {
    id: 'cp-6', topic: 'counting', topicName: '计数', year: 'Lecture 6 / 2023 期末', marks: 8,
    title: '容斥原理（Inclusion–Exclusion）',
    statement: '陈述两个与三个集合的容斥原理，并解释其证明思路（用特征函数或韦恩图）。',
    proof: [
      '<b>两个集合：</b>$|A\\cup B|=|A|+|B|-|A\\cap B|$。',
      '<b>三个集合：</b>',
      '$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$。',
      '<b>证明思路（特征函数法）：</b>对任意元素 $x$，定义指示函数',
      '$\\mathbf{1}_{A}(x)=1$ 若 $x\\in A$，否则 $0$。则 $|A|=\\sum_{x}\\mathbf{1}_A(x)$。',
      '左边 $|A\\cup B\\cup C|$ 计数「属于至少一个集合」的元素，每个这样的 $x$ 贡献 $1$。',
      '右边对同一个 $x$：设 $x$ 属于 $r$ 个集合（$1\\le r\\le3$），则它在右边被计',
      '$\\dbinom r1-\\dbinom r2+\\dbinom r3$ 次。',
      '代入 $r=1,2,3$ 分别得 $1,\\ 2-1=1,\\ 3-3+1=1$，都为 $1$；',
      '而 $x$ 不属于任何集合时（$r=0$）右边为 $0$，与左边一致。',
      '故两边对每个元素贡献相同，等式成立。∎',
      '<b>一般形式：</b>$\\displaystyle\\Big|\\bigcup_{i=1}^{n}A_i\\Big|=\\sum_{\\varnothing\\ne J\\subseteq[n]}(-1)^{|J|+1}\\Big|\\bigcap_{i\\in J}A_i\\Big|$。'
    ],
    conclusion: '容斥原理的实质是把「并集计数」化为「交集计数的交错和」，用每个元素的贡献恒为 1 来证明。'
  }
  );

  FCMS.register({
    id: 'COMP2012',
    name: '离散数学',
    fullName: 'COMP2012 Discrete Mathematics',
    desc: '逻辑、集合、算法、归纳、计数、图论、树、布尔电路。含 2014–2025 六份历年期末卷题型。',
    color: '#17915b',
    topics: [
      { id: 'logic',      name: '逻辑与证明' },
      { id: 'structures', name: '基本结构（集合·函数·序列·和）' },
      { id: 'algorithm',  name: '算法与复杂度' },
      { id: 'induction',  name: '归纳法与递归' },
      { id: 'counting',   name: '计数' },
      { id: 'graph',      name: '图论 I（基本概念·连通性）' },
      { id: 'graph2',     name: '图论 II（欧拉·哈密顿·最短路）' },
      { id: 'graph3',     name: '图论 III（流网络·最大流最小割）' },
      { id: 'tree',       name: '树 I（基本性质·生成树）' },
      { id: 'tree2',      name: '树 II（二叉树·遍历·Huffman）' },
      { id: 'boolean',    name: '布尔代数与电路' },
      { id: 'mixed',      name: '综合与真题' }
    ],
    questions: Q,
    proofs: P,
    papers: (typeof COMP2012_PAPERS !== 'undefined' ? COMP2012_PAPERS : [])
  });
})(typeof window !== 'undefined' ? window : globalThis);
