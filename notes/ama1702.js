/* ==========================================================================
   AMA1702 Calculus 讲义精读
   --------------------------------------------------------------------------
   依据 2025-26 S1 的 Lecture Notes 1–11 逐讲整理（OCR 自原始 PPT）；中文讲解为主，英文标注专有名词。
   本文件由 /tmp/fcms/lectures/*.json 自动组装，请勿手工编辑结构与块类型。
   区块类型：p / h / ul / ol / code / note / warn / tbl
   行内标记：**粗体**、`代码`、[[english|中文]] 术语标注、$公式$
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('notes/ama1702.js: 必须先加载 js/registry.js');
  var T = [];

  /* ---------- L1 第1讲 集合、不等式、绝对值、函数 ---------- */
  T.push({
  "no": "L1",
  "title": "第1讲 集合、不等式、绝对值、函数",
  "titleEn": "Sets; Inequalities; Absolute Values; Functions; Composite Functions; Functions - Injective, Surjective, Bijective; Inverse Functions",
  "tags": [
    "set",
    "inequality",
    "absolute value",
    "function",
    "domain",
    "range",
    "composite function",
    "injective",
    "surjective",
    "bijective",
    "one-to-one",
    "horizontal line test",
    "inverse function"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "本讲概要"
    },
    {
      "t": "note",
      "md": "本讲（Lecture Notes 1）是整个课程的预备知识：先讲[[set|集合]]与实数区间，再讲[[inequality|不等式]]与[[absolute value|绝对值]]的运算与解法，最后转入[[function|函数]]的基本概念（定义域、值域、图像、四则运算）、[[composite function|复合函数]]，以及函数的[[injective|单射]]、[[surjective|满射]]、[[bijective|双射]]性质与一一函数（反函数的前置概念）。"
    },
    {
      "t": "tbl",
      "head": [
        "小节",
        "内容"
      ],
      "rows": [
        [
          "1 Sets",
          "集合的定义、元素、空集、两种描述方式、子集与相等、交/并/补、常用数集与区间记号"
        ],
        [
          "2 Inequalities",
          "不等式的五条性质、一元一次与二次不等式的求解"
        ],
        [
          "3 Absolute Values",
          "绝对值的定义与六条性质、含绝对值不等式的解法"
        ],
        [
          "4 Functions",
          "函数的定义、机器图/箭头图、定义域与值域、图像、函数的四则运算"
        ],
        [
          "5 Composite Functions",
          "复合函数的定义与定义域、$g\\circ f$ 与 $f\\circ g$ 的区别、多层复合与反求内层函数"
        ],
        [
          "6 Functions - Injective, Surjective, Bijective",
          "函数作为关系、陪域与值域、函数相等的判定、单射/满射/双射及其证明"
        ],
        [
          "7 Inverse Functions",
          "一一函数的两种定义、水平线检验、幂函数的一一性判定"
        ]
      ]
    },
    {
      "t": "h",
      "md": "一、Sets（集合）"
    },
    {
      "t": "p",
      "md": "[[set|集合]]（set）是一堆对象的总体；集合中的对象称为它的[[element|元素]]（element）。“$x\\in A$” 表示“$x$ 是集合 $A$ 的元素”。符号 $\\varnothing$ 表示[[empty set|空集]]（empty set），即不含任何元素的集合。"
    },
    {
      "t": "p",
      "md": "一个集合可以用两种方式描述：其一，列出集合的所有元素，例如 $A=\\{2,3,4,5\\}$；其二，说明集合中一般元素 $x$ 所具有的性质，例如 $A=\\{x: x \\text{ 是整数且 } 2\\le x\\le 5\\}$。集合有时也用韦恩图（Venn diagram）表示。"
    },
    {
      "t": "p",
      "md": "设 $A$ 与 $B$ 是两个集合。如果 $A$ 的每个元素都是 $B$ 的元素，就称 $A$ 是 $B$ 的[[subset|子集]]（subset），记作 $A\\subset B$。如果两个集合含有完全相同的元素，即 $A\\subset B$ 且 $B\\subset A$，就称它们相等，记作 $A=B$。"
    },
    {
      "t": "note",
      "md": "例如 $S=\\{1,2,3,4\\}$ 与 $T=\\{x: x \\text{ 是整数且 } 1\\le x\\le 4\\}$ 是相等的两个集合。"
    },
    {
      "t": "p",
      "md": "三种基本运算：[[intersection|交集]] $A\\cap B=\\{x: x\\in A \\text{ 且 } x\\in B\\}$；[[union|并集]] $A\\cup B=\\{x: x\\in A \\text{ 或 } x\\in B\\}$；[[complement|补集]]（差集）$A\\setminus B=\\{x: x\\in A \\text{ 且 } x\\notin B\\}$。"
    },
    {
      "t": "tbl",
      "head": [
        "运算（取 $A=\\{1,2,3,4\\}$，$B=\\{2,3,5\\}$）",
        "结果"
      ],
      "rows": [
        [
          "$A\\cap B$",
          "$\\{2,3\\}$"
        ],
        [
          "$A\\cup B$",
          "$\\{1,2,3,4,5\\}$"
        ],
        [
          "$A\\setminus B$",
          "$\\{1,4\\}$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "Definition 1.1（Notations，常用记号）：$\\mathbb{N}$ 是正整数集 $\\{1,2,3,4,5,\\dots\\}$；$\\mathbb{Z}$ 是整数集 $\\{\\dots,-3,-2,-1,0,1,2,3,\\dots\\}$；$\\mathbb{Q}$ 是有理数集；$\\mathbb{R}$ 是实数集。它们之间有包含关系 $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$。"
    },
    {
      "t": "p",
      "md": "实数[[interval|区间]]（interval）的记号、集合描述与名称如下（$a<b$）："
    },
    {
      "t": "tbl",
      "head": [
        "区间",
        "集合描述",
        "类型"
      ],
      "rows": [
        [
          "$(a,b)$",
          "$\\{x\\in\\mathbb{R}: a<x<b\\}$",
          "open 开区间"
        ],
        [
          "$(a,b]$",
          "$\\{x\\in\\mathbb{R}: a<x\\le b\\}$",
          "half-open 半开区间"
        ],
        [
          "$[a,b)$",
          "$\\{x\\in\\mathbb{R}: a\\le x<b\\}$",
          "half-open 半开区间"
        ],
        [
          "$[a,b]$",
          "$\\{x\\in\\mathbb{R}: a\\le x\\le b\\}$",
          "closed 闭区间"
        ],
        [
          "$(a,\\infty)$",
          "$\\{x\\in\\mathbb{R}: a<x\\}$",
          "open 开区间"
        ],
        [
          "$[a,\\infty)$",
          "$\\{x\\in\\mathbb{R}: a\\le x\\}$",
          "closed 闭区间"
        ],
        [
          "$(-\\infty,b)$",
          "$\\{x\\in\\mathbb{R}: x<b\\}$",
          "open 开区间"
        ],
        [
          "$(-\\infty,b]$",
          "$\\{x\\in\\mathbb{R}: x\\le b\\}$",
          "closed 闭区间"
        ],
        [
          "$(-\\infty,\\infty)$",
          "$\\mathbb{R}$",
          "open and closed 既开又闭"
        ]
      ]
    },
    {
      "t": "p",
      "md": "PPT 还给出若干 $\\mathbb{R}$ 的子集及其在 $x$ 轴上的图形作为例子：$(-3,1)$、$[-1,2]$、$(-2,3]$、$(-1,\\infty)$、$(-3,0)\\cup(0,2)$、$(-3,-1]\\cup(1,\\infty)$。"
    },
    {
      "t": "h",
      "md": "二、Inequalities（不等式）"
    },
    {
      "t": "p",
      "md": "Theorem 2.1（Properties of Inequalities，不等式的性质）：设 $a,b,c$ 为实数，则"
    },
    {
      "t": "tbl",
      "head": [
        "编号",
        "性质"
      ],
      "rows": [
        [
          "1",
          "若 $a<b$ 且 $b<c$，则 $a<c$（传递性）"
        ],
        [
          "2",
          "若 $a<b$，则 $a+c<b+c$"
        ],
        [
          "3",
          "若 $a<b$ 且 $c>0$，则 $ac<bc$ 且 $\\dfrac{a}{c}<\\dfrac{b}{c}$"
        ],
        [
          "4",
          "若 $a<b$ 且 $c<0$，则 $ac>bc$ 且 $\\dfrac{a}{c}>\\dfrac{b}{c}$（乘/除负数要变号）"
        ],
        [
          "5",
          "若 $ab>0$，则 $a>0$ 且 $b>0$，或者 $a<0$ 且 $b<0$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "Remark：第 5 条看起来非常简单，但它在证明不等式时极其有用。"
    },
    {
      "t": "p",
      "md": "Exercise 2.1：解不等式 $3x-2<5x+7$。"
    },
    {
      "t": "p",
      "md": "Solution 2.1：$3x-2<5x+7 \\Rightarrow -9<2x$（两边加 $-3x-7$）$\\Rightarrow -\\dfrac{9}{2}<x$（两边乘 $\\dfrac{1}{2}$）。故解集为 $\\left(-\\dfrac{9}{2},\\infty\\right)$。"
    },
    {
      "t": "p",
      "md": "Exercise 2.2：解不等式 $11<-3x+2\\le 14$。"
    },
    {
      "t": "p",
      "md": "Solution 2.2：$11<-3x+2\\le 14 \\Rightarrow 9<-3x\\le 12$（两边加 $-2$）$\\Rightarrow -3>x\\ge -4$（两边乘 $-\\dfrac{1}{3}$，不等号反向）。故解集为 $[-4,-3)$。"
    },
    {
      "t": "p",
      "md": "Exercise 2.3：解不等式 $(x-2)(x-5)>0$。"
    },
    {
      "t": "p",
      "md": "Solution 2.3：$(x-2)(x-5)>0 \\Rightarrow$（$x>2$ 且 $x>5$）或（$x<2$ 且 $x<5$）$\\Rightarrow x>5$ 或 $x<2$。故解集为 $(-\\infty,2)\\cup(5,\\infty)$。"
    },
    {
      "t": "warn",
      "md": "解不等式时最容易出错的一步是**乘除负数忘记改变不等号方向**（性质 4）。Exercise 2.2 中乘 $-\\dfrac{1}{3}$ 后，$9<-3x\\le 12$ 必须变成 $-3>x\\ge -4$。"
    },
    {
      "t": "h",
      "md": "三、Absolute Values（绝对值）"
    },
    {
      "t": "p",
      "md": "若 $x$ 是实数，$x$ 的[[absolute value|绝对值]]（absolute value）就是它到原点 $O$ 的距离，记作 $|x|$。"
    },
    {
      "t": "p",
      "md": "Definition 3.1（Absolute Value）："
    },
    {
      "t": "p",
      "md": "$$|x|=\\begin{cases} x, & \\text{若 } x\\ge 0,\\\\ -x, & \\text{若 } x<0. \\end{cases}$$"
    },
    {
      "t": "p",
      "md": "例如 $|3|=3$，$|-4|=4$，$|0|=0$。"
    },
    {
      "t": "p",
      "md": "Theorem 3.1（Properties of Absolute Values，绝对值的性质）：设 $a,b$ 为实数，则"
    },
    {
      "t": "tbl",
      "head": [
        "编号",
        "性质"
      ],
      "rows": [
        [
          "1",
          "$|ab|=|a||b|$；$\\ |a\\pm b|\\le |a|+|b|$（[[triangle inequality|三角不等式]]，triangle inequality）"
        ],
        [
          "2",
          "$|a|<b$ 当且仅当 $-b<a<b$"
        ],
        [
          "3",
          "$|a|\\le b$ 当且仅当 $-b\\le a\\le b$"
        ],
        [
          "4",
          "$|a|^2=a^2$"
        ],
        [
          "5",
          "若 $|a|\\le |b|$，则 $a^2\\le b^2$"
        ],
        [
          "6",
          "若 $|a|>b$，则 $a>b$ 或 $a<-b$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "Remark（Principle，原则）：解含绝对值的不等式，**第一步就是利用上一页列出的性质把绝对值符号去掉**。"
    },
    {
      "t": "p",
      "md": "Exercise 3.1：对实数 $x$ 解不等式 $|x-2|<|x+1|$。"
    },
    {
      "t": "p",
      "md": "Solution 3.1：$|x-2|<|x+1| \\Rightarrow (x-2)^2<(x+1)^2$（用性质 5）$\\Rightarrow x^2-4x+4<x^2+2x+1 \\Rightarrow 6x>3 \\Rightarrow x>\\dfrac{1}{2}$。故解集为 $\\left(\\dfrac{1}{2},\\infty\\right)$。"
    },
    {
      "t": "p",
      "md": "Exercise 3.2：对实数 $x$ 解不等式 $|x-3|<x-1$。"
    },
    {
      "t": "p",
      "md": "Solution 3.2：$|x-3|<x-1 \\Rightarrow -(x-1)<x-3<x-1 \\Rightarrow -x+1<x-3$ 且 $x-3<x-1 \\Rightarrow 4<2x$ 且 $-3<-1$（后者恒成立），即 $x>2$。故解集为 $(2,\\infty)$。"
    },
    {
      "t": "p",
      "md": "Exercise 3.3：对实数 $x$ 解不等式 $|x+1|>2x-1$。"
    },
    {
      "t": "p",
      "md": "Solution 3.3：由性质 6，$|x+1|>2x-1$ 等价于 $x+1>2x-1$ 或 $x+1<-(2x-1)$，即 $2>x$ 或 $3x<0$，也就是 $x<2$ 或 $x<0$。两者合并即 $x<2$，故解集为 $(-\\infty,2)$。"
    },
    {
      "t": "h",
      "md": "四、Functions（函数）"
    },
    {
      "t": "p",
      "md": "Definition 4.1（Function，函数）：函数 $f$ 是一条规则，给定一个数（输入）就产生唯一一个数（输出）。形式上记作 $f:A\\to B$。把函数想成一台机器是很有帮助的：输入 $x$，经过机器 $f$，输出 $f(x)$。例如 $f(x)=3x$ 就是这样的函数：给定 $x$，产生 $3x$。"
    },
    {
      "t": "p",
      "md": "记法：$y=f(x)$。这里 $x$ 称为[[independent variable|自变量]]（independent variable，也叫 argument），$y$ 称为[[dependent variable|因变量]]（dependent variable）。"
    },
    {
      "t": "p",
      "md": "另一种刻画函数的方式是箭头图（arrow diagram）$f:A\\to B$：集合 $A$ 中的元素 $a$ 指向 $B$ 中的 $f(a)$。$f$ 被允许取值的集合称为函数 $f$ 的[[domain|定义域]]（domain），记作 $\\mathrm{Dom}(f)$。$f$ 的[[range|值域]]（range），记作 $\\mathrm{Range}(f)$，是当 $x$ 取遍整个定义域时 $f(x)$ 所有可能取值组成的集合。"
    },
    {
      "t": "note",
      "md": "PPT 中的对比图（两函数 $f,g$ 的图像）：$\\mathrm{Dom}\\,f=[\\alpha,\\beta]$，$\\mathrm{Range}\\,f=[a,b]$；$\\mathrm{Dom}\\,g=[\\alpha,\\beta)$，$\\mathrm{Range}\\,g=[a,b)\\cup(c,d]$。可见定义域决定值域可能取到哪些部分。"
    },
    {
      "t": "p",
      "md": "Exercise 4.1：$f:\\mathbb{R}\\to\\mathbb{R}$，对每个 $x\\in\\mathbb{R}$ 定义 $f(x)=x^2$，它是一个函数。"
    },
    {
      "t": "p",
      "md": "Solution 4.1：显然 $\\mathrm{Dom}(f)=\\mathbb{R}$，$\\mathrm{Range}(f)=[0,\\infty)$。"
    },
    {
      "t": "p",
      "md": "Exercise 4.2：求由 $f(x)=\\sqrt{16-x^2}$ 定义的函数的定义域。"
    },
    {
      "t": "p",
      "md": "Solution 4.2：显然需要 $16-x^2\\ge 0$，即 $x^2\\le 16=4^2$，所以定义域为 $-4\\le x\\le 4$，即 $[-4,4]$。"
    },
    {
      "t": "p",
      "md": "Exercise 4.3：$f:\\mathbb{R}\\setminus\\{3\\}\\to\\mathbb{R}$ 由 $f(x)=\\dfrac{x-1}{x-3}$ 定义，它是一个函数。求 $f(x)$ 的定义域与值域。"
    },
    {
      "t": "p",
      "md": "Solution 4.3：因为分母不能为零，$x-3\\ne 0$，所以 $\\mathrm{Dom}(f)=\\mathbb{R}\\setminus\\{3\\}$。注意"
    },
    {
      "t": "p",
      "md": "$$f(x)=\\frac{x-1}{x-3}=1+\\frac{2}{x-3}.$$"
    },
    {
      "t": "p",
      "md": "由于 $\\dfrac{2}{x-3}$ 不等于零，所以 $\\mathrm{Range}(f)=\\mathbb{R}\\setminus\\{1\\}$。"
    },
    {
      "t": "note",
      "md": "Remark：一般地，$\\mathrm{Dom}(f)$ 就是使 $f(x)$ 有定义的集合，除非另有规定（prescribed）。"
    },
    {
      "t": "p",
      "md": "函数给出一组有序对构成的集合 $\\{(x,y): x\\in\\mathrm{Dom}(f) \\text{ 且 } y=f(x)\\in\\mathrm{Range}(f)\\}$；给定函数对应的所有这样的点组成该函数的[[graph|图像]]（graph）。PPT 中画出 $f(x)=x^2$ 与 $f(x)=2x$ 的图像作为示例。"
    },
    {
      "t": "p",
      "md": "函数的运算（Operations on functions）：$(f+g)(x)=f(x)+g(x)$，$(f-g)(x)=f(x)-g(x)$，$(fg)(x)=f(x)g(x)$，$\\left(\\dfrac{f}{g}\\right)(x)=\\dfrac{f(x)}{g(x)}$（当 $g(x)\\ne 0$）。"
    },
    {
      "t": "p",
      "md": "$f+g$、$f-g$、$fg$ 的定义域都等于 $\\mathrm{Dom}(f)\\cap\\mathrm{Dom}(g)$；而 $\\dfrac{f}{g}$ 的定义域为 $\\{x\\in\\mathrm{Dom}(f)\\cap\\mathrm{Dom}(g): g(x)\\ne 0\\}$。"
    },
    {
      "t": "p",
      "md": "Exercise 4.4：设 $f(x)=\\sqrt{x+6}$，$g(x)=\\dfrac{1}{x^2-4}$，求 $\\mathrm{Dom}\\left(\\dfrac{f}{g}\\right)$。"
    },
    {
      "t": "p",
      "md": "Solution 4.4：$\\mathrm{Dom}(f)=[-6,\\infty)$；$\\mathrm{Dom}(g)=(-\\infty,-2)\\cup(-2,2)\\cup(2,\\infty)$；$\\mathrm{Dom}(f)\\cap\\mathrm{Dom}(g)=[-6,-2)\\cup(-2,2)\\cup(2,\\infty)$。又 $g(x)\\ne 0 \\iff x\\ne 0$，所以"
    },
    {
      "t": "p",
      "md": "$$\\mathrm{Dom}\\left(\\frac{f}{g}\\right)=[-6,-2)\\cup(-2,0)\\cup(0,2)\\cup(2,\\infty).$$"
    },
    {
      "t": "h",
      "md": "五、Composite Functions（复合函数）"
    },
    {
      "t": "p",
      "md": "Definition 5.1（Composite Function，复合函数）：给定两个函数 $f:A\\to B$ 与 $g:C\\to D$。假设 $f$ 的值域是 $C$ 的子集，则[[composite function|复合函数]] $g\\circ f:A\\to D$ 定义为"
    },
    {
      "t": "p",
      "md": "$$(g\\circ f)(x)=g(f(x)),$$"
    },
    {
      "t": "p",
      "md": "其中复合函数 $g\\circ f$ 的定义域为 $\\mathrm{Dom}(g\\circ f)=\\{x\\in\\mathrm{Dom}(f): f(x)\\in\\mathrm{Dom}(g)\\}$。"
    },
    {
      "t": "p",
      "md": "Exercise 5.1：若 $f(x)=x^2$，$g(x)=x-3$，求复合函数 $g\\circ f$ 与 $f\\circ g$。"
    },
    {
      "t": "p",
      "md": "Solution 5.1：$(g\\circ f)(x)=g(f(x))=g(x^2)=x^2-3$；$(f\\circ g)(x)=f(g(x))=f(x-3)=(x-3)^2$。注意 $g\\circ f\\ne f\\circ g$。"
    },
    {
      "t": "warn",
      "md": "复合运算**不满足交换律**：Exercise 5.1 中 $g\\circ f$ 与 $f\\circ g$ 是两个不同的函数。做题时务必看清复合的顺序（$g\\circ f$ 表示先作用 $f$，再作用 $g$）。"
    },
    {
      "t": "p",
      "md": "Exercise 5.2：若 $f(x)=\\sqrt{x}$，$g(x)=\\sqrt{2-x}$，求各个复合函数：$f\\circ g$ 与 $g\\circ f$。"
    },
    {
      "t": "p",
      "md": "Solution 5.2：$(f\\circ g)(x)=f(g(x))=f\\left(\\sqrt{2-x}\\right)=\\sqrt[4]{2-x}$；$(g\\circ f)(x)=g(f(x))=g(\\sqrt{x})=\\sqrt{2-\\sqrt{x}}$。"
    },
    {
      "t": "p",
      "md": "Exercise 5.3：求 $f\\circ g\\circ h$，其中 $f(x)=\\dfrac{x}{x+1}$，$g(x)=x^{10}$，$h(x)=x+3$。"
    },
    {
      "t": "p",
      "md": "Solution 5.3：$(g\\circ h)(x)=g(h(x))=g(x+3)=(x+3)^{10}$，于是"
    },
    {
      "t": "p",
      "md": "$$(f\\circ g\\circ h)(x)=f\\left((x+3)^{10}\\right)=\\frac{(x+3)^{10}}{(x+3)^{10}+1}.$$"
    },
    {
      "t": "p",
      "md": "Exercise 5.4：已知 $h(x)=3x^2+4$ 且 $g(x)=x^2$，求 $f(x)$ 使得 $h=f\\circ g$。"
    },
    {
      "t": "p",
      "md": "Solution 5.4：注意到 $3x^2+4=h(x)=(f\\circ g)(x)=f(g(x))=f(x^2)$，因此 $f(x)=3x+4$。"
    },
    {
      "t": "p",
      "md": "Exercise 5.5：定义函数 $f(x)=\\sqrt{1+x^3}$ 与 $g(x)=-x\\ (x>0)$。求：(1) 使 $f$ 有定义的的定义域；(2) 复合函数 $f\\circ g(x)$；(3) 复合函数 $f\\circ g(x)$ 的定义域。"
    },
    {
      "t": "p",
      "md": "Solution 5.5：(1) 要使 $f(x)$ 有定义，需 $1+x^3\\ge 0 \\Rightarrow x\\ge -1$，故 $\\mathrm{Dom}\\,f=[-1,\\infty)$。"
    },
    {
      "t": "p",
      "md": "(2) $(f\\circ g)(x)=f(g(x))=f(-x)=\\sqrt{1+(-x)^3}=\\sqrt{1-x^3}$。"
    },
    {
      "t": "p",
      "md": "(3) $\\mathrm{Dom}(f\\circ g)=\\mathrm{Dom}\\,g\\cap\\{x: g(x)\\in\\mathrm{Dom}\\,f\\}$。由 $g(x)\\in\\mathrm{Dom}\\,f$ 得 $-x\\ge -1 \\Rightarrow x\\le 1$，即 $[-1,1]$；于是 $\\mathrm{Dom}(f\\circ g)=(0,\\infty)\\cap[-1,1]=(0,1]$。"
    },
    {
      "t": "p",
      "md": "Exercise 5.6：给定 $a>1$、$x\\in\\mathbb{R}$ 及 $y=\\dfrac{a^x-a^{-x}}{2}$，用 $a$ 与 $y$ 表示 $x$。"
    },
    {
      "t": "p",
      "md": "Solution 5.6：由 $y=\\dfrac{a^x-a^{-x}}{2}$ 可得 $4y^2+4=(a^x+a^{-x})^2$，从而 $a^x+a^{-x}=2\\sqrt{1+y^2}$；又 $a^x-a^{-x}=2y$。两式相加得 $2a^x=2\\left(y+\\sqrt{1+y^2}\\right)$，所以"
    },
    {
      "t": "p",
      "md": "$$x=\\log_a\\left(y+\\sqrt{1+y^2}\\right).$$"
    },
    {
      "t": "p",
      "md": "Exercise 5.7：设 $f(x)=x$，$g(x)=\\sqrt{x}$，求 $f\\circ g$、$g\\circ f$，以及 $f\\circ g$ 与 $g\\circ f$ 的定义域。（PPT 上该题的解答留白。）"
    },
    {
      "t": "h",
      "md": "六、Functions - Injective, Surjective, Bijective（单射、满射、双射）"
    },
    {
      "t": "p",
      "md": "Functions as Relations（函数作为关系）：以 $f(x)=x^2$ 为例，它给出一个关系集合 $\\{(x,y)\\in\\mathbb{R}^2: x^2=y\\}\\subset\\mathbb{R}\\times\\mathbb{R}$，即 $xRy$ 当且仅当 $x^2=y$。"
    },
    {
      "t": "p",
      "md": "Definition 6.1（Function）：设 $A$ 与 $B$ 是集合。从 $A$ 到 $B$ 的函数 $f$（记作 $f:A\\to B$）是一个关系 $f\\subset A\\times B$，满足性质：对每个 $a\\in A$，关系 $f$ 恰好包含一个形如 $(a,b)$ 的有序对（也就是说，函数通过垂直线检验 vertical line test）。把 $(a,b)\\in f$ 简记为 $f(a)=b$。"
    },
    {
      "t": "note",
      "md": "例：$\\{(1,2),(2,4),(3,6),(2.7,5.4),(\\pi,2\\pi),\\dots\\}$ 表示 $f:\\mathbb{R}\\to\\mathbb{R}$，$f(x)=2x$；而 $\\{(1,-1),(1,1),(2,2),(3,3),(4,4),(5,5),\\dots\\}$ **不是**函数，因为 $f(1)$ 有两个值。"
    },
    {
      "t": "p",
      "md": "Definition 6.2（Function，函数词汇）：设 $f:A\\to B$ 是函数。称 $A$ 为 $f$ 的定义域（domain），称 $B$ 为 $f$ 的[[codomain|陪域]]（codomain）。$f$ 的值域为 $\\{f(a): a\\in A\\}$。"
    },
    {
      "t": "tbl",
      "head": [
        "函数",
        "陪域 codomain",
        "值域 range"
      ],
      "rows": [
        [
          "$f:(0,\\infty)\\to\\mathbb{R},\\ f(x)=\\ln x$",
          "$\\mathbb{R}$",
          "$\\mathbb{R}$"
        ],
        [
          "$f:[1,\\infty)\\to\\mathbb{R},\\ f(x)=\\sqrt{x-1}$",
          "$\\mathbb{R}$",
          "$[0,\\infty)$"
        ],
        [
          "$f:\\mathbb{Z}\\to\\mathbb{Z},\\ f(x)=x^2$",
          "$\\mathbb{Z}$",
          "$\\mathbb{N}\\cup\\{0\\}$"
        ]
      ]
    },
    {
      "t": "note",
      "md": "值域是陪域的子集（the range is a subset of the codomain）。"
    },
    {
      "t": "p",
      "md": "Definition 6.3（Equality，函数的相等）：两个函数 $f:A\\to B$ 与 $g:X\\to Y$ 相等，当且仅当 $A=X$，且对每个 $a\\in A$ 都有 $f(a)=g(a)$。"
    },
    {
      "t": "note",
      "md": "相等与否的例子：$f:\\mathbb{N}\\to\\mathbb{N},\\ f(x)=x^2$ 与 $g:\\mathbb{R}\\to\\mathbb{R},\\ g(x)=x^2$ **不相等**，因为 $g(-1)=1$，而 $f$ 在 $x=-1$ 处没有定义；$f:\\mathbb{Z}\\to\\mathbb{Z},\\ f(x)=x^2$ 与 $g:\\mathbb{Z}\\to\\mathbb{R},\\ g(x)=x\\cdot x$ **相等**；$f:\\{1,2\\}\\to\\{1,2\\},\\ f=\\{(1,1),(2,1)\\}$ 与 $g:\\{1,2\\}\\to\\{1,2\\},\\ g=\\{(2,1),(1,1)\\}$ 也相等（有序对的书写次序不影响集合）。"
    },
    {
      "t": "p",
      "md": "Definition 6.4（Injective, Surjective, Bijective）：设 $f$ 是从 $A$ 到 $B$ 的函数。"
    },
    {
      "t": "p",
      "md": "• $f$ 是[[injective|单射]]（injective，也叫 one-to-one），若对任意 $x,y\\in A$，$x\\ne y$ 就有 $f(x)\\ne f(y)$。"
    },
    {
      "t": "p",
      "md": "• $f$ 是[[surjective|满射]]（surjective，也叫 onto），若对每个 $b\\in B$，都存在 $a\\in A$ 使 $f(a)=b$（即：陪域等于值域）。"
    },
    {
      "t": "p",
      "md": "• $f$ 是[[bijective|双射]]（bijective），若它既是单射又是满射。"
    },
    {
      "t": "note",
      "md": "PPT 用图例区分 not injective（非单射）、not surjective（非满射）与 not a function（不是函数，即不通过垂直线检验）三种情形。"
    },
    {
      "t": "p",
      "md": "PPT 的两个图示例子：以 $f(x)=x^2$ 形式给出的函数在不同的定义域/陪域下分别标注为 neither（既非单射也非满射）、surjective（满射）与 bijective（双射）；另一张图以 $f:\\mathbb{R}\\to\\mathbb{R}$ 上的 $f(x)=x\\sin x$ 与 $f(x)=\\arctan x$ 为例，标注出 injective、not injective、surjective、not surjective 的对比。"
    },
    {
      "t": "p",
      "md": "Proving Injectivity and Surjectivity（证明单射性与满射性）"
    },
    {
      "t": "p",
      "md": "Exercise 6.1：证明或否证：函数 $f(x)=3x^4+1$，$f:\\mathbb{R}\\to\\mathbb{R}$，是单射。"
    },
    {
      "t": "p",
      "md": "Solution 6.1：注意到 $1$ 与 $-1$ 都在 $\\mathbb{R}$ 中，$1\\ne -1$，但 $f(1)=f(-1)=4$。这说明 $f$ 不是单射。"
    },
    {
      "t": "p",
      "md": "Exercise 6.2：证明或否证：函数 $f(x)=3x^4+1$，$f:\\mathbb{R}\\to\\mathbb{R}$，是满射。"
    },
    {
      "t": "p",
      "md": "Solution 6.2：注意到 $0\\in\\mathbb{R}$，但没有实数 $x$ 能使 $f(x)=0$。这说明 $f$ 不是满射。"
    },
    {
      "t": "p",
      "md": "Exercise 6.3：证明函数 $f(x)=\\dfrac{x+1}{x-1}$，$f:\\mathbb{R}\\setminus\\{1\\}\\to\\mathbb{R}\\setminus\\{1\\}$，是双射。"
    },
    {
      "t": "p",
      "md": "Solution 6.3（Injectivity 单射性）：设对某个 $x,y\\in\\mathbb{R}\\setminus\\{1\\}$ 有 $f(x)=f(y)$，即 $\\dfrac{x+1}{x-1}=\\dfrac{y+1}{y-1}$。于是 $(x+1)(y-1)=(x-1)(y+1)$，即 $xy-x+y-1=xy+x-y-1$，即 $-x+y=x-y$，即 $2y=2x$。所以 $x=y$。由此断定 $f(x)$ 是单射。"
    },
    {
      "t": "p",
      "md": "Solution 6.3（Surjectivity 满射性）：任取 $y\\in\\mathbb{R}\\setminus\\{1\\}$，令 $a=\\dfrac{y+1}{y-1}$。因为 $y\\ne 1$，所以 $a\\in\\mathbb{R}$；又因为方程 $\\dfrac{y+1}{y-1}=1$ 等价于 $y+1=y-1$，即 $1=-1$，无解，所以 $a\\ne 1$。进一步计算："
    },
    {
      "t": "p",
      "md": "$$f(a)=\\frac{a+1}{a-1}=\\frac{\\dfrac{y+1}{y-1}+1}{\\dfrac{y+1}{y-1}-1}=\\frac{y+1+(y-1)}{y+1-(y-1)}=\\frac{2y}{2}=y.$$"
    },
    {
      "t": "p",
      "md": "因此 $a\\in\\mathbb{R}\\setminus\\{1\\}$ 且 $f(a)=y$。由此断定 $f(x)$ 是满射。由于它既单射又满射，故 $f$ 是双射。"
    },
    {
      "t": "warn",
      "md": "证明满射时不能只解出 $a$，还必须验证 $a$ 落在**定义域**内（Exercise 6.3 中需说明 $a\\ne 1$）；证明单射时必须由 $f(x)=f(y)$ 严格推出 $x=y$，或举出一对 $x\\ne y$ 但 $f(x)=f(y)$ 的反例。"
    },
    {
      "t": "h",
      "md": "七、Inverse Functions（[[inverse function|反函数]]与一一函数）"
    },
    {
      "t": "p",
      "md": "Definition 3.1（1-1）：设 $f:A\\to B$ 是函数。$f$ 称为[[one-to-one|一一的]]（one-to-one），当且仅当对任意 $x_1,x_2\\in A$，"
    },
    {
      "t": "p",
      "md": "$$f(x_1)=f(x_2)\\ \\Longrightarrow\\ x_1=x_2.$$"
    },
    {
      "t": "p",
      "md": "Definition 3.2（One-to-One）：若一个函数从不取同一个值两次，即“不同的输入产生不同的输出”，就称它是一一函数（one-to-one function）："
    },
    {
      "t": "p",
      "md": "$$f(x_1)\\ne f(x_2)\\quad \\text{只要 } x_1\\ne x_2.$$"
    },
    {
      "t": "p",
      "md": "Theorem 6.1（[[horizontal line test|水平线检验]]，Horizontal Line Test）：一个函数是一一的，当且仅当**没有水平线与它的图像相交多于一次**。若某条水平线与 $f$ 的图像交于不止一个点，则 $f$ 不是一一的。"
    },
    {
      "t": "note",
      "md": "图中 $f(x_1)=f(x_2)$ 而 $x_1\\ne x_2$，这正是“不是一一函数”的图示：同一条水平线把图像截了两次。"
    },
    {
      "t": "p",
      "md": "PPT 的两个对比图：(a) $f(x)=x^2$，$-2\\le x\\le 2.5$ 是一个 many-to-one（多对一）函数；(b) $g(x)=x^2$，$0\\le x\\le 2.5$ 是一个 one-to-one（一一）函数。"
    },
    {
      "t": "p",
      "md": "Exercise 6.1：函数 $f(x)=x^3$ 在 $\\mathbb{R}$ 上是一一的吗？"
    },
    {
      "t": "p",
      "md": "Solution 6.1：是。设 $x_1,x_2\\in\\mathbb{R}$，由 $f(x_1)=f(x_2)$ 得 $x_1^3=x_2^3$，从而 $x_1=x_2$。"
    },
    {
      "t": "p",
      "md": "Exercise 6.2：函数 $f(x)=x^2$ 在 $\\mathbb{R}$ 上是一一的吗？"
    },
    {
      "t": "p",
      "md": "Solution 6.2：不是。"
    }
  ],
  "terms": [
    [
      "set",
      "集合"
    ],
    [
      "element",
      "元素"
    ],
    [
      "empty set",
      "空集"
    ],
    [
      "subset",
      "子集"
    ],
    [
      "intersection",
      "交集"
    ],
    [
      "union",
      "并集"
    ],
    [
      "complement",
      "补集"
    ],
    [
      "interval",
      "区间"
    ],
    [
      "inequality",
      "不等式"
    ],
    [
      "absolute value",
      "绝对值"
    ],
    [
      "triangle inequality",
      "三角不等式"
    ],
    [
      "function",
      "函数"
    ],
    [
      "domain",
      "定义域"
    ],
    [
      "range",
      "值域"
    ],
    [
      "codomain",
      "陪域"
    ],
    [
      "independent variable",
      "自变量"
    ],
    [
      "dependent variable",
      "因变量"
    ],
    [
      "graph",
      "图像"
    ],
    [
      "composite function",
      "复合函数"
    ],
    [
      "injective",
      "单射"
    ],
    [
      "surjective",
      "满射"
    ],
    [
      "bijective",
      "双射"
    ],
    [
      "one-to-one",
      "一一（单射）"
    ],
    [
      "horizontal line test",
      "水平线检验"
    ],
    [
      "inverse function",
      "反函数"
    ]
  ],
  "qids": [
    "mid-1-01",
    "mid-1-02",
    "mid-1-03",
    "mid-1-04",
    "mid-2-01",
    "mid-2-02",
    "mid-2-03",
    "mid-2-04",
    "mid-2-05",
    "mid-2-06",
    "mid-2-07",
    "mid-2-08"
  ]
});

  /* ---------- L2 第2讲 指数、对数、反函数、多项式与三角函数 ---------- */
  T.push({
  "no": "L2",
  "title": "第2讲 指数、对数、反函数、多项式与三角函数",
  "titleEn": "Lecture Notes 2",
  "tags": [
    "exponential function",
    "logarithmic function",
    "inverse function",
    "periodic function",
    "polynomial",
    "binomial theorem",
    "radian",
    "trigonometric function",
    "inverse trigonometric function"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲（Lecture Notes 2）共 10 个小节：**指数函数**、**对数函数**、**反函数**、**周期函数**、**奇函数与偶函数**、**多项式**、**二项式定理**、**角度与弧度**、**三角函数**、**反三角函数**。"
    },
    {
      "t": "h",
      "md": "一、指数函数 Exponential Functions"
    },
    {
      "t": "p",
      "md": "形如 $y=a^x$ 的函数称为 [[exponential function|指数函数]]，其中 $a>0$ 称为 [[base|底数]]，$x$ 称为指数（exponent，也叫 index 或 power）。"
    },
    {
      "t": "tbl",
      "head": [
        "运算法则 Law of Exponents",
        "公式"
      ],
      "rows": [
        [
          "同底数相乘",
          "$a^m a^n=a^{m+n}$"
        ],
        [
          "同底数相除",
          "$a^m/a^n=a^{m-n}$"
        ],
        [
          "幂的幂",
          "$(a^m)^n=a^{mn}$"
        ],
        [
          "零指数",
          "$a^0=1$"
        ],
        [
          "负一次幂",
          "$a^{-1}=1/a$"
        ],
        [
          "负指数",
          "$a^{-m}=1/a^m$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "特别地，当底数取 $e=2.718281828459\\cdots$ 时，这个 [[natural exponential function|自然指数函数]] 记作 `exp`：$$\\exp(x)=e^x$$"
    },
    {
      "t": "p",
      "md": "从图像上看，$y=e^x$ 表现为指数增长（exponential growth），$y=e^{-x}$ 表现为指数衰减（exponential decay）。"
    },
    {
      "t": "h",
      "md": "二、对数函数 Logarithmic Functions"
    },
    {
      "t": "p",
      "md": "给定指数函数 $y=a^x$（底数 $a>0$），把它的反函数记作 $$x=\\log_a y,\\qquad a>0$$ 这个函数称为 [[logarithmic function|对数函数]]，$\\log_a y$ 称为「以 $a$ 为底的 $y$ 的对数」。显然 $$\\log_a a=1,\\qquad \\log_a 1=0$$ 特别地，当 $a=e$ 时记作 $x=\\ln y$。"
    },
    {
      "t": "p",
      "md": "基本等价关系：$x=\\log_a y\\iff y=a^x$。"
    },
    {
      "t": "tbl",
      "head": [
        "对数运算法则 Rules of Logarithm",
        "公式（$a,b,x,y$ 均为正实数）"
      ],
      "rows": [
        [
          "积的对数",
          "$\\log_a(xy)=\\log_a x+\\log_a y$"
        ],
        [
          "$1$ 的对数",
          "$\\log_a 1=0$"
        ],
        [
          "商的对数",
          "$\\log_a(x/y)=\\log_a x-\\log_a y$"
        ],
        [
          "幂的对数",
          "$\\log_a x^m=m\\log_a x$（$m$ 为实数）"
        ],
        [
          "换底公式",
          "$\\log_a x=\\dfrac{\\log_b x}{\\log_b a}$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "当底数为 $e=2.718281828\\cdots$ 时，对数函数记为 $\\ln$ 或 $\\log$：$$x=\\ln y \\iff y=e^x$$"
    },
    {
      "t": "p",
      "md": "**Exercise 2.1** 把 $\\log_3 5$ 用以 $10$ 为底的对数表示。**解：** 由换底公式 $$\\log_3 5=\\frac{\\log_{10}5}{\\log_{10}3}$$"
    },
    {
      "t": "p",
      "md": "**Exercise 2.2** 证明 $\\dfrac{\\log_{10}A}{\\log_{10}B}=\\dfrac{\\ln A}{\\ln B}$。**解：** 分子分母分别换成以 $e$ 为底：$$\\frac{\\log_{10}A}{\\log_{10}B}=\\frac{\\ \\frac{\\ln A}{\\ln 10}\\ }{\\frac{\\ln B}{\\ln 10}}=\\frac{\\ln A}{\\ln B}$$"
    },
    {
      "t": "p",
      "md": "**Exercise 2.3** 若 $2^x=6$，求 $x$（精确到 5 位小数）。**解：** $$x=\\log_2 6=\\log_2(2\\times 3)=1+\\log_2 3\\approx 2.58496$$"
    },
    {
      "t": "p",
      "md": "**Exercise 2.4** 若 $2^{2x}=3^{2-x}$，求 $x$。**解：** 两边取以 $10$ 为底的对数，得 $2x\\log_{10}2=(2-x)\\log_{10}3$，即 $2x=(2-x)\\log_2 3$，于是 $(2+\\log_2 3)x=2\\log_2 3$，故 $$x=\\frac{2\\log_2 3}{2+\\log_2 3}$$"
    },
    {
      "t": "p",
      "md": "**Exercise 2.5** 若 $\\log_3(x+5)=2\\log_3(x-1)$，求 $x$。**解：** 去掉对数得 $x+5=(x-1)^2$，即 $x^2-3x-4=(x+1)(x-4)=0$，解得 $x=4$ 或 $x=-1$。原方程要求 $x+5>0$ 且 $x-1>0$，故只有一个解 $x=4$。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.6** 若 $\\log_2(2-x)+\\log_2(5-x)=2$，求 $x$。**解：** $$\\log_2[(2-x)(5-x)]=2\\iff (2-x)(5-x)=2^2=4\\iff x^2-7x+6=0\\iff (x-1)(x-6)=0$$ 得 $x=1$ 或 $x=6$。由于要求 $2-x>0$ 且 $5-x>0$，只有一个解 $x=1$。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.7** 解方程 $2^{2x}+5\\cdot 2^x=6$。**解：** $$(2^x)^2+5\\cdot 2^x-6=0\\iff (2^x-1)(2^x+6)=0$$ 由 $2^x-1=0$ 得 $x=0$；而 $2^x+6=0$ 无解。因此唯一解是 $x=0$。"
    },
    {
      "t": "warn",
      "md": "解对数方程（Exercise 2.5、2.6）时，去掉对数可能引入**增根**：必须用真数为正的条件（如 $x+5>0$、$x-1>0$、$2-x>0$、$5-x>0$）逐一检验，只保留同时满足条件的解。"
    },
    {
      "t": "h",
      "md": "三、反函数 Inverse Functions"
    },
    {
      "t": "p",
      "md": "**引例（Table 1）：** 一个细菌培养实验从 $100$ 个细菌开始，在养分有限的培养基中繁殖，每小时记录一次种群数量。细菌数量 $N$ 是时间 $t$ 的函数：$N=f(t)$。"
    },
    {
      "t": "tbl",
      "head": [
        "$t$（hours）",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8"
      ],
      "rows": [
        [
          "$N=$ population at time $t$",
          "100",
          "168",
          "259",
          "358",
          "445",
          "509",
          "550",
          "573",
          "586"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**（Table 2）** 如果反过来关心「种群达到某个数量需要多长时间」，就是把 $t$ 看成 $N$ 的函数。这个函数称为 $f$ 的反函数，记作 $f^{-1}$，读作 “$f$ inverse”；$t=f^{-1}(N)$ 就是种群达到 $N$ 所需的时间。由表可得：$$f^{-1}(100)=0,\\quad f^{-1}(358)=3,\\quad f^{-1}(550)=6,\\quad f^{-1}(586)=8$$"
    },
    {
      "t": "p",
      "md": "**并非所有函数都有反函数。** 若 $f$ 从不取到同一个值两次（$A$ 中任意两个不同输入对应 $B$ 中不同输出），则称 $f$ 是 [[one-to-one function|一一函数]]（one-to-one function）。一一函数才有反函数。例如 $g$ 不是一一的（$g(2)=g(3)=4$），所以它没有反函数。"
    },
    {
      "t": "p",
      "md": "**Definition 3.1（1-1）** 设 $f:A\\to B$。$f$ 是一一函数当且仅当 $$f(x_1)=f(x_2)\\ \\Rightarrow\\ x_1=x_2,\\qquad \\forall x_1,x_2\\in A$$\n**Definition 3.2（One-to-One）** 等价说法是「不同输入产生不同输出」：$$f(x_1)\\ne f(x_2)\\quad \\text{whenever}\\ x_1\\ne x_2$$"
    },
    {
      "t": "p",
      "md": "**Theorem 3.1（Horizontal Line Test [[horizontal line test|水平线检验]]）** 函数是一一函数**当且仅当**没有任何水平直线与它的图像相交多于一次。若某条水平直线与 $f$ 的图像交于不止一个点，则 $f$ 不是一一函数。"
    },
    {
      "t": "p",
      "md": "**例：** $f(x)=x^2$，$-2\\le x\\le 2.5$，是 many-to-one（多对一），不是一一函数；而 $g(x)=x^2$，$0\\le x\\le 2.5$，是一一函数。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.1** $f(x)=x^3$ 在 $\\mathbb{R}$ 上是一一函数吗？**解：** 是。任取 $x_1,x_2\\in\\mathbb{R}$，$f(x_1)=f(x_2)\\Rightarrow x_1^3=x_2^3\\Rightarrow x_1=x_2$。\n**Exercise 3.2** $f(x)=x^2$ 在 $\\mathbb{R}$ 上是一一函数吗？**解：** 不是。"
    },
    {
      "t": "p",
      "md": "一一函数之所以重要，正因为它们恰好是拥有反函数的函数。**Definition 3.3（Inverse Function [[inverse function|反函数]]）** 设 $f$ 是一一函数，定义域为 $X$、值域为 $Y$，则其反函数 $f^{-1}$ 的定义域为 $Y$、值域为 $X$，且对任意 $y\\in Y$：$$y=f(x)\\iff x=g(y)=:f^{-1}(y)$$"
    },
    {
      "t": "p",
      "md": "**Theorem 3.2（Properties of Inverse Function）**\n• $\\operatorname{Dom}f^{-1}=\\operatorname{Range}f$，$\\operatorname{Range}f^{-1}=\\operatorname{Dom}f$；\n• $f^{-1}(f(x))=x$，对每个 $x\\in\\operatorname{Dom}f$；\n• $f(f^{-1}(y))=y$，对每个 $y\\in\\operatorname{Dom}f^{-1}$。\n几何意义：$f$ 把 $X$ 映到 $Y$，$f^{-1}$ 把 $Y$ 映回 $X$。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.3** 设 $f$ 是一一函数，$f(1)=2$、$f(3)=5$、$f(8)=6$，求 $f^{-1}(2)$、$f^{-1}(5)$、$f^{-1}(6)$。**解：** 由定义 $f^{-1}(2)=1$（因为 $f(1)=2$），$f^{-1}(5)=3$（因为 $f(3)=5$），$f^{-1}(6)=8$（因为 $f(8)=6$）。"
    },
    {
      "t": "tbl",
      "head": [
        "求一一函数 $f$ 的反函数的步骤",
        "做法"
      ],
      "rows": [
        [
          "STEP 1",
          "写出 $y=f(x)$"
        ],
        [
          "STEP 2",
          "把方程解成用 $y$ 表示 $x$"
        ],
        [
          "STEP 3",
          "写成 $x=f^{-1}(y)$"
        ],
        [
          "STEP 4",
          "交换 $x$ 与 $y$，得到 $y=f^{-1}(x)$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Exercise 3.4** 求 $f(x)=x^3+2$ 的反函数。**解：** $y=x^3+2\\Rightarrow x=(y-2)^{1/3}$，即 $x=f^{-1}(y)=(y-2)^{1/3}$。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.5** 求 $f(x)=\\sqrt{x}+1$（$0\\le x\\le 4$）的反函数。**解：** $y=\\sqrt{x}+1\\Rightarrow x=(y-1)^2$，即 $x=f^{-1}(y)=(y-1)^2$。"
    },
    {
      "t": "p",
      "md": "**Remark** 已知 $y=f(x)$，其反函数为 $x=f^{-1}(y)$。由于习惯上总把 $x$ 看作自变量，通常交换 $x$ 与 $y$，写成 $y=f^{-1}(x)$。**$f^{-1}$ 的图像由 $f$ 的图像关于直线 $y=x$ 反射得到。**"
    },
    {
      "t": "p",
      "md": "**Exercise 3.6** 画出 $f(x)=\\sqrt{-1-x}$ 及其反函数 $f^{-1}(x)$ 的图像。**解：** 反函数为 $x=f^{-1}(y)=-1-y^2$，即 $$y=f^{-1}(x)=-1-x^2$$ 图中 $f$ 经过点 $(-1,0)$，$f^{-1}$ 经过点 $(0,-1)$，两条曲线关于 $y=x$ 对称。"
    },
    {
      "t": "h",
      "md": "四、周期函数 Periodic Functions"
    },
    {
      "t": "p",
      "md": "**Definition 4.1（Periodic Function [[periodic function|周期函数]]）** 若存在正常数 $T>0$（称为 [[period|周期]]，the period），使得 $$f(x+T)=f(x)$$ 对一切 $x\\in\\operatorname{Dom}(f)$ 成立，则称 $f(x)$ 是周期函数。"
    },
    {
      "t": "p",
      "md": "三角函数是典型的周期函数，例如 $$\\sin(x+2\\pi)=\\sin x,\\qquad \\cos(x+2\\pi)=\\cos x,\\qquad \\tan(x+\\pi)=\\tan x,$$ 等等。"
    },
    {
      "t": "p",
      "md": "显然，若 $T$ 是 $f$ 的周期，则 $2T,3T,\\dots$ 也是周期。通常我们说「函数 $f$ 的周期」时，指的是**最小的周期**。"
    },
    {
      "t": "h",
      "md": "五、奇函数与偶函数 Even and Odd Functions"
    },
    {
      "t": "p",
      "md": "**Definition 5.1（Even Function [[even function|偶函数]]）** 若对定义域内一切 $x$ 都有 $f(-x)=f(x)$，则 $f$ 是偶函数。偶函数的图像关于 $y$ 轴对称。例如 $y=|x|$ 与 $y=x^2$ 都是偶函数。"
    },
    {
      "t": "p",
      "md": "**Definition 5.2（Odd Function [[odd function|奇函数]]）** 若对定义域内一切 $x$ 都有 $f(-x)=-f(x)$，则 $f$ 是奇函数。奇函数的图像关于原点对称。例如 $y=x^3$ 是奇函数。"
    },
    {
      "t": "h",
      "md": "六、多项式 Polynomials"
    },
    {
      "t": "p",
      "md": "**Definition 6.1（Polynomial [[polynomial|多项式]]）** 多项式是形如 $$p(x)=a_0+a_1x+a_2x^2+\\cdots+a_nx^n$$ 的函数，其中 $a_0,a_1,\\dots,a_n$ 是常数（称为 coefficients，系数），$x\\in\\mathbb{R}$ 是自变量。\n• 若 $a_n\\ne 0$，则 $n$ 称为 $P(x)$ 的 [[degree|次数]]，记作 $\\deg(P)$；\n• 若 $a_0=a_1=\\cdots=a_n=0$，该多项式称为零多项式；\n• $P(x)$ 的 [[zero of a polynomial|零点]] 是方程 $P(x)=0$ 的根（root，也叫解 solution）。"
    },
    {
      "t": "p",
      "md": "**Exercise 6.1** 已知多项式 $P(x)=x^3-1$，求它的次数与（实）根。**解：** $\\deg(P)=3$。因为 $P(x)=(x-1)(x^2+x+1)$，所以 $P(1)=0$，即 $1$ 是 $P(x)$ 的一个零点。"
    },
    {
      "t": "tbl",
      "head": [
        "Polynomial",
        "Degree",
        "Name"
      ],
      "rows": [
        [
          "$a_0$",
          "0",
          "constant 常数"
        ],
        [
          "$a_0+a_1x$（$a_1\\ne 0$）",
          "1",
          "linear 一次"
        ],
        [
          "$a_0+a_1x+a_2x^2$（$a_2\\ne 0$）",
          "2",
          "quadratic 二次"
        ],
        [
          "$a_0+a_1x+a_2x^2+a_3x^3$（$a_3\\ne 0$）",
          "3",
          "cubic 三次"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Theorem 6.1（Remainder Theorem [[remainder theorem|余数定理]]）** 用 $x-a$ 除多项式 $P(x)$，其余数是 $P(a)$。"
    },
    {
      "t": "p",
      "md": "多项式图像 $y=P(x)$ 是连续曲线。PPT 中给出的例子：0 次 $y=b$；1 次 $\\dfrac xa+\\dfrac yb=1$；2 次 $y=(x-a)(x-b)$、$y=-x^2-2$；3 次 $y=(x-a)(x-b)(x-c)$、$y=x^3-x^2-x+2$；4 次 $y=(x-a)(x-b)(x-c)(x-d)$、$y=x^4-x^3$。"
    },
    {
      "t": "p",
      "md": "**常用的多项式因式分解公式：**\n$$\\begin{aligned}x^2-a^2&=(x-a)(x+a)\\\\[2pt] x^3-a^3&=(x-a)(x^2+ax+a^2)\\\\[2pt] x^3+a^3&=(x+a)(x^2-ax+a^2)\\\\[2pt] x^n-a^n&=(x-a)(x^{n-1}+ax^{n-2}+a^2x^{n-3}+\\cdots+a^{n-2}x+a^{n-1})\\\\[2pt] x^n+a^n&=(x+a)(x^{n-1}-ax^{n-2}+a^2x^{n-3}-\\cdots+a^{n-1}),\\quad n\\ \\text{为奇数}\\\\[2pt] x^4+a^2x^2+a^4&=(x^2-ax+a^2)(x^2+ax+a^2)\\end{aligned}$$"
    },
    {
      "t": "h",
      "md": "七、二项式定理 The Binomial Theorem"
    },
    {
      "t": "p",
      "md": "设 $x,y$ 为实数，$n$ 为非负整数。当 $n=0,1,2,3$ 时，$(x+y)^n$ 的二项展开式为 $$(x+y)^0=1,\\quad (x+y)^1=x+y,\\quad (x+y)^2=x^2+2xy+y^2,\\quad (x+y)^3=x^3+3x^2y+3xy^2+y^3$$ 目标是求出任意正整数 $n$ 时 $(x+y)^n$ 的公式。"
    },
    {
      "t": "p",
      "md": "**Definition 7.1（Factorial [[factorial|阶乘]] & Combination [[binomial coefficient|组合数]]）** 对正整数 $k$，定义 $$k!=1\\cdot 2\\cdot 3\\cdots\\cdots (k-1)\\cdot k$$ 再定义符号 $\\dbinom{n}{k}$（读作 “$n$ choose $k$”），$k=0,1,\\dots,n$：$$\\binom{n}{0}:=1,\\qquad \\binom{n}{k}:=\\frac{n(n-1)\\cdots(n-k+1)}{k!},\\quad k=1,2,\\dots,n$$ 另外，若约定 $0!=1$，则可写成 $$\\binom{n}{k}=\\frac{n!}{k!\\,(n-k)!},\\qquad k=0,1,2,\\dots,n$$"
    },
    {
      "t": "p",
      "md": "**Theorem 7.1（Properties）** 设 $n$ 为正整数，$k$ 为非负整数，则\n**(a) 对称性（Symmetry property）** $$\\binom{n}{k}=\\binom{n}{n-k},\\qquad 0\\le k\\le n$$\n**(b) Pascal 公式（Pascal's formula）** $$\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1},\\qquad 0\\le k\\le n-1$$"
    },
    {
      "t": "p",
      "md": "**Theorem 7.2（The Binomial Theorem [[binomial theorem|二项式定理]]）** 设 $n$ 为正整数，则对任意实数 $x,y$：$$(x+y)^n=\\binom{n}{0}x^n+\\binom{n}{1}x^{n-1}y+\\binom{n}{2}x^{n-2}y^2+\\cdots+\\binom{n}{n-1}xy^{n-1}+\\binom{n}{n}y^n$$ 也可写成 $$(x+y)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{n-k}y^k\\quad (x\\ \\text{的降幂展开})$$ $$(x+y)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{k}y^{n-k}\\quad (x\\ \\text{的升幂展开})$$ 二项式定理说明：二项式系数正是由公式 (9) 定义的那些数 $\\dbinom{n}{k}$。"
    },
    {
      "t": "p",
      "md": "**Exercise 7.1** 设 $n$ 为正整数，把 $(1+x)^n$ 按 (i) $x$ 的降幂、(ii) $x$ 的升幂展开。**解：**\n(i) $(1+x)^n=(x+1)^n=\\dbinom{n}{0}x^n+\\dbinom{n}{1}x^{n-1}+\\cdots+\\dbinom{n}{n-1}x+\\dbinom{n}{n}$\n(ii) $(1+x)^n=\\dbinom{n}{0}+\\dbinom{n}{1}x+\\cdots+\\dbinom{n}{n-1}x^{n-1}+\\dbinom{n}{n}x^n$"
    },
    {
      "t": "p",
      "md": "**Exercise 7.2** 求 $(3x-2y)^7$ 按 $x$ 升幂展开后的第 4 项。**解：** 把 $(3x-2y)^7$ 改写成 $(-2y+3x)^7$。按 $x$ 升幂时，第 4 项对应 $k=3$，故第 4 项为 $$\\binom{7}{3}(-2y)^4(3x)^3=\\frac{7\\cdot 6\\cdot 5}{3\\cdot 2\\cdot 1}\\times(-2)^4\\times 3^3\\,x^3y^4=15120\\,x^3y^4$$"
    },
    {
      "t": "p",
      "md": "**Exercise 7.3** 求 $\\left(x+\\dfrac{2}{x}\\right)^8$ 展开式中 $x^2$ 的系数。**解：** 通项为 $$\\binom{8}{k}x^{8-k}\\left(\\frac{2}{x}\\right)^k=\\binom{8}{k}\\cdot 2^k\\cdot x^{8-2k}$$ 令 $8-2k=2$ 得 $k=3$，因此 $x^2$ 的系数为 $$\\binom{8}{3}\\cdot 2^3=\\frac{8\\cdot 7\\cdot 6}{3\\cdot 2\\cdot 1}\\cdot 2^3=448$$"
    },
    {
      "t": "note",
      "md": "求某个幂次的系数时，先写出**通项**，令 $x$ 的指数等于目标值解出 $k$，再代回即可。"
    },
    {
      "t": "h",
      "md": "八、角度与弧度 Angle and Radian"
    },
    {
      "t": "p",
      "md": "角可以用度（degrees）或 [[radian|弧度]]（radians，缩写 rad）度量，两者的换算关系是 $$360^\\circ=2\\pi\\ \\text{rad}$$ 由此 $$1^\\circ=\\frac{2\\pi}{360}\\ \\text{rad},\\qquad 1\\ \\text{rad}=\\left(\\frac{360}{2\\pi}\\right)^\\circ$$"
    },
    {
      "t": "p",
      "md": "**Exercise 8.1** (a) 把 $2\\pi/3$ rad 化成度；(b) 求 $45^\\circ$ 的弧度。**解：**\n(a) 弧度化度乘以 $360/2\\pi$：$$\\frac{2\\pi}{3}\\ \\text{rad}=\\frac{2\\pi}{3}\\left(\\frac{360}{2\\pi}\\right)^\\circ=120^\\circ$$\n(b) 度化弧度乘以 $2\\pi/360$：$$45^\\circ=45\\cdot\\frac{2\\pi}{360}\\ \\text{rad}=\\frac{\\pi}{4}\\ \\text{rad}$$"
    },
    {
      "t": "p",
      "md": "在本课程中，除特别说明外，一律使用**弧度**度量角。"
    },
    {
      "t": "tbl",
      "head": [
        "Degrees",
        "0°",
        "30°",
        "45°",
        "60°",
        "90°",
        "120°",
        "135°",
        "150°",
        "180°",
        "270°",
        "360°"
      ],
      "rows": [
        [
          "Radians",
          "$0$",
          "$\\pi/6$",
          "$\\pi/4$",
          "$\\pi/3$",
          "$\\pi/2$",
          "$2\\pi/3$",
          "$3\\pi/4$",
          "$5\\pi/6$",
          "$\\pi$",
          "$3\\pi/2$",
          "$2\\pi$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**[[sector|扇形]]与弧长：** 左图给出一个扇形，中心角为 $\\theta$、半径为 $r$、[[arc length|弧长]]为 $a$。整个圆的周长为 $2\\pi r$、中心角为 $2\\pi$，因此 $$\\frac{\\theta}{2\\pi}=\\frac{a}{2\\pi r}$$ 分别解出 $\\theta$ 与 $a$，得到 $$\\theta=\\frac{a}{r},\\qquad a=r\\theta$$"
    },
    {
      "t": "p",
      "md": "**Exercise 8.2** (a) 半径为 $6$ cm 的圆，中心角为 $\\pi/5$ rad 的弧长是多少？(b) 半径为 $4$ cm 的圆，弧长为 $8$ cm 时中心角是多少？**解：**\n(a) $r=6$ cm，$\\theta=\\pi/5$ rad：$$a=r\\theta=6\\times\\frac{\\pi}{5}=1.2\\pi\\ \\text{cm}$$\n(b) $r=4$ cm，$a=8$ cm：$$\\theta=\\frac a r=\\frac{8}{4}=2\\ \\text{rad}$$"
    },
    {
      "t": "p",
      "md": "**角的标准位置（standard position）：** 把角的顶点放在 $xy$ 平面的原点、始边（initial side）放在 $x$ 轴正半轴上。把始边**逆时针**旋转到与终边（terminal side）重合，得到正角（$\\theta\\ge 0$）；**顺时针**旋转则得到负角（$\\theta<0$）。"
    },
    {
      "t": "p",
      "md": "不同的角可以有相同的终边。例如 $3\\pi/4$、$-5\\pi/4$、$11\\pi/4$ 的终边相同，因为 $$\\frac{3\\pi}{4}-2\\pi=-\\frac{5\\pi}{4},\\qquad \\frac{3\\pi}{4}+2\\pi=\\frac{11\\pi}{4}$$ 一般地，$\\theta\\pm 2n\\pi$（$n\\in\\mathbb{Z}$）与 $\\theta$ 有相同的终边。"
    },
    {
      "t": "h",
      "md": "九、三角函数 The Trigonometric Functions"
    },
    {
      "t": "p",
      "md": "在直角三角形中（$r$ 为斜边，点 $(x,y)$ 在终边上）：$\\sin\\theta=\\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$，$\\cos\\theta=\\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}}$，等等。六个三角函数定义如下："
    },
    {
      "t": "tbl",
      "head": [
        "Trig. function",
        "直角三角形定义",
        "坐标表示"
      ],
      "rows": [
        [
          "$\\sin\\theta$",
          "Opposite / Hypotenuse",
          "$y/r$"
        ],
        [
          "$\\cos\\theta$",
          "Adjacent / Hypotenuse",
          "$x/r$"
        ],
        [
          "$\\tan\\theta$",
          "Opposite / Adjacent",
          "$y/x$"
        ],
        [
          "$\\csc\\theta$",
          "Hypotenuse / Opposite",
          "$r/y$"
        ],
        [
          "$\\sec\\theta$",
          "Hypotenuse / Adjacent",
          "$r/x$"
        ],
        [
          "$\\cot\\theta$",
          "Adjacent / Opposite",
          "$x/y$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "若取 $r=1$，就得到 [[unit circle|单位圆]]。此时 $\\cos\\theta=x$，$\\sin\\theta=y$，于是 $$\\cos^2\\theta+\\sin^2\\theta=1$$ 并且 $$\\sin(\\theta+2n\\pi)=\\sin\\theta,\\quad \\cos(\\theta+2n\\pi)=\\cos\\theta,\\qquad n\\in\\mathbb{Z}$$"
    },
    {
      "t": "p",
      "md": "由单位圆图像还可读出两侧的对称关系（$x=b$ 的水平线）：$$\\sin\\alpha=\\sin(\\alpha+2n\\pi)=\\sin(\\pi-\\alpha+2n\\pi)$$ $$\\cos\\alpha=\\cos(\\alpha+2n\\pi)=\\cos(-\\alpha+2n\\pi)$$ 即 $\\sin(\\pi-\\alpha)=\\sin\\alpha$，$\\cos(-\\alpha)=\\cos\\alpha$。"
    },
    {
      "t": "tbl",
      "head": [
        "$\\theta$",
        "$0$",
        "$\\pi/6$",
        "$\\pi/4$",
        "$\\pi/3$",
        "$\\pi/2$",
        "$2\\pi/3$",
        "$5\\pi/6$",
        "$\\pi$",
        "$3\\pi/2$",
        "$2\\pi$"
      ],
      "rows": [
        [
          "$\\sin\\theta$",
          "$0$",
          "$\\frac12$",
          "$\\frac{\\sqrt2}{2}$",
          "$\\frac{\\sqrt3}{2}$",
          "$1$",
          "$\\frac{\\sqrt3}{2}$",
          "$\\frac12$",
          "$0$",
          "$-1$",
          "$0$"
        ],
        [
          "$\\cos\\theta$",
          "$1$",
          "$\\frac{\\sqrt3}{2}$",
          "$\\frac{\\sqrt2}{2}$",
          "$\\frac12$",
          "$0$",
          "$-\\frac12$",
          "$-\\frac{\\sqrt3}{2}$",
          "$-1$",
          "$0$",
          "$1$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "从 $y=\\sin x$ 与 $y=\\cos x$ 的图像可以看出：$$-1\\le \\sin\\theta\\le 1,\\qquad -1\\le \\cos\\theta\\le 1$$ 正弦、余弦函数的周期都是 $2\\pi$，并且 $$\\sin(-\\theta)=-\\sin\\theta,\\qquad \\cos(-\\theta)=\\cos\\theta$$ 即**正弦函数是奇函数，余弦函数是偶函数**。"
    },
    {
      "t": "p",
      "md": "对于 $y=\\tan x$：定义域为 $\\left(-\\dfrac{\\pi}{2}+k\\pi,\\ \\dfrac{\\pi}{2}+k\\pi\\right)$（$k=0,1,\\dots$）；$$\\tan(k\\pi+x)=\\tan x,\\quad \\text{周期为}\\ \\pi;\\qquad \\tan(-x)=-\\tan x,\\quad \\text{奇函数}$$"
    },
    {
      "t": "tbl",
      "head": [
        "Trig. function",
        "Continuity",
        "Period",
        "Even/odd"
      ],
      "rows": [
        [
          "$\\cos x$",
          "在整个实轴上连续",
          "$2\\pi$",
          "even 偶"
        ],
        [
          "$\\sin x$",
          "在整个实轴上连续",
          "$2\\pi$",
          "odd 奇"
        ],
        [
          "$\\tan x$",
          "在 $x=(2n+1)\\pi/2,\\ n\\in\\mathbb{Z}$ 处不连续",
          "$\\pi$",
          "odd 奇"
        ],
        [
          "$\\cot x$",
          "在 $x=n\\pi,\\ n\\in\\mathbb{Z}$ 处不连续",
          "$\\pi$",
          "odd 奇"
        ],
        [
          "$\\sec x$",
          "在 $x=(2n+1)\\pi/2,\\ n\\in\\mathbb{Z}$ 处不连续",
          "$2\\pi$",
          "even 偶"
        ],
        [
          "$\\csc x$",
          "在 $x=n\\pi,\\ n\\in\\mathbb{Z}$ 处不连续",
          "$2\\pi$",
          "odd 奇"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**常用性质（Widely used properties）：** $$\\sin(-\\theta)=-\\sin\\theta\\ (\\text{odd}),\\qquad \\cos(-\\theta)=\\cos\\theta\\ (\\text{even}),\\qquad \\tan(-\\theta)=-\\tan\\theta\\ (\\text{odd})$$ $$\\sin(\\pi-\\theta)=\\sin\\theta,\\qquad \\sin(\\pi+\\theta)=-\\sin\\theta$$ $$\\sin\\left(\\frac{\\pi}{2}-\\theta\\right)=\\cos\\theta,\\qquad \\sin\\left(\\frac{\\pi}{2}+\\theta\\right)=\\cos\\theta,\\qquad \\cos(\\pi\\pm\\theta)=-\\cos\\theta$$"
    },
    {
      "t": "tbl",
      "head": [
        "Compound angle formulas 和角公式",
        "表达式"
      ],
      "rows": [
        [
          "$\\sin(A\\pm B)$",
          "$\\sin A\\cos B\\pm\\cos A\\sin B$"
        ],
        [
          "$\\cos(A\\pm B)$",
          "$\\cos A\\cos B\\mp\\sin A\\sin B$"
        ],
        [
          "$\\tan(A\\pm B)$",
          "$\\dfrac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$"
        ]
      ]
    },
    {
      "t": "tbl",
      "head": [
        "Double angle formulas 倍角公式",
        "表达式"
      ],
      "rows": [
        [
          "$\\sin 2A$",
          "$2\\sin A\\cos A$"
        ],
        [
          "$\\cos 2A$",
          "$\\cos^2 A-\\sin^2 A=1-2\\sin^2 A=2\\cos^2 A-1$"
        ],
        [
          "$\\tan 2A$",
          "$\\dfrac{2\\tan A}{1-\\tan^2 A}$"
        ],
        [
          "$\\sin^2 A$",
          "$\\dfrac{1-\\cos 2A}{2}$"
        ],
        [
          "$\\cos^2 A$",
          "$\\dfrac{1+\\cos 2A}{2}$"
        ]
      ]
    },
    {
      "t": "tbl",
      "head": [
        "Conversion formulas 和差化积 / 积化和差",
        "表达式"
      ],
      "rows": [
        [
          "$\\sin(x+y)+\\sin(x-y)$",
          "$2\\sin x\\cos y$"
        ],
        [
          "$\\sin(x+y)-\\sin(x-y)$",
          "$2\\cos x\\sin y$"
        ],
        [
          "$\\cos(x+y)+\\cos(x-y)$",
          "$2\\cos x\\cos y$"
        ],
        [
          "$\\cos(x+y)-\\cos(x-y)$",
          "$-2\\sin x\\sin y$"
        ],
        [
          "$\\sin A+\\sin B$",
          "$2\\sin\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$"
        ],
        [
          "$\\sin A-\\sin B$",
          "$2\\cos\\dfrac{A+B}{2}\\sin\\dfrac{A-B}{2}$"
        ],
        [
          "$\\cos A+\\cos B$",
          "$2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$"
        ],
        [
          "$\\cos A-\\cos B$",
          "$-2\\sin\\dfrac{A+B}{2}\\sin\\dfrac{A-B}{2}$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "十、反三角函数 Inverse Trigonometric Functions"
    },
    {
      "t": "p",
      "md": "三角函数不是一一函数（用水平线检验即可看出），因此没有反函数。但若**限制定义域**，它们就可能成为一一函数，从而可以讨论反函数。"
    },
    {
      "t": "p",
      "md": "回顾反函数的定义 $x=f^{-1}(y)\\iff f(x)=y$，于是 $$x=\\sin^{-1}(y)\\iff \\sin x=y$$ 显然 $\\sin^{-1}$ 的定义域是 $[-1,1]$，值域是 $[-\\pi/2,\\ \\pi/2]$。我们常把 $\\sin^{-1}$ 写作 arcsin：$$x=\\sin^{-1}y=\\arcsin y$$"
    },
    {
      "t": "p",
      "md": "**Definition 10.1（Inverse of Sine）** $y=f(x)=\\sin(x)$ 在 $-\\dfrac{\\pi}{2}\\le x\\le \\dfrac{\\pi}{2}$ 上是 1-1 的，因此存在反函数 $$y=f^{-1}(x):[-1,1]\\to\\left[-\\frac{\\pi}{2},\\ \\frac{\\pi}{2}\\right]$$ 记作 $y=\\arcsin(x)$。$\\arcsin(x)$ 的图像由 $\\sin(x)$ 在 $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$ 上的图像关于直线 $y=x$ 反射得到。"
    },
    {
      "t": "p",
      "md": "把余弦函数限制为 $y=f(x)=\\cos x$，$0\\le x\\le \\pi$，此时 $f$ 是一一的，其反函数称为反余弦函数，记作 $\\cos^{-1}$ 或 arccos：$$x=\\cos^{-1}y\\iff y=\\cos x,\\qquad 0\\le x\\le\\pi$$ 其中 $x=\\cos^{-1}y$ 要求 $-1\\le y\\le 1$。\n**Definition 10.2（Inverse of Cosine）** $y=\\cos(x)$ 在 $[0,\\pi]$ 上是 1-1 的，故存在反函数 $$y=f^{-1}(x):[-1,1]\\to[0,\\pi]$$ 记作 $y=\\arccos(x)$，其图像由 $\\cos(x)$ 在 $[0,\\pi]$ 上的图像关于 $y=x$ 反射得到。"
    },
    {
      "t": "p",
      "md": "把正切函数限制为 $f(x)=\\tan x$，$-\\pi/2<x<\\pi/2$，此时 $f$ 是一一的，其反函数称为反正切函数，记作 $\\tan^{-1}$ 或 arctan：$$x=\\tan^{-1}y\\iff y=\\tan x\\ \\text{且}\\ -\\frac{\\pi}{2}<x<\\frac{\\pi}{2}$$\n**Definition 10.3（Inverse of Tangent）** $y=\\tan(x)$ 在 $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$ 上是 1-1 的，故存在反函数 $$y=f^{-1}(x):(-\\infty,\\infty)\\to\\left(-\\frac{\\pi}{2},\\ \\frac{\\pi}{2}\\right)$$ 记作 $y=\\arctan(x)$，其图像由 $\\tan(x)$ 在 $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ 上的图像关于 $y=x$ 反射得到。"
    },
    {
      "t": "tbl",
      "head": [
        "[[inverse trigonometric function|反三角函数]]",
        "另一记法",
        "定义域",
        "值域"
      ],
      "rows": [
        [
          "$y=\\arcsin x$",
          "$\\sin^{-1}x$",
          "$[-1,1]$",
          "$\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$"
        ],
        [
          "$y=\\arccos x$",
          "$\\cos^{-1}x$",
          "$[-1,1]$",
          "$[0,\\pi]$"
        ],
        [
          "$y=\\arctan x$",
          "$\\tan^{-1}x$",
          "$(-\\infty,\\infty)$",
          "$\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "三角函数在自然定义域上**不是一一函数**，所以不能直接求反函数；必须先限制到一个单调区间（如 $\\sin$ 限制在 $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$、$\\cos$ 限制在 $[0,\\pi]$、$\\tan$ 限制在 $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$），才得到对应的反三角函数。"
    }
  ],
  "terms": [
    [
      "exponential function",
      "指数函数"
    ],
    [
      "base",
      "底数"
    ],
    [
      "natural exponential function",
      "自然指数函数"
    ],
    [
      "logarithmic function",
      "对数函数"
    ],
    [
      "one-to-one function",
      "一一函数"
    ],
    [
      "horizontal line test",
      "水平线检验"
    ],
    [
      "inverse function",
      "反函数"
    ],
    [
      "periodic function",
      "周期函数"
    ],
    [
      "period",
      "周期"
    ],
    [
      "even function",
      "偶函数"
    ],
    [
      "odd function",
      "奇函数"
    ],
    [
      "polynomial",
      "多项式"
    ],
    [
      "degree",
      "次数"
    ],
    [
      "remainder theorem",
      "余数定理"
    ],
    [
      "zero of a polynomial",
      "多项式的零点"
    ],
    [
      "binomial theorem",
      "二项式定理"
    ],
    [
      "factorial",
      "阶乘"
    ],
    [
      "binomial coefficient",
      "二项式系数"
    ],
    [
      "Pascal's formula",
      "帕斯卡公式"
    ],
    [
      "radian",
      "弧度"
    ],
    [
      "arc length",
      "弧长"
    ],
    [
      "sector",
      "扇形"
    ],
    [
      "standard position",
      "标准位置"
    ],
    [
      "unit circle",
      "单位圆"
    ],
    [
      "inverse trigonometric function",
      "反三角函数"
    ]
  ],
  "qids": [
    "mid-2-01",
    "mid-2-02",
    "mid-2-03",
    "mid-2-04",
    "mid-2-05",
    "mid-2-06",
    "mid-2-07",
    "mid-2-08"
  ]
});

  /* ---------- L3 第3讲 极限与连续 ---------- */
  T.push({
  "no": "L3",
  "title": "第3讲 极限与连续",
  "titleEn": "Limit of a Function; Sandwich Theorem; Special Limits; Continuity; Intermediate Value Theorem (IVT)",
  "tags": [
    "limit",
    "one-sided limit",
    "sandwich theorem",
    "special limits",
    "continuity",
    "intermediate value theorem"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "本讲概要"
    },
    {
      "t": "note",
      "md": "本讲（Lecture Notes 3）的主线是：先建立[[limit of a function|函数极限]]的直观定义与精确定义，再给出[[sandwich theorem|夹逼定理]]、两个[[special limits|特殊极限]]，最后研究[[continuity|连续性]]并用[[intermediate value theorem|介值定理]]证明方程有根。"
    },
    {
      "t": "tbl",
      "head": [
        "小节",
        "内容"
      ],
      "rows": [
        [
          "3.1 Limit of a Function",
          "直观定义、精确定义（$\\varepsilon$-$\\delta$）、极限运算法则、左/右极限"
        ],
        [
          "3.1.2 Sandwich Theorem",
          "夹逼定理及其求极限的应用"
        ],
        [
          "3.1.3 Special Limits",
          "特殊极限 $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$ 与 $\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n=e$"
        ],
        [
          "3.2 Continuity",
          "连续的定义、间断的判定、连续函数的运算与初等函数的连续性"
        ],
        [
          "3.3 Intermediate Value Theorem",
          "介值定理两个版本、有根性应用、有界性定理"
        ]
      ]
    },
    {
      "t": "h",
      "md": "一、Limit of a Function（函数极限）"
    },
    {
      "t": "p",
      "md": "\"Limit\" 指的是：当 $x$ 任意接近实数轴上的一点 $a$ 时，$f(x)$ 会走向哪里？与之相关的两个概念是[[left-hand limit|左极限]]（$x$ 从左边接近 $a$）与[[right-hand limit|右极限]]（$x$ 从右边接近 $a$）。本讲从数学的角度研究这些概念，并给出极限的直观定义。"
    },
    {
      "t": "p",
      "md": "先考察 $f(x)=x^2-x+2$ 在 $x$ 接近 $2$ 时的表现（PPT 用 GeoGebra 表格列出数值）："
    },
    {
      "t": "tbl",
      "head": [
        "$x<2$",
        "$f(x)$",
        "$x>2$",
        "$f(x)$"
      ],
      "rows": [
        [
          "1.0",
          "2.000000",
          "3.0",
          "8.000000"
        ],
        [
          "1.5",
          "2.750000",
          "2.5",
          "5.750000"
        ],
        [
          "1.8",
          "3.440000",
          "2.2",
          "4.640000"
        ],
        [
          "1.9",
          "3.710000",
          "2.1",
          "4.310000"
        ],
        [
          "1.95",
          "3.852500",
          "2.05",
          "4.152500"
        ],
        [
          "1.99",
          "3.970100",
          "2.01",
          "4.030100"
        ],
        [
          "1.995",
          "3.985025",
          "2.005",
          "4.015025"
        ],
        [
          "1.999",
          "3.997001",
          "2.001",
          "4.003001"
        ]
      ]
    },
    {
      "t": "p",
      "md": "观察：当 $x$ 从两侧接近 $2$ 时，$f(x)$ 都接近 $4$。于是说 “函数 $f(x)=x^2-x+2$ 当 $x$ 趋于 $2$ 时的极限等于 $4$”，记作 $$\\lim_{x\\to2}(x^2-x+2)=4.$$"
    },
    {
      "t": "h",
      "md": "1.1 极限的直观定义（Definition 1.1）"
    },
    {
      "t": "p",
      "md": "设 $f(x)$ 在某个包含 $a$ 的[[open interval|开区间]]上有定义（可能除去 $a$ 点本身）。若当 $x$ 从 $a$ 的两侧趋于 $a$ 但不等于 $a$ 时，$f(x)$ 的值趋于数 $L$，则称 “$f(x)$ 当 $x$ 趋于 $a$ 时的极限为 $L$”，记作 $$\\lim_{x\\to a}f(x)=L \\quad\\text{或}\\quad f(x)\\to L\\ \\text{as}\\ x\\to a.$$"
    },
    {
      "t": "note",
      "md": "注：“$x$ approaches $a$” 指 $x$ 从 $a$ 的左右两侧同时逼近 $a$。"
    },
    {
      "t": "h",
      "md": "1.2 用数值表猜极限（Exercise 1.1、1.2）"
    },
    {
      "t": "p",
      "md": "**Exercise 1.1** 猜测 $\\lim_{x\\to1}\\dfrac{x-1}{x^2-1}$ 的值。"
    },
    {
      "t": "tbl",
      "head": [
        "$x<1$",
        "$f(x)$",
        "$x>1$",
        "$f(x)$"
      ],
      "rows": [
        [
          "0.5",
          "0.666667",
          "1.5",
          "0.400000"
        ],
        [
          "0.9",
          "0.526316",
          "1.1",
          "0.476190"
        ],
        [
          "0.99",
          "0.502513",
          "1.01",
          "0.497512"
        ],
        [
          "0.999",
          "0.500250",
          "1.001",
          "0.499750"
        ],
        [
          "0.9999",
          "0.500025",
          "1.0001",
          "0.499975"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Solution 1.1** $$\\lim_{x\\to1}\\frac{x-1}{x^2-1}=0.5.$$ 注意该函数在 $x=1$ 处没有定义，但这不影响结果：$\\lim_{x\\to1}f(x)$ 的定义只要求考虑接近 $1$ 但不等于 $1$ 的 $x$。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.2** 猜测 $\\lim_{t\\to0}\\dfrac{\\sqrt{t^2+9}-3}{t^2}$ 的值。"
    },
    {
      "t": "tbl",
      "head": [
        "$t$",
        "$\\dfrac{\\sqrt{t^2+9}-3}{t^2}$"
      ],
      "rows": [
        [
          "$1.0$",
          "0.162277..."
        ],
        [
          "$0.5$",
          "0.165525..."
        ],
        [
          "$0.1$",
          "0.166620..."
        ],
        [
          "$0.05$",
          "0.166655..."
        ],
        [
          "$0.01$",
          "0.166666..."
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Solution 1.2** $$\\lim_{t\\to0}\\frac{\\sqrt{t^2+9}-3}{t^2}=\\frac16.$$"
    },
    {
      "t": "h",
      "md": "1.3 极限的精确定义（Definition 1.2）"
    },
    {
      "t": "p",
      "md": "设 $c\\in\\mathbb{R}$，$f(x)$ 在包含 $c$ 的开区间上有定义（可能除去 $c$ 本身）。若对任意给定的数 $\\varepsilon>0$，都存在正数 $\\delta>0$，使得只要 $0<|x-c|<\\delta$，就有 $|f(x)-L|\\le\\varepsilon$，则称 $f(x)$ 在点 $c$ 处极限为 $L$，记作 $$\\lim_{x\\to c}f(x)=L \\quad\\text{或}\\quad f(x)\\to L\\ \\text{as}\\ x\\to c.$$"
    },
    {
      "t": "note",
      "md": "注：函数 $f$ 可以在 $x=c$ 处没有定义。"
    },
    {
      "t": "p",
      "md": "直观理解：$\\lim_{x\\to c}f(x)=L$ 表示对任意包含 $L$ 的开区间 $J=(L-\\varepsilon,L+\\varepsilon)$，都能找到 $c$ 的一个去心邻域 $(c-\\delta,c)\\cup(c,c+\\delta)$，使得只要 $x$ 落在该去心邻域内，$f(x)$ 就落在预先给定的开区间 $J$ 内。注意：对 $f$ 在 $c$ 处的值不作任何要求。"
    },
    {
      "t": "p",
      "md": "关于 $\\lim_{x\\to c}f(x)$：PPT 的四个图中，只有左上图的极限存在；右上、左下、右下三图的极限都不存在。"
    },
    {
      "t": "p",
      "md": "三个例子：左图 $y=f_1(x)$ 满足 $f_1(c)=\\lim_{x\\to c}f_1(x)=L$；中图 $y=f_2(x)$ 满足 $\\lim_{x\\to c}f_2(x)=L$ 但 $f_2(c)$ 不存在；右图 $y=f_3(x)$ 满足 $f_3(c)=L'\\ne L$。这三种情况下都有 $\\lim_{x\\to c}f_1(x)=\\lim_{x\\to c}f_2(x)=\\lim_{x\\to c}f_3(x)=L$。"
    },
    {
      "t": "h",
      "md": "1.4 极限的运算法则（Theorem 1.1）"
    },
    {
      "t": "p",
      "md": "设 $\\lim_{x\\to c}f(x)=A$，$\\lim_{x\\to c}g(x)=B$，则"
    },
    {
      "t": "tbl",
      "head": [
        "编号",
        "结论"
      ],
      "rows": [
        [
          "1",
          "$\\lim_{x\\to c}\\bigl(f(x)+g(x)\\bigr)=A+B$"
        ],
        [
          "2",
          "$\\lim_{x\\to c}kf(x)=kA$，其中 $k\\in\\mathbb{R}$ 为常数"
        ],
        [
          "3",
          "$\\lim_{x\\to c}\\bigl[f(x)g(x)\\bigr]=AB$"
        ],
        [
          "4",
          "$\\lim_{x\\to c}\\dfrac{f(x)}{g(x)}=\\dfrac{A}{B}$，只要 $B\\ne0$"
        ],
        [
          "5",
          "若 $f$ 是[[polynomial|多项式]]，则 $\\lim_{x\\to c}f(x)=f(c)$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.5 代入与消去因子（Exercise 1.3–1.6）"
    },
    {
      "t": "p",
      "md": "**Exercise 1.3** 设 $f(x)=1-2x$，求 $\\lim_{x\\to1}f(x)$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.3** 因为 $f$ 是多项式，所以 $$\\lim_{x\\to1}f(x)=f(1)=-1.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.4** 求 $\\lim_{x\\to-1}\\dfrac{x^2-3x+5}{x-4}$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.4** 分子、分母的极限分别为 $$\\lim_{x\\to-1}(x^2-3x+5)=(-1)^2-3(-1)+5=9,\\qquad \\lim_{x\\to-1}(x-4)=(-1)-4=-5\\ne0,$$ 故 $$\\lim_{x\\to-1}\\frac{x^2-3x+5}{x-4}=\\frac{9}{-5}.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.5** 求 $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.5** 注意 $f(x)=\\dfrac{x^2-4}{x-2}$ 在 $x=2$ 处没有定义，即 $f(2)$ 不存在。但是 $$\\lim_{x\\to2}\\frac{x^2-4}{x-2}=\\lim_{x\\to2}\\frac{(x+2)(x-2)}{x-2}=\\lim_{x\\to2}(x+2)=4.$$"
    },
    {
      "t": "warn",
      "md": "**易错点**：函数在 $x=a$ 处没有定义（或定义值不同）并不妨碍 $\\lim_{x\\to a}f(x)$ 存在；只需在 $x\\ne a$ 且 $x$ 接近 $a$ 时化简。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.6** 设 $f(x)=\\begin{cases}x^2+2,& x\\ne2,\\\\ 8,& x=2,\\end{cases}$ 求 $\\lim_{x\\to2}f(x)$。注意 $f(2)=8$，但这与极限无关。"
    },
    {
      "t": "p",
      "md": "**Solution 1.6** 对 $x\\ne2$ 且 $x$ 接近 $2$，有 $f(x)=x^2+2$，因此 $$\\lim_{x\\to2}f(x)=\\lim_{x\\to2}(x^2+2)=2^2+2=6.$$"
    },
    {
      "t": "h",
      "md": "1.6 左极限与右极限（Definition 1.3、Theorem 1.2）"
    },
    {
      "t": "p",
      "md": "- $\\lim_{x\\to c^-}f(x)=L$：**左极限**，即当 $x$ 从左侧趋于 $c$ 时 $f(x)\\to L$。"
    },
    {
      "t": "p",
      "md": "- $\\lim_{x\\to c^+}f(x)=L$：**右极限**，即当 $x$ 从右侧趋于 $c$ 时 $f(x)\\to L$。"
    },
    {
      "t": "note",
      "md": "**Theorem 1.2**：$\\lim_{x\\to c^-}f(x)=\\lim_{x\\to c^+}f(x)=L \\iff \\lim_{x\\to c}f(x)=L$。即 $f$ 在 $c$ 处极限存在，当且仅当左右极限都存在且同为 $L$。"
    },
    {
      "t": "h",
      "md": "1.7 分段函数与无穷极限（Exercise 1.7–1.10）"
    },
    {
      "t": "p",
      "md": "**Exercise 1.7** 设 $f(x)=\\begin{cases}\\sin(x),& x\\le\\dfrac{\\pi}{2},\\\\[2pt] \\sin(x)+1,& x>\\dfrac{\\pi}{2}.\\end{cases}$ 讨论 $x\\to\\dfrac{\\pi}{2}$ 时的极限。"
    },
    {
      "t": "p",
      "md": "**Solution 1.7** 左、右极限分别为 $$\\lim_{x\\to(\\frac{\\pi}{2})^-}f(x)=1,\\qquad \\lim_{x\\to(\\frac{\\pi}{2})^+}f(x)=2,$$ 左右极限不相等，所以 $\\lim_{x\\to\\frac{\\pi}{2}}f(x)$ 不存在。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.8** 设 $f(x)=\\begin{cases}-2x,& x<0,\\\\ x+1,& x>0.\\end{cases}$ 求 $\\lim_{x\\to0}f(x)$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.8** 因为 $\\lim_{x\\to0^-}f(x)=0$ 而 $\\lim_{x\\to0^+}f(x)=1$，所以 $\\lim_{x\\to0}f(x)$ 不存在。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.9** 求 $\\lim_{x\\to0}\\dfrac{1}{x^2}$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.9** 考察 $$\\lim_{x\\to0^+}\\frac{1}{x^2}=+\\infty,\\qquad \\lim_{x\\to0^-}\\frac{1}{x^2}=+\\infty,$$ 故 $$\\lim_{x\\to0}\\frac{1}{x^2}=+\\infty.$$"
    },
    {
      "t": "warn",
      "md": "**易错点**：$+\\infty$ 不是实数，写成 $\\lim_{x\\to0}\\frac{1}{x^2}=+\\infty$ 只是说明该极限不存在（无界发散），不能当作“极限等于某个数”来参与四则运算。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.10** 求 $\\lim_{x\\to0}\\dfrac{\\sqrt{x^2+9}-3}{x^2}$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.10** 直接代入得 $\\dfrac{\\sqrt{0^2+9}-3}{0^2}=\\dfrac00$，没有定义，因此使用**共轭根式**（conjugate radical）：$$\\lim_{x\\to0}\\frac{\\sqrt{x^2+9}-3}{x^2}=\\lim_{x\\to0}\\frac{\\sqrt{x^2+9}-3}{x^2}\\cdot\\frac{\\sqrt{x^2+9}+3}{\\sqrt{x^2+9}+3}=\\lim_{x\\to0}\\frac{x^2+9-9}{x^2\\left(\\sqrt{x^2+9}+3\\right)}=\\lim_{x\\to0}\\frac{1}{\\sqrt{x^2+9}+3}=\\frac16.$$"
    },
    {
      "t": "h",
      "md": "二、Sandwich Theorem（夹逼定理）"
    },
    {
      "t": "p",
      "md": "**Theorem 2.1（Sandwich Theorem）** 设 $f(x),g(x),h(x)$ 满足：对 $a$ 附近的所有 $x$（可能除去 $a$ 本身）都有 $$f(x)\\le g(x)\\le h(x),$$ 且 $$\\lim_{x\\to a}f(x)=\\lim_{x\\to a}h(x)=L,$$ 则 $$\\lim_{x\\to a}g(x)=L.$$"
    },
    {
      "t": "note",
      "md": "要点：夹逼定理的关键是找到 $g$ 的**上界函数与下界函数**，且两者极限相同；$g$ 本身在 $a$ 处可以没有定义。"
    },
    {
      "t": "h",
      "md": "2.1 夹逼定理的应用（Exercise 2.1、2.2）"
    },
    {
      "t": "p",
      "md": "**Exercise 2.1** 求 $\\lim_{x\\to0}x\\sin\\dfrac1x$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.1** 因为 $-|x|\\le x\\sin\\dfrac1x\\le|x|$，且 $\\lim_{x\\to0}-|x|=\\lim_{x\\to0}|x|=0$，由夹逼定理得 $$\\lim_{x\\to0}x\\sin\\frac1x=0.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 2.2** 求 $\\lim_{n\\to\\infty}\\dfrac{n\\cos(n)}{1+n^2}$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.2** 因为 $-1\\le\\cos(n)\\le1$，所以 $$\\frac{-n}{1+n^2}\\le\\frac{n\\cos(n)}{1+n^2}\\le\\frac{n}{1+n^2}.$$ 而 $$\\lim_{n\\to\\infty}\\frac{-n}{1+n^2}=\\lim_{n\\to\\infty}\\frac{n}{1+n^2}=0,$$ 由夹逼定理得 $$\\lim_{n\\to\\infty}\\frac{n\\cos(n)}{1+n^2}=0.$$"
    },
    {
      "t": "h",
      "md": "三、Special Limits（特殊极限）"
    },
    {
      "t": "p",
      "md": "**Theorem 3.1** $$\\lim_{x\\to0}\\frac{\\sin x}{x}=1,\\qquad \\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n=e=2.71828\\ldots$$"
    },
    {
      "t": "p",
      "md": "PPT 用数值表说明这两个极限（$\\dfrac{\\sin x}{x}$ 的两列数值相等，即 $\\sin x\\approx x$ 当 $x$ 很小时）："
    },
    {
      "t": "tbl",
      "head": [
        "$x$",
        "$\\sin(x)$",
        "$\\sin(x)/x$",
        "$n$",
        "$(1+1/n)^n$"
      ],
      "rows": [
        [
          "1",
          "0.8414709848",
          "0.8414709848",
          "1",
          "2"
        ],
        [
          "0.5",
          "0.4794255386",
          "0.9588510772",
          "10",
          "2.5937424601"
        ],
        [
          "0.1",
          "0.0998334166",
          "0.9983341665",
          "50",
          "2.6915880291"
        ],
        [
          "0.05",
          "0.0499791693",
          "0.9995833854",
          "100",
          "2.7048138294"
        ],
        [
          "0.01",
          "0.0099998333",
          "0.9999833334",
          "500",
          "2.7155685207"
        ],
        [
          "0.005",
          "0.0049999792",
          "0.9999958333",
          "1000",
          "2.7169239322"
        ],
        [
          "0.001",
          "0.0009999998",
          "0.9999998333",
          "5000",
          "2.7180100501"
        ],
        [
          "0.0005",
          "0.0005",
          "0.9999999583",
          "10000",
          "2.7181459268"
        ],
        [
          "0.0001",
          "0.0001",
          "0.9999999983",
          "50000",
          "2.7182546461"
        ],
        [
          "0.00005",
          "0.00005",
          "0.9999999996",
          "100000",
          "2.7182682372"
        ]
      ]
    },
    {
      "t": "code",
      "lang": "python",
      "code": "import math\n\n# 数值观察 lim_{x->0} sin(x)/x = 1\nfor x in [1, 0.5, 0.1, 0.05, 0.01, 0.001]:\n    print(x, math.sin(x), math.sin(x) / x)\n\n# 数值观察 lim_{n->inf} (1 + 1/n)^n = e\nfor n in [1, 10, 100, 1000, 10000, 100000]:\n    print(n, (1 + 1 / n) ** n)"
    },
    {
      "t": "h",
      "md": "3.1 特殊极限的用法（Exercise 3.1）"
    },
    {
      "t": "p",
      "md": "**Exercise 3.1** 求 $\\lim_{x\\to0}\\dfrac{\\tan x}{x}$。"
    },
    {
      "t": "p",
      "md": "**Solution 3.1** $$\\lim_{x\\to0}\\frac{\\tan x}{x}=\\lim_{x\\to0}\\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x}=1\\times1=1.$$"
    },
    {
      "t": "h",
      "md": "3.2 三角函数形式的推广（Theorem 3.2、Exercise 3.2）"
    },
    {
      "t": "p",
      "md": "**Theorem 3.2（一个三角公式）** 若 $\\lim_{x\\to a}f(x)=0$，则 $$\\lim_{x\\to a}\\frac{\\sin f(x)}{f(x)}=1.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 3.2** 求 $\\lim_{x\\to-1}\\dfrac{\\sin(x^2-x-2)}{x+1}$。"
    },
    {
      "t": "p",
      "md": "**Solution 3.2** 把分子拆成 $\\sin\\bigl(f(x)\\bigr)$ 的形式，其中 $f(x)=x^2-x-2=(x-2)(x+1)$：$$\\lim_{x\\to-1}\\frac{\\sin(x^2-x-2)}{x+1}=\\lim_{x\\to-1}\\left[\\frac{\\sin(x^2-x-2)}{x^2-x-2}\\cdot\\frac{x^2-x-2}{x+1}\\right].$$ 因为 $x\\to-1$ 时 $x^2-x-2\\to0$，第一因子趋于 $1$；第二因子 $\\dfrac{(x-2)(x+1)}{x+1}=x-2\\to-1-2=-3$。所以 $$\\lim_{x\\to-1}\\frac{\\sin(x^2-x-2)}{x+1}=1\\times(-3)=-3.$$"
    },
    {
      "t": "h",
      "md": "四、Continuity（连续性）"
    },
    {
      "t": "p",
      "md": "**Definition 4.1** 函数 $f$ 在 $c\\in\\operatorname{Dom}(f)$ 处**连续**，当且仅当 $$\\lim_{x\\to c}f(x)=f(c).$$ 若 $f$ 在其定义域的每一点都连续，就称 $f$ 是**连续函数**。"
    },
    {
      "t": "p",
      "md": "**Definition 4.2（极限）** 若单侧极限 $\\lim_{x\\to a^-}f(x)$ 与 $\\lim_{x\\to a^+}f(x)$ 都存在且都等于 $L$，则称 $f(x)$ 当 $x$ 趋于 $a$ 时的极限为 $L$，记作 $$\\lim_{x\\to a}f(x)=L.$$"
    },
    {
      "t": "p",
      "md": "**Definition 4.3（一点处的连续）** 若 $\\lim_{x\\to a}f(x)=f(a)$，则称 $f(x)$ 在点 $a$ 处连续。"
    },
    {
      "t": "p",
      "md": "**Definition 4.4（一点处的间断）** 若下列任一条件成立，则称 $f(x)$ 在 $a$ 处**间断**（不连续）："
    },
    {
      "t": "tbl",
      "head": [
        "情形",
        "含义"
      ],
      "rows": [
        [
          "(a)",
          "$\\lim_{x\\to a}f(x)$ 不存在"
        ],
        [
          "(b)",
          "$f(a)$ 不存在（即 $a\\notin\\operatorname{Dom}(f)$）"
        ],
        [
          "(c)",
          "$\\lim_{x\\to a}f(x)\\ne f(a)$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "PPT 的四个图中，只有左上图的 $f$ 在 $c$ 处连续；其余各图中 $f$ 在 $c$ 处都不连续。"
    },
    {
      "t": "h",
      "md": "4.1 连续函数的运算法则与常见连续函数"
    },
    {
      "t": "p",
      "md": "**Theorem 4.1** 若 $f$ 与 $g$ 都在 $a$ 处连续，则"
    },
    {
      "t": "p",
      "md": "- $f\\pm g$ 在 $a$ 处连续；\n- $fg$ 在 $a$ 处连续；\n- $f/g$ 在 $a$ 处连续，只要 $g(a)\\ne0$；\n- $f\\circ g$ 在 $a$ 处连续，只要 $f$ 在 $g(a)$ 处连续。"
    },
    {
      "t": "p",
      "md": "**Theorem 4.2**"
    },
    {
      "t": "tbl",
      "head": [
        "函数类",
        "连续性"
      ],
      "rows": [
        [
          "常数函数",
          "处处连续"
        ],
        [
          "多项式",
          "处处连续"
        ],
        [
          "有理函数 $f(x)=\\dfrac{P(x)}{Q(x)}$",
          "在 $Q(x)\\ne0$ 处连续"
        ],
        [
          "$\\sin(x)$ 与 $\\cos(x)$",
          "处处连续"
        ]
      ]
    },
    {
      "t": "h",
      "md": "4.2 分段函数的连续性（Exercise 4.1、4.2）"
    },
    {
      "t": "p",
      "md": "**Exercise 4.1** 设 $$f(x)=\\begin{cases}1,& -1<x<1,\\\\ 2x-1,& 1\\le x<5.\\end{cases}$$ 求下列单侧极限（若存在），并判断 $f(x)$ 在 $x=1$ 处是否连续。"
    },
    {
      "t": "tbl",
      "head": [
        "极限",
        "值"
      ],
      "rows": [
        [
          "$\\lim_{x\\to-1^+}f(x)$",
          "$1$"
        ],
        [
          "$\\lim_{x\\to1^-}f(x)$",
          "$1$"
        ],
        [
          "$\\lim_{x\\to1^+}f(x)$",
          "$1$"
        ],
        [
          "$\\lim_{x\\to5^-}f(x)$",
          "$9$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Solution 4.1** 因为 $f(1)=2(1)-1=1$，且 $\\lim_{x\\to1^-}f(x)=1=\\lim_{x\\to1^+}f(x)$，所以 $\\lim_{x\\to1}f(x)=1=f(1)$，故 $f(x)$ 在 $x=1$ 处连续。"
    },
    {
      "t": "p",
      "md": "**Exercise 4.2** 设 $$f(x)=\\begin{cases}\\dfrac{x^2-4}{x+2},& x<-2,\\\\[6pt] ax+b,& -2\\le x<0,\\\\[4pt] 2x+1,& x>0.\\end{cases}$$ 求 $a$ 与 $b$ 使 $f$ 在 $ℝ$ 上处处连续。"
    },
    {
      "t": "p",
      "md": "**Solution 4.2** 分别计算各连接点的单侧极限与函数值：$$\\lim_{x\\to-2^-}f(x)=\\lim_{x\\to-2^-}\\frac{x^2-4}{x+2}=\\lim_{x\\to-2^-}(x-2)=-4,$$ $$\\lim_{x\\to-2^+}f(x)=\\lim_{x\\to-2^+}(ax+b)=-2a+b,\\qquad f(-2)=-2a+b,$$ $$\\lim_{x\\to0^-}f(x)=\\lim_{x\\to0^-}(ax+b)=b,\\qquad \\lim_{x\\to0^+}f(x)=\\lim_{x\\to0^+}(2x+1)=1,\\qquad f(0)=1.$$"
    },
    {
      "t": "warn",
      "md": "**易错点**：PPT 在此处写出的左极限式子中的分子为 $x^2-4$（OCR 另处显示为 $x^2-1$，按数学常识应为 $x^2-4$，因为要与分母 $x+2$ 约去得到 $x-2$，从而 $x\\to-2^-$ 的极限为 $-4$）。"
    },
    {
      "t": "p",
      "md": "因为 $f$ 在 $x=-2$ 与 $x=0$ 处连续，所以 $-2a+b=-4$ 且 $b=1$，解得 $a=\\dfrac52$，$b=1$。"
    },
    {
      "t": "h",
      "md": "五、Intermediate Value Theorem（介值定理）"
    },
    {
      "t": "p",
      "md": "**Theorem 5.1（IVT，Version 1）** 设 $f(x)$ 在 $[a,b]$ 上连续，且 $f(a)\\ne f(b)$。则对任意介于 $f(a)$ 与 $f(b)$ 之间的实数 $m$，都存在 $c\\in(a,b)$ 使得 $$f(c)=m.$$"
    },
    {
      "t": "h",
      "md": "5.1 介值定理的应用（Exercise 5.1、5.2）"
    },
    {
      "t": "p",
      "md": "**Exercise 5.1** 若 $f(x)=x^2+10\\sin x$，证明存在数 $c$ 使 $f(c)=1000$。"
    },
    {
      "t": "p",
      "md": "**Solution 5.1** 因为 $f$ 在 $[0,100]$ 上连续，且 $$f(0)=0<1000,\\qquad f(100)=10000+10\\sin100>1000,$$ 由介值定理，存在 $c\\in[0,100]$ 使 $f(c)=1000$。"
    },
    {
      "t": "p",
      "md": "**Exercise 5.2** 证明函数 $f(x)=3x^3-4x^2+x-4$ 在 $[1,2]$ 内有根。"
    },
    {
      "t": "p",
      "md": "**Solution 5.2** $f(x)$ 在 $[1,2]$ 上连续，且 $$f(1)=3-4+1-4=-4<0,\\qquad f(2)=24-16+2-4=6>0.$$ 由 IVT，存在某个 $c\\in(1,2)$（可能不唯一）使 $f(c)=0$。"
    },
    {
      "t": "h",
      "md": "5.2 介值定理的第二版本"
    },
    {
      "t": "p",
      "md": "**Theorem 5.2（IVT，Version 2）** 设 $f$ 在闭区间 $[a,b]$ 上连续，且 $f(a)$ 与 $f(b)$ 异号。则存在点 $c\\in(a,b)$ 使得 $$f(c)=0.$$"
    },
    {
      "t": "h",
      "md": "5.3 IVT 的条件不能缺少（Exercise 5.3）"
    },
    {
      "t": "p",
      "md": "**Exercise 5.3** 设 $f(x)=\\dfrac1x$。已知 $f(1)=1>0$ 而 $f(-1)=-1<0$。能否由此断定存在常数 $c\\in(-1,1)$ 使 $f(c)=0$？为什么？"
    },
    {
      "t": "p",
      "md": "**Solution 5.3** 不能，因为 $f(x)$ 在 $[-1,1]$ 上不连续（$x=0$ 处无定义），不满足 IVT 的前提条件。"
    },
    {
      "t": "warn",
      "md": "**易错点**：使用介值定理前必须先验证 $f$ 在整个闭区间上连续。端点异号只是必要条件之一，不能只凭端点异号就断言有根。"
    },
    {
      "t": "h",
      "md": "5.4 有界性定理（Theorem 5.3）"
    },
    {
      "t": "p",
      "md": "**Theorem 5.3（Bounded Function）** 设 $f$ 是 $[a,b]$ 上的连续函数，则 $f$ 在 $[a,b]$ 上有界。即存在常数 $M$，使得对任意 $x\\in[a,b]$ 都有 $$|f(x)|\\le M.$$"
    },
    {
      "t": "p",
      "md": "换言之，**有界函数**被夹在 $-M$ 与 $M$ 之间；而**无界函数**无论 $M$ 取多大，总会跑到 $[-M,M]$ 之外。"
    },
    {
      "t": "h",
      "md": "5.5 综合练习：各类型的极限（Exercise 5.4）"
    },
    {
      "t": "p",
      "md": "求下列极限（若存在）：$$\\lim_{x\\to0}\\frac{\\sin(x)}{x},\\qquad \\lim_{x\\to0}x^2\\sin\\frac1x,\\qquad \\lim_{x\\to0}\\frac{\\sin\\frac1x}{\\frac1x},\\qquad \\lim_{x\\to\\infty}\\frac{\\sin\\frac1x}{\\frac{1}{x^2}}.$$"
    },
    {
      "t": "p",
      "md": "**Solution 5.4 / 5.5**"
    },
    {
      "t": "p",
      "md": "- 由特殊极限（Theorem 3.1）：$\\lim_{x\\to0}\\dfrac{\\sin(x)}{x}=1$。"
    },
    {
      "t": "p",
      "md": "- 因为 $\\lim_{x\\to0}x^2=0$ 且 $\\left|\\sin\\dfrac1x\\right|\\le1$，由夹逼定理得 $\\lim_{x\\to0}x^2\\sin\\dfrac1x=0$。"
    },
    {
      "t": "p",
      "md": "- 因为 $\\lim_{x\\to0}\\dfrac1x=\\infty$，不满足 Theorem 3.2 中 $f(x)\\to0$ 的条件。注意 $\\dfrac{\\sin\\frac1x}{\\frac1x}=x\\sin\\dfrac1x$，由夹逼定理得 $\\lim_{x\\to0}x\\sin\\dfrac1x=0$。"
    },
    {
      "t": "p",
      "md": "- 取 $u=\\dfrac1{x^2}$，则 $x\\to\\infty$ 时 $u\\to0$，且 $\\dfrac1x=\\sqrt u$。于是 $$\\lim_{x\\to\\infty}\\frac{\\sin\\frac1x}{\\frac{1}{x^2}}=\\lim_{u\\to0}\\frac{\\sin\\sqrt u}{u}=\\lim_{u\\to0}\\left(\\frac{\\sin\\sqrt u}{\\sqrt u}\\cdot\\frac{1}{\\sqrt u}\\right)=1\\times(+\\infty)=+\\infty,$$ 即该极限不存在（发散到 $+\\infty$）。这里同样用到了 $\\dfrac{\\sin f(x)}{f(x)}\\to1$（取 $f=\\sqrt u\\to0$）。"
    },
    {
      "t": "warn",
      "md": "**易错点（OCR 辨正）**：PPT 此题的分母指数有乱码。按数学内容判断：第三个极限的分母应为 $\\dfrac1x$（此时用 $u=\\dfrac1x\\to0$ 得极限为 $0$）；第四个极限的分母为 $\\dfrac{1}{x^2}$，化为 $\\dfrac{\\sin\\sqrt u}{u}$ 后发散到 $+\\infty$。关键仍是先检查 $\\dfrac{\\sin f(x)}{f(x)}$ 形式中是否 $f(x)\\to0$。"
    },
    {
      "t": "note",
      "md": "本题综合了三种方法：**特殊极限** $\\dfrac{\\sin f(x)}{f(x)}\\to1$（要求 $f(x)\\to0$，可作换元 $u=\\dfrac1x$ 或 $u=\\dfrac1{x^2}$）、**夹逼定理**（处理有界振荡因子乘无穷小），以及 $\\lim_{x\\to\\infty}\\dfrac1x=0$ 这一观察。若形式上不满足条件，可以用换元或夹逼定理处理，不能硬套公式。"
    },
    {
      "t": "h",
      "md": "六、$\\lim_{\\theta\\to0}\\dfrac{\\sin\\theta}{\\theta}=1$ 的证明（PPT Proof Part I & II）"
    },
    {
      "t": "p",
      "md": "**Proof（Part I）** 先考虑 $\\theta>0$ 的情形。由于 $\\theta$ 趋于 $0$，可假设 $0<\\theta<\\dfrac{\\pi}{2}$，作直角三角形 $OAB$，其中 $OA=1$，$\\angle BOA=\\theta$。弧 $AC$ 是圆心为 $O$、半径为 $1$ 的圆的一部分。比较面积得 $$\\triangle OAC<\\text{扇形 }OAC<\\triangle OAB,$$ 即 $$\\frac12\\sin\\theta<\\frac12\\theta<\\frac12\\tan\\theta.$$"
    },
    {
      "t": "p",
      "md": "**Proof（Part II）** 由上式得 $$1<\\frac{\\theta}{\\sin\\theta}<\\frac{1}{\\cos\\theta}.$$ 因此当 $0<\\theta<\\dfrac{\\pi}{2}$ 时 $$1>\\frac{\\sin\\theta}{\\theta}>\\cos\\theta.$$ 又因为 $\\sin\\theta$ 与 $\\cos\\theta$ 都是偶函数，上述不等式对 $-\\dfrac{\\pi}{2}<\\theta<0$ 也成立。由于 $\\lim_{\\theta\\to0}\\cos\\theta=1$，由[[Squeeze Theorem|夹逼定理]]（Squeeze Theorem）得 $$\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1.$$"
    },
    {
      "t": "note",
      "md": "本讲核心公式速查："
    },
    {
      "t": "tbl",
      "head": [
        "结论",
        "条件"
      ],
      "rows": [
        [
          "$\\lim_{x\\to a}\\bigl(f\\pm g\\bigr)=A\\pm B$，$\\lim fg=AB$，$\\lim\\frac fg=\\frac AB$",
          "$\\lim f=A,\\ \\lim g=B,\\ B\\ne0$"
        ],
        [
          "$\\lim_{x\\to c}f(x)=L \\iff \\lim_{x\\to c^-}f(x)=\\lim_{x\\to c^+}f(x)=L$",
          "左右极限均存在"
        ],
        [
          "$f(x)\\le g(x)\\le h(x)$，$\\lim f=\\lim h=L\\Rightarrow\\lim g=L$",
          "夹逼定理"
        ],
        [
          "$\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$，$\\lim_{x\\to a}\\dfrac{\\sin f(x)}{f(x)}=1$",
          "$\\lim_{x\\to a}f(x)=0$"
        ],
        [
          "$\\lim_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^n=e$",
          "$e=2.71828\\ldots$"
        ],
        [
          "$\\lim_{x\\to c}f(x)=f(c)$",
          "$f$ 在 $c$ 处连续"
        ],
        [
          "$f$ 在 $[a,b]$ 连续且 $f(a),f(b)$ 异号 $\\Rightarrow\\exists c\\in(a,b),f(c)=0$",
          "IVT Version 2"
        ],
        [
          "$f$ 在 $[a,b]$ 连续 $\\Rightarrow f$ 在 $[a,b]$ 有界",
          "有界性定理"
        ]
      ]
    }
  ],
  "terms": [
    [
      "limit of a function",
      "函数极限"
    ],
    [
      "left-hand limit",
      "左极限"
    ],
    [
      "right-hand limit",
      "右极限"
    ],
    [
      "deleted neighborhood",
      "去心邻域"
    ],
    [
      "open interval",
      "开区间"
    ],
    [
      "Sandwich Theorem",
      "夹逼定理"
    ],
    [
      "Squeeze Theorem",
      "夹逼定理（同 Sandwich Theorem）"
    ],
    [
      "special limits",
      "特殊极限"
    ],
    [
      "continuous",
      "连续的"
    ],
    [
      "continuity",
      "连续性"
    ],
    [
      "discontinuous",
      "间断的"
    ],
    [
      "Intermediate Value Theorem",
      "介值定理"
    ],
    [
      "bounded function",
      "有界函数"
    ],
    [
      "conjugate radical",
      "共轭根式"
    ],
    [
      "polynomial",
      "多项式"
    ],
    [
      "rational function",
      "有理函数"
    ],
    [
      "even function",
      "偶函数"
    ],
    [
      "domain",
      "定义域"
    ]
  ],
  "qids": [
    "mid-3-01",
    "mid-3-02",
    "mid-3-03",
    "mid-3-04",
    "mid-3-05",
    "mid-3-06",
    "mid-3-07",
    "mid-3-08",
    "mid-3-09",
    "mid-3-10",
    "mid-3-11",
    "mid-3-12"
  ]
});

  /* ---------- L4 第4讲 导数与求导法则 ---------- */
  T.push({
  "no": "L4",
  "title": "第4讲 导数与求导法则",
  "titleEn": "Lecture Notes 4: Differentiation",
  "tags": [
    "derivative",
    "first principle",
    "chain rule",
    "implicit differentiation",
    "higher derivatives",
    "Leibniz's rule",
    "L'Hopital's Rule"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "一、曲线在一点处的切线斜率 (Slope To A Curve At A Point)"
    },
    {
      "t": "p",
      "md": "本讲研究两个核心对象：一是**曲线在一点处的斜率**，二是由这个斜率定义的**导数**及其各种求导法则。"
    },
    {
      "t": "p",
      "md": "先看**切线**是怎样得到的。设 $C$ 是一条曲线，$P$ 是 $C$ 上一点，$Q$ 是 $C$ 上另一点，直线 $PQ$ 叫做**割线** (secant line)。让 $Q$ 沿曲线 $C$ 从右边趋近 $P$，割线 $PQ$ 趋于一条极限位置直线 $T_R$；再让 $Q$ 沿 $C$ 从左边趋近 $P$，割线趋于极限位置直线 $T_L$。当 $T_R$ 与 $T_L$ 是**同一条直线**时，这条直线就称为曲线在 $P$ 处的**切线** (tangent line)，记作 $T_R(=T_L)$。"
    },
    {
      "t": "p",
      "md": "若把过 $P,Q$ 的割线的倾角记为 $\\theta$，切线的倾角记为 $\\alpha$，则当"
    },
    {
      "t": "p",
      "md": "$$Q\\to P\\ (\\Delta x\\to 0)\\ \\Longrightarrow\\ \\text{割线 } PQ\\to \\text{在 } P \\text{ 处的切线},\\qquad \\theta\\to\\alpha$$"
    },
    {
      "t": "p",
      "md": "于是 $\\tan\\theta\\to\\tan\\alpha$，割线斜率就趋于切线斜率，也就是曲线在该点的斜率。"
    },
    {
      "t": "tbl",
      "head": [
        "符号",
        "含义"
      ],
      "rows": [
        [
          "$\\Delta x$",
          "自变量的增量"
        ],
        [
          "$\\Delta y=f(a+\\Delta x)-f(a)$",
          "函数值的增量"
        ],
        [
          "$\\tan\\theta=\\dfrac{\\Delta y}{\\Delta x}$",
          "割线 $PQ$ 的斜率"
        ],
        [
          "$\\tan\\alpha=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{\\Delta y}{\\Delta x}$",
          "切线 $T$ 的斜率，即曲线在 $P$ 处的斜率"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**定义 1.1（曲线的斜率 Slope of a Curve）**：设 $P$ 是曲线 $C$ 上一点，$T$ 是 $C$ 在 $P$ 处的切线。若 $T$ 不是铅直线，则曲线 $C$ 在 $P$ 处的斜率就是 $T$ 的斜率。"
    },
    {
      "t": "p",
      "md": "**定理 1.1（曲线的斜率）**：曲线 $C:y=f(x)$ 在 $x=a$ 处的斜率（记为 $m$）为"
    },
    {
      "t": "p",
      "md": "$$m=\\lim_{\\Delta x\\to 0}\\frac{f(a+\\Delta x)-f(a)}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{\\Delta y}{\\Delta x}\\qquad (1)$$"
    },
    {
      "t": "p",
      "md": "其中 $\\Delta y=f(a+\\Delta x)-f(a)$；曲线在 $x=a$ 处的**切线方程**为"
    },
    {
      "t": "p",
      "md": "$$y-f(a)=m(x-a)\\qquad (2)$$"
    },
    {
      "t": "h",
      "md": "二、用第一原理求导 (The First Principle)"
    },
    {
      "t": "p",
      "md": "导数就是上面这个极限。$y=f(x)$ 的图象在 $x=a$ 处的斜率是极限"
    },
    {
      "t": "p",
      "md": "$$\\lim_{\\Delta x\\to 0}\\frac{f(a+\\Delta x)-f(a)}{\\Delta x}$$"
    },
    {
      "t": "p",
      "md": "它依赖于函数 $f(x)$ 与常数 $a$，是一个**数**。若该极限存在，就说 $f(x)$ 在 $x=a$ 处**可导** (differentiable)，并记"
    },
    {
      "t": "p",
      "md": "$$f'(a)=\\lim_{\\Delta x\\to 0}\\frac{f(a+\\Delta x)-f(a)}{\\Delta x}\\qquad (3)$$"
    },
    {
      "t": "p",
      "md": "把 $a$ 换成 $x$，得到"
    },
    {
      "t": "p",
      "md": "$$f'(x)=\\lim_{\\Delta x\\to 0}\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}\\qquad (4)$$"
    },
    {
      "t": "p",
      "md": "$f'(x)$ 称为 $f(x)$ 的**导数** (derivative)。"
    },
    {
      "t": "p",
      "md": "**注**：$(3)$ 与 $(4)$ 都称为「**第一原理**」(the first principle of differentiation)，即直接从导数定义求导的方法。"
    },
    {
      "t": "p",
      "md": "导数的**记号**：$f'(x)$、$y'$、$\\dfrac{df}{dx}$ 或 $\\dfrac{dy}{dx}$。在特定点 $x=a$ 处的导数记为 $f'(a)$、$y'(a)$、$\\left.\\dfrac{dy}{dx}\\right|_{x=a}$ 或 $\\left.\\dfrac{df}{dx}\\right|_{x=a}$，且 $f'(a)=f'(x)\\big|_{x=a}$。"
    },
    {
      "t": "p",
      "md": "**几何意义**：$f'(a)$ 表示曲线 $y=f(x)$ 在 $x=a$ 处的斜率，故曲线在 $x=a$ 处的切线方程为"
    },
    {
      "t": "p",
      "md": "$$y-f(a)=f'(a)(x-a)$$"
    },
    {
      "t": "p",
      "md": "**名词约定**：求导数 $f'(x)$ 的过程称为**微分/求导** (differentiation)。若 $f'(x)$ 在区间 $J$ 上每一点都存在，就称 $f(x)$ 在 $J$ 上**可导** (differentiable on $J$)。"
    },
    {
      "t": "tbl",
      "head": [
        "项目",
        "函数 $f(x)$ 的导数",
        "函数在 $x=a$ 处的导数"
      ],
      "rows": [
        [
          "定义",
          "$\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}$",
          "$\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(a+\\Delta x)-f(a)}{\\Delta x}$"
        ],
        [
          "性质",
          "一个关于 $x$ 的函数",
          "一个实数"
        ],
        [
          "记号",
          "$f'(x)$ 或 $y'$ 或 $\\dfrac{dy}{dx}$ 或 $\\dfrac{df}{dx}$",
          "$f'(a)$ 或 $y'(a)$ 或 $\\left.\\dfrac{dy}{dx}\\right|_{x=a}$ 或 $\\left.\\dfrac{df}{dx}\\right|_{x=a}$"
        ],
        [
          "几何意义",
          "曲线 $y=f(x)$ 在一般点 $x$ 处的斜率",
          "曲线 $y=f(x)$ 在 $x=a$ 处的斜率，等于 $\\tan\\alpha$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**物理意义：变化率 / 瞬时速度**。设物体沿直线运动，在时刻 $t$ 到固定点 $O$ 的距离为 $y=f(t)$。在时间区间 $[t_0,t_0+\\Delta t]$ 内物体走过的距离为 $\\Delta y=f(t_0+\\Delta t)-f(t_0)$，差商"
    },
    {
      "t": "p",
      "md": "$$\\frac{\\Delta y}{\\Delta t}=\\frac{f(t_0+\\Delta t)-f(t_0)}{\\Delta t}$$"
    },
    {
      "t": "p",
      "md": "是该区间上的**平均速度**。因此导数"
    },
    {
      "t": "p",
      "md": "$$f'(t_0)=\\lim_{\\Delta t\\to 0}\\frac{f(t_0+\\Delta t)-f(t_0)}{\\Delta t}$$"
    },
    {
      "t": "p",
      "md": "就是物体在时刻 $t_0$ 的**瞬时速度**，即**变化率** (rate of change)。"
    },
    {
      "t": "p",
      "md": "**定理 2.1（可导蕴含连续 Differentiability Implies Continuity）**：若 $f'(a)$ 存在，则 $f(x)$ 在 $x=a$ 处连续。"
    },
    {
      "t": "warn",
      "md": "定理 2.1 的**逆命题不成立**：**连续不能推出可导**。例如 $f(x)=|x|$ 在 $x=0$ 处连续，但在 $x=0$ 处不可导。"
    },
    {
      "t": "p",
      "md": "**用第一原理求导的若干练习**"
    },
    {
      "t": "p",
      "md": "**练习 2.1**：设 $y=f(x)=C$（常数），证明对任意 $x$ 有 $\\dfrac{dy}{dx}=0$。"
    },
    {
      "t": "p",
      "md": "**解**：由第一原理，"
    },
    {
      "t": "p",
      "md": "$$\\frac{dy}{dx}=\\lim_{\\Delta x\\to 0}\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{C-C}{\\Delta x}=\\lim_{\\Delta x\\to 0}0=0$$"
    },
    {
      "t": "p",
      "md": "**练习 2.2**：用第一原理求 $y=x^2$ 的导数。"
    },
    {
      "t": "p",
      "md": "**解**：由 $(4)$，"
    },
    {
      "t": "p",
      "md": "$$f'(x)=\\lim_{\\Delta x\\to 0}\\frac{(x+\\Delta x)^2-x^2}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{2x\\Delta x+(\\Delta x)^2}{\\Delta x}=\\lim_{\\Delta x\\to 0}(2x+\\Delta x)=2x$$"
    },
    {
      "t": "p",
      "md": "**练习 2.3**：设 $y=f(x)=x^n$（$n$ 为正整数），用第一原理证明 $\\dfrac{dy}{dx}=nx^{n-1}$（**幂法则 power rule**）。"
    },
    {
      "t": "p",
      "md": "**解**：由二项式定理，"
    },
    {
      "t": "p",
      "md": "$$\\frac{dy}{dx}=\\lim_{\\Delta x\\to 0}\\frac{(x+\\Delta x)^n-x^n}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\left(nx^{n-1}+\\binom{n}{2}x^{n-2}\\Delta x+\\cdots+(\\Delta x)^{n-1}\\right)=nx^{n-1}$$"
    },
    {
      "t": "h",
      "md": "三、求导法则 (Rules of Differentiation)"
    },
    {
      "t": "p",
      "md": "**幂法则与三角函数的导数**"
    },
    {
      "t": "p",
      "md": "**练习 3.1**：用第一原理求 $y=\\dfrac{1}{x}$ 的导数。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$\\frac{dy}{dx}=\\lim_{\\Delta x\\to 0}\\frac{\\dfrac{1}{x+\\Delta x}-\\dfrac{1}{x}}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{x-(x+\\Delta x)}{x(x+\\Delta x)\\,\\Delta x}=-\\lim_{\\Delta x\\to 0}\\frac{1}{x(x+\\Delta x)}=-\\frac{1}{x^2}$$"
    },
    {
      "t": "p",
      "md": "同一方法可求 $y=\\sqrt{x}$ 的导数。"
    },
    {
      "t": "p",
      "md": "**练习 3.2**：设 $y=\\sin x$，用第一原理证明 $y'=\\cos x$。"
    },
    {
      "t": "p",
      "md": "**解**：利用恒等式 $\\sin A-\\sin B=2\\cos\\dfrac{A+B}{2}\\sin\\dfrac{A-B}{2}$，"
    },
    {
      "t": "p",
      "md": "$$y'(x)=\\lim_{\\Delta x\\to 0}\\frac{\\sin(x+\\Delta x)-\\sin x}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\frac{2\\cos\\left(x+\\dfrac{\\Delta x}{2}\\right)\\sin\\dfrac{\\Delta x}{2}}{\\Delta x}=\\lim_{\\Delta x\\to 0}\\cos\\left(x+\\frac{\\Delta x}{2}\\right)\\cdot\\frac{\\sin\\frac{\\Delta x}{2}}{\\frac{\\Delta x}{2}}=\\cos x\\cdot 1=\\cos x$$"
    },
    {
      "t": "p",
      "md": "**练习**：请用第一原理证明 $\\dfrac{d}{dx}\\cos x=-\\sin x$。"
    },
    {
      "t": "p",
      "md": "**导数表 (Differentiation Table)**：下面列出常用函数的导数。"
    },
    {
      "t": "tbl",
      "head": [
        "$f(x)$",
        "$f'(x)$",
        "条件"
      ],
      "rows": [
        [
          "constant（常数）",
          "$0$",
          "—"
        ],
        [
          "$x^n$",
          "$nx^{n-1}$",
          "$n$ 为实常数"
        ],
        [
          "$\\sin x$",
          "$\\cos x$",
          "—"
        ],
        [
          "$\\cos x$",
          "$-\\sin x$",
          "—"
        ],
        [
          "$\\tan x$",
          "$\\sec^2 x$",
          "—"
        ],
        [
          "$\\cot x$",
          "$-\\csc^2 x$",
          "—"
        ],
        [
          "$\\sec x$",
          "$\\sec x\\tan x$",
          "—"
        ],
        [
          "$\\csc x$",
          "$-\\csc x\\cot x$",
          "—"
        ],
        [
          "$e^x$",
          "$e^x$",
          "$e=2.718281828\\ldots$"
        ],
        [
          "$a^x$",
          "$a^x\\ln a$",
          "$a>0$ 为实常数"
        ],
        [
          "$\\ln x$",
          "$1/x$",
          "$x>0$"
        ],
        [
          "$\\log_a x$",
          "$(\\log_a e)/x$",
          "$a>0$ 为实常数"
        ],
        [
          "$\\sin^{-1}x$",
          "$1/\\sqrt{1-x^2}$",
          "—"
        ],
        [
          "$\\cos^{-1}x$",
          "$-1/\\sqrt{1-x^2}$",
          "—"
        ],
        [
          "$\\tan^{-1}x$",
          "$1/(1+x^2)$",
          "—"
        ]
      ]
    },
    {
      "t": "h",
      "md": "四、应用 (Applications)"
    },
    {
      "t": "note",
      "md": "回顾：导数 $y'$ 有两重含义——**几何意义**是斜率，**物理意义**是变化率。"
    },
    {
      "t": "p",
      "md": "**应用：斜率与切线**"
    },
    {
      "t": "p",
      "md": "**练习 4.1**：点 $P\\left(\\dfrac{\\pi}{4},1\\right)$ 在曲线 $y=\\tan x$ 上，求曲线在该点的斜率以及 $P$ 处的切线方程。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $y'(x)=\\sec^2 x$，在 $P\\left(\\dfrac{\\pi}{4},1\\right)$ 处曲线的斜率为"
    },
    {
      "t": "p",
      "md": "$$m=y'\\left(\\frac{\\pi}{4}\\right)=\\sec^2\\frac{\\pi}{4}=1+\\tan^2\\frac{\\pi}{4}=2$$"
    },
    {
      "t": "p",
      "md": "故 $P\\left(\\dfrac{\\pi}{4},1\\right)$ 处的切线方程为"
    },
    {
      "t": "p",
      "md": "$$y-1=2\\left(x-\\frac{\\pi}{4}\\right)$$"
    },
    {
      "t": "p",
      "md": "即 $y=2x-\\dfrac{\\pi}{2}+1$。"
    },
    {
      "t": "p",
      "md": "**练习 4.2**：点 $A(2,8)$ 在曲线 $y=x^3$ 上，求 $A$ 处的切线方程。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $y'(x)=3x^2$，在 $A(2,8)$ 处曲线的斜率为 $m=y'(2)=3\\times 2^2=12$，故切线方程为"
    },
    {
      "t": "p",
      "md": "$$y-8=12(x-2)\\qquad\\text{即}\\qquad y=12x-16$$"
    },
    {
      "t": "p",
      "md": "**练习 4.3（可微性 Differentiability）**：函数 $f(x)$ 定义为"
    },
    {
      "t": "p",
      "md": "$$f(x)=\\begin{cases}ax+b,& x>0\\\\ 4\\cos x+1,& x\\le 0\\end{cases}$$"
    },
    {
      "t": "p",
      "md": "若 $f$ 处处可导，求 $a$ 与 $b$ 的值。"
    },
    {
      "t": "p",
      "md": "**解**：注意"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0^+}f(x)=\\lim_{x\\to 0^+}(ax+b)=b,\\qquad \\lim_{x\\to 0^-}f(x)=\\lim_{x\\to 0^-}(4\\cos x+1)=5$$"
    },
    {
      "t": "p",
      "md": "由于 $f$ 在 $x=0$ 处可导，故 $f$ 在 $x=0$ 处连续，于是 $b=5$。又由右导数"
    },
    {
      "t": "p",
      "md": "$$\\lim_{h\\to 0^+}\\frac{f(0+h)-f(0)}{h}=\\lim_{h\\to 0^+}\\frac{(ah+5)-5}{h}=\\lim_{h\\to 0^+}a=a$$"
    },
    {
      "t": "p",
      "md": "及左导数"
    },
    {
      "t": "p",
      "md": "$$\\lim_{h\\to 0^-}\\frac{f(0+h)-f(0)}{h}=\\lim_{h\\to 0^-}\\frac{(4\\cos h+1)-5}{h}=\\lim_{h\\to 0^-}\\frac{4\\cos h-4}{h}=\\lim_{h\\to 0^-}\\frac{4\\left(1-2\\sin^2\\frac{h}{2}\\right)-4}{h}$$"
    },
    {
      "t": "p",
      "md": "$$=\\lim_{h\\to 0^-}\\frac{-8\\sin^2\\frac{h}{2}}{h}=\\lim_{h\\to 0^-}\\left(-4\\sin\\frac{h}{2}\\cdot\\frac{\\sin\\frac{h}{2}}{\\frac{h}{2}}\\right)=-4\\cdot 0\\cdot 1=0$$"
    },
    {
      "t": "p",
      "md": "由于 $f$ 在 $x=0$ 处可导，$\\lim\\limits_{h\\to 0}\\dfrac{f(0+h)-f(0)}{h}$ 存在，比较左右导数得 $a=0$。"
    },
    {
      "t": "h",
      "md": "五、基本求导法则 (Basic rules of differentiation)"
    },
    {
      "t": "p",
      "md": "**定理 5.1（基本求导法则 Basic Rules of Differentiation）**：设 $f=f(x)$ 与 $g=g(x)$ 可导，$k$ 为实常数，则"
    },
    {
      "t": "tbl",
      "head": [
        "法则",
        "公式"
      ],
      "rows": [
        [
          "纯量倍数法则 Scalar multiplication rule",
          "$(kf)'=kf'$"
        ],
        [
          "和法则 Sum rule",
          "$(f+g)'=f'+g'$"
        ],
        [
          "差法则 Difference rule",
          "$(f-g)'=f'-g'$"
        ],
        [
          "乘积法则 Product rule",
          "$(fg)'=f'g+fg'$"
        ],
        [
          "商法则 Quotient rule",
          "$\\left(\\dfrac{f}{g}\\right)'=\\dfrac{f'g-fg'}{g^2}$"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "**$(fg)'\\ne f'g'$**：乘积的导数**不是**导数的乘积，必须用乘积法则。"
    },
    {
      "t": "p",
      "md": "**练习 5.1**：若 $y=5x^3+x+\\dfrac{1}{x}$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$y'=(5x^3)'+x'+\\left(\\frac{1}{x}\\right)'=5\\cdot 3x^2+1-\\frac{1}{x^2}=15x^2+1-\\frac{1}{x^2}$$"
    },
    {
      "t": "p",
      "md": "**练习 5.2**：若 $y=2x^2+3e^x-\\tan^{-1}x$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$y'=4x+3e^x-\\frac{1}{1+x^2}$$"
    },
    {
      "t": "p",
      "md": "**练习 5.3**：若 $y=x^3\\cot x$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由乘积法则，"
    },
    {
      "t": "p",
      "md": "$$y'=x^3\\frac{d}{dx}(\\cot x)+\\cot x\\cdot\\frac{d}{dx}(x^3)=-x^3\\csc^2 x+3x^2\\cot x$$"
    },
    {
      "t": "p",
      "md": "**练习 5.4**：若 $y=x^2e^x$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由乘积法则，"
    },
    {
      "t": "p",
      "md": "$$y'=x^2\\frac{d}{dx}(e^x)+e^x\\frac{d}{dx}(x^2)=x^2e^x+2xe^x=x(x+2)e^x$$"
    },
    {
      "t": "p",
      "md": "**练习 5.5**：若 $y=(x^2+x-2)e^x$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由乘积法则，"
    },
    {
      "t": "p",
      "md": "$$y'=(x^2+x-2)\\frac{d}{dx}(e^x)+e^x\\frac{d}{dx}(x^2+x-2)=(x^2+x-2)e^x+e^x(2x+1)=(x^2+3x-1)e^x$$"
    },
    {
      "t": "p",
      "md": "**练习 5.6**：若 $y=x^2e^x\\cos x$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由乘积法则，"
    },
    {
      "t": "p",
      "md": "$$y'=(x^2)'e^x\\cos x+x^2(e^x\\cos x)'=(x^2)'e^x\\cos x+x^2(e^x)'\\cos x+x^2e^x(\\cos x)'$$"
    },
    {
      "t": "p",
      "md": "$$=2xe^x\\cos x+x^2e^x\\cos x-x^2e^x\\sin x=xe^x(2\\cos x+x\\cos x-x\\sin x)$$"
    },
    {
      "t": "p",
      "md": "**练习 5.7**：若 $y=\\dfrac{x^2}{\\sin x}$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由商法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{\\sin x\\cdot(x^2)'-x^2\\cdot(\\sin x)'}{\\sin^2 x}=\\frac{2x\\sin x-x^2\\cos x}{\\sin^2 x}$$"
    },
    {
      "t": "p",
      "md": "**练习 5.8**：若 $y=\\dfrac{e^x}{\\cos x}$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由商法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{\\cos x\\cdot(e^x)'-e^x\\cdot(\\cos x)'}{\\cos^2 x}=\\frac{e^x(\\cos x+\\sin x)}{\\cos^2 x}$$"
    },
    {
      "t": "p",
      "md": "**练习 5.9**：若 $y=\\dfrac{x^2+3x+2}{x^2+2}$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由商法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{(2x+3)(x^2+2)-(x^2+3x+2)\\cdot 2x}{(x^2+2)^2}=\\frac{-3(x^2-2)}{(x^2+2)^2}$$"
    },
    {
      "t": "h",
      "md": "六、复合函数的链式法则 (Chain rule for composite function)"
    },
    {
      "t": "p",
      "md": "**链式法则 (Chain rule)**：若 $y=f(u)$ 且 $u=g(x)$，则 $y=f\\circ g(x)=f(g(x))$，且"
    },
    {
      "t": "p",
      "md": "$$\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}=f'(u)g'(x)=f'(g(x))g'(x)$$"
    },
    {
      "t": "p",
      "md": "即**复合函数的导数 = 外层函数的导数 × 内层函数的导数**。"
    },
    {
      "t": "warn",
      "md": "注意最后要把 $u$ 换回 $g(x)$。解题关键在于**为给定函数找出恰当的复合分解**。"
    },
    {
      "t": "p",
      "md": "**练习 6.1**：若 $y=\\sin 3x$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=\\sin u$，$u=3x$。由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{dy}{du}\\cdot\\frac{du}{dx}=\\cos u\\cdot 3=3\\cos 3x$$"
    },
    {
      "t": "p",
      "md": "**注**：记住最后要把 $u$ 换回 $x$！"
    },
    {
      "t": "p",
      "md": "**练习 6.2**：若 $y=\\cos x^3$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=\\cos u$，$u=x^3$。由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{dy}{du}\\cdot\\frac{du}{dx}=(-\\sin u)\\cdot 3x^2=-3x^2\\sin x^3$$"
    },
    {
      "t": "p",
      "md": "**练习 6.3**：若 $y=(x^2-3x+2)^6$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=u^6$，$u=x^2-3x+2$。由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{dy}{du}\\cdot\\frac{du}{dx}=6u^5\\cdot(2x-3)=6(2x-3)(x^2-3x+2)^5$$"
    },
    {
      "t": "p",
      "md": "**练习 6.4**：若 $y=e^{-4x^2+3x-1}$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=e^u$，$u=-4x^2+3x-1$。由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{dy}{du}\\cdot\\frac{du}{dx}=e^u\\cdot(-8x+3)=(-8x+3)e^{-4x^2+3x-1}$$"
    },
    {
      "t": "p",
      "md": "**练习 6.5**：若 $y=\\ln\\dfrac{2x+3}{x+2}$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{1}{\\dfrac{2x+3}{x+2}}\\cdot\\frac{2(x+2)-(2x+3)}{(x+2)^2}=\\frac{x+2}{2x+3}\\cdot\\frac{1}{(x+2)^2}=\\frac{1}{(2x+3)(x+2)}$$"
    },
    {
      "t": "p",
      "md": "**另解**：因为 $y=\\ln(2x+3)-\\ln(x+2)$，故"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{2}{2x+3}-\\frac{1}{x+2}=\\frac{1}{(2x+3)(x+2)}$$"
    },
    {
      "t": "p",
      "md": "**练习 6.6**：若 $y=\\sin(\\ln x^2)$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=\\sin u$，$u=\\ln v$，$v=x^2$。由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{dy}{du}\\cdot\\frac{du}{dv}\\cdot\\frac{dv}{dx}=\\cos u\\cdot\\frac{1}{v}\\cdot 2x=\\cos(\\ln x^2)\\cdot\\frac{1}{x^2}\\cdot 2x=\\frac{2\\cos(\\ln x^2)}{x}$$"
    },
    {
      "t": "p",
      "md": "**练习 6.7**：设 $f$ 与 $g$ 是两个可导函数。若 $y=f(x^2)g(3x+2)$，用 $f,g,f',g'$ 表示 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：由乘积法则与链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=f'(x^2)\\cdot 2x\\cdot g(3x+2)+f(x^2)\\cdot g'(3x+2)\\cdot 3$$"
    },
    {
      "t": "p",
      "md": "$$=2xf'(x^2)g(3x+2)+3f(x^2)g'(3x+2)$$"
    },
    {
      "t": "h",
      "md": "七、反函数的求导 (Differentiation of inverse function)"
    },
    {
      "t": "p",
      "md": "设 $y=f(x)$ 且其反函数存在，即 $x=f^{-1}(y)$。我们有"
    },
    {
      "t": "p",
      "md": "$$\\frac{dx}{dy}=\\frac{d}{dy}f^{-1}(y),\\qquad \\frac{dy}{dx}=f'(x)$$"
    },
    {
      "t": "p",
      "md": "由于"
    },
    {
      "t": "p",
      "md": "$$\\frac{dx}{dy}=\\frac{1}{\\dfrac{dy}{dx}}\\qquad\\Longrightarrow\\qquad \\frac{d}{dy}f^{-1}(y)=\\frac{1}{\\dfrac{dy}{dx}}=\\frac{1}{f'(x)}$$"
    },
    {
      "t": "p",
      "md": "**注**：上式给出的是反函数 $f^{-1}(y)$ 的导数**用 $x$ 表示**的形式。若题目要求把反函数的导数用 $y$ 表示，则最后要把 $x$ 换成 $f^{-1}(y)$，得到"
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dy}f^{-1}(y)=\\frac{1}{f'(x)}=\\frac{1}{f'\\big(f^{-1}(y)\\big)}$$"
    },
    {
      "t": "p",
      "md": "**练习 7.1**：设 $y=\\sin(x^2)$，$0<x<1$。求 $\\dfrac{dx}{dy}$，分别用 $x$ 和用 $y$ 表示。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $\\dfrac{dy}{dx}=2x\\cos(x^2)$，所以用 $x$ 表示时"
    },
    {
      "t": "p",
      "md": "$$\\frac{dx}{dy}=\\frac{1}{\\dfrac{dy}{dx}}=\\frac{1}{2x\\cos(x^2)}$$"
    },
    {
      "t": "p",
      "md": "注意到 $x=\\sqrt{\\sin^{-1}(y)}$（即 $x=\\sqrt{\\arcsin y}$）且 $\\cos(x^2)=\\sqrt{1-(\\sin(x^2))^2}=\\sqrt{1-y^2}$，于是用 $y$ 表示时"
    },
    {
      "t": "p",
      "md": "$$\\frac{dx}{dy}=\\frac{1}{2x\\cos(x^2)}=\\frac{1}{2\\sqrt{1-y^2}\\,\\sin^{-1}(y)}$$"
    },
    {
      "t": "p",
      "md": "**练习 7.2**：证明 $\\dfrac{d}{dx}(\\sin^{-1}x)=\\dfrac{1}{\\sqrt{1-x^2}}$，$|x|<1$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=\\sin x$，$-\\dfrac{\\pi}{2}<x<\\dfrac{\\pi}{2}$，则 $-1<y<1$ 且 $x=\\sin^{-1}y$。由反函数求导法则，"
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dy}\\sin^{-1}y=\\frac{1}{\\dfrac{dy}{dx}}=\\frac{1}{\\cos x}$$"
    },
    {
      "t": "p",
      "md": "当 $-\\dfrac{\\pi}{2}<x<\\dfrac{\\pi}{2}$ 时 $\\cos x>0$，故 $\\cos x=\\sqrt{1-\\sin^2 x}$，于是"
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dy}\\sin^{-1}y=\\frac{1}{\\cos x}=\\frac{1}{\\sqrt{1-\\sin^2 x}}=\\frac{1}{\\sqrt{1-y^2}}$$"
    },
    {
      "t": "p",
      "md": "把哑变量 $y$ 换成 $x$，便得 $\\dfrac{d}{dx}(\\sin^{-1}x)=\\dfrac{1}{\\sqrt{1-x^2}}$，$|x|<1$。"
    },
    {
      "t": "p",
      "md": "**练习 7.3**：证明 $\\dfrac{d}{dx}(\\cos^{-1}x)=-\\dfrac{1}{\\sqrt{1-x^2}}$，$|x|<1$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=\\cos x$，$0<x<\\pi$，则 $-1<y<1$ 且 $x=\\cos^{-1}y$。由反函数求导法则，"
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dy}\\cos^{-1}y=-\\frac{1}{\\dfrac{dy}{dx}}=-\\frac{1}{\\sin x}$$"
    },
    {
      "t": "p",
      "md": "因为 $0<x<\\pi$ 时 $\\sin x>0$，故 $\\sin x=\\sqrt{1-\\cos^2 x}$，于是"
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dy}\\cos^{-1}y=-\\frac{1}{\\sin x}=-\\frac{1}{\\sqrt{1-\\cos^2 x}}=-\\frac{1}{\\sqrt{1-y^2}}$$"
    },
    {
      "t": "p",
      "md": "把哑变量 $y$ 换成 $x$，便得 $\\dfrac{d}{dx}(\\cos^{-1}x)=-\\dfrac{1}{\\sqrt{1-x^2}}$，$|x|<1$。"
    },
    {
      "t": "p",
      "md": "**练习 7.4**：若 $y=\\sin^{-1}\\!\\left(\\dfrac{x-1}{x+1}\\right)$，求 $y'$。"
    },
    {
      "t": "p",
      "md": "**解**：先求定义域。因为 $\\sin^{-1}x$ 的定义域是 $-1\\le x\\le 1$，故需"
    },
    {
      "t": "p",
      "md": "$$-1\\le\\frac{x-1}{x+1}\\le 1\\ \\Longrightarrow\\ -1\\le 1-\\frac{2}{x+1}\\le 1\\ \\Longrightarrow\\ -2\\le-\\frac{2}{x+1}\\le 0\\ \\Longrightarrow\\ 0\\le\\frac{1}{x+1}\\le 1$$"
    },
    {
      "t": "p",
      "md": "由 $0\\le\\dfrac{1}{x+1}$ 得 $x>-1$；由 $\\dfrac{1}{x+1}\\le 1$ 得 $x\\ge 0$。定义域为两者之交：$(-1,\\infty)\\cap[0,\\infty)=[0,\\infty)$。"
    },
    {
      "t": "p",
      "md": "在该定义域 $[0,\\infty)$ 上 $x+1>0$。由链式法则，"
    },
    {
      "t": "p",
      "md": "$$y'=\\frac{1}{\\sqrt{1-\\left(\\dfrac{x-1}{x+1}\\right)^2}}\\cdot\\frac{(x+1)-(x-1)}{(x+1)^2}=\\frac{x+1}{\\sqrt{4x}}\\cdot\\frac{2}{(x+1)^2}=\\frac{1}{(x+1)\\sqrt{x}}$$"
    },
    {
      "t": "h",
      "md": "八、隐函数求导 (Implicit Differentiation)"
    },
    {
      "t": "p",
      "md": "下列方程都把 $y$ 显式地表示为 $x$ 的函数（**显函数 explicit function**）："
    },
    {
      "t": "p",
      "md": "$$y=x^2,\\qquad y=\\sin x,\\qquad y=e^{2x+5}$$"
    },
    {
      "t": "p",
      "md": "但在许多情形下，我们无法把 $y$ 显式地解成 $x$ 的函数，例如"
    },
    {
      "t": "p",
      "md": "$$y+\\sin(xy)=2\\pi,\\qquad x^2+xy+y^2=9$$"
    },
    {
      "t": "p",
      "md": "上述方程无法写成 $y=f(x)$ 的形式。此时我们说 $y$ 是 $x$ 的**隐函数** (implicit function)。"
    },
    {
      "t": "p",
      "md": "**问题**：给定一个 $y$ 关于 $x$ 的隐函数，如何求导数 $y'(x)$？"
    },
    {
      "t": "p",
      "md": "**基本思路**：把 $y$ 看作 $x$ 的函数，将方程两边同时对 $x$ 求导，得到关于 $\\dfrac{dy}{dx}$ 的方程，再解出 $\\dfrac{dy}{dx}$。"
    },
    {
      "t": "p",
      "md": "**练习 8.1**：设 $y$ 是由方程"
    },
    {
      "t": "p",
      "md": "$$y+\\sin(xy)=2\\pi\\qquad (5)$$"
    },
    {
      "t": "p",
      "md": "确定的 $x$ 的隐函数。$\\;$(1) 证明点 $P(1,2\\pi)$ 在 $(5)$ 所定义的曲线上；$\\;$(2) 求曲线在 $P(1,2\\pi)$ 处的斜率。"
    },
    {
      "t": "p",
      "md": "**解**：当 $x=1$、$y=2\\pi$ 时，"
    },
    {
      "t": "p",
      "md": "$$\\text{LHS}=2\\pi+\\sin(1\\times 2\\pi)=2\\pi=\\text{RHS}$$"
    },
    {
      "t": "p",
      "md": "所以点 $(1,2\\pi)$ 在 $(5)$ 所定义的曲线上。把 $y$ 视为 $x$ 的函数，对方程 $(5)$ 两边关于 $x$ 求导："
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dx}\\big(y+\\sin(xy)\\big)=\\frac{d}{dx}(2\\pi)\\ \\Longrightarrow\\ \\frac{dy}{dx}+\\frac{d\\sin(xy)}{dx}=0$$"
    },
    {
      "t": "p",
      "md": "$$y'+\\cos(xy)\\cdot\\frac{d(xy)}{dx}=0\\ \\Longrightarrow\\ y'+\\cos(xy)\\cdot(xy'+y)=0$$"
    },
    {
      "t": "p",
      "md": "解出 $y'$："
    },
    {
      "t": "p",
      "md": "$$y'=-\\frac{y\\cos(xy)}{1+x\\cos(xy)}$$"
    },
    {
      "t": "p",
      "md": "在 $P(1,2\\pi)$ 处的斜率为"
    },
    {
      "t": "p",
      "md": "$$\\left.\\frac{dy}{dx}\\right|_{P(1,2\\pi)}=y'(1)=-\\frac{2\\pi\\cos(1\\cdot 2\\pi)}{1+1\\cdot\\cos(1\\cdot 2\\pi)}=-\\pi$$"
    },
    {
      "t": "p",
      "md": "**练习 8.2**：求由方程 $x^2+xy+y^2=9$ 确定的函数 $y$ 关于 $x$ 的导数。"
    },
    {
      "t": "p",
      "md": "**解**：对方程两边关于 $x$ 求导，"
    },
    {
      "t": "p",
      "md": "$$2x+\\frac{d(xy)}{dx}+\\frac{dy^2}{dx}=0\\ \\Longrightarrow\\ 2x+x\\cdot y'+y+\\frac{dy^2}{dx}=0$$"
    },
    {
      "t": "p",
      "md": "$$2x+xy'+y+2y\\cdot y'=0$$"
    },
    {
      "t": "p",
      "md": "解出 $y'$："
    },
    {
      "t": "p",
      "md": "$$y'=-\\frac{2x+y}{x+2y}$$"
    },
    {
      "t": "p",
      "md": "**练习 8.3**：证明点 $P(0,1)$ 在方程 $xy+y^2=x^2+1$ 所定义的曲线上，并求曲线在 $P$ 处的斜率。"
    },
    {
      "t": "p",
      "md": "**解**：当 $x=0$、$y=1$ 时，$\\text{LHS}=xy+y^2=1$，而 $\\text{RHS}=x^2+1=1=\\text{LHS}$，故 $P(0,1)$ 在该曲线上。要求斜率，需先求 $y'$。因为"
    },
    {
      "t": "p",
      "md": "$$x\\cdot y'+y+2y\\cdot y'=2x\\ \\Longrightarrow\\ y'=\\frac{dy}{dx}=\\frac{2x-y}{x+2y}$$"
    },
    {
      "t": "p",
      "md": "所以曲线在 $P(0,1)$ 处的斜率为"
    },
    {
      "t": "p",
      "md": "$$\\left.\\frac{dy}{dx}\\right|_{P(0,1)}=\\frac{2\\times 0-1}{0+2\\times 1}=-\\frac{1}{2}$$"
    },
    {
      "t": "h",
      "md": "九、高阶导数 (Higher Derivatives)"
    },
    {
      "t": "p",
      "md": "给定 $y=f(x)=\\sin x$，其导数为 $y'=f'(x)=\\cos x$，它仍是 $x$ 的函数。于是可再对 $x$ 求导，得到 $f(x)$ 的**二阶导数**："
    },
    {
      "t": "p",
      "md": "$$f''(x)=\\frac{d}{dx}f'(x)=\\frac{d\\cos x}{dx}=-\\sin x,\\qquad\\text{即}\\ (\\sin x)''=-\\sin x$$"
    },
    {
      "t": "p",
      "md": "**记号**：$y''$、$f''(x)$、$\\dfrac{d^2y}{dx^2}$。"
    },
    {
      "t": "p",
      "md": "照此方式定义并记号 **$n$ 阶导数**：$y^{(n)}$、$f^{(n)}(x)$、$\\dfrac{d^ny}{dx^n}$。为方便起见，也记 $y^{(0)}=f^{(0)}(x)=f(x)$。"
    },
    {
      "t": "p",
      "md": "**练习 9.1**：设 $y=x^3-4\\ln x$。求 $y'$、$y''$ 与 $y^{(3)}$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$y'=3x^2-\\frac{4}{x},\\qquad y''=6x+\\frac{4}{x^2},\\qquad y^{(3)}=6-\\frac{8}{x^3}$$"
    },
    {
      "t": "p",
      "md": "**练习 9.2**：设 $y=x^3$，求 $y^{(n)}$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$y^{(1)}=y'=3x^2,\\quad y^{(2)}=6x,\\quad y^{(3)}=6,\\quad y^{(4)}=0,\\quad y^{(n)}=0\\ (n\\ge 4)$$"
    },
    {
      "t": "p",
      "md": "**练习 9.3**：设 $y=e^{2x}$，求 $y^{(n)}$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$y^{(1)}=2e^{2x}\\ (n=1),\\qquad y^{(2)}=2^2e^{2x}\\ (n=2),\\qquad y^{(3)}=2^3e^{2x}\\ (n=3)$$"
    },
    {
      "t": "p",
      "md": "一般地，$y^{(n)}=2^ne^{2x}$，$n\\ge 1$。"
    },
    {
      "t": "h",
      "md": "十、Leibniz 法则 (Leibniz's Rule)"
    },
    {
      "t": "p",
      "md": "[[Leibniz's rule|Leibniz 法则]]可用于求**两个函数之积的 $n$ 阶导数**。"
    },
    {
      "t": "p",
      "md": "**定理 10.1（Leibniz 法则）**：对可导函数 $u(x)$ 与 $v(x)$，$u(x)v(x)$ 的 $n$ 阶导数为"
    },
    {
      "t": "p",
      "md": "$$(uv)^{(n)}=\\sum_{k=0}^{n}\\binom{n}{k}u^{(n-k)}v^{(k)}\\qquad (6)$$"
    },
    {
      "t": "p",
      "md": "低阶情形即"
    },
    {
      "t": "p",
      "md": "$$(uv)'=u'v+uv'$$"
    },
    {
      "t": "p",
      "md": "$$(uv)''=u''v+2u'v'+uv''$$"
    },
    {
      "t": "p",
      "md": "$$(uv)'''=\\binom{3}{0}u'''v+\\binom{3}{1}u''v'+\\binom{3}{2}u'v''+\\binom{3}{3}uv'''=u'''v+3u''v'+3u'v''+uv'''$$"
    },
    {
      "t": "p",
      "md": "**练习 10.1**：若 $y=x^3\\sin 2x$，求 $y'''$。"
    },
    {
      "t": "p",
      "md": "**解**：由 Leibniz 法则，"
    },
    {
      "t": "p",
      "md": "$$y'''=\\binom{3}{0}u'''v+\\binom{3}{1}u''v'+\\binom{3}{2}u'v''+\\binom{3}{3}uv'''=1\\cdot(6)\\sin 2x+3\\cdot(6x)\\cos(2x)\\cdot 2+3\\cdot(3x^2)\\cdot(-4\\sin 2x)+x^3\\cdot(-8\\cos 2x)$$"
    },
    {
      "t": "p",
      "md": "$$=6\\sin 2x+36x\\cos 2x-36x^2\\sin 2x-8x^3\\cos 2x$$"
    },
    {
      "t": "p",
      "md": "**练习 10.2**：设 $y=x^2e^{2x}$，求 $n\\ge 0$ 时的 $y^{(n)}$。"
    },
    {
      "t": "p",
      "md": "**解**：先算一阶导数 $y'=2xe^{2x}+2x^2e^{2x}$。对 $n\\ge 2$，令 $u=e^{2x}$、$v=x^2$；因为 $v^{(k)}=0$（$k\\ge 3$），由 Leibniz 法则只有前三项非零："
    },
    {
      "t": "p",
      "md": "$$y^{(n)}=\\binom{n}{0}(e^{2x})^{(n)}x^2+\\binom{n}{1}(e^{2x})^{(n-1)}(x^2)'+\\binom{n}{2}(e^{2x})^{(n-2)}(x^2)''$$"
    },
    {
      "t": "p",
      "md": "$$=2^ne^{2x}x^2+2n\\,2^{n-1}xe^{2x}+\\frac{n(n-1)}{2}\\cdot 2^{n-2}e^{2x}\\cdot 2$$"
    },
    {
      "t": "p",
      "md": "$$=2^{n-2}e^{2x}\\Big[4x^2+4nx+n(n-1)\\Big]$$"
    },
    {
      "t": "h",
      "md": "十一、L'Hôpital 法则 (L'Hôpital's Rule)"
    },
    {
      "t": "p",
      "md": "[[L'Hôpital's Rule|L'Hôpital 法则]]用于求不定型极限。"
    },
    {
      "t": "p",
      "md": "**定理 11.1（$\\dfrac{0}{0}$ 型，Type I）**：设 $f(x)$ 与 $g(x)$ 在含点 $a$ 的开区间上可导。若 $\\lim\\limits_{x\\to a}f(x)=0$ 且 $\\lim\\limits_{x\\to a}g(x)=0$，则"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$"
    },
    {
      "t": "p",
      "md": "只要右端的极限存在或为无穷。"
    },
    {
      "t": "p",
      "md": "**定理 11.2（$\\dfrac{\\infty}{\\infty}$ 型，Type I）**：设 $f(x)$ 与 $g(x)$ 在含点 $a$ 的开区间上可导。若 $\\lim\\limits_{x\\to a}f(x)=\\pm\\infty$ 且 $\\lim\\limits_{x\\to a}g(x)=\\pm\\infty$，则"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$"
    },
    {
      "t": "p",
      "md": "只要右端的极限存在或为无穷。"
    },
    {
      "t": "p",
      "md": "**练习 11.1**：用 L'Hôpital 法则求 $\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{x}$。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $\\lim\\limits_{x\\to 0}\\sin x=0$、$\\lim\\limits_{x\\to 0}x=0$，所求极限为 $\\dfrac{0}{0}$ 型。由 L'Hôpital 法则，"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0}\\frac{\\sin x}{x}=\\lim_{x\\to 0}\\frac{\\cos x}{1}=1$$"
    },
    {
      "t": "p",
      "md": "**练习 11.2**：用 L'Hôpital 法则求 $\\lim\\limits_{x\\to 1}\\dfrac{x^3-1}{x-1}$。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $\\lim\\limits_{x\\to 1}(x^3-1)=0$、$\\lim\\limits_{x\\to 1}(x-1)=0$，所求极限为 $\\dfrac{0}{0}$ 型。由 L'Hôpital 法则，"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 1}\\frac{x^3-1}{x-1}=\\lim_{x\\to 1}\\frac{3x^2}{1}=3$$"
    },
    {
      "t": "p",
      "md": "**练习 11.3**：用 L'Hôpital 法则求 $\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-x}{x^3}$。"
    },
    {
      "t": "p",
      "md": "**解**：由 L'Hôpital 法则，"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0}\\frac{\\tan x-x}{x^3}=\\lim_{x\\to 0}\\frac{\\sec^2x-1}{3x^2}=\\lim_{x\\to 0}\\frac{2\\sec^2x\\tan x}{6x}=\\frac{1}{3}\\lim_{x\\to 0}\\sec^2x\\cdot\\frac{\\tan x}{x}=\\frac{1}{3}$$"
    },
    {
      "t": "p",
      "md": "**练习 11.4**：用 L'Hôpital 法则求 $\\lim\\limits_{x\\to 0}\\dfrac{x-\\sin x}{x^3-x^2}$。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $\\lim\\limits_{x\\to 0}(x-\\sin x)=0$、$\\lim\\limits_{x\\to 0}(x^3-x^2)=0$，所求极限为 $\\dfrac{0}{0}$ 型。由 L'Hôpital 法则，"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0}\\frac{x-\\sin x}{x^3-x^2}=\\lim_{x\\to 0}\\frac{1-\\cos x}{3x^2-2x}=\\lim_{x\\to 0}\\frac{\\sin x}{6x-2}=0$$"
    },
    {
      "t": "p",
      "md": "**练习 11.5**：用 L'Hôpital 法则求 $\\lim\\limits_{x\\to\\infty}\\dfrac{x^3}{e^x}$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to\\infty}\\frac{x^3}{e^x}=\\lim_{x\\to\\infty}\\frac{3x^2}{e^x}=\\lim_{x\\to\\infty}\\frac{6x}{e^x}=\\lim_{x\\to\\infty}\\frac{6}{e^x}=0$$"
    },
    {
      "t": "p",
      "md": "**练习 11.6**：用 L'Hôpital 法则求 $\\lim\\limits_{x\\to\\infty}\\dfrac{\\ln x}{\\sqrt[3]{x}}$。"
    },
    {
      "t": "p",
      "md": "**解**：因为 $\\lim\\limits_{x\\to\\infty}\\ln x=\\infty$、$\\lim\\limits_{x\\to\\infty}\\sqrt[3]{x}=\\infty$，所求极限为 $\\dfrac{\\infty}{\\infty}$ 型。由 L'Hôpital 法则，"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to\\infty}\\frac{\\ln x}{\\sqrt[3]{x}}=\\lim_{x\\to\\infty}\\frac{1/x}{\\frac{1}{3}x^{-2/3}}=\\lim_{x\\to\\infty}\\frac{3}{x^{1/3}}=0$$"
    },
    {
      "t": "p",
      "md": "**Type II：$\\infty-\\infty$ 型**"
    },
    {
      "t": "p",
      "md": "**练习 11.7**：计算 $\\lim\\limits_{x\\to(\\pi/2)^-}(\\sec x-\\tan x)$。"
    },
    {
      "t": "p",
      "md": "**解**："
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to(\\pi/2)^-}(\\sec x-\\tan x)=\\lim_{x\\to(\\pi/2)^-}\\left(\\frac{1}{\\cos x}-\\frac{\\sin x}{\\cos x}\\right)=\\lim_{x\\to(\\pi/2)^-}\\frac{1-\\sin x}{\\cos x}=\\lim_{x\\to(\\pi/2)^-}\\frac{-\\cos x}{-\\sin x}=\\frac{0}{1}=0$$"
    },
    {
      "t": "p",
      "md": "**Type II：$0\\cdot\\infty$ 型**"
    },
    {
      "t": "p",
      "md": "**练习 11.8**：计算 $\\lim\\limits_{x\\to 0^+}x\\ln x$。"
    },
    {
      "t": "p",
      "md": "**解**：把乘积化为商，再用 L'Hôpital 法则："
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0^+}x\\ln x=\\lim_{x\\to 0^+}\\frac{\\ln x}{1/x}=\\lim_{x\\to 0^+}\\frac{1/x}{-1/x^2}=\\lim_{x\\to 0^+}(-x)=0$$"
    },
    {
      "t": "p",
      "md": "**Type III：幂型 $1^{\\infty}$、$0^0$、$\\infty^0$**"
    },
    {
      "t": "note",
      "md": "**一般思路：取对数**。设 $y$ 为所求幂，先求 $\\lim\\ln y$，再得 $\\lim y=e^{\\lim\\ln y}$。"
    },
    {
      "t": "p",
      "md": "**练习 11.9（$1^{\\infty}$ 型）**：计算 $\\lim\\limits_{x\\to 0^+}(1+\\sin 4x)^{\\cot x}$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=(1+\\sin 4x)^{\\cot x}$，则"
    },
    {
      "t": "p",
      "md": "$$\\ln y=\\cot x\\cdot\\ln(1+\\sin 4x)=\\frac{\\ln(1+\\sin 4x)}{\\tan x}$$"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0^+}\\ln y=\\lim_{x\\to 0^+}\\frac{\\ln(1+\\sin 4x)}{\\tan x}=\\lim_{x\\to 0^+}\\frac{\\dfrac{4\\cos 4x}{1+\\sin 4x}}{\\sec^2x}=4$$"
    },
    {
      "t": "p",
      "md": "所以"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0^+}(1+\\sin 4x)^{\\cot x}=\\lim_{x\\to 0^+}y=\\lim_{x\\to 0^+}e^{\\ln y}=e^{4}$$"
    },
    {
      "t": "p",
      "md": "**练习 11.10（$0^0$ 型）**：计算 $\\lim\\limits_{x\\to 0^+}x^x$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $y=x^x$，则 $\\ln y=x\\ln x=\\dfrac{\\ln x}{1/x}$。"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0^+}\\ln y=\\lim_{x\\to 0^+}\\frac{\\ln x}{1/x}=\\lim_{x\\to 0^+}\\frac{1/x}{-1/x^2}=0$$"
    },
    {
      "t": "p",
      "md": "所以"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to 0^+}x^x=\\lim_{x\\to 0^+}y=\\lim_{x\\to 0^+}e^{\\ln y}=e^{0}=1$$"
    },
    {
      "t": "p",
      "md": "**练习 11.11（$\\infty^0$ 型）**：计算 $\\lim\\limits_{x\\to\\infty}x^{1/x}$。"
    },
    {
      "t": "p",
      "md": "**解**：令 $u=x^{1/x}$，则 $\\ln u=\\dfrac{1}{x}\\ln x=\\dfrac{\\ln x}{x}$。"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to\\infty}\\ln u=\\lim_{x\\to\\infty}\\frac{\\ln x}{x}=\\lim_{x\\to\\infty}\\frac{1/x}{1}=0$$"
    },
    {
      "t": "p",
      "md": "所以"
    },
    {
      "t": "p",
      "md": "$$\\lim_{x\\to\\infty}x^{1/x}=\\lim_{x\\to\\infty}u=\\lim_{x\\to\\infty}e^{\\ln u}=e^{0}=1$$"
    }
  ],
  "terms": [
    [
      "secant line",
      "割线"
    ],
    [
      "tangent line",
      "切线"
    ],
    [
      "slope of a curve",
      "曲线的斜率"
    ],
    [
      "differentiable",
      "可导"
    ],
    [
      "first principle of differentiation",
      "第一原理（用定义求导）"
    ],
    [
      "derivative",
      "导数"
    ],
    [
      "rate of change",
      "变化率"
    ],
    [
      "product rule",
      "乘积法则"
    ],
    [
      "quotient rule",
      "商法则"
    ],
    [
      "chain rule",
      "链式法则"
    ],
    [
      "composite function",
      "复合函数"
    ],
    [
      "inverse function",
      "反函数"
    ],
    [
      "implicit function",
      "隐函数"
    ],
    [
      "implicit differentiation",
      "隐函数求导"
    ],
    [
      "higher derivatives",
      "高阶导数"
    ],
    [
      "Leibniz's rule",
      "Leibniz 法则"
    ],
    [
      "L'Hôpital's Rule",
      "L'Hôpital 法则"
    ],
    [
      "indeterminate form",
      "不定型"
    ],
    [
      "power rule",
      "幂法则"
    ],
    [
      "logarithmic differentiation",
      "取对数求导"
    ]
  ],
  "qids": [
    "mid-4-01",
    "mid-4-02",
    "mid-4-03",
    "mid-4-04",
    "mid-4-05",
    "mid-4-06",
    "mid-4-07",
    "mid-4-08",
    "mp-4-01",
    "mp-4-02",
    "mp-4-03",
    "mp-4-04"
  ]
});

  /* ---------- L5 第5讲 中值定理与函数性态 ---------- */
  T.push({
  "no": "L5",
  "title": "第5讲 中值定理与函数性态",
  "titleEn": "Mean Value Theorem; Increasing And Decreasing Functions; Local Maxima and Local Minima",
  "tags": [
    "Mean Value Theorem",
    "Rolle's Theorem",
    "Cauchy's MVT",
    "Monotonicity",
    "Local Extrema",
    "First Derivative Test",
    "Second Derivative Test"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲围绕**导数与函数性态**展开，共四部分：**(1)** [[Mean Value Theorem|中值定理]]（含 [[Rolle's Theorem|罗尔定理]] 及若干关于连续函数的预备定理）；**(2)** [[Increasing and Decreasing Functions|递增与递减函数]]；**(3)** [[Local Maxima and Local Minima|局部极大与局部极小]]；**(4)** Worked Exercises（例题 4.1、4.2）。"
    },
    {
      "t": "h",
      "md": "一、Mean Value Theorem（中值定理）"
    },
    {
      "t": "p",
      "md": "回顾：**每一个 [[differentiable|可导]] 函数都是 [[continuous|连续]] 的**（every differentiable function is continuous）。关于连续函数有三个重要定理。"
    },
    {
      "t": "h",
      "md": "1.1 三个关于连续函数的基本定理"
    },
    {
      "t": "p",
      "md": "**定理 1.1（[[Extreme Value Theorem|极值定理]]）**：若 $f$ 是 [[closed interval|闭区间]] $[a,b]$ 上的连续函数，则 $f$ 在该区间上**同时取到最大值与最小值**。"
    },
    {
      "t": "p",
      "md": "**定理 1.2（[[Intermediate Value Theorem|介值定理]]）**：设 $f(x)$ 在 $[a,b]$ 上连续，且 $f(a)\\ne f(b)$。则对任意介于 $f(a)$ 与 $f(b)$ 之间的实数 $m$，存在 $c\\in(a,b)$ 使 $f(c)=m$。"
    },
    {
      "t": "p",
      "md": "**定理 1.3（[[Bolzano Theorem|波尔查诺定理]]）**：若 $f(x)$ 在 $[a,b]$ 上连续且 $f(a)f(b)<0$，则存在 $c\\in(a,b)$ 使 $f(c)=0$。"
    },
    {
      "t": "note",
      "md": "PPT 脚注指出：这三个定理的完整证明需要更高级的结果，见 TAYLOR, A.E. AND W.R. MANN, *Advanced Calculus*, 2nd ed., New York: John Wiley & Sons, Inc., 1972, pp. 97–98 与 p. 558。"
    },
    {
      "t": "p",
      "md": "**图 4（Extreme Value Theorem）**说明极值定理为何**必须要求闭区间**：在开区间 $(c,d)$ 上，$f$ 既取不到最大值也取不到最小值。介值定理则说明连续函数**不能“跳过”**两个函数值之间的中间值。"
    },
    {
      "t": "p",
      "md": "**图 2（Intermediate Value Theorem）**：函数 $f$ 跳过了介于 $f(c)=1$ 与 $f(d)=2$ 之间的值 $k$，原因是 $f$ 在整段 $[c,d]$ 上并不连续；而在 $[a,b]$ 上由于 $f$ 连续，值 $k$ 被取到，即存在 $x_0$ 使 $f(x_0)=k$。"
    },
    {
      "t": "tbl",
      "head": [
        "定理",
        "条件",
        "结论"
      ],
      "rows": [
        [
          "极值定理 (1.1)",
          "$f$ 在闭区间 $[a,b]$ 上连续",
          "$f$ 在 $[a,b]$ 上取到最大值与最小值"
        ],
        [
          "介值定理 (1.2)",
          "$f$ 在 $[a,b]$ 上连续，$f(a)\\ne f(b)$，$m$ 介于 $f(a)$ 与 $f(b)$ 之间",
          "$\\exists\\,c\\in(a,b)$，$f(c)=m$"
        ],
        [
          "Bolzano 定理 (1.3)",
          "$f$ 在 $[a,b]$ 上连续，$f(a)f(b)<0$",
          "$\\exists\\,c\\in(a,b)$，$f(c)=0$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.2 Fermat 定理与 Weierstrass 定理"
    },
    {
      "t": "p",
      "md": "**定理 1.4（[[Fermat's Theorem|费马定理]]）**：设 $y=f(x)$ 在开区间 $(a,b)$ 上有定义且可导。若 $f(x)$ 在 $x=c$（$c\\in(a,b)$）处取到**局部极大值**（greatest value）或**局部极小值**（least value），则\n$$f'(c)=0$$\n局部极大值与局部极小值统称为 [[local extremum|局部极值]]。"
    },
    {
      "t": "p",
      "md": "**定理 1.5（[[Weierstrass's Theorem|魏尔斯特拉斯定理]]）**：设 $f(x):[a,b]\\to\\mathbb{R}$ 是连续函数，其中 $a,b$ 为实数且 $a<b$。则 $f$ 在区间 $[a,b]$ 上存在 [[absolute maximum|绝对最大值]] 与绝对最小值。"
    },
    {
      "t": "h",
      "md": "1.3 定理 1.6：Rolle's Theorem（罗尔定理）"
    },
    {
      "t": "p",
      "md": "设 $f(x)$ 在 $[a,b]$ 上连续。若 $f(x)$ 在 $(a,b)$ 上可导且 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$ 使\n$$f'(\\xi)=0$$"
    },
    {
      "t": "p",
      "md": "**几何意义（图 8）**：曲线 $y=f(x)$ 在端点等高，因此在曲线内部至少有一点的切线是水平的（slope $=f'(c)=0$）。"
    },
    {
      "t": "p",
      "md": "**证明思路**：假设 $f$ 不是常函数 $f(x)=0$（$x\\in[a,b]$），否则定理显然成立。于是存在 $x_0\\in(a,b)$ 使 $f(x_0)>0$ 或 $f(x_0)<0$。若 $f(x_0)>0$，由于 $f$ 在端点 $x=a$、$x=b$ 处为零，由极值定理 $f$ 在开区间 $(a,b)$ 内某点 $x=c$ 处取到全局最大值，而此处 $f'(c)=0$。同理，若 $f(x_0)<0$，则 $f$ 在某个 $c\\in(a,b)$ 处取到全局最小值，同样有 $f'(c)=0$。$\\blacksquare$"
    },
    {
      "t": "h",
      "md": "1.4 定理 1.7：Lagrange's Mean Value Theorem（拉格朗日中值定理）"
    },
    {
      "t": "p",
      "md": "设 $f(x)$ 在 $[a,b]$ 上连续。若 $f(x)$ 在 $(a,b)$ 上可导，则存在 $\\xi\\in(a,b)$ 使\n$$f'(\\xi)=\\frac{f(b)-f(a)}{b-a}\\qquad(1)$$"
    },
    {
      "t": "p",
      "md": "**几何解释（图 3）**：联结 $(a,f(a))$ 与 $(b,f(b))$ 的**割线斜率**为 $\\dfrac{f(b)-f(a)}{b-a}$，它等于曲线内部某点的**切线斜率** $f'(c)$——即切线与割线**平行**。"
    },
    {
      "t": "h",
      "md": "1.5 Mean Value Theorem 的证明（对辅助函数用 Rolle 定理）"
    },
    {
      "t": "p",
      "md": "对满足中值定理条件的 $f$，构造辅助函数\n$$F(x)=f(x)-f(a)-\\frac{f(b)-f(a)}{b-a}(x-a)$$"
    },
    {
      "t": "p",
      "md": "$F$ 把 $f$ 的图像从图 3 “扳”成图 8 的样子。容易验证 $F(a)=F(b)=0$，且因 $f$ 连续、可导，$F$ 在 $[a,b]$ 上连续、在 $(a,b)$ 上可导。于是由 Rolle 定理，存在 $c\\in(a,b)$ 使 $F'(c)=0$。而\n$$F'(x)=f'(x)-\\frac{f(b)-f(a)}{b-a}$$\n故 $F'(c)=0$ 即 $f'(c)=\\dfrac{f(b)-f(a)}{b-a}$。$\\blacksquare$"
    },
    {
      "t": "h",
      "md": "1.6 练习 1.1"
    },
    {
      "t": "p",
      "md": "**题**：求中值定理对 $f(x)=x^3-x$ 在区间 $[0,2]$ 上所保证的全部数 $c$。\n**解**：$f$ 是多项式，故连续且可导。$f'(x)=3x^2-1$。由中值定理，存在 $c\\in(0,2)$ 使\n$$f'(c)=\\frac{f(2)-f(0)}{2-0}\\;\\Longrightarrow\\;3c^2-1=\\frac{6-0}{2}=3$$\n即 $3c^2=4$，解得 $c=\\dfrac{2}{\\sqrt3}$ 或 $c=-\\dfrac{2}{\\sqrt3}\\notin(0,2)$（舍去）。因此所求 $c=\\dfrac{2}{\\sqrt3}$。"
    },
    {
      "t": "h",
      "md": "1.7 练习 1.2"
    },
    {
      "t": "p",
      "md": "**题**：若 $f(1)=10$ 且 $f'(x)\\ge 2$（$1\\le x\\le 4$），问 $f(4)$ 最小可能是多少？\n**解**：由中值定理，$f(4)-f(1)=f'(c)(4-1)$，其中某个 $c\\in(1,4)$。但对每个 $c\\in(1,4)$ 都有 $f'(c)\\ge 2$。代入 $f(1)=10$ 得\n$$f(4)=f(1)+f'(c)(4-1)=10+3f'(c)\\ge 10+3\\times 2=16$$\n故 $f(4)$ 的最小可能值为 $16$。"
    },
    {
      "t": "h",
      "md": "1.8 注记：中值定理是存在性定理"
    },
    {
      "t": "note",
      "md": "中值定理与 Rolle 定理都是**纯粹的存在性定理**：它们只告诉你某个数存在，找这个数要靠自己解方程 $f'(x)=\\dfrac{f(b)-f(a)}{b-a}$（Rolle 定理则解 $f'(x)=0$）。由于闭式解可能不存在，数值求根方法会派上用场。正因如此，中值定理更多用于**理论目的**，下面就是一个重要应用。"
    },
    {
      "t": "h",
      "md": "1.9 定理 1.8：导数为零 ⇒ 常函数"
    },
    {
      "t": "p",
      "md": "**定理 1.8**：若 $f$ 是区间 $I$ 上的可导函数，且对一切 $x\\in I$ 有 $f'(x)=0$，则 $f$ 在 $I$ 上是常函数。注意 $I$ 可以是任意区间，甚至整条实轴 $(-\\infty,\\infty)$。已知 $f=$ 常数 $\\Rightarrow f'=0$，本定理说明其**逆命题也成立**。"
    },
    {
      "t": "p",
      "md": "**证明（反证法）**：假设 $f$ 不是常函数，则存在 $a<b$ 于 $I$ 中使 $f(a)\\ne f(b)$。但由中值定理，必存在 $c\\in(a,b)$ 使\n$$f'(c)=\\frac{f(b)-f(a)}{b-a}$$\n由于 $f$ 在 $I$ 上导数处处为 $0$，故 $f'(c)=0$，于是\n$$\\frac{f(b)-f(a)}{b-a}=0\\;\\Longrightarrow\\;f(b)-f(a)=0\\;\\Longrightarrow\\;f(a)=f(b)$$\n这与 $f(a)\\ne f(b)$ 矛盾。因此 $f$ 必为常函数。$\\blacksquare$"
    },
    {
      "t": "h",
      "md": "1.10 定理 1.9：[[Cauchy's Mean Value Theorem|柯西中值定理]]"
    },
    {
      "t": "p",
      "md": "设 $a,b$ 为实数且 $a<b$，并设 $f$ 与 $g$ 满足：\n- $f$ 与 $g$ 在 $[a,b]$ 上连续；\n- $f$ 与 $g$ 在 $(a,b)$ 上可导；\n- $g'(x)\\ne 0$ 对一切 $x\\in(a,b)$ 成立。\n则区间 $(a,b)$ 内至少存在一个数 $c$ 使"
    },
    {
      "t": "p",
      "md": "$$\\frac{f'(c)}{g'(c)}=\\frac{f(b)-f(a)}{g(b)-g(a)}\\qquad(2)$$"
    },
    {
      "t": "h",
      "md": "二、Increasing and Decreasing Functions（递增与递减函数）"
    },
    {
      "t": "p",
      "md": "**定义 2.1（Increasing and Decreasing）**：设 $J$ 为开区间。\n- 函数 $y=f(x)$ 在 $J$ 上[[increasing|递增]]，是指 $y$ 随 $x$ 增大而增大，即若 $x_1<x_2$，则 $f(x_1)<f(x_2)$。\n- 函数 $y=f(x)$ 在 $J$ 上[[decreasing|递减]]，是指 $y$ 随 $x$ 增大而减小，即若 $x_1<x_2$，则 $f(x_1)>f(x_2)$。"
    },
    {
      "t": "note",
      "md": "PPT 配两张图：一个递增函数的图像（$x_1<x_2$ 时 $y_1<y_2$）与一个递减函数的图像（$x_1<x_2$ 时 $y_1>y_2$）。"
    },
    {
      "t": "h",
      "md": "2.1 练习 2.1（用定义证明单调性）"
    },
    {
      "t": "p",
      "md": "**题**：按定义证明 $f(x)=x^2$ 在区间 $J=(0,\\infty)$ 上递增。\n**解**：取 $x_1,x_2\\in(0,\\infty)$ 且 $x_1<x_2$。则有\n$$x_1<x_2\\;\\Longrightarrow\\;x_1^2<x_2^2$$"
    },
    {
      "t": "p",
      "md": "即 $x_1<x_2\\Rightarrow f(x_1)<f(x_2)$，因此 $f(x)=x^2$ 在 $J=(0,\\infty)$ 上递增。"
    },
    {
      "t": "h",
      "md": "2.2 定理 2.1：用导数的符号判断单调性"
    },
    {
      "t": "p",
      "md": "若函数 $f(x)$ 可导，就可以通过其**导数的符号**判断它的 [[monotonicity|单调性]]。\n**定理 2.1**：设 $f(x)$ 在开区间 $J$ 上可导，则\n- $f'(x)>0$ 于 $J$ $\\Longrightarrow$ $f$ 在 $J$ 上递增；\n- $f'(x)<0$ 于 $J$ $\\Longrightarrow$ $f$ 在 $J$ 上递减。"
    },
    {
      "t": "h",
      "md": "2.3 练习 2.2"
    },
    {
      "t": "p",
      "md": "**题**：确定函数 $f(x)$ 在哪些开区间上递增或递减。\n**解**：$f(x)$ 是多项式，故处处可导。\n$$f'(x)=4x+4=4(x+1)$$\n注意 $f'(x)<0\\Rightarrow x<-1$，$f'(x)>0\\Rightarrow x>-1$。于是\n- $f$ 在开区间 $(-\\infty,-1)$ 上递减；\n- $f$ 在开区间 $(-1,\\infty)$ 上递增。"
    },
    {
      "t": "warn",
      "md": "OCR 提示：本题的函数式在 OCR 中印作 `x* + 4x`（残缺）。由 PPT 明确给出的导数 $f'(x)=4x+4=4(x+1)$ 可还原出 $f(x)=2x^2+4x$，此处按 PPT 的导数结果整理，结论（在 $(-\\infty,-1)$ 递减、$(-1,\\infty)$ 递增）与 PPT 完全一致。"
    },
    {
      "t": "h",
      "md": "三、Local Maxima and Local Minima（局部极大与局部极小）"
    },
    {
      "t": "p",
      "md": "**定义 3.1（Local Maxima and Local Minima）**：考虑 $y=f(x)$ 与 $\\operatorname{Dom}f$ 的一个内点 $a$。\n- 若对 $a$ 附近的所有 $x$ 都有 $f(a)\\ge f(x)$，则称 $f(x)$ 在 $a$ 处有 [[local maximum|局部（相对）极大值]]，$f(a)$ 称为局部（相对）极大值。\n- 若对 $a$ 附近的所有 $x$ 都有 $f(a)\\le f(x)$，则称 $f(x)$ 在 $a$ 处有 [[local minimum|局部（相对）极小值]]，$f(a)$ 称为局部（相对）极小值。\n- 若 $f(x)$ 在 $a$ 处有局部极大值或局部极小值，就说 $f(x)$ 在 $a$ 处有局部极值。"
    },
    {
      "t": "p",
      "md": "PPT 图：$x_1,x_3$ 处为局部极大值，$x_2,x_4$ 处为局部极小值。"
    },
    {
      "t": "note",
      "md": "**Remark**：“all $x$ near $a$” 指**从左右两侧**都充分接近 $a$ 的所有 $x$。"
    },
    {
      "t": "p",
      "md": "**定义 3.2（[[stationary point|驻点]]）**：若 $f'(a)=0$，则称 $x=a$ 是函数的一个驻点。"
    },
    {
      "t": "warn",
      "md": "**Remark**：设 $a$ 是可导函数 $f(x)$ 的驻点（即 $f'(a)=0$），则 $f(a)$ 可能是局部极小值、局部极大值，也可能**两者都不是**。"
    },
    {
      "t": "p",
      "md": "**定义 3.3（[[critical number|临界数]]）**：函数 $f(x)$ 的临界数是其定义域中的一个数 $c$，使得 $f'(c)=0$ 或 $f'(c)$ 不存在。"
    },
    {
      "t": "h",
      "md": "3.1 定理 3.1：First Derivative Test（简化版）"
    },
    {
      "t": "p",
      "md": "**定理 3.1（[[First Derivative Test|一阶导数判别法]]，简化版）**：设 $f(x)$ 在包含点 $a$ 的区间 $J$ 上可导且 $f'(a)=0$（即 $a$ 是驻点）。\n- 若 $f'(x)$ 随 $x$ 增大经过 $x=a$ 时**由正变负**（slope changes sign from $+$ to $-$），则 $f(x)$ 在 $a$ 处取局部极大值。\n- 若 $f'(x)$ 随 $x$ 增大经过 $x=a$ 时**由负变正**（slope changes sign from $-$ to $+$），则 $f(x)$ 在 $a$ 处取局部极小值。"
    },
    {
      "t": "h",
      "md": "3.2 定理 3.2：First Derivative Test（一般版）"
    },
    {
      "t": "p",
      "md": "**定理 3.2（First Derivative Test）**：设 $f(x)$ 在包含点 $c$ 的区间 $J$ 上连续（即 $f(c)$ 有定义），且 $c$ 是临界数，即 $f'(c)=0$ 或 $f'(c)$ 不存在。则\n- 若 $f'(x)$ 随 $x$ 增大经过 $x=c$ 时由正变负，则 $f(x)$ 在 $c$ 处取局部极大值；\n- 若 $f'(x)$ 随 $x$ 增大经过 $x=c$ 时由负变正，则 $f(x)$ 在 $c$ 处取局部极小值。"
    },
    {
      "t": "h",
      "md": "3.3 练习 3.1"
    },
    {
      "t": "p",
      "md": "**题**：求 $y=x^3-9x^2+24x+5$ 的局部极值。\n**解**：\n$$y'=3x^2-18x+24=3(x-2)(x-4)$$\n故 $y'=0$ 当且仅当 $x=2$ 或 $x=4$。"
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$x<2$",
        "$x=2$",
        "$2<x<4$",
        "$x=4$",
        "$x>4$"
      ],
      "rows": [
        [
          "$y'$",
          "$+$",
          "$0$",
          "$-$",
          "$0$",
          "$+$"
        ],
        [
          "$y$",
          "$\\nearrow$",
          "loc. max. $25$",
          "$\\searrow$",
          "loc. min. $21$",
          "$\\nearrow$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "因此：**局部极大值 $=25$，在 $x=2$ 处取得**；**局部极小值 $=21$，在 $x=4$ 处取得**。PPT 图中标出了点 $(2,25)$ 与 $(4,21)$。"
    },
    {
      "t": "h",
      "md": "3.4 定理 3.3：Second Derivative Test（二阶导数判别法）"
    },
    {
      "t": "p",
      "md": "**定理 3.3（[[Second Derivative Test|二阶导数判别法]]）**：设 $f(x)$ 在 $a$ 处二阶可导且 $f'(a)=0$（即 $a$ 是驻点）。\n- $f''(a)<0$ $\\Longrightarrow$ 在 $a$ 处取局部极大值；\n- $f''(a)>0$ $\\Longrightarrow$ 在 $a$ 处取局部极小值；\n- $f''(a)=0$ $\\Longrightarrow$ **无法得出结论**。"
    },
    {
      "t": "note",
      "md": "**Remark**：当 $f'(a)=0$ 且 $f''(a)=0$ 时，可以改用一阶导数判别法。"
    },
    {
      "t": "h",
      "md": "3.5 练习 3.2（一阶与二阶导数判别法并用）"
    },
    {
      "t": "p",
      "md": "**题**：求 $y=f(x)=\\dfrac{\\sin x}{2-\\cos x}$（$0<x<2\\pi$）的局部极大值与局部极小值，并分别用一阶、二阶导数判别法判断。\n**解**：\n$$f'(x)=\\frac{(2-\\cos x)\\cos x-\\sin x\\cdot\\sin x}{(2-\\cos x)^2}=\\frac{2\\cos x-1}{(2-\\cos x)^2}$$"
    },
    {
      "t": "p",
      "md": "令 $f'(x)=0$，得 $2\\cos x-1=0$。在 $0<x<2\\pi$ 内解为\n$$x=\\frac{\\pi}{3}\\quad\\text{与}\\quad x=\\frac{5\\pi}{3}$$"
    },
    {
      "t": "p",
      "md": "**方法一：一阶导数判别法**（分母恒正，故 $f'$ 的符号由 $2\\cos x-1$ 决定）："
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$0<x<\\frac{\\pi}{3}$",
        "$x=\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{3}<x<\\frac{5\\pi}{3}$",
        "$x=\\frac{5\\pi}{3}$",
        "$\\frac{5\\pi}{3}<x<2\\pi$"
      ],
      "rows": [
        [
          "$f'(x)$",
          "$+$",
          "$0$",
          "$-$",
          "$0$",
          "$+$"
        ],
        [
          "$f(x)$",
          "$\\nearrow$",
          "loc. max. $\\frac{\\sqrt3}{3}$",
          "$\\searrow$",
          "loc. min. $-\\frac{\\sqrt3}{3}$",
          "$\\nearrow$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "所以 **局部极大值 $=\\dfrac{\\sqrt3}{3}$，在 $x=\\dfrac{\\pi}{3}$ 处取得**；**局部极小值 $=-\\dfrac{\\sqrt3}{3}$，在 $x=\\dfrac{5\\pi}{3}$ 处取得**。"
    },
    {
      "t": "p",
      "md": "**方法二：二阶导数判别法**。PPT 化简得到\n$$f''(x)=\\frac{-2\\sin x\\,(1+\\cos x)}{(2-\\cos x)^{3}}$$\n于是 $f''\\!\\left(\\dfrac{\\pi}{3}\\right)<0$，故在 $x=\\dfrac{\\pi}{3}$ 处取**局部极大值** $\\dfrac{\\sqrt3}{3}$；$f''\\!\\left(\\dfrac{5\\pi}{3}\\right)>0$，故在 $x=\\dfrac{5\\pi}{3}$ 处取**局部极小值** $-\\dfrac{\\sqrt3}{3}$。"
    },
    {
      "t": "warn",
      "md": "**OCR 纠错提示**：PPT 中该局部极值印作 $\\pm\\sqrt3$ 一类符号，但由图（最大值约为 $0.577$）以及直接计算 $\\dfrac{\\sin(\\pi/3)}{2-\\cos(\\pi/3)}=\\dfrac{\\sqrt3/2}{3/2}=\\dfrac{\\sqrt3}{3}$ 可知，正确结果应为 $\\pm\\dfrac{\\sqrt3}{3}$；OCR 中二阶导数的具体数值（如 $\\pm16\\sqrt2$）亦明显残缺，此处只保留**符号结论**（一处 $<0$、一处 $>0$），结论方向与 PPT 一致。"
    },
    {
      "t": "h",
      "md": "四、Worked Exercises（综合例题）"
    },
    {
      "t": "h",
      "md": "4.1 练习 4.1：用中值定理证明反三角函数的估计式"
    },
    {
      "t": "p",
      "md": "**题**：应用中值定理证明\n$$\\frac{b-a}{1+b^2}<\\tan^{-1}b-\\tan^{-1}a<\\frac{b-a}{1+a^2}\\qquad(0<a<b)$$"
    },
    {
      "t": "p",
      "md": "**解**：令 $f(x)=\\tan^{-1}x$，$x\\in[a,b]$，则 $f'(x)=\\dfrac{1}{1+x^2}$，$x\\in(a,b)$。$f(x)$ 在 $[a,b]$ 上连续、在 $(a,b)$ 上可导，由中值定理，存在 $c\\in(a,b)$ 使\n$$f'(c)=\\frac{f(b)-f(a)}{b-a}\\;\\Longrightarrow\\;\\frac{1}{1+c^2}=\\frac{\\tan^{-1}b-\\tan^{-1}a}{b-a}$$"
    },
    {
      "t": "p",
      "md": "由于 $0<a<c<b$，有 $1+a^2<1+c^2<1+b^2$，从而\n$$\\frac{1}{1+b^2}<\\frac{1}{1+c^2}<\\frac{1}{1+a^2}$$\n两边乘以 $b-a>0$，即得所要证的不等式。"
    },
    {
      "t": "p",
      "md": "再取 $a=1$、$b=3$（满足 $0<a<b$）代入上述不等式：\n$$\\frac{3-1}{1+3^2}<\\tan^{-1}3-\\tan^{-1}1<\\frac{3-1}{1+1^2}\\;\\Longrightarrow\\;\\frac{1}{5}<\\tan^{-1}3-\\frac{\\pi}{4}<1$$\n即 $\\dfrac{\\pi}{4}+\\dfrac{1}{5}<\\tan^{-1}3<\\dfrac{\\pi}{4}+1$（用到 $\\tan^{-1}1=\\dfrac{\\pi}{4}$）。"
    },
    {
      "t": "warn",
      "md": "OCR 提示：练习 4.1 第二问的目标式在 OCR 中只剩 `3`、`4`、`1`、`25` 等数字碎片（形如 $\\frac34+\\frac1{25}<\\cdots$），无法直接辨读。上面按 PPT 中明确印出的 “Put $a=1$ and $b=3$” 代入式 (4.1) 推得结论；若原件的具体数字与此不同，请以 PPT 原件为准。"
    },
    {
      "t": "h",
      "md": "4.2 练习 4.2：求 $f(x)=\\dfrac{e^x}{x^e}$ 的最小值并证明 $e^{\\pi}>\\pi^{e}$"
    },
    {
      "t": "p",
      "md": "**题**：设 $f(x)=\\dfrac{e^x}{x^e}$（$x>0$）。求 $f(x)$ 的最小值，并由此证明 $e^{\\pi}>\\pi^{e}$。"
    },
    {
      "t": "p",
      "md": "**解**：\n$$f'(x)=\\frac{e^x(x-e)}{x^{e+1}}$$"
    },
    {
      "t": "tbl",
      "head": [
        "",
        "$x\\in(0,e)$",
        "$x=e$",
        "$x\\in(e,\\infty)$"
      ],
      "rows": [
        [
          "$f'(x)$",
          "$-$",
          "$0$",
          "$+$"
        ],
        [
          "$f(x)$",
          "$\\searrow$",
          "极小值 $f(e)=1$",
          "$\\nearrow$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "因此 $f(x)$ 在 $x=e$ 处取局部极小值，即 $f(e)=\\dfrac{e^e}{e^e}=1$；又 $f'(x)>0$ 当 $x>e$，说明 $f(x)$ 在 $(e,\\infty)$ 上严格递增，故 $x=e$ 处取到的是**最小值（least value）$1$**。"
    },
    {
      "t": "p",
      "md": "由于 $e<\\pi$，由 $f$ 在 $(e,\\infty)$ 上严格递增得 $f(e)<f(\\pi)$，即\n$$1<\\frac{e^{\\pi}}{\\pi^{e}}\\;\\Longrightarrow\\;\\pi^{e}<e^{\\pi}\\;\\Longrightarrow\\;e^{\\pi}>\\pi^{e}\\qquad\\blacksquare$$"
    }
  ],
  "terms": [
    [
      "Mean Value Theorem",
      "中值定理"
    ],
    [
      "Extreme Value Theorem",
      "极值定理"
    ],
    [
      "Intermediate Value Theorem",
      "介值定理"
    ],
    [
      "Bolzano Theorem",
      "波尔查诺定理"
    ],
    [
      "Fermat's Theorem",
      "费马定理"
    ],
    [
      "Weierstrass's Theorem",
      "魏尔斯特拉斯定理"
    ],
    [
      "Rolle's Theorem",
      "罗尔定理"
    ],
    [
      "Cauchy's Mean Value Theorem",
      "柯西中值定理"
    ],
    [
      "Increasing and Decreasing Functions",
      "递增与递减函数"
    ],
    [
      "Local Maxima and Local Minima",
      "局部极大与局部极小"
    ],
    [
      "differentiable",
      "可导的"
    ],
    [
      "continuous",
      "连续的"
    ],
    [
      "closed interval",
      "闭区间"
    ],
    [
      "absolute maximum",
      "绝对最大值"
    ],
    [
      "increasing",
      "递增的"
    ],
    [
      "decreasing",
      "递减的"
    ],
    [
      "monotonicity",
      "单调性"
    ],
    [
      "local maximum",
      "局部极大值"
    ],
    [
      "local minimum",
      "局部极小值"
    ],
    [
      "local extremum",
      "局部极值"
    ],
    [
      "stationary point",
      "驻点"
    ],
    [
      "critical number",
      "临界数"
    ],
    [
      "First Derivative Test",
      "一阶导数判别法"
    ],
    [
      "Second Derivative Test",
      "二阶导数判别法"
    ]
  ],
  "qids": [
    "mid-5-01",
    "mid-5-02",
    "mid-5-03",
    "mid-5-04",
    "mid-5-05",
    "mid-5-06",
    "mid-5-07",
    "pf-mvt-01",
    "pf-mvt-02",
    "pf-mvt-03"
  ]
});

  /* ---------- L6 第6讲 不定积分与定积分 ---------- */
  T.push({
  "no": "L6",
  "title": "第6讲 不定积分与定积分",
  "titleEn": "The Indefinite Integral and The Definite Integral",
  "tags": [
    "antiderivative",
    "indefinite integral",
    "definite integral",
    "Riemann sum",
    "Fundamental Theorem of Calculus",
    "power formula",
    "odd and even functions",
    "integrand",
    "limits of integration"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "一、[[antiderivative|原函数]]与不定积分的引入"
    },
    {
      "t": "p",
      "md": "导数出现在许多物理现象中，例如物体的运动。给定沿直线运动的物体的位置函数 $s(t)$，可以求速度 $v(t)=s'(t)$ 与加速度 $a(t)=v'(t)$。本讲处理的是**反过来的问题**：已知速度函数如何求位置函数？已知加速度函数如何求速度函数？此时求导帮不上忙，需要的是求导的逆过程，即[[antidifferentiation|反微分]]（求原函数）。"
    },
    {
      "t": "p",
      "md": "定义（1.1）[[antiderivative|原函数]]：函数 $f(x)$ 的原函数 $F(x)$ 是这样的函数，它的导数就是 $f(x)$，即"
    },
    {
      "t": "p",
      "md": "$$F'(x)=f(x).$$"
    },
    {
      "t": "p",
      "md": "求导相对直接：多项式、三角函数、指数与对数函数的导数都已学过，配合求导法则（和、幂、积、商）可以处理复杂表达式。但反微分完全是另一回事。"
    },
    {
      "t": "h",
      "md": "二、原函数的「不唯一」与定理 1.1"
    },
    {
      "t": "p",
      "md": "以最简单的 $f(x)=2x$ 为例：既然 $\\dfrac{d}{dx}(x^2)=2x$，那么 $F(x)=x^2$ 是它的一个原函数。但它唯一吗？不是。"
    },
    {
      "t": "p",
      "md": "若 $F(x)=x^2+1$，则 $F'(x)=2x=f(x)$，所以 $x^2+1$ 也是原函数；同样 $x^2+2$ 也是。事实上，任何形如 $F(x)=x^2+C$（$C$ 为常数）的函数都是 $f(x)=2x$ 的原函数。"
    },
    {
      "t": "p",
      "md": "另一个潜在的疑问是：会不会存在一个**无法化简成 $x^2+C$ 形式**的完全不同的函数，其导数也是 $2x$？答案是不会："
    },
    {
      "t": "note",
      "md": "**定理（1.1）**：设 $F(x)$ 与 $G(x)$ 都是函数 $f(x)$ 的原函数，则 $F(x)$ 与 $G(x)$ 只相差一个常数，即存在常数 $C$ 使 $F(x)=G(x)+C$。"
    },
    {
      "t": "p",
      "md": "**证明（1.1）**：考虑 $H(x)=F(x)-G(x)$，在 $F,G$ 的公共定义域 $I$ 上有定义。因为 $F'(x)=G'(x)=f(x)$，所以"
    },
    {
      "t": "p",
      "md": "$$H'(x)=F'(x)-G'(x)=f(x)-f(x)=0$$"
    },
    {
      "t": "p",
      "md": "对 $I$ 中所有 $x$ 成立，因此 $H(x)$ 在 $I$ 上是常数函数（这一点在[[Mean Value Theorem|中值定理]]处已证）。于是存在常数 $C$ 使 $H(x)=C=F(x)-G(x)$，即 $F(x)=G(x)+C$ 对 $I$ 中一切 $x$ 成立。$\\blacksquare$"
    },
    {
      "t": "note",
      "md": "**注**：要求出一个函数的全部原函数，只需找出**一个**原函数，再加上一个一般常数即可。所以对 $f(x)=2x$，由 $F(x)=x^2$ 是一个原函数，全部原函数就是 $F(x)=x^2+C$。函数不是只有一个原函数，而是一整个**原函数族**，彼此只差一个常数。"
    },
    {
      "t": "h",
      "md": "三、不定积分的记号与含义（定义 1.2）"
    },
    {
      "t": "p",
      "md": "定义（1.2）：函数 $f(x)$ 的[[indefinite integral|不定积分]]记作"
    },
    {
      "t": "p",
      "md": "$$\\int f(x)\\,dx$$"
    },
    {
      "t": "p",
      "md": "它表示 $f(x)$ 的**全部原函数**构成的族。$f(x)$ 前面那个拉长的 S 形符号称为[[integral sign|积分号]]。"
    },
    {
      "t": "p",
      "md": "虽然不定积分 $\\int f(x)\\,dx$ 表示 $f(x)$ 的一切原函数，但也可把它看成单个对象或函数，其导数正是 $f(x)$："
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dx}\\left(\\int f(x)\\,dx\\right)=f(x).$$"
    },
    {
      "t": "p",
      "md": "为什么积分号里要写一个无穷小 $dx$？这与[[infinitesimal|无穷小]]的含义有关：无穷小是某个量的「微小片段」。对 $f(x)$ 的原函数 $F(x)$，其微元（[[differential|微分]]）为"
    },
    {
      "t": "p",
      "md": "$$dF=F'(x)\\,dx=f(x)\\,dx,$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$F(x)=\\int f(x)\\,dx=\\int dF.$$"
    },
    {
      "t": "p",
      "md": "可见积分号起的是**求和符号**的作用：它把函数 $F(x)$ 在各个 $x$ 处的无穷小片段 $dF$ 累加起来，从而得到整个函数 $F(x)$。可以类比离散求和用的 $\\sum$：积分号 $\\int$ 取的是连续统上无穷多个无穷小量之和。求（或计算）一个函数的不定积分叫作**积分**（integrate），积分就是反微分。"
    },
    {
      "t": "h",
      "md": "四、基础例题与基本积分表（定理 1.2–1.7）"
    },
    {
      "t": "p",
      "md": "**练习 1.1**：计算 $\\displaystyle\\int 0\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.1**：因为任何常数函数的导数都是 $0$，故 $\\displaystyle\\int 0\\,dx=C$，$C$ 为一般常数。"
    },
    {
      "t": "note",
      "md": "此后 $C$ 一律默认表示一般常数，不再每次说明。"
    },
    {
      "t": "p",
      "md": "**练习 1.2**：计算 $\\displaystyle\\int 1\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.2**：因为 $F(x)=x$ 的导数 $F'(x)=1$，所以 $\\displaystyle\\int 1\\,dx=x+C$。"
    },
    {
      "t": "p",
      "md": "**练习 1.3**：计算 $\\displaystyle\\int x\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.3**：因为 $F(x)=\\dfrac{x^2}{2}$ 的导数 $F'(x)=x$，所以 $\\displaystyle\\int x\\,dx=\\dfrac{x^2}{2}+C$。"
    },
    {
      "t": "p",
      "md": "由 $\\dfrac{d}{dx}\\left(\\dfrac{x^{n+1}}{n+1}\\right)=x^n$（对任意 $n\\ne -1$）以及 $\\dfrac{d}{dx}(\\ln x)=\\dfrac{1}{x}$，可知 $x$ 的任何次幂都可积分："
    },
    {
      "t": "note",
      "md": "**定理（1.2）[[Power Formula|幂公式]]**："
    },
    {
      "t": "p",
      "md": "$$\\int x^{n}\\,dx=\\begin{cases}\\dfrac{x^{n+1}}{n+1}+C, & n\\ne -1,\\\\[6pt] \\ln|x|+C, & n=-1.\\end{cases}$$"
    },
    {
      "t": "h",
      "md": "五、不定积分的线性运算法则（定理 1.3–1.4）"
    },
    {
      "t": "p",
      "md": "下列不定积分法则都是相应求导法则的直接推论。"
    },
    {
      "t": "note",
      "md": "**定理（1.3）**：设 $f,g$ 为函数，$k$ 为常数，则"
    },
    {
      "t": "p",
      "md": "$$\\int k f(x)\\,dx=k\\int f(x)\\,dx,\\qquad \\int\\bigl(f(x)+g(x)\\bigr)dx=\\int f(x)\\,dx+\\int g(x)\\,dx,$$"
    },
    {
      "t": "p",
      "md": "$$\\int\\bigl(f(x)-g(x)\\bigr)dx=\\int f(x)\\,dx-\\int g(x)\\,dx.$$"
    },
    {
      "t": "p",
      "md": "这些法则容易证明。例如第一条是导数[[Constant Multiple Rule|常数倍法则]]的直接推论：若 $F(x)=\\int f(x)\\,dx$，则"
    },
    {
      "t": "p",
      "md": "$$\\frac{d}{dx}\\bigl(kF(x)\\bigr)=k\\frac{d}{dx}F(x)=kf(x),$$"
    },
    {
      "t": "p",
      "md": "于是 $kF(x)=k\\displaystyle\\int f(x)\\,dx$，即 $\\displaystyle\\int kf(x)\\,dx=k\\int f(x)\\,dx$。$\\blacksquare$"
    },
    {
      "t": "p",
      "md": "其余法则的证明类似，留作练习。反复使用上述法则并配合幂公式，可知**任何多项式都可逐项积分**——事实上任何有限个函数之和都可这样积分："
    },
    {
      "t": "note",
      "md": "**定理（1.4）**：对任意函数 $f_1,\\dots,f_n$ 与常数 $k_1,\\dots,k_n$，"
    },
    {
      "t": "p",
      "md": "$$\\int\\bigl(k_1f_1(x)+\\cdots+k_nf_n(x)\\bigr)dx=k_1\\int f_1(x)\\,dx+\\cdots+k_n\\int f_n(x)\\,dx.$$"
    },
    {
      "t": "h",
      "md": "六、不定积分例题（练习 1.4–1.7）"
    },
    {
      "t": "p",
      "md": "**练习 1.4**：计算 $\\displaystyle\\int\\left(2-3x^2\\right)dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.4**：逐项积分，把常数倍提到积分号外："
    },
    {
      "t": "p",
      "md": "$$\\int\\left(2-3x^2\\right)dx=\\int 2\\,dx-3\\int x^{2}\\,dx=2x-3\\cdot\\frac{x^{3}}{3}+C=2x-x^{3}+C.$$"
    },
    {
      "t": "p",
      "md": "**练习 1.5**：计算 $\\displaystyle\\int\\sqrt{x}\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.5**：用幂公式（把 $\\sqrt{x}$ 写成 $x^{1/2}$）："
    },
    {
      "t": "p",
      "md": "$$\\int\\sqrt{x}\\,dx=\\int x^{1/2}\\,dx=\\frac{x^{3/2}}{3/2}+C=\\frac{2x^{3/2}}{3}+C.$$"
    },
    {
      "t": "p",
      "md": "**练习 1.6**：计算 $\\displaystyle\\int\\left(\\frac{1}{x^{2}}+\\frac{1}{x}\\right)dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.6**：用幂公式并逐项积分："
    },
    {
      "t": "p",
      "md": "$$\\int\\left(\\frac{1}{x^{2}}+\\frac{1}{x}\\right)dx=\\int x^{-2}\\,dx+\\int\\frac{1}{x}\\,dx=-\\frac{1}{x}+\\ln|x|+C.$$"
    },
    {
      "t": "p",
      "md": "下列不定积分只是六个基本三角函数相应导数公式的改写："
    },
    {
      "t": "note",
      "md": "**定理（1.6）三角函数积分**："
    },
    {
      "t": "p",
      "md": "$$\\int\\cos x\\,dx=\\sin x+C,\\qquad \\int\\sin x\\,dx=-\\cos x+C,$$"
    },
    {
      "t": "p",
      "md": "$$\\int\\sec^{2}x\\,dx=\\tan x+C,\\qquad \\int\\sec x\\tan x\\,dx=\\sec x+C,$$"
    },
    {
      "t": "p",
      "md": "$$\\int\\csc^{2}x\\,dx=-\\cot x+C,\\qquad \\int\\csc x\\cot x\\,dx=-\\csc x+C.$$"
    },
    {
      "t": "p",
      "md": "又因为 $\\dfrac{d}{dx}\\left(e^{x}\\right)=e^{x}$，所以："
    },
    {
      "t": "note",
      "md": "**定理（1.7）**：$$\\int e^{x}\\,dx=e^{x}+C.$$"
    },
    {
      "t": "p",
      "md": "**练习 1.7**：计算 $\\displaystyle\\int\\left(3\\sin x+4\\cos x-5e^{x}\\right)dx$。"
    },
    {
      "t": "p",
      "md": "**解 1.7**：逐项积分："
    },
    {
      "t": "p",
      "md": "$$\\int\\left(3\\sin x+4\\cos x-5e^{x}\\right)dx=3\\int\\sin x\\,dx+4\\int\\cos x\\,dx-5\\int e^{x}\\,dx=-3\\cos x+4\\sin x-5e^{x}+C.$$"
    },
    {
      "t": "warn",
      "md": "**易错点**：\n\n• 不定积分的结果是**一族**函数，必须写 `+C`；漏掉常数是最常见的失分点（本讲之后 $C$ 一律默认）。\n\n• 幂公式中 $n=-1$（即 $\\displaystyle\\int\\frac{1}{x}dx$）不能用 $\\dfrac{x^{n+1}}{n+1}$，必须用 $\\ln|x|+C$。\n\n• 常数倍可以提到积分号外，但**两个函数相乘或相除不能**拆成两个积分之积或之商；定理 1.3–1.4 只覆盖和、差与常数倍。\n\n• 逐项积分时不要把常数漏乘：$\\displaystyle\\int\\left(2-3x^{2}\\right)dx=2x-x^{3}+C$，其中 $-3\\cdot\\dfrac{x^{3}}{3}=-x^{3}$。"
    },
    {
      "t": "h",
      "md": "七、用不定积分求解微分方程（练习 1.8–1.9）"
    },
    {
      "t": "p",
      "md": "把不定积分看成「某函数全部无穷小片段之和」以便还原该函数，可以方便地通过积分[[differential equation|微分方程]]来求解。关键思路是把方程化成**微分形式**，从而把函数当作变量来处理。"
    },
    {
      "t": "p",
      "md": "**练习 1.8**：对任意常数 $k$，证明微分方程 $\\dfrac{dy}{dt}=ky$ 的每个解都形如 $y=Ae^{kt}$（$A$ 为常数）。可假设 $y(t)>0$ 对所有 $t$ 成立。"
    },
    {
      "t": "p",
      "md": "**解 1.8**：把含 $y$ 的项移到左边、含 $t$ 的项移到右边，即**分离变量**（[[separable variables|分离变量]]）："
    },
    {
      "t": "p",
      "md": "$$\\frac{dy}{y}=k\\,dt.$$"
    },
    {
      "t": "p",
      "md": "两边积分（注意此时把函数 $y$ 当作变量处理）："
    },
    {
      "t": "p",
      "md": "$$\\int\\frac{dy}{y}=\\int k\\,dt\\ \\Longrightarrow\\ \\ln y+C_1=kt+C_2\\quad(C_1,C_2\\text{ 为常数})$$"
    },
    {
      "t": "p",
      "md": "把 $C_1,C_2$ 合并为常数 $C$，得 $\\ln y=kt+C$，于是"
    },
    {
      "t": "p",
      "md": "$$y=e^{kt+C}=e^{kt}\\cdot e^{C}=Ae^{kt},\\qquad A=e^{C}\\text{ 为常数}.$$"
    },
    {
      "t": "p",
      "md": "**练习 1.9**：回顾 §3.6 中联系理想气体压强 $P$、体积 $V$ 与温度 $T$ 的微分方程"
    },
    {
      "t": "p",
      "md": "$$\\frac{dP}{P}+\\frac{dV}{V}=\\frac{dT}{T},$$"
    },
    {
      "t": "p",
      "md": "对其积分以得到原来的理想气体定律 $PV=RT$，其中 $R$ 为常数。"
    },
    {
      "t": "p",
      "md": "**解 1.9**：两边积分得"
    },
    {
      "t": "p",
      "md": "$$\\int\\frac{dP}{P}+\\int\\frac{dV}{V}=\\int\\frac{dT}{T}\\ \\Longrightarrow\\ \\ln P+\\ln V=\\ln T+C\\quad(C\\text{ 为常数})$$"
    },
    {
      "t": "p",
      "md": "即 $\\ln(PV)=\\ln T+C$，故"
    },
    {
      "t": "p",
      "md": "$$PV=e^{\\ln T+C}=e^{\\ln T}\\cdot e^{C}=T\\,e^{C}=RT,\\qquad R=e^{C}\\text{ 为常数}.$$"
    },
    {
      "t": "p",
      "md": "本节的所有积分公式都依赖于**已经知道**某些函数的导数，再「倒推」回去得到原函数。没有这些预备知识，就只能靠猜，或靠辨认某个见过的导数所呈现的模式。后面会介绍一些积分技巧，但仍有许多不定积分没有简单的封闭形式，例如 $\\displaystyle\\int e^{x^{2}}dx$ 与 $\\displaystyle\\int\\sin\\left(x^{2}\\right)dx$。"
    },
    {
      "t": "h",
      "md": "八、[[definite integral|定积分]]的定义（定义 2.1–2.2）"
    },
    {
      "t": "p",
      "md": "回顾上一节：不定积分 $\\displaystyle\\int f(x)\\,dx$ 中的积分号表示对原函数 $F(x)$ 的无穷小量 $f(x)\\,dx=dF$ 求和。为什么叫「**不定**」？因为这个求和是**不定**的：$f(x)\\,dx$ 中的 $x$ 是一般性的、没有指定在哪个具体取值范围内的。若同一个求和限制在某个**确定**的 $x$ 范围（例如区间 $[a,b]$）上，就得到另一类积分："
    },
    {
      "t": "p",
      "md": "定义（2.1）：函数 $f(x)$ 在区间 $[a,b]$ 上的**定积分**记作"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}f(x)\\,dx$$"
    },
    {
      "t": "p",
      "md": "它表示 $f(x)\\,dx$ 对 $[a,b]$ 中**所有** $x$ 的无穷小量之和。"
    },
    {
      "t": "p",
      "md": "不定积分给出一个一般函数，而定积分给出一个数或一个具体函数。计算定积分中的具体求和有很多办法，其中一种来自把无穷小量 $f(x)\\,dx$ 几何地解释为**矩形的面积**。"
    },
    {
      "t": "p",
      "md": "图中的阴影矩形高为 $f(x)$、宽为 $dx$，故面积为 $f(x)\\,dx$。它与曲线 $y=f(x)$ 在 $x$ 与 $x+dx$ 之间、$x$ 轴上方的面积相比略小，差距来自曲线与矩形顶端之间的小缝隙。但可以证明该缝隙的面积为 $0$："
    },
    {
      "t": "p",
      "md": "依据[[Microstraightness Property|微观平直性]]，曲线 $y=f(x)$ 在无穷小区间 $[x,x+dx]$ 上是一条**直线**。于是 $[x,x+dx]$ 上曲线与 $x$ 轴之间的面积由两部分组成：阴影矩形面积 $f(x)\\,dx$，以及直角三角形 $\\triangle ABC$ 的面积。而后者为 $0$："
    },
    {
      "t": "p",
      "md": "$$\\text{Area of }\\triangle ABC=\\tfrac{1}{2}\\times(\\text{base})\\times(\\text{height})=\\tfrac{1}{2}(dx)(df)=\\tfrac{1}{2}\\,f'(x)\\,(dx)^{2}=0.$$"
    },
    {
      "t": "p",
      "md": "（此处假设 $f$ 在 $x$ 处可导；若不可导，把不可导的点排除掉不影响积分值。）"
    },
    {
      "t": "p",
      "md": "$f$ 在 $x$ 处递增时如此，$f$ 递减时论证类似。因此在 $x$ 从 $a$ 变到 $b$ 的过程中，曲线 $y=f(x)$ 与 $x$ 轴之间的面积**完全来自面积为 $f(x)\\,dx$ 的矩形**。所有这些矩形面积之和就等于 $f(x)$ 在 $[a,b]$ 上的定积分。于是定积分可解释为面积："
    },
    {
      "t": "note",
      "md": "**定义（2.2）**：设 $f(x)\\ge 0$ 在 $[a,b]$ 上成立，则曲线 $y=f(x)$ 在 $x=a$ 与 $x=b$ 之间的面积 $A$ 为"
    },
    {
      "t": "p",
      "md": "$$A=\\int_{a}^{b}f(x)\\,dx,$$"
    },
    {
      "t": "p",
      "md": "它表示区域 $R$ 的面积：$R$ 上方以 $y=f(x)$ 为界，下方以 $x$ 轴为界，两侧以 $x=a$、$x=b$ 为界（其中 $a<b$）。"
    },
    {
      "t": "h",
      "md": "九、[[Riemann sum|黎曼和]]与定积分的极限定义"
    },
    {
      "t": "p",
      "md": "为了对具体函数算出该面积，仍可用矩形，但这次矩形的宽度是小的**正数**而非无穷小量。步骤如下："
    },
    {
      "t": "p",
      "md": "• 把区间 $[a,b]$ 分成 $n\\ge 1$ 个子区间 $[x_0,x_1],[x_1,x_2],\\dots,[x_{n-1},x_n]$，构成一个[[partition|分割]] $P=\\{x_0<x_1<\\cdots<x_{n-1}<x_n\\}$，其中 $x_0=a$、$x_n=b$。"
    },
    {
      "t": "p",
      "md": "• 在每个子区间 $[x_{i-1},x_i]$ 中取一点 $x_i^{*}$，使 $x_{i-1}\\le x_i^{*}\\le x_i$，$i=1$ 到 $n$。"
    },
    {
      "t": "p",
      "md": "• 对 $i=1$ 到 $n$，作一个矩形，底为子区间 $[x_{i-1},x_i]$、长度 $\\Delta x_i=x_i-x_{i-1}>0$，高为 $f(x_i^{*})$。"
    },
    {
      "t": "p",
      "md": "• 取这些矩形面积之和 $f(x_1^{*})\\Delta x_1+f(x_2^{*})\\Delta x_2+\\cdots+f(x_n^{*})\\Delta x_n$，称为一个**黎曼和**。"
    },
    {
      "t": "p",
      "md": "令 $n\\to\\infty$ 使子区间长度趋于 $0$。若极限存在，则该极限就是区域 $R$ 的面积 $A$："
    },
    {
      "t": "p",
      "md": "$$A=\\int_{a}^{b}f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f\\left(x_i^{*}\\right)\\Delta x_i.\\tag{3}$$"
    },
    {
      "t": "p",
      "md": "公式 (3) 中的极限应当对**所有**[[norm|范数]]（最长子区间的长度）趋于 $0$ 的分割来取。但实际计算中通常选取子区间**等长**的分割，然后不断把 $[a,b]$ 分得更细。注意每个子区间中的点 $x_i^{*}$ 可以任取：常取中点，取左端点或右端点也很典型。"
    },
    {
      "t": "p",
      "md": "在上述过程中，矩形与曲线之间的缝隙面积随子区间个数 $n$ 增大、子区间长度趋于 $0$ 而趋于 $0$。$f$ 可导时成立，事实上 $f$ 只要连续就成立。因此曲线下方面积可以用上述过程来定义。"
    },
    {
      "t": "h",
      "md": "十、求和记号与求和公式（定义 2.3、定理 2.1–2.2）"
    },
    {
      "t": "p",
      "md": "要用这种方式计算曲线下方面积，需要对公式 (3) 中的求和记号有所了解。"
    },
    {
      "t": "p",
      "md": "定义（2.3）：对实数 $a_1,a_2,\\dots,a_n$ 与整数 $n\\ge 1$，"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}a_k=a_1+a_2+\\cdots+a_n$$"
    },
    {
      "t": "p",
      "md": "称为 $a_1,\\dots,a_n$ 之和。符号 $\\sum$ 称为[[summation sign|求和号]]，它是希腊大写字母 Sigma。"
    },
    {
      "t": "note",
      "md": "**定理（2.1）**：设 $a_1,\\dots,a_n$ 与 $b_1,\\dots,b_n$ 为实数，$c$ 为常数，则"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}\\left(a_k+b_k\\right)=\\sum_{k=1}^{n}a_k+\\sum_{k=1}^{n}b_k,\\qquad \\sum_{k=1}^{n}\\left(a_k-b_k\\right)=\\sum_{k=1}^{n}a_k-\\sum_{k=1}^{n}b_k,$$"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}c\\,a_k=c\\sum_{k=1}^{n}a_k,\\qquad \\sum_{k=1}^{n}a_k=\\sum_{i=1}^{n}a_i\\ \\ (\\text{与求和指标用哪个字母无关}).$$"
    },
    {
      "t": "p",
      "md": "下列求和公式在计算黎曼和时很有用。"
    },
    {
      "t": "note",
      "md": "**定理（2.2）**：设 $n\\ge 1$ 为正整数，则"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}1=n,\\qquad \\sum_{k=1}^{n}k=1+2+\\cdots+n=\\frac{n(n+1)}{2},$$"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}k^{2}=1^{2}+2^{2}+\\cdots+n^{2}=\\frac{n(n+1)(2n+1)}{6},$$"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}k^{3}=1^{3}+2^{3}+\\cdots+n^{3}=\\frac{n^{2}(n+1)^{2}}{4},$$"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n}k^{4}=1^{4}+2^{4}+\\cdots+n^{4}=\\frac{n(n+1)\\left(6n^{3}+9n^{2}+n-1\\right)}{30}.$$"
    },
    {
      "t": "p",
      "md": "公式 (1) 显然：把 $1$ 加 $n$ 次，和为 $n$。公式 (2) 可用[[induction|数学归纳法]]证明："
    },
    {
      "t": "p",
      "md": "• 先验证 $n=1$：$\\displaystyle\\sum_{k=1}^{1}k=1=\\dfrac{1(1+1)}{2}$。"
    },
    {
      "t": "p",
      "md": "• 假设对某个整数 $n\\ge 1$ 有 $\\displaystyle\\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}$，证明把 $n$ 换成 $n+1$ 时公式成立，即 $\\displaystyle\\sum_{k=1}^{n+1}k=\\dfrac{(n+1)(n+2)}{2}$。"
    },
    {
      "t": "p",
      "md": "注意"
    },
    {
      "t": "p",
      "md": "$$\\sum_{k=1}^{n+1}k=1+2+\\cdots+n+(n+1)=\\sum_{k=1}^{n}k+(n+1)=\\frac{n(n+1)}{2}+(n+1)=\\frac{n(n+1)+2(n+1)}{2}=\\frac{(n+1)(n+2)}{2}.$$"
    },
    {
      "t": "p",
      "md": "• 由归纳法，公式对所有整数 $n\\ge 1$ 成立。$\\blacksquare$"
    },
    {
      "t": "p",
      "md": "公式 (3)–(5) 可类似地用归纳法证明（见习题）。"
    },
    {
      "t": "h",
      "md": "十一、黎曼和算定积分：练习 2.1"
    },
    {
      "t": "p",
      "md": "**练习 2.1**：用黎曼和计算 $\\displaystyle\\int_{1}^{2}x^{2}\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 2.1**：该定积分是曲线 $y=f(x)=x^{2}$ 在 $x=1$ 与 $x=2$ 之间的面积。把区间 $[1,2]$ 等分成 $n$ 个子区间，$\\Delta x_i=(2-1)/n=1/n$（$i=1$ 到 $n$），于是分割 $P=\\{x_0<x_1<\\cdots<x_n\\}$ 中 $x_i=1+\\dfrac{i}{n}$（$i=0,1,\\dots,n$），从而 $x_0=1$、$x_n=2$。"
    },
    {
      "t": "p",
      "md": "在每个子区间 $[x_{i-1},x_i]$ 中取点 $x_i^{*}$ 为**左端点** $x_{i-1}$。于是"
    },
    {
      "t": "p",
      "md": "$$\\int_{1}^{2}x^{2}\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f\\left(x_i^{*}\\right)\\Delta x_i=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(1+\\frac{i-1}{n}\\right)^{2}\\frac{1}{n}.$$"
    },
    {
      "t": "p",
      "md": "展开平方并逐项求和："
    },
    {
      "t": "p",
      "md": "$$=\\lim_{n\\to\\infty}\\frac{1}{n}\\sum_{i=1}^{n}\\left(1+\\frac{2(i-1)}{n}+\\frac{(i-1)^{2}}{n^{2}}\\right)$$"
    },
    {
      "t": "p",
      "md": "$$=\\lim_{n\\to\\infty}\\frac{1}{n}\\left[\\,n+\\frac{2}{n}\\sum_{i=1}^{n}(i-1)+\\frac{1}{n^{2}}\\sum_{i=1}^{n}(i-1)^{2}\\right]$$"
    },
    {
      "t": "p",
      "md": "把 $\\displaystyle\\sum_{i=1}^{n}(i-1)=\\sum_{i=1}^{n-1}i=\\frac{(n-1)n}{2}$ 与 $\\displaystyle\\sum_{i=1}^{n}(i-1)^{2}=\\sum_{i=1}^{n-1}i^{2}=\\frac{(n-1)n(2n-1)}{6}$ 代入（即在公式 (2)、(3) 中把 $n$ 换成 $n-1$）："
    },
    {
      "t": "p",
      "md": "$$=1+\\frac{2}{n^{2}}\\cdot\\frac{(n-1)n}{2}+\\frac{1}{n^{3}}\\cdot\\frac{(n-1)n(2n-1)}{6}\\ \\xrightarrow{\\ n\\to\\infty\\ }\\ 1+1+\\frac{1}{3}=\\frac{7}{3}.$$"
    },
    {
      "t": "p",
      "md": "**用计算机近似**：实际中常借助计算机取足够多个矩形的黎曼和以达所需精度。对练习 2.1 的函数 $f(x)=x^{2}$ 在 $[1,2]$ 上，取左端点、中点、右端点得到的结果如下表："
    },
    {
      "t": "tbl",
      "head": [
        "矩形个数",
        "左端点",
        "中点",
        "右端点"
      ],
      "rows": [
        [
          "1",
          "1",
          "2.25",
          "4"
        ],
        [
          "2",
          "1.625",
          "2.3125",
          "3.125"
        ],
        [
          "3",
          "1.851851851852",
          "2.324074074074",
          "2.851851851852"
        ],
        [
          "4",
          "1.96875",
          "2.328125",
          "2.71875"
        ],
        [
          "5",
          "2.04",
          "2.33",
          "2.64"
        ],
        [
          "10",
          "2.185",
          "2.3325",
          "2.485"
        ],
        [
          "100",
          "2.31835",
          "2.333325",
          "2.34835"
        ],
        [
          "1000",
          "2.3318335",
          "2.33333325",
          "2.3348335"
        ],
        [
          "10000",
          "2.333183335",
          "2.3333333325",
          "2.333483335"
        ],
        [
          "100000",
          "2.33331833335",
          "2.333333333325",
          "2.33334833335"
        ],
        [
          "1000000",
          "2.333331833333",
          "2.333333333333",
          "2.333334833333"
        ]
      ]
    },
    {
      "t": "p",
      "md": "由于曲线 $y=x^{2}$ 的凹性，取左端点会**低估**真实面积，取右端点则**高估**；取中点通常给出更好的结果（即在更少的迭代次数下得到更高精度）。"
    },
    {
      "t": "warn",
      "md": "**易错点（黎曼和的设点顺序）**：\n\n• 等分 $[1,2]$ 时 $\\Delta x_i=\\dfrac{1}{n}$，而分点写作 $x_i=1+\\dfrac{i}{n}$；取**左端点**时用的是 $x_i^{*}=x_{i-1}=1+\\dfrac{i-1}{n}$，取右端点才是 $1+\\dfrac{i}{n}$，两者不可混用。\n\n• 对 $\\displaystyle\\sum_{i=1}^{n}(i-1)$ 与 $\\displaystyle\\sum_{i=1}^{n}(i-1)^{2}$ 求和时，等价于把定理 2.2 中公式 (2)、(3) 里的 $n$ 换成 $n-1$，不要直接用 $n$。\n\n• 极限取完后应得到**一个数**（本例为 $\\dfrac{7}{3}$）；若结果中仍含 $n$，说明极限没算完。"
    },
    {
      "t": "h",
      "md": "十二、负值与变号函数：净面积（定义 2.4）"
    },
    {
      "t": "p",
      "md": "以上只考虑了**非负**函数的定积分，即 $f(x)\\ge 0$ 在 $[a,b]$ 上。若 $f(x)$ 在 $[a,b]$ 上为负或变号，定积分定义如下："
    },
    {
      "t": "note",
      "md": "**定义（2.4）**：设 $R$ 是由 $y=f(x)$ 与 $x$ 轴在 $x=a$ 与 $x=b$ 之间围成的区域。若 $f(x)\\le 0$ 在 $[a,b]$ 上，则 $\\displaystyle\\int_{a}^{b}f(x)\\,dx$ 等于 $R$ 的**负面积**；若 $f(x)$ 在 $[a,b]$ 上变号，则 $\\displaystyle\\int_{a}^{b}f(x)\\,dx$ 等于 $R$ 的**净面积**（[[net area|净面积]]），其中 $x$ 轴上方的部分算正面积，下方的部分算负面积。"
    },
    {
      "t": "note",
      "md": "**注**：定积分 $\\displaystyle\\int_{a}^{b}f(x)\\,dx$ 中的数 $a$ 与 $b$ 称为[[limits of integration|积分限]]，$a$ 为**下限**，$b$ 为**上限**。被积的函数 $f(x)$ 称为[[integrand|被积函数]]，不定积分与定积分中都是这个叫法。"
    },
    {
      "t": "h",
      "md": "十三、微积分基本定理（定理 3.1）"
    },
    {
      "t": "p",
      "md": "用黎曼和计算定积分可能很繁琐，而且上一节的做法依赖于函数是低次多项式，这显然不会总是成立。幸运的是有一个借助原函数的更好办法："
    },
    {
      "t": "note",
      "md": "**定理（3.1）[[Fundamental Theorem of Calculus|微积分基本定理]]**：设函数 $f$ 在 $[a,b]$ 上可导。则：\n\n• **第一部分**：由\n$$A(x)=\\int_{a}^{x}f(t)\\,dt$$\n在 $[a,b]$ 上定义的函数 $A(x)$ 在 $[a,b]$ 上可导，且\n$$A'(x)=f(x)$$\n对 $(a,b)$ 中所有 $x$ 成立。\n\n• **第二部分**：若 $F$ 是 $f$ 在 $[a,b]$ 上的原函数，即 $F'(x)=f(x)$ 对 $(a,b)$ 中所有 $x$ 成立，则\n$$\\int_{a}^{b}f(x)\\,dx=F(b)-F(a).$$"
    },
    {
      "t": "p",
      "md": "定理第一部分的 $A(x)$ 有时称为[[area function|面积函数]]，因为它表示曲线 $y=f(x)$ 在区间 $[a,x]$ 上方的面积。若令 $dA=A(x+dx)-A(x)$，它就是 $[x,x+dx]$ 上曲线下方的面积。"
    },
    {
      "t": "p",
      "md": "**证明（3.1）第一部分**：为简单起见假设 $f(x)\\ge 0$ 在 $[a,b]$ 上（$f$ 为负或变号的情形证明类似）。目标是证明：对 $(a,b)$ 中任意 $x$，微分 $dA$ 存在且等于 $f(x)\\,dx$。首先 $dA=A(x+dx)-A(x)$ 是曲线 $y=f(x)$ 在区间 $[x,x+dx]$ 上方的面积。由微观平直性，曲线在无穷小区间 $[x,x+dx]$ 上是一条直线，故 $f$ 在该区间上只能递增、为常数或递减，三种情形如下："
    },
    {
      "t": "p",
      "md": "（a）$f$ 在 $[x,x+dx]$ 上递增：$dA$ 等于高 $f(x)$、宽 $dx$ 的矩形面积加上直角三角形 $\\triangle ABC$ 的面积，而后者为 $\\tfrac{1}{2}(dx)(df)=\\tfrac{1}{2}f'(x)(dx)^{2}=0$，故 $dA=f(x)\\,dx$。"
    },
    {
      "t": "p",
      "md": "（b）$f$ 在 $[x,x+dx]$ 上为常数：$dA$ 就是高 $f(x)$、宽 $dx$ 的矩形面积，同样 $dA=f(x)\\,dx$。"
    },
    {
      "t": "p",
      "md": "（c）$f$ 在 $[x,x+dx]$ 上递减：$dA$ 等于高 $f(x+dx)$、宽 $dx$ 的矩形面积加上 $\\triangle ABC$ 的面积。此时 $df<0$，故 $\\triangle ABC$ 的面积为 $\\tfrac{1}{2}(-df)(dx)=-\\tfrac{1}{2}f'(x)(dx)^{2}=0$。于是"
    },
    {
      "t": "p",
      "md": "$$dA=f(x+dx)\\,dx=\\bigl(f(x)+df\\bigr)dx=f(x)\\,dx+f'(x)(dx)^{2}=f(x)\\,dx+0=f(x)\\,dx.$$"
    },
    {
      "t": "p",
      "md": "三种情形都有 $dA=f(x)\\,dx$，故 $A'(x)=\\dfrac{dA}{dx}=f(x)$，这就证明了第一部分。"
    },
    {
      "t": "p",
      "md": "**证明（3.1）第二部分**：设 $F(x)$ 是 $f(x)$ 在 $[a,b]$ 上的原函数。由第一部分，面积函数 $A(x)=\\displaystyle\\int_{a}^{x}f(t)\\,dt$ 也是 $f(x)$ 在 $[a,b]$ 上的原函数，于是由定理 1.1，$A(x)$ 与 $F(x)$ 在 $[a,b]$ 上只相差一个常数 $C$："
    },
    {
      "t": "p",
      "md": "$$A(x)=F(x)+C\\qquad\\text{对 }[a,b]\\text{ 中一切 }x.$$"
    },
    {
      "t": "p",
      "md": "按定义 $A(a)=0$，因为它是 $[a,a]$（长度为 $0$）上曲线下方的面积。于是"
    },
    {
      "t": "p",
      "md": "$$0=A(a)=F(a)+C\\ \\Longrightarrow\\ C=-F(a)\\ \\Longrightarrow\\ A(x)=F(x)-F(a)\\quad\\text{对 }[a,b]\\text{ 中一切 }x,$$"
    },
    {
      "t": "p",
      "md": "取 $x=b$ 即得"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}f(x)\\,dx=A(b)=F(b)-F(a),$$"
    },
    {
      "t": "p",
      "md": "这就证明了第二部分。$\\blacksquare$"
    },
    {
      "t": "p",
      "md": "（注：该定理在 $f$ 仅**连续**这一更弱的条件下也可证明。）"
    },
    {
      "t": "p",
      "md": "有些教材把第一部分称为微积分第一基本定理（First Fundamental Theorem of Calculus），把第二部分称为微积分第二基本定理（Second Fundamental Theorem of Calculus）。"
    },
    {
      "t": "note",
      "md": "**定义（3.1）**：$F(b)-F(a)$ 的简写记号"
    },
    {
      "t": "p",
      "md": "$$\\Bigl.F(x)\\,\\Bigr|_{a}^{b}=F(b)-F(a).$$"
    },
    {
      "t": "h",
      "md": "十四、用基本定理计算定积分（练习 3.1–3.3）"
    },
    {
      "t": "p",
      "md": "**练习 3.1**：计算 $\\displaystyle\\int_{1}^{2}x^{2}\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 3.1**：由上一节例题已知该积分等于 $7/3$，那里用了黎曼和，而基本定理第二部分让它容易得多。因为 $F(x)=\\dfrac{x^{3}}{3}$ 是 $f(x)=x^{2}$ 的一个原函数，所以"
    },
    {
      "t": "p",
      "md": "$$\\int_{1}^{2}x^{2}\\,dx=\\frac{x^{3}}{3}\\Bigr|_{1}^{2}=\\frac{2^{3}}{3}-\\frac{1^{3}}{3}=\\frac{8}{3}-\\frac{1}{3}=\\frac{7}{3}.$$"
    },
    {
      "t": "note",
      "md": "**注**：上例中 $f(x)=x^{2}$ 的**任何**原函数都可以用，例如 $F(x)=\\dfrac{x^{3}}{3}+5$。注意计算 $F(2)-F(1)$ 时常数 $5$ 会消掉。所以在定积分中不需要给 $f(x)$ 的原函数加一般常数 $C$，而不定积分中则需要。"
    },
    {
      "t": "p",
      "md": "**练习 3.2**：计算 $\\displaystyle\\int_{0}^{\\pi}\\sin x\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 3.2**：因为 $F(x)=-\\cos x$ 是 $f(x)=\\sin x$ 的一个原函数，所以"
    },
    {
      "t": "p",
      "md": "$$\\int_{0}^{\\pi}\\sin x\\,dx=-\\cos x\\Bigr|_{0}^{\\pi}=-\\cos\\pi-(-\\cos 0)=-(-1)-(-1)=2.$$"
    },
    {
      "t": "p",
      "md": "**练习 3.3**：计算 $\\displaystyle\\int_{-1}^{1}x^{3}\\,dx$。"
    },
    {
      "t": "p",
      "md": "**解 3.3**：因为 $F(x)=\\dfrac{x^{4}}{4}$ 是 $f(x)=x^{3}$ 的一个原函数，所以"
    },
    {
      "t": "p",
      "md": "$$\\int_{-1}^{1}x^{3}\\,dx=\\frac{x^{4}}{4}\\Bigr|_{-1}^{1}=\\frac{1^{4}}{4}-\\frac{(-1)^{4}}{4}=0.$$"
    },
    {
      "t": "warn",
      "md": "**易错点（基本定理的使用条件与常数）**：\n\n• 定积分中**不要**给原函数加 `+C`：$C$ 在 $F(b)-F(a)$ 中会相消（如 $F(x)=\\dfrac{x^{3}}{3}+5$ 与 $\\dfrac{x^{3}}{3}$ 给出同一结果）。\n\n• 定理要求 $f$ 在 $[a,b]$ 上连续（或可导），并且原函数 $F$ 在整个 $[a,b]$ 上满足 $F'=f$；若被积函数在区间内有间断点或奇点，不能直接套用。\n\n• 注意代入的**上下限顺序**：$\\displaystyle\\int_{a}^{b}f=F(b)-F(a)$，且由定理 3.5 有 $\\displaystyle\\int_{a}^{b}f=-\\int_{b}^{a}f$（交换上下限要变号）。\n\n• 定积分的结果是一个**数**，不是函数 $F(x)$。"
    },
    {
      "t": "h",
      "md": "十五、奇函数与偶函数的对称性（定理 3.2–3.3）"
    },
    {
      "t": "p",
      "md": "练习 3.3 是下列[[odd function|奇函数]]结果的一个特例。"
    },
    {
      "t": "note",
      "md": "**定理（3.2）**：若 $f$ 是奇函数，即 $f(-x)=-f(x)$ 对所有 $x$ 成立，则"
    },
    {
      "t": "p",
      "md": "$$\\int_{-a}^{a}f(x)\\,dx=0$$"
    },
    {
      "t": "p",
      "md": "对所有使 $f$ 在 $[-a,a]$ 上连续的 $a>0$ 成立。"
    },
    {
      "t": "p",
      "md": "理由是：奇函数关于原点对称，故 $[0,a]$ 上曲线与 $x$ 轴之间的面积与 $[-a,0]$ 上曲线与 $x$ 轴之间的面积相互抵消。两块面积大小相同，但一块计入正值、另一块计入负值。"
    },
    {
      "t": "p",
      "md": "由关于 $y$ 轴的对称性，[[even function|偶函数]]有类似结果："
    },
    {
      "t": "note",
      "md": "**定理（3.3）**：若 $f$ 是偶函数，即 $f(-x)=f(x)$ 对所有 $x$ 成立，则"
    },
    {
      "t": "p",
      "md": "$$\\int_{-a}^{a}f(x)\\,dx=2\\int_{0}^{a}f(x)\\,dx$$"
    },
    {
      "t": "p",
      "md": "对所有使 $f$ 在 $[-a,a]$ 上连续的 $a>0$ 成立。"
    },
    {
      "t": "p",
      "md": "等价地，对奇函数有 $\\displaystyle\\int_{-a}^{a}f(x)\\,dx=0$，对偶函数有 $\\displaystyle\\int_{-a}^{a}f(x)\\,dx=2\\int_{0}^{a}f(x)\\,dx$。"
    },
    {
      "t": "h",
      "md": "十六、定积分的运算法则（定理 3.4–3.6）"
    },
    {
      "t": "p",
      "md": "下列定积分法则是不定积分相应法则的推论。"
    },
    {
      "t": "note",
      "md": "**定理（3.4）**：设 $f$ 与 $g$ 在 $[a,b]$ 上连续，$k$ 为常数，则"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}kf(x)\\,dx=k\\int_{a}^{b}f(x)\\,dx,$$"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}\\bigl(f(x)+g(x)\\bigr)dx=\\int_{a}^{b}f(x)\\,dx+\\int_{a}^{b}g(x)\\,dx,$$"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}\\bigl(f(x)-g(x)\\bigr)dx=\\int_{a}^{b}f(x)\\,dx-\\int_{a}^{b}g(x)\\,dx.$$"
    },
    {
      "t": "p",
      "md": "下列定积分结果是微积分基本定理的推论。"
    },
    {
      "t": "note",
      "md": "**定理（3.5）**：设 $f$ 在 $[a,b]$ 上连续，且 $a<c<b$，则"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{a}f(x)\\,dx=0,$$"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}f(x)\\,dx=-\\int_{b}^{a}f(x)\\,dx,$$"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{b}f(x)\\,dx=\\int_{a}^{c}f(x)\\,dx+\\int_{c}^{b}f(x)\\,dx.$$"
    },
    {
      "t": "p",
      "md": "**证明（第 3 条）**：若 $F(x)$ 是 $f(x)$ 在 $[a,b]$ 上的原函数，则"
    },
    {
      "t": "p",
      "md": "$$\\int_{a}^{c}f(x)\\,dx+\\int_{c}^{b}f(x)\\,dx=\\bigl(F(c)-F(a)\\bigr)+\\bigl(F(b)-F(c)\\bigr)=F(b)-F(a)=\\int_{a}^{b}f(x)\\,dx.\\ \\blacksquare$$"
    },
    {
      "t": "p",
      "md": "下面的结果是微积分基本定理第一部分与链式法则结合的推论。"
    },
    {
      "t": "note",
      "md": "**定理（3.6）积分的链式法则**：设 $f$ 在包含 $x=a$ 的区间 $I$ 上连续，$g(x)$ 在 $I$ 上可导。若"
    },
    {
      "t": "p",
      "md": "$$F(x)=\\int_{a}^{g(x)}f(t)\\,dt\\qquad\\text{对 }I\\text{ 中一切 }x,$$"
    },
    {
      "t": "p",
      "md": "则"
    },
    {
      "t": "p",
      "md": "$$F'(x)=f\\bigl(g(x)\\bigr)\\cdot g'(x)\\qquad\\text{对 }I\\text{ 中一切 }x.$$"
    },
    {
      "t": "h",
      "md": "十七、练习 3.4：变限积分的求导"
    },
    {
      "t": "p",
      "md": "**练习 3.4**：设 $F(x)=\\displaystyle\\int_{0}^{x^{2}}e^{t^{2}}\\,dt$ 对所有 $x>0$ 成立，求 $F'(x)$。"
    },
    {
      "t": "p",
      "md": "**解 3.4**：由积分的链式法则，取 $f(t)=e^{t^{2}}$、$g(x)=x^{2}$，则"
    },
    {
      "t": "p",
      "md": "$$F'(x)=f\\bigl(g(x)\\bigr)\\cdot g'(x)=e^{\\left(x^{2}\\right)^{2}}\\cdot(2x)=2x\\,e^{x^{4}}.$$"
    },
    {
      "t": "note",
      "md": "**本节要点回顾**：\n\n• 不定积分是原函数的**整个族**，$\\displaystyle\\int f(x)\\,dx=F(x)+C$；定积分是一个**数**（或具体函数）。\n\n• 基本积分表来自已知导数公式的逆向使用：幂公式、六个三角函数、$e^{x}$。\n\n• 定积分可定义为黎曼和的极限，也是曲线下的（净）面积。\n\n• 微积分基本定理把定积分与原函数连起来：$\\displaystyle\\int_{a}^{b}f=F(b)-F(a)$。\n\n• 奇函数在对称区间上积分为 $0$，偶函数则可折半成 $2\\displaystyle\\int_{0}^{a}f$。"
    }
  ],
  "terms": [
    [
      "antiderivative",
      "原函数"
    ],
    [
      "antidifferentiation",
      "反微分"
    ],
    [
      "indefinite integral",
      "不定积分"
    ],
    [
      "integral sign",
      "积分号"
    ],
    [
      "integrand",
      "被积函数"
    ],
    [
      "differential",
      "微分"
    ],
    [
      "infinitesimal",
      "无穷小"
    ],
    [
      "Power Formula",
      "幂公式"
    ],
    [
      "Constant Multiple Rule",
      "常数倍法则"
    ],
    [
      "differential equation",
      "微分方程"
    ],
    [
      "separable variables",
      "分离变量"
    ],
    [
      "definite integral",
      "定积分"
    ],
    [
      "Riemann sum",
      "黎曼和"
    ],
    [
      "partition",
      "分割"
    ],
    [
      "norm",
      "范数"
    ],
    [
      "Microstraightness Property",
      "微观平直性"
    ],
    [
      "summation sign",
      "求和号"
    ],
    [
      "induction",
      "数学归纳法"
    ],
    [
      "area function",
      "面积函数"
    ],
    [
      "Fundamental Theorem of Calculus",
      "微积分基本定理"
    ],
    [
      "limits of integration",
      "积分限"
    ],
    [
      "net area",
      "净面积"
    ],
    [
      "odd function",
      "奇函数"
    ],
    [
      "even function",
      "偶函数"
    ],
    [
      "Mean Value Theorem",
      "中值定理"
    ]
  ],
  "qids": [
    "fin-2-06",
    "fin-5-05",
    "fin-5-06",
    "fin-2-18",
    "fin-2-19",
    "past-3-03"
  ]
});

  /* ---------- L7 第7讲 换元积分法与广义积分 ---------- */
  T.push({
  "no": "L7",
  "title": "第7讲 换元积分法与广义积分",
  "titleEn": "Integration by Substitution & Improper Integrals",
  "tags": [
    "substitution",
    "definite integral",
    "improper integral",
    "convergence",
    "comparison test"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲两条主线：**(1)** [[Integration by Substitution|换元积分法]]——把一个「还不认识」的积分化成已知公式的形式；**(2)** [[Improper Integral|广义积分]]——把[[Definite Integral|定积分]]从「有限闭区间上的连续函数」推广到无穷区间或无界函数。"
    },
    {
      "t": "h",
      "md": "一、换元积分法"
    },
    {
      "t": "h",
      "md": "1.1 为什么要换元"
    },
    {
      "t": "p",
      "md": "到目前为止遇到的积分（无论不定积分还是定积分）都是**最简单的一类**，因为它们的[[Antiderivative|原函数]]都有现成公式，例如 $\\int \\cos x\\,dx=\\sin x+C$。"
    },
    {
      "t": "p",
      "md": "但如果积分变成 $\\int \\cos 2x\\,dx$ 呢？**目前还没有讨论过它的公式**，而且答案**不是** $\\sin 2x+C$——因为 $(\\sin 2x)'=2\\cos 2x$，不是 $\\cos 2x$。若先把 $\\sin 2x$ 除以 $2$ 再求导，就会得到 $\\cos 2x$，于是 $$\\int \\cos 2x\\,dx=\\tfrac12\\sin 2x+C.$$"
    },
    {
      "t": "p",
      "md": "像上面这样不太复杂的函数，用「凑」的办法往往就能算出来。但通常函数不会这么简单，所以需要一个一般性的技术，叫做**换元法**（[[Substitution|换元]]）。"
    },
    {
      "t": "note",
      "md": "换元的**基本思想**：把被积函数的一部分用一个新变量（通常记作 $u$）替换掉，使原来关于 $x$ 的复杂函数变成关于 $u$ 的、**你已会积的简单函数**。"
    },
    {
      "t": "p",
      "md": "这一过程与用[[Chain Rule|链式法则]]求导时的换元很相似——因为你实质上是在**反向**做同一件事。"
    },
    {
      "t": "warn",
      "md": "有一条显而易见的规则：**绝不要令 $u=x$**，因为那等于什么都没换。"
    },
    {
      "t": "h",
      "md": "1.2 不定积分换元：五个例题"
    },
    {
      "t": "tbl",
      "head": [
        "题目 (Exercise)",
        "换元 $u$",
        "$du$ 与 $dx$ 的关系",
        "结果"
      ],
      "rows": [
        [
          "$\\int \\cos 2x\\,dx$ (1.1)",
          "$u=2x$",
          "$du=2\\,dx \\Rightarrow dx=\\tfrac12\\,du$",
          "$\\tfrac12\\sin 2x+C$"
        ],
        [
          "$\\int e^{-3x}\\,dx$ (1.2)",
          "$u=-3x$",
          "$du=-3\\,dx \\Rightarrow dx=-\\tfrac13\\,du$",
          "$-\\tfrac13 e^{-3x}+C$"
        ],
        [
          "$\\int (1+4x)^5\\,dx$ (1.3)",
          "$u=1+4x$",
          "$du=4\\,dx \\Rightarrow dx=\\tfrac14\\,du$",
          "$\\tfrac{1}{24}(1+4x)^6+C$"
        ],
        [
          "$\\int 2x\\,e^{x^2}\\,dx$ (1.4)",
          "$u=x^2$",
          "$du=2x\\,dx$",
          "$e^{x^2}+C$"
        ],
        [
          "$\\int x\\sqrt{1+3x^2}\\,dx$ (1.5)",
          "$u=1+3x^2$",
          "$du=6x\\,dx \\Rightarrow x\\,dx=\\tfrac16\\,du$",
          "$\\tfrac19(1+3x^2)^{3/2}+C$"
        ]
      ]
    },
    {
      "t": "p",
      "md": "**Exercise 1.1** 用换元法求 $\\int \\cos 2x\\,dx$。\n\n**Solution.** 使积分「不认识」的是余弦里的 $2x$，于是令 $u=2x$。此时积分变成 $\\int \\cos u\\,dx$，问题在于换元的目的正是**消掉一切关于 $x$ 的痕迹，包括微元 $dx$**——整个积分必须都写成 $u$ 和 $du$。于是把 $dx$ 用 $du$ 表示：$u=2x \\Rightarrow du=2\\,dx \\Rightarrow dx=\\tfrac12\\,du$。积分变为 $$\\int \\cos u\\left(\\tfrac12\\,du\\right)=\\tfrac12\\int \\cos u\\,du=\\tfrac12\\sin u+C.$$"
    },
    {
      "t": "p",
      "md": "**补完最后一步（回代）**：原积分是关于 $x$ 的，所以不定积分的最终答案也应当是 $x$ 的表达式。把 $u=2x$ 代回：$$\\int \\cos 2x\\,dx=\\tfrac12\\sin u+C=\\tfrac12\\sin 2x+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.2** 求 $\\int e^{-3x}\\,dx$。\n\n**Solution.** 指数上的 $-3x$ 使积分未知，令 $u=-3x$，则 $du=-3\\,dx$，即 $dx=-\\tfrac13\\,du$。于是 $$\\int e^{-3x}\\,dx=\\int e^{u}\\left(-\\tfrac13\\,du\\right)=-\\tfrac13\\int e^{u}\\,du=-\\tfrac13 e^{u}+C=-\\tfrac13 e^{-3x}+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.3** 求 $\\int (1+4x)^5\\,dx$。\n\n**Solution.** 你可能会想令 $u=4x$，但那会要求求 $(1+u)^5$ 的积分，而此时**还没有该公式**；已有公式的是 $u^5$ 的积分。所以令 $u=1+4x$，$du=4\\,dx \\Rightarrow dx=\\tfrac14\\,du$，从而 $$\\int (1+4x)^5\\,dx=\\tfrac14\\int u^5\\,du=\\tfrac{1}{24}u^6+C=\\tfrac{1}{24}(1+4x)^6+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.4** 求 $\\int 2x\\,e^{x^2}\\,dx$。\n\n**Solution.** 该令 $u=2x$ 还是 $u=x^2$？**提示**是：指数上 $x^2$ 的导数 $2x$ 恰好出现在指数函数外面。事实上可以验证，令 $u=2x$ 得到的积分（即 $\\tfrac14\\int u\\,e^{u^2/4}\\,du$）并不比原来的简单。所以令 $u=x^2$，$du=2x\\,dx$，于是 $$\\int 2x\\,e^{x^2}\\,dx=\\int e^{u}\\,du=e^{u}+C=e^{x^2}+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.5** 求 $\\int x\\sqrt{1+3x^2}\\,dx$。\n\n**Solution.** 注意根号内 $1+3x^2$ 的导数是 $6x$，它与根号外的 $x$ **只差一个常数倍 $6$**——这就是令 $u=1+3x^2$ 的提示。又 $du=6x\\,dx \\Rightarrow x\\,dx=\\tfrac16\\,du$，而 $x\\,dx$ 正是根号外剩下的全部。于是 $$\\int x\\sqrt{1+3x^2}\\,dx=\\tfrac16\\int u^{1/2}\\,du=\\tfrac16\\cdot\\tfrac{2}{3}u^{3/2}+C=\\tfrac19\\left(1+3x^2\\right)^{3/2}+C.$$"
    },
    {
      "t": "h",
      "md": "1.3 指数函数积分的一般定理"
    },
    {
      "t": "p",
      "md": "上面的 Exercise 1.2 可以推广为如下定理（它是 $a=-3$ 的特例）。"
    },
    {
      "t": "note",
      "md": "**Theorem 1.1** 对任意常数 $a\\ne 0$，$$\\int e^{ax}\\,dx=\\frac{1}{a}e^{ax}+C.$$"
    },
    {
      "t": "h",
      "md": "1.4 凑微分型：对数与三角"
    },
    {
      "t": "p",
      "md": "**Exercise 1.6** 求 $\\displaystyle\\int \\frac{x^2\\,dx}{\\sqrt{x^3+9}}$。\n\n**Solution.** 令 $u=x^3+9$，则 $du=3x^2\\,dx \\Rightarrow x^2\\,dx=\\tfrac13\\,du$。于是 $$\\int \\frac{x^2\\,dx}{\\sqrt{x^3+9}}=\\tfrac13\\int u^{-1/2}\\,du=\\tfrac13\\cdot 2u^{1/2}+C=\\tfrac23\\sqrt{u}+C=\\tfrac23\\sqrt{x^3+9}+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.7** 求 $\\displaystyle\\int \\frac{2x\\,dx}{x^2-1}$。\n\n**Solution.** 分子 $2x$ **恰好是分母 $x^2-1$ 的导数**——这是「对分母换元、把积分化成[[Natural Logarithm|自然对数]]」的提示。令 $u=x^2-1$，$du=2x\\,dx$，于是 $$\\int \\frac{2x\\,dx}{x^2-1}=\\int \\frac{du}{u}=\\ln|u|+C=\\ln\\left|x^2-1\\right|+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.8** 求 $\\int \\tan x\\,dx$。\n\n**Solution.** 注意 $\\tan x=\\dfrac{\\sin x}{\\cos x}$，而分子 $\\sin x$ 与分母 $\\cos x$ 的导数**只差一个负号**——提示对分母换元：令 $u=\\cos x$，则 $du=-\\sin x\\,dx \\Rightarrow \\sin x\\,dx=-du$。于是 $$\\int \\tan x\\,dx=\\int \\frac{\\sin x}{\\cos x}\\,dx=\\int \\frac{-du}{u}=-\\ln|u|+C=-\\ln|\\cos x|+C=\\ln\\left|(\\cos x)^{-1}\\right|+C=\\ln|\\sec x|+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.9** 求 $\\int \\sec x\\,dx$。\n\n**Solution.** 注意 $$\\int \\sec x\\,dx=\\int \\sec x\\cdot\\frac{\\sec x+\\tan x}{\\sec x+\\tan x}\\,dx=\\int \\frac{\\sec^2 x+\\sec x\\tan x}{\\sec x+\\tan x}\\,dx,$$ 而最后一个积分的**分子正是分母的导数**：令 $u=\\sec x+\\tan x$，则 $du=\\left(\\sec x\\tan x+\\sec^2 x\\right)dx$。于是 $$\\int \\sec x\\,dx=\\int \\frac{du}{u}=\\ln|u|+C=\\ln|\\sec x+\\tan x|+C.$$"
    },
    {
      "t": "h",
      "md": "1.5 三个反三角型公式"
    },
    {
      "t": "note",
      "md": "**Theorem 1.2** 对任意常数 $a>0$：\n\n(1) $\\displaystyle\\int \\frac{dx}{\\sqrt{a^2-x^2}}=\\sin^{-1}\\!\\left(\\frac{x}{a}\\right)+C$（若 $|x|<a$）；\n\n(2) $\\displaystyle\\int \\frac{dx}{a^2+x^2}=\\frac{1}{a}\\tan^{-1}\\!\\left(\\frac{x}{a}\\right)+C$；\n\n(3) $\\displaystyle\\int \\frac{dx}{|x|\\sqrt{x^2-a^2}}=\\frac{1}{a}\\sec^{-1}\\!\\left(\\frac{x}{a}\\right)+C$（若 $|x|>a$）。"
    },
    {
      "t": "p",
      "md": "**公式 (2) 的证明.** 回忆 $\\displaystyle\\int \\frac{dz}{1+z^2}=\\tan^{-1}z$。作换元 $u=x/a$，即 $x=au$，$dx=a\\,du$，于是 $$\\int \\frac{dx}{a^2+x^2}=\\int \\frac{a\\,du}{a^2+a^2u^2}=\\frac{1}{a}\\int \\frac{du}{1+u^2}=\\frac{1}{a}\\tan^{-1}u+C=\\frac{1}{a}\\tan^{-1}\\!\\left(\\frac{x}{a}\\right)+C.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.10** 求 $\\displaystyle\\int \\frac{dx}{\\sqrt{4-9x^2}}$。\n\n**Solution.** 根号内的 $4-9x^2$ 几乎就是 $a^2-x^2$ 的形式，只多了一个 $9$。目标是让 $u^2=9x^2$，故令 $u=3x$，则 $dx=\\tfrac13\\,du$ 且 $u^2=9x^2$。于是 $$\\int \\frac{dx}{\\sqrt{4-9x^2}}=\\frac13\\int \\frac{du}{\\sqrt{4-u^2}}=\\frac13\\sin^{-1}\\!\\left(\\frac{u}{2}\\right)+C=\\frac13\\sin^{-1}\\!\\left(\\frac{3x}{2}\\right)+C,$$ 其中用了 $a=2$ 的公式 (1)。"
    },
    {
      "t": "h",
      "md": "1.6 定积分换元必须换限"
    },
    {
      "t": "p",
      "md": "对[[Definite Integral|定积分]]使用换元法，步骤与不定积分相同，但**要多做一步**：把原积分 $\\int_a^b f(x)\\,dx$ 中的积分限 $x=a$ 与 $x=b$，换成新积分中关于 $u$ 的上下限 $u=g(a)$ 与 $u=g(b)$，其中 $u=g(x)$ 就是你的换元。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.11** 求 $\\displaystyle\\int_1^2 (2x+1)^6\\,dx$。\n\n**Solution.** 令 $u=g(x)=2x+1$，则 $dx=\\tfrac12\\,du$。上限 $x=2$ 在新积分中变成 $u=g(2)=2(2)+1=5$，下限 $x=1$ 变成 $u=g(1)=2(1)+1=3$。于是 $$\\int_1^2 (2x+1)^6\\,dx=\\frac12\\int_3^5 u^6\\,du=\\frac12\\left[\\frac{u^7}{7}\\right]_3^5=\\frac{1}{14}\\left(5^7-3^7\\right)=68\\,752.$$"
    },
    {
      "t": "note",
      "md": "最后当然也可以把一切都换回 $x$ 再代限，但**没有必要**，因为两种做法得到的是同一个数值答案。"
    },
    {
      "t": "h",
      "md": "1.7 对称性公式 $\\int_0^a f(x)dx=\\int_0^a f(a-x)dx$"
    },
    {
      "t": "note",
      "md": "**Theorem 1.3** 对任意常数 $a$，$$\\int_0^a f(x)\\,dx=\\int_0^a f(a-x)\\,dx. \\qquad (4)$$"
    },
    {
      "t": "p",
      "md": "**Proof.** 用换元 $u=a-x$，则 $x=a-u$、$dx=-du$；同时积分限中 $x=0$ 变成 $u=a$，$x=a$ 变成 $u=0$：$$\\int_0^a f(x)\\,dx=-\\int_a^0 f(a-u)\\,du=\\int_0^a f(a-u)\\,du=\\int_0^a f(a-x)\\,dx. \\qquad \\checkmark$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.12** 求 $\\displaystyle\\int_0^{\\pi}\\frac{x\\sin x}{1+\\cos^2 x}\\,dx$。\n\n**Solution.** 令 $I=\\displaystyle\\int_0^{\\pi}\\frac{x\\sin x}{1+\\cos^2 x}\\,dx$。由上面的性质（取 $a=\\pi$）：$$I=\\int_0^{\\pi}\\frac{(\\pi-x)\\sin(\\pi-x)}{1+\\cos^2(\\pi-x)}\\,dx=\\int_0^{\\pi}\\frac{(\\pi-x)\\sin x}{1+\\cos^2 x}\\,dx,$$ 即 $$I=\\pi\\int_0^{\\pi}\\frac{\\sin x}{1+\\cos^2 x}\\,dx-I.$$ 于是 $$2I=\\pi\\int_0^{\\pi}\\frac{\\sin x}{1+\\cos^2 x}\\,dx=\\pi\\left[-\\tan^{-1}(\\cos x)\\right]_0^{\\pi}=\\pi\\cdot\\frac{\\pi}{2},$$ 所以 $I=\\dfrac{\\pi^2}{4}$。"
    },
    {
      "t": "h",
      "md": "二、广义积分"
    },
    {
      "t": "h",
      "md": "2.1 为什么要放宽条件：Dirac $\\delta$ 函数"
    },
    {
      "t": "p",
      "md": "此前定积分只对**有限闭区间上的连续函数**定义。但有时必须在不满足这些条件的情况下做积分。例如在量子力学中，[[Dirac Delta Function|Dirac $\\delta$ 函数]] $\\delta$ 由下面四条性质在 $\\mathbb{R}$ 上定义："
    },
    {
      "t": "p",
      "md": "(1) $\\delta(x)=0$ 对一切 $x\\ne 0$；\n\n(2) $\\delta(0)=\\infty$；\n\n(3) $\\displaystyle\\int_{-\\infty}^{\\infty}\\delta(x)\\,dx=1$；\n\n(4) 对 $\\mathbb{R}$ 上任意连续函数 $f$，$\\displaystyle\\int_{-\\infty}^{\\infty}f(x)\\delta(x)\\,dx=f(0)$。"
    },
    {
      "t": "note",
      "md": "该函数由物理学家 P.A.M. Dirac（1902–1984，1933 年获诺贝尔物理学奖）引入。它在 $x=0$ 处**既不是实值也不是连续**的；图中的「图像」可能引起误解，因为 $\\infty$ 并不是 $y$ 轴上的一个实际点。一种解释是：$\\delta$ 是某种「瞬时脉冲」的抽象——之前和之后什么都没有。想深入了解这个有趣而有用的函数，可参看 Dirac, P.A.M., *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press, 1958，§15。"
    },
    {
      "t": "p",
      "md": "性质 (3) 与 (4) 给出了一类[[Improper Integral|广义积分]]的例子：**无穷区间上的积分**（此处是整个实轴 $\\mathbb{R}=(-\\infty,\\infty)$）。"
    },
    {
      "t": "h",
      "md": "2.2 定义：无穷区间上的广义积分"
    },
    {
      "t": "note",
      "md": "**Definition 2.1** 设 $f$ 连续、$a$ 为实数：\n\n* $f$ 在 $[a,\\infty)$ 上的广义积分定义为 $\\displaystyle\\int_a^{\\infty}f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx$；\n\n* $f$ 在 $(-\\infty,a]$ 上的广义积分定义为 $\\displaystyle\\int_{-\\infty}^{a}f(x)\\,dx=\\lim_{b\\to-\\infty}\\int_b^{a}f(x)\\,dx$；\n\n* $f$ 在 $(-\\infty,\\infty)$ 上的广义积分定义为 $\\displaystyle\\int_{-\\infty}^{\\infty}f(x)\\,dx=\\int_{-\\infty}^{c}f(x)\\,dx+\\int_c^{\\infty}f(x)\\,dx$，其中 $c$ 为任意实数（通常取 $c=0$）。\n\n若上述极限存在（即是一个实数），则称该广义积分 [[Convergent|收敛]]；否则称它 [[Divergent|发散]]。"
    },
    {
      "t": "note",
      "md": "定义中的极限**总是先算出里面积分再取**。与「正常的」定积分一样，广义积分也可以解释为曲线下方的面积。"
    },
    {
      "t": "h",
      "md": "2.3 无穷区间上的五个例题"
    },
    {
      "t": "p",
      "md": "**Exercise 2.1** 求 $\\displaystyle\\int_1^{\\infty}\\frac{dx}{x}$。\n\n**Solution.** 对一切实数 $b>1$，$$\\int_1^{\\infty}\\frac{dx}{x}=\\lim_{b\\to\\infty}\\int_1^b\\frac{dx}{x}=\\lim_{b\\to\\infty}\\left[\\ln|x|\\right]_1^b=\\lim_{b\\to\\infty}(\\ln b-\\ln 1)=\\lim_{b\\to\\infty}\\ln b=\\infty,$$ 故该积分**发散**。这意味着曲线 $y=1/x$ 在 $[1,\\infty)$ 下方的面积是无穷大。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.2** 求 $\\displaystyle\\int_1^{\\infty}\\frac{dx}{x^2}$。\n\n**Solution.** 对一切实数 $b>1$，$$\\int_1^{\\infty}\\frac{dx}{x^2}=\\lim_{b\\to\\infty}\\int_1^b x^{-2}\\,dx=\\lim_{b\\to\\infty}\\left[-\\frac1x\\right]_1^b=\\lim_{b\\to\\infty}\\left(-\\frac1b+1\\right)=1-0=1.$$ 这意味着 $y=1/x^2$ 在 $[1,\\infty)$ 下方的面积等于 $1$。"
    },
    {
      "t": "note",
      "md": "**无穷的区域可以具有有限的面积**：长度与面积是不同的、彼此没有必然联系的概念。注意 $y=1/x^2$ 趋近 $x$ 轴（渐近线）的速度**比 $y=1/x$ 快得多**——快到足以让积分收敛。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.3** 求 $\\displaystyle\\int_{-\\infty}^{0} e^{x}\\,dx$。\n\n**Solution.** 对一切实数 $b<0$，$$\\int_{-\\infty}^{0}e^{x}\\,dx=\\lim_{b\\to-\\infty}\\int_b^0 e^{x}\\,dx=\\lim_{b\\to-\\infty}\\left[e^{x}\\right]_b^0=\\lim_{b\\to-\\infty}\\left(1-e^{b}\\right)=1-0=1.$$ 这意味着 $y=e^{x}$ 在 $(-\\infty,0]$ 下方的面积等于 $1$。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.4** 求 $\\displaystyle\\int_0^{\\infty}\\sin x\\,dx$。\n\n**Solution.** 由于 $$\\int_0^{\\infty}\\sin x\\,dx=\\lim_{b\\to\\infty}\\int_0^b \\sin x\\,dx=\\lim_{b\\to\\infty}\\left[-\\cos x\\right]_0^b=\\lim_{b\\to\\infty}(-\\cos b+1),$$ 而 $\\lim_{b\\to\\infty}\\cos b$ **不存在**（$\\cos b$ 在 $1$ 与 $-1$ 之间振荡），所以该积分**发散**。这意味着在 $[0,\\infty)$ 上的净面积（$x$ 轴上方记正、下方记负）是不确定的。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.5** 求 $\\displaystyle\\int_{-\\infty}^{\\infty}\\frac{dx}{1+x^2}$。\n\n**Solution.** 在 $x=0$ 处把积分拆开：$$\\int_{-\\infty}^{\\infty}\\frac{dx}{1+x^2}=\\int_{-\\infty}^{0}\\frac{dx}{1+x^2}+\\int_0^{\\infty}\\frac{dx}{1+x^2}$$ $$=\\lim_{b\\to-\\infty}\\int_b^0\\frac{dx}{1+x^2}+\\lim_{b\\to\\infty}\\int_0^b\\frac{dx}{1+x^2}=\\lim_{b\\to-\\infty}\\left(\\tan^{-1}0-\\tan^{-1}b\\right)+\\lim_{b\\to\\infty}\\left(\\tan^{-1}b-\\tan^{-1}0\\right)$$ $$=\\left(0-(-\\pi/2)\\right)+\\left(\\pi/2-0\\right)=\\pi.$$ 这意味着 $y=\\dfrac{1}{1+x^2}$ 在整个实轴 $(-\\infty,\\infty)$ 下方的面积等于 $\\pi$。"
    },
    {
      "t": "p",
      "md": "**续.** 注：若在任意 $c$ 处拆分，答案相同。另一种做法是利用关于 $y$ 轴的**对称性**——因为 $f(x)=\\dfrac{1}{1+x^2}$ 是[[Even Function|偶函数]]——于是 $$\\int_{-\\infty}^{\\infty}\\frac{dx}{1+x^2}=2\\int_0^{\\infty}\\frac{dx}{1+x^2}=\\cdots=2\\left(\\frac{\\pi}{2}-0\\right)=\\pi.$$"
    },
    {
      "t": "warn",
      "md": "由于被积函数在整个 $\\mathbb{R}$ 上连续，一个常见的做法（尤其学生爱用）是**直接把 $\\pm\\infty$ 当作积分限代入**，从而省去取极限：$$\\int_{-\\infty}^{\\infty}\\frac{dx}{1+x^2}=\\tan^{-1}(\\infty)-\\tan^{-1}(-\\infty)=\\frac{\\pi}{2}-\\left(-\\frac{\\pi}{2}\\right)=\\pi.$$ 这种捷径**可以用，前提是你清楚把 $x=\\pm\\infty$ 代入 $\\tan^{-1}x$ 到底意味着什么**，并且确认**没有任何使被积函数无意义的点**（否则会出现另一类广义积分，下面马上讨论）。"
    },
    {
      "t": "h",
      "md": "2.4 定义：无界函数（第二类）的广义积分"
    },
    {
      "t": "p",
      "md": "第二类广义积分来自**在积分区间上不连续或无界**的函数。例如 Dirac $\\delta$ 函数的性质 (3) 就属于这一类，因为 $\\delta$ 在 $x=0$ 处不连续。"
    },
    {
      "t": "note",
      "md": "**Definition 2.2 (Improper Integral)**\n\n* 若 $f$ 在 $[a,b)$ 上连续、但在 $x=b$ 处有间断点或[[Vertical Asymptote|垂直渐近线]]，定义 $\\displaystyle\\int_a^b f(x)\\,dx=\\lim_{c\\to b^-}\\int_a^c f(x)\\,dx$；\n\n* 若 $f$ 在 $(a,b]$ 上连续、但在 $x=a$ 处有间断点或垂直渐近线，定义 $\\displaystyle\\int_a^b f(x)\\,dx=\\lim_{c\\to a^+}\\int_c^b f(x)\\,dx$；\n\n* 若 $f$ 在 $[a,b]$ 上（除去一点）连续、但在 $a<c<b$ 处的 $x=c$ 有间断点或垂直渐近线，定义 $\\displaystyle\\int_a^b f(x)\\,dx=\\int_a^c f(x)\\,dx+\\int_c^b f(x)\\,dx$，其中右端两个积分按前两种定义计算。\n\n若上述极限存在（即是一个实数），则广义积分**收敛**；否则**发散**。"
    },
    {
      "t": "note",
      "md": "对无穷区间的情形相应调整上述定义——例如 $(a,\\infty)$、$(-\\infty,b]$ 或 $(-\\infty,\\infty)$——使之与那一类广义积分的定义保持一致。"
    },
    {
      "t": "h",
      "md": "2.5 无界函数的例题"
    },
    {
      "t": "p",
      "md": "**Exercise 2.6** 求 $\\displaystyle\\int_0^1\\frac{dx}{x}$。\n\n**Solution.** 因为 $x=0$ 是 $y=\\dfrac1x$ 的垂直渐近线，$$\\int_0^1\\frac{dx}{x}=\\lim_{c\\to 0^+}\\int_c^1\\frac{dx}{x}=\\lim_{c\\to 0^+}\\left[\\ln|x|\\right]_c^1=\\lim_{c\\to 0^+}(\\ln 1-\\ln c)=0-(-\\infty)=\\infty,$$ 故该积分**发散**。这意味着 $y=1/x$ 在 $(0,1]$ 下方的面积是无穷大——该区域在 $y$ 方向上是无穷的。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.7** 求 $\\displaystyle\\int_0^1\\frac{dx}{\\sqrt{x}}$。\n\n**Solution.** 因为 $x=0$ 是 $y=\\dfrac{1}{\\sqrt{x}}$ 的垂直渐近线，$$\\int_0^1\\frac{dx}{\\sqrt{x}}=\\lim_{c\\to 0^+}\\int_c^1 x^{-1/2}\\,dx=\\lim_{c\\to 0^+}\\left[2\\sqrt{x}\\right]_c^1=\\lim_{c\\to 0^+}\\left(2-2\\sqrt{c}\\right)=2-0=2.$$ 这意味着 $y=1/\\sqrt{x}$ 在 $(0,1]$ 下方的面积等于 $2$——同样是在 $y$ 方向上无穷的区域，却有有限面积。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.8** 求 $\\displaystyle\\int_1^3 \\lfloor x\\rfloor\\,dx$。\n\n**Solution.** 回忆[[Floor Function|取整函数]] $y=\\lfloor x\\rfloor$ 在每个整数处有跳跃间断点。因此 $\\int_1^3 \\lfloor x\\rfloor\\,dx$ 是区间 $[1,3)$ 上的广义积分，需要在区间内的间断点 $x=2$ 处拆开：$$\\int_1^3 \\lfloor x\\rfloor\\,dx=\\int_1^2 \\lfloor x\\rfloor\\,dx+\\int_2^3 \\lfloor x\\rfloor\\,dx$$ $$=\\lim_{b\\to 2^-}\\int_1^b 1\\,dx+\\lim_{c\\to 3^-}\\int_2^c 2\\,dx=\\lim_{b\\to 2^-}(b-1)+\\lim_{c\\to 3^-}(2c-4)=(2-1)+(6-4)=3.$$"
    },
    {
      "t": "h",
      "md": "2.6 $p$-积分判据与比较判别法"
    },
    {
      "t": "p",
      "md": "类似于上面某些例子，下面的结果很容易证明（见习题）。"
    },
    {
      "t": "note",
      "md": "**Theorem 2.1** 对任意实数 $a>0$，广义积分 $$\\int_a^{\\infty}\\frac{dx}{x^p}$$ 当 $p>1$ 时**收敛**，当 $0<p\\le 1$ 时**发散**。"
    },
    {
      "t": "note",
      "md": "**Theorem 2.2 (Comparison Theorem)** 广义积分的[[Comparison Test|比较判别法]]。\n\n设 $f(x)$ 与 $g(x)$ 连续，且对 $x\\ge a$ 有 $0\\le g(x)\\le f(x)$。则\n\n**(a)** 若 $\\displaystyle\\int_a^{\\infty}f(x)\\,dx$ 收敛，则 $\\displaystyle\\int_a^{\\infty}g(x)\\,dx$ 收敛；\n\n**(b)** 若 $\\displaystyle\\int_a^{\\infty}g(x)\\,dx$ 发散，则 $\\displaystyle\\int_a^{\\infty}f(x)\\,dx$ 发散。"
    },
    {
      "t": "note",
      "md": "(a) 的思想是：若在 $[a,\\infty)$ 上有 $-g(x)\\le f(x)\\le g(x)$，那么把广义积分看成面积，$f$ 的积分就被 $\\pm g$ 的两个有限积分「夹住」。不过，要证明 $f$ 的积分中的极限存在还有一些微妙之处——**有界并不一定意味着极限存在**。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.9** 证明 $\\displaystyle\\int_1^{\\infty}\\frac{\\sin x}{x^2}\\,dx$ 收敛。\n\n**Solution.** 由 Exercise 2.2，$\\displaystyle\\int_1^{\\infty}\\frac{dx}{x^2}$ 收敛。又因为对一切 $x$ 有 $|\\sin x|\\le 1$，所以在 $[1,\\infty)$ 上有 $$\\left|\\frac{\\sin x}{x^2}\\right|\\le\\frac{1}{x^2}.$$ 故由比较判别法，$\\displaystyle\\int_1^{\\infty}\\frac{\\sin x}{x^2}\\,dx$ 收敛。右图显示曲线 $y=\\dfrac{\\sin x}{x^2}$ 被夹在 $y=\\pm\\dfrac{1}{x^2}$ 之间。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.10** 判断 $\\displaystyle\\int_1^{\\infty}\\frac{1+11\\cos^9(1702x)}{\\sqrt{x}}\\,dx$ 的敛散性。\n\n**Solution.** 由于余弦不超过 $1$，分子是有界的；而分母的指数小于 $1$，所以可以猜出该积分**很可能发散**。我们需要找一个**更小且也发散**的函数。"
    },
    {
      "t": "p",
      "md": "**续.** 我们知道 $0\\le 11\\cos^9(1702x)\\le 11$。特别地，这一项是正的，所以**从分子中把它去掉，分子就变小**：$$\\frac{1+11\\cos^9(1702x)}{\\sqrt{x}}\\ \\ge\\ \\frac{1}{\\sqrt{x}}.$$ 而 $\\displaystyle\\int_1^{\\infty}\\frac{dx}{\\sqrt{x}}$ **发散**（$p=\\tfrac12\\le 1$），故由比较判别法，$\\displaystyle\\int_1^{\\infty}\\frac{1+11\\cos^9(1702x)}{\\sqrt{x}}\\,dx$ 也**发散**。"
    },
    {
      "t": "h",
      "md": "2.7 收敛广义积分的运算性质"
    },
    {
      "t": "p",
      "md": "关于定积分的规则与性质对广义积分**依然成立，前提是这些广义积分收敛**。"
    },
    {
      "t": "p",
      "md": "例如，设函数 $f$ 在 $x=c$ 处有间断点或垂直渐近线。若两个广义积分 $\\displaystyle\\int_a^c f(x)\\,dx$ 与 $\\displaystyle\\int_c^b f(x)\\,dx$ 都收敛，则 $\\displaystyle\\int_a^b f(x)\\,dx$ 收敛，且 $$\\int_a^b f(x)\\,dx=\\int_a^c f(x)\\,dx+\\int_c^b f(x)\\,dx.$$"
    },
    {
      "t": "p",
      "md": "同理，若 $\\displaystyle\\int_a^c f(x)\\,dx$ 与 $\\displaystyle\\int_c^{\\infty}f(x)\\,dx$ 都收敛，则 $\\displaystyle\\int_a^{\\infty}f(x)\\,dx$ 也收敛，且 $$\\int_a^{\\infty}f(x)\\,dx=\\int_a^c f(x)\\,dx+\\int_c^{\\infty}f(x)\\,dx.$$"
    }
  ],
  "terms": [
    [
      "Integration by Substitution",
      "换元积分法"
    ],
    [
      "Substitution",
      "换元"
    ],
    [
      "Chain Rule",
      "链式法则"
    ],
    [
      "Antiderivative",
      "原函数"
    ],
    [
      "Improper Integral",
      "广义积分（反常积分）"
    ],
    [
      "Definite Integral",
      "定积分"
    ],
    [
      "Infinite Interval",
      "无穷区间"
    ],
    [
      "Unbounded Function",
      "无界函数"
    ],
    [
      "Convergent",
      "收敛"
    ],
    [
      "Divergent",
      "发散"
    ],
    [
      "Comparison Theorem",
      "比较定理"
    ],
    [
      "Comparison Test",
      "比较判别法"
    ],
    [
      "Vertical Asymptote",
      "垂直渐近线"
    ],
    [
      "Dirac Delta Function",
      "狄拉克 δ 函数"
    ],
    [
      "Floor Function",
      "取整函数"
    ],
    [
      "Natural Logarithm",
      "自然对数"
    ],
    [
      "Even Function",
      "偶函数"
    ]
  ],
  "qids": [
    "fin-2-18",
    "fin-2-19",
    "fin-2-26",
    "fin-2-27",
    "fin-5-01",
    "fin-5-08",
    "past-2-04",
    "past-2-09",
    "past-2-10",
    "past-2-16"
  ]
});

  /* ---------- L8 第8讲 分部积分法与三角积分 ---------- */
  T.push({
  "no": "L8",
  "title": "第8讲 分部积分法与三角积分",
  "titleEn": "Methods of Integration - Integration by Parts; Trigonometric Integrals",
  "tags": [
    "Integration by Parts",
    "Gamma Function",
    "Product-to-Sum Formulas",
    "Trigonometric Integrals",
    "Odd and Even Powers",
    "Secant and Tangent"
  ],
  "blocks": [
    {
      "t": "note",
      "md": "本讲包含两大部分：**(1)** [[Integration by Parts|分部积分法]]（定理 1.1 及练习 1.1–1.8）；**(2)** [[Trigonometric Integrals|三角积分]]（积化和差公式、$\\sin$ 与 $\\cos$ 的奇偶次幂、$\\sec$ 与 $\\tan$ 的幂次积分）。"
    },
    {
      "t": "h",
      "md": "一、分部积分法：从 Gamma 函数引入"
    },
    {
      "t": "p",
      "md": "在物理与工程中，[[Gamma Function|Gamma 函数]] $\\Gamma(t)$ 有众多应用，它对所有 $t>0$ 定义为 $$\\Gamma(t)=\\int_0^{\\infty} x^{t-1}e^{-x}\\,dx$$ （该函数由瑞士数学家、物理学家和天文学家 Leonhard Euler (1707–1783) 创立；用希腊大写字母 $\\Gamma$ 表示这一函数的记号则归功于法国数学家 Adrien-Marie Legendre (1752–1833)。）"
    },
    {
      "t": "p",
      "md": "计算 $\\Gamma(2)$ 归结为积分 $f(x)=xe^{-x}$。你目前学过的任何公式或代换法都无能为力；但对这个函数**求导**却很容易。由 [[Product Rule|乘积法则]]（微分形式） $$d(xe^{-x})=x\\,d(e^{-x})+d(x)\\cdot e^{-x}=-xe^{-x}\\,dx+e^{-x}\\,dx$$ 移项得 $xe^{-x}\\,dx=-d(xe^{-x})-d(e^{-x})$，两边积分（因为 $\\int dF=F+C$）得 $$\\int xe^{-x}\\,dx=-\\int d(xe^{-x})-\\int d(e^{-x})=-xe^{-x}-e^{-x}+C$$"
    },
    {
      "t": "p",
      "md": "把上述过程对一般的函数 $u$ 与 $v$ 推广：由 $d(uv)=v\\,du+u\\,dv$ 得 $u\\,dv=d(uv)-v\\,du$，两边积分就得到分部积分公式。"
    },
    {
      "t": "h",
      "md": "二、定理 1.1（分部积分法）"
    },
    {
      "t": "p",
      "md": "$$\\boxed{\\int u\\,dv=uv-\\int v\\,du}\\qquad (1)$$"
    },
    {
      "t": "note",
      "md": "分部积分法其实就是**乘积法则的积分形式**；它典型的使用场合是：新的积分 $\\int v\\,du$ 比原积分 $\\int u\\,dv$ 更简单。"
    },
    {
      "t": "h",
      "md": "三、练习 1.1：计算 $\\int xe^{-x}dx$ 与 $\\Gamma(2)$"
    },
    {
      "t": "p",
      "md": "**思路**：原积分永远是 $\\int u\\,dv$ 的形式，所以要决定 $xe^{-x}dx$ 中哪部分作 $u$、哪部分作 $dv$。通常选 $dv$ 为一个**容易积分**的微分（因为要由它积分得到 $v$），并选 $u$ 为一个**导数比自身更简单**的函数（因为它的导数会出现在 $\\int v\\,du$ 中，而你希望那个积分更简单）。"
    },
    {
      "t": "p",
      "md": "这里取 $u=x$，$dv=e^{-x}dx$，于是 $du=dx$，$v=\\int dv=\\int e^{-x}dx=-e^{-x}$（先略去任意常数 $C$，等算完 $\\int v\\,du$ 再补上）。因此 $$\\int xe^{-x}\\,dx=uv-\\int v\\,du=x(-e^{-x})-\\int(-e^{-x})\\,dx=-xe^{-x}-e^{-x}+C$$ 与本节开头的结果一致。注意 $\\int v\\,du=\\int -e^{-x}dx$ 确实比原积分简单。"
    },
    {
      "t": "p",
      "md": "于是可以算出 $\\Gamma(2)$： $$\\Gamma(2)=\\int_0^{\\infty}xe^{-x}\\,dx=\\Big[-xe^{-x}-e^{-x}\\Big]_0^{\\infty}=\\lim_{x\\to\\infty}\\big(-xe^{-x}-e^{-x}\\big)-\\big(-0\\cdot e^{0}-e^{0}\\big)=0-0+1=1$$"
    },
    {
      "t": "h",
      "md": "四、练习 1.2：$u$ 与 $dv$ 选反了会怎样"
    },
    {
      "t": "p",
      "md": "若在练习 1.1 中改取 $u=e^{-x}$、$dv=x\\,dx$，则 $du=-e^{-x}dx$，$v=\\int x\\,dx=\\frac{1}{2}x^{2}$，于是 $$\\int xe^{-x}\\,dx=\\frac{1}{2}x^{2}e^{-x}-\\int \\frac{1}{2}x^{2}(-e^{-x})\\,dx=\\frac{1}{2}x^{2}e^{-x}+\\frac{1}{2}\\int x^{2}e^{-x}\\,dx$$"
    },
    {
      "t": "warn",
      "md": "这个选择把你带向**错误的方向**：得到的积分比原积分更困难。练习 1.2 说明了选择合适的 $u$ 与 $dv$ 的重要性。对如何选择只有一些粗略的准则（如练习 1.1 所示），**并没有保证一定奏效的规则**；有时甚至不清楚是否应该尝试分部积分。"
    },
    {
      "t": "h",
      "md": "五、练习 1.3：$\\int \\ln x\\,dx$"
    },
    {
      "t": "p",
      "md": "分部积分表面上要求积分里有**两个函数**，而这里 $\\ln x$ 似乎是唯一的函数。可是 $dv$ 是一个微分，而这里确实存在一个：$dx$。取 $dv=dx$ 就迫使 $u=\\ln x$，于是 $du=\\frac{1}{x}dx$，$v=\\int dx=x$。代入 $\\int u\\,dv=uv-\\int v\\,du$： $$\\int \\ln x\\,dx=(\\ln x)(x)-\\int x\\cdot\\frac{1}{x}\\,dx=x\\ln x-\\int 1\\,dx=x\\ln x-x+C$$"
    },
    {
      "t": "note",
      "md": "若取 $dv=\\ln x\\,dx$ 则毫无意义——因为由 $dv$ 积分得到 $v$ 正是原来要解决的问题本身。"
    },
    {
      "t": "h",
      "md": "六、练习 1.4：$\\int 3^{x}e^{x^{2}}dx$"
    },
    {
      "t": "p",
      "md": "一条常用的准则是：把积分中**最复杂的函数**通过积分（作为 $dv$）化成更简单的东西（成为 $v$）。本积分中 $e^{x^{2}}$ 比较复杂，而且没有初等原函数。但 $xe^{x^{2}}$ 出现在积分里且容易积分（用代换法）。故取 $dv=xe^{x^{2}}dx$，这意味着 $u=x$；于是 $du=2x\\,dx$，$v=\\int xe^{x^{2}}dx=\\frac{1}{2}e^{x^{2}}$。分部积分得 $$\\int 3^{x}e^{x^{2}}\\,dx=x\\cdot\\frac{1}{2}e^{x^{2}}-\\int \\frac{1}{2}e^{x^{2}}\\cdot 2x\\,dx=\\frac{1}{2}xe^{x^{2}}-\\frac{1}{2}\\int xe^{x^{2}}\\,dx=\\frac{1}{2}xe^{x^{2}}-\\frac{1}{2}e^{x^{2}}+C=\\frac{(x-1)e^{x^{2}}}{2}+C$$"
    },
    {
      "t": "h",
      "md": "七、练习 1.5：需要多轮分部积分的情形"
    },
    {
      "t": "p",
      "md": "有时需要**多轮**分部积分，例如 $\\int x^{2}e^{-x}dx$。取 $dv=e^{-x}dx$、$u=x^{2}$，则 $du=2x\\,dx$，$v=-e^{-x}$。分部积分得 $$\\int x^{2}e^{-x}\\,dx=x^{2}(-e^{-x})-\\int(-e^{-x})2x\\,dx=-x^{2}e^{-x}+2\\int xe^{-x}\\,dx\\quad(\\text{再用一次分部积分})$$ $$\\int xe^{-x}\\,dx=-xe^{-x}-e^{-x}$$ 所以 $$\\int x^{2}e^{-x}\\,dx=-x^{2}e^{-x}+2\\big(-xe^{-x}-e^{-x}\\big)+C=-x^{2}e^{-x}-2xe^{-x}-2e^{-x}+C$$"
    },
    {
      "t": "p",
      "md": "注意：第二个积分中的 $u=2x$ 正是第一个积分中 $u=x^{2}$ 的导数；同理第二个积分中的 $dv=-e^{-x}dx$ 来自对第一个积分中 $dv=e^{-x}dx$ 的积分。"
    },
    {
      "t": "h",
      "md": "八、多轮分部积分的一般形式与定积分版本"
    },
    {
      "t": "p",
      "md": "一般地，若需要 $n$ 轮分部积分，用 $u_i$ 与 $v_i$ 分别表示第 $i$ 轮（$i=1,2,\\dots,n$）的 $u$ 与 $v$，则反复分部积分的过程形如 $$\\int u_1\\,dv_1=u_1v_1-\\int v_1\\,du_1=u_1v_1-\\Big(u_2v_2-\\int v_2\\,du_2\\Big)=u_1v_1-u_2v_2+\\int v_2\\,du_2$$ 即交替出现正负项，最后剩下来的积分 $\\int u_n\\,dv_n$ 应当是一个容易积出的积分。"
    },
    {
      "t": "p",
      "md": "分部积分也可用于**定积分**（包括广义积分）。一般地，当 $a$ 与 $b$ 为实数或 $\\pm\\infty$ 时， $$\\int_a^{b}u\\,dv=\\Big[uv\\Big]_a^{b}-\\int_a^{b}v\\,du$$ （本讲开头计算 $\\Gamma(2)$ 时就已经用它在广义积分上做了运算。）"
    },
    {
      "t": "h",
      "md": "九、练习 1.6：原积分重新出现——$\\int \\sec^{3}x\\,dx$"
    },
    {
      "t": "p",
      "md": "分部积分有时会让**原来的积分重新出现**，这样就可以把它与移项后的积分合并求解。取 $u=\\sec x$、$dv=\\sec^{2}x\\,dx$，则 $du=\\sec x\\tan x\\,dx$、$v=\\int \\sec^{2}x\\,dx=\\tan x$。代入公式： $$\\int \\sec^{3}x\\,dx=\\sec x\\tan x-\\int \\tan^{2}x\\sec x\\,dx$$"
    },
    {
      "t": "p",
      "md": "用 $\\tan^{2}x=\\sec^{2}x-1$ 改写右边的积分： $$\\int \\sec^{3}x\\,dx=\\sec x\\tan x-\\int \\sec x(\\sec^{2}x-1)\\,dx=\\sec x\\tan x+\\int \\sec x\\,dx-\\int \\sec^{3}x\\,dx$$ 于是 $2\\int \\sec^{3}x\\,dx=\\sec x\\tan x+\\ln|\\sec x+\\tan x|+C$，即 $$\\int \\sec^{3}x\\,dx=\\frac{1}{2}\\big(\\sec x\\tan x+\\ln|\\sec x+\\tan x|\\big)+C$$"
    },
    {
      "t": "h",
      "md": "十、练习 1.7：$\\int e^{x}\\sin x\\,dx$"
    },
    {
      "t": "p",
      "md": "先取 $u=e^{x}$、$dv=\\sin x\\,dx$，则 $du=e^{x}dx$，$v=\\int \\sin x\\,dx=-\\cos x$，于是 $$\\int e^{x}\\sin x\\,dx=-e^{x}\\cos x+\\int e^{x}\\cos x\\,dx$$"
    },
    {
      "t": "p",
      "md": "所以还需要**再做一次**分部积分。对右边的积分取 $u=e^{x}$、$dv=\\cos x\\,dx$，则 $du=e^{x}dx$，$v=\\int \\cos x\\,dx=\\sin x$。于是 $$\\int e^{x}\\sin x\\,dx=-e^{x}\\cos x+\\Big(e^{x}\\sin x-\\int e^{x}\\sin x\\,dx\\Big)$$ $$2\\int e^{x}\\sin x\\,dx=-e^{x}\\cos x+e^{x}\\sin x$$ $$\\int e^{x}\\sin x\\,dx=\\frac{e^{x}(\\sin x-\\cos x)}{2}+C$$"
    },
    {
      "t": "h",
      "md": "十一、练习 1.8：$\\int x^{3}\\sqrt{1-x^{2}}\\,dx$"
    },
    {
      "t": "p",
      "md": "由于 $x^{3}\\sqrt{1-x^{2}}=x^{2}\\cdot x\\sqrt{1-x^{2}}$，而 $x\\sqrt{1-x^{2}}$ 容易用代换法积分，故取 $u=x^{2}$、$dv=x\\sqrt{1-x^{2}}\\,dx$。则 $du=2x\\,dx$，$v=\\int x\\sqrt{1-x^{2}}\\,dx=-\\frac{1}{3}(1-x^{2})^{3/2}$，于是 $$\\int x^{3}\\sqrt{1-x^{2}}\\,dx=x^{2}\\Big[-\\frac{1}{3}(1-x^{2})^{3/2}\\Big]-\\int\\Big[-\\frac{1}{3}(1-x^{2})^{3/2}\\Big]2x\\,dx=-\\frac{1}{3}x^{2}(1-x^{2})^{3/2}+\\frac{2}{3}\\int x(1-x^{2})^{3/2}\\,dx$$"
    },
    {
      "t": "p",
      "md": "而 $\\int x(1-x^{2})^{3/2}dx=-\\frac{1}{5}(1-x^{2})^{5/2}$，所以 $$\\int x^{3}\\sqrt{1-x^{2}}\\,dx=-\\frac{1}{3}x^{2}(1-x^{2})^{3/2}-\\frac{2}{15}(1-x^{2})^{5/2}+C$$"
    },
    {
      "t": "h",
      "md": "十二、三角积分：积化和差公式"
    },
    {
      "t": "p",
      "md": "在工程应用中有时会遇到形如 $$\\int \\cos(\\alpha t+\\phi_1)\\cos(\\beta t+\\phi_2)\\,dt$$ 的积分，其中 $\\alpha t+\\phi_1$ 与 $\\beta t+\\phi_2$ 是**不同的角**（例如交流电路中电压与电流相位不同时）。一般地，含「角度不同」的正弦、余弦之积的积分，可以用好用的 [[Product-to-Sum Formulas|积化和差公式]]化简："
    },
    {
      "t": "p",
      "md": "$$\\sin A\\cos B=\\tfrac{1}{2}\\big(\\sin(A+B)+\\sin(A-B)\\big)\\qquad (2)$$ $$\\cos A\\sin B=\\tfrac{1}{2}\\big(\\sin(A+B)-\\sin(A-B)\\big)\\qquad (3)$$ $$\\cos A\\cos B=\\tfrac{1}{2}\\big(\\cos(A+B)+\\cos(A-B)\\big)\\qquad (4)$$ $$\\sin A\\sin B=-\\tfrac{1}{2}\\big(\\cos(A+B)-\\cos(A-B)\\big)\\qquad (5)$$"
    },
    {
      "t": "h",
      "md": "十三、练习 2.1：$\\int 0.5\\sin x\\sin 12x\\,dx$"
    },
    {
      "t": "p",
      "md": "用积化和差公式 (5)，取 $A=x$、$B=12x$： $$\\sin x\\sin 12x=-\\tfrac{1}{2}\\big(\\cos(x+12x)-\\cos(x-12x)\\big)=-\\tfrac{1}{2}(\\cos 13x-\\cos 11x)$$ 这里用了 $\\cos(-11x)=\\cos 11x$。于是 $$\\int 0.5\\sin x\\sin 12x\\,dx=-\\frac{1}{2}\\int\\frac{1}{2}(\\cos 13x-\\cos 11x)\\,dx=-\\frac{1}{52}\\sin 13x+\\frac{1}{44}\\sin 11x+C$$"
    },
    {
      "t": "note",
      "md": "积化和差公式把**正弦之积的积分**变成了**单个余弦的积分**，从而容易积出。被积函数是一个 [[Modulated Wave|调制波]]的例子，常用于电子通信（如无线电广播）：曲线 $y=\\pm 0.5\\sin x$ 构成该调制波的**振幅包络线**。"
    },
    {
      "t": "h",
      "md": "十四、奇次幂的 $\\sin$ 与 $\\cos$"
    },
    {
      "t": "p",
      "md": "有时需要积分**高于二次**的三角函数。对奇次幂 $2n+1$（$n\\ge 1$）的正弦函数，技巧是把 $\\sin^{2}x$ 换成 $1-\\cos^{2}x$： $$\\int \\sin^{2n+1}x\\,dx=\\int(\\sin^{2}x)^{n}\\sin x\\,dx=\\int(1-\\cos^{2}x)^{n}\\sin x\\,dx=\\int p(u)\\,du$$ 其中 $p(u)$ 是关于 $u=\\cos x$ 的多项式，而剩下的那个 $\\sin x$ 正好成为 $du=-\\sin x\\,dx$ 的一部分，最后用幂函数公式对多项式积分即可。"
    },
    {
      "t": "p",
      "md": "**练习 2.2**：求 $\\int \\sin^{3}x\\,dx$。令 $u=\\cos x$，则 $du=-\\sin x\\,dx$： $$\\int \\sin^{3}x\\,dx=\\int(\\sin^{2}x)\\sin x\\,dx=\\int(1-\\cos^{2}x)\\sin x\\,dx=\\int(1-u^{2})(-du)=\\int(u^{2}-1)\\,du=\\frac{1}{3}u^{3}-u+C=\\frac{1}{3}\\cos^{3}x-\\cos x+C$$"
    },
    {
      "t": "p",
      "md": "一般地，$\\int \\sin^{2n+1}x\\,dx$ 会化成关于 $\\cos x$ 的 $2n$ 次多项式。类似地，用 $\\cos^{2}x=1-\\sin^{2}x$ 并以代换 $u=\\sin x$ 来积分 $\\cos x$ 的奇次幂： $$\\int \\cos^{2n+1}x\\,dx=\\int(\\cos^{2}x)^{n}\\cos x\\,dx=\\int(1-\\sin^{2}x)^{n}\\cos x\\,dx=\\int p(u)\\,du$$"
    },
    {
      "t": "note",
      "md": "对于形如 $\\int \\sin^{m}x\\cos^{n}x\\,dx$ 的积分，只要 $m$ 或 $n$ 中有一个是奇数，就可以对**具有奇次幂的那个函数**使用上述技巧。"
    },
    {
      "t": "p",
      "md": "**练习 2.3**：求 $\\int \\sin^{3}x\\cos^{4}x\\,dx$。把 $\\cos^{2}x$ 换成 $1-\\sin^{2}x$，再令 $u=\\sin x$，则 $du=\\cos x\\,dx$： $$\\int \\sin^{3}x\\cos^{4}x\\,dx=\\int \\sin^{3}x(\\cos^{2}x)^{2}\\cos x\\,dx=\\int \\sin^{3}x(1-\\sin^{2}x)^{2}\\cos x\\,dx=\\int u^{3}(1-u^{2})^{2}\\,du$$ $$=\\int(u^{3}-2u^{5}+u^{7})\\,du=\\frac{1}{4}u^{4}-\\frac{1}{3}u^{6}+\\frac{1}{8}u^{8}+C=\\frac{1}{4}\\sin^{4}x-\\frac{1}{3}\\sin^{6}x+\\frac{1}{8}\\sin^{8}x+C$$"
    },
    {
      "t": "h",
      "md": "十五、偶次幂的 $\\sin$ 与 $\\cos$：半角公式"
    },
    {
      "t": "p",
      "md": "对于 $\\sin x$ 或 $\\cos x$ 的**偶次幂**，要把 $\\sin^{2}x$ 或 $\\cos^{2}x$ 分别替换为 $$\\sin^{2}x=\\frac{1-\\cos 2x}{2}\\qquad\\text{或}\\qquad \\cos^{2}x=\\frac{1+\\cos 2x}{2}$$ （可按需要反复使用），然后若出现奇次幂就按前面的办法处理。"
    },
    {
      "t": "p",
      "md": "**练习 2.4**：求 $\\int \\sin^{4}x\\,dx$（把 $\\sin^{2}x$ 换成 $\\frac{1-\\cos 2x}{2}$）： $$\\int \\sin^{4}x\\,dx=\\int\\Big(\\frac{1-\\cos 2x}{2}\\Big)^{2}\\,dx=\\frac{1}{4}\\int(1-2\\cos 2x+\\cos^{2}2x)\\,dx$$ 再用 $\\cos^{2}2x=\\frac{1+\\cos 4x}{2}$： $$=\\frac{1}{4}\\int\\Big(1-2\\cos 2x+\\frac{1+\\cos 4x}{2}\\Big)\\,dx=\\frac{1}{8}\\int(3-4\\cos 2x+\\cos 4x)\\,dx=\\frac{3x}{8}-\\frac{1}{4}\\sin 2x+\\frac{1}{32}\\sin 4x+C$$"
    },
    {
      "t": "h",
      "md": "十六、$\\sec$ 与 $\\tan$（以及 $\\csc$ 与 $\\cot$）的幂次积分"
    },
    {
      "t": "p",
      "md": "对形如 $\\int \\sec^{m}x\\tan^{n}x\\,dx$ 的积分，当 $m$ 为偶数或 $n$ 为奇数时可用类似方法。"
    },
    {
      "t": "p",
      "md": "**$m$ 为偶数**，设 $m=2k+2$：用 $\\sec^{2}x=1+\\tan^{2}x$ 替换 $m$ 个 $\\sec x$ 中除两个以外的所有幂次，再作代换 $u=\\tan x$（$du=\\sec^{2}x\\,dx$），结果化为关于 $u=\\tan x$ 的多项式 $p(u)$ 的积分： $$\\int \\sec^{2k+2}x\\tan^{n}x\\,dx=\\int(\\sec^{2}x)^{k}\\sec^{2}x\\tan^{n}x\\,dx=\\int(1+\\tan^{2}x)^{k}\\tan^{n}x\\sec^{2}x\\,dx=\\int p(u)\\,du$$"
    },
    {
      "t": "p",
      "md": "**$n$ 为奇数**，设 $n=2k+1$：用 $\\tan^{2}x=\\sec^{2}x-1$ 替换 $n$ 个 $\\tan x$ 中除一个以外的所有幂次，再作代换 $u=\\sec x$（$du=\\sec x\\tan x\\,dx$），结果化为关于 $u=\\sec x$ 的多项式 $p(u)$ 的积分： $$\\int \\sec^{m}x\\tan^{2k+1}x\\,dx=\\int \\sec^{m-1}x(\\tan^{2}x)^{k}\\sec x\\tan x\\,dx=\\int \\sec^{m-1}x(\\sec^{2}x-1)^{k}\\sec x\\tan x\\,dx=\\int p(u)\\,du$$"
    },
    {
      "t": "note",
      "md": "对形如 $\\int \\csc^{m}x\\cot^{n}x\\,dx$ 的积分（当 $m$ 为偶数或 $n$ 为奇数时），可用恒等式 $\\csc^{2}x=1+\\cot^{2}x$，模仿上面的做法。"
    },
    {
      "t": "p",
      "md": "**练习 2.5**：求 $\\int \\sec^{4}x\\tan x\\,dx$。对一个 $\\sec^{2}x$ 因子使用 $\\sec^{2}x=1+\\tan^{2}x$，再作代换 $u=\\tan x$（$du=\\sec^{2}x\\,dx$）： $$\\int \\sec^{4}x\\tan x\\,dx=\\int \\sec^{2}x\\sec^{2}x\\tan x\\,dx=\\int(1+\\tan^{2}x)\\tan x\\sec^{2}x\\,dx=\\int(1+u^{2})u\\,du$$ $$=\\int(u+u^{3})\\,du=\\frac{1}{2}u^{2}+\\frac{1}{4}u^{4}+C=\\frac{1}{2}\\tan^{2}x+\\frac{1}{4}\\tan^{4}x+C$$"
    },
    {
      "t": "h",
      "md": "十七、化为正弦与余弦：练习 2.6"
    },
    {
      "t": "p",
      "md": "对某些三角积分，可以试着把一切都用 $\\sin x$ 与 $\\cos x$ 表示。**练习 2.6**：求 $\\displaystyle\\int \\frac{\\cot x}{\\csc^{5}x}\\,dx$。把 $\\cot x$ 与 $\\csc x$ 用 $\\sin x$、$\\cos x$ 表示： $$\\int\\frac{\\cot x}{\\csc^{5}x}\\,dx=\\int\\frac{\\cos x/\\sin x}{1/\\sin^{5}x}\\,dx=\\int \\cos x\\sin^{4}x\\,dx$$ 令 $u=\\sin x$，则 $du=\\cos x\\,dx$： $$=\\int u^{4}\\,du=\\frac{1}{5}u^{5}+C=\\frac{1}{5}\\sin^{5}x+C$$"
    },
    {
      "t": "warn",
      "md": "本讲的两类易错点：**(i)** 分部积分中 $u$ 与 $dv$ 的选择不当会让积分**越算越复杂**（练习 1.2），选择准则只是经验性的，没有万能的规则；**(ii)** 三角积分要先看幂次的奇偶——奇次幂用 $\\sin^{2}x=1-\\cos^{2}x$（或 $\\cos^{2}x=1-\\sin^{2}x$）配合代换，偶次幂必须先降幂为 $\\sin^{2}x=\\frac{1-\\cos 2x}{2}$、$\\cos^{2}x=\\frac{1+\\cos 2x}{2}$，顺序弄反会做不下去。"
    }
  ],
  "terms": [
    [
      "Integration by Parts",
      "分部积分法"
    ],
    [
      "Gamma Function",
      "Gamma 函数"
    ],
    [
      "Product Rule",
      "乘积法则"
    ],
    [
      "Product-to-Sum Formulas",
      "积化和差公式"
    ],
    [
      "Trigonometric Integrals",
      "三角积分"
    ],
    [
      "Improper Integral",
      "广义积分"
    ],
    [
      "Definite Integral",
      "定积分"
    ],
    [
      "Half-Angle Formula",
      "半角公式"
    ],
    [
      "Power Formula",
      "幂函数公式"
    ],
    [
      "Substitution",
      "代换法"
    ],
    [
      "Modulated Wave",
      "调制波"
    ],
    [
      "Amplitude Envelope",
      "振幅包络线"
    ],
    [
      "Closed Form",
      "初等（封闭）形式"
    ],
    [
      "Derivative",
      "导数"
    ],
    [
      "Antiderivative",
      "原函数"
    ],
    [
      "Polynomial",
      "多项式"
    ],
    [
      "Phase",
      "相位"
    ],
    [
      "AC Circuit",
      "交流电路"
    ]
  ],
  "qids": [
    "fin-2-01",
    "fin-2-02",
    "fin-2-03",
    "fin-2-04",
    "fin-2-05",
    "fin-2-06",
    "fin-2-07",
    "fin-2-08",
    "past-2-01",
    "past-2-02"
  ]
});

  /* ---------- L9 第9讲 三角换元、部分分式与半角换元 ---------- */
  T.push({
  "no": "L9",
  "title": "第9讲 三角换元、部分分式与半角换元",
  "titleEn": "Methods of Integration - Trigonometric Substitutions, Partial Fractions, Half-angle Substitution",
  "tags": [
    "trigonometric substitution",
    "partial fractions",
    "half-angle substitution",
    "integration",
    "rational function",
    "complete the square"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "本讲纲要"
    },
    {
      "t": "p",
      "md": "本讲共三节：[[Methods of Integration - Trigonometric Substitutions|三角换元法]]（Trigonometric Substitutions）—— 换元 $u = a\\sin\\theta$、$u = a\\tan\\theta$、$u = a\\sec\\theta$；[[Methods of Integration - Partial Fractions|部分分式法]]（Partial Fractions）—— 把有理函数拆成简单分式之和；[[Methods of Integration - Half-angle Substitution|半角换元]]（Half-angle Substitution）—— 令 $t = \\tan(\\theta/2)$，把 $\\sin\\theta$、$\\cos\\theta$ 的有理式化为 $t$ 的有理式。三者的共同思路都是把**陌生的积分化成熟悉的积分**。"
    },
    {
      "t": "h",
      "md": "一、Methods of Integration - Trigonometric Substitutions（三角换元）"
    },
    {
      "t": "h",
      "md": "1.1 动机：圆面积公式的积分证明"
    },
    {
      "t": "p",
      "md": "几何中最基本的公式之一是半径为 $r$ 的圆面积 $A = \\pi r^2$。该公式的**基于微积分的证明**要用到一个[[definite integral|定积分]]，而这个定积分正是通过[[trigonometric substitution|三角换元]]算出来的。"
    },
    {
      "t": "p",
      "md": "取 $xy$ 平面上以原点 $(0,0)$ 为圆心、半径 $r > 0$ 的圆，其方程为 $x^2 + y^2 = r^2$（见讲义 Figure 1(a)）。圆的上半部分即曲线 $y = \\sqrt{r^2 - x^2}$ 的图像（Figure 1(b)）。"
    },
    {
      "t": "p",
      "md": "由关于 $x$ 轴的**对称性**，圆的面积 $A$ 是上半部分面积的两倍，即"
    },
    {
      "t": "p",
      "md": "$$A = 2\\int_{-r}^{r} \\sqrt{r^2 - x^2}\\,dx$$"
    },
    {
      "t": "p",
      "md": "为了计算该积分，回忆三角函数：圆上任意点可写成 $(x, y) = (r\\cos\\theta, r\\sin\\theta)$，其中角度 $\\theta$（弧度制）满足 $0 \\le \\theta < 2\\pi$。由 Figure 1(b) 可见，当 $x$ 从 $x = -r$ 变到 $x = r$ 时，$\\theta$ 从 $\\theta = \\pi$ 变到 $\\theta = 0$。"
    },
    {
      "t": "p",
      "md": "现令 $x = r\\cos\\theta$，$dx = -r\\sin\\theta\\,d\\theta$，并把积分限由 $x = -r,\\ x = r$ 相应地换成 $\\theta = \\pi,\\ \\theta = 0$："
    },
    {
      "t": "p",
      "md": "$$A = 2\\int_{\\pi}^{0} \\sqrt{r^2 - r^2\\cos^2\\theta}\\,(-r\\sin\\theta)\\,d\\theta = -2r^2\\int_{\\pi}^{0}\\sin^2\\theta\\,d\\theta = 2r^2\\int_{0}^{\\pi}\\sin^2\\theta\\,d\\theta$$"
    },
    {
      "t": "p",
      "md": "再用[[double-angle identity|倍角公式]] $\\sin^2\\theta = \\dfrac{1 - \\cos 2\\theta}{2}$："
    },
    {
      "t": "p",
      "md": "$$A = 2r^2\\int_{0}^{\\pi}\\frac{1 - \\cos 2\\theta}{2}\\,d\\theta = r^2\\left[\\theta - \\frac{1}{2}\\sin 2\\theta\\right]_{0}^{\\pi} = r^2\\left(\\left(\\pi - \\frac{1}{2}\\sin 2\\pi\\right) - \\left(0 - \\frac{1}{2}\\sin 0\\right)\\right) = \\pi r^2$$"
    },
    {
      "t": "h",
      "md": "1.2 一般形式 $\\int \\sqrt{a^2 - u^2}\\,du$ 的推导（Theorem 1.1 与 Theorem 1.2）"
    },
    {
      "t": "p",
      "md": "对一般形式的不定积分 $\\int \\sqrt{a^2 - u^2}\\,du$，用与上面相同的计算，作替换 $u = a\\cos\\theta$、$du = -a\\sin\\theta\\,d\\theta$，可得"
    },
    {
      "t": "p",
      "md": "$$\\int \\sqrt{a^2 - u^2}\\,du = -a^2\\int \\sin^2\\theta\\,d\\theta = -\\frac{a^2\\theta}{2} + \\frac{a^2\\sin 2\\theta}{4} + C$$"
    },
    {
      "t": "p",
      "md": "这个结果仍以 $\\theta$ 表示。要换回变量 $u$，利用 $\\theta = \\cos^{-1}\\left(\\dfrac{u}{a}\\right)$、倍角公式 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$，以及 $\\sqrt{a^2 - u^2} = \\sqrt{a^2\\sin^2\\theta} = a\\sin\\theta$。于是"
    },
    {
      "t": "p",
      "md": "$$\\int \\sqrt{a^2 - u^2}\\,du = -\\frac{a^2}{2}\\cos^{-1}\\left(\\frac{u}{a}\\right) + \\frac{2a^2\\sin\\theta\\cos\\theta}{4} + C = -\\frac{a^2}{2}\\cos^{-1}\\left(\\frac{u}{a}\\right) + \\frac{1}{2}\\,(a\\cos\\theta)\\,(a\\sin\\theta) + C$$"
    },
    {
      "t": "p",
      "md": "这就得到下面两个公式。"
    },
    {
      "t": "note",
      "md": "**Theorem 1.1.** $$\\int \\sqrt{a^2 - u^2}\\,du = -\\frac{a^2}{2}\\cos^{-1}\\left(\\frac{u}{a}\\right) + \\frac{1}{2}u\\sqrt{a^2 - u^2} + C$$"
    },
    {
      "t": "p",
      "md": "讲义把**另一个替换** $u = a\\sin\\theta$ 留作练习，它给出："
    },
    {
      "t": "note",
      "md": "**Theorem 1.2.** $$\\int \\sqrt{a^2 - u^2}\\,du = \\frac{a^2}{2}\\sin^{-1}\\left(\\frac{u}{a}\\right) + \\frac{1}{2}u\\sqrt{a^2 - u^2} + C$$"
    },
    {
      "t": "h",
      "md": "1.3 替换表：三种根式对应三种替换"
    },
    {
      "t": "p",
      "md": "一般地，**当其他方法都不奏效时**，可用下表作为某些类型积分的指引，选取指定的替换并配合相应的三角恒等式："
    },
    {
      "t": "tbl",
      "head": [
        "被积函数含有的项",
        "所用替换",
        "所用三角恒等式"
      ],
      "rows": [
        [
          "$\\sqrt{a^2 - u^2}$",
          "$u = a\\sin\\theta$",
          "$1 - \\sin^2\\theta = \\cos^2\\theta$"
        ],
        [
          "$\\sqrt{a^2 + u^2}$",
          "$u = a\\tan\\theta$",
          "$1 + \\tan^2\\theta = \\sec^2\\theta$"
        ],
        [
          "$\\sqrt{u^2 - a^2}$",
          "$u = a\\sec\\theta$",
          "$\\sec^2\\theta - 1 = \\tan^2\\theta$"
        ]
      ]
    },
    {
      "t": "h",
      "md": "1.4 另外四条基本公式（Theorem 1.3 – 1.5）"
    },
    {
      "t": "p",
      "md": "例如，替换 $u = a\\tan\\theta$ 会导出下面的公式："
    },
    {
      "t": "note",
      "md": "**Theorem 1.3.** $$\\int \\sqrt{a^2 + u^2}\\,du = \\frac{u}{2}\\sqrt{a^2 + u^2} + \\frac{a^2}{2}\\ln\\left|u + \\sqrt{a^2 + u^2}\\right| + C$$"
    },
    {
      "t": "p",
      "md": "类似地，替换 $u = a\\sec\\theta$ 给出："
    },
    {
      "t": "note",
      "md": "**Theorem 1.4.** $$\\int \\sqrt{u^2 - a^2}\\,du = \\frac{u}{2}\\sqrt{u^2 - a^2} - \\frac{a^2}{2}\\ln\\left|u + \\sqrt{u^2 - a^2}\\right| + C$$"
    },
    {
      "t": "p",
      "md": "上述每个公式的证明都需要用到下面这个结果："
    },
    {
      "t": "note",
      "md": "**Theorem 1.5.** $$\\int \\sec^3\\theta\\,d\\theta = \\frac{1}{2}\\left(\\sec\\theta\\tan\\theta + \\ln\\left|\\sec\\theta + \\tan\\theta\\right|\\right) + C$$"
    },
    {
      "t": "warn",
      "md": "**注意**：这些三角替换**即使被积式中没有根号也可以使用**（例如出现 $a^2 + u^2$、$a^2 - u^2$ 这类表达式时）。"
    },
    {
      "t": "h",
      "md": "1.5 Exercise 1.1"
    },
    {
      "t": "p",
      "md": "**Exercise 1.1.** 计算 $\\displaystyle\\int \\sqrt{9 - 4x^2}\\,dx$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.1.** 被积式形如 $\\sqrt{a^2 - u^2}$，其中 $a = 3$、$u = 2x$，故 $du = 2\\,dx$，即 $dx = \\dfrac{1}{2}du$。于是"
    },
    {
      "t": "p",
      "md": "$$\\int \\sqrt{9 - 4x^2}\\,dx = \\frac{1}{2}\\int \\sqrt{a^2 - u^2}\\,du = \\frac{1}{2}\\left(\\frac{a^2}{2}\\sin^{-1}\\left(\\frac{u}{a}\\right) + \\frac{1}{2}u\\sqrt{a^2 - u^2}\\right) + C$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{9}{4}\\sin^{-1}\\left(\\frac{2x}{3}\\right) + \\frac{1}{2}x\\sqrt{9 - 4x^2} + C$$"
    },
    {
      "t": "h",
      "md": "1.6 Exercise 1.2"
    },
    {
      "t": "p",
      "md": "**Exercise 1.2.** 计算 $\\displaystyle\\int \\frac{dx}{(1 + x^2)^2}$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.2.** 注意该积分**不能**用 [[Power Formula|幂函数公式]]通过替换 $u = 1 + x^2$ 求出（想一想为什么？），[[integration by parts|分部积分]]看起来也不可行。因此尝试三角替换。被积式含有 $a^2 + u^2$ 形式的项（其中 $a = 1$、$u = x$），故令 $x = \\tan\\theta$。此时 $dx = \\sec^2\\theta\\,d\\theta$，于是"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{(1 + x^2)^2} = \\int \\frac{\\sec^2\\theta\\,d\\theta}{(1 + \\tan^2\\theta)^2} = \\int \\frac{\\sec^2\\theta\\,d\\theta}{(\\sec^2\\theta)^2} = \\int \\frac{d\\theta}{\\sec^2\\theta} = \\int \\cos^2\\theta\\,d\\theta$$"
    },
    {
      "t": "p",
      "md": "再由倍角恒等式 $\\cos^2\\theta = \\dfrac{1 + \\cos 2\\theta}{2}$ 与 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$："
    },
    {
      "t": "p",
      "md": "$$\\int \\cos^2\\theta\\,d\\theta = \\int \\frac{1 + \\cos 2\\theta}{2}\\,d\\theta = \\frac{\\theta}{2} + \\frac{1}{4}\\sin 2\\theta + C = \\frac{\\theta}{2} + \\frac{1}{2}\\sin\\theta\\cos\\theta + C$$"
    },
    {
      "t": "p",
      "md": "要把 $\\sin\\theta$ 与 $\\cos\\theta$ 用 $x$ 表示，**最简单的办法是画直角三角形**：取角 $\\theta$ 使 $\\tan\\theta = x = \\dfrac{x}{1}$，则斜边由[[Pythagorean Theorem|勾股定理]]为 $\\sqrt{1 + x^2}$，于是可直接读出"
    },
    {
      "t": "p",
      "md": "$$\\sin\\theta = \\frac{x}{\\sqrt{1 + x^2}}, \\qquad \\cos\\theta = \\frac{1}{\\sqrt{1 + x^2}}$$"
    },
    {
      "t": "p",
      "md": "由于 $\\theta = \\tan^{-1}x$，把积分换回 $x$："
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{(1 + x^2)^2} = \\frac{1}{2}\\tan^{-1}x + \\frac{1}{2}\\cdot\\frac{x}{\\sqrt{1 + x^2}}\\cdot\\frac{1}{\\sqrt{1 + x^2}} + C = \\frac{1}{2}\\tan^{-1}x + \\frac{x}{2(1 + x^2)} + C$$"
    },
    {
      "t": "note",
      "md": "**Note.** 另一种把 $\\sin\\theta$、$\\cos\\theta$ 化为 $x$ 的办法是：把 $\\tan\\theta = x$ 代入恒等式 $\\sec^2\\theta = 1 + \\tan^2\\theta$ 解出 $\\cos\\theta$，再用 $\\sin^2\\theta = 1 - \\cos^2\\theta$ 解出 $\\sin\\theta$。"
    },
    {
      "t": "h",
      "md": "1.7 Exercise 1.3（先配方）"
    },
    {
      "t": "p",
      "md": "通过[[completing the square|配方]]，$x$ 的二次表达式可以化成 $a^2 \\pm u^2$ 或 $u^2 - a^2$ 的形式，从而可以使用相应的三角替换。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.3.** 计算 $\\displaystyle\\int \\frac{dx}{(4x^2 + 8x - 5)^{3/2}}$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.3.** 该积分不能用幂函数公式计算，故尝试三角替换。先对 $4x^2 + 8x - 5$ 配方："
    },
    {
      "t": "p",
      "md": "$$4x^2 + 8x - 5 = 4(x^2 + 2x) - 5 = 4(x^2 + 2x + 1) - 5 - 4 = 4(x + 1)^2 - 9$$"
    },
    {
      "t": "p",
      "md": "此表达式形如 $u^2 - a^2$，其中 $u = 2(x + 1)$、$a = 3$。使用替换 $u = a\\sec\\theta$，即 $2(x + 1) = 3\\sec\\theta$。于是 $2\\,dx = 3\\sec\\theta\\tan\\theta\\,d\\theta$，"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{(4x^2 + 8x - 5)^{3/2}} = \\int \\frac{dx}{\\left(4(x + 1)^2 - 9\\right)^{3/2}} = \\int \\frac{\\tfrac{3}{2}\\sec\\theta\\tan\\theta\\,d\\theta}{\\left(9\\sec^2\\theta - 9\\right)^{3/2}} = \\int \\frac{\\tfrac{3}{2}\\sec\\theta\\tan\\theta\\,d\\theta}{\\left(9\\left(\\sec^2\\theta - 1\\right)\\right)^{3/2}}$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{1}{18}\\int \\frac{\\sec\\theta\\tan\\theta}{\\tan^3\\theta}\\,d\\theta = \\frac{1}{18}\\int \\frac{\\sec\\theta}{\\tan^2\\theta}\\,d\\theta = \\frac{1}{18}\\int \\csc\\theta\\cot\\theta\\,d\\theta = -\\frac{1}{18}\\csc\\theta + C$$"
    },
    {
      "t": "p",
      "md": "为把 $\\csc\\theta$ 用 $x$ 表示，画一个角为 $\\theta$ 的直角三角形，使 $\\sec\\theta = \\dfrac{2(x + 1)}{3}$。由勾股定理，$\\theta$ 的**对边**为 $\\sqrt{4x^2 + 8x - 5}$，因此"
    },
    {
      "t": "p",
      "md": "$$\\csc\\theta = \\frac{2(x + 1)}{\\sqrt{4x^2 + 8x - 5}}$$"
    },
    {
      "t": "p",
      "md": "把积分换回 $x$："
    },
    {
      "t": "p",
      "md": "$$-\\frac{1}{18}\\cdot\\frac{2(x + 1)}{\\sqrt{4x^2 + 8x - 5}} + C = -\\frac{x + 1}{9\\sqrt{4x^2 + 8x - 5}} + C$$"
    },
    {
      "t": "note",
      "md": "**Note.** 也可以只用三角恒等式，由已知的 $\\sec\\theta$ 直接求出 $\\csc\\theta$。"
    },
    {
      "t": "h",
      "md": "1.8 练习可能会用到的积分（Theorem 1.6）"
    },
    {
      "t": "p",
      "md": "下列积分对做习题可能有帮助："
    },
    {
      "t": "p",
      "md": "$$(6)\\quad \\int \\tan u\\,du = \\ln\\left|\\sec u\\right| + C$$"
    },
    {
      "t": "p",
      "md": "$$(7)\\quad \\int \\sec u\\,du = \\ln\\left|\\sec u + \\tan u\\right| + C$$"
    },
    {
      "t": "p",
      "md": "$$(8)\\quad \\int \\csc u\\,du = -\\ln\\left|\\csc u + \\cot u\\right| + C$$"
    },
    {
      "t": "h",
      "md": "二、Methods of Integration - Partial Fractions（部分分式）"
    },
    {
      "t": "p",
      "md": "前两节中，一些三角积分是通过各种三角恒等式化简的。对于[[rational function|有理函数]]（多项式的商）的积分，某些代数恒等式（例如 $x^2 - a^2 = (x - a)(x + a)$）在[[partial fractions|部分分式法]]中很有用。这个方法的思想很简单：**把复杂的理函数替换成更容易积分的简单分式之和**。"
    },
    {
      "t": "p",
      "md": "例如，$\\displaystyle\\int \\frac{dx}{x^2 + x}$ 没有现成公式可用，但注意可以写成"
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{x^2 + x} = \\frac{1}{x(x + 1)} = \\frac{1}{x} - \\frac{1}{x + 1}$$"
    },
    {
      "t": "p",
      "md": "这称为 $\\dfrac{1}{x^2 + x}$ 的[[partial fraction decomposition|部分分式分解]]，于是"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{x^2 + x} = \\int \\left(\\frac{1}{x} - \\frac{1}{x + 1}\\right)dx = \\ln|x| - \\ln|x + 1| + C$$"
    },
    {
      "t": "h",
      "md": "2.1 待定系数法的基本操作"
    },
    {
      "t": "p",
      "md": "求这种分解有**系统的方法**。先假设"
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{x(x + 1)} = \\frac{A}{x} + \\frac{B}{x + 1}$$"
    },
    {
      "t": "p",
      "md": "其中 $A$、$B$ 为常数。把右端**通分**（化为[[common denominator|公分母]]）："
    },
    {
      "t": "p",
      "md": "$$\\frac{A(x + 1) + Bx}{x(x + 1)} = \\frac{(A + B)x + A}{x(x + 1)}$$"
    },
    {
      "t": "p",
      "md": "再令两端分子的**对应系数相等**（[[equating coefficients|比较系数]]）来解 $A$、$B$："
    },
    {
      "t": "p",
      "md": "$$\\text{constant term}: A = 1; \\qquad \\text{coefficient of } x: A + B = 0 \\ \\Rightarrow\\ B = -A = -1$$"
    },
    {
      "t": "p",
      "md": "因此 $\\dfrac{1}{x(x + 1)} = \\dfrac{1}{x} - \\dfrac{1}{x + 1}$，与前面一致。"
    },
    {
      "t": "p",
      "md": "部分分式法的一般情形可以讨论并证明其假设（见讲义脚注：Hillman, A.P., and G.L. Alexanderson, *A First Undergraduate Course in Abstract Algebra*, 3rd ed., 1983, Section 5.10），但此处只考虑**最简单的情形——线性因子与二次因子**。在所有情形中都假设：**分子多项式的[[degree of a polynomial|次数]]小于分母多项式的次数**。"
    },
    {
      "t": "h",
      "md": "2.2 Case 1：互不相同的线性因子"
    },
    {
      "t": "note",
      "md": "**Case 1 - [[distinct linear factors|Distinct linear factors]].** 设有理函数 $\\dfrac{p(x)}{q(x)}$ 满足 $\\deg(p(x)) < \\deg(q(x))$，且 $q(x)$ 是 $n \\ge 1$ 个**互不相同**线性因子之积 $$q(x) = (a_1x + b_1)(a_2x + b_2)\\cdots(a_nx + b_n),$$ 则它可写成部分分式之和 $$\\frac{p(x)}{q(x)} = \\frac{A_1}{a_1x + b_1} + \\frac{A_2}{a_2x + b_2} + \\cdots + \\frac{A_n}{a_nx + b_n},$$ 其中 $A_1, A_2, \\dots, A_n$ 为常数。这些常数可通过**右端通分、再令两端分子对应系数相等**求出。"
    },
    {
      "t": "h",
      "md": "2.3 Exercise 2.1"
    },
    {
      "t": "p",
      "md": "**Exercise 2.1.** 计算 $\\displaystyle\\int \\frac{dx}{x^2 - 7x + 10}$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.1.** 因为 $x^2 - 7x + 10 = (x - 2)(x - 5)$，故设"
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{x^2 - 7x + 10} = \\frac{1}{(x - 2)(x - 5)} = \\frac{A}{x - 2} + \\frac{B}{x - 5} = \\frac{(A + B)x + (-5A - 2B)}{(x - 2)(x - 5)}$$"
    },
    {
      "t": "p",
      "md": "于是"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x: A + B = 0 \\ \\Rightarrow\\ B = -A; \\qquad \\text{constant term}: -5A - 2B = 1$$"
    },
    {
      "t": "p",
      "md": "$$\\Rightarrow\\ -5A + 2A = 1 \\ \\Rightarrow\\ A = -\\frac{1}{3}, \\qquad B = \\frac{1}{3}$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{x^2 - 7x + 10} = \\int \\frac{1}{3}\\left(\\frac{1}{x - 5} - \\frac{1}{x - 2}\\right)dx = \\frac{1}{3}\\ln|x - 5| - \\frac{1}{3}\\ln|x - 2| + C$$"
    },
    {
      "t": "h",
      "md": "2.4 Case 2：一个重复线性因子 + 互不相同的线性因子"
    },
    {
      "t": "note",
      "md": "**Case 2 - One [[repeated linear factor|repeated linear factor]] + distinct linear factors.** 设有理函数 $\\dfrac{p(x)}{q(x)}$ 满足 $\\deg(p(x)) < \\deg(q(x))$，$q(x)$ 由 $n \\ge 1$ 个互不相同的线性因子与**一个重复 $m \\ge 1$ 次的线性因子**组成 $$q(x) = (ax + b)^m(a_1x + b_1)(a_2x + b_2)\\cdots(a_nx + b_n),$$ 则 $$\\frac{p(x)}{q(x)} = \\frac{A_1}{ax + b} + \\frac{A_2}{(ax + b)^2} + \\cdots + \\frac{A_m}{(ax + b)^m} + \\frac{B_1}{a_1x + b_1} + \\cdots + \\frac{B_n}{a_nx + b_n},$$ 其中 $A_1, \\dots, A_m$ 与 $B_1, \\dots, B_n$ 为常数，求解方法与 Case 1 相同。"
    },
    {
      "t": "h",
      "md": "2.5 Exercise 2.2"
    },
    {
      "t": "p",
      "md": "**Exercise 2.2.** 计算 $\\displaystyle\\int \\frac{x^2 + x - 1}{x^3 + x^2}\\,dx$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.2.** 因为 $x^3 + x^2 = x^2(x + 1)$，故设"
    },
    {
      "t": "p",
      "md": "$$\\frac{x^2 + x - 1}{x^3 + x^2} = \\frac{x^2 + x - 1}{x^2(x + 1)} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x + 1}$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{Ax(x + 1) + B(x + 1) + Cx^2}{x^2(x + 1)} = \\frac{(A + C)x^2 + (A + B)x + B}{x^2(x + 1)}$$"
    },
    {
      "t": "p",
      "md": "于是"
    },
    {
      "t": "p",
      "md": "$$\\text{constant term}: B = -1; \\qquad \\text{coefficient of } x: A + B = 1 \\ \\Rightarrow\\ A = 1 - B = 2$$"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x^2: A + C = 1 \\ \\Rightarrow\\ C = 1 - A = -1$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{x^2 + x - 1}{x^3 + x^2}\\,dx = \\int \\left(\\frac{2}{x} - \\frac{1}{x^2} - \\frac{1}{x + 1}\\right)dx = 2\\ln|x| + \\frac{1}{x} - \\ln|x + 1| + C_0$$"
    },
    {
      "t": "p",
      "md": "（$C_0$ 为一般常数。）"
    },
    {
      "t": "h",
      "md": "2.6 Exercise 2.3（两个重复因子）"
    },
    {
      "t": "p",
      "md": "Case 2 可以推广到**多于一个重复因子**的情形——此时部分分式分解会含有更多与第一个重复因子类似的项。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.3.** 计算 $\\displaystyle\\int \\frac{dx}{x^2(x + 1)^2}$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.3.** 把 Case 2 推广到两个重复因子："
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{x^2(x + 1)^2} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x + 1} + \\frac{D}{(x + 1)^2}$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{Ax(x + 1)^2 + B(x + 1)^2 + Cx(x + 1) + Dx^2}{x^2(x + 1)^2} = \\frac{(A + C)x^3 + (2A + B + C + D)x^2 + (A + 2B)x + B}{x^2(x + 1)^2}$$"
    },
    {
      "t": "p",
      "md": "于是"
    },
    {
      "t": "p",
      "md": "$$\\text{constant term}: B = 1; \\qquad \\text{coefficient of } x: A + 2B = 0 \\ \\Rightarrow\\ A = -2B = -2$$"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x^3: A + C = 0 \\ \\Rightarrow\\ C = -A = 2; \\qquad \\text{coefficient of } x^2: 2A + B + C + D = 0 \\ \\Rightarrow\\ D = -2A - B - C = 1$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{x^2(x + 1)^2} = \\int \\left(-\\frac{2}{x} + \\frac{1}{x^2} + \\frac{2}{x + 1} + \\frac{1}{(x + 1)^2}\\right)dx = -2\\ln|x| - \\frac{1}{x} + 2\\ln|x + 1| - \\frac{1}{x + 1} + C_0$$"
    },
    {
      "t": "p",
      "md": "（$C_0$ 为一般常数。）"
    },
    {
      "t": "h",
      "md": "2.7 Case 3：互不相同的二次因子"
    },
    {
      "t": "p",
      "md": "二次因子的部分分式分解与线性因子的类似，只是每个分式的**分子可以含一次项**。形如 $ax^2 + bx + c$ 的因子只有**不能**分解为线性因子之积（即**无实根**）且 $a \\neq 0$ 时，才算作[[quadratic factor|二次因子]]。"
    },
    {
      "t": "note",
      "md": "**Case 3 - Distinct quadratic factors.** 设有理函数 $\\dfrac{p(x)}{q(x)}$ 满足 $\\deg(p(x)) < \\deg(q(x))$，且 $q(x)$ 是 $n \\ge 1$ 个**互不相同**的二次因子之积 $$q(x) = (a_1x^2 + b_1x + c_1)(a_2x^2 + b_2x + c_2)\\cdots(a_nx^2 + b_nx + c_n),$$ 则 $$\\frac{p(x)}{q(x)} = \\frac{A_1x + B_1}{a_1x^2 + b_1x + c_1} + \\frac{A_2x + B_2}{a_2x^2 + b_2x + c_2} + \\cdots + \\frac{A_nx + B_n}{a_nx^2 + b_nx + c_n},$$ 其中 $A_1, \\dots, A_n$ 与 $B_1, \\dots, B_n$ 为常数，求解方法与 Case 1 相同。"
    },
    {
      "t": "h",
      "md": "2.8 Exercise 2.4"
    },
    {
      "t": "p",
      "md": "**Exercise 2.4.** 计算 $\\displaystyle\\int \\frac{dx}{(x^2 + 1)(x^2 + 4)}$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.4.** $x^2 + 1$ 与 $x^2 + 4$ 都没有实根，故按 Case 3 设"
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{(x^2 + 1)(x^2 + 4)} = \\frac{Ax + B}{x^2 + 1} + \\frac{Cx + D}{x^2 + 4}$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{(Ax + B)(x^2 + 4) + (Cx + D)(x^2 + 1)}{(x^2 + 1)(x^2 + 4)} = \\frac{(A + C)x^3 + (B + D)x^2 + (4A + C)x + (4B + D)}{(x^2 + 1)(x^2 + 4)}$$"
    },
    {
      "t": "p",
      "md": "于是"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x^3: A + C = 0 \\ \\Rightarrow\\ C = -A; \\qquad \\text{coefficient of } x^2: B + D = 0 \\ \\Rightarrow\\ D = -B$$"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x: 4A + C = 0 \\ \\Rightarrow\\ 4A - A = 0 \\ \\Rightarrow\\ A = 0 \\ (\\text{从而 } C = 0)$$"
    },
    {
      "t": "p",
      "md": "$$\\text{constant term}: 4B + D = 1 \\ \\Rightarrow\\ 4B - B = 1 \\ \\Rightarrow\\ B = \\frac{1}{3}, \\quad D = -\\frac{1}{3}$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{(x^2 + 1)(x^2 + 4)} = \\frac{1}{3}\\int \\left(\\frac{1}{x^2 + 1} - \\frac{1}{x^2 + 4}\\right)dx = \\frac{1}{3}\\tan^{-1}x - \\frac{1}{6}\\tan^{-1}\\left(\\frac{x}{2}\\right) + C$$"
    },
    {
      "t": "p",
      "md": "（最后一步用了 $\\displaystyle\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a} + C$ 这一公式。）"
    },
    {
      "t": "h",
      "md": "2.9 Case 4：一个重复二次因子 + 互不相同的二次因子"
    },
    {
      "t": "note",
      "md": "**Case 4 - One repeated quadratic factor + distinct quadratic factors.** 设有理函数 $\\dfrac{p(x)}{q(x)}$ 满足 $\\deg(p(x)) < \\deg(q(x))$，$q(x)$ 由 $n \\ge 1$ 个互不相同的二次因子与**一个重复 $m \\ge 1$ 次的二次因子**组成 $$q(x) = (ax^2 + bx + c)^m(a_1x^2 + b_1x + c_1)\\cdots(a_nx^2 + b_nx + c_n),$$ 则 $$\\frac{p(x)}{q(x)} = \\frac{A_1x + B_1}{ax^2 + bx + c} + \\cdots + \\frac{A_mx + B_m}{(ax^2 + bx + c)^m} + \\frac{C_1x + D_1}{a_1x^2 + b_1x + c_1} + \\cdots + \\frac{C_nx + D_n}{a_nx^2 + b_nx + c_n},$$ 其中系数 $A_1, \\dots, A_m$、$B_1, \\dots, B_m$、$C_1, \\dots, C_n$、$D_1, \\dots, D_n$ 的求解方法与 Case 1 相同。**重复二次因子的处理方式与重复线性因子相同。**"
    },
    {
      "t": "h",
      "md": "2.10 Exercise 2.5"
    },
    {
      "t": "p",
      "md": "**Exercise 2.5.** 计算 $\\displaystyle\\int \\frac{dx}{(x^2 + 1)^2(x^2 + 4)}$。"
    },
    {
      "t": "p",
      "md": "**Solution 2.5.** $x^2 + 1$ 与 $x^2 + 4$ 都没有实根，而 $x^2 + 1$ 是重复因子，故按 Case 4 设"
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{(x^2 + 1)^2(x^2 + 4)} = \\frac{Ax + B}{x^2 + 1} + \\frac{Cx + D}{(x^2 + 1)^2} + \\frac{Ex + F}{x^2 + 4}$$"
    },
    {
      "t": "p",
      "md": "通分后分子为"
    },
    {
      "t": "p",
      "md": "$$(Ax + B)(x^2 + 1)(x^2 + 4) + (Cx + D)(x^2 + 4) + (Ex + F)(x^2 + 1)^2$$"
    },
    {
      "t": "p",
      "md": "展开右端得"
    },
    {
      "t": "p",
      "md": "$$(A + E)x^5 + (B + F)x^4 + (5A + C + 2E)x^3 + (5B + D + 2F)x^2 + (4A + 4C + E)x + (4B + 4D + F)$$"
    },
    {
      "t": "p",
      "md": "比较两端系数："
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x^5: A + E = 0 \\Rightarrow E = -A; \\qquad \\text{coefficient of } x^4: B + F = 0 \\Rightarrow F = -B$$"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x^3: 5A + C + 2E = 0 \\Rightarrow 5A + C - 2A = 0 \\Rightarrow C = -3A$$"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x^2: 5B + D + 2F = 0 \\Rightarrow 5B + D - 2B = 0 \\Rightarrow D = -3B$$"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } x: 4A + 4C + E = 0 \\Rightarrow 4A - 12A - A = 0 \\Rightarrow A = 0 \\Rightarrow C = 0,\\ E = 0$$"
    },
    {
      "t": "p",
      "md": "$$\\text{constant term}: 4B + 4D + F = 1 \\Rightarrow 4B - 12B - B = 1 \\Rightarrow B = -\\frac{1}{9} \\Rightarrow D = \\frac{1}{3},\\ F = \\frac{1}{9}$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$\\frac{1}{(x^2 + 1)^2(x^2 + 4)} = \\frac{1}{9}\\cdot\\frac{1}{(x^2 + 1)^2} - \\frac{1}{9}\\cdot\\frac{1}{x^2 + 1} - \\frac{1}{9}\\cdot\\frac{1}{x^2 + 4}$$"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{dx}{(x^2 + 1)^2(x^2 + 4)} = \\frac{1}{9}\\int \\frac{dx}{(x^2 + 1)^2} - \\frac{1}{9}\\int \\frac{dx}{x^2 + 1} - \\frac{1}{9}\\int \\frac{dx}{x^2 + 4}$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{1}{9}\\left(\\frac{1}{2}\\tan^{-1}x + \\frac{x}{2(x^2 + 1)}\\right) - \\frac{1}{9}\\tan^{-1}x - \\frac{1}{18}\\tan^{-1}\\left(\\frac{x}{2}\\right) + C_0$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{x}{18(x^2 + 1)} - \\frac{1}{18}\\tan^{-1}\\left(\\frac{x}{2}\\right) + C_0$$"
    },
    {
      "t": "note",
      "md": "其中 $\\displaystyle\\int \\frac{dx}{(x^2 + 1)^2} = \\frac{1}{2}\\tan^{-1}x + \\frac{x}{2(x^2 + 1)} + C$ 正是 Exercise 1.2 的结果；注意 $\\dfrac{1}{18}\\tan^{-1}x$ 与 $-\\dfrac{1}{9}\\tan^{-1}x$ 相消。"
    },
    {
      "t": "h",
      "md": "2.11 分子次数不小于分母次数时的处理"
    },
    {
      "t": "p",
      "md": "当有理函数的分子次数**大于**分母次数时，用**分子除以分母**（长除法），可把原式写成「一个多项式 + 一个新的有理函数」，而这个新的有理函数可能满足 Case 1–4 的条件。当分子与分母次数**相同**时，用下面这样的技巧可能更方便："
    },
    {
      "t": "p",
      "md": "$$\\frac{x^2 + 2}{x^2 + 3x + 2} = \\frac{(x^2 + 3x + 2) - 3x}{(x + 1)(x + 2)} = 1 - \\frac{3x}{(x + 1)(x + 2)}$$"
    },
    {
      "t": "p",
      "md": "右端最后一个有理函数即可用部分分式法积分。"
    },
    {
      "t": "h",
      "md": "三、Methods of Integration - Half-angle Substitution（半角换元）"
    },
    {
      "t": "p",
      "md": "回忆三角替换 $x = r\\cos\\phi$（或其姊妹替换 $x = r\\sin\\phi$）是由求半径为 $r$ 的圆面积所启发的。为简化起见，令 $r = 1$，于是**[[unit circle|单位圆]]**上的点可以通过该替换与角度 $\\theta$ 一一对应（$\\theta$ 见讲义 Figure 2(a)）。"
    },
    {
      "t": "h",
      "md": "3.1 用斜率识别单位圆上的点"
    },
    {
      "t": "p",
      "md": "Figure 2(b) 给出了另一种识别单位圆上点的方式——**用斜率识别**，这将成为本节[[half-angle substitution|半角换元]]的基础。"
    },
    {
      "t": "p",
      "md": "设 $A$ 为点 $(-1, 0)$。对单位圆上任何其他点 $P$，从 $A$ 出发作过 $P$ 的直线，直到它与直线 $x = 1$ 相交（见讲义 Figure 3）："
    },
    {
      "t": "p",
      "md": "$$t = \\tan\\left(\\frac{\\theta}{2}\\right) = \\text{直线 } AP \\text{ 的斜率}$$"
    },
    {
      "t": "p",
      "md": "讲义 Figure 3(a) 对应 $0 \\le \\theta \\le \\dfrac{\\pi}{2}$，Figure 3(b) 对应 $\\dfrac{\\pi}{2} < \\theta < \\pi$。"
    },
    {
      "t": "h",
      "md": "3.2 换元公式的推导"
    },
    {
      "t": "p",
      "md": "令 $t = \\tan\\dfrac{\\theta}{2}$。有"
    },
    {
      "t": "p",
      "md": "$$\\sin\\frac{\\theta}{2} = \\frac{t}{\\sqrt{1 + t^2}}, \\qquad \\cos\\frac{\\theta}{2} = \\frac{1}{\\sqrt{1 + t^2}}$$"
    },
    {
      "t": "p",
      "md": "于是由正弦、余弦的[[double-angle identity|倍角公式]]："
    },
    {
      "t": "p",
      "md": "$$\\sin\\theta = 2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2} = 2\\cdot\\frac{t}{\\sqrt{1 + t^2}}\\cdot\\frac{1}{\\sqrt{1 + t^2}} = \\frac{2t}{1 + t^2}$$"
    },
    {
      "t": "p",
      "md": "$$\\cos\\theta = \\cos^2\\frac{\\theta}{2} - \\sin^2\\frac{\\theta}{2} = \\frac{1}{1 + t^2} - \\frac{t^2}{1 + t^2} = \\frac{1 - t^2}{1 + t^2}$$"
    },
    {
      "t": "p",
      "md": "又因为 $\\theta = 2\\tan^{-1}t$，所以"
    },
    {
      "t": "p",
      "md": "$$d\\theta = d\\left(2\\tan^{-1}t\\right) = \\frac{2\\,dt}{1 + t^2}$$"
    },
    {
      "t": "h",
      "md": "3.3 半角换元总结"
    },
    {
      "t": "note",
      "md": "**Half-angle Substitution.** 替换 $t = \\tan\\dfrac{\\theta}{2}$ 给出 $$\\sin\\theta = \\frac{2t}{1 + t^2}, \\qquad \\cos\\theta = \\frac{1 - t^2}{1 + t^2}, \\qquad d\\theta = \\frac{2\\,dt}{1 + t^2}$$"
    },
    {
      "t": "p",
      "md": "半角换元由此把 $\\sin\\theta$ 与 $\\cos\\theta$ 的**有理函数**化为 $t$ 的**有理函数**，后者可用部分分式或别的方法积分。"
    },
    {
      "t": "h",
      "md": "3.4 Exercise 3.1"
    },
    {
      "t": "p",
      "md": "**Exercise 3.1.** 计算 $\\displaystyle\\int \\frac{d\\theta}{1 + \\sin\\theta + \\cos\\theta}$。"
    },
    {
      "t": "p",
      "md": "**Solution 3.1.** 令 $t = \\tan\\dfrac{\\theta}{2}$，被积函数的分母为"
    },
    {
      "t": "p",
      "md": "$$1 + \\sin\\theta + \\cos\\theta = 1 + \\frac{2t}{1 + t^2} + \\frac{1 - t^2}{1 + t^2} = \\frac{2t + 2}{1 + t^2}$$"
    },
    {
      "t": "p",
      "md": "于是"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{d\\theta}{1 + \\sin\\theta + \\cos\\theta} = \\int \\frac{\\dfrac{2\\,dt}{1 + t^2}}{\\dfrac{2t + 2}{1 + t^2}} = \\int \\frac{dt}{t + 1} = \\ln|t + 1| + C = \\ln\\left|\\tan\\frac{\\theta}{2} + 1\\right| + C$$"
    },
    {
      "t": "h",
      "md": "3.5 Exercise 3.2"
    },
    {
      "t": "p",
      "md": "**Exercise 3.2.** 计算 $\\displaystyle\\int \\frac{d\\theta}{3\\sin\\theta + 4\\cos\\theta}$。"
    },
    {
      "t": "p",
      "md": "**Solution 3.2.** 令 $t = \\tan\\dfrac{\\theta}{2}$，积分变为"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{d\\theta}{3\\sin\\theta + 4\\cos\\theta} = \\int \\frac{\\dfrac{2\\,dt}{1 + t^2}}{3\\cdot\\dfrac{2t}{1 + t^2} + 4\\cdot\\dfrac{1 - t^2}{1 + t^2}} = \\int \\frac{2\\,dt}{-2t^2 + 3t + 2}$$"
    },
    {
      "t": "p",
      "md": "$$= \\int \\frac{2\\,dt}{(2t + 1)(t - 2)} = \\int \\left(\\frac{A}{2t + 1} + \\frac{B}{t - 2}\\right)dt$$"
    },
    {
      "t": "p",
      "md": "其中待定系数满足"
    },
    {
      "t": "p",
      "md": "$$\\text{coefficient of } t: A + 2B = 0 \\ \\Rightarrow\\ A = -2B; \\qquad \\text{constant term}: -2A + B = -1$$"
    },
    {
      "t": "p",
      "md": "$$\\Rightarrow\\ 4B + B = -1 \\ \\Rightarrow\\ B = -\\frac{1}{5}, \\qquad A = \\frac{2}{5}$$"
    },
    {
      "t": "p",
      "md": "因此"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{d\\theta}{3\\sin\\theta + 4\\cos\\theta} = \\int \\left(\\frac{2/5}{2t + 1} - \\frac{1/5}{t - 2}\\right)dt = \\frac{1}{5}\\ln|2t + 1| - \\frac{1}{5}\\ln|t - 2| + C$$"
    },
    {
      "t": "p",
      "md": "$$= \\frac{1}{5}\\ln\\left|2\\tan\\frac{\\theta}{2} + 1\\right| - \\frac{1}{5}\\ln\\left|\\tan\\frac{\\theta}{2} - 2\\right| + C$$"
    },
    {
      "t": "h",
      "md": "3.6 半角恒等式（Theorem 3.1）"
    },
    {
      "t": "p",
      "md": "由半角换元 $t = \\tan\\dfrac{\\theta}{2}$："
    },
    {
      "t": "p",
      "md": "$$\\frac{\\sin\\theta}{1 + \\cos\\theta} = \\frac{\\dfrac{2t}{1 + t^2}}{1 + \\dfrac{1 - t^2}{1 + t^2}} = \\frac{\\dfrac{2t}{1 + t^2}}{\\dfrac{2}{1 + t^2}} = t$$"
    },
    {
      "t": "p",
      "md": "由此得到有用的[[half-angle identity|半角恒等式]]："
    },
    {
      "t": "note",
      "md": "**Theorem 3.1.** $$\\tan\\frac{\\theta}{2} = \\frac{\\sin\\theta}{1 + \\cos\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta}$$"
    },
    {
      "t": "p",
      "md": "（讲义脚注给出另一种推导：Corral, M., *Trigonometry*, http://mecmath.net/trig/, 2009, pp. 79–80。）"
    },
    {
      "t": "h",
      "md": "3.7 Exercise 3.3"
    },
    {
      "t": "p",
      "md": "**Exercise 3.3.** 计算 $\\displaystyle\\int \\frac{\\sin\\theta}{1 + \\cos\\theta}\\,d\\theta$。"
    },
    {
      "t": "p",
      "md": "**Solution 3.3.** 虽然也可以用半角换元 $t = \\tan\\dfrac{\\theta}{2}$，但**直接使用半角恒等式 (9) 更简单**，因为"
    },
    {
      "t": "p",
      "md": "$$\\int \\frac{\\sin\\theta}{1 + \\cos\\theta}\\,d\\theta = \\int \\tan\\frac{\\theta}{2}\\,d\\theta = 2\\ln\\left|\\sec\\frac{\\theta}{2}\\right| + C$$"
    },
    {
      "t": "p",
      "md": "（用到了第 6.3 节的公式 (6)。）"
    },
    {
      "t": "h",
      "md": "本讲小结"
    },
    {
      "t": "tbl",
      "head": [
        "方法",
        "适用对象",
        "关键操作"
      ],
      "rows": [
        [
          "三角换元",
          "被积式含 $\\sqrt{a^2 - u^2}$、$\\sqrt{a^2 + u^2}$、$\\sqrt{u^2 - a^2}$",
          "分别令 $u = a\\sin\\theta$、$u = a\\tan\\theta$、$u = a\\sec\\theta$；二次式先配方；结果画直角三角形换回原变量"
        ],
        [
          "部分分式",
          "有理函数 $\\dfrac{p(x)}{q(x)}$（$\\deg p < \\deg q$）",
          "按 Case 1–4 设分解式，通分后令系数相等求常数；分子次数不够低时先做除法"
        ],
        [
          "半角换元",
          "$\\sin\\theta$、$\\cos\\theta$ 的有理函数",
          "令 $t = \\tan\\dfrac{\\theta}{2}$，化为 $t$ 的有理函数后用部分分式"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "**易错点**：（1）换回原变量时不要漏掉常数因子，三角替换的结果必须以 $x$（或 $u$）表示；（2）Case 3、Case 4 中**二次因子的分子要写成一次式 $Ax + B$**，不能只写常数；（3）重复因子必须**逐次列出**（如 $\\dfrac{A}{x} + \\dfrac{B}{x^2}$）；（4）用半角换元算出结果后，别忘了最后把 $t$ 换回 $\\tan\\dfrac{\\theta}{2}$。"
    }
  ],
  "terms": [
    [
      "trigonometric substitution",
      "三角换元"
    ],
    [
      "partial fractions",
      "部分分式"
    ],
    [
      "partial fraction decomposition",
      "部分分式分解"
    ],
    [
      "half-angle substitution",
      "半角换元"
    ],
    [
      "rational function",
      "有理函数"
    ],
    [
      "distinct linear factors",
      "互不相同的线性因子"
    ],
    [
      "repeated linear factor",
      "重复线性因子"
    ],
    [
      "quadratic factor",
      "二次因子"
    ],
    [
      "definite integral",
      "定积分"
    ],
    [
      "double-angle identity",
      "倍角公式"
    ],
    [
      "half-angle identity",
      "半角恒等式"
    ],
    [
      "completing the square",
      "配方"
    ],
    [
      "Power Formula",
      "幂函数公式"
    ],
    [
      "integration by parts",
      "分部积分"
    ],
    [
      "Pythagorean Theorem",
      "勾股定理"
    ],
    [
      "unit circle",
      "单位圆"
    ],
    [
      "degree of a polynomial",
      "多项式的次数"
    ],
    [
      "equating coefficients",
      "比较系数"
    ],
    [
      "common denominator",
      "公分母"
    ]
  ],
  "qids": [
    "mp-4-05",
    "mp-5-03"
  ]
});

  /* ---------- L10 第10讲 积分的几何应用 ---------- */
  T.push({
  "no": "L10",
  "title": "第10讲 积分的几何应用",
  "titleEn": "Area Between Curves, Average Value of a Function, Arc Length, Solids of Revolution",
  "tags": [
    "area between curves",
    "average value of a function",
    "arc length",
    "solid of revolution",
    "disc method",
    "shell method",
    "volume"
  ],
  "blocks": [
    {
      "t": "h",
      "md": "本讲纲要"
    },
    {
      "t": "p",
      "md": "本讲讲**积分的几何应用**，共四个主题：一、[[Area Between Curves|曲线之间的面积]]；二、[[Average Value of a Function|函数的平均值]]；三、[[Arc Length|弧长]]；四、[[Solids of Revolution|旋转体]]（[[disc method|圆盘法]]与 [[shell method|柱壳法]]）。"
    },
    {
      "t": "h",
      "md": "一、Area Between Curves（曲线之间的面积）"
    },
    {
      "t": "p",
      "md": "Lecture 6 中定义的「曲线下方的面积」——曲线 $y=f(x)$ 之下、$x$ 轴之上、某区间之上的面积——只是**两曲线之间面积**的一个特例。一般情形下，一条曲线 $y=f_1(x)$ 未必在整个区间 $[a,b]$ 上都不低于另一条曲线 $y=f_2(x)$（见讲义 Figure 1，区间为 $[a,b]$）。"
    },
    {
      "t": "p",
      "md": "区域面积 $A$ 不可能是负数，因此区域内典型的无穷小面积元 $dA$ 形如 $h(x)\\,dx$，其中**高度函数**（[[height function|高度函数]]）$h(x)$ 是两条曲线 $y$ 坐标之差的非负值：$h(x)=\\left|f_1(x)-f_2(x)\\right|$。"
    },
    {
      "t": "p",
      "md": "$$dA = h(x)\\,dx = \\left|f_1(x) - f_2(x)\\right|dx$$"
    },
    {
      "t": "note",
      "md": "**Theorem 1.1**：设两条曲线 $y=f_1(x)$ 与 $y=f_2(x)$ 定义在区间 $[a,b]$ 上，则它们之间的面积 $A$ 为（公式 (1)）\n\n$$A = \\int_a^b \\left|f_1(x) - f_2(x)\\right|dx \\qquad (1)$$"
    },
    {
      "t": "p",
      "md": "区间 $[a,b]$ 可以换成**任何使该积分有定义的区间**——有限或无限均可；而且两条曲线**都不要求位于 $x$ 轴上方**。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.1** 求 $y=e^{x}$ 与 $y=e^{-x}$ 在 $[0,2]$ 之间所围区域的面积。"
    },
    {
      "t": "p",
      "md": "**Solution 1.1** 在 $[0,2]$ 上 $e^{x}\\ge e^{-x}$，故该区域的高度函数为 $h(x)=\\left|e^{x}-e^{-x}\\right|=e^{x}-e^{-x}$，于是"
    },
    {
      "t": "p",
      "md": "$$A = \\int_0^2 \\left(e^{x} - e^{-x}\\right)dx = \\left[e^{x} + e^{-x}\\right]_0^2 = e^{2} + e^{-2} - (1+1) = e^{2} + e^{-2} - 2$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.2** 求由 $y=x^{2}$ 与 $y=x$ 围成的区域面积。"
    },
    {
      "t": "p",
      "md": "**Solution 1.2** 「bounded（有界）」区域总是指面积为**有限**的区域，以区别于无界区域。曲线 $y=x^{2}$ 与 $y=x$ 交于 $x=0$ 与 $x=1$，在 $0\\le x\\le 1$ 上 $x\\ge x^{2}$，故 $h(x)=\\left|x-x^{2}\\right|=x-x^{2}$，于是"
    },
    {
      "t": "p",
      "md": "$$A = \\int_0^1 \\left(x - x^{2}\\right)dx = \\left[\\frac{x^{2}}{2} - \\frac{x^{3}}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.3** 求由 $y=\\sin x$ 与 $y=\\cos x$ 在 $\\left[0,\\frac{\\pi}{3}\\right]$ 上围成的区域面积。"
    },
    {
      "t": "p",
      "md": "**Solution 1.3** 两曲线交于 $x=\\frac{\\pi}{4}$：在 $0\\le x\\le \\frac{\\pi}{4}$ 上 $\\cos x\\ge \\sin x$，而在 $\\frac{\\pi}{4}\\le x\\le \\frac{\\pi}{3}$ 上 $\\sin x\\ge \\cos x$，因此面积必须**拆成两个积分**："
    },
    {
      "t": "p",
      "md": "$$A = \\int_0^{\\pi/3}\\left|\\sin x - \\cos x\\right|dx = \\int_0^{\\pi/4}\\left(\\cos x - \\sin x\\right)dx + \\int_{\\pi/4}^{\\pi/3}\\left(\\sin x - \\cos x\\right)dx = \\frac{4\\sqrt{2} - 3 - \\sqrt{3}}{2}$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.4** 求由 $y=6-x^{2}$、$y=x$ 与 $y=-5x$ 在 $x$ 轴上方围成的区域面积。"
    },
    {
      "t": "p",
      "md": "**Solution 1.4** 在 $x$ 轴上方，曲线 $y=6-x^{2}$ 与直线 $y=x$ 交于 $x=2$，与直线 $y=-5x$ 交于 $x=-1$。由于在 $[-1,0]$ 上 $6-x^{2}\\ge -5x$，在 $[0,2]$ 上 $6-x^{2}\\ge x$，面积同样要拆成两个积分："
    },
    {
      "t": "p",
      "md": "$$A = \\int_{-1}^{0}\\left[(6-x^{2}) - (-5x)\\right]dx + \\int_0^2\\left[(6-x^{2}) - x\\right]dx = \\int_{-1}^{0}\\left(6+5x-x^{2}\\right)dx + \\int_0^2\\left(6-x-x^{2}\\right)dx = \\frac{21}{2}$$"
    },
    {
      "t": "p",
      "md": "公式 (1) 可以推广到**任意多条曲线**之间的面积：按不同的高度函数把积分拆到各个子区间上即可。另外，对某些区域，把 $x$ 与 $y$ 的角色互换会更方便——不用竖直的高度函数，而用水平的**宽度函数** $w(y)$（[[width function|宽度函数]]）。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.5** 求由 $x=y^{2}-2$ 与 $y=x$ 围成的区域面积。"
    },
    {
      "t": "p",
      "md": "**Solution 1.5** 抛物线 $x=y^{2}-2$ 与直线 $y=x$ 的交点为 $x=-1$ 与 $x=2$。该区域在 $-2\\le x\\le -1$ 与 $-1\\le x\\le 2$ 上的高度函数 $h(x)$ 不同，用竖直条带需要**两个积分**；但注意到在整个区域上，宽度函数只有一个表达式 $w(y)=\\left|y-(y^{2}-2)\\right|=y-(y^{2}-2)$。于是不沿 $x$ 轴积分竖直条带 $dA=h(x)\\,dx$，而沿 $y$ 轴积分水平条带 $dA=w(y)\\,dy$，从 $y=-1$ 积到 $y=2$："
    },
    {
      "t": "p",
      "md": "$$A = \\int_{-1}^{2}\\left(y - (y^{2}-2)\\right)dy = \\int_{-1}^{2}\\left(y - y^{2} + 2\\right)dy = \\left[\\frac{y^{2}}{2} - \\frac{y^{3}}{3} + 2y\\right]_{-1}^{2} = \\frac{9}{2}$$"
    },
    {
      "t": "warn",
      "md": "**易错点**：\n\n• 面积元中的高度必须取绝对值 $h(x)=\\left|f_1(x)-f_2(x)\\right|$，不能直接用 $f_1-f_2$。\n\n• 只要两条曲线在某点相交（如 Exercise 1.3、1.4），就一定要在**交点处把积分拆开**，并分别判断哪条曲线在上方。\n\n• 若沿 $x$ 方向要拆很多段（如 Exercise 1.5），就改用水平条带、把 $x$ 与 $y$ 的角色互换。"
    },
    {
      "t": "h",
      "md": "二、Average Value of a Function（函数的平均值）"
    },
    {
      "t": "p",
      "md": "根据 [[Kepler's laws of planetary motion|开普勒行星运动定律]]，行星绕太阳运行沿椭圆轨道，太阳位于椭圆的一个焦点上（见讲义 Figure 15）。行星与太阳之间的距离 $d$ 在椭圆上不断变化，会取到最小距离与最大距离（由 [[Extreme Value Theorem|极值定理]] 保证）。怎样求行星绕行**一整圈**过程中与太阳的平均距离？思路是把「若干个数的平均」这一概念推广。"
    },
    {
      "t": "p",
      "md": "回忆 $n$ 个数 $x_1,x_2,\\dots,x_n$ 的平均值（记作 $\\bar{x}$）就是它们的和除以个数："
    },
    {
      "t": "p",
      "md": "$$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$$"
    },
    {
      "t": "p",
      "md": "在统计学中 $\\bar{x}$ 称为 $x_1,x_2,\\dots,x_n$ 的 [[mean|均值]]。这个定义对**有限个数**是合理的；但行星与太阳之间的距离有**不可数无穷多个**，上述定义根本无法使用，我们需要一种对无穷连续统求和的办法——这样的方法其实已经见过：[[definite integral|定积分]]，它本质上就是无穷多个无穷小量之和。"
    },
    {
      "t": "p",
      "md": "为定义函数 $f$ 在闭区间 $[a,b]$ 上的平均值 $f_{\\mathrm{avg}}$，取一个 [[partition|分割]] $P=\\{a=x_0<x_1<x_2<\\cdots<x_{n-1}<x_n=b\\}$，把 $[a,b]$ 分成 $n$ 个**等长**小区间 $[x_{i-1},x_i]$，其长度 $\\Delta x_i = x_i - x_{i-1} = (b-a)/n$（见图 16）。$f(x_1),f(x_2),\\dots,f(x_n)$ 只是 $f$ 在 $[a,b]$ 上全部函数值中的**有限子集**，所以它们的平均只是真实平均值的近似："
    },
    {
      "t": "p",
      "md": "$$f_{\\mathrm{avg}} \\approx \\frac{f(x_1) + f(x_2) + \\cdots + f(x_n)}{n}$$"
    },
    {
      "t": "p",
      "md": "利用求和的性质，把整个和除以常数 $b-a$，同时把和中的每一项乘以 $b-a$，便得到"
    },
    {
      "t": "p",
      "md": "$$f_{\\mathrm{avg}} \\approx \\frac{1}{b-a}\\cdot\\frac{b-a}{n}\\sum_{i=1}^{n} f(x_i) = \\frac{1}{b-a}\\sum_{i=1}^{n} f(x_i)\\,\\Delta x_i$$"
    },
    {
      "t": "p",
      "md": "右边的求和正是定积分 $\\int_a^b f(x)\\,dx$ 的一个 [[Riemann sum|黎曼和]]（把 $x_i$ 取作小区间 $[x_{i-1},x_i]$ 的**右端点**）。于是令 $n\\to\\infty$（即把越来越多的函数值纳入平均），就得到下面的定义："
    },
    {
      "t": "note",
      "md": "**Definition 2.1（函数的平均值）**：函数 $f$ 在闭区间 $[a,b]$ 上的平均值 $f_{\\mathrm{avg}}$ 为（公式 (2)）\n\n$$f_{\\mathrm{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx \\qquad (2)$$\n\n注：在部分统计或数学教材中，平均值也记作 $\\bar{f}$。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.1** 求 $f(x)=x^{2}$ 在 $[0,1]$ 上的平均值。"
    },
    {
      "t": "p",
      "md": "**Solution 2.1** 由定义，取 $a=0$、$b=1$："
    },
    {
      "t": "p",
      "md": "$$f_{\\mathrm{avg}} = \\frac{1}{1-0}\\int_0^1 x^{2}\\,dx = \\left[\\frac{x^{3}}{3}\\right]_0^1 = \\frac{1}{3}$$"
    },
    {
      "t": "p",
      "md": "这也就是说：如果把 $0$ 与 $1$ 之间的**所有数**都平方，再对这些平方值求平均，结果就是 $1/3$。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.2** 求 $f(x)=x^{2}$ 在 $[-1,1]$ 上的平均值。"
    },
    {
      "t": "p",
      "md": "**Solution 2.2** 由定义，取 $a=-1$、$b=1$："
    },
    {
      "t": "p",
      "md": "$$f_{\\mathrm{avg}} = \\frac{1}{1-(-1)}\\int_{-1}^{1} x^{2}\\,dx = \\frac{1}{2}\\left[\\frac{x^{3}}{3}\\right]_{-1}^{1} = \\frac{1}{2}\\cdot\\frac{2}{3} = \\frac{1}{3}$$"
    },
    {
      "t": "p",
      "md": "结果与上一例在 $[0,1]$ 上的平均值相同，这是合理的：$f(x)=x^{2}$ 关于 $y$ 轴对称，$[-1,0]$ 上的函数值与 $[0,1]$ 上的完全相同，$[-1,1]$ 上的值只是重复了 $[0,1]$ 上的值，因此不改变平均值。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.3** 求 $f(x)=\\sin x$ 在 $[0,\\pi]$ 上的平均值。"
    },
    {
      "t": "p",
      "md": "**Solution 2.3** 由定义，取 $a=0$、$b=\\pi$："
    },
    {
      "t": "p",
      "md": "$$f_{\\mathrm{avg}} = \\frac{1}{\\pi - 0}\\int_0^{\\pi}\\sin x\\,dx = \\frac{1}{\\pi}\\left[-\\cos x\\right]_0^{\\pi} = \\frac{1}{\\pi}\\left(\\cos 0 - \\cos\\pi\\right) = \\frac{1}{\\pi}\\left(1+1\\right) = \\frac{2}{\\pi}$$"
    },
    {
      "t": "h",
      "md": "三、Arc Length（弧长）"
    },
    {
      "t": "p",
      "md": "与平面区域的面积可以用微积分求出一样，平面曲线的长度也可以用微积分求出。对函数 $y=f(x)$，用 $s$ 表示该曲线在区间 $[a,b]$ 上的那一段的长度，称 $s$ 为曲线在 $[a,b]$ 上的**弧长**（[[Arc Length|弧长]]，见讲义 Figure 2(a)）。"
    },
    {
      "t": "p",
      "md": "由 [[Microstraightness Property|微观直性]]，当 $a\\le x\\le b$ 时，曲线在无穷小区间 $[x,\\,x+dx]$ 上是一条长度为 $ds$ 的直线段（Figure 2(b)），其中 $ds>0$ 是 $s$ 在该无穷小区间上的无穷小改变量。"
    },
    {
      "t": "p",
      "md": "注意：这里**不能直接对无穷小三角形使用勾股定理**，因为那将给出 $ds=\\sqrt{(dx)^{2}+(dy)^{2}}=\\sqrt{0+0}=0$，这是错的。技巧是把该无穷小直角三角形的三条边**都除以 $dx$**，得到一个相似、但**非无穷小**的直角三角形（Figure 2(c)），再对它用 [[Pythagorean Theorem|勾股定理]]："
    },
    {
      "t": "p",
      "md": "$$\\frac{ds}{dx} = \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^{2}} \\qquad\\Longrightarrow\\qquad ds = \\sqrt{1 + \\left(f'(x)\\right)^{2}}\\,dx$$"
    },
    {
      "t": "p",
      "md": "把这些无穷小长度 $ds$ 累加起来，就得到弧长 $s$。"
    },
    {
      "t": "note",
      "md": "**Theorem 3.1**：曲线 $y=f(x)$ 在 $[a,b]$ 上的弧长 $s$ 为（公式 (3)）\n\n$$s = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^{2}}\\,dx = \\int_a^b \\sqrt{1 + \\left(f'(x)\\right)^{2}}\\,dx \\qquad (3)$$"
    },
    {
      "t": "p",
      "md": "这样的公式存在当然是好消息，但正如你可能已经猜到的：除了少数几个函数以外，这个积分**无法用[[closed form|闭形式]]求出**；大多数情形都需要用 [[numerical integration|数值积分]]方法。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.1** 求 $f(x)=\\frac{4}{3}x^{3/2}$ 在 $[2,6]$ 上的弧长。"
    },
    {
      "t": "p",
      "md": "**Solution 3.1** 先求导数：$f'(x)=2x^{1/2}=2\\sqrt{x}$。于是弧长 $s$ 为"
    },
    {
      "t": "p",
      "md": "$$s = \\int_2^6 \\sqrt{1 + \\left(f'(x)\\right)^{2}}\\,dx = \\int_2^6 \\sqrt{1 + \\left(2\\sqrt{x}\\right)^{2}}\\,dx = \\int_2^6 \\sqrt{1 + 4x}\\,dx = \\left[\\frac{(1+4x)^{3/2}}{6}\\right]_2^6 = \\frac{1}{6}\\left(125 - 27\\right) = \\frac{49}{3}$$"
    },
    {
      "t": "p",
      "md": "**Exercise 3.2** 求曲线 $y=\\frac{1}{2}\\left(e^{x}+e^{-x}\\right)$ 在 $[0,1]$ 上的弧长。"
    },
    {
      "t": "p",
      "md": "**Solution 3.2** 因为 $\\frac{dy}{dx}=\\frac{1}{2}\\left(e^{x}-e^{-x}\\right)$，所以弧长 $s$ 为"
    },
    {
      "t": "p",
      "md": "$$s = \\int_0^1 \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^{2}}\\,dx = \\int_0^1 \\sqrt{1 + \\left(\\frac{e^{x}-e^{-x}}{2}\\right)^{2}}\\,dx = \\int_0^1 \\frac{e^{x}+e^{-x}}{2}\\,dx = \\left[\\frac{e^{x}-e^{-x}}{2}\\right]_0^1 = \\frac{1}{2}\\left(e - e^{-1}\\right) \\approx 1.1752$$"
    },
    {
      "t": "note",
      "md": "**要点**：在 $[0,b]$ 上，此题的一般结果为 $s=\\frac{1}{2}\\left(e^{b}-e^{-b}\\right)$；这里直接利用恒等式 $1+\\left(\\frac{e^{x}-e^{-x}}{2}\\right)^{2}=\\left(\\frac{e^{x}+e^{-x}}{2}\\right)^{2}$ 去掉根号。"
    },
    {
      "t": "h",
      "md": "四、Solids of Revolution（旋转体）"
    },
    {
      "t": "h",
      "md": "4.1 圆盘法 Disc Method"
    },
    {
      "t": "p",
      "md": "早在微积分发明之前，古希腊人（例如 Archimedes 阿基米德）就已发现球等常见三维物体的体积与表面积公式。任意立体的体积与表面积要用**多元微积分**求；不过对于**具有关于某条轴对称性**的特殊情形，用一元微积分即可：把 $xy$ 平面上的曲线或区域绕某条轴旋转。"
    },
    {
      "t": "p",
      "md": "设 $y=f(x)\\ge 0$。把曲线 $y=f(x)$ 与 $x$ 轴之间、$a\\le x\\le b$ 上的区域绕 $x$ 轴旋转（Figure 3(a)），得到一个三维的**旋转体**（Figure 3(b)）。注意该立体由[[surface of revolution|旋转曲面]]连同它的**内部**一起组成。"
    },
    {
      "t": "p",
      "md": "目标是求这个立体的体积 $V$。思路是把立体像**切面包**一样切成许多薄片。首先需要求在 $x\\in[a,b]$ 处、宽为 $dx$ 的无穷小条带扫出的[[frustum|圆台]]的无穷小体积 $dV$（Figure 3(c)）。由 [[Microstraightness Property|微观直性]]，曲线 $y=f(x)$ 在 $[x,x+dx]$ 上是一段直线；于是条带顶部有一个直角三角形（Figure 3(c) 中未着色的部分），它的面积为 $A=\\frac{1}{2}(dy)(dx)=\\frac{1}{2}f'(x)(dx)^{2}=0$（[[infinitesimal|无穷小]]量的平方可忽略）。"
    },
    {
      "t": "p",
      "md": "因此这个三角形绕 $x$ 轴旋转**不贡献任何体积**：条带扫出的体积 $dV$ 全部来自那块高为 $f(x)$、宽为 $dx$ 的着色矩形。该矩形扫出一个半径为 $f(x)$、高为 $dx$ 的 [[right circular cylinder|直圆柱]]。半径为 $r$、高为 $h$ 的直圆柱体积定义为底圆面积乘以高，即 $\\pi r^{2}h$。于是"
    },
    {
      "t": "p",
      "md": "$$dV = \\pi \\left(f(x)\\right)^{2}dx$$"
    },
    {
      "t": "p",
      "md": "整个立体的体积 $V$ 就是所有这些无穷小体积 $dV$ 之和："
    },
    {
      "t": "note",
      "md": "**Theorem 4.1（圆盘法）**：把曲线 $y=f(x)$ 与 $x$ 轴之间的区域在 $a\\le x\\le b$ 上绕 $x$ 轴旋转，所得旋转体的体积 $V$ 为（公式 (4)）\n\n$$V = \\int_a^b dV = \\int_a^b \\pi \\left(f(x)\\right)^{2}dx \\qquad (4)$$\n\n这种方法称为 [[disc method|圆盘法]]（disc method），因为体积为 $dV$ 的圆柱看起来像一个**圆盘**（可以想成极薄的面包片）。公式 (4) 中**不需要绝对值**，因为 $f(x)$ 被平方，所以 $f(x)$ 为负时公式仍然成立。"
    },
    {
      "t": "p",
      "md": "**Exercise 4.1** 证明半径为 $r$ 的球体积为 $\\frac{4}{3}\\pi r^{3}$。"
    },
    {
      "t": "p",
      "md": "**Solution 4.1** 用圆的方程：把上半圆 $y=f(x)=\\sqrt{r^{2}-x^{2}}$ 与 $x$ 轴之间的区域在 $[-r,r]$ 上绕 $x$ 轴旋转，扫出的旋转体就是半径为 $r$ 的球。其体积 $V$ 为"
    },
    {
      "t": "p",
      "md": "$$V = \\int_{-r}^{r}\\pi \\left(f(x)\\right)^{2}dx = \\int_{-r}^{r}\\pi\\left(r^{2}-x^{2}\\right)dx = \\pi\\left[r^{2}x - \\frac{x^{3}}{3}\\right]_{-r}^{r} = \\frac{4}{3}\\pi r^{3}$$"
    },
    {
      "t": "p",
      "md": "与其死记公式 (4)，不如记住更一般的做法：把无穷小矩形条绕**某条轴**（不一定是 $x$ 轴）旋转，找出该条带扫出的圆盘的半径 $r$ 与高度 $h$（通常取 $dx$ 或 $dy$），则圆盘体积 $dV=\\pi r^{2}h$；再把 $dV$ 在合适的区间上积分，就得到整个立体的体积 $V$。"
    },
    {
      "t": "p",
      "md": "**Exercise 4.2** 设由曲线 $y=x^{2}$ 与 $x$ 轴在 $0\\le x\\le 1$ 上围成的区域绕直线 $x=1$ 旋转，求所得旋转体的体积。"
    },
    {
      "t": "p",
      "md": "**Solution 4.2** 因为区域绕**竖直轴**旋转，圆盘法要用高度为 $dy$ 的圆盘，而不是 $dx$。对 $[0,1]$ 中的点 $x$，先向上到曲线 $y=x^{2}$，再画一条到直线 $x=1$ 的水平矩形条。令 $h=dy$，把该条带绕直线 $x=1$ 旋转，得到一个半径 $r=1-x$、高 $h=dy$ 的圆盘。由 $y=x^{2}$ 得 $x=\\sqrt{y}$，故该圆盘的体积 $dV$ 为"
    },
    {
      "t": "p",
      "md": "$$dV = \\pi r^{2}h = \\pi\\left(1-x\\right)^{2}dy = \\pi\\left(1-\\sqrt{y}\\right)^{2}dy = \\pi\\left(1 - 2\\sqrt{y} + y\\right)dy$$"
    },
    {
      "t": "p",
      "md": "整个立体的体积 $V$ 就是这些 $dV$ 沿 $y$ 轴在 $0\\le y\\le 1$ 上之和："
    },
    {
      "t": "p",
      "md": "$$V = \\int dV = \\int_0^1 \\pi\\left(1 - 2\\sqrt{y} + y\\right)dy = \\pi\\left[y - \\frac{4}{3}y^{3/2} + \\frac{y^{2}}{2}\\right]_0^1 = \\pi\\left(1 - \\frac{4}{3} + \\frac{1}{2}\\right) = \\frac{\\pi}{6}$$"
    },
    {
      "t": "h",
      "md": "4.2 柱壳法 Shell Method"
    },
    {
      "t": "p",
      "md": "当旋转体**中间有一个「洞」**时，可以用 [[shell method|柱壳法]]。例如把 Figure 中的着色区域绕 $y$ 轴旋转：由于区域与 $y$ 轴之间留有空隙，所得立体在 $x=-a$ 与 $x=a$ 之间存在一个洞。"
    },
    {
      "t": "p",
      "md": "为求该立体的体积 $V$，对 $x\\in[a,b]$ 作一条宽为 $dx$、从 $x$ 轴向上到曲线 $y=f(x)$ 的无穷小条带（Figure 4(a)）。把这条带绕 $y$ 轴旋转，得到一个[[cylindrical shell|柱壳]]，其体积等于**外层大圆柱与内层小圆柱体积之差**："
    },
    {
      "t": "p",
      "md": "$$dV = \\pi\\left(x+dx\\right)^{2}f(x) - \\pi x^{2}f(x) = \\pi\\left(2x\\,dx + (dx)^{2}\\right)f(x) = 2\\pi x f(x)\\,dx + \\pi (dx)^{2}f(x) \\;\\longrightarrow\\; 2\\pi x f(x)\\,dx$$"
    },
    {
      "t": "p",
      "md": "即含 $(dx)^{2}$ 的高阶无穷小项可以忽略。整个立体的体积 $V$ 就是这些 $dV$ 之和；为了处理 $f(x)$ 的任何符号，公式中加上绝对值："
    },
    {
      "t": "note",
      "md": "**Theorem 4.2（柱壳法）**：把曲线 $y=f(x)$ 与 $x$ 轴之间的区域在 $0\\le a\\le x\\le b$ 上绕 $y$ 轴旋转，所得旋转体的体积 $V$ 为（公式 (5)）\n\n$$V = \\int dV = \\int_a^b 2\\pi x\\left|f(x)\\right|dx \\qquad (5)$$"
    },
    {
      "t": "p",
      "md": "**Exercise 4.3** 设由曲线 $y=x^{2}$ 与 $x$ 轴在 $0\\le x\\le 1$ 上围成的区域绕 $y$ 轴旋转，求所得旋转体的体积。"
    },
    {
      "t": "p",
      "md": "**Solution 4.3** 对 $x\\in[0,1]$ 处的竖直条带，其宽为无穷小量 $dx$、高为 $f(x)=x^{2}$。该条带产生的正是公式 (5) 中的柱壳，所以用柱壳法得"
    },
    {
      "t": "p",
      "md": "$$V = \\int_0^1 2\\pi x\\cdot x^{2}\\,dx = 2\\pi\\int_0^1 x^{3}\\,dx = 2\\pi\\left[\\frac{x^{4}}{4}\\right]_0^1 = \\frac{\\pi}{2}$$"
    },
    {
      "t": "p",
      "md": "公式 (5) 中的 $dV$ 可以推广为 $dV = 2\\pi r h w$：其中 $r$ 是[[axis of revolution|旋转轴]]到区域内某条宽为 $w$ 的竖直条带的距离，$h$ 是该条带的高（$w$ 与 $h$ 通常分别取 $dx$、$f(x)$ 之类）。"
    },
    {
      "t": "p",
      "md": "**Exercise 4.4** 设由曲线 $y=x^{2}$ 与 $y=x$ 围成的区域绕 $y$ 轴旋转，求所得旋转体的体积。"
    },
    {
      "t": "p",
      "md": "**Solution 4.4** 取区域内距 $y$ 轴距离 $r=x$ 的一条竖直条带，其宽 $w=dx$、高 $h=x-x^{2}$。该条带产生体积为 $dV=2\\pi r h w = 2\\pi x\\left(x-x^{2}\\right)dx$ 的柱壳，于是旋转体的体积 $V$ 为"
    },
    {
      "t": "p",
      "md": "$$V = \\int dV = \\int_0^1 2\\pi x\\left(x-x^{2}\\right)dx = 2\\pi\\left[\\frac{x^{3}}{3} - \\frac{x^{4}}{4}\\right]_0^1 = 2\\pi\\left(\\frac{1}{3} - \\frac{1}{4}\\right) = \\frac{\\pi}{6}$$"
    },
    {
      "t": "h",
      "md": "4.3 两法对比与易错点"
    },
    {
      "t": "tbl",
      "head": [
        "方法",
        "适用情形",
        "体积元",
        "本讲例题"
      ],
      "rows": [
        [
          "圆盘法 disc method",
          "区域绕与条带**垂直**的轴旋转（如区域在 $x$ 轴上方、绕 $x$ 轴旋转）",
          "$dV=\\pi r^{2}h$，$r=f(x)$、$h=dx$；公式 (4)：$V=\\int_a^b \\pi\\left(f(x)\\right)^{2}dx$",
          "Exercise 4.1（球：$\\frac{4}{3}\\pi r^{3}$）"
        ],
        [
          "圆盘法（绕竖直轴）",
          "绕竖直轴旋转，改用**水平**条带",
          "$dV=\\pi r^{2}dy$，$r$ 取条带到旋转轴的距离",
          "Exercise 4.2（绕 $x=1$：$\\frac{\\pi}{6}$）"
        ],
        [
          "柱壳法 shell method",
          "旋转体中间有洞；区域与轴之间有空隙，或绕 $y$ 轴旋转",
          "$dV=2\\pi r h w$；公式 (5)：$V=\\int_a^b 2\\pi x\\left|f(x)\\right|dx$",
          "Exercise 4.3（$\\frac{\\pi}{2}$）、Exercise 4.4（$\\frac{\\pi}{6}$）"
        ]
      ]
    },
    {
      "t": "warn",
      "md": "**易错点**：\n\n• 弧长不能对**无穷小**三角形直接用勾股定理（会得到 $ds=0$），必须先把三边同除以 $dx$，再对非无穷小三角形用勾股定理。\n\n• 圆盘法的半径是条带到**旋转轴**的距离：轴不是 $x$ 轴时，$r$ 不再是 $f(x)$（如 Exercise 4.2 中 $r=1-x$）；并且绕竖直轴旋转时圆盘的高取 $dy$。\n\n• 柱壳法的体积元是 $dV=2\\pi r h w$，不要丢掉 $2\\pi$ 或半径因子 $r$；公式 (5) 中的绝对值用于处理 $f(x)$ 的符号。"
    },
    {
      "t": "note",
      "md": "**本讲要点回顾**：\n\n• 两曲线之间的面积：$A=\\int_a^b\\left|f_1(x)-f_2(x)\\right|dx$，在交点处拆分积分；沿 $x$ 不便时可改用水平条带的宽度函数 $w(y)$。\n\n• 函数的平均值：$f_{\\mathrm{avg}}=\\frac{1}{b-a}\\int_a^b f(x)\\,dx$，它是「有限个数求平均」对连续统的推广。\n\n• 弧长：$s=\\int_a^b\\sqrt{1+\\left(f'(x)\\right)^{2}}\\,dx$，大多数情况下只能用数值积分求值。\n\n• 旋转体：圆盘法 $V=\\int_a^b\\pi\\left(f(x)\\right)^{2}dx$；柱壳法 $V=\\int_a^b 2\\pi x\\left|f(x)\\right|dx$，更一般地写出半径 $r$ 与高 $h$ 后积分 $dV=\\pi r^{2}h$ 或 $dV=2\\pi r h w$。"
    }
  ],
  "terms": [
    [
      "Area Between Curves",
      "曲线之间的面积"
    ],
    [
      "Average Value of a Function",
      "函数的平均值"
    ],
    [
      "Arc Length",
      "弧长"
    ],
    [
      "Solids of Revolution",
      "旋转体"
    ],
    [
      "disc method",
      "圆盘法"
    ],
    [
      "shell method",
      "柱壳法"
    ],
    [
      "height function",
      "高度函数"
    ],
    [
      "width function",
      "宽度函数"
    ],
    [
      "Kepler's laws of planetary motion",
      "开普勒行星运动定律"
    ],
    [
      "Extreme Value Theorem",
      "极值定理"
    ],
    [
      "mean",
      "均值"
    ],
    [
      "definite integral",
      "定积分"
    ],
    [
      "partition",
      "分割"
    ],
    [
      "Riemann sum",
      "黎曼和"
    ],
    [
      "Microstraightness Property",
      "微观直性"
    ],
    [
      "Pythagorean Theorem",
      "勾股定理"
    ],
    [
      "numerical integration",
      "数值积分"
    ],
    [
      "frustum",
      "圆台"
    ],
    [
      "right circular cylinder",
      "直圆柱"
    ],
    [
      "axis of revolution",
      "旋转轴"
    ],
    [
      "cylindrical shell",
      "柱壳"
    ],
    [
      "surface of revolution",
      "旋转曲面"
    ],
    [
      "closed form",
      "闭形式"
    ],
    [
      "infinitesimal",
      "无穷小"
    ]
  ],
  "qids": [
    "fin-3-01",
    "fin-3-03",
    "fin-3-04",
    "fin-3-05",
    "fin-3-06",
    "fin-3-07",
    "fin-3-09",
    "fin-3-10",
    "fin-3-12",
    "fin-3-14",
    "fin-3-15",
    "past-3-01"
  ]
});

  /* ---------- L11 第11讲 序列、级数与泰勒级数 ---------- */
  T.push({
  "no": "L11",
  "title": "第11讲 序列、级数与泰勒级数",
  "titleEn": "Sequences and Series; Power Series; Taylor's Series",
  "tags": [
    "sequence",
    "series",
    "geometric progression",
    "power series",
    "Taylor's series",
    "Maclaurin's series",
    "remainder"
  ],
  "blocks": [
    {
      "t": "p",
      "md": "本讲从 [[Zeno's paradox|芝诺悖论]] 出发，引入 [[sequence|序列]] 与 [[series|级数]] 的严格定义，再进入 [[power series|幂级数]]，最后给出把一个函数写成幂级数的通用方法 —— [[Taylor's series|泰勒级数]]，并讨论用泰勒多项式作近似以及如何估计误差。"
    },
    {
      "t": "h",
      "md": "一、Sequences and Series：从 Zeno 悖论说起"
    },
    {
      "t": "p",
      "md": "公元前 5 世纪，古希腊哲学家 Zeno of Elea（芝诺）提出了一系列悖论，其中最著名的是 **The Dichotomy（二分法）**：如果空间是无限可分的，那么运动是不可能的。"
    },
    {
      "t": "p",
      "md": "论证如下：设想一条长度有限的线段，例如 $1$ m，人站在其中一端（Figure 1）。在走完全程之前，他必须先走完一半的距离；而在走这一半之前，又必须先走完四分之一的距离；在此之前还要先走完八分之一……如此下去，**根本不存在「第一步」**，运动甚至无法开始。"
    },
    {
      "t": "p",
      "md": "但运动显然是可能的，否则你也不会读到这段话。那么 Zeno 的推理有漏洞吗？稍后再谈。先注意 Figure 1 中的两件事：第一，距离标记 $-\\frac12$、$\\frac14$、$\\frac18$、$\\dots$ 构成一个趋向 $0$ 的**无穷序列**；第二，相邻标记之间距离之和是一个**无穷级数**，它应当等于整条线段的长度 $1$："
    },
    {
      "t": "p",
      "md": "$$\\frac12+\\frac14+\\frac18+\\cdots=1$$"
    },
    {
      "t": "p",
      "md": "稍后会证明这个和确实等于 $1$，而这一事实对 Zeno 悖论其实没有影响。为此先需要一些定义。"
    },
    {
      "t": "h",
      "md": "二、序列的定义与极限"
    },
    {
      "t": "p",
      "md": "一个 [[sequence|序列]]（sequence）是一个**有序**的对象列表；本课程中对象恒为实数。序列可以是有限的（表中有最后一个数），也可以是无限的（表中每个数后面都还有「后继」）。"
    },
    {
      "t": "warn",
      "md": "**序列千万不要与集合混淆**：序列中**顺序重要**，且**数可以重复**；集合中顺序不重要，元素也不重复。例如序列 $(1,2,3)$ 与 $(1,3,2)$ 是不同的序列，但其中的数构成同一个集合 $\\{1,2,3\\}$。"
    },
    {
      "t": "p",
      "md": "最简单的无穷序列是自然数集 $\\mathbb{N}$：$0,1,2,3,\\dots$。事实上，任何实数无穷序列 $a_0,a_1,a_2,\\dots$ 都可以写成某个把 $\\mathbb{N}$ 映入 $\\mathbb{R}$ 的函数 $f$ 的值域："
    },
    {
      "t": "p",
      "md": "$$f(n)=a_n$$"
    },
    {
      "t": "p",
      "md": "通常用 $\\{a_n\\}_{n=0}^{\\infty}$ 这样的记号表示无穷序列，当指标 $n$ 的初值不言自明时简记为 $\\{a_n\\}$（$n$ 恒为整数）。下面给出序列极限的直观概念的正式表述。"
    },
    {
      "t": "note",
      "md": "**Definition (1.1)** 实数 $L$ 是无穷序列 $\\{a_n\\}$ 的 [[limit|极限]]，记作 $\\displaystyle\\lim_{n\\to\\infty}a_n=L$，或简记为 $a_n\\to L$，如果对任意给定的数 $\\varepsilon>0$，都存在一个整数 $N$，使得 $|a_n-L|<\\varepsilon$ 对一切 $n>N$ 成立。此时称序列 $\\{a_n\\}$ **收敛**到 $L$，并称之为 [[convergent|收敛序列]]；不收敛的序列称为**发散**（[[divergent|发散]]）序列。"
    },
    {
      "t": "p",
      "md": "换句话说，序列 $\\{a_n\\}$ 收敛到 $L$，是指只要 $n$ 充分大，$a_n$ 就能任意接近 $L$。在大多数情形下并不需要这个形式定义，因为由上式可知，Lecture 1 与 Lecture 3 中关于函数极限 $\\displaystyle\\lim_{x\\to\\infty}f(x)$ 的**同一套法则与公式**（极限的和与积、[[L'Hôpital's Rule|洛必达法则]]等）对序列同样适用 —— 只需把 $x$ 换成 $n$ 即可。"
    },
    {
      "t": "h",
      "md": "三、序列极限的计算（Exercise 1.1–1.4）"
    },
    {
      "t": "p",
      "md": "**Exercise 1.1** 对整数 $n\\ge1$ 定义 $a_n=\\dfrac{1}{2^n}$，求 $\\displaystyle\\lim_{n\\to\\infty}a_n$（若存在）。"
    },
    {
      "t": "p",
      "md": "**Solution 1.1** 因为 $\\displaystyle\\lim_{x\\to\\infty}\\frac{1}{2^x}=0$，把 $x$ 换成 $n$ 便得"
    },
    {
      "t": "p",
      "md": "$$\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}\\frac{1}{2^n}=0.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.2** 对整数 $n\\ge0$ 定义 $a_n=\\dfrac{2n+1}{3n+2}$。$\\{a_n\\}$ 是收敛序列吗？若是，求其极限。"
    },
    {
      "t": "p",
      "md": "**Solution 1.2** 把整数 $n\\ge0$ 当作实值变量 $x$，用洛必达法则："
    },
    {
      "t": "p",
      "md": "$$\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}\\frac{2n+1}{3n+2}=\\lim_{n\\to\\infty}\\frac{2+\\frac1n}{3+\\frac2n}=\\frac23.$$"
    },
    {
      "t": "p",
      "md": "因此该序列收敛，极限为 $\\dfrac23$。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.3** 对整数 $n\\ge0$ 定义 $a_n=\\dfrac{e^n}{3n+2}$。$\\{a_n\\}$ 是收敛序列吗？若是，求其极限。"
    },
    {
      "t": "p",
      "md": "**Solution 1.3** 同样把整数 $n\\ge0$ 当作实值变量 $x$，用洛必达法则："
    },
    {
      "t": "p",
      "md": "$$\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}\\frac{e^n}{3n+2}=\\lim_{n\\to\\infty}\\frac{e^n}{3}=\\infty.$$"
    },
    {
      "t": "p",
      "md": "因此该序列**发散**。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.4** 著名的 [[Fibonacci sequence|斐波那契数列]] $\\{F_n\\}$ 以数 $0$ 与 $1$ 开头，其后每一项都是前两项之和："
    },
    {
      "t": "p",
      "md": "$$F_0=0,\\qquad F_1=1,\\qquad F_n=F_{n-1}+F_{n-2}\\quad(n\\ge2).$$"
    },
    {
      "t": "p",
      "md": "这种等式称为 [[recurrence relation|递推关系]]。前十个 Fibonacci 数是 $0,1,1,2,3,5,8,13,21,34$。显然 $\\{F_n\\}$ 是发散序列，因为 $F_n\\to\\infty$。对 $n\\ge2$ 定义 $a_n=F_n/F_{n-1}$，前几个值为 $a_2=1$、$a_3=2$、$a_4=1.5$、$a_5\\approx1.667$。要证明 $\\{a_n\\}$ 收敛，也就是说：Fibonacci 序列中每一项与前一项之比收敛到某个数。"
    },
    {
      "t": "p",
      "md": "**Solution 1.4** 证明方法很多，最简单的一种是先**假设**序列收敛，再求出极限（若序列发散，这样做就会导出矛盾）。设 $a_n\\to a$（$a$ 为某实数）。把递推式两边同除以 $F_{n-1}$，得"
    },
    {
      "t": "p",
      "md": "$$a_n=\\frac{F_n}{F_{n-1}}=1+\\frac{F_{n-2}}{F_{n-1}}=1+\\frac{1}{a_{n-1}}\\quad(n\\ge2).$$"
    },
    {
      "t": "p",
      "md": "再对最后一个等式两边取 $n\\to\\infty$ 的极限："
    },
    {
      "t": "p",
      "md": "$$\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}\\left(1+\\frac{1}{a_{n-1}}\\right)\\ \\Longrightarrow\\ a=1+\\frac1a\\ \\Longrightarrow\\ a^2-a-1=0\\ \\Longrightarrow\\ a=\\frac{1\\pm\\sqrt5}{2}.$$"
    },
    {
      "t": "p",
      "md": "由于 $a$ 必须为正，故 $a=\\dfrac{1+\\sqrt5}{2}$。于是该序列收敛，且收敛到 $\\dfrac{1+\\sqrt5}{2}\\approx1.618$。"
    },
    {
      "t": "note",
      "md": "这个数就是著名的 [[golden ratio|黄金比]] —— 关于它在自然界中的出现、以及作为矩形两边之比所具有的「美学」价值的说法非常多。"
    },
    {
      "t": "tbl",
      "head": [
        "题目",
        "序列",
        "极限 / 结论",
        "所用方法"
      ],
      "rows": [
        [
          "Exercise 1.1",
          "$a_n=\\dfrac{1}{2^n}$",
          "$0$（收敛）",
          "把 $x$ 换成 $n$"
        ],
        [
          "Exercise 1.2",
          "$a_n=\\dfrac{2n+1}{3n+2}$",
          "$\\dfrac23$（收敛）",
          "L'Hôpital 法则"
        ],
        [
          "Exercise 1.3",
          "$a_n=\\dfrac{e^n}{3n+2}$",
          "$\\infty$（发散）",
          "L'Hôpital 法则"
        ],
        [
          "Exercise 1.4",
          "$a_n=\\dfrac{F_n}{F_{n-1}}$",
          "$\\dfrac{1+\\sqrt5}{2}\\approx1.618$（黄金比）",
          "对递推式取极限"
        ]
      ]
    },
    {
      "t": "h",
      "md": "四、无穷级数与部分和"
    },
    {
      "t": "p",
      "md": "无穷 [[series|级数]]（infinite series）就是无穷序列之和。若无穷序列为 $\\{a_n\\}_{n=0}^{\\infty}$，则该级数可写作"
    },
    {
      "t": "p",
      "md": "$$\\sum_{n=0}^{\\infty}a_n=a_0+a_1+a_2+\\cdots+a_n+\\cdots,$$"
    },
    {
      "t": "p",
      "md": "当指标 $n$ 的初值不言自明时简记为 $\\sum a_n$。对这种级数的和，有一个自然的定义方式："
    },
    {
      "t": "note",
      "md": "**Definition (1.2)** 无穷级数 $\\displaystyle\\sum_{n=0}^{\\infty}a_n$ 的和定义为 $\\displaystyle\\sum_{n=0}^{\\infty}a_n=\\lim_{n\\to\\infty}S_n$，其中 $\\{S_n\\}_{n=0}^{\\infty}$ 是该级数的 [[partial sum|部分和]] 序列：$$S_n=\\sum_{k=0}^{n}a_k=a_0+a_1+a_2+\\cdots+a_n\\quad(n\\ge0).$$ 若部分和 $\\{S_n\\}$ 收敛到实数 $s$，则该级数**收敛**且收敛到 $s$；若 $\\{S_n\\}$ 发散，则该级数**发散**。"
    },
    {
      "t": "h",
      "md": "五、几何级数（Geometric Progression）"
    },
    {
      "t": "p",
      "md": "一个重要的收敛级数是 [[geometric progression|几何级数]]（等比级数）：$$a+ar+ar^2+ar^3+\\cdots+ar^n+\\cdots$$ 其中 $a\\ne0$ 且 $|r|<1$。把第 $n$ 个部分和 $S_n$ 乘以 $r$："
    },
    {
      "t": "p",
      "md": "$$rS_n=r\\left(a+ar+ar^2+\\cdots+ar^{n-1}+ar^n\\right)=ar+ar^2+ar^3+\\cdots+ar^n+ar^{n+1}.$$"
    },
    {
      "t": "p",
      "md": "再用 $S_n$ 减去 $rS_n$："
    },
    {
      "t": "p",
      "md": "$$S_n-rS_n=a-ar^{n+1}\\quad\\Longrightarrow\\quad S_n=\\frac{a\\left(1-r^{n+1}\\right)}{1-r}.$$"
    },
    {
      "t": "p",
      "md": "当 $|r|<1$ 时 $r^{n+1}\\to0$（$n\\to\\infty$），于是"
    },
    {
      "t": "p",
      "md": "$$\\lim_{n\\to\\infty}S_n=\\lim_{n\\to\\infty}\\frac{a\\left(1-r^{n+1}\\right)}{1-r}=\\frac{a}{1-r}.$$"
    },
    {
      "t": "note",
      "md": "**Theorem (1.1) Geometric Progression**：对 $a\\ne0$ 且 $|r|<1$，几何级数 $\\displaystyle\\sum_{n=0}^{\\infty}ar^n$ 收敛：$$a+ar+ar^2+ar^3+\\cdots+ar^n+\\cdots=\\frac{a}{1-r}.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 1.5** 证明 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{2^n}=1$。"
    },
    {
      "t": "p",
      "md": "**Solution 1.5** 这是几何级数，其中 $a=1$、$r=\\dfrac12$（注意求和从 $n=1$ 开始，故首项为 $\\dfrac12$）。由 Theorem 1.1：$$1+\\frac12+\\frac14+\\cdots=\\sum_{n=0}^{\\infty}\\left(\\frac12\\right)^n=\\frac{1}{1-\\frac12}=2,$$ 于是 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{2^n}=2-1=1$。"
    },
    {
      "t": "p",
      "md": "**Exercise 1.6** 把 [[repeating decimal|循环小数]] $0.17=0.17171717\\dots$ 写成一个有理数。"
    },
    {
      "t": "p",
      "md": "**Solution 1.6** 这是几何级数，其中首项为 $0.17=\\dfrac{17}{100}$、公比为 $0.01=\\dfrac{1}{100}$："
    },
    {
      "t": "p",
      "md": "$$0.171717\\dots=0.17+0.0017+0.000017+\\cdots=0.17(0.01)^0+0.17(0.01)^1+0.17(0.01)^2+\\cdots$$"
    },
    {
      "t": "p",
      "md": "$$=\\sum_{n=0}^{\\infty}0.17\\,(0.01)^n=\\frac{0.17}{1-0.01}=\\frac{0.17}{0.99}=\\frac{17}{99}.$$"
    },
    {
      "t": "h",
      "md": "六、回到 Zeno：级数收敛解决悖论了吗？"
    },
    {
      "t": "p",
      "md": "由 Exercise 1.5，Figure 1 中相邻标记之间无穷多个距离之和确为 $1$，与预期一致。这一事实常被误当作「Zeno 错了」的证明，但它其实**没有真正触及 Zeno 的论证**：人是试图从几何级数的末端 —— 那个「无穷端」—— 开始运动，而不是从起点（即 $n=0$）开始。Zeno 的要点仍然是：在那个末端**不存在「第一步」**。"
    },
    {
      "t": "p",
      "md": "事实上，即使把人换到另一端出发，使他先走一段距离 $\\dfrac12$，再走 $\\dfrac14$，如此继续（Figure 2），仍会引入新的问题：无论他离终点多近，他都在继续移动。这样又变成**没有「最后一步」**，运动依然不可能。"
    },
    {
      "t": "p",
      "md": "几何级数的收敛误导许多人认为「无穷多次运动可以在有限时间内完成，所以 Zeno 错了」，但这条论证至少有两点站不住脚。第一，Zeno 从未讨论时间 —— 时间对他的悖论毫不相干。更根本的缺陷是：一旦引入时间，就带来了速度（通常被取为常数）这一概念；速度是距离除以时间，而**恰恰是其中「距离」这一部分被 Zeno 拒绝承认可以被走完**。换句话说，用「假设运动是可能的」去「证明运动是可能的」属于循环论证，因而有缺陷。"
    },
    {
      "t": "p",
      "md": "Zeno 悖论并非纯数学问题 —— 它关于空间，因而是物理问题，还带有一点哲学色彩。物理学家已认识到这一点，也指出了纯数学式反驳的缺陷，并提出了新的论证，其中有些更为精巧；但它们最终都难免某种循环论证。这一切都质疑了最初的假设：**空间的无限可分性**。如果空间存在某个不可再分的最小单位，就不存在悖论 —— 有限距离上的运动总可以分解为数目很大但**有限**的不可分步骤。（注：空间究竟是连续的还是离散（量子化）的，目前尚无定论。这样的「最小单位」必须小于 Planck 尺度 —— 约 $10^{-33}$ cm，远低于当前的测量能力。圈量子引力领域的一些近期进展提示空间量子化的可能。）"
    },
    {
      "t": "h",
      "md": "七、Power Series 幂级数"
    },
    {
      "t": "p",
      "md": "[[power series|幂级数]]（power series）是各项含常数 $a_n$ 与 $x-c$ 的幂的无穷级数，其中 $x$ 是变量、$c$ 是常数：$\\displaystyle\\sum_{n=0}^{\\infty}a_n(x-c)^n$。很多情形下 $c=0$。例如几何级数"
    },
    {
      "t": "p",
      "md": "$$\\sum_{n=0}^{\\infty}r^n=1+r+r^2+\\cdots=\\frac{1}{1-r}$$"
    },
    {
      "t": "p",
      "md": "在 $|r|<1$ 即 $-1<r<1$ 时收敛，如前面所示。把常数 $r$ 换成变量 $x$，便得到幂级数"
    },
    {
      "t": "p",
      "md": "$$\\sum_{n=0}^{\\infty}x^n=1+x+x^2+x^3+\\cdots=\\frac{1}{1-x},$$"
    },
    {
      "t": "p",
      "md": "它在 $-1<x<1$ 时收敛到 $\\dfrac{1}{1-x}$。注意当 $|x|\\ge1$ 时该级数发散，依据 [[n-th Term Test|第 n 项判别法]]。"
    },
    {
      "t": "note",
      "md": "**关于收敛半径**：PPT 用 $|x-c|<R$ 描述幂级数的收敛范围，这个 $R$ 就是通常所说的 $f$ 的 [[radius of convergence|收敛半径]]（radius of convergence）。端点 $x=c\\pm R$ 处的收敛性需要单独检验。"
    },
    {
      "t": "warn",
      "md": "**本讲用到的判别工具范围**：本讲 PPT 判断收敛 / 发散只用到 **几何级数的收敛性（Theorem 1.1）**、**第 n 项判别法（n-th Term Test）** 以及**端点单独检验**。PPT 中并未给出比值判别法、根值判别法、$p$-级数的一般结论，故本笔记不涉及这些内容。"
    },
    {
      "t": "h",
      "md": "八、幂级数的逐项求导与逐项积分（Theorem 2.1）"
    },
    {
      "t": "note",
      "md": "**Theorem (2.1)** 对在 $|x-c|<R$ 上收敛的幂级数 $f(x)=\\displaystyle\\sum_{n=0}^{\\infty}a_n(x-c)^n$，它既可以**逐项求导**也可以**逐项积分**：$$f'(x)=\\sum_{n=1}^{\\infty}n\\,a_n(x-c)^{n-1},\\qquad \\int f(x)\\,dx=C+\\sum_{n=0}^{\\infty}\\frac{a_n}{n+1}(x-c)^{n+1},$$ 并且这两个级数都在 $|x-c|<R$ 上收敛。"
    },
    {
      "t": "warn",
      "md": "定理**没有**说明 $f'(x)$ 或 $\\int f(x)\\,dx$ 在区间 $|x-c|<R$ 的**端点**处是否收敛。每一种情形下端点的收敛性都必须**单独检验**。"
    },
    {
      "t": "p",
      "md": "**Exercise 2.1** 写出 $f(x)=\\displaystyle\\sum_{n=0}^{\\infty}x^n$ 的导数的幂级数形式，并求其收敛区间。$f'(x)$ 能写成非级数形式吗？"
    },
    {
      "t": "p",
      "md": "**Solution 2.1** 逐项求导："
    },
    {
      "t": "p",
      "md": "$$f'(x)=\\frac{d}{dx}\\left(1+x+x^2+x^3+\\cdots\\right)=0+1+2x+3x^2+\\cdots=\\sum_{n=1}^{\\infty}nx^{n-1}.$$"
    },
    {
      "t": "p",
      "md": "由于 $f(x)$ 在 $-1<x<1$ 上收敛，故 $f'(x)$ 也在其上收敛。检验端点：在 $x=1$ 与 $x=-1$ 处，$f'(x)$ 的级数分别为 $\\displaystyle\\sum_{n=1}^{\\infty}n$ 与 $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n-1}n$，由第 n 项判别法**两者都发散**。因此 $f'(x)$ 的收敛区间为 $-1<x<1$。又因 $f(x)=\\dfrac{1}{1-x}$（$-1<x<1$），故"
    },
    {
      "t": "p",
      "md": "$$f'(x)=\\frac{1}{(1-x)^2}\\qquad(-1<x<1).$$"
    },
    {
      "t": "p",
      "md": "也就是说"
    },
    {
      "t": "p",
      "md": "$$\\sum_{n=1}^{\\infty}nx^{n-1}=1+2x+3x^2+\\cdots=\\frac{1}{(1-x)^2}\\qquad(-1<x<1).$$"
    },
    {
      "t": "h",
      "md": "九、Taylor's Series 泰勒级数"
    },
    {
      "t": "p",
      "md": "上一节中，一些函数（例如 $f(x)=\\dfrac{1}{1-x}$）恰好是某个幂级数之和。本节讨论把函数表示成幂级数的**一般方法**，称为 [[Taylor's series|泰勒级数]]。"
    },
    {
      "t": "p",
      "md": "假设函数 $f(x)$ 可以写成 $f(x)=\\displaystyle\\sum_{n=0}^{\\infty}a_n(x-c)^n$，或者对一切 $x$ 成立，或者在 $|x-c|<R$ 上成立（$R>0$）。那么 $f(c)=a_0$。逐项求导可得："
    },
    {
      "t": "p",
      "md": "$$f'(x)=\\sum_{n=1}^{\\infty}n\\,a_n(x-c)^{n-1}\\ \\Rightarrow\\ f'(c)=1\\cdot a_1$$"
    },
    {
      "t": "p",
      "md": "$$f''(x)=\\sum_{n=2}^{\\infty}n(n-1)a_n(x-c)^{n-2}\\ \\Rightarrow\\ f''(c)=2\\cdot1\\cdot a_2$$"
    },
    {
      "t": "p",
      "md": "$$f'''(x)=\\sum_{n=3}^{\\infty}n(n-1)(n-2)a_n(x-c)^{n-3}\\ \\Rightarrow\\ f'''(c)=3\\cdot2\\cdot1\\cdot a_3$$"
    },
    {
      "t": "p",
      "md": "一般地，$f^{(k)}(x)=\\displaystyle\\sum_{n=k}^{\\infty}n(n-1)(n-2)\\cdots(n-k+1)\\,a_n(x-c)^{n-k}$，故 $f^{(k)}(c)=k!\\,a_k$。于是（因为 $f^{(0)}(x)=f(x)$ 且 $0!=1$）："
    },
    {
      "t": "p",
      "md": "$$a_n=\\frac{f^{(n)}(c)}{n!}\\qquad(n\\ge0).$$"
    },
    {
      "t": "p",
      "md": "这些 $\\{a_n\\}$ 就是 $f(x)$ 在 $x=c$ 处的 [[Taylor's series coefficients|泰勒级数系数]]。$f(x)$ 的完整幂级数表示可以叙述如下："
    },
    {
      "t": "note",
      "md": "**Theorem (3.1) Taylor's Series** 泰勒公式（Taylor's formula）：若 $f(x)$ 有关于 $x-c$ 的幂级数表示，且 $x=c$ 落在收敛区间内部，那么该表示在区间内是**唯一**的，并由下式给出：$$f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(c)}{n!}(x-c)^n$$ 对区间内所有 $x$ 成立。这就是 $f(x)$ 在 $x=c$ 处的泰勒级数。"
    },
    {
      "t": "h",
      "md": "十、基本展开（Exercise 3.1–3.5）"
    },
    {
      "t": "p",
      "md": "**Exercise 3.1** 求 $f(x)=e^x$ 在 $x=0$ 处的泰勒级数。"
    },
    {
      "t": "p",
      "md": "**Solution 3.1** 因为 $\\dfrac{d}{dx}\\left(e^x\\right)=e^x$，所以对一切 $n\\ge0$ 有 $f^{(n)}(x)=e^x$，从而 $f^{(n)}(0)=e^0=1$。于是由取 $c=0$ 的泰勒公式："
    },
    {
      "t": "p",
      "md": "$$e^x=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n=\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\frac{x^4}{4!}+\\frac{x^5}{5!}+\\cdots$$"
    },
    {
      "t": "p",
      "md": "这个泰勒级数在何时成立？它的 [[interval of convergence|收敛区间]] 是**整个 $\\mathbb{R}$**，因此上面的泰勒级数对一切 $x$ 成立。"
    },
    {
      "t": "note",
      "md": "泰勒公式中 $c=0$ 的特殊情形，有时称为 $f(x)$ 的 [[Maclaurin's series|麦克劳林级数]]（Maclaurin 级数），不过在数学以外的研究领域中通常不使用这个术语。"
    },
    {
      "t": "p",
      "md": "继续之前，你可能会问：为什么要费劲去求泰勒级数？在上面的例子里，为什么要把 $e^x$ 这样一个简单的函数换成一个复杂得多的表达式？原因之一是它常常有助于**简化某些计算，尤其是在积分中**。思路是只取级数中的少数几项，即用一个多项式作近似，因为多项式通常更易处理。也许出乎意料：在许多实际应用中**不超过两项就已足够**，往往只需一项。"
    },
    {
      "t": "p",
      "md": "例如，只用 Exercise 3.1 中 $e^x$ 泰勒级数的前两项，当 $x$ 接近 $0$（即 $|x|\\ll1$）时 $e^x\\approx1+x$ 就是一个很好的近似。项数取多了未必有帮助 —— 当 $|x|\\ll1$ 且 $n>1$ 时 $x^n$ 实际上等于 $0$，因此增加的复杂性并不会让近似显著变好。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.2** 求 $f(x)=\\sin x$ 在 $x=0$ 处的泰勒级数。"
    },
    {
      "t": "p",
      "md": "**Solution 3.2** $f(x)=\\sin x$ 的各阶导数每四个一循环：$$f(x)=\\sin x,\\quad f'(x)=\\cos x,\\quad f''(x)=-\\sin x,\\quad f'''(x)=-\\cos x,\\quad f^{(4)}(x)=\\sin x.$$ 于是在 $x=0$ 处：$f(0)=0$，$f'(0)=1$，$f''(0)=0$，$f'''(0)=-1$，$f^{(4)}(0)=0$。故对 $n\\ge0$：$f^{(n)}(0)$ 在 $n$ 为偶数时为 $0$，在 $n=1,5,9,\\dots$ 时为 $1$，在 $n=3,7,11,\\dots$ 时为 $-1$。由取 $c=0$ 的泰勒公式："
    },
    {
      "t": "p",
      "md": "$$\\sin x=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}+\\cdots=\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}.$$"
    },
    {
      "t": "p",
      "md": "**Exercise 3.3** 求 $f(x)=\\cos x$ 在 $x=0$ 处的泰勒级数。"
    },
    {
      "t": "p",
      "md": "**Solution 3.3** 可以用与 Exercise 3.2 完全相同的步骤求得，但更简单的做法是直接对 $\\sin x$ 的泰勒级数逐项求导（对一切 $x$）："
    },
    {
      "t": "p",
      "md": "$$\\cos x=\\frac{d}{dx}(\\sin x)=\\frac{d}{dx}\\left(x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}+\\frac{x^9}{9!}-\\cdots\\right)$$"
    },
    {
      "t": "p",
      "md": "$$=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\cdots=\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!}.$$"
    },
    {
      "t": "p",
      "md": "由于 $\\sin x$ 的泰勒级数对一切 $x$ 收敛，它的导数也如此。因此 $\\cos x$ 的泰勒级数对一切 $x$ 收敛。"
    },
    {
      "t": "note",
      "md": "注意 $\\cos x$ 的泰勒级数只含 $x$ 的**偶次幂**，而 $\\sin x$ 的级数只含 $x$ 的**奇次幂**。这与 $\\cos x$ 和 $\\sin x$ 分别是 [[even function|偶函数]] 与 [[odd function|奇函数]] 相符。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.4** 函数 $\\ln x$ 在 $x=0$ 处没有定义，因此没有关于 $x=0$ 的泰勒级数。改为求 $f(x)=\\ln(1+x)$ 在 $x=0$ 处的泰勒级数。"
    },
    {
      "t": "p",
      "md": "**Solution 3.4** 逐次求导："
    },
    {
      "t": "p",
      "md": "$$f'(x)=\\frac{1}{1+x},\\qquad f''(x)=-\\frac{1}{(1+x)^2},\\qquad f'''(x)=\\frac{1\\cdot2}{(1+x)^3},\\ \\dots$$"
    },
    {
      "t": "p",
      "md": "故 $f(0)=0$，且对 $n\\ge1$："
    },
    {
      "t": "p",
      "md": "$$f^{(n)}(x)=\\frac{(-1)^{n-1}(n-1)!}{(1+x)^n}\\ \\Longrightarrow\\ f^{(n)}(0)=(-1)^{n-1}(n-1)!.$$"
    },
    {
      "t": "p",
      "md": "于是由泰勒公式："
    },
    {
      "t": "p",
      "md": "$$\\ln(1+x)=\\sum_{n=1}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n=\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}(n-1)!}{n!}x^n=\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n}x^n$$"
    },
    {
      "t": "p",
      "md": "$$=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\frac{x^4}{4}+\\frac{x^5}{5}-\\cdots$$"
    },
    {
      "t": "p",
      "md": "因此该级数在 $-1<x\\le1$ 上收敛。"
    },
    {
      "t": "p",
      "md": "**Exercise 3.5** 求 $f(x)=e^{x^2}$ 在 $x=0$ 处的泰勒级数。"
    },
    {
      "t": "p",
      "md": "**Solution 3.5** 可以用与 Exercise 3.1 相同的步骤，但更简单的做法是直接对 $e^u$ 的泰勒级数中的每个 $u$ 换成 $x^2$（因为 $e^u$ 的级数对一切 $x$ 收敛）。也就是说，在 $e^u$ 关于 $u=0$ 的泰勒级数中作代换 $u=x^2$："
    },
    {
      "t": "p",
      "md": "$$e^u=\\sum_{n=0}^{\\infty}\\frac{u^n}{n!}\\ \\Longrightarrow\\ e^{x^2}=\\sum_{n=0}^{\\infty}\\frac{\\left(x^2\\right)^n}{n!}=\\sum_{n=0}^{\\infty}\\frac{x^{2n}}{n!}=1+x^2+\\frac{x^4}{2!}+\\frac{x^6}{3!}+\\frac{x^8}{4!}+\\frac{x^{10}}{5!}+\\cdots$$"
    },
    {
      "t": "tbl",
      "head": [
        "函数",
        "Taylor / Maclaurin 级数",
        "收敛范围",
        "出处"
      ],
      "rows": [
        [
          "$e^x$",
          "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$",
          "一切实数",
          "Exercise 3.1"
        ],
        [
          "$\\sin x$",
          "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$",
          "一切实数",
          "Exercise 3.2"
        ],
        [
          "$\\cos x$",
          "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!}$",
          "一切实数",
          "Exercise 3.3"
        ],
        [
          "$\\ln(1+x)$",
          "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^n}{n}$",
          "$-1<x\\le1$",
          "Exercise 3.4"
        ],
        [
          "$e^{x^2}$",
          "$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n}}{n!}$",
          "一切实数（代换 $u=x^2$）",
          "Exercise 3.5"
        ],
        [
          "$\\dfrac{1}{1-x}$",
          "$\\displaystyle\\sum_{n=0}^{\\infty}x^n$",
          "$-1<x<1$",
          "第七节 / Exercise 2.1"
        ]
      ]
    },
    {
      "t": "h",
      "md": "十一、Taylor 多项式与 $O(x^n)$ 近似"
    },
    {
      "t": "p",
      "md": "定义函数 $f(x)$ 在 $x=c$ 处的 **$n$ 次 [[Taylor polynomial|泰勒多项式]]** $P_n(x)$ 为"
    },
    {
      "t": "p",
      "md": "$$P_n(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(c)}{k!}(x-c)^k=f(c)+f'(c)(x-c)+\\frac{f''(c)}{2!}(x-c)^2+\\cdots+\\frac{f^{(n)}(c)}{n!}(x-c)^n,$$"
    },
    {
      "t": "p",
      "md": "其中 $x$ 取在完整泰勒级数的收敛区间内。换句话说，$P_n(x)$ 就是泰勒级数的**第 $n$ 个部分和**。由于某些系数可能为零，$P_n(x)$ 是次数**至多**为 $n$ 的多项式。因此 $P_n(x)=O(x^n)$；正因如此，$P_n(x)$ 有时被称为 $f(x)$ 的 $O(x^n)$ 近似。"
    },
    {
      "t": "p",
      "md": "Figure 3 把 $\\sin x$ 与它的几个近似作了比较。可以看到，$7$ 次、$11$ 次与 $15$ 次的泰勒多项式在区间 $[-2,2]$ 上都是很好的近似，其中 $O(x^{15})$ 近似在 $[-6,6]$ 上仍相当好。显然当 $|x|>6$ 时这些近似都很快变差 —— 它们趋向 $\\infty$，而 $\\sin x$ 不会。下面这个定理说明如何度量近似的精度。"
    },
    {
      "t": "h",
      "md": "十二、余项与 Taylor 不等式"
    },
    {
      "t": "note",
      "md": "**Theorem (3.2) Remainder Theorem** 若 $P_n(x)$ 是函数 $f(x)$ 在某个包含 $x=c$ 的区间上关于 $x=c$ 的 $n$ 次泰勒多项式，则对该区间内所有 $x$，$$f(x)=P_n(x)+R_n(x),$$ 其中 $$R_n(x)=\\frac{f^{(n+1)}\\left(c+\\theta(x-c)\\right)}{(n+1)!}(x-c)^{n+1}$$ 对某个介于 $0$ 与 $1$ 之间的数 $\\theta$ 成立。等价地，$$R_n(x)=\\frac{1}{n!}\\int_c^x (x-t)^n f^{(n+1)}(t)\\,dt.$$"
    },
    {
      "t": "p",
      "md": "由于式中的数 $\\theta$ 未知，通常只能由上式求出 $R_n(x)$（[[remainder|余项]]）的一个**上界**。就实际用途而言，$R_n(x)$ 的积分形式可能更易使用（借助数值积分）。"
    },
    {
      "t": "p",
      "md": "一个常见的误解是：手持计算器使用泰勒级数来计算 $\\sin x$、$\\cos x$、$e^x$ 等函数的值。但这通常远远超出它们的能力，尤其是当 $x$ 很大时 —— 需要的项数太多了。实际上，许多计算器使用一种称为 **CORDIC（Coordinate Rotation Digital Computer，坐标旋转数字计算机）** 的算法，以及（也许令人意外地）**查表**：CORDIC 利用计算代价很低的移位运算把很大的输入值变换到较小的范围，再用内存中存储的表格查该范围内的值，并对表中数值之间的数作插值。"
    },
    {
      "t": "note",
      "md": "**Theorem (3.3) [[Taylor's Inequality|泰勒不等式]]** 若对 $|x-a|\\le d$ 有 $\\left|f^{(n+1)}(x)\\right|\\le M$，则泰勒级数的余项 $R_n(x)$ 满足不等式 $$\\left|R_n(x)\\right|\\le\\frac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\qquad(|x-a|\\le d).$$"
    },
    {
      "t": "note",
      "md": "**Theorem (3.4) Remainder: Differential Form（余项的微分形式）** 若 $f^{(n+1)}$ 在包含 $a$ 的开区间 $I$ 上连续，且 $x\\in I$，则存在介于 $a$ 与 $x$ 之间的数 $\\xi$，使得 $$R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}.$$"
    }
  ],
  "terms": [
    [
      "Zeno's paradox",
      "芝诺悖论"
    ],
    [
      "sequence",
      "序列"
    ],
    [
      "series",
      "级数"
    ],
    [
      "limit",
      "极限"
    ],
    [
      "convergent",
      "收敛（序列）"
    ],
    [
      "divergent",
      "发散"
    ],
    [
      "partial sum",
      "部分和"
    ],
    [
      "geometric progression",
      "几何级数（等比级数）"
    ],
    [
      "recurrence relation",
      "递推关系"
    ],
    [
      "Fibonacci sequence",
      "斐波那契数列"
    ],
    [
      "golden ratio",
      "黄金比"
    ],
    [
      "repeating decimal",
      "循环小数"
    ],
    [
      "power series",
      "幂级数"
    ],
    [
      "radius of convergence",
      "收敛半径"
    ],
    [
      "interval of convergence",
      "收敛区间"
    ],
    [
      "n-th Term Test",
      "第 n 项判别法"
    ],
    [
      "Taylor's series",
      "泰勒级数"
    ],
    [
      "Taylor's series coefficients",
      "泰勒级数系数"
    ],
    [
      "Maclaurin's series",
      "麦克劳林级数"
    ],
    [
      "Taylor polynomial",
      "泰勒多项式"
    ],
    [
      "remainder",
      "余项"
    ],
    [
      "Taylor's Inequality",
      "泰勒不等式"
    ],
    [
      "even function",
      "偶函数"
    ],
    [
      "odd function",
      "奇函数"
    ]
  ],
  "qids": [
    "fin-4-07",
    "fin-4-11",
    "fin-4-09",
    "fin-4-10",
    "fin-4-12",
    "past-4-01",
    "past-4-02"
  ]
});

  FCMS.registerNotes({ subjectId: 'AMA1702', topics: T });
})(typeof window !== 'undefined' ? window : globalThis);
