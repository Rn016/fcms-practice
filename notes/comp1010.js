/* ==========================================================================
   COMP1010 讲义精读（Study Notes）
   --------------------------------------------------------------------------
   把 Lecture 1–12 与 Lab 1–12 的 PPT 讲义整理成可精读的笔记：
     · 讲解以中文为主
     · 英文作为「专有名词 / 重点词汇」标注（用双方括号 术语|中文 的形式标记）
   数据结构（由 FCMS.registerNotes 注册）：
     { subjectId, topics:[ { no, title, titleEn, tags, blocks, terms } ] }
   区块 block 类型：
     { t:'p',  md:'正文（支持 $公式$ 与内嵌 HTML）' }
     { t:'ul', items:[...] }, { t:'ol', items:[...] }
     { t:'code', lang, code }
     { t:'note', md:'提示框' }, { t:'warn', md:'注意框' }
     { t:'tbl', head:[...], rows:双方括号 }
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('notes/comp1010.js: 必须先加载 js/registry.js');

  var T = [];

  /* ==================== Lecture 1 · 计算思维入门 ==================== */
  T.push({
    no: 'L1', title: '计算思维入门', titleEn: 'Introduction to Computational Thinking',
    tags: ['computational thinking', 'decomposition', 'abstraction', 'algorithm'],
    qids: ['p1-1-01', 'p1-1-02', 'p1-1-03', 'p1-1-04', 'p1-1-05', 'p1-1-07', 'p1-1-08', 'p1-1-11', 'p1-1-12', 'pp-1', 'pp-2'],
    blocks: [
      { t: 'p', md: '本讲回答三个问题：**什么是计算思维**、**为什么每个专业都要学**、**难题与易题的差别在哪**。' },
      { t: 'h', md: '一、什么是计算思维' },
      { t: 'p', md: '计算思维（[[computational thinking|计算思维]]）不是「会用电脑」，而是**像计算机科学家那样思考问题**：把现实问题转化为计算机能执行的形式，并评估这种转化的效率。' },
      { t: 'ul', items: [
        '它是**思维方式**，不是编程技巧 —— 编程只是把思维落地的工具。',
        '它包含四个核心要素：[[decomposition|分解]]、[[pattern recognition|模式识别]]、[[abstraction|抽象]]、[[algorithm design|算法设计]]。',
        '它是**可迁移**的：同一个思维框架能用于生物、金融、设计、医学等任何领域。'
      ]},
      { t: 'h', md: '二、四个核心要素' },
      { t: 'tbl', head: ['要素（英文）', '含义', '以「准备项目展示」为例'],
        rows: [
          ['<b>Decomposition</b><br>分解', '把复杂大问题拆成更小、更易处理的子问题', '整体拆为：写报告、做海报、准备演讲、准备问答'],
          ['<b>Pattern recognition</b><br>模式识别', '发现重复出现的结构，复用已有解法', '每组展示都是「介绍→演示→问答」，可共用同一份流程模板'],
          ['<b>Abstraction</b><br>抽象', '只保留关键信息，忽略无关细节', '排时间不必知道每人完整课表，只需知道谁有空'],
          ['<b>Algorithm design</b><br>算法设计', '设计出清晰、有限步、可执行的步骤序列', '展示当天时间表：9:00 布置 → 9:30 彩排 → 10:00 正式展示']
        ]},
      { t: 'h', md: '三、难题与易题：为什么同一个问题会「变难」' },
      { t: 'p', md: '讲义用**掷骰子**（faced die）作例子说明：问题的「难」往往不取决于问题本身，而取决于**允许使用的操作**与**资源限制**。' },
      { t: 'ul', items: [
        '如果允许直接读取点数 → 一步解决，**易**（easy problem）。',
        '如果只能两两比较「谁大」 → 需要更多步骤，**难**（hard problem）。',
        '这正是后面 Lecture 5（排序）与 Lecture 6（问题难度／可判定性）要展开的主题。'
      ]},
      { t: 'note', md: '**关键认识**：计算机科学关心的不是「能不能算出来」，而是「**要花多少步、多少存储**才能算出来」—— 这就是**效率**（efficiency）与**复杂度**（complexity）的起点。' },
      { t: 'h', md: '四、为什么计算机专业之外也要学' },
      { t: 'ul', items: [
        '任何领域都会遇到**规模大到人力无法处理**的问题（数据量、组合爆炸）。',
        '计算思维让你能判断：这个问题**值得**用程序解决吗？有**可行**的算法吗？',
        '它也是**跨专业协作**的共同语言：把业务需求翻译成算法需求。'
      ]},
      { t: 'h', md: '五、本课程的三步框架' },
      { t: 'ol', items: [
        '**理解问题**（understand the problem）—— 明确输入、输出、约束。',
        '**设计算法**（design the algorithm）—— 用[[pseudocode|伪代码]]表达。',
        '**实现与验证**（implementation & verification）—— 写成程序（Python），并用测试验证。'
      ]}
    ],
    terms: [
      ['computational thinking', '计算思维'], ['decomposition', '分解'],
      ['pattern recognition', '模式识别'], ['abstraction', '抽象'],
      ['algorithm design', '算法设计'], ['algorithm', '算法'],
      ['pseudocode', '伪代码'], ['efficiency', '效率'],
      ['complexity', '复杂度'], ['implementation', '实现'],
      ['easy / hard problem', '易题 / 难题'], ['generic education goal', '通识教育目标']
    ]
  });

  /* ==================== Lecture 2 · 数据表示与函数 ==================== */
  T.push({
    no: 'L2', title: '数据表示、函数与过程', titleEn: 'Number Representation, Function and Procedure',
    tags: ['binary', 'hexadecimal', 'two\'s complement', 'function', 'procedure'],
    qids: ['p1-1-06', 'p1-1-09', 'p1-2-03', 'p1-2-10', 'p1-5-03', 'p1-5-06', 'pp-3'],
    blocks: [
      { t: 'p', md: '计算机内部只有**两种状态**（通电／断电），因此一切数据最终都是 **0 与 1**。本讲说明：数字、字符如何被表示为二进制，以及「函数」与「过程」的区别。' },
      { t: 'h', md: '一、进制与换算' },
      { t: 'p', md: '[[binary|二进制]]（基数 2）是机器的语言；**十进制**（decimal，基数 10）是人的习惯；[[hexadecimal|十六进制]]（基数 16）与 [[octal|八进制]]（基数 8）是二者的**桥梁**。' },
      { t: 'tbl', head: ['进制', '英文', '基数', '与二进制的关系'],
        rows: [
          ['二进制', 'binary', '2', '——'],
          ['八进制', 'octal', '8', '1 位八进制 = <b>3</b> 位二进制'],
          ['十六进制', 'hexadecimal', '16', '1 位十六进制 = <b>4</b> 位二进制'],
          ['十进制', 'decimal', '10', '人的日常记法']
        ]},
      { t: 'p', md: '换算示例：$13 = 8+4+1 = 1101_{2}$，写作十六进制即 $\\texttt{0xD}$（Python 记法）。反之 $\\texttt{0b1101} = 13$。' },
      { t: 'note', md: '**为什么用十六进制**：32 位二进制要写 32 个字符，写成十六进制只需 8 个；且换算**按位无损**，不是近似。内存地址、颜色值（`#FF8800`）、文件权限（`755`）都用它。' },
      { t: 'h', md: '二、负数的表示：补码' },
      { t: 'p', md: '计算机没有「负号」，用 [[two\'s complement|补码]] 表示负数：取反加一。' },
      { t: 'ol', items: [
        '写出该数的绝对值二进制。',
        '**逐位取反**（0→1，1→0）得到**反码**（one\'s complement）。',
        '**加 1** 即得补码。'
      ]},
      { t: 'p', md: '以 8 位为例：$-5$ → $5 = 00000101$ → 取反 $11111010$ → 加一 $11111011$。' },
      { t: 'ul', items: [
        '**好处**：减法可以复用加法电路（$a-b = a+(-b)$），硬件更简单更快。',
        '**代价**：$n$ 位补码的范围是 $-2^{n-1}$ 到 $2^{n-1}-1$，比正数少一个。',
        '**溢出**（overflow）：超出范围时最高位进位被丢弃，结果错误。'
      ]},
      { t: 'h', md: '三、字符的表示' },
      { t: 'p', md: '字符用**编码表**（character encoding）映射为数字：[[ASCII|英文字符，1 字节]]与 **Unicode / UTF-8**（全球文字，变长 1–4 字节）。' },
      { t: 'p', md: '例：`A` 的 ASCII 码是 65（`0x41`），`a` 是 97。所以 `A + 32 = a` —— 大小写转换只需加减常数。' },
      { t: 'h', md: '四、函数与过程' },
      { t: 'tbl', head: ['概念', '英文', '关键区别'],
        rows: [
          ['函数', '<b>function</b>', '<b>有返回值</b>：调用后得到一个结果，可参与运算'],
          ['过程', '<b>procedure</b>', '<b>无返回值</b>：只执行一系列动作（如打印、修改状态）']
        ]},
      { t: 'code', lang: 'python', code: '# 函数：返回平方和，返回值可继续参与计算\ndef sumSq(a, b):\n    return a * a + b * b\n\nresult = sumSq(3, 4) + 1     # 返回值被使用\nprint(result)                 # 26\n\n# 过程：只做事，不返回有意义的值\ndef printBanner(name):\n    print("=== " + name + " ===")\n\nprintBanner("COMP1010")       # 只打印，不返回' },
      { t: 'note', md: '在 Python 中技术上说「所有函数都返回某个对象」—— 没有 `return` 的函数返回 `None`。所以**过程可以看作返回 `None` 的函数**。' },
      { t: 'h', md: '五、参数与返回' },
      { t: 'ul', items: [
        '**参数**（parameter）是函数定义时的占位名；**实参**（argument）是调用时传入的具体值。',
        '**按值传递**（pass by value）：Python 传的是对象的**引用**，所以传入可变对象（list/dict）时，函数内的修改会影响外部。',
        '**返回值**（return value）用 `return` 交回；一旦执行 `return`，函数立即结束。'
      ]}
    ],
    terms: [
      ['binary', '二进制'], ['decimal', '十进制'],
      ['octal', '八进制'], ['hexadecimal', '十六进制'],
      ['bit', '位'], ['byte', '字节'],
      ['two\'s complement', '补码'], ['one\'s complement', '反码'],
      ['overflow', '溢出'], ['character encoding', '字符编码'],
      ['ASCII', '美国信息交换标准代码'], ['Unicode / UTF-8', '统一码 / 变长编码'],
      ['function', '函数（有返回值）'], ['procedure', '过程（无返回值）'],
      ['parameter', '形参'], ['argument', '实参'],
      ['return value', '返回值'], ['pass by value / reference', '按值 / 按引用传递']
    ]
  });

  /* ==================== Lecture 3 · 伪代码与迭代 ==================== */
  T.push({
    no: 'L3', title: '伪代码与循环', titleEn: 'Pseudo-code and Computation I',
    tags: ['pseudocode', 'iteration', 'while', 'for', 'loop'],
    qids: ['p1-4-03', 'p1-4-04', 'p1-4-05', 'p1-4-06', 'p1-4-02', 'p1-4-07'],
    blocks: [
      { t: 'p', md: '**伪代码**（[[pseudocode|伪代码]]）是「**像代码但不是代码**」的表达方式 —— 它用接近自然语言的结构描述算法，不绑定任何编程语言的语法细节。' },
      { t: 'h', md: '一、为什么要伪代码' },
      { t: 'ul', items: [
        '**先想清楚逻辑**，再纠结语法 —— 语法错误是最容易排查的，逻辑错误才致命。',
        '**跨语言通用**：同一份伪代码可以翻译成 Python、C、Java。',
        '**沟通工具**：考试与论文里用伪代码描述算法，读者不必懂某种语言。'
      ]},
      { t: 'note', md: '词源：pseudo- 意为「假的」—— 如**伪足**（pseudopodia）。所以 pseudocode = 假代码，重点在**结构**而非语法。' },
      { t: 'h', md: '二、迭代：重复执行' },
      { t: 'p', md: '**迭代**（[[iteration|迭代]]）指重复执行一段语句。伪代码里最常用的三种形式：' },
      { t: 'tbl', head: ['形式', '英文', '特点'],
        rows: [
          ['repeat … until', '直到型循环', '<b>先执行一次</b>，再检查条件；条件为真时停止'],
          ['while … do', '当型循环', '<b>先检查</b>，条件成立才执行；可能一次都不执行'],
          ['for … do', '计数循环', '已知重复次数时使用']
        ]},
      { t: 'h', md: '三、两种迭代：定次数 vs 不定次数' },
      { t: 'tbl', head: ['类型', '英文', '何时使用'],
        rows: [
          ['定次数迭代', '<b>definite iteration</b>', '循环次数<b>事先已知</b>，如「打印 1 到 100」'],
          ['不定次数迭代', '<b>indefinite iteration</b>', '次数<b>事先未知</b>，取决于条件何时满足，如「一直掷骰子直到掷出 6」']
        ]},
      { t: 'code', lang: 'python', code: '# 不定次数迭代：掷骰子直到出现 6\nimport random\ntries = 0\nwhile True:\n    tries += 1\n    roll = random.randint(1, 6)\n    if roll == 6:\n        break\nprint("共掷了", tries, "次")' },
      { t: 'h', md: '四、用伪代码描述循环' },
      { t: 'p', md: '讲义里大量使用这类写法（注意它**不是任何一种编程语言**）：' },
      { t: 'code', lang: 'text', code: 'set j to 1\nwhile j <= 10 do\n    print j\n    j = j + 1\nend while\n\nrepeat\n    print j\n    j = j + 1\nuntil j > 10' },
      { t: 'h', md: '五、循环三要素（写循环时永远要问）' },
      { t: 'ol', items: [
        '**初始条件**（initialisation）：循环变量从哪里开始？',
        '**终止条件**（termination condition）：什么时候停？',
        '**推进**（progress）：每次循环有没有让条件**更接近终止**？否则 → [[infinite loop|死循环]]。'
      ]},
      { t: 'warn', md: '**最常见的错误**：忘记在循环体内修改控制变量。`while j <= 10: print(j)` 会永远打印下去。' },
      { t: 'h', md: '六、累加与计数：两个经典模式' },
      { t: 'code', lang: 'python', code: '# 累加模式（accumulator）：先置 0，再逐个加进去\ntotal = 0\nfor x in [3, 1, 4, 1, 5]:\n    total = total + x\n\n# 计数模式（counter）：先置 0，条件成立就加 1\ncount = 0\nfor x in [3, 1, 4, 1, 5]:\n    if x > 2:\n        count = count + 1\n\n# 求极值模式：先用第一个元素初始化，再逐个比较\nbest = [3, 1, 4, 1, 5][0]\nfor x in [3, 1, 4, 1, 5]:\n    if x > best:\n        best = x' },
      { t: 'note', md: '这三个模式（**accumulator / counter / best-so-far**）覆盖了绝大多数循环题。看到「求和」想累加，看到「有几个」想计数，看到「最大／最小」想 best-so-far。' }
    ],
    terms: [
      ['pseudocode', '伪代码'], ['iteration', '迭代'],
      ['definite iteration', '定次数迭代'], ['indefinite iteration', '不定次数迭代'],
      ['loop', '循环'], ['while loop', '当型循环'],
      ['repeat … until', '直到型循环'], ['for loop', '计数循环'],
      ['infinite loop', '死循环'], ['termination condition', '终止条件'],
      ['initialisation', '初始化'], ['accumulator', '累加器'],
      ['counter', '计数器'], ['best-so-far', '当前最优值'],
      ['trace / dry run', '手工推演'], ['step through', '单步执行']
    ]
  });

  /* ==================== Lecture 4 · 条件判断 ==================== */
  T.push({
    no: 'L4', title: '条件判断', titleEn: 'Computation II — Conditionals',
    tags: ['conditional', 'if-else', 'boolean', 'logic'],
    qids: ['p1-4-01', 'p1-4-08', 'p1-2-07', 'pp-4', 'p1-4-03'],
    blocks: [
      { t: 'p', md: '**条件判断**（[[conditional|条件判断]]）让程序能根据不同情况走不同的路 —— 这是程序具备「判断力」的开始。' },
      { t: 'h', md: '一、基本形式' },
      { t: 'code', lang: 'python', code: 'if cond then A        # 条件成立才做 A\nif cond then A else B # 成立做 A，否则做 B\nif c1 then A else if c2 then B else C   # 多分支' },
      { t: 'h', md: '二、布尔值与逻辑运算' },
      { t: 'p', md: '条件的结果是**布尔值**（[[Boolean|布尔值]]）：`True` / `False`。三种基本运算：' },
      { t: 'tbl', head: ['运算', '英文', '含义', 'Python'],
        rows: [
          ['与', '<b>AND</b> / conjunction', '两个都真才真', '`A and B`'],
          ['或', '<b>OR</b> / disjunction', '有一个真就真', '`A or B`'],
          ['非', '<b>NOT</b> / negation', '真假互换', '`not A`']
        ]},
      { t: 'h', md: '三、真假表（truth table）' },
      { t: 'tbl', head: ['A', 'B', 'A and B', 'A or B', 'not A'],
        rows: [['T','T','T','T','F'],['T','F','F','T','F'],['F','T','F','T','T'],['F','F','F','F','T']] },
      { t: 'h', md: '四、优先级与短路求值（重点）' },
      { t: 'ul', items: [
        '**优先级**（precedence）：`not` > `and` > `or`。所以 `A or B and C` 等价于 `A or (B and C)`。',
        '[[short-circuit evaluation|短路求值]]：`A and B` 中若 A 为假，**B 不会被计算**；`A or B` 中若 A 为真，B 也不会被计算。',
        '实用后果：`if x != 0 and 10 / x > 2:` 是安全的 —— `x == 0` 时右边根本不会执行。'
      ]},
      { t: 'code', lang: 'python', code: 'x = 0\n# 利用短路：x 为 0 时，10/x 不会被计算，不会报 ZeroDivisionError\nif x != 0 and 10 / x > 2:\n    print("big")\nelse:\n    print("safe")' },
      { t: 'h', md: '五、多分支与「互斥」' },
      { t: 'p', md: '**if-elif-else** 表示**互斥**（mutually exclusive）的多个条件：从上往下判断，**只执行第一个成立的分支**。' },
      { t: 'warn', md: '**顺序很重要**：若把 `elif score >= 70` 写在 `elif score >= 90` 前面，90 分也会被判成 C。**条件要从最严格写到最宽松**。' },
      { t: 'h', md: '六、讲义中的典型例子：成绩分档' },
      { t: 'p', md: '讲义用「**统计每个分数段的人数**」来说明多分支 —— 这正是 `if-elif-else` 的经典应用：' },
      { t: 'code', lang: 'python', code: 'countA = countB = countC = countD = countF = 0\nfor s in classList:\n    if   s >= 90: countA += 1\n    elif s >= 80: countB += 1\n    elif s >= 70: countC += 1\n    elif s >= 60: countD += 1\n    else:         countF += 1' },
      { t: 'note', md: '**易错点**：多个独立 `if`（不是 `elif`）会让一个分数被重复计数。互斥场景必须用 `elif`。' }
    ],
    terms: [
      ['conditional', '条件（判断）'], ['if … then … else', '如果…那么…否则'],
      ['Boolean', '布尔值'], ['conjunction (AND)', '合取（与）'],
      ['disjunction (OR)', '析取（或）'], ['negation (NOT)', '否定（非）'],
      ['truth table', '真值表'], ['precedence', '优先级'],
      ['short-circuit evaluation', '短路求值'], ['mutually exclusive', '互斥的'],
      ['nested condition', '嵌套条件'], ['De Morgan\'s laws', '德摩根律']
    ]
  });

  /* ==================== Lecture 5 · 排序 ==================== */
  T.push({
    no: 'L5', title: '排序算法', titleEn: 'Computation III — Sorting Numbers',
    tags: ['sorting', 'selection sort', 'insertion sort', 'bubble sort', 'complexity'],
    qids: ['p1-7-01', 'p1-7-03', 'p1-2-08'],
    blocks: [
      { t: 'p', md: '**排序**（[[sorting|排序]]）是计算思维最经典的练习场：它简单到能手工推演，又足以展示「不同算法效率差别巨大」。' },
      { t: 'h', md: '一、问题描述' },
      { t: 'p', md: '输入：一个数字列表。输出：同一个列表，但按**升序**（ascending）排列。约束：只能用**比较**（comparison）与**交换**（swap）操作。' },
      { t: 'h', md: '二、三种基础排序' },
      { t: 'tbl', head: ['算法（英文）', '一句话思路', '每轮做了什么'],
        rows: [
          ['<b>Selection sort</b><br>选择排序', '每轮从<b>未排序部分</b>挑出最小者，放到已排序部分末尾', '找最小值 → 与当前位置交换'],
          ['<b>Insertion sort</b><br>插入排序', '像整理扑克牌：把新元素<b>插入</b>到已排好序的前半部分中正确位置', '取下一个 → 往左挪到合适位置'],
          ['<b>Bubble sort</b><br>冒泡排序', '相邻两两比较，大的往右「冒」', '逐对比较 → 交换逆序对']
        ]},
      { t: 'h', md: '三、选择排序：手工推演' },
      { t: 'p', md: '以 $[5, 3, 8, 1]$ 为例：' },
      { t: 'tbl', head: ['轮次', '未排序部分', '找到的最小值', '交换后'],
        rows: [
          ['第 1 轮', '$[5,3,8,1]$', '$1$（下标 3）', '$[1,3,8,5]$'],
          ['第 2 轮', '$[3,8,5]$', '$3$（已在位）', '$[1,3,8,5]$'],
          ['第 3 轮', '$[8,5]$', '$5$（下标 3）', '$[1,3,5,8]$'],
          ['结束', '$[8]$', '只剩一个，天然有序', '$[1,3,5,8]$']
        ]},
      { t: 'code', lang: 'python', code: 'def selection_sort(a):\n    n = len(a)\n    for i in range(n - 1):\n        minIdx = i                       # 假设当前位置最小\n        for j in range(i + 1, n):        # 在未排序部分找更小的\n            if a[j] < a[minIdx]:\n                minIdx = j\n        a[i], a[minIdx] = a[minIdx], a[i]  # 交换到已排序部分末尾\n    return a' },
      { t: 'h', md: '四、冒泡排序（讲义重点）' },
      { t: 'p', md: '**核心操作**：只比较**相邻**两个元素，若逆序就交换。每完成一轮，当前最大的元素必定「冒」到最右边。' },
      { t: 'p', md: '以 $[5, 1, 4, 2, 8]$ 为例，第 1 轮：' },
      { t: 'ul', items: [
        '$5 > 1$ → 交换 → $[1,5,4,2,8]$',
        '$5 > 4$ → 交换 → $[1,4,5,2,8]$',
        '$5 > 2$ → 交换 → $[1,4,2,5,8]$',
        '$5 < 8$ → 不换 → $[1,4,2,5,8]$（$8$ 已就位）'
      ]},
      { t: 'code', lang: 'python', code: 'def bubble_sort(a):\n    n = len(a)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(n - 1 - i):        # 末尾 i 个已就位\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n                swapped = True\n        if not swapped:                   # 本轮无交换 → 已有序，提前退出\n            break\n    return a' },
      { t: 'note', md: '**`swapped` 标记的价值**：若某一轮完全没有发生交换，说明列表已经有序，可以**提前结束** —— 这让「已经排好序」的输入从 $O(n^{2})$ 降到 $O(n)$。' },
      { t: 'h', md: '五、效率比较：为什么算法选择很重要' },
      { t: 'tbl', head: ['算法', '比较次数（最坏）', '是否原地', '是否稳定'],
        rows: [
          ['选择排序', '$\\frac{n(n-1)}{2} = O(n^{2})$', '是', '否'],
          ['插入排序', '$O(n^{2})$，近乎有序时 $O(n)$', '是', '是'],
          ['冒泡排序', '$O(n^{2})$', '是', '是']
        ]},
      { t: 'p', md: '以 $n = 1000$ 为例：$O(n^{2})$ 约需 $5\\times10^{5}$ 次比较，而高效算法（**merge sort** 归并排序、**quicksort** 快速排序）只需约 $10^{4}$ 次 —— 相差 **50 倍**。' },
      { t: 'warn', md: '**本讲的核心结论**：解决同一个问题的不同算法，效率可能相差几个数量级。**选对算法比优化代码更有效**。' }
    ],
    terms: [
      ['sorting', '排序'], ['ascending / descending', '升序 / 降序'],
      ['comparison', '比较'], ['swap', '交换'],
      ['selection sort', '选择排序'], ['insertion sort', '插入排序'],
      ['bubble sort', '冒泡排序'], ['merge sort', '归并排序'],
      ['quicksort', '快速排序'], ['in-place', '原地（不需额外空间）'],
      ['stable sort', '稳定排序'], ['worst case / best case', '最坏 / 最好情况'],
      ['time complexity', '时间复杂度'], ['early exit', '提前退出']
    ]
  });

  /* ==================== Lecture 6 · 问题难度与可判定性 ==================== */
  T.push({
    no: 'L6', title: '问题难度与可判定性', titleEn: 'Computation IV — Hardness and Decidability',
    tags: ['complexity', 'decidability', 'halting problem', 'P vs NP'],
    qids: ['p1-7-04', 'p1-7-05', 'pp-5', 'pp-6'],
    blocks: [
      { t: 'p', md: '前面几讲都在问「**怎么**解决问题」；本讲换一个角度问：「有些问题**根本**能被解决吗？如果能，要花多久？」' },
      { t: 'h', md: '一、两个独立的问题' },
      { t: 'tbl', head: ['问题', '英文', '含义'],
        rows: [
          ['可判定性', '<b>decidability</b>', '存在一个算法，能在<b>有限步内</b>对任何输入给出「是／否」的正确答案吗？'],
          ['难度', '<b>hardness / complexity</b>', '如果可解，需要的<b>时间 / 空间</b>随输入规模如何增长？']
        ]},
      { t: 'h', md: '二、不可判定：停机问题' },
      { t: 'p', md: '**停机问题**（[[halting problem|停机问题]]）是最著名的不可判定问题：' },
      { t: 'note', md: '给定任意程序 $P$ 与输入 $x$，判断「$P$ 在 $x$ 上最终会**停机**（halt）还是**永远运行**（loop forever）」—— **不存在**这样的通用算法。' },
      { t: 'p', md: '**为什么**不可判定（证明思路，反证法）：' },
      { t: 'ol', items: [
        '假设存在判定程序 `halts(P, x)`，能正确回答任意程序是否停机。',
        '构造一个「捣蛋」程序 `Trick(P)`：如果 `halts(P, P)` 说「会停机」，就故意**死循环**；否则立刻停机。',
        '现在把 `Trick` 喂给自己：`Trick(Trick)`。',
        '若说它会停机 → 它偏偏死循环；若说它会死循环 → 它偏偏停机。**矛盾**。',
        '所以 `halts` 不存在，停机问题不可判定。'
      ]},
      { t: 'code', lang: 'text', code: 'def Trick(P):\n    if halts(P, P):      # 若判定说 P(P) 会停机\n        while True: pass # ...那本程序就死循环\n    else:\n        return           # 否则本程序立刻停机' },
      { t: 'h', md: '三、难度层级：从易到难的谱系' },
      { t: 'tbl', head: ['类别', '英文', '直观含义', '例子'],
        rows: [
          ['多项式时间', '<b>P</b>', '能在「可接受时间内」解出', '排序、最短路、最大流'],
          ['非确定多项式', '<b>NP</b>', '给定答案后，能在多项式时间内<b>验证</b>', '数独、旅行商判定版'],
          ['NP-完全', '<b>NP-complete</b>', 'NP 中<b>最难</b>的一类，彼此可互相转化', 'SAT、哈密顿回路、图着色'],
          ['不可判定', '<b>undecidable</b>', '<b>不存在</b>任何算法能解决', '停机问题、程序等价性']
        ]},
      { t: 'p', md: '**$P$ 是否等于 $NP$** 是计算机科学最大的未解问题之一（千禧年大奖难题）。目前的共识是 $P \\neq NP$ —— 即很多问题**本质上**不可能高效求解。' },
      { t: 'h', md: '四、面对难问题的实用策略' },
      { t: 'ul', items: [
        '**近似算法**（approximation algorithm）：不追求最优，保证「与最优的差距不超过某个倍数」。',
        '**启发式**（heuristic）：靠经验规则快速找到「够好」的解，但不保证最优。',
        '**特例求解**：一般情形难，但对实际出现的**受限输入**可能有高效算法。',
        '**问题转化**：把 NP-完全问题转化／简化为更容易的形式。'
      ]},
      { t: 'note', md: '**思维方式的转变**：认识到「有些问题无解／极难」本身就是重要的结论 —— 它让你**停止徒劳的优化**，转而寻求近似或换一种问题定义。' }
    ],
    terms: [
      ['decidability', '可判定性'], ['undecidable', '不可判定的'],
      ['halting problem', '停机问题'], ['halt', '停机'],
      ['loop forever', '死循环'], ['proof by contradiction', '反证法'],
      ['tractable / intractable', '可处理的 / 难处理的'],
      ['polynomial time (P)', '多项式时间'], ['NP', '非确定多项式时间'],
      ['NP-complete', 'NP-完全'], ['reduction', '归约'],
      ['approximation algorithm', '近似算法'], ['heuristic', '启发式方法'],
      ['brute force', '暴力枚举']
    ]
  });

  /* ==================== Lecture 7 · 问题求解 I（Pólya） ==================== */
  T.push({
    no: 'L7', title: '问题求解方法论（Pólya 四步）', titleEn: 'Problem Solving I — Pólya\'s Method',
    tags: ['problem solving', 'Polya', 'strategy'],
    qids: ['p1-8-01', 'p1-8-02', 'p1-7-04'],
    blocks: [
      { t: 'p', md: '数学家 **George Pólya**（波利亚）在《怎样解题》中提出的**四步法**，是本课程求解任何问题的总纲。' },
      { t: 'h', md: '一、Pólya 四步' },
      { t: 'tbl', head: ['步骤', '英文', '要问自己的问题'],
        rows: [
          ['① 理解问题', '<b>Understand the problem</b>', '未知量是什么？已知量是什么？条件是什么？条件够吗？'],
          ['② 制定计划', '<b>Devise a plan</b>', '以前见过类似的题吗？能拆成小问题吗？能换个角度吗？'],
          ['③ 执行计划', '<b>Carry out the plan</b>', '每一步都能验证吗？能证明这一步是对的吗？'],
          ['④ 回顾', '<b>Look back</b>', '结果合理吗？能检验吗？能用到别的题上吗？']
        ]},
      { t: 'note', md: '**最容易跳过的是第 4 步「回顾」** —— 但它恰恰是学习发生的地方：把「解出这一题」变成「获得一个可复用的方法」。' },
      { t: 'h', md: '二、常用解题策略' },
      { t: 'tbl', head: ['策略', '英文', '说明'],
        rows: [
          ['从特例入手', '<b>work with a special case</b>', '先试 $n=1,2,3$，观察规律再推广'],
          ['画图', '<b>draw a diagram</b>', '把抽象关系可视化，常能直接看出结构'],
          ['引入符号', '<b>introduce notation</b>', '给未知量取名，把文字变成式子'],
          ['倒推', '<b>work backwards</b>', '从目标出发，反推需要什么条件'],
          ['类比', '<b>analogy</b>', '寻找与已知问题的相似结构'],
          ['逐层简化', '<b>simplify</b>', '先解去掉约束的版本，再逐步加回'],
          ['奇偶／极端检验', '<b>parity / extremal check</b>', '检查奇偶性、最大最小情形，排除大量可能']
        ]},
      { t: 'h', md: '三、举例：用四步法解「鸡兔同笼」' },
      { t: 'ol', items: [
        '**理解**：头共 35，脚共 94。未知：鸡数 $c$、兔数 $r$。',
        '**计划**：引入符号建立方程 —— $c + r = 35$，$2c + 4r = 94$。',
        '**执行**：由第一式 $c = 35 - r$，代入第二式：$70 - 2r + 4r = 94 \\Rightarrow 2r = 24 \\Rightarrow r = 12$，故 $c = 23$。',
        '**回顾**：验算 $23 + 12 = 35$ ✔，$2(23) + 4(12) = 46 + 48 = 94$ ✔。结果合理（鸡比兔多，符合脚数偏少）。'
      ]},
      { t: 'h', md: '四、把方法论落到编程' },
      { t: 'ul', items: [
        '**理解** → 明确**输入／输出／约束**（input / output / constraint）。',
        '**计划** → 选数据结构 + 写**伪代码**。',
        '**执行** → 编码 + **手工推演**（trace）验证。',
        '**回顾** → 测试边界情况（**edge case**）：空输入、单个元素、最大值、重复值。'
      ]},
      { t: 'warn', md: '**测试边界情况**是「回顾」在编程中的具体化。绝大多数 bug 都藏在空输入、越界、以及「只有一个元素」这些情形里。' }
    ],
    terms: [
      ['problem solving', '问题求解'], ['understand the problem', '理解问题'],
      ['devise a plan', '制定计划'], ['carry out the plan', '执行计划'],
      ['look back', '回顾'], ['special case', '特例'],
      ['diagram', '示意图'], ['notation', '记号'],
      ['work backwards', '倒推'], ['analogy', '类比'],
      ['simplify', '化简'], ['trial and error', '试错'],
      ['edge case', '边界情况'], ['counterexample', '反例']
    ]
  });

  /* ==================== Lecture 8 · 问题求解 II（抽象与建模） ==================== */
  T.push({
    no: 'L8', title: '抽象与数据建模', titleEn: 'Problem Solving II — Abstraction and Data Modelling',
    tags: ['abstraction', 'data modelling', 'representation'],
    qids: ['p1-3-01', 'p1-3-02', 'p1-3-04', 'p1-3-06'],
    blocks: [
      { t: 'p', md: '本讲把 Lecture 1 提到的[[abstraction|抽象]]具体化：如何从现实世界里**抽取**出计算机能处理的数据模型。' },
      { t: 'h', md: '一、抽象的层次' },
      { t: 'p', md: '抽象不是「一次做完」，而是**分层**的：每一层只暴露必要的接口，隐藏实现细节。' },
      { t: 'tbl', head: ['层次', '英文', '例子'],
        rows: [
          ['问题层', 'problem level', '「找出最快的路线」'],
          ['模型层', 'model level', '把城市抽象为<b>图的顶点</b>，道路抽象为<b>带权的边</b>'],
          ['数据结构层', 'data structure level', '用<b>邻接表</b>（adjacency list）存图'],
          ['实现层', 'implementation level', 'Python 里用 `dict` + `list` 表示邻接表']
        ]},
      { t: 'note', md: '**判断抽象是否成功的标准**：它是否**保留**了解决问题所需的信息，同时**丢掉**了无关信息。丢掉太多 → 解不出；丢掉太少 → 问题依旧复杂。' },
      { t: 'h', md: '二、数据建模的步骤' },
      { t: 'ol', items: [
        '**识别实体**（entity）：问题中有哪些对象？（学生、课程、道路……）',
        '**识别属性**（attribute）：每个实体关心哪些特征？（学号、成绩、距离……）',
        '**识别关系**（relationship）：实体之间如何关联？（选修、连接……）',
        '**选择数据结构**（data structure）：用列表？字典？图？树？',
        '**验证模型**：用模型能否**表达**原问题的所有约束？'
      ]},
      { t: 'h', md: '三、同一个现实，不同的模型' },
      { t: 'p', md: '以「地铁系统」为例，不同问题需要不同抽象：' },
      { t: 'tbl', head: ['要解决的问题', '抽象成什么', '忽略什么'],
        rows: [
          ['最短乘车时间', '带权无向图（边权 = 分钟）', '站台长度、出入口位置'],
          ['最少换乘次数', '无权图（或边权恒为 1）', '实际距离与时间'],
          ['票价计算', '按距离分段的函数', '换乘次数、拥挤程度'],
          ['找最近的洗手间', '按站点的索引 / 哈希表', '整条线路的连通性']
        ]},
      { t: 'note', md: '**没有「唯一正确」的模型** —— 只有「对当前问题合适」的模型。同一个现实可以抽象成完全不同的数据结构。' },
      { t: 'h', md: '四、模型的选择影响算法' },
      { t: 'ul', items: [
        '选**邻接矩阵**（adjacency matrix）：判断两点是否相邻 $O(1)$，但占 $O(n^{2})$ 空间 → 适合**稠密图**。',
        '选**邻接表**（adjacency list）：空间 $O(n+e)$，遍历邻居快 → 适合**稀疏图**。',
        '同一张图，选错模型可能让程序在大规模输入上**无法运行**。'
      ]},
      { t: 'h', md: '五、抽象在编程中的体现' },
      { t: 'code', lang: 'python', code: '# 抽象：把"地图"这件事封装成接口\nclass Map:\n    def shortest_path(self, a, b):\n        """返回 a 到 b 的最短时间；内部用图算法实现"""\n        ...\n\n# 使用者只依赖这个接口，不关心内部是邻接表还是矩阵\nm = Map("subway.txt")\nprint(m.shortest_path("PolyU", "Central"))' },
      { t: 'p', md: '这就是**函数**与**类**存在的意义：它们把「怎么做的」藏起来，只暴露「能做什么」。' }
    ],
    terms: [
      ['abstraction', '抽象'], ['data modelling', '数据建模'],
      ['entity', '实体'], ['attribute', '属性'],
      ['relationship', '关系'], ['data structure', '数据结构'],
      ['representation', '表示（方式）'], ['model', '模型'],
      ['interface', '接口'], ['implementation detail', '实现细节'],
      ['encapsulation', '封装'], ['adjacency list / matrix', '邻接表 / 邻接矩阵'],
      ['dense / sparse', '稠密 / 稀疏'], ['trade-off', '权衡']
    ]
  });

  /* ==================== Lecture 9 · 图作为数据抽象 ==================== */
  T.push({
    no: 'L9', title: '图：作为数据抽象', titleEn: 'Problem Solving III — Graph as a Data Abstraction',
    tags: ['graph', 'vertex', 'edge', 'directed', 'weighted'],
    qids: ['p1-7-05', 'p1-3-02'],
    blocks: [
      { t: 'p', md: '**图**（[[graph|图]]）是最强大的数据抽象之一 —— 只要事物之间存在「**连接**」关系，就能用图来建模。' },
      { t: 'h', md: '一、为什么图如此常见' },
      { t: 'ul', items: [
        '**交通**：城市是顶点，道路是边；',
        '**社交**：人是顶点，好友关系是边；',
        '**网页**：页面是顶点，超链接是边；',
        '**课程规划**：课程是顶点，先修要求是边（有向！）；',
        '**电路、分子结构、编译器依赖……** 无处不在。'
      ]},
      { t: 'note', md: '讲义的原话是「Graphs are so common」—— 因为**关系**比**对象**更普遍。学会用图看世界，是把现实问题转成算法问题的关键一步。' },
      { t: 'h', md: '二、基本术语' },
      { t: 'tbl', head: ['术语', '英文', '含义'],
        rows: [
          ['顶点', '<b>vertex</b>（复数 vertices）', '图中的「对象」，画成圆点'],
          ['边', '<b>edge</b>', '连接两个顶点的「关系」，画成线'],
          ['无向图', '<b>undirected graph</b>', '边没有方向：$A$—$B$ 与 $B$—$A$ 相同'],
          ['有向图', '<b>directed graph</b> / digraph', '边有方向：$A \\to B$ 与 $B \\to A$ 不同'],
          ['带权图', '<b>weighted graph</b>', '边上带有数值（距离、费用、时间）'],
          ['度', '<b>degree</b>', '与某顶点相连的边的条数'],
          ['路径', '<b>path</b>', '沿边从一个顶点走到另一个顶点的序列'],
          ['回路', '<b>cycle</b>', '起点与终点相同的路径'],
          ['连通', '<b>connected</b>', '任意两顶点之间都有路径']
        ]},
      { t: 'h', md: '三、有向 vs 无向：如何判断' },
      { t: 'p', md: '**判据**：关系是否**对称**？' },
      { t: 'ul', items: [
        '「$A$ 是 $B$ 的朋友」→ 通常对称 → **无向图**。',
        '「$A$ 是 $B$ 的先修课」→ 不对称 → **有向图**。',
        '「$A$ 到 $B$ 有单行道」→ 有向。'
      ]},
      { t: 'h', md: '四、握手定理（Handshaking Lemma）' },
      { t: 'note', md: '在任意无向图中，**所有顶点的度数之和 $= 2\\times$ 边数**。' },
      { t: 'p', md: '即 $\\displaystyle\\sum_{v} \\deg(v) = 2|E|$。理由：每条边连接两个顶点，对**两端的度数各贡献 1**，所以被数了两次。' },
      { t: 'ul', items: [
        '**推论 1**：度数之和必为**偶数**。',
        '**推论 2**：奇度顶点的个数必为**偶数**（这条在 Lecture 12 判欧拉通路时是关键）。',
        '**用途**：快速检查「题目给的度数序列是否可能」—— 例如 $(3,3,3)$ 不可能（和为 9，奇数）。'
      ]},
      { t: 'h', md: '五、用图建模的完整例子' },
      { t: 'p', md: '问题：「为学生安排最少的考场，使有冲突的课程不同场」' },
      { t: 'ol', items: [
        '**抽象**：课程 = 顶点；「有学生同时选了两门」= 边。',
        '**转化**：问题变成「给顶点染色，使相邻顶点颜色不同，最少用几种颜色」——这就是**图着色**（graph colouring）。',
        '**结论**：图着色是 **NP-完全**问题（Lecture 6），但实际规模小，可用贪心算法求近似解。'
      ]},
      { t: 'note', md: '这个例子串起了整门课：**抽象**（L8）→ **图模型**（L9）→ **算法**（L10-12）→ **难度认知**（L6）。' }
    ],
    terms: [
      ['graph', '图'], ['vertex (vertices)', '顶点'],
      ['edge', '边'], ['undirected graph', '无向图'],
      ['directed graph / digraph', '有向图'], ['weighted graph', '带权图'],
      ['degree', '度'], ['path', '路径'],
      ['cycle', '回路（环）'], ['connected', '连通的'],
      ['adjacent', '相邻的'], ['self-loop', '自环'],
      ['handshaking lemma', '握手定理'], ['graph colouring', '图着色'],
      ['data abstraction', '数据抽象']
    ]
  });

  /* ==================== Lecture 10 · 图的表示 ==================== */
  T.push({
    no: 'L10', title: '图的两种表示法', titleEn: 'Problem Solving III — Graph Representations',
    tags: ['adjacency matrix', 'adjacency list', 'representation', 'complexity'],
    qids: ['p1-7-05', 'p1-8-04'],
    blocks: [
      { t: 'p', md: '图是**抽象**，要写程序就得选一种**表示法**（representation）。讲义强调两种：[[adjacency matrix|邻接矩阵]]与 [[adjacency list|邻接表]]。' },
      { t: 'h', md: '一、邻接矩阵（Adjacency Matrix）' },
      { t: 'p', md: '用一个 $n \\times n$ 的二维数组：$M[i][j]$ 表示顶点 $i$ 到 $j$ 是否有边（无权图用 0/1），或边的权重（带权图）。' },
      { t: 'p', md: '以 $a$—$b$、$a$—$c$、$b$—$d$、$c$—$d$ 为例（顶点顺序 $a,b,c,d$）：' },
      { t: 'code', lang: 'text', code: '      a  b  c  d\n   a [0, 1, 1, 0]\n   b [1, 0, 0, 1]\n   c [1, 0, 0, 1]\n   d [0, 1, 1, 0]' },
      { t: 'ul', items: [
        '**无向图的矩阵一定对称**（$M[i][j] = M[j][i]$）。',
        '**对角线全为 0**（简单图无自环）。',
        '**第 $i$ 行元素之和 = 顶点 $i$ 的度**（无向图）。',
        '判断「$i$ 与 $j$ 是否相邻」是 $O(1)$ —— 直接查下标。'
      ]},
      { t: 'h', md: '二、邻接表（Adjacency List）' },
      { t: 'p', md: '为每个顶点维护一个「邻居列表」。同样的图：' },
      { t: 'code', lang: 'python', code: 'graph = {\n    "a": ["b", "c"],\n    "b": ["a", "d"],\n    "c": ["a", "d"],\n    "d": ["b", "c"],\n}\n# 带权图则存 (邻居, 权重)\nweighted = {"a": [("b", 3), ("c", 5)], "b": [("a", 3), ("d", 2)], ...}' },
      { t: 'h', md: '三、两者对比（本讲核心）' },
      { t: 'tbl', head: ['操作 / 指标', '邻接矩阵', '邻接表'],
        rows: [
          ['空间', '$O(n^{2})$（与边数无关）', '$O(n + e)$'],
          ['判断 $i,j$ 是否相邻', '$O(1)$', '$O(\\deg(i))$'],
          ['列出某点的所有邻居', '$O(n)$', '$O(\\deg(i))$ ✓'],
          ['遍历整张图', '$O(n^{2})$', '$O(n + e)$ ✓'],
          ['适合', '稠密图（$e \\approx n^{2}$）', '稀疏图（$e \\ll n^{2}$）'],
          ['带权', '直接存权重', '存 (邻居, 权重) 对']
        ]},
      { t: 'p', md: '**规模差距有多大**：若 $n = 10000$、$e = 20000$（典型的稀疏图），' },
      { t: 'ul', items: [
        '邻接矩阵需 $10^{8}$ 个存储单元；',
        '邻接表只需约 $2e = 40000$ 项；',
        '相差约 **2500 倍** —— 这就是为什么图算法几乎都用邻接表。'
      ]},
      { t: 'note', md: '**选择原则**：先问「图有多稀疏」。社交网络（每人平均几十个好友）极稀疏 → 邻接表；完整航线图（任意两城都有直飞）很稠密 → 矩阵更直接。' },
      { t: 'h', md: '四、代码：两种表示的互转' },
      { t: 'code', lang: 'python', code: '# 邻接矩阵 → 邻接表\ndef matrix_to_list(M, names):\n    g = {}\n    for i, u in enumerate(names):\n        g[u] = [names[j] for j in range(len(names))\n                if M[i][j] != 0 and i != j]\n    return g\n\n# 邻接表 → 邻接矩阵\ndef list_to_matrix(g, names):\n    n = len(names)\n    idx = {u: i for i, u in enumerate(names)}\n    M = [[0] * n for _ in range(n)]\n    for u, nbrs in g.items():\n        for v in nbrs:\n            M[idx[u]][idx[v]] = 1\n    return M' },
      { t: 'warn', md: '**`M = [[0]*n]*n` 是错的**：这样得到的 $n$ 行是**同一个列表**，改一行会全改。必须用列表推导 `[[0]*n for _ in range(n)]`。' }
    ],
    terms: [
      ['adjacency matrix', '邻接矩阵'], ['adjacency list', '邻接表'],
      ['representation', '表示法'], ['dense graph', '稠密图'],
      ['sparse graph', '稀疏图'], ['symmetric matrix', '对称矩阵'],
      ['space complexity', '空间复杂度'], ['traversal', '遍历'],
      ['edge list', '边列表'], ['incidence matrix', '关联矩阵']
    ]
  });

  /* ==================== Lecture 11-12 · 最短路径 ==================== */
  T.push({
    no: 'L11', title: '最短路径（Dijkstra）', titleEn: 'Problem Solving IV — Shortest Path',
    tags: ['shortest path', 'Dijkstra', 'greedy', 'relaxation'],
    blocks: [
      { t: 'p', md: '**最短路径**（[[shortest path|最短路径]]）是图上最重要的实用问题：导航、网络路由、任务调度都靠它。' },
      { t: 'h', md: '一、问题定义' },
      { t: 'p', md: '给定**带权图**与起点 $s$、终点 $t$，求从 $s$ 到 $t$ 的**总权重最小**的路径。' },
      { t: 'note', md: '注意「最短」指的是**权重之和最小**，不是「边数最少」。边权可以是距离、时间、费用、油耗 —— 任何可加的量。' },
      { t: 'h', md: '二、Dijkstra 算法的直觉' },
      { t: 'p', md: '[[Dijkstra’s algorithm|迪杰斯特拉算法]]（德克斯特拉）算法采用 [[greedy|贪心]] 策略：每次从「还没确定的顶点」中，挑出**当前已知距离最小**的那个，宣布它的距离已最终确定，然后用它去**更新**（[[relaxation|松弛]]）邻居的距离。' },
      { t: 'p', md: '**为什么贪心是对的非负权图**：设 $u$ 是当前距离最小的未确定顶点，若存在更短的路到 $u$，那条路必须先经过某个未确定顶点 $y$，于是 $d(y) \\le d(u)$ —— 与「$u$ 最小」矛盾。' },
      { t: 'h', md: '三、逐步推演（手工 trace 是考试重点）' },
      { t: 'p', md: '图：$S\\to A=3$，$S\\to B=5$，$A\\to B=1$，$A\\to C=6$，$B\\to C=2$，$B\\to D=4$，$C\\to D=1$，$C\\to E=7$，$D\\to E=2$。' },
      { t: 'tbl', head: ['轮次', '取出', '$d(S)$', '$d(A)$', '$d(B)$', '$d(C)$', '$d(D)$', '$d(E)$'],
        rows: [
          ['初始', '—', '$0$', '$\\infty$', '$\\infty$', '$\\infty$', '$\\infty$', '$\\infty$'],
          ['1', '$S$', '$0$', '$3$', '$5$', '$\\infty$', '$\\infty$', '$\\infty$'],
          ['2', '$A$', '$0$', '$3$', '$\\mathbf{4}$', '$9$', '$\\infty$', '$\\infty$'],
          ['3', '$B$', '$0$', '$3$', '$4$', '$\\mathbf{6}$', '$\\mathbf{8}$', '$\\infty$'],
          ['4', '$C$', '$0$', '$3$', '$4$', '$6$', '$\\mathbf{7}$', '$13$'],
          ['5', '$D$', '$0$', '$3$', '$4$', '$6$', '$7$', '$\\mathbf{9}$'],
          ['6', '$E$', '$0$', '$3$', '$4$', '$6$', '$7$', '$9$']
        ]},
      { t: 'p', md: '**出队顺序**：$S \\to A \\to B \\to C \\to D \\to E$；**$S$ 到 $E$ 最短距离** $= 9$；**路径** $S \\to A \\to B \\to C \\to D \\to E$。' },
      { t: 'warn', md: '**第 2 轮是关键**：取 $A$ 后发现 $A\\to B$ 把 $d(B)$ 从 $5$ **更新为 $4$**。若漏掉这次松弛，后面全错。' },
      { t: 'h', md: '四、算法伪代码' },
      { t: 'code', lang: 'text', code: 'set d[s] = 0, d[others] = infinity\nset S = empty            # 已确定最短距离的顶点集\nwhile there is an unsettled vertex:\n    u = the unsettled vertex with smallest d\n    add u to S\n    for each edge (u, v, w) with v not in S:\n        if d[u] + w < d[v]:\n            d[v] = d[u] + w      # 松弛（relaxation）\n            prev[v] = u          # 记录前驱，便于回溯路径' },
      { t: 'h', md: '五、复杂度与实现' },
      { t: 'tbl', head: ['实现方式', '时间复杂度'],
        rows: [
          ['朴素数组扫描', '$O(n^{2})$'],
          ['二叉堆（binary heap）', '$O((n + e)\\log n)$，常写作 $O(e\\log n)$ ✓'],
          ['斐波那契堆', '$O(e + n\\log n)$']
        ]},
      { t: 'h', md: '六、重要限制：不能有负权边' },
      { t: 'p', md: '**Dijkstra 要求所有边权非负。** 反例：$S\\to A=2$，$S\\to B=3$，$B\\to A=-2$。' },
      { t: 'ul', items: [
        '第 1 轮取出 $A$（距离 2），宣布 $d(A)=2$；',
        '第 2 轮取出 $B$（距离 3），松弛 $B\\to A$ 得 $3-2=1 < 2$ —— 但 $A$ 已出队，**不再更新**；',
        '结果错报 $d(A)=2$，而真实最短是 $1$。'
      ]},
      { t: 'note', md: '**有负权时改用 Bellman–Ford 算法**（$O(ne)$），它还能检测**负环**（negative cycle）；若需全源最短路，可用 Johnson 算法。' },
      { t: 'h', md: '七、其他经典图算法（对照记忆）' },
      { t: 'tbl', head: ['算法', '解决什么', '策略', '关键复杂度'],
        rows: [
          ['<b>BFS</b> 广度优先', '无权图最短路', '队列逐层扩展', '$O(n+e)$'],
          ['<b>DFS</b> 深度优先', '连通性、找环、拓扑排序', '栈／递归', '$O(n+e)$'],
          ['<b>Dijkstra</b>', '非负权单源最短路', '贪心 + 松弛', '$O(e\\log n)$'],
          ['<b>Bellman–Ford</b>', '含负权单源最短路', '反复松弛 $n-1$ 轮', '$O(ne)$'],
          ['<b>Kruskal / Prim</b>', '最小生成树 MST', '贪心选边 / 选点', '$O(e\\log e)$ / $O(e\\log n)$'],
          ['<b>Floyd–Warshall</b>', '全源最短路', '动态规划', '$O(n^{3})$'],
          ['<b>Max-flow</b>', '网络最大流', '增广路 / 割', '依实现而定']
        ]},
      { t: 'note', md: '**一句话记忆**：BFS 管**无权**，Dijkstra 管**非负权**，Bellman–Ford 管**负权**，Floyd 管**全源**，Kruskal/Prim 管**生成树**。' }
    ],
    terms: [
      ['shortest path', '最短路径'], ['Dijkstra\'s algorithm', '迪杰斯特拉算法'],
      ['greedy', '贪心（策略）'], ['relaxation', '松弛'],
      ['distance label', '距离标号'], ['predecessor', '前驱'],
      ['priority queue', '优先队列'], ['binary heap', '二叉堆'],
      ['BFS / DFS', '广度优先 / 深度优先搜索'],
      ['Bellman–Ford', '贝尔曼–福特算法'], ['Floyd–Warshall', '弗洛伊德算法'],
      ['minimum spanning tree', '最小生成树'],
      ['negative cycle', '负环'], ['source / sink', '源点 / 汇点'],
      ['backtrack the path', '回溯路径']
    ]
  });

  /* ==================== Lab 精要 ==================== */
  T.push({
    no: 'LAB', title: 'Lab 实验要点（Python 实操）', titleEn: 'Lab Essentials — Hands-on Python',
    tags: ['python', 'lab', 'practice', 'syntax'],
    qids: ['p1-2-01', 'p1-2-02', 'p1-2-04', 'p1-2-05', 'p1-2-09', 'p1-3-03', 'p1-3-05', 'p1-3-07', 'p1-3-08', 'p1-3-09', 'p1-3-10', 'p1-3-11', 'p1-5-01', 'p1-5-02', 'p1-5-04', 'p1-5-05', 'p1-6-01', 'p1-6-02', 'p1-6-03', 'p1-6-04', 'p1-6-05', 'p1-6-06', 'p1-6-07', 'p1-8-03', 'p1-8-04', 'p1-8-05'],
    blocks: [
      { t: 'p', md: 'Lab 1–12 把讲义的概念落到 **Python 代码**。这里汇总最容易出错、也最常考的实操要点。' },
      { t: 'h', md: '零、Python 基础与类型（Lab 1–4）' },
      { t: 'ul', items: [
        '**动态类型**（dynamically typed）：变量不需要声明类型，`x = 5` 之后还能 `x = "abc"`；',
        '**整数**（`int`）精度不受限（Python 3 中 `2**100` 能精确算出）；**浮点**（`float`）是二进制近似，所以 `0.1 + 0.2 != 0.3`；',
        '**字符串**（`str`）**不可变**（immutable）：`s[0] = "x"` 会抛 `TypeError`；',
        '**布尔**（`bool`）是 `int` 的子类：`True == 1`、`False == 0`；',
        '**None** 表示「没有值」，判断要用 `is None` 而不是 `== None`。'
      ]},
      { t: 'code', lang: 'python', code: '# 浮点误差：不要用 == 比较浮点数\nprint(0.1 + 0.2)          # 0.30000000000000004\nprint(0.1 + 0.2 == 0.3)   # False\nprint(abs((0.1+0.2) - 0.3) < 1e-9)  # True：应该这样比\n\n# 整除与取模：负数向负无穷取整（Python 与 C 不同！）\nprint(-7 // 2)   # -4   （C 会得 -3）\nprint(-7 % 2)    # 1    余数符号跟随除数\nprint(divmod(-7, 2))  # (-4, 1)\n\n# 字符串操作\ns = "python"\nprint(s[0], s[-1], s[2:5])   # p n tho   （切片左闭右开）\nprint("banana".count("a"))    # 3\nprint("banana".find("na"))    # 2  找不到返回 -1' },
      { t: 'note', md: '**整数除法 `//` 对负数的行为是考点**：Python 是**向下取整**（floor），不是向零截断。`-7 // 2 = -4`，而 `-7 % 2 = 1`（因为 $-7 = 2\times(-4)+1$）。' },
      { t: 'h', md: '一、输入与输出' },
      { t: 'code', lang: 'python', code: 'name = input("Your name: ")      # 注意：input 返回的是【字符串】\nage  = int(input("Your age: "))  # 要做数字运算必须转换\n\nprint("Hi", name)               # 多个参数用空格分隔\nprint(f"{name} is {age}")        # f-string 格式化（推荐）\nprint("Age:", age, sep="")       # sep 控制分隔符\nprint("no newline", end=" ")     # end 控制结尾' },
      { t: 'warn', md: '**`input()` 永远返回字符串。** 忘了 `int()` 转换是最常见的 bug：`"5" + "3"` 得到 `"53"` 而不是 `8`。' },
      { t: 'h', md: '二、字符串处理' },
      { t: 'code', lang: 'python', code: 's = "Hello, World"\n\ns.upper()          # 全部大写\ns.lower()          # 全部小写\ns.split(",")       # 按分隔符切成列表 -> [\'Hello\', \' World\']\ns.strip()          # 去掉两端空白\ns.replace("l", "L") # 替换\ns.find("o")        # 首次出现下标，找不到返回 -1\ns.count("l")       # 出现次数\n"a,b,c".split(",")  # 常用：解析一行输入\n" ".join(["x","y"]) # 把列表拼成字符串 -> "x y"' },
      { t: 'note', md: '**`split()` 不带参数**时会按任意空白切分并自动忽略多余空格 —— 解析输入时非常好用：`"1  2   3".split()` → `[\'1\', \'2\', \'3\']`。' },
      { t: 'h', md: '三、列表：最常用的容器' },
      { t: 'code', lang: 'python', code: 'a = [3, 1, 4, 1, 5]\n\na[0]        # 第一个（下标从 0 开始）\na[-1]       # 最后一个\na[1:3]      # 切片：下标 1、2（左闭右开）\na[::-1]     # 反转\nlen(a)      # 长度\nsum(a), max(a), min(a)\n\n# 追加与插入\na.append(9)      # 末尾追加\na.insert(0, 7)   # 在下标 0 处插入\n\n# 排序\na.sort()                    # 原地排序，返回 None\nb = sorted(a)               # 返回新列表\nc = sorted(["bb","a"], key=len)   # 按长度排序' },
      { t: 'warn', md: '**`a.sort()` 返回 `None`**，不是排好序的列表。`b = a.sort()` 会让 `b` 变成 `None`。要用 `b = sorted(a)`。' },
      { t: 'h', md: '三之二、元组与集合（Lab 5–8）' },
      { t: 'code', lang: 'python', code: '# 元组 tuple：不可变，可作字典的键\nt = (1, 2, 3)\n# t[0] = 9        # ✗ TypeError: 元组不可变\nprint(len(t), t[0])          # 3 1\none = (5)                    # 注意：这是整数 5，不是元组！\none2 = (5,)                  # 单元素元组必须带逗号\n\n# 集合 set：无序、去重、元素必须可哈希\nprint(len({1,2,2,3,3,3}))    # 3\nprint(sorted({1,2,2,3,3,3})) # [1, 2, 3]\nprint(sorted({1,2,3} & {2,3,4}))  # [2, 3]   交集\nprint(sorted({1,2,3} | {2,3,4}))  # [1, 2, 3, 4]  并集\nprint(sorted({1,2,3} - {2,3,4}))  # [1]      差集\n\n# 字典 dict：键值映射，键必须可哈希\nd = {"a": 1, "b": 2}\nd["c"] = 3                       # 新增\nprint(len(d), sorted(d.keys()))  # 3 [\'a\', \'b\', \'c\']\nprint(d.get("b"), d.get("z"))    # 2 None  （用 get 不会 KeyError）\nd["z"]                           # ✗ KeyError' },
      { t: 'h', md: '四、别名 vs 拷贝（必考陷阱）' },
      { t: 'code', lang: 'python', code: 'a = [1, 2, 3]\nb = a           # 别名：b 和 a 是同一个列表！\nb.append(4)\nprint(a)        # [1, 2, 3, 4]  ← a 也变了\n\nc = a[:]        # 拷贝：新列表\nc.append(5)\nprint(a)        # [1, 2, 3, 4]  ← a 不变\n\n# 二维列表千万别这样建：\ng = [[0] * 3] * 3      # ✗ 三行是同一个列表\ng[0][0] = 9\nprint(g)               # [[9,0,0],[9,0,0],[9,0,0]]\n\ng = [[0] * 3 for _ in range(3)]   # ✓ 正确' },
      { t: 'note', md: '**口诀**：赋值（`=`）不复制，`[:]` / `.copy()` / `list()` 才复制。这个区别在 Lab 与考试中反复出现。' },
      { t: 'h', md: '五、字典：键值查找' },
      { t: 'code', lang: 'python', code: 'd = {"a": 1, "b": 2}\n\nd["c"] = 3             # 新增\nd.get("z")            # 键不存在返回 None（不报错）\nd.get("z", 0)         # 指定默认值\nlen(d)                # 键的个数\nsorted(d.keys())      # 键的有序列表\nsum(d.values())       # 值的和\n\n# 经典：统计词频\ncount = {}\nfor ch in "hello":\n    count[ch] = count.get(ch, 0) + 1\nprint(count)          # {\'h\':1, \'e\':1, \'l\':2, \'o\':1}' },
      { t: 'h', md: '六、循环与条件（Lab 高频）' },
      { t: 'code', lang: 'python', code: '# 遍历时同时要下标\nfor i, x in enumerate([10, 20, 30]):\n    print(i, x)                    # 0 10 / 1 20 / 2 30\n\n# 同时遍历两个列表\nfor a, b in zip([1,2], ["x","y"]):\n    print(a, b)                    # 1 x / 2 y\n\n# 列表推导（比循环更简洁）\nsq = [x*x for x in range(5)]       # [0,1,4,9,16]\neven = [x for x in range(10) if x % 2 == 0]\n\n# 循环控制\nfor x in range(10):\n    if x == 3: continue            # 跳过本次\n    if x == 6: break               # 结束整个循环\n\n# 几乎不用：for...else（循环未被 break 时执行）\nfor x in [1,2,3]:\n    if x == 9: break\nelse:\n    print("没找到")' },
      { t: 'h', md: '七、函数与作用域' },
      { t: 'code', lang: 'python', code: 'def area(w, h=1):        # h 有默认值\n    return w * h\n\nprint(area(3), area(3, 4))   # 3 / 12\n\n# 陷阱：不要用可变对象作默认参数\ndef bad(x, box=[]):      # ✗ box 只在定义时创建一次，被所有调用共享\n    box.append(x)\n    return box\nprint(bad(1), bad(2))    # [1, 2] [1, 2]  ← 意外累积\n\ndef good(x, box=None):   # ✓ 用 None 作哨兵\n    if box is None:\n        box = []\n    box.append(x)\n    return box' },
      { t: 'h', md: '八、文件读写与异常' },
      { t: 'code', lang: 'python', code: '# 读：with 会自动关闭文件\ntry:\n    with open("nums.txt") as f:\n        total = 0\n        for line in f:                  # 逐行读\n            for x in line.split():      # 按空白切分\n                total += int(x)         # 必须转换\n        print(total)\nexcept FileNotFoundError:\n    print("File not found")             # 文件不存在\n\n# 写：模式决定是否覆盖\nwith open("out.txt", "w") as f:  f.write("覆盖写入\\n")\nwith open("out.txt", "a") as f:  f.write("追加一行\\n")   # a = append\n\n# 分类型捕获\nfor s in ["12", "abc", "0"]:\n    try:\n        n = int(s)\n        print(10 / n)\n    except ValueError:\n        print("不是数字:", s)\n    except ZeroDivisionError:\n        print("不能除以零")' },
      { t: 'tbl', head: ['文件模式', '含义', '文件已存在时'],
        rows: [['`"r"`', '只读（默认）', '正常读取'], ['`"w"`', '只写', '<b>清空原内容</b>'],
                ['`"a"`', '追加', '在末尾续写'], ['`"r+"`', '读写', '从开头读写']] },
      { t: 'h', md: '九、Lab 中最常见的 6 个错误' },
      { t: 'ol', items: [
        '**忘了类型转换**：`input()` 返回字符串，做算术要 `int()` / `float()`。',
        '**列表别名**：`b = a` 不是拷贝，改 `b` 会影响 `a`。',
        '**`sort()` 返回值**：`a.sort()` 返回 `None`，要用 `sorted(a)`。',
        '**`[[0]*n]*n`**：建二维列表会共享行，要用列表推导。',
        '**可变默认参数**：`def f(box=[])` 会在多次调用间累积。',
        '**缩进错误**：Python 用缩进表示块，混用 Tab 与空格会报 `IndentationError`。'
      ]},
      { t: 'note', md: '**调试建议**：出错时先看**最后一行**错误信息（异常类型 + 行号），再看**倒数第二行**（具体调用链）。90% 的问题看这两行就能定位。' }
    ],
    terms: [
      ['input / output', '输入 / 输出'], ['type conversion', '类型转换'],
      ['f-string', '格式化字符串'], ['slice', '切片'],
      ['alias', '别名（引用同一对象）'], ['shallow copy', '浅拷贝'],
      ['list comprehension', '列表推导'], ['enumerate', '带下标遍历'],
      ['zip', '并行遍历'], ['mutable default argument', '可变默认参数'],
      ['try / except / finally', '异常处理三件套'],
      ['append mode', '追加模式'], ['FileNotFoundError', '文件不存在异常'],
      ['IndentationError', '缩进错误'], ['traceback', '错误回溯信息']
    ]
  });

  FCMS.registerNotes({ subjectId: 'COMP1010', topics: T });
})(typeof window !== 'undefined' ? window : globalThis);
