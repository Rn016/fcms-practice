/* ==========================================================================
   COMP1010 Computational Thinking and Problem Solving —— 学科定义 + 题库
   --------------------------------------------------------------------------
   依据 Lecture 1–12、Lab 1–12、2023/2024/2025 三份期末卷、2025 Quiz 1-2 与
   Assignment 1-2 编排。
   所有 Python 代码题的输出均由真实解释器运行取得（见 /tmp/fcms/c1010/outputs.py），
   不依赖手算，避免预期值写错。
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('subjects/comp1010.js: 必须先加载 js/registry.js');

  var Q = [];

  /* ============ 1. 计算思维与计算机基础 ============ */
  Q.push(
  {
    id: 'p1-1-01', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 2, examRef: '2025 卷 Q13',
    prompt: '在「准备项目展示」这个场景中，**分解（decomposition）**指的是什么？',
    blanks: [{ label: '分解的含义', answer: {
      exact: 'breaking a complex problem down into smaller, more manageable sub-problems',
      alts: [
        'break a big problem into smaller sub-problems',
        'Break the problem into smaller manageable parts',
        'divide the problem into smaller subproblems',
        'breaking down a complex problem into smaller parts',
        'split a large problem into several smaller and easier sub-problems',
        'decompose a complex problem into smaller parts that are easier to solve',
        '把大问题拆成若干小问题',
        '把一个大问题分解成若干更小的子问题',
        '将一个复杂问题拆分成多个更小的子问题',
        '把问题拆开，分成几个小部分'
      ], setLike: false } }],
    solution: [
      '<b>Decomposition（分解）</b>：把一个复杂的大问题拆解成若干个更小、更易处理的子问题。',
      '以项目展示为例：整个任务可拆成「撰写报告」「制作海报」「准备演讲并排练」等子任务，',
      '每个子任务还能继续细分（如海报 → 选题、排版、配图、校对）。',
      '好处：每个子问题更容易理解、解决和分工，且便于并行推进与检查遗漏。',
      '<b>四种计算思维要素</b>：decomposition（分解）、abstraction（抽象）、pattern recognition（模式识别）、algorithm design（算法设计）。'
    ]
  },
  {
    id: 'p1-1-02', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 2, examRef: '2025 卷 Q13',
    prompt: '**抽象（abstraction）**如何帮助简化项目展示的准备过程？',
    blanks: [{ label: '抽象的作用', answer: { exact: 'focus on important details and ignore irrelevant ones', alts: ['Hiding unnecessary details and keeping only the essential ones', '忽略无关细节，只保留关键信息', 'filter out irrelevant details', 'focus on the essential features'], setLike: false } }],
    solution: [
      '<b>Abstraction（抽象）</b>：抽取出关键特征，忽略与当前目标无关的细节。',
      '举例：做海报时不必关心打印机的内部构造，只需知道「能输出 A1 彩印」；',
      '安排时间时不必考虑每位同学的完整课表，只需知道「哪些时段有人有空」。',
      '这样可以把注意力集中在真正影响结果的因素上，降低问题复杂度。',
      '在编程中：函数名与参数就是抽象 —— 调用 <code>sort()</code> 无需了解其内部排序算法。'
    ]
  },
  {
    id: 'p1-1-03', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: '2025 卷 Q13',
    prompt: '**模式识别（pattern recognition）**可以如何帮助准备项目展示的学生？',
    blanks: [{ label: '模式识别的作用', answer: { exact: 'find similarities among problems and reuse previous solutions', alts: ['Spotting common features or repeated structures and reusing solutions', '发现重复出现的结构，复用已有做法', 'identify similarities and apply known solutions'], setLike: false } }],
    solution: [
      '<b>Pattern recognition（模式识别）</b>：在不同问题中发现共同的结构或规律，从而复用已有的解决方法。',
      '举例：',
      '① 每组的展示都是「介绍 → 演示 → 问答」，可套用同一份流程模板；',
      '② 多位同学都需要做 PPT，可共用母版与配色方案；',
      '③ 往年展示的评分标准类似，可据此有针对性地准备。',
      '在编程中：发现「求最大值」在列表、字典、二维表里结构相同，就能写一个通用函数。'
    ]
  },
  {
    id: 'p1-1-04', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: '2024 卷 Q13',
    prompt: '解释器（interpreter）与编译器（compiler）的主要区别是什么？',
    blanks: [{ label: '主要区别', answer: { exact: 'interpreter translates and runs line by line; compiler translates the whole program first', alts: ['An interpreter executes code line by line, a compiler translates the entire program before execution', '解释器逐行翻译并执行，编译器先把整个程序翻译成机器码', 'interpreter executes as it translates; compiler produces an executable first'], setLike: false } }],
    solution: [
      '<b>编译器（compiler）</b>：一次性把整个源程序翻译成目标代码（机器码/字节码），生成可执行文件后再运行。',
      '<b>解释器（interpreter）</b>：逐行读取源代码，翻译一行、执行一行，不生成独立的可执行文件。',
      '<b>何时用哪个：</b>',
      '· <b>编译器更好</b>：程序需要反复运行、追求执行速度（如操作系统、游戏引擎）；也便于把源码分发给不想暴露源码的用户。',
      '· <b>解释器更好</b>：开发调试阶段（改一行即可运行，无需重新编译）；跨平台分发；教学与脚本任务。',
      'Python 属于解释型语言（先编译成字节码再由 PVM 执行，兼具两者特征）。',
      '其他差异：编译型语言的语法错误在编译阶段一次性全部报出；解释型语言只在执行到该行时才报错。'
    ]
  },
  {
    id: 'p1-1-05', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: '2024 卷 Q14',
    prompt: '计算机只能理解二进制，为什么我们仍需要十六进制或八进制？',
    blanks: [{ label: '需要的原因', answer: { exact: 'they are a compact shorthand for binary', alts: ['Hexadecimal and octal are shorter, more readable ways to write binary', '十六进制/八进制是二进制的紧凑简写，便于人读写', 'they compress binary into fewer digits for human readability'], setLike: false } }],
    solution: [
      '<b>核心原因：进制之间可以「无损、按位」直接换算，所以十六/八进制是二进制的人类友好简写。</b>',
      '① 换算极简单：1 位十六进制 $=4$ 位二进制；1 位八进制 $=3$ 位二进制。',
      '   例：$\\texttt{0xD} = \\texttt{0b1101}$，$\\texttt{0o15} = \\texttt{0b001101}$。',
      '② 更短更好读：32 位二进制要写 32 个字符，写成十六进制只需 8 个。',
      '   例：$\\texttt{0b11111111111111111111111111111111}$ 即 $\\texttt{0xFFFFFFFF}$。',
      '③ 少出错：位数多时人眼容易数错、抄错；分组书写显著降低错误率。',
      '④ 实际用途：内存地址、颜色值（<code>#FF8800</code>）、文件权限（<code>chmod 755</code>）、',
      '   位掩码与 Unicode 码点（<code>U+4E2D</code>）等都惯用十六进制。',
      '注意：十六进制<b>并不</b>被计算机直接理解 —— 它只是书写与阅读的便利形式，最终仍要转成二进制。'
    ]
  },
  {
    id: 'p1-1-06', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: '2024 卷 Q17',
    prompt: '纯文本文件（plain text file）与二进制文件（binary file）有什么区别？为什么两种都要有？',
    blanks: [{ label: '主要区别', answer: { exact: 'plain text stores human-readable characters; binary stores raw bytes', alts: ['Text files store readable characters, binary files store raw bytes not meant to be read as text', '纯文本存可读字符，二进库存原始字节'], setLike: false } }],
    solution: [
      '<b>纯文本文件</b>：内容按字符编码（ASCII/UTF-8）存储，用普通文本编辑器即可阅读和修改。',
      '例：<code>.txt</code>、<code>.csv</code>、<code>.py</code>、<code>.json</code>。',
      '<b>二进制文件</b>：内容按特定格式存储原始字节，需专门程序解释，直接当文本打开会乱码。',
      '例：图片 <code>.png</code>、音频 <code>.mp3</code>、压缩包 <code>.zip</code>、可执行文件 <code>.exe</code>。',
      '<b>为什么都需要：</b>',
      '· 用文本：需要人可读、可手工编辑、跨程序/跨平台交换数据、便于版本管理（diff）。',
      '· 用二进制：需要更紧凑的体积、更快的读写速度、精确保存任意字节（如浮点位模式、图像像素）。',
      '典型例子：同一张图片，存成 <code>.csv</code> 那样的文本会大很多倍且无法精确表示像素；',
      '反过来，一份配置文件若用二进制存，就无法用记事本快速改了。'
    ]
  },
  {
    id: 'p1-1-07', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 1, difficulty: 2, examRef: 'Lecture 1',
    prompt: '求 $\\texttt{bin}(13)$ 的输出（含前缀）。',
    blanks: [{ label: '$\\texttt{bin}(13)$', answer: { exact: '0b1101', alts: ['0B1101'] } }],
    solution: [
      '$13 = 8 + 4 + 1 = 2^{3} + 2^{2} + 2^{0}$，写成二进制即 $1101_{2}$。',
      'Python 的 <code>bin()</code> 会加上 <code>0b</code> 前缀，故输出 <code>0b1101</code>。',
      '对照：<code>oct(13)</code> → <code>0o15</code>（$1\\times8+5=13$）；',
      '<code>hex(13)</code> → <code>0xd</code>（<code>d</code> 表示 13）。'
    ]
  },
  {
    id: 'p1-1-08', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 1, difficulty: 2, examRef: 'Lecture 1',
    prompt: '求 $\\texttt{hex}(255)$ 的输出（含前缀，小写）。',
    blanks: [{ label: '$\\texttt{hex}(255)$', answer: { exact: '0xff', alts: ['0xFF', '0Xff', '0XFF'] } }],
    solution: [
      '$255 = 15\\times16 + 15$，而 15 在十六进制中记作 <code>f</code>。',
      '故 $255_{10} = \\texttt{ff}_{16}$，Python 输出 <code>0xff</code>。',
      '记忆点：1 字节（8 位）的取值范围 $0\\sim255$ 恰好是 <code>0x00</code> ~ <code>0xff</code>，共 256 个值。'
    ]
  },
  {
    id: 'p1-1-09', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: 'Lecture 1',
    prompt: '求 $\\texttt{0b1101}$ 的十进制值。',
    blanks: [{ label: '十进制值', answer: { exact: '13' } }],
    solution: [
      '$\\texttt{0b1101}$ 各位权值为 $2^{3},2^{2},2^{1},2^{0}$：',
      '$1\\cdot8 + 1\\cdot4 + 0\\cdot2 + 1\\cdot1 = 8+4+0+1 = 13$。'
    ]
  },
  {
    id: 'p1-1-10', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: 'Lecture 1 / 2024 卷',
    prompt: '求 $17 \\div 5$ 的商与余数（用 Python 的 $\\texttt{divmod}$ 形式回答，即 $\\texttt{(商, 余数)}$）。',
    blanks: [{ label: '$\\texttt{divmod}(17,5)$', answer: { exact: '(3, 2)', alts: ['3 2', '3,2'] } }],
    solution: [
      '$17 = 3\\times5 + 2$，故商 3、余数 2。',
      'Python：<code>divmod(17, 5)</code> → <code>(3, 2)</code>；',
      '等价写法：<code>17 // 5</code> → 3，<code>17 % 5</code> → 2。'
    ]
  },
  {
    id: 'p1-1-11', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 3, difficulty: 4, examRef: 'Lecture 1',
    prompt: '求 $\\texttt{-7 // 2}$ 与 $\\texttt{-7 \\% 2}$ 的值（用逗号分隔）。',
    blanks: [{ label: '$(-7 // 2,\\ -7 \\% 2)$', answer: { exact: '-4,1', alts: ['-4 1', '(-4, 1)'], setLike: true } }],
    solution: [
      '<b>关键：Python 的整除是「向下取整」（floor），不是向零取整。</b>',
      '$-7/2 = -3.5$，向下取整得 $-4$，故 <code>-7 // 2</code> → <code>-4</code>。',
      '余数满足 $a = (a//b)\\cdot b + (a\\%b)$：$-7 = (-4)\\cdot2 + 1$，故 <code>-7 % 2</code> → <code>1</code>。',
      '<b>易错点：</b>C/Java 中 $-7/2 = -3$、$-7\\%2 = -1$（向零取整）；Python 结果不同。',
      '记忆：Python 中余数的符号总是与<b>除数</b>一致。'
    ]
  },
  {
    id: 'p1-1-12', topic: 'ct', topicName: '计算思维 / 计算机基础',
    weight: 2, difficulty: 3, examRef: 'Lecture 2',
    prompt: '求 $\\texttt{0.1 + 0.2 == 0.3}$ 的结果（填 $\\texttt{True}$ 或 $\\texttt{False}$）。',
    blanks: [{ label: '结果', answer: { exact: 'False', alts: ['false', '假'] } }],
    solution: [
      '浮点数按 IEEE 754 二进制存储，$0.1$、$0.2$、$0.3$ 都<b>无法精确表示</b>，只能存近似值。',
      '$0.1+0.2$ 的实际结果是 <code>0.30000000000000004</code>，与 <code>0.3</code> 的存储值不相等。',
      '所以比较结果为 <code>False</code>。',
      '<b>正确做法</b>：用容差比较，例如 <code>abs(0.1+0.2-0.3) &lt; 1e-9</code>；',
      '或在需要精确小数时使用 <code>decimal.Decimal</code>、<code>fractions.Fraction</code>。'
    ]
  }
  );

  /* ============ 2. Python 基础：类型 / 运算 / 字符串 ============ */
  Q.push(
  {
    id: 'p1-2-01', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 2, examRef: 'Lecture 2',
    prompt: '以下代码输出什么？\n<pre>s = "python"\nprint(s[0], s[-1], s[2:5])</pre>',
    blanks: [{ label: '输出', answer: { exact: 'p n tho', alts: ['p n tho', '"p n tho"'] } }],
    solution: [
      '<b>索引：</b><code>s[0]</code> → <code>"p"</code>（第一个字符，下标从 0 开始）。',
      '<b>负索引：</b><code>s[-1]</code> → <code>"n"</code>（倒数第一个字符）。',
      '<b>切片：</b><code>s[2:5]</code> → 下标 2、3、4，即 <code>"t"</code>、<code>"h"</code>、<code>"o"</code> → <code>"tho"</code>。',
      '<b>关键：切片是「左闭右开」</b>，包含起点、不含终点。',
      '综合输出：<code>p n tho</code>（<code>print</code> 用空格分隔多个参数）。',
      '补充：<code>s[::-1]</code> 会得到反转字符串 <code>"nohtyp"</code>。'
    ]
  },
  {
    id: 'p1-2-02', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 3, examRef: 'Lecture 3',
    prompt: '以下代码输出什么？\n<pre>s = "abc"\ntry:\n    s[0] = "x"\nexcept Exception as e:\n    print(type(e).__name__)</pre>',
    blanks: [{ label: '输出', answer: { exact: 'TypeError' } }],
    solution: [
      '<b>字符串在 Python 中是不可变（immutable）对象。</b>',
      '创建后不能通过下标赋值修改其中某个字符，因此 <code>s[0] = "x"</code> 抛出 <code>TypeError</code>。',
      '异常类是 <code>TypeError</code>，<code>type(e).__name__</code> 输出 <code>TypeError</code>。',
      '<b>正确做法</b>：构造新字符串，如 <code>s = "x" + s[1:]</code>。',
      '同为不可变的还有：<code>tuple</code>、<code>frozenset</code>、<code>int</code>、<code>str</code>。',
      '可变的则是：<code>list</code>、<code>dict</code>、<code>set</code>。'
    ]
  },
  {
    id: 'p1-2-03', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 2, examRef: 'Lecture 3',
    prompt: '求 $\\texttt{"banana".count("a")}$ 与 $\\texttt{"banana".find("na")}$ 的值（逗号分隔）。',
    blanks: [{ label: '两个值', answer: { exact: '3,2', alts: ['3 2', '3、2'], setLike: true } }],
    solution: [
      '<code>"banana"</code> 中字母 <code>a</code> 出现在下标 1、3、5，共 <b>3</b> 次 → <code>count</code> 返回 3。',
      '<code>find("na")</code> 返回子串<b>首次出现</b>的起始下标。',
      '<code>"banana"</code>：下标 2、3 处是 <code>"na"</code>，故返回 <b>2</b>。',
      '<b>注意：</b>找不到时 <code>find</code> 返回 <code>-1</code>（不报错），例如 <code>"banana".find("zz")</code> → <code>-1</code>；',
      '而 <code>"banana".index("zz")</code> 会抛出 <code>ValueError</code>。'
    ]
  },
  {
    id: 'p1-2-04', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 3, examRef: 'Lecture 2',
    prompt: '以下代码输出什么？\n<pre>s = "Hello, World"\nprint(s.upper(), s.lower(), s.split(","))</pre>',
    blanks: [{ label: '输出', answer: { exact: "HELLO, WORLD hello, world ['Hello', ' World']", alts: ["HELLO, WORLD hello, world ['Hello', ' World']"] } }],
    solution: [
      '<code>s.upper()</code> → <code>"HELLO, WORLD"</code>（全部转大写）。',
      '<code>s.lower()</code> → <code>"hello, world"</code>（全部转小写）。',
      '<code>s.split(",")</code> → 以逗号为界切分，得到列表 <code>[\'Hello\', \' World\']</code>。',
      '<b>注意空格：</b>切分后第二段保留前导空格（<code>" World"</code>），因为逗号后面的空格属于该段。',
      '若要去掉，可写 <code>s.replace(",", "").split()</code> 或对每段用 <code>.strip()</code>。',
      '综合输出：<code>HELLO, WORLD hello, world [\'Hello\', \' World\']</code>。'
    ]
  },
  {
    id: 'p1-2-05', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 2, examRef: 'Quiz 1',
    prompt: '用 Python 判断字符串 $w$ 是否为回文（palindrome），填写空缺的切片表达式：\n<pre>print("yes" if w == w[____] else "no")</pre>',
    blanks: [{ label: '切片', answer: { exact: '::-1', alts: ['::-1'] } }],
    solution: [
      '切片语法 <code>[start:stop:step]</code>，省略 start/stop 表示取全部。',
      '<code>step = -1</code> 表示从后往前逐个取，因此 <code>w[::-1]</code> 就是反转字符串。',
      '例：<code>"racecar"[::-1]</code> → <code>"racecar"</code>（回文，前后相同）→ 输出 <code>yes</code>。',
      '<b>原卷对应题（2024 卷 Q20）</b>要求写完整程序，另一种写法：',
      '<pre>w = input("Enter a word: ")\nif w == w[::-1]:\n    print("Palindrome")\nelse:\n    print("Not a palindrome")</pre>'
    ]
  },
  {
    id: 'p1-2-06', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 3, examRef: '2025 卷 Q15(a)',
    prompt: '求 $\\texttt{print(eval("1+2"))}$ 的输出。',
    blanks: [{ label: '输出', answer: { exact: '3' } }],
    solution: [
      '<code>eval()</code> 把字符串当作 Python 表达式<b>求值</b>。',
      '<code>eval("1+2")</code> 计算 $1+2$ 得整数 <code>3</code>，<code>print</code> 输出 <code>3</code>。',
      '<b>对比：</b><code>print("1+2")</code> 会直接输出字符串 <code>1+2</code>（不做计算）。',
      '<b>安全提醒：</b><code>eval</code> 会执行任意代码，绝不要用于处理用户输入（例如输入 <code>__import__("os").system("rm -rf /")</code>）。',
      '若只是转换类型，应用 <code>int()</code>、<code>float()</code> 或 <code>ast.literal_eval()</code>。'
    ]
  },
  {
    id: 'p1-2-07', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 3, difficulty: 4, examRef: '2025 卷 Q15(b)',
    prompt: '设 A、B、C 为布尔值。原卷代码写成 $\\texttt{(A || B \\&\\& C) == (A || (B \\&\\& C))}$，在 Python 中会怎样？',
    blanks: [{ label: '结果', answer: { exact: 'Error', alts: ['error', 'SyntaxError', '报错'] } }],
    solution: [
      '<b>会报错。</b><code>||</code> 与 <code>&&</code> 是 C/Java 的逻辑运算符，<b>Python 中不存在</b>。',
      'Python 用的是关键字 <code>or</code>、<code>and</code>、<code>not</code>。',
      '因此该行在解析阶段就抛出 <code>SyntaxError</code>，属于语法错误（连执行都到不了）。',
      '<b>Python 的正确写法及结果：</b>',
      '<pre>A, B, C = True, False, True\nprint((A or B and C) == (A or (B and C)))   # True</pre>',
      '<b>关键知识点 —— 运算符优先级：</b>Python 中 <code>and</code> 的优先级<b>高于</b> <code>or</code>，',
      '所以左边 <code>A or B and C</code> 等价于 <code>A or (B and C)</code>，两边完全相同，结果为 <code>True</code>。',
      '此外 <code>and</code>/<code>or</code> 会<b>短路求值</b>：<code>A or X</code> 在 A 为真时不计算 X。'
    ]
  },
  {
    id: 'p1-2-08', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 2, examRef: '2025 卷 Q15(c)',
    prompt: '求 $\\texttt{print([1,2,3] * 2)}$ 的输出。',
    blanks: [{ label: '输出', answer: { exact: '[1, 2, 3, 1, 2, 3]', alts: ['[1,2,3,1,2,3]', '[1, 2, 3, 1, 2, 3]'] } }],
    solution: [
      '列表与整数相乘表示<b>重复</b>：<code>[1,2,3] * 2</code> 把整个列表重复 2 次。',
      '结果：<code>[1, 2, 3, 1, 2, 3]</code>。',
      '<b>对比：</b><code>[1,2,3] + [4]</code> 是<b>拼接</b>（连接两个列表），结果为 <code>[1, 2, 3, 4]</code>。',
      '字符串同理：<code>"ab" * 3</code> → <code>"ababab"</code>。',
      '<b>陷阱：</b>用乘法复制嵌套列表会得到<b>共享引用</b>：',
      '<pre>g = [[0]] * 3\ng[0][0] = 9\nprint(g)      # [[9], [9], [9]] —— 三行是同一个列表！</pre>',
      '正确写法：<code>g = [[0] for _ in range(3)]</code>。'
    ]
  },
  {
    id: 'p1-2-09', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 3, difficulty: 4, examRef: '2025 卷 Q15(d)',
    prompt: '求以下代码的输出：\n<pre>x = {1:["a","b","c"], 2:[1,2,3], 3:2}\nprint(x[x[2][0]][-2])</pre>',
    blanks: [{ label: '输出', answer: { exact: 'b', alts: ['"b"', "'b'"] } }],
    solution: [
      '<b>由内向外逐层拆解。</b>',
      '<b>第 1 步：</b><code>x[2]</code> → 字典中键 2 对应的值 <code>[1,2,3]</code>。',
      '<b>第 2 步：</b><code>x[2][0]</code> → 该列表的第 0 个元素 <code>1</code>。',
      '<b>第 3 步：</b><code>x[1]</code> → 字典中键 1 对应的值 <code>["a","b","c"]</code>。',
      '<b>第 4 步：</b><code>[-2]</code> → 倒数第二个元素 <code>"b"</code>。',
      '故输出 <code>b</code>。',
      '<b>方法总结：</b>遇到嵌套索引，从左到右、由内向外一步步求值，把中间结果写下来，就不容易错。'
    ]
  },
  {
    id: 'p1-2-10', topic: 'basics', topicName: 'Python 基础（类型·运算·字符串）',
    weight: 2, difficulty: 3, examRef: 'Lecture 2',
    prompt: '求 $\\texttt{2 ** 10}$ 与 $\\texttt{pow(2, 10, 1000)}$ 的值（逗号分隔）。',
    blanks: [{ label: '两个值', answer: { exact: '1024,24', alts: ['1024 24', '1024、24'], setLike: true } }],
    solution: [
      '<code>2 ** 10</code> → $2^{10} = 1024$（幂运算）。',
      '<code>pow(2, 10, 1000)</code> 是<b>三参数形式</b>：计算 $2^{10} \\bmod 1000$。',
      '$1024 \\bmod 1000 = 24$，故返回 24。',
      '<b>三参数 pow 的意义：</b>对大指数取模时，它内部用快速幂，不会先算出天文数字再取模。',
      '例：<code>pow(2, 10**9, 7)</code> 瞬间得到结果，而 <code>2**(10**9) % 7</code> 会耗尽内存。',
      '这在密码学（RSA）中非常关键。'
    ]
  }
  );

  /* ============ 3. 列表 / 字典 / 元组 / 集合 ============ */
  Q.push(
  {
    id: 'p1-3-01', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 3, difficulty: 3, examRef: '2024 卷 Q22',
    prompt: '以下代码输出什么（三行）？\n<pre>rows = [[8,6],[7,5],[4,21]]\nfor i in rows:\n    print(i[0] + i[1])</pre>',
    blanks: [{ label: '输出', answer: { exact: '14\n12\n25', alts: ['14 12 25', '14、12、25'] } }],
    solution: [
      '循环变量 <code>i</code> 依次取到每一<b>行</b>（即每个子列表）。',
      '第 1 轮：<code>i = [8,6]</code>，<code>i[0]+i[1] = 8+6 = 14</code>。',
      '第 2 轮：<code>i = [7,5]</code>，<code>7+5 = 12</code>。',
      '第 3 轮：<code>i = [4,21]</code>，<code>4+21 = 25</code>。',
      '故输出三行：<code>14</code>、<code>12</code>、<code>25</code>。',
      '<b>易混点：</b>若写成 <code>for i in rows</code> 但用 <code>print(i)</code>，输出的就是整个子列表 <code>[8, 6]</code>。'
    ]
  },
  {
    id: 'p1-3-02', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 3, difficulty: 4, examRef: '2024 卷 Q19',
    prompt: '给定 2D 列表 $g=[[1,2,3],[4,5,6],[7,8,9]]$，用嵌套循环求**最后两列**所有元素之和（不得用 $\\texttt{sum}$），填结果。',
    blanks: [{ label: '和', answer: { exact: '33' } }],
    solution: [
      '<b>思路：</b>外层循环遍历每一行，内层循环只遍历该行的最后两列。',
      '<pre>g = [[1,2,3],[4,5,6],[7,8,9]]\ns = 0\nfor row in g:\n    for j in range(len(row)-2, len(row)):\n        s += row[j]\nprint(s)</pre>',
      '<b>逐轮计算：</b>',
      '第 1 行 <code>[1,2,3]</code>：<code>j</code> 取 1、2 → 加 $2+3=5$，累计 5。',
      '第 2 行 <code>[4,5,6]</code>：加 $5+6=11$，累计 16。',
      '第 3 行 <code>[7,8,9]</code>：加 $8+9=17$，累计 33。',
      '故结果 <b>33</b>。',
      '<b>通用写法：</b>最后两列即 <code>row[-2:]</code>，也可写成 <code>for v in row[-2:]: s += v</code>。'
    ]
  },
  {
    id: 'p1-3-03', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 3, difficulty: 4, examRef: '2025 卷 Q14',
    prompt: '求以下代码的完整输出（共 7 行）：\n<pre>def myfunc(x):\n    if len(x) &lt; 2:\n        x.append(1)\n    else:\n        x.append(x[-1] + x[-2])\n    return x\ny = []\nfor i in range(6):\n    z = myfunc(y)\n    print(z)\nprint(y)</pre>',
    blanks: [{ label: '第 6 次循环的输出（即第 6 行）', answer: { exact: '[1, 1, 2, 3, 5, 8]' } },
             { label: '最后一行 $\\texttt{print(y)}$ 的输出', answer: { exact: '[1, 1, 2, 3, 5, 8]' } }],
    solution: [
      '<b>关键：列表是可变对象，且作为参数是「按引用传递」。</b>',
      '<code>y</code> 始终是同一个列表，<code>myfunc</code> 里的 <code>x</code> 与 <code>y</code> 指向同一对象，',
      '所以每轮都在**原地追加**，<code>y</code> 不断变长。',
      '<b>逐轮推演：</b>',
      '第 1 轮：<code>len([]) &lt; 2</code> 成立 → 追加 1 → <code>[1]</code>',
      '第 2 轮：<code>len([1]) &lt; 2</code> 成立 → 追加 1 → <code>[1, 1]</code>',
      '第 3 轮：<code>len = 2</code> 不成立 → 追加 <code>1+1=2</code> → <code>[1, 1, 2]</code>',
      '第 4 轮：追加 <code>2+1=3</code> → <code>[1, 1, 2, 3]</code>',
      '第 5 轮：追加 <code>3+2=5</code> → <code>[1, 1, 2, 3, 5]</code>',
      '第 6 轮：追加 <code>5+3=8</code> → <code>[1, 1, 2, 3, 5, 8]</code>',
      '这就是<b>斐波那契数列</b>的生成过程。',
      '<b>注意最后两行相同：</b>因为 <code>z</code> 与 <code>y</code> 是同一个对象，<code>print(z)</code> 与 <code>print(y)</code> 结果一致。',
      '这也解释了为什么<b>不该用可变对象作默认参数</b>（见下方相关题）。'
    ]
  },
  {
    id: 'p1-3-04', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 3, examRef: 'Lecture 4',
    prompt: '以下代码中 $\\texttt{a}$ 最终是什么？\n<pre>a = [1,2,3]\nb = a\nb.append(4)\nprint(a)</pre>',
    blanks: [{ label: '$\\texttt{a}$', answer: { exact: '[1, 2, 3, 4]', alts: ['[1,2,3,4]', '[1, 2, 3, 4]'] } }],
    solution: [
      '<b><code>b = a</code> 不复制列表，只是让 <code>b</code> 和 <code>a</code> 指向同一个对象（别名/alias）。</b>',
      '因此通过 <code>b</code> 做的修改，<code>a</code> 也会「看到」，输出 <code>[1, 2, 3, 4]</code>。',
      '<b>如需真正复制</b>（浅拷贝）：',
      '<pre>b = a[:]        # 切片\nb = a.copy()    # copy 方法\nb = list(a)     # list 构造</pre>',
      '三者结果都是新列表，此时 <code>a</code> 保持 <code>[1, 2, 3]</code>。',
      '<b>注意浅拷贝的局限：</b>嵌套列表仍共享内层对象，需用 <code>copy.deepcopy(a)</code>。'
    ]
  },
  {
    id: 'p1-3-05', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 2, examRef: 'Lecture 4',
    prompt: '求 $\\texttt{x = [10,20,30,40,50]}$ 时 $\\texttt{x[1:4]}$、$\\texttt{x[-2]}$、$\\texttt{x[::-1]}$ 三个值（用空格分隔）。',
    blanks: [{ label: '三个值', answer: { exact: '[20, 30, 40] 40 [50, 40, 30, 20, 10]', alts: ['[20,30,40] 40 [50,40,30,20,10]'] } }],
    solution: [
      '<code>x[1:4]</code> → 下标 1、2、3 → <code>[20, 30, 40]</code>（左闭右开，不含下标 4）。',
      '<code>x[-2]</code> → 倒数第 2 个元素 → <code>40</code>。',
      '<code>x[::-1]</code> → 步长 $-1$，整个列表反转 → <code>[50, 40, 30, 20, 10]</code>。',
      '<b>切片三要素 <code>[start:stop:step]</code> 小结：</b>',
      '· <code>x[:3]</code> 前三个 · <code>x[3:]</code> 从第 4 个到末尾 · <code>x[:]</code> 全部',
      '· <code>x[::2]</code> 隔一个取一个 · <code>x[-3:-1]</code> 倒数第 3 到倒数第 2'
    ]
  },
  {
    id: 'p1-3-06', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 3, examRef: 'Lecture 5',
    prompt: '以下代码输出什么？\n<pre>d = {"a":1, "b":2}\nd["c"] = 3\nprint(len(d), sorted(d.keys()), sum(d.values()))</pre>',
    blanks: [{ label: '输出', answer: { exact: "3 ['a', 'b', 'c'] 6", alts: ["3 ['a', 'b', 'c'] 6"] } }],
    solution: [
      '初始字典有 2 个键值对；<code>d["c"] = 3</code> 新增一个，故 <code>len(d)</code> → <code>3</code>。',
      '<code>d.keys()</code> 返回全部键，<code>sorted()</code> 按字母序排列 → <code>[\'a\', \'b\', \'c\']</code>。',
      '<code>d.values()</code> 是 $1,2,3$，<code>sum()</code> → $6$。',
      '综合输出：<code>3 [\'a\', \'b\', \'c\'] 6</code>。',
      '<b>注意：</b>字典<b>不保证插入顺序以外的任何顺序</b>；直接 <code>print(d.keys())</code> 在旧版 Python 里顺序不确定，',
      '所以笔试题里出现字典的键列表时，通常用 <code>sorted()</code> 使结果确定。'
    ]
  },
  {
    id: 'p1-3-07', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 3, examRef: 'Lecture 5',
    prompt: '求 $\\texttt{d = \\{"a":1\\}}$ 时 $\\texttt{d.get("b")}$ 与 $\\texttt{d.get("b", 0)}$ 的值（逗号分隔）。',
    blanks: [{ label: '两个值', answer: { exact: 'None,0', alts: ['None 0', 'None、0'], setLike: true } }],
    solution: [
      '<code>d.get(key)</code>：键不存在时返回 <code>None</code>（<b>不报错</b>）→ <code>None</code>。',
      '<code>d.get(key, default)</code>：键不存在时返回给定的默认值 → <code>0</code>。',
      '<b>与 <code>d[key]</code> 的区别：</b><code>d["b"]</code> 在键不存在时抛出 <code>KeyError</code>。',
      '<b>实用场景 —— 计数：</b>',
      '<pre>d[ch] = d.get(ch, 0) + 1</pre>',
      '这一行等价于「若 <code>ch</code> 已在字典中则加 1，否则从 0 开始计为 1」，比 if-else 简洁。'
    ]
  },
  {
    id: 'p1-3-08', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 3, examRef: 'Lecture 5',
    prompt: '以下代码输出什么？\n<pre>s = "hello"\nd = {}\nfor ch in s:\n    d[ch] = d.get(ch, 0) + 1\nprint(d)</pre>',
    blanks: [{ label: '输出', answer: { exact: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}", alts: ['{\'h\': 1, \'e\': 1, \'l\': 2, \'o\': 1}'] } }],
    solution: [
      '这段代码统计每个字符出现的次数。',
      '遍历 <code>"hello"</code>：',
      '· <code>h</code>：不存在 → <code>0+1=1</code>',
      '· <code>e</code>：不存在 → <code>1</code>',
      '· <code>l</code>：不存在 → <code>1</code>',
      '· <code>l</code>：已存在 → <code>1+1=2</code>',
      '· <code>o</code>：不存在 → <code>1</code>',
      'Python 3.7+ 字典保持<b>插入顺序</b>，故输出 <code>{\'h\': 1, \'e\': 1, \'l\': 2, \'o\': 1}</code>。',
      '<b>更简洁的写法：</b><code>collections.Counter(s)</code> 直接得到同样的计数结果。'
    ]
  },
  {
    id: 'p1-3-09', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 2, examRef: 'Lecture 5',
    prompt: '求 $\\texttt{len(\\{1,2,2,3,3,3\\})}$ 与 $\\texttt{sorted(\\{1,2,2,3,3,3\\})}$ 的值（空格分隔）。',
    blanks: [{ label: '两个值', answer: { exact: "3 [1, 2, 3]", alts: ['3 [1,2,3]'] } }],
    solution: [
      '<b>集合（set）自动去重</b>：<code>{1,2,2,3,3,3}</code> 实际只含 $\\{1,2,3\\}$。',
      '故 <code>len(...)</code> → <code>3</code>。',
      '<code>sorted(...)</code> 把集合转成有序列表 → <code>[1, 2, 3]</code>。',
      '<b>集合的特性：</b>① 元素唯一 ② 无序 ③ 只能放可哈希（hashable）对象 —— 列表不能放进集合。',
      '<b>常见用途：</b>去重、快速成员判断（<code>x in s</code> 平均 $O(1)$）、集合运算。'
    ]
  },
  {
    id: 'p1-3-10', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 3, examRef: 'Lecture 5',
    prompt: '设 $a=\\{1,2,3\\}$，$b=\\{2,3,4\\}$。求 $\\texttt{sorted(a \\& b)}$、$\\texttt{sorted(a | b)}$、$\\texttt{sorted(a - b)}$ 三个值（用空格分隔）。',
    blanks: [{ label: '三个值', answer: { exact: '[2, 3] [1, 2, 3, 4] [1]', alts: ['[2,3] [1,2,3,4] [1]'] } }],
    solution: [
      '<b>交集 $\\&$</b>：同时属于两者的元素 → $\\{2,3\\}$ → <code>[2, 3]</code>。',
      '<b>并集 $|$</b>：属于任一个的元素 → $\\{1,2,3,4\\}$ → <code>[1, 2, 3, 4]</code>。',
      '<b>差集 $-$</b>：在 $a$ 中但不在 $b$ 中 → $\\{1\\}$ → <code>[1]</code>。',
      '<b>对照数学记号：</b>$A\\cap B$、$A\\cup B$、$A\\setminus B$。',
      '另有对称差 <code>a ^ b</code>（只属于其中一个）→ <code>[1, 4]</code>。'
    ]
  },
  {
    id: 'p1-3-11', topic: 'datastruct', topicName: '数据结构（列表·字典·元组·集合）',
    weight: 2, difficulty: 3, examRef: 'Lecture 4',
    prompt: '以下代码输出什么？\n<pre>t = (1,2,3)\ntry:\n    t[0] = 9\nexcept Exception as e:\n    print(type(e).__name__)</pre>',
    blanks: [{ label: '输出', answer: { exact: 'TypeError' } }],
    solution: [
      '<b>元组（tuple）是不可变对象</b>，创建后不能修改元素。',
      '故 <code>t[0] = 9</code> 抛出 <code>TypeError</code>。',
      '<b>但元组内若含可变对象，该对象本身仍可修改：</b>',
      '<pre>t = (1, [2, 3])\nt[1].append(4)      # 合法！t 变成 (1, [2, 3, 4])\n# t[1] = [9]        # 非法，TypeError</pre>',
      '<b>元组的优势：</b>① 比列表更快、占用更小 ② 可作字典键、可放进集合 ③ 表达「不应改变」的数据（如坐标、日期）。'
    ]
  }
  );

  /* ============ 4. 控制流 ============ */
  Q.push(
  {
    id: 'p1-4-01', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 2, difficulty: 3, examRef: '2024 卷 Q15',
    prompt: '解释 $\\texttt{if-elif-else}$ 的意义，并举两个现实生活中的例子（不用写代码）。',
    blanks: [{ label: '核心意义', answer: { exact: 'choose exactly one branch from multiple mutually exclusive conditions', alts: ['To select exactly one branch among several mutually exclusive conditions, evaluated in order', '在多个互斥条件中按顺序判断，只执行第一个成立的分支'] } }],
    solution: [
      '<b>意义：</b>在<b>多个互斥条件</b>中，按书写顺序逐个判断，<b>只执行第一个成立的分支</b>，其余全部跳过。',
      '它比一串独立的 <code>if</code> 更高效（命中即可停止判断），语义也更清晰（明确互斥）。',
      '<b>与一串 if 的关键区别：</b>多个独立 <code>if</code> 可能同时成立、全部执行；<code>elif</code> 只会走一条。',
      '<b>现实例子 1 —— 成绩等级：</b>',
      '90 分以上为 A，否则若 80 分以上为 B，否则若 70 分以上为 C……一个分数只会得到一个等级。',
      '<b>现实例子 2 —— 地铁票价：</b>',
      '行程 ≤3 站收 \\$5，否则若 ≤6 站收 \\$8，否则若 ≤10 站收 \\$12，其余收 \\$15 —— 一次行程只对应一档票价。',
      '<b>第三个例子（选答）—— 停车收费：</b>首 1 小时免费、1–3 小时每小时 \\$10、超过 3 小时按日计费。',
      '<b>顺序很重要：</b>若把判断条件写反（先写「≥70 为 C」再写「≥90 为 A」），90 分也会被判成 C。'
    ]
  },
  {
    id: 'p1-4-02', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 3, difficulty: 3, examRef: '2024 卷 Q16',
    prompt: '什么情况下用 $\\texttt{while}$ 循环比 $\\texttt{for}$ 循环更合适？给一个简短例子。',
    blanks: [{ label: '适用情形', answer: { exact: 'when the number of iterations is not known in advance', alts: ['When the number of repetitions is unknown and depends on a condition', '循环次数事先未知，取决于某个条件何时满足', 'when you do not know how many iterations are needed'], setLike: false } }],
    solution: [
      '<b>核心区别：</b>',
      '· <code>for</code>：用于<b>已知次数</b>或可遍历的序列（<code>range</code>、列表、字符串、文件行）。',
      '· <code>while</code>：用于<b>次数未知</b>、需反复执行直到某条件不再成立的情形。',
      '<b>典型场景：</b>① 输入校验（一直问到用户给对为止）② 游戏主循环（直到玩家退出）',
      '③ 数值迭代（直到误差小于阈值）④ 读取流/网络数据（直到读到结束标志）。',
      '<b>例子 —— 校验用户输入（次数未知）：</b>',
      '<pre>n = int(input("Enter a positive number: "))\nwhile n &lt;= 0:\n    print("Must be positive!")\n    n = int(input("Enter a positive number: "))\nprint("You entered", n)</pre>',
      '这段用 <code>for</code> 无法表达，因为不知道用户要试几次。',
      '<b>注意事项：</b>while 循环体内必须有能改变条件的语句，否则会陷入<b>死循环</b>。',
      '<b>两者可互相改写：</b>',
      '<pre># for\nfor i in range(5): print(i)\n# 等价的 while\ni = 0\nwhile i &lt; 5:\n    print(i); i += 1</pre>'
    ]
  },
  {
    id: 'p1-4-03', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 2, difficulty: 3, examRef: 'Lecture 3',
    prompt: '以下代码输出什么？\n<pre>for i in range(3):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)</pre>',
    blanks: [{ label: '输出', answer: { exact: '0 0\n1 0\n2 0', alts: ['0 0 1 0 2 0'] } }],
    solution: [
      '<b><code>break</code> 只跳出「当前所在的那一层」循环。</b>',
      '内层 <code>j</code> 从 0 开始：<code>j=0</code> 时 <code>j == 1</code> 为假 → 打印 <code>0 0</code>。',
      '<code>j=1</code> 时条件成立 → <code>break</code>，<b>只跳出内层循环</b>。',
      '外层继续，<code>i=1</code> 重新开始内层，同样只打印 <code>1 0</code>。',
      '<code>i=2</code> 时打印 <code>2 0</code>。',
      '故输出三行：<code>0 0</code>、<code>1 0</code>、<code>2 0</code>。',
      '<b>若想跳出两层</b>，可用标志变量或 <code>for...else</code>：',
      '<pre>found = False\nfor i in range(3):\n    for j in range(3):\n        if j == 1:\n            found = True; break\n    if found: break</pre>'
    ]
  },
  {
    id: 'p1-4-04', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 2, difficulty: 3, examRef: 'Lecture 3',
    prompt: '以下代码输出什么？\n<pre>for i in range(5):\n    if i % 2:\n        continue\n    print(i, end=" ")\nprint()</pre>',
    blanks: [{ label: '输出', answer: { exact: '0 2 4', alts: ['0 2 4', '0 2 4 '] } }],
    solution: [
      '<b><code>continue</code> 跳过本次循环剩下的语句，直接进入下一轮。</b>',
      '<code>i % 2</code> 在 $i$ 为奇数时为 1（真），偶数时为 0（假）。',
      '故奇数 1、3 会 <code>continue</code> 被跳过；只有偶数 0、2、4 会执行 <code>print</code>。',
      '<code>end=" "</code> 使输出不换行、以空格分隔，故打印 <code>0 2 4 </code>（末尾一个空格），',
      '最后的 <code>print()</code> 补一个换行。',
      '<b>与 <code>break</code> 的区别：</b><code>continue</code> 只跳过当前这一轮，<code>break</code> 直接终止整个循环。'
    ]
  },
  {
    id: 'p1-4-05', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 2, difficulty: 2, examRef: 'Lecture 3',
    prompt: '以下代码输出什么？\n<pre>n, s = 5, 0\nwhile n &gt; 0:\n    s += n\n    n -= 1\nprint(s)</pre>',
    blanks: [{ label: '输出', answer: { exact: '15' } }],
    solution: [
      '循环累加 $5+4+3+2+1$。',
      '逐轮：<code>s=5</code> → <code>s=9</code> → <code>s=12</code> → <code>s=14</code> → <code>s=15</code>，',
      '此时 <code>n</code> 变为 0，条件 <code>n &gt; 0</code> 不成立，退出循环。',
      '输出 <code>15</code>。',
      '<b>公式：</b>$\\sum_{k=1}^{n}k = \\dfrac{n(n+1)}{2} = \\dfrac{5\\times6}{2}=15$ ✔'
    ]
  },
  {
    id: 'p1-4-06', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 2, difficulty: 2, examRef: 'Lecture 3',
    prompt: '以下代码输出什么？\n<pre>for i in range(1, 6, 2):\n    print(i, end=" ")</pre>',
    blanks: [{ label: '输出', answer: { exact: '1 3 5', alts: ['1 3 5 '] } }],
    solution: [
      '<code>range(1, 6, 2)</code> 表示从 1 开始、到 6 之前（不含 6）、步长 2。',
      '依次产生 <code>1, 3, 5</code>。',
      '故输出 <code>1 3 5 </code>。',
      '<b><code>range</code> 三参数回顾：</b><code>range(stop)</code> 从 0 开始；<code>range(start, stop)</code> 指定起点；',
      '<code>range(start, stop, step)</code> 再加步长。步长为负时可倒序，如 <code>range(5, 0, -1)</code> → 5,4,3,2,1。'
    ]
  },
  {
    id: 'p1-4-07', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 3, difficulty: 4, examRef: '2024 卷 Q11',
    prompt: '写一个程序，打印用户给定范围内所有数的**阶乘之和**。例：范围 2 到 4 → $2!+3!+4! = 2+6+24 = 32$。若输入 2 到 5，结果是多少？',
    blanks: [{ label: '$2!+3!+4!+5!$', answer: { exact: '152' } }],
    solution: [
      '<b>先算各阶乘：</b>',
      '$2! = 2$，$3! = 6$，$4! = 24$，$5! = 120$。',
      '<b>求和：</b>$2+6+24+120 = 152$。',
      '<b>参考代码：</b>',
      '<pre>a = int(input("Start: "))\nb = int(input("End: "))\ntotal = 0\nfor n in range(a, b + 1):\n    f = 1\n    for k in range(1, n + 1):\n        f *= k\n    total += f\nprint("Sum of factorials =", total)</pre>',
      '<b>要点：</b>① 内层循环每次都要把 <code>f</code> 重置为 1；',
      '② <code>range(a, b+1)</code> 才能包含上界 <code>b</code>（左闭右开）；',
      '③ 也可用 <code>math.factorial(n)</code> 简化。'
    ]
  },
  {
    id: 'p1-4-08', topic: 'control', topicName: '控制流（if / for / while）',
    weight: 2, difficulty: 3, examRef: 'Lecture 3',
    prompt: '以下代码输出什么？\n<pre>x = 7\nif x &gt; 10: print("A")\nelif x &gt; 5: print("B")\nelse: print("C")</pre>',
    blanks: [{ label: '输出', answer: { exact: 'B' } }],
    solution: [
      '<code>x = 7</code>：第一个条件 <code>7 &gt; 10</code> 为假，跳过。',
      '第二个条件 <code>7 &gt; 5</code> 为真 → 执行并打印 <code>B</code>。',
      '<b><code>elif</code> 命中后，后面的分支不再判断</b>，所以 <code>else</code> 被跳过。',
      '输出 <code>B</code>。'
    ]
  }
  );

  /* ============ 5. 函数 / 作用域 / 递归 ============ */
  Q.push(
  {
    id: 'p1-5-01', topic: 'function', topicName: '函数 / 作用域 / 递归',
    weight: 3, difficulty: 4, examRef: 'Lecture 6',
    prompt: '以下代码输出什么？\n<pre>def f(x, acc=[]):\n    acc.append(x)\n    return acc\nprint(f(1), f(2), f(3))</pre>',
    blanks: [{ label: '输出', answer: { exact: '[1, 2, 3] [1, 2, 3] [1, 2, 3]', alts: ['[1, 2, 3] [1, 2, 3] [1, 2, 3]'] } }],
    solution: [
      '<b>这是 Python 最著名的陷阱之一：默认参数只在函数定义时求值一次。</b>',
      '因此三次调用共享<b>同一个</b>默认列表对象。',
      '第一次 <code>f(1)</code>：<code>acc</code> 为空列表 → 追加 1 → <code>[1]</code>，返回它。',
      '第二次 <code>f(2)</code>：<code>acc</code> 仍是那个列表（已是 <code>[1]</code>）→ 追加 2 → <code>[1, 2]</code>。',
      '第三次 <code>f(3)</code>：追加 3 → <code>[1, 2, 3]</code>。',
      '<b>关键：三个返回值是同一个对象</b>，所以 <code>print</code> 三次都显示它「现在」的样子 <code>[1, 2, 3]</code>。',
      '<b>正确写法（用 None 作哨兵）：</b>',
      '<pre>def f(x, acc=None):\n    if acc is None:\n        acc = []\n    acc.append(x)\n    return acc\nprint(f(1), f(2), f(3))    # [1] [2] [3]</pre>',
      '<b>规则：永远不要用可变对象（list/dict/set）作默认参数。</b>'
    ]
  },
  {
    id: 'p1-5-02', topic: 'function', topicName: '函数 / 作用域 / 递归',
    weight: 2, difficulty: 3, examRef: 'Lecture 6',
    prompt: '以下代码输出什么？\n<pre>x = 10\ndef f():\n    x = 20\n    return x\nprint(f(), x)</pre>',
    blanks: [{ label: '输出', answer: { exact: '20 10' } }],
    solution: [
      '函数体内的 <code>x = 20</code> 创建了一个<b>局部变量</b> <code>x</code>，与全局的 <code>x</code> 无关。',
      '<code>f()</code> 返回局部的 20；全局 <code>x</code> 始终是 10。',
      '故输出 <code>20 10</code>。',
      '<b>作用域查找规则（LEGB）：</b>Local → Enclosing → Global → Built-in。',
      '<b>若想在函数内修改全局变量</b>，需声明：',
      '<pre>c = 0\ndef inc():\n    global c\n    c += 1</pre>',
      '没有 <code>global</code> 时 <code>c += 1</code> 会因「引用未赋值的局部变量」而抛 <code>UnboundLocalError</code>。'
    ]
  },
  {
    id: 'p1-5-03', topic: 'function', topicName: '函数 / 作用域 / 递归',
    weight: 3, difficulty: 4, examRef: 'Lecture 6',
    prompt: '以下代码输出什么？\n<pre>def g(x):\n    x + 1\nprint(g(5))</pre>',
    blanks: [{ label: '输出', answer: { exact: 'None' } }],
    solution: [
      '<b>函数体里只有表达式 <code>x + 1</code>，没有 <code>return</code>。</b>',
      '表达式被求值后立即丢弃（没有副作用，也不打印）。',
      'Python 中<b>没有 return 的函数返回 <code>None</code></b>。',
      '故 <code>print(g(5))</code> 输出 <code>None</code>。',
      '<b>与 <code>return x + 1</code> 的对比：</b>加了 return 才会输出 <code>6</code>。',
      '<b>易错点：</b><code>return</code> 与 <code>print</code> 完全不同 —— 前者把值交回调用者，后者只是显示。',
      '函数里写 <code>print(x+1)</code> 会打印 6 但返回值仍是 <code>None</code>。'
    ]
  },
  {
    id: 'p1-5-04', topic: 'function', topicName: '函数 / 作用域 / 递归',
    weight: 2, difficulty: 3, examRef: 'Lecture 6',
    prompt: '求 $\\texttt{fact}(5)$ 的值，其中 $\\texttt{fact}(n)$ 的递归定义为：<br><code>def fact(n): return 1 if n &lt;= 1 else n * fact(n-1)</code>',
    blanks: [{ label: '$\\texttt{fact}(5)$', answer: { exact: '120' } }],
    solution: [
      '递归展开：',
      '$\\texttt{fact}(5) = 5 \\times \\texttt{fact}(4)$',
      '$= 5 \\times 4 \\times \\texttt{fact}(3) = 5 \\times 4 \\times 3 \\times \\texttt{fact}(2)$',
      '$= 5 \\times 4 \\times 3 \\times 2 \\times \\texttt{fact}(1) = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$。',
      '<b>递归三要素：</b>① 基线条件（<code>n &lt;= 1</code> 返回 1）② 递归调用（<code>fact(n-1)</code>）③ 向基线收敛。',
      '缺少基线条件会导致 <code>RecursionError</code>（栈溢出）。',
      '<b>迭代写法：</b><code>f = 1; for k in range(2, n+1): f *= k</code>。'
    ]
  },
  {
    id: 'p1-5-05', topic: 'function', topicName: '函数 / 作用域 / 递归',
    weight: 3, difficulty: 4, examRef: 'Lecture 6',
    prompt: '求 $\\texttt{fib}(6)$ 的值，其中 $\\texttt{fib}(n) = n$ 当 $n<2$，否则 $\\texttt{fib}(n) = \\texttt{fib}(n-1)+\\texttt{fib}(n-2)$。',
    blanks: [{ label: '$\\texttt{fib}(6)$', answer: { exact: '8' } }],
    solution: [
      '数列：<code>fib(0)=0, fib(1)=1</code>，之后每项是前两项之和。',
      '列出前几项：$0, 1, 1, 2, 3, 5, 8, 13, \\dots$',
      '故 $\\texttt{fib}(6) = 8$。',
      '<b>验证：</b>$\\texttt{fib}(6)=\\texttt{fib}(5)+\\texttt{fib}(4)=5+3=8$ ✔',
      '<b>注意效率：</b>这个朴素递归的时间复杂度是 $O(2^{n})$（大量重复计算）。',
      '<b>优化：</b>用记忆化 <code>functools.lru_cache</code> 或改成迭代，可降到 $O(n)$。'
    ]
  },
  {
    id: 'p1-5-06', topic: 'function', topicName: '函数 / 作用域 / 递归',
    weight: 2, difficulty: 3, examRef: 'Lecture 6',
    prompt: '求 $\\texttt{f(3)}$ 与 $\\texttt{f(3, 4)}$ 的值（$\\texttt{def f(a, b=2): return a * b}$），用空格分隔。',
    blanks: [{ label: '两个值', answer: { exact: '6 12', alts: ['6 12'] } }],
    solution: [
      '<b>默认参数：</b><code>b=2</code> 表示调用时不传 <code>b</code> 就取 2。',
      '<code>f(3)</code> → $3 \\times 2 = 6$。',
      '<code>f(3, 4)</code> → 传入的 4 覆盖默认值 → $3 \\times 4 = 12$。',
      '故输出 <code>6 12</code>。',
      '<b>相关语法：</b>关键字参数 <code>f(3, b=5)</code>、仅限关键字参数 <code>def f(a, *, b)</code>。'
    ]
  }
  );

  /* ============ 6. 文件处理与异常 ============ */
  Q.push(
  {
    id: 'p1-6-01', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 3, difficulty: 4, examRef: '2024 卷 Q12',
    prompt: '读入文件 <code>nums.txt</code>（内容是若干行整数，每行空格分隔），求所有元素之和；若文件不存在则打印 <code>File not found</code>。填补空缺：\n<pre>try:\n    f = open("nums.txt")\n    total = 0\n    for line in f:\n        for x in line.split():\n            total += ____\n    f.close()\n    print(total)\nexcept ____:\n    print("File not found")</pre>',
    blanks: [
      { label: '空 1', answer: { exact: 'int(x)', alts: ['int(x)', 'float(x)'] } },
      { label: '空 2', answer: { exact: 'FileNotFoundError', alts: ['FileNotFoundError', 'IOError', 'OSError'] } }
    ],
    solution: [
      '<b>空 1：<code>int(x)</code></b> —— <code>line.split()</code> 得到的是<b>字符串</b>列表，必须转成整数才能相加。',
      '若直接写 <code>total += x</code> 会抛 <code>TypeError</code>（int 与 str 不能相加）。',
      '<b>空 2：<code>FileNotFoundError</code></b> —— 文件不存在时 <code>open()</code> 抛出的就是这个异常。',
      '（写 <code>IOError</code>/<code>OSError</code> 也能捕获，因为 <code>FileNotFoundError</code> 是它们的子类。）',
      '<b>更规范的写法（用 with 自动关闭文件）：</b>',
      '<pre>try:\n    with open("nums.txt") as f:\n        total = sum(int(x) for line in f for x in line.split())\n    print(total)\nexcept FileNotFoundError:\n    print("File not found")</pre>',
      '<b>原卷要求还要把结果写回同一文件：</b>用 <code>open("nums.txt", "a")</code> 以追加模式写。',
      '<b>注意：</b><code>with</code> 语句即使中途出错也会正确关闭文件，比手动 <code>f.close()</code> 安全。'
    ]
  },
  {
    id: 'p1-6-02', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '以下代码执行后，<code>finally</code> 与返回值分别是什么？\n<pre>def f():\n    try:\n        return 1\n    finally:\n        print("finally")\nprint(f())</pre>',
    blanks: [{ label: '输出', answer: { exact: 'finally\n1', alts: ['finally 1'] } }],
    solution: [
      '<b><code>finally</code> 块无论是否发生异常、即使 try 里有 return，都一定会执行。</b>',
      '执行顺序：先进入 <code>try</code>，遇到 <code>return 1</code> 时，',
      'Python 会<b>先把返回值 1 暂存</b>，执行 <code>finally</code> 块（打印 <code>finally</code>），',
      '然后才真正返回 1，外层 <code>print</code> 打印 <code>1</code>。',
      '故输出两行：<code>finally</code> 和 <code>1</code>。',
      '<b>陷阱：若 finally 里也有 return，它会覆盖 try 里的 return：</b>',
      '<pre>def g():\n    try:\n        return 1\n    finally:\n        return 2\nprint(g())      # 输出 2，try 的返回值被丢弃</pre>',
      '<b>用途：</b>释放资源（关文件、断连接、解锁），保证一定被执行。'
    ]
  },
  {
    id: 'p1-6-03', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '以下代码输出什么？\n<pre>try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("zero")\nexcept Exception:\n    print("other")</pre>',
    blanks: [{ label: '输出', answer: { exact: 'zero' } }],
    solution: [
      '<code>10 / 0</code> 抛出 <code>ZeroDivisionError</code>。',
      'Python 按书写顺序匹配 <code>except</code> 子句，<b>第一个匹配的被执行</b>，其余不再匹配。',
      '第一个 <code>except ZeroDivisionError</code> 匹配成功 → 打印 <code>zero</code>。',
      '第二个 <code>except Exception</code> 被跳过（虽然它也能捕获，因为 ZeroDivisionError 是 Exception 的子类）。',
      '<b>重要规则：</b>具体的异常类必须写在前面，<code>Exception</code> 这类宽泛的放最后，',
      '否则后面的具体子句永远轮不到。',
      '<b>反例：</b>若把 <code>except Exception</code> 写在最前面，会先捕获并打印 <code>other</code>。'
    ]
  },
  {
    id: 'p1-6-04', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 3, difficulty: 4, examRef: '2024 卷 Q18',
    prompt: '既然父类 <code>BaseException</code> 能捕获所有异常，为什么还需要其他异常类？',
    blanks: [{ label: '原因', answer: { exact: 'to handle different error types differently and avoid hiding bugs', alts: ['So that different errors can be handled in different ways, and unrelated bugs are not accidentally swallowed', '为了针对不同错误做不同处理，并避免误吞无关的程序缺陷'] } }],
    solution: [
      '<b>核心原因有三个。</b>',
      '<b>① 差异化处理：</b>不同错误需要的应对方式不同。',
      '文件不存在 → 提示用户检查路径；除以零 → 提示输入有误；类型错误 → 说明用法。',
      '全都用 <code>except BaseException</code> 就只能笼统处理，无法给出有用的反馈。',
      '<b>② 避免掩盖真正的 bug：</b>捕获过宽会把编码错误也一并「吃掉」，',
      '程序看似正常运行，实际问题被隐藏，极难排查。',
      '<b>③ 精确控制程序流程：</b>只捕获预期内的异常，让预期外的异常正常抛出（fail fast）。',
      '<b>例子（分别处理两种错误）：</b>',
      '<pre>try:\n    n = int(input("Enter a number: "))\n    print(100 / n)\nexcept ValueError:\n    print("That is not a valid number.")     # 输入不是数字\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")          # 输入了 0</pre>',
      '<b>继承层次（重要）：</b>',
      '<pre>BaseException\n ├── SystemExit            # sys.exit()\n ├── KeyboardInterrupt     # Ctrl+C\n └── Exception             # 一般业务异常\n      ├── ValueError\n      ├── TypeError\n      ├── KeyError\n      ├── FileNotFoundError\n      └── ZeroDivisionError</pre>',
      '<b>实践建议：</b>捕获 <code>Exception</code> 而不是 <code>BaseException</code> ——',
      '否则会连 <code>Ctrl+C</code>（KeyboardInterrupt）都无法中断程序。'
    ]
  },
  {
    id: 'p1-6-05', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '以下代码输出什么？\n<pre>try:\n    raise ValueError("bad")\nexcept ValueError as e:\n    print(type(e).__name__, e)</pre>',
    blanks: [{ label: '输出', answer: { exact: 'ValueError bad' } }],
    solution: [
      '<code>raise ValueError("bad")</code> 主动抛出异常，附带消息 <code>"bad"</code>。',
      '<code>except ValueError as e</code> 把异常对象绑定到 <code>e</code>。',
      '<code>type(e).__name__</code> → 异常类名字符串 <code>ValueError</code>。',
      '<code>e</code> 直接打印 → 异常消息 <code>bad</code>。',
      '故输出 <code>ValueError bad</code>。',
      '<b>常用属性：</b><code>e.args</code> → <code>(\'bad\',)</code>；<code>str(e)</code> → <code>\'bad\'</code>。',
      '<b>主动抛异常的用途：</b>在函数里校验参数，发现不合法就立刻抛错，避免错误扩散。'
    ]
  },
  {
    id: 'p1-6-06', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 2, difficulty: 3, examRef: 'Lecture 7',
    prompt: '以下代码输出什么？\n<pre>try:\n    print(int("abc"))\nexcept ValueError:\n    print("ValueError")</pre>',
    blanks: [{ label: '输出', answer: { exact: 'ValueError' } }],
    solution: [
      '<code>int("abc")</code> 无法把非数字字符串转成整数，抛出 <code>ValueError</code>。',
      '<code>except ValueError</code> 捕获并打印 <code>ValueError</code>。',
      '<b>常见转换错误对照：</b>',
      '· <code>int("abc")</code> → <code>ValueError</code>（类型对但值不合法）',
      '· <code>int(None)</code> → <code>TypeError</code>（类型不对）',
      '· <code>int("3.5")</code> → <code>ValueError</code>（要先 <code>float("3.5")</code>）',
      '<b>因此读入用户输入时，通常这样写更稳：</b>',
      '<pre>try:\n    n = int(input("Number: "))\nexcept ValueError:\n    print("Not an integer")\n    n = 0</pre>'
    ]
  },
  {
    id: 'p1-6-07', topic: 'fileexc', topicName: '文件处理 / 异常处理',
    weight: 2, difficulty: 3, examRef: 'Lecture 8',
    prompt: '以下代码写文件后读回，第二行的 $\\texttt{print}$ 输出什么？\n<pre>with open("t.txt", "w") as f:\n    f.write("1 2 3\\n")\nwith open("t.txt") as f:\n    print(sum(int(x) for line in f for x in line.split()))</pre>',
    blanks: [{ label: '输出', answer: { exact: '6' } }],
    solution: [
      '第一段把字符串 <code>"1 2 3\\n"</code> 写入文件（注意 <code>\\n</code> 是换行符，不是两个字符）。',
      '第二段重新打开读取：<code>for line in f</code> 逐行取，<code>line.split()</code> 按空白切分 → <code>[\'1\',\'2\',\'3\']</code>。',
      '<code>int(x)</code> 转整数后求和：$1+2+3=6$。',
      '故输出 <code>6</code>。',
      '<b>要点：</b>① 文件内容是<b>文本</b>，读出来全是字符串，必须转换；',
      '② <code>line.split()</code> 不带参数时会自动跳过连续空白与行末换行；',
      '③ <code>with</code> 块结束自动关闭文件。',
      '<b>写回同一文件</b>时要用追加模式 <code>open("t.txt", "a")</code>，否则会覆盖原内容。'
    ]
  }
  );

  /* ============ 7. 算法与问题求解 ============ */
  Q.push(
  {
    id: 'p1-7-01', topic: 'algo', topicName: '算法与问题求解',
    weight: 3, difficulty: 4, examRef: 'Lecture 9',
    prompt: '以下冒泡排序代码执行后 $\\texttt{a}$ 是什么？\n<pre>a = [5,1,4,2,8]\nn = len(a)\nfor i in range(n):\n    for j in range(n-1-i):\n        if a[j] &gt; a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\nprint(a)</pre>',
    blanks: [{ label: '$\\texttt{a}$', answer: { exact: '[1, 2, 4, 5, 8]', alts: ['[1,2,4,5,8]', '[1, 2, 4, 5, 8]'] } }],
    solution: [
      '<b>冒泡排序：每轮把当前未排序部分的最大值「冒」到末尾。</b>',
      '<b>第 1 轮</b>（<code>i=0</code>，比较 4 次）：',
      '<code>[5,1,4,2,8]</code> → 5&gt;1 交换 → <code>[1,5,4,2,8]</code>',
      '→ 5&gt;4 交换 → <code>[1,4,5,2,8]</code> → 5&gt;2 交换 → <code>[1,4,2,5,8]</code>',
      '→ 5&lt;8 不换。结果 <code>[1,4,2,5,8]</code>，最大的 8 已在末尾。',
      '<b>第 2 轮</b>（比较 3 次）：<code>[1,4,2,5,8]</code> → 1&lt;4、4&gt;2 交换 → <code>[1,2,4,5,8]</code> → 4&lt;5。',
      '<b>第 3、4 轮</b>：已有序，无交换。',
      '最终 <code>[1, 2, 4, 5, 8]</code>。',
      '<b>关键语法：</b><code>a[j], a[j+1] = a[j+1], a[j]</code> 是 Python 的元组打包/解包交换，无需临时变量。',
      '<b>复杂度：</b>最坏与平均 $O(n^{2})$，最好（已有序且加提前退出判断）$O(n)$。'
    ]
  },
  {
    id: 'p1-7-02', topic: 'algo', topicName: '算法与问题求解',
    weight: 3, difficulty: 4, examRef: 'Lecture 10',
    prompt: '在有序列表 $a=[1,3,5,7,9,11]$ 中二分查找目标值 7，返回的下标是多少？',
    blanks: [{ label: '下标', answer: { exact: '3' } }],
    solution: [
      '<b>二分查找过程（下标从 0 开始）：</b>',
      '第 1 轮：<code>lo=0, hi=5</code>，<code>mid=(0+5)//2=2</code>，<code>a[2]=5 &lt; 7</code> → 往右，<code>lo=3</code>。',
      '第 2 轮：<code>lo=3, hi=5</code>，<code>mid=(3+5)//2=4</code>，<code>a[4]=9 &gt; 7</code> → 往左，<code>hi=3</code>。',
      '第 3 轮：<code>lo=3, hi=3</code>，<code>mid=3</code>，<code>a[3]=7</code> 命中 → 返回 3。',
      '故下标为 <b>3</b>（用 3 次比较）。',
      '<b>关键代码：</b><code>mid = (lo + hi) // 2</code> 必须用<b>整除</b>，否则得到浮点下标会报错。',
      '<b>前提：</b>列表必须<b>已排序</b>，否则二分无效。',
      '<b>复杂度：</b>$O(\\log n)$，远优于线性查找的 $O(n)$。'
    ]
  },
  {
    id: 'p1-7-03', topic: 'algo', topicName: '算法与问题求解',
    weight: 2, difficulty: 3, examRef: 'Lecture 10',
    prompt: '求 $\\texttt{sorted(["banana","kiwi","apple"], key=len)}$ 的结果。',
    blanks: [{ label: '结果', answer: { exact: "['kiwi', 'apple', 'banana']", alts: ["['kiwi', 'apple', 'banana']"] } }],
    solution: [
      '<code>key=len</code> 表示<b>按字符串长度排序</b>，而不是按字典序。',
      '各词长度：<code>banana</code>=6、<code>kiwi</code>=4、<code>apple</code>=5。',
      '按长度升序：4 &lt; 5 &lt; 6 → <code>[\'kiwi\', \'apple\', \'banana\']</code>。',
      '<b>对比不带 key 的默认排序</b>（按字典序）：<code>[\'apple\', \'banana\', \'kiwi\']</code>。',
      '<b>key 的常见用法：</b><code>key=str.lower</code>（忽略大小写）、<code>key=lambda x: x[1]</code>（按第二个元素）。',
      '<b>注意：</b><code>sorted()</code> 返回新列表，原列表不变；<code>a.sort()</code> 是原地排序、返回 <code>None</code>。'
    ]
  },
  {
    id: 'p1-7-04', topic: 'algo', topicName: '算法与问题求解',
    weight: 3, difficulty: 4, examRef: '2025 卷 Q17',
    prompt: '给定餐饮选择表（Dietary Preference × Time of Day → Meal Type）与四条约束。这一题属于计算思维的哪个环节？填写最关键的那个。',
    blanks: [{ label: '环节', answer: { exact: 'abstraction', alts: ['抽象', 'pattern recognition', 'algorithm design', '模式识别', '算法设计'] } }],
    solution: [
      '<b>这道题综合了多个环节，但最关键的是「抽象（abstraction）」。</b>',
      '理由：题目要求把现实中的饮食偏好、时段、菜品选择<b>抽象成一张决策表</b>，',
      '抽取关键属性（偏好类型、时段）而忽略无关细节（价格、口味、餐厅位置）。',
      '<b>各环节在此题中的体现：</b>',
      '· <b>分解</b>：把「点餐」拆成「确定偏好 → 确定时段 → 查表得菜品」。',
      '· <b>模式识别</b>：发现同一偏好下不同时段的规律（如素食者早餐都是 Salad）。',
      '· <b>抽象</b>：用布尔条件与决策表刻画规则，去掉现实细节。',
      '· <b>算法设计</b>：17(b) 要求画出覆盖所有可能组合的决策树。',
      '<b>关于冲突检测（17a）：</b>',
      '规则「所有早餐都是 Salad，非素食者除外」与表中「素食早餐 = Salad」一致；',
      '但表中出现 Vegan+Lunch=Salad 与 Vegan+Dinner=Stir-Fry，需检查是否与「同类菜品不超过两份」冲突。',
      '<b>决策树要点：</b>先判断 Dietary Preference（3 分支），每个分支下再判断 Time of Day（3 分支），',
      '共 9 条路径；若已知「全是非素食者」，则第一层判断可省略，',
      '直接按时段分 3 支，树高从 2 降到 1 —— 这就是「最有效版本」。'
    ]
  },
  {
    id: 'p1-7-05', topic: 'algo', topicName: '算法与问题求解',
    weight: 3, difficulty: 4, examRef: '2024 卷 Q21',
    prompt: '给定邻接表（adjacency list）表示一个带权图，题目要求画出图。邻接表相比邻接矩阵的主要优势是什么？',
    blanks: [{ label: '主要优势', answer: { exact: 'it saves space for sparse graphs', alts: ['It uses less memory when the graph is sparse', '稀疏图时更省空间，且便于列出某点的所有邻居', 'more space-efficient for sparse graphs'] } }],
    solution: [
      '<b>邻接表 vs 邻接矩阵</b>',
      '<b>邻接矩阵</b>：$n\\times n$ 的二维数组，<code>m[i][j]</code> 存边权。',
      '· 空间 $O(n^{2})$（无论有多少条边）',
      '· 判断两点是否相邻 $O(1)$',
      '<b>邻接表</b>：每个顶点存一个「邻居列表」。',
      '· 空间 $O(n + e)$（$e$ 为边数）',
      '· 判断相邻需 $O(\\deg(v))$',
      '<b>结论：稀疏图（$e \\ll n^{2}$）用邻接表省大量空间；稠密图用矩阵更快。</b>',
      '例：$n=10000$ 的稀疏图只有 $e=20000$ 条边，',
      '矩阵需 $10^{8}$ 个格子，邻接表只需约 $4\\times10^{4}$ 项 —— 差 2500 倍。',
      '<b>画图要点（原卷要求）：</b>',
      '· 每个顶点画一个圆，标号写在圆内；',
      '· 有边则连一条<b>实线</b>，权重数字写在<b>线上方</b>；',
      '· 无向图的边不画箭头，有向图必须画箭头。'
    ]
  }
  );

  /* ============ 8. 综合与真题 ============ */
  Q.push(
  {
    id: 'p1-8-01', topic: 'mixed', topicName: '综合与真题',
    weight: 3, difficulty: 4, examRef: '2024 卷 Q20',
    prompt: '写程序判断用户输入是否为回文（palindrome）。输入 <code>"level"</code> 时，判断结果是什么？',
    blanks: [{ label: '是否回文', answer: { exact: '是', alts: ['yes', 'Yes', 'true', 'True', 'Palindrome'] } }],
    solution: [
      '<b>回文定义：</b>正着读与反着读完全相同。',
      '<code>"level"</code> 反转后仍是 <code>"level"</code>，故<b>是</b>回文。',
      '<b>参考代码：</b>',
      '<pre>w = input("Enter a word: ")\nif w == w[::-1]:\n    print("Palindrome")\nelse:\n    print("Not a palindrome")</pre>',
      '<b>其他写法：</b>',
      '<pre># 用双指针（不使用切片，适合考察循环）\ni, j = 0, len(w) - 1\nok = True\nwhile i &lt; j:\n    if w[i] != w[j]:\n        ok = False\n        break\n    i += 1; j -= 1\nprint("Palindrome" if ok else "Not a palindrome")</pre>',
      '<b>进阶：若忽略大小写与空格</b>（如 <code>"A man a plan a canal Panama"</code>）：',
      '<pre>s = "".join(ch.lower() for ch in w if ch.isalnum())\nprint(s == s[::-1])</pre>'
    ]
  },
  {
    id: 'p1-8-02', topic: 'mixed', topicName: '综合与真题',
    weight: 3, difficulty: 4, examRef: 'Quiz 2',
    prompt: '写一个函数统计一段文本中每个单词出现的次数。文本 <code>"a b a c b a"</code> 中 <code>"a"</code> 出现几次？',
    blanks: [{ label: '"a" 的次数', answer: { exact: '3' } }],
    solution: [
      '<code>"a b a c b a"</code> 按空格切分为 <code>[\'a\',\'b\',\'a\',\'c\',\'b\',\'a\']</code>。',
      '其中 <code>\'a\'</code> 出现在下标 0、2、5，共 <b>3</b> 次。',
      '<b>参考代码：</b>',
      '<pre>text = "a b a c b a"\ncounts = {}\nfor w in text.split():\n    counts[w] = counts.get(w, 0) + 1\nprint(counts)          # {\'a\': 3, \'b\': 2, \'c\': 1}\nprint(counts["a"])     # 3</pre>',
      '<b>要点：</b>① <code>split()</code> 不加参数会按任意空白切分并忽略多余空格；',
      '② <code>get(w, 0)</code> 让首次遇到单词时从 0 开始计数；',
      '③ 也可用 <code>collections.Counter(text.split())</code> 一行搞定。'
    ]
  },
  {
    id: 'p1-8-03', topic: 'mixed', topicName: '综合与真题',
    weight: 2, difficulty: 3, examRef: 'Quiz 1 / Quiz 2',
    prompt: '以下代码输出什么？\n<pre>x = [1, 2, 3]\ny = x\nz = x[:]\ny.append(4)\nz.append(5)\nprint(x, y, z)</pre>',
    blanks: [{ label: '输出', answer: { exact: '[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 5]', alts: ['[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 5]'] } }],
    solution: [
      '<b><code>y = x</code> 是别名（同一对象）；<code>z = x[:]</code> 是浅拷贝（新对象）。</b>',
      '<code>y.append(4)</code> 修改的是 <code>x</code> 本身 → <code>x</code> 变为 <code>[1, 2, 3, 4]</code>，<code>y</code> 也指向它。',
      '<code>z.append(5)</code> 只修改拷贝出来的新列表 → <code>z</code> 变为 <code>[1, 2, 3, 5]</code>。',
      '此时 <code>z</code> 与 <code>x</code> 已无关联，<code>x</code> 不受影响。',
      '故输出 <code>[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 5]</code>。',
      '<b>判断口诀：</b>赋值（<code>=</code>）不复制，切片（<code>[:]</code>）/.copy()/list() 才复制。'
    ]
  },
  {
    id: 'p1-8-04', topic: 'mixed', topicName: '综合与真题',
    weight: 2, difficulty: 3, examRef: '2024 卷 Q12',
    prompt: '把 2D 列表所有元素求和后写回文件，应该用哪个打开模式？',
    blanks: [{ label: '模式', answer: { exact: 'a', alts: ['"a"', "'a'", 'append', '追加模式'] } }],
    solution: [
      '<b>答案：<code>"a"</code>（append，追加模式）。</b>',
      '<b>文件模式对照：</b>',
      '· <code>"r"</code> 只读（默认），文件不存在报错',
      '· <code>"w"</code> 只写，<b>会清空原内容</b>',
      '· <code>"a"</code> 追加，在文件末尾续写，<b>保留原内容</b>',
      '· <code>"r+"</code> 读写，<code>"w+"</code> 清空后读写，<code>"x"</code> 仅在文件不存在时创建',
      '· 加 <code>"b"</code> 表示二进制模式，如 <code>"rb"</code>、<code>"wb"</code>',
      '<b>为什么本题用 <code>"a"</code>：</b>题目要求「把结果写在原文件的下一行」，',
      '若用 <code>"w"</code> 会把原来的整数数据全部抹掉。',
      '<b>代码：</b>',
      '<pre>with open("nums.txt", "a") as f:\n    f.write("\\n" + str(total))</pre>',
      '注意先写 <code>"\\n"</code>，否则结果会接在最后一行数据后面。'
    ]
  },
  {
    id: 'p1-8-05', topic: 'mixed', topicName: '综合与真题',
    weight: 3, difficulty: 4, examRef: '2025 卷 Q14',
    prompt: '为什么下面这个函数会「意外地」不断累积数据？\n<pre>def collect(item, box=[]):\n    box.append(item)\n    return box</pre>',
    blanks: [{ label: '原因', answer: { exact: 'the default list is created only once and is shared across calls', alts: ['The default argument is evaluated once at definition time, so all calls share the same list', '默认参数只在定义时求值一次，所有调用共享同一个列表'] } }],
    solution: [
      '<b>根本原因：Python 的默认参数值只在 <code>def</code> 语句执行时求值一次，之后每次调用都复用同一个对象。</b>',
      '因此 <code>box</code> 指向的列表是<b>函数属性的一部分，被所有调用共享</b>。',
      '<b>验证现象：</b>',
      '<pre>print(collect("a"))    # [\'a\']\nprint(collect("b"))    # [\'a\', \'b\']  ← 意外保留上次的内容\nprint(collect("c"))    # [\'a\', \'b\', \'c\']</pre>',
      '<b>为什么会这样：</b>函数对象在定义时就创建了那个空列表并把它存在 <code>__defaults__</code> 里，',
      '调用时若未传参就直接取用它 —— 与「每次调用生成新列表」的直觉不同。',
      '<b>标准修法（用 None 作哨兵）：</b>',
      '<pre>def collect(item, box=None):\n    if box is None:\n        box = []\n    box.append(item)\n    return box</pre>',
      '<b>规则：默认参数只用不可变对象</b>（<code>None</code>、数字、字符串、元组）。',
      '同样的坑也存在于 <code>dict</code>、<code>set</code> 作默认参数时。'
    ]
  }
  );

  /* ============ 证明 / 简答（无需输入，直接读） ============ */
  var P = [];
  P.push(
  {
    id: 'pp-1', topic: 'ct', topicName: '计算思维 / 计算机基础', year: '2025 卷 Q13 / Lecture 1', marks: 6,
    title: '计算思维的四个要素，并用项目展示场景说明',
    statement: '陈述计算思维（computational thinking）的四个核心要素，并逐一说明它们在「准备项目展示」这一场景中如何体现。',
    proof: [
      '<b>计算思维的四个核心要素：</b>decomposition（分解）、pattern recognition（模式识别）、abstraction（抽象）、algorithm design（算法设计）。',
      '<b>① Decomposition（分解）</b>',
      '把复杂问题拆成更小、更易处理的子问题。',
      '在项目展示中：整体任务拆为「撰写报告」「制作海报」「准备演讲并排练」「准备问答」等子任务；',
      '每个子任务可继续细分（海报 → 选题、文案、排版、配图、校对）。',
      '好处：每个部分都更容易理解与完成，也便于分配与并行推进。',
      '<b>② Pattern recognition（模式识别）</b>',
      '在不同问题中发现共同的结构或规律，从而复用已有解法。',
      '在项目展示中：发现每组的展示流程都是「介绍 → 演示 → 问答」，可套用同一份流程模板；',
      '发现往年评分标准相似，可据此针对性准备；发现多位同学都要做 PPT，可共用母版。',
      '<b>③ Abstraction（抽象）</b>',
      '抽取关键特征，忽略与目标无关的细节。',
      '在项目展示中：安排时间时不需要每位同学的完整课表，只需知道「谁在哪些时段有空」；',
      '做海报时不需要了解打印机内部构造，只需知道它能输出 A1 彩印。',
      '好处：把注意力集中在真正影响结果的因素上，降低问题复杂度。',
      '<b>④ Algorithm design（算法设计）</b>',
      '设计出清晰、可执行、无歧义的步骤序列（即算法）。',
      '在项目展示中：制定「展示当天时间表」—— 9:00 布置展板 → 9:30 彩排 → 10:00 正式展示，',
      '每一步都明确「谁、做什么、何时完成、如何判断完成」。',
      '<b>四者关系：</b>分解与抽象让问题变小变清晰，模式识别让我们复用经验，',
      '算法设计则把解决方案落实为可执行的步骤。'
    ],
    conclusion: '四要素 = 分解、模式识别、抽象、算法设计；它们共同把「一团乱麻」变成「可执行的步骤」。'
  },
  {
    id: 'pp-2', topic: 'basics', topicName: 'Python 基础', year: '2024 卷 Q13 / Q14', marks: 12,
    title: '解释器 vs 编译器；为何需要十六进制与八进制',
    statement: '(a) 解释器与编译器的主要区别是什么？各自在什么情况下更优？<br>(b) 计算机只懂二进制，为什么还需要十六进制和八进制？',
    proof: [
      '<b>(a) 解释器 vs 编译器</b>',
      '<b>编译器</b>：把整个源程序一次性翻译成目标代码（机器码或中间代码），生成可执行文件后再运行。',
      '<b>解释器</b>：逐行读取源程序，翻译一行、执行一行，不产生独立的可执行文件。',
      '<b>编译器更优的场合：</b>',
      '· 程序需要长期反复运行，追求执行速度（操作系统、编译器自身、游戏引擎）；',
      '· 需要向用户分发而不暴露源代码；',
      '· 希望编译期就发现全部语法错误与类型错误。',
      '<b>解释器更优的场合：</b>',
      '· 开发与调试阶段（改一行即可运行，无需等待编译）；',
      '· 跨平台分发（同一份源码在不同系统上只要有解释器就能跑）；',
      '· 教学、脚本自动化、数据分析等对启动速度敏感而峰值性能不敏感的场合。',
      '<b>其他差异：</b>编译型语言的错误在编译阶段集中报出；解释型语言只在执行到出错那行时才报错。',
      '现实中的语言往往介于两者之间 —— Python 先把源码编译成字节码，再由 Python 虚拟机（PVM）解释执行。',
      '<b>(b) 为什么需要十六进制与八进制</b>',
      '<b>核心：它们是二进制的「人类友好简写」，且与二进制之间可以按位无损、直接换算。</b>',
      '<b>① 换算极其简单：</b>1 位十六进制 = 4 位二进制；1 位八进制 = 3 位二进制。',
      '例：$\\texttt{0xD} = \\texttt{1101}_{2}$；$\\texttt{0o15} = \\texttt{001101}_{2}$。',
      '<b>② 显著更短：</b>32 位二进制需写 32 个字符，写成十六进制只要 8 个。',
      '例：$\\texttt{11111111111111111111111111111111}_{2} = \\texttt{0xFFFFFFFF}$。',
      '<b>③ 更不易出错：</b>长串 0/1 人眼极易数错，分组书写大幅降低错误率。',
      '<b>④ 实际用途广泛：</b>内存地址、颜色值（<code>#FF8800</code>）、文件权限（<code>chmod 755</code>）、',
      '位掩码与硬件寄存器、Unicode 码点（<code>U+4E2D</code>）。',
      '<b>重要澄清：</b>计算机并不「理解」十六进制 —— 它只是书写与阅读的便利形式，',
      '程序运行时一切仍以二进制表示。进制只是同一数值的不同记法。'
    ],
    conclusion: '编译器先整体翻译再执行、速度快；解释器逐行翻译执行、开发调试方便。十六/八进制是二进制的紧凑可读简写。'
  },
  {
    id: 'pp-3', topic: 'fileexc', topicName: '文件处理 / 异常处理', year: '2024 卷 Q17 / Q18', marks: 12,
    title: '纯文本 vs 二进制文件；为何需要多种异常类',
    statement: '(a) 纯文本文件与二进制文件有什么区别？为什么两种都需要？各举一个使用场景。<br>(b) 既然 <code>BaseException</code> 能捕获所有异常，为什么还需要其他异常类？',
    proof: [
      '<b>(a) 纯文本文件 vs 二进制文件</b>',
      '<b>纯文本文件：</b>内容按字符编码（ASCII / UTF-8）存储，用普通文本编辑器即可阅读和修改。',
      '例：<code>.txt</code>、<code>.csv</code>、<code>.py</code>、<code>.json</code>、<code>.html</code>。',
      '<b>二进制文件：</b>内容按特定格式存储原始字节，必须由专门程序解释，直接当文本打开会乱码。',
      '例：<code>.png</code>、<code>.mp3</code>、<code>.zip</code>、<code>.exe</code>、<code>.docx</code>。',
      '<b>为什么两种都需要：</b>',
      '· 用文本：需要人可读、可手工编辑、跨程序交换数据、便于版本管理与 diff 比较。',
      '· 用二进制：需要更紧凑的体积、更快的读写、精确保存任意字节（像素、浮点位模式、压缩数据）。',
      '<b>使用场景举例：</b>',
      '· 纯文本：程序的配置文件（如 <code>config.json</code>）—— 用户可用记事本直接改。',
      '· 二进制：一张照片存成 <code>.png</code> —— 若转成文本会膨胀数倍且无法精确还原每个像素。',
      '<b>代码上的区别：</b>文本模式 <code>open("f.txt")</code>；二进制模式需加 <code>b</code>，如 <code>open("f.png", "rb")</code>。',
      '<b>(b) 为何需要多种异常类</b>',
      '<b>① 差异化处理：</b>不同错误需要不同应对方式。',
      '文件不存在 → 提示用户检查路径；除以零 → 提示输入有误；类型错误 → 说明正确用法。',
      '只写 <code>except BaseException</code> 就只能笼统处理，无法给出有用反馈。',
      '<b>② 避免掩盖真正的 bug：</b>过宽的捕获会把编码错误也一并吞掉，',
      '程序看似正常、实际问题被隐藏，排查极其困难。',
      '<b>③ 精确控制流程：</b>只捕获预期内的异常，预期外的照常抛出（fail fast），便于尽早发现问题。',
      '<b>例子：</b>',
      '<pre>try:\n    n = int(input("Enter a number: "))\n    print(100 / n)\nexcept ValueError:\n    print("That is not a valid number.")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")</pre>',
      '<b>继承层次：</b>',
      '<pre>BaseException\n ├── SystemExit\n ├── KeyboardInterrupt\n └── Exception\n      ├── ValueError / TypeError / KeyError\n      ├── FileNotFoundError / ZeroDivisionError\n      └── ...</pre>',
      '<b>实践建议：</b>捕获 <code>Exception</code> 而非 <code>BaseException</code>，',
      '否则连 <code>Ctrl+C</code>（KeyboardInterrupt）都无法中断程序。'
    ],
    conclusion: '文本文件人可读可编辑、便于交换；二进制文件紧凑高效、能精确存字节。多种异常类用于差异化处理、避免掩盖 bug、精确控制流程。'
  },
  {
    id: 'pp-4', topic: 'control', topicName: '控制流', year: '2024 卷 Q15 / Q16', marks: 12,
    title: 'if-elif-else 的意义与 while 循环的适用场景',
    statement: '(a) 解释 <code>if-elif-else</code> 的意义，举两个现实生活中的例子（不写代码）。<br>(b) 什么情况下 <code>while</code> 比 <code>for</code> 更合适？给出一个简短例子。',
    proof: [
      '<b>(a) if-elif-else 的意义</b>',
      '<b>意义：在多个互斥条件中，按书写顺序逐个判断，只执行第一个成立的分支，其余全部跳过。</b>',
      '<b>与一连串独立 if 的关键区别：</b>',
      '· 多个独立 <code>if</code>：每个条件都会被判断，可能同时成立、全部执行。',
      '· <code>if-elif-else</code>：命中一个分支后立即结束整条链，语义上表示「互斥」。',
      '好处：效率更高（命中即可停止判断），意图更清晰（明确说明这些情况互斥）。',
      '<b>现实例子 1 —— 成绩等级：</b>',
      '90 分及以上为 A；否则若 80 分及以上为 B；否则若 70 分及以上为 C；否则为 F。',
      '一个分数只会对应一个等级，这正是「互斥」的典型场景。',
      '<b>现实例子 2 —— 地铁票价：</b>',
      '行程不超过 3 站收 \\$5；否则不超过 6 站收 \\$8；否则不超过 10 站收 \\$12；其余收 \\$15。',
      '一次行程只对应一档票价。',
      '<b>第三个例子（选答）—— 停车收费：</b>',
      '前 1 小时免费；1 至 3 小时每小时 \\$10；超过 3 小时按日计费。',
      '<b>顺序的重要性：</b>若把条件写反（先判断「≥70 为 C」再判断「≥90 为 A」），90 分也会被判成 C。',
      '因此 <code>elif</code> 的条件应从最严格/最具体的开始写。',
      '<b>(b) while 的适用场景</b>',
      '<b>核心区别：</b>',
      '· <code>for</code>：循环次数已知，或需要遍历一个序列（<code>range</code>、列表、字符串、文件行）。',
      '· <code>while</code>：循环次数未知，需要反复执行直到某个条件不再成立。',
      '<b>典型场景：</b>',
      '① 输入校验（一直询问直到用户给出合法输入）',
      '② 游戏主循环（直到玩家退出）',
      '③ 数值迭代（直到误差小于给定阈值）',
      '④ 读取数据流（直到遇到结束标志）',
      '<b>例子 —— 输入校验（次数未知）：</b>',
      '<pre>n = int(input("Enter a positive number: "))\nwhile n &lt;= 0:\n    print("Must be positive!")\n    n = int(input("Enter a positive number: "))\nprint("You entered", n)</pre>',
      '这段逻辑无法用 <code>for</code> 表达，因为事先不知道用户要尝试几次。',
      '<b>两者可以互相改写：</b>',
      '<pre># for 版本\nfor i in range(5):\n    print(i)\n\n# 等价的 while 版本\ni = 0\nwhile i &lt; 5:\n    print(i)\n    i += 1</pre>',
      '<b>注意：</b><code>while</code> 循环体内必须有能改变条件的语句，否则会陷入死循环。',
      '必要时可用 <code>break</code> 提前退出、<code>continue</code> 跳过本次。'
    ],
    conclusion: 'if-elif-else 表达互斥的多分支选择，只执行第一个成立的分支；while 适合循环次数未知、依赖条件终止的场景。'
  },
  {
    id: 'pp-5', topic: 'algo', topicName: '算法与问题求解', year: '2025 卷 Q17', marks: 10,
    title: '从选择规则构造决策树并检测冲突',
    statement: '给定餐饮选择表（Dietary Preference × Time of Day → Meal Type）与四条约束，说明如何检测数据冲突、如何构造覆盖所有可能性的决策树，以及当「所有人都是非素食者」时如何得到最高效的决策树。',
    proof: [
      '<b>第一步：明确输入与输出。</b>',
      '输入两个属性：Dietary Preference（Vegetarian / Non-Vegetarian / Vegan）与 Time of Day（Breakfast / Lunch / Dinner）。',
      '输出：Meal Type（Salad / Stir-Fry / Pasta / Grilled Meat）。',
      '<b>第二步：冲突检测（17a）。</b>',
      '做法是把「规则」与「表格条目」逐条比对，寻找两种矛盾：',
      '<b>① 规则之间矛盾：</b>「所有早餐都是 Salad，非素食者除外」与「非素食者早餐 = Pasta」并存时，',
      '需确认后者是否属于规则中明确列出的「例外」。若规则未写明例外，则两条规则冲突。',
      '<b>② 规则与表格条目矛盾：</b>表格给出 Non-Vegetarian + Breakfast = Pasta，',
      '而规则要求「所有早餐都是 Salad（非素食除外）」—— 这里恰好被例外覆盖，故<b>不冲突</b>。',
      '<b>③ 默认规则与显式条目矛盾：</b>规则说「其他未提到的情况推荐 Stir-Fry」，',
      '但表格已为 Vegan + Dinner 指定 Stir-Fry、Vegan + Lunch 指定 Salad，这些是显式条目，优先级高于默认规则，不构成冲突。',
      '<b>结论：</b>逐条检查后，表中条目与规则一致；真正需要警惕的是「显式条目」与「默认规则」同时覆盖同一组合时以哪个为准 —— 应明确规定<b>显式优于默认</b>。',
      '<b>第三步：画决策树（17b）。</b>',
      '<b>层 1（根）：</b>判断 Dietary Preference，三条分支：Vegetarian / Non-Vegetarian / Vegan。',
      '<b>层 2：</b>每个分支下判断 Time of Day，三条分支：Breakfast / Lunch / Dinner。',
      '<b>叶节点：</b>查表得到 Meal Type。共 $3\\times3=9$ 条路径，覆盖所有可能组合。',
      '<pre>                Dietary Preference\n      ┌──────────────┼──────────────┐\n  Vegetarian   Non-Vegetarian     Vegan\n   ┌──┼──┐      ┌──┼──┐        ┌──┼──┐\n  B  L  D      B  L  D        B  L  D\n  │  │  │      │  │  │        │  │  │\nSalad│Stir│  Pasta│Grilled│    Salad│Stir│</pre>',
      '（B=Breakfast, L=Lunch, D=Dinner；具体菜品依表格填入。）',
      '<b>第四步：最有效版本（17c）。</b>',
      '若已知「所有人都是非素食者」，则第一层判断的结果<b>恒定</b>，可以整层删除。',
      '决策树退化为只按 Time of Day 分 3 支，高度从 2 降到 1，判断次数从最多 2 次降到最多 1 次。',
      '<b>一般规律：</b>决策树中「结果恒定」的属性判断是冗余的，删除后不影响正确性，却能显著提高效率。',
      '这正是<b>抽象</b>（忽略不必要的信息）与<b>算法优化</b>的结合。',
      '<b>补充：约束「同类菜品不超过两份」的作用。</b>',
      '这条约束限制的是「一位用餐者在多餐中的选择」，属于对树的<b>路径组合</b>施加限制，',
      '而不是对单个叶节点。因此画树时不体现，但在实际推荐（需要为某人安排多餐）时必须检查。'
    ],
    conclusion: '冲突检测 = 逐条比对规则与表格、并规定「显式优于默认」；决策树按属性分层展开（3×3=9 条路径）；若某属性取值恒定则删除该层以提高效率。'
  },
  {
    id: 'pp-6', topic: 'algo', topicName: '算法与问题求解', year: '2024 卷 Q21 / Lecture 10', marks: 8,
    title: '邻接表、邻接矩阵与图的表示选择',
    statement: '说明邻接表（adjacency list）与邻接矩阵（adjacency matrix）的区别，各自的空间复杂度与适用场景，并说明如何根据邻接表把图画出来。',
    proof: [
      '<b>邻接矩阵</b>',
      '用一个 $n\\times n$ 的二维数组表示：<code>m[i][j]</code> 存放顶点 $i$ 到 $j$ 的边权。',
      '· 空间：$O(n^{2})$，与边数无关',
      '· 判断两点是否相邻：$O(1)$',
      '· 求某点的所有邻居：$O(n)$',
      '· 适合<b>稠密图</b>（边数接近 $n^{2}$），且实现简单',
      '<b>邻接表</b>',
      '为每个顶点维护一个「邻居列表」，记录相邻顶点（带权图还要记权重）。',
      '· 空间：$O(n+e)$，$e$ 为边数',
      '· 判断两点是否相邻：$O(\\deg(v))$',
      '· 求某点的所有邻居：$O(\\deg(v))$，非常高效',
      '· 适合<b>稀疏图</b>（$e \\ll n^{2}$）',
      '<b>选择依据（举例说明差距）：</b>',
      '若 $n=10000$、$e=20000$：邻接矩阵需要 $10^{8}$ 个存储单元；',
      '邻接表只需约 $2e=40000$ 项（无向图每条边存两次）—— 相差约 2500 倍。',
      '因此图算法（BFS/DFS、最短路）在稀疏图上普遍使用邻接表。',
      '<b>如何根据邻接表画图：</b>',
      '<b>① 画顶点：</b>每个顶点画一个圆，顶点标号写在圆<b>内部</b>。',
      '<b>② 画边：</b>若邻接表中顶点 $u$ 的列表含有 $v$，则在 $u$ 与 $v$ 之间连一条<b>实线</b>。',
      '<b>③ 标权重：</b>带权图的权重数字写在<b>线上方</b>（或线旁）。',
      '<b>④ 方向：</b>有向图必须画<b>箭头</b>表示方向；无向图不画箭头。',
      '<b>⑤ 避免重复：</b>无向图中 $(u,v)$ 与 $(v,u)$ 是同一条边，只画一次。',
      '<b>易错点：</b>邻接表可能列出重复边或自环，画图时需按题目要求处理（重复边通常合并或标注，自环画成从小圆回到自身）。'
    ],
    conclusion: '邻接矩阵 O(n²) 空间、适合稠密图；邻接表 O(n+e) 空间、适合稀疏图。画图时顶点画圆标号在内、边画实线、权重标线上方、有向图加箭头。'
  }
  );

  FCMS.register({
    id: 'COMP1010',
    name: '计算思维与 Python',
    fullName: 'COMP1010 Computational Thinking and Problem Solving',
    desc: '计算思维、Python 基础、数据结构、控制流、函数、文件与异常、算法与问题求解。含 2023–2025 三份期末卷、Quiz 1-2 与 Assignment 题型。',
    color: '#6b3fa0',
    topics: [
      { id: 'ct',         name: '计算思维 / 计算机基础' },
      { id: 'basics',     name: 'Python 基础（类型·运算·字符串）' },
      { id: 'datastruct', name: '数据结构（列表·字典·元组·集合）' },
      { id: 'control',    name: '控制流（if / for / while）' },
      { id: 'function',   name: '函数 / 作用域 / 递归' },
      { id: 'fileexc',    name: '文件处理 / 异常处理' },
      { id: 'algo',       name: '算法与问题求解' },
      { id: 'mixed',      name: '综合与真题' }
    ],
    questions: Q,
    proofs: P,
    papers: (typeof COMP1010_PAPERS !== 'undefined' ? COMP1010_PAPERS : [])
  });
})(typeof window !== 'undefined' ? window : globalThis);
