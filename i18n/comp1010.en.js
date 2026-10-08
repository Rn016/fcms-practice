/* COMP1010 英文翻译层 — 由 /tmp/fcms/build_i18n.js 生成，请勿手改 */
(function(root){
  if(!root.FCMS) return;
  root.FCMS.registerEn("COMP1010", {
 "name": "Computational Thinking & Python",
 "desc": "Computational thinking, Python basics, data structures, control flow, functions, files and exceptions, algorithms and problem solving. Includes three finals (2023–2025), Quizzes 1-2 and Assignments 1-2.",
 "topics": {
  "计算思维 / 计算机基础": "Computational thinking / Computer fundamentals",
  "Python 基础（类型·运算·字符串）": "Python basics (types · operations · strings)",
  "数据结构（列表·字典·元组·集合）": "Data structures (list · dictionary · tuple · set)",
  "控制流（if / for / while）": "Control flow (if / for / while)",
  "函数 / 作用域 / 递归": "Functions / scope / recursion",
  "文件处理 / 异常处理": "File handling / exception handling",
  "算法与问题求解": "Algorithms and problem solving",
  "综合与真题": "Comprehensive and past-paper questions"
 },
 "questions": {
  "p1-1-01": {
   "prompt": "In the “preparing a project presentation” scenario, what does **decomposition** refer to?",
   "blanks": [
    "Meaning of decomposition"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Decomposition</b>: breaking a large, complex problem into several smaller, more manageable sub-problems."
    },
    {
     "i": 1,
     "en": "Take a project presentation as an example: the whole task can be split into sub-tasks such as writing the report, making the poster, and preparing and rehearsing the talk,"
    },
    {
     "i": 2,
     "en": "and each sub-task can be broken down further (e.g. poster → topic, layout, illustrations, proofreading)."
    },
    {
     "i": 3,
     "en": "Benefits: each sub-problem is easier to understand, solve and assign, and it is easier to work on them in parallel and to check for anything missing."
    },
    {
     "i": 4,
     "en": "<b>The four elements of computational thinking</b>: decomposition, abstraction, pattern recognition and algorithm design."
    }
   ]
  },
  "p1-1-02": {
   "prompt": "How does **abstraction** help simplify the preparation of a project presentation?",
   "blanks": [
    "Role of abstraction"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Abstraction</b>: extracting the key features and ignoring details that are irrelevant to the current goal."
    },
    {
     "i": 1,
     "en": "Example: when making a poster you need not care about the printer's internal construction, only that it can produce A1 colour prints;"
    },
    {
     "i": 2,
     "en": "when scheduling you need not consider every classmate's complete timetable, only which time slots people are free."
    },
    {
     "i": 3,
     "en": "This focuses attention on the factors that really affect the result and lowers the complexity of the problem."
    },
    {
     "i": 4,
     "en": "In programming: a function name and its parameters are an abstraction — calling <code>sort()</code> requires no knowledge of its internal sorting algorithm."
    }
   ]
  },
  "p1-1-03": {
   "prompt": "How can **pattern recognition** help a student preparing a project presentation?",
   "blanks": [
    "Role of pattern recognition"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Pattern recognition</b>: finding common structure or regularities across different problems so that an existing solution can be reused."
    },
    {
     "i": 1,
     "en": "Examples:"
    },
    {
     "i": 2,
     "en": "① Every group's presentation follows introduction → demo → Q&amp;A, so the same process template can be applied;"
    },
    {
     "i": 3,
     "en": "② Several classmates need to make slides, so they can share a master template and colour scheme;"
    },
    {
     "i": 4,
     "en": "③ The marking criteria for past presentations were similar, so you can prepare with those in mind."
    },
    {
     "i": 5,
     "en": "In programming: once you notice that finding the maximum has the same structure for a list, a dictionary and a 2-D table, you can write one general function."
    }
   ]
  },
  "p1-1-04": {
   "prompt": "What is the main difference between an interpreter and a compiler?",
   "blanks": [
    "Main difference"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Compiler</b>: translates the whole source program into target code (machine code/bytecode) in one go, producing an executable file that is then run."
    },
    {
     "i": 1,
     "en": "<b>Interpreter</b>: reads the source code line by line, translating one line and executing it, without producing a separate executable file."
    },
    {
     "i": 2,
     "en": "<b>When to use which:</b>"
    },
    {
     "i": 3,
     "en": "· <b>A compiler is better</b>: the program must run repeatedly and speed matters (e.g. operating systems, game engines); it also makes it easy to distribute code to users without revealing the source."
    },
    {
     "i": 4,
     "en": "· <b>An interpreter is better</b>: during development and debugging (change a line and run it, no recompiling); for cross-platform distribution; and for teaching and scripting tasks."
    },
    {
     "i": 5,
     "en": "Python is an interpreted language (it is first compiled to bytecode and then executed by the PVM, so it has features of both)."
    },
    {
     "i": 6,
     "en": "Other differences: in a compiled language all syntax errors are reported at once during compilation; an interpreted language reports an error only when execution reaches that line."
    }
   ]
  },
  "p1-1-05": {
   "prompt": "A computer only understands binary; why do we still need hexadecimal or octal?",
   "blanks": [
    "Reason why it is needed"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Core reason: conversion between these bases is lossless and digit-by-digit, so hexadecimal/octal are human-friendly shorthand for binary.</b>"
    },
    {
     "i": 1,
     "en": "① Conversion is extremely simple: 1 hexadecimal digit $=4$ binary digits; 1 octal digit $=3$ binary digits."
    },
    {
     "i": 2,
     "en": "   Example: $\\texttt{0xD} = \\texttt{0b1101}$, $\\texttt{0o15} = \\texttt{0b001101}$."
    },
    {
     "i": 3,
     "en": "② Shorter and easier to read: 32 binary digits take 32 characters, but only 8 in hexadecimal."
    },
    {
     "i": 4,
     "en": "   Example: $\\texttt{0b11111111111111111111111111111111}$ i.e. $\\texttt{0xFFFFFFFF}$."
    },
    {
     "i": 5,
     "en": "③ Fewer mistakes: with many digits the eye easily miscounts or miscopies; writing them in groups greatly lowers the error rate."
    },
    {
     "i": 6,
     "en": "④ Practical uses: memory addresses, colour values (<code>#FF8800</code>), file permissions (<code>chmod 755</code>),"
    },
    {
     "i": 7,
     "en": "   bitmasks and Unicode code points (<code>U+4E2D</code>) all conventionally use hexadecimal."
    },
    {
     "i": 8,
     "en": "Note: hexadecimal is <b>not</b> understood directly by the computer — it is only a convenient way to write and read values, which must still be converted to binary in the end."
    }
   ]
  },
  "p1-1-06": {
   "prompt": "What is the difference between a plain text file and a binary file? Why do we need both?",
   "blanks": [
    "Main difference"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Plain text file</b>: the content is stored using a character encoding (ASCII/UTF-8) and can be read and modified with an ordinary text editor."
    },
    {
     "i": 1,
     "en": "Example: <code>.txt</code>, <code>.csv</code>, <code>.py</code>, <code>.json</code>."
    },
    {
     "i": 2,
     "en": "<b>Binary file</b>: the content stores raw bytes in a specific format, needs a dedicated program to interpret it, and shows garbage if opened directly as text."
    },
    {
     "i": 3,
     "en": "Example: images <code>.png</code>, audio <code>.mp3</code>, archives <code>.zip</code>, executable files <code>.exe</code>."
    },
    {
     "i": 4,
     "en": "<b>Why both are needed:</b>"
    },
    {
     "i": 5,
     "en": "· Use text when: human readability, manual editing, exchanging data between programs/platforms and easy version control (diff) are needed."
    },
    {
     "i": 6,
     "en": "· Use binary when: a more compact size, faster reading and writing, and exact storage of arbitrary bytes (e.g. float bit patterns, image pixels) are needed."
    },
    {
     "i": 7,
     "en": "A typical example: storing the same image as text such as <code>.csv</code> makes it many times larger and unable to represent pixels exactly;"
    },
    {
     "i": 8,
     "en": "conversely, a configuration file stored in binary can no longer be changed quickly in Notepad."
    }
   ]
  },
  "p1-1-07": {
   "prompt": "Find the output of $\\texttt{bin}(13)$ (including the prefix).",
   "blanks": [
    "$\\texttt{bin}(13)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$13 = 8 + 4 + 1 = 2^{3} + 2^{2} + 2^{0}$, which in binary is written $1101_{2}$."
    },
    {
     "i": 1,
     "en": "Python's <code>bin()</code> adds the <code>0b</code> prefix, so the output is <code>0b1101</code>."
    },
    {
     "i": 2,
     "en": "In contrast: <code>oct(13)</code> → <code>0o15</code> ($1\\times8+5=13$);"
    },
    {
     "i": 3,
     "en": "<code>hex(13)</code> → <code>0xd</code> (<code>d</code> stands for 13)."
    }
   ]
  },
  "p1-1-08": {
   "prompt": "Find the output of $\\texttt{hex}(255)$ (including the prefix, lowercase).",
   "blanks": [
    "$\\texttt{hex}(255)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$255 = 15\\times16 + 15$, and 15 is written <code>f</code> in hexadecimal."
    },
    {
     "i": 1,
     "en": "So $255_{10} = \\texttt{ff}_{16}$, Python outputs <code>0xff</code>."
    },
    {
     "i": 2,
     "en": "Worth remembering: the range of 1 byte (8 bits) $0\\sim255$ is exactly <code>0x00</code> ~ <code>0xff</code>, 256 values in total."
    }
   ]
  },
  "p1-1-09": {
   "prompt": "Find the decimal value of $\\texttt{0b1101}$.",
   "blanks": [
    "Decimal value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\texttt{0b1101}$ has place values $2^{3},2^{2},2^{1},2^{0}$:"
    }
   ]
  },
  "p1-1-10": {
   "prompt": "Find the quotient and remainder of $17 \\div 5$ (answer in Python’s $\\texttt{divmod}$ form, i.e. $\\texttt{(quotient, remainder)}$).",
   "blanks": [
    "$\\texttt{divmod}(17,5)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$17 = 3\\times5 + 2$, so the quotient is 3 and the remainder is 2."
    },
    {
     "i": 2,
     "en": "Equivalent forms: <code>17 // 5</code> → 3, <code>17 % 5</code> → 2."
    }
   ]
  },
  "p1-1-11": {
   "prompt": "Find the values of $\\texttt{-7 // 2}$ and $\\texttt{-7 \\% 2}$ (separated by commas).",
   "blanks": [
    "$(-7 // 2,\\ -7 \\% 2)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Key point: Python's integer division floors (rounds down), it does not truncate toward zero.</b>"
    },
    {
     "i": 1,
     "en": "$-7/2 = -3.5$, flooring gives $-4$, so <code>-7 // 2</code> → <code>-4</code>."
    },
    {
     "i": 2,
     "en": "The remainder satisfies $a = (a//b)\\cdot b + (a\\%b)$: $-7 = (-4)\\cdot2 + 1$, so <code>-7 % 2</code> → <code>1</code>."
    },
    {
     "i": 3,
     "en": "<b>Common pitfalls:</b> in C/Java $-7/2 = -3$, $-7\\%2 = -1$ (truncation toward zero); Python gives a different result."
    },
    {
     "i": 4,
     "en": "Remember: in Python the sign of the remainder always matches the <b>divisor</b>."
    }
   ]
  },
  "p1-1-12": {
   "prompt": "Find the result of $\\texttt{0.1 + 0.2 == 0.3}$ (enter $\\texttt{True}$ or $\\texttt{False}$).",
   "blanks": [
    "Result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Floats are stored in binary per IEEE 754, so $0.1$, $0.2$ and $0.3$ <b>cannot be represented exactly</b> and only approximate values are stored."
    },
    {
     "i": 1,
     "en": "$0.1+0.2$ actually gives <code>0.30000000000000004</code>, which is not equal to the stored value of <code>0.3</code>."
    },
    {
     "i": 2,
     "en": "So the comparison result is <code>False</code>."
    },
    {
     "i": 3,
     "en": "<b>The correct approach</b>: compare with a tolerance, e.g. <code>abs(0.1+0.2-0.3) &lt; 1e-9</code>;"
    },
    {
     "i": 4,
     "en": "or use <code>decimal.Decimal</code> or <code>fractions.Fraction</code> when exact decimals are needed."
    }
   ]
  },
  "p1-2-01": {
   "prompt": "What does the following code output?\n<pre>s = \"python\"\nprint(s[0], s[-1], s[2:5])</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Index:</b> <code>s[0]</code> → <code>\"p\"</code> (the first character; indices start at 0)."
    },
    {
     "i": 1,
     "en": "<b>Negative index:</b> <code>s[-1]</code> → <code>\"n\"</code> (the last character)."
    },
    {
     "i": 2,
     "en": "<b>Slice:</b> <code>s[2:5]</code> → indices 2, 3, 4, namely <code>\"t\"</code>, <code>\"h\"</code>, <code>\"o\"</code> → <code>\"tho\"</code>."
    },
    {
     "i": 3,
     "en": "<b>Key point: a slice is half-open</b> — it includes the start index but not the stop index."
    },
    {
     "i": 4,
     "en": "Overall output: <code>p n tho</code> (<code>print</code> separates multiple arguments with a space)."
    },
    {
     "i": 5,
     "en": "In addition: <code>s[::-1]</code> gives the reversed string <code>\"nohtyp\"</code>."
    }
   ]
  },
  "p1-2-02": {
   "prompt": "What does the following code output?\n<pre>s = \"abc\"\ntry:\n    s[0] = \"x\"\nexcept Exception as e:\n    print(type(e).__name__)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>In Python a string is an immutable object.</b>"
    },
    {
     "i": 1,
     "en": "Once created, you cannot change one of its characters by index assignment, so <code>s[0] = \"x\"</code> raises <code>TypeError</code>."
    },
    {
     "i": 2,
     "en": "The exception class is <code>TypeError</code>, and <code>type(e).__name__</code> outputs <code>TypeError</code>."
    },
    {
     "i": 3,
     "en": "<b>The correct approach</b>: build a new string, e.g. <code>s = \"x\" + s[1:]</code>."
    },
    {
     "i": 4,
     "en": "Other immutable types include: <code>tuple</code>, <code>frozenset</code>, <code>int</code>, <code>str</code>."
    },
    {
     "i": 5,
     "en": "The mutable ones are: <code>list</code>, <code>dict</code>, <code>set</code>."
    }
   ]
  },
  "p1-2-03": {
   "prompt": "Find the values of $\\texttt{\"banana\".count(\"a\")}$ and $\\texttt{\"banana\".find(\"na\")}$ (separated by commas).",
   "blanks": [
    "Two values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "In <code>\"banana\"</code> the letter <code>a</code> appears at indices 1, 3 and 5, i.e. <b>3</b> times → <code>count</code> returns 3."
    },
    {
     "i": 1,
     "en": "<code>find(\"na\")</code> returns the starting index of the <b>first occurrence</b> of the substring."
    },
    {
     "i": 2,
     "en": "<code>\"banana\"</code>: <code>\"na\"</code> occurs at indices 2 and 3, so it returns <b>2</b>."
    },
    {
     "i": 3,
     "en": "<b>Note:</b> when the substring is not found, <code>find</code> returns <code>-1</code> (without raising an error), e.g. <code>\"banana\".find(\"zz\")</code> → <code>-1</code>;"
    },
    {
     "i": 4,
     "en": "whereas <code>\"banana\".index(\"zz\")</code> raises <code>ValueError</code>."
    }
   ]
  },
  "p1-2-04": {
   "prompt": "What does the following code output?\n<pre>s = \"Hello, World\"\nprint(s.upper(), s.lower(), s.split(\",\"))</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>s.upper()</code> → <code>\"HELLO, WORLD\"</code> (converts everything to uppercase)."
    },
    {
     "i": 1,
     "en": "<code>s.lower()</code> → <code>\"hello, world\"</code> (converts everything to lowercase)."
    },
    {
     "i": 2,
     "en": "<code>s.split(\",\")</code> → splits at the commas, giving the list <code>['Hello', ' World']</code>."
    },
    {
     "i": 3,
     "en": "<b>Watch the space:</b> after splitting, the second piece keeps a leading space (<code>\" World\"</code>), because the space after the comma belongs to that piece."
    },
    {
     "i": 4,
     "en": "To remove it, write <code>s.replace(\",\", \"\").split()</code> or apply <code>.strip()</code> to each piece."
    },
    {
     "i": 5,
     "en": "Overall output: <code>HELLO, WORLD hello, world ['Hello', ' World']</code>."
    }
   ]
  },
  "p1-2-05": {
   "prompt": "In Python, determine whether the string $w$ is a palindrome; fill in the missing slice expression:\n<pre>print(\"yes\" if w == w[____] else \"no\")</pre>",
   "blanks": [
    "Slice"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The slice syntax is <code>[start:stop:step]</code>; omitting start/stop takes everything."
    },
    {
     "i": 1,
     "en": "<code>step = -1</code> means taking characters one by one from the end, so <code>w[::-1]</code> simply reverses the string."
    },
    {
     "i": 2,
     "en": "Example: <code>\"racecar\"[::-1]</code> → <code>\"racecar\"</code> (a palindrome, the same forwards and backwards) → outputs <code>yes</code>."
    },
    {
     "i": 3,
     "en": "<b>The corresponding exam question (2024 paper Q20)</b> asks for a complete program; another way to write it:"
    }
   ]
  },
  "p1-2-06": {
   "prompt": "Find the output of $\\texttt{print(eval(\"1+2\"))}$.",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>eval()</code> <b>evaluates</b> a string as a Python expression."
    },
    {
     "i": 1,
     "en": "<code>eval(\"1+2\")</code> computes $1+2$ to give the integer <code>3</code>, and <code>print</code> outputs <code>3</code>."
    },
    {
     "i": 2,
     "en": "<b>In contrast:</b> <code>print(\"1+2\")</code> outputs the string <code>1+2</code> directly (without computing anything)."
    },
    {
     "i": 3,
     "en": "<b>Security warning:</b> <code>eval</code> executes arbitrary code, so never use it on user input (for example the input <code>__import__(\"os\").system(\"rm -rf /\")</code>)."
    },
    {
     "i": 4,
     "en": "If you only need to convert a type, use <code>int()</code>, <code>float()</code> or <code>ast.literal_eval()</code>."
    }
   ]
  },
  "p1-2-07": {
   "prompt": "Let A, B, C be boolean values. The original paper writes the code as $\\texttt{(A || B \\&\\& C) == (A || (B \\&\\& C))}$; what happens in Python?",
   "blanks": [
    "Result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>It raises an error.</b> <code>||</code> and <code>&&</code> are C/Java logical operators and <b>do not exist in Python</b>."
    },
    {
     "i": 1,
     "en": "Python uses the keywords <code>or</code>, <code>and</code>, <code>not</code>."
    },
    {
     "i": 2,
     "en": "So this line raises <code>SyntaxError</code> during parsing — a syntax error (execution never even starts)."
    },
    {
     "i": 3,
     "en": "<b>The correct Python form and its result:</b>"
    },
    {
     "i": 5,
     "en": "<b>Key point — operator precedence:</b> in Python <code>and</code> has <b>higher</b> precedence than <code>or</code>,"
    },
    {
     "i": 6,
     "en": "so the left side <code>A or B and C</code> is equivalent to <code>A or (B and C)</code>; the two sides are identical and the result is <code>True</code>."
    },
    {
     "i": 7,
     "en": "Also, <code>and</code>/<code>or</code> use <b>short-circuit evaluation</b>: <code>A or X</code> does not evaluate X when A is true."
    }
   ]
  },
  "p1-2-08": {
   "prompt": "Find the output of $\\texttt{print([1,2,3] * 2)}$.",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Multiplying a list by an integer means <b>repetition</b>: <code>[1,2,3] * 2</code> repeats the whole list twice."
    },
    {
     "i": 1,
     "en": "Result: <code>[1, 2, 3, 1, 2, 3]</code>."
    },
    {
     "i": 2,
     "en": "<b>In contrast:</b> <code>[1,2,3] + [4]</code> is <b>concatenation</b> (joining two lists), giving <code>[1, 2, 3, 4]</code>."
    },
    {
     "i": 3,
     "en": "The same holds for strings: <code>\"ab\" * 3</code> → <code>\"ababab\"</code>."
    },
    {
     "i": 4,
     "en": "<b>Pitfall:</b> copying a nested list by multiplication gives <b>shared references</b>:"
    },
    {
     "i": 5,
     "en": "<pre>g = [[0]] * 3\ng[0][0] = 9\nprint(g)      # [[9], [9], [9]] —— 三行是同一个列表！</pre>"
    },
    {
     "i": 6,
     "en": "The correct way: <code>g = [[0] for _ in range(3)]</code>."
    }
   ]
  },
  "p1-2-09": {
   "prompt": "Find the output of the following code:\n<pre>x = {1:[\"a\",\"b\",\"c\"], 2:[1,2,3], 3:2}\nprint(x[x[2][0]][-2])</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Unwrap it layer by layer from the inside out.</b>"
    },
    {
     "i": 1,
     "en": "<b>Step 1:</b> <code>x[2]</code> → the value for key 2 in the dictionary, <code>[1,2,3]</code>."
    },
    {
     "i": 2,
     "en": "<b>Step 2:</b> <code>x[2][0]</code> → element 0 of that list, <code>1</code>."
    },
    {
     "i": 3,
     "en": "<b>Step 3:</b> <code>x[1]</code> → the value for key 1 in the dictionary, <code>[\"a\",\"b\",\"c\"]</code>."
    },
    {
     "i": 4,
     "en": "<b>Step 4:</b> <code>[-2]</code> → the second-to-last element, <code>\"b\"</code>."
    },
    {
     "i": 5,
     "en": "So the output is <code>b</code>."
    },
    {
     "i": 6,
     "en": "<b>Summary of the method:</b> with nested indices, evaluate step by step from left to right and from the inside out, and write down the intermediate results, so mistakes are unlikely."
    }
   ]
  },
  "p1-2-10": {
   "prompt": "Find the values of $\\texttt{2 ** 10}$ and $\\texttt{pow(2, 10, 1000)}$ (separated by commas).",
   "blanks": [
    "Two values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>2 ** 10</code> → $2^{10} = 1024$ (exponentiation)."
    },
    {
     "i": 1,
     "en": "<code>pow(2, 10, 1000)</code> is the <b>three-argument form</b>: it computes $2^{10} \\bmod 1000$."
    },
    {
     "i": 2,
     "en": "$1024 \\bmod 1000 = 24$, so it returns 24."
    },
    {
     "i": 3,
     "en": "<b>Why three-argument pow matters:</b> when taking a modulus with a huge exponent it uses fast exponentiation internally, so it never first computes an astronomical number and then takes the modulus."
    },
    {
     "i": 4,
     "en": "Example: <code>pow(2, 10**9, 7)</code> gives a result instantly, whereas <code>2**(10**9) % 7</code> exhausts memory."
    },
    {
     "i": 5,
     "en": "This is crucial in cryptography (RSA)."
    }
   ]
  },
  "p1-3-01": {
   "prompt": "What does the following code output (three lines)?\n<pre>rows = [[8,6],[7,5],[4,21]]\nfor i in rows:\n    print(i[0] + i[1])</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The loop variable <code>i</code> takes each <b>row</b> in turn (that is, each sub-list)."
    },
    {
     "i": 1,
     "en": "Round 1: <code>i = [8,6]</code>, <code>i[0]+i[1] = 8+6 = 14</code>."
    },
    {
     "i": 2,
     "en": "Round 2: <code>i = [7,5]</code>, <code>7+5 = 12</code>."
    },
    {
     "i": 3,
     "en": "Round 3: <code>i = [4,21]</code>, <code>4+21 = 25</code>."
    },
    {
     "i": 4,
     "en": "So three lines are printed: <code>14</code>, <code>12</code>, <code>25</code>."
    },
    {
     "i": 5,
     "en": "<b>Easily confused:</b> if you write <code>for i in rows</code> but use <code>print(i)</code>, the whole sub-list <code>[8, 6]</code> is printed."
    }
   ]
  },
  "p1-3-02": {
   "prompt": "Given the 2D list $g=[[1,2,3],[4,5,6],[7,8,9]]$, use nested loops to find the sum of all elements in the **last two columns** (do not use $\\texttt{sum}$); enter the result.",
   "blanks": [
    "Sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Approach:</b> the outer loop traverses each row, and the inner loop traverses only the last two columns of that row."
    },
    {
     "i": 2,
     "en": "<b>Round-by-round calculation:</b>"
    },
    {
     "i": 3,
     "en": "Row 1 <code>[1,2,3]</code>: <code>j</code> takes 1 and 2 → add $2+3=5$, running total 5."
    },
    {
     "i": 4,
     "en": "Row 2 <code>[4,5,6]</code>: add $5+6=11$, running total 16."
    },
    {
     "i": 5,
     "en": "Row 3 <code>[7,8,9]</code>: add $8+9=17$, running total 33."
    },
    {
     "i": 6,
     "en": "So the result is <b>33</b>."
    },
    {
     "i": 7,
     "en": "<b>General form:</b> the last two columns are <code>row[-2:]</code>, which can also be written <code>for v in row[-2:]: s += v</code>."
    }
   ]
  },
  "p1-3-03": {
   "prompt": "Find the complete output of the following code (7 lines in total):\n<pre>def myfunc(x):\n    if len(x) &lt; 2:\n        x.append(1)\n    else:\n        x.append(x[-1] + x[-2])\n    return x\ny = []\nfor i in range(6):\n    z = myfunc(y)\n    print(z)\nprint(y)</pre>",
   "blanks": [
    "Output of the 6th loop iteration (i.e. the 6th line)",
    "Output of the last line $\\texttt{print(y)}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Key point: a list is a mutable object, and passing it as an argument passes a reference.</b>"
    },
    {
     "i": 1,
     "en": "<code>y</code> is always the same list; in <code>myfunc</code>, <code>x</code> and <code>y</code> refer to the same object,"
    },
    {
     "i": 2,
     "en": "so every round appends **in place** and <code>y</code> keeps growing."
    },
    {
     "i": 3,
     "en": "<b>Step-by-step trace:</b>"
    },
    {
     "i": 4,
     "en": "Round 1: <code>len([]) &lt; 2</code> holds → append 1 → <code>[1]</code>"
    },
    {
     "i": 5,
     "en": "Round 2: <code>len([1]) &lt; 2</code> holds → append 1 → <code>[1, 1]</code>"
    },
    {
     "i": 6,
     "en": "Round 3: <code>len = 2</code> does not hold → append <code>1+1=2</code> → <code>[1, 1, 2]</code>"
    },
    {
     "i": 7,
     "en": "Round 4: append <code>2+1=3</code> → <code>[1, 1, 2, 3]</code>"
    },
    {
     "i": 8,
     "en": "Round 5: append <code>3+2=5</code> → <code>[1, 1, 2, 3, 5]</code>"
    },
    {
     "i": 9,
     "en": "Round 6: append <code>5+3=8</code> → <code>[1, 1, 2, 3, 5, 8]</code>"
    },
    {
     "i": 10,
     "en": "This is how the <b>Fibonacci sequence</b> is generated."
    },
    {
     "i": 11,
     "en": "<b>Note that the last two lines are identical:</b> because <code>z</code> and <code>y</code> are the same object, <code>print(z)</code> and <code>print(y)</code> give the same result."
    },
    {
     "i": 12,
     "en": "This also explains why you <b>should not use mutable objects as default arguments</b> (see the related question below)."
    }
   ]
  },
  "p1-3-04": {
   "prompt": "In the following code, what is $\\texttt{a}$ in the end?\n<pre>a = [1,2,3]\nb = a\nb.append(4)\nprint(a)</pre>",
   "blanks": [
    "$\\texttt{a}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b><code>b = a</code> does not copy the list; it only makes <code>b</code> and <code>a</code> refer to the same object (an alias).</b>"
    },
    {
     "i": 1,
     "en": "So changes made through <code>b</code> are also visible through <code>a</code>, and the output is <code>[1, 2, 3, 4]</code>."
    },
    {
     "i": 2,
     "en": "<b>If you need a real copy</b> (shallow copy):"
    },
    {
     "i": 3,
     "en": "<pre>b = a[:]        # 切片\nb = a.copy()    # copy 方法\nb = list(a)     # list 构造</pre>"
    },
    {
     "i": 4,
     "en": "All three give a new list, and <code>a</code> stays <code>[1, 2, 3]</code>."
    },
    {
     "i": 5,
     "en": "<b>Note the limitation of a shallow copy:</b> nested lists still share their inner objects, so use <code>copy.deepcopy(a)</code>."
    }
   ]
  },
  "p1-3-05": {
   "prompt": "When $\\texttt{x = [10,20,30,40,50]}$, find the three values $\\texttt{x[1:4]}$, $\\texttt{x[-2]}$, $\\texttt{x[::-1]}$ (separated by spaces).",
   "blanks": [
    "Three values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>x[1:4]</code> → indices 1, 2, 3 → <code>[20, 30, 40]</code> (half-open, index 4 excluded)."
    },
    {
     "i": 1,
     "en": "<code>x[-2]</code> → the second-to-last element → <code>40</code>."
    },
    {
     "i": 2,
     "en": "<code>x[::-1]</code> → step $-1$, reversing the whole list → <code>[50, 40, 30, 20, 10]</code>."
    },
    {
     "i": 3,
     "en": "<b>Summary of the three slice parts <code>[start:stop:step]</code>:</b>"
    },
    {
     "i": 4,
     "en": "· <code>x[:3]</code> the first three · <code>x[3:]</code> from the 4th to the end · <code>x[:]</code> everything"
    },
    {
     "i": 5,
     "en": "· <code>x[::2]</code> every other element · <code>x[-3:-1]</code> from the 3rd-last to the 2nd-last"
    }
   ]
  },
  "p1-3-06": {
   "prompt": "What does the following code output?\n<pre>d = {\"a\":1, \"b\":2}\nd[\"c\"] = 3\nprint(len(d), sorted(d.keys()), sum(d.values()))</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The dictionary starts with 2 key-value pairs; <code>d[\"c\"] = 3</code> adds one, so <code>len(d)</code> → <code>3</code>."
    },
    {
     "i": 1,
     "en": "<code>d.keys()</code> returns all the keys, and <code>sorted()</code> sorts them alphabetically → <code>['a', 'b', 'c']</code>."
    },
    {
     "i": 2,
     "en": "<code>d.values()</code> is $1,2,3$, and <code>sum()</code> → $6$."
    },
    {
     "i": 3,
     "en": "Overall output: <code>3 ['a', 'b', 'c'] 6</code>."
    },
    {
     "i": 4,
     "en": "<b>Note:</b> a dictionary <b>guarantees no ordering other than insertion order</b>; printing <code>print(d.keys())</code> directly gives an unpredictable order in older versions of Python,"
    },
    {
     "i": 5,
     "en": "so exam questions that show a dictionary's key list usually use <code>sorted()</code> to make the result deterministic."
    }
   ]
  },
  "p1-3-07": {
   "prompt": "When $\\texttt{d = \\{\"a\":1\\}}$, find the values of $\\texttt{d.get(\"b\")}$ and $\\texttt{d.get(\"b\", 0)}$ (separated by commas).",
   "blanks": [
    "Two values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>d.get(key)</code>: when the key is absent it returns <code>None</code> (<b>no error</b>) → <code>None</code>."
    },
    {
     "i": 1,
     "en": "<code>d.get(key, default)</code>: when the key is absent it returns the given default → <code>0</code>."
    },
    {
     "i": 2,
     "en": "<b>The difference from <code>d[key]</code>:</b> <code>d[\"b\"]</code> raises <code>KeyError</code> when the key is absent."
    },
    {
     "i": 3,
     "en": "<b>Practical use — counting:</b>"
    },
    {
     "i": 5,
     "en": "This line means: if <code>ch</code> is already in the dictionary add 1, otherwise start from 0 and count it as 1 — more concise than if-else."
    }
   ]
  },
  "p1-3-08": {
   "prompt": "What does the following code output?\n<pre>s = \"hello\"\nd = {}\nfor ch in s:\n    d[ch] = d.get(ch, 0) + 1\nprint(d)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This code counts how many times each character occurs."
    },
    {
     "i": 1,
     "en": "Traversing <code>\"hello\"</code>:"
    },
    {
     "i": 2,
     "en": "· <code>h</code>: not present → <code>0+1=1</code>"
    },
    {
     "i": 3,
     "en": "· <code>e</code>: not present → <code>1</code>"
    },
    {
     "i": 4,
     "en": "· <code>l</code>: not present → <code>1</code>"
    },
    {
     "i": 5,
     "en": "· <code>l</code>: already present → <code>1+1=2</code>"
    },
    {
     "i": 6,
     "en": "· <code>o</code>: not present → <code>1</code>"
    },
    {
     "i": 7,
     "en": "Python 3.7+ dictionaries keep <b>insertion order</b>, so the output is <code>{'h': 1, 'e': 1, 'l': 2, 'o': 1}</code>."
    },
    {
     "i": 8,
     "en": "<b>A more concise form:</b> <code>collections.Counter(s)</code> gives the same counts directly."
    }
   ]
  },
  "p1-3-09": {
   "prompt": "Find the values of $\\texttt{len(\\{1,2,2,3,3,3\\})}$ and $\\texttt{sorted(\\{1,2,2,3,3,3\\})}$ (separated by spaces).",
   "blanks": [
    "Two values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>A set removes duplicates automatically</b>: <code>{1,2,2,3,3,3}</code> actually contains only $\\{1,2,3\\}$."
    },
    {
     "i": 1,
     "en": "So <code>len(...)</code> → <code>3</code>."
    },
    {
     "i": 2,
     "en": "<code>sorted(...)</code> turns the set into a sorted list → <code>[1, 2, 3]</code>."
    },
    {
     "i": 3,
     "en": "<b>Properties of a set:</b> ① elements are unique ② unordered ③ only hashable objects can be stored — a list cannot go into a set."
    },
    {
     "i": 4,
     "en": "<b>Common uses:</b> removing duplicates, fast membership tests (<code>x in s</code> on average $O(1)$), and set operations."
    }
   ]
  },
  "p1-3-10": {
   "prompt": "Let $a=\\{1,2,3\\}$, $b=\\{2,3,4\\}$. Find the three values $\\texttt{sorted(a \\& b)}$, $\\texttt{sorted(a | b)}$, $\\texttt{sorted(a - b)}$ (separated by spaces).",
   "blanks": [
    "Three values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Intersection $\\&$</b>: elements belonging to both → $\\{2,3\\}$ → <code>[2, 3]</code>."
    },
    {
     "i": 1,
     "en": "<b>Union $|$</b>: elements belonging to either → $\\{1,2,3,4\\}$ → <code>[1, 2, 3, 4]</code>."
    },
    {
     "i": 2,
     "en": "<b>Difference $-$</b>: elements in $a$ but not in $b$ → $\\{1\\}$ → <code>[1]</code>."
    },
    {
     "i": 3,
     "en": "<b>For comparison, the mathematical notation:</b> $A\\cap B$, $A\\cup B$, $A\\setminus B$."
    },
    {
     "i": 4,
     "en": "There is also the symmetric difference <code>a ^ b</code> (belongs to only one of them) → <code>[1, 4]</code>."
    }
   ]
  },
  "p1-3-11": {
   "prompt": "What does the following code output?\n<pre>t = (1,2,3)\ntry:\n    t[0] = 9\nexcept Exception as e:\n    print(type(e).__name__)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>A tuple is an immutable object</b>; its elements cannot be changed after creation."
    },
    {
     "i": 1,
     "en": "So <code>t[0] = 9</code> raises <code>TypeError</code>."
    },
    {
     "i": 2,
     "en": "<b>But if a tuple contains a mutable object, that object itself can still be modified:</b>"
    },
    {
     "i": 3,
     "en": "<pre>t = (1, [2, 3])\nt[1].append(4)      # 合法！t 变成 (1, [2, 3, 4])\n# t[1] = [9]        # 非法，TypeError</pre>"
    },
    {
     "i": 4,
     "en": "<b>Advantages of tuples:</b> ① faster and smaller than lists ② usable as dictionary keys and inside sets ③ good for expressing data that should not change (e.g. coordinates, dates)."
    }
   ]
  },
  "p1-4-01": {
   "prompt": "Explain the meaning of $\\texttt{if-elif-else}$ and give two real-life examples (no code required).",
   "blanks": [
    "Key idea"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Meaning:</b> among <b>several mutually exclusive conditions</b>, they are tested one by one in the order written, and <b>only the first branch that holds is executed</b>; all the rest are skipped."
    },
    {
     "i": 1,
     "en": "It is more efficient than a chain of independent <code>if</code> (testing stops as soon as one matches), and its meaning is clearer (the conditions are explicitly mutually exclusive)."
    },
    {
     "i": 2,
     "en": "<b>Key difference from a chain of ifs:</b> several independent <code>if</code> may hold at the same time and all execute; <code>elif</code> takes only one path."
    },
    {
     "i": 3,
     "en": "<b>Real-world example 1 — grade bands:</b>"
    },
    {
     "i": 4,
     "en": "90 or above is an A, otherwise if 80 or above a B, otherwise if 70 or above a C … one score yields only one grade."
    },
    {
     "i": 5,
     "en": "<b>Real-world example 2 — metro fares:</b>"
    },
    {
     "i": 6,
     "en": "a trip of ≤3 stops costs \\$5; otherwise if ≤6 stops it costs \\$8; otherwise if ≤10 stops it costs \\$12; all other trips cost \\$15 — one trip corresponds to exactly one fare band."
    },
    {
     "i": 7,
     "en": "<b>Third example (optional) — parking charges:</b> the first hour is free, hours 1–3 cost \\$10 per hour, and more than 3 hours is charged per day."
    },
    {
     "i": 8,
     "en": "<b>Order matters:</b> if the conditions are written the other way round (first ≥70 is a C, then ≥90 is an A), a score of 90 would also be graded C."
    }
   ]
  },
  "p1-4-02": {
   "prompt": "In what situations is a $\\texttt{while}$ loop more suitable than a $\\texttt{for}$ loop? Give a short example.",
   "blanks": [
    "When to use"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Core difference:</b>"
    },
    {
     "i": 1,
     "en": "· <code>for</code>: used for a <b>known number of repetitions</b> or over an iterable sequence (<code>range</code>, lists, strings, file lines)."
    },
    {
     "i": 2,
     "en": "· <code>while</code>: used when the <b>number of repetitions is unknown</b> and execution must repeat until some condition no longer holds."
    },
    {
     "i": 3,
     "en": "<b>Typical scenarios:</b> ① input validation (keep asking until the user gets it right) ② a game main loop (until the player quits)"
    },
    {
     "i": 4,
     "en": "③ numerical iteration (until the error is below a threshold) ④ reading stream/network data (until an end marker is reached)."
    },
    {
     "i": 5,
     "en": "<b>Example — validating user input (unknown number of tries):</b>"
    },
    {
     "i": 7,
     "en": "This cannot be expressed with <code>for</code>, because you do not know how many tries the user will need."
    },
    {
     "i": 8,
     "en": "<b>Caution:</b> the body of a while loop must contain a statement that can change the condition, otherwise it becomes an <b>infinite loop</b>."
    },
    {
     "i": 9,
     "en": "<b>Either loop can be rewritten as the other:</b>"
    },
    {
     "i": 10,
     "en": "<pre># for\nfor i in range(5): print(i)\n# 等价的 while\ni = 0\nwhile i &lt; 5:\n    print(i); i += 1</pre>"
    }
   ]
  },
  "p1-4-03": {
   "prompt": "What does the following code output?\n<pre>for i in range(3):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b><code>break</code> breaks out of only the loop level it is currently in.</b>"
    },
    {
     "i": 1,
     "en": "The inner <code>j</code> starts at 0: when <code>j=0</code>, <code>j == 1</code> is false → print <code>0 0</code>."
    },
    {
     "i": 2,
     "en": "When <code>j=1</code> the condition holds → <code>break</code>, <b>breaking only the inner loop</b>."
    },
    {
     "i": 3,
     "en": "The outer loop continues; <code>i=1</code> restarts the inner loop and again prints only <code>1 0</code>."
    },
    {
     "i": 4,
     "en": "When <code>i=2</code> it prints <code>2 0</code>."
    },
    {
     "i": 5,
     "en": "So three lines are printed: <code>0 0</code>, <code>1 0</code>, <code>2 0</code>."
    },
    {
     "i": 6,
     "en": "<b>To break out of two levels</b>, use a flag variable or <code>for...else</code>:"
    }
   ]
  },
  "p1-4-04": {
   "prompt": "What does the following code output?\n<pre>for i in range(5):\n    if i % 2:\n        continue\n    print(i, end=\" \")\nprint()</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b><code>continue</code> skips the remaining statements of this iteration and goes straight to the next round.</b>"
    },
    {
     "i": 1,
     "en": "<code>i % 2</code> is 1 (true) when $i$ is odd and 0 (false) when it is even."
    },
    {
     "i": 2,
     "en": "So the odd values 1 and 3 are skipped by <code>continue</code>; only the even values 0, 2 and 4 execute <code>print</code>."
    },
    {
     "i": 3,
     "en": "<code>end=\" \"</code> keeps the output on one line separated by spaces, so it prints <code>0 2 4 </code> (with a trailing space),"
    },
    {
     "i": 4,
     "en": "The final <code>print()</code> adds a newline."
    },
    {
     "i": 5,
     "en": "<b>The difference from <code>break</code>:</b> <code>continue</code> skips only the current round, while <code>break</code> terminates the whole loop."
    }
   ]
  },
  "p1-4-05": {
   "prompt": "What does the following code output?\n<pre>n, s = 5, 0\nwhile n &gt; 0:\n    s += n\n    n -= 1\nprint(s)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The loop accumulates $5+4+3+2+1$."
    },
    {
     "i": 1,
     "en": "Round by round: <code>s=5</code> → <code>s=9</code> → <code>s=12</code> → <code>s=14</code> → <code>s=15</code>,"
    },
    {
     "i": 2,
     "en": "At this point <code>n</code> becomes 0, the condition <code>n &gt; 0</code> no longer holds, and the loop exits."
    },
    {
     "i": 3,
     "en": "Output <code>15</code>."
    },
    {
     "i": 4,
     "en": "<b>Formula:</b> $\\sum_{k=1}^{n}k = \\dfrac{n(n+1)}{2} = \\dfrac{5\\times6}{2}=15$ ✔"
    }
   ]
  },
  "p1-4-06": {
   "prompt": "What does the following code output?\n<pre>for i in range(1, 6, 2):\n    print(i, end=\" \")</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>range(1, 6, 2)</code> means start at 1, stop before 6 (6 excluded), step 2."
    },
    {
     "i": 1,
     "en": "It produces <code>1, 3, 5</code> in turn."
    },
    {
     "i": 2,
     "en": "So the output is <code>1 3 5 </code>."
    },
    {
     "i": 3,
     "en": "<b>Recap of the three arguments of <code>range</code>:</b> <code>range(stop)</code> starts from 0; <code>range(start, stop)</code> specifies the start;"
    },
    {
     "i": 4,
     "en": "<code>range(start, stop, step)</code> adds the step. A negative step counts backwards, e.g. <code>range(5, 0, -1)</code> → 5,4,3,2,1."
    }
   ]
  },
  "p1-4-07": {
   "prompt": "Write a program that prints the **sum of the factorials** of all numbers in a range given by the user. Example: range 2 to 4 → $2!+3!+4! = 2+6+24 = 32$. If the input is 2 to 5, what is the result?",
   "blanks": [
    "$2!+3!+4!+5!$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>First work out each factorial:</b>"
    },
    {
     "i": 2,
     "en": "<b>Sum them:</b> $2+6+24+120 = 152$."
    },
    {
     "i": 3,
     "en": "<b>Reference code:</b>"
    },
    {
     "i": 5,
     "en": "<b>Key points:</b> ① the inner loop must reset <code>f</code> to 1 every time;"
    },
    {
     "i": 6,
     "en": "② only <code>range(a, b+1)</code> includes the upper bound <code>b</code> (half-open);"
    },
    {
     "i": 7,
     "en": "③ you can also simplify with <code>math.factorial(n)</code>."
    }
   ]
  },
  "p1-4-08": {
   "prompt": "What does the following code output?\n<pre>x = 7\nif x &gt; 10: print(\"A\")\nelif x &gt; 5: print(\"B\")\nelse: print(\"C\")</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>x = 7</code>: the first condition <code>7 &gt; 10</code> is false, so it is skipped."
    },
    {
     "i": 1,
     "en": "The second condition <code>7 &gt; 5</code> is true → execute it and print <code>B</code>."
    },
    {
     "i": 2,
     "en": "<b>Once <code>elif</code> matches, later branches are not tested</b>, so the <code>else</code> is skipped."
    },
    {
     "i": 3,
     "en": "Output <code>B</code>."
    }
   ]
  },
  "p1-5-01": {
   "prompt": "What does the following code output?\n<pre>def f(x, acc=[]):\n    acc.append(x)\n    return acc\nprint(f(1), f(2), f(3))</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>This is one of Python's most famous pitfalls: a default argument is evaluated only once, when the function is defined.</b>"
    },
    {
     "i": 1,
     "en": "So the three calls share <b>the same</b> default list object."
    },
    {
     "i": 2,
     "en": "First call <code>f(1)</code>: <code>acc</code> is an empty list → append 1 → <code>[1]</code>, and it is returned."
    },
    {
     "i": 3,
     "en": "Second call <code>f(2)</code>: <code>acc</code> is still that list (now <code>[1]</code>) → append 2 → <code>[1, 2]</code>."
    },
    {
     "i": 4,
     "en": "Third call <code>f(3)</code>: append 3 → <code>[1, 2, 3]</code>."
    },
    {
     "i": 5,
     "en": "<b>Key point: the three return values are the same object</b>, so all three <code>print</code> calls show how it looks now, <code>[1, 2, 3]</code>."
    },
    {
     "i": 6,
     "en": "<b>The correct approach (use None as a sentinel):</b>"
    },
    {
     "i": 8,
     "en": "<b>Rule: never use a mutable object (list/dict/set) as a default argument.</b>"
    }
   ]
  },
  "p1-5-02": {
   "prompt": "What does the following code output?\n<pre>x = 10\ndef f():\n    x = 20\n    return x\nprint(f(), x)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The <code>x = 20</code> inside the function body creates a <b>local variable</b> <code>x</code>, unrelated to the global <code>x</code>."
    },
    {
     "i": 1,
     "en": "<code>f()</code> returns the local 20; the global <code>x</code> remains 10."
    },
    {
     "i": 2,
     "en": "So the output is <code>20 10</code>."
    },
    {
     "i": 3,
     "en": "<b>Scope lookup rules (LEGB):</b> Local → Enclosing → Global → Built-in."
    },
    {
     "i": 4,
     "en": "<b>To modify a global variable inside a function</b>, you must declare it:"
    },
    {
     "i": 6,
     "en": "Without <code>global</code>, <code>c += 1</code> raises <code>UnboundLocalError</code> because it references a local variable before it is assigned."
    }
   ]
  },
  "p1-5-03": {
   "prompt": "What does the following code output?\n<pre>def g(x):\n    x + 1\nprint(g(5))</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>The function body contains only the expression <code>x + 1</code> and no <code>return</code>.</b>"
    },
    {
     "i": 1,
     "en": "The expression is evaluated and immediately discarded (it has no side effect and is not printed)."
    },
    {
     "i": 2,
     "en": "In Python <b>a function with no return returns <code>None</code></b>."
    },
    {
     "i": 3,
     "en": "So <code>print(g(5))</code> outputs <code>None</code>."
    },
    {
     "i": 4,
     "en": "<b>Compared with <code>return x + 1</code>:</b> only adding return makes it output <code>6</code>."
    },
    {
     "i": 5,
     "en": "<b>Common pitfalls:</b> <code>return</code> and <code>print</code> are completely different — the former hands the value back to the caller, the latter only displays it."
    },
    {
     "i": 6,
     "en": "Writing <code>print(x+1)</code> in the function prints 6, but the return value is still <code>None</code>."
    }
   ]
  },
  "p1-5-04": {
   "prompt": "Find the value of $\\texttt{fact}(5)$ ($\\texttt{fact}(n)$ is the recursive factorial: $\\texttt{return 1 if n &lt;= 1 else n * fact(n-1)}$).",
   "blanks": [
    "$\\texttt{fact}(5)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Unwinding the recursion:"
    },
    {
     "i": 4,
     "en": "<b>The three elements of recursion:</b> ① a base case (<code>n &lt;= 1</code> returns 1) ② a recursive call (<code>fact(n-1)</code>) ③ convergence toward the base case."
    },
    {
     "i": 5,
     "en": "A missing base case leads to <code>RecursionError</code> (stack overflow)."
    },
    {
     "i": 6,
     "en": "<b>Iterative form:</b> <code>f = 1; for k in range(2, n+1): f *= k</code>."
    }
   ]
  },
  "p1-5-05": {
   "prompt": "Find the value of $\\texttt{fib}(6)$ ($\\texttt{fib}(n) = n$ if $n&lt;2$, otherwise $\\texttt{fib}(n-1)+\\texttt{fib}(n-2)$).",
   "blanks": [
    "$\\texttt{fib}(6)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The sequence: <code>fib(0)=0, fib(1)=1</code>; each later term is the sum of the previous two."
    },
    {
     "i": 1,
     "en": "Listing the first few terms: $0, 1, 1, 2, 3, 5, 8, 13, \\dots$"
    },
    {
     "i": 2,
     "en": "So $\\texttt{fib}(6) = 8$."
    },
    {
     "i": 3,
     "en": "<b>Verify:</b> $\\texttt{fib}(6)=\\texttt{fib}(5)+\\texttt{fib}(4)=5+3=8$ ✔"
    },
    {
     "i": 4,
     "en": "<b>Watch the efficiency:</b> this naive recursion has time complexity $O(2^{n})$ (a great many repeated computations)."
    },
    {
     "i": 5,
     "en": "<b>Optimisation:</b> use memoisation with <code>functools.lru_cache</code> or rewrite it iteratively to reduce this to $O(n)$."
    }
   ]
  },
  "p1-5-06": {
   "prompt": "Find the values of $\\texttt{f(3)}$ and $\\texttt{f(3, 4)}$ ($\\texttt{def f(a, b=2): return a * b}$), separated by spaces.",
   "blanks": [
    "Two values"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Default parameter:</b> <code>b=2</code> means that if <code>b</code> is not passed at the call it takes the value 2."
    },
    {
     "i": 2,
     "en": "<code>f(3, 4)</code> → the passed 4 overrides the default → $3 \\times 4 = 12$."
    },
    {
     "i": 3,
     "en": "So the output is <code>6 12</code>."
    },
    {
     "i": 4,
     "en": "<b>Related syntax:</b> keyword arguments <code>f(3, b=5)</code>, keyword-only arguments <code>def f(a, *, b)</code>."
    }
   ]
  },
  "p1-6-01": {
   "prompt": "Read the file <code>nums.txt</code> (containing several lines of integers, each line separated by spaces) and find the sum of all elements; if the file does not exist, print <code>File not found</code>. Fill in the blanks:\n<pre>try:\n    f = open(\"nums.txt\")\n    total = 0\n    for line in f:\n        for x in line.split():\n            total += ____\n    f.close()\n    print(total)\nexcept ____:\n    print(\"File not found\")</pre>",
   "blanks": [
    "Blank 1",
    "Blank 2"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Blank 1: <code>int(x)</code></b> — <code>line.split()</code> gives a list of <b>strings</b>, which must be converted to integers before they can be added."
    },
    {
     "i": 1,
     "en": "Writing <code>total += x</code> directly raises <code>TypeError</code> (an int and a str cannot be added)."
    },
    {
     "i": 2,
     "en": "<b>Blank 2: <code>FileNotFoundError</code></b> — this is the exception that <code>open()</code> raises when the file does not exist."
    },
    {
     "i": 3,
     "en": "(Writing <code>IOError</code>/<code>OSError</code> also catches it, because <code>FileNotFoundError</code> is a subclass of them.)"
    },
    {
     "i": 4,
     "en": "<b>A cleaner version (use with to close the file automatically):</b>"
    },
    {
     "i": 6,
     "en": "<b>The exam paper also requires the result to be written back to the same file:</b> use <code>open(\"nums.txt\", \"a\")</code> to write in append mode."
    },
    {
     "i": 7,
     "en": "<b>Note:</b> a <code>with</code> statement closes the file correctly even if an error occurs midway, which is safer than calling <code>f.close()</code> manually."
    }
   ]
  },
  "p1-6-02": {
   "prompt": "After the following code runs, what are the <code>finally</code> output and the return value?\n<pre>def f():\n    try:\n        return 1\n    finally:\n        print(\"finally\")\nprint(f())</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>A <code>finally</code> block always executes, whether or not an exception occurs and even if the try block contains a return.</b>"
    },
    {
     "i": 1,
     "en": "Order of execution: the <code>try</code> block is entered first, and when <code>return 1</code> is reached,"
    },
    {
     "i": 2,
     "en": "Python <b>stores the return value 1 temporarily</b>, executes the <code>finally</code> block (printing <code>finally</code>),"
    },
    {
     "i": 3,
     "en": "and only then really returns 1, so the outer <code>print</code> prints <code>1</code>."
    },
    {
     "i": 4,
     "en": "So two lines are printed: <code>finally</code> and <code>1</code>."
    },
    {
     "i": 5,
     "en": "<b>Pitfall: if the finally block also has a return, it overrides the return in try:</b>"
    },
    {
     "i": 6,
     "en": "<pre>def g():\n    try:\n        return 1\n    finally:\n        return 2\nprint(g())      # 输出 2，try 的返回值被丢弃</pre>"
    },
    {
     "i": 7,
     "en": "<b>Uses:</b> releasing resources (closing files, dropping connections, unlocking), guaranteeing that it always runs."
    }
   ]
  },
  "p1-6-03": {
   "prompt": "What does the following code output?\n<pre>try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"zero\")\nexcept Exception:\n    print(\"other\")</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>10 / 0</code> raises <code>ZeroDivisionError</code>."
    },
    {
     "i": 1,
     "en": "Python matches <code>except</code> clauses in the order written; <b>the first match is executed</b> and the rest are not tested."
    },
    {
     "i": 2,
     "en": "The first <code>except ZeroDivisionError</code> matches → print <code>zero</code>."
    },
    {
     "i": 3,
     "en": "The second <code>except Exception</code> is skipped (although it could also catch it, because ZeroDivisionError is a subclass of Exception)."
    },
    {
     "i": 4,
     "en": "<b>Important rule:</b> specific exception classes must come first, and broad ones such as <code>Exception</code> must come last,"
    },
    {
     "i": 5,
     "en": "otherwise the specific clauses after them will never be reached."
    },
    {
     "i": 6,
     "en": "<b>Counterexample:</b> if <code>except Exception</code> were written first, it would catch the error first and print <code>other</code>."
    }
   ]
  },
  "p1-6-04": {
   "prompt": "Since the parent class <code>BaseException</code> can catch all exceptions, why are other exception classes still needed?",
   "blanks": [
    "Reason"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>There are three core reasons.</b>"
    },
    {
     "i": 1,
     "en": "<b>① Differentiated handling:</b> different errors need different responses."
    },
    {
     "i": 2,
     "en": "File does not exist → tell the user to check the path; division by zero → point out the invalid input; type error → explain the usage."
    },
    {
     "i": 3,
     "en": "Using <code>except BaseException</code> for everything allows only a generic response and no useful feedback."
    },
    {
     "i": 4,
     "en": "<b>② Avoid hiding real bugs:</b> catching too broadly also swallows coding errors,"
    },
    {
     "i": 5,
     "en": "so the program appears to run normally while the real problem is hidden and extremely hard to track down."
    },
    {
     "i": 6,
     "en": "<b>③ Precise control of program flow:</b> catch only the expected exceptions and let unexpected ones propagate normally (fail fast)."
    },
    {
     "i": 7,
     "en": "<b>Example (handling the two errors separately):</b>"
    },
    {
     "i": 8,
     "en": "<pre>try:\n    n = int(input(\"Enter a number: \"))\n    print(100 / n)\nexcept ValueError:\n    print(\"That is not a valid number.\")     # 输入不是数字\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")          # 输入了 0</pre>"
    },
    {
     "i": 9,
     "en": "<b>Inheritance hierarchy (important):</b>"
    },
    {
     "i": 10,
     "en": "<pre>BaseException\n ├── SystemExit            # sys.exit()\n ├── KeyboardInterrupt     # Ctrl+C\n └── Exception             # 一般业务异常\n      ├── ValueError\n      ├── TypeError\n      ├── KeyError\n      ├── FileNotFoundError\n      └── ZeroDivisionError</pre>"
    },
    {
     "i": 11,
     "en": "<b>Practical advice:</b> catch <code>Exception</code> rather than <code>BaseException</code> —"
    },
    {
     "i": 12,
     "en": "otherwise not even <code>Ctrl+C</code> (KeyboardInterrupt) will be able to interrupt the program."
    }
   ]
  },
  "p1-6-05": {
   "prompt": "What does the following code output?\n<pre>try:\n    raise ValueError(\"bad\")\nexcept ValueError as e:\n    print(type(e).__name__, e)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>raise ValueError(\"bad\")</code> raises an exception deliberately, with the message <code>\"bad\"</code>."
    },
    {
     "i": 1,
     "en": "<code>except ValueError as e</code> binds the exception object to <code>e</code>."
    },
    {
     "i": 2,
     "en": "<code>type(e).__name__</code> → the exception class name as a string, <code>ValueError</code>."
    },
    {
     "i": 3,
     "en": "<code>e</code> printed directly → the exception message <code>bad</code>."
    },
    {
     "i": 4,
     "en": "So the output is <code>ValueError bad</code>."
    },
    {
     "i": 5,
     "en": "<b>Common attributes:</b> <code>e.args</code> → <code>('bad',)</code>; <code>str(e)</code> → <code>'bad'</code>."
    },
    {
     "i": 6,
     "en": "<b>Why raise exceptions deliberately:</b> to validate arguments inside a function and raise immediately when they are invalid, preventing the error from spreading."
    }
   ]
  },
  "p1-6-06": {
   "prompt": "What does the following code output?\n<pre>try:\n    print(int(\"abc\"))\nexcept ValueError:\n    print(\"ValueError\")</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>int(\"abc\")</code> cannot convert a non-numeric string to an integer and raises <code>ValueError</code>."
    },
    {
     "i": 1,
     "en": "<code>except ValueError</code> catches it and prints <code>ValueError</code>."
    },
    {
     "i": 2,
     "en": "<b>Common conversion errors compared:</b>"
    },
    {
     "i": 3,
     "en": "· <code>int(\"abc\")</code> → <code>ValueError</code> (right type but invalid value)"
    },
    {
     "i": 4,
     "en": "· <code>int(None)</code> → <code>TypeError</code> (wrong type)"
    },
    {
     "i": 5,
     "en": "· <code>int(\"3.5\")</code> → <code>ValueError</code> (call <code>float(\"3.5\")</code> first)"
    },
    {
     "i": 6,
     "en": "<b>So when reading user input, it is usually safer to write:</b>"
    }
   ]
  },
  "p1-6-07": {
   "prompt": "The following code writes to a file and reads it back; what does the $\\texttt{print}$ on the second line output?\n<pre>with open(\"t.txt\", \"w\") as f:\n    f.write(\"1 2 3\\n\")\nwith open(\"t.txt\") as f:\n    print(sum(int(x) for line in f for x in line.split()))</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The first part writes the string <code>\"1 2 3\\n\"</code> to the file (note that <code>\\n</code> is a newline character, not two characters)."
    },
    {
     "i": 1,
     "en": "The second part reopens it and reads it back: <code>for line in f</code> takes it line by line, and <code>line.split()</code> splits on whitespace → <code>['1','2','3']</code>."
    },
    {
     "i": 2,
     "en": "<code>int(x)</code> converts them to integers and sums them: $1+2+3=6$."
    },
    {
     "i": 3,
     "en": "So the output is <code>6</code>."
    },
    {
     "i": 4,
     "en": "<b>Key points:</b> ① the file content is <b>text</b>, so everything read out is a string and must be converted;"
    },
    {
     "i": 5,
     "en": "② <code>line.split()</code> without arguments automatically skips runs of whitespace and the newline at the end of the line;"
    },
    {
     "i": 6,
     "en": "③ the <code>with</code> block closes the file automatically when it ends."
    },
    {
     "i": 7,
     "en": "<b>When writing back to the same file</b>, use append mode <code>open(\"t.txt\", \"a\")</code>, otherwise the original content is overwritten."
    }
   ]
  },
  "p1-7-01": {
   "prompt": "After the following bubble sort code runs, what is $\\texttt{a}$?\n<pre>a = [5,1,4,2,8]\nn = len(a)\nfor i in range(n):\n    for j in range(n-1-i):\n        if a[j] &gt; a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\nprint(a)</pre>",
   "blanks": [
    "$\\texttt{a}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Bubble sort: each round bubbles the maximum of the currently unsorted part to the end.</b>"
    },
    {
     "i": 1,
     "en": "<b>Round 1</b> (<code>i=0</code>, 4 comparisons):"
    },
    {
     "i": 2,
     "en": "<code>[5,1,4,2,8]</code> → 5&gt;1 swap → <code>[1,5,4,2,8]</code>"
    },
    {
     "i": 3,
     "en": "→ 5&gt;4 swap → <code>[1,4,5,2,8]</code> → 5&gt;2 swap → <code>[1,4,2,5,8]</code>"
    },
    {
     "i": 4,
     "en": "→ 5&lt;8 no swap. Result <code>[1,4,2,5,8]</code>; the largest value 8 is now at the end."
    },
    {
     "i": 5,
     "en": "<b>Round 2</b> (3 comparisons): <code>[1,4,2,5,8]</code> → 1&lt;4, 4&gt;2 swap → <code>[1,2,4,5,8]</code> → 4&lt;5."
    },
    {
     "i": 6,
     "en": "<b>Rounds 3 and 4</b>: already sorted, no swaps."
    },
    {
     "i": 7,
     "en": "Finally <code>[1, 2, 4, 5, 8]</code>."
    },
    {
     "i": 8,
     "en": "<b>Key syntax:</b> <code>a[j], a[j+1] = a[j+1], a[j]</code> is Python's tuple packing/unpacking swap, which needs no temporary variable."
    },
    {
     "i": 9,
     "en": "<b>Complexity:</b> worst and average $O(n^{2})$, best (already sorted, with an early-exit check) $O(n)$."
    }
   ]
  },
  "p1-7-02": {
   "prompt": "In the sorted list $a=[1,3,5,7,9,11]$, binary search for the target value 7; what index is returned?",
   "blanks": [
    "Index"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Binary search process (indices start at 0):</b>"
    },
    {
     "i": 1,
     "en": "Round 1: <code>lo=0, hi=5</code>, <code>mid=(0+5)//2=2</code>, <code>a[2]=5 &lt; 7</code> → go right, <code>lo=3</code>."
    },
    {
     "i": 2,
     "en": "Round 2: <code>lo=3, hi=5</code>, <code>mid=(3+5)//2=4</code>, <code>a[4]=9 &gt; 7</code> → go left, <code>hi=3</code>."
    },
    {
     "i": 3,
     "en": "Round 3: <code>lo=3, hi=3</code>, <code>mid=3</code>, <code>a[3]=7</code> found → return 3."
    },
    {
     "i": 4,
     "en": "So the index is <b>3</b> (using 3 comparisons)."
    },
    {
     "i": 5,
     "en": "<b>Key code:</b> <code>mid = (lo + hi) // 2</code> must use <b>integer division</b>, otherwise a float index is produced and raises an error."
    },
    {
     "i": 6,
     "en": "<b>Precondition:</b> the list must be <b>sorted</b>, otherwise binary search does not work."
    },
    {
     "i": 7,
     "en": "<b>Complexity:</b> $O(\\log n)$, far better than the $O(n)$ of linear search."
    }
   ]
  },
  "p1-7-03": {
   "prompt": "Find the result of $\\texttt{sorted([\"banana\",\"kiwi\",\"apple\"], key=len)}$.",
   "blanks": [
    "Result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<code>key=len</code> means <b>sort by string length</b>, not lexicographically."
    },
    {
     "i": 1,
     "en": "Word lengths: <code>banana</code>=6, <code>kiwi</code>=4, <code>apple</code>=5."
    },
    {
     "i": 2,
     "en": "In ascending length: 4 &lt; 5 &lt; 6 → <code>['kiwi', 'apple', 'banana']</code>."
    },
    {
     "i": 3,
     "en": "<b>Compare with the default sort without key</b> (lexicographic): <code>['apple', 'banana', 'kiwi']</code>."
    },
    {
     "i": 4,
     "en": "<b>Common uses of key:</b> <code>key=str.lower</code> (ignore case), <code>key=lambda x: x[1]</code> (sort by the second element)."
    },
    {
     "i": 5,
     "en": "<b>Note:</b> <code>sorted()</code> returns a new list and leaves the original unchanged; <code>a.sort()</code> sorts in place and returns <code>None</code>."
    }
   ]
  },
  "p1-7-04": {
   "prompt": "Given a meal selection table (Dietary Preference × Time of Day → Meal Type) and four constraints. Which stage of computational thinking does this question belong to? Enter the most crucial one.",
   "blanks": [
    "Stage"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>This question combines several elements, but the most crucial one is \"abstraction\".</b>"
    },
    {
     "i": 1,
     "en": "Reason: the question asks you to <b>abstract real-world dietary preferences, times of day and dish choices into a decision table</b>,"
    },
    {
     "i": 2,
     "en": "keeping the key attributes (preference type, time of day) and ignoring irrelevant details (price, taste, restaurant location)."
    },
    {
     "i": 3,
     "en": "<b>How each element appears in this question:</b>"
    },
    {
     "i": 4,
     "en": "· <b>Decomposition</b>: split \"ordering a meal\" into \"determine preference → determine time of day → look up the dish in the table\"."
    },
    {
     "i": 5,
     "en": "· <b>Pattern recognition</b>: spot the pattern across times of day for the same preference (e.g. every vegetarian breakfast is Salad)."
    },
    {
     "i": 6,
     "en": "· <b>Abstraction</b>: describe the rules with Boolean conditions and a decision table, dropping real-world details."
    },
    {
     "i": 7,
     "en": "· <b>Algorithm design</b>: part 17(b) asks for a decision tree covering every possible combination."
    },
    {
     "i": 8,
     "en": "<b>On conflict detection (17a):</b>"
    },
    {
     "i": 9,
     "en": "The rule \"all breakfasts are Salad, except for non-vegetarians\" agrees with the table entry \"vegetarian breakfast = Salad\";"
    },
    {
     "i": 10,
     "en": "but the table has Vegan+Lunch=Salad and Vegan+Dinner=Stir-Fry, so you must check whether these conflict with \"no more than two dishes of the same type\"."
    },
    {
     "i": 11,
     "en": "<b>Key points of the decision tree:</b> first test Dietary Preference (3 branches), then within each branch test Time of Day (3 branches),"
    },
    {
     "i": 12,
     "en": "giving 9 paths in total; if everyone is known to be non-vegetarian, the first level of testing can be omitted,"
    },
    {
     "i": 13,
     "en": "splitting directly into 3 branches by time of day, so the tree height drops from 2 to 1 — this is the \"most efficient version\"."
    }
   ]
  },
  "p1-7-05": {
   "prompt": "An adjacency list represents a weighted graph, and the question asks you to draw the graph. What is the main advantage of an adjacency list over an adjacency matrix?",
   "blanks": [
    "Main advantage"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Adjacency list vs adjacency matrix</b>"
    },
    {
     "i": 1,
     "en": "<b>Adjacency matrix</b>: a two-dimensional array of $n\\times n$, where <code>m[i][j]</code> stores the edge weight."
    },
    {
     "i": 2,
     "en": "· Space $O(n^{2})$ (no matter how many edges there are)"
    },
    {
     "i": 3,
     "en": "· Test whether two vertices are adjacent: $O(1)$"
    },
    {
     "i": 4,
     "en": "<b>Adjacency list</b>: each vertex stores a \"neighbour list\"."
    },
    {
     "i": 5,
     "en": "· Space $O(n + e)$ (where $e$ is the number of edges)"
    },
    {
     "i": 6,
     "en": "· Testing adjacency takes $O(\\deg(v))$"
    },
    {
     "i": 7,
     "en": "<b>Conclusion: for sparse graphs ($e \\ll n^{2}$) an adjacency list saves a great deal of space; for dense graphs a matrix is faster.</b>"
    },
    {
     "i": 8,
     "en": "Example: a sparse graph with $n=10000$ has only $e=20000$ edges,"
    },
    {
     "i": 9,
     "en": "so the matrix needs $10^{8}$ cells while the adjacency list needs only about $4\\times10^{4}$ entries — a factor of 2500."
    },
    {
     "i": 10,
     "en": "<b>Key points for drawing the graph (as required by the paper):</b>"
    },
    {
     "i": 11,
     "en": "· Draw a circle for each vertex and write its label inside the circle;"
    },
    {
     "i": 12,
     "en": "· For each edge draw a <b>solid line</b> and write the weight number <b>above the line</b>;"
    },
    {
     "i": 13,
     "en": "· Do not draw arrowheads on the edges of an undirected graph; a directed graph must have arrowheads."
    }
   ]
  },
  "p1-8-01": {
   "prompt": "Write a program to determine whether the user’s input is a palindrome. When the input is <code>\"level\"</code>, what is the result?",
   "blanks": [
    "Is it a palindrome?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Definition of a palindrome:</b> it reads exactly the same forwards and backwards."
    },
    {
     "i": 1,
     "en": "Reversing <code>\"level\"</code> still gives <code>\"level\"</code>, so it <b>is</b> a palindrome."
    },
    {
     "i": 2,
     "en": "<b>Reference code:</b>"
    },
    {
     "i": 4,
     "en": "<b>Alternative approach:</b>"
    },
    {
     "i": 5,
     "en": "<pre># 用双指针（不使用切片，适合考察循环）\ni, j = 0, len(w) - 1\nok = True\nwhile i &lt; j:\n    if w[i] != w[j]:\n        ok = False\n        break\n    i += 1; j -= 1\nprint(\"Palindrome\" if ok else \"Not a palindrome\")</pre>"
    },
    {
     "i": 6,
     "en": "<b>Extension: if you ignore case and spaces</b> (e.g. <code>\"A man a plan a canal Panama\"</code>):"
    }
   ]
  },
  "p1-8-02": {
   "prompt": "Write a function that counts how many times each word appears in a piece of text. In the text <code>\"a b a c b a\"</code>, how many times does <code>\"a\"</code> appear?",
   "blanks": [
    "Count of \"a\""
   ],
   "solution": [
    {
     "i": 0,
     "en": "Splitting <code>\"a b a c b a\"</code> on spaces gives <code>['a','b','a','c','b','a']</code>."
    },
    {
     "i": 1,
     "en": "Here <code>'a'</code> appears at indices 0, 2 and 5, i.e. <b>3</b> times in total."
    },
    {
     "i": 2,
     "en": "<b>Reference code:</b>"
    },
    {
     "i": 4,
     "en": "<b>Key points:</b> ① <code>split()</code> with no argument splits on any whitespace and ignores extra spaces;"
    },
    {
     "i": 5,
     "en": "② <code>get(w, 0)</code> makes the first occurrence of a word start counting from 0;"
    },
    {
     "i": 6,
     "en": "③ You can also do it in one line with <code>collections.Counter(text.split())</code>."
    }
   ]
  },
  "p1-8-03": {
   "prompt": "What does the following code output?\n<pre>x = [1, 2, 3]\ny = x\nz = x[:]\ny.append(4)\nz.append(5)\nprint(x, y, z)</pre>",
   "blanks": [
    "Output"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b><code>y = x</code> is an alias (the same object); <code>z = x[:]</code> is a shallow copy (a new object).</b>"
    },
    {
     "i": 1,
     "en": "<code>y.append(4)</code> modifies <code>x</code> itself → <code>x</code> becomes <code>[1, 2, 3, 4]</code>, and <code>y</code> points to it as well."
    },
    {
     "i": 2,
     "en": "<code>z.append(5)</code> modifies only the new copied list → <code>z</code> becomes <code>[1, 2, 3, 5]</code>."
    },
    {
     "i": 3,
     "en": "At this point <code>z</code> is no longer linked to <code>x</code>, so <code>x</code> is unaffected."
    },
    {
     "i": 4,
     "en": "So the output is <code>[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 5]</code>."
    },
    {
     "i": 5,
     "en": "<b>Rule of thumb:</b> assignment (<code>=</code>) does not copy; only slicing (<code>[:]</code>)/.copy()/list() copies."
    }
   ]
  },
  "p1-8-04": {
   "prompt": "To sum all elements of a 2D list and write the result back to a file, which open mode should be used?",
   "blanks": [
    "Mode"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Answer: <code>\"a\"</code> (append mode).</b>"
    },
    {
     "i": 1,
     "en": "<b>File mode reference:</b>"
    },
    {
     "i": 2,
     "en": "· <code>\"r\"</code> read-only (default); raises an error if the file does not exist"
    },
    {
     "i": 3,
     "en": "· <code>\"w\"</code> write-only, <b>truncates the original content</b>"
    },
    {
     "i": 4,
     "en": "· <code>\"a\"</code> append: writes on at the end of the file and <b>keeps the original content</b>"
    },
    {
     "i": 5,
     "en": "· <code>\"r+\"</code> read and write, <code>\"w+\"</code> truncate then read and write, <code>\"x\"</code> create only if the file does not exist"
    },
    {
     "i": 6,
     "en": "· Adding <code>\"b\"</code> means binary mode, e.g. <code>\"rb\"</code>, <code>\"wb\"</code>"
    },
    {
     "i": 7,
     "en": "<b>Why this question uses <code>\"a\"</code>:</b> it asks you to \"write the result on the next line of the original file\","
    },
    {
     "i": 8,
     "en": "whereas using <code>\"w\"</code> would wipe out all the original integer data."
    },
    {
     "i": 9,
     "en": "<b>Code:</b>"
    },
    {
     "i": 11,
     "en": "Note that you must write <code>\"\\n\"</code> first, otherwise the result will be attached to the end of the last line of data."
    }
   ]
  },
  "p1-8-05": {
   "prompt": "Why does the function below keep accumulating data “unexpectedly”?\n<pre>def collect(item, box=[]):\n    box.append(item)\n    return box</pre>",
   "blanks": [
    "Reason"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Root cause: Python evaluates a default argument value only once, when the <code>def</code> statement runs, and then reuses the same object on every call.</b>"
    },
    {
     "i": 1,
     "en": "So the list that <code>box</code> points to is <b>part of the function's attributes and shared by all calls</b>."
    },
    {
     "i": 2,
     "en": "<b>Verifying the behaviour:</b>"
    },
    {
     "i": 3,
     "en": "<pre>print(collect(\"a\"))    # ['a']\nprint(collect(\"b\"))    # ['a', 'b']  ← 意外保留上次的内容\nprint(collect(\"c\"))    # ['a', 'b', 'c']</pre>"
    },
    {
     "i": 4,
     "en": "<b>Why this happens:</b> the function object creates that empty list at definition time and stores it in <code>__defaults__</code>,"
    },
    {
     "i": 5,
     "en": "and takes it directly when no argument is passed — contrary to the intuition that a new list is generated on every call."
    },
    {
     "i": 6,
     "en": "<b>Standard fix (use None as a sentinel):</b>"
    },
    {
     "i": 8,
     "en": "<b>Rule: use only immutable objects as default arguments</b> (<code>None</code>, numbers, strings, tuples)."
    },
    {
     "i": 9,
     "en": "The same pitfall applies when <code>dict</code> or <code>set</code> is used as a default argument."
    }
   ]
  },
  "pp-1": {
   "proof": [
    {
     "i": 0,
     "en": "<b>The four core elements of computational thinking:</b> decomposition, pattern recognition, abstraction, algorithm design."
    },
    {
     "i": 1,
     "en": "<b>① Decomposition</b>"
    },
    {
     "i": 2,
     "en": "Break a complex problem into smaller, more manageable sub-problems."
    },
    {
     "i": 3,
     "en": "For the project showcase: the overall task splits into sub-tasks such as \"write the report\", \"make the poster\", \"prepare and rehearse the presentation\" and \"prepare for questions\";"
    },
    {
     "i": 4,
     "en": "each sub-task can be broken down further (poster → topic, copy, layout, images, proofreading)."
    },
    {
     "i": 5,
     "en": "Benefit: each part is easier to understand and complete, and it is easier to allocate work and make progress in parallel."
    },
    {
     "i": 6,
     "en": "<b>② Pattern recognition</b>"
    },
    {
     "i": 7,
     "en": "Spot shared structures or patterns across different problems, so that an existing solution can be reused."
    },
    {
     "i": 8,
     "en": "For the project showcase: every group's presentation follows \"introduction → demo → Q&A\", so the same process template can be applied;"
    },
    {
     "i": 9,
     "en": "the marking criteria from previous years turn out to be similar, so you can prepare accordingly; several classmates need slides, so they can share one master template."
    },
    {
     "i": 10,
     "en": "<b>③ Abstraction</b>"
    },
    {
     "i": 11,
     "en": "Extract the key features and ignore details that are irrelevant to the goal."
    },
    {
     "i": 12,
     "en": "For the project showcase: to arrange times you do not need everyone's full timetable, only \"who is free in which time slots\";"
    },
    {
     "i": 13,
     "en": "to make the poster you do not need to know how the printer works inside, only that it can produce A1 colour prints."
    },
    {
     "i": 14,
     "en": "Benefit: it focuses attention on the factors that really affect the outcome and lowers the complexity of the problem."
    },
    {
     "i": 15,
     "en": "<b>④ Algorithm design</b>"
    },
    {
     "i": 16,
     "en": "Design a clear, executable and unambiguous sequence of steps (that is, an algorithm)."
    },
    {
     "i": 17,
     "en": "For the project showcase: draw up the \"showcase-day schedule\" — 9:00 set up the display boards → 9:30 rehearsal → 10:00 the actual showcase,"
    },
    {
     "i": 18,
     "en": "with every step stating clearly \"who, does what, by when, and how completion is judged\"."
    },
    {
     "i": 19,
     "en": "<b>How the four relate:</b> decomposition and abstraction make the problem smaller and clearer, pattern recognition lets us reuse experience,"
    },
    {
     "i": 20,
     "en": "and algorithm design turns the solution into executable steps."
    }
   ]
  },
  "pp-2": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a) Interpreter vs compiler</b>"
    },
    {
     "i": 1,
     "en": "<b>Compiler</b>: translates the whole source program into object code (machine code or intermediate code) in one go, producing an executable file that is then run."
    },
    {
     "i": 2,
     "en": "<b>Interpreter</b>: reads the source program line by line, translating one line and executing one line, and does not produce a separate executable file."
    },
    {
     "i": 3,
     "en": "<b>When a compiler is better:</b>"
    },
    {
     "i": 4,
     "en": "· The program will run repeatedly over a long period and execution speed matters (operating systems, compilers themselves, game engines);"
    },
    {
     "i": 5,
     "en": "· You need to distribute it to users without revealing the source code;"
    },
    {
     "i": 6,
     "en": "· You want all syntax errors and type errors found at compile time."
    },
    {
     "i": 7,
     "en": "<b>When an interpreter is better:</b>"
    },
    {
     "i": 8,
     "en": "· During development and debugging (change one line and run, with no need to wait for compilation);"
    },
    {
     "i": 9,
     "en": "· Cross-platform distribution (the same source runs on different systems as long as an interpreter is available);"
    },
    {
     "i": 10,
     "en": "· Teaching, script automation, data analysis and similar cases where start-up speed matters but peak performance does not."
    },
    {
     "i": 11,
     "en": "<b>Other differences:</b> in a compiled language errors are reported together at compile time; in an interpreted language an error is reported only when execution reaches the offending line."
    },
    {
     "i": 12,
     "en": "Real-world languages often sit between the two — Python first compiles the source into bytecode, which the Python Virtual Machine (PVM) then interprets."
    },
    {
     "i": 13,
     "en": "<b>(b) Why hexadecimal and octal are needed</b>"
    },
    {
     "i": 14,
     "en": "<b>Core idea: they are human-friendly shorthand for binary, and can be converted to and from binary directly, group by group, without loss.</b>"
    },
    {
     "i": 15,
     "en": "<b>① Conversion is extremely simple:</b> 1 hexadecimal digit = 4 binary digits; 1 octal digit = 3 binary digits."
    },
    {
     "i": 16,
     "en": "Example: $\\texttt{0xD} = \\texttt{1101}_{2}$; $\\texttt{0o15} = \\texttt{001101}_{2}$."
    },
    {
     "i": 17,
     "en": "<b>② Much shorter:</b> 32 binary digits need 32 characters, while in hexadecimal only 8 are needed."
    },
    {
     "i": 18,
     "en": "Example: $\\texttt{11111111111111111111111111111111}_{2} = \\texttt{0xFFFFFFFF}$."
    },
    {
     "i": 19,
     "en": "<b>③ Less error-prone:</b> long runs of 0s and 1s are very easy for the human eye to miscount, and grouping them greatly reduces the error rate."
    },
    {
     "i": 20,
     "en": "<b>④ Wide practical use:</b> memory addresses, colour values (<code>#FF8800</code>), file permissions (<code>chmod 755</code>),"
    },
    {
     "i": 21,
     "en": "bit masks and hardware registers, and Unicode code points (<code>U+4E2D</code>)."
    },
    {
     "i": 22,
     "en": "<b>Important clarification:</b> a computer does not \"understand\" hexadecimal — it is merely a convenient form for writing and reading,"
    },
    {
     "i": 23,
     "en": "and while a program runs everything is still represented in binary. A base is only a different notation for the same value."
    }
   ]
  },
  "pp-3": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a) Plain text files vs binary files</b>"
    },
    {
     "i": 1,
     "en": "<b>Plain text file:</b> the content is stored using a character encoding (ASCII / UTF-8), and an ordinary text editor can read and modify it."
    },
    {
     "i": 2,
     "en": "Examples: <code>.txt</code>, <code>.csv</code>, <code>.py</code>, <code>.json</code>, <code>.html</code>."
    },
    {
     "i": 3,
     "en": "<b>Binary file:</b> the content stores raw bytes in a specific format, it must be interpreted by a dedicated program, and opening it directly as text gives garbled characters."
    },
    {
     "i": 4,
     "en": "Examples: <code>.png</code>, <code>.mp3</code>, <code>.zip</code>, <code>.exe</code>, <code>.docx</code>."
    },
    {
     "i": 5,
     "en": "<b>Why both are needed:</b>"
    },
    {
     "i": 6,
     "en": "· Use text when you need it human-readable, hand-editable, convenient for exchanging data across programs, and easy to compare with version control and diff."
    },
    {
     "i": 7,
     "en": "· Use binary when you need a more compact size, faster read/write speed, and precise storage of arbitrary bytes (pixels, floating-point bit patterns, compressed data)."
    },
    {
     "i": 8,
     "en": "<b>Example use cases:</b>"
    },
    {
     "i": 9,
     "en": "· Plain text: a program's configuration file (e.g. <code>config.json</code>) — the user can edit it directly in Notepad."
    },
    {
     "i": 10,
     "en": "· Binary: a photo saved as <code>.png</code> — converting it to text would inflate it several times over and could not restore every pixel precisely."
    },
    {
     "i": 11,
     "en": "<b>Difference in code:</b> text mode <code>open(\"f.txt\")</code>; binary mode requires <code>b</code>, as in <code>open(\"f.png\", \"rb\")</code>."
    },
    {
     "i": 12,
     "en": "<b>(b) Why multiple exception classes are needed</b>"
    },
    {
     "i": 13,
     "en": "<b>① Differentiated handling:</b> different errors need different responses."
    },
    {
     "i": 14,
     "en": "File not found → tell the user to check the path; division by zero → say the input is invalid; type error → explain the correct usage."
    },
    {
     "i": 15,
     "en": "Writing only <code>except BaseException</code> allows a blanket response only and gives no useful feedback."
    },
    {
     "i": 16,
     "en": "<b>② Avoid hiding real bugs:</b> an overly broad catch swallows coding errors as well,"
    },
    {
     "i": 17,
     "en": "so the program looks normal while the real problem is hidden, making it extremely hard to track down."
    },
    {
     "i": 18,
     "en": "<b>③ Precise control flow:</b> catch only the expected exceptions and let unexpected ones be raised as usual (fail fast), so that problems are found as early as possible."
    },
    {
     "i": 19,
     "en": "<b>Example:</b>"
    },
    {
     "i": 21,
     "en": "<b>Inheritance hierarchy:</b>"
    },
    {
     "i": 23,
     "en": "<b>Practical advice:</b> catch <code>Exception</code> rather than <code>BaseException</code>,"
    },
    {
     "i": 24,
     "en": "otherwise even <code>Ctrl+C</code> (KeyboardInterrupt) cannot interrupt the program."
    }
   ]
  },
  "pp-4": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a) The purpose of if-elif-else</b>"
    },
    {
     "i": 1,
     "en": "<b>Purpose: among several mutually exclusive conditions, test them one by one in the order written, execute only the first branch that holds, and skip all the rest.</b>"
    },
    {
     "i": 2,
     "en": "<b>Key difference from a series of independent ifs:</b>"
    },
    {
     "i": 3,
     "en": "· Several independent <code>if</code>s: every condition is tested, and they may hold at the same time and all be executed."
    },
    {
     "i": 4,
     "en": "· <code>if-elif-else</code>: once one branch matches, the whole chain ends immediately, which semantically expresses \"mutually exclusive\"."
    },
    {
     "i": 5,
     "en": "Benefits: higher efficiency (testing stops as soon as one matches) and clearer intent (it states explicitly that these cases are mutually exclusive)."
    },
    {
     "i": 6,
     "en": "<b>Real example 1 — grade bands:</b>"
    },
    {
     "i": 7,
     "en": "90 marks or above is A; otherwise, if 80 marks or above it is B; otherwise, if 70 marks or above it is C; otherwise it is F."
    },
    {
     "i": 8,
     "en": "One mark corresponds to exactly one grade, which is a typical case of \"mutually exclusive\"."
    },
    {
     "i": 9,
     "en": "<b>Real example 2 — metro fares:</b>"
    },
    {
     "i": 10,
     "en": "A trip of no more than 3 stops costs \\$5; otherwise, no more than 6 stops costs \\$8; otherwise, no more than 10 stops costs \\$12; all other trips cost \\$15."
    },
    {
     "i": 11,
     "en": "One trip corresponds to exactly one fare band."
    },
    {
     "i": 12,
     "en": "<b>Third example (optional) — car park charges:</b>"
    },
    {
     "i": 13,
     "en": "The first hour is free; from 1 to 3 hours it is HKD 10 per hour; beyond 3 hours it is charged per day."
    },
    {
     "i": 14,
     "en": "<b>Why order matters:</b> if the conditions are written the wrong way round (testing \"≥70 is C\" before \"≥90 is A\"), a mark of 90 would also be judged as C."
    },
    {
     "i": 15,
     "en": "So the <code>elif</code> conditions should start with the strictest / most specific one."
    },
    {
     "i": 16,
     "en": "<b>(b) When while is appropriate</b>"
    },
    {
     "i": 17,
     "en": "<b>Core difference:</b>"
    },
    {
     "i": 18,
     "en": "· <code>for</code>: the number of iterations is known, or you need to traverse a sequence (<code>range</code>, a list, a string, the lines of a file)."
    },
    {
     "i": 19,
     "en": "· <code>while</code>: the number of iterations is unknown, and the body must be repeated until some condition no longer holds."
    },
    {
     "i": 20,
     "en": "<b>Typical cases:</b>"
    },
    {
     "i": 21,
     "en": "① Input validation (keep asking until the user gives valid input)"
    },
    {
     "i": 22,
     "en": "② Game main loop (until the player quits)"
    },
    {
     "i": 23,
     "en": "③ Numerical iteration (until the error is below a given threshold)"
    },
    {
     "i": 24,
     "en": "④ Reading a data stream (until an end marker is reached)"
    },
    {
     "i": 25,
     "en": "<b>Example — input validation (unknown number of attempts):</b>"
    },
    {
     "i": 27,
     "en": "This logic cannot be expressed with <code>for</code>, because you do not know in advance how many attempts the user will make."
    },
    {
     "i": 28,
     "en": "<b>The two can be rewritten as each other:</b>"
    },
    {
     "i": 29,
     "en": "<pre># for 版本\nfor i in range(5):\n    print(i)\n\n# 等价的 while 版本\ni = 0\nwhile i &lt; 5:\n    print(i)\n    i += 1</pre>"
    },
    {
     "i": 30,
     "en": "<b>Note:</b> the body of a <code>while</code> loop must contain a statement that can change the condition, otherwise it falls into an infinite loop."
    },
    {
     "i": 31,
     "en": "When necessary you can use <code>break</code> to exit early or <code>continue</code> to skip the current iteration."
    }
   ]
  },
  "pp-5": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Step 1: Clarify the inputs and outputs.</b>"
    },
    {
     "i": 1,
     "en": "Two input attributes: Dietary Preference (Vegetarian / Non-Vegetarian / Vegan) and Time of Day (Breakfast / Lunch / Dinner)."
    },
    {
     "i": 2,
     "en": "Output: Meal Type (Salad / Stir-Fry / Pasta / Grilled Meat)."
    },
    {
     "i": 3,
     "en": "<b>Step 2: Conflict detection (17a).</b>"
    },
    {
     "i": 4,
     "en": "The approach is to compare the \"rules\" with the \"table entries\" one by one, looking for two kinds of contradiction:"
    },
    {
     "i": 5,
     "en": "<b>① Contradiction between rules:</b> when \"all breakfasts are Salad, except for non-vegetarians\" coexists with \"non-vegetarian breakfast = Pasta\","
    },
    {
     "i": 6,
     "en": "you must check whether the latter falls under an \"exception\" explicitly listed in the rule. If the rule does not state the exception, the two rules conflict."
    },
    {
     "i": 7,
     "en": "<b>② Contradiction between a rule and a table entry:</b> the table gives Non-Vegetarian + Breakfast = Pasta,"
    },
    {
     "i": 8,
     "en": "while the rule requires \"all breakfasts are Salad (except non-vegetarian)\" — this is exactly covered by the exception, so there is <b>no conflict</b>."
    },
    {
     "i": 9,
     "en": "<b>③ Contradiction between a default rule and an explicit entry:</b> the rule says \"recommend Stir-Fry for other unmentioned cases\","
    },
    {
     "i": 10,
     "en": "but the table already specifies Stir-Fry for Vegan + Dinner and Salad for Vegan + Lunch; these are explicit entries with higher priority than the default rule, so no conflict arises."
    },
    {
     "i": 11,
     "en": "<b>Conclusion:</b> after checking one by one, the table entries agree with the rules; what really needs attention is which one wins when an \"explicit entry\" and a \"default rule\" cover the same combination — you should state clearly that <b>explicit beats default</b>."
    },
    {
     "i": 12,
     "en": "<b>Step 3: Draw the decision tree (17b).</b>"
    },
    {
     "i": 13,
     "en": "<b>Level 1 (root):</b> test Dietary Preference, with three branches: Vegetarian / Non-Vegetarian / Vegan."
    },
    {
     "i": 14,
     "en": "<b>Level 2:</b> under each branch test Time of Day, with three branches: Breakfast / Lunch / Dinner."
    },
    {
     "i": 15,
     "en": "<b>Leaf nodes:</b> look up the table to get Meal Type. There are $3\\times3=9$ paths in total, covering every possible combination."
    },
    {
     "i": 17,
     "en": "(B=Breakfast, L=Lunch, D=Dinner; fill in the actual dishes from the table.)"
    },
    {
     "i": 18,
     "en": "<b>Step 4: The most efficient version (17c).</b>"
    },
    {
     "i": 19,
     "en": "If everyone is known to be non-vegetarian, the result of the first level of testing is <b>constant</b>, so the whole level can be deleted."
    },
    {
     "i": 20,
     "en": "The decision tree degenerates to just 3 branches by Time of Day, its height drops from 2 to 1, and the number of tests drops from at most 2 to at most 1."
    },
    {
     "i": 21,
     "en": "<b>General rule:</b> in a decision tree, a test on an attribute whose result is constant is redundant; deleting it does not affect correctness, yet it greatly improves efficiency."
    },
    {
     "i": 22,
     "en": "This is exactly the combination of <b>abstraction</b> (ignoring unnecessary information) and <b>algorithm optimisation</b>."
    },
    {
     "i": 23,
     "en": "<b>Additional note: the role of the constraint \"no more than two dishes of the same type\".</b>"
    },
    {
     "i": 24,
     "en": "This constraint restricts \"one diner's choices across several meals\"; it imposes a restriction on <b>combinations of paths</b> in the tree,"
    },
    {
     "i": 25,
     "en": "not on a single leaf node. So it does not appear when drawing the tree, but it must be checked in actual recommendations (when several meals have to be arranged for one person)."
    }
   ]
  },
  "pp-6": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Adjacency matrix</b>"
    },
    {
     "i": 1,
     "en": "Represented by a two-dimensional array of $n\\times n$: <code>m[i][j]</code> stores the weight of the edge from vertex $i$ to $j$."
    },
    {
     "i": 2,
     "en": "· Space: $O(n^{2})$, independent of the number of edges"
    },
    {
     "i": 3,
     "en": "· Test whether two vertices are adjacent: $O(1)$"
    },
    {
     "i": 4,
     "en": "· Find all neighbours of a vertex: $O(n)$"
    },
    {
     "i": 5,
     "en": "· Suited to <b>dense graphs</b> (number of edges close to $n^{2}$), and simple to implement"
    },
    {
     "i": 6,
     "en": "<b>Adjacency list</b>"
    },
    {
     "i": 7,
     "en": "Maintain a \"neighbour list\" for each vertex, recording the adjacent vertices (a weighted graph also records the weights)."
    },
    {
     "i": 8,
     "en": "· Space: $O(n+e)$, where $e$ is the number of edges"
    },
    {
     "i": 9,
     "en": "· Test whether two vertices are adjacent: $O(\\deg(v))$"
    },
    {
     "i": 10,
     "en": "· Find all neighbours of a vertex: $O(\\deg(v))$, which is very efficient"
    },
    {
     "i": 11,
     "en": "· Suited to <b>sparse graphs</b> ($e \\ll n^{2}$)"
    },
    {
     "i": 12,
     "en": "<b>Basis for choosing (an example shows the gap):</b>"
    },
    {
     "i": 13,
     "en": "If $n=10000$ and $e=20000$: the adjacency matrix needs $10^{8}$ storage cells;"
    },
    {
     "i": 14,
     "en": "the adjacency list needs only about $2e=40000$ entries (each edge is stored twice in an undirected graph) — a difference of about 2500 times."
    },
    {
     "i": 15,
     "en": "So graph algorithms (BFS/DFS, shortest path) generally use adjacency lists on sparse graphs."
    },
    {
     "i": 16,
     "en": "<b>How to draw the graph from an adjacency list:</b>"
    },
    {
     "i": 17,
     "en": "<b>① Draw vertices:</b> draw a circle for each vertex and write the vertex label <b>inside</b> the circle."
    },
    {
     "i": 18,
     "en": "<b>② Draw edges:</b> if the list of vertex $u$ in the adjacency list contains $v$, draw a <b>solid line</b> between $u$ and $v$."
    },
    {
     "i": 19,
     "en": "<b>③ Label weights:</b> in a weighted graph, write the weight number <b>above the line</b> (or beside the line)."
    },
    {
     "i": 20,
     "en": "<b>④ Direction:</b> a directed graph must have <b>arrowheads</b> showing direction; an undirected graph has no arrowheads."
    },
    {
     "i": 21,
     "en": "<b>⑤ Avoid duplication:</b> in an undirected graph $(u,v)$ and $(v,u)$ are the same edge, so draw it only once."
    },
    {
     "i": 22,
     "en": "<b>Common pitfalls:</b> an adjacency list may list duplicate edges or self-loops; when drawing, handle them as the question requires (duplicate edges are usually merged or labelled, and a self-loop is drawn as a small circle returning to the vertex itself)."
    }
   ]
  }
 },
 "proofs": {
  "pp-1": {
   "title": "The four elements of computational thinking, illustrated by a project presentation scenario",
   "statement": "State the four core elements of computational thinking and explain one by one how each of them is reflected in the scenario of “preparing a project presentation”."
  },
  "pp-2": {
   "title": "Interpreter vs compiler; why hexadecimal and octal are needed",
   "statement": "(a) What is the main difference between an interpreter and a compiler? In what situations is each of them better?<br>(b) A computer only understands binary; why are hexadecimal and octal still needed?"
  },
  "pp-3": {
   "title": "Plain text vs binary files; why multiple exception classes are needed",
   "statement": "(a) What is the difference between a plain text file and a binary file? Why are both needed? Give one use case for each.<br>(b) Since <code>BaseException</code> can catch all exceptions, why are other exception classes still needed?"
  },
  "pp-4": {
   "title": "The meaning of if-elif-else and when to use a while loop",
   "statement": "(a) Explain the meaning of <code>if-elif-else</code> and give two real-life examples (no code).<br>(b) In what situations is <code>while</code> more suitable than <code>for</code>? Give a short example."
  },
  "pp-5": {
   "title": "Constructing a decision tree from selection rules and detecting conflicts",
   "statement": "Given a meal selection table (Dietary Preference × Time of Day → Meal Type) and four constraints, explain how to detect data conflicts, how to construct a decision tree that covers all possibilities, and how to obtain the most efficient decision tree when “everyone is a non-vegetarian”."
  },
  "pp-6": {
   "title": "Adjacency list, adjacency matrix, and choosing a graph representation",
   "statement": "Explain the difference between an adjacency list and an adjacency matrix, their respective space complexity and use cases, and how to draw the graph from an adjacency list."
  }
 }
});
})(typeof window!=="undefined"?window:globalThis);
