/* ==========================================================================
   COMP2012 Discrete Mathematics 讲义精读
   --------------------------------------------------------------------------
   依据 Lecture 1–13 逐讲整理（OCR 自原始 PPT）；中文讲解为主，英文标注专有名词。
   本文件由 /tmp/fcms/lectures/*.json 自动组装，请勿手工编辑结构与块类型。
   区块类型：p / h / ul / ol / code / note / warn / tbl
   行内标记：**粗体**、`代码`、[[english|中文]] 术语标注、$公式$
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('notes/comp2012.js: 必须先加载 js/registry.js');
  var T = [];

  /* ---------- L01 第1讲 课程导论与离散数学概览 ---------- */
  T.push({
  "no": "L01",
  "title": "第1讲 课程导论与离散数学概览",
  "titleEn": "Lecture 1: Introduction",
  "tags": [
    "Discrete Mathematics",
    "Logic and Proofs",
    "Algorithms",
    "Set",
    "Boolean Algebra",
    "Graph Theory",
    "Combinatorics",
    "LaTeX"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "一、课程信息（Course Information）"
    },
    {
      "t": "p",
      "md": "本讲是 [[COMP2012|离散数学]] 课程的第 1 讲。课程名称 **Discrete Mathematics**，学期 **Fall 2026**，授课教师 **Prof. Ken YIU**。"
    },
    {
      "t": "p",
      "md": "幻灯片原文写作 “Ken Yıu @ 2026”，可读作 **Ken Yiu, 2026**。"
    },
    {
      "t": "h",
      "md": "1. 课表（Tentative Schedule of Classes）"
    },
    {
      "t": "p",
      "md": "幻灯片首先提醒：**Please check your student timetable!**（请以学生课表为准）。"
    },
    {
      "t": "tbl",
      "head": [
        "类型",
        "时间",
        "地点"
      ],
      "rows": [
        [
          "Lecture S01",
          "周一 12:30–14:20",
          "TU201"
        ],
        [
          "Lecture S02",
          "周一 16:30–18:20",
          "N003"
        ],
        [
          "Tutorial",
          "周二 10:30–11:20",
          "Y306"
        ],
        [
          "Tutorial",
          "周二 12:30–13:20",
          "Y303"
        ],
        [
          "Tutorial",
          "周四 15:30–16:20",
          "Y303"
        ],
        [
          "Tutorial",
          "周五 10:30–11:20",
          "Y303"
        ]
      ]
    },
    {
      "t": "note",
      "md": "**Tutorials 从第 2 周开始**（starting from week #2）。"
    },
    {
      "t": "h",
      "md": "2. 联系方式（Contact Information）"
    },
    {
      "t": "ul",
      "items": [
        "**Instructor**：Prof. Ken YIU，邮箱 `csmlyiu@comp.polyu.edu.hk`，办公室 **PQ712**，个人主页 `http://www.comp.polyu.edu.hk/~csmlyiu/`。",
        "**Consultation hours（答疑时间）**：**Wednesday 15:00–17:00 in PQ712**。",
        "**Teaching assistants（助教）**：幻灯片共列出 **6 位助教**，邮箱均以 `@connect.polyu.hk` 结尾。"
      ]
    },
    {
      "t": "note",
      "md": "助教的姓名拼写与邮箱前缀在 OCR 结果中有粘连与乱码，请以 Canvas / 课程主页上的最新名单为准。"
    },
    {
      "t": "h",
      "md": "3. 教材与参考资料（Readings）"
    },
    {
      "t": "ul",
      "items": [
        "**Textbook**：Rosen, K.H., *Discrete Mathematics and Its Applications*, **8th Edition**, McGraw Hill, 2019.",
        "可选做法：直接到书店购买最新版，或者**从图书馆借阅旧版**（borrow previous version(s) from library）。"
      ]
    },
    {
      "t": "h",
      "md": "4. Canvas@PolyU 与 Microsoft Teams"
    },
    {
      "t": "ul",
      "items": [
        "**Canvas@PolyU**：`https://canvas.polyu.edu.hk`",
        "用途一：托管课程内容（lecture slides、tutorials、solutions）；",
        "用途二：**提交作业**（submitting your assignments）；",
        "用途三：发布 **Announcements**（通知）。",
        "**邮件通知会发送到你的 PolyU 邮箱**，务必**经常查收邮件**（Please check your email account regularly!）。",
        "**Microsoft Teams**（Team 名称 `COMP2012_26271_A`）：用于**观看课堂录像**。"
      ]
    },
    {
      "t": "p",
      "md": "**录像观看路径**（幻灯片给出的步骤）："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "1. 点击一个 channel：Lectures / Tutorials\n2(a). Posts: 点击一条 post，再点击其中的 recording\n2(b). Shared: 点击 \"Recordings\" -> 点击 \"View Only\" -> 点击一个 recording -> 点击 \"Preview\""
    },
    {
      "t": "p",
      "md": "Teams 侧边栏包含：Class Notebook、Classwork、Assignments、Grades、Reflect、Attendance 等入口。"
    },
    {
      "t": "h",
      "md": "5. 课程主题安排（Tentative Schedule）"
    },
    {
      "t": "tbl",
      "head": [
        "No.",
        "Topic",
        "No.",
        "Topic"
      ],
      "rows": [
        [
          "1",
          "Introduction",
          "8",
          "Graphs II"
        ],
        [
          "2",
          "Logic and Proofs",
          "9",
          "Graphs III"
        ],
        [
          "3",
          "Basic Structures",
          "10",
          "[Midterm]"
        ],
        [
          "4",
          "Algorithm",
          "11",
          "Trees I"
        ],
        [
          "5",
          "Induction and Recursion",
          "12",
          "Trees II"
        ],
        [
          "6",
          "Counting",
          "13",
          "Boolean Algebra and Circuits"
        ],
        [
          "7",
          "Graphs I",
          "14",
          "Revision"
        ]
      ]
    },
    {
      "t": "note",
      "md": "幻灯片上 “Graphs II” 前重复出现了编号 “8”，属于排版小瑕疵；按左侧编号顺序应为第 8 项 Graphs II、第 9 项 Graphs III。"
    },
    {
      "t": "h",
      "md": "6. 学习方式与考核（Learning by Doing / Assessment）"
    },
    {
      "t": "ul",
      "items": [
        "**Lectures（2 小时）**：Understand the main concepts。",
        "**Tutorials（1 小时）**：Hands-on practice。上 tutorial 要带什么？**打印好的 tutorial exercise**，或者**带自己的笔记本电脑**。",
        "**Assignments**：Apply your skills / Solve problems。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片引用了 Benjamin Franklin 的一句话：**“Tell me and I forget; Teach me and I may remember; Involve me and I learn.”**"
    },
    {
      "t": "p",
      "md": "**考核构成**："
    },
    {
      "t": "tbl",
      "head": [
        "项目",
        "占比"
      ],
      "rows": [
        [
          "Continuous Assessment（持续评核）",
          "30%"
        ],
        [
          "├─ 2 Assignments",
          "20%"
        ],
        [
          "└─ Midterm",
          "10%"
        ],
        [
          "Exam（期末考试）",
          "70%"
        ]
      ]
    },
    {
      "t": "p",
      "md": "课程说明（Subject Description）链接：`https://www.polyu.edu.hk/comp/docdrive/ug/subject/COMP2012.pdf`"
    },
    {
      "t": "warn",
      "md": "**考试可用工具**：在 midterm 与 exam 中可以**带计算器**，但**不允许使用其他电子设备**（例如手机、笔记本电脑）。"
    },
    {
      "t": "h",
      "md": "7. 迟交政策（Late policy）"
    },
    {
      "t": "p",
      "md": "你的责任：**尽早开始做作业**、**按时提交作业**。"
    },
    {
      "t": "p",
      "md": "迟交扣分：每迟交 **12 小时**，成绩扣 **10%**（由于 OCR 原文的百分比公式乱码，这里按幻灯片给出的两个例子归纳；公式原型为每迟交 $|t|$ 小时扣 $10\\times|t|$ 个百分点，其中 $t$ 以 12 小时为单位的权重）。"
    },
    {
      "t": "tbl",
      "head": [
        "迟交时长",
        "扣分"
      ],
      "rows": [
        [
          "12 hours late",
          "10% discount"
        ],
        [
          "24 hours late",
          "20% discount"
        ]
      ]
    },
    {
      "t": "h",
      "md": "8. 抄袭（Plagiarism）"
    },
    {
      "t": "ul",
      "items": [
        "PolyU 抄袭手册：`https://www.polyu.edu.hk/ogur/docdrive/Academic_Integrity/Plagiarism_Booklet.pdf`，请重点阅读 **“How do I avoid plagiarism?”** 与 **“Fast guide to citing and referencing”**。",
        "**允许**：与同学讨论**已知内容**（例如课件、tutorial 解答）。",
        "**不允许**：作业必须**自己完成**，并且**用自己的语言**写出解答。",
        "对抄袭有疑问请**主动联系老师**。",
        "**处罚**：抄作业的同学与提供解答的同学**双方都得 0 分**。",
        "**建议**：不要把自己的解答给其他同学看。"
      ]
    },
    {
      "t": "h",
      "md": "二、Why do we study this course?（为什么要学这门课）"
    },
    {
      "t": "ul",
      "items": [
        "**Who can benefit from this course?** 软件工程师、数据科学家、计算机科学家……",
        "[[Discrete Mathematics|离散数学]] 是计算机科学许多领域的**基础与语言**（the foundation and the language of many areas in computer science）。",
        "典型例子：**algorithms、networking、cryptography、machine learning**。"
      ]
    },
    {
      "t": "p",
      "md": "本课程要培养的三项技能："
    },
    {
      "t": "ul",
      "items": [
        "**Mathematical reasoning（数学推理）**",
        "**Analyze a problem by using discrete math.**（用离散数学分析问题）",
        "**Solve a problem by using discrete math.**（用离散数学解决问题）"
      ]
    },
    {
      "t": "note",
      "md": "幻灯片以 Google DeepMind 的 *Challenge Match*（围棋对弈画面）作为“算法/推理能力”的直观例子。"
    },
    {
      "t": "h",
      "md": "三、Introduction：什么是离散数学"
    },
    {
      "t": "h",
      "md": "3.1 Our Roadmap（本讲的路线图）"
    },
    {
      "t": "p",
      "md": "本讲 Roadmap（在幻灯片中重复出现 5 次，作为章节分隔）："
    },
    {
      "t": "ul",
      "items": [
        "What is discrete mathematics?",
        "Some history about discrete maths.",
        "Symbols & tools",
        "Logic & proofs",
        "Algorithms & problem solving",
        "From problems to knowledge"
      ]
    },
    {
      "t": "h",
      "md": "3.2 Discrete vs. Continuous（离散与连续）"
    },
    {
      "t": "tbl",
      "head": [
        "Discrete（离散）",
        "Continuous（连续）"
      ],
      "rows": [
        [
          "e.g., **integers**（整数）",
          "e.g., **real numbers, calculus**（实数、微积分）"
        ],
        [
          "对象是一个个分开的值",
          "对象在区间上连续变化"
        ]
      ]
    },
    {
      "t": "note",
      "md": "幻灯片左侧画出一条整数轴 $-9,-8,\\ldots,9$ 说明“离散”；右侧用实数（含 $\\tfrac{1}{2}$ 这类非整数）说明“连续”。"
    },
    {
      "t": "h",
      "md": "3.3 Topics in this course（本课程主题）"
    },
    {
      "t": "tbl",
      "head": [
        "属于本课程范围",
        "Beyond our scope（超出范围）"
      ],
      "rows": [
        [
          "Logic & proofs（例：$\\forall x\\in N\\,(A(x)\\to B(x))$）",
          "**probability（概率）**"
        ],
        [
          "Set（例：$\\{1,3,6\\}$）",
          ""
        ],
        [
          "Counting（例：Pascal 三角 $1,4,6,4,1$、$1,5,10,10,5,1$）",
          ""
        ],
        [
          "Number theory",
          ""
        ],
        [
          "Function",
          ""
        ],
        [
          "Algorithm",
          ""
        ],
        [
          "Induction",
          ""
        ],
        [
          "Graph theory",
          ""
        ],
        [
          "Tree",
          ""
        ],
        [
          "Boolean algebra",
          ""
        ],
        [
          "Computation & Complexity theory",
          ""
        ]
      ]
    },
    {
      "t": "h",
      "md": "3.4 What is discrete mathematics?（定义）"
    },
    {
      "t": "p",
      "md": "**离散数学是关于整数的数学，以及由整数构建出来的概念**（Mathematics about integers, and concepts that can be built from integers）。"
    },
    {
      "t": "p",
      "md": "幻灯片列举的概念例子："
    },
    {
      "t": "ul",
      "items": [
        "**Integer（整数）**，例：$\\{1,3,6\\}$",
        "**Set, Sequence（集合、序列）**",
        "**Function（函数）**",
        "**Graph, Tree（图、树）**",
        "**Statement, logic（命题、逻辑）**，例：$\\forall x\\in N\\,(A(x)\\to B(x))$"
      ]
    },
    {
      "t": "h",
      "md": "3.5 Applications（应用）"
    },
    {
      "t": "p",
      "md": "幻灯片把这些领域并列为离散数学的应用：**Networking、Chemistry、Engineering、Linguistics、Biology、Internet、……**"
    },
    {
      "t": "note",
      "md": "其中 Chemistry/Biology 的插图给出 DNA 的组成部分：Adenine、Thymine、Cytosine、Guanine 与 Phosphate backbone；Internet 的插图示意“网络”也是一种离散结构。"
    },
    {
      "t": "h",
      "md": "四、Types of questions in discrete math.（离散数学中的题型）"
    },
    {
      "t": "p",
      "md": "幻灯片把离散数学的问题分成 6 类，这也是本课程题目与考试的题型来源："
    },
    {
      "t": "tbl",
      "head": [
        "序号",
        "题型",
        "说明"
      ],
      "rows": [
        [
          "1",
          "Calculate the result",
          "算出结果"
        ],
        [
          "2",
          "Test whether object $X$ satisfies requirement $Y$",
          "判断对象 $X$ 是否满足要求 $Y$"
        ],
        [
          "3",
          "Construct an object $X$ so that it satisfies condition $Y$",
          "构造满足条件 $Y$ 的对象 $X$"
        ],
        [
          "4",
          "Prove a statement",
          "证明一个命题"
        ],
        [
          "5",
          "Run an algorithm (on graph/tree) and show the running steps (and the result)",
          "在（图/树）上执行算法并写出运行步骤与结果"
        ],
        [
          "6",
          "Analyze an algorithm (correctness, running time)",
          "分析算法（正确性、运行时间）"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "看题时先判断属于哪一类：第 2、3 类要求“判断 / 构造”，第 4 类要求“证明”，第 5、6 类要求“手算过程 / 复杂度分析”，答题的写法完全不同。"
    },
    {
      "t": "h",
      "md": "五、符号与工具：如何输入数学符号"
    },
    {
      "t": "p",
      "md": "**Commonly used in discrete mathematics（离散数学中的常用写法）**："
    },
    {
      "t": "ul",
      "items": [
        "**Variables（变量）**：$a,\\ b,\\ c$",
        "**Superscripts（上标）**：$x^3,\\ 1^3$，常用来表示**幂**（powers）。",
        "**Subscripts（下标）**：$a_1,\\ a_2,\\ a_i,\\ a_{ij}$，常用来表示**变量的数组/矩阵**。",
        "**Symbols（符号）**：$\\to,\\ \\Rightarrow,\\ \\forall,\\ \\exists,\\ \\in,\\ \\notin,\\ \\infty,\\ \\mathbb{Z},\\ \\mathbb{N},\\ \\Pi$ 等等。"
      ]
    },
    {
      "t": "note",
      "md": "幻灯片说明：这些符号的**含义会在本课程中陆续学到**（We will find out their meanings throughout this course）。"
    },
    {
      "t": "p",
      "md": "**How to type equations or symbols?** 两种途径："
    },
    {
      "t": "ul",
      "items": [
        "**Microsoft Word / PowerPoint**：使用图形界面（graphical user interface），点击 **“Equation”** 或 **“Symbol”**（也可用 `Insert -> Symbol`、`Symbol` 对话框中把 **Font 设为 Symbol**、或用 WordArt / Date & Time / Slide Number / Header & Footer / Object 等插入项）。",
        "**LaTeX**：一种用于撰写文档的**标记语言**（markup language），可以用文本来表达公式。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片给出的 LaTeX 例子（原样引用）："
    },
    {
      "t": "code",
      "lang": "latex",
      "code": "$f(x)=x^2$"
    },
    {
      "t": "p",
      "md": "延伸教程链接：`https://www.latex-tutorial.com/tutorials/amsmath/`"
    },
    {
      "t": "h",
      "md": "六、Logic & proofs（逻辑与证明）"
    },
    {
      "t": "h",
      "md": "6.1 为什么需要证明"
    },
    {
      "t": "ul",
      "items": [
        "我们可以把问题/方法的性质写成**命题**（statement），例如：",
        "(1) Every instance of problem A satisfies B.（问题 A 的每个实例都满足 B）",
        "(2) Every subpath $P_{ij}$ of a shortest path $P_{a,b}$ is also a shortest path (from $i$ to $j$).",
        "(3) Algorithm X always returns the correct output for every instance of problem A.",
        "像 “I believe ... is true” 这样的说法**没有说服力**。",
        "**证明（proof）**用逻辑论证说明一个给定命题**总是为真**。"
      ]
    },
    {
      "t": "h",
      "md": "6.2 等价命题与待证的命题"
    },
    {
      "t": "p",
      "md": "**问题一：下面两句话等价吗？为什么？**"
    },
    {
      "t": "ul",
      "items": [
        "(A) If the #8 storm signal is issued today, then it is cloudy today.（若今天挂八号风球，则今天多云）",
        "(B) If it is not cloudy today, then the #8 storm signal is not issued today.（若今天不多云，则今天不挂八号风球）"
      ]
    },
    {
      "t": "p",
      "md": "**问题二：如何证明或推翻下列命题？**"
    },
    {
      "t": "ul",
      "items": [
        "(1) Let $n$ be an integer. If $5n+4$ is odd, then $n$ is odd.",
        "(2) There exist non-zero integers $x,y,z$ such that $x^3+y^3=z^3$.",
        "(3) Given that 8 people have birthday in the same week. There exists some day $x$ such that at least two people have birthday on the same day."
      ]
    },
    {
      "t": "warn",
      "md": "OCR 把 “$5n+4$” 识别成了类似 “5nt4”，按数学常识恢复为 $5n+4$；命题 (2) 中的 $x^3+y^3=z^3$ 同理由 “x3+y3=z3” 恢复。"
    },
    {
      "t": "h",
      "md": "6.3 Examples of proofs（两个证明示例）"
    },
    {
      "t": "p",
      "md": "**例 1**：证明两个奇数 $a,b$ 之和为偶数。"
    },
    {
      "t": "p",
      "md": "$$a=2x+1,\\quad b=2y+1$$"
    },
    {
      "t": "p",
      "md": "$$a+b=(2x+1)+(2y+1)=2(x+y+1)$$"
    },
    {
      "t": "p",
      "md": "因此 $a+b$ 是偶数。（这里 $x,y$ 是整数，因为 $a,b$ 是奇数。）"
    },
    {
      "t": "p",
      "md": "**例 2**：已知 8 个人的生日在同一周内，证明存在某一天 $x$，至少有两个人同一天生日。"
    },
    {
      "t": "ul",
      "items": [
        "用**反证法**（proof by contradiction）：假设**每天最多只有 1 个人**过生日。",
        "那么总人数 $\\le 1\\times 7=7$。",
        "这与已知人数 8 **矛盾**！"
      ]
    },
    {
      "t": "h",
      "md": "七、Axiomatic Approach to Mathematics（数学的公理化方法）"
    },
    {
      "t": "p",
      "md": "幻灯片以**定义自然数并推导其性质**为例（见 Peano axioms：`https://en.wikipedia.org/wiki/Peano_axioms`），区分三类陈述："
    },
    {
      "t": "tbl",
      "head": [
        "概念",
        "含义",
        "例子"
      ],
      "rows": [
        [
          "**Axiom（公理）**",
          "假定为真的陈述（accepted without question）",
          "$0$ 是自然数；若 $x$ 是自然数，则它的后继 $S(x)$ 也是自然数"
        ],
        [
          "**Theorem, Lemma, Corollary, Law（定理、引理、推论、定律）**",
          "已被证明为真的陈述（用公理或已证定理证得）",
          "对任意两个自然数 $x,y$，有 $x+y=y+x$"
        ],
        [
          "**Conjecture（猜想）**",
          "尚未被证明为真的陈述",
          "对任意大于 5 的偶数 $x$，都存在两个素数 $y,z$ 使 $x=y+z$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "关于猜想：我们**可以在有限情形下验证**（$6,8,10,\\ldots,1000000$），但**其余所有情形呢？**（But how about all other cases?）"
    },
    {
      "t": "h",
      "md": "八、算法与问题求解（Algorithms & problem solving）"
    },
    {
      "t": "p",
      "md": "本课程还会学习一些**已有的算法**，用来解决真实世界的问题，幻灯片给出的两个场景是 **sort cards（整理扑克牌）** 与 **find a fast path（找一条最短路）**。"
    },
    {
      "t": "h",
      "md": "8.1 Problem：给手上的扑克牌排序"
    },
    {
      "t": "ul",
      "items": [
        "**Problem**：Sort poker cards on hands.",
        "**Input**：A list of cards.",
        "**Procedure**：1. Put all cards on the left hand；2. Pick the smallest card from the left hand；3. Move that card to the right hand；4. Repeat Steps 2-3 until the left hand is empty."
      ]
    },
    {
      "t": "p",
      "md": "**Problem Solving**：人类靠 brain、hands、tools 解决问题；计算机靠 **CPU、memory** 解决问题，其**基本操作（primitive operations）**是“比较两个整数”“把一个整数移到内存单元 X”等等。"
    },
    {
      "t": "h",
      "md": "8.2 什么是算法（Algorithm）"
    },
    {
      "t": "p",
      "md": "**算法**是求解一个计算问题的**明确定义的步骤序列**（a well defined sequence of steps for solving a computational problem）。它必须满足："
    },
    {
      "t": "ul",
      "items": [
        "**It produces the correct output.**（产生正确的输出）",
        "**It uses primitive steps / defined operations.**（只使用基本步骤/已定义的操作）",
        "**It finishes in finite time.**（在有限时间内结束）"
      ]
    },
    {
      "t": "note",
      "md": "算法是**程序的模板**（template）：它比程序**更易读**，而且**与编程语言无关**，可以用 Java、C++ 等任意语言实现。"
    },
    {
      "t": "h",
      "md": "8.3 例子：Selection-Sort（选择排序）"
    },
    {
      "t": "p",
      "md": "**Input**：a sequence $A$ of $n$ integers；**Output**：a sequence $A$ of $n$ integers（按升序排列）。"
    },
    {
      "t": "p",
      "md": "幻灯片给出的算法伪代码（按 OCR 恢复为规范的赋值/循环写法）："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Selection-Sort(Array A, Integer n)\n1. for integer i <- 1 to n-1\n2.     k <- i\n3.     for integer j <- i+1 to n\n4.         if A[k] > A[j] then\n5.             k <- j\n6.     swap A[i] and A[k]"
    },
    {
      "t": "p",
      "md": "对应的 Java 程序（幻灯片右侧给出，用于对比“算法 vs 程序”）："
    },
    {
      "t": "code",
      "lang": "java",
      "code": "void Selection-Sort(int[] A) {\n    int i, j, k, temp;\n    int n = A.length;\n    for (i = 0; i < n-1; i++) {\n        k = i;\n        for (j = i+1; j < n; j++)\n            if (A[k] > A[j])\n                k = j;\n        temp = A[i];\n        A[i] = A[k];\n        A[k] = temp;\n    }\n}"
    },
    {
      "t": "tbl",
      "head": [
        "Algorithm（算法）",
        "Java program（程序）"
      ],
      "rows": [
        [
          "程序的模板（template）",
          "算法的具体实现"
        ],
        [
          "与编程语言无关",
          "绑定到某一种语言"
        ],
        [
          "比程序更易读",
          "可被机器直接执行"
        ]
      ]
    },
    {
      "t": "h",
      "md": "8.4 Algorithms: Running Steps（手工执行步骤）"
    },
    {
      "t": "p",
      "md": "要**手工运行算法**，例如画出运行步骤/示意图；这些步骤有助于理解算法。以 $A=[5,2,4,9,7]$ 为例："
    },
    {
      "t": "tbl",
      "head": [
        "轮次",
        "数组状态",
        "说明"
      ],
      "rows": [
        [
          "input",
          "5 2 4 9 7",
          "初始输入"
        ],
        [
          "$i=1$",
          "2 5 4 9 7",
          "把最小的 2 换到第 1 位"
        ],
        [
          "$i=2$",
          "2 4 5 9 7",
          "把 4 换到第 2 位"
        ],
        [
          "$i=3$",
          "2 4 5 9 7",
          "第 3 位已是最小"
        ],
        [
          "$i=4$",
          "2 4 5 7 9",
          "把 7 与 9 交换"
        ],
        [
          "$i=5$",
          "2 4 5 7 9",
          "排序完成（sorted / unsorted 分界向右扩张）"
        ]
      ]
    },
    {
      "t": "note",
      "md": "幻灯片用 “sorted | unsorted” 的分界来展示每一轮之后已排好的前缀。"
    },
    {
      "t": "h",
      "md": "8.5 Algorithms: Analysis（算法分析）"
    },
    {
      "t": "ul",
      "items": [
        "**Is this sorting algorithm always correct?** 试着去**证明**它（Let's try to prove it ...）。",
        "**Estimate the running time of this algorithm as a function of the input size $n$.**（把运行时间表示为输入规模 $n$ 的函数）"
      ]
    },
    {
      "t": "h",
      "md": "九、From Problems to Knowledge（从问题到知识）"
    },
    {
      "t": "h",
      "md": "9.1 七桥问题（The Seven Bridges of Königsberg）"
    },
    {
      "t": "p",
      "md": "问题：**能否走遍这座城，使得 (i) 每座桥只被经过一次，并且 (ii) 城的所有部分都被访问？**"
    },
    {
      "t": "ul",
      "items": [
        "**解法一：用图来表示相关特征。** 每条**边（edge）**代表一座桥，每个**顶点（vertex）**代表城镇的一个部分；**忽略无关特征**（例如桥的长度、区域面积）。",
        "**解法二：枚举所有可能的走法。** 局限：**太耗时**（time consuming）。"
      ]
    },
    {
      "t": "p",
      "md": "**如何应对很大的图？如何快速求解？** 检查这个图是否**连通**，并且它**恰好有 0 个或 2 个度为奇数的结点**。"
    },
    {
      "t": "ul",
      "items": [
        "**结点的度（degree）是接触该结点的边的数目。**",
        "**为什么这个条件是对的？** —— 这是**图论中的第一个定理**（The first theorem in graph theory!）。"
      ]
    },
    {
      "t": "h",
      "md": "9.2 Problem 与 Knowledge 的对应"
    },
    {
      "t": "tbl",
      "head": [
        "Problem（问题）",
        "Knowledge（知识）"
      ],
      "rows": [
        [
          "How to model computation?",
          "Turing machine（图灵机）"
        ],
        [
          "How to estimate the running time of an algorithm?",
          "Time complexity analysis（时间复杂度分析）"
        ],
        [
          "How to classify problems based on their difficulties?",
          "Complexity classes（复杂度类）"
        ],
        [
          "Can we decide whether a program will terminate in finite time?",
          "The existence of “undecidable problems”（不可判定问题的存在性）"
        ],
        [
          "……",
          "……"
        ]
      ]
    },
    {
      "t": "h",
      "md": "十、Summary（本讲小结）"
    },
    {
      "t": "ul",
      "items": [
        "本讲概览了离散数学中的一些概念（Overview of some concepts in discrete mathematics）。",
        "**下一讲（Next lecture）：logic and proofs（逻辑与证明）。**"
      ]
    }
  ],
  "terms": [
    [
      "Discrete Mathematics",
      "离散数学"
    ],
    [
      "Continuous",
      "连续的"
    ],
    [
      "Set",
      "集合"
    ],
    [
      "Sequence",
      "序列"
    ],
    [
      "Function",
      "函数"
    ],
    [
      "Graph",
      "图"
    ],
    [
      "Tree",
      "树"
    ],
    [
      "Statement",
      "命题"
    ],
    [
      "Boolean algebra",
      "布尔代数"
    ],
    [
      "Combinatorics",
      "组合数学"
    ],
    [
      "Pigeonhole principle",
      "鸽巢原理"
    ],
    [
      "Fibonacci sequence",
      "斐波那契数列"
    ],
    [
      "Pascal triangle",
      "帕斯卡三角"
    ],
    [
      "Proof by contradiction",
      "反证法"
    ],
    [
      "Induction",
      "数学归纳法"
    ],
    [
      "Axiom",
      "公理"
    ],
    [
      "Theorem",
      "定理"
    ],
    [
      "Conjecture",
      "猜想"
    ],
    [
      "Algorithm",
      "算法"
    ],
    [
      "Selection-Sort",
      "选择排序"
    ],
    [
      "LaTeX",
      "LaTeX 排版语言"
    ],
    [
      "Turing machine",
      "图灵机"
    ],
    [
      "Complexity classes",
      "复杂度类"
    ],
    [
      "Undecidable problems",
      "不可判定问题"
    ]
  ],
  "qids": [
    "cm-1-01",
    "cm-1-02",
    "cm-1-03",
    "cm-1-04",
    "cm-2-01",
    "cm-2-02",
    "cm-2-03",
    "cm-2-04",
    "cm-2-05",
    "cm-3-01",
    "cp-1",
    "cp-2"
  ]
});

  /* ---------- L02 第2讲 逻辑与证明 ---------- */
  T.push({
  "no": "L02",
  "title": "第2讲 逻辑与证明",
  "titleEn": "Logic and Proofs",
  "tags": [
    "logic",
    "proposition",
    "quantifier",
    "rules of inference",
    "proof methods",
    "truth table"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲（Lecture 2 *Logic and Proofs*）从两个待证命题出发，说明为什么「我相信」「我猜」不算论证，并建立**逻辑论证**的语言：命题逻辑、命题函数与量词、推理规则，最后落到**如何写一个证明**。"
    },
    {
      "t": "p",
      "md": "开篇的两个命题：**（1）** 设 $a,b,c$ 为任意整数，若 $a+b$ 与 $b+c$ 都是偶数，则 $a+c$ 是偶数；**（2）** 若 8 个人的生日都落在同一周内，则存在某一天 $x$，至少有两个人的生日在同一天。"
    },
    {
      "t": "p",
      "md": "**课程路线图（Roadmap）**：命题逻辑 → 命题函数与量词 → 推理规则 → 证明方法 → 证明中的错误。"
    },
    {
      "t": "h",
      "md": "一、命题逻辑（Proposition Logic）"
    },
    {
      "t": "h",
      "md": "1.1 命题与命题变元"
    },
    {
      "t": "p",
      "md": "[[proposition|命题]] 是一个陈述句，它具有确定的 [[truth value|真值]]：真（T）或假（F），**但不可能同时为真又为假**。"
    },
    {
      "t": "p",
      "md": "是命题的例子："
    },
    {
      "t": "ul",
      "items": [
        "Tokyo is the capital of Japan.（真）",
        "$3+4=7$（真）",
        "$2+5>8$（假）"
      ]
    },
    {
      "t": "p",
      "md": "下面这些**不是**命题："
    },
    {
      "t": "ul",
      "items": [
        "Where is John? —— 这是疑问句，不是一个有真值的陈述。",
        "Solve this problem. —— 这是祈使句，同样没有真值。",
        "$x+2=3$ —— 真值取决于 $x$ 的取值，在 $x$ 未确定时无所谓真假。"
      ]
    },
    {
      "t": "p",
      "md": "**变元（variable）**可以用来代表一个命题（命题变元）：例如 $p$：It is cloudy today.，$q$：It is windy today.。变元的真值只有 True（T）与 False（F）两种；**逻辑联结词**把这些变元组合成新的命题，例如 $\\neg, \\land, \\lor, \\to$ 等。"
    },
    {
      "t": "h",
      "md": "1.2 [[negation|否定]]（Negation，not）"
    },
    {
      "t": "p",
      "md": "$\\neg p$ 表示命题「not $p$」：$p$ 为真时 $\\neg p$ 为假，$p$ 为假时 $\\neg p$ 为真。"
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$\\neg p$"
      ],
      "rows": [
        [
          "T",
          "F"
        ],
        [
          "F",
          "T"
        ]
      ]
    },
    {
      "t": "p",
      "md": "例：设 $p$：It is cloudy today.，则 $\\neg p$ 的意思是「It is not cloudy today.」。"
    },
    {
      "t": "h",
      "md": "1.3 [[conjunction|合取]]（Conjunction，and）"
    },
    {
      "t": "p",
      "md": "$p \\land q$ 表示命题「$p$ and $q$」，**只有两者都为真时才为真**。"
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$q$",
        "$p\\land q$"
      ],
      "rows": [
        [
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "F"
        ],
        [
          "F",
          "T",
          "F"
        ],
        [
          "F",
          "F",
          "F"
        ]
      ]
    },
    {
      "t": "p",
      "md": "例：仍取 $p$：It is cloudy today.，$q$：It is windy today.，则 $p\\land q$ 的意思是「It is cloudy today **and** it is windy today.」。"
    },
    {
      "t": "h",
      "md": "1.4 [[disjunction|析取]]（Disjunction，or）"
    },
    {
      "t": "p",
      "md": "$p \\lor q$ 表示命题「$p$ or $q$」，**只要其中一个为真就为真**（对照真值表：只有 $p,q$ 全假时 $p\\lor q$ 才为假）。"
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$q$",
        "$p\\lor q$"
      ],
      "rows": [
        [
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "T"
        ],
        [
          "F",
          "T",
          "T"
        ],
        [
          "F",
          "F",
          "F"
        ]
      ]
    },
    {
      "t": "p",
      "md": "例：$p\\lor q$ 的意思是「It is cloudy today **or** it is windy today.」。"
    },
    {
      "t": "h",
      "md": "1.5 与布尔代数的联系（The Connections to Boolean Algebra）"
    },
    {
      "t": "p",
      "md": "PPT 预告：Lecture #12 会学习布尔代数。本讲的**逻辑值**与**逻辑联结词**可以完全翻译过去：假（F）记作 $0$，真（T）记作 $1$。"
    },
    {
      "t": "ul",
      "items": [
        "**互补（complement）**：$\\overline{0}=1$，$\\overline{1}=0$ —— 对应 $\\neg p$。",
        "**布尔和（Boolean sum）**：$0+0=0$，$0+1=1$，$1+0=1$，$1+1=1$ —— 对应 $p\\lor q$。",
        "**布尔积（Boolean product）**：$0\\cdot 0=0$，$0\\cdot 1=0$，$1\\cdot 0=0$，$1\\cdot 1=1$ —— 对应 $p\\land q$。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "逻辑（Lec. #2）",
        "布尔代数（Lec. #12）"
      ],
      "rows": [
        [
          "真值 False / True",
          "$0$ / $1$"
        ],
        [
          "$\\neg p$",
          "互补 $\\overline{p}$"
        ],
        [
          "$p\\land q$",
          "布尔积 $p\\cdot q$"
        ],
        [
          "$p\\lor q$",
          "布尔和 $p+q$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.6 [[implication|蕴含]]（Implication，$p\\to q$）"
    },
    {
      "t": "p",
      "md": "$p \\to q$ 表示命题「if $p$, then $q$」。$p$ 称为 [[premise|前提]]（premise），$q$ 称为后件（consequence）。**当 $p$ 为真时，$q$ 必须为真；当 $p$ 为假时，我们不关心 $q$ 的真值。**"
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$q$",
        "$p\\to q$"
      ],
      "rows": [
        [
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "F"
        ],
        [
          "F",
          "T",
          "T"
        ],
        [
          "F",
          "F",
          "T"
        ]
      ]
    },
    {
      "t": "p",
      "md": "例：If there is #8 storm signal today, then PolyU is closed today."
    },
    {
      "t": "warn",
      "md": "**最容易记错的一格**：$p$ 为假时 $p\\to q$ **仍然为真**。所以 $p\\to q$ 唯一为假的情形只有「$p$ 真而 $q$ 假」。"
    },
    {
      "t": "h",
      "md": "1.7 [[contrapositive|逆否命题]]与 [[biconditional|双条件]]命题"
    },
    {
      "t": "p",
      "md": "$\\neg q \\to \\neg p$ 称为 $p \\to q$ 的**逆否命题（contrapositive）**：它在**所有情况下**与 $p\\to q$ 的真值都相同。"
    },
    {
      "t": "p",
      "md": "$p \\leftrightarrow q$ 称为**双条件命题（biconditional statement）**：当 $p$ 与 $q$ **真值相同**时为真，否则为假；它等价于 $(p\\to q)\\land (q\\to p)$。"
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$q$",
        "$p\\leftrightarrow q$"
      ],
      "rows": [
        [
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "F"
        ],
        [
          "F",
          "T",
          "F"
        ],
        [
          "F",
          "F",
          "T"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.8 命题的分类：[[tautology|重言式]]与 [[contradiction|矛盾式]]"
    },
    {
      "t": "p",
      "md": "一个（含变元的）命题：若在真值表的**所有情况下都为真**，称为**重言式（tautology）**；若在**所有情况下都为假**，称为**矛盾式（contradiction）**。"
    },
    {
      "t": "p",
      "md": "逐项检查 PPT 给出的两个式子：(1) $p\\lor\\neg p$，(2) $p\\land\\neg p$。"
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$\\neg p$",
        "$p\\lor\\neg p$",
        "$p\\land\\neg p$"
      ],
      "rows": [
        [
          "T",
          "F",
          "T",
          "F"
        ],
        [
          "F",
          "T",
          "T",
          "F"
        ]
      ]
    },
    {
      "t": "note",
      "md": "$p\\lor\\neg p$ 是**重言式**（排中律式的说法），$p\\land\\neg p$ 是**矛盾式**。"
    },
    {
      "t": "h",
      "md": "1.9 [[logical equivalence|逻辑等价]]（Equivalence）"
    },
    {
      "t": "p",
      "md": "记号 $p \\equiv q$ 表示 $p$ 与 $q$ **逻辑等价**，即 $p\\leftrightarrow q$ 是一个重言式。"
    },
    {
      "t": "p",
      "md": "PPT 提到：在表达式中，可以把某个**子表达式**替换为与它等价的子表达式，从而一步步化简。"
    },
    {
      "t": "p",
      "md": "用真值表验证析取结合律 $(p\\lor q)\\lor r \\equiv p\\lor (q\\lor r)$："
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$q$",
        "$r$",
        "$p\\lor q$",
        "$(p\\lor q)\\lor r$",
        "$q\\lor r$",
        "$p\\lor(q\\lor r)$"
      ],
      "rows": [
        [
          "T",
          "T",
          "T",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "T",
          "F",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "T",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "F",
          "T",
          "T",
          "F",
          "T"
        ],
        [
          "F",
          "T",
          "T",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "F",
          "T",
          "F",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "F",
          "F",
          "T",
          "F",
          "T",
          "T",
          "T"
        ],
        [
          "F",
          "F",
          "F",
          "F",
          "F",
          "F",
          "F"
        ]
      ]
    },
    {
      "t": "p",
      "md": "最后两列完全相同，故两边逻辑等价。"
    },
    {
      "t": "h",
      "md": "1.10 [[De Morgan's laws|德摩根律]]"
    },
    {
      "t": "p",
      "md": "$$\\neg(p\\land q)\\equiv \\neg p\\lor \\neg q,\\qquad \\neg(p\\lor q)\\equiv \\neg p\\land \\neg q$$"
    },
    {
      "t": "p",
      "md": "PPT 的例子：设 $p$：This cat is black.，$q$：This cat is white.。则 $\\neg(p\\lor q)$ 的含义是「It is not the case that this cat is black **or** white.」，而 $\\neg p\\land \\neg q$ 的含义是「This cat is **not** black **and** it is **not** white.」——两者说的正是同一件事。"
    },
    {
      "t": "note",
      "md": "[Exercise] 用真值表证明德摩根律。"
    },
    {
      "t": "h",
      "md": "二、[[propositional function|命题函数]]（Propositional function）"
    },
    {
      "t": "p",
      "md": "考虑语句「$x$ is less than 5」：其中 $x$ 是整数变元，而「is less than 5」是一个 [[predicate|谓词]]。用命题函数 $P(x)$ 表示它。**$P(x)$ 的真值只有在 $x$ 代入具体值之后才确定。**"
    },
    {
      "t": "ul",
      "items": [
        "$P(1)$ is true",
        "$P(5)$ is false",
        "$P(7)$ is false"
      ]
    },
    {
      "t": "p",
      "md": "命题函数可以有多个变元：$P(x,y)$ 表示「$x$ is less than $y$」；$Q(x,y,v)$ 表示「$x+v$ is less than $y$」。"
    },
    {
      "t": "p",
      "md": "PPT 展示 $P(x,y)$ 的**真值表**与**压缩真值表（condensed truth table）**，并指出**两张表所表达的信息完全相同**，压缩表只是把 $x,y$ 的取值写成列标题、省略重复。"
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$P(x,y)$"
      ],
      "rows": [
        [
          "1",
          "1",
          "F"
        ],
        [
          "1",
          "2",
          "T"
        ],
        [
          "1",
          "3",
          "T"
        ],
        [
          "2",
          "1",
          "F"
        ],
        [
          "2",
          "2",
          "F"
        ],
        [
          "2",
          "3",
          "T"
        ],
        [
          "3",
          "1",
          "F"
        ],
        [
          "$\\cdots$",
          "$\\cdots$",
          "$\\cdots$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "三、量词（Quantifier）"
    },
    {
      "t": "p",
      "md": "先给定一个 [[domain|论域]] $D$，例如 $D=\\{x_1,x_2,x_3,\\dots,x_n\\}$。两个常用的论域：$\\mathbb{N}$（正整数论域）、$\\mathbb{Z}$（整数论域）。**量词用来表达「在论域中有多少个取值使 $P(x)$ 为真」。**"
    },
    {
      "t": "p",
      "md": "[[universal quantifier|全称量词]] $\\forall$：$\\forall x\\in D\\,P(x)$，其中 $D$ 是论域，含义是「对 $D$ 中**所有** $x$，$P(x)$ 都为真」，等价于 $P(x_1)\\land P(x_2)\\land P(x_3)\\land\\cdots\\land P(x_n)$（即 $D$ 中每个 $x$ 都满足 $P(x)$）。"
    },
    {
      "t": "p",
      "md": "取论域 $\\mathbb{N}$，求下面两式的真值："
    },
    {
      "t": "tbl",
      "head": [
        "$P(x)$",
        "$P(1)$",
        "$P(2)$",
        "$P(3)$",
        "$\\cdots$",
        "$\\forall x\\in\\mathbb{N}\\,P(x)$ 的真值"
      ],
      "rows": [
        [
          "$x>1$",
          "F",
          "T",
          "T",
          "$\\cdots$",
          "F"
        ],
        [
          "$x^3\\ge x$",
          "T",
          "T",
          "T",
          "$\\cdots$",
          "T"
        ]
      ]
    },
    {
      "t": "p",
      "md": "[[existential quantifier|存在量词]] $\\exists$：$\\exists x\\in D\\,P(x)$，含义是「$D$ 中**存在**某个 $x$ 使 $P(x)$ 为真」，等价于 $P(x_1)\\lor P(x_2)\\lor P(x_3)\\lor\\cdots\\lor P(x_n)$。"
    },
    {
      "t": "tbl",
      "head": [
        "$P(x)$",
        "$P(1)$",
        "$P(2)$",
        "$P(3)$",
        "$\\cdots$",
        "$\\exists x\\in\\mathbb{N}\\,P(x)$ 的真值"
      ],
      "rows": [
        [
          "$x>1$",
          "F",
          "T",
          "T",
          "$\\cdots$",
          "T"
        ],
        [
          "$x^3<x$",
          "F",
          "F",
          "F",
          "$\\cdots$",
          "F"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "**Be careful**：$\\exists x\\in\\mathbb{N}\\,(x^3-5x^2-2x=1)$ 的真值**不能**用真值表判定——我们只能枚举有限个 $x$，这既不足以证明也不足以推翻它。PPT 指出，这类问题要用后面讲的**证明方法**解决。"
    },
    {
      "t": "h",
      "md": "3.1 量词的 [[De Morgan's laws|德摩根律]]"
    },
    {
      "t": "p",
      "md": "命题的德摩根律可以推广到量词：$$\\neg\\,\\forall x\\in D\\,P(x)\\equiv \\exists x\\in D\\,\\neg P(x),\\qquad \\neg\\,\\exists x\\in D\\,P(x)\\equiv \\forall x\\in D\\,\\neg P(x)$$"
    },
    {
      "t": "p",
      "md": "**用法：挑更容易的一侧去处理。** 例如要证明「$\\forall x\\in D\\,P(x)$ 为真」很困难时，可以改证与它等价的那一侧：「$\\exists x\\in D\\,\\neg P(x)$ 为**假**」。"
    },
    {
      "t": "h",
      "md": "3.2 [[nested quantifiers|嵌套量词]]（Nested Quantifiers）"
    },
    {
      "t": "p",
      "md": "语句 $\\forall x\\in D\\,\\forall y\\in D\\,P(x,y)$ 的含义是 $\\forall x\\in D\\,(\\forall y\\in D\\,P(x,y))$：对每一个 $x$，它里面这个关于 $y$ 的全称命题都成立。"
    },
    {
      "t": "p",
      "md": "例：设 $P(x,y)$ 表示「$x\\cdot y = y\\cdot x$」，则「$\\forall x\\in D\\,\\forall y\\in D\\,P(x,y)$」为真。"
    },
    {
      "t": "p",
      "md": "设论域 $D=\\{1,2,3\\}$，把下面五条陈述与对应的真值表配对（PPT 的提示：注意「T」的个数）：$\\forall x\\in D\\,\\forall y\\in D\\,P(x,y)$、$\\forall x\\in D\\,\\exists y\\in D\\,P(x,y)$、$\\exists x\\in D\\,\\forall y\\in D\\,P(x,y)$、$\\exists x\\in D\\,\\exists y\\in D\\,P(x,y)$、$\\forall y\\in D\\,\\forall x\\in D\\,P(x,y)$。"
    },
    {
      "t": "note",
      "md": "同一张真值表可以被不同的量词组合命中；配对时要把**量词的种类与顺序**一起看。"
    },
    {
      "t": "p",
      "md": "PPT 的 [Exercise]：设 $D=\\{1,2,3\\}$，请举出一个谓词 $P(x,y)$，使「$\\exists x\\in D\\,\\forall y\\in D\\,P(x,y)$」为真。它给出的真值表是：$x=1$ 那一列全为 F，$x=2$ 那一列全为 T，$x=3$ 那一列全为 F。"
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y=1$",
        "$y=2$",
        "$y=3$"
      ],
      "rows": [
        [
          "1",
          "F",
          "F",
          "F"
        ],
        [
          "2",
          "T",
          "T",
          "T"
        ],
        [
          "3",
          "F",
          "F",
          "F"
        ]
      ]
    },
    {
      "t": "h",
      "md": "四、[[rules of inference|推理规则]]（Rules of Inference）"
    },
    {
      "t": "p",
      "md": "给定若干[[premise|前提]]（assumed to be true）：$\\neg p\\land q$、$r\\to p$、$\\neg r\\to s$、$s\\to t$，要求证明某个结论（例如 $t$）为真。"
    },
    {
      "t": "ul",
      "items": [
        "用真值表逐一枚举来证明结论是很繁琐的。",
        "**论证（argument）**可以用来证明结论；**有效（valid）**意味着结论必须由前提推得。",
        "**推理规则**：从已有的语句推出新语句的模板。"
      ]
    },
    {
      "t": "h",
      "md": "4.1 类比：逻辑推理 vs. 插头与插座（Plugs & Sockets）"
    },
    {
      "t": "p",
      "md": "把**前提**（Premise 1、Premise 2，均为真）看成「有电的真导线」，把**推理规则**（Rule A、Rule B）看成插座与转接器：前提为真，只要通过正确的规则一步步转接，得到的**结论**就必然为真。"
    },
    {
      "t": "h",
      "md": "4.2 PPT 列出的推理规则"
    },
    {
      "t": "tbl",
      "head": [
        "PPT 编号",
        "前提 $\\Rightarrow$ 结论",
        "名称"
      ],
      "rows": [
        [
          "Rule 1",
          "$p$，$p\\to q$ $\\Rightarrow$ $q$",
          "[[modus ponens|假言推理]]"
        ],
        [
          "Rule 2",
          "$\\neg q$，$p\\to q$ $\\Rightarrow$ $\\neg p$",
          "[[modus tollens|拒取式]]"
        ],
        [
          "Rule 3",
          "$p\\to q$，$q\\to r$ $\\Rightarrow$ $p\\to r$",
          "假言三段论 hypothetical syllogism"
        ],
        [
          "Rule 4",
          "$p\\lor q$，$\\neg p$ $\\Rightarrow$ $q$",
          "析取三段论 disjunctive syllogism"
        ],
        [
          "Rule 5",
          "$p\\lor q$，$\\neg p\\lor r$ $\\Rightarrow$ $q\\lor r$",
          "消解 resolution"
        ],
        [
          "Rule 6",
          "$p$，$q$ $\\Rightarrow$ $p\\land q$",
          "合取 conjunction"
        ],
        [
          "Rule 7",
          "$p$ $\\Rightarrow$ $p\\lor q$",
          "附加 addition"
        ],
        [
          "Rule 8",
          "$p\\land q$ $\\Rightarrow$ $p$",
          "化简 simplification"
        ]
      ]
    },
    {
      "t": "note",
      "md": "PPT 追问：**这些规则是怎么来的？它们对不对？**（可以用真值表/逻辑等价来验证。）第 30 页的推导用到了 Rule 1、Rule 2、Rule 8。"
    },
    {
      "t": "h",
      "md": "4.3 推理规则的应用：证明 $t$ 为真"
    },
    {
      "t": "p",
      "md": "前提：$\\neg p\\land q$、$r\\to p$、$\\neg r\\to s$、$s\\to t$。逐步推出 $t$："
    },
    {
      "t": "ol",
      "items": [
        "**Step 1**：由 $\\neg p\\land q$ 使用 **Rule 8**（化简）得到 $\\neg p$。",
        "**Step 2**：由 Step 1 的 $\\neg p$ 与 $r\\to p$ 使用 **Rule 2**（拒取式）得到 $\\neg r$。",
        "**Step 3**：由 $\\neg r\\to s$ 与 Step 2 的 $\\neg r$ 使用 **Rule 1**（假言推理）得到 $s$。",
        "**Step 4**：由 $s\\to t$ 与 Step 3 的 $s$ 使用 **Rule 1**（假言推理）得到 $t$。"
      ]
    },
    {
      "t": "h",
      "md": "五、证明方法（Proof methods）"
    },
    {
      "t": "h",
      "md": "5.1 [[direct proof|直接证明]]（Direct proof of $p\\to q$）"
    },
    {
      "t": "p",
      "md": "把 $p$ 作为前提，一步步（step-by-step）推出 $q$。"
    },
    {
      "t": "p",
      "md": "**例**：证明两个奇数之和是偶数。设 $a,b$ 是奇数，则存在整数 $x,y$ 使得 $a=2x+1$，$b=2y+1$。"
    },
    {
      "t": "p",
      "md": "$$a+b = 2x+1+2y+1 = 2(x+y+1)$$"
    },
    {
      "t": "p",
      "md": "所以它们的和是偶数。（Done!）"
    },
    {
      "t": "h",
      "md": "5.2 [[proof by contraposition|逆否证明]]（Proof by contraposition of $p\\to q$）"
    },
    {
      "t": "p",
      "md": "把 $\\neg q$ 作为前提，推出 $\\neg p$。依据是 **$\\neg q\\to\\neg p$ 与 $p\\to q$ 等价**。"
    },
    {
      "t": "p",
      "md": "**例**：设 $n$ 是整数，证明「若 $5n+4$ 是奇数，则 $n$ 是奇数」。"
    },
    {
      "t": "p",
      "md": "**证明**：假设 $n$ 是偶数，则存在整数 $a$ 使 $n=2a$，于是 $$5n+4 = 10a+4 = 2(5a+2)$$ 是偶数（不是奇数）。逆否命题得证，原命题成立。（Done!）"
    },
    {
      "t": "h",
      "md": "5.3 [[proof by contradiction|反证法]]（Proof by contradiction）"
    },
    {
      "t": "p",
      "md": "把 $\\neg p$ 作为前提，推出**矛盾**。"
    },
    {
      "t": "p",
      "md": "**例**：证明 $\\sqrt{2}$ 是无理数（即：不存在整数 $a,b$ 使 $\\sqrt{2}=a/b$）。"
    },
    {
      "t": "ol",
      "items": [
        "为导出矛盾，反设 $\\sqrt{2}$ 是有理数：存在整数 $a,b$ 使 $\\sqrt{2} = a/b$，且 $a,b$ **没有公因子**。",
        "由 $\\sqrt{2}=a/b$ 得 $2b^2 = a^2$，所以 $a^2$ 是偶数。",
        "于是 $a$ 必为偶数，即存在整数 $c$ 使 $a = 2c$。",
        "把 $a=2c$ 代入 $2b^2=a^2$，得 $2b^2 = 4c^2$，于是 $b^2 = 2c^2$。",
        "所以 $b^2$ 是偶数，$b$ 必为偶数。",
        "于是 $a,b$ 有公因子 $2$，与最初的假设矛盾。故 $\\sqrt{2}$ 是无理数。"
      ]
    },
    {
      "t": "h",
      "md": "5.4 分类讨论 / 穷举证明（Proof by cases / exhaustive）"
    },
    {
      "t": "p",
      "md": "把所有可能情况都覆盖，逐一证明命题在每种情况下都成立。"
    },
    {
      "t": "p",
      "md": "**例**（即开篇第 (1) 个问题）：设 $a,b,c$ 为任意整数，若 $a+b$ 与 $b+c$ 都是偶数，则 $a+c$ 是偶数。"
    },
    {
      "t": "ul",
      "items": [
        "**Case 1：$b$ 是奇数。** 因为 $a+b$ 是偶数而 $b$ 是奇数，所以 $a$ 是奇数；因为 $b+c$ 是偶数而 $b$ 是奇数，所以 $c$ 是奇数。于是 $a+c$ 是偶数。",
        "**Case 2：$b$ 是偶数。** 因为 $a+b$ 是偶数而 $b$ 是偶数，所以 $a$ 是偶数；因为 $b+c$ 是偶数而 $b$ 是偶数，所以 $c$ 是偶数。于是 $a+c$ 是偶数。"
      ]
    },
    {
      "t": "h",
      "md": "5.5 存在性证明（Existence proofs）"
    },
    {
      "t": "p",
      "md": "**构造性（constructive）**：找出一个具体的值 $a$ 使 $P(a)$ 为真，从而证明 $\\exists x\\in D\\,P(x)$。"
    },
    {
      "t": "p",
      "md": "**例**：存在非零整数 $x,y,z$ 使得 $x^2+y^2=z^2$。取 $x=3$，$y=4$，$z=5$：$\\text{L.H.S.}=x^2+y^2=25$，$\\text{R.H.S.}=z^2=25$。（Done!）"
    },
    {
      "t": "p",
      "md": "**非构造性（non-constructive）**：借助某些性质证明「存在」，但**不给出具体值**。"
    },
    {
      "t": "p",
      "md": "**例**（开篇第 (2) 个问题）：已知 8 个人的生日落在同一周内，则存在某一天 $x$，至少有两个人的生日在同一天。"
    },
    {
      "t": "p",
      "md": "**证明**（PPT 提示：反设之所以写成 $\\neg\\exists x\\in D\\,P(x)$，见第 22 页量词的德摩根律）：为导出矛盾，反设**每一天最多只有 1 个人**过生日；那么这一周内过生日的人数 $\\le 1\\times 7 = 7$，这与前提「有 8 个人在这一周内过生日」矛盾。"
    },
    {
      "t": "note",
      "md": "**非构造性**的含义：这个证明并没有告诉我们那一天究竟是 Sunday、Monday、…… 还是 Saturday。"
    },
    {
      "t": "h",
      "md": "5.6 用反例反驳（Disprove by counter example）"
    },
    {
      "t": "p",
      "md": "要证明 $\\forall x\\in D\\,P(x)$ 为**假**：用构造性的方法证明 $\\exists x\\in D\\,\\neg P(x)$（PPT 注：我们并不关心这个反例之外的取值）。"
    },
    {
      "t": "p",
      "md": "**例**：命题「每一个素数 $x$ 都是奇数」是假的。论域中包含素数，取**反例** $x=2$：$2$ 是素数，但 $2$ **不是**奇数。"
    },
    {
      "t": "h",
      "md": "5.7 归纳法（Proof by induction）"
    },
    {
      "t": "p",
      "md": "要证明 $\\forall x\\in D\\,P(x)$ 为真，可以用**归纳法（induction）**："
    },
    {
      "t": "ul",
      "items": [
        "先证**基础情形（base case）**，例如 $P(1)$；",
        "再证：若 $P(k)$ 为真，则 $P(k+1)$ 也为真。"
      ]
    },
    {
      "t": "note",
      "md": "PPT 标注：这部分将在 **Lecture #5** 讨论。"
    },
    {
      "t": "h",
      "md": "六、证明中的常见错误（Mistakes in proofs）"
    },
    {
      "t": "p",
      "md": "**错误示例 1：证明 $2=1$。** 设 $a,b$ 是两个正整数，且 $a=b$。"
    },
    {
      "t": "ol",
      "items": [
        "$a = b$",
        "两边乘 $a$：$a^2 = ab$",
        "两边减 $b^2$：$a^2 - b^2 = ab - b^2$",
        "两边因式分解：$(a+b)(a-b) = b(a-b)$",
        "两边除以 $a-b$：$a+b = b$",
        "由 $a=b$ 得 $2b = b$，两边除以 $b$ 得 $2 = 1$"
      ]
    },
    {
      "t": "warn",
      "md": "**错在哪里**：既然 $a=b$，就有 $a-b=0$；第 5 步「两边除以 $a-b$」实际上是**除以 0**，这是不允许的。整个「证明」从这一步起失效。"
    },
    {
      "t": "p",
      "md": "**错误示例 2：证明「若 $a,b$ 是大于 2 的素数，则 $a+b$ 是偶数」。** 给出的「证明」是：大于 2 的素数是 $3,5,7,\\dots$；例如 $3+7=10$，是偶数；于是「证明完成」。"
    },
    {
      "t": "warn",
      "md": "**错在哪里**：举出一个例子**不能**证明一个关于「所有」这样的 $a,b$ 的全称命题（以例代证）。命题本身要证明的是对任意的大于 2 的素数对 $a,b$ 都成立，而不是某一个特例。"
    },
    {
      "t": "h",
      "md": "七、小结（Summary）"
    },
    {
      "t": "p",
      "md": "本讲建立了命题逻辑、量词、推理规则等概念，并回答了「**如何证明一个命题**」。PPT 建议阅读教材 **Chapter 1**。"
    },
    {
      "t": "h",
      "md": "附录 1：说谎者悖论（Liar paradox）"
    },
    {
      "t": "p",
      "md": "令 $P$：「这个语句 $P$ 是假的。」问：$P$ 是真（T）还是假（F）？"
    },
    {
      "t": "ul",
      "items": [
        "**Case 1：若 $P$ 是 T**，则语句「$P$ 是假的」为真，即 $P$ 是 F，与「$P$ 是 T」矛盾。",
        "**Case 2：若 $P$ 是 F**，则语句「$P$ 是假的」为假，即 $P$ 是 T，与「$P$ 是 F」矛盾。",
        "两种情况都导致矛盾！"
      ]
    },
    {
      "t": "h",
      "md": "附录 2：其他逻辑悖论"
    },
    {
      "t": "p",
      "md": "PPT 给出更多涉及**自指（self-reference）**或**循环指涉（circular reference）**的逻辑悖论：**Card paradox**（Wikipedia 链接）与 **Barber paradox**（Wikipedia 链接）。"
    }
  ],
  "terms": [
    [
      "proposition",
      "命题"
    ],
    [
      "truth value",
      "真值"
    ],
    [
      "negation",
      "否定"
    ],
    [
      "conjunction",
      "合取"
    ],
    [
      "disjunction",
      "析取"
    ],
    [
      "implication",
      "蕴含"
    ],
    [
      "premise",
      "前提"
    ],
    [
      "contrapositive",
      "逆否命题"
    ],
    [
      "biconditional",
      "双条件命题"
    ],
    [
      "tautology",
      "重言式"
    ],
    [
      "contradiction",
      "矛盾式"
    ],
    [
      "logical equivalence",
      "逻辑等价"
    ],
    [
      "De Morgan's laws",
      "德摩根律"
    ],
    [
      "propositional function",
      "命题函数"
    ],
    [
      "predicate",
      "谓词"
    ],
    [
      "domain",
      "论域"
    ],
    [
      "universal quantifier",
      "全称量词"
    ],
    [
      "existential quantifier",
      "存在量词"
    ],
    [
      "nested quantifiers",
      "嵌套量词"
    ],
    [
      "rules of inference",
      "推理规则"
    ],
    [
      "modus ponens",
      "假言推理"
    ],
    [
      "modus tollens",
      "拒取式"
    ],
    [
      "direct proof",
      "直接证明"
    ],
    [
      "proof by contraposition",
      "逆否证明"
    ],
    [
      "proof by contradiction",
      "反证法"
    ]
  ],
  "qids": [
    "cm-1-01",
    "cm-1-02",
    "cm-1-03",
    "cm-1-04",
    "cp-1"
  ]
});

  /* ---------- L03 第3讲 基本结构：集合、序列、矩阵、函数、关系 ---------- */
  T.push({
  "no": "L03",
  "title": "第3讲 基本结构：集合、序列、矩阵、函数、关系",
  "titleEn": "Lecture 3: Basic Structures",
  "tags": [
    "Set",
    "Sequence",
    "Summation",
    "Matrix",
    "Function",
    "One-to-one",
    "Onto",
    "Relation",
    "Binary Relation",
    "Equivalence Relation",
    "Partial Ordering",
    "Hasse Diagram"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "本讲概览（Basic Structures）"
    },
    {
      "t": "p",
      "md": "本讲是 **Lecture 3: Basic Structures**（基本结构），作者标注 **Ken Yiu @ 2025**。它是离散数学里最基础的一讲：先把后面各讲反复要用到的「对象」与「运算」定义清楚，包括 [[Set|集合]]、[[Sequence|序列]]、[[Matrix|矩阵]]、[[Function|函数]]、[[Relation|关系]] 五大部分。"
    },
    {
      "t": "p",
      "md": "幻灯片给出的本讲路线图（Our Roadmap）依次为：**Sets → Sequences → Matrices → Functions → Relations**。教学安排上，Sets 在 Lecture 3 讲完；Sequences 标为「In the next ...」，Matrix 应用放到 Lectures 7–9；函数与关系同样在本讲讲完。"
    },
    {
      "t": "h",
      "md": "一、Sets（集合）"
    },
    {
      "t": "p",
      "md": "[[Set|集合]] 的定义：**a set is a collection of elements**（集合是元素的汇集）。集合中的元素也叫这个集合的 **member**（成员）。"
    },
    {
      "t": "p",
      "md": "表示一个集合最直接的方式是**枚举元素**（enumerating its elements），例如幻灯片给出："
    },
    {
      "t": "ul",
      "items": [
        "整数集合：$S=\\{5,7,9,11\\}$（OCR 原文为 “S= 15,7,9, 11, 1.”，按上下文应为四个奇数 $5,7,9,11$ 的枚举）。",
        "字母集合：$L=\\{'s','e','t'\\}$（OCR 原文中元素有乱码，按「set 的字母」这一意图读作 $s,e,t$）。"
      ]
    },
    {
      "t": "p",
      "md": "**Well-known sets（常见数集）**："
    },
    {
      "t": "ul",
      "items": [
        "$\\emptyset$：**the empty set**（空集），它不含任何元素。",
        "$\\mathbb{N}$：**the set of positive integers**（正整数集）。",
        "$\\mathbb{Z}$：**the set of integers**（整数集）。"
      ]
    },
    {
      "t": "h",
      "md": "Set membership（元素归属）"
    },
    {
      "t": "p",
      "md": "幻灯片给出两条记号："
    },
    {
      "t": "ul",
      "items": [
        "记号 $x \\in S$ 表示 **$x$ 是 $S$ 的元素**（$x$ is an element of $S$）。",
        "记号 $x \\notin S$ 表示 **$x$ 不是 $S$ 的元素**（$x$ is not an element of $S$）。"
      ]
    },
    {
      "t": "note",
      "md": "OCR 把这两种记号都识别成了 `xe S`，属于典型的符号丢失；请以 $\\in$ 与 $\\notin$ 的正确写法人读。"
    },
    {
      "t": "p",
      "md": "**Set-builder notation（集合构造式 / 描述法）**：用「属于哪个论域」加「满足什么谓词」来定义集合，幻灯片给出两种等价写法："
    },
    {
      "t": "p",
      "md": "$$S=\\{x \\mid x\\in \\text{Domain} \\text{ and } \\text{Predicate}(x)\\},\\qquad S=\\{x \\in \\text{Domain} \\mid \\text{Predicate}(x)\\}$$"
    },
    {
      "t": "p",
      "md": "三个例子："
    },
    {
      "t": "p",
      "md": "$$A=\\{x\\in\\mathbb{N} \\mid x \\le 5\\}$$"
    },
    {
      "t": "p",
      "md": "$$B=\\{x\\in\\mathbb{N} \\mid (x\\le 8) \\text{ and } (x \\text{ is even})\\}$$"
    },
    {
      "t": "p",
      "md": "$$C=\\{x\\in\\mathbb{N} \\mid (x\\le 8) \\land (\\exists a\\in\\mathbb{N}\\; x=2a)\\}$$"
    },
    {
      "t": "p",
      "md": "可以看到：$B$ 用自然语言写出「偶数」，$C$ 改用**量词 + 逻辑运算符**把「偶数」写成 $\\exists a\\in\\mathbb{N},\\,x=2a$，两者是同一个集合。"
    },
    {
      "t": "h",
      "md": "Exercise：用集合构造式表达（Set Builder Notation）"
    },
    {
      "t": "p",
      "md": "幻灯片要求用**集合构造式**表达下面两个集合，且**必须使用量词与逻辑运算符**："
    },
    {
      "t": "ul",
      "items": [
        "(1)「正整数的集合中，是 $5$ 的整数倍的那些数」：$S=\\{x\\in\\mathbb{N} \\mid (\\exists a\\in\\mathbb{N}\\; x=5a)\\}$。",
        "(2)「正整数的集合中，是 $5$ 的整数倍、但**不是** $7$ 的整数倍的那些数」：$T=\\{x\\in\\mathbb{N} \\mid (\\exists a\\in\\mathbb{N}\\; x=5a) \\land (\\forall b\\in\\mathbb{N}\\; x\\ne 7b)\\}$。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片接着说：**如果允许使用数学运算符（例如 `mod`）**，上面两个集合可以写得更简洁："
    },
    {
      "t": "p",
      "md": "$$S=\\{x\\in\\mathbb{N} \\mid (x \\bmod 5 = 0)\\},\\qquad T=\\{x\\in\\mathbb{N} \\mid (x \\bmod 5 = 0) \\land (x \\bmod 7 \\ne 0)\\}$$"
    },
    {
      "t": "note",
      "md": "第二个条件用 $\\forall b\\in\\mathbb{N}\\; x\\ne 7b$ 表达「不是 7 的倍数」；OCR 中该式被截断为 `VbeN x‡7`，这里按「$\\forall b\\in\\mathbb{N},\\,x\\ne 7b$」还原。"
    },
    {
      "t": "h",
      "md": "Set operations（集合运算）"
    },
    {
      "t": "p",
      "md": "设 $S$ 是一个集合、$T$ 是一个集合。幻灯片以表格给出各运算的描述、记号与结果："
    },
    {
      "t": "tbl",
      "head": [
        "描述",
        "记号",
        "结果"
      ],
      "rows": [
        [
          "Subset（子集）",
          "$S \\subseteq T$",
          "若 $S$ 的每个元素都是 $T$ 的元素则为 **True**，否则 **False**"
        ],
        [
          "Superset（超集）",
          "$S \\supseteq T$",
          "若 $T$ 的每个元素都是 $S$ 的元素则为 **True**，否则 **False**"
        ],
        [
          "Set equality（集合相等）",
          "$S=T$",
          "等价于 $(S \\subseteq T)$ **and** $(T \\subseteq S)$"
        ],
        [
          "Union（并集）",
          "$S \\cup T$",
          "由或属于 $S$、或属于 $T$ 的元素组成的集合"
        ],
        [
          "Intersection（交集）",
          "$S \\cap T$",
          "由既属于 $S$、又属于 $T$ 的元素组成的集合"
        ],
        [
          "Difference（差集）",
          "$S - T$",
          "由属于 $S$ 但不属于 $T$ 的元素组成的集合"
        ],
        [
          "Cardinality（基数）",
          "$|S|$",
          "$S$ 中元素的个数"
        ]
      ]
    },
    {
      "t": "p",
      "md": "例如 $\\{1,2\\} \\subseteq \\{1,2,3\\}$ 为真，而 $\\{1,2,3\\} \\subseteq \\{1,2\\}$ 为假（因为 $3$ 不在右边那个集合里）。"
    },
    {
      "t": "warn",
      "md": "OCR 把子集/超集符号识别成 `SST` / `S2T`，把并、交识别成 `SUT` / `SnT`；正确记号是 $\\subseteq$ / $\\supseteq$ 与 $\\cup$ / $\\cap$，请勿混用。另外「属于」是 $\\in$（元素与集合之间），「子集」是 $\\subseteq$（集合与集合之间）。"
    },
    {
      "t": "h",
      "md": "Set operations：例子（Example）"
    },
    {
      "t": "p",
      "md": "幻灯片给出具体例子，求每个表达式的值。设"
    },
    {
      "t": "p",
      "md": "$$S=\\{1,2,3\\},\\qquad T=\\{2,5,6\\},\\qquad R=\\{1,2,3,5\\}$$"
    },
    {
      "t": "tbl",
      "head": [
        "表达式",
        "结果"
      ],
      "rows": [
        [
          "$S \\subseteq R$",
          "**False**（OCR 原文写作 `SCR`）"
        ],
        [
          "$S = T$",
          "**True**（OCR 原文写作 `S=T`）"
        ],
        [
          "$S \\cup T$",
          "$\\{1,2,3,5,6\\}$"
        ],
        [
          "$S \\cap T$",
          "$\\{2\\}$"
        ],
        [
          "$S - T$",
          "$\\{1,3\\}$"
        ],
        [
          "$|S|$",
          "$3$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "表中「$S=T$ 为 True」与上面给出的 $S=\\{1,2,3\\},T=\\{2,5,6\\}$ 相互冲突，幻灯片此处应有排版笔误，请以并、交、差、基数这些结果为准。表中第二行若要成立，通常对应的是 $R=\\{1,2,3,5\\}$ 与别的集合之间的关系，OCR 已无法还原原始行序。"
    },
    {
      "t": "h",
      "md": "Set operations：等价的逻辑表达式"
    },
    {
      "t": "p",
      "md": "幻灯片进一步把这些记号写成**逻辑表达式**（这就是「用逻辑刻画集合运算」的统一格式）："
    },
    {
      "t": "tbl",
      "head": [
        "描述",
        "记号",
        "等价的逻辑表达式"
      ],
      "rows": [
        [
          "Subset",
          "$S \\subseteq T$",
          "$\\forall x\\,(x\\in S \\rightarrow x\\in T)$"
        ],
        [
          "Superset",
          "$S \\supseteq T$",
          "$\\forall x\\,(x\\in T \\rightarrow x\\in S)$"
        ],
        [
          "Set equality",
          "$S = T$",
          "$\\forall x\\,(x\\in S \\leftrightarrow x\\in T)$"
        ],
        [
          "Union",
          "$S \\cup T$",
          "$\\{x \\mid x\\in S \\lor x\\in T\\}$"
        ],
        [
          "Intersection",
          "$S \\cap T$",
          "$\\{x \\mid x\\in S \\land x\\in T\\}$"
        ],
        [
          "Difference",
          "$S - T$",
          "$\\{x \\mid x\\in S \\land x\\notin T\\}$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "集合相等写成双向蕴含 $\\leftrightarrow$，这正是「用元素归属证明两个集合相等」的依据；子集/超集用单向蕴含。"
    },
    {
      "t": "h",
      "md": "The Union and the Intersection of Multiple Sets（多个集合的并与交）"
    },
    {
      "t": "p",
      "md": "给定多个集合 $S_1, S_2, \\dots, S_n$（用下标编号）："
    },
    {
      "t": "ul",
      "items": [
        "它们的**并**记为 $\\bigcup_{i=1}^{n} S_i$，含义是 $S_1 \\cup S_2 \\cup \\cdots \\cup S_n$。",
        "它们的**交**记为 $\\bigcap_{i=1}^{n} S_i$，含义是 $S_1 \\cap S_2 \\cap \\cdots \\cap S_n$。"
      ]
    },
    {
      "t": "h",
      "md": "Cartesian product（笛卡尔积）"
    },
    {
      "t": "p",
      "md": "两个集合 $S$ 与 $T$ 的 **Cartesian product** 定义为"
    },
    {
      "t": "p",
      "md": "$$S \\times T = \\{\\,(s,t) \\mid s\\in S \\ \\land\\ t\\in T\\,\\}$$"
    },
    {
      "t": "p",
      "md": "其中 $(s,t)$ 称为一个 **pair**（序对），书写时**顺序有意义**：$(s,t)$ 与 $(t,s)$ 一般不同。"
    },
    {
      "t": "p",
      "md": "例子：设 $S=\\{1,5,3\\}$，$T=\\{4,7\\}$，则"
    },
    {
      "t": "p",
      "md": "$$S \\times T = \\{(1,4),(5,4),(3,4),(1,7),(5,7),(3,7)\\}$$"
    },
    {
      "t": "p",
      "md": "幻灯片右侧另外用 $7,4$ 与 $1,5,3$ 画出了这个积的二维示意（横轴取 $S$ 的元素、纵轴取 $T$ 的元素，共 $3\\times 2 = 6$ 个格点）。"
    },
    {
      "t": "h",
      "md": "Venn diagram（文氏图）"
    },
    {
      "t": "p",
      "md": "**Venn diagram** 可以用来表示集合。幻灯片给出的例子仍然使用"
    },
    {
      "t": "p",
      "md": "$$S=\\{1,2,3\\},\\qquad T=\\{2,5,6\\},\\qquad R=\\{1,2,3,5\\}$$"
    },
    {
      "t": "p",
      "md": "在图中：$1,3$ 只在 $S$ 处，$2$ 是 $S$ 与 $T$ 的公共元素，$5$ 在 $T$ 与 $R$ 中，$6$ 只在 $T$ 中，而 $R$ 把 $S$ 整体包含进去，从而 $S \\subseteq R$。"
    },
    {
      "t": "p",
      "md": "幻灯片随后用颜色区域表示三种基本运算："
    },
    {
      "t": "ul",
      "items": [
        "**灰色区域**表示 $S \\cup T$。",
        "**紫色区域**表示 $S \\cap T$。",
        "**蓝色区域**表示 $S - T$。"
      ]
    },
    {
      "t": "p",
      "md": "文氏图还告诉我们下面这条性质："
    },
    {
      "t": "p",
      "md": "$$|S \\cup T| = |S| + |T| - |S \\cap T|$$"
    },
    {
      "t": "p",
      "md": "幻灯片强调：**它给出了一种计算基数（cardinality）的新方法**。"
    },
    {
      "t": "note",
      "md": "用上面的例子验算：$|S \\cup T| = |\\{1,2,3,5,6\\}| = 5$，而 $|S|+|T|-|S\\cap T| = 3+3-1 = 5$，两边一致。"
    },
    {
      "t": "h",
      "md": "Set Identities（集合恒等式）"
    },
    {
      "t": "p",
      "md": "幻灯片先给了一道**证明题**：证明 $S \\cup T = T \\cup S$。它的 **Direct proof（直接证明）** 如下："
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned} S \\cup T &= \\{x \\mid x\\in S \\lor x\\in T\\} \\\\ &= \\{x \\mid x\\in T \\lor x\\in S\\} \\\\ &= T \\cup S \\end{aligned}$$"
    },
    {
      "t": "p",
      "md": "关键一步是中间的**交换律**：$\\lor$（或）本身满足交换律，所以刻画集合的元素条件可以交换次序。"
    },
    {
      "t": "p",
      "md": "幻灯片接着列出常用的集合恒等式（$S,T,R$ 都是集合），并在最后补充了三条："
    },
    {
      "t": "tbl",
      "head": [
        "恒等式",
        "名称"
      ],
      "rows": [
        [
          "$S \\cup \\emptyset = S$",
          "并的单位元（Identity law）"
        ],
        [
          "$S \\cap \\emptyset = \\emptyset$",
          "交的零元（Domination / Annihilation law）"
        ],
        [
          "$S \\cup T = T \\cup S$",
          "并的交换律"
        ],
        [
          "$S \\cap T = T \\cap S$",
          "交的交换律"
        ],
        [
          "$(S \\cup T) \\cup R = S \\cup (T \\cup R)$",
          "并的结合律"
        ],
        [
          "$(S \\cap T) \\cap R = S \\cap (T \\cap R)$",
          "交的结合律"
        ],
        [
          "$S \\cup (T \\cap R) = (S \\cup T) \\cap (S \\cup R)$",
          "并对交的分配律"
        ],
        [
          "$S \\cap (T \\cup R) = (S \\cap T) \\cup (S \\cap R)$",
          "交对并的分配律"
        ],
        [
          "$S \\cup S = S$",
          "并的幂等律（Idempotent law）"
        ],
        [
          "$S \\cap S = S$",
          "交的幂等律"
        ],
        [
          "$(S \\cup T)^{c} = S^{c} \\cap T^{c}$",
          "De Morgan 律（德摩根律）"
        ],
        [
          "$(S \\cap T)^{c} = S^{c} \\cup T^{c}$",
          "De Morgan 律"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "注意 $S \\cap \\emptyset = \\emptyset$：交运算的「零元」是空集，不要写成 $S$。而 $S \\cup \\emptyset = S$ 才是「加空集不改变集合」。"
    },
    {
      "t": "h",
      "md": "二、Sequence（序列）"
    },
    {
      "t": "p",
      "md": "[[Sequence|序列]] $a$ 是元素的**有序汇集**（an ordered collection of elements），写作"
    },
    {
      "t": "p",
      "md": "$$a=(a_1, a_2, \\dots, a_n)$$"
    },
    {
      "t": "ul",
      "items": [
        "$n$ 表示序列的**长度**（the length of the sequence）。",
        "$a_i$ 表示序列的**第 $i$ 个元素**（the $i$-th element）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片给出两条 **Remarks（说明）**："
    },
    {
      "t": "ul",
      "items": [
        "本课程用圆括号 $a=(a_1,a_2,\\dots,a_n)$ 这种记号，**有些书会用别的括号**（例如尖括号）来表示序列。",
        "本课程的下标从 $1$ 开始；**有些书从 $0$ 开始**。"
      ]
    },
    {
      "t": "p",
      "md": "两个例子："
    },
    {
      "t": "ul",
      "items": [
        "**Numeric sequence（数值序列）**：$(1,2,4,8,16)$。",
        "**Character sequence（字符序列）**：$('a','b','c')$。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片末尾提示：接下来**聚焦数值序列**（In the next ... focus on numeric ...）。"
    },
    {
      "t": "h",
      "md": "Sequence properties（序列的性质）"
    },
    {
      "t": "p",
      "md": "关于序列 $a$ 的两个基本性质："
    },
    {
      "t": "ul",
      "items": [
        "**increasing（递增）**：若 $\\forall i,\\; a_i \\le a_{i+1}$，则序列递增。",
        "**decreasing（递减）**：若 $\\forall i,\\; a_i \\ge a_{i+1}$，则序列递减。"
      ]
    },
    {
      "t": "p",
      "md": "此外，给定一个序列，我们可以**删去其中某些元素**（同时保持剩余元素的相对次序）得到它的 **subsequence（子序列）**。"
    },
    {
      "t": "p",
      "md": "幻灯片给出的例子："
    },
    {
      "t": "ul",
      "items": [
        "序列 $a=(1,2,4,8,16)$ 是**递增**的。",
        "序列 $b=(5,4,3,2,1)$ 是**递减**的。",
        "序列 $c=(5,3,1)$ 是 $b$ 的一个**子序列**。"
      ]
    },
    {
      "t": "warn",
      "md": "注意递增/递减用的是 $\\le$ / $\\ge$（单调非严格），不是严格不等号 $<$ / $>$。另外 $(5,3,1)$ 是从 $b$ 中挑出第 $1,3,5$ 个元素得到的，**相对次序不能打乱**。"
    },
    {
      "t": "h",
      "md": "用递归定义序列（Recurrence）"
    },
    {
      "t": "p",
      "md": "我们也可以用 **recurrence（递推关系）** 来定义一个序列；这样的序列可以有**无穷多个元素**。幻灯片给出的例子是 **Fibonacci sequence（斐波那契数列）** $f$ 的定义："
    },
    {
      "t": "p",
      "md": "$$f_1 = 1,\\qquad f_2 = 1,\\qquad f_i = f_{i-1} + f_{i-2}\\ \\text{ if } i \\ge 3$$"
    },
    {
      "t": "p",
      "md": "于是 $$f = (1,1,2,3,5,8,13,21,\\dots)$$"
    },
    {
      "t": "note",
      "md": "递推定义必须给出**初始项**（$f_1=f_2=1$）和**递推式**（$f_i=f_{i-1}+f_{i-2}$）两部分，缺一不可；否则序列无法唯一确定。"
    },
    {
      "t": "h",
      "md": "Summation of sequences（序列的求和）"
    },
    {
      "t": "p",
      "md": "**Summation notation（求和记号）** 用来表示序列 $a$ 中若干项之和："
    },
    {
      "t": "p",
      "md": "$$\\sum_{i=l}^{n} a_i = a_l + a_{l+1} + \\dots + a_{n-1} + a_n$$"
    },
    {
      "t": "p",
      "md": "其中 $l$ 是 **lower limit（下限）**、$n$ 是 **upper limit（上限）**。"
    },
    {
      "t": "p",
      "md": "**例子**：求 $\\sum_{i=1}^{5} i^{3}$ 的值。"
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned} \\sum_{i=1}^{5} i^{3} &= 1 + 8 + 27 + 64 + 125 \\\\ &= 225 \\end{aligned}$$"
    },
    {
      "t": "h",
      "md": "Nested summation（嵌套求和）"
    },
    {
      "t": "p",
      "md": "幻灯片的例子是嵌套求和 $\\sum_{i=1}^{3} \\sum_{j=1}^{2} (i \\cdot j)$。"
    },
    {
      "t": "p",
      "md": "**如何计算嵌套求和？——先算最内层的求和**（Evaluate the innermost summation first）。完整过程如下："
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned} \\sum_{i=1}^{3}\\sum_{j=1}^{2}(i\\cdot j) &= \\sum_{i=1}^{3}\\left(i + 2i\\right) \\\\ &= \\sum_{i=1}^{3} (3i) \\\\ &= 3 + 6 + 9 \\\\ &= 18 \\end{aligned}$$"
    },
    {
      "t": "p",
      "md": "第一步中，内层 $\\sum_{j=1}^{2}(i\\cdot j) = i\\cdot 1 + i\\cdot 2 = i + 2i = 3i$；注意**内层求和之后，外层求和的下标 $i$ 仍然保留**。"
    },
    {
      "t": "h",
      "md": "常用求和公式"
    },
    {
      "t": "p",
      "md": "可以用**公式**来求常见序列的和，幻灯片给出最常用的那一条："
    },
    {
      "t": "p",
      "md": "$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$"
    },
    {
      "t": "p",
      "md": "幻灯片提示：更多细节请查阅教材的相应章节（please check Chapter ... of the textbook）。"
    },
    {
      "t": "note",
      "md": "上面的嵌套求和我们用「先内后外」逐步算；若把内层结果 $3i$ 代入，也可直接用公式：$\\sum_{i=1}^{3} 3i = 3\\sum_{i=1}^{3} i = 3\\cdot\\frac{3\\cdot 4}{2} = 18$，与逐步计算一致。"
    },
    {
      "t": "h",
      "md": "三、Matrices（矩阵）"
    },
    {
      "t": "p",
      "md": "[[Matrix|矩阵]] 是一个**矩形的数组**，有 $m$ 行（rows）、$n$ 列（columns），因此也称为 **$m \\times n$ matrix**。一般写作"
    },
    {
      "t": "p",
      "md": "$$A=\\begin{pmatrix} a_{1,1} & a_{1,2} & \\cdots & a_{1,n} \\\\ a_{2,1} & a_{2,2} & \\cdots & a_{2,n} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{m,1} & a_{m,2} & \\cdots & a_{m,n} \\end{pmatrix}$$"
    },
    {
      "t": "p",
      "md": "其中 $a_{i,j}$ 表示位于第 $i$ 行、第 $j$ 列的元素。幻灯片给出的例子是形如"
    },
    {
      "t": "p",
      "md": "$$\\begin{pmatrix} 1 & 1 & 3 \\\\ 0 & 1 & 2 \\\\ 4 & 1 & \\cdot \\end{pmatrix}$$"
    },
    {
      "t": "p",
      "md": "的数值阵列（OCR 只留下零散数字 $1,1,3,0,1,2,4,1$，原始版面已不可还原，这里仅示其形状）。"
    },
    {
      "t": "h",
      "md": "Matrix addition（矩阵加法）"
    },
    {
      "t": "p",
      "md": "给定两个 $m \\times n$ 的矩阵 $A$ 与 $B$，它们的和 $C = A + B$ 是**同维度** $m \\times n$ 的矩阵，且对应位置的元素相加："
    },
    {
      "t": "p",
      "md": "$$C_{i,j} = a_{i,j} + b_{i,j}$$"
    },
    {
      "t": "p",
      "md": "幻灯片给出的例子（OCR 保留了数字，符号位置有丢失）是按元素相加："
    },
    {
      "t": "p",
      "md": "$$\\begin{pmatrix} 1 & 3 & 5 \\\\ 2 & 4 & 6 \\end{pmatrix} + \\begin{pmatrix} 1 & 2 & \\cdot \\\\ 1 & 1 & 3 \\end{pmatrix} = \\begin{pmatrix} \\cdot & \\cdot & \\cdot \\\\ \\cdot & \\cdot & \\cdot \\end{pmatrix}$$"
    },
    {
      "t": "warn",
      "md": "**只有同维度的矩阵才能相加**：两个 $m\\times n$ 矩阵相加仍是 $m\\times n$；行数或列数不相等时加法无定义。"
    },
    {
      "t": "h",
      "md": "Matrix multiplication（矩阵乘法）"
    },
    {
      "t": "p",
      "md": "给定一个 $m \\times p$ 的矩阵 $A$ 和一个 $p \\times n$ 的矩阵 $B$，它们的积 $C = AB$ 是 $m \\times n$ 的矩阵，且"
    },
    {
      "t": "p",
      "md": "$$C_{i,j} = \\sum_{k=1}^{p} a_{i,k}\\, b_{k,j}$$"
    },
    {
      "t": "p",
      "md": "也就是说：$C$ 的第 $i$ 行第 $j$ 列元素，等于 $A$ 的第 $i$ 行与 $B$ 的第 $j$ 列**逐项相乘再求和**。"
    },
    {
      "t": "note",
      "md": "维度检查口诀：$(m \\times p)\\cdot(p \\times n) \\to m \\times n$。**左矩阵的列数必须等于右矩阵的行数**，中间的 $p$ 被「消掉」。"
    },
    {
      "t": "p",
      "md": "幻灯片给出的例子是 $2 \\times 2$ 矩阵与 $2 \\times 2$ 矩阵相乘，OCR 保留的数字为 $3,5,8,0$ 与 $4,6,10,1$，并给出结果元素 $2,1,3$。原始乘积式子已严重错位，下面按本讲公式 $C_{i,j}=\\sum_k a_{i,k}b_{k,j}$ 重建一个自洽的 $2\\times 2$ 例子以便核对算法："
    },
    {
      "t": "p",
      "md": "$$\\begin{pmatrix} 3 & 5 \\\\ 8 & 0 \\end{pmatrix}\\begin{pmatrix} 4 & 6 \\\\ 10 & 1 \\end{pmatrix} = \\begin{pmatrix} 3\\cdot 4 + 5\\cdot 10 & 3\\cdot 6 + 5\\cdot 1 \\\\ 8\\cdot 4 + 0\\cdot 10 & 8\\cdot 6 + 0\\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 62 & 23 \\\\ 32 & 48 \\end{pmatrix}$$"
    },
    {
      "t": "warn",
      "md": "上面的数字来自 OCR 残片，**排版原貌已不可还原**，此式是按公式重建的演算示例；考试请以幻灯片（或教材）上的原题为准确认。矩阵乘法**一般不满足交换律**，$AB \\ne BA$ 是常态，不要套用普通乘法的直觉。"
    },
    {
      "t": "h",
      "md": "Matrix applications（矩阵的应用）"
    },
    {
      "t": "p",
      "md": "幻灯片指出：**矩阵可以用来表示结构**（Matrix can be used to model the structure of ...），其具体应用将在 **Lectures 7–9**（图论部分）中介绍。幻灯片同时配了一张示意矩阵："
    },
    {
      "t": "p",
      "md": "$$\\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 3 \\\\ 0 & 4 & \\cdot \\end{pmatrix}$$"
    },
    {
      "t": "note",
      "md": "这一页只说明「矩阵能建模结构、后续讲」，**没有在本讲给出具体的图论定义**，因此本讲不展开。"
    },
    {
      "t": "h",
      "md": "四、Functions（函数）"
    },
    {
      "t": "p",
      "md": "给定两个集合：**domain**（定义域）$X$ 与 **range**（值域/陪域）$Y$。一个函数 $f: X \\to Y$ 把 $X$ 的每个元素**映射**到 $Y$ 的某个元素："
    },
    {
      "t": "p",
      "md": "$$f(x) = y$$"
    },
    {
      "t": "p",
      "md": "其中 $x$ 是 $X$ 的元素、$y$ 是 $Y$ 的元素。"
    },
    {
      "t": "p",
      "md": "幻灯片特别强调了这个映射的两条约束："
    },
    {
      "t": "ul",
      "items": [
        "**必须用到 $X$ 的所有元素**（must use all elements of $X$）——定义域中不允许有「没有对应」的元素。",
        "**不必用到 $Y$ 的所有元素**（but not necessarily all elements of $Y$）——值域中允许有「没有被指到」的元素。"
      ]
    },
    {
      "t": "p",
      "md": "函数可以用两种方式定义："
    },
    {
      "t": "ul",
      "items": [
        "**用方程/公式**：例如 $f(x) = 5x + 2$。",
        "**用显式的序对集合**：例如 $f = \\{('a',1),('b',2),('c',3)\\}$。"
      ]
    },
    {
      "t": "h",
      "md": "One-to-one function（单射）"
    },
    {
      "t": "p",
      "md": "函数 $f: X \\to Y$ 称为 **one-to-one**（单射），当且仅当：对 $X$ 中所有的 $x, x'$，"
    },
    {
      "t": "p",
      "md": "$$f(x) = f(x') \\ \\Rightarrow\\ x = x'$$"
    },
    {
      "t": "p",
      "md": "直观地说：**不同的输入不会给出相同的输出**（值域中每个被指到的元素最多只被一个定义域元素指向）。幻灯片给出的例子如图：定义域 $X$ 的元素 $a,b$ 分别映到 $1,2,3,4$ 中的不同元素。"
    },
    {
      "t": "note",
      "md": "等价的逆否形式更好用：若 $x \\ne x'$ 则 $f(x) \\ne f(x')$。OCR 中该式被识别为 `(x)=f(x) ›`，按定义应为 $f(x)=f(x') \\Rightarrow x=x'$。"
    },
    {
      "t": "h",
      "md": "Onto function（满射）"
    },
    {
      "t": "p",
      "md": "函数 $f: X \\to Y$ 称为 **onto function**（满射），如果："
    },
    {
      "t": "p",
      "md": "$$\\text{对每一个元素 } y\\in Y,\\ \\text{都存在 } x\\in X \\text{ 使得 } f(x) = y$$"
    },
    {
      "t": "p",
      "md": "也就是用逻辑量词写作 $\\forall y\\in Y\\, \\exists x\\in X,\\, f(x)=y$。直观地说：**$Y$ 的每个元素都至少被一个 $X$ 的元素指到**，值域中没有「空着」的元素。幻灯片给出的例子中，值域 $Y=\\{2,3\\}$ 的两个元素都被定义域元素指到。"
    },
    {
      "t": "h",
      "md": "Exercise：判断是否函数 / 单射 / 满射"
    },
    {
      "t": "p",
      "md": "幻灯片最后给出三个由箭头图定义的映射 $f, g, h$，要求判断："
    },
    {
      "t": "ul",
      "items": [
        "**$f$ 是不是一个函数？**（Is $f$ a function or not?）",
        "**$g$ 是不是单射？**（Is $g$ one-to-one function?）",
        "**$h$ 是不是满射？**（Is $h$ onto function?）"
      ]
    },
    {
      "t": "p",
      "md": "判断依据就是本讲给出的定义："
    },
    {
      "t": "ul",
      "items": [
        "**是否为函数**：定义域 $X$ 中**每个**元素都恰好有一条箭头指出。若某个 $x$ 没有箭头，或射出两条以上箭头，就不是函数。",
        "**是否单射**：有没有**两条箭头指向同一个 $y$**。只要存在 $x \\ne x'$ 而 $f(x)=f(x')$，就不是单射。",
        "**是否满射**：$Y$ 中**每个**元素是否都至少被一条箭头指向。存在「没人指」的 $y$ 就不是满射。"
      ]
    },
    {
      "t": "warn",
      "md": "OCR 只保留了 Exercise 页的箭头散点，**三个图形的原始箭头关系已不可还原**，因此这里只给出判定标准，不对 $f,g,h$ 下结论。"
    },
    {
      "t": "h",
      "md": "五、Relations（关系）"
    },
    {
      "t": "p",
      "md": "[[Relation|关系]] $R$ 是一个 **$n$-tuples（$n$ 元组）的集合**，其中每个元组是 $n$ 个元素组成的序列。"
    },
    {
      "t": "p",
      "md": "幻灯片列出关系的三类应用："
    },
    {
      "t": "ul",
      "items": [
        "**Relational database（关系数据库）**。",
        "**Association rule mining（关联规则挖掘）**，作用于 transactions（交易记录）。",
        "**Study the usage of variables in a program（研究程序中变量的使用）**。"
      ]
    },
    {
      "t": "p",
      "md": "配合关系数据库的例子，幻灯片给出一张学生选课成绩表："
    },
    {
      "t": "tbl",
      "head": [
        "Student",
        "Course",
        "Grade"
      ],
      "rows": [
        [
          "Amy",
          "COMP1001",
          "A"
        ],
        [
          "Peter",
          "COMP1001",
          "B"
        ],
        [
          "John",
          "COMP1002",
          "C"
        ],
        [
          "Amy",
          "COMP1002",
          "B"
        ],
        [
          "Peter",
          "COMP1003",
          "A"
        ]
      ]
    },
    {
      "t": "p",
      "md": "这张表的每一行就是一个 **3 元组**（Student, Course, Grade），整张表就是这些元组的集合，因而是一个关系。"
    },
    {
      "t": "h",
      "md": "Binary relation（二元关系）"
    },
    {
      "t": "p",
      "md": "给定两个集合 $X$ 与 $Y$，一个 **binary relation（二元关系）** 是 $X \\times Y$ 的**子集**："
    },
    {
      "t": "p",
      "md": "$$R \\subseteq X \\times Y$$"
    },
    {
      "t": "p",
      "md": "它表达 $X$ 与 $Y$ 的元素之间的某种关系（a relationship between $X$ and ...）。幻灯片给出的图形例子中，左侧是 $X$、右侧是 $Y$，箭头给出了若干 $(x,y)$ 对应，例如 $a$ 对应 $1,2$，$b$ 对应 $1,3$，$c$ 对应 $3,4$；把这些对应的序对收集起来就是 $R \\subseteq X\\times Y$。"
    },
    {
      "t": "note",
      "md": "二元关系是**序对的集合**，所以可以用「列出所有序对」或「画箭头图」两种方式给出，本质上等价于 $X\\times Y$ 的一个子集。"
    },
    {
      "t": "h",
      "md": "Relation on a set（集合上的关系）"
    },
    {
      "t": "p",
      "md": "集合 $X$ 上的一个关系 $R$ 是 $X \\times X$ 的子集："
    },
    {
      "t": "p",
      "md": "$$R \\subseteq X \\times X$$"
    },
    {
      "t": "p",
      "md": "它是二元关系的一个**特例**（special case of binary relation）：定义域与值域取同一个集合。"
    },
    {
      "t": "p",
      "md": "幻灯片给出 $\\mathbb{N}$ 上的三个典型例子："
    },
    {
      "t": "ul",
      "items": [
        "**$R_{\\text{LEQ}}$**：$\\{(x,y) \\in \\mathbb{N}\\times\\mathbb{N} \\mid x \\le y\\}$（小于等于关系）。",
        "**$R_{\\text{DIV}}$**：$\\{(x,y) \\in \\mathbb{N}\\times\\mathbb{N} \\mid x \\text{ is divisible by } y\\}$（整除关系，$x$ 能被 $y$ 整除）。",
        "**$R_{\\text{MOD3}}$**：$\\{(x,y) \\in \\mathbb{N}\\times\\mathbb{N} \\mid (x-y) \\bmod 3 = 0\\}$（模 $3$ 同余关系）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片随后用集合图展示了这些关系包含哪些序对，并提问：**这些关系各有什么性质？**（What are the properties of these relations?）"
    },
    {
      "t": "p",
      "md": "图示信息：$R_{\\text{LEQ}}$ 包含 $(1,1),(2,2),(3,3),\\dots$ 这类「自己和自己」的序对，也包含 $(1,2),(2,3)$ 等；$R_{\\text{DIV}}$ 包含 $(6,3),(4,2),(9,3)$ 等（$6$ 能被 $3$ 整除、$4$ 能被 $2$ 整除、$9$ 能被 $3$ 整除）；$R_{\\text{MOD3}}$ 包含 $(5,2),(8,5)$ 等（两者之差都能被 $3$ 整除）。"
    },
    {
      "t": "h",
      "md": "Properties of a relation（关系的性质）"
    },
    {
      "t": "p",
      "md": "集合 $X$ 上的关系 $R$ 满足以下三个重要性质："
    },
    {
      "t": "ul",
      "items": [
        "**Reflexive（自反的）**：$\\forall x\\in X,\\ (x,x) \\in R$。",
        "**Symmetric（对称的）**：$\\forall x,y\\in X,\\ (x,y) \\in R \\rightarrow (y,x) \\in R$。",
        "**Transitive（传递的）**：$\\forall x,y,z\\in X,\\ (x,y) \\in R \\land (y,z) \\in R \\rightarrow (x,z) \\in R$。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片强调：要说明一个关系 $R$ **满足或不满足**某条性质，都**必须给出证明或者反例**（please give a proof or counter example）。"
    },
    {
      "t": "warn",
      "md": "证明「对称」要用全称量词对**任意** $x,y$ 成立；而证明「不对称」只需找出**一个反例**（例如 $R_{\\text{LEQ}}$ 中的 $(1,2) \\in R$ 但 $(2,1) \\notin R$）。请勿把「举一个成立的例子」当作证明。"
    },
    {
      "t": "h",
      "md": "Properties of a relation：$R_{\\text{LEQ}}$ 的验证"
    },
    {
      "t": "p",
      "md": "以 $R_{\\text{LEQ}} = \\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N} \\mid x \\le y\\}$ 为例："
    },
    {
      "t": "ul",
      "items": [
        "**Reflexive**：证明。对任意 $x\\in\\mathbb{N}$，有 $x \\le x$，因此 $(x,x) \\in R_{\\text{LEQ}}$。",
        "**Not symmetric（不对称）**：证明。存在反例 $(1,2) \\in R_{\\text{LEQ}}$（因为 $1\\le 2$），但 $(2,1) \\notin R_{\\text{LEQ}}$（因为 $2 \\not\\le 1$）。",
        "**Transitive**：证明。设 $x,y,z \\in \\mathbb{N}$，若 $(x,y)\\in R_{\\text{LEQ}}$ 且 $(y,z)\\in R_{\\text{LEQ}}$，则得到 $x \\le y$ 且 $y \\le z$。于是 $x \\le z$，因此 $(x,z) \\in R_{\\text{LEQ}}$。"
      ]
    },
    {
      "t": "h",
      "md": "Properties of a relation：$R_{\\text{DIV}}$ 的验证"
    },
    {
      "t": "p",
      "md": "以 $R_{\\text{DIV}} = \\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N} \\mid x \\text{ is divisible by } y\\}$ 为例："
    },
    {
      "t": "ul",
      "items": [
        "**Reflexive**：证明。对任意 $x\\in\\mathbb{N}$，$x$ 能被 $x$ 整除，因此 $(x,x) \\in R_{\\text{DIV}}$。",
        "**Not symmetric**：证明。存在反例 $(2,1) \\in R_{\\text{DIV}}$（$2$ 能被 $1$ 整除），但 $(1,2) \\notin R_{\\text{DIV}}$（$1$ 不能被 $2$ 整除）。",
        "**Transitive**：幻灯片标注 **[Leave the proof to you as an exercise]**，留作练习。"
      ]
    },
    {
      "t": "note",
      "md": "传递性证明的思路提示（依定义展开）：若 $(x,y) \\in R_{\\text{DIV}}$ 且 $(y,z) \\in R_{\\text{DIV}}$，即 $x$ 能被 $y$ 整除、$y$ 能被 $z$ 整除，写成 $x = ay,\\ y = bz$，代入得 $x = (ab)z$，故 $x$ 能被 $z$ 整除。该结论在附录证明 $R_{\\text{DIV}}$ 是偏序时被再次引用。"
    },
    {
      "t": "h",
      "md": "Properties of a relation：$R_{\\text{MOD3}}$ 的验证"
    },
    {
      "t": "p",
      "md": "以 $R_{\\text{MOD3}} = \\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N} \\mid (x-y) \\bmod 3 = 0\\}$ 为例，三条性质全部成立："
    },
    {
      "t": "ul",
      "items": [
        "**Reflexive**：证明。对任意 $x\\in\\mathbb{N}$，$(x-x) \\bmod 3 = 0$，因此 $(x,x) \\in R_{\\text{MOD3}}$。",
        "**Symmetric**：证明。对任意 $x,y\\in\\mathbb{N}$，若 $(x,y)\\in R_{\\text{MOD3}}$，则 $(x-y) \\bmod 3 = 0$。于是 $(y-x) \\bmod 3 = 0$，因此 $(y,x) \\in R_{\\text{MOD3}}$。",
        "**Transitive**：证明。设 $x,y,z \\in \\mathbb{N}$，若 $(x,y)\\in R_{\\text{MOD3}}$ 且 $(y,z)\\in R_{\\text{MOD3}}$，则 $(x-y) \\bmod 3 = 0$ 且 $(y-z) \\bmod 3 = 0$。于是 $(x-z) \\bmod 3 = ((x-y)+(y-z)) \\bmod 3 = 0$。因此 $(x,z) \\in R_{\\text{MOD3}}$。"
      ]
    },
    {
      "t": "h",
      "md": "Equivalence relations（等价关系）"
    },
    {
      "t": "p",
      "md": "集合 $X$ 上的关系 $R$ 称为 **equivalence relation（等价关系）**，如果它**同时满足 reflexive、symmetric、transitive** 三条性质。"
    },
    {
      "t": "p",
      "md": "幻灯片的例子："
    },
    {
      "t": "ul",
      "items": [
        "**$R_{\\text{MOD3}} = \\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N} \\mid (x-y) \\bmod 3 = 0\\}$ 是等价关系**——它自反、对称、传递（见上一页）。",
        "**$R_{\\text{LEQ}}$ 与 $R_{\\text{DIV}}$ 都不是等价关系**——它们缺少对称性。"
      ]
    },
    {
      "t": "note",
      "md": "「是不是等价关系」只由这三条性质决定：$R_{\\text{LEQ}}$ 自反、传递，但不（对称）；$R_{\\text{DIV}}$ 同样自反、传递，但不（对称），所以二者都出局。"
    },
    {
      "t": "h",
      "md": "Equivalence classes（等价类）"
    },
    {
      "t": "p",
      "md": "设 $R$ 是集合 $X$ 上的**等价关系**。元素 $x$ 的 **equivalence class（等价类）** 是**所有与 $x$ 在 $R$ 下相关的元素**组成的集合，记作"
    },
    {
      "t": "p",
      "md": "$$[x]_R$$"
    },
    {
      "t": "p",
      "md": "幻灯片用 $R_{\\text{MOD3}}$ 说明：它一共把 $\\mathbb{N}$ 分成三个等价类——"
    },
    {
      "t": "p",
      "md": "$$[1]_{R_{\\text{MOD3}}} = \\{1,4,7,\\dots\\},\\qquad [2]_{R_{\\text{MOD3}}} = \\{2,5,8,\\dots\\},\\qquad [3]_{R_{\\text{MOD3}}} = \\{3,6,9,\\dots\\}$$"
    },
    {
      "t": "p",
      "md": "幻灯片在这一页还附了一句提示：**等价类可以用来做 partition（划分）**（An equivalence ... used to pa...）。"
    },
    {
      "t": "note",
      "md": "三个等价类正好对应「模 $3$ 的余数」：余 $1$、余 $2$、余 $0$（写成 $[3]$ 这一类）。检验方法：把 $x$ 与 $y$ 相减，能被 $3$ 整除就落在同一个类里——例如 $7-4=3$，所以 $4$ 和 $7$ 同在 $[1]$ 中。"
    },
    {
      "t": "h",
      "md": "Summary（本讲小结）"
    },
    {
      "t": "ul",
      "items": [
        "本讲讲的是**离散数学中用到的基本结构**（basic structures used in discrete mathematics）。",
        "重点是这些基本结构的**运算与性质**（operations and properties）：例如集合运算与集合恒等式、矩阵运算、函数性质、关系性质。",
        "教材阅读：**Chapters 2 and 9**。其中 **Chapter 2** 覆盖 sets、sequences、matrices、functions；**Chapter 9** 覆盖 relations。"
      ]
    },
    {
      "t": "h",
      "md": "附录：Partial ordering（偏序）"
    },
    {
      "t": "p",
      "md": "集合 $X$ 上的关系 $R$ 称为 **partial ordering（偏序）**，如果它**同时满足 reflexive、antisymmetric、transitive**。"
    },
    {
      "t": "p",
      "md": "其中 **antisymmetric（反对称的）** 是指："
    },
    {
      "t": "p",
      "md": "$$\\forall x,y\\in X,\\ (x,y)\\in R \\ \\land\\ (y,x)\\in R \\ \\rightarrow\\ x = y$$"
    },
    {
      "t": "p",
      "md": "幻灯片的例子：$R_{\\text{DIV}} = \\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N} \\mid x \\text{ is divisible by } y\\}$ 是一个偏序。"
    },
    {
      "t": "ul",
      "items": [
        "它**自反且传递**（见前面第 39 页的证明与练习）。",
        "它**是反对称的**。[Proof] 若 $(x,y) \\in R_{\\text{DIV}}$，则 $x$ 能被 $y$ 整除，从而 $x \\ge y$；同理，若 $(y,x) \\in R_{\\text{DIV}}$，则 $y \\ge x$。由 $x \\ge y$ 且 $y \\ge x$，得 $x = y$。"
      ]
    },
    {
      "t": "warn",
      "md": "**antisymmetric（反对称）不等于 not symmetric（不对称）**。反对称说的是「双向关系只能发生在 $x=y$ 时」；对称说的是「有 $(x,y)$ 就必有 $(y,x)$」。偏序要求的是前者，等价关系要求的是后者，两者不能混为一谈。"
    },
    {
      "t": "h",
      "md": "附录：Hasse diagram（哈斯图）"
    },
    {
      "t": "p",
      "md": "**Hasse diagram** 可以用来可视化一个满足偏序关系 $R$ 的集合。幻灯片的例子仍然取 $R_{\\text{DIV}} = \\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N} \\mid x \\text{ is divisible by } y\\}$，给出其哈斯图的一部分："
    },
    {
      "t": "p",
      "md": "图中出现的元素为 $1,2,3,4,5,6,8,10,12,15$，按「整除/倍数」关系由下往上排列：$1$ 在底部，$2$ 与 $3$ 在 $1$ 之上，$4,6$ 在 $2,3$ 之上，$8,12$ 与 $5,10,15$ 更靠上。"
    },
    {
      "t": "note",
      "md": "在哈斯图里，**若 $x$ 能被 $y$ 整除（$y \\mid x$）就把 $x$ 画在 $y$ 的上方并用线段相连**，并且已经省略了所有「由传递性自动成立」的边以及「自己到自己」的圈。例如 $2 \\mid 4 \\mid 8$，于是 $2,4,8$ 排成一条向上的链。"
    }
  ],
  "terms": [
    [
      "Set",
      "集合"
    ],
    [
      "Set-builder Notation",
      "集合构造式"
    ],
    [
      "Subset",
      "子集"
    ],
    [
      "Union",
      "并集"
    ],
    [
      "Intersection",
      "交集"
    ],
    [
      "Cardinality",
      "基数"
    ],
    [
      "Cartesian Product",
      "笛卡尔积"
    ],
    [
      "Venn Diagram",
      "文氏图"
    ],
    [
      "Sequence",
      "序列"
    ],
    [
      "Summation",
      "求和"
    ],
    [
      "Matrix",
      "矩阵"
    ],
    [
      "One-to-one Function",
      "单射"
    ],
    [
      "Onto Function",
      "满射"
    ],
    [
      "Relation",
      "关系"
    ],
    [
      "Binary Relation",
      "二元关系"
    ],
    [
      "Reflexive",
      "自反的"
    ],
    [
      "Symmetric",
      "对称的"
    ],
    [
      "Transitive",
      "传递的"
    ],
    [
      "Equivalence Relation",
      "等价关系"
    ],
    [
      "Equivalence Class",
      "等价类"
    ],
    [
      "Partial Ordering",
      "偏序"
    ],
    [
      "Antisymmetric",
      "反对称的"
    ],
    [
      "Hasse Diagram",
      "哈斯图"
    ]
  ],
  "qids": [
    "cm-2-01",
    "cm-2-02",
    "cm-2-03",
    "cm-2-04",
    "cm-2-05"
  ]
});

  /* ---------- L04 第4讲 算法与渐进复杂度 ---------- */
  T.push({
  "no": "L04",
  "title": "第4讲 算法与渐进复杂度",
  "titleEn": "Lecture 4: Algorithms",
  "tags": [
    "algorithm",
    "selection sort",
    "running time",
    "asymptotic notation",
    "big-O",
    "worst case"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲主题：什么是[[algorithm|算法]]、如何设计算法、如何分析算法的运行时间，以及用[[asymptotic notation|渐进记号]]简洁地描述运行时间的增长趋势。课程还会用排序（sorting）作为贯穿全讲的例子。"
    },
    {
      "t": "h",
      "md": "一、Computational problem（计算问题）"
    },
    {
      "t": "p",
      "md": "本课程要学习的，是用算法去解决一些真实世界的问题（real world problems），例如：把卡片排序（sort cards）、找最短路径（find the shortest path）、安排任务（schedule tasks）。"
    },
    {
      "t": "p",
      "md": "一个 [[computational problem|计算问题]] 由**输入（input）**与**输出（output）**的条件共同刻画。以排序问题为例："
    },
    {
      "t": "ul",
      "items": [
        "- **Input**：一个含 $n$ 个整数的序列 $A$\n- **Output**：一个含 $n$ 个整数的序列 $A'$，满足\n  - $A'$ 是递增序列（increasing sequence），且\n  - $A$ 与 $A'$ 含有相同的整数（same integers）"
      ]
    },
    {
      "t": "p",
      "md": "输出的条件也可以用**逻辑表达式（logic expression）**来表达。"
    },
    {
      "t": "h",
      "md": "二、Algorithms for Problem Solving（用算法解决问题）"
    },
    {
      "t": "p",
      "md": "解决一个计算问题的流程是：先明确 real-world problem（真实世界问题），把它抽象为 computational problem（计算问题）与 Input / Output 规格；然后**设计算法（Design an algorithm）**；再**把它写成程序并运行（Convert it into a program and run）**，得到 real-world output。"
    },
    {
      "t": "p",
      "md": "本讲的学习路线（Our Roadmap）围绕三个问题：\n1. 什么是算法？（What are algorithms?）\n2. 我们来分析算法的运行时间（analyze the running time）\n3. 什么是渐进运行时间？（What is asymptotic running time?）"
    },
    {
      "t": "h",
      "md": "二.1 What are algorithms（什么是算法）"
    },
    {
      "t": "p",
      "md": "**Algorithm（算法）**：一个**定义良好的步骤序列（a well defined sequence）**，用来解决一个计算问题。它必须满足："
    },
    {
      "t": "ul",
      "items": [
        "- 总是产生**正确的输出（correct output）**；\n- 使用**定义良好的步骤或操作（well-defined steps or operations）**；\n- 在**有限时间（finite time）**内结束。"
      ]
    },
    {
      "t": "h",
      "md": "二.2 Algorithm vs. Program（算法与程序）"
    },
    {
      "t": "p",
      "md": "算法是程序的**模板（template）**："
    },
    {
      "t": "ul",
      "items": [
        "- 它**独立于编程语言**（independent of the programming language）；\n- 可以用任何语言实现（Java、C++ 等）；\n- 它比程序**更易读（more readable）**。"
      ]
    },
    {
      "t": "p",
      "md": "下面把同一个 Selection-Sort 的算法形式与程序形式并排看（注意算法用英文原语描述，程序是 Java 风格的代码）："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Algorithm: Selection-Sort (Array A, Integer n)\n1. for integer i <- 1 to n-1\n2.     k <- i\n3.     for integer j <- i+1 to n\n4.         if A[k] > A[j] then\n5.             k <- j\n6.     swap A[i] and A[k]\n\nProgram:\nvoid Selection-Sort (...) {\n    int i, j, k, temp;\n    int n = A.length;\n    for (i = 0; i < n-1; i++) {\n        k = i;\n        for (j = i+1; j < n; j++)\n            if (A[k] > A[j]) k = j;\n        temp = A[i]; A[i] = A[k]; A[k] = temp;\n    }\n}"
    },
    {
      "t": "h",
      "md": "二.3 写算法可用的基本构件"
    },
    {
      "t": "p",
      "md": "我们可以用下面的构件来写算法："
    },
    {
      "t": "ul",
      "items": [
        "- **变量与数据结构（Variables and data structures）**：例如整数 `i`、`j`、`k`，数组 `A`；\n- **控制结构（Control structures）**：\n  - 顺序（Sequence）：step-by-step\n  - 迭代（Iteration）：for-loop、while-loop\n  - 选择（Selection）：if-then-else\n- **过程 / 函数调用（Procedure / Function call）**：如有需要。"
      ]
    },
    {
      "t": "h",
      "md": "二.4 Running Steps（手工运行步骤）"
    },
    {
      "t": "p",
      "md": "尝试**手工运行一个算法**，例如画出运行步骤 / 图示（draw running steps / figures）。这些运行步骤有助于理解算法。"
    },
    {
      "t": "p",
      "md": "例如对输入 `5 1 2 4 1 9 7`（$n=5$ 的示例数组）执行 Selection-Sort，逐轮 $i=1,2,3,4,5$ 的中间状态可以画成演化图；算法本身仍是："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Selection-Sort (Array A, Integer n)\n1. for integer i <- 1 to n-1\n2.     k <- i\n3.     for integer j <- i+1 to n\n4.         if A[k] > A[j] then\n5.             k <- j\n6.     swap A[i] and A[k]"
    },
    {
      "t": "h",
      "md": "二.5 Syntax Convention（语法约定）"
    },
    {
      "t": "p",
      "md": "本课程使用的算法语法与真实编程语言有**细微差别（minor differences）**："
    },
    {
      "t": "tbl",
      "head": [
        "项目",
        "我们的算法（Our algorithms）",
        "编程语言（Programming）"
      ],
      "rows": [
        [
          "块结构（Block structure）",
          "靠**缩进层级**（by indentation level）",
          "靠**显式的大括号等**（by explicit braces）"
        ],
        [
          "赋值运算符（Assignment operator）",
          "用 $\\leftarrow$",
          "用 `=`"
        ],
        [
          "相等判断运算符（Equality test operator）",
          "用 `=`",
          "用 `==`"
        ],
        [
          "数组下标（Array index）",
          "从 **1** 开始",
          "从 **0** 开始"
        ],
        [
          "原始步骤的表达",
          "使用**英文单词**描述 primitive steps",
          "用具体语句/符号"
        ]
      ]
    },
    {
      "t": "h",
      "md": "二.6 Algorithms: more examples（更多例子）"
    },
    {
      "t": "p",
      "md": "例 1：**Find-Max**，在数组 $A[1..n]$ 中找最大值。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Find-Max (Array A[1..n])\n1. temp <- -infinity\n2. for integer i <- 1 to n\n3.     if A[i] > temp then\n4.         temp <- A[i]\n5. return temp"
    },
    {
      "t": "p",
      "md": "例 2：**Search**（线性查找），在数组 $A[1..n]$ 中查找关键字 $k$；若找到返回其下标，否则返回 $-1$ 表示“not found”。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Search (Array A[1..n], Key k)\n1. for integer i <- 1 to n\n2.     if A[i] = k\n3.         return i\n4. return -1        // not found"
    },
    {
      "t": "h",
      "md": "三、Algorithmic Design Techniques（算法设计技术）"
    },
    {
      "t": "ul",
      "items": [
        "- **Incremental technique（增量技术）**：把一个解**扩展成更大的解**（Build a solution into a larger solution）。例如已有排好序的子数组 $A[1..i-1]$，再把它扩展得到排好序的子数组 $A[1..i]$。\n- **Recursive technique（递归技术）**：把问题**归约为更小的子问题**（Reduce the problem into smaller subproblems）。例如先在子数组 $A[i..n]$ 中找出最小项，再处理子数组 $A[i+1..n]$。"
      ]
    },
    {
      "t": "note",
      "md": "更多的算法设计技术会在后续课程 **COMP3011 Design and Analysis of Algorithms** 中继续介绍。"
    },
    {
      "t": "h",
      "md": "四、Algorithmic Analysis（算法分析）"
    },
    {
      "t": "p",
      "md": "可能的**输入实例（input instances）**非常多，因此分析算法要回答两类问题。"
    },
    {
      "t": "h",
      "md": "四.1 算法正确吗？"
    },
    {
      "t": "ul",
      "items": [
        "- 即使已经在很多实例上测试过算法，也**不够（not enough）**；\n- 你会不会在别的实例上失败？（Will your algorithm fail on some other instance?）\n- 因此需要**正确性证明（correctness proof）**，要证明：“For every possible input instance, the algorithm produces the correct output”（对每一个可能的输入实例，算法都产生正确输出）。"
      ]
    },
    {
      "t": "h",
      "md": "四.2 算法快吗？"
    },
    {
      "t": "ul",
      "items": [
        "- 考虑**同样规模 $n$ 的所有实例**及其运行时间；\n- 试着把**最坏情况运行时间（worst-case running time）**估计为输入规模 $n$ 的函数，即 $f(n)$；\n- 关心的问题是：当 $n$ 增大时，最坏情况运行时间的**趋势（trend）**如何？——这正是 $f(n)=O(\\cdot)$ 要刻画的。"
      ]
    },
    {
      "t": "h",
      "md": "五、Asymptotic Notation（渐进记号）之前的铺垫"
    },
    {
      "t": "h",
      "md": "五.1 Why analyze the running time（为什么要分析运行时间）"
    },
    {
      "t": "ul",
      "items": [
        "- 同一个问题（例如排序）可以有**多种不同算法**；老板要你写**最快的程序**（即实现最快的算法）。\n- 在写程序之前，希望先估计它在典型输入规模下的运行时间。\n- 理解程序的**可扩展性（scalability）**：例如输入规模翻倍时，运行时间会增加多少？"
      ]
    },
    {
      "t": "h",
      "md": "五.2 Computation Model（计算模型）"
    },
    {
      "t": "ul",
      "items": [
        "- 典型计算模型包含：**中央处理器（CPU, Central Processing Unit）**与**随机存取存储器（RAM, Random-access Memory）**；\n- **每条 CPU 指令（原始步骤 primitive step）花费常数时间 $C_i$**，例如两个整数相加、两个整数比较、把一个值复制给一个变量；\n- CPU **逐条（one-by-one）**执行指令；\n- 假定内存足够大，可以存放所有输入 / 中间 / 输出数据。"
      ]
    },
    {
      "t": "h",
      "md": "五.3 How to estimate running time（如何估计运行时间）"
    },
    {
      "t": "p",
      "md": "方法分三步：**① 找出每一行的代价（cost）**——第 $j$ 行是一个原始步骤，记其代价为 $C_j$；**② 找出每一行的频次（frequency）**；**③** 把「代价 × 频次」逐行相加即得运行时间。"
    },
    {
      "t": "p",
      "md": "例 1（每行只执行一次）："
    },
    {
      "t": "tbl",
      "head": [
        "FunS (Integer p)",
        "cost",
        "freq"
      ],
      "rows": [
        [
          "1. `k <- p + p`",
          "$C_1$",
          "1"
        ],
        [
          "2. `m <- p * p`",
          "$C_2$",
          "1"
        ],
        [
          "3. `x <- m - k`",
          "$C_3$",
          "1"
        ]
      ]
    },
    {
      "t": "p",
      "md": "$$T = C_1\\cdot 1 + C_2\\cdot 1 + C_3\\cdot 1 = C_1 + C_2 + C_3$$"
    },
    {
      "t": "p",
      "md": "例 2（每行执行 $n$ 次）："
    },
    {
      "t": "tbl",
      "head": [
        "FunI (Integer n)",
        "cost",
        "freq"
      ],
      "rows": [
        [
          "1. `for integer i <- 1 to n`",
          "$C_1$",
          "$n$"
        ],
        [
          "2. `k <- i * i`",
          "$C_2$",
          "$n$"
        ],
        [
          "3. `print k`",
          "$C_3$",
          "$n$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "$$T = C_1\\cdot n + C_2\\cdot n + C_3\\cdot n = (C_1 + C_2 + C_3)\\,n$$"
    },
    {
      "t": "p",
      "md": "例 3（含分支，取最坏情况）：分析可知第 1、2 行总会执行；根据条件，第 3 行或第 5 行会执行（at most / 至多执行一次）。**最坏情况运行时间**取两者的较大者："
    },
    {
      "t": "tbl",
      "head": [
        "FunC (Integer a, b)",
        "cost",
        "frequency"
      ],
      "rows": [
        [
          "1. `c <- 0`",
          "$C_1$",
          "1"
        ],
        [
          "2. `if a < b then`",
          "$C_2$",
          "1"
        ],
        [
          "3. `c <- a`",
          "$C_3$",
          "at most 1"
        ],
        [
          "4. `else`",
          "—",
          "—"
        ],
        [
          "5. `c <- b`",
          "$C_5$",
          "at most 1"
        ]
      ]
    },
    {
      "t": "p",
      "md": "$$T = C_1 + C_2 + \\max(C_3, C_5)$$"
    },
    {
      "t": "p",
      "md": "例 4（线性查找 Search）：第 1 行（及第 2 行）的频次取决于**关键字 $k$ 所在的数组位置**，最多执行 $n$ 次；同理第 3 行（及第 4 行）最多执行一次。于是最坏情况运行时间为："
    },
    {
      "t": "p",
      "md": "$$T = C_1 n + C_2 n + C_3\\cdot 1 + C_4\\cdot 1 = (C_1 + C_2)n + C_3 + C_4$$"
    },
    {
      "t": "h",
      "md": "五.4 Running time 与 Trend（运行时间与增长趋势）"
    },
    {
      "t": "p",
      "md": "我们关注算法的**最坏情况运行时间**：即对**同一规模**的任意输入，算法所需的最长运行时间。但运行时间表达式里含有许多常数 $C_i$（算法行数越多，常数越多），因此需要**在不丢失增长趋势的前提下简化表达式**。"
    },
    {
      "t": "p",
      "md": "假设已知每个原始步骤的代价（即各常数 $C_i$ 的值），比较两个算法：Algorithm A 需 $5n$ steps，Algorithm B 需 $n^2$ steps。"
    },
    {
      "t": "ul",
      "items": [
        "- 哪个更快？答：**Algorithm A**。\n- 原因：我们关心的是**大规模输入下的表现（performance at large input size）**；\n- **常数因子不影响增长阶（Constant factors do not affect the order of growth）**。"
      ]
    },
    {
      "t": "h",
      "md": "五.5 Best / Worst case input（最好 / 最坏情况输入）"
    },
    {
      "t": "p",
      "md": "即使输入规模固定，算法的运行时间也取决于**输入数据本身**。练习：设 $n=5$，给定数组为 `5 1 2 4 1 9 7` 风格的例子，针对下面的 Search 算法，分别指出关键字 $k$ 的**最坏情况输入**与**最好情况输入**。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Search (Array A[1..n], Key k)\n1. for integer i <- 1 to n\n2.     if A[i] = k\n3.         return i\n4. return -1"
    },
    {
      "t": "h",
      "md": "六、Asymptotic Notation（渐进记号）"
    },
    {
      "t": "p",
      "md": "渐进记号用**简洁（concise）**的方式描述运行时间的趋势，例如："
    },
    {
      "t": "tbl",
      "head": [
        "运行时间表达式",
        "渐进记号"
      ],
      "rows": [
        [
          "$C_1 + C_2 + C_3$",
          "$O(1)$"
        ],
        [
          "$(C_1 + C_2 + C_3)\\,n$",
          "$O(n)$"
        ],
        [
          "$(C_1 + C_2)n + C_3 + C_4$",
          "$O(n)$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "本讲覆盖三种记号：**渐进上界（asymptotic upper-bound）$O$-notation**、**渐进下界（asymptotic lower-bound）$\\Omega$-notation**、**渐进紧确界（asymptotic tight-bound）$\\Theta$-notation**。"
    },
    {
      "t": "h",
      "md": "六.1 上界：$O$-notation"
    },
    {
      "t": "p",
      "md": "若存在正常数 $c$、$n_0$，使得对所有 $n \\ge n_0$ 都有\n$$0 \\le f(n) \\le c\\,g(n)$$\n则记 $f(n)$ 是 $O(g(n))$。"
    },
    {
      "t": "p",
      "md": "判断 $(5n^2 + 3n)$ 是否为 $O(n^2)$：\n$$5n^2 + 3n \\le 5n^2 + 3n^2 \\quad [\\text{true for all } n \\ge 1] \\le 8n^2$$\n所以 **YES**，取 $c = 8$、$n_0 = 1$。"
    },
    {
      "t": "ul",
      "items": [
        "- $(5n^2 + 3n)$ 是 $O(n^3)$ 吗？（是，因为 $n^2$ 也是 $O(n^3)$ —— 见下面的「loose」提醒）\n- $(5n^2 + 3n)$ 是 $O(n)$ 吗？**NO**。提示：用**反证法（Proof by contradiction）**。"
      ]
    },
    {
      "t": "h",
      "md": "六.2 下界：$\\Omega$-notation"
    },
    {
      "t": "p",
      "md": "若存在正常数 $c$、$n_0$，使得对所有 $n \\ge n_0$ 都有\n$$0 \\le c\\,g(n) \\le f(n)$$\n则记 $f(n)$ 是 $\\Omega(g(n))$。"
    },
    {
      "t": "p",
      "md": "判断 $(5n^2 + 3n)$ 是否为 $\\Omega(n^2)$：\n$$5n^2 + 3n \\ge 5n^2 \\quad [\\text{true for all } n \\ge 1]$$\n所以 **YES**，取 $c = 5$、$n_0 = 1$。"
    },
    {
      "t": "ul",
      "items": [
        "- $(5n^2 + 3n)$ 是 $\\Omega(n^3)$ 吗？\n- $(5n^2 + 3n)$ 是 $\\Omega(n)$ 吗？"
      ]
    },
    {
      "t": "h",
      "md": "六.3 紧确界：$\\Theta$-notation"
    },
    {
      "t": "p",
      "md": "若存在正常数 $c_1$、$c_2$、$n_0$，使得对所有 $n \\ge n_0$ 都有\n$$0 \\le c_1 g(n) \\le f(n) \\le c_2 g(n)$$\n则记 $f(n)$ 是 $\\Theta(g(n))$。"
    },
    {
      "t": "p",
      "md": "$(5n^2 + 3n)$ 是 $\\Theta(n^2)$ 吗？**YES**，取 $c_1 = 5$、$c_2 = 8$、$n_0 = 1$（见前两页的证明）。"
    },
    {
      "t": "ul",
      "items": [
        "- $(5n^2 + 3n)$ 是 $\\Theta(n^3)$ 吗？\n- $(5n^2 + 3n)$ 是 $\\Theta(n)$ 吗？"
      ]
    },
    {
      "t": "h",
      "md": "六.4 Graphical View（图形直观）"
    },
    {
      "t": "p",
      "md": "把 $5n^2 + 3n$ 与 $O(n)$、$O(n^2)$、$O(n^3)$ 一起画在同一张图上：$5n^2 + 3n$ 在 $n$ 较大时夹在 $O(n^2)$（以及 $O(n^3)$）曲线之下，而在 $O(n)$ 曲线之上。"
    },
    {
      "t": "note",
      "md": "提醒（Reminder）：上界记号为 $O(\\dots)$，下界记号为 $\\Omega(\\dots)$。"
    },
    {
      "t": "p",
      "md": "设 $T(n)$ 是算法在输入规模为 $n$ 时的运行时间，则：\n- “$T(n)$ is $O(n)$” 表示运行时间**不超过** $n$ 的常数倍（增长不快于线性）；\n- “$T(n)$ is $\\Omega(n)$” 表示运行时间**不低于** $n$ 的常数倍（增长不慢于线性）；\n- “$T(n)$ is $\\Theta(n)$” 表示运行时间与 $n$ **同阶**（既有上界也有下界）。"
    },
    {
      "t": "h",
      "md": "六.5 Simplification Rules of $O$-Notation（$O$ 记号化简规则）"
    },
    {
      "t": "ul",
      "items": [
        "- **忽略常数因子（Ignore constant factors）**：例如 $3$ 是 $O(1)$；$3n$ 是 $O(n)$。\n- **合并固定个数、复杂度相同的项**：例如 $O(n) + O(n)$ 是 $O(n)$；$O(n) + O(n) + O(n)$ 是 $O(n)$。\n- **多项式（Polynomial）：只取最高次项**。例如 $5n^2 + 3n$ 是 $O(n^2)$；$2n^3 + 5n^2 + 3n$ 是 $O(n^3)$。"
      ]
    },
    {
      "t": "warn",
      "md": "这些规则是**化简的捷径（shortcuts）**，使用前要理解“为什么”成立。"
    },
    {
      "t": "p",
      "md": "那么，能否合并**可变个数**、复杂度相同的项？如何化简\n$$\\underbrace{O(n) + O(n) + \\cdots + O(n)}_{n \\text{ terms}}$$\n答案是 $O(n)$ 还是 $O(n^2)$？"
    },
    {
      "t": "h",
      "md": "七、Asymptotic running time of sorting algorithms（供参考）"
    },
    {
      "t": "p",
      "md": "下面列出常见复杂度及其代表算法，**仅供参照（for your reference）**："
    },
    {
      "t": "tbl",
      "head": [
        "Complexity",
        "名称",
        "代表算法 / 操作"
      ],
      "rows": [
        [
          "$O(1)$",
          "Constant time（常数时间）",
          "Compare two ...（比较两个数）"
        ],
        [
          "$O(\\log n)$",
          "Logarithmic（对数时间）",
          "Binary search（二分查找）"
        ],
        [
          "$O(n)$",
          "Linear time（线性时间）",
          "Search（在一维数组上线性查找）"
        ],
        [
          "$O(n\\log n)$",
          "—",
          "Merge sort（归并排序）"
        ],
        [
          "$O(n^2)$",
          "Quadratic（平方时间）",
          "Selection sort（选择排序）"
        ],
        [
          "$O(n^3)$",
          "Cubic（立方时间）",
          "Matrix multiplication（矩阵乘法）"
        ],
        [
          "$O(2^n)$",
          "Exponential（指数时间）",
          "Brute-force：布尔可满足性问题（boolean satisfiability）"
        ],
        [
          "$O(n!)$",
          "Factorial（阶乘时间）",
          "Brute-force：旅行商问题（traveling salesman）"
        ]
      ]
    },
    {
      "t": "note",
      "md": "表中 $O(n\\log n)$ 一行的算法名与 $O(1)$ 一行的说明在 OCR 中有截断，上面按常见的对标结果补全；其余各行与 PPT 一致。"
    },
    {
      "t": "h",
      "md": "七.1 例子：Search 的渐进运行时间"
    },
    {
      "t": "p",
      "md": "重新分析 Search 算法的**最坏情况渐进运行时间**："
    },
    {
      "t": "ul",
      "items": [
        "- **Line 1**：最多 $n$ 次 $= O(n)$\n- **Line 2**：最多 $1 \\times n$ 次 $= O(n)$\n- **Lines 3, 4**：$O(1)$"
      ]
    },
    {
      "t": "p",
      "md": "$$T(n) = O(n) + O(n) + O(1) = O(n)$$"
    },
    {
      "t": "warn",
      "md": "**Remarks**：按 $O$-记号的定义，“$O(n)$ is $O(n^2)$”这句话是**正确的**；但 $O(n^2)$ **不是**对该算法最坏情况运行时间的**准确描述**。分析时应当尽量把 $O(\\dots)$ 写得**尽可能小（as small as possible）**。"
    },
    {
      "t": "h",
      "md": "七.2 例子：NestedLoop（嵌套循环）的渐进运行时间"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "NestedLoop (Integer n)\n1. for integer i <- 1 to n\n2.     for integer j <- 1 to n\n3.         print ..."
    },
    {
      "t": "ul",
      "items": [
        "- Line 1：$n$ 次\n- Line 2：$n \\times n$ 次\n- Line 3：与 Line 2 相同"
      ]
    },
    {
      "t": "p",
      "md": "$$T(n) = O(n) + O(n^2) + O(n^2) = O(n^2)$$"
    },
    {
      "t": "h",
      "md": "七.3 例子：Selection-Sort 的渐进运行时间"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Selection-Sort (Array A, Integer n)\n1. for integer i <- 1 to n-1\n2.     k <- i\n3.     for integer j <- i+1 to n\n4.         if A[k] > A[j] then\n5.             k <- j\n6.     swap A[i] and A[k]"
    },
    {
      "t": "ul",
      "items": [
        "- **Line 1**：$n-1$ 次 $= O(n)$\n- **Line 2**：$1\\times(n-1)$ 次 $= O(n)$\n- **Lines 3 to 5**：思考两个问题——内层 $j$ 的**初始值**可能有哪些？（before ...）对每个初始值，Line 3 最多能执行多少次？"
      ]
    },
    {
      "t": "p",
      "md": "**分析 Line 3**：内层循环中 $j$ 的取值范围依次是 $2$ 到 $n$、$3$ 到 $n$、$4$ 到 $n$、$\\dots$，对应迭代次数为 $n-1,\\ n-2,\\ n-3,\\ \\dots$，因此"
    },
    {
      "t": "p",
      "md": "$$\\sum_{i=1}^{n-1}(n-i) = \\frac{(n-1)n}{2} = O(n^2)$$"
    },
    {
      "t": "p",
      "md": "**最坏情况运行时间 $T(n)$ 汇总**："
    },
    {
      "t": "tbl",
      "head": [
        "部分",
        "次数",
        "渐进"
      ],
      "rows": [
        [
          "Line 1",
          "$n-1$ steps",
          "$O(n)$"
        ],
        [
          "Lines 2, 6",
          "与 Line 1 相同",
          "$O(n)$"
        ],
        [
          "Line 3",
          "见上面的求和",
          "$O(n^2)$"
        ],
        [
          "Lines 4, 5",
          "与 Line 3 相同",
          "$O(n^2)$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "$$T(n) = 3\\cdot O(n) + 3\\cdot O(n^2) = O(n^2)$$"
    },
    {
      "t": "warn",
      "md": "**As accurate as possible for running time**：说“Selection-Sort 的最坏情况运行时间是 $O(n^2)$”是**正确但宽松（correct but loose）**的（例如说成 $O(n^3)$ 也能成立，却不准确）。分析时应当尽量把 $O(\\dots)$ 写得尽可能小。"
    },
    {
      "t": "h",
      "md": "八、Summary（小结）"
    },
    {
      "t": "ul",
      "items": [
        "- 什么是**算法**？（What is an algorithm?）——一个定义良好、正确、有限步内结束的步骤序列，可用变量/数据结构、顺序、迭代、选择、函数调用等构件书写。\n- 如何**分析一个算法的运行时间**？（How to analyze the running time of an algorithm?）——在 CPU + RAM 计算模型下，逐行统计「代价 × 频次」，关注**最坏情况**，再用渐进记号把结果化简到最紧凑的阶。\n- 请阅读教科书**第 3 章（Chapter 3）**。"
      ]
    }
  ],
  "terms": [
    [
      "computational problem",
      "计算问题"
    ],
    [
      "algorithm",
      "算法"
    ],
    [
      "input / output",
      "输入 / 输出"
    ],
    [
      "selection sort",
      "选择排序"
    ],
    [
      "program",
      "程序"
    ],
    [
      "syntax convention",
      "语法约定"
    ],
    [
      "running steps",
      "运行步骤"
    ],
    [
      "incremental technique",
      "增量技术"
    ],
    [
      "recursive technique",
      "递归技术"
    ],
    [
      "correctness proof",
      "正确性证明"
    ],
    [
      "worst-case running time",
      "最坏情况运行时间"
    ],
    [
      "computation model",
      "计算模型"
    ],
    [
      "CPU (Central Processing Unit)",
      "中央处理器"
    ],
    [
      "RAM (Random-access Memory)",
      "随机存取存储器"
    ],
    [
      "primitive step",
      "原始步骤"
    ],
    [
      "constant time",
      "常数时间"
    ],
    [
      "frequency",
      "频次"
    ],
    [
      "scalability",
      "可扩展性"
    ],
    [
      "order of growth",
      "增长阶"
    ],
    [
      "asymptotic notation",
      "渐进记号"
    ],
    [
      "upper-bound ($O$)",
      "上界记号"
    ],
    [
      "lower-bound ($\\Omega$)",
      "下界记号"
    ],
    [
      "tight-bound ($\\Theta$)",
      "紧确界记号"
    ],
    [
      "proof by contradiction",
      "反证法"
    ],
    [
      "linear search",
      "线性查找"
    ]
  ],
  "qids": [
    "cm-3-01",
    "cm-3-02",
    "cm-3-03",
    "cm-3-04"
  ]
});

  /* ---------- L05 第5讲 归纳法与递归 ---------- */
  T.push({
  "no": "L05",
  "title": "第5讲 归纳法与递归",
  "titleEn": "Lecture 5: Induction and Recursion",
  "tags": [
    "Mathematical Induction",
    "Strong Induction",
    "Recursion",
    "Recursive Definition",
    "Recursive Algorithm",
    "Factorial",
    "Binomial Coefficient",
    "Fractal Curve",
    "Towers of Hanoi",
    "Merge Sort"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "一、本讲概览与路线图（Our Roadmap）"
    },
    {
      "t": "p",
      "md": "本讲是 **Lecture 5: Induction and Recursion**（归纳与递归）。幻灯片给出的路线图（Our Roadmap）包含四个部分：[[Mathematical Induction|数学归纳法]]、[[Strong Induction|强归纳法]]、[[Recursive Definition|递归定义]]、[[Recursive Algorithm|递归算法]]。"
    },
    {
      "t": "ul",
      "items": [
        "**Mathematical induction（数学归纳法）**：证明形如“对所有正整数 $n$，$P(n)$ 成立”的命题。",
        "**Strong induction（强归纳法）**：使用更强的归纳假设。",
        "**Recursive definitions（递归定义）**：用递归定义一个函数或一种结构。",
        "**Recursive algorithms（递归算法）**：用递归求解问题。"
      ]
    },
    {
      "t": "note",
      "md": "第 2 页是 **Global Exchange Fair 2026/27** 的宣传页（与课程内容无关）：日期 2025 年 10 月 9 日 12:30–17:00，地点 Chan Shui Ki & Chan Lam Moon Chun Square；其中 **GEO Information Session** 于同日 15:30–16:15 在 **HJ303** 举行。"
    },
    {
      "t": "h",
      "md": "二、数学归纳法（Mathematical Induction, MI）"
    },
    {
      "t": "p",
      "md": "设 $P(n)$ 是一个 [[Propositional Function|命题函数]]（propositional function）。要证明 **$P(n)$ 对所有正整数成立**，数学归纳法分为两个步骤："
    },
    {
      "t": "ul",
      "items": [
        "**Basis step（基础步骤）**：证明 $P(1)$ 为真。",
        "**Inductive step（归纳步骤）**：证明对所有正整数 $k$，蕴含式 $P(k)\\to P(k+1)$ 为真。"
      ]
    },
    {
      "t": "p",
      "md": "完成这两步后，就可以得出结论：$\\forall n\\in N,\\ P(n)$。"
    },
    {
      "t": "note",
      "md": "归纳步骤中 $P(k)$ 是被**假设**为真的，这个假设称为 [[Induction Hypothesis|归纳假设]]（induction hypothesis）。注意要证明的是**蕴含式** $P(k)\\to P(k+1)$，而不是直接断言 $P(k+1)$ 成立。"
    },
    {
      "t": "p",
      "md": "**Alternative form（另一种形式）**：如果 $P(n)$ 中 $n$ 的取值域是所有 **$\\ge b$ 的整数**，那么 **basis step 应从 $b$ 开始**（即证明 $P(b)$，而不是 $P(1)$）。"
    },
    {
      "t": "h",
      "md": "三、MI 例 1：几何级数求和"
    },
    {
      "t": "p",
      "md": "**例**：证明 $\\sum_{i=0}^{n} 2^i = 2^{n+1}-1$ 对所有（正整数 $n$）成立。"
    },
    {
      "t": "p",
      "md": "取 $P(n)$ 为命题 $\\sum_{i=0}^{n} 2^i = 2^{n+1}-1$。"
    },
    {
      "t": "ul",
      "items": [
        "**Basis step**：幻灯片直接写出 L.H.S. $=2^0=1$、R.H.S. $=2^1-1=1$，两者相等，基础步骤成立（由于求和从 $i=0$ 开始，这里取的是 $n=0$ 的情形）。",
        "**Inductive step**：假设 $P(k)$ 真，即 $\\sum_{i=0}^{k} 2^i = 2^{k+1}-1$。"
      ]
    },
    {
      "t": "p",
      "md": "对 $P(k+1)$ 计算左边："
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned}\\text{L.H.S. of }P(k+1)&=\\sum_{i=0}^{k+1}2^i=2^{k+1}+\\sum_{i=0}^{k}2^i\\\\&=2^{k+1}+(2^{k+1}-1)\\quad(\\text{因为 }P(k))\\\\&=2^{k+2}-1=\\text{R.H.S. of }P(k+1)\\end{aligned}$$"
    },
    {
      "t": "p",
      "md": "因此 $P(k+1)$ 为真。"
    },
    {
      "t": "note",
      "md": "幻灯片在 $2^{k+1}+(2^{k+1}-1)$ 这一步旁标注了 **“because $P(k)$”**，即此处用到了归纳假设。"
    },
    {
      "t": "h",
      "md": "四、MI 例 2：$n^3-n$ 可被 3 整除"
    },
    {
      "t": "p",
      "md": "**例**：证明 $n^3-n$ 能被 3 整除。"
    },
    {
      "t": "p",
      "md": "取 $P(n)$ 为命题 “$n^3-n$ is divisible by 3”。"
    },
    {
      "t": "ul",
      "items": [
        "**Basis step**：当 $n=1$ 时值为 $1^3-1=0$，而 $0$ 能被 3 整除，故 $P(1)$ 真。",
        "**Inductive step**：假设 $P(k)$ 真，即存在整数 $b$ 使得 $k^3-k=3b$。"
      ]
    },
    {
      "t": "p",
      "md": "对 $k+1$ 的情形："
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned}(k+1)^3-(k+1)&=(k^3+3k^2+3k+1)-(k+1)\\\\&=3b+3k^2+3k=3(b+k^2+k)\\end{aligned}$$"
    },
    {
      "t": "p",
      "md": "它的形式是 $3$ 的整数倍，因此 $P(k+1)$ 为真。"
    },
    {
      "t": "note",
      "md": "OCR 把最后一步识别成 “$3(b+k^2.$”，按数学含义恢复为 $3(b+k^2+k)$；第一步的 $(k^3+3k^2+3k+1)$ 同理由 OCR 的 “$(k^3+3k^2+3k+1)$” 确认。"
    },
    {
      "t": "h",
      "md": "五、MI 例 3：用三格骨牌覆盖缺角棋盘"
    },
    {
      "t": "p",
      "md": "**例**：证明对所有 $n\\in N$，每一个**缺了一个方格**的 $2^n\\times 2^n$ [[Checkerboard|棋盘]] 都可以用 [[Triomino|三格骨牌]]（triomino，L 形的三格骨牌）铺满。"
    },
    {
      "t": "p",
      "md": "取 $P(n)$ 为命题 “every $2^n\\times2^n$ checkerboard with a missing square can be tiled using triominoes”。"
    },
    {
      "t": "ul",
      "items": [
        "**Basis step**：当 $n=1$ 时考虑 $2\\times2$ 棋盘；共有**四种**可能的棋盘（缺角位置不同），每一种都能用一个 triomino 铺满，故 $P(1)$ 真。"
      ]
    },
    {
      "t": "p",
      "md": "**Inductive step**："
    },
    {
      "t": "ul",
      "items": [
        "假设 $P(k)$ 真，即每一个缺角的 $2^k\\times2^k$ 棋盘都能用 triomino 铺满。",
        "一个缺角的 $2^{k+1}\\times2^{k+1}$ 棋盘可以**旋转**，使缺角出现在**右下角**（lower-right），然后**分成四个** $2^k\\times2^k$ 子棋盘。",
        "在**中心**放一个 triomino，盖住**前三个** $2^k\\times2^k$ 子棋盘各一个角格。",
        "这样四个子棋盘**每一个都恰好缺一个方格**，由 $P(k)$ 都能用 triomino 铺满。",
        "因此 $P(k+1)$ 真。"
      ]
    },
    {
      "t": "h",
      "md": "六、MI 中的常见错误（Mistakes in MI）"
    },
    {
      "t": "p",
      "md": "幻灯片考察下面两个命题的“数学归纳法证明”："
    },
    {
      "t": "ul",
      "items": [
        "**(1)** 平面上任意 $n\\ge2$ 条直线，若**任意两条都不平行**，则这 $n$ 条直线必**交于同一点**。",
        "**(2)** 任意 $n\\ge1$ 匹马的颜色**都相同**。"
      ]
    },
    {
      "t": "p",
      "md": "**Mistakes: example 1（直线）**"
    },
    {
      "t": "ul",
      "items": [
        "$P(n)$：平面上任意 $n\\ge2$ 条直线，若任意两条不平行，则它们交于同一点。",
        "**Basis step**：两条不平行直线相交于一点，故 $P(2)$ 真。",
        "**Inductive step**：假设 $P(k)$ 真。对 $k+1$ 条直线 $l_1,l_2,\\ldots,l_{k+1}$：由 $P(k)$，前 $k$ 条 $l_1,\\ldots,l_k$ 交于一点 $a$；由 $P(k)$，后 $k$ 条 $l_2,\\ldots,l_{k+1}$ 交于一点 $b$；因为两组直线**共有**直线 $l_2,\\ldots,l_k$，它们同时过 $a$ 与 $b$，所以 $a$ 与 $b$ 是同一点。故 $P(k+1)$ 真。"
      ]
    },
    {
      "t": "warn",
      "md": "**错在哪里？** 幻灯片追问：这个论证在 **$k+1=3$** 时有效吗？当 $k+1=3$ 时，两组直线共有的直线**只剩一条**（$l_2$），而**一条直线本身无法决定交点是否相同**（一条直线上有无穷多个点），所以 $a=b$ 的推理失效——归纳步骤不成立。"
    },
    {
      "t": "p",
      "md": "**Mistakes: example 2（马）**"
    },
    {
      "t": "ul",
      "items": [
        "$P(n)$：任意 $n\\ge1$ 匹马颜色都相同。",
        "**Basis step**：当 $n=1$，一匹马只有一种颜色，故 $P(1)$ 真。",
        "**Inductive step**：假设 $P(k)$ 真。对 $k+1$ 匹马 $h_1,h_2,\\ldots,h_{k+1}$：由 $P(k)$，前 $k$ 匹 $h_1,\\ldots,h_k$ 同色，设为 $a$；由 $P(k)$，后 $k$ 匹 $h_2,\\ldots,h_{k+1}$ 同色，设为 $b$；因为两组中**至少存在一匹公共的马 $h_2$**，所以 $a$ 与 $b$ 相同。故 $P(k+1)$ 真。"
      ]
    },
    {
      "t": "warn",
      "md": "**错在哪里？** 幻灯片追问：这个论证在 **$k+1=2$** 时有效吗？当 $k+1=2$ 时，前 $k$ 匹与后 $k$ 匹**没有公共的马**，$a=b$ 的推理失效——归纳步骤不成立。"
    },
    {
      "t": "h",
      "md": "七、强归纳法（Strong Induction）"
    },
    {
      "t": "p",
      "md": "[[Strong Induction|强归纳法]]允许我们使用**更强的归纳假设**，从而更容易完成证明。"
    },
    {
      "t": "ul",
      "items": [
        "**Basis step**：证明 $P(1)$ 为真——**与数学归纳法完全相同**。",
        "**Inductive step**：证明 $P(1)\\land P(2)\\land\\cdots\\land P(k)\\to P(k+1)$ 对所有正整数 $k$ 成立——这**比数学归纳法更强**。"
      ]
    },
    {
      "t": "p",
      "md": "**Alternative form**：如果 $P(n)$ 中 $n$ 的取值域是所有 $\\ge b$ 的整数，那么 **basis step 与 inductive step 都应从 $b$ 开始**。"
    },
    {
      "t": "note",
      "md": "强归纳法与 MI 的唯一区别在归纳步骤：MI 只用 $P(k)$ 推出 $P(k+1)$；强归纳法用 $P(1)\\land P(2)\\land\\cdots\\land P(k)$ 推出 $P(k+1)$。"
    },
    {
      "t": "h",
      "md": "八、强归纳法例子：整数分解为素数之积"
    },
    {
      "t": "p",
      "md": "**例**：证明对任意整数 $n>1$，$n$ 都可以表示成**素数之积**（the product of prime numbers）。"
    },
    {
      "t": "p",
      "md": "取 $P(n)$ 为命题 “$n$ can be expressed as the product of prime numbers”。"
    },
    {
      "t": "ul",
      "items": [
        "**Basis step**：$2$ 是素数，故 $P(2)$ 真。",
        "**Inductive step**：假设对所有满足 $2\\le j\\le k$ 的整数 $j$，$P(j)$ 为真。对 $k+1$ 分两种情形：",
        "**Case 1：$k+1$ 是素数** —— 它本身就是素数之积（一项），故 $P(k+1)$ 真。",
        "**Case 2：$k+1$ 不是素数** —— 存在两个整数 $a,b$ 使得 $k+1=ab$（这里 $a,b$ 都真包含在 $2\\le a,b\\le k$ 范围内）；由归纳假设 $P(a)$ 与 $P(b)$ 都真，即 $a$、$b$ 都能写成素数之积，于是 $ab$ 也能写成素数之积，故 $P(k+1)$ 真。"
      ]
    },
    {
      "t": "note",
      "md": "OCR 中 “Assume that P(j) is true for all integers j with 2…” 被截断，按数学含义补全为 $2\\le j\\le k$；“there exists two integers a, b such that k+1=ab and…” 同理补全为 $2\\le a,b\\le k$。"
    },
    {
      "t": "h",
      "md": "九、递归定义（Recursive Definitions）"
    },
    {
      "t": "p",
      "md": "[[Recursion|递归]]可以用来定义一个函数或一种结构。递归定义通常由 **basis step（基础步骤）** 与 **recursive step（递归步骤）** 组成。"
    },
    {
      "t": "p",
      "md": "幻灯片列举的例子："
    },
    {
      "t": "ul",
      "items": [
        "**Factorial（阶乘）**",
        "**Binomial coefficients（二项式系数）**：即组合数（the number of combinations）",
        "**Fibonacci numbers（斐波那契数）**",
        "**The set of all strings（所有字符串的集合）**",
        "**The set of all formulae in propositional logic（命题逻辑中所有公式的集合）**",
        "**The set of all trees（所有树的集合）**",
        "**The set of all graphs（所有图的集合）**",
        "**Fractal curves（分形曲线）**"
      ]
    },
    {
      "t": "h",
      "md": "十、分形曲线（Fractal Curves）"
    },
    {
      "t": "p",
      "md": "[[Fractal Curve|分形曲线]]是用**递归**定义的。"
    },
    {
      "t": "ul",
      "items": [
        "例子：**Koch snowflake（[[Koch Snowflake|科赫雪花]]）**、**Hilbert curve（[[Hilbert Curve|希尔伯特曲线]]）**。",
        "它们具有**自相似（self-similar）**的性质。",
        "应用：**computer graphics（计算机图形学）**、**database indexing（数据库索引）**。",
        "更多信息见：`https://en.wikipedia.org/wiki/Fractal_curve`。"
      ]
    },
    {
      "t": "h",
      "md": "十一、阶乘（Factorial）的递归定义"
    },
    {
      "t": "p",
      "md": "幻灯片的递归定义："
    },
    {
      "t": "p",
      "md": "$$F(0)=1\\quad(\\text{basis step})$$"
    },
    {
      "t": "p",
      "md": "$$F(n)=n\\times F(n-1)\\quad\\text{if } n>0\\quad(\\text{recursive step})$$"
    },
    {
      "t": "p",
      "md": "手工计算 $F(3)$："
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned}F(3)&=3\\times F(2)=3\\times(2\\times F(1))=3\\times(2\\times(1\\times F(0)))\\\\&=3\\times(2\\times(1\\times1))=6\\end{aligned}$$"
    },
    {
      "t": "h",
      "md": "十二、求阶乘的递归算法"
    },
    {
      "t": "p",
      "md": "根据上面的递归定义，可以直接写出算法 $F(n)$："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "F(n)\n1. if n = 0\n2.     return 1\n3. else\n4.     temp <- F(n-1)\n5.     return (n x temp)"
    },
    {
      "t": "note",
      "md": "幻灯片伪代码的最后两行被 OCR 识成 “temp <F” 与 “return (n›”，按递归定义 $F(n)=n\\times F(n-1)$ 恢复为 `temp <- F(n-1)` 与 `return (n x temp)`。"
    },
    {
      "t": "h",
      "md": "十三、二项式系数（Binomial Coefficients）"
    },
    {
      "t": "p",
      "md": "$C(n,k)$ 的递归定义："
    },
    {
      "t": "p",
      "md": "$$C(n,0)=C(n,n)=1\\quad\\text{for any } n\\ge0\\quad(\\text{basis step})$$"
    },
    {
      "t": "p",
      "md": "$$C(n,k)=C(n-1,k-1)+C(n-1,k)\\quad\\text{for } 0<k<n\\quad(\\text{recursive step})$$"
    },
    {
      "t": "p",
      "md": "事实上 $C(n,k)$ 就是**二项式系数（[[Binomial Coefficient|二项式系数]]）**，即**从 $n$ 个元素中取 $k$ 个的组合数**（the number of size-$k$ combinations of $n$ elements）。"
    },
    {
      "t": "p",
      "md": "幻灯片问：怎样求 $C(3,1)$？——可以**手工计算**，也可以**运行算法**。"
    },
    {
      "t": "h",
      "md": "十四、手工计算 $C(n,k)$"
    },
    {
      "t": "p",
      "md": "手工求 $C(3,1)$ 的过程："
    },
    {
      "t": "p",
      "md": "$$\\begin{aligned}C(3,1)&=C(2,0)+C(2,1)\\quad(\\text{recursive step})\\\\&=1+\\big(C(1,0)+C(1,1)\\big)\\\\&=1+1+1\\quad(\\text{basis step})\\\\&=3\\end{aligned}$$"
    },
    {
      "t": "note",
      "md": "幻灯片在算式旁标注每一步用的是 **recursive step** 还是 **basis step**：$C(2,0)=1$、$C(1,0)=1$、$C(1,1)=1$ 都来自 basis step。"
    },
    {
      "t": "h",
      "md": "十五、求 $C(n,k)$ 的递归算法"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "C(n,k)\n1. if k = 0 or k = n\n2.     return 1\n3. else\n4.     a <- C(n-1,k-1)\n5.     b <- C(n-1,k)\n6.     return (a + b)"
    },
    {
      "t": "warn",
      "md": "幻灯片特别指出：**这个算法在 $n$ 很大时极其慢**（extremely slow when $n$ is large）；如何设计更快的算法将在 **COMP3011** 中学习。"
    },
    {
      "t": "h",
      "md": "十六、所有字符串的集合（The Set of All Strings）"
    },
    {
      "t": "p",
      "md": "给定一个字符集合 $\\Sigma$，称为**字母表**（[[Alphabet|字母表]]，alphabet）。用 $\\varepsilon$ 表示**空串**（[[Empty String|空串]]，empty string）。"
    },
    {
      "t": "p",
      "md": "字母表 $\\Sigma$ 上所有字符串的集合 $\\Sigma^*$ 定义为："
    },
    {
      "t": "ul",
      "items": [
        "**Basis step**：$\\varepsilon\\in\\Sigma^*$。",
        "**Recursive step**：若 $x\\in\\Sigma^*$ 且 $y\\in\\Sigma$，则 $xy\\in\\Sigma^*$，其中 $xy$ 表示**把 $y$ 接在 $x$ 后面**所构成的字符串。"
      ]
    },
    {
      "t": "p",
      "md": "例子："
    },
    {
      "t": "ul",
      "items": [
        "**Binary strings（二进制串）**：令 $\\Sigma=\\{0,1\\}$，则 $\\Sigma^*$ 中的串有 $\\varepsilon,\\ 0,\\ 1,\\ 00,\\ 01,\\ 10,\\ 11,\\ 000,\\ 001,\\ 010,\\ 011,\\ldots$。",
        "**Character strings（字符串）**：令 $\\Sigma=\\{$`'a'`,`'b'`,`'c'`,$\\ldots,$`'z'`$\\}$，则 $\\Sigma^*$ 中的串有 $\\varepsilon$, `\"a\"`, `\"b\"`, $\\ldots$, `\"z\"`, `\"aa\"`, `\"ab\"`, $\\ldots$。"
      ]
    },
    {
      "t": "note",
      "md": "OCR 中的 $\\Upsilon$、`&`、$4^*$ 等符号是字母表 $\\Sigma$ 与 $\\Sigma^*$ 的乱码，空串符号 $\\varepsilon$ 在 OCR 中被识成 `E`/`&`，此处按数学含义恢复。"
    },
    {
      "t": "h",
      "md": "十七、递归算法（Recursive Algorithms）"
    },
    {
      "t": "p",
      "md": "我们已经见过用于**求递归函数的值**的递归算法，例如："
    },
    {
      "t": "ul",
      "items": [
        "**Factorial（阶乘）**",
        "**Binomial coefficients（二项式系数）**"
      ]
    },
    {
      "t": "p",
      "md": "接下来，我们用递归算法来**求解其他问题**，例如："
    },
    {
      "t": "ul",
      "items": [
        "**Towers of Hanoi（[[Towers of Hanoi|汉诺塔]]）**",
        "**Merge sort（[[Merge Sort|归并排序]]）**"
      ]
    },
    {
      "t": "h",
      "md": "十八、汉诺塔（Towers of Hanoi）"
    },
    {
      "t": "p",
      "md": "**问题**：把**所有盘子**从杆 A 移到杆 B。"
    },
    {
      "t": "ul",
      "items": [
        "共有**三根杆**：A、B、C。",
        "初始时 $n$ 个盘子（大小为 $1,2,\\ldots,n$）按大小叠放在杆 A 上（小盘在上）。"
      ]
    },
    {
      "t": "p",
      "md": "**操作 `MoveTop(X,Y)`**："
    },
    {
      "t": "ul",
      "items": [
        "**Precondition（前置条件）**：杆 X 顶端的盘子**小于**杆 Y 顶端的盘子。",
        "然后它把 X 顶端的盘子移到 Y 的顶端。"
      ]
    },
    {
      "t": "p",
      "md": "**如何递归地求解？** 幻灯片给出的思路是：假设我们已经知道盘子数为 $n-1$ 时怎么解，那么 $n=3$ 的问题怎么解？"
    },
    {
      "t": "h",
      "md": "十九、汉诺塔 $n=2$"
    },
    {
      "t": "p",
      "md": "$n=2$ 时（小盘 1 在大盘 2 之上），依次执行三步："
    },
    {
      "t": "ul",
      "items": [
        "`MoveTop(A,C)`：把小盘从 A 移到 C。",
        "`MoveTop(A,B)`：把大盘从 A 移到 B。",
        "`MoveTop(C,B)`：把小盘从 C 移到 B。"
      ]
    },
    {
      "t": "h",
      "md": "二十、汉诺塔 $n=3$"
    },
    {
      "t": "p",
      "md": "思路：先把**上面 2 个盘子**移到备用杆（`SolveHanoi(2, A, C, B)`），再移动最大的盘子，最后把 2 个盘子移到目标杆。"
    },
    {
      "t": "ul",
      "items": [
        "**前半**：`SolveHanoi(2, A, C, B)`，即 `MoveTop(A,B)`、`MoveTop(A,C)`、`MoveTop(B,C)`，此时上面 2 个盘子都在杆 C。",
        "**中间**：`MoveTop(A,B)`，把最大的盘子从杆 A 移到杆 B。",
        "**后半**：`SolveHanoi(2, C, B, A)`，即 `MoveTop(C,A)`、`MoveTop(C,B)`、`MoveTop(A,B)`，把 2 个盘子从杆 C 移到杆 B。"
      ]
    },
    {
      "t": "h",
      "md": "二十一、汉诺塔算法"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "SolveHanoi(integer n, rod S, rod T, rod R)\n1. if n > 0\n2.     SolveHanoi(n-1, S, R, T)\n3.     MoveTop(S, T)\n4.     SolveHanoi(n-1, R, T, S)"
    },
    {
      "t": "ul",
      "items": [
        "**S：source rod（源杆）**，**T：target rod（目标杆）**，**R：the remaining rod（剩下的那根杆）**。",
        "每根杆都可以用一个**数组（array）**实现。",
        "调用方式：`SolveHanoi(n, A, B, C)`。"
      ]
    },
    {
      "t": "note",
      "md": "算法含义：第 2 行把上面 $n-1$ 个盘子从 S 移到 R（借助 T）；第 3 行把最底下的盘子从 S 移到 T；第 4 行把 $n-1$ 个盘子从 R 移到 T（借助 S）。"
    },
    {
      "t": "p",
      "md": "幻灯片给出该算法的动画演示链接：`http://towersofhanoi.info/Animate.aspx`。"
    },
    {
      "t": "note",
      "md": "**课后练习（After-class exercise）**：运行 `SolveHanoi(n, A, B, C)`（$n=4$），并画出每一次移动操作之后的图形。"
    },
    {
      "t": "h",
      "md": "二十二、归并排序（Merge Sort）"
    },
    {
      "t": "p",
      "md": "**如何递归地对一个数组排序？** 幻灯片的思路（Idea）："
    },
    {
      "t": "ul",
      "items": [
        "**递归调用之前（before recursive call）**：把数组 A 划分成两个子数组 L 和 R，各含 $n/2$ 个数。",
        "**递归地排序**这两个子数组。",
        "**递归调用之后（after recursive call）**：把两个已排序的子数组合并（merge）成一个有序数组。"
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Merge-Sort(Array A[1..n])\n1. if n > 1\n2.     m <- floor(n/2)\n3.     B[1..m] <- A[1..m]\n4.     C[1..n-m] <- A[m+1..n]\n5.     Merge-Sort(B[1..m])\n6.     Merge-Sort(C[1..n-m])\n7.     A[1..n] <- Merge(B[1..m], C[1..n-m])"
    },
    {
      "t": "note",
      "md": "OCR 把第 2 行识成 “mFLn12]”，按语义恢复为 $m\\leftarrow\\lfloor n/2\\rfloor$；第 7 行的赋值箭头在 OCR 中显示为 “<”。"
    },
    {
      "t": "h",
      "md": "二十三、合并（Merge）两个已排序数组"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Merge(Array L[1..nL], Array R[1..nR])\n1. nA <- nL + nR\n2. create a new array A[1..nA]\n3. i <- 1 ; j <- 1\n4. for k <- 1 to nA\n5.     if i <= nL and (j > nR or L[i] <= R[j])\n6.         A[k] <- L[i] ; i <- i+1\n7.     else\n8.         A[k] <- R[j] ; j <- j+1\n9. return A"
    },
    {
      "t": "note",
      "md": "**Pre-condition（前置条件）**：数组 L 与 R **都已经是排好序的**。算法依次比较两个数组当前最前面的元素，把较小者放入结果数组 A。"
    },
    {
      "t": "h",
      "md": "二十四、归并排序示例（divide 与 combine）"
    },
    {
      "t": "p",
      "md": "以数组 `29 70 85 40 47 26 13 5` 为例。"
    },
    {
      "t": "p",
      "md": "**划分（divide，递归调用之前）**："
    },
    {
      "t": "ul",
      "items": [
        "(1) 划分为 `29 70 85 40` 与 `47 26 13 5`。",
        "(2) 继续划分：`29 70`、`85 40`、`47 26`、`13 5`。",
        "(3) 继续划分：每个子数组只剩 1 个元素——`29`、`70`、`85`、`40`、`47`、`26`、`13`、`5`。"
      ]
    },
    {
      "t": "p",
      "md": "**合并（combine，递归调用之后）**："
    },
    {
      "t": "ul",
      "items": [
        "(4) 合并相邻的单元素：`29 70`、`40 85`、`26 47`、`5 13`。",
        "(5) 合并：`29 70` 与 `40 85` 得 `29 40 70 85`；`26 47` 与 `5 13` 得 `5 13 26 47`。",
        "(6) 合并：得到最终有序数组 `5 13 26 29 40 47 70 85`。"
      ]
    },
    {
      "t": "warn",
      "md": "幻灯片 combine 各步的图示在 OCR 中严重粘连（例如最后一行的 “13|26|29140147159|7018”），这里按 merge 算法的语义与初始数组 `29 70 85 40 47 26 13 5` 复原为有序结果 `5 13 26 29 40 47 70 85`。"
    },
    {
      "t": "h",
      "md": "二十五、本讲小结（Summary）"
    },
    {
      "t": "ul",
      "items": [
        "如何用**数学归纳法**（或**强归纳法**）证明一个命题。",
        "如何**递归地定义**一个函数或一种结构。",
        "如何**递归地求解**一个问题。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片建议：**Please read Chapter 5 in the textbook**（请阅读教材第 5 章）。"
    }
  ],
  "terms": [
    [
      "Mathematical Induction",
      "数学归纳法"
    ],
    [
      "Propositional Function",
      "命题函数"
    ],
    [
      "Basis Step",
      "基础步骤"
    ],
    [
      "Inductive Step",
      "归纳步骤"
    ],
    [
      "Induction Hypothesis",
      "归纳假设"
    ],
    [
      "Strong Induction",
      "强归纳法"
    ],
    [
      "Recursive Definition",
      "递归定义"
    ],
    [
      "Recursion",
      "递归"
    ],
    [
      "Fractal Curve",
      "分形曲线"
    ],
    [
      "Self-similar",
      "自相似的"
    ],
    [
      "Factorial",
      "阶乘"
    ],
    [
      "Binomial Coefficient",
      "二项式系数"
    ],
    [
      "Alphabet",
      "字母表"
    ],
    [
      "Empty String",
      "空串"
    ],
    [
      "Recursive Algorithm",
      "递归算法"
    ],
    [
      "Towers of Hanoi",
      "汉诺塔"
    ],
    [
      "Merge Sort",
      "归并排序"
    ],
    [
      "Merge",
      "合并"
    ],
    [
      "Checkerboard",
      "棋盘"
    ],
    [
      "Triomino",
      "三格骨牌"
    ],
    [
      "Koch Snowflake",
      "科赫雪花"
    ],
    [
      "Hilbert Curve",
      "希尔伯特曲线"
    ],
    [
      "Prime Number",
      "素数"
    ],
    [
      "Fibonacci Numbers",
      "斐波那契数"
    ],
    [
      "Propositional Logic",
      "命题逻辑"
    ]
  ],
  "qids": [
    "cm-4-01",
    "cm-4-02",
    "cm-4-03",
    "cm-4-04",
    "cp-2",
    "cp-3"
  ]
});

  /* ---------- L06 第6讲 计数 ---------- */
  T.push({
  "no": "L06",
  "title": "第6讲 计数",
  "titleEn": "Lecture 6: Counting",
  "tags": [
    "Counting",
    "Product Rule",
    "Sum Rule",
    "Subtraction Rule",
    "Inclusion-Exclusion",
    "Pigeonhole Principle",
    "Permutation",
    "Combination",
    "Binomial Theorem",
    "Pascal's Identity"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲是 [[COMP2012|离散数学]] 的第 6 讲，主题是 [[Counting|计数]]（Counting），幻灯片署名 “Ken Yiu @ 2025”。"
    },
    {
      "t": "p",
      "md": "本讲的路线图（Our Roadmap）由四部分组成：**计数基本概念**、**鸽巢原理（the pigeonhole principle）**、**排列与组合（permutations and combinations）**、**广义的排列与组合（generalized permutations and combinations）**。"
    },
    {
      "t": "h",
      "md": "一、计数基本概念（Basic concepts for counting）"
    },
    {
      "t": "p",
      "md": "计数的基础是若干**集合等式**：若 $S_1\\cap S_2=\\varnothing$，则 $|S_1\\cup S_2|=|S_1|+|S_2|$；与乘法法则相对应的是 $|S_1\\times S_2|=|S_1|\\cdot|S_2|$。本讲要解决的问题是：**如何把这些等式推广到多个集合** $S_1,S_2,\\dots,S_n$。"
    },
    {
      "t": "h",
      "md": "1. 乘法法则（The product rule）"
    },
    {
      "t": "p",
      "md": "**乘法法则**：如果一个任务可以分解为**两个子任务构成的序列**，做第一个子任务有 $n_1$ 种方式，做第二个子任务有 $n_2$ 种方式，那么完成整个任务共有 $n_1n_2$ 种方式。"
    },
    {
      "t": "ul",
      "items": [
        "**例 1**：John 从家（H）出发先到公园（P），再从 P 到另一个地点（U）。",
        "H 到 P 有 3 条路，P 到 U 有 2 条路；",
        "所以 H 到 U 的走法总数 $=3\\times 2=6$。",
        "**例 2**：香港车牌号由 **2 个字母 + 4 个数字**组成（例如 `SD5328`）。",
        "每个字母可以是 A, B, C, …, Z（共 26 种），每个数字可以是 0, 1, 2, …, 9（共 10 种）；",
        "可能的车牌号数目 $=26\\times 26\\times 10\\times 10\\times 10\\times 10=6{,}760{,}000$。"
      ]
    },
    {
      "t": "note",
      "md": "该法则也适用于**多个子任务**的情形：把每个子任务的方式数连乘即可。"
    },
    {
      "t": "h",
      "md": "2. 加法法则（The sum rule）"
    },
    {
      "t": "p",
      "md": "**加法法则**：如果一个任务可以用 $n_1$ 种方式完成，也可以用 $n_2$ 种方式完成，并且**这些方式彼此不同**（没有重复计数），那么完成该任务共有 $n_1+n_2$ 种方式。其集合表达就是 $S_1\\cap S_2=\\varnothing$ 时的等式 $|S_1\\cup S_2|=|S_1|+|S_2|$。"
    },
    {
      "t": "ul",
      "items": [
        "**例 1**：John 从家（H）到大学（U），可以乘 [[MTR|港铁]]，也可以乘巴士。",
        "H 到 U 有 1 条 MTR 路线、2 条巴士路线；",
        "路线总数 $=1+2=3$。",
        "**例 2**：Peter 的 [[capstone project|毕业设计项目]] 可以在 computing、marketing 或 business 方向中选择。",
        "computing 有 30 个项目，marketing 有 20 个，business 有 10 个；",
        "可选的项目总数 $=30+20+10=60$。"
      ]
    },
    {
      "t": "h",
      "md": "3. 减法法则（The subtraction rule）"
    },
    {
      "t": "p",
      "md": "**减法法则**：如果一个任务可以用 $n_1$ 种方式完成，也可以用 $n_2$ 种方式完成，而这两种方式中**共同**的有 $n_{\\text{common}}$ 种，那么共有 $n_1+n_2-n_{\\text{common}}$ 种方式。集合表达即 $|A\\cup B|=|A|+|B|-|A\\cap B|$。"
    },
    {
      "t": "p",
      "md": "**例 1**：统计以 `1` 开头**或**以 `0` 结尾的 8 位 01 串个数。以 `1` 开头：$2^7=128$ 个；以 `0` 结尾：$2^7=128$ 个；既以 `1` 开头又以 `0` 结尾：$2^6=64$ 个。答案 $=128+128-64=192$。"
    },
    {
      "t": "p",
      "md": "**例 2**：统计 1 到 100 中能被 3 或 5 整除的整数个数。能被 3 整除：$\\lfloor 100/3\\rfloor=33$；能被 5 整除：$\\lfloor 100/5\\rfloor=20$；同时被 3 和 5 整除（即被 15 整除，因为 3 与 5 没有共同素因子）：$\\lfloor 100/15\\rfloor=6$。答案 $=33+20-6=47$。"
    },
    {
      "t": "p",
      "md": "**例 3**：统计 1 到 100 中能被 6 或 9 整除的整数个数。"
    },
    {
      "t": "warn",
      "md": "幻灯片明确指出：「$\\lfloor 100/(6\\times 9)\\rfloor$」这种算法是**错的**，并建议**课后自行思考**。原因是 6 与 9 有共同素因子，重复计数的那部分应是**同时**被 6 和 9 整除的数，即被 $\\operatorname{lcm}(6,9)=18$ 整除的数：$\\lfloor 100/6\\rfloor=16$，$\\lfloor 100/9\\rfloor=11$，$\\lfloor 100/18\\rfloor=5$，因此正确答案是 $16+11-5=22$（而不是用乘积 $6\\times9$）。"
    },
    {
      "t": "h",
      "md": "4. 容斥原理（The Principle of Inclusion-Exclusion）"
    },
    {
      "t": "p",
      "md": "把减法法则推广到多个集合，即[[inclusion-exclusion|容斥原理]]。给定 $n$ 个集合 $S_1,S_2,\\dots,S_n$，则 $$|S_1\\cup S_2\\cup\\cdots\\cup S_n|=\\sum_{1\\le i\\le n}|S_i|-\\sum_{1\\le i<j\\le n}|S_i\\cap S_j|+\\sum_{1\\le i<j<k\\le n}|S_i\\cap S_j\\cap S_k|-\\cdots+(-1)^{n+1}|S_1\\cap S_2\\cap\\cdots\\cap S_n|$$"
    },
    {
      "t": "p",
      "md": "当 $n=3$ 时即为：$$|S_1\\cup S_2\\cup S_3|=|S_1|+|S_2|+|S_3|-|S_1\\cap S_2|-|S_1\\cap S_3|-|S_2\\cap S_3|+|S_1\\cap S_2\\cap S_3|$$"
    },
    {
      "t": "p",
      "md": "**例**：统计 1 到 100 中能被 3、5 或 7 整除的整数。定义 $S_1=\\{x\\in\\mathbb{N}: x\\le 100,\\ x\\ \\text{被}\\ 3\\ \\text{整除}\\}$，$S_2=\\{x\\in\\mathbb{N}: x\\le 100,\\ x\\ \\text{被}\\ 5\\ \\text{整除}\\}$，$S_3=\\{x\\in\\mathbb{N}: x\\le 100,\\ x\\ \\text{被}\\ 7\\ \\text{整除}\\}$，再套用上面的公式。"
    },
    {
      "t": "tbl",
      "head": [
        "项",
        "取值"
      ],
      "rows": [
        [
          "$|S_1|$",
          "$\\lfloor 100/3\\rfloor=33$"
        ],
        [
          "$|S_2|$",
          "$\\lfloor 100/5\\rfloor=20$"
        ],
        [
          "$|S_3|$",
          "$\\lfloor 100/7\\rfloor=14$"
        ],
        [
          "$|S_1\\cap S_2|$",
          "$\\lfloor 100/15\\rfloor=6$"
        ],
        [
          "$|S_1\\cap S_3|$",
          "$\\lfloor 100/21\\rfloor=4$"
        ],
        [
          "$|S_2\\cap S_3|$",
          "$\\lfloor 100/35\\rfloor=2$"
        ],
        [
          "$|S_1\\cap S_2\\cap S_3|$",
          "$\\lfloor 100/105\\rfloor=0$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "因为 3、5、7 两两之间没有共同素因子，所以交集的大小可直接由对应乘积算得（如 $|S_1\\cap S_2|=\\lfloor 100/15\\rfloor=6$）。最终答案 $=33+20+14-6-4-2+0=55$。"
    },
    {
      "t": "h",
      "md": "5. 除法法则（The division rule）"
    },
    {
      "t": "p",
      "md": "**除法法则**：设集合 $S$ 是 $n$ 个**互不相交**的子集的并，并且每个子集恰好含有 $d$ 个元素，则 $$n=|S|/d$$"
    },
    {
      "t": "p",
      "md": "**例**：求 5 个人围着一张圆桌就座的方式数。两次就座被视为**相同**，当且仅当每个人有**相同的左邻和相同的右邻**。5 个人坐 5 个座位的排法共有 $5\\times4\\times3\\times2\\times1=120$ 种；对同一种圆桌就座方案，每个人都可能坐在 1、2、3、4、5 号座位上，即被重复计了 5 次。于是圆桌就座方式数 $=120/5=24$。"
    },
    {
      "t": "h",
      "md": "6. 树形图（Tree diagram）"
    },
    {
      "t": "p",
      "md": "[[tree diagram|树形图]] 可以用来解决计数问题：它从**根（root）**开始，每一条**分支**代表一种可能的选择，并且**只保留满足题目约束的分支**。"
    },
    {
      "t": "p",
      "md": "**例**：统计长度为 3、且**不含两个连续 `0`** 的 01 串个数。每一位可以是 0 或 1；如果前一位是 `0`，那么下一位不能是 `0`。画出各级分支后可得答案为 **5**。"
    },
    {
      "t": "tbl",
      "head": [
        "法则",
        "使用条件",
        "计数结论"
      ],
      "rows": [
        [
          "[[product rule|乘法法则]]",
          "任务分解为依次进行的子任务",
          "$n_1n_2$（多个子任务则连乘）"
        ],
        [
          "[[sum rule|加法法则]]",
          "各种方式互不重叠",
          "$n_1+n_2$（多个集合则连加）"
        ],
        [
          "[[subtraction rule|减法法则]]",
          "两种方式有重叠部分",
          "$n_1+n_2-n_{\\text{common}}$"
        ],
        [
          "[[inclusion-exclusion|容斥原理]]",
          "推广到 $n$ 个集合",
          "各项正负交替求和（见上文公式）"
        ],
        [
          "[[division rule|除法法则]]",
          "$S$ 分成 $n$ 个各含 $d$ 个元素的子集",
          "$n=|S|/d$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "前三条法则的集合版本分别是：不交并的基数相加、乘积集的基数相乘、一般并集的基数需要减去交集。"
    },
    {
      "t": "h",
      "md": "二、鸽巢原理（The pigeonhole principle）"
    },
    {
      "t": "p",
      "md": "**鸽巢原理**：设 $k$ 为正整数。如果把 $k+1$ 个（或更多）物体放进 $k$ 个盒子，那么**至少有一个盒子含有至少两个物体**。幻灯片指出它可以用**逆否命题证明**（proof by contraposition）。"
    },
    {
      "t": "p",
      "md": "**例 1**：13 个人中，至少有 2 个人的生日在同一个月。这里 $k=12$ 个月相当于 12 个盒子，$k+1=13$ 个人相当于 13 个物体，由鸽巢原理即得结论。"
    },
    {
      "t": "p",
      "md": "**例 2**：对任意整数 $n$，都存在 $n$ 的一个倍数，其十进制表示**只含 0 和 1**。"
    },
    {
      "t": "ul",
      "items": [
        "**第 1 步：构造物体与盒子**。取 $n$ 个盒子 = 一个整数除以 $n$ 的余数，共有 $n$ 种可能余数：$0,1,2,\\dots,n-1$。取 $n+1$ 个物体 = 下面这 $n+1$ 个整数：$1,\\ 11,\\ 111,\\ \\dots,\\ \\underbrace{11\\cdots1}$（即全部由 1 组成、位数依次递增的 $n+1$ 个数）。",
        "由鸽巢原理，这 $n+1$ 个整数中**至少有两个余数相同**。注意：这两个数 $x$ 和 $y$ 本身不一定是 $n$ 的倍数，于是要问：**怎样得到 $n$ 的倍数？**",
        "**第 2 步：推出结论**。不妨设 $x>y$；由于 $x$ 与 $y$ 的余数相同，$x-y$ 是 $n$ 的倍数；又因为 $x$ 与 $y$ 都只由 1 组成，$x-y$ 的十进制表示中只含 0 和 1。因此 $x-y$ 就是所求的答案。"
      ]
    },
    {
      "t": "p",
      "md": "**例 3**：某足球队在 9 月一共打了**至多 45 场**比赛，且每天至少打 1 场。证明存在一段**连续的日子**，该队在这段日子里恰好打了 14 场比赛。"
    },
    {
      "t": "ul",
      "items": [
        "设 $a_i$ 为第 $i$ 天及之前打过的比赛总数（$i=1,\\dots,30$）。",
        "因为每天至少打 1 场，所以 $a_1<a_2<\\cdots<a_{30}$ 是一列**严格递增的不同整数**。",
        "另一列不同整数是 $a_1+14,\\ a_2+14,\\ \\dots,\\ a_{30}+14$。",
        "这 60 个整数的取值范围是 $1$ 到 $45+14=59$。",
        "由鸽巢原理，60 个整数落在 59 个可能取值中，**至少有两个相同**；又因为同一序列内部互不相同，所以只能是某个 $a_i=a_j+14$。",
        "这说明该队从第 $j+1$ 天到第 $i$ 天这段连续日子里**恰好打了 14 场**比赛。"
      ]
    },
    {
      "t": "h",
      "md": "广义鸽巢原理（The generalized pigeonhole principle）"
    },
    {
      "t": "p",
      "md": "**广义鸽巢原理**：设 $N$ 与 $k$ 为正整数。如果把 $N$ 个物体放进 $k$ 个盒子，那么**至少有一个盒子含有至少 $\\lceil N/k\\rceil$ 个物体**。幻灯片同样指出可用**逆否命题证明**。"
    },
    {
      "t": "p",
      "md": "**例 1**：30 个人中，至少有 $\\lceil 30/12\\rceil=3$ 个人的生日在同一个月（这里 $k=12$ 个月）。"
    },
    {
      "t": "p",
      "md": "**例 2**：给定一副标准 52 张扑克牌，至少要取多少张牌，才能保证**至少有 8 张是同一花色**？设取的牌数为 $N$，共有 $k=4$ 种花色（4 个盒子）。由广义鸽巢原理，至少有一个盒子含有 $\\lceil N/4\\rceil\\ge8$ 张牌，故 $N$ 的最小值 $=(8-1)\\times4+1=29$。"
    },
    {
      "t": "p",
      "md": "**例 3**：至少要取多少张牌，才能保证**至少有 8 张方块（diamond）**？这里**不能**使用广义鸽巢原理，因为它只能保证存在某个花色达到 8 张，而**不能保证是某一个指定的花色**。考虑**最坏情况**：先把其他花色的牌全部取完，再取方块。所需张数 $=13\\times3+8=47$。"
    },
    {
      "t": "warn",
      "md": "注意区分两问：**「至少 8 张同一花色」**用广义鸽巢原理（$29$ 张）；**「至少 8 张方块」**必须用最坏情况分析（$47$ 张），因为广义鸽巢原理无法指定花色。"
    },
    {
      "t": "h",
      "md": "三、排列（Permutations）"
    },
    {
      "t": "p",
      "md": "一个 [[permutation|排列]] 是对象集合的一个**有序安排**（ordered arrangement）。例如 $(b,a,d,c,e)$ 是集合 $\\{a,b,c,d,e\\}$ 的一个排列。"
    },
    {
      "t": "p",
      "md": "一个 **$r$-排列（$r$-permutation）** 是从集合中取出 $r$ 个对象的一个**有序**安排。例如 $(b,a)$ 是集合 $\\{a,b,c,\\dots\\}$ 的一个 2-排列。"
    },
    {
      "t": "p",
      "md": "含 $n$ 个元素的集合的 $r$-排列数目为 $$P(n,r)=n(n-1)(n-2)\\cdots(n-r+1)=\\frac{n!}{(n-r)!}$$ 幻灯片说明这个结果可以用**乘法法则**证明。"
    },
    {
      "t": "h",
      "md": "四、组合（Combinations）"
    },
    {
      "t": "p",
      "md": "一个 **$r$-组合（$r$-combination）** 是从集合中取出 $r$ 个对象的一个**无序**选取。例如 $\\{b,a\\}$ 是集合 $\\{a,b,c,\\dots\\}$ 的一个 2-组合。"
    },
    {
      "t": "p",
      "md": "含 $n$ 个元素的集合的 $r$-组合数目为 $$C(n,r)=\\frac{n!}{r!\\,(n-r)!}$$ 幻灯片说明其证明思路：先数 $r$-排列的个数，再使用**除法法则**。另一种记法是 $\\binom{n}{r}$，称为 [[binomial coefficient|二项式系数]]。"
    },
    {
      "t": "h",
      "md": "组合的例子（Examples）"
    },
    {
      "t": "p",
      "md": "**例 1**：在 8 位参赛者中颁发一块金牌和一块银牌，有多少种方式？由于金、银有先后次序，使用排列：$P(8,2)=8\\times7=56$。"
    },
    {
      "t": "p",
      "md": "**例 2**：从一副 52 张扑克牌中取 4 张牌，有多少种方式？由于取牌无序，使用组合：$$C(52,4)=\\frac{52!}{4!\\,48!}=\\frac{52\\cdot51\\cdot50\\cdot49}{4\\cdot3\\cdot2\\cdot1}=270725$$"
    },
    {
      "t": "p",
      "md": "**例 3**：求方程 $t+u+v=5$ 的整数解个数，其中 $t,u,v$ 都是 0 到 5 之间的整数。"
    },
    {
      "t": "ul",
      "items": [
        "令 $a=t$，$b=t+u+1$；",
        "每个解 $(t,u,v)$ 都唯一对应一对 $(a,b)$；",
        "于是问题等价于：求满足 $a<b$、$a\\in[0..5]$、$b\\in[1..6]$ 的整数对个数；",
        "这又等价于从集合 $\\{0,1,2,\\dots,6\\}$ 中取 2 个数的 2-组合数；",
        "答案 $=C(7,2)=21$。"
      ]
    },
    {
      "t": "note",
      "md": "为什么要写成 $b=t+u+1$（多写一个 “$+1$”）？因为这样 $b=t+u+1>t=a$ 自动成立，把「$u\\ge0$」这一约束转化成严格的 $a<b$，从而把解数变成「从 7 个数中选 2 个」的组合问题。"
    },
    {
      "t": "h",
      "md": "代数证明（Algebraic proof）"
    },
    {
      "t": "p",
      "md": "什么是恒等式的 [[algebraic proof|代数证明]]？就是在证明过程中使用**代数方法**（例如算术运算法则）。"
    },
    {
      "t": "p",
      "md": "**例**：证明 $C(n,r)=C(n,n-r)$：$$C(n,r)=\\frac{n!}{r!\\,(n-r)!}=\\frac{n!}{(n-r)!\\,(n-(n-r))!}=C(n,n-r)$$"
    },
    {
      "t": "h",
      "md": "组合证明（Combinatorial proof）"
    },
    {
      "t": "p",
      "md": "什么是恒等式的 [[combinatorial proof|组合证明]]？它有两类：(i) **双重计数证明（double counting proof）**：用两种不同的方式去数同一批对象的个数；或者 (ii) **双射证明（bijective proof）**：给出两组对象之间的**一一对应**。"
    },
    {
      "t": "p",
      "md": "$C(n,r)=C(n,n-r)$ 的双重计数证明：设 $S$ 是含 $n$ 个元素的集合。"
    },
    {
      "t": "ul",
      "items": [
        "**第一种数法**：由定义，$S$ 的大小为 $r$ 的子集个数就是 $C(n,r)$。",
        "**第二种数法**：对 $S$ 的每一个大小为 $n-r$ 的子集 $A$，其补集 $\\bar{A}$ 都是 $S$ 的一个大小为 $r$ 的子集，且这种对应是一一的；因此 $S$ 的大小为 $r$ 的子集共有 $C(n,n-r)$ 个。",
        "两种数法数的是同一批对象，所以 $C(n,r)=C(n,n-r)$。"
      ]
    },
    {
      "t": "h",
      "md": "二项式定理（The Binomial theorem）"
    },
    {
      "t": "p",
      "md": "设 $x,y$ 为变量，$n$ 为非负整数，则 [[binomial theorem|二项式定理]] 给出：$$(x+y)^n=\\sum_{r=0}^{n}\\binom{n}{r}x^{n-r}y^{r}$$"
    },
    {
      "t": "p",
      "md": "有些恒等式可以利用它来证明。例如代入 $x=1$、$y=1$，就得到 $$2^n=\\sum_{r=0}^{n}\\binom{n}{r}$$"
    },
    {
      "t": "h",
      "md": "帕斯卡恒等式（Pascal's identity）"
    },
    {
      "t": "p",
      "md": "[[Pascal's identity|帕斯卡恒等式]]：$$\\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k}$$ 幻灯片同时给出了 [[Pascal triangle|帕斯卡三角]] 的数表：最上面是 1，然后是 1 1、1 2 1、1 3 3 1、1 4 6 4 1、1 5 10 10 5 1 等，表中每个数都等于它上方两个数之和。"
    },
    {
      "t": "p",
      "md": "**例**：$\\binom{5}{2}=\\binom{4}{1}+\\binom{4}{2}$，即 $10=4+6$。"
    },
    {
      "t": "h",
      "md": "五、可重复的排列（Permutations with repetition）"
    },
    {
      "t": "p",
      "md": "对含 $n$ 个元素的集合，允许重复的 $r$-排列（[[permutation with repetition|可重复排列]]）数目为 $$n^r$$ 幻灯片指出它可以用**乘法法则**证明。"
    },
    {
      "t": "p",
      "md": "**例**：统计用英文字母表中的**小写字母**组成长度为 3 的字符串个数。共有 26 个小写字母，答案 $=26^3=17576$。"
    },
    {
      "t": "h",
      "md": "六、可重复的组合（Combinations with repetition）"
    },
    {
      "t": "p",
      "md": "对含 $n$ 个元素的集合，允许重复的 $r$-组合（[[combination with repetition|可重复组合]]）数目为 $$C(n+r-1,\\ r)$$"
    },
    {
      "t": "p",
      "md": "**例 1**：一家店卖 3 种不同的汉堡，从中选 5 个汉堡，共有多少种组合？答案 $$=C(3+5-1,5)=C(7,5)=\\frac{7!}{5!\\,2!}=\\frac{7\\times6}{2}=21$$"
    },
    {
      "t": "p",
      "md": "**例 2**：求 $t+u+v=5$ 的整数解个数，其中 $t,u,v$ 都是 0 到 5 之间的整数。把 3 种「类型」看作一个含 3 个元素的集合；每个解 $(t,u,v)$ 都对应从这 3 类中一共取 5 件物品、其中第 1 类取 $t$ 件、第 2 类取 $u$ 件、第 3 类取 $v$ 件的取法。答案 $=C(3+5-1,5)=C(7,5)=21$。"
    },
    {
      "t": "h",
      "md": "七、含不可区分对象的排列（Permutations with indistinguishable objects）"
    },
    {
      "t": "p",
      "md": "当同类型的对象**不可区分**（[[indistinguishable objects|不可区分对象]]）时：设对象共有 $k$ 种类型，第 $i$ 种类型有 $n_i$ 个不可区分的对象（总数 $n=n_1+n_2+\\cdots+n_k$），则不同的排列数目为 $$\\frac{n!}{n_1!\\,n_2!\\cdots n_k!}$$"
    },
    {
      "t": "p",
      "md": "**例**：把单词 `access` 的字母重新排列，可以得到多少个不同的字符串？该单词共有 6 个字母：1 个 `a`、2 个 `c`、1 个 `e`、2 个 `s`。答案 $$=\\frac{6!}{1!\\,2!\\,1!\\,2!}=180$$"
    },
    {
      "t": "h",
      "md": "八、算法（Algorithms）"
    },
    {
      "t": "p",
      "md": "幻灯片要求自行查阅（见教材中的）以下两个算法。"
    },
    {
      "t": "ul",
      "items": [
        "**按字典序生成下一个排列的算法**（algorithm for generating the next permutation in lexicographic order），例如依次得到 $123\\to132\\to213\\to231\\to\\cdots$；",
        "**按字典序生成下一个 $r$-组合的算法**（algorithm for generating the next $r$-combination in lexicographic order）。"
      ]
    },
    {
      "t": "note",
      "md": "**本讲小结**：计数基本概念、鸽巢原理、排列与组合、广义的排列与组合。幻灯片最后要求阅读教材的 **第 6 章** 与 **第 8.5 节**。"
    }
  ],
  "terms": [
    [
      "Counting",
      "计数"
    ],
    [
      "Product rule",
      "乘法法则"
    ],
    [
      "Sum rule",
      "加法法则"
    ],
    [
      "Subtraction rule",
      "减法法则"
    ],
    [
      "Inclusion-Exclusion",
      "容斥原理"
    ],
    [
      "Division rule",
      "除法法则"
    ],
    [
      "Tree diagram",
      "树形图"
    ],
    [
      "Pigeonhole principle",
      "鸽巢原理"
    ],
    [
      "Generalized pigeonhole principle",
      "广义鸽巢原理"
    ],
    [
      "Contraposition",
      "逆否命题（证明）"
    ],
    [
      "Permutation",
      "排列"
    ],
    [
      "r-permutation",
      "r-排列"
    ],
    [
      "Combination",
      "组合"
    ],
    [
      "r-combination",
      "r-组合"
    ],
    [
      "Binomial coefficient",
      "二项式系数"
    ],
    [
      "Algebraic proof",
      "代数证明"
    ],
    [
      "Combinatorial proof",
      "组合证明"
    ],
    [
      "Double counting proof",
      "双重计数证明"
    ],
    [
      "Bijective proof",
      "双射证明"
    ],
    [
      "Binomial theorem",
      "二项式定理"
    ],
    [
      "Pascal's identity",
      "帕斯卡恒等式"
    ],
    [
      "Pascal triangle",
      "帕斯卡三角"
    ],
    [
      "Permutation with repetition",
      "可重复排列"
    ],
    [
      "Combination with repetition",
      "可重复组合"
    ],
    [
      "Indistinguishable objects",
      "不可区分对象"
    ]
  ],
  "qids": [
    "cm-5-01",
    "cm-5-02",
    "cm-5-03",
    "cm-5-04",
    "cm-5-05",
    "cm-5-06",
    "cm-5-07"
  ]
});

  /* ---------- L07 第7讲 图论 I：表示法、术语、连通性与遍历 ---------- */
  T.push({
  "no": "L07",
  "title": "第7讲 图论 I：表示法、术语、连通性与遍历",
  "titleEn": "Lecture 7: Graphs I",
  "tags": [
    "Graph",
    "Adjacency List",
    "Adjacency Matrix",
    "Bipartite Graph",
    "Graph Isomorphism",
    "Connectivity",
    "Depth-First Search",
    "Breadth-First Search"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲是 [[COMP2012|离散数学]] 课程的第 7 讲，主题为 **Graphs I**（图论 I），授课教师 **Ken Yiu**，年份 **2025**。本讲先建立图的**表示方法**与**术语体系**，再讨论**图同构**、**连通性**，最后进入**图的遍历**（DFS / BFS）。"
    },
    {
      "t": "h",
      "md": "0. 本讲路线图（Our Roadmap）"
    },
    {
      "t": "p",
      "md": "幻灯片用一张 Roadmap 反复提示本讲的五块内容，并在每一块开始前重复出现（因此本讲结构非常清晰）："
    },
    {
      "t": "ul",
      "items": [
        "**Applications & representations**（应用与表示）",
        "**Graph terminology & special graphs**（图术语与特殊图）",
        "**Graph isomorphism**（图同构）",
        "**Connectivity**（连通性）",
        "**Graph traversal algorithms**（图遍历算法）"
      ]
    },
    {
      "t": "note",
      "md": "每一节标题页之后都会重新出现同一张 Roadmap，并用加粗/高亮标出“当前所在位置”。本讲义按这五块内容展开，共 11 个小节。"
    },
    {
      "t": "h",
      "md": "一、图的应用与表示（Applications & Representations）"
    },
    {
      "t": "h",
      "md": "1.1 图的定义（Graph）"
    },
    {
      "t": "p",
      "md": "一张 [[graph|图]] 记作 $G=(V,E)$，其中："
    },
    {
      "t": "ul",
      "items": [
        "$V$ 是**顶点**（[[vertex|顶点]]，也叫 **node**，结点）的集合；",
        "$E$ 是**边**（[[edge|边]]，也叫 **link**，链路）的集合，每条边是一个**顶点对**（a pair）。"
      ]
    },
    {
      "t": "p",
      "md": "边的记法：本课程用 $(u,v)$ 表示一条边；**教材**（textbook）则用 $\\{u,v\\}$ 的集合记法。"
    },
    {
      "t": "p",
      "md": "规模记号：$|V|$ 表示 $V$ 的大小（顶点数），$|E|$ 表示 $E$ 的大小（边数）。有时也写成 **$G.V$** 和 **$G.E$**（把顶点集与边集当作 $G$ 的属性来访问）。"
    },
    {
      "t": "p",
      "md": "视具体应用而定，顶点与边还可以带有**附加属性**（additional attributes）。"
    },
    {
      "t": "p",
      "md": "幻灯片给出的例子：$V=\\{1,2,3,4\\}$，$E=\\{(1,2),(2,3),(3,4),(2,4)\\}$。"
    },
    {
      "t": "h",
      "md": "1.2 图的应用（Applications of Graph）"
    },
    {
      "t": "tbl",
      "head": [
        "领域",
        "例子"
      ],
      "rows": [
        [
          "**Transportation**（交通）",
          "道路网络（road networks）、航空网络（airline networks）"
        ],
        [
          "**Science**（科学）",
          "分子结构（molecule structure）、蛋白质相互作用图（protein interaction graphs）"
        ],
        [
          "**Communication and information**（通信与信息）",
          "计算机网络（computer networks）、调用图（call graphs）、Web 图（The Web graph）、引用图（citation graphs）"
        ],
        [
          "**Social networks**（社交网络）",
          "好友关系图（friendship graphs）、合作关系图（collaboration graphs）"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.3 邻接表（Adjacency List）"
    },
    {
      "t": "p",
      "md": "[[Adjacency list|邻接表]] 是一种图的**数据结构**（graph data structure）：它是一个数组 `Adj`，共含 $|V|$ 个列表。顶点 $u$ 的邻接表定义为"
    },
    {
      "t": "p",
      "md": "$$Adj[u]=\\{v:(u,v)\\in E\\}$$"
    },
    {
      "t": "ul",
      "items": [
        "$Adj[u]$ 中包含**每一个与 $u$ 相邻**的顶点 $v$（each vertex $v$ adjacent to $u$）；",
        "**存储空间**：$O(|V|+|E|)$；",
        "适用于表示**稀疏图**（[[sparse graph|稀疏图]]），即 $|E|$ 远小于 $|V|^2$ 的情形。"
      ]
    },
    {
      "t": "h",
      "md": "1.4 邻接矩阵（Adjacency Matrix）"
    },
    {
      "t": "p",
      "md": "[[Adjacency matrix|邻接矩阵]] 也是一种图的**数据结构**：它是一个大小为 $|V|\\times|V|$ 的矩阵 $A$，其中"
    },
    {
      "t": "p",
      "md": "$$a_{i,j}=\\begin{cases}1,& (i,j)\\in E\\\\ 0,& \\text{otherwise}\\end{cases}$$"
    },
    {
      "t": "ul",
      "items": [
        "**存储空间**：$O(|V|^2)$；",
        "适用于表示**稠密图**（[[dense graph|稠密图]]），即 $|E|$ 接近 $|V|^2$ 的情形。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "表示法",
        "存储空间",
        "适用场景"
      ],
      "rows": [
        [
          "邻接表 `Adj`",
          "$O(|V|+|E|)$",
          "稀疏图（$|E|\\ll|V|^2$）"
        ],
        [
          "邻接矩阵 $A$",
          "$O(|V|^2)$",
          "稠密图（$|E|$ 接近 $|V|^2$）"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.5 边的方向（Edge Direction）"
    },
    {
      "t": "ul",
      "items": [
        "**[[Directed graph|有向图]]**：每条边 $(u,v)$ 是一支从 $u$ 指向 $v$ 的**箭头**（arrow from $u$ to $v$）。",
        "**[[Undirected graph|无向图]]**：每条边 $(u,v)$ 是一条**线**（line），且 $(u,v)$ 与 $(v,u)$ **都在** $E$ 中。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片提出的问题：**如何把无向图存进 (i) 邻接表、(ii) 邻接矩阵？**"
    },
    {
      "t": "ul",
      "items": [
        "**(i) 邻接表**：若 $(u,v)\\in E$，则把 $v$ 加入 $Adj[u]$，**同时**把 $u$ 加入 $Adj[v]$（每条无向边在表中出现两次）。",
        "**(ii) 邻接矩阵**：令 $a_{u,v}=1$ 且 $a_{v,u}=1$，即矩阵关于主对角线**对称**。"
      ]
    },
    {
      "t": "note",
      "md": "有向图只在 $u$ 的表中记录 $v$（矩阵只置 $a_{u,v}=1$）；无向图必须**双向**记录。这是两者的核心差别。"
    },
    {
      "t": "h",
      "md": "1.6 边的权（Edge Weight）"
    },
    {
      "t": "p",
      "md": "**[[Weighted graph|加权图]]**：每条边 $(u,v)$ 带有一个**权值**（weight）$w(u,v)$，权值表示这条边的**长度**（length）。"
    },
    {
      "t": "p",
      "md": "幻灯片提出的问题：**如何存储边权？**"
    },
    {
      "t": "ul",
      "items": [
        "**邻接表**：把邻接表中的每个顶点项扩成二元组，记录顶点**及其**边权，例如 $v$ 处存 $(v,\\,w(u,v))$；",
        "**邻接矩阵**：把矩阵元素由 $0/1$ 改为权值，即 $a_{u,v}=w(u,v)$（不存在边时取 $0$ 或 $\\infty$）。",
        "（另一种常见做法是**边表**：每条记录形如 $(u,v,w(u,v))$，空间 $O(|E|)$。）"
      ]
    },
    {
      "t": "h",
      "md": "1.7 自环与多重边（Loops and Multi-edges）"
    },
    {
      "t": "ul",
      "items": [
        "**[[Loop|自环]]**：一条把顶点**连到自身**的边。",
        "**[[Multiple edges|多重边]]**：连接**同一对顶点**的多条边。"
      ]
    },
    {
      "t": "note",
      "md": "在**后面的幻灯片中，只考虑既没有自环也没有多重边的图**。"
    },
    {
      "t": "ul",
      "items": [
        "**[[Simple graph|简单图]]**：无向、无多重边、无自环。",
        "**[[Simple directed graph|简单有向图]]**：有向、无多重边、无自环。"
      ]
    },
    {
      "t": "h",
      "md": "二、无向图的术语（Terminology for an Undirected Graph）"
    },
    {
      "t": "ul",
      "items": [
        "两个顶点 $u$ 与 $v$ 若是一条边的两个**端点**（endpoints），则称它们**相邻**（[[adjacent|相邻]]，或称 **neighbors**，邻居）。",
        "顶点 $v$ 的**邻域**（[[neighborhood|邻域]]）记作 $N(v)$，是 $v$ 的所有邻居组成的集合。",
        "顶点 $v$ 的**度**（[[degree|度]]）记作 $\\deg(v)$，是**与它相连的边数**。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片给出三个练习式提问：顶点 $1$ 与哪个顶点相邻？顶点 $2$ 的邻域 $N(2)$ 是什么？顶点 $3$ 的度是多少？（对照 1.1 的例子 $V=\\{1,2,3,4\\}$、$E=\\{(1,2),(2,3),(3,4),(2,4)\\}$ 即可作答。）"
    },
    {
      "t": "h",
      "md": "2.1 无向图的两个定理（含握手定理）"
    },
    {
      "t": "p",
      "md": "设 $G=(V,E)$ 是一张无向图。"
    },
    {
      "t": "p",
      "md": "**定理 1（[[Handshaking Lemma|握手定理]]）**"
    },
    {
      "t": "p",
      "md": "$$\\sum_{v\\in V}\\deg(v)=2|E|$$"
    },
    {
      "t": "p",
      "md": "**定理 2**：$G$ 中**奇数度顶点**的个数是**偶数**。"
    },
    {
      "t": "p",
      "md": "幻灯片说明：**这两个定理的证明可在教材中找到**；教材把 $E$ 中的边存为 $\\{u,v\\}$。"
    },
    {
      "t": "p",
      "md": "幻灯片给出的检验例子：$\\deg(1)=1$，$\\deg(2)=3$，$\\deg(3)=2$；于是 $\\sum_{v\\in V}\\deg(v)=8$，而 $2|E|=8$，两者相等；奇度顶点个数 $=2$（为偶数）。"
    },
    {
      "t": "tbl",
      "head": [
        "顶点 $v$",
        "$\\deg(v)$"
      ],
      "rows": [
        [
          "1",
          "1（奇）"
        ],
        [
          "2",
          "3（奇）"
        ],
        [
          "3",
          "2（偶）"
        ],
        [
          "4",
          "2（偶）"
        ],
        [
          "合计",
          "$\\sum\\deg(v)=8=2|E|$，$|E|=4$"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "定理 1 中的常数是 **$2|E|$**，不是 $|E|$：每一条边在数度时被它的两个端点**各数一次**。因此 $\\sum_v \\deg(v)$ 必为**偶数**，这正是定理 2 的来源：奇度顶点必须成对出现。"
    },
    {
      "t": "h",
      "md": "三、有向图的术语（Terminology for a Directed Graph）"
    },
    {
      "t": "p",
      "md": "考虑有向图中的一条边 $(u,v)$："
    },
    {
      "t": "ul",
      "items": [
        "$u$ 称为**始点**（[[initial vertex|始点]]），$v$ 称为**终点**（[[end vertex|终点]]）；",
        "$u$ **邻接到** $v$（$u$ is adjacent **to** $v$）；",
        "$v$ **邻接自** $u$（$v$ is adjacent **from** $u$）。"
      ]
    },
    {
      "t": "p",
      "md": "**度**分为两种："
    },
    {
      "t": "ul",
      "items": [
        "顶点 $v$ 的**入度**（[[in-degree|入度]]）记作 $\\deg^{-}(v)$，是以 $v$ 为**终点**的边数；",
        "顶点 $v$ 的**出度**（[[out-degree|出度]]）记作 $\\deg^{+}(v)$，是以 $v$ 为**始点**的边数。"
      ]
    },
    {
      "t": "p",
      "md": "与无向图对应的恒等式（每条边贡献一个出度与一个入度）："
    },
    {
      "t": "p",
      "md": "$$\\sum_{v\\in V}\\deg^{-}(v)=\\sum_{v\\in V}\\deg^{+}(v)=|E|$$"
    },
    {
      "t": "p",
      "md": "幻灯片给出的例子：$\\deg^{-}(4)=2$，$\\deg^{+}(4)=0$（顶点 4 只作为两条边的终点，不作为任何边的始点）。"
    },
    {
      "t": "warn",
      "md": "有向图中**不能**套用无向图的 $\\sum\\deg(v)=2|E|$：必须区分入度与出度。另外注意“$u$ adjacent to $v$”与“$v$ adjacent from $u$”方向相反，考试中容易读错。"
    },
    {
      "t": "h",
      "md": "四、子图与顶点/边的增删（Subgraph；Add/Remove Vertices/Edges）"
    },
    {
      "t": "h",
      "md": "4.1 子图（Subgraph）"
    },
    {
      "t": "p",
      "md": "图 $G'=(V',E')$ 称为 $G=(V,E)$ 的**[[subgraph|子图]]**，若"
    },
    {
      "t": "p",
      "md": "$$V'\\subseteq V\\quad\\text{且}\\quad E'\\subseteq E$$"
    },
    {
      "t": "p",
      "md": "幻灯片例子：图中 $H$ 是 $G$ 的一个子图（$H$ 的顶点集与边集都取自 $G$）。"
    },
    {
      "t": "warn",
      "md": "子图必须**同时**满足两边包含关系：只取一部分顶点、却保留涉及被删顶点的边，不构成子图（边的两个端点必须仍在顶点集中）。"
    },
    {
      "t": "h",
      "md": "4.2 增删顶点与边（Add/Remove Vertices/Edges）"
    },
    {
      "t": "p",
      "md": "设 $G=(V,E)$ 是给定的图。当对 $G$ 做增删顶点/边的操作时，图模型（顶点集与边集）应如何更新？幻灯片用一张表回答："
    },
    {
      "t": "tbl",
      "head": [
        "操作（Operation）",
        "得到的顶点集（Resulting vertex set）",
        "得到的边集（Resulting edge set）"
      ],
      "rows": [
        [
          "**Add an edge** $e$",
          "$V$（不变）",
          "$E\\cup\\{e\\}$"
        ],
        [
          "**Remove an edge** $e$",
          "$V$（不变）",
          "$E-\\{e\\}$"
        ],
        [
          "**Add a vertex** $v$",
          "$V\\cup\\{v\\}$",
          "$E$（不变）"
        ],
        [
          "**Remove a vertex** $v$",
          "$V-\\{v\\}$",
          "从 $E$ 中删除**所有与 $v$ 关联**的边"
        ]
      ]
    },
    {
      "t": "note",
      "md": "结论：增删**边**只改边集；增删**顶点**时，删点必须连带删掉它的所有关联边（the set of edges that do not involve $v$ remain）。"
    },
    {
      "t": "h",
      "md": "五、几类特殊图（Special Types of Graphs）"
    },
    {
      "t": "ul",
      "items": [
        "**[[Complete graph|完全图]]**：每一对（不同的）顶点之间**恰好有一条边**。",
        "**[[Cycle|环图]]**：设顶点为 $1,2,\\dots,n$，边为 $(1,2),(2,3),\\dots,(n-1,n),(n,1)$。",
        "**[[d-dimensional cube|d 维立方体]]**（d-dimensional cubes）：它有 $2^d$ 个顶点，每个顶点对应一个**唯一的长度 $d$ 的比特串**（bit string）；两个顶点之间有边**当且仅当它们的比特串只相差一位**。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "特殊图",
        "顶点数",
        "每个顶点的度",
        "边数"
      ],
      "rows": [
        [
          "完全图（$n$ 个顶点）",
          "$n$",
          "$n-1$",
          "$\\dfrac{n(n-1)}{2}$"
        ],
        [
          "环图 $C_n$",
          "$n$",
          "$2$",
          "$n$"
        ],
        [
          "$d$ 维立方体",
          "$2^d$",
          "$d$",
          "$d\\cdot 2^{d-1}$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "5.1 二分图（Bipartite Graphs）"
    },
    {
      "t": "p",
      "md": "**什么是二分图？**"
    },
    {
      "t": "ul",
      "items": [
        "它是**简单图**（simple graph）；并且",
        "其顶点集 $V$ 可以划分为**两个不相交的集合** $V_1$ 与 $V_2$，使得图中**每一条边**都连接 $V_1$ 中的一个顶点与 $V_2$ 中的一个顶点。"
      ]
    },
    {
      "t": "p",
      "md": "**定理**：一个简单图是二分图，**当且仅当**它是 **2-可着色**的（2-colorable）——即可以把两种颜色之一分配给每个顶点，使得**没有两个相邻顶点同色**。"
    },
    {
      "t": "tbl",
      "head": [
        "条件",
        "等价说法"
      ],
      "rows": [
        [
          "$V=V_1\\cup V_2$，$V_1\\cap V_2=\\varnothing$，每条边跨 $V_1$-$V_2$",
          "该简单图是二分图"
        ],
        [
          "每个顶点可染两色之一，相邻顶点不同色",
          "该简单图是 2-可着色的（与上一行等价）"
        ]
      ]
    },
    {
      "t": "h",
      "md": "5.2 【练习】二分图（[Exercise] Bipartite Graph）"
    },
    {
      "t": "p",
      "md": "幻灯片给出一组图，要求对每个图："
    },
    {
      "t": "ul",
      "items": [
        "判断它是否为二分图（check whether it is a bipartite graph）；",
        "若它是二分图，说明**如何给每个顶点着色**。"
      ]
    },
    {
      "t": "note",
      "md": "做题方法（依据本讲定理）：任选一个顶点染成颜色 A，把它所有邻居染成颜色 B，再把颜色 B 顶点的邻居染成颜色 A，逐层推进；若出现**必须同色却相邻**的矛盾，则该图不是二分图。"
    },
    {
      "t": "h",
      "md": "5.3 特殊图的应用（Applications of Special Types of Graphs）"
    },
    {
      "t": "tbl",
      "head": [
        "应用",
        "用到的图类型"
      ],
      "rows": [
        [
          "**Job assignments**（任务分配）",
          "二分图（bipartite graph）"
        ],
        [
          "**Local area networks**（局域网）",
          "环形拓扑（ring topology）→ 环图（cycle）；星形拓扑（star topology）→ 二分图"
        ],
        [
          "**Peer-to-peer network**（对等网络）",
          "完全图（complete graph）"
        ],
        [
          "**Gray codes**（格雷码）",
          "$d$ 维立方体（d-dimensional cubes）"
        ]
      ]
    },
    {
      "t": "h",
      "md": "六、图同构（Graph Isomorphism）"
    },
    {
      "t": "p",
      "md": "起始问题：两张图是否具有**相同的“结构”**？这个概念应如何定义？"
    },
    {
      "t": "h",
      "md": "6.1 定义（Definition）"
    },
    {
      "t": "p",
      "md": "两张图 $G_1=(V_1,E_1)$ 与 $G_2=(V_2,E_2)$ 称为**同构**（[[isomorphic|同构]]），若存在一个**一一到上**的函数 $F:V_1\\to V_2$，使得"
    },
    {
      "t": "p",
      "md": "$$a\\text{ 与 }b\\text{ 在 }G_1\\text{ 中相邻}\\iff F(a)\\text{ 与 }F(b)\\text{ 在 }G_2\\text{ 中相邻}$$"
    },
    {
      "t": "ul",
      "items": [
        "一般来说，**判定两张图是否同构是困难的**（hard）；",
        "当两张图各有 $n$ 个顶点时，需要考虑 $n!$ 个可能的**一一函数**；",
        "对于**小的图或特殊情形**，我们可以**手工计算**这个问题。"
      ]
    },
    {
      "t": "h",
      "md": "6.2 例 1：证明两张图同构（Example 1）"
    },
    {
      "t": "p",
      "md": "给定 $G=(V,E)$ 与 $G'=(V',E')$，定义一个函数 $F$，例如"
    },
    {
      "t": "p",
      "md": "$$F(a)=u,\\quad F(b)=t,\\quad F(c)=s,\\quad F(d)=\\dots$$"
    },
    {
      "t": "p",
      "md": "然后**逐条核对** $G$ 中的每条边，其像仍是 $G'$ 中的边："
    },
    {
      "t": "ul",
      "items": [
        "$(a,b)$ 是 $G$ 中的边，则 $(F(a),F(b))$ 是 $G'$ 中的边；",
        "$(a,c)$ 是 $G$ 中的边，则 $(F(a),F(c))$ 是 $G'$ 中的边；",
        "$(c,d)$ 是 $G$ 中的边，则 $(F(c),F(d))$ 是 $G'$ 中的边；",
        "$(b,d)$ 是 $G$ 中的边，则 $(F(b),F(d))$ 是 $G'$ 中的边。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片最后指出：$G$ 与 $G'$ **都有 4 条边**，因此 $G$ 与 $G'$ 同构。"
    },
    {
      "t": "h",
      "md": "6.3 例 1 的另一解法：比较邻接矩阵"
    },
    {
      "t": "p",
      "md": "**另一种解法**：检查两张图是否具有**相同的邻接矩阵**（在适当重排顶点之后）。幻灯片给出 $4\\times4$ 的 $0/1$ 矩阵（行、列分别为顶点 $a,b,c,d$ 与 $s,t,u,\\dots$），逐项比对即可确认同构。"
    },
    {
      "t": "note",
      "md": "用邻接矩阵判断同构的本质：同构 $\\iff$ 存在顶点的一个重排，使两张图的邻接矩阵**完全相同**。"
    },
    {
      "t": "h",
      "md": "6.4 判断“不同构”的三条充分理由（Example 2）"
    },
    {
      "t": "p",
      "md": "若满足下列任一条件，则 $G$ 与 $G'$ **不可能**同构："
    },
    {
      "t": "ul",
      "items": [
        "它们的**顶点数不同**；或",
        "它们的**边数不同**；或",
        "两张图中的**度不对应**（$G$ 中各顶点的度无法与 $G'$ 中各顶点的度一一配对）。"
      ]
    },
    {
      "t": "p",
      "md": "**例 2：证明 $G$ 与 $G'$ 不同构。**"
    },
    {
      "t": "ul",
      "items": [
        "$G'$ 有一个度为 $1$ 的顶点（即 $s$）；",
        "而 $G$ **没有任何度为 $1$ 的顶点**；",
        "因此 $G$ 与 $G'$ 不同构。"
      ]
    },
    {
      "t": "warn",
      "md": "这三点只是**必要条件的检验**：它们能快速否定同构，但全部满足**并不能**证明同构。要证明同构仍须按 6.1 构造出 $F$（或比对邻接矩阵）。"
    },
    {
      "t": "h",
      "md": "七、路径（Paths）"
    },
    {
      "t": "p",
      "md": "图 $G$ 中的一条**路径**（[[path|路径]]）是 $G$ 中 $n$ 条边的序列"
    },
    {
      "t": "p",
      "md": "$$(x_0,x_1),\\;(x_1,x_2),\\;\\dots,\\;(x_{n-1},x_n)$$"
    },
    {
      "t": "ul",
      "items": [
        "$n$ 称为这条路径的**长度**（length）；",
        "它是一条**从顶点 $x_0$ 到顶点 $x_n$** 的路径；",
        "若 $x_0=x_n$，则称这条路径为一个**圈**（[[cycle|圈]]）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片例子：一条从 $a$ 到 $g$ 的路径是 $(a,d),(d,e),(e,g)$；一个圈是 $(a,d),(d,e),(e,b),(b,a)$。"
    },
    {
      "t": "note",
      "md": "路径定义要求**首尾相接**：第 $i$ 条边的终点必须等于第 $i+1$ 条边的起点。"
    },
    {
      "t": "warn",
      "md": "术语“**cycle（圈）**”在本讲中同时用于“环图 $C_n$”与“闭合路径”，注意结合上下文区分：作为特殊图时指 $C_n$，作为路径性质时指 $x_0=x_n$ 的闭合路径。"
    },
    {
      "t": "h",
      "md": "八、连通图与连通分量（Connected Graph & Connected Components）"
    },
    {
      "t": "p",
      "md": "一张图称为**连通的**（[[connected|连通的]]），若**每一对顶点之间都存在一条路径**。"
    },
    {
      "t": "ul",
      "items": [
        "幻灯片例子：$G$ 是连通的；$H$ 是不连通的（disconnected）。"
      ]
    },
    {
      "t": "p",
      "md": "**连通分量**（[[connected component|连通分量]]）是 $G$ 的一个**极大连通子图**（maximal connected subgraph）："
    },
    {
      "t": "ul",
      "items": [
        "所谓极大，即它**不是** $G$ 的任何其他连通子图的子图（it is not a subgraph of any other connected subgraph of $G$）。",
        "幻灯片例子：在图中 $H$ 里，连通分量是 $H_1$ 与 $H_2$。"
      ]
    },
    {
      "t": "warn",
      "md": "“极大”（maximal）不等于“最大”（maximum）：连通分量按**包含关系**不能再扩大即可，而不是要求顶点数最多。"
    },
    {
      "t": "h",
      "md": "九、割点、割边与顶点连通度（Cut Vertices and Edges；Vertex Connectivity）"
    },
    {
      "t": "ul",
      "items": [
        "顶点 $v$ 称为**割点**（[[cut vertex|割点]]），边 $e$ 称为**割边**（[[cut edge|割边]]），若把它们从一张**连通图**中移去后，图变得**不连通**。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片例子：在图 $G$ 中，$d$ 是一个割点，$(d,e)$ 是一条割边。"
    },
    {
      "t": "h",
      "md": "9.1 顶点割与顶点连通度（Vertex Connectivity）"
    },
    {
      "t": "ul",
      "items": [
        "顶点集 $V$ 的一个子集 $V'$ 称为**顶点割**（vertex cut），若把它从一张连通图中移去后，图变得不连通。",
        "图 $G$ 的**顶点连通度**（[[vertex connectivity|顶点连通度]]）是 $G$ 的顶点割的**最小大小**（minimum size）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片例子：$\\{a\\},\\{b\\},\\{c\\},\\{d\\},\\{e\\}$ **不是** $G$ 的顶点割（去掉单个顶点后图仍连通）；"
    },
    {
      "t": "ul",
      "items": [
        "$\\{a,b\\}$ 是 $G$ 的一个顶点割；",
        "$\\{a,b,c\\}$ **也是** $G$ 的一个顶点割；",
        "因此 $G$ 的**顶点连通度 $=2$**。"
      ]
    },
    {
      "t": "warn",
      "md": "顶点连通度取的是**最小**顶点割的大小：既然存在大小为 2 的顶点割、而单个顶点都不是顶点割，所以连通度为 $2$；像 $\\{a,b,c\\}$ 这样的更大割集不改变这个最小值。"
    },
    {
      "t": "h",
      "md": "十、图的遍历（Graph Traversal）"
    },
    {
      "t": "p",
      "md": "**图遍历**（[[graph traversal|图遍历]]）的一般设定："
    },
    {
      "t": "ul",
      "items": [
        "从**源顶点** $s$（source vertex）出发；",
        "按某种次序**访问图中的所有顶点**；",
        "作为副产品产生一棵**搜索树**（search tree）。"
      ]
    },
    {
      "t": "p",
      "md": "本讲给出的两种遍历算法：**深度优先搜索**与**广度优先搜索**；两者"
    },
    {
      "t": "p",
      "md": "$$\\text{Time complexity}=O(|V|+|E|)$$"
    },
    {
      "t": "h",
      "md": "10.1 深度优先搜索（Depth-First Search, DFS）"
    },
    {
      "t": "p",
      "md": "**[[Depth-first search|深度优先搜索]]（DFS）**：给定图 $G=(V,E)$ 中的源顶点 $s$，只要可能就优先访问图中**更深**的顶点（visit a vertex “deeper” in the graph whenever possible）。它在隐式地构造一棵**深度优先树**（depth-first tree）："
    },
    {
      "t": "ul",
      "items": [
        "$s$ 是**根**（root）；",
        "`u.p` 是 $u$ 的**父结点**（parent）；",
        "`u.depth` 是 $u$ 的**树深度**（tree depth）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片例子：源点取 $s=1$。"
    },
    {
      "t": "code",
      "lang": "python",
      "code": "DFS-Main(G, s)\n1  for each vertex u in G.V\n2      u.depth = infinity\n3      u.p = NIL\n4  s.depth = 0\n5  DFS(G, s)\n\nDFS(G, u)\n1  for each v in G.Adj[u]\n2      if v.depth == infinity\n3          v.depth = u.depth + 1\n4          v.p = u\n5          DFS(G, v)"
    },
    {
      "t": "p",
      "md": "**算法思想（Idea of the algorithm）：**"
    },
    {
      "t": "ul",
      "items": [
        "每个顶点 $u$ 有两个属性：`u.p`（$u$ 的父结点）与 `u.depth`（$u$ 的深度）；",
        "**未被访问**（unseen）的顶点其 `depth` 为 $\\infty$；",
        "用**递归**实现：$v$ 是 $u$ 的一个相邻顶点；",
        "**基本情况**（base case）：相邻顶点 $v$ 的 `depth` $\\ne\\infty$，说明 $v$ 已被访问过，不再深入；",
        "**递归情况**（recursive case）：把相邻顶点 $v$ 的 `depth` 更新为 `u.depth + 1`、其父设为 $u$，然后递归调用 `DFS(G, v)`。"
      ]
    },
    {
      "t": "h",
      "md": "10.2 DFS 执行示例（Example: DFS(G, 1)）"
    },
    {
      "t": "p",
      "md": "给定源顶点 $s=1$，幻灯片用 7 个步骤逐步演示 DFS（图中以**浅色/加粗**标出本轮更新过的项），并不断提问“下一个被考察的顶点是哪一个？”"
    },
    {
      "t": "ul",
      "items": [
        "**[Step 1–2]** `DFS(G, 1)`，`depth = 0`；随后由 $1$ 走向相邻顶点，`DFS(G, 1) → DFS(G, 2)`。",
        "**[Step 3–4]** 继续深入：`DFS(G, 2) → DFS(G, 3) → DFS(G, 4)`，深度依次增加（如 `depth = 2`、`depth = 3`）；到达不能再深入的顶点后，**回溯**（backtrack）到顶点 3、再到顶点 2。",
        "**[Step 5–6]** 回溯后继续探索未访问的邻居：`DFS(G, 6)`（`depth = 2`）→ `DFS(G, 5)`（`depth = 3`）。",
        "**[Step 7]** 继续处理剩余未访问顶点（如 `DFS(G, 7)`，`depth = 3`），最终所有顶点都被访问。"
      ]
    },
    {
      "t": "note",
      "md": "DFS 的关键动作是 **“能深就深，走不动就回溯”**：`depth` 只在**首次**发现顶点时赋值一次（此后不再修改），回溯时不会修改 `depth`。"
    },
    {
      "t": "h",
      "md": "10.3 广度优先搜索（Breadth-First Search, BFS）"
    },
    {
      "t": "p",
      "md": "**[[Breadth-first search|广度优先搜索]]（BFS）**：给定图 $G=(V,E)$ 中的源顶点 $s$，在访问任何**离 $s$ 较远**的顶点之前，先访问所有**离 $s$ 较近**的顶点（visit all vertices closer to $s$ before any vertex farther）。它在隐式地构造一棵**广度优先树**（breadth-first tree）："
    },
    {
      "t": "ul",
      "items": [
        "$s$ 是**根**（root）；",
        "`u.p` 是 $u$ 的**父结点**；",
        "`u.d` 是**从 $s$ 到 $u$ 的“距离”**：即从 $s$ 到 $u$ 的任意路径上**边的最少条数**（the number of edges on any path）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片例子：源点取 $s=1$。"
    },
    {
      "t": "h",
      "md": "10.4 数据结构：队列（Data Structure: Queue）"
    },
    {
      "t": "p",
      "md": "BFS 算法中要使用一个**队列**（[[queue|队列]]）："
    },
    {
      "t": "ul",
      "items": [
        "具有**先进先出**（First In, First Out，[[FIFO|先进先出]]）性质；",
        "可以用**链表**（linked list）或**数组**（array）实现；",
        "两个操作：`EnQueue(S, x)` 需 $O(1)$ 时间；`DeQueue(S)` 需 $O(1)$ 时间。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片用 `head` 指针示意队列的头部与尾部，并给出队列中结点的图形表示。"
    },
    {
      "t": "h",
      "md": "10.5 BFS 算法（BFS Algorithm）"
    },
    {
      "t": "code",
      "lang": "python",
      "code": "BFS(G, s)\n1  for each vertex u in G.V - {s}\n2      u.d = infinity ; u.p = NIL\n3  s.d = 0 ; s.p = NIL\n4  Q = create a FIFO queue\n5  ENQUEUE(Q, s)\n6  while Q != empty\n7      u = DEQUEUE(Q)\n8      for each v in G.Adj[u]\n9          if v.d == infinity\n10             v.d = u.d + 1\n11             v.p = u\n12             ENQUEUE(Q, v)"
    },
    {
      "t": "p",
      "md": "**算法思想（Idea of the algorithm）：**"
    },
    {
      "t": "ul",
      "items": [
        "每个顶点 $u$ 有两个属性：`u.p`（$u$ 的父结点）与 `u.d`（$u$ 到源点的“距离”）；",
        "**未被访问**的顶点其 `d` 为 $\\infty$；",
        "用一个**先进先出（FIFO）**的队列来管理顶点；",
        "每个顶点 $u$ 出队时，它已经**具有有限距离**；",
        "任何**未被访问**的相邻顶点 $v$ 都获得距离 `u.d + 1`；",
        "**性质**：队列中元素的距离是**递增排列**的（distances of entries are in ascending order）。"
      ]
    },
    {
      "t": "note",
      "md": "BFS 与 DFS 的结构几乎相同，唯一区别是：DFS 用**递归/栈**深入，BFS 用**队列**按层扩展，因此 `u.d` 表示的是**最短边数**（在无权图中即最短路径长度）。"
    },
    {
      "t": "h",
      "md": "10.6 BFS 执行示例（Example: BFS(G, 1)）"
    },
    {
      "t": "p",
      "md": "给定源顶点 $s=1$（`d = 0`），幻灯片按迭代逐步给出**队列内容**；图中**浅灰**表示仍在队列中的顶点，**深灰**表示已出队的顶点。"
    },
    {
      "t": "tbl",
      "head": [
        "阶段",
        "队列 $Q$（顶点 : $d$）"
      ],
      "rows": [
        [
          "[Beginning]",
          "$(1:0)$"
        ],
        [
          "[Iteration 1]",
          "$(2:1)$"
        ],
        [
          "[Iteration 2]",
          "$(7:1),(3:2),(6:2)$"
        ],
        [
          "[Iteration 3]",
          "$(3:2),(6:2)$"
        ],
        [
          "[Iteration 4]",
          "$(6:2),(4:3)$"
        ],
        [
          "[Iteration 5]",
          "$(4:3)$"
        ],
        [
          "[Iteration 6]",
          "$(5:3)$"
        ],
        [
          "[最终]",
          "$Q=\\varnothing$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "由示例可见 `d` 值沿队列**单调不减**（$0,1,1,2,2,\\dots$），正是 10.5 中“队列元素的距离递增”这一性质的具体体现。"
    },
    {
      "t": "h",
      "md": "10.7 图遍历的应用（Applications of Graph Traversal）"
    },
    {
      "t": "p",
      "md": "BFS/DFS 可用于解决下列问题："
    },
    {
      "t": "ul",
      "items": [
        "**(I)** 判定能否从某个顶点**到达**顶点 $t$（decide whether we can reach a vertex $t$）；",
        "**(II)** 找出充当**桥**（bridge，即连接不同部分的边）的边（find an edge that serves as a bridge）；",
        "**(III)** 检查一张图**是否为二分图**：把顶点划分成两部分，使得**同一部分内部没有边**（partition the vertices into two parts such that there are no edges among vertices with the same “part”）。"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片配图给出一个 bridge（桥）的示意。"
    },
    {
      "t": "note",
      "md": "应用 (III) 与第 5.1 节的二分图定理直接呼应：**BFS/DFS 的分层着色**（按距离奇偶染色）正是 2-可着色性的判定方法。"
    },
    {
      "t": "h",
      "md": "十一、本讲小结（Summary）"
    },
    {
      "t": "ul",
      "items": [
        "**Applications & representations of graphs**（图的应用与表示）",
        "**Graph terminology & special graphs**（图术语与特殊图）",
        "**Graph isomorphism**（图同构）",
        "**Connectivity**（连通性）"
      ]
    },
    {
      "t": "p",
      "md": "幻灯片最后给出阅读要求：**Please read Chapters 10.1–10.4 in the textbook.**（请阅读教材第 10.1–10.4 章。）"
    }
  ],
  "terms": [
    [
      "graph",
      "图"
    ],
    [
      "vertex",
      "顶点"
    ],
    [
      "edge",
      "边"
    ],
    [
      "adjacency list",
      "邻接表"
    ],
    [
      "adjacency matrix",
      "邻接矩阵"
    ],
    [
      "sparse graph",
      "稀疏图"
    ],
    [
      "dense graph",
      "稠密图"
    ],
    [
      "directed graph",
      "有向图"
    ],
    [
      "undirected graph",
      "无向图"
    ],
    [
      "weighted graph",
      "加权图"
    ],
    [
      "loop",
      "自环"
    ],
    [
      "multiple edges",
      "多重边"
    ],
    [
      "simple graph",
      "简单图"
    ],
    [
      "simple directed graph",
      "简单有向图"
    ],
    [
      "adjacent",
      "相邻"
    ],
    [
      "neighborhood",
      "邻域"
    ],
    [
      "degree",
      "度"
    ],
    [
      "initial vertex",
      "始点"
    ],
    [
      "end vertex",
      "终点"
    ],
    [
      "in-degree",
      "入度"
    ],
    [
      "out-degree",
      "出度"
    ],
    [
      "vertex connectivity",
      "顶点连通度"
    ],
    [
      "depth-first search",
      "深度优先搜索"
    ],
    [
      "breadth-first search",
      "广度优先搜索"
    ]
  ],
  "qids": [
    "cm-6-01",
    "cm-6-02",
    "cm-6-03",
    "cm-6-04",
    "cm-7-01",
    "cm-7-02",
    "cm-7-03",
    "cm-7-04",
    "cm-13-01",
    "cm-12-04",
    "cp-3"
  ]
});

  /* ---------- L08 第8讲 图论 II：欧拉、哈密顿、最短路、平面图与着色 ---------- */
  T.push({
  "no": "L08",
  "title": "第8讲 图论 II：欧拉、哈密顿、最短路、平面图与着色",
  "titleEn": "Lecture 8: Graphs II",
  "tags": [
    "Euler circuit",
    "Euler path",
    "Hamilton circuit",
    "shortest path",
    "Dijkstra",
    "min-heap",
    "planar graph",
    "Euler's formula",
    "graph coloring",
    "four color theorem"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "一、Our Roadmap（本讲路线图）"
    },
    {
      "t": "note",
      "md": "本讲（Graphs II，图论 II）按 PPT 路线图包含五个主题：[[Euler and Hamilton paths|欧拉路径与哈密顿路径]]、The shortest path problem（最短路问题）、[[Dijkstra's algorithm|Dijkstra 算法]]、[[planar graph|平面图]]、[[graph coloring|图着色]]。"
    },
    {
      "t": "ul",
      "items": [
        "- Euler and Hamilton paths\n- The shortest path problem\n- Dijkstra's algorithm\n- Planar graphs\n- Graph coloring"
      ]
    },
    {
      "t": "p",
      "md": "这里把「The shortest path problem」与「Dijkstra's algorithm」并列，说明本讲把问题本身和求解它的贪心算法分开来讲。"
    },
    {
      "t": "h",
      "md": "二、Euler Paths and Circuits（欧拉路径与欧拉回路）"
    },
    {
      "t": "p",
      "md": "一个 [[Euler circuit|欧拉回路]] 是一条 [[simple circuit|简单回路]]，它**包含图中每一条边**；并且 PPT 强调它从某个顶点出发、最后回到该顶点（it begins and ends at the same vertex）。"
    },
    {
      "t": "p",
      "md": "PPT 用两个图 $G$、$H$ 举例：$G$ 有一条欧拉回路 $a, b, e, d, c, e, a$；而 $H$ **不存在**任何欧拉回路（Try to check this by yourself）。"
    },
    {
      "t": "p",
      "md": "一个 [[Euler path|欧拉路径]] 是一条 [[simple path|简单路径]]，它**包含图中每一条边**。注意区分：欧拉**回路**的起点与终点相同，欧拉**路径**不要求回到起点。"
    },
    {
      "t": "p",
      "md": "在同一对例子图上：$G$ 有一条欧拉路径 $a, d, c, e, b, c, a, b$；$H$ 连欧拉路径也没有。"
    },
    {
      "t": "p",
      "md": "**Theorem 1**：一个至少有两个顶点的连通图（或连通 [[multigraph|多重图]]）有欧拉回路，**当且仅当**每个顶点的[[degree|度数]]都是偶数（each vertex has even degree）。"
    },
    {
      "t": "p",
      "md": "**Theorem 2**：一个至少有两个顶点的连通图（或连通多重图）有欧拉路径，**当且仅当**它恰好有两个奇度顶点（exactly two vertices of odd degree）。"
    },
    {
      "t": "tbl",
      "head": [
        "对象",
        "存在性条件（连通图）"
      ],
      "rows": [
        [
          "[[Euler circuit|欧拉回路]]",
          "每个顶点的度数都是偶数"
        ],
        [
          "[[Euler path|欧拉路径]]",
          "恰好有两个顶点的度数为奇数"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "两个定理都要求图是**连通**的，且顶点数至少为 2；这两个条件在 PPT 中写在定理的前提里，不能省略。另注意「偶度 ⇔ 有欧拉回路」是**充要**条件，而恰有两个奇度顶点 ⇔ 有欧拉路径。"
    },
    {
      "t": "p",
      "md": "**如何找一条欧拉回路？** PPT 给出构造步骤："
    },
    {
      "t": "ul",
      "items": [
        "1. 找一个 cycle（回路）并把它从图中删掉（remove it from the graph）；\n2. 重复上一步，直到图变成没有边剩下为止；\n3. 在**公共顶点**处把这些回路合并起来（merge these cycles at common vertices）。"
      ]
    },
    {
      "t": "p",
      "md": "**例**：先找出回路 $a, b, e, a$；再找出回路 $e, c, d, e$。把第 2 个回路插到第 1 个回路的顶点 $e$ 处，就得到 $a, b, e, c, d, e, a$——这正是一条欧拉回路。这个「插入合并」的动作就是把两条在 $e$ 处相交的回路拼成一条回路。"
    },
    {
      "t": "p",
      "md": "**如何找一条欧拉路径？** 因为奇度顶点只有两个，所以可以**人为加一条 dummy edge（虚边）**把两个奇度顶点连起来，使所有顶点都变成偶数度；然后按上面的方法找出欧拉回路；最后**删掉这条虚边**，并从某个奇度顶点出发走完剩下的边，就得到欧拉路径。"
    },
    {
      "t": "p",
      "md": "**例**：在 $a$、$b$ 之间加一条虚边，求出欧拉回路 $a, d, c, e, b, c, a, b, a$（PPT 说中间步骤略过，We skip the steps here ...），去掉虚边后就得到欧拉路径 $a, d, c, e, b, c, a, b$。"
    },
    {
      "t": "h",
      "md": "三、Hamilton Paths and Circuits（哈密顿路径与哈密顿回路）"
    },
    {
      "t": "p",
      "md": "一个 [[Hamilton circuit|哈密顿回路]] 是一条 [[simple circuit|简单回路]]，它**经过图中的每一个顶点**；一个 [[Hamilton path|哈密顿路径]] 是一条 [[simple path|简单路径]]，它**经过图中的每一个顶点**。"
    },
    {
      "t": "tbl",
      "head": [
        "概念",
        "要求经过"
      ],
      "rows": [
        [
          "[[Euler path|欧拉路径]] / [[Euler circuit|欧拉回路]]",
          "每一条**边**（every edge）"
        ],
        [
          "[[Hamilton path|哈密顿路径]] / [[Hamilton circuit|哈密顿回路]]",
          "每一个**顶点**（every vertex）"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**例**：$G$ 有一条哈密顿路径 $a, b, c, d$；$H$ 有一条哈密顿回路 $a, b, e, c, d, a$。"
    },
    {
      "t": "p",
      "md": "PPT 明确指出：**没有简单的方法**去判断一个图是否有哈密顿回路（或路径）！我们只能检验某些特殊类型的图是否含哈密顿回路，例如 [[Ore's theorem|Ore 定理]]。"
    },
    {
      "t": "p",
      "md": "**Ore 定理**：设 $G$ 是有 $n$ 个顶点的图，$n \\ge 3$。如果每一对**不相邻**的顶点 $u, v$ 都满足\n$$\\deg(u) + \\deg(v) \\ge n,$$\n那么 $G$ 一定有哈密顿回路。"
    },
    {
      "t": "note",
      "md": "**[Exercise]** 请自己构造一个图：它有哈密顿回路，但**不满足** Ore 定理的条件。（这说明 Ore 定理的条件是**充分**的，不是必要的。）"
    },
    {
      "t": "warn",
      "md": "最容易混淆的一点：欧拉问题看**边**（度数条件给出充要判定，且算法简单）；哈密顿问题看**顶点**（一般情形没有简单的判定方法，Ore 定理只是一类充分条件）。"
    },
    {
      "t": "h",
      "md": "四、Graph: Edge Weight（图的边权）"
    },
    {
      "t": "p",
      "md": "在 [[weighted graph|带权图]] 中，每条边 $(u,v)$ 都有一个 [[weight|权]] $w(u,v)$，这个权表示这条边的长度（the edge's length）。"
    },
    {
      "t": "p",
      "md": "带权图用 [[adjacency list|邻接表]] 存储时，表里不只存相邻顶点，还要存该边的权：stores adjacent vertex and edge weight。"
    },
    {
      "t": "p",
      "md": "例如顶点 3 的邻接表项可写成 $3: 4$（连到 4，权为 4）、$3: 5$（连到 5，权为 5）；顶点 4 写成 $4: 3$（权 3）、$4: 6$（权 2）；顶点 6 写成 $6: 3$（权 2）。等价的边列表为 $\\{2,3\\}$ 权 4、$\\{2,6\\}$ 权 3、$\\{3,4\\}$ 权 1、$\\{4,5\\}$ 权 3、$\\{5,6\\}$ 权 2、$\\{1,6\\}$ 权 5。"
    },
    {
      "t": "h",
      "md": "五、Shortest Path（最短路径问题）"
    },
    {
      "t": "p",
      "md": "**路径（path）的本讲写法**：一条路径是一个**相邻顶点构成的序列**（a sequence of adjacent vertices）。PPT 说明这比 lecture 7 中「边的序列」的表示更紧凑（more compact）。"
    },
    {
      "t": "p",
      "md": "**路径距离（path distance）**：路径上各边权之和（the sum of edge weights on the path）。"
    },
    {
      "t": "ul",
      "items": [
        "- $(2,3,4)$ 是一条路径，距离为 $4+1=5$；\n- $(2,6,5,4)$ 是一条路径，距离为 $3+2+3=8$；\n- 想一想：$(4,5,6,2)$ 是一条路径吗？为什么？（Is $(4,5,6,2)$ a path? Why?）"
      ]
    },
    {
      "t": "p",
      "md": "**应用（Application）**：基于位置的服务（location-based services）、地图软件（mapping software）。"
    },
    {
      "t": "p",
      "md": "**最短路问题（the shortest path problem）**：给定两个顶点 $s$ 与 $t$，在所有从 $s$ 到 $t$ 的路径中，找出距离最小的那条路径。"
    },
    {
      "t": "p",
      "md": "**例**：取 $s=2$、$t=4$，最短路径是 $(2,3,4)$，距离为 5（对比 $(2,6,5,4)$ 的距离 8）。"
    },
    {
      "t": "h",
      "md": "六、Brute Force Solution（暴力解法）"
    },
    {
      "t": "p",
      "md": "**暴力解法（brute force solution）**的做法是：列举所有可能的路径（从 $s$ 到 $t$ 的边的序列），然后挑出距离最小的那条。"
    },
    {
      "t": "p",
      "md": "以 $s=2$、$t=4$ 为例，把所有可能路径都试一遍即可得到最短的那条。"
    },
    {
      "t": "warn",
      "md": "**问题**：组合实在太多了（There are many combinations!）。当图变大时暴力枚举不可行，所以 PPT 的结论是：**我们需要更快的算法**（We need a faster algorithm!）。"
    },
    {
      "t": "h",
      "md": "七、Shortest Path: Properties（最短路的性质）"
    },
    {
      "t": "p",
      "md": "记 $d_{ab}$ 为顶点 $a$ 与 $b$ 之间的最短路径距离（the shortest path distance between vertices $a$ and $b$）。本节的**假设（assumption）**是：**所有边权都是正的**（all edge weights are positive）。PPT 说明这三条性质都可以用 [[proof by contradiction|反证法]] 证明。"
    },
    {
      "t": "p",
      "md": "**I. [[optimal substructure|最优子结构]]**：设 $m$ 是最短路径 $a \\to b$ 上的任意一个顶点，则\n$$d_{ab} = d_{am} + d_{mb}.$$\n也就是说，**子路径本身也是最短路径**（a sub-path is also a shortest path）。"
    },
    {
      "t": "p",
      "md": "**II. [[triangle inequality|三角不等式]]**：对任意顶点 $c$，有\n$$d_{ab} \\le d_{ac} + d_{cb}.$$"
    },
    {
      "t": "p",
      "md": "**III. 无回路（No cycle）**：一条最短路径中不含 cycle，它最多有 $n$ 个顶点（因而最多 $n-1$ 条边）。"
    },
    {
      "t": "note",
      "md": "三条性质的分工：**最优子结构**说明「大问题的最优解由子问题的最优解拼成」，这正是下一步设计搜索算法的依据；**三角不等式**说明「绕路不会更短」；**无回路**给出路径长度的上界（$n$ 个顶点、$n-1$ 条边）。"
    },
    {
      "t": "h",
      "md": "八、Shortest Path Search: Basic Operations（搜索所需的基本操作）"
    },
    {
      "t": "p",
      "md": "算法为每个顶点 $v$ 维护两个属性："
    },
    {
      "t": "ul",
      "items": [
        "- $v.d$：目前已经找到的到 $v$ 的最佳路径距离（best path distance found so far），初始为 $\\infty$；\n- $v.p$：$v$ 的[[predecessor|前驱]]（predecessor），初始为 `NIL`（即还没有前驱）。"
      ]
    },
    {
      "t": "p",
      "md": "**初始过程 `INIT(G, s)`**（把源点设为 $s$）："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "INIT(G, s)\n1  for each vertex v in G.V\n2      v.d <- INF\n3      v.p <- NIL\n4  s.d <- 0"
    },
    {
      "t": "p",
      "md": "**松弛过程 `RELAX(u, v)`**（尝试用经过 $u$ 的路径去改进 $v$）："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "RELAX(u, v)\n1  if v.d > u.d + w(u, v)\n2      v.d <- u.d + w(u, v)\n3      v.p <- u"
    },
    {
      "t": "p",
      "md": "一句话理解：`RELAX` 用来**更新一个相邻顶点的路径距离**（update path distance of an adjacent vertex）。"
    },
    {
      "t": "p",
      "md": "**例：`RELAX(2, 6)`**。源点 $s=2$ 已置 $2.d=0$；顶点 6 原来的 $6.d=\\infty$，边权 $w(2,6)=3$。由于 $\\infty > 0+3$ 成立，于是更新为 $6.d = 0+3 = 3$、$6.p = 2$。这就是「顶点 6 的距离」与「顶点 6 的前驱」被改写的过程。"
    },
    {
      "t": "h",
      "md": "九、Dijkstra's Algorithm: Greedy（贪心思想与顶点着色）"
    },
    {
      "t": "p",
      "md": "Dijkstra 算法是一个 [[greedy algorithm|贪心算法]]，它把顶点分成三类颜色："
    },
    {
      "t": "ul",
      "items": [
        "- **Black（黑，集合 $S$）**：距离已经被**正确确定**的顶点（vertices with correct distances found），并且它们的距离比其余任何顶点都小；\n- **Gray（灰）**：$S$ 中顶点的相邻顶点，但自身还不在 $S$ 中（adjacent vertices of $S$ but not in $S$）；\n- **White（白）**：尚未看见的顶点（unseen vertices）。"
      ]
    },
    {
      "t": "p",
      "md": "每一轮，我们取出**灰色顶点中 $v.d$ 最小的那个 $v$**，把它染黑。"
    },
    {
      "t": "p",
      "md": "**为什么这样做是对的？** PPT 用两句话来论证：「$v$ 比任何其他灰色顶点 $v'$ 更优」（$v$ is better than any other gray vertex $v'$），而且「$v$ 也比任何白色顶点 $u$ 更优」（$v$ is better than any white vertex $u$），并追问 **WHY?**——这两点合起来说明：此刻从源点到 $v$ 不可能再找到更短的路，所以 $v.d$ 已经是最短距离，可以放心地「定下来」。"
    },
    {
      "t": "h",
      "md": "十、Dijkstra's Algorithm（算法本体与特性）"
    },
    {
      "t": "p",
      "md": "**算法特性（Features）**："
    },
    {
      "t": "ul",
      "items": [
        "- 它要求所有边权**非负**（all edge weights non-negative）；\n- 它使用一个 [[min-heap|最小堆]] 来管理「顶点及其 $d$ 值」；\n- 集合 $S$ 保存那些「到源点的最短路径已经找到」的顶点。"
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "code": "DIJKSTRA(G, s)\n1   INIT(G, s)\n2   S <- empty set            // set of seen vertices\n3   BUILD-HEAP(Q, G.V)\n4   while Q not empty\n5       u <- EXTRACT-MIN(Q)\n6       S <- S union {u}\n7       for each vertex v in G.Adj[u]\n8           RELAX(u, v)\n9           if v.d is updated\n10              DECREASE-KEY(Q, v)"
    },
    {
      "t": "p",
      "md": "第 2 行把 $S$ 初始化为空集，注释写明它是 **set of seen vertices**（已确定距离的顶点集合）；第 5 行每轮从堆 $Q$ 中取出当前 $d$ 值最小的顶点；第 7–8 行对它的每个邻居做松弛；第 9–10 行说明：**只有当 $v.d$ 真的被改小了**，才需要对堆做 `DECREASE-KEY` 把 $v$ 的键值调小。"
    },
    {
      "t": "h",
      "md": "十一、Data Structure: min-heap（最小堆）"
    },
    {
      "t": "p",
      "md": "[[min-heap|最小堆]] 的性质（Min-Heap property）：**一个节点的值不大于它的孩子的值**（a node's value ≤ its children's values）。因此堆顶永远存放最小的元素。"
    },
    {
      "t": "p",
      "md": "堆支持的操作及其时间复杂度："
    },
    {
      "t": "tbl",
      "head": [
        "操作",
        "含义",
        "时间复杂度"
      ],
      "rows": [
        [
          "`ExtractMin(Q)`",
          "取出（并删除）最小元素",
          "$O(\\log n)$"
        ],
        [
          "`Insert(Q, v)`",
          "把顶点 $v$ 插入堆",
          "$O(\\log n)$"
        ],
        [
          "`DecreaseKey(Q, v)`",
          "把 $v$ 的键值调小",
          "$O(\\log n)$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "在 Dijkstra 中，堆里存放的是**待访问的顶点**（vertices to be visited），每个条目的格式是 `(u: u.d)`，即「顶点 : 当前距离」。例如堆中可以有 $(1:8)$、$(3:4)$、$(4:\\infty)$ 这样混合着有限值与 $\\infty$ 的条目。"
    },
    {
      "t": "h",
      "md": "十二、Dijkstra's Algorithm: Time Complexity（时间复杂度）"
    },
    {
      "t": "p",
      "md": "逐段分析："
    },
    {
      "t": "ul",
      "items": [
        "- 第 1–3 行（初始化、建堆）：$O(|V|)$ 时间；\n- 每个顶点只会被取出一次，因此外层循环共做 $|V|$ 次迭代（each vertex leads to one iteration）；\n- `EXTRACT-MIN` 操作共 $|V|$ 次；\n- `DECREASE-KEY` 操作最多 $|E|$ 次（at most $|E|$）；\n- 堆上每个操作耗时 $O(\\log |V|)$。"
      ]
    },
    {
      "t": "p",
      "md": "把上面加起来，**总时间**为\n$$O\\big((|V|+|E|)\\log|V|\\big).$$"
    },
    {
      "t": "h",
      "md": "十三、Dijkstra Example（逐步演示）"
    },
    {
      "t": "p",
      "md": "PPT 用第 12、13 页那张带权图完整跑了一遍 Dijkstra，源点取顶点 2（Source 2）。堆中条目格式为 `(u: u.d)`。"
    },
    {
      "t": "p",
      "md": "**[Initialization]** 初始化后 $Q = \\{(2:0), (1:\\infty), (3:\\infty), (4:\\infty), (5:\\infty), (6:\\infty)\\}$，即只有源点 2 的距离是 0，其余都是 $\\infty$。"
    },
    {
      "t": "p",
      "md": "**[Iteration 1]** 取出顶点 2（Extract vertex 2），并更新顶点 3 与 6（Update vertices 3, 6）：由 $w(2,3)=4$ 得 $3.d=4$、$3.p=2$；由 $w(2,6)=3$ 得 $6.d=3$、$6.p=2$。此后 $Q = \\{(6:3), (3:4), (1:\\infty), (4:\\infty), (5:\\infty)\\}$。"
    },
    {
      "t": "p",
      "md": "**[Iteration 2]** 取出顶点 6（Extract vertex 6），更新顶点 1 与 5（Update vertices 1, 5）：$1.d = 3+5 = 8$，$5.d = 3+2 = 5$。"
    },
    {
      "t": "p",
      "md": "**[Iteration 3]** 取出顶点 3（Extract vertex 3），继续更新它尚未定下的邻居。此时已确定 6 的距离为 3、3 的距离为 4，$Q$ 中剩下的条目形如 $(5:5), (1:8), (4:5)$ 这一类。"
    },
    {
      "t": "p",
      "md": "**[Iteration 4] / [Iteration 5]** 依次取出顶点 5 与顶点 4。PPT 在 Iteration 3 后追问：**Which vertex will be extracted in the next iteration?**（下一轮会取出哪个顶点？）——答案正是当前堆中 $d$ 值最小的那个。"
    },
    {
      "t": "tbl",
      "head": [
        "Iteration",
        "Extract（取出）",
        "Update（更新）"
      ],
      "rows": [
        [
          "Initialization",
          "—",
          "$Q=\\{(2:0),(1:\\infty),(3:\\infty),(4:\\infty),(5:\\infty),(6:\\infty)\\}$"
        ],
        [
          "1",
          "vertex 2",
          "vertices 3, 6 → $Q=\\{(6:3),(3:4),(1:\\infty),(4:\\infty),(5:\\infty)\\}$"
        ],
        [
          "2",
          "vertex 6",
          "vertices 1, 5"
        ],
        [
          "3",
          "vertex 3",
          "其余未定邻居（更新后 $Q$ 中为 $(5:5),(1:8),(4:5)$ 一类条目）"
        ],
        [
          "4",
          "vertex 5",
          "—"
        ],
        [
          "5",
          "vertex 4",
          "—"
        ]
      ]
    },
    {
      "t": "p",
      "md": "注意：堆里 $\\infty$ 的条目也要留在 $Q$ 中，只有当它被松弛更新为有限值后，才需要通过 `DECREASE-KEY` 把它上浮到合适的位置。"
    },
    {
      "t": "h",
      "md": "十四、Shortest Path Tree（最短路径树）"
    },
    {
      "t": "p",
      "md": "算法的结果可以表示成一棵 [[shortest path tree|最短路径树]]：它同时包含了**距离信息**和**路径信息**。"
    },
    {
      "t": "p",
      "md": "树中每个顶点 $v$ 存放一个距离 $v.d$ 和一个父顶点 $v.p$（parent vertex）。PPT 提问：给定以 $s$ 为源点的最短路径树，**如何从 $s$ 出发把到任意顶点的最短路径取出来？**——顺着 $v.p$ 一路回溯到源点即可。"
    },
    {
      "t": "p",
      "md": "源点为顶点 2 时的最短路径树（条目格式 $d, p$）："
    },
    {
      "t": "tbl",
      "head": [
        "顶点 $v$",
        "$v.d$",
        "$v.p$"
      ],
      "rows": [
        [
          "1",
          "8",
          "6"
        ],
        [
          "2",
          "0",
          "NIL"
        ],
        [
          "3",
          "4",
          "2"
        ],
        [
          "4",
          "5",
          "3"
        ],
        [
          "5",
          "5",
          "6"
        ],
        [
          "6",
          "3",
          "2"
        ]
      ]
    },
    {
      "t": "p",
      "md": "从这张表可以直接读出路径：例如到顶点 1 的最短路径由 $1 \\leftarrow 6 \\leftarrow 2$ 得到，距离为 $3+5=8$；到顶点 4 的路径由 $4 \\leftarrow 3 \\leftarrow 2$ 得到，距离为 $4+1=5$；到顶点 5 的路径由 $5 \\leftarrow 6 \\leftarrow 2$ 得到，距离为 $3+2=5$。这些结果与第 13 页的逐步演示一致。"
    },
    {
      "t": "h",
      "md": "十五、Planar Graphs（平面图）"
    },
    {
      "t": "p",
      "md": "一个图称为 [[planar graph|平面图]]，如果它能被画在平面上而**任何边都不相交**（without any crossing of edges）。注意：PPT 说明我们**可以把一条边画成曲线**（we can draw an edge as a curve），也就是说只看「能不能画成不相交」，而不是看某一种固定的直线画法。"
    },
    {
      "t": "p",
      "md": "**例（是平面图）**：$G$ 就是平面图，因为可以按 PPT 的方式把它重画成没有交叉的样子。关键在于「重新画一遍」这个动作是允许的。"
    },
    {
      "t": "p",
      "md": "**例（不是平面图）**：PPT 给出了 $G$ 不是平面图的论证思路。"
    },
    {
      "t": "ul",
      "items": [
        "- $a, e, b, d$ 构成一个 cycle，在平面表示中它是一条**闭曲线**，把平面分成两个区域 $R_{in}$ 与 $R_{out}$；\n- **Case 1**：若 $c$ 在 $R_{in}$ 中。由于 $c$ 同时邻接 $d$ 与 $e$，它们把 $R_{in}$ 又分成两个区域 $R_{in1}$ 与 $R_{in2}$；\n  - Case 1.1 若 $f$ 在 $R_{out}$ 中，则边 $(c,f)$ 必然与别的边相交；\n  - Case 1.2 若 $f$ 在 $R_{in1}$ 中，则边 $(b,f)$ 必然相交；\n  - Case 1.3 若 $f$ 在 $R_{in2}$ 中，则边 $(a,f)$ 必然相交；\n- **Case 2**：若 $c$ 在 $R_{out}$ 中。**[Exercise]** 请自己补完这一部分的论证。"
      ]
    },
    {
      "t": "note",
      "md": "这段反证法的结构值得记住：用一条已知的 cycle 把平面切成「内 / 外」，再对第三个顶点的位置分情况讨论，每种情况都逼出一条**不可避免的交叉**，从而证明「无论怎么画都会有边相交」，即该图不是平面图。"
    },
    {
      "t": "h",
      "md": "十六、Euler's Formula（欧拉公式）"
    },
    {
      "t": "p",
      "md": "**[[Euler's formula|欧拉公式]]**：设 $G$ 是一个有 $v$ 个顶点、$e$ 条边的**连通平面图**，则它的平面表示中**区域的个数**为\n$$r = e - v + 2.$$"
    },
    {
      "t": "p",
      "md": "**例**：若 $v=4$、$e=6$，则区域个数为\n$$r = 6 - 4 + 2 = 4.$$"
    },
    {
      "t": "warn",
      "md": "用欧拉公式时必须满足前提：图是**连通**且**平面**的；数区域时不要漏掉最外面的那个无界区域（PPT 例子中 $R_1, R_2, R_3$ 之外还有一个外部区域，共 4 个）。"
    },
    {
      "t": "h",
      "md": "十七、Planar Graphs: Properties（平面图的性质）"
    },
    {
      "t": "p",
      "md": "欧拉公式可以用来证明下面几个不等式（PPT 说明它们的证明可以在课本中找到，Their proofs can be found in the textbook）。设 $G$ 是一个有 $v$ 个顶点、$e$ 条边的**连通平面简单图**："
    },
    {
      "t": "ul",
      "items": [
        "1. 若 $v \\ge 3$，则 $e \\le 3v - 6$；\n2. $G$ 中存在一个顶点，它的度至多是 5（its degree is at most 5）；\n3. 若 $v \\ge 3$ 且没有长度小于等于 3 的回路（no circuit of length ≤ 3），则 $e \\le 2v - 4$。"
      ]
    },
    {
      "t": "note",
      "md": "这三条性质都是**必要条件**式的结论：$e \\le 3v-6$ 与 $e \\le 2v-4$ 可以用来快速否定「某个图是平面图」（例如边数超界就一定不是平面图），而「存在度数不超过 5 的顶点」说明平面图不可能所有顶点的度都很大。"
    },
    {
      "t": "h",
      "md": "十八、Graph Coloring（图着色）"
    },
    {
      "t": "p",
      "md": "**地图着色（map coloring）**：给定一张地图，为每个区域指派一种颜色，使得**相邻的区域颜色不同**；问题是如何用**尽可能少的颜色**（How to use the fewest colors possible?）。"
    },
    {
      "t": "p",
      "md": "我们可以把地图转换成一个称为 [[dual graph|对偶图]] 的图："
    },
    {
      "t": "ul",
      "items": [
        "- 每个区域变成一个顶点（each region becomes a vertex）；\n- 两个顶点相邻，当且仅当它们对应的区域有**公共边界**（common border）。"
      ]
    },
    {
      "t": "p",
      "md": "然后在这个图上求解着色问题。"
    },
    {
      "t": "p",
      "md": "**着色的定义**：简单图的一个 [[coloring|着色]]，是把颜色指派给顶点，使得**没有两个相邻顶点同色**。图 $G$ 的 [[chromatic number|色数]] $\\chi(G)$ 是给 $G$ 着色所需的最少颜色数（the least number of colors required to color G）。"
    },
    {
      "t": "p",
      "md": "**例**：PPT 给出的两个例子是 $\\chi(G) = 3$ 与 $\\chi(H) = 4$。"
    },
    {
      "t": "note",
      "md": "记号提示：OCR 中的 $X(G)$ 按数学常识应为 $\\chi(G)$（希腊字母 chi），即色数。"
    },
    {
      "t": "h",
      "md": "十九、Graph Coloring: Examples（圈图的色数）"
    },
    {
      "t": "p",
      "md": "PPT 说明：图的性质可以帮助我们求出它的**色数**（the properties of a graph can help us find the chromatic number of a graph）。然后以 [[cycle graph|圈图]] $C_n$（$n$ 个顶点，$n \\ge 3$）为例，分 $n$ 的奇偶来讨论。"
    },
    {
      "t": "p",
      "md": "**当 $n$ 为偶数时**："
    },
    {
      "t": "ul",
      "items": [
        "- 把顶点标号为 $1, 2, \\dots, n$；\n- 每个顶点只与两个顶点相邻（每个顶点恰好有两个邻居）；\n- 给顶点 $1, 3, 5, \\dots, n-1$ 染红色；\n- 给顶点 $2, 4, 6, \\dots, n$ 染蓝色；\n- 所以 $\\chi(C_n) = 2$。"
      ]
    },
    {
      "t": "p",
      "md": "**当 $n$ 为奇数时**："
    },
    {
      "t": "ul",
      "items": [
        "- 同样把顶点标号为 $1, 2, \\dots, n$；\n- 给顶点 $1, 3, 5, \\dots, n-2$ 染红色；\n- 给顶点 $2, 4, 6, \\dots, n-1$ 染蓝色；\n- 顶点 $n$ 必须用**一种新颜色**，因为它同时邻接 $n-1$（蓝色）与 $1$（红色）；\n- 所以 $\\chi(C_n) = 3$。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "圈图 $C_n$",
        "原因",
        "色数"
      ],
      "rows": [
        [
          "$n$ 为偶数",
          "红蓝两色交替可以首尾闭合",
          "$\\chi(C_n) = 2$"
        ],
        [
          "$n$ 为奇数",
          "首尾两个顶点同被交替染色却相邻，必须再用一种新颜色",
          "$\\chi(C_n) = 3$"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "这里最关键的观察是：$n$ 为偶数时按 $1,3,5,\\dots$ 与 $2,4,6,\\dots$ 两色交替，正好使顶点 $n$（蓝）与顶点 1（红）不同色；$n$ 为奇数时顶点 $n$ 的**两个邻居分别是 $n-1$（蓝）和 1（红）**，红蓝都已用过，所以必须再加第三种颜色。"
    },
    {
      "t": "h",
      "md": "二十、Graph Coloring: Four Color Theorem（四色定理）"
    },
    {
      "t": "p",
      "md": "**[[four color theorem|四色定理]]**：任何**平面图**的色数都**不超过 4**（The chromatic number of any planar graph is at most 4）。"
    },
    {
      "t": "note",
      "md": "把它和前面的圈图例子对照：平面图的色数最多为 4，而一般的图无论 $\\chi$ 都可以很大——这正是「平面图」这一限制条件的作用。"
    },
    {
      "t": "h",
      "md": "二十一、Summary（小结）"
    },
    {
      "t": "ul",
      "items": [
        "- Euler and Hamilton paths（欧拉路径与哈密顿路径）\n- The shortest path problem（最短路问题）\n- Dijkstra's algorithm（Dijkstra 算法）\n- Planar graphs（平面图）\n- Graph coloring（图着色）"
      ]
    },
    {
      "t": "p",
      "md": "**阅读要求**：Please read Chapters 10.5–10.8 in the textbook（请阅读课本第 10.5–10.8 章）。"
    },
    {
      "t": "p",
      "md": "**[Announcement: Midterm]**（PPT 第 2 页的通知，供参考）：考试时间为周四班的 14:30–15:20, Oct. 30 与周五班的 09:30–10:20, Oct. 31；范围是 Lectures 2–6；形式是 3 页的书面题目（written questions on 3 pages）；允许带 **2 张 A4 纸**作为参考资料（both sides 均可使用），不允许带额外的草稿纸；其他规则请参阅 PolyU Student Handbook 中 Section 6E “Conduct of Examinations”。"
    },
    {
      "t": "note",
      "md": "**本讲易错点回顾**：（1）欧拉回路 / 路径的判定是**充要条件**，但都要求图连通，且欧拉路径要求**恰好两个**奇度顶点；（2）欧拉看边、哈密顿看顶点，哈密顿问题没有简单判定法，Ore 定理只是充分条件；（3）最短路的三条性质都在**边权为正**的假设下讨论，Dijkstra 则要求边权**非负**；（4）Dijkstra 中只有 `v.d` 被真正更新时才需要 `DECREASE-KEY`；（5）欧拉公式 $r = e-v+2$ 只对**连通平面图**成立，数区域时别漏掉外部区域；（6）圈图 $C_n$ 的色数在 $n$ 为偶数时为 2、为奇数时为 3。"
    }
  ],
  "terms": [
    [
      "Euler circuit / Euler path",
      "欧拉回路 / 欧拉路径"
    ],
    [
      "simple circuit / simple path",
      "简单回路 / 简单路径"
    ],
    [
      "multigraph",
      "多重图"
    ],
    [
      "degree",
      "度数"
    ],
    [
      "Hamilton circuit / Hamilton path",
      "哈密顿回路 / 哈密顿路径"
    ],
    [
      "Ore's theorem",
      "Ore 定理"
    ],
    [
      "weighted graph",
      "带权图"
    ],
    [
      "weight",
      "权（边权）"
    ],
    [
      "adjacency list",
      "邻接表"
    ],
    [
      "path distance",
      "路径距离"
    ],
    [
      "shortest path problem / brute force solution",
      "最短路问题 / 暴力解法"
    ],
    [
      "proof by contradiction",
      "反证法"
    ],
    [
      "optimal substructure",
      "最优子结构"
    ],
    [
      "triangle inequality",
      "三角不等式"
    ],
    [
      "predecessor",
      "前驱"
    ],
    [
      "relaxation (RELAX)",
      "松弛"
    ],
    [
      "greedy algorithm",
      "贪心算法"
    ],
    [
      "min-heap",
      "最小堆"
    ],
    [
      "decrease-key",
      "减小键值操作"
    ],
    [
      "shortest path tree",
      "最短路径树"
    ],
    [
      "planar graph",
      "平面图"
    ],
    [
      "Euler's formula",
      "欧拉公式"
    ],
    [
      "dual graph",
      "对偶图"
    ],
    [
      "coloring / chromatic number",
      "着色 / 色数"
    ],
    [
      "cycle graph",
      "圈图"
    ],
    [
      "four color theorem",
      "四色定理"
    ]
  ],
  "qids": [
    "cm-7-01",
    "cm-7-02",
    "cm-7-03",
    "cm-7-04",
    "cm-13-01"
  ]
});

  /* ---------- L09 第9讲 图论 III：流网络与最大流 ---------- */
  T.push({
  "no": "L09",
  "title": "第9讲 图论 III：流网络与最大流",
  "titleEn": "Graphs III: Flow Networks",
  "tags": [
    "flow network",
    "maximum flow",
    "residual network",
    "augmenting path",
    "Ford-Fulkerson",
    "Edmonds-Karp",
    "BFS",
    "matching",
    "bipartite graph"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲是 **COMP2012** 的第 9 讲，主题为 **Graphs III: Flow Networks**（图论 III：[[flow network|流网络]]）。署名 “Ken Yiu @ 2025”。"
    },
    {
      "t": "p",
      "md": "本讲先给出 **Our Roadmap**（路线图），共五点，与后面的小节一一对应："
    },
    {
      "t": "tbl",
      "head": [
        "路线图要点",
        "对应内容"
      ],
      "rows": [
        [
          "What are flow networks?",
          "流网络的定义、性质与建模"
        ],
        [
          "What is the maximum flow problem?",
          "[[maximum flow problem|最大流问题]] 的定义"
        ],
        [
          "Ford-Fulkerson algorithm: using a residual ...",
          "[[Ford-Fulkerson algorithm|Ford-Fulkerson 算法]]：借助 [[residual network|残余网络]] 求增广路"
        ],
        [
          "Edmonds-Karp algorithm: using BFS path",
          "[[Edmonds-Karp algorithm|Edmonds-Karp 算法]]：用 [[BFS|广度优先搜索]] 找路径"
        ],
        [
          "Matching: another application of maximun ...",
          "[[matching|匹配]]：最大流的另一个应用"
        ]
      ]
    },
    {
      "t": "h",
      "md": "一、What are flow networks（什么是流网络）"
    },
    {
      "t": "h",
      "md": "1. Flow Networks in Real-Life（现实中的流网络）"
    },
    {
      "t": "p",
      "md": "幻灯片以 **North American Connectivity**（北美网络连通性）为例，展示了一张美国/加拿大骨干网络地图，标注了三类节点："
    },
    {
      "t": "tbl",
      "head": [
        "图例",
        "含义"
      ],
      "rows": [
        [
          "Data Centers",
          "数据中心"
        ],
        [
          "POP Cities",
          "POP 城市（接入点城市）"
        ],
        [
          "Peering Points / Private NAPs",
          "对等互联点 / 私有网络接入点"
        ]
      ]
    },
    {
      "t": "p",
      "md": "地图上出现的城市名（OCR 有若干错字，按常见城市名还原）：Calgary、Seattle、Montreal、Minneapolis、Toronto、Boston、Chicago、Salt Lake City、Cleveland、Hartford、New York、Philadelphia、Pittsburgh、Washington、Las Vegas、Los Angeles、Tulsa、Nashville、Greensboro、Raleigh/Durham、Charlotte、San Diego、Atlanta、Dallas、Austin、Knoxville、San Antonio、Houston、Orlando、Miami 等。"
    },
    {
      "t": "p",
      "md": "图上的宣传语为 **“TRUST THE NETWORK THAT POWERS WALL STREET”** / **“EMPOWER YOUR BUSINESS.”**（幻灯片标注 *Adapted from ...*）。"
    },
    {
      "t": "h",
      "md": "2. Flow Networks：Definition（定义）"
    },
    {
      "t": "p",
      "md": "先看流网络的应用场景，幻灯片列出：**traffic flow**（交通流）、**electric grid**（电网）、**communication network**（通信网络）、**assembly line**（流水线）等。它们的共同特征是："
    },
    {
      "t": "p",
      "md": "- 是一张 **directed graph**（有向图）；\n- 每条边有一个 **capacity**（[[capacity|容量]]），例如带宽、电缆直径、车道数；\n- 边上有 **flow**（[[flow|流量]]），即“物质”在边上的流动速率，例如每秒比特数、每秒电流、每秒车数；\n- 有 **source**（[[source|源点]]），即物质的生产者；\n- 有 **sink**（[[sink|汇点]]），即物质的消费者。"
    },
    {
      "t": "p",
      "md": "形式化定义：流网络 $G = (V, E)$，其中 $V$ 是顶点集合，$E$ 是边集合。设 $(u, v) \\in E$ 是一条边，它有容量 $c(u, v)$ 和流量 $f(u, v)$，**容量与流量都非负**。$s$ 是**生产者**（source 顶点），$t$ 是**消费者**（sink 顶点）。"
    },
    {
      "t": "warn",
      "md": "幻灯片强调：**只允许有向边**，即 $E$ 中不能同时出现边 $(u, v)$ 与 $(v, u)$（不能有双向边对）。"
    },
    {
      "t": "h",
      "md": "3. Flow Networks：Two Flow Properties（两条流量性质）"
    },
    {
      "t": "p",
      "md": "必须满足两条流量性质："
    },
    {
      "t": "p",
      "md": "**(1) Capacity constraint（容量约束）**：对 $E$ 中任意边 $(u, v)$，"
    },
    {
      "t": "p",
      "md": "$$c(u, v) \\;\\ge\\; f(u, v) \\;\\ge\\; 0$$"
    },
    {
      "t": "p",
      "md": "**(2) Flow conservation（流量守恒）**：对 $V-\\{s, t\\}$ 中任意顶点 $u$，**流入等于流出**："
    },
    {
      "t": "p",
      "md": "$$\\sum_{v \\in V} f(v, u) = \\sum_{v \\in V} f(u, v)$$"
    },
    {
      "t": "p",
      "md": "（幻灯片用 $\\sum_{v \\in V} f(u, v)$ 与 $\\sum_{v \\in V} f(v, u)$ 对照，并提示 *Let's check the flow at vertex ...*。）"
    },
    {
      "t": "note",
      "md": "约定：对于**不在 $E$ 中**的边 $(u, v)$，我们定义 $c(u, v) = f(u, v) = 0$。例子中边上的标注形如 “$11/16$”，即 **flow / capacity**。"
    },
    {
      "t": "h",
      "md": "4. Flow Networks：Modelling（建模技巧）"
    },
    {
      "t": "p",
      "md": "幻灯片给出两个“把一般网络改造成标准流网络”的建模技巧。"
    },
    {
      "t": "p",
      "md": "**(a) 处理双向边**：回忆流网络不允许 $(u, v)$ 与 $(v, u)$ 同时出现在 $E$ 中。若原网络同时含有边 $(u, v)$ 与 $(v, u)$（例如 $(v_1, v_2)$ 与 $(v_2, v_1)$），做法是**在其中一条边上增加一个 dummy vertex（哑顶点）**，把这条边拆成两条边，得到 *original network → converted flow network*。"
    },
    {
      "t": "p",
      "md": "**(b) 处理多个源与多个汇**：回忆流网络只有一个源 $s$ 和一个汇 $t$。若原网络有多个源、多个汇，做法是**加上一个最终源 $s$ 和一个最终汇 $t$**，用**容量为 $\\infty$**（幻灯片图上标为 $\\infty$）的边把它们分别连到原来的源与汇上，得到 *original network → converted flow network*。"
    },
    {
      "t": "h",
      "md": "二、The Maximum Flow Problem（最大流问题）"
    },
    {
      "t": "p",
      "md": "记 $|f|$ 为流 $f$ 的**值**（value of a flow）："
    },
    {
      "t": "p",
      "md": "$$|f| = \\text{flow out of the source} - \\text{flow into the source} = \\sum_{v \\in V} f(s, v) - \\sum_{v \\in V} f(v, s)$$"
    },
    {
      "t": "p",
      "md": "幻灯片给出的例子：$|f| = (12 + 11) - 0 = 23$。"
    },
    {
      "t": "p",
      "md": "**The maximum flow problem（最大流问题）**：给定流网络 $G$（含源 $s$ 与汇 $t$），求 $|f|$ 的最大值。"
    },
    {
      "t": "p",
      "md": "幻灯片中的示例网络（读作 **flow/capacity**）：$12/12$、$12/16$、$19/20$、$0/4$、$0/9$、$7/7$、$11/13$、$4/4$、$11/14$，源 $s$ 出发两条边为 $12/12$ 与 $12/16$。"
    },
    {
      "t": "h",
      "md": "三、Basic Method（基本方法）"
    },
    {
      "t": "p",
      "md": "求解最大流的一个朴素方法（Basic method）："
    },
    {
      "t": "p",
      "md": "1. 找一条从 $s$ 到 $t$ 的路径；\n2. 增加这条路径的流量值；\n3. 重复，直到找不到任何路径为止。"
    },
    {
      "t": "p",
      "md": "幻灯片随即反问：**Does this method compute the maximum flow? Why? Why Not?** 并用例子说明。"
    },
    {
      "t": "h",
      "md": "Basic Method: Example（基本方法示例）"
    },
    {
      "t": "tbl",
      "head": [
        "迭代",
        "选取的路径",
        "可增加的量",
        "说明"
      ],
      "rows": [
        [
          "Iteration 1",
          "$\\langle s, V_1, V_3, V_2, V_4, t \\rangle$",
          "增加 4",
          "该路径的最小残余容量为 4"
        ],
        [
          "Iteration 2",
          "$\\langle s, V_1, V_3, t \\rangle$",
          "增加 8",
          "取路径上的最小残余容量"
        ],
        [
          "Iteration 3",
          "$\\langle s, V_2, V_4, V_3, t \\rangle$",
          "增加 7",
          "取路径上的最小残余容量"
        ],
        [
          "Iteration 4",
          "—",
          "—",
          "已经找不到任何路径"
        ]
      ]
    },
    {
      "t": "p",
      "md": "四轮之后的流量值（flow value）为 $12 + 7 = 19$。幻灯片追问：*Is this really the maximum?*"
    },
    {
      "t": "warn",
      "md": "基本方法的缺陷：虽然再也找不到“只往回增流”的路径，但 $19$ 并不是最大值。**我们需要一种方法去 “cancel” 掉阻塞了去路的流量**（原文：We need a method to \"cancel\" flow that bloc[ks] ...）。这正是残余网络的意义。"
    },
    {
      "t": "h",
      "md": "四、Residual Network（残余网络）"
    },
    {
      "t": "p",
      "md": "**残余网络** $G_f = (G.V, E_f)$ 由流网络 $G$ 与流量 $f$ 共同定义："
    },
    {
      "t": "p",
      "md": "- $G_f$ 与 $G$ 有**相同的顶点集合**；\n- $E_f$ 包含每一条满足 $c_f(u, v) > 0$ 的边 $(u, v)$；\n- 对于 $E_f$ 中的边 $(u, v)$，其**残余容量**（[[residual capacity|残余容量]]）$c_f(u, v)$ 表示这条边上**还能再增加多少流量**。"
    },
    {
      "t": "p",
      "md": "残余容量的计算规则："
    },
    {
      "t": "p",
      "md": "$$c_f(u, v) = c(u, v) - f(u, v) \\quad \\text{若 } (u, v) \\in G.E$$"
    },
    {
      "t": "p",
      "md": "$$c_f(v, u) = f(u, v) \\quad \\text{若 } (u, v) \\in G.E$$"
    },
    {
      "t": "p",
      "md": "幻灯片注：因为 $c(v, u) = 0$ 且 $f(v, u) = -f(u, v)$（原图中没有反向边 $(v,u)$）。"
    },
    {
      "t": "note",
      "md": "直观理解：原图中的正向边对应一条**正向残余边**，容量还剩 $c(u,v)-f(u,v)$；同时反向也产生一条**反向残余边** $(v,u)$，容量等于已送出的流量 $f(u,v)$，用来“推回”已送的流量。"
    },
    {
      "t": "h",
      "md": "五、Augmenting Path（增广路）"
    },
    {
      "t": "p",
      "md": "**Augmenting path（增广路）** $p$ 指的是残余网络 $G_f$ 中一条从 $s$ 到 $t$ 的 **simple path**（无环简单路径）。"
    },
    {
      "t": "p",
      "md": "增广路的**残余容量**为路径上各边残余容量的最小值："
    },
    {
      "t": "p",
      "md": "$$c_f(p) = \\min\\{\\, c_f(u, v) : (u, v) \\text{ is on } p \\,\\}$$"
    },
    {
      "t": "p",
      "md": "幻灯片提问：**How do we add this flow to the network?**，并配合残余网络图追问 *What is the res[idual capacity] of the bla[ck] ...*。"
    },
    {
      "t": "h",
      "md": "Adding a Flow to Residual Network（把增广流加回残余网络）"
    },
    {
      "t": "p",
      "md": "给定 $G$ 中的流 $f$，以及增广流（augmenting flow）$f'$，更新规则是："
    },
    {
      "t": "p",
      "md": "$$f(u, v) \\leftarrow f(u, v) + f'(u, v) - f'(v, u)$$"
    },
    {
      "t": "p",
      "md": "在残余网络上的操作是："
    },
    {
      "t": "p",
      "md": "- **Reduce res. capacity of a forward edge**（减少正向边的残余容量）；\n- **Increase res. capacity of a backward edge**（增加反向边的残余容量）；\n- **Delete edges with \"zero\" residual capacity**（删去残余容量为 0 的边）。"
    },
    {
      "t": "p",
      "md": "幻灯片示例：原网络 $G$ 中 $4/12$、$4/16$、$0/9$、$4/4$、$4/13$、$0/14$、$0/16$，对应更新后的残余网络 $G_f$。"
    },
    {
      "t": "p",
      "md": "**Cancellation（抵消）**：在残余网络中沿**反向边**推流，等于在原图中**减少**该边上的流量。幻灯片例子：边 $(V_1, V_2)$ 上我们已经送了 4 个单位，下一步又沿着它的反向边送回 4 个单位，于是该边流量被抵消。幻灯片追问 *Why the cancellation ...?*"
    },
    {
      "t": "h",
      "md": "Revisit: Why is the Residual Network needed?（为什么需要残余网络）"
    },
    {
      "t": "p",
      "md": "回头看第 13 页留下的局面：在流网络 $G$ 中**已不存在 $s \\to t$ 的路径**，也就**无法再改动任何已有的流**；但在它的**残余网络 $G_f$ 中仍然存在路径** $\\langle s, V_2, V_3, t \\rangle$（幻灯片写作 $\\langle s, V_2, V_3, t \\rangle$）。"
    },
    {
      "t": "p",
      "md": "结论：**抵消效应会自动修改已有的流**（the cancellation effect automatically changes some flow），从而让流量继续增长。"
    },
    {
      "t": "h",
      "md": "Correctness of Augmenting Flow（增广流的正确性）"
    },
    {
      "t": "p",
      "md": "设 $f$ 是 $G$ 中的流，$f'$ 是 $G_f$ 中的流。**把 $f'$ 加到 $f$ 上是否正确？**"
    },
    {
      "t": "p",
      "md": "幻灯片给出结论：增广流 $f \\uparrow f'$ **仍是 $G$ 中的流**，且其流量值为"
    },
    {
      "t": "p",
      "md": "$$|f \\uparrow f'| = |f| + |f'|$$"
    },
    {
      "t": "p",
      "md": "其中 $(f \\uparrow f')(u, v) = f(u, v) + f'(u, v) - f'(v, u)$。"
    },
    {
      "t": "p",
      "md": "正确性需验证两条流性质：**Capacity constraint（容量约束）** 与 **Flow conservation（流量守恒）**，两者的证明放在**附录**中（见第七部分）。"
    },
    {
      "t": "h",
      "md": "六、Ford-Fulkerson Algorithm（Ford-Fulkerson 算法）"
    },
    {
      "t": "p",
      "md": "算法伪代码（全讲共出现两处，内容一致）："
    },
    {
      "t": "code",
      "lang": "python",
      "code": "Ford-Fulkerson(G, s, t)\n1  for each edge (u, v) in G.E\n2      f(u, v) <- 0\n3  while there exists a path p from s to t\n4        in the residual network G_f\n5      c_f(p) <- min{ c_f(u, v) : (u, v) is on p }\n6      for each edge (u, v) on p\n7          if (u, v) in G.E\n8              f(u, v) <- f(u, v) + c_f(p)\n9          else\n10             f(v, u) <- f(v, u) - c_f(p)"
    },
    {
      "t": "p",
      "md": "幻灯片的 **Idea** 逐步解释（行号对应上图，原文行号为 1–9）："
    },
    {
      "t": "tbl",
      "head": [
        "代码行",
        "含义"
      ],
      "rows": [
        [
          "Lines 1-2",
          "把所有边的流量初始化为 0"
        ],
        [
          "Line 3",
          "在残余网络 $G_f$ 中寻找一条从 $s$ 到 $t$ 的路径 $p$"
        ],
        [
          "Line 4",
          "计算 $c_f(p) = \\min\\{c_f(u,v) : (u,v) \\text{ is on } p\\}$"
        ],
        [
          "Lines 6-7",
          "对 $p$ 上的每条边，若它在原图 $G$ 中，则**加流量**；否则说明它是反向边，需**抵消**原来反方向的流量"
        ],
        [
          "Lines 8-9",
          "相应地修改原图 $G$ 中的流量"
        ],
        [
          "终止条件",
          "当残余网络 $G_f$ 中不再存在 $s \\to t$ 路径时停止（Stop when there is no more path ... in $G_f$）"
        ]
      ]
    },
    {
      "t": "p",
      "md": "幻灯片末尾注：**See the correctne[ss proof in the appendix]**。"
    },
    {
      "t": "h",
      "md": "Time Complexity（时间复杂度）"
    },
    {
      "t": "p",
      "md": "- 在残余网络中找一条路径 $p$：需要 $O(|V| + |E|)$；\n- 每个外层循环（each outer loop）都会增加流量值；\n- 令 $|f^*|$ 为最大流量值；\n- **Total time**：$O(|E| \\cdot |f^*|)$。"
    },
    {
      "t": "h",
      "md": "Ford-Fulkerson Algorithm: Example（算法示例，4 轮迭代）"
    },
    {
      "t": "tbl",
      "head": [
        "迭代",
        "选取的增广路",
        "最小残余容量",
        "结果"
      ],
      "rows": [
        [
          "Iteration 1",
          "$\\langle s, v_2, v_1, v_3, t \\rangle$（在残余网络上）",
          "4",
          "更新流量（其中 $(v_1,v_2)$ 的方向被抵消处理）"
        ],
        [
          "Iteration 2",
          "$\\langle s, v_1, v_3, t \\rangle$",
          "8",
          "沿该路增加 8"
        ],
        [
          "Iteration 3",
          "$\\langle s, v_1, v_2, v_4, t \\rangle$",
          "4",
          "沿该路增加 4"
        ],
        [
          "Iteration 4",
          "已无法经由 $v_1$ 选路，改选 $\\langle s, v_2, v_4, v_3, t \\rangle$",
          "7",
          "沿该路增加 7"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Final result**：残余网络上已无 $s \\to t$ 路径，算法终止，据此还原出对应的流网络；最大流 $|f^*| = 11 + 12 = 23$（即 *flow out of $s$ − flow into $s$*）。"
    },
    {
      "t": "h",
      "md": "Ford-Fulkerson Algorithm: Worst Case（最坏情况）"
    },
    {
      "t": "p",
      "md": "Ford-Fulkerson 的运行时间为 $O(|E|\\,|f^*|)$，其中 $|f^*|$ 是最大流量值。考虑下面这个最坏情况的例子："
    },
    {
      "t": "p",
      "md": "- Iteration 1：找到路径 $\\langle s, u, v, t \\rangle$；\n- Iteration 2：找到路径 $\\langle s, v, u, t \\rangle$；\n- ...（如此反复）"
    },
    {
      "t": "p",
      "md": "幻灯片指出：这样要花费 $|f^*| = 2000$ 次迭代！**（much larger than ...，即远大于顶点/边的规模）**。图示为一对容量 1000 的上下路径，中间那条关键边容量为 1，迭代中在 999 / 1000 之间来回变化。"
    },
    {
      "t": "h",
      "md": "七、Edmonds-Karp Algorithm（Edmonds-Karp 算法）"
    },
    {
      "t": "p",
      "md": "Edmonds-Karp 算法与 Ford-Fulkerson 算法**相似**，唯一区别在 **Line 3**：找增广路时改为**用 [[breadth-first search|BFS（广度优先搜索）]]** 在残余网络 $G_f$ 上搜索。"
    },
    {
      "t": "p",
      "md": "因此 **BFS path = 从 $s$ 到 $t$ 边数最少的那条路径**。"
    },
    {
      "t": "p",
      "md": "在同一个最坏情况的例子上：Iteration 1 找到路径 $\\langle s, v, u, t \\rangle$，Iteration 2 找到路径 $\\langle s, u, t \\rangle$，**只需要 2 次迭代**（independent of the va[lue]，与流量值无关）。幻灯片配图为 Iteration 1、Iteration 2、Final res[ult]，各边容量 1000，中间边为 1。"
    },
    {
      "t": "h",
      "md": "Edmonds-Karp: Time Complexity（时间复杂度）"
    },
    {
      "t": "p",
      "md": "- 每次迭代：用 BFS 找一条路径，$O(|E|)$；\n- 记 $d_f(u, v)$ 为残余网络 $G_f$ 中的**最短路径距离**（$s$ 到相邻顶点的距离为 1）；\n- Edmonds-Karp 算法的迭代次数为 $O(|V|\\,|E|)$：每次迭代中 $d_f(s, v)$ 只会**增大或保持不变**（*increases (or remains the same)*），并且有性质：**每条边最多成为 $O(|V|/2)$ 次增广路的 critical edge（关键边）**；\n- 幻灯片注：*See the correctness proof in textbook*。"
    },
    {
      "t": "p",
      "md": "**Time complexity Edmonds-Karp**："
    },
    {
      "t": "p",
      "md": "$$O(|V|\\,|E|) \\times O(|E|) = O(|V|\\,|E|^2)$$"
    },
    {
      "t": "p",
      "md": "它与最大流量值 $|f^*|$ **无关**（independent of the maximum flow value $|f^*|$）。"
    },
    {
      "t": "h",
      "md": "Edmonds-Karp Algorithm: Example（算法示例）"
    },
    {
      "t": "p",
      "md": "每轮迭代都是：**1.** 在残余网络上用 BFS 找从 $s$ 到 $t$ 的路径（边数最少）；**2.** 取该路径上的最小残余容量 $c_f(u,v)$；**3.** 更新流量。"
    },
    {
      "t": "tbl",
      "head": [
        "迭代",
        "BFS 找到的路径",
        "距离 $(s, V_1, V_2, V_3, V_4, t)$",
        "最小残余容量"
      ],
      "rows": [
        [
          "Iteration 1",
          "$\\langle s, V_1, V_3, t \\rangle$",
          "幻灯片给出 $s$ 到各顶点的 BFS 距离",
          "12"
        ],
        [
          "Iteration 2",
          "$\\langle s, V_2, V_4, t \\rangle$",
          "幻灯片给出新的 BFS 距离",
          "12（取路径上的最小值）"
        ],
        [
          "Iteration 3",
          "$\\langle s, V_2, V_4, V_3, t \\rangle$",
          "幻灯片给出新的 BFS 距离",
          "（取路径上的最小值）"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Final result**：BFS 在残余网络上再也找不到 $s \\to t$ 的路径，算法终止，据此还原对应的流网络，最大流 $|f| = 11 + 12 = 23$。最终流网络与 Ford-Fulkerson 的结果一致：$12/12$、$12/16$、$19/20$、$0/9$、$0/4$、$7/7$、$11/13$、$4/4$、$11/14$。"
    },
    {
      "t": "note",
      "md": "对比：Ford-Fulkerson 用**任意**增广路，迭代次数依赖 $|f^*|$（$O(|E||f^*|)$）；Edmonds-Karp 强制用 **BFS 最短增广路**，迭代次数被限制在 $O(|V||E|)$，总时间 $O(|V||E|^2)$。"
    },
    {
      "t": "h",
      "md": "八、Matching: using maximum flow（用最大流解匹配）"
    },
    {
      "t": "p",
      "md": "幻灯片的匹配问题：有 4 个任务 $t_1, t_2, t_3, t_4$，4 个工人："
    },
    {
      "t": "tbl",
      "head": [
        "工人",
        "能做的任务"
      ],
      "rows": [
        [
          "$u_1$",
          "$t_1, t_2$"
        ],
        [
          "$u_2$",
          "$t_3, t_4$"
        ],
        [
          "$u_3$",
          "$t_1, t_3$"
        ],
        [
          "$u_4$",
          "$t_1, t_4$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "约束：**每个工人最多只能做 1 个任务**。问题：给工人分配任务，使**被分配的任务数最大**。幻灯片提问：**How can we solve this problem by maximu[m flow]?**"
    },
    {
      "t": "p",
      "md": "建模方法："
    },
    {
      "t": "p",
      "md": "- 建成一个 **bipartite graph**（[[bipartite graph|二分图]]）——顶点分列两侧，**同侧顶点之间没有边**；\n- 左侧放 **workers（工人）**，右侧放 **tasks（任务）**，工人与他会做的任务之间连边；\n- **把 $s$ 连到所有工人，把所有任务连到 $t$**；\n- **把所有容量固定为 1**（Fix all capacities to 1）。"
    },
    {
      "t": "p",
      "md": "幻灯片结尾提问：**[Question] After finding the maximum flow, how to extract the matching from the resi[dual network]?**"
    },
    {
      "t": "p",
      "md": "第二个应用是 **prime pair matching problem（素数对匹配）**：给定一组互不相同的数 $\\{4, 5, 7, 14, 17, 21, \\ldots\\}$（OCR 截断），把它们两两配对，使**每一对的和都是素数**。幻灯片给出配对片段 $\\langle 4, 7 \\rangle$、$\\langle 5, 14 \\rangle$、$\\langle 17, 20 \\rangle$。"
    },
    {
      "t": "p",
      "md": "解法仍是**二分图建模 + 最大流**。幻灯片提问：**[Question] Which vertices should be placed on the [left / right]?** 即哪些顶点该放在左侧、哪些放在右侧（二分图的两侧如何划分），然后再用最大流求解。"
    },
    {
      "t": "h",
      "md": "九、Summary（小结）"
    },
    {
      "t": "p",
      "md": "- **Properties of a flow network**：[[capacity constraint|容量约束]]、[[flow conservation|流量守恒]]；\n- **Why do we use a residual network ...?** 因为它可以**取消阻塞去路的流**（It can cancel a flow that blocks our way）；\n- **The Ford-Fulkerson algorithm**：$O(|E|\\,|f^*|)$，当残余网络 $G_f$ 中**再也找不到增广路**时终止；\n- **The Edmonds-Karp algorithm**：$O(|V|\\,|E|^2)$，与 Ford-Fulkerson 相似，但用 **breadth-first-search** 找增广路。"
    },
    {
      "t": "h",
      "md": "十、[Appendix] Correctness（附录：正确性证明）"
    },
    {
      "t": "h",
      "md": "Capacity Constraint（容量约束）"
    },
    {
      "t": "p",
      "md": "要证：$(f \\uparrow f')(u, v) \\le c(u, v)$。"
    },
    {
      "t": "p",
      "md": "**Proof：**"
    },
    {
      "t": "p",
      "md": "1. 若 $(u, v) \\notin E$，情形是平凡的（The case that $(u, v) \\notin E$ is trivial）。\n2. 设 $(u, v) \\in E$。按定义 $(f \\uparrow f')(u, v) = f(u, v) + f'(u, v) - f'(v, u)$。\n3. 首先，$f'(v, u) \\ge 0$，因为 $f'$ 是一个流（flow）。\n4. 其次，$f'(u, v) \\le c_f(u, v) = c(u, v) - f(u, v)$，这是因为 $G_f$ 中的**残余容量约束**（residual capacity constraint）。\n5. 两者结合即得 $(f \\uparrow f')(u, v) \\le c(u, v)$。$\\blacksquare$"
    },
    {
      "t": "h",
      "md": "Flow Conservation（流量守恒）"
    },
    {
      "t": "p",
      "md": "要证：$f \\uparrow f'$ 满足流量守恒。"
    },
    {
      "t": "p",
      "md": "**Proof：**"
    },
    {
      "t": "p",
      "md": "1. 取任意顶点 $u \\in V - \\{s, t\\}$，流出为 $\\sum_{v \\in V} (f \\uparrow f')(u, v)$，流入为 $\\sum_{v \\in V} (f \\uparrow f')(v, u)$。\n2. 按定义，$\\sum_{v \\in V} (f \\uparrow f')(u, v) = \\sum_{v \\in V} f(u, v) + f'(u, v) - f'(v, u)$ 形式的各项之和。\n3. 注意 $f$ 与 $f'$ 各自满足流量守恒，故 $\\sum_{v \\in V} f(u, v) = \\sum_{v \\in V} f(v, u)$，且 $\\sum_{v \\in V} f'(u, v) = \\sum_{v \\in V} f'(v, u)$。\n4. 因此 $\\sum_{v \\in V} (f \\uparrow f')(u, v) = \\sum_{v \\in V} f(v, u) + f'(v, u) - \\ldots$\n5. 于是得到 $\\sum_{v \\in V} (f \\uparrow f')(u, v) = \\sum_{v \\in V} (f \\uparrow f')(v, u)$，即流入等于流出。$\\blacksquare$"
    }
  ],
  "terms": [
    [
      "flow network",
      "流网络"
    ],
    [
      "capacity",
      "容量"
    ],
    [
      "flow",
      "流量"
    ],
    [
      "source",
      "源点"
    ],
    [
      "sink",
      "汇点"
    ],
    [
      "capacity constraint",
      "容量约束"
    ],
    [
      "flow conservation",
      "流量守恒"
    ],
    [
      "maximum flow problem",
      "最大流问题"
    ],
    [
      "value of a flow",
      "流的值"
    ],
    [
      "residual network",
      "残余网络"
    ],
    [
      "residual capacity",
      "残余容量"
    ],
    [
      "augmenting path",
      "增广路"
    ],
    [
      "augmenting flow",
      "增广流"
    ],
    [
      "cancellation",
      "抵消"
    ],
    [
      "Ford-Fulkerson algorithm",
      "Ford-Fulkerson 算法"
    ],
    [
      "Edmonds-Karp algorithm",
      "Edmonds-Karp 算法"
    ],
    [
      "breadth-first search",
      "广度优先搜索"
    ],
    [
      "BFS path",
      "BFS 路径（边数最少的路径）"
    ],
    [
      "critical edge",
      "关键边"
    ],
    [
      "worst case",
      "最坏情况"
    ],
    [
      "matching",
      "匹配"
    ],
    [
      "bipartite graph",
      "二分图"
    ],
    [
      "prime pair matching problem",
      "素数对匹配问题"
    ],
    [
      "dummy vertex",
      "哑顶点"
    ]
  ],
  "qids": [
    "cm-8-01",
    "cm-8-02",
    "cm-8-03",
    "cm-13-01"
  ]
});

  /* ---------- L10 第10讲 树 I：性质、遍历、表达式与二叉搜索树 ---------- */
  T.push({
  "no": "L10",
  "title": "第10讲 树 I：性质、遍历、表达式与二叉搜索树",
  "titleEn": "Lecture 10: Trees I",
  "tags": [
    "Tree",
    "Rooted Tree",
    "m-ary Tree",
    "Full m-ary Tree",
    "Tree Traversal",
    "Preorder",
    "Postorder",
    "Inorder",
    "Ordered Tree",
    "Arithmetic Expression",
    "Polish Notation",
    "Reverse Polish Notation",
    "Binary Search Tree"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲是 [[COMP2012|离散数学]] 课程的第 10 讲，主题为 **Trees I**（树 I），授课教师 **Ken Yiu**，年份 **2025**。本讲从**树的基本概念与性质**出发，讨论**树的遍历**、**算术表达式与树**，最后进入**二叉搜索树**。"
    },
    {
      "t": "ul",
      "items": [
        "**Trees and properties**（树及其性质）",
        "**Tree traversal**（树的遍历）",
        "**Binary search trees**（二叉搜索树）"
      ]
    },
    {
      "t": "h",
      "md": "一、树及其性质（Trees and Properties）"
    },
    {
      "t": "p",
      "md": "**树的应用（Applications of trees）**"
    },
    {
      "t": "ul",
      "items": [
        "**建模某种结构**：目录层次（如 `bin/`、`dev/`）、XML、组织架构树（organization tree）",
        "**索引结构（index structures）**：[[binary search tree|二叉搜索树]]、[[AVL tree|AVL 树]]、B-tree、R-tree",
        "**数据压缩**：[[Huffman coding|哈夫曼编码]]",
        "**编译器**：语法树（syntax tree）",
        "**决策树（decision tree）**",
        "**博弈树（game tree）**"
      ]
    },
    {
      "t": "p",
      "md": "**图与树（Graph vs. Tree）**：树是一个**连通的无向图**（connected undirected graph），并且**不含简单回路**（no simple circuits）。因此树没有**自环**（loop），也没有**多重边**（multiple edges）。"
    },
    {
      "t": "p",
      "md": "例：图 $G$ 是一棵树；图 $H$ 不是树。"
    },
    {
      "t": "p",
      "md": "**有根树（rooted tree）**：在有根树中，指定一个顶点作为**根**（root）。"
    },
    {
      "t": "ul",
      "items": [
        "顶点 $v$ 的**父结点**（parent）：在 $v$ 到根的路径上与 $v$ 相连的那个顶点",
        "顶点 $y$ 的**子结点**（child）：以 $y$ 为其父结点的顶点",
        "顶点 $v$ 的**祖先**（ancestor）：从根到 $v$ 的路径上的所有顶点，但**不含 $v$ 自身**",
        "顶点 $v$ 的**后代**（descendant）：以 $v$ 为其祖先的所有顶点"
      ]
    },
    {
      "t": "p",
      "md": "例（课件中的一棵有根树）：$b$ 是根；$b$ 的子结点是 $a,c,e$；$b$ 是 $a,c,e$ 的父结点；$d$ 的祖先是 $a,b$；$b$ 的后代是 $a,c,e,d,f$。"
    },
    {
      "t": "ul",
      "items": [
        "**叶结点（leaf）**：没有任何子结点的顶点 $v$",
        "**内部结点（internal vertex）**：不是叶结点的顶点",
        "以顶点 $v$ 为根的**子树（subtree）**：由 $v$ 及其所有后代（包括与这些后代相连的边）构成的子图"
      ]
    },
    {
      "t": "p",
      "md": "顶点也可以称为**结点（node）**。"
    },
    {
      "t": "p",
      "md": "例（同一棵树）：叶结点是 $d,f,c,e$；内部结点是 $b,a$；以 $a$ 为根的子树包含 $a$ 及其后代 $d$。"
    },
    {
      "t": "p",
      "md": "**$m$ 叉树（m-ary tree）**：一个有根树，若每个内部结点**至多**有 $m$ 个子结点，则称为 $m$ 叉树；若每个内部结点**恰好**有 $m$ 个子结点，则称为**满 $m$ 叉树（full m-ary tree）**。当 $m=2$ 时，$m$ 叉树称为**二叉树（binary tree）**。"
    },
    {
      "t": "note",
      "md": "课件给出三幅图例：**3-ary tree**、**binary tree**、**full binary tree**（满二叉树中每个内部结点都恰好有 2 个子结点）。"
    },
    {
      "t": "p",
      "md": "**定理 1**：一棵有 $n$ 个顶点的树有 $n-1$ 条边。"
    },
    {
      "t": "p",
      "md": "**定理 2**：一棵有 $i$ 个内部结点的**满 $m$ 叉树**共有 $$n = mi + 1$$ 个顶点。"
    },
    {
      "t": "p",
      "md": "例：树 $T$ 有 5 个顶点和 4 条边；$T$ 是一棵满二叉树（$m=2$），其中 $i=2$，$n=5$，而 $mi+1 = 2\\times 2 + 1 = 5$，与顶点数相符。"
    },
    {
      "t": "p",
      "md": "**如何运用这些性质（How to use properties）**"
    },
    {
      "t": "p",
      "md": "**问题**：一名学生发起一封链式邮件（chain email）。每个收到邮件并被要求转发的学生需要把它发给另外 3 名学生（这些学生此前没有收到过这封邮件）。有些学生照做，另一些学生不发任何邮件。已知共有 **51 名学生收到了邮件但没有转发**，问有多少名学生转发（发出）了这封邮件？"
    },
    {
      "t": "p",
      "md": "**解**：把上述过程建模为一棵**满 3 叉树**——内部结点表示转发邮件的学生，叶结点表示收到邮件但没有转发的学生。设内部结点数为 $i$，叶结点数为 $l = 51$。由定理 2 有 $n = mi + 1$，又有 $n = i + l$，于是 $$i + 51 = 3i + 1$$"
    },
    {
      "t": "p",
      "md": "解得 $$i = 25$$ 即 **25 名学生转发**了这封邮件。"
    },
    {
      "t": "p",
      "md": "**层数与高度**：顶点 $v$ 的**层数（level）**是从根到 $v$ 的路径长度；树的**高度（height）**是树中所有顶点层数的最大值。若一棵高度为 $h$ 的树的所有叶结点都在第 $h$ 层或第 $h-1$ 层，则称这棵树是**平衡的（balanced）**。"
    },
    {
      "t": "p",
      "md": "例（树 $T$）：$b$ 的层数是 $0$；$a$ 的层数是 $1$；$d$ 的层数是 $2$；树 $T$ 的高度是 $2$；$T$ 是平衡的。"
    },
    {
      "t": "p",
      "md": "**定理 3**：一棵高度为 $h$ 的 $m$ 叉树至多有 $m^h$ 个叶结点。"
    },
    {
      "t": "ul",
      "items": [
        "**推论**：若一棵 $m$ 叉树有 $l$ 个叶结点，则其高度 $h \\ge \\lceil \\log_m l \\rceil$；",
        "若这棵 $m$ 叉树是**满的且平衡的**，则 $h = \\lceil \\log_m l \\rceil$。"
      ]
    },
    {
      "t": "p",
      "md": "例 (1)：高度为 5 的二叉树至多有 $2^5 = 32$ 个叶结点。"
    },
    {
      "t": "p",
      "md": "例 (2)：一棵有 40 个叶结点的满平衡二叉树，其高度 $$h = \\lceil \\log_2 40 \\rceil = \\lceil 5.3219 \\rceil = 6$$ 其中 $\\log_2 40$ 按 $(\\log 40) \\div (\\log 2)$ 计算。"
    },
    {
      "t": "p",
      "md": "**有序树（ordered tree）**：有序树是内部结点的**子结点有次序**的树；画图时我们把每个内部结点的子结点**从左到右**依次排开。"
    },
    {
      "t": "p",
      "md": "记号约定（后续算法会用到）：给定结点 $x$，用 `x.label` 表示结点 $x$ 的标签，用 `x.nc` 表示 $x$ 的子结点个数，用 `x.c[i]` 表示 $x$ 的第 $i$ 个子结点。"
    },
    {
      "t": "note",
      "md": "课件给出一棵带标签的有序树示例（含类似 `1.1`、`1.2`、`2.1` 的编号结点），用来说明子结点存在左右次序、以及上述 `label / nc / c[i]` 记号的含义。"
    },
    {
      "t": "h",
      "md": "二、树的遍历（Tree Traversal）"
    },
    {
      "t": "p",
      "md": "**树的遍历（tree traversal）**：按照某种确定的顺序访问树中的所有结点。三种类型：**前序遍历（preorder traversal）**、**后序遍历（postorder traversal）**、**中序遍历（inorder traversal）**。"
    },
    {
      "t": "p",
      "md": "**前序遍历（Preorder）**：先打印结点，然后（从左到右）访问它的各棵子树。"
    },
    {
      "t": "p",
      "md": "例：$\\text{Preorder}(T.\\text{root}) = f\\ \\text{Preorder}(d)\\ \\text{Preorder}(b) = f\\,(d\\ \\text{Preorder}(a)\\ \\text{Preorder}(c))\\,(b\\ \\text{Preorder}(e))$，得到的遍历序列是 $\\texttt{fdacbe}$。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Preorder(node x)\n1. print x.label\n2. if x.nc > 0\n3.     for i <- 1 to x.nc\n4.         Preorder(x.c[i])"
    },
    {
      "t": "p",
      "md": "**后序遍历（Postorder）**：先（从左到右）访问结点的各棵子树，最后才打印该结点。"
    },
    {
      "t": "p",
      "md": "例：$\\text{Postorder}(T.\\text{root}) = \\text{Postorder}(d)\\ \\text{Postorder}(b)\\ f = (\\text{Postorder}(a)\\ \\text{Postorder}(c)\\ d)\\,(\\text{Postorder}(e)\\ b)\\,f$，得到的遍历序列是 $\\texttt{acdebf}$。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Postorder(node x)\n1. if x.nc > 0\n2.     for i <- 1 to x.nc\n3.         Postorder(x.c[i])\n4. print x.label"
    },
    {
      "t": "p",
      "md": "**中序遍历（Inorder）**：先访问结点的第 1 棵子树，然后打印该结点，最后访问其余的子树（从左到右）。"
    },
    {
      "t": "p",
      "md": "例：$\\text{Inorder}(T.\\text{root}) = \\text{Inorder}(d)\\ f\\ \\text{Inorder}(b) = (\\text{Inorder}(a)\\ d\\ \\text{Inorder}(c))\\,f\\,(\\text{Inorder}(e)\\ b)$，得到的遍历序列是 $\\texttt{adcfeb}$。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Inorder(node x)\n1. if x.nc > 0\n2.     Inorder(x.c[1])\n3. print x.label\n4. if x.nc > 1\n5.     for i <- 2 to x.nc\n6.         Inorder(x.c[i])"
    },
    {
      "t": "note",
      "md": "**课堂练习（Questions）**：(1) 写出一个算法，统计一棵树中**叶结点的个数**；(2) 写出一个算法，求一棵树中**每个结点的层数**。"
    },
    {
      "t": "h",
      "md": "三、算术表达式与树（Arithmetic Expressions and Trees）"
    },
    {
      "t": "p",
      "md": "一个算术表达式可以表示成一棵**有序树**；这棵树可以用**自底向上（bottom-up）**的方式构造。"
    },
    {
      "t": "p",
      "md": "例：考虑表达式 $(5+2)\\div(9-7)$。先为每个最内层的子表达式建一棵子树（$5+2$ 与 $9-7$），再为上一层建树，最终得到以 $\\div$ 为根、左子树为 $5+2$、右子树为 $9-7$ 的表达式树。"
    },
    {
      "t": "p",
      "md": "**中缀、前缀与后缀形式**：对上面这棵表达式树做遍历即可得到三种写法。"
    },
    {
      "t": "tbl",
      "head": [
        "形式",
        "所用遍历",
        "结果"
      ],
      "rows": [
        [
          "**中缀形式（infix form）**",
          "中序遍历",
          "$(5+2)\\div(9-7)$（需要括号才能保证无歧义）"
        ],
        [
          "**前缀形式（prefix form，又称 Polish notation 波兰记法）**",
          "前序遍历",
          "$\\div +\\,5\\,2\\,-\\,9\\,7$"
        ],
        [
          "**后缀形式（postfix form，又称 reverse Polish notation 逆波兰记法）**",
          "后序遍历",
          "$5\\,2\\,+\\,9\\,7\\,-\\,\\div$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**如何求后缀表达式的值**：从左到右考察每一个运算符，用紧邻它**前面**的两个操作数执行该运算，再用结果替换这一部分。"
    },
    {
      "t": "p",
      "md": "例：求后缀表达式 $5\\ 2\\ +\\ 9\\ 7\\ -\\ \\div$ 的值。"
    },
    {
      "t": "tbl",
      "head": [
        "步骤",
        "表达式",
        "结果"
      ],
      "rows": [
        [
          "1",
          "$5\\ 2\\ +\\ 9\\ 7\\ -\\ \\div$",
          "$5+2 = 7$"
        ],
        [
          "2",
          "$7\\ 9\\ 7\\ -\\ \\div$",
          "$9-7 = 2$"
        ],
        [
          "3",
          "$7\\ 2\\ \\div$",
          "$3.5$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**如何求前缀表达式的值**：从右到左考察每一个运算符，用紧邻它**后面**的两个操作数执行该运算，再用结果替换这一部分。"
    },
    {
      "t": "p",
      "md": "例：求前缀表达式 $\\div\\ +\\ 5\\ 2\\ -\\ 9\\ 7$ 的值。"
    },
    {
      "t": "tbl",
      "head": [
        "步骤",
        "表达式",
        "结果"
      ],
      "rows": [
        [
          "1",
          "$\\div\\ +\\ 5\\ 2\\ -\\ 9\\ 7$",
          "$9-7 = 2$"
        ],
        [
          "2",
          "$\\div\\ +\\ 5\\ 2\\ 2$",
          "$5+2 = 7$"
        ],
        [
          "3",
          "$\\div\\ 7\\ 2$",
          "$3.5$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**其他类型表达式的树**：有序树也可以用来表示**逻辑表达式、语句和程序**。"
    },
    {
      "t": "p",
      "md": "例：为逻辑表达式 $(\\neg p \\wedge q) \\vee r$ 建树。"
    },
    {
      "t": "p",
      "md": "前缀表达式和后缀表达式都是在一棵树上做遍历得到的；它们**无歧义（unambiguous）**，因此在**编译器**中很有用。"
    },
    {
      "t": "h",
      "md": "四、二叉搜索树（Binary Search Tree）"
    },
    {
      "t": "p",
      "md": "**二叉搜索树（binary search tree）**是一种数据结构，支持对集合进行高效操作，例如**查找、插入、删除**。"
    },
    {
      "t": "p",
      "md": "**应用**："
    },
    {
      "t": "ul",
      "items": [
        "集合 $S$ 中元素的**索引**",
        "**字典（dictionary）**",
        "**优先队列（priority queue）**",
        "按某种顺序**浏览数据项**"
      ]
    },
    {
      "t": "p",
      "md": "**二叉树结构**：一棵二叉树 $T$ 有一个根结点 `T.root`；每个结点 $x$ 存储以下属性："
    },
    {
      "t": "ul",
      "items": [
        "`x.key`：结点中的**键值**",
        "`x.left`：指向**左孩子**结点的指针；若 $x$ 没有左孩子则为 `NIL`",
        "`x.right`：指向**右孩子**结点的指针；若 $x$ 没有右孩子则为 `NIL`",
        "`x.p`：指向**父结点**的指针（**可选**）；如果不保存 `x.p`，某些算法需要做修改"
      ]
    },
    {
      "t": "p",
      "md": "**二叉搜索树的性质**：二叉搜索树是一棵满足如下性质的二叉树——对任意结点 $x$，$$(x.\\text{left}).key \\le x.key \\le (x.\\text{right}).key$$ 即：对 $x$ 的**左子树**中的任意结点 $a$，有 $a.key \\le x.key$；对 $x$ 的**右子树**中的任意结点 $b$，有 $x.key \\le b.key$。"
    },
    {
      "t": "p",
      "md": "**高度** $h$ 定义为从根到叶结点的最长路径长度（叶结点没有任何孩子）。课件示例中二叉搜索树的 $h = 2$（根为 33，其余键值包括 19、56、5、22、47）。"
    },
    {
      "t": "note",
      "md": "**课堂练习（Exercise）**：对给出的每一棵树（Tree A、Tree B、Tree C），检查它是否为二叉搜索树。注意该性质要求 $x$ 与**整棵左子树/右子树**中的所有结点比较，而不是只与直接的孩子比较。"
    },
    {
      "t": "p",
      "md": "**操作与复杂度**（设 $h$ 为树高）："
    },
    {
      "t": "tbl",
      "head": [
        "操作",
        "复杂度",
        "含义"
      ],
      "rows": [
        [
          "Search",
          "$O(h)$",
          "查找键值为 $k$ 的结点"
        ],
        [
          "Minimum",
          "$O(h)$",
          "找最小键值的结点"
        ],
        [
          "Maximum",
          "$O(h)$",
          "找最大键值的结点"
        ],
        [
          "Predecessor",
          "$O(h)$",
          "找前驱"
        ],
        [
          "Successor",
          "$O(h)$",
          "找后继"
        ],
        [
          "Insert",
          "$O(h)$",
          "插入一个键"
        ],
        [
          "Delete",
          "$O(h)$",
          "删除一个键"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "树高 $h$ 虽然出现在所有复杂度中，但 $h$ **可能远大于** $\\log_2 n$，此时这些 $O(h)$ 操作的效率会变差。"
    },
    {
      "t": "p",
      "md": "**查找（Search）**：查找键值为 $k$ 的结点；如果不存在这样的结点则返回 `NIL`。"
    },
    {
      "t": "p",
      "md": "例：`Search(T.root, 13)`——访问结点 15，向左走；访问结点 9，向右走；访问结点 13，找到键值！"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Search(x, k)\n1. if x = NIL or k = x.key\n2.     return x\n3. if k < x.key\n4.     Search(x.left, k)\n5. else\n6.     Search(x.right, k)"
    },
    {
      "t": "p",
      "md": "**时间**：$O(h)$，其中 $h$ 是树高。原因：每次调用至多沿树下降 1 层，而树至多有 $h$ 层。"
    },
    {
      "t": "p",
      "md": "**最小值（Minimum）**：查找最小键值的结点。例：`Minimum(T.root)`。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Minimum(x)\n1. while x.left != NIL\n2.     x <- x.left\n3. return x"
    },
    {
      "t": "p",
      "md": "`Minimum` 的时间为 $O(h)$。"
    },
    {
      "t": "p",
      "md": "**插入（Insertion）的思想**：把结点 $z$ 插入到树的**底部**——先查找应当插入位置的叶结点 $y$，再把 $z$ 作为 $y$ 的孩子接上。"
    },
    {
      "t": "p",
      "md": "例：设 `z.key = 12`、`z.left = NIL`、`z.right = NIL`，调用 `Insert(T, z)`。图中 $y$ 是 $x$ 的父结点；最终把 $z$ 挂到叶结点位置。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Insert(T, z)\n1.  y <- NIL; x <- T.root\n2.  while x != NIL\n3.      y <- x\n4.      if z.key < x.key\n5.          x <- x.left\n6.      else\n7.          x <- x.right\n8.  z.p <- y\n9.  if y = NIL\n10.     T.root <- z\n11. elseif z.key < y.key\n12.     y.left <- z\n13. else\n14.     y.right <- z"
    },
    {
      "t": "p",
      "md": "**时间复杂度**：第 1 行 $O(1)$；第 2–7 行 $O(h)$；第 8–14 行 $O(1)$；总计 $O(h)$。"
    },
    {
      "t": "p",
      "md": "**删除（Deletion）的思想**：按待删结点 $z$ 的孩子数目分三种情况讨论。"
    },
    {
      "t": "ul",
      "items": [
        "(1) $z$ **没有孩子**：直接删除（trivial）",
        "(2) $z$ **只有一个孩子**：用它的这个孩子替换 $z$",
        "(3) $z$ **有两个孩子**：先删除 $z$ 的右子树中的**最小结点** $x$，再用 $x$ 替换 $z$；这个最小结点必定属于情况 (1) 或情况 (2)"
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Transplant(T, u, v)\n1. if u.p = NIL\n2.     T.root <- v\n3. elseif u = (u.p).left\n4.     (u.p).left <- v\n5. else\n6.     (u.p).right <- v\n7. if v != NIL\n8.     v.p <- u.p"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Delete(T, z)\n1. if z.left = NIL\n2.     Transplant(T, z, z.right)\n3. elseif z.right = NIL\n4.     Transplant(T, z, z.left)\n5. else\n6.     y <- Minimum(z.right)       # 此时 y.left 为 NIL\n7.     （对 y 施用第 1-4 行，再把 z 替换为 y）\n8.     replace z by y"
    },
    {
      "t": "p",
      "md": "**删除示例**：\n- **情况 1**：`Delete(T, node_27)`——找到 27 的父结点，把它的右孩子置为 `NIL`，即删除结点 27。\n- **情况 2**：`Delete(T, node_9)`——找到 9 的父结点，把它的左孩子改为 9 的孩子。\n- **情况 3**：`Delete(T, node_15)`——用 15 的**后继** 18 替换 15，然后删除它的后继 18（与上一张幻灯片的情形相同）。"
    },
    {
      "t": "p",
      "md": "**删除的时间**：`Transplant` 为 $O(1)$；`Delete` 的第 1–4 行为 $O(1)$；第 6 行 $O(h)$；第 7 行 $O(1)$；第 8 行 $O(1)$；总计 $O(h)$。"
    },
    {
      "t": "p",
      "md": "**平衡的二叉搜索树（Balanced binary search tree）**：在执行大量插入/删除操作之后，树可能变得**不平衡**，树高 $h$ 远大于 $O(\\log n)$，从而使查找操作效率低下。如何让树保持平衡？例如 **AVL 树**、**红黑树（red-black tree）**；这些问题在 *COMP2011 Data Structures* 课程中讨论。"
    },
    {
      "t": "p",
      "md": "**其他类型键的二叉搜索树**：只要键满足某种**次序**关系，二叉搜索树也可以用于其他类型。例：按字母序把字符串键（如 `mary`、`david`、`peter`、`bob`、`john`）建成一棵二叉搜索树。"
    },
    {
      "t": "p",
      "md": "**小结（Summary）**：什么是树？树有哪些性质？什么是树的遍历？如何得到中缀/前缀/后缀表达式并对其求值？什么是二叉搜索树？如何在二叉搜索树上执行各种操作？"
    },
    {
      "t": "p",
      "md": "教材阅读：**第 11.1–11.3 章**；其中**第 11.2 章的一部分**将在**下一讲**覆盖。"
    }
  ],
  "terms": [
    [
      "tree",
      "树"
    ],
    [
      "rooted tree",
      "有根树"
    ],
    [
      "root",
      "根"
    ],
    [
      "parent",
      "父结点"
    ],
    [
      "child",
      "子结点"
    ],
    [
      "ancestor",
      "祖先"
    ],
    [
      "descendant",
      "后代"
    ],
    [
      "leaf",
      "叶结点"
    ],
    [
      "internal vertex",
      "内部结点"
    ],
    [
      "subtree",
      "子树"
    ],
    [
      "m-ary tree",
      "m 叉树"
    ],
    [
      "full m-ary tree",
      "满 m 叉树"
    ],
    [
      "binary tree",
      "二叉树"
    ],
    [
      "level",
      "层数"
    ],
    [
      "height",
      "高度"
    ],
    [
      "balanced tree",
      "平衡树"
    ],
    [
      "ordered tree",
      "有序树"
    ],
    [
      "preorder traversal",
      "前序遍历"
    ],
    [
      "postorder traversal",
      "后序遍历"
    ],
    [
      "inorder traversal",
      "中序遍历"
    ],
    [
      "prefix form",
      "前缀形式（波兰记法）"
    ],
    [
      "postfix form",
      "后缀形式（逆波兰记法）"
    ],
    [
      "binary search tree",
      "二叉搜索树"
    ],
    [
      "successor",
      "后继"
    ],
    [
      "AVL tree",
      "AVL 树"
    ]
  ],
  "qids": [
    "cm-9-01",
    "cm-9-02",
    "cm-9-03",
    "cm-14-03",
    "cm-14-04"
  ]
});

  /* ---------- L11 第11讲 树 II：最小生成树、Huffman 编码与博弈树 ---------- */
  T.push({
  "no": "L11",
  "title": "第11讲 树 II：最小生成树、Huffman 编码与博弈树",
  "titleEn": "Lecture 11: Trees II",
  "tags": [
    "spanning tree",
    "minimum spanning tree",
    "Prim's algorithm",
    "Kruskal's algorithm",
    "data compression",
    "prefix code",
    "Huffman coding",
    "game tree",
    "tic-tac-toe"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲主题：树的更多应用。前半部分讲[[spanning tree|生成树]]与[[Minimum Spanning Tree|最小生成树]]，以及求最小生成树的两个算法——[[Prim's algorithm|Prim 算法]]与[[Kruskal's algorithm|Kruskal 算法]]；后半部分讲两类新的树应用——用于数据压缩的[[prefix code|前缀码]]（[[Huffman coding|Huffman 编码]]），以及用于分析棋类游戏的[[game tree|博弈树]]。"
    },
    {
      "t": "h",
      "md": "零、Our Roadmap（本讲路线图）"
    },
    {
      "t": "ul",
      "items": [
        "- Minimum spanning tree（最小生成树）\n- Prim's algorithm\n- Kruskal's algorithm\n- More applications of trees（树的更多应用）\n- Prefix codes（用于数据压缩 data compression）\n- Game trees（用于分析游戏 analyzing games）"
      ]
    },
    {
      "t": "h",
      "md": "一、Minimum spanning tree（最小生成树）"
    },
    {
      "t": "h",
      "md": "一.1 Applications（应用场景）"
    },
    {
      "t": "p",
      "md": "这一组应用都围绕同一个问题：**\"How to connect all vertices?\"（如何把所有顶点连接起来？）**，典型场景包括："
    },
    {
      "t": "ul",
      "items": [
        "- Place electric wires in a building（在建筑物内布电线）\n- Place broadband cables among buildings（在建筑物之间布宽带电缆）"
      ]
    },
    {
      "t": "p",
      "md": "题目给定一些**候选的可行连接（candidate / feasible links）**，每条候选连接都有代价（图中的边权），目标是**降低总代价（reduce the cost）**。"
    },
    {
      "t": "h",
      "md": "一.2 Spanning tree（生成树）"
    },
    {
      "t": "p",
      "md": "给定一个简单图（simple graph）$G$，$T$ 称为 $G$ 的一棵 [[spanning tree|生成树]]，当且仅当满足两条："
    },
    {
      "t": "ul",
      "items": [
        "- (i) $T$ 是 $G$ 的**子图（subgraph）**；\n- (ii) $T$ 是一棵树，并且**覆盖 $G$ 的所有顶点**（covers all vertices of $G$）。"
      ]
    },
    {
      "t": "note",
      "md": "**Theorem 1**：简单图 $G$ 是[[connected graph|连通的]] $\\iff$ 存在 $G$ 的生成树。换言之，一个图连通，当且仅当它有生成树。"
    },
    {
      "t": "p",
      "md": "**Observation**：生成树**不含回路（circuit / cycle）**。反过来，生成树可以由原图**反复断开回路（breaking circuits）**得到——也就是每遇到一个回路，就删掉回路上的一条边。"
    },
    {
      "t": "h",
      "md": "一.3 MST（最小生成树）"
    },
    {
      "t": "p",
      "md": "最小生成树问题的应用（Applications）同样是：Place electric wires in a building、Place broadband cables among buildings。"
    },
    {
      "t": "p",
      "md": "**The minimum spanning tree (MST) problem**：给定一个[[weighted graph|加权图]] $G$，求一个边集 $T$，使 $T$ 能**连接所有顶点**，并且**边权之和最小**（connect all vertices with the minimum weight sum）。"
    },
    {
      "t": "p",
      "md": "本讲**假设所有边权都是正数（all edge weights are positive）**。"
    },
    {
      "t": "p",
      "md": "**Example**：图中粗边（bold edges）就是一棵最小生成树，其最小权重和为"
    },
    {
      "t": "p",
      "md": "$$1+3+2+3+1 = 10$$"
    },
    {
      "t": "h",
      "md": "一.4 Brute Force Solution（暴力解法）"
    },
    {
      "t": "p",
      "md": "**Brute force solution（暴力解法）**的思路是："
    },
    {
      "t": "ul",
      "items": [
        "- 尝试所有边的**组合（combinations）**，只看那些能连接所有顶点的组合；\n- 在这些组合中，找出**边权之和最小**的那一个。"
      ]
    },
    {
      "t": "warn",
      "md": "要检查的组合数量太多（time consuming to check so many combinations），暴力枚举非常耗时。"
    },
    {
      "t": "p",
      "md": "**We need a faster algorithm!** 我们需要更快的算法——下面介绍 Prim 算法与 Kruskal 算法。"
    },
    {
      "t": "h",
      "md": "二、Prim's algorithm（Prim 算法）"
    },
    {
      "t": "h",
      "md": "二.1 Idea of Prim's algorithm（算法思想）"
    },
    {
      "t": "p",
      "md": "**Idea #1**：通过**不断加入一条与 $T$ 相交（incident to $T$）的边**，让生成树 $T$ **一条边一条边地生长**。"
    },
    {
      "t": "p",
      "md": "**Example**：假设当前生成树 $T$ 已含粗边 $(1,2)$ 与 $(2,6)$，下一条边该选哪条？"
    },
    {
      "t": "ul",
      "items": [
        "- $(1,6)$：**NO（不可以）**，因为它与 $T$ 构成回路（forms a cycle with $T$）；\n- $(2,3)$：是候选；\n- $(6,5)$：是候选。"
      ]
    },
    {
      "t": "p",
      "md": "**Idea #2**：在候选边中，我们应该选择**权重最小的那条边**（the edge with the minimum weight）。"
    },
    {
      "t": "h",
      "md": "二.2 Prim's algorithm（算法描述）"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Prim(G: weighted undirected graph)\n1. n <- number of vertices of G\n2. let T be an empty graph\n3. insert the minimum-weight edge of G into T\n4. for i <- 1 to n-2\n5.     let E' be the set of edges that\n            such edge is incident to a vertex in T and\n            it does not form any cycle in T if added to T\n6.     insert the minimum-weight edge of E' to T\n7. return T"
    },
    {
      "t": "p",
      "md": "算法要点：先把全图**权重最小的一条边**放进 $T$，然后在剩下的 $n-2$ 轮里，每轮从集合 $E'$ 中挑一条权重最小的边加入 $T$。其中 $E'$ 的定义是同时满足两个条件的边构成的集合："
    },
    {
      "t": "ul",
      "items": [
        "- 该边**与 $T$ 中的某个顶点相交（incident to a vertex in $T$）**；\n- 该边加入 $T$ 后**不会在 $T$ 中形成任何回路**（does not form any cycle in $T$）。"
      ]
    },
    {
      "t": "p",
      "md": "经过 $1+(n-2)=n-1$ 次加边后，$T$ 含 $n-1$ 条边，正是一棵生成树。"
    },
    {
      "t": "h",
      "md": "二.3 Prim's algorithm: running steps（运行过程）"
    },
    {
      "t": "p",
      "md": "每一步中，候选边集 $E'$ 在图上用**蓝色（blue color）**标出。"
    },
    {
      "t": "ul",
      "items": [
        "- **Initialization（初始化）**：pick $(1,2)$，即把全图最小权边 $(1,2)$（权重 $1$）放入 $T$。\n- **Iteration 1**：$E'$ 为所有与 $T$ 相交且不构成回路的边，pick $(2,6)$。\n- **Iteration 2**：继续标出 $E'$ 并挑最小权边。\n- **Iteration 3**：pick $(4,5)$。\n- **Iteration 4** / 最后一轮：pick 剩余的边，此时 $T$ 已含 $n-1=5$ 条边。"
      ]
    },
    {
      "t": "p",
      "md": "最终结果与前面 MST 例子相同："
    },
    {
      "t": "p",
      "md": "$$\\text{The sum of weights} = 1+3+2+1+3 = 10$$"
    },
    {
      "t": "h",
      "md": "二.4 Implementation issues（实现上的问题）"
    },
    {
      "t": "p",
      "md": "在 Prim 算法中，**每一轮迭代里以下两件事都很耗时（time consuming）**："
    },
    {
      "t": "ul",
      "items": [
        "- **求 $E'$**（the set of possible edges to be added）：即那些与 $T$ 中某个顶点相交、且加入 $T$ 后不构成回路的边；\n- **在 $E'$ 中找权重最小的边**。"
      ]
    },
    {
      "t": "p",
      "md": "**Techniques to speedup this algorithm（加速技巧）**："
    },
    {
      "t": "ul",
      "items": [
        "- 用 [[priority queue|优先队列]]（或 [[min-heap|最小堆]]）来**快速找到权重最小的边**；\n- 避免回路：用一个**数组标记已访问的结点（mark the visited nodes）**。"
      ]
    },
    {
      "t": "h",
      "md": "三、Kruskal's algorithm（Kruskal 算法）"
    },
    {
      "t": "h",
      "md": "三.1 Idea of Kruskal's algorithm（算法思想）"
    },
    {
      "t": "p",
      "md": "**Idea #1**：同样是通过**一条一条加入边**来生长生成树 $T$；但**不关心这些边是否与 $T$ 相交（we don't care whether these edges are incident to T or not）**。"
    },
    {
      "t": "p",
      "md": "**Idea #2**：按**边权从小到大的顺序检查边（examine edges in increasing order of weight）**；每加入一条新边时，要**保证不形成回路（ensure no cycle is formed）**。"
    },
    {
      "t": "h",
      "md": "三.2 Kruskal's algorithm（算法描述）"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Kruskal(G(V,E): weighted undirected graph)\n1. sort edges of E in increasing order of weight\n2. let T be an empty graph\n3. while T contains less than |V|-1 edges\n4.     e_next <- the next minimum-weight edge of E\n5.     if e_next does not form a cycle in T\n6.         insert e_next into T\n7. return T"
    },
    {
      "t": "p",
      "md": "要点：先对 $E$ 按边权**升序排序**；只要 $T$ 的边数还不足 $|V|-1$，就取出下一条最小权边 $e_{next}$，若加入它**不形成回路**就把它放进 $T$。"
    },
    {
      "t": "tbl",
      "head": [
        "对比项",
        "Prim's algorithm",
        "Kruskal's algorithm"
      ],
      "rows": [
        [
          "边是否必须与 $T$ 相交",
          "**必须**（incident to a vertex in $T$）",
          "**不要求**（don't care whether incident to $T$ or not）"
        ],
        [
          "选边的顺序",
          "每轮在候选集 $E'$ 中挑最小权边",
          "先把所有边**按权升序排序**，依次检查"
        ],
        [
          "终止条件",
          "固定做 $n-2$ 轮（共加入 $n-1$ 条边）",
          "当 $T$ 的边数达到 $|V|-1$ 为止"
        ],
        [
          "共同点",
          "都是逐条加边、都要**避免形成回路**",
          "都是逐条加边、都要**避免形成回路**"
        ]
      ]
    },
    {
      "t": "h",
      "md": "三.3 Kruskal's algorithm: running steps（运行过程）"
    },
    {
      "t": "p",
      "md": "先把边按权重升序排好："
    },
    {
      "t": "tbl",
      "head": [
        "Edge",
        "$(1,2)$",
        "$(3,4)$",
        "$(6,5)$",
        "$(2,6)$",
        "$(4,5)$",
        "$(2,3)$"
      ],
      "rows": [
        [
          "Weight",
          "$1$",
          "$1$",
          "$2$",
          "$3$",
          "$3$",
          "$4$"
        ]
      ]
    },
    {
      "t": "ul",
      "items": [
        "- **Iteration 1**：pick $(1,2)$，it does not form cycle ✔\n- **Iteration 2**：pick $(3,4)$，it does not form cycle ✔\n- **Iteration 3**：pick $(6,5)$（权 $2$），it does not form cycle ✔\n- **Iteration 4**：pick $(2,6)$（权 $3$），it does not form cycle ✔\n- **Iteration 5**：pick 剩余满足条件的那条边（权 $3$），it does not form cycle ✔"
      ]
    },
    {
      "t": "p",
      "md": "得到的生成树与 Prim 算法一致："
    },
    {
      "t": "p",
      "md": "$$\\text{The sum of weights} = 1+3+2+1+3 = 10$$"
    },
    {
      "t": "note",
      "md": "$(4,5)$ 与 $(2,3)$ 这类边在检查时会**形成回路**，因此被跳过（skip），不会加入 $T$。"
    },
    {
      "t": "h",
      "md": "四、Encoding Problem（编码问题）"
    },
    {
      "t": "p",
      "md": "**Representation of a file（文件的表示）**："
    },
    {
      "t": "ul",
      "items": [
        "- 一个文件**就是一串字母（a sequence of letters）**，例如 `aaaabcaddeefa`；\n- 如何表示一个字母？**用二进制码（a binary code）**；\n- **不同字母可以用不同的码（different codes are used for different letters）**；\n- **文件总大小 = 每个字母的码长乘其出现次数之和**（sum of size of each code used）。"
      ]
    },
    {
      "t": "p",
      "md": "**Optimization problem: data compression（数据压缩）**——计算一个[[coding scheme|编码方案]]，使**总文件大小最小**。"
    },
    {
      "t": "p",
      "md": "**Example**：文件中共有 $n=6$ 种字母，频率如下表。"
    },
    {
      "t": "tbl",
      "head": [
        "字母 (Letter)",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ],
      "rows": [
        [
          "Frequency（频率）",
          "$45$",
          "$13$",
          "$12$",
          "$16$",
          "$9$",
          "$5$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Variable length coding（变长编码）**：不同字母的码可以**有不同的长度（different lengths）**。例如："
    },
    {
      "t": "tbl",
      "head": [
        "字母 (Letter)",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ],
      "rows": [
        [
          "Variable-length code",
          "`0`",
          "`101`",
          "`100`",
          "`111`",
          "`1101`",
          "`1100`"
        ],
        [
          "Code length（码长）",
          "$1$",
          "$3$",
          "$3$",
          "$3$",
          "$4$",
          "$4$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "该编码方案的文件大小（Size）："
    },
    {
      "t": "p",
      "md": "$$\\text{Size} = 45\\cdot 1 + 13\\cdot 3 + 12\\cdot 3 + 16\\cdot 3 + 9\\cdot 4 + 5\\cdot 4 = 224\\ \\text{bits}$$"
    },
    {
      "t": "h",
      "md": "五、Prefix Code（前缀码）"
    },
    {
      "t": "p",
      "md": "**Prefix code（前缀码）**：**任何一个码都不是另一个码的前缀**（each code is NOT a prefix of any other code）。它的优点是**解码简单且唯一（simple and unique decoding）**。"
    },
    {
      "t": "p",
      "md": "前缀码可以**用一棵二叉树 $T$ 表示**："
    },
    {
      "t": "ul",
      "items": [
        "- **每个字母存放在一个叶子结点 $r$ 中**（each letter is stored in a leaf node $r$）；\n- **$r$ 的码就是从根到 $r$ 的路径**（the code of $r$ is the path from the root to $r$）；\n- $d_T(r)$：结点 $r$ 的**深度（depth）**，同时也是它的**码长（code length）**。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "Leaf node $r$",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ],
      "rows": [
        [
          "$\\text{freq}(r)$",
          "$45$",
          "$13$",
          "$12$",
          "$16$",
          "$9$",
          "$5$"
        ],
        [
          "Code",
          "`0`",
          "`101`",
          "`100`",
          "`111`",
          "`1101`",
          "`1100`"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Cost of a tree $T$（一棵树的代价，即编码后的文件大小）**："
    },
    {
      "t": "p",
      "md": "$$S(T) = \\sum_{r\\in T} \\text{freq}(r)\\cdot d_T(r)$$"
    },
    {
      "t": "p",
      "md": "例如：$45\\cdot 1 + 13\\cdot 3 + 12\\cdot 3 + 16\\cdot 3 + 9\\cdot 4 + 5\\cdot 4 = 224$ bits。"
    },
    {
      "t": "p",
      "md": "**Why do we only consider prefix code?（为什么只考虑前缀码？）** 因为**容易解码：只要沿着树走即可（just follow the tree）**。"
    },
    {
      "t": "p",
      "md": "**解码示例**：解码字符串 `000101100`——先读 `0` 得 `a`，再读 `0` 得 `a`，再读 `0` 得 `a`，然后 `101` 得 `b`、`100` 得 `c`，得到 $000\\,101\\,100 \\rightarrow \\texttt{aaabc}$。"
    },
    {
      "t": "p",
      "md": "**New goal（新目标）**：计算一棵树 $T$，使 $S(T)$ **最小**。这样的树称为**最优树（optimal tree）**。"
    },
    {
      "t": "h",
      "md": "六、Prefix Codes: Huffman Algorithm（Huffman 算法）"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Huffman-Code (a[1..n]: array of symbols, freq[1..n]: frequencies of symbols)\n1. F <- a empty forest\n2. for each i <- 1 to n\n3.     create a tree T_i with vertex a[i]; w(T_i) <- freq[i]\n4.     insert T_i into F\n5. while F is not a tree\n6.     find two trees T and T' of smallest weights\n7.     create a tree T_new with a new root, T as left\n             and T' as right subtree\n8.     w(T_new) <- w(T) + w(T')\n9.     remove T and T' from F; insert T_new into F"
    },
    {
      "t": "p",
      "md": "算法要点：初始时把每个字母各自作为一棵单结点树（权重为该字母的频率）放进森林 $F$。只要 $F$ 还不是一棵树，就**取出权重最小的两棵树 $T$ 与 $T'$**，用一个**新的根**把它们合并成一棵新树 $T_{new}$（$T$ 作左子树、$T'$ 作右子树），新树权重为两者之和：$w(T_{new}) = w(T) + w(T')$。"
    },
    {
      "t": "h",
      "md": "六.1 Huffman Algorithm: Example（算例）"
    },
    {
      "t": "p",
      "md": "仍用 $6$ 个字母及其频率：$a:45,\\ b:13,\\ c:12,\\ d:16,\\ e:9,\\ f:5$。"
    },
    {
      "t": "ul",
      "items": [
        "- **Step 1**：初始森林为单结点树 $f:5,\\ e:9,\\ c:12,\\ b:13,\\ d:16,\\ a:45$。\n- **Step 2**：取最小权两棵 $f:5$ 与 $e:9$ 合并，得到新树权重 $14$；森林为 $c:12,\\ b:13,\\ 14,\\ d:16,\\ a:45$。\n- **Step 3**：取最小权两棵 $c:12$ 与 $b:13$ 合并，得到新树权重 $25$；森林为 $14,\\ d:16,\\ 25,\\ a:45$。"
      ]
    },
    {
      "t": "p",
      "md": "**Step 4**：取最小权两棵 $14$ 与 $d:16$ 合并，得到新树权重 $30$；此时森林为 $25,\\ 30,\\ a:45$，即"
    },
    {
      "t": "p",
      "md": "$$w = 14 + 16 = 30$$"
    },
    {
      "t": "ul",
      "items": [
        "- **Step 5**：取最小权两棵 $25$ 与 $30$ 合并，得到新树权重 $55$；森林为 $a:45,\\ 55$。\n- **Step 6**：最后两棵树 $a:45$ 与 $55$ 合并，得到**根结点权重 $100$**（即 $45+55=100$），森林成为一棵树，算法结束。"
      ]
    },
    {
      "t": "h",
      "md": "七、Game trees（博弈树）"
    },
    {
      "t": "h",
      "md": "七.1 Game trees（博弈树的基本概念）"
    },
    {
      "t": "p",
      "md": "考虑满足下面两个条件的**两人游戏（two-player games）**："
    },
    {
      "t": "ul",
      "items": [
        "- (i) **对双方都没有隐藏信息**（there is no hidden information to both players）；\n- (ii) **没有随机因素**（there is no chance/random element）。"
      ]
    },
    {
      "t": "p",
      "md": "例如 nim、chess（国际象棋）、tic-tac-toe（井字棋）。"
    },
    {
      "t": "p",
      "md": "我们用[[game tree|博弈树]]来分析这类游戏："
    },
    {
      "t": "ul",
      "items": [
        "- **每个结点表示游戏的一个可能状态**（a possible state of the game）；\n- **根结点表示初始状态**（the initial state）；\n- 给定一个结点，**通过考虑下一步所有可能的选择来生成它的子结点**（generate its child nodes by considering possible choices for the next move）。"
      ]
    },
    {
      "t": "p",
      "md": "问题是：**How to find the best move? Can we find a winning strategy?**（如何找到最佳着法？能否找到必胜策略？）"
    },
    {
      "t": "h",
      "md": "七.2 Tic-tac-toe: rules（井字棋规则）"
    },
    {
      "t": "ul",
      "items": [
        "- **两名玩家（X、O）轮流在格子里落子**（take turns to mark cells）；\n- **假设玩家 X 先手**（player X starts first）；\n- **当一名玩家占满一行、一列或一条对角线时获胜**（a player wins when he occupies a row, a column, or a diagonal）。"
      ]
    },
    {
      "t": "h",
      "md": "七.3 Tic-tac-toe: the game tree（井字棋博弈树）"
    },
    {
      "t": "p",
      "md": "与一般博弈树一致：**每个结点表示游戏的一个可能状态，根结点表示初始状态；给定一个结点，考虑下一步所有可能的选择即可生成它的子结点**。"
    },
    {
      "t": "p",
      "md": "从根开始按层生成：**level 1** 是初始状态（X 先手），**level 2** 是 O 的应对，依此类推。"
    },
    {
      "t": "p",
      "md": "**如果某一方已经没有下一步可走，对应的结点就是叶子结点（leaf node）**。每个叶子结点都被赋予一个分数（score）："
    },
    {
      "t": "tbl",
      "head": [
        "局面 (Outcome)",
        "Score（分数）"
      ],
      "rows": [
        [
          "先手 X 获胜（the first player wins）",
          "$1$"
        ],
        [
          "后手 O 获胜（the second player wins）",
          "$-1$"
        ],
        [
          "没有玩家能获胜（no player can win）",
          "$0$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "进一步，**假设双方都采用最优策略（both players use the best strategy）**："
    },
    {
      "t": "ul",
      "items": [
        "- 先手 X 试图**最大化**分数（maximize）；\n- 后手 O 试图**最小化**分数（minimize）。"
      ]
    },
    {
      "t": "p",
      "md": "于是可以**递归地定义结点的分数（score of a node）**："
    },
    {
      "t": "ul",
      "items": [
        "- **叶子结点的分数**按上面的规则确定（see page 31）；\n- **偶数层（even level）内部结点的分数 = 其子结点分数的最大值**；\n- **奇数层（odd level）内部结点的分数 = 其子结点分数的最小值**。"
      ]
    },
    {
      "t": "h",
      "md": "七.4 Generate tree nodes from the top（自顶向下生成结点）"
    },
    {
      "t": "p",
      "md": "先考虑**以某个结点为根的子树**。注意整棵博弈树太大，无法完整画出来（the entire game tree is too large to be shown），所以这里只看一个子树。"
    },
    {
      "t": "p",
      "md": "设待展开的结点位于 **level 6**（该层轮到 O 走），先问：**What are the child nodes of this node?（这个结点的子结点是什么？）**"
    },
    {
      "t": "p",
      "md": "**Generate tree nodes from the top（自顶向下逐层生成）**：从 level 6 出发，依次生成 level 7、level 8、level 9 的各层结点，编号 step 1, 2, 3, …；处于 level 7 的结点轮到 X 走，level 8 轮到 O 走，level 9 轮到 X 走。"
    },
    {
      "t": "p",
      "md": "生成完成后，**再从叶子向上推导各结点的分数**（derive the scores of nodes）："
    },
    {
      "t": "ul",
      "items": [
        "- level 9 是叶子层，分数直接由胜负决定（如 $1$、$-1$、$0$）；\n- level 8 的分数取其子结点的**最小值**，例如 $\\min\\{-1,0\\} = -1$；\n- level 7 的分数取其子结点的**最大值**；\n- level 6 的分数取其子结点的**最大值**，例如 $\\max\\{-1,1,0\\} = 1$。"
      ]
    },
    {
      "t": "h",
      "md": "七.5 如何求必胜策略（Tic-tac-toe: the game tree）"
    },
    {
      "t": "p",
      "md": "**Step 1**：生成整棵博弈树（from the top，自顶向下）；"
    },
    {
      "t": "p",
      "md": "**Step 2**：求每个结点的分数（from the bottom，自底向上），方法如前所述。"
    },
    {
      "t": "p",
      "md": "最后**检查根结点的分数（check the score of the root node）**："
    },
    {
      "t": "tbl",
      "head": [
        "根结点分数",
        "含义"
      ],
      "rows": [
        [
          "$1$",
          "先手 X 有必胜策略（无论后手怎么走）"
        ],
        [
          "$-1$",
          "后手 O 有必胜策略（无论先手怎么走）"
        ],
        [
          "$0$",
          "双方都没有必胜策略"
        ]
      ]
    },
    {
      "t": "h",
      "md": "七.6 How to find the winning strategy（剪枝加速）"
    },
    {
      "t": "p",
      "md": "在**自顶向下生成博弈树的过程中**，就可以顺便找必胜策略："
    },
    {
      "t": "ul",
      "items": [
        "- 当走到一个**叶子结点**时，立即计算它的分数；\n- 如果这个分数**足以确定其父结点的分数**（sufficient to derive the score of its parent），就可以**跳过该父结点的其他子树**（skip other subtrees of its parent node）。"
      ]
    },
    {
      "t": "p",
      "md": "**Consider the following case**：有一个位于 **level 7** 的叶子结点分数为 $1$。由于 level 6 的父结点取**最大值**（due to the max），父结点的分数必然是 $1$，即"
    },
    {
      "t": "p",
      "md": "$$\\max\\{?,1\\} = 1$$"
    },
    {
      "t": "p",
      "md": "其中的 `?` 表示尚未展开的子树，此时**不必再展开**它们。"
    },
    {
      "t": "h",
      "md": "七.7 The game tree（博弈树的规模与实用技术）"
    },
    {
      "t": "p",
      "md": "对很多游戏来说，**博弈树非常巨大（the game tree is huge）**，各种游戏的规模可参考 [Game complexity](https://en.wikipedia.org/wiki/Game_complexity)："
    },
    {
      "t": "tbl",
      "head": [
        "Game",
        "博弈树规模（约）"
      ],
      "rows": [
        [
          "Tic-tac-toe",
          "$\\approx 10^{3}$"
        ],
        [
          "Chess",
          "$\\approx 10^{47}$"
        ],
        [
          "Go",
          "$\\approx 10^{170}$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**计算机玩家（a computer player）**可以结合[[heuristic|启发式方法]]与搜索技术，快速找到一个好的着法。**E.g., Alpha-beta pruning（alpha-beta 剪枝）**。常见手段包括："
    },
    {
      "t": "ul",
      "items": [
        "- **Consider a limited depth $d$**：只搜索**有限深度** $d$；\n- **Use an evaluation function to estimate the score of nodes**：用**评估函数**估计结点的分数；\n- **Prune unpromising subtrees, prioritize the order of visiting**：剪掉**没有前途的子树**，并**优先访问**更可能带来好结果的分支。"
      ]
    },
    {
      "t": "note",
      "md": "These techniques are **beyond the scope of our course**（这些技术超出本课程范围）。"
    },
    {
      "t": "h",
      "md": "八、Summary（本讲小结）"
    },
    {
      "t": "ul",
      "items": [
        "- Minimum spanning tree (MST)（最小生成树）\n- Prim's algorithm\n- Kruskal's algorithm\n- Prefix codes（前缀码）\n- Game trees（博弈树）"
      ]
    },
    {
      "t": "p",
      "md": "**Please read Chapters 11.2–11.5** in the textbook（请阅读教材第 11.2–11.5 章）。"
    }
  ],
  "terms": [
    [
      "spanning tree",
      "生成树"
    ],
    [
      "Minimum Spanning Tree",
      "最小生成树"
    ],
    [
      "weighted graph",
      "加权图"
    ],
    [
      "subgraph",
      "子图"
    ],
    [
      "cycle",
      "回路"
    ],
    [
      "Prim's algorithm",
      "Prim 算法"
    ],
    [
      "Kruskal's algorithm",
      "Kruskal 算法"
    ],
    [
      "priority queue",
      "优先队列"
    ],
    [
      "min-heap",
      "最小堆"
    ],
    [
      "data compression",
      "数据压缩"
    ],
    [
      "variable length coding",
      "变长编码"
    ],
    [
      "binary code",
      "二进制码"
    ],
    [
      "prefix code",
      "前缀码"
    ],
    [
      "optimal tree",
      "最优树"
    ],
    [
      "Huffman algorithm",
      "Huffman 算法"
    ],
    [
      "leaf node",
      "叶子结点"
    ],
    [
      "depth",
      "深度"
    ],
    [
      "forest",
      "森林"
    ],
    [
      "game tree",
      "博弈树"
    ],
    [
      "winning strategy",
      "必胜策略"
    ],
    [
      "tic-tac-toe",
      "井字棋"
    ],
    [
      "heuristic",
      "启发式方法"
    ],
    [
      "alpha-beta pruning",
      "alpha-beta 剪枝"
    ],
    [
      "evaluation function",
      "评估函数"
    ],
    [
      "prune",
      "剪枝"
    ]
  ],
  "qids": [
    "cm-10-01",
    "cm-10-02",
    "cm-10-03",
    "cm-10-04",
    "cm-14-02"
  ]
});

  /* ---------- L12 第12讲 布尔代数与逻辑电路 ---------- */
  T.push({
  "no": "L12",
  "title": "第12讲 布尔代数与逻辑电路",
  "titleEn": "Lecture 12: Boolean Algebra & Circuits",
  "tags": [
    "Boolean algebra",
    "Boolean expression",
    "Boolean function",
    "logic gate",
    "combinational circuit",
    "sum of products",
    "Karnaugh map",
    "don't care condition",
    "duality",
    "half adder"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲主题：[[Boolean algebra|布尔代数]]与逻辑电路。核心线索是：布尔表达式 $\\to$ 布尔函数 $\\to$ [[logic gate|逻辑门]] $\\to$ [[combinational circuit|组合电路]] $\\to$ 用 [[Karnaugh map|卡诺图]] 化简电路。所有恒等式、真值表与例子都来自本讲 PPT。"
    },
    {
      "t": "h",
      "md": "零、Our Roadmap（本讲路线图）"
    },
    {
      "t": "ul",
      "items": [
        "- Boolean expressions and functions（布尔表达式与布尔函数）\n- Logic gates（逻辑门）\n- Minimization of circuits（电路的化简）"
      ]
    },
    {
      "t": "h",
      "md": "一、Motivation（动机）"
    },
    {
      "t": "ul",
      "items": [
        "- How to design a logic circuit to perform a task (e.g., compare two integers, add two integers)?（如何设计一个逻辑电路来完成某项任务，例如比较两个整数、把两个整数相加？）\n- We need to understand Boolean algebra, which is the study of operations and rules for the set $\\{0,1\\}$.（为此我们需要理解[[Boolean algebra|布尔代数]]——它研究的是集合 $\\{0,1\\}$ 上的运算与规则。）"
      ]
    },
    {
      "t": "h",
      "md": "二、Boolean expressions and functions（布尔表达式与布尔函数）"
    },
    {
      "t": "h",
      "md": "二.1 Notations: logic vs. Boolean algebra（逻辑记号与布尔代数记号）"
    },
    {
      "t": "p",
      "md": "在 Lecture #2 中已经学过逻辑值（true/false）与逻辑运算符（$\\neg,\\wedge,\\vee$）；它们都可以用布尔代数的记号表示："
    },
    {
      "t": "tbl",
      "head": [
        "Logic（逻辑）",
        "Boolean algebra（布尔代数）"
      ],
      "rows": [
        [
          "Values：false（$F$）",
          "$0$"
        ],
        [
          "Values：true（$T$）",
          "$1$"
        ],
        [
          "Operators：$\\neg p$",
          "$\\bar p$"
        ],
        [
          "Operators：$p\\wedge q$",
          "$p\\cdot q$"
        ],
        [
          "Operators：$p\\vee q$",
          "$p+q$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "二.2 Boolean operators（布尔运算符）"
    },
    {
      "t": "p",
      "md": "三个基本运算分别是[[complement|补]]、[[Boolean sum|布尔和]]与[[Boolean product|布尔积]]，它们的取值如下（注意布尔和中 $1+1=1$，它不是算术加法）："
    },
    {
      "t": "tbl",
      "head": [
        "complement（补）",
        "Boolean sum（布尔和）",
        "Boolean product（布尔积）"
      ],
      "rows": [
        [
          "$\\bar 0=1$",
          "$0+0=0$",
          "$0\\cdot 0=0$"
        ],
        [
          "$\\bar 1=0$",
          "$0+1=1$",
          "$0\\cdot 1=0$"
        ],
        [
          "",
          "$1+0=1$",
          "$1\\cdot 0=0$"
        ],
        [
          "",
          "$1+1=1$",
          "$1\\cdot 1=1$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**运算符的优先级（precedence of operators）**，由高到低依次是：$(\\\\ )$（括号）$\\to$ 补 $\\to$ 积 $\\cdot$ $\\to$ 和 $+$。"
    },
    {
      "t": "p",
      "md": "例：求 $1\\cdot 0+\\overline{(0+1)}$ 的值。先算括号里的 $0+1=1$，再取补 $\\bar 1=0$，最后做布尔和："
    },
    {
      "t": "p",
      "md": "$$1\\cdot 0+\\overline{(0+1)}=0+\\bar 1=0+0=0$$"
    },
    {
      "t": "note",
      "md": "括号可以改变优先顺序：本讲 PPT 的第 6 页用这个例子说明**括号最高、补次之、积再次、和最低**。"
    },
    {
      "t": "h",
      "md": "二.3 Boolean expression（布尔表达式）"
    },
    {
      "t": "p",
      "md": "一个[[Boolean expression|布尔表达式]]（Boolean expression）可以是："
    },
    {
      "t": "ul",
      "items": [
        "- 一个常量值（a constant value），例如 $0$、$1$；\n- 一个变量（a variable），例如 $x$、$y$、$z$；\n- 由子表达式（sub-expressions）组合而成，例如 $\\bar E_1$、$(E_1\\cdot E_2)$、$(E_1+E_2)$，其中 $E_1$ 与 $E_2$ 本身都是布尔表达式。"
      ]
    },
    {
      "t": "p",
      "md": "PPT 给出的例子：$1\\cdot 0+\\overline{(0+1)}$；以及 $x\\cdot y+\\overline{(x+y)}$。"
    },
    {
      "t": "h",
      "md": "二.4 Translation（翻译：逻辑等价 $\\to$ 布尔恒等式）"
    },
    {
      "t": "p",
      "md": "借助上面的对照表，可以把**逻辑等价（logical equivalence）**翻译成布尔代数中的**[[identity|恒等式]]（identity）**——下面两句话含义相同："
    },
    {
      "t": "tbl",
      "head": [
        "Logical equivalence（在 Lecture #2）",
        "Identity in Boolean algebra（在本讲）"
      ],
      "rows": [
        [
          "$(T\\wedge F)\\vee\\neg(T\\vee F)\\equiv F$",
          "$1\\cdot 0+\\overline{(1+0)}=0$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "三、How to prove an identity（如何证明恒等式）"
    },
    {
      "t": "ul",
      "items": [
        "- 用真值表证明（by using a table）；\n- 或者用已知恒等式证明（by using known identities）。"
      ]
    },
    {
      "t": "p",
      "md": "例：用真值表证明 $\\overline{(x\\cdot y)}=\\bar x+\\bar y$。"
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$x\\cdot y$",
        "$\\overline{(x\\cdot y)}$",
        "$\\bar x$",
        "$\\bar y$",
        "$\\bar x+\\bar y$"
      ],
      "rows": [
        [
          "0",
          "0",
          "0",
          "1",
          "1",
          "1",
          "1"
        ],
        [
          "0",
          "1",
          "0",
          "1",
          "1",
          "0",
          "1"
        ],
        [
          "1",
          "0",
          "0",
          "1",
          "0",
          "1",
          "1"
        ],
        [
          "1",
          "1",
          "1",
          "0",
          "0",
          "0",
          "0"
        ]
      ]
    },
    {
      "t": "p",
      "md": "表中 $\\overline{(x\\cdot y)}$ 与 $\\bar x+\\bar y$ 两列的取值完全一致，所以恒等式成立。这正是 [[De Morgan's laws|德摩根律]] 的一个方向。"
    },
    {
      "t": "h",
      "md": "四、Known Identities（常用恒等式）"
    },
    {
      "t": "p",
      "md": "下面这些恒等式**成对出现**（大多数定律都有一条对偶的伙伴），下一页的「对偶」正好解释了这种现象："
    },
    {
      "t": "tbl",
      "head": [
        "名称",
        "恒等式"
      ],
      "rows": [
        [
          "Zero property（零律）",
          "$x\\cdot\\bar x=0$"
        ],
        [
          "Unit property（单位律）",
          "$x+\\bar x=1$"
        ],
        [
          "Double complement law（双重否定律）",
          "$\\bar{\\bar x}=x$"
        ],
        [
          "Idempotent laws（幂等律）",
          "$x+x=x$；$x\\cdot x=x$"
        ],
        [
          "Identity laws（同一律）",
          "$x+0=x$；$x\\cdot 1=x$"
        ],
        [
          "Domination laws（支配律）",
          "$x+1=1$；$x\\cdot 0=0$"
        ],
        [
          "Commutative laws（交换律）",
          "$x+y=y+x$；$x\\cdot y=y\\cdot x$"
        ],
        [
          "Associative laws（结合律）",
          "$x+(y+z)=(x+y)+z$；$x\\cdot(y\\cdot z)=(x\\cdot y)\\cdot z$"
        ],
        [
          "Distributive laws（分配律）",
          "$x\\cdot(y+z)=x\\cdot y+x\\cdot z$；$x+y\\cdot z=(x+y)\\cdot(x+z)$"
        ],
        [
          "De Morgan's laws（德摩根律）",
          "$\\overline{(x\\cdot y)}=\\bar x+\\bar y$；$\\overline{(x+y)}=\\bar x\\cdot\\bar y$"
        ],
        [
          "[[Absorption laws|吸收律]]（Absorption laws）",
          "$x+x\\cdot y=x$；$x\\cdot(x+y)=x$"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "分配律的第二个形式 $x+y\\cdot z=(x+y)\\cdot(x+z)$ 与算术中「$x+yz$ 不能拆开」的直觉相反，是布尔代数特有的；把它和第一个形式一起记，最容易在这里出错。"
    },
    {
      "t": "h",
      "md": "五、Duality（对偶）"
    },
    {
      "t": "p",
      "md": "前面两页的定律大多是成对出现的。一个布尔表达式的**[[duality|对偶]]（dual）**定义为："
    },
    {
      "t": "ul",
      "items": [
        "- Interchange $+$ and $\\cdot$（把 $+$ 与 $\\cdot$ 互换）；\n- Interchange $0$ and $1$（把 $0$ 与 $1$ 互换）。"
      ]
    },
    {
      "t": "p",
      "md": "例 1：$x+1$ 的对偶是 $x\\cdot 0$。"
    },
    {
      "t": "p",
      "md": "例 2：$x+y\\cdot z$ 的对偶是 $x\\cdot(y+z)$。PPT 在这里提问：**why do we need parentheses here?（这里为什么需要括号？）** 因为积的优先级高于和，写 $x\\cdot y+z$ 会被理解成 $(x\\cdot y)+z$，与原式的结构不同。"
    },
    {
      "t": "p",
      "md": "运算符本身也互为对偶，它们的取值恰好把 $0$ 与 $1$ 互换："
    },
    {
      "t": "tbl",
      "head": [
        "$+$",
        "$0$",
        "$1$",
        "$\\cdot$",
        "$0$",
        "$1$"
      ],
      "rows": [
        [
          "$0$",
          "0",
          "1",
          "$0$",
          "0",
          "0"
        ],
        [
          "$1$",
          "1",
          "1",
          "$1$",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "note",
      "md": "**[[duality principle|对偶原理]]（the duality principle）**：若布尔代数中的一个恒等式成立，则它的**对偶恒等式**也成立（PPT 中略去证明）。"
    },
    {
      "t": "p",
      "md": "例：取分配律 $x+y\\cdot z=(x+y)\\cdot(x+z)$。左边的对偶 $=x\\cdot(y+z)$，右边的对偶 $=x\\cdot y+x\\cdot z$，于是得到对偶恒等式："
    },
    {
      "t": "p",
      "md": "$$x\\cdot(y+z)=x\\cdot y+x\\cdot z$$"
    },
    {
      "t": "h",
      "md": "六、Boolean function（布尔函数）"
    },
    {
      "t": "p",
      "md": "一个[[Boolean function|布尔函数]]（Boolean function）是布尔变量的函数："
    },
    {
      "t": "ul",
      "items": [
        "- 输出必须是 $0$ 或 $1$（the output must be either 0 or 1）；\n- 它可以用一个布尔表达式来定义（defined by using a Boolean expression）。"
      ]
    },
    {
      "t": "p",
      "md": "PPT 的例子：$F(x,y)=x\\cdot y+\\overline{(x+y)}$（为方便也可写作 $F(x,y)=xy+\\overline{x+y}$）。"
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$x\\cdot y$",
        "$\\overline{(x+y)}$",
        "$F(x,y)$"
      ],
      "rows": [
        [
          "0",
          "0",
          "0",
          "1",
          "1"
        ],
        [
          "0",
          "1",
          "0",
          "0",
          "0"
        ],
        [
          "1",
          "0",
          "0",
          "0",
          "0"
        ],
        [
          "1",
          "1",
          "1",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "p",
      "md": "最后一列就是函数 $F$ 的取值（the values of function $F$）。"
    },
    {
      "t": "h",
      "md": "六.1 Number of different Boolean functions（不同布尔函数的个数）"
    },
    {
      "t": "p",
      "md": "设 $n$ 是函数中变量的个数："
    },
    {
      "t": "ul",
      "items": [
        "- 当 $n=1$ 时，共有 $4$ 个不同的函数（对应 $F_1,F_2,F_3,F_4$）；\n- 当 $n=2$ 时，共有 $16$ 个不同的函数；\n- 一般情形：$n$ 个变量共有 $2^n$ 种取值组合（combinations of values），所以共有 $2^{2^n}$ 个不同的函数。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$F_1$",
        "$F_2$",
        "$F_3$",
        "$F_4$"
      ],
      "rows": [
        [
          "0",
          "0",
          "0",
          "1",
          "1"
        ],
        [
          "1",
          "0",
          "1",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "不要把 $2^{2^n}$ 记成 $(2^2)^n$：这里 $n=2$ 时是 $2^{4}=16$，$n=1$ 时是 $2^{2}=4$。"
    },
    {
      "t": "h",
      "md": "六.2 Sum of products expansion（积之和展开）"
    },
    {
      "t": "p",
      "md": "问题：**给定布尔函数 $F$ 的取值，如何找到一个布尔表达式来表示 $F$？** 答案是[[sum-of-products expansion|积之和展开]]（sum-of-products expansion）："
    },
    {
      "t": "ul",
      "items": [
        "- 每一个 $F=1$ 的情形写成一个**文字的积**（the Boolean product of literals）；\n- 每个**[[literal|文字]]（literal）**可以是变量（如 $x$）或它的补（如 $\\bar x$）；\n- 整个表达式是所有这类情形的**布尔和**（the Boolean sum of all cases）。"
      ]
    },
    {
      "t": "p",
      "md": "例：$F$ 在 $x=0$ 且 $y=0$ 时等于 1，写 $\\bar x\\cdot\\bar y$；在 $x=1$ 且 $y=1$ 时等于 1，写 $x\\cdot y$。于是"
    },
    {
      "t": "p",
      "md": "$$F(x,y)=\\bar x\\cdot\\bar y+x\\cdot y$$"
    },
    {
      "t": "p",
      "md": "为方便也可以写成 $F(x,y)=\\bar x\\bar y+xy$。"
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$F$"
      ],
      "rows": [
        [
          "0",
          "0",
          "1"
        ],
        [
          "0",
          "1",
          "0"
        ],
        [
          "1",
          "0",
          "0"
        ],
        [
          "1",
          "1",
          "1"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "每个 $F=1$ 的行都要写一个乘积项，一行都不能漏：变量取 $0$ 时写它的补，取 $1$ 时写原变量（例如 $x=0,y=1$ 对应 $\\bar xy$）。"
    },
    {
      "t": "h",
      "md": "七、Logic gates（逻辑门）"
    },
    {
      "t": "h",
      "md": "七.1 Logic gates in real world（现实世界中的逻辑门）"
    },
    {
      "t": "p",
      "md": "逻辑门可以制成[[integrated circuit|集成电路]]（IC，integrated circuit），用来设计电子设备（electronic devices）。PPT 举出的 7400 系列芯片（参考资料：https://en.wikipedia.org/wiki/List_of_7400-series_integrated_circuits ）："
    },
    {
      "t": "tbl",
      "head": [
        "芯片（IC）",
        "功能"
      ],
      "rows": [
        [
          "7408",
          "Quad 2-input AND gates（四个二输入与门）"
        ],
        [
          "7432",
          "Quad 2-input OR gates（四个二输入或门）"
        ],
        [
          "7400",
          "Quad 2-input NAND gates（四个二输入与非门）"
        ],
        [
          "7402",
          "Quad 2-input NOR gates（四个二输入或非门）"
        ]
      ]
    },
    {
      "t": "h",
      "md": "七.2 Logic gates（各种逻辑门及其表达式）"
    },
    {
      "t": "tbl",
      "head": [
        "逻辑门（gate）",
        "表达式"
      ],
      "rows": [
        [
          "NOT gate（[[inverter|反相器]]）",
          "$F(x)=\\bar x$"
        ],
        [
          "OR gate（或门）",
          "$F(x,y)=x+y$"
        ],
        [
          "AND gate（与门）",
          "$F(x,y)=x\\cdot y$"
        ],
        [
          "NOR gate（或非门）",
          "$F(x,y)=\\overline{x+y}$"
        ],
        [
          "NAND gate（与非门）",
          "$F(x,y)=\\overline{x\\cdot y}$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "多输入的 AND/OR 门（AND/OR gates with multiple inputs）：例如 $x+y+z$、$x\\cdot y\\cdot z$。PPT 指出：**本课程中可以使用这种多输入门，但它们在现实的逻辑门里并不常见**（not commonly supported by real-life logic gates）。"
    },
    {
      "t": "h",
      "md": "八、Combinational circuit（组合电路）"
    },
    {
      "t": "p",
      "md": "**例 1**：用 AND、OR、NOT 门实现 $F(x,y)=x\\cdot y+\\overline{(x+y)}$ 的[[combinational circuit|组合电路]]——先用 AND 门得到 $x\\cdot y$，用 OR 门加 NOT 门得到 $\\overline{(x+y)}$，再用 OR 门把两者相加得到 $F(x,y)$。"
    },
    {
      "t": "p",
      "md": "**例 2**：只用 NOR 门实现同一个 $F(x,y)=x\\cdot y+\\overline{(x+y)}$。"
    },
    {
      "t": "ul",
      "items": [
        "- Step 1：用 NOR 门表示 AND、OR、NOT：\n  - NOT：$\\bar a=\\overline{a+a}$\n  - OR：$a+b=\\overline{\\overline{a+b}}$\n  - AND：$a\\cdot b=\\overline{\\bar a+\\bar b}$（等价地 $\\overline{a\\cdot b}=\\bar a+\\bar b$）\n- Step 2：draw the combinational circuit（按上面的等价式画出组合电路）。"
      ]
    },
    {
      "t": "p",
      "md": "**例 3：[[majority voting|多数表决]]（majority voting）**"
    },
    {
      "t": "ul",
      "items": [
        "- 共有三个成员（three members）；\n- 每个成员投 yes (1) 或 no (0)；\n- 设计一个电路判断是否**至少有两个成员**投 yes；\n- 设输入的布尔变量为 $x,y,z$；\n- Step 1：找出 $F(x,y,z)$ 的表达式：$$F(x,y,z)=xy+yz+xz$$\n- Step 2：画出组合电路（Leave to you as an exercise，留作练习）。"
      ]
    },
    {
      "t": "p",
      "md": "**例 4：[[half adder|半加器]]（half adder）**：设计电路把两个位 $(x,y)$ 相加，使输出为 (i) 和位 $s$（sum bit）与 (ii) 进位位 $c$（carry bit）。"
    },
    {
      "t": "ul",
      "items": [
        "- Step 1：填写输入/输出表（见下表）；\n- Step 2：找出 $s$ 与 $c$ 的表达式：$s=\\bar xy+x\\bar y$，$c=xy$；\n- Step 3：画出组合电路（Leave to you as an exercise，留作练习）。"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$s$",
        "$c$"
      ],
      "rows": [
        [
          "0",
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "1",
          "1",
          "0"
        ],
        [
          "1",
          "0",
          "1",
          "0"
        ],
        [
          "1",
          "1",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "h",
      "md": "九、Minimization of circuits：Karnaugh map（电路化简：卡诺图）"
    },
    {
      "t": "p",
      "md": "**同一个函数可以有多种表达式**。下表给出的函数既可以写成 $F(x,y)=\\bar x\\bar y+x\\bar y+xy$，也可以写成 $F(x,y)=\\bar y+x$；后者更简洁（more concise）$\\to$ **在组合电路中使用的逻辑门更少**。于是问题变成：**how to simplify a Boolean expression?（如何化简布尔表达式？）**"
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$F$"
      ],
      "rows": [
        [
          "0",
          "0",
          "1"
        ],
        [
          "0",
          "1",
          "0"
        ],
        [
          "1",
          "0",
          "1"
        ],
        [
          "1",
          "1",
          "1"
        ]
      ]
    },
    {
      "t": "h",
      "md": "九.1 Karnaugh map（K-map，卡诺图）"
    },
    {
      "t": "p",
      "md": "[[Karnaugh map|卡诺图]]（Karnaugh map，K-map）："
    },
    {
      "t": "ul",
      "items": [
        "- 一种化简布尔表达式的**可视化方法**（a visual method to simplify a Boolean expression）；\n- 反复地找出**最大的 1 的 [[block|块]]**（iteratively find the largest block of 1s）；\n- 适用于变量个数较少的情形（applicable when the number of variables is low，$\\le 6$）。"
      ]
    },
    {
      "t": "note",
      "md": "块越大（the largest block）$\\to$ 乘积项中的变量越少（the product of the fewest variables）。"
    },
    {
      "t": "p",
      "md": "**例 1**：化简 $F(x,y)=\\bar x\\bar y+x\\bar y+xy$。"
    },
    {
      "t": "ul",
      "items": [
        "- 画出 K-map，为每一个项写上 \"1\"；\n- 识别块：块 $x$（第一行的两个 1）、块 $\\bar y$（第二列的两个 1）；\n- 因此得到：$$F(x,y)=\\bar y+x$$"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$y$",
        "$\\bar y$"
      ],
      "rows": [
        [
          "$x$",
          "1",
          "1"
        ],
        [
          "$\\bar x$",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "note",
      "md": "块**允许重叠**（blocks are allowed to overlap）$\\to$ 这样可以减少乘积项中变量的个数。"
    },
    {
      "t": "h",
      "md": "九.2 K-map with 3 variables（三变量卡诺图）"
    },
    {
      "t": "p",
      "md": "**例 2**：化简 $F(x,y,z)=x\\bar y\\bar z+x\\bar yz+\\bar xyz+\\bar x\\bar y$。"
    },
    {
      "t": "ul",
      "items": [
        "- 画出 K-map：由于二维的限制（due to the 2D constraint），每一列写两个变量；\n- 注意列的顺序是 $yz,\\ y\\bar z,\\ \\bar y\\bar z,\\ \\bar yz$，**首尾两列也是相邻的**（note that these two columns are adjacent）；\n- $\\bar x\\bar y$ 会覆盖两个 1（$\\bar x\\bar y$ leads to two 1s）；\n- 识别块：块 $\\bar y$；块 $\\bar xz$；\n- 写出表达式：$$F(x,y,z)=\\bar y+\\bar xz$$"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$yz$",
        "$y\\bar z$",
        "$\\bar y\\bar z$",
        "$\\bar yz$"
      ],
      "rows": [
        [
          "$x$",
          "0",
          "0",
          "1",
          "1"
        ],
        [
          "$\\bar x$",
          "1",
          "0",
          "1",
          "1"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**例 3**：化简 $F(x,y,z)=xyz+x\\bar z+x\\bar yz+\\bar x\\bar yz+\\bar xyz$。"
    },
    {
      "t": "ul",
      "items": [
        "- 画出 K-map（列的顺序同上）；\n- 识别块：块 $x$（第一行的四个 1）；块 $z$（$z=1$ 的两列，因首尾相邻而连成一个 $2\\times 2$ 的块）；\n- 写出表达式：$$F(x,y,z)=x+z$$"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$yz$",
        "$y\\bar z$",
        "$\\bar y\\bar z$",
        "$\\bar yz$"
      ],
      "rows": [
        [
          "$x$",
          "1",
          "1",
          "1",
          "1"
        ],
        [
          "$\\bar x$",
          "1",
          "0",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "h",
      "md": "九.3 K-map with 4 variables（四变量卡诺图）"
    },
    {
      "t": "p",
      "md": "**例 4**：化简 $F(w,x,y,z)=\\bar xy\\bar z+\\bar x\\bar y\\bar z+wxz+\\bar wxz$。"
    },
    {
      "t": "ul",
      "items": [
        "- 画出 K-map：行是 $wx$（顺序 $wx,\\ w\\bar x,\\ \\bar w\\bar x,\\ \\bar wx$），列是 $yz$（顺序 $yz,\\ y\\bar z,\\ \\bar y\\bar z,\\ \\bar yz$）；\n- 识别块：块 $\\bar x\\bar z$；块 $xz$；\n- 写出表达式：$$F(w,x,y,z)=\\bar x\\bar z+xz$$"
      ]
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$yz$",
        "$y\\bar z$",
        "$\\bar y\\bar z$",
        "$\\bar yz$"
      ],
      "rows": [
        [
          "$wx$",
          "1",
          "0",
          "0",
          "1"
        ],
        [
          "$w\\bar x$",
          "0",
          "1",
          "1",
          "0"
        ],
        [
          "$\\bar w\\bar x$",
          "0",
          "1",
          "1",
          "0"
        ],
        [
          "$\\bar wx$",
          "1",
          "0",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "h",
      "md": "九.4 K-map: possible types of blocks（可能的块形状）"
    },
    {
      "t": "tbl",
      "head": [
        "K-map 的变量个数",
        "可能的块（types of blocks）"
      ],
      "rows": [
        [
          "2 个变量",
          "$1\\times1$；$2\\times1$ 或 $1\\times2$；$2\\times2$（all，全部）"
        ],
        [
          "3 个变量",
          "$1\\times1$；$2\\times1$ 或 $1\\times2$；$2\\times2$；$4\\times1$；$4\\times2$（all，全部）"
        ],
        [
          "4 个变量",
          "$1\\times1$；$2\\times1$ 或 $1\\times2$；$2\\times2$；$4\\times1$ 或 $1\\times4$；$4\\times2$ 或 $2\\times4$；$4\\times4$（all，全部）"
        ]
      ]
    },
    {
      "t": "h",
      "md": "十、Don't care conditions（[[don't care condition|无关项]]）"
    },
    {
      "t": "p",
      "md": "在有些应用中，我们**不关心**某些输入组合的取值（we don't care certain combinations of input values），在 K-map 中用 `*` 表示这些格子。"
    },
    {
      "t": "p",
      "md": "**例**：用一个 4 位编码表示一个数字（0 到 9），给定这 4 个位 $(w,x,y,z)$，如何判断这个数字是否 $\\ge 5$？"
    },
    {
      "t": "tbl",
      "head": [
        "digit",
        "$w,x,y,z$",
        "$F$"
      ],
      "rows": [
        [
          "0",
          "0, 0, 0, 0",
          "0"
        ],
        [
          "1",
          "0, 0, 0, 1",
          "0"
        ],
        [
          "2",
          "0, 0, 1, 0",
          "0"
        ],
        [
          "3",
          "0, 0, 1, 1",
          "0"
        ],
        [
          "4",
          "0, 1, 0, 0",
          "0"
        ],
        [
          "5",
          "0, 1, 0, 1",
          "1"
        ],
        [
          "6",
          "0, 1, 1, 0",
          "1"
        ],
        [
          "7",
          "0, 1, 1, 1",
          "1"
        ],
        [
          "8",
          "1, 0, 0, 0",
          "1"
        ],
        [
          "9",
          "1, 0, 0, 1",
          "1"
        ]
      ]
    },
    {
      "t": "p",
      "md": "首先画出如下的 K-map（未出现的编码 1010–1111 记为 `*`）："
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$yz$",
        "$y\\bar z$",
        "$\\bar y\\bar z$",
        "$\\bar yz$"
      ],
      "rows": [
        [
          "$wx$",
          "*",
          "*",
          "*",
          "*"
        ],
        [
          "$w\\bar x$",
          "*",
          "*",
          "1",
          "1"
        ],
        [
          "$\\bar w\\bar x$",
          "0",
          "0",
          "0",
          "0"
        ],
        [
          "$\\bar wx$",
          "1",
          "1",
          "0",
          "1"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Idea（思路）**：先找最大的 1 的块，然后只要它覆盖的仍是 1 或 `*`，就继续把它扩大；注意**我们并不需要覆盖所有的 `*`**（we are not required to cover all `*`s）。"
    },
    {
      "t": "ul",
      "items": [
        "- 识别块：块 $w$；块 $xy$；块 $xz$；\n- 写出表达式：$$F(w,x,y,z)=w+xy+xz$$"
      ]
    },
    {
      "t": "h",
      "md": "十一、Summary（小结）"
    },
    {
      "t": "ul",
      "items": [
        "- Boolean expressions and functions（布尔表达式与布尔函数）\n- Logic gates（逻辑门）\n- Minimization of circuits（电路的化简）"
      ]
    },
    {
      "t": "p",
      "md": "Please read Chapter 12 in the textbook.（请阅读教材第 12 章。）"
    }
  ],
  "terms": [
    [
      "Boolean algebra",
      "布尔代数"
    ],
    [
      "Boolean expression",
      "布尔表达式"
    ],
    [
      "complement",
      "补"
    ],
    [
      "Boolean sum",
      "布尔和"
    ],
    [
      "Boolean product",
      "布尔积"
    ],
    [
      "identity",
      "恒等式"
    ],
    [
      "De Morgan's laws",
      "德摩根律"
    ],
    [
      "Absorption laws",
      "吸收律"
    ],
    [
      "duality",
      "对偶"
    ],
    [
      "duality principle",
      "对偶原理"
    ],
    [
      "Boolean function",
      "布尔函数"
    ],
    [
      "literal",
      "文字"
    ],
    [
      "sum-of-products expansion",
      "积之和展开"
    ],
    [
      "logic gate",
      "逻辑门"
    ],
    [
      "integrated circuit",
      "集成电路"
    ],
    [
      "inverter",
      "反相器"
    ],
    [
      "combinational circuit",
      "组合电路"
    ],
    [
      "majority voting",
      "多数表决"
    ],
    [
      "half adder",
      "半加器"
    ],
    [
      "Karnaugh map",
      "卡诺图"
    ],
    [
      "block",
      "块"
    ],
    [
      "don't care condition",
      "无关项"
    ]
  ],
  "qids": [
    "cm-11-01",
    "cm-11-02",
    "cm-11-03",
    "cm-11-04"
  ]
});

  /* ---------- L13 第13讲 期末复习 ---------- */
  T.push({
  "no": "L13",
  "title": "第13讲 期末复习",
  "titleEn": "Lecture 13 Revision",
  "tags": [
    "Revision",
    "Discrete Mathematics",
    "Exam",
    "Logic",
    "Graphs"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲是期末复习课。复习内容按讲次串讲：`#2` 逻辑与证明、`#3` 基本结构、`#4` 算法、`#5` 归纳与递归、`#6` 计数、`#7,8` 图、`#9` 流网络、`#12` 布尔代数与电路。"
    },
    {
      "t": "h",
      "md": "一、[[Exam|考试]]信息"
    },
    {
      "t": "tbl",
      "head": [
        "项目",
        "内容"
      ],
      "rows": [
        [
          "时间",
          "15:15–18:15，12 月 15 日"
        ],
        [
          "地点([[Venue|考场]])",
          "SH2；Kwong On Jubilee Sports Centre 的主场馆 (Main Hall)"
        ],
        [
          "范围([[Scope|考核范围]])",
          "Lectures 2–12"
        ],
        [
          "题型([[Format|卷面形式]])",
          "5 道大题，共 10 道小题 (sub-questions)"
        ]
      ]
    },
    {
      "t": "note",
      "md": "考生须知 (Instructions to candidates)：\n- 可以使用**计算器**。\n- 所有答案请写在**答题册** (answer book) 上。\n- 允许带**两张 A4 纸**作为参考资料 (reference material)。"
    },
    {
      "t": "h",
      "md": "二、离散数学的题目类型 (Types of questions in discrete math)"
    },
    {
      "t": "note",
      "md": "本课程考题基本落在以下六类：\n1. **计算结果** (calculate the result)。\n2. **判定**对象 X 是否满足要求 (test whether object X satisfies requirement)。\n3. **构造**满足要求的对象 X (construct an object X so that it satisfies ...)。\n4. **证明**一个命题 (prove a statement)。\n5. **运行算法**（在图/树上）并写出运行步骤与结果 (run an algorithm and show running steps)。\n6. **分析算法**（正确性、运行时间等）(analyze an algorithm: correctness, running time)。"
    },
    {
      "t": "warn",
      "md": "第 5 类题要求把**运行步骤**写清楚，而不只是给出最终结果；第 6 类题要区分「正确性证明」与「运行时间分析」两种问法。"
    },
    {
      "t": "h",
      "md": "三、#2 [[Logic and Proofs|逻辑与证明]] 复习"
    },
    {
      "t": "note",
      "md": "本讲列出的复习要点：\n- [[Proposition logic|命题逻辑]]\n- [[Predicates and quantifiers|谓词与量词]]\n- [[Rules of inference|推理规则]]\n- [[Proof methods|证明方法]]\n- 证明中的错误 (mistakes in proofs)"
    },
    {
      "t": "h",
      "md": "1. [[Logical equivalence|逻辑等价]]"
    },
    {
      "t": "note",
      "md": "什么是逻辑等价？两个命题公式在所有取值下真值都相同，即 $p \\equiv q$。\n\n如何证明逻辑等价？两种方法：\n1. 用**真值表** (truth table)；\n2. 套用**已知恒等式** (known identities)。"
    },
    {
      "t": "note",
      "md": "例：证明 $(p \\lor q) \\lor r \\equiv p \\lor (q \\lor r)$（$\\lor$ 的结合律），用真值表："
    },
    {
      "t": "tbl",
      "head": [
        "$p$",
        "$q$",
        "$r$",
        "$p \\lor q$",
        "$(p \\lor q) \\lor r$",
        "$q \\lor r$",
        "$p \\lor (q \\lor r)$"
      ],
      "rows": [
        [
          "T",
          "T",
          "T",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "T",
          "F",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "T",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "T",
          "F",
          "F",
          "T",
          "T",
          "F",
          "T"
        ],
        [
          "F",
          "T",
          "T",
          "T",
          "T",
          "T",
          "T"
        ],
        [
          "F",
          "T",
          "F",
          "T",
          "T",
          "T",
          "F"
        ],
        [
          "F",
          "F",
          "T",
          "F",
          "T",
          "T",
          "T"
        ],
        [
          "F",
          "F",
          "F",
          "F",
          "F",
          "F",
          "F"
        ]
      ]
    },
    {
      "t": "note",
      "md": "最后两列完全相同，故 $(p \\lor q) \\lor r \\equiv p \\lor (q \\lor r)$。"
    },
    {
      "t": "h",
      "md": "2. [[Quantifiers|量词]]"
    },
    {
      "t": "note",
      "md": "常见论域 (well-known domains)：\n- $\\mathbb{N}$：正整数论域 (the domain of positive integers)\n- $\\mathbb{Z}$：整数论域 (the domain of integers)"
    },
    {
      "t": "note",
      "md": "下列语句读作什么？\n- $\\exists x \\in \\mathbb{N}\\; P(x)$\n- $\\exists y \\in \\mathbb{N}\\; Q(y)$\n- $\\exists x \\in \\mathbb{N}\\; \\forall y \\in \\mathbb{N}\\; R(x,y)$\n\n注意量词的**顺序**与**嵌套**：$\\exists x \\forall y$ 与 $\\forall y \\exists x$ 含义不同；复习时要能读懂每个量词约束的是哪个变量。"
    },
    {
      "t": "h",
      "md": "3. [[How to prove a statement|如何证明一个命题]]"
    },
    {
      "t": "note",
      "md": "证明方法清单：\n- [[Direct proof|直接证明]]（证 $p \\to q$）\n- [[Proof by contraposition|逆否证明]]（证 $p \\to q$，改证 $\\neg q \\to \\neg p$）\n- [[Proof by contradiction|反证法]]（证 $p$，即假设 $\\neg p$ 导出矛盾）\n- [[Proof by cases / exhaustion|分情况证明 / 穷举证明]]\n- [[Existence proofs|存在性证明]]（构造性 constructive、非构造性 non-constructive）\n- 用**反例**证伪 (disprove by counter example)\n- [[Proof by induction|归纳证明]]"
    },
    {
      "t": "warn",
      "md": "还要求会「找出证明中的错误」——复习时注意检查：是否用错了推理规则、是否从特例推广到了一般、是否隐含使用了待证的结论。"
    },
    {
      "t": "h",
      "md": "四、#3 [[Basic Structures|基本结构]] 复习"
    },
    {
      "t": "note",
      "md": "复习要点：[[Sets|集合]]、[[Sequences|序列]]、[[Matrices|矩阵]]、[[Functions|函数]]、[[Relations|关系]]。"
    },
    {
      "t": "h",
      "md": "1. [[Set operations|集合运算]]示例"
    },
    {
      "t": "note",
      "md": "先要清楚每种运算的含义，再计算具体表达式。设 $S = \\{1,2,3\\}$，$T = \\{2,5,6\\}$，$R = \\{1,2,3,5\\}$。"
    },
    {
      "t": "tbl",
      "head": [
        "表达式",
        "结果"
      ],
      "rows": [
        [
          "$S \\subset T$",
          "False"
        ],
        [
          "$S \\subset R$",
          "True"
        ],
        [
          "$S = T$",
          "False"
        ],
        [
          "$S \\cup T$",
          "$\\{1,2,3,5,6\\}$"
        ],
        [
          "$S \\cap T$",
          "$\\{2\\}$"
        ],
        [
          "$S - T$",
          "$\\{1,3\\}$"
        ],
        [
          "$|S|$",
          "3"
        ]
      ]
    },
    {
      "t": "h",
      "md": "2. [[Set Identities|集合恒等式]]"
    },
    {
      "t": "note",
      "md": "要用**基本定义**去证明集合恒等式，也要会**使用**恒等式化简表达式。本讲列出的恒等式："
    },
    {
      "t": "tbl",
      "head": [
        "恒等式",
        "名称"
      ],
      "rows": [
        [
          "$S \\cup \\varnothing = S$",
          "并的幺元 (identity)"
        ],
        [
          "$S \\cap \\varnothing = \\varnothing$",
          "交的零元 (domination)"
        ],
        [
          "$S \\cup T = T \\cup S$",
          "交换律 (commutative)"
        ],
        [
          "$S \\cap T = T \\cap S$",
          "交换律 (commutative)"
        ],
        [
          "$(S \\cup T) \\cup R = S \\cup (T \\cup R)$",
          "结合律 (associative)"
        ],
        [
          "$(S \\cap T) \\cap R = S \\cap (T \\cap R)$",
          "结合律 (associative)"
        ],
        [
          "$S \\cup (T \\cap R) = (S \\cup T) \\cap (S \\cup R)$",
          "分配律 (distributive)"
        ],
        [
          "$S \\cap (T \\cup R) = (S \\cap T) \\cup (S \\cap R)$",
          "分配律 (distributive)"
        ]
      ]
    },
    {
      "t": "h",
      "md": "3. [[Sequence|序列]]"
    },
    {
      "t": "note",
      "md": "什么是序列 (sequence)？求和记号 $\\sum$ 是什么意思？\n\n例：计算 $\\sum_{i=1}^{5} i^3$。由立方和的定义，\n$$\\sum_{i=1}^{5} i^3 = 1^3 + 2^3 + 3^3 + 4^3 + 5^3 = 1 + 8 + 27 + 64 + 125 = 225$$"
    },
    {
      "t": "h",
      "md": "4. [[Properties of a function|函数的性质]]"
    },
    {
      "t": "note",
      "md": "要会判断给定对应关系 $f$ 是不是函数，以及函数是否**单射** (one-to-one)、是否**满射** (onto)：\n- 是不是函数：每个定义域元素是否恰好对应一个值；\n- 是否 one-to-one：不同输入是否给出不同输出；\n- 是否 onto：陪域中每个元素是否都被取到。"
    },
    {
      "t": "h",
      "md": "5. [[Properties of a relation|关系的性质]]"
    },
    {
      "t": "note",
      "md": "什么是关系 (relation)？如何检查关系是否满足某些性质？\n\n例：在 $\\mathbb{N} \\times \\mathbb{N}$ 上定义\n$$R_{LEQ} = \\{(x,y) \\in \\mathbb{N} \\times \\mathbb{N} \\mid x \\le y\\}$$"
    },
    {
      "t": "note",
      "md": "**自反性 (reflexive)**：$\\forall x \\in \\mathbb{N}$，$x \\le x$，因此 $(x,x) \\in R_{LEQ}$。\n\n**不对称 (not symmetric)**：反例 $(1,2) \\in R_{LEQ}$，但 $(2,1) \\notin R_{LEQ}$。\n\n**传递性 (transitive)**：设 $x,y,z \\in \\mathbb{N}$，若 $(x,y) \\in R_{LEQ} \\land (y,z) \\in R_{LEQ}$，则 $x \\le y$ 且 $y \\le z$，于是 $x \\le z$，从而 $(x,z) \\in R_{LEQ}$。"
    },
    {
      "t": "warn",
      "md": "证「不具有某性质」用**一个反例**即可；证「具有某性质」必须对**任意**元素作一般性论证。"
    },
    {
      "t": "h",
      "md": "五、#4 [[Algorithms|算法]] 复习"
    },
    {
      "t": "note",
      "md": "复习要点：什么是计算问题 (computational problem)？什么是算法？算法的运行步数 (running steps)？如何分析算法的最坏情况运行时间？"
    },
    {
      "t": "h",
      "md": "1. 算法与运行步数 (Algorithms & Running Steps)"
    },
    {
      "t": "note",
      "md": "运行步数取决于算法中**重要变量** (important variables) 与所用的**数据结构**。可以用**画图**的方式辅助演示算法的中间状态。"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Selection-Sort (Array A, Integer n)\n1. for integer i <- 1 to n-1\n2.     k <- i\n3.     for integer j <- i+1 to n\n4.         if A[k] > A[j] then\n5.             k <- j\n6.     swap A[i] and A[k]"
    },
    {
      "t": "note",
      "md": "以输入数组 `5 1 2 1 4`（$n = 5$）为例，外层 $i$ 从 1 到 4 各执行一轮，每轮把当前未排序部分的最小值换到位置 $i$：\n- `i=1`：`1 5 2 1 4`\n- `i=2`：`1 2 5 1 4` → 排好后为 `1 2 5 1 4`\n- `i=3`：`1 2 1 5 4`\n- `i=4`：`1 2 1 4 5`\n- `i=5`：`1 2 1 4 5`（$i$ 只需到 $n-1$）\n\n最终得到 `1 2 1 4 5`。"
    },
    {
      "t": "h",
      "md": "2. [[Asymptotic running time|渐近运行时间]]"
    },
    {
      "t": "note",
      "md": "如何用**定义**说明「$T(n)$ 是 $O(n^2)$」？即找出常数 $c$ 与 $n_0$，使得对所有 $n \\ge n_0$ 都有 $T(n) \\le c\\,n^2$。\n\n如何分析算法的最坏情况时间复杂度？如何**化简** $O$-记号？"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "NestedLoop (...)\n1. for integer ...\n2.     for int...\n3.         pri..."
    },
    {
      "t": "warn",
      "md": "嵌套循环的代价要按「每层迭代次数相乘/相加」逐层累加；化简 $O$-记号时只保留**最高阶项**并去掉常数因子。"
    },
    {
      "t": "h",
      "md": "六、#5 [[Induction and Recursion|归纳与递归]] 复习"
    },
    {
      "t": "note",
      "md": "复习要点：[[Mathematical induction|数学归纳法]]（以及强归纳法 strong induction）、[[Recursive definitions|递归定义]]、[[Recursive algorithms|递归算法]]。"
    },
    {
      "t": "h",
      "md": "1. [[Mathematical induction|数学归纳法]]示例"
    },
    {
      "t": "note",
      "md": "例：证明 $n^3 - n$ 能被 3 整除。令 $P(n)$ 为命题「$n^3 - n$ 能被 3 整除」。\n\n**基础步 (basis step)**：当 $n = 1$ 时，$1^3 - 1 = 0$，0 能被 3 整除，故 $P(1)$ 为真。\n\n**归纳步 (inductive step)**：假设 $P(k)$ 为真，即存在整数 $b$ 使 $k^3 - k = 3b$。考虑 $k+1$ 的情形：\n$$(k+1)^3 - (k+1) = (k^3 + 3k^2 + 3k + 1) - (k+1) = 3b + 3k^2 + 3k = 3\\,(b + k^2 + k)$$\n因此 $P(k+1)$ 为真。"
    },
    {
      "t": "h",
      "md": "2. [[Recursive definition|递归定义]]：[[Binomial coefficients|二项式系数]]"
    },
    {
      "t": "note",
      "md": "考虑如下递归定义：\n- **基础步**：对任意 $n \\ge 0$，$C(n,0) = C(n,n) = 1$；\n- **递归步**：$C(n,k) = C(n-1,k-1) + C(n-1,k)$，其中 $0 < k < n$。"
    },
    {
      "t": "note",
      "md": "事实上 $C(n,k)$ 就是**二项式系数** (binomial coefficient)，其组合意义是：从 $n$ 个元素中取 $k$ 个的**组合数**。\n\n如何求 $C(3,1)$？\n- 手工计算，或\n- 按上面的递归定义运行一个算法。"
    },
    {
      "t": "h",
      "md": "3. [[Recursive algorithm|递归算法]]示例"
    },
    {
      "t": "code",
      "lang": "text",
      "code": "Merge-Sort (Array A[1..n])\n1. if n > 1\n2.     m <- floor(n/2)\n3.     B[1..m] <- A[1..m]\n4.     C[1..n-m] <- A[m+1..n]\n5.     Merge-Sort (B[1..m])\n6.     Merge-Sort (C[1..n-m])\n7.     A[1..n] <- Merge (B[1..m], C[1..n-m])"
    },
    {
      "t": "note",
      "md": "要点：把数组 $A$ 在原处分成前半 `B` 与后半 `C`，先**递归排序**两半，再用 `Merge` 合并回 $A$。"
    },
    {
      "t": "h",
      "md": "七、#6 [[Counting|计数]] 复习"
    },
    {
      "t": "note",
      "md": "复习要点：\n- 计数的基本概念；\n- [[Product rule|乘法法则]]、[[Sum rule|加法法则]]、[[Subtraction rule|减法法则]]、[[Division rule|除法法则]]；\n- [[Inclusion-exclusion principle|容斥原理]]；\n- [[Pigeonhole principle|鸽巢原理]]及其推广版本；\n- [[Permutations and combinations|排列与组合]]及其推广版本。"
    },
    {
      "t": "h",
      "md": "1. [[Pigeonhole principle|鸽巢原理]]"
    },
    {
      "t": "note",
      "md": "例：对每个整数 $n$，都存在某个由数字 1 组成的十进制数，使它能被 $n$ 整除（即其十进制表示只含某些数字），证明思路分两步：\n- **第 1 步**：如何构造 $n+1$ 个物体与 $n$ 个盒子？\n- **第 2 步**：如何由第 1 步推出结论？"
    },
    {
      "t": "note",
      "md": "把 $n+1$ 个由数字 1 组成的数（如 $1, 11, 111, \\dots$）按「模 $n$ 的余数」放入 $n$ 个盒子。由鸽巢原理，至少有两个数落在同一个盒子，即它们同余模 $n$，其差能被 $n$ 整除；而这个差形如 $\\underbrace{11\\dots1}_{k}0\\dots0$，去掉末尾的 0 后仍是一个只由 1 组成的数且能被 $n$ 整除。"
    },
    {
      "t": "h",
      "md": "2. [[Combinations|组合数]] $C(n,r)$ 的使用"
    },
    {
      "t": "note",
      "md": "- $C(n,r)$：**无重复**组合数 (the number of combinations without repetition)；\n- $C(n+r-1, r)$：**允许重复**的组合数 (the number of combinations with repetition)。"
    },
    {
      "t": "note",
      "md": "例：求方程 $t + u + v = k$ 的整数解个数，其中 $t,u,v$ 都是 0 到 5 之间的整数。两种思路：\n- **用 $C(n,r)$**：考虑一个含 $n$ 个元素的集合，每个解 $(t,u,v)$ 对应从中选 $r$ 个的一种方式（即把「分配」看成组合选择）。\n- **用 $C(n+r-1,r)$**：令 $a = t$、$b = t + u + 1$；每个解 $(t,u,v)$ 唯一对应一对 $(a,b)$。于是答案等于满足\n$$a < b,\\quad a \\in [0..5],\\quad b \\in [1..6]$$\n的 $(a,b)$ 选取方式数，即从集合 $\\{0,1,2,\\dots,6\\}$ 中取 2 个的组合数：\n$$\\binom{7}{2} = 21$$\n\n（矩形图上的 $+\\!-\\!+\\!-\\!+\\!-\\!+\\!-\\!+\\!-\\!+\\!-\\!+$ 与刻度 $1,2,3,4,5,6$ 即该计数方式的图示。）"
    },
    {
      "t": "h",
      "md": "八、#7,8 [[Graphs|图]] 复习"
    },
    {
      "t": "note",
      "md": "复习要点：图术语与特殊图、[[Graph isomorphism|图同构]]、[[Connectivity|连通性]]、图遍历算法、[[Euler and Hamilton paths|欧拉路径与哈密顿路径]]、最短路问题、[[Dijkstra's algorithm|Dijkstra 算法]]、[[Planar graphs|平面图]]、[[Graph coloring|图着色]]。"
    },
    {
      "t": "h",
      "md": "1. [[Isomorphism|同构]]与顶点连通度 (vertex connectivity)"
    },
    {
      "t": "note",
      "md": "如何说明 $G$ 与 $H$ **同构**？找出一个保持邻接关系的双射（两图有相同的顶点数、边数、度序列等不变量）。\n\n如何说明 $G$ 与 $H$ **不同构**？找出一个不变量在两者上取值不同（如度序列不同、连通分支数不同、某长度的环的数量不同等）。\n\n如何求一个图的**顶点连通度** (vertex connectivity) $\\kappa(G)$？即最少要删去多少个顶点才能使图不连通（或只剩一个顶点）。"
    },
    {
      "t": "h",
      "md": "2. [[Graph traversals|图遍历]]"
    },
    {
      "t": "note",
      "md": "- 如何在图上运行**深度优先搜索** ([[Depth-first search|DFS]])：沿一条路走到底再回溯；\n- 如何在图上运行**广度优先搜索** ([[Breadth-first search|BFS]])：按距离一层层扩展。\n\n例：起点 $s = 1$，运行时按访问顺序写出顶点序列（OCR 中给出的顶点编号为 $2,7,3,4,5$ 等）。"
    },
    {
      "t": "h",
      "md": "3. 欧拉/哈密顿路径与回路 (Euler/Hamilton paths/circuits)"
    },
    {
      "t": "note",
      "md": "如何判断一个图是否含有：\n- **欧拉路径** (Euler path)：恰有 0 个或 2 个奇度顶点；\n- **欧拉回路** (Euler circuit)：所有顶点都是偶度；\n- **哈密顿路径** (Hamilton path)：经过每个顶点恰好一次的路径；\n- **哈密顿回路** (Hamilton circuit)：经过每个顶点恰好一次并回到起点的回路。\n\n题目给出 Graph F、Graph G、Graph H 三个图作为判断对象。"
    },
    {
      "t": "h",
      "md": "4. 最短路、平面图与图着色"
    },
    {
      "t": "note",
      "md": "- 如何求图上从 $s$ 到 $t$ 的**最短路**？用 [[Dijkstra's algorithm|Dijkstra 算法]]（逐步确定距 $s$ 最近的未确定顶点并松弛其邻边）。\n- 如何判断一个图是否**平面图** (planar graph)？即能否画在平面上使任意两边不在非顶点处相交。\n- 如何求一个图的**色数** (chromatic number) $\\chi(G)$？依次判断：\n  - 能否只用 1 种颜色？为什么能/不能？\n  - 能否只用 2 种颜色？为什么能/不能？\n  - 能否只用 3 种颜色？为什么能/不能？"
    },
    {
      "t": "h",
      "md": "九、#9 [[Flow networks|流网络]] 复习"
    },
    {
      "t": "note",
      "md": "- 什么是流网络 (flow networks)？\n- 什么是**最大流问题** (maximum flow problem)？\n- [[Ford-Fulkerson algorithm|Ford-Fulkerson 算法]]：使用**残留网络** (residual network)；\n- [[Edmonds-Karp algorithm|Edmonds-Karp 算法]]：用 **BFS 路径**选取增广路；\n- **匹配** (matching)：最大流问题的另一个应用。"
    },
    {
      "t": "h",
      "md": "1. [[Edmonds-Karp algorithm|Edmonds-Karp 算法]]示例"
    },
    {
      "t": "note",
      "md": "**第 1 次迭代 (Iteration 1)**：\n1. 在**残留网络** $G_f$ 上做 BFS，找一条从 $s$ 到 $t$ 的路径（要求边数最少）；该路径为 $\\langle s, v_1, v_3, t \\rangle$；同时得到 $s$ 到各顶点 $(s, v_1, v_2, v_3, v_4, t)$ 的距离。\n2. 取路径上**最小残留容量** $c_f(u,v)$ 作为本次增广量。\n3. 更新流量 (update the flow)。\n\n例中的网络含容量 $12, 16, 20, 9, 4, 7, 13, 4, 14, 4$ 等边。问题：更新后残留网络 $G_f$ 会变成什么样？"
    },
    {
      "t": "h",
      "md": "2. [[Matching|匹配]]：最大流的应用"
    },
    {
      "t": "note",
      "md": "一个匹配问题（例如把任务分配给工人）可以建模成**二分图** (bipartite graph) 上的最大流问题——同侧的顶点互不相邻。例如工人放左侧、任务放右侧。\n\n**如何确定各边的容量？** 取决于题目描述：一般 $s$ 到左侧每个顶点、右侧每个顶点到 $t$、以及左右之间的边的容量都取 1（图中标出的容量均为 1）。"
    },
    {
      "t": "warn",
      "md": "建模匹配问题时，容量设置是关键：源到左、右到汇以及中间边的容量必须与题目「每人/每任务只能用一次」的限制一致。"
    },
    {
      "t": "h",
      "md": "十、#12 [[Boolean Algebra|布尔代数]]与电路复习"
    },
    {
      "t": "note",
      "md": "复习要点：布尔表达式与布尔函数、[[Logic gates|逻辑门]]与[[Combinatorial circuit|组合电路]]、用 [[K-map|卡诺图]]化简电路。"
    },
    {
      "t": "h",
      "md": "1. 如何证明一个布尔恒等式"
    },
    {
      "t": "note",
      "md": "可以用**真值表**证明，也可以用**已知恒等式**证明。\n\n例：用真值表证明 $\\overline{(x \\cdot y)} = \\overline{x} + \\overline{y}$（即 [[De Morgan's law|德摩根律]]）："
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$y$",
        "$x \\cdot y$",
        "$\\overline{(x \\cdot y)}$",
        "$\\overline{x}$",
        "$\\overline{y}$",
        "$\\overline{x} + \\overline{y}$"
      ],
      "rows": [
        [
          "0",
          "0",
          "0",
          "1",
          "1",
          "1",
          "1"
        ],
        [
          "0",
          "1",
          "0",
          "1",
          "1",
          "0",
          "1"
        ],
        [
          "1",
          "0",
          "0",
          "1",
          "0",
          "1",
          "1"
        ],
        [
          "1",
          "1",
          "1",
          "0",
          "0",
          "0",
          "0"
        ]
      ]
    },
    {
      "t": "note",
      "md": "第 4 列与第 7 列完全相同，故恒等式成立。注意这里的记号：布尔代数中 $\\cdot$ 表示 AND、$+$ 表示 OR、上划线表示 NOT。"
    },
    {
      "t": "h",
      "md": "2. [[Combinatorial circuit|组合电路]]"
    },
    {
      "t": "note",
      "md": "例：用 AND、OR、NOT 门把 $F(x,y) = x \\cdot y + (\\overline{x} + y)$ 表示为组合电路。\n\n做法：先分别得到子表达式 $x \\cdot y$ 与 $\\overline{x} + y$（$\\overline{x}$ 由 NOT 门得到），再用一个 OR 门把两者合成输出 $F(x,y)$。"
    },
    {
      "t": "h",
      "md": "3. [[K-map|卡诺图]] (K-map)"
    },
    {
      "t": "note",
      "md": "什么是卡诺图 (K-map)？一种把真值表按**格雷码**顺序排成网格、便于目视合并相邻项以化简布尔表达式的图。\n\n例：化简\n$$F(x,y,z) = x\\overline{y}\\,\\overline{z} + \\overline{x}y + x\\overline{y}z$$"
    },
    {
      "t": "note",
      "md": "步骤：\n1. 画出 3 变量的 K-map；\n2. **圈块 (identify blocks)**：\n   - $x$ 的块：整行 $x$ 取值为 1 的两格合并，得到 $x$（注意这两格可以合并）；\n   - $\\overline{z}$ 的块：把 $z$ 取值为 0 的格合并，得到 $\\overline{z}$。\n3. 写出表达式："
    },
    {
      "t": "code",
      "lang": "text",
      "code": "        yz\n        00  01  11  10\n  x=0 |  1   0   0   1\n  x=1 |  1   0   0   1\n\nF(x,y,z) = x + z_bar"
    },
    {
      "t": "note",
      "md": "结果：$F(x,y,z) = x + \\overline{z}$。"
    },
    {
      "t": "note",
      "md": "Good Luck!"
    }
  ],
  "terms": [
    [
      "Logic and Proofs",
      "逻辑与证明"
    ],
    [
      "Logical equivalence",
      "逻辑等价"
    ],
    [
      "Quantifiers",
      "量词"
    ],
    [
      "Proof by contradiction",
      "反证法"
    ],
    [
      "Set Identities",
      "集合恒等式"
    ],
    [
      "Relations",
      "关系"
    ],
    [
      "Asymptotic running time",
      "渐近运行时间"
    ],
    [
      "Induction and Recursion",
      "归纳与递归"
    ],
    [
      "Binomial coefficients",
      "二项式系数"
    ],
    [
      "Counting",
      "计数"
    ],
    [
      "Pigeonhole principle",
      "鸽巢原理"
    ],
    [
      "Inclusion-exclusion principle",
      "容斥原理"
    ],
    [
      "Graph isomorphism",
      "图同构"
    ],
    [
      "Connectivity",
      "连通性"
    ],
    [
      "Depth-first search",
      "深度优先搜索"
    ],
    [
      "Euler path",
      "欧拉路径"
    ],
    [
      "Dijkstra's algorithm",
      "Dijkstra 算法"
    ],
    [
      "Chromatic number",
      "色数"
    ],
    [
      "Flow networks",
      "流网络"
    ],
    [
      "Maximum flow problem",
      "最大流问题"
    ],
    [
      "Edmonds-Karp algorithm",
      "Edmonds-Karp 算法"
    ],
    [
      "Matching",
      "匹配"
    ],
    [
      "Boolean Algebra",
      "布尔代数"
    ],
    [
      "Combinatorial circuit",
      "组合电路"
    ],
    [
      "K-map",
      "卡诺图"
    ]
  ],
  "qids": [
    "cm-1-01",
    "cm-1-02",
    "cm-1-03",
    "cm-2-01",
    "cm-2-02",
    "cm-3-01",
    "cm-4-01",
    "cm-5-01",
    "cm-6-01",
    "cm-7-01",
    "cm-8-01",
    "cm-10-01"
  ]
});

  FCMS.registerNotes({ subjectId: 'COMP2012', topics: T });
})(typeof window !== 'undefined' ? window : globalThis);
