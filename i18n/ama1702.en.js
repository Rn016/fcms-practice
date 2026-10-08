/* AMA1702 英文翻译层 — 由 /tmp/fcms/build_i18n.js 生成，请勿手改 */
(function(root){
  if(!root.FCMS) return;
  root.FCMS.registerEn("AMA1702", {
 "name": "Calculus",
 "desc": "Limits, differentiation, integration and series. Includes the 2024-25 / 2025-26 midterms and the 2023–2025 finals.",
 "topics": {
  "集合 / 绝对值 / 不等式": "Sets / Absolute Values / Inequalities",
  "函数 / 定义域 / 复合 / 反函数": "Functions / Domain / Composition / Inverse Functions",
  "极限 / 夹逼 / 连续": "Limits / Squeeze Theorem / Continuity",
  "连续性 / 可导性 / 分段函数": "Continuity / Differentiability / Piecewise Functions",
  "导数 / 链式 / 隐函数 / 高阶": "Derivatives / Chain Rule / Implicit Functions / Higher Order",
  "中值定理 / 单调性 / 极值": "Mean Value Theorem / Monotonicity / Extreme Values",
  "积分（换元·分部·部分分式·广义）": "Integration (Substitution · By Parts · Partial Fractions · Improper)",
  "面积 / 弧长 / 旋转体体积": "Area / Arc Length / Volume of a Solid of Revolution",
  "幂级数 / 级数 / 泰勒展开": "Power Series / Series / Taylor Expansion",
  "定积分性质 / 对称性": "Properties of Definite Integrals / Symmetry"
 },
 "questions": {
  "mid-1-01": {
   "prompt": "Solve the inequality $|2x-3| < 7$, and write the solution set in interval form.",
   "blanks": [
    "Solution set"
   ],
   "solution": [
    {
     "i": 2,
     "en": "Therefore the solution set is $(-2,\\,5)$."
    }
   ]
  },
  "mid-1-02": {
   "prompt": "Find the set $S = \\{\\,x\\in\\mathbb{R} : |x+1| \\ge 3\\,\\}$, expressed as an interval.",
   "blanks": [
    "S"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$|x+1|\\ge 3 \\iff x+1\\ge 3$ or $x+1\\le -3$"
    },
    {
     "i": 1,
     "en": "$\\iff x\\ge 2$ or $x\\le -4$"
    },
    {
     "i": 2,
     "en": "Hence $S = (-\\infty,-4]\\cup[2,\\infty)$."
    }
   ]
  },
  "mid-1-03": {
   "prompt": "Let $A=[-1,3)$, $B=(1,5]$. Find $A\\cup B$.",
   "blanks": [
    "$A\\cup B$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The two intervals meet (3 lies in B, 1 lies in A), so the union is $[-1,5]$."
    }
   ]
  },
  "mid-1-04": {
   "prompt": "Solve the inequality $x^2 - 5x + 6 \\le 0$, expressing the solution set as an interval.",
   "blanks": [
    "Solution set"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$x^2-5x+6=(x-2)(x-3)\\le 0 \\iff 2\\le x\\le 3$, solution set $[2,3]$."
    }
   ]
  },
  "mid-2-01": {
   "prompt": "Find the largest possible domain of the function $f(x)=\\dfrac{x+5}{\\sqrt{5-|x|}}$ (write it as an interval).",
   "blanks": [
    "$\\mathrm{Dom}(f)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The expression under the square root must be positive: $5-|x| > 0 \\iff |x| < 5$"
    },
    {
     "i": 1,
     "en": "That is, $-5 < x < 5$, so the domain is $(-5,5)$."
    }
   ]
  },
  "mid-2-02": {
   "prompt": "Find the largest possible domain of $g(x)=\\cos(\\sqrt{x})$ (interval form).",
   "blanks": [
    "$\\mathrm{Dom}(g)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The square root requires $x\\ge 0$, and $\\cos$ is defined for every real number, so the domain is $[0,\\infty)$."
    }
   ]
  },
  "mid-2-03": {
   "prompt": "Let $h(x)=\\arccos(x^3)$, with domain $[-1,1]$; $g(x)=\\cos x$. Find the expression for the composite function $(g\\circ h)(x)$ (simplified).",
   "blanks": [
    "$(g\\circ h)(x)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Since $x^3\\in[-1,1]$ and $\\cos(\\arccos u)=u$, we get $(g\\circ h)(x)=x^3$."
    }
   ]
  },
  "mid-2-04": {
   "prompt": "Let $f(x)=\\sqrt[3]{(x+1)(x+2)}$, $\\mathrm{Dom}(f)=(-\\infty,-2)$. Given that $f$ is strictly decreasing on this interval, find a formula for $f^{-1}(x)$.",
   "blanks": [
    "$f^{-1}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $y=\\sqrt[3]{(x+1)(x+2)}$; then $y^3=x^2+3x+2=\\left(x+\\tfrac32\\right)^2-\\tfrac14$."
    },
    {
     "i": 2,
     "en": "Since $\\mathrm{Dom}(f)=(-\\infty,-2)$, take the negative sign, so $f^{-1}(x) = -\\dfrac32-\\sqrt{x^3+\\dfrac14}$."
    }
   ]
  },
  "mid-2-05": {
   "prompt": "Let $f(x)=(\\pi-\\tan x)(\\pi+\\tan x)$, $\\mathrm{Dom}(f)=\\left[-\\dfrac{\\pi}{4},0\\right]$. Find the range of $f$ (as an interval).",
   "blanks": [
    "$\\mathrm{Range}(f)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$f(x)=\\pi^2-\\tan^2 x$. When $x\\in\\left[-\\tfrac\\pi4,0\\right]$, $\\tan x\\in[-1,0]$,"
    },
    {
     "i": 1,
     "en": "so $\\tan^2 x\\in[0,1]$ and $f(x)\\in[\\pi^2-1,\\pi^2]$."
    }
   ]
  },
  "mid-2-06": {
   "prompt": "Continuing the previous question, $f(x)=\\pi^2-\\tan^2 x$ ($\\mathrm{Dom}(f)=\\left[-\\frac{\\pi}{4},0\\right]$). Find a formula for $f^{-1}(x)$.",
   "blanks": [
    "$f^{-1}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $y=\\pi^2-\\tan^2 x \\Rightarrow \\tan^2 x=\\pi^2-y \\Rightarrow \\tan x=\\pm\\sqrt{\\pi^2-y}$."
    },
    {
     "i": 1,
     "en": "Since $\\tan x\\le 0$ for $x\\in\\left[-\\tfrac\\pi4,0\\right]$, take the negative sign: $\\tan x=-\\sqrt{\\pi^2-y}$."
    },
    {
     "i": 2,
     "en": "Therefore $f^{-1}(x)=\\arctan\\!\\left(-\\sqrt{\\pi^2-x}\\right)$."
    }
   ]
  },
  "mid-2-07": {
   "prompt": "Let $f(x)=x\\ln x$ ($x>0$). Find the value of $f^{-1}$ at $x=e$, that is, $f^{-1}(e)$.",
   "blanks": [
    "$f^{-1}(e)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$f(x)=x\\ln x$, $f(e)=e\\ln e=e$. $f$ is strictly increasing on $(e^{-1},\\infty)$, so the inverse function exists."
    },
    {
     "i": 1,
     "en": "From $f(e)=e$ we get $f^{-1}(e)=e$."
    }
   ]
  },
  "mid-2-08": {
   "prompt": "Let $f(x)=\\dfrac{2x+1}{x-3}$. Find $f^{-1}(x)$.",
   "blanks": [
    "$f^{-1}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $y=\\dfrac{2x+1}{x-3} \\Rightarrow y(x-3)=2x+1 \\Rightarrow xy-3y=2x+1$"
    },
    {
     "i": 1,
     "en": "$\\Rightarrow x(y-2)=3y+1 \\Rightarrow x=\\dfrac{3y+1}{y-2}$, therefore $f^{-1}(x)=\\dfrac{3x+1}{x-2}$."
    }
   ]
  },
  "mid-3-01": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 3x}{x}$.",
   "blanks": [
    "Limit value"
   ]
  },
  "mid-3-02": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$1-\\cos x = 2\\sin^2\\dfrac{x}{2}$, so $\\dfrac{1-\\cos x}{x^2}=\\dfrac{2\\sin^2(x/2)}{x^2}=\\dfrac12\\left(\\dfrac{\\sin(x/2)}{x/2}\\right)^2\\to\\dfrac12$."
    }
   ]
  },
  "mid-3-03": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+3x}-x\\right)$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Rationalise: $\\sqrt{x^2+3x}-x=\\dfrac{3x}{\\sqrt{x^2+3x}+x}=\\dfrac{3}{\\sqrt{1+3/x}+1}\\to\\dfrac{3}{2}$."
    }
   ]
  },
  "mid-3-04": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{e^{2x}-1}{x}$.",
   "blanks": [
    "Limit value"
   ]
  },
  "mid-3-05": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{\\ln(1+3x)}{x}$.",
   "blanks": [
    "Limit value"
   ]
  },
  "mid-3-06": {
   "prompt": "Use the Squeeze Theorem to find $\\displaystyle\\lim_{x\\to 0}x^2\\sin\\frac1x$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since $-1\\le\\sin\\dfrac1x\\le 1$, we have $-x^2\\le x^2\\sin\\dfrac1x\\le x^2$."
    },
    {
     "i": 1,
     "en": "And $\\lim_{x\\to0}(\\pm x^2)=0$, so by the Squeeze Theorem the limit is $0$."
    }
   ]
  },
  "mid-3-07": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{\\tan x-x}{x^3}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\tan x = x+\\dfrac{x^3}{3}+O(x^5)$ (or apply l'Hôpital's rule three times in succession)"
    },
    {
     "i": 1,
     "en": "Therefore $\\dfrac{\\tan x-x}{x^3}\\to\\dfrac13$."
    }
   ]
  },
  "mid-3-08": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to 0}\\frac{e^x-1-x}{x^2}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is the core limit of Problem 1 of the 2025 final examination."
    },
    {
     "i": 1,
     "en": "$e^x = 1+x+\\dfrac{x^2}{2}+O(x^3)$, so $\\dfrac{e^x-1-x}{x^2}\\to\\dfrac12$."
    },
    {
     "i": 2,
     "en": "(Using l'Hôpital's rule twice: $\\dfrac{e^x-1}{2x}\\to\\dfrac{e^x}{2}\\to\\dfrac12$.)"
    }
   ]
  },
  "mid-3-09": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac1x\\right)^{5x}$.",
   "blanks": [
    "Limit value"
   ]
  },
  "mid-3-10": {
   "prompt": "Let $a>0$. Find $\\displaystyle\\lim_{x\\to 0}\\frac{a^{x}-1}{x}$ (express it in terms of $a$).",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$a^x=e^{x\\ln a}$, so $\\dfrac{a^x-1}{x}=\\dfrac{e^{x\\ln a}-1}{x\\ln a}\\cdot\\ln a\\to \\ln a$."
    }
   ]
  },
  "mid-3-11": {
   "prompt": "Discuss the limit of $f(x)=\\dfrac{|x|}{x}$ at $x=0$. If it does not exist, give DNE.",
   "blanks": [
    "$\\lim_{x\\to0}f(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Left limit $\\lim_{x\\to0^-}\\dfrac{|x|}{x}=\\lim_{x\\to0^-}\\dfrac{-x}{x}=-1$;"
    },
    {
     "i": 1,
     "en": "right limit $\\lim_{x\\to0^+}\\dfrac{|x|}{x}=+1$. The two differ, so the limit does not exist (DNE)."
    }
   ]
  },
  "mid-3-12": {
   "prompt": "Let $f(x)=\\begin{cases}\\dfrac{e^{x}-1-x}{x^{2}}, & x\\ne 0\\\\[4pt] c, & x=0\\end{cases}$. Find the value of $c$ for which $f$ is continuous at $x=0$.",
   "blanks": [
    "$c$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Continuity requires $c=\\lim_{x\\to0}\\dfrac{e^x-1-x}{x^2}=\\dfrac12$."
    },
    {
     "i": 1,
     "en": "Therefore $c=\\dfrac12$."
    }
   ]
  },
  "mid-3-13": {
   "prompt": "Let $f(x)=x^3+x-1$. Given that $f$ is continuous, $f(0)=-1<0$ and $f(1)=1>0$. By the Intermediate Value Theorem (IVT), the equation $x^3+x-1=0$ has at least one root in $(0,1)$. If this root is denoted by $r$, find an approximate value of $r$ (rounded to 4 decimal places).",
   "blanks": [
    "$r\\approx$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "By the IVT, since $f(0)<0<f(1)$, there exists $r\\in(0,1)$ with $f(r)=0$."
    },
    {
     "i": 1,
     "en": "Solving $x^3+x-1=0$ numerically: $r\\approx 0.6823278038$, which to 4 decimal places is $0.6823$."
    }
   ]
  },
  "mid-4-01": {
   "prompt": "Find $\\dfrac{d}{dx}\\left(x^{2}\\sin x\\right)$.",
   "blanks": [
    "f'(x)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Product rule: $(x^2)'\\sin x+x^2(\\sin x)'=2x\\sin x+x^2\\cos x$."
    }
   ]
  },
  "mid-4-02": {
   "prompt": "Find $\\dfrac{d}{dx}\\arctan x$.",
   "blanks": [
    "f'(x)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Standard formula: $(\\arctan x)'=\\dfrac{1}{1+x^2}$."
    }
   ]
  },
  "mid-4-03": {
   "prompt": "Find $\\dfrac{d}{dx}\\left(x^{\\sin x}\\right)$ ($x>0$).",
   "blanks": [
    "f'(x)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $y=x^{\\sin x}$ and take logarithms: $\\ln y=\\sin x\\cdot\\ln x$."
    },
    {
     "i": 1,
     "en": "Differentiating both sides: $\\dfrac{y'}{y}=\\cos x\\ln x+\\dfrac{\\sin x}{x}$."
    },
    {
     "i": 2,
     "en": "Therefore $y'=x^{\\sin x}\\left(\\cos x\\ln x+\\dfrac{\\sin x}{x}\\right)$."
    }
   ]
  },
  "mid-4-04": {
   "prompt": "Find $\\dfrac{d}{dx}\\arcsin\\sqrt{x}$ ($0<x<1$).",
   "blanks": [
    "f'(x)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Chain rule: $\\dfrac{1}{\\sqrt{1-(\\sqrt x)^2}}\\cdot\\dfrac{1}{2\\sqrt x}=\\dfrac{1}{2\\sqrt{x}\\sqrt{1-x}}$."
    }
   ]
  },
  "mid-4-05": {
   "prompt": "Let $x^{3}+y^{3}=6xy$ ($y$ is an implicit function of $x$). Find $\\dfrac{dy}{dx}$.",
   "blanks": [
    "$dy/dx$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Differentiating both sides with respect to $x$: $3x^2+3y^2y'=6y+6xy'$"
    }
   ]
  },
  "mid-4-06": {
   "prompt": "Find $\\dfrac{d^{2}}{dx^{2}}\\left(xe^{x}\\right)$.",
   "blanks": [
    "$f''(x)$"
   ]
  },
  "mid-4-07": {
   "prompt": "Find $\\dfrac{d^{3}}{dx^{3}}\\left(x^{2}e^{x}\\right)$.",
   "blanks": [
    "$f^{(3)}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Using the Leibniz rule: $D^3(x^2e^x)=\\binom30x^2e^x+\\binom31(2x)e^x+\\binom32(2)e^x$"
    }
   ]
  },
  "mid-4-08": {
   "prompt": "Let $h(x)=\\displaystyle\\int_{8}^{x^{2}}x\\sin(x^{2}t^{2})\\,dt$ ($x>0$). Find $h'(2)$. (This problem is from Question 2(b) of the 2025 final examination.)",
   "blanks": [
    "$h'(2)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Substitution $u=xt$ ($t$ runs from $8$ to $x^2$, $u$ runs from $8x$ to $x^3$, $dt=du/x$):"
    },
    {
     "i": 2,
     "en": "Differentiate with respect to $x$ (Leibniz): $h'(x)=3x^{2}\\sin(x^{6})-8\\sin(64x^{2})$."
    },
    {
     "i": 3,
     "en": "Substitute $x=2$: $h'(2)=12\\sin 64-8\\sin 256$."
    },
    {
     "i": 4,
     "en": "Using the double-angle formula $\\sin 2u=2\\sin u\\cos u$: $\\sin 256 = 2\\sin 128\\cos 128 = \\cdots = 8\\sin 4\\cos 4\\cos 8\\cos 16\\cos 32\\cos 64$,"
    },
    {
     "i": 5,
     "en": "$\\sin 64 = 2\\sin 32\\cos 32=\\cdots=32\\sin2\\cos2\\cos4\\cos8\\cos16\\cos32$; after simplifying we get"
    }
   ]
  },
  "mid-5-01": {
   "prompt": "Apply the Mean Value Theorem (MVT) to $f(x)=\\sqrt{x}$ on the interval $[1,4]$. Find $c$ satisfying $f'(c)=\\dfrac{f(4)-f(1)}{4-1}$.",
   "blanks": [
    "$c$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Average rate of change: $\\dfrac{2-1}{3}=\\dfrac13$."
    },
    {
     "i": 1,
     "en": "$f'(x)=\\dfrac{1}{2\\sqrt x}$, so set $\\dfrac{1}{2\\sqrt c}=\\dfrac13 \\Rightarrow \\sqrt c=\\dfrac32 \\Rightarrow c=\\dfrac94$."
    }
   ]
  },
  "mid-5-02": {
   "prompt": "Let $a>b>0$. Use the MVT to prove $e^{a^{2}}-e^{b^{2}} > 2(ab-b^{2})e^{b^{2}}$. By the MVT, there exists $c\\in(b,a)$ such that $\\dfrac{e^{a^2}-e^{b^2}}{a-b}=2ce^{c^2}$. Given that $2ce^{c^2}>2be^{b^2}$, it remains only to compare $2b(a-b)e^{b^{2}}$ with the original expression. Enter the intermediate conclusion of this problem: $e^{a^{2}}-e^{b^{2}} > \\underline{\\hspace{2cm}}$.",
   "blanks": [
    "Lower bound"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $f(x)=e^{x^{2}}$; it is continuous on $[b,a]$ and differentiable on $(b,a)$."
    },
    {
     "i": 1,
     "en": "By the MVT, there exists $c\\in(b,a)$ with $\\dfrac{e^{a^2}-e^{b^2}}{a-b}=2ce^{c^2}$."
    },
    {
     "i": 2,
     "en": "Since $f'(x)=2e^{x^2}(1+2x^2)>0$, $f'$ is strictly increasing on $(b,a)$, so $2ce^{c^2}>2be^{b^2}$."
    },
    {
     "i": 3,
     "en": "Hence $e^{a^2}-e^{b^2} > 2b(a-b)e^{b^2} = 2(ab-b^2)e^{b^2}$."
    }
   ]
  },
  "mid-5-03": {
   "prompt": "Find all critical points of $f(x)=x^{3}-3x$, and identify the local maximum point among them. Enter the first critical point in increasing order.",
   "blanks": [
    "Smallest critical point",
    "Local maximum point? (enter yes or no)"
   ],
   "solution": [
    {
     "i": 1,
     "en": "$f''(x)=6x$: $f''(-1)=-6<0$, so $x=-1$ is a local maximum point; $f''(1)=6>0$, so $x=1$ is a local minimum point."
    }
   ]
  },
  "mid-5-04": {
   "prompt": "Find the maximum value of $f(x)=x^{3}-3x$ on $[-2,2]$.",
   "blanks": [
    "Maximum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Candidate points: the critical points $x=\\pm1$ and the endpoints $x=\\pm2$."
    },
    {
     "i": 1,
     "en": "$f(-2)=-2,\\ f(-1)=2,\\ f(1)=-2,\\ f(2)=2$. The maximum value is $2$."
    }
   ]
  },
  "mid-5-05": {
   "prompt": "Let $f(x)=x-\\ln(1+x)$ ($x\\ge 0$). Find the derivative $g'(x)$ of $g(x)=f(x)-\\dfrac{x^{2}}{2(1+x)}$, and simplify the result.",
   "blanks": [
    "$g'(x)$"
   ],
   "solution": [
    {
     "i": 2,
     "en": "Therefore $g'(x)=\\dfrac{x}{1+x}-\\dfrac{2x+x^2}{2(1+x)^2}=\\dfrac{2x(1+x)-(2x+x^2)}{2(1+x)^2}=\\dfrac{x^{2}}{2(1+x)^{2}}$."
    }
   ]
  },
  "mid-5-06": {
   "prompt": "Let $f$ be continuous on $[0,1]$ and differentiable on $(0,1)$, with $f(0)=f(1)=0$. By Rolle's Theorem, there exists $c\\in(0,1)$ such that $f'(c)=0$. If $f(x)=\\sin(\\pi x)$, find such a $c$ (take the largest one in $[0,1]$).",
   "blanks": [
    "$c$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "On $(0,1)$ there is only $x=\\dfrac12$, so $c=\\dfrac12$."
    }
   ]
  },
  "mid-5-07": {
   "prompt": "Prove that for every $x\\in(0,1)$, $\\sin x > x-\\dfrac{x^{3}}{6}$. Let $h(x)=\\sin x-x+\\dfrac{x^{3}}{6}$, and find $h'(x)$.",
   "blanks": [
    "$h'(x)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Using once more $\\cos x>1-\\dfrac{x^2}{2}$ (for $x\\neq0$) gives $h'(x)>0$,"
    },
    {
     "i": 2,
     "en": "and $h(0)=0$, so $h(x)>0$, that is, $\\sin x>x-\\dfrac{x^{3}}{6}$."
    }
   ]
  },
  "mid-5-08": {
   "prompt": "Let $f$ be twice continuously differentiable on $[0,1]$ with $f(0)=f(1)=0$. Using integration by parts, $\\displaystyle\\int_0^1 f(x)f''(x)\\,dx=-\\int_0^1[f'(x)]^{2}\\,dx$. If $\\displaystyle\\int_0^1[f'(x)]^{2}dx=1$, find $\\displaystyle\\int_0^1 x f(x)f''(x)\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int_0^1 xf(x)f''(x)dx=\\Big[xf(x)f'(x)\\Big]_0^1-\\int_0^1\\big(f(x)f'(x)+x[f'(x)]^2+xf(x)f''(x)\\big)dx$."
    },
    {
     "i": 1,
     "en": "Note that $f(0)=f(1)=0$ makes the boundary term $0$, and $\\displaystyle\\int_0^1 f(x)f'(x)dx=\\tfrac12[f(x)]^2\\Big|_0^1=0$."
    },
    {
     "i": 2,
     "en": "Hence $2\\displaystyle\\int_0^1 xf(x)f''(x)dx=-\\int_0^1[f'(x)]^2dx=-1$, so the value of the integral is $-\\dfrac12$."
    }
   ]
  },
  "mp-1-01": {
   "prompt": "Let $f(x)=\\sqrt{\\dfrac{x+3}{x-1}-3(x-1)}$. Find the largest possible domain of $f$ (write it as an interval).",
   "blanks": [
    "$\\mathrm{Dom}(f)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Simplify inside the square root: $\\dfrac{x+3}{x-1}-3(x-1)=\\dfrac{x+3-3(x-1)^{2}}{x-1}=\\dfrac{-3x^{2}+7x}{x-1}=\\dfrac{x(7-3x)}{x-1}$."
    },
    {
     "i": 1,
     "en": "We require $\\dfrac{x(7-3x)}{x-1}\\ge0$ and $x\\ne1$."
    },
    {
     "i": 2,
     "en": "Sign analysis: zeros $x=0$, $x=\\dfrac73$, point of discontinuity $x=1$."
    },
    {
     "i": 3,
     "en": "On $(-\\infty,0]$: $x\\le0$, $7-3x>0$, $x-1<0$ $\\Rightarrow$ quotient $\\ge0$ ✔"
    },
    {
     "i": 4,
     "en": "On $(0,1)$: $x>0$, $7-3x>0$, $x-1<0$ $\\Rightarrow$ quotient $<0$ ✘"
    },
    {
     "i": 5,
     "en": "On $\\left(1,\\dfrac73\\right]$: $x>0$, $7-3x\\ge0$, $x-1>0$ $\\Rightarrow$ quotient $\\ge0$ ✔"
    },
    {
     "i": 6,
     "en": "On $\\left(\\dfrac73,\\infty\\right)$: $x>0$, $7-3x<0$, $x-1>0$ $\\Rightarrow$ quotient $<0$ ✘"
    },
    {
     "i": 7,
     "en": "Therefore $\\mathrm{Dom}(f)=(-\\infty,0]\\cup\\left(1,\\dfrac73\\right]$."
    }
   ]
  },
  "mp-1-02": {
   "prompt": "Let $f(x)=\\sqrt{\\dfrac{(x+3)(x-4)}{x-1}-2}$. Find the largest possible domain of $f$ (write it as an interval).",
   "blanks": [
    "$\\mathrm{Dom}(f)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Simplify: $\\dfrac{(x+3)(x-4)}{x-1}-2=\\dfrac{x^{2}-x-12-2x+2}{x-1}=\\dfrac{x^{2}-3x-10}{x-1}=\\dfrac{(x-5)(x+2)}{x-1}$."
    },
    {
     "i": 1,
     "en": "We require $\\dfrac{(x-5)(x+2)}{x-1}\\ge0$ and $x\\ne1$. Zeros $-2$, $5$; point of discontinuity $1$."
    },
    {
     "i": 2,
     "en": "Sign analysis: for $x\\in[-2,1)$ the numerator is $\\le0$ and the denominator $<0$, so the quotient is $\\ge0$ ✔;"
    },
    {
     "i": 3,
     "en": "for $x\\in(1,5)$ the numerator is $<0$ and the denominator $>0$, so the quotient is $<0$ ✘; for $x\\in[5,\\infty)$ the quotient is $\\ge0$ ✔."
    },
    {
     "i": 4,
     "en": "Therefore $\\mathrm{Dom}(f)=[-2,1)\\cup[5,+\\infty)$."
    }
   ]
  },
  "mp-1-03": {
   "prompt": "Let $h(x)=\\arcsin\\left(e^{x}\\right)$. Find the largest possible domain of $h$ (write it as an interval).",
   "blanks": [
    "$\\mathrm{Dom}(h)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The domain of $\\arcsin$ requires $-1\\le e^{x}\\le1$. Since $e^{x}>0$ always holds, we only need $e^{x}\\le1$,"
    },
    {
     "i": 1,
     "en": "that is, $x\\le\\ln1=0$. Therefore $\\mathrm{Dom}(h)=(-\\infty,0]$."
    }
   ]
  },
  "mp-1-04": {
   "prompt": "Let $f(x)=\\left|x^{2}-4|x|+3\\right|$, $\\mathrm{Dom}(f)=(1,2)$. Given that $f$ is strictly increasing, find $f^{-1}(x)$.",
   "blanks": [
    "$f^{-1}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "On $1<x<2$ we have $x>0$, so $f(x)=\\left|x^{2}-4x+3\\right|=\\left|(x-3)(x-1)\\right|$."
    },
    {
     "i": 1,
     "en": "Since $1<x<2$, we have $(x-3)(x-1)<0$, so $f(x)=-(x-3)(x-1)=-x^{2}+4x-3=1-(x-2)^{2}$."
    },
    {
     "i": 2,
     "en": "Note that for $x\\in(1,2)$, $1-(x-2)^{2}\\in(0,1)$, so the range is $(0,1)$."
    },
    {
     "i": 3,
     "en": "Let $y=1-(x-2)^{2}\\Rightarrow(x-2)^{2}=1-y\\Rightarrow x-2=\\pm\\sqrt{1-y}$."
    },
    {
     "i": 4,
     "en": "Since $x<2$, take the negative sign: $x=2-\\sqrt{1-y}$. Therefore $f^{-1}(x)=2-\\sqrt{1-x}$ ($x\\in(0,1)$)."
    }
   ]
  },
  "mp-1-05": {
   "prompt": "Let $f(x)=\\left(\\dfrac12\\sin x+\\dfrac{\\sqrt3}{2}\\cos x\\right)^{2}$, $\\mathrm{Dom}(f)=\\left[-\\dfrac{\\pi}{3},0\\right]$. Given that the inverse function exists, find $f^{-1}(x)$.",
   "blanks": [
    "$f^{-1}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Note that $\\cos\\dfrac\\pi3=\\dfrac12$ and $\\sin\\dfrac\\pi3=\\dfrac{\\sqrt3}{2}$, so"
    },
    {
     "i": 2,
     "en": "when $x\\in\\left[-\\dfrac\\pi3,0\\right]$, $x+\\dfrac\\pi3\\in\\left[0,\\dfrac\\pi3\\right]$ and $\\sin\\left(x+\\frac\\pi3\\right)\\ge0$,"
    },
    {
     "i": 3,
     "en": "hence $\\sqrt f=\\sin\\left(x+\\dfrac\\pi3\\right)$, that is, $x+\\dfrac\\pi3=\\arcsin\\sqrt y$."
    },
    {
     "i": 4,
     "en": "Therefore $f^{-1}(x)=\\arcsin\\sqrt x-\\dfrac\\pi3$."
    }
   ]
  },
  "mp-2-01": {
   "prompt": "Let $h(x)=\\arccos\\left(\\dfrac{5-x}{7}\\right)$, $g(x)=\\sin x$. Find the expression for the composite function $(g\\circ h)(x)$ (simplified).",
   "blanks": [
    "$(g\\circ h)(x)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Using the identity $\\sin(\\arccos t)=\\sqrt{1-t^{2}}$ ($-1\\le t\\le1$),"
    },
    {
     "i": 2,
     "en": "we get $(g\\circ h)(x)=\\sqrt{1-\\left(\\dfrac{5-x}{7}\\right)^{2}}=\\dfrac17\\sqrt{49-(5-x)^{2}}$."
    }
   ]
  },
  "mp-2-02": {
   "prompt": "Let $f(x)=2^{x^{2}+6x+10}$, $\\mathrm{Dom}(f)=(-\\infty,-3)$. Given that the inverse function exists, find $f^{-1}(x)$.",
   "blanks": [
    "$f^{-1}(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Complete the square: $x^{2}+6x+10=(x+3)^{2}+1$, so $f(x)=2^{(x+3)^{2}+1}$."
    },
    {
     "i": 1,
     "en": "Let $y=2^{(x+3)^{2}+1}$ and take logarithms base 2: $\\log_{2}y=(x+3)^{2}+1$,"
    },
    {
     "i": 3,
     "en": "Since $\\mathrm{Dom}(f)=(-\\infty,-3)$, that is, $x<-3$, we have $x+3<0$, so take the negative sign:"
    }
   ]
  },
  "mp-2-03": {
   "prompt": "Let $h(x)=\\arcsin\\left(e^{x}\\right)$, $g(x)=\\cos x$. Find the expression for $(g\\circ h)(x)$ (simplified).",
   "blanks": [
    "$(g\\circ h)(x)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Using the identity $\\cos(\\arcsin t)=\\sqrt{1-t^{2}}$ ($-1\\le t\\le1$),"
    },
    {
     "i": 2,
     "en": "we get $(g\\circ h)(x)=\\sqrt{1-\\left(e^{x}\\right)^{2}}=\\sqrt{1-e^{2x}}$."
    }
   ]
  },
  "mp-2-04": {
   "prompt": "Let $f(x)=\\sqrt{\\dfrac{(x+3)(x-4)}{x-1}-2}$, $g(x)=\\cos x$, $h(x)=\\arcsin\\left(e^{x}\\right)$. Write down the expression for $f(x)g(x)+h(x)$.",
   "blanks": [
    "$f(x)g(x)+h(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Multiply out and add directly: $f(x)g(x)+h(x)=\\sqrt{\\dfrac{(x+3)(x-4)}{x-1}-2}\\;\\cos x+\\arcsin\\left(e^{x}\\right)$."
    },
    {
     "i": 1,
     "en": "(The domain must satisfy the requirements of $f$, $g$ and $h$ simultaneously, that is, the common part outside $[-2,1)\\cup[5,\\infty)\\cap(-\\infty,0]=\\varnothing$;"
    },
    {
     "i": 2,
     "en": "in fact $h$ requires $x\\le0$ and $f$ requires $x\\in[-2,1)\\cup[5,\\infty)$, whose intersection is $[-2,0]$.)"
    }
   ]
  },
  "mp-2-05": {
   "prompt": "Continuing with $f(x)=\\sqrt{\\dfrac{x+3}{x-1}-3(x-1)}$ and $h(x)=\\arccos\\left(\\dfrac{5-x}{7}\\right)$, write down the expression for $\\dfrac{f(x)}{h(x)}$.",
   "blanks": [
    "$f(x)/h(x)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "We need $h(x)\\ne0$, that is, $\\dfrac{5-x}{7}\\ne1$, that is, $x\\ne-2$."
    }
   ]
  },
  "mp-3-01": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to0}\\frac{\\left(x-\\sin x\\right)^{1702x+1}}{x^{2}\\sin x}$. (Taylor expansion is not allowed.)",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Separate out the exponent part: $\\dfrac{(x-\\sin x)^{1702x+1}}{x^{2}\\sin x}=\\dfrac{x-\\sin x}{x^{2}\\sin x}\\cdot\\left(\\dfrac{x}{\\sin x}\\right)^{1702x+1}$."
    },
    {
     "i": 1,
     "en": "First factor: $\\dfrac{x-\\sin x}{x^{2}\\sin x}=\\dfrac{x-\\sin x}{x^{3}}\\cdot\\dfrac{x}{\\sin x}$."
    },
    {
     "i": 2,
     "en": "Using l'Hôpital's rule twice: $\\displaystyle\\lim_{x\\to0}\\frac{x-\\sin x}{x^{3}}=\\lim_{x\\to0}\\frac{1-\\cos x}{3x^{2}}=\\lim_{x\\to0}\\frac{\\sin x}{6x}=\\frac16$."
    },
    {
     "i": 3,
     "en": "Also $\\dfrac{x}{\\sin x}\\to1$, so the first factor $\\to\\dfrac16$."
    },
    {
     "i": 4,
     "en": "Second factor: $\\left(\\dfrac{x}{\\sin x}\\right)^{1702x+1}\\to1^{1}=1$."
    },
    {
     "i": 5,
     "en": "Therefore the original limit $=\\dfrac16$."
    }
   ]
  },
  "mp-3-02": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(\\left(x^{5}+3x^{4}+7\\right)^{1/5}-\\left(243x^{5}-5x^{4}+9\\right)^{1/5}+2x\\right)$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Factor out $x$: the expression $=\\displaystyle\\lim_{x\\to\\infty}x\\left[\\left(1+\\frac3x+\\frac{7}{x^{5}}\\right)^{1/5}-\\left(243-\\frac5x+\\frac{9}{x^{5}}\\right)^{1/5}+2\\right]$."
    },
    {
     "i": 1,
     "en": "Write this as $\\dfrac{\\left(1+\\frac3x+\\frac7{x^5}\\right)^{1/5}-\\left(243-\\frac5x+\\frac9{x^5}\\right)^{1/5}+2}{1/x}$, which is of type $\\dfrac00$; apply l'Hôpital's rule."
    },
    {
     "i": 2,
     "en": "Differentiate each term separately (note the factor $243^{1/5}=3$ in the term $(243+\\cdots)^{1/5}$):"
    },
    {
     "i": 6,
     "en": "After multiplying by $x^{2}$ and taking the limit: numerator $\\to\\frac15(-3)-\\frac15\\left(243^{-4/5}\\right)(5)=\\frac15(-3)-\\frac15\\cdot\\frac{5}{81}=-\\frac35-\\frac{1}{81}$,"
    },
    {
     "i": 7,
     "en": "and $\\left(1+\\cdots\\right)^{-4/5}\\to1$, $\\left(243-\\cdots\\right)^{-4/5}\\to243^{-4/5}=\\dfrac{1}{3^{4}}=\\dfrac1{81}$, denominator $\\to-1$,"
    },
    {
     "i": 8,
     "en": "so the limit $=\\dfrac{-\\frac35-\\frac1{81}}{-1}=\\dfrac35+\\dfrac1{81}=\\dfrac{243+5}{405}=\\dfrac{248}{405}\\approx0.6123456790$."
    }
   ]
  },
  "mp-3-03": {
   "prompt": "Discuss whether $\\displaystyle\\lim_{x\\to1}\\frac15\\left(\\frac{1}{x-1}-\\frac{1}{x+4}\\right)\\sqrt{x^{2}-2x+1}$ exists (if it does not exist, give DNE).",
   "blanks": [
    "Limit"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Note that $\\sqrt{x^{2}-2x+1}=\\sqrt{(x-1)^{2}}=|x-1|$, so we must consider the one-sided limits."
    },
    {
     "i": 1,
     "en": "Put over a common denominator: $\\dfrac15\\left(\\dfrac{1}{x-1}-\\dfrac{1}{x+4}\\right)=\\dfrac15\\cdot\\dfrac{(x+4)-(x-1)}{(x-1)(x+4)}=\\dfrac{5}{5(x-1)(x+4)}=\\dfrac{1}{(x-1)(x+4)}$."
    },
    {
     "i": 2,
     "en": "Therefore the expression $=\\dfrac{|x-1|}{(x-1)(x+4)}=\\dfrac{\\operatorname{sgn}(x-1)}{x+4}$."
    },
    {
     "i": 3,
     "en": "Right limit ($x\\to1^{+}$): $\\dfrac{1}{1+4}=\\dfrac15=0.2$;"
    },
    {
     "i": 4,
     "en": "left limit ($x\\to1^{-}$): $-\\dfrac{1}{1+4}=-\\dfrac15=-0.2$."
    },
    {
     "i": 5,
     "en": "The one-sided limits differ, so the limit <b>does not exist</b> (DNE)."
    }
   ]
  },
  "mp-3-04": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(5+\\sin\\left(2x+\\frac{3}{\\ln x}\\right)\\right)^{-2\\ln\\left(x+\\frac1x\\right)}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Squeeze.</b> Since $-1\\le\\sin(\\cdot)\\le1$, we have $4\\le5+\\sin\\left(2x+\\dfrac{3}{\\ln x}\\right)\\le6$."
    },
    {
     "i": 1,
     "en": "The exponent $-2\\ln\\left(x+\\dfrac1x\\right)\\to-\\infty$ (as $x\\to\\infty$)."
    },
    {
     "i": 2,
     "en": "For $a>1$ and an exponent $\\to-\\infty$, we have $a^{\\text{exponent}}\\to0$, hence"
    },
    {
     "i": 4,
     "en": "Both ends: $4^{-2\\ln(x+1/x)}=\\left(x+\\frac1x\\right)^{-2\\ln4}\\to0$, and similarly $6^{-2\\ln(x+1/x)}\\to0$."
    },
    {
     "i": 5,
     "en": "By the Squeeze Theorem, the original limit $=0$."
    }
   ]
  },
  "mp-3-05": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to0}\\left(\\frac{e^{x}-1}{x}\\right)^{1/x}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is of type $1^{\\infty}$. Take logarithms: let $L$ be the required limit; then $\\ln L=\\displaystyle\\lim_{x\\to0}\\frac{\\ln\\left(\\frac{e^{x}-1}{x}\\right)}{x}$, which is of type $\\dfrac00$."
    },
    {
     "i": 1,
     "en": "By l'Hôpital's rule: $\\ln L=\\displaystyle\\lim_{x\\to0}\\left[\\dfrac{e^{x}}{e^{x}-1}-\\dfrac1x\\right]$."
    },
    {
     "i": 2,
     "en": "Put over a common denominator: $\\dfrac{xe^{x}-(e^{x}-1)}{x(e^{x}-1)}$, still of type $\\dfrac00$; apply l'Hôpital's rule again:"
    },
    {
     "i": 4,
     "en": "Therefore $L=e^{1/2}=\\sqrt e\\approx1.6487212707$."
    }
   ]
  },
  "mp-3-06": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(\\frac{3x+5}{3x}\\right)^{3x^{2}}e^{-5x}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Write in exponential form: the expression $=\\exp\\left\\{\\displaystyle\\lim_{x\\to\\infty}\\left[3x^{2}\\ln\\left(1+\\dfrac{5}{3x}\\right)-5x\\right]\\right\\}$."
    },
    {
     "i": 1,
     "en": "Write the bracketed part as $\\dfrac{3\\ln\\left(1+\\frac{5}{3x}\\right)-\\frac5x}{1/x^{2}}$, which is of type $\\dfrac00$; apply l'Hôpital's rule."
    },
    {
     "i": 2,
     "en": "Derivative of the numerator: $3\\cdot\\dfrac{1}{1+\\frac{5}{3x}}\\cdot\\left(-\\dfrac{5}{3x^{2}}\\right)+\\dfrac{5}{x^{2}}=\\dfrac{-5}{x^{2}\\left(1+\\frac{5}{3x}\\right)}+\\dfrac{5}{x^{2}}=\\dfrac{5}{x^{2}}\\left(1-\\dfrac{1}{1+\\frac{5}{3x}}\\right)$;"
    },
    {
     "i": 3,
     "en": "derivative of the denominator: $-\\dfrac{2}{x^{3}}$."
    },
    {
     "i": 4,
     "en": "Therefore the limit $=\\displaystyle\\lim_{x\\to\\infty}\\dfrac{\\frac{5}{x^{2}}\\cdot\\frac{\\frac{5}{3x}}{1+\\frac{5}{3x}}}{-\\frac{2}{x^{3}}}=\\lim_{x\\to\\infty}-\\dfrac{25}{6}\\cdot\\dfrac{x}{3x+5}=-\\dfrac{25}{6}$."
    },
    {
     "i": 5,
     "en": "Hence the original limit $=e^{-25/6}\\approx0.0154963238$."
    }
   ]
  },
  "mp-3-07": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to0^{+}}\\left(x^{4}\\right)^{\\frac{7+\\sin x}{\\ln(1/x)-\\cos x}}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $y=\\left(x^{4}\\right)^{\\frac{7+\\sin x}{\\ln(1/x)-\\cos x}}$ and take logarithms:"
    },
    {
     "i": 2,
     "en": "As $x\\to0^{+}$ this is of type $\\dfrac{-\\infty}{\\infty}$; apply l'Hôpital's rule (differentiating with respect to $x$):"
    },
    {
     "i": 3,
     "en": "Derivative of the numerator: $4\\left[\\cos x\\ln x+\\dfrac{7+\\sin x}{x}\\right]$; derivative of the denominator: $-\\dfrac1x+\\sin x$."
    },
    {
     "i": 4,
     "en": "Multiplying numerator and denominator by $x$: $\\ln y=\\displaystyle\\lim_{x\\to0^{+}}\\dfrac{4\\left[x\\cos x\\ln x+7+\\sin x\\right]}{-1+x\\sin x}=\\dfrac{4(0+7+0)}{-1}= -28$."
    },
    {
     "i": 5,
     "en": "Therefore $y\\to e^{-28}\\approx6.9144\\times10^{-13}$."
    }
   ]
  },
  "mp-3-08": {
   "prompt": "Continuing Question 4 ($b=1,c=0$, $f(x)=x^{2}\\sin(\\ln x)+\\cos x$ ($x>0$), $f(0)=1$, $f(x)=e^{1-\\cos x}$ ($x<0$)): determine whether $f'(x)$ is continuous at $x=0$.",
   "blanks": [
    "Continuous? (enter yes or no)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "We have already found $f'(0)=0$, and for $x>0$, $f'(x)=2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x$."
    },
    {
     "i": 1,
     "en": "From $|2x\\sin(\\ln x)|\\le2|x|\\to0$ and $|x\\cos(\\ln x)|\\le|x|\\to0$ (by the Squeeze Theorem), and $\\sin x\\to0$,"
    },
    {
     "i": 2,
     "en": "we get $\\displaystyle\\lim_{x\\to0^{+}}f'(x)=0$."
    },
    {
     "i": 3,
     "en": "For $x<0$, $f'(x)=e^{1-\\cos x}\\sin x\\to0$."
    },
    {
     "i": 4,
     "en": "Both one-sided limits equal $f'(0)=0$, so $f'$ is <b>continuous</b> at $x=0$."
    }
   ]
  },
  "mp-3-09": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to1}\\frac{(x-1)^{4}}{\\sin\\left((x-1)^{2}\\right)\\cos\\left(\\frac{\\pi}{2}-\\frac{1}{(x-1)^{2}}\\right)}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Using the cofunction identity $\\cos\\left(\\dfrac\\pi2-\\theta\\right)=\\sin\\theta$ and taking $\\theta=\\dfrac{1}{(x-1)^{2}}$:"
    },
    {
     "i": 1,
     "en": "the expression $=\\dfrac{(x-1)^{4}}{\\sin\\left((x-1)^{2}\\right)\\sin\\left(\\dfrac{1}{(x-1)^{2}}\\right)}$."
    },
    {
     "i": 2,
     "en": "Split it up: $=\\dfrac{(x-1)^{2}}{\\sin\\left((x-1)^{2}\\right)}\\cdot(x-1)^{2}\\sin\\left(\\dfrac{1}{(x-1)^{2}}\\right)$."
    },
    {
     "i": 3,
     "en": "The first factor $\\to1$ (using $\\frac{u}{\\sin u}\\to1$ with $u=(x-1)^{2}\\to0$)."
    },
    {
     "i": 4,
     "en": "Second factor: $\\left|(x-1)^{2}\\sin\\left(\\frac{1}{(x-1)^{2}}\\right)\\right|\\le(x-1)^{2}\\to0$, which is $0$ by the Squeeze Theorem."
    },
    {
     "i": 5,
     "en": "Therefore the original limit $=1\\times0=0$."
    }
   ]
  },
  "mp-3-10": {
   "prompt": "Discuss whether $\\displaystyle\\lim_{x\\to4}\\left(x^{2}-16\\right)\\left|1+\\frac{2}{x-4}\\right|$ exists (give DNE if it does not exist).",
   "blanks": [
    "Limit"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Note that $\\left|1+\\dfrac{2}{x-4}\\right|=\\left|\\dfrac{x-4+2}{x-4}\\right|=\\dfrac{|x-2|}{|x-4|}$."
    },
    {
     "i": 1,
     "en": "Therefore the expression $=(x-4)(x+4)\\cdot\\dfrac{|x-2|}{|x-4|}$."
    },
    {
     "i": 2,
     "en": "Right limit ($x\\to4^{+}$, $|x-4|=x-4$): $(x+4)|x-2|\\to8\\cdot2=16$."
    },
    {
     "i": 3,
     "en": "Left limit ($x\\to4^{-}$, $|x-4|=-(x-4)$): $-(x+4)|x-2|\\to-16$."
    },
    {
     "i": 4,
     "en": "The one-sided limits differ, so the limit <b>does not exist</b> (DNE)."
    }
   ]
  },
  "mp-3-11": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^{2}+\\frac{\\ln x+1}{x}}-x\\right)$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Rationalise: $\\sqrt{x^{2}+\\dfrac{\\ln x+1}{x}}-x=\\dfrac{\\left(x^{2}+\\frac{\\ln x+1}{x}\\right)-x^{2}}{\\sqrt{x^{2}+\\frac{\\ln x+1}{x}}+x}=\\dfrac{\\frac{\\ln x+1}{x}}{\\sqrt{x^{2}+\\frac{\\ln x+1}{x}}+x}$."
    },
    {
     "i": 1,
     "en": "Divide numerator and denominator by $x$: $=\\dfrac{\\frac{\\ln x+1}{x^{2}}}{\\sqrt{1+\\frac{\\ln x+1}{x^{3}}}+1}$."
    },
    {
     "i": 2,
     "en": "Using $\\dfrac{\\ln x}{x^{2}}\\to0$ and $\\dfrac{1}{x^{2}}\\to0$, the numerator $\\to0$; the denominator $\\to1+1=2$."
    },
    {
     "i": 3,
     "en": "Therefore the limit $=\\dfrac02=0$."
    }
   ]
  },
  "mp-3-12": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(x\\sin\\frac1x\\right)^{x^{2}}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $L$ be the required limit and take logarithms: $\\ln L=\\displaystyle\\lim_{x\\to\\infty}x^{2}\\ln\\left(x\\sin\\dfrac1x\\right)$."
    },
    {
     "i": 1,
     "en": "Let $u=\\dfrac1x\\to0^{+}$; then $\\ln L=\\displaystyle\\lim_{u\\to0^{+}}\\dfrac{\\ln\\left(\\frac{\\sin u}{u}\\right)}{u^{2}}$, which is of type $\\dfrac00$."
    },
    {
     "i": 2,
     "en": "Apply l'Hôpital's rule twice (or use $\\frac{\\sin u}{u}=1-\\frac{u^{2}}{6}+O(u^{4})$, so $\\ln\\frac{\\sin u}{u}\\sim-\\frac{u^{2}}{6}$):"
    },
    {
     "i": 4,
     "en": "Then using $u\\cos u-\\sin u=-\\dfrac{u^{3}}{3}+O(u^{5})$ and $2u^{2}\\sin u\\sim2u^{3}$, we get $\\ln L=-\\dfrac16$."
    },
    {
     "i": 5,
     "en": "Therefore $L=e^{-1/6}\\approx0.8464817249$."
    }
   ]
  },
  "mp-3-13": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to1}\\frac{x^{2}-12x+11}{\\left(x^{2}-1\\right)\\cos(\\pi x)}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Factorise the numerator: $x^{2}-12x+11=(x-1)(x-11)$; the denominator $x^{2}-1=(x-1)(x+1)$."
    },
    {
     "i": 1,
     "en": "Cancel $(x-1)$: the expression $=\\displaystyle\\lim_{x\\to1}\\frac{x-11}{(x+1)\\cos(\\pi x)}$."
    },
    {
     "i": 2,
     "en": "Substitute $x=1$: $\\cos\\pi=-1$, giving $\\dfrac{1-11}{2\\cdot(-1)}=\\dfrac{-10}{-2}=5$."
    }
   ]
  },
  "mp-3-14": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to\\infty}\\left(5+\\cos 2x\\right)^{-2\\ln x}$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since $-1\\le\\cos2x\\le1$, we have $4\\le5+\\cos2x\\le6$."
    },
    {
     "i": 1,
     "en": "The exponent $-2\\ln x\\to-\\infty$ and the base is $>1$, so"
    },
    {
     "i": 3,
     "en": "Both ends: $4^{-2\\ln x}=x^{-2\\ln4}\\to0$, $6^{-2\\ln x}=x^{-2\\ln6}\\to0$."
    },
    {
     "i": 4,
     "en": "By the Squeeze Theorem, the original limit $=0$."
    }
   ]
  },
  "mp-3-15": {
   "prompt": "The value of $\\displaystyle\\lim_{x\\to1}\\left(\\frac{\\ln x}{x-1}-\\frac{1}{e^{x-1}-1}+\\frac{1}{x-1}\\right)$ can be written as $\\dfrac{a}{2}$; give $a$.",
   "blanks": [
    "$a$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Rearranging: $\\dfrac{\\ln x}{x-1}+\\dfrac{1}{x-1}=\\dfrac{\\ln x+1}{x-1}$, so the expression $=\\dfrac{\\ln x+1}{x-1}-\\dfrac{1}{e^{x-1}-1}$."
    },
    {
     "i": 1,
     "en": "Put over a common denominator: $=\\dfrac{(\\ln x+1)\\left(e^{x-1}-1\\right)-\\left(x-1\\right)}{\\left(x-1\\right)\\left(e^{x-1}-1\\right)}$, which is of type $\\dfrac00$."
    },
    {
     "i": 2,
     "en": "Using $\\ln x=x-1-\\frac{(x-1)^{2}}{2}+\\cdots$ and $e^{x-1}-1=(x-1)+\\frac{(x-1)^{2}}{2}+\\cdots$,"
    },
    {
     "i": 3,
     "en": "or applying l'Hôpital's rule twice in succession, we finally get the limit $=\\dfrac32$."
    },
    {
     "i": 4,
     "en": "Therefore $a=3$."
    }
   ]
  },
  "mp-4-01": {
   "prompt": "Let $f(x)=\\dfrac{1}{\\sqrt{9-x^{2}}}$ ($x\\in(-3,3)$). Using the recurrence relation $(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+n^{2}f^{(n-1)}(x)$, find $f^{(6)}(0)$.",
   "blanks": [
    "$f^{(6)}(0)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since $f$ is an even function, every odd-order derivative is $0$ at $0$; setting $x=0$ turns the recurrence relation into"
    },
    {
     "i": 1,
     "en": "$9f^{(n+1)}(0)=n^{2}f^{(n-1)}(0)$, that is, $f^{(n+1)}(0)=\\dfrac{n^{2}}{9}f^{(n-1)}(0)$."
    },
    {
     "i": 2,
     "en": "Initial values: $f(0)=\\dfrac13$, $f'(0)=0$, $f''(0)=\\dfrac{1^{2}}{9}f(0)=\\dfrac{1}{27}$."
    }
   ]
  },
  "mp-4-02": {
   "prompt": "Continuing the previous question, find $f^{(7)}(0)$.",
   "blanks": [
    "$f^{(7)}(0)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From the recurrence relation $f^{(n+1)}(0)=\\dfrac{n^{2}}{9}f^{(n-1)}(0)$ we can argue by induction: if the order of $f^{(n-1)}(0)$ is odd then its value is $0$."
    },
    {
     "i": 1,
     "en": "Specifically $f^{(7)}(0)=\\dfrac{6^{2}}{9}f^{(5)}(0)$, and $f^{(5)}(0)=\\dfrac{4^{2}}{9}f^{(3)}(0)$,"
    },
    {
     "i": 2,
     "en": "and $f^{(3)}(0)=\\dfrac{2^{2}}{9}f^{(1)}(0)=\\dfrac49\\cdot0=0$."
    },
    {
     "i": 3,
     "en": "Therefore $f^{(5)}(0)=0$, and hence $f^{(7)}(0)=0$."
    },
    {
     "i": 4,
     "en": "(Essentially: $f(x)=\\dfrac{1}{\\sqrt{9-x^{2}}}$ is an even function, and every odd-order derivative is $0$ at $0$.)"
    }
   ]
  },
  "mp-4-03": {
   "prompt": "Continuing the previous question, use the recurrence relation to find a general formula for $f^{(2k)}(0)$. The result can be written as $f^{(2k)}(0)=\\dfrac{1}{3\\cdot 9^{k}}\\left(\\text{the product of several odd numbers}\\right)$. Enter the general term of the square-root form of these odd numbers: $f^{(2k)}(0)=\\dfrac{f(0)}{9^{k}}\\displaystyle\\prod_{j=1}^{k}c_{j}$; give $c_j$.",
   "blanks": [
    "$c_j$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Take $x=0$ in the recurrence relation and let $n=2k+1$: $9f^{(2k+2)}(0)=(2k+1)^{2}f^{(2k)}(0)$,"
    },
    {
     "i": 1,
     "en": "that is, $f^{(2k+2)}(0)=\\dfrac{(2k+1)^{2}}{9}f^{(2k)}(0)$."
    },
    {
     "i": 2,
     "en": "Iterating $k$ times (from $j=1$ to $k$):"
    },
    {
     "i": 4,
     "en": "Therefore $c_j=(2j-1)^{2}$."
    },
    {
     "i": 5,
     "en": "Equivalent form (product form): $f^{(2k)}(0)=\\dfrac{1}{3}\\left(\\dfrac{1\\cdot3\\cdot5\\cdots(2k-1)}{3^{k}}\\right)^{2}=\\dfrac{\\left[(2k-1)!!\\right]^{2}}{3^{2k+1}}$."
    }
   ]
  },
  "mp-4-04": {
   "prompt": "Let $y=e^{\\arcsin x}$. Find the coefficient of $x$ in the equation of the tangent line to the curve $y=f(x)$ at $x=0$ (that is, the slope).",
   "blanks": [
    "Slope"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$f(0)=e^{\\arcsin0}=e^{0}=1$, so the curve passes through the point $(0,1)$."
    },
    {
     "i": 1,
     "en": "$y'=e^{\\arcsin x}\\cdot\\dfrac{1}{\\sqrt{1-x^{2}}}$, so $y'(0)=e^{0}\\cdot\\dfrac{1}{1}=1$."
    },
    {
     "i": 2,
     "en": "Tangent line: $y-1=1\\cdot(x-0)$, that is, $y=x+1$, with slope $1$."
    }
   ]
  },
  "mp-4-05": {
   "prompt": "Let $y=e^{\\arcsin x}$. Prove $(1-x^{2})y''-xy'-y=0$. Enter the coefficient of $xy'$ in that expression.",
   "blanks": [
    "Coefficient of $xy'$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Therefore $y'\\sqrt{1-x^{2}}=y$, that is, $y'\\left(1-x^{2}\\right)^{1/2}=y$."
    },
    {
     "i": 2,
     "en": "Differentiating both sides with respect to $x$: $y''\\left(1-x^{2}\\right)^{1/2}+y'\\cdot\\dfrac{-2x}{2\\sqrt{1-x^{2}}}=y'$."
    },
    {
     "i": 3,
     "en": "Multiply both sides by $\\sqrt{1-x^{2}}$: $y''\\left(1-x^{2}\\right)-xy'=y'\\sqrt{1-x^{2}}=y$."
    },
    {
     "i": 4,
     "en": "Rearranging gives $(1-x^{2})y''-xy'-y=0$, in which the coefficient of $xy'$ is $-1$."
    }
   ]
  },
  "mp-5-01": {
   "prompt": "Let $f(x)=\\begin{cases}x^{2}\\sin(\\ln x)+b\\cos x, & x>0,\\\\ 1, & x=0,\\\\ be^{1-\\cos x}+c, & x<0.\\end{cases}$. Find $b$ for which $f$ is differentiable everywhere on $\\mathbb{R}$ (give $b$ first).",
   "blanks": [
    "$b$",
    "$c$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Continuity.</b>$\\displaystyle\\lim_{x\\to0^{+}}f(x)=\\lim_{x\\to0^{+}}\\left[x^{2}\\sin(\\ln x)+b\\cos x\\right]$."
    },
    {
     "i": 1,
     "en": "From $\\left|x^{2}\\sin(\\ln x)\\right|\\le x^{2}\\to0$ and $b\\cos x\\to b$, we get the right limit $=b$."
    },
    {
     "i": 2,
     "en": "Left limit: $\\displaystyle\\lim_{x\\to0^{-}}\\left[be^{1-\\cos x}+c\\right]=be^{0}+c=b+c$."
    },
    {
     "i": 3,
     "en": "We require $b=b+c=1$, so $b=1$ and $c=0$."
    },
    {
     "i": 4,
     "en": "<b>Differentiability.</b> Right derivative: $f'_{+}(0)=\\displaystyle\\lim_{x\\to0^{+}}\\dfrac{x^{2}\\sin(\\ln x)+\\cos x-1}{x}=\\lim_{x\\to0^{+}}\\left[x\\sin(\\ln x)+\\dfrac{\\cos x-1}{x}\\right]=0+0=0$."
    },
    {
     "i": 5,
     "en": "Left derivative: $f'_{-}(0)=\\displaystyle\\lim_{x\\to0^{-}}\\dfrac{e^{1-\\cos x}-1}{x}$, which by l'Hôpital's rule $=\\lim_{x\\to0^{-}}e^{1-\\cos x}\\sin x=0$."
    },
    {
     "i": 6,
     "en": "The two are equal, so for $b=1,\\ c=0$, $f$ is differentiable everywhere, and"
    }
   ]
  },
  "mp-5-02": {
   "prompt": "Continuing the previous question ($b=1,c=0$). Determine whether $f''(0)$ exists; if it exists, give its value, and if not, give DNE.",
   "blanks": [
    "$f''(0)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "First use the definition of the second derivative and look at the difference quotient of $f'$ at $0$: $f''(0)=\\displaystyle\\lim_{x\\to0}\\dfrac{f'(x)-f'(0)}{x}$."
    },
    {
     "i": 1,
     "en": "<b>Left limit</b> ($x<0$, $f'(x)=e^{1-\\cos x}\\sin x$):"
    },
    {
     "i": 2,
     "en": "$\\displaystyle\\lim_{x\\to0^{-}}\\frac{e^{1-\\cos x}\\sin x}{x}=1\\cdot1=1$, which exists."
    },
    {
     "i": 3,
     "en": "<b>Right limit</b> ($x>0$, $f'(x)=2x\\sin(\\ln x)+x\\cos(\\ln x)-\\sin x$):"
    },
    {
     "i": 5,
     "en": "As $x\\to0^{+}$, $\\ln x\\to-\\infty$, so both $\\sin(\\ln x)$ and $\\cos(\\ln x)$ <b>oscillate without bound</b>,"
    },
    {
     "i": 6,
     "en": "for example, for $x_{k}=\\exp(-2k\\pi)$ we have $\\cos(\\ln x_{k})=1$, and for $x_{k}=\\exp(-(2k+1)\\pi)$ we have $\\cos(\\ln x_{k})=-1$."
    },
    {
     "i": 7,
     "en": "Therefore the right limit does not exist, and hence $f''(0)$ <b>does not exist</b> (write DNE)."
    },
    {
     "i": 8,
     "en": "Note the distinction: $f'$ is <b>continuous</b> at $0$ (previous question), but $f'$ is not differentiable at $0$ —— this is the same phenomenon as the family \"$x^{3}\\cos(1/x)$\" in the 2023 paper."
    }
   ]
  },
  "mp-5-03": {
   "prompt": "Let $f(x)=\\begin{cases}e^{-\\frac{1}{x-1}}+ax+b, & x>1,\\\\ 1702, & x=1,\\\\ (x-1)^{3}\\sin\\dfrac{1}{x-1}+1702, & x<1.\\end{cases}$. Find $a$ for which $f$ is differentiable everywhere.",
   "blanks": [
    "$a$",
    "$b$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Continuity.</b> Right limit: $\\displaystyle\\lim_{x\\to1^{+}}\\left[e^{-\\frac{1}{x-1}}+ax+b\\right]=0+a+b=a+b$ (using $e^{-1/h}\\to0$ as $h\\to0^{+}$)."
    },
    {
     "i": 1,
     "en": "Left limit: from $\\left|(x-1)^{3}\\sin\\frac{1}{x-1}\\right|\\le(x-1)^{3}\\to0$, we get $\\lim_{x\\to1^{-}}f(x)=1702$."
    },
    {
     "i": 2,
     "en": "We require $a+b=1702$."
    },
    {
     "i": 3,
     "en": "<b>Differentiability.</b> Left derivative: $f'_{-}(1)=\\displaystyle\\lim_{h\\to0^{-}}\\dfrac{h^{3}\\sin\\frac1h+1702-1702}{h}=\\lim_{h\\to0^{-}}h^{2}\\sin\\dfrac1h=0$."
    },
    {
     "i": 4,
     "en": "Right derivative: $f'_{+}(1)=\\displaystyle\\lim_{h\\to0^{+}}\\dfrac{e^{-1/h}+ah+b-1702}{h}$, which by $a+b=1702$ becomes $\\lim_{h\\to0^{+}}\\left[\\dfrac{e^{-1/h}}{h}+a\\right]$."
    },
    {
     "i": 5,
     "en": "And $\\displaystyle\\lim_{h\\to0^{+}}\\dfrac{e^{-1/h}}{h}=\\lim_{u\\to\\infty}\\dfrac{u}{e^{u}}=0$ (with $u=1/h$), so $f'_{+}(1)=a$."
    },
    {
     "i": 6,
     "en": "We require $f'_{-}(1)=f'_{+}(1)$, that is, $0=a$, so $a=0$, and substituting back gives $b=1702$."
    }
   ]
  },
  "mp-5-04": {
   "prompt": "Continuing the previous question ($a=0,\\ b=1702$), determine whether $f'(x)$ is continuous at $x=1$ (enter Yes or No).",
   "blanks": [
    "Continuous?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "When $a=0,b=1702$: $f'(x)=\\begin{cases}e^{-\\frac{1}{x-1}}\\cdot\\dfrac{1}{(x-1)^{2}}, & x>1,\\\\ 0, & x=1,\\\\ 3(x-1)^{2}\\sin\\dfrac{1}{x-1}-(x-1)\\cos\\dfrac{1}{x-1}, & x<1.\\end{cases}$"
    },
    {
     "i": 1,
     "en": "Right limit: $\\displaystyle\\lim_{x\\to1^{+}}\\dfrac{1}{(x-1)^{2}e^{\\frac{1}{x-1}}}$; let $u=\\dfrac{1}{x-1}\\to\\infty$, giving $\\lim\\dfrac{u^{2}}{e^{u}}=0$."
    },
    {
     "i": 2,
     "en": "Left limit: $\\left|3(x-1)^{2}\\sin\\frac{1}{x-1}\\right|\\le3(x-1)^{2}\\to0$ and $\\left|(x-1)\\cos\\frac{1}{x-1}\\right|\\le|x-1|\\to0$, so it is $0$."
    },
    {
     "i": 3,
     "en": "Both one-sided limits are $0=f'(1)$, so $f'$ is <b>continuous</b> at $x=1$."
    }
   ]
  },
  "mp-6-01": {
   "prompt": "Let $f:[-1,1]\\to[0,\\pi]$, $f(x)=\\arccos x$, $g:\\mathbb{R}\\to\\mathbb{R}$, $g(x)=f(\\cos x)$. Determine whether $g$ is both an even function and a periodic function (enter Yes or No).",
   "blanks": [
    "Even and periodic?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Even function:</b> for every $x\\in\\mathbb{R}$, $g(-x)=f(\\cos(-x))=f(\\cos x)=g(x)$."
    },
    {
     "i": 1,
     "en": "<b>Periodic function:</b> for every integer $k$, $g(x+2k\\pi)=f(\\cos(x+2k\\pi))=f(\\cos x)=g(x)$."
    },
    {
     "i": 2,
     "en": "Therefore $g$ is both even and periodic (with period $2\\pi$)."
    }
   ]
  },
  "mp-6-02": {
   "prompt": "Continuing the previous question, what is $g(x)=\\arccos(\\cos x)$ equal to when $x\\in[0,\\pi]$?",
   "blanks": [
    "$g(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since the range of $\\arccos$ is $[0,\\pi]$, for $x\\in[0,\\pi]$ the angle corresponding to $\\cos x$ is exactly $x$ itself,"
    },
    {
     "i": 1,
     "en": "so $g(x)=\\arccos(\\cos x)=x$ ($x\\in[0,\\pi]$)."
    },
    {
     "i": 2,
     "en": "(This is also the \"triangular wave\" shape of $g$: on $[0,\\pi]$ it is $y=x$, on $[-\\pi,0]$ evenness gives $y=-x$, and thereafter it folds back every $\\pi$.)"
    }
   ]
  },
  "fin-1-01": {
   "prompt": "Define $f(x)=\\begin{cases}\\dfrac{e^{x}-1-x}{x^{2}}, & x\\ne 0,\\\\[6pt] \\dfrac12, & x=0.\\end{cases}$. Find $\\displaystyle\\lim_{x\\to0}\\frac{e^{x}-1-x}{x^{2}}$ to show that $f$ is continuous at $x=0$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From $e^{x}=1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}+\\cdots$ we get $e^{x}-1-x=\\dfrac{x^{2}}{2}+O(x^{3})$."
    },
    {
     "i": 1,
     "en": "Therefore $\\displaystyle\\lim_{x\\to0}\\frac{e^{x}-1-x}{x^{2}}=\\frac12=f(0)$, so $f$ is continuous at $x=0$."
    }
   ]
  },
  "fin-1-02": {
   "prompt": "Continuing the previous question, prove that $f$ is differentiable at $x=0$, and find $f'(0)$.",
   "blanks": [
    "$f'(0)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From the definition of the derivative: $f'(0)=\\displaystyle\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\frac{\\dfrac{e^{x}-1-x}{x^{2}}-\\dfrac12}{x}$."
    },
    {
     "i": 1,
     "en": "And $\\dfrac{e^{x}-1-x}{x^{2}}-\\dfrac12=\\dfrac{x}{6}+O(x^{2})$, so $f'(0)=\\dfrac16$."
    }
   ]
  },
  "fin-1-03": {
   "prompt": "Continuing the previous question, determine whether $f'(x)$ is continuous at $x=0$. When $x\\ne0$, $f'(x)=\\dfrac{(x-2)e^{x}+x+2}{x^{3}}$; first find $\\displaystyle\\lim_{x\\to0}f'(x)$.",
   "blanks": [
    "$\\lim_{x\\to0}f'(x)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Expand the numerator: $(x-2)e^{x}+x+2=(x-2)\\left(1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}+\\cdots\\right)+x+2$"
    },
    {
     "i": 1,
     "en": "$=\\dfrac{x^{3}}{6}+O(x^{4})$, so $\\displaystyle\\lim_{x\\to0}f'(x)=\\dfrac16$."
    },
    {
     "i": 2,
     "en": "Since $\\lim_{x\\to0}f'(x)=\\dfrac16=f'(0)$, $f'$ is continuous at $x=0$."
    }
   ]
  },
  "fin-1-04": {
   "prompt": "Let $g(x)=\\begin{cases}\\dfrac{\\sin x}{x}, & x\\ne0\\\\ k, & x=0\\end{cases}$. Find the value of $k$ for which $g$ is continuous at $x=0$.",
   "blanks": [
    "$k$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}=1$, so taking $k=1$ makes $g$ continuous at $x=0$."
    }
   ]
  },
  "fin-1-05": {
   "prompt": "Let $h(x)=|x|^{3}$. Find $h'(0)$.",
   "blanks": [
    "$h'(0)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Since $\\left||x|^{2}\\dfrac{|x|}{x}\\right|=|x|^{2}\\to0$, the Squeeze Theorem gives $h'(0)=0$."
    }
   ]
  },
  "fin-1-06": {
   "prompt": "Let $F(x)=\\begin{cases}x^{2}\\sin\\dfrac1x, & x\\ne0\\\\ 0,&x=0\\end{cases}$. Find $F'(0)$.",
   "blanks": [
    "$F'(0)$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Because $\\left|x\\sin\\dfrac1x\\right|\\le|x|\\to0$."
    }
   ]
  },
  "fin-2-01": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\ln 2}\\frac{e^{-x}}{1+e^{-x}}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=1+e^{-x}$; then $du=-e^{-x}dx$; $x=0\\Rightarrow u=2$, $x=\\ln2\\Rightarrow u=\\dfrac32$."
    }
   ]
  },
  "fin-2-02": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\frac{3}{\\sin\\theta+4\\cos\\theta}\\,d\\theta$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Use the Weierstrass substitution $t=\\tan\\dfrac\\theta2$: $\\sin\\theta=\\dfrac{2t}{1+t^{2}}$, $\\cos\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$, $d\\theta=\\dfrac{2\\,dt}{1+t^{2}}$."
    },
    {
     "i": 1,
     "en": "Then $\\dfrac{3}{\\sin\\theta+4\\cos\\theta}d\\theta=\\dfrac{3\\,dt}{1+\\frac t2-t^{2}}$."
    },
    {
     "i": 2,
     "en": "Complete the square: $1+\\dfrac t2-t^{2}=\\dfrac{9}{16}-\\left(t-\\dfrac14\\right)^{2}$."
    },
    {
     "i": 4,
     "en": "Substituting $\\theta=0$ ($t=0$) and $\\theta=1$ ($t=\\tan\\frac12\\approx0.5463$):"
    }
   ]
  },
  "fin-2-03": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{8}\\frac{2}{x^{2}+6x+34}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Complete the square: $x^{2}+6x+34=(x+3)^{2}+25$."
    }
   ]
  },
  "fin-2-04": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{5}^{\\infty}\\frac{dx}{x^{2}\\left(x^{2}-5x+6\\right)}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since $x^{2}-5x+6=(x-2)(x-3)$, partial fractions:"
    },
    {
     "i": 2,
     "en": "Antiderivative: $F(x)=-\\dfrac14\\ln|x-2|+\\dfrac19\\ln|x-3|+\\dfrac{5}{36}\\ln x-\\dfrac{1}{6x}$."
    },
    {
     "i": 3,
     "en": "$\\displaystyle\\int_{5}^{\\infty}=F(\\infty)-F(5)$, where $F(\\infty)=0$ (the logarithmic terms cancel and $\\frac1{6x}\\to0$):"
    },
    {
     "i": 5,
     "en": "Therefore $I=\\dfrac{1}{30}-\\dfrac{5\\ln5}{36}-\\dfrac{\\ln2}{9}+\\dfrac{\\ln3}{4}\\approx0.0074370087$."
    }
   ]
  },
  "fin-2-05": {
   "prompt": "Compute $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x^{7}-x}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since $x^{7}-x=x\\left(x^{6}-1\\right)$, first find the antiderivative (verifiable by differentiation):"
    },
    {
     "i": 2,
     "en": "Check: $\\dfrac{d}{dx}\\left[\\ln x+\\dfrac16\\ln(1-x^{-6})\\right]=\\dfrac1x+\\dfrac16\\cdot\\dfrac{6x^{-7}}{1-x^{-6}}=\\dfrac1x+\\dfrac{x^{-7}}{1-x^{-6}}=\\dfrac{1}{x\\left(x^{6}-1\\right)}$."
    },
    {
     "i": 5,
     "en": "$=\\dfrac16\\ln\\dfrac{64}{63}$ (since $-\\ln2-\\dfrac16\\ln63+\\dfrac16\\ln64=-\\ln2+\\dfrac{6\\ln2}{6}=\\dfrac16\\ln\\dfrac{64}{63}$)."
    },
    {
     "i": 6,
     "en": "Therefore $I=\\dfrac16\\ln\\dfrac{64}{63}\\approx0.0026247262$."
    }
   ]
  },
  "fin-2-06": {
   "prompt": "Let $h(x)=\\displaystyle\\int_{8}^{x^{2}}x\\sin\\left(x^{2}t^{2}\\right)dt$ ($x>0$). Find $h'(2)$.",
   "blanks": [
    "$h'(2)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Substitution $u=xt$: as $t$ goes from $8\\to x^{2}$, $u$ goes from $8x\\to x^{3}$, and $dt=\\dfrac{du}{x}$."
    },
    {
     "i": 2,
     "en": "Leibniz rule: $h'(x)=3x^{2}\\sin\\left(x^{6}\\right)-8\\sin\\left(64x^{2}\\right)$."
    },
    {
     "i": 3,
     "en": "Substitute $x=2$: $h'(2)=12\\sin 64-8\\sin 256$."
    },
    {
     "i": 4,
     "en": "Using $\\sin 2u=2\\sin u\\cos u$ to reduce the angle repeatedly: $\\sin 64=32\\sin2\\cos2\\cos4\\cos8\\cos16\\cos32$, $\\sin256=128\\sin2\\cos2\\cos4\\cos8\\cos16\\cos32\\cos64\\cos128$."
    },
    {
     "i": 5,
     "en": "After simplifying, $h'(2)=\\dfrac32\\sin4-8\\cos4\\approx-5.7729360243$."
    }
   ]
  },
  "fin-2-07": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}xe^{x}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int xe^{x}dx=(x-1)e^{x}+C$."
    }
   ]
  },
  "fin-2-08": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}xe^{-x}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int xe^{-x}dx=-(x+1)e^{-x}+C$."
    }
   ]
  },
  "fin-2-09": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}x^{2}e^{x}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts twice: $\\displaystyle\\int x^{2}e^{x}dx=e^{x}\\left(x^{2}-2x+2\\right)+C$."
    }
   ]
  },
  "fin-2-10": {
   "prompt": "Compute $\\displaystyle\\int_{1}^{e}\\ln x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\displaystyle\\int\\ln x\\,dx=x\\ln x-x$, so $\\Big[x\\ln x-x\\Big]_{1}^{e}=(e-e)-(0-1)=1$."
    }
   ]
  },
  "fin-2-11": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi}x\\sin x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int x\\sin x\\,dx=-x\\cos x+\\sin x+C$."
    }
   ]
  },
  "fin-2-12": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/4}\\sec^{3}x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Using the recurrence formula $\\displaystyle\\int\\sec^{n}x\\,dx=\\frac{\\sec^{n-2}x\\tan x}{n-1}+\\frac{n-2}{n-1}\\int\\sec^{n-2}x\\,dx$ with $n=3$:"
    },
    {
     "i": 2,
     "en": "Substituting the limits for $x\\in\\left[0,\\frac\\pi4\\right]$: $\\dfrac12\\cdot\\sqrt2+\\dfrac12\\ln(1+\\sqrt2)=\\dfrac{\\sqrt2+\\ln(1+\\sqrt2)}{2}\\approx1.1477935747$."
    }
   ]
  },
  "fin-2-13": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\sin^{4}x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Half-angle formula: $\\sin^{4}x=\\left(\\dfrac{1-\\cos2x}{2}\\right)^{2}=\\dfrac14\\left(1-2\\cos2x+\\cos^{2}2x\\right)$"
    },
    {
     "i": 2,
     "en": "$\\displaystyle\\int_{0}^{\\pi/2}\\sin^{4}x\\,dx=\\dfrac38\\cdot\\dfrac\\pi2=\\dfrac{3\\pi}{16}$ (the cosine terms integrate to 0)."
    }
   ]
  },
  "fin-2-14": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\arctan x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int\\arctan x\\,dx=x\\arctan x-\\frac12\\ln\\left(1+x^{2}\\right)+C$."
    }
   ]
  },
  "fin-2-15": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}x\\arctan x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Take $u=\\arctan x$, $dv=x\\,dx$: $\\displaystyle\\int_{0}^{1}x\\arctan x\\,dx=\\frac12\\Big[x^{2}\\arctan x\\Big]_{0}^{1}-\\frac12\\int_{0}^{1}\\frac{x^{2}}{1+x^{2}}dx$."
    }
   ]
  },
  "fin-2-16": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\sin^{2}x=\\dfrac{1-\\cos2x}{2}$, so $\\displaystyle\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx=\\dfrac12\\cdot\\dfrac\\pi2=\\dfrac\\pi4$."
    }
   ]
  },
  "fin-2-17": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/4}\\tan^{3}x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Recurrence formula $\\displaystyle\\int\\tan^{n}x\\,dx=\\frac{\\tan^{n-1}x}{n-1}-\\int\\tan^{n-2}x\\,dx$ with $n=3$:"
    }
   ]
  },
  "fin-2-18": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1/2}\\frac{dx}{\\sqrt{1-x^{2}}}$.",
   "blanks": [
    "Integral value"
   ]
  },
  "fin-2-19": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{3}\\frac{dx}{x^{2}+9}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\displaystyle\\int\\frac{dx}{x^{2}+9}=\\frac13\\arctan\\frac x3$, so $\\Big[\\frac13\\arctan\\frac x3\\Big]_{0}^{3}=\\frac13\\cdot\\frac\\pi4=\\frac{\\pi}{12}$."
    }
   ]
  },
  "fin-2-20": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\frac{x^{2}}{\\sqrt{1-x^{2}}}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Trigonometric substitution $x=\\sin\\theta$, $dx=\\cos\\theta\\,d\\theta$, $\\theta:0\\to\\dfrac\\pi2$."
    }
   ]
  },
  "fin-2-21": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\frac{dx}{\\left(1+x^{2}\\right)^{2}}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Using the recurrence formula (or the trigonometric substitution $x=\\tan\\theta$): $\\displaystyle\\int\\frac{dx}{(1+x^{2})^{2}}=\\frac{x}{2(1+x^{2})}+\\frac12\\arctan x+C$."
    }
   ]
  },
  "fin-2-22": {
   "prompt": "Compute $\\displaystyle\\int_{1}^{2}\\frac{dx}{x^{2}(x+1)}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Partial fractions: $\\dfrac{1}{x^{2}(x+1)}=-\\dfrac1x+\\dfrac{1}{x^{2}}+\\dfrac{1}{x+1}$."
    },
    {
     "i": 1,
     "en": "Antiderivative: $-\\ln x-\\dfrac1x+\\ln(x+1)=-\\dfrac1x+\\ln\\dfrac{x+1}{x}$."
    }
   ]
  },
  "fin-2-23": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\cos^{3}x\\,dx$.",
   "blanks": [
    "Integral value"
   ]
  },
  "fin-2-24": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/4}\\ln(1+\\tan x)\\,dx$. (Hint: use the substitution $u=\\dfrac{\\pi}{4}-x$.)",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\dfrac\\pi4-x$. From $\\tan x=\\tan\\left(\\dfrac\\pi4-u\\right)=\\dfrac{1-\\tan u}{1+\\tan u}$ we get"
    },
    {
     "i": 1,
     "en": "$1+\\tan x=\\dfrac{2}{1+\\tan u}$, so $\\ln(1+\\tan x)=\\ln2-\\ln(1+\\tan u)$."
    },
    {
     "i": 2,
     "en": "Let $I=\\displaystyle\\int_0^{\\pi/4}\\ln(1+\\tan x)dx$; then"
    },
    {
     "i": 4,
     "en": "Therefore $2I=\\dfrac\\pi4\\ln2$, $I=\\dfrac\\pi8\\ln2\\approx0.2721982613$."
    }
   ]
  },
  "fin-2-25": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x(\\ln x)^{2}}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\ln x$, $du=\\dfrac{dx}{x}$; $x=2\\Rightarrow u=\\ln2$, $x\\to\\infty\\Rightarrow u\\to\\infty$."
    }
   ]
  },
  "fin-2-26": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}x\\ln x\\,dx$ (improper integral; as $x\\to0^{+}$, $x\\ln x\\to0$).",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int x\\ln x\\,dx=\\frac{x^{2}}{2}\\ln x-\\frac{x^{2}}{4}+C$."
    }
   ]
  },
  "fin-2-27": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\infty}e^{-2x}\\sin 3x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Using the formula $\\displaystyle\\int e^{ax}\\sin bx\\,dx=\\frac{e^{ax}\\left(a\\sin bx-b\\cos bx\\right)}{a^{2}+b^{2}}+C$ with $a=-2,\\ b=3$:"
    }
   ]
  },
  "fin-2-28": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{4}\\frac{dx}{1+\\sqrt{x}}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\sqrt x$; then $x=u^{2}$, $dx=2u\\,du$, $u:0\\to2$."
    }
   ]
  },
  "fin-2-29": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\frac{x}{x^{2}+1}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\displaystyle\\int\\frac{x}{x^{2}+1}dx=\\frac12\\ln\\left(1+x^{2}\\right)$, so $\\Big[\\frac12\\ln(1+x^{2})\\Big]_{0}^{1}=\\frac{\\ln2}{2}$."
    }
   ]
  },
  "fin-2-30": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\frac{2x+3}{x^{2}+3x+2}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Note that the numerator is exactly the derivative of the denominator: $\\dfrac{d}{dx}\\left(x^{2}+3x+2\\right)=2x+3$."
    }
   ]
  },
  "fin-2-31": {
   "prompt": "Compute $\\displaystyle\\int_{5}^{\\infty}\\frac{dx}{x^{2}-4}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Partial fractions: $\\dfrac{1}{x^{2}-4}=\\dfrac14\\left(\\dfrac{1}{x-2}-\\dfrac{1}{x+2}\\right)$."
    }
   ]
  },
  "fin-3-01": {
   "prompt": "Consider the $y$-axis ($x=0$), the line $L:y=1-x$, and the curve $C:y=\\arcsin x+\\sqrt{1-x^{2}}-\\dfrac{\\pi}{2}$. Find the area of the closed region bounded by these three curves.",
   "blanks": [
    "Area"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The three curves meet at the single point $(1,0)$: $C(1)=\\arcsin1+0-\\dfrac\\pi2=0=L(1)$;"
    },
    {
     "i": 1,
     "en": "$C$ meets the $y$-axis at $\\left(0,\\,1-\\dfrac\\pi2\\right)$, and $L$ meets the $y$-axis at $(0,1)$."
    },
    {
     "i": 2,
     "en": "The region is bounded by the $y$-axis, $L$ and $C$, and on $x\\in[0,1]$ we always have $L(x)>C(x)$ (for example at $x=\\tfrac12$: $L=0.5$, $C\\approx-0.046$)."
    },
    {
     "i": 5,
     "en": "Integration by parts gives $\\displaystyle\\int_0^1\\arcsin x\\,dx=\\frac\\pi2-1$; the area of a quarter of the unit circle gives $\\displaystyle\\int_0^1\\sqrt{1-x^{2}}dx=\\frac\\pi4$."
    }
   ]
  },
  "fin-3-02": {
   "prompt": "Continuing the previous question, find the length of the line segment $L$ from $(0,1)$ to $(1,0)$.",
   "blanks": [
    "Length of $L$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$L$ is the line segment joining $(0,1)$ and $(1,0)$, with length $=\\sqrt{1^{2}+1^{2}}=\\sqrt2$."
    }
   ]
  },
  "fin-3-03": {
   "prompt": "Continuing the previous question, find the arc length of the curve $C:y=\\arcsin x+\\sqrt{1-x^{2}}-\\dfrac{\\pi}{2}$ over $x\\in[0,1]$.",
   "blanks": [
    "Length of $C$"
   ]
  },
  "fin-3-04": {
   "prompt": "Continuing the previous question, find the volume of the solid obtained by rotating this closed region about the $y$-axis.",
   "blanks": [
    "Volume"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Using cylindrical shells (about the $y$-axis): $V=2\\pi\\displaystyle\\int_0^1 x\\left[L(x)-C(x)\\right]dx$."
    },
    {
     "i": 1,
     "en": "Compute separately: $\\displaystyle\\int_0^1 xL(x)dx=\\int_0^1 x(1-x)dx=\\dfrac16$."
    },
    {
     "i": 2,
     "en": "Also $\\displaystyle\\int_0^1 xC(x)dx=\\int_0^1x\\arcsin x\\,dx+\\int_0^1x\\sqrt{1-x^{2}}dx-\\frac\\pi2\\int_0^1x\\,dx$,"
    },
    {
     "i": 3,
     "en": "where $\\displaystyle\\int_0^1x\\sqrt{1-x^{2}}dx=\\dfrac13$, $\\displaystyle\\int_0^1x\\arcsin x\\,dx=\\dfrac\\pi8-\\dfrac14$ (integration by parts), $\\displaystyle\\int_0^1x\\,dx=\\dfrac12$."
    },
    {
     "i": 4,
     "en": "Therefore $\\displaystyle\\int_0^1x\\left[L(x)-C(x)\\right]dx=\\dfrac16-\\left(\\dfrac\\pi8-\\dfrac14+\\dfrac13-\\dfrac\\pi4\\right)=\\dfrac\\pi4-\\dfrac12\\approx0.2853981634$."
    }
   ]
  },
  "fin-3-05": {
   "prompt": "Find the area of the region bounded by $y=x^{2}$ and $y=2x-x^{2}$.",
   "blanks": [
    "Area"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Points of intersection: $x^{2}=2x-x^{2}\\Rightarrow 2x^{2}-2x=0\\Rightarrow x=0$ or $x=1$."
    }
   ]
  },
  "fin-3-06": {
   "prompt": "Continuing the previous question, find the volume of the solid obtained by rotating this region about the $x$-axis.",
   "blanks": [
    "Volume"
   ]
  },
  "fin-3-07": {
   "prompt": "Compute the arc length of $y=x^{3/2}$ over $x\\in[0,1]$.",
   "blanks": [
    "Arc length"
   ]
  },
  "fin-3-08": {
   "prompt": "Compute the arc length of $y=\\ln(\\cos x)$ over $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$.",
   "blanks": [
    "Arc length"
   ],
   "solution": [
    {
     "i": 1,
     "en": "On $x\\in\\left[0,\\frac\\pi4\\right]$ we have $\\sec x>0$, so $\\sqrt{1+(y')^{2}}=\\sec x$."
    }
   ]
  },
  "fin-3-09": {
   "prompt": "Compute the volume of the solid obtained by rotating the region bounded by $y=\\sin x$ and the $x$-axis on $[0,\\pi]$ about the $x$-axis.",
   "blanks": [
    "Volume"
   ]
  },
  "fin-3-10": {
   "prompt": "Compute the volume of the solid obtained by rotating the region bounded by $y=\\sqrt{x}$, $x=4$, and the $x$-axis about the $x$-axis.",
   "blanks": [
    "Volume"
   ]
  },
  "fin-3-11": {
   "prompt": "Compute the volume of the solid obtained by rotating the unbounded region bounded by $y=\\dfrac1x$ ($x\\ge1$) and the $x$-axis about the $x$-axis (Gabriel's horn).",
   "blanks": [
    "Volume"
   ],
   "solution": [
    {
     "i": 1,
     "en": "The volume is finite (interestingly, its surface area is divergent)."
    }
   ]
  },
  "fin-3-12": {
   "prompt": "Compute the area of the region bounded by $y=\\sin x$ and $y=\\cos x$ on $x\\in\\left[0,\\dfrac{\\pi}{4}\\right]$.",
   "blanks": [
    "Area"
   ],
   "solution": [
    {
     "i": 0,
     "en": "On $\\left[0,\\frac\\pi4\\right]$ we have $\\cos x\\ge\\sin x$."
    }
   ]
  },
  "fin-3-13": {
   "prompt": "Compute the area of the surface obtained by rotating $y=\\sqrt{x}$ over $x\\in[0,4]$ about the $x$-axis (lateral surface area).",
   "blanks": [
    "Lateral surface area"
   ]
  },
  "fin-3-14": {
   "prompt": "Find the average value of $f(x)=x^{2}$ on $[0,3]$.",
   "blanks": [
    "Average value"
   ]
  },
  "fin-3-15": {
   "prompt": "Find the average value of $f(x)=\\sin x$ on $[0,\\pi]$.",
   "blanks": [
    "Average value"
   ]
  },
  "fin-4-01": {
   "prompt": "Find the coefficient $a_n$ of the power series $\\displaystyle\\sum_{n=0}^{\\infty}a_nx^{2n+1}$ for $\\ln\\left(\\dfrac{1+x}{1-x}\\right)$ at $x=0$.",
   "blanks": [
    "$a_n$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Subtracting: $\\ln\\dfrac{1+x}{1-x}=2\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{2n+1}$."
    },
    {
     "i": 2,
     "en": "Therefore $a_n=\\dfrac{2}{2n+1}$."
    }
   ]
  },
  "fin-4-02": {
   "prompt": "Using the power series from the previous question, compute $\\displaystyle\\int_{0}^{1}\\frac1x\\ln\\left(\\frac{1+x}{1-x}\\right)dx$. (Recall that $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}$.)",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From $\\ln\\dfrac{1+x}{1-x}=2\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{2n+1}$ we get $\\dfrac1x\\ln\\dfrac{1+x}{1-x}=2\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n}}{2n+1}$."
    },
    {
     "i": 1,
     "en": "Integrating term by term on $[0,1]$: $\\displaystyle\\int_0^1\\frac1x\\ln\\frac{1+x}{1-x}dx=2\\sum_{n=0}^{\\infty}\\frac{1}{(2n+1)^{2}}$."
    },
    {
     "i": 2,
     "en": "And $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{1}{(2n+1)^{2}}=\\sum_{n=1}^{\\infty}\\frac1{n^{2}}-\\sum_{n=1}^{\\infty}\\frac{1}{(2n)^{2}}=\\frac{\\pi^{2}}{6}-\\frac14\\cdot\\frac{\\pi^{2}}{6}=\\frac{\\pi^{2}}{8}$."
    },
    {
     "i": 3,
     "en": "Therefore the integral $=2\\cdot\\dfrac{\\pi^{2}}{8}=\\dfrac{\\pi^{2}}{4}\\approx2.4674011003$."
    }
   ]
  },
  "fin-4-03": {
   "prompt": "Find the coefficient $a_n$ of the Maclaurin series $\\displaystyle\\sum_{n=0}^{\\infty}a_nx^{2n+1}$ for $\\arctan x$.",
   "blanks": [
    "$a_n$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Integrating term by term: $\\arctan x=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n+1}}{2n+1}$, so $a_n=\\dfrac{(-1)^{n}}{2n+1}$."
    }
   ]
  },
  "fin-4-04": {
   "prompt": "Find the sum of $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{2n+1}$.",
   "blanks": [
    "Series sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From $\\arctan x=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{2n+1}}{2n+1}$ ($|x|\\le1$),"
    },
    {
     "i": 1,
     "en": "taking $x=1$ gives $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{2n+1}=\\arctan1=\\dfrac\\pi4$."
    }
   ]
  },
  "fin-4-05": {
   "prompt": "Find the value of $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}$.",
   "blanks": [
    "Series sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is the Basel problem: $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}$."
    }
   ]
  },
  "fin-4-06": {
   "prompt": "Find the sum of the series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n(n+1)}$.",
   "blanks": [
    "Series sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Partial fractions: $\\dfrac{1}{n(n+1)}=\\dfrac1n-\\dfrac{1}{n+1}$ (telescoping)."
    },
    {
     "i": 1,
     "en": "The partial sum $S_N=1-\\dfrac{1}{N+1}\\to1$, so the sum is $1$."
    }
   ]
  },
  "fin-4-07": {
   "prompt": "Find the sum of the geometric series $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac34\\right)^{n}$.",
   "blanks": [
    "Series sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\displaystyle\\sum_{n=1}^{\\infty}r^{n}=\\dfrac{r}{1-r}$; taking $r=\\dfrac34$ gives $\\dfrac{3/4}{1/4}=3$."
    }
   ]
  },
  "fin-4-08": {
   "prompt": "Find the sum of $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n}{2^{n}}$.",
   "blanks": [
    "Series sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Differentiating $\\displaystyle\\sum_{n=0}^{\\infty}x^{n}=\\frac{1}{1-x}$ gives $\\displaystyle\\sum_{n=1}^{\\infty}nx^{n-1}=\\frac{1}{(1-x)^{2}}$,"
    },
    {
     "i": 1,
     "en": "so $\\displaystyle\\sum_{n=1}^{\\infty}nx^{n}=\\frac{x}{(1-x)^{2}}$. Taking $x=\\dfrac12$: $\\dfrac{1/2}{1/4}=2$."
    }
   ]
  },
  "fin-4-09": {
   "prompt": "Find the radius of convergence of the power series $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$.",
   "blanks": [
    "Radius of convergence"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Ratio test: $\\left|\\dfrac{a_{n+1}}{a_{n}}\\right|=\\dfrac{1}{n+1}\\to0$, so it converges for every $x$,"
    },
    {
     "i": 1,
     "en": "hence the radius of convergence $R=\\infty$."
    }
   ]
  },
  "fin-4-10": {
   "prompt": "Find the interval of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^{n}}{n}$.",
   "blanks": [
    "Interval of convergence"
   ],
   "solution": [
    {
     "i": 1,
     "en": "At $x=1$ it is the harmonic series, which diverges; at $x=-1$ it is the alternating harmonic series, which converges."
    },
    {
     "i": 2,
     "en": "Therefore the interval of convergence is $[-1,1)$."
    }
   ]
  },
  "fin-4-11": {
   "prompt": "Find the coefficient of $x^{5}$ in the Maclaurin series for $e^{x}$.",
   "blanks": [
    "Coefficient of $x^{5}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$e^{x}=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n!}$, so the coefficient of $x^{5}$ is $\\dfrac{1}{5!}=\\dfrac{1}{120}$."
    }
   ]
  },
  "fin-4-12": {
   "prompt": "Use the first 4 terms of the power series expansion to compute an approximate value of $\\displaystyle\\int_{0}^{1}e^{-x^{2}}dx$ (rounded to 4 decimal places).",
   "blanks": [
    "Approximate value"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Integrating term by term: $\\displaystyle\\int_0^1e^{-x^{2}}dx=1-\\frac13+\\frac{1}{2}\\cdot\\frac15-\\frac16\\cdot\\frac17+\\cdots$"
    },
    {
     "i": 2,
     "en": "The first 4 terms: $1-\\dfrac13+\\dfrac1{10}-\\dfrac1{42}=0.7428571\\ldots\\approx0.7429$."
    },
    {
     "i": 3,
     "en": "(The true value is about $0.7468$.)"
    }
   ]
  },
  "fin-5-01": {
   "prompt": "Prove $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\sin x}dx$. Write down what the integrand becomes after the substitution $x\\to\\dfrac{\\pi}{2}-x$.",
   "blanks": [
    "Integrand after substitution"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\dfrac\\pi2-x$; then $du=-dx$, and $x:0\\to\\dfrac\\pi2$ corresponds to $u:\\dfrac\\pi2\\to0$."
    },
    {
     "i": 2,
     "en": "That is, the integrand changes from $e^{\\cos x}$ to $e^{\\sin x}$, so the two integrals are equal."
    }
   ]
  },
  "fin-5-02": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos(3x)}\\sin(3x)\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\cos3x$, $du=-3\\sin3x\\,dx$; $x=0\\Rightarrow u=1$, $x=\\dfrac\\pi2\\Rightarrow u=\\cos\\dfrac{3\\pi}{2}=0$."
    }
   ]
  },
  "fin-5-03": {
   "prompt": "Let $I=\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx$. Integration by parts gives $I=C+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx$. Find the constant $C$.",
   "blanks": [
    "$C$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Take $u=e^{\\cos x}$, $dv=dx$; then $du=-e^{\\cos x}\\sin x\\,dx$ and $v=x$."
    },
    {
     "i": 3,
     "en": "Therefore $C=\\dfrac\\pi2$."
    }
   ]
  },
  "fin-5-04": {
   "prompt": "Continuing, use the substitution $x\\to\\dfrac{\\pi}{2}-x$ to compute $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx$ (the result should not contain $I$).",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $x=\\dfrac\\pi2-u$; then $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\int_{0}^{\\pi/2}\\left(\\frac\\pi2-u\\right)e^{\\cos u}\\sin u\\,du$."
    },
    {
     "i": 2,
     "en": "The first of these integrals: $\\displaystyle\\int_0^{\\pi/2}e^{\\cos u}\\sin u\\,du=\\Big[-e^{\\cos u}\\Big]_{0}^{\\pi/2}=e-1$."
    },
    {
     "i": 3,
     "en": "And by the conclusion of (c), $\\displaystyle\\int_0^{\\pi/2}ue^{\\cos u}\\sin u\\,du=I-\\dfrac\\pi2$,"
    },
    {
     "i": 4,
     "en": "while $I=\\dfrac\\pi2+\\displaystyle\\int_0^{\\pi/2}ue^{\\cos u}\\sin u\\,du$ itself gives $\\displaystyle\\int_0^{\\pi/2}ue^{\\cos u}\\sin u\\,du=I-\\dfrac\\pi2$."
    },
    {
     "i": 5,
     "en": "Substituting gives the expression $=\\dfrac\\pi2(e-1)-\\left(I-\\dfrac\\pi2\\right)$. Then using (after substitution) $I=\\dfrac\\pi2+I-\\dfrac\\pi2$ to cancel $I$,"
    },
    {
     "i": 6,
     "en": "we finally get $\\displaystyle\\int_0^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\dfrac\\pi2-1\\approx0.5707963268$."
    }
   ]
  },
  "fin-5-05": {
   "prompt": "Use the symmetry of odd and even functions to compute $\\displaystyle\\int_{-1}^{1}\\left(x^{3}+x\\right)dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$x^{3}+x$ is an odd function, so its integral over the symmetric interval $[-1,1]$ is $0$."
    }
   ]
  },
  "fin-5-06": {
   "prompt": "Use the symmetry of odd and even functions to compute $\\displaystyle\\int_{-2}^{2}\\left(x^{4}+x^{2}\\right)dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$x^{4}+x^{2}$ is an even function, so $\\displaystyle\\int_{-2}^{2}=2\\int_{0}^{2}\\left(x^{4}+x^{2}\\right)dx$."
    }
   ]
  },
  "fin-5-07": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi}x\\sin x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts: $\\displaystyle\\int x\\sin x\\,dx=-x\\cos x+\\sin x+C$."
    }
   ]
  },
  "fin-5-08": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx$. The result can be written as $\\dfrac{\\pi^{2}}{k}$; give $k$.",
   "blanks": [
    "$k$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From the identity $\\displaystyle\\int_0^{\\pi}xg(\\sin x)dx=\\frac\\pi2\\int_0^{\\pi}g(\\sin x)dx$ (provable by letting $x\\to\\pi-x$),"
    },
    {
     "i": 1,
     "en": "here $\\dfrac{\\sin x}{1+\\cos^{2}x}=\\dfrac{\\sin x}{2-\\sin^{2}x}=g(\\sin x)$."
    },
    {
     "i": 3,
     "en": "Let $u=\\cos x$, $du=-\\sin x\\,dx$, $u:1\\to-1$:"
    },
    {
     "i": 5,
     "en": "Therefore the expression $=\\dfrac\\pi2\\cdot\\dfrac\\pi2=\\dfrac{\\pi^{2}}{4}$, that is, $k=4$."
    }
   ]
  },
  "fin-5-09": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $J=\\displaystyle\\int_0^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}dx$. With the substitution $x\\to\\dfrac\\pi2-x$ we get"
    },
    {
     "i": 2,
     "en": "Adding the two equations: $2J=\\displaystyle\\int_0^{\\pi/2}1\\,dx=\\dfrac\\pi2$, therefore $J=\\dfrac\\pi4$."
    }
   ]
  },
  "fin-5-10": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $J=\\displaystyle\\int_0^{\\pi/2}\\ln(\\sin x)dx$. From $x\\to\\dfrac\\pi2-x$ we get $J=\\displaystyle\\int_0^{\\pi/2}\\ln(\\cos x)dx$."
    },
    {
     "i": 2,
     "en": "And $\\displaystyle\\int_0^{\\pi/2}\\ln(\\sin2x)dx=\\frac12\\int_0^{\\pi}\\ln(\\sin u)du=J$ (using symmetry once more)."
    },
    {
     "i": 3,
     "en": "Therefore $2J=J-\\dfrac\\pi2\\ln2$, giving $J=-\\dfrac\\pi2\\ln2\\approx-1.0887930452$."
    }
   ]
  },
  "past-2-01": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/3}\\tan^{3}x\\,\\sec^{4}x\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Since $\\sec^{4}x=\\left(1+\\tan^{2}x\\right)\\sec^{2}x$, let $u=\\tan x$, $du=\\sec^{2}x\\,dx$."
    },
    {
     "i": 2,
     "en": "$x:0\\to\\dfrac{\\pi}{3}$ corresponds to $u:0\\to\\sqrt3$,"
    }
   ]
  },
  "past-2-02": {
   "prompt": "Compute $\\displaystyle\\int_{\\sqrt3}^{2}x^{3}\\sqrt{4-x^{2}}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=4-x^{2}$; then $du=-2x\\,dx$ and $x^{2}=4-u$, so $x^{3}dx=x^{2}\\cdot x\\,dx=(4-u)\\left(-\\dfrac{du}{2}\\right)$."
    }
   ]
  },
  "past-2-03": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{\\pi}^{\\infty}\\frac{dx}{x\\ln x\\left[\\ln(\\ln x)\\right]^{2}}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\ln(\\ln x)$; then $du=\\dfrac{dx}{x\\ln x}$."
    }
   ]
  },
  "past-2-04": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{0}^{\\infty}\\frac{dx}{(x+3)^{2}(x+5)}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=x+3$ ($u\\ge3$); then $x+5=u+2$, $I=\\displaystyle\\int_{3}^{\\infty}\\frac{du}{u^{2}(u+2)}$."
    },
    {
     "i": 1,
     "en": "Partial fractions: $\\dfrac{1}{u^{2}(u+2)}=-\\dfrac{1}{4u}+\\dfrac{1}{2u^{2}}+\\dfrac{1}{4(u+2)}$."
    },
    {
     "i": 2,
     "en": "(Verify: after putting over a common denominator the numerator $=\\dfrac{-u(u+2)+2(u+2)+u^{2}}{4}=\\dfrac{-u^{2}-2u+2u+4+u^{2}}{4}=1$ ✓)"
    },
    {
     "i": 3,
     "en": "Antiderivative: $-\\dfrac14\\ln u-\\dfrac{1}{2u}+\\dfrac14\\ln(u+2)=\\dfrac14\\ln\\dfrac{u+2}{u}-\\dfrac{1}{2u}$."
    },
    {
     "i": 4,
     "en": "As $u\\to\\infty$, $\\dfrac14\\ln\\left(1+\\dfrac2u\\right)-\\dfrac{1}{2u}\\to0$;"
    },
    {
     "i": 5,
     "en": "At $u=3$ its value is $\\dfrac14\\ln\\dfrac53-\\dfrac16$."
    }
   ]
  },
  "past-2-05": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\frac{d\\theta}{1+2\\cos\\theta}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The Weierstrass substitution $t=\\tan\\dfrac\\theta2$: $\\cos\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$, $d\\theta=\\dfrac{2\\,dt}{1+t^{2}}$;"
    },
    {
     "i": 1,
     "en": "$\\theta:0\\to\\dfrac\\pi2$ corresponds to $t:0\\to1$."
    },
    {
     "i": 4,
     "en": "Rationalise: $\\dfrac{\\sqrt3+1}{\\sqrt3-1}=\\dfrac{\\left(\\sqrt3+1\\right)^{2}}{2}=2+\\sqrt3$, therefore $I=\\dfrac{1}{\\sqrt3}\\ln\\left(2+\\sqrt3\\right)$."
    },
    {
     "i": 5,
     "en": "(Equivalent form: $=\\dfrac{1}{4\\sqrt3}\\ln\\dfrac{2+\\sqrt3}{2-\\sqrt3}$.) Numerically $\\approx0.7603459963$."
    }
   ]
  },
  "past-2-06": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{8}\\frac{2x^{2}-18x+40}{\\sqrt{x^{2}+6x+34}}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Complete the square: $x^{2}+6x+34=(x+3)^{2}+25$. Let $u=x+3$, $x=u-3$, $u:3\\to11$."
    },
    {
     "i": 1,
     "en": "The numerator becomes $2(u-3)^{2}-18(u-3)+40=2u^{2}-30u+112$."
    },
    {
     "i": 3,
     "en": "Split the terms and use (with $a=5$):"
    },
    {
     "i": 6,
     "en": "Substituting the limits ($\\sqrt{9+25}=\\sqrt{34}$, $\\sqrt{121+25}=\\sqrt{146}$) and simplifying gives"
    }
   ]
  },
  "past-2-07": {
   "prompt": "Discuss the convergence or divergence of $\\displaystyle\\int_{1}^{\\pi/2}\\cot x\\,\\sec^{3}x\\,dx$ (if it converges, give its value; if it diverges, enter divergent).",
   "blanks": [
    "Conclusion"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Let $u=\\sin x$, $du=\\cos x\\,dx$, $\\cos^{2}x=1-u^{2}$:"
    },
    {
     "i": 3,
     "en": "<b>Convergence:</b> as $x\\to\\dfrac{\\pi}{2}^{-}$, $\\cos^{2}x\\to0$, the integrand $=\\dfrac{1}{\\sin x\\cos^{2}x}\\to+\\infty$;"
    },
    {
     "i": 4,
     "en": "and $\\displaystyle\\int^{\\pi/2}\\frac{dx}{\\cos^{2}x}=\\tan x$ diverges at $\\dfrac{\\pi}{2}$,"
    },
    {
     "i": 5,
     "en": "therefore the original integral <b>diverges</b> (to $+\\infty$)."
    },
    {
     "i": 6,
     "en": "(Note also that as $x\\to0^{+}$, $\\dfrac{1}{\\sin x\\cos^{2}x}\\sim\\dfrac1x$ diverges too.)"
    },
    {
     "i": 7,
     "en": "<b>Conclusion:</b> this improper integral diverges."
    }
   ]
  },
  "past-2-08": {
   "prompt": "Compute $\\displaystyle\\int_{1/12}^{1/4}\\frac{dx}{2\\sqrt{x}+4x^{3/2}}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The denominator $2\\sqrt x+4x^{3/2}=2\\sqrt x\\left(1+2x\\right)$. Let $u=\\sqrt x$, $x=u^{2}$, $dx=2u\\,du$."
    },
    {
     "i": 3,
     "en": "Partial fractions $\\dfrac{1}{u\\left(1+2u^{2}\\right)}=\\dfrac1u-\\dfrac{2u}{1+2u^{2}}$, so the antiderivative is $\\ln u-\\dfrac12\\ln\\left(1+2u^{2}\\right)$."
    },
    {
     "i": 4,
     "en": "At $u=\\dfrac12$: $\\ln\\dfrac12-\\dfrac12\\ln\\dfrac32$; at $u=\\dfrac{1}{\\sqrt{12}}$: $\\ln\\dfrac{1}{\\sqrt{12}}-\\dfrac12\\ln\\dfrac76$."
    },
    {
     "i": 5,
     "en": "Subtracting and simplifying gives $I=\\dfrac12\\ln\\dfrac32\\approx0.2027325541$."
    }
   ]
  },
  "past-2-09": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{10}^{\\infty}\\frac{dx}{x\\left(1+\\ln x\\right)\\left[\\ln\\left(1+\\ln x\\right)\\right]^{3/2}}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=1+\\ln x$; then $du=\\dfrac{dx}{x}$; $x=10\\Rightarrow u=1+\\ln10$, $x\\to\\infty\\Rightarrow u\\to\\infty$."
    },
    {
     "i": 2,
     "en": "Now let $v=\\ln u$, $dv=\\dfrac{du}{u}$:"
    }
   ]
  },
  "past-2-10": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x^{3}+4x^{2}+5x+2}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Factorise: $x^{3}+4x^{2}+5x+2=(x+1)^{2}(x+2)$."
    },
    {
     "i": 1,
     "en": "Partial fractions: $\\dfrac{1}{(x+1)^{2}(x+2)}=\\dfrac{1}{x+2}-\\dfrac{1}{x+1}+\\dfrac{1}{(x+1)^{2}}$."
    },
    {
     "i": 2,
     "en": "Antiderivative: $\\ln(x+2)-\\ln(x+1)-\\dfrac{1}{x+1}=\\ln\\dfrac{x+2}{x+1}-\\dfrac{1}{x+1}$."
    },
    {
     "i": 3,
     "en": "As $x\\to\\infty$, $\\ln\\dfrac{x+2}{x+1}\\to\\ln1=0$ and $\\dfrac{1}{x+1}\\to0$, so the expression $\\to0$."
    },
    {
     "i": 4,
     "en": "At $x=2$ it is $\\ln\\dfrac43-\\dfrac13$."
    }
   ]
  },
  "past-2-11": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}t\\arccos\\left(\\frac{1-t^{2}}{1+t^{2}}\\right)dt$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "For $t>0$ we have the identity $\\arccos\\dfrac{1-t^{2}}{1+t^{2}}=2\\arctan t$."
    },
    {
     "i": 1,
     "en": "(Verify: let $\\theta=\\arctan t$; then $\\cos2\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$ and $2\\theta\\in(0,\\pi)$.)"
    },
    {
     "i": 2,
     "en": "Therefore $I=2\\displaystyle\\int_{0}^{1}t\\arctan t\\,dt$. Integration by parts ($u=\\arctan t$, $dv=t\\,dt$):"
    }
   ]
  },
  "past-2-12": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\frac{3x^{2}+11x+51}{\\sqrt{x^{2}-6x+58}}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Complete the square: $x^{2}-6x+58=(x-3)^{2}+49$. Let $u=x-3$, $u:-3\\to-2$."
    },
    {
     "i": 1,
     "en": "The numerator becomes $3(u+3)^{2}+11(u+3)+51=3u^{2}+29u+111$."
    },
    {
     "i": 3,
     "en": "After splitting the terms, use (with $a=7$):"
    },
    {
     "i": 6,
     "en": "Substituting the limits ($\\sqrt{9+49}=\\sqrt{58}$, $\\sqrt{4+49}=\\sqrt{53}$) and simplifying gives"
    }
   ]
  },
  "past-2-13": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{1}\\arctan\\sqrt{x}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Integration by parts ($u=\\arctan\\sqrt x$, $dv=dx$):"
    },
    {
     "i": 2,
     "en": "Let $t=\\sqrt x$, $dx=2t\\,dt$, $t:0\\to1$:"
    }
   ]
  },
  "past-2-14": {
   "prompt": "Compute $\\displaystyle\\int_{-3}^{3}\\frac{x}{1+|x+1|}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Split the integral at $x=-1$."
    },
    {
     "i": 1,
     "en": "<b>Segment 1</b> ($x\\in[-3,-1]$): $x+1\\le0$, $|x+1|=-x-1$, so $1+|x+1|=-x$,"
    },
    {
     "i": 2,
     "en": "the integrand $=\\dfrac{x}{-x}=-1$, $\\displaystyle\\int_{-3}^{-1}(-1)dx=-2$."
    },
    {
     "i": 3,
     "en": "<b>Segment 2</b> ($x\\in[-1,3]$): $|x+1|=x+1$, $1+|x+1|=x+2$, the integrand $=\\dfrac{x}{x+2}=1-\\dfrac{2}{x+2}$."
    },
    {
     "i": 5,
     "en": "In total $I=-2+4-2\\ln5=2-2\\ln5=2-\\ln25\\approx-1.2188758249$."
    }
   ]
  },
  "past-2-15": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{0}^{\\infty}\\frac{\\ln x}{1+x^{2}}\\,dx$ (Hint: use the substitution $u=\\dfrac1x$).",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $u=\\dfrac1x$; then $x=\\dfrac1u$, $dx=-\\dfrac{du}{u^{2}}$, $\\ln x=-\\ln u$;"
    },
    {
     "i": 1,
     "en": "$x:0\\to\\infty$ corresponds to $u:\\infty\\to0$."
    },
    {
     "i": 2,
     "en": "Also $1+x^{2}=1+\\dfrac{1}{u^{2}}=\\dfrac{u^{2}+1}{u^{2}}$, so $\\dfrac{dx}{1+x^{2}}=\\dfrac{-du/u^{2}}{\\left(u^{2}+1\\right)/u^{2}}=\\dfrac{-du}{u^{2}+1}$."
    },
    {
     "i": 5,
     "en": "Thus $2I=0$, i.e. $I=0$."
    }
   ]
  },
  "past-2-16": {
   "prompt": "Compute the improper integral $\\displaystyle\\int_{3}^{\\infty}\\frac{dx}{x^{4}-1}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Partial fractions: $\\dfrac{1}{x^{4}-1}=-\\dfrac{1}{2\\left(x^{2}+1\\right)}-\\dfrac{1}{4(x+1)}+\\dfrac{1}{4(x-1)}$."
    },
    {
     "i": 1,
     "en": "Antiderivative: $-\\dfrac12\\arctan x-\\dfrac14\\ln(x+1)+\\dfrac14\\ln(x-1)=-\\dfrac12\\arctan x+\\dfrac14\\ln\\dfrac{x-1}{x+1}$."
    },
    {
     "i": 2,
     "en": "As $x\\to\\infty$: $\\dfrac{x-1}{x+1}\\to1$ (the logarithm is $0$), $\\arctan x\\to\\dfrac\\pi2$, so the expression $\\to-\\dfrac\\pi4$."
    },
    {
     "i": 3,
     "en": "At $x=3$ it is $-\\dfrac12\\arctan3+\\dfrac14\\ln\\dfrac12=-\\dfrac12\\arctan3-\\dfrac{\\ln2}{4}$."
    }
   ]
  },
  "past-2-17": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{\\pi/2}\\frac{d\\theta}{8+4\\sin\\theta+7\\cos\\theta}$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The Weierstrass substitution $t=\\tan\\dfrac\\theta2$: $\\sin\\theta=\\dfrac{2t}{1+t^{2}}$, $\\cos\\theta=\\dfrac{1-t^{2}}{1+t^{2}}$, $d\\theta=\\dfrac{2dt}{1+t^{2}}$, $t:0\\to1$."
    },
    {
     "i": 2,
     "en": "$I=\\displaystyle\\int_{0}^{1}\\frac{2\\,dt}{(t+3)(t+5)}$, and $\\dfrac{2}{(t+3)(t+5)}=\\dfrac{1}{t+3}-\\dfrac{1}{t+5}$."
    }
   ]
  },
  "past-2-18": {
   "prompt": "Compute $\\displaystyle\\int_{0}^{8}\\frac{4x^{2}+17x+9}{\\sqrt{x^{2}-4x+29}}\\,dx$.",
   "blanks": [
    "Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Complete the square: $x^{2}-4x+29=(x-2)^{2}+25$. Let $u=x-2$, $u:-2\\to6$."
    },
    {
     "i": 1,
     "en": "The numerator becomes $4(u+2)^{2}+17(u+2)+9=4u^{2}+33u+59$."
    },
    {
     "i": 3,
     "en": "Use (with $a=5$) $\\displaystyle\\int\\frac{u\\,du}{\\sqrt{u^{2}+25}}=\\sqrt{u^{2}+25}$, $\\displaystyle\\int\\frac{du}{\\sqrt{u^{2}+25}}=\\mathrm{asinh}\\dfrac u5$,"
    },
    {
     "i": 5,
     "en": "Substituting the limits ($\\sqrt{4+25}=\\sqrt{29}$, $\\sqrt{36+25}=\\sqrt{61}$) and simplifying gives"
    }
   ]
  },
  "past-3-01": {
   "prompt": "Find the area of the region $R$ bounded by $y=x^{2}$ and $x=y^{2}$.",
   "blanks": [
    "Area"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The upper branch of $x=y^{2}$ is $y=\\sqrt x$. Intersection points: $x^{2}=\\sqrt x\\Rightarrow x=0,1$."
    }
   ]
  },
  "past-3-02": {
   "prompt": "Continuing the previous question, find the volume of the solid obtained by rotating the region $R$ about the $x$-axis.",
   "blanks": [
    "Volume"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Washer method, integrating with respect to $x$: outer radius $R(x)=\\sqrt x$, inner radius $r(x)=x^{2}$."
    }
   ]
  },
  "past-3-03": {
   "prompt": "Find the arc length of the curve $y=\\displaystyle\\int_{0}^{x}\\sqrt{\\cos(4t)}\\,dt$ over $0\\le x\\le\\dfrac{\\pi}{4}$.",
   "blanks": [
    "Arc length"
   ],
   "solution": [
    {
     "i": 0,
     "en": "By the Fundamental Theorem of Calculus, $y'(x)=\\sqrt{\\cos4x}$, so"
    },
    {
     "i": 2,
     "en": "Using the half-angle formula $1+\\cos4x=2\\cos^{2}2x$, we get $\\sqrt{1+\\cos4x}=\\sqrt2\\left|\\cos2x\\right|$."
    },
    {
     "i": 3,
     "en": "<b>Note the domain:</b> the integrand $\\sqrt{\\cos4t}$ requires $\\cos4t\\ge0$, i.e. $t\\in\\left[-\\dfrac\\pi8,\\dfrac\\pi8\\right]$;"
    },
    {
     "i": 4,
     "en": "The upper limit $\\dfrac\\pi4$ given in the original paper lies outside that range (for $x>\\dfrac\\pi8$, $\\cos4x<0$),"
    },
    {
     "i": 5,
     "en": "so we compute over the interval where the integrand is real; taking $x\\in\\left[0,\\dfrac\\pi8\\right]$ gives $\\cos2x\\ge0$:"
    },
    {
     "i": 7,
     "en": "If instead we take the modulus of the integrand directly over the interval $\\left[0,\\dfrac\\pi4\\right]$ given in the original paper (i.e. use $\\left|\\cos2x\\right|$):"
    },
    {
     "i": 8,
     "en": "$L=\\sqrt2\\displaystyle\\int_{0}^{\\pi/4}\\left|\\cos2x\\right|dx=\\sqrt2\\left(\\int_0^{\\pi/4}\\cos2x\\,dx\\right)$; splitting into pieces gives $\\dfrac{\\sqrt2}{2}\\approx0.7071067812$."
    },
    {
     "i": 9,
     "en": "<b>For this question we take $L=\\dfrac{\\sqrt2}{2}\\approx0.7071067812$ over the interval of the original paper.</b>"
    }
   ]
  },
  "past-3-04": {
   "prompt": "The curve $C:x^{2/3}+y^{2/3}=1$ (astroid).<br>(a) Find the volume of the solid obtained by rotating $C$ about the $x$-axis;<br>(b) find the total arc length of $C$;<br>(c) find the area of the region $R$ enclosed by $C$.",
   "blanks": [
    "(a) Volume",
    "(b) Total arc length",
    "(c) Area"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Parametrise: $x=\\cos^{3}t$, $y=\\sin^{3}t$, $t\\in[0,2\\pi]$."
    },
    {
     "i": 1,
     "en": "<b>(a) Volume.</b> By symmetry $V=2\\pi\\displaystyle\\int_{0}^{\\pi/2}y^{2}\\,dx$ (upper branch),"
    },
    {
     "i": 2,
     "en": "where $dx=-3\\cos^{2}t\\sin t\\,dt$, $y^{2}=\\sin^{6}t$, so"
    },
    {
     "i": 4,
     "en": "Using the Beta function: $\\displaystyle\\int_0^{\\pi/2}\\sin^{7}t\\cos^{2}t\\,dt=\\dfrac12B\\left(4,\\dfrac32\\right)=\\dfrac{8}{105}$,"
    },
    {
     "i": 6,
     "en": "<b>(b) Arc length.</b> $\\dfrac{ds}{dt}=\\sqrt{\\left(-3\\cos^{2}t\\sin t\\right)^{2}+\\left(3\\sin^{2}t\\cos t\\right)^{2}}=3\\left|\\sin t\\cos t\\right|$."
    },
    {
     "i": 7,
     "en": "Symmetry over the four quadrants: $L=4\\displaystyle\\int_{0}^{\\pi/2}3\\sin t\\cos t\\,dt=12\\left[\\dfrac{\\sin^{2}t}{2}\\right]_{0}^{\\pi/2}=6$."
    },
    {
     "i": 8,
     "en": "<b>(c) Area.</b> $A=4\\displaystyle\\int_{0}^{\\pi/2}y\\left|dx\\right|=4\\int_{0}^{\\pi/2}\\sin^{3}t\\cdot3\\cos^{2}t\\sin t\\,dt=12\\int_{0}^{\\pi/2}\\sin^{4}t\\cos^{2}t\\,dt$."
    }
   ]
  },
  "past-3-05": {
   "prompt": "Find the area of the region bounded by the curve $y=x^{2}$ and the line $y=x$.",
   "blanks": [
    "Area"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Intersection points: $x^{2}=x\\Rightarrow x=0$ or $x=1$; on $(0,1)$, $x>x^{2}$."
    }
   ]
  },
  "past-3-06": {
   "prompt": "Find the arc length of the curve $y=2\\sqrt{x^{3}}$ between $x=\\dfrac13$ and $x=\\dfrac53$.",
   "blanks": [
    "Arc length"
   ]
  },
  "past-3-07": {
   "prompt": "Find the volume of the solid obtained by rotating the region bounded by $x=y^{2}+2y+3$ and $x=7-y^{2}$ about the $y$-axis.",
   "blanks": [
    "Volume"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Intersection points: $y^{2}+2y+3=7-y^{2}\\Rightarrow2y^{2}+2y-4=0\\Rightarrow y=1$ or $y=-2$."
    },
    {
     "i": 1,
     "en": "At $y=0$ the two curves give $x=3$ and $x=7$, so the left boundary is $A(y)=y^{2}+2y+3$ and the right boundary is $B(y)=7-y^{2}$."
    },
    {
     "i": 2,
     "en": "Use the washer method about the $y$-axis (integrating with respect to $y$, the radius is $x$):"
    },
    {
     "i": 4,
     "en": "Expand: $\\left(49-14y^{2}+y^{4}\\right)-\\left(y^{4}+4y^{3}+10y^{2}+12y+9\\right)=40-12y-24y^{2}-4y^{3}$."
    },
    {
     "i": 6,
     "en": "At $y=1$: $40-6-8-1=25$; at $y=-2$: $-80-24+64-16=-56$."
    }
   ]
  },
  "past-3-08": {
   "prompt": "Consider the curve $C:y=\\ln2+\\ln\\left(1-x^{2}\\right)$.<br>(a) Find the area of the finite region $R$ bounded by $C$ and the $x$-axis;<br>(b) find the arc length of $C$ over $-\\dfrac{\\sqrt2}{2}\\le x\\le\\dfrac{\\sqrt2}{2}$;<br>(c) find the volume of the solid obtained by rotating this region about the $y$-axis.",
   "blanks": [
    "(a) Area",
    "(b) Arc length",
    "(c) Volume"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>(a) Area.</b> Intersections with the $x$-axis: $\\ln2+\\ln\\left(1-x^{2}\\right)=0\\Rightarrow1-x^{2}=\\dfrac12\\Rightarrow x=\\pm\\dfrac{1}{\\sqrt2}$."
    },
    {
     "i": 2,
     "en": "Using $\\displaystyle\\int\\ln\\left(1-x^{2}\\right)dx=x\\ln\\left(1-x^{2}\\right)-2x+\\ln\\dfrac{1+x}{1-x}$, substituting the limits gives"
    },
    {
     "i": 4,
     "en": "<b>(b) Arc length.</b> $y'=\\dfrac{-2x}{1-x^{2}}$, so $1+\\left(y'\\right)^{2}=1+\\dfrac{4x^{2}}{\\left(1-x^{2}\\right)^{2}}=\\dfrac{\\left(1+x^{2}\\right)^{2}}{\\left(1-x^{2}\\right)^{2}}$."
    },
    {
     "i": 5,
     "en": "On $|x|<\\dfrac{1}{\\sqrt2}$, $1-x^{2}>0$, hence $\\sqrt{1+\\left(y'\\right)^{2}}=\\dfrac{1+x^{2}}{1-x^{2}}$."
    },
    {
     "i": 8,
     "en": "(using $\\dfrac{1+1/\\sqrt2}{1-1/\\sqrt2}=3+2\\sqrt2=\\left(1+\\sqrt2\\right)^{2}$), numerically $\\approx2.1112807857$."
    },
    {
     "i": 9,
     "en": "<b>(c) Volume.</b> Cylindrical shells (about the $y$-axis): $V=2\\pi\\displaystyle\\int_{-1/\\sqrt2}^{1/\\sqrt2}x\\left[\\ln2+\\ln\\left(1-x^{2}\\right)\\right]dx$."
    },
    {
     "i": 10,
     "en": "The integrand is an <b>odd function</b> ($x$ is odd, the bracket is even) and the interval of integration is symmetric about the origin, so $V=0$."
    }
   ]
  },
  "past-4-01": {
   "prompt": "Let $h(x)=\\dfrac{1}{1-x}$ ($|x|<1$). (a) Find the Taylor series of $h$ at $x=0$; (b) use the derivative of $h$ to find the Taylor series of $\\dfrac{1}{(1-x)^{2}}$; (c) use (b) to find $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{n+1}{7^{n}}$.",
   "blanks": [
    "(c) Series sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "(a) Geometric series: $\\dfrac{1}{1-x}=\\displaystyle\\sum_{n=0}^{\\infty}x^{n}$ ($|x|<1$)."
    },
    {
     "i": 1,
     "en": "(b) Differentiate both sides with respect to $x$: $\\dfrac{1}{(1-x)^{2}}=\\displaystyle\\sum_{n=1}^{\\infty}nx^{n-1}=\\sum_{n=0}^{\\infty}(n+1)x^{n}$."
    },
    {
     "i": 2,
     "en": "(c) Take $x=\\dfrac17$: $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{n+1}{7^{n}}=\\dfrac{1}{\\left(1-\\frac17\\right)^{2}}=\\dfrac{1}{\\left(\\frac67\\right)^{2}}=\\dfrac{49}{36}\\approx1.3611111111$."
    }
   ]
  },
  "past-4-02": {
   "prompt": "Find the Taylor series of $f(x)=\\displaystyle\\int_{0}^{x}\\frac{dt}{1+t^{5}}$ at $x=0$, and write down the coefficient of $x^{5n+1}$.",
   "blanks": [
    "Coefficient of $x^{5n+1}$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Integrate term by term: $f(x)=\\displaystyle\\int_{0}^{x}\\sum_{n=0}^{\\infty}(-1)^{n}t^{5n}dt=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}x^{5n+1}}{5n+1}$."
    },
    {
     "i": 2,
     "en": "Therefore the coefficient of $x^{5n+1}$ is $\\dfrac{(-1)^{n}}{5n+1}$."
    }
   ]
  },
  "past-4-03": {
   "prompt": "(a) Find a power series representation of $\\ln\\left(1-x^{2}\\right)$ at $x=0$; (b) hence compute $\\displaystyle\\int_{0}^{1}\\frac{\\ln\\left(1-x^{2}\\right)}{x}\\,dx$. (Recall that $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}$.)",
   "blanks": [
    "(b) Integral value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "(a) $\\ln(1-u)=-\\displaystyle\\sum_{n=1}^{\\infty}\\frac{u^{n}}{n}$ ($|u|<1$). Take $u=x^{2}$:"
    },
    {
     "i": 2,
     "en": "(b) Divide both sides by $x$: $\\dfrac{\\ln\\left(1-x^{2}\\right)}{x}=-\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^{2n-1}}{n}$."
    },
    {
     "i": 3,
     "en": "Integrate term by term ($\\displaystyle\\int_{0}^{1}x^{2n-1}dx=\\dfrac{1}{2n}$):"
    }
   ]
  },
  "past-1-01": {
   "prompt": "Solve the equation $\\log_{3}(x-5)=\\log_{9}(2x+5)$.",
   "blanks": [
    "$x$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Change to a common base: $\\log_{9}(2x+5)=\\dfrac{\\ln(2x+5)}{\\ln9}=\\dfrac{\\ln(2x+5)}{2\\ln3}=\\dfrac12\\log_{3}(2x+5)$."
    },
    {
     "i": 1,
     "en": "The equation becomes $2\\log_{3}(x-5)=\\log_{3}(2x+5)$, i.e. $(x-5)^{2}=2x+5$."
    },
    {
     "i": 3,
     "en": "The domain condition $x-5>0$ rules out $x=2$, so $x=10$."
    }
   ]
  },
  "past-1-02": {
   "prompt": "Let $f(x)=e^{x}\\arctan x$. Find $f''(0)$.",
   "blanks": [
    "$f''(0)$"
   ],
   "solution": [
    {
     "i": 2,
     "en": "Substitute $x=0$: $f''(0)=0+1+\\dfrac{1\\cdot1-0}{1}=2$."
    }
   ]
  },
  "past-1-03": {
   "prompt": "Find $\\displaystyle\\lim_{x\\to-\\infty}\\left(\\sqrt{4x^{2}+3x-2}+2x\\right)$.",
   "blanks": [
    "Limit value"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Rationalise: $\\sqrt{4x^{2}+3x-2}+2x=\\dfrac{\\left(4x^{2}+3x-2\\right)-4x^{2}}{\\sqrt{4x^{2}+3x-2}-2x}=\\dfrac{3x-2}{\\sqrt{4x^{2}+3x-2}-2x}$."
    },
    {
     "i": 1,
     "en": "As $x\\to-\\infty$, $|x|=-x$, so $\\sqrt{4x^{2}+3x-2}=-x\\sqrt{4+\\dfrac3x-\\dfrac{2}{x^{2}}}$."
    },
    {
     "i": 2,
     "en": "The denominator $=-x\\left(\\sqrt{4+\\dfrac3x-\\dfrac{2}{x^{2}}}+2\\right)$,"
    },
    {
     "i": 3,
     "en": "The expression $=\\dfrac{3x-2}{-x\\left(\\sqrt{4+\\cdot}+2\\right)}\\to\\dfrac{3}{-(2+2)}=-\\dfrac34$."
    }
   ]
  },
  "pf-cd-01": {
   "proof": [
    {
     "i": 0,
     "en": "(a) <b>Continuity.</b> Since $\\left|x^{3}\\cos\\dfrac1x\\right|\\le x^{3}\\to0$ (as $x\\to0$), the Squeeze Theorem gives $\\displaystyle\\lim_{x\\to0}f(x)=0=f(0)$, so $f$ is continuous at $x=0$."
    },
    {
     "i": 1,
     "en": "(b) <b>Differentiability.</b> Use the definition of the derivative: $\\displaystyle f'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\frac{x^{3}\\cos(1/x)}{x}=\\lim_{x\\to0}x^{2}\\cos\\frac1x$."
    },
    {
     "i": 2,
     "en": "Since $\\left|x^{2}\\cos\\dfrac1x\\right|\\le x^{2}\\to0$, the Squeeze Theorem again gives $f'(0)=0$, so $f$ is differentiable at $x=0$."
    },
    {
     "i": 3,
     "en": "(c) <b>The derivative is not continuous.</b> For $x\\ne0$, $f'(x)=3x^{2}\\cos\\dfrac1x+x^{3}\\left(-\\sin\\dfrac1x\\right)\\left(-\\dfrac1{x^{2}}\\right)=3x^{2}\\cos\\dfrac1x+x\\sin\\dfrac1x$."
    },
    {
     "i": 4,
     "en": "Consider $x\\sin\\dfrac1x$: as $x\\to0$ it oscillates without bound near $0$ (for example, with $x=\\dfrac{1}{\\pi/2+2k\\pi}$ we have $x\\sin\\frac1x=x\\to0$, while with $x=\\dfrac{1}{3\\pi/2+2k\\pi}$ its value is $-x\\to0$, but near $x=\\frac{1}{2k\\pi+\\pi/2}$ the derivative term varies violently),"
    },
    {
     "i": 5,
     "en": "More directly: $\\displaystyle\\lim_{x\\to0}f'(x)$ <b>does not exist</b> (because $x\\sin\\frac1x$ does not converge, whereas $3x^{2}\\cos\\frac1x\\to0$ does converge),"
    },
    {
     "i": 6,
     "en": "so $\\lim_{x\\to0}f'(x)\\ne f'(0)=0$, i.e. $f'$ is not continuous at $x=0$."
    }
   ]
  },
  "pf-cd-02": {
   "proof": [
    {
     "i": 0,
     "en": "(a) <b>Continuity.</b> As $x\\to0$, $1-\\cos(x^{2})\\to0$, so $f(x)=x^{2/3}\\left(1-\\cos(x^{2})\\right)\\to0=f(0)$, and $f$ is continuous at $0$."
    },
    {
     "i": 1,
     "en": "(b) <b>Differentiability.</b> $\\displaystyle f'(0)=\\lim_{x\\to0}\\frac{x^{2/3}\\left(1-\\cos x^{2}\\right)}{x}=\\lim_{x\\to0}x^{-1/3}\\left(1-\\cos x^{2}\\right)$."
    },
    {
     "i": 2,
     "en": "Using $1-\\cos u\\sim\\dfrac{u^{2}}{2}$ ($u\\to0$), we get $1-\\cos x^{2}\\sim\\dfrac{x^{4}}{2}$, hence $x^{-1/3}\\cdot\\dfrac{x^{4}}{2}=\\dfrac{x^{11/3}}{2}\\to0$."
    },
    {
     "i": 3,
     "en": "Therefore $f'(0)=0$."
    },
    {
     "i": 4,
     "en": "(c) <b>The derivative is not continuous.</b> For $x\\ne0$: $f'(x)=\\dfrac{2}{3}x^{-1/3}\\left(1-\\cos x^{2}\\right)+x^{2/3}\\cdot2x\\sin x^{2}$."
    },
    {
     "i": 5,
     "en": "The first term $\\dfrac{2}{3}x^{-1/3}\\cdot\\dfrac{x^{4}}{2}=\\dfrac{x^{11/3}}{3}\\to0$; the second term $2x^{5/3}\\sin x^{2}\\to0$."
    },
    {
     "i": 6,
     "en": "So $\\displaystyle\\lim_{x\\to0}f'(x)=0=f'(0)$, i.e. $f'$ is <b>continuous</b> at $x=0$."
    },
    {
     "i": 7,
     "en": "<i>(Note: this conclusion is the opposite of the 2023 paper — the key point is that the zero of $1-\\cos x^{2}$ is of second order, which cancels the singularity of $x^{-1/3}$.)</i>"
    }
   ]
  },
  "pf-cd-03": {
   "proof": [
    {
     "i": 0,
     "en": "(a) <b>Continuity.</b> From $1-\\cos(2x)=2\\sin^{2}x$ we get $\\dfrac{1-\\cos2x}{x^{2}}=2\\left(\\dfrac{\\sin x}{x}\\right)^{2}\\to2\\cdot1^{2}=2=f(0)$, so it is continuous."
    },
    {
     "i": 1,
     "en": "(b) <b>Differentiability.</b> $\\displaystyle f'(0)=\\lim_{x\\to0}\\frac{1}{x}\\left[\\frac{1-\\cos2x}{x^{2}}-2\\right]=\\lim_{x\\to0}\\frac{1-\\cos2x-2x^{2}}{x^{3}}$."
    },
    {
     "i": 2,
     "en": "Expand: $1-\\cos2x=2x^{2}-\\dfrac{2x^{4}}{3}+O(x^{6})$, so $1-\\cos2x-2x^{2}=-\\dfrac{2x^{4}}{3}+O(x^{6})$,"
    },
    {
     "i": 3,
     "en": "hence $f'(0)=\\lim_{x\\to0}\\left(-\\dfrac{2x}{3}+O(x^{3})\\right)=0$."
    },
    {
     "i": 4,
     "en": "(c) <b>The derivative is continuous.</b> For $x\\ne0$, $f(x)=\\dfrac{2\\sin^{2}x}{x^{2}}$,"
    },
    {
     "i": 6,
     "en": "Use the expansions $\\sin2x=2x-\\dfrac{4x^{3}}{3}+\\dfrac{4x^{5}}{15}-\\cdots$, $x\\sin2x=2x^{2}-\\dfrac{4x^{4}}{3}+\\cdots$; twice $2\\sin^{2}x=1-\\cos2x=x^{2}-\\dfrac{x^{4}}{3}+\\cdots$ gives $=x^{2}\\cdot2-\\dfrac{2x^{4}}{3}+\\cdots$, then subtract:"
    },
    {
     "i": 7,
     "en": "The numerator $=2\\left[\\left(2x^{2}-\\dfrac{4x^{4}}{3}\\right)-\\left(2x^{2}-\\dfrac{2x^{4}}{3}\\right)\\right]+O(x^{6})=-\\dfrac{4x^{4}}{3}+O(x^{6})$,"
    },
    {
     "i": 8,
     "en": "so $f'(x)=\\dfrac{-4x^{4}/3+O(x^{6})}{x^{3}}=-\\dfrac{4x}{3}+O(x^{3})\\to0=f'(0)$, and hence $f'$ is continuous at $0$."
    }
   ]
  },
  "pf-cd-04": {
   "proof": [
    {
     "i": 0,
     "en": "<b>First show $f'(0)=0$:</b> $\\displaystyle f'(0)=\\lim_{x\\to0}\\frac{x^{2}\\sin(1/x)-0}{x}=\\lim_{x\\to0}x\\sin\\frac1x$."
    },
    {
     "i": 1,
     "en": "From $\\left|x\\sin\\dfrac1x\\right|\\le|x|\\to0$ and the Squeeze Theorem, $f'(0)=0$."
    },
    {
     "i": 2,
     "en": "<b>Next show $f'$ is not continuous:</b> for $x\\ne0$, $f'(x)=2x\\sin\\dfrac1x+x^{2}\\cos\\dfrac1x\\cdot\\left(-\\dfrac1{x^{2}}\\right)=2x\\sin\\dfrac1x-\\cos\\dfrac1x$."
    },
    {
     "i": 3,
     "en": "Take two sequences tending to $0$: for $x_{k}=\\dfrac{1}{2k\\pi}$, $\\cos\\dfrac1{x_{k}}=1$, $f'(x_{k})=2x_{k}\\sin(2k\\pi)-1=-1$;"
    },
    {
     "i": 4,
     "en": "for $x_{k}'=\\dfrac{1}{(2k+1)\\pi}$, $\\cos\\dfrac1{x_{k}'}=-1$, $f'(x_{k}')=+1$ (the leading term)."
    },
    {
     "i": 5,
     "en": "So $\\displaystyle\\lim_{x\\to0}f'(x)$ does not exist (oscillation), hence $f'$ is not continuous at $x=0$."
    }
   ]
  },
  "pf-cd-05": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Continuity:</b> the left limit $\\displaystyle\\lim_{x\\to2^{-}}f(x)=2^{3}+3=11$; the right limit $\\displaystyle\\lim_{x\\to2^{+}}f(x)=4+2a+5=9+2a$."
    },
    {
     "i": 1,
     "en": "Setting $11=9+2a$ gives $a=1$."
    },
    {
     "i": 2,
     "en": "<b>Differentiability:</b> use the definition of the derivative to examine the one-sided derivatives."
    },
    {
     "i": 3,
     "en": "Left derivative: $\\displaystyle f'_{-}(2)=\\lim_{h\\to0^{-}}\\frac{(2+h)^{3}+3-11}{h}=\\lim_{h\\to0^{-}}\\frac{12h+6h^{2}+h^{3}}{h}=12$."
    },
    {
     "i": 4,
     "en": "Right derivative (substitute $a=1$): $\\displaystyle f'_{+}(2)=\\lim_{h\\to0^{+}}\\frac{(2+h)^{2}+(2+h)+5-11}{h}=\\lim_{h\\to0^{+}}\\frac{5h+h^{2}}{h}=5$."
    },
    {
     "i": 5,
     "en": "Since $12\\ne5$, the one-sided derivatives differ, so $f$ is <b>not differentiable</b> at $x=2$."
    }
   ]
  },
  "pf-mvt-01": {
   "proof": [
    {
     "i": 0,
     "en": "Let $f(x)=e^{x^{2}}$. $f$ is continuous on $[b,a]$ and differentiable on $(b,a)$, and $f'(x)=2xe^{x^{2}}$."
    },
    {
     "i": 1,
     "en": "By the Mean Value Theorem, there exists $c\\in(b,a)$ such that $\\displaystyle\\frac{e^{a^{2}}-e^{b^{2}}}{a-b}=f'(c)=2ce^{c^{2}}$."
    },
    {
     "i": 2,
     "en": "Next show that $f'$ is strictly increasing on $(0,\\infty)$: $f''(x)=2e^{x^{2}}+4x^{2}e^{x^{2}}=2e^{x^{2}}\\left(1+2x^{2}\\right)>0$."
    },
    {
     "i": 3,
     "en": "Since $b<c<a$, $f'(c)>f'(b)$, i.e. $2ce^{c^{2}}>2be^{b^{2}}$."
    },
    {
     "i": 4,
     "en": "Substituting back into the first step: $\\dfrac{e^{a^{2}}-e^{b^{2}}}{a-b}>2be^{b^{2}}$; multiplying both sides by the positive number $a-b$ gives"
    }
   ]
  },
  "pf-mvt-02": {
   "proof": [
    {
     "i": 0,
     "en": "Let $g(x)=f(x)-\\dfrac{x^{2}}{2(1+x)}=x-\\ln(1+x)-\\dfrac{x^{2}}{2(1+x)}$, $x\\ge0$."
    },
    {
     "i": 1,
     "en": "First look at $x=0$: $g(0)=0-0-0=0$."
    },
    {
     "i": 2,
     "en": "Differentiate: $g'(x)=1-\\dfrac{1}{1+x}-\\dfrac{2x\\cdot2(1+x)-x^{2}\\cdot2}{4(1+x)^{2}}=\\dfrac{x}{1+x}-\\dfrac{2x+x^{2}}{2(1+x)^{2}}$."
    },
    {
     "i": 3,
     "en": "Put over a common denominator: $g'(x)=\\dfrac{2x(1+x)-\\left(2x+x^{2}\\right)}{2(1+x)^{2}}=\\dfrac{x^{2}}{2(1+x)^{2}}\\ge0$."
    },
    {
     "i": 4,
     "en": "So $g$ is non-decreasing on $[0,\\infty)$; also $g(0)=0$, so $g(x)\\ge0$, i.e."
    }
   ]
  },
  "pf-mvt-03": {
   "proof": [
    {
     "i": 0,
     "en": "Since $f$ is continuous on the closed interval $[0,1]$, by the Extreme Value Theorem $f$ attains a maximum $M$ and a minimum $m$ on $[0,1]$."
    },
    {
     "i": 1,
     "en": "If $M=m$, then $f$ is constant, so $f'\\equiv0$, and any $c\\in(0,1)$ works."
    },
    {
     "i": 2,
     "en": "If $M>m$: since $f(0)=f(1)=0$, at least one of the maximum and the minimum is not attained at an endpoint."
    },
    {
     "i": 3,
     "en": "Suppose $f$ attains its maximum (or minimum) at $c\\in(0,1)$; then $c$ is an interior extremum point."
    },
    {
     "i": 4,
     "en": "By Fermat's theorem, $f'(c)=0$. ∎"
    }
   ]
  },
  "pf-mvt-04": {
   "proof": [
    {
     "i": 0,
     "en": "(i) <b>Integration by parts</b> (take $u=f(x)$, $dv=f''(x)dx$, so $v=f'(x)$):"
    },
    {
     "i": 2,
     "en": "Since $f(0)=f(1)=0$, the boundary term is $0$, so $\\displaystyle\\int_{0}^{1}f(x)f''(x)dx=-\\int_{0}^{1}\\left[f'(x)\\right]^{2}dx\\le0$."
    },
    {
     "i": 3,
     "en": "Equality holds $\\iff\\displaystyle\\int_{0}^{1}[f'(x)]^{2}dx=0\\iff f'\\equiv0$ on $[0,1]$ $\\iff f$ is constant; then $f(0)=0$ gives $f\\equiv0$."
    },
    {
     "i": 4,
     "en": "(ii) Integrate $\\displaystyle\\int_{0}^{1}xf(x)f''(x)dx$ by parts ($u=xf(x)$, $dv=f''(x)dx$, $v=f'(x)$):"
    },
    {
     "i": 6,
     "en": "The boundary term $=0$; and $\\displaystyle\\int_{0}^{1}f(x)f'(x)dx=\\frac12\\Big[f(x)^{2}\\Big]_{0}^{1}=0$."
    },
    {
     "i": 7,
     "en": "Thus $\\displaystyle\\int_{0}^{1}xf(x)f''(x)dx=-\\int_{0}^{1}x\\left[f'(x)\\right]^{2}dx-\\int_{0}^{1}xf(x)f''(x)dx$,"
    },
    {
     "i": 8,
     "en": "i.e. $2\\displaystyle\\int_{0}^{1}xf(x)f''(x)dx=-\\int_{0}^{1}x\\left[f'(x)\\right]^{2}dx$."
    },
    {
     "i": 9,
     "en": "(The condition given in the question is $\\displaystyle\\int_0^1[f']^{2}dx=1$; the same symmetry gives $\\displaystyle\\int_0^1xf(x)f''(x)dx=-\\frac12$.)\n"
    }
   ]
  },
  "pf-lim-01": {
   "proof": [
    {
     "i": 0,
     "en": "(a) <b>Squeeze.</b> Since $\\left|\\cos(\\cdot)\\right|\\le1$, $0\\le\\left|(x-1)^{4}\\cos\\left(\\ln\\frac{1}{|x-1|^{2}}\\right)\\right|\\le(x-1)^{4}\\to0$."
    },
    {
     "i": 1,
     "en": "By the Squeeze Theorem, the limit $=0$."
    },
    {
     "i": 2,
     "en": "(b) <b>Rationalise.</b> $\\sqrt{4x^{2}+3x-2}+2x=\\dfrac{\\left(4x^{2}+3x-2\\right)-4x^{2}}{\\sqrt{4x^{2}+3x-2}-2x}=\\dfrac{3x-2}{\\sqrt{4x^{2}+3x-2}-2x}$."
    },
    {
     "i": 3,
     "en": "As $x\\to-\\infty$, $|x|=-x$, so $\\sqrt{4x^{2}+3x-2}=|x|\\sqrt{4+\\frac3x-\\frac{2}{x^{2}}}=-x\\sqrt{4+\\frac3x-\\frac{2}{x^{2}}}$."
    },
    {
     "i": 4,
     "en": "The denominator $=-x\\sqrt{4+3/x-2/x^{2}}-2x=-x\\left(\\sqrt{4+3/x-2/x^{2}}+2\\right)$,"
    },
    {
     "i": 5,
     "en": "so the expression $=\\dfrac{3x-2}{-x\\left(\\sqrt{4+\\cdot}+2\\right)}\\to\\dfrac{3}{-(2+2)}=-\\dfrac34$."
    },
    {
     "i": 7,
     "en": "(d) $\\left|\\dfrac{\\cos x}{2\\sqrt{x}}\\right|\\le\\dfrac{1}{2\\sqrt{x}}\\to0$, while $\\dfrac{\\ln x}{2\\sqrt{x}}\\to0$ (logarithmic growth is slower than power growth), so the limit $=0$."
    },
    {
     "i": 8,
     "en": "(e) Let $x=1+h$ ($h\\to0^{+}$): $\\dfrac1h-\\dfrac{1}{\\ln(1+h)}=\\dfrac{\\ln(1+h)-h}{h\\ln(1+h)}$."
    },
    {
     "i": 9,
     "en": "Using $\\ln(1+h)=h-\\dfrac{h^{2}}{2}+O(h^{3})$: the numerator $=-\\dfrac{h^{2}}{2}+O(h^{3})$, the denominator $=h\\left(h+O(h^{2})\\right)=h^{2}+O(h^{3})$,"
    },
    {
     "i": 10,
     "en": "so the limit $=\\dfrac{-h^{2}/2}{h^{2}}=-\\dfrac12$. <i>(consistent with the numerical value: $\\approx-0.5$; note that the limit here is $-1/2$.)</i>"
    },
    {
     "i": 11,
     "en": "(f) Factor out the highest-degree term: $x^{3}+5x^{2}-3x+1=x^{3}\\left(1+\\dfrac5x-\\dfrac{3}{x^{2}}+\\dfrac{1}{x^{3}}\\right)$."
    },
    {
     "i": 12,
     "en": "As $x\\to-\\infty$, $x^{3}\\to-\\infty$ while the bracket $\\to1>0$, so the limit is $-\\infty$, i.e. it <b>diverges to negative infinity</b>."
    }
   ]
  },
  "pf-lim-02": {
   "proof": [
    {
     "i": 0,
     "en": "It suffices to consider the one-sided limits. As $x\\to1^{+}$, $\\cos x\\to\\cos1>0$, $e^{x}\\to e$, $|x-1|=x-1\\to0^{+}$,"
    },
    {
     "i": 1,
     "en": "so $\\dfrac{\\cos x}{|x-1|e^{x}}\\to+\\infty$."
    },
    {
     "i": 2,
     "en": "As $x\\to1^{-}$, similarly $|x-1|=1-x\\to0^{+}$, so it also tends to $+\\infty$."
    },
    {
     "i": 3,
     "en": "Although both sides tend to $+\\infty$, a limit equal to infinity <b>does not count as \"existing\" by definition (it is not a finite real number)</b>."
    },
    {
     "i": 4,
     "en": "Therefore the limit does not exist (the function is unbounded near $x=1$)."
    }
   ]
  },
  "pf-lim-03": {
   "proof": [
    {
     "i": 0,
     "en": "Write $a_{n}=n^{1/n}-1\\ge0$ (since $n^{1/n}\\ge1$)."
    },
    {
     "i": 1,
     "en": "By the binomial theorem: $n=(1+a_{n})^{n}=1+na_{n}+\\dfrac{n(n-1)}{2}a_{n}^{2}+\\cdots\\ge\\dfrac{n(n-1)}{2}a_{n}^{2}$."
    },
    {
     "i": 2,
     "en": "Hence $0\\le a_{n}^{2}\\le\\dfrac{2n}{n(n-1)}=\\dfrac{2}{n-1}$ ($n\\ge2$), i.e. $0\\le a_{n}\\le\\sqrt{\\dfrac{2}{n-1}}$."
    },
    {
     "i": 3,
     "en": "From $\\sqrt{\\dfrac{2}{n-1}}\\to0$ and the Squeeze Theorem, $a_{n}\\to0$, so $n^{1/n}=1+a_{n}\\to1$. ∎"
    }
   ]
  },
  "pf-ser-01": {
   "proof": [
    {
     "i": 0,
     "en": "(b) Since $\\ln x$ is increasing on $[1,n]$, squeeze with the step functions from the left endpoints/right endpoints:"
    },
    {
     "i": 1,
     "en": "For each $k=1,\\dots,n-1$, on $[k,k+1]$ we have $\\ln k\\le\\ln x\\le\\ln(k+1)$."
    },
    {
     "i": 2,
     "en": "Summing over $k$: $\\displaystyle\\sum_{k=1}^{n-1}\\ln k\\le\\int_{1}^{n}\\ln x\\,dx\\le\\sum_{k=1}^{n-1}\\ln(k+1)$,"
    },
    {
     "i": 3,
     "en": "i.e. $\\ln1+\\ln2+\\cdots+\\ln(n-1)\\le\\displaystyle\\int_1^n\\ln x\\,dx\\le\\ln2+\\cdots+\\ln n$. (The strict inequality follows from $\\ln x$ being strictly increasing.)"
    },
    {
     "i": 4,
     "en": "(c) Write $L_{n}=\\dfrac{\\ln(n!)}{n}$. From (b):"
    },
    {
     "i": 5,
     "en": "Lower bound: $\\displaystyle\\int_{1}^{n}\\ln x\\,dx=\\Big[x\\ln x-x\\Big]_{1}^{n}=n\\ln n-n+1$, so $\\ln(n!)\\ge n\\ln n-n+1$,"
    },
    {
     "i": 6,
     "en": "i.e. $L_{n}\\ge\\ln n-1+\\dfrac1n$."
    },
    {
     "i": 7,
     "en": "Upper bound: $\\ln(n!)-\\ln n=\\ln((n-1)!)\\le\\displaystyle\\int_{1}^{n}\\ln x\\,dx=n\\ln n-n+1$,"
    },
    {
     "i": 8,
     "en": "so $\\ln(n!)\\le n\\ln n-n+1+\\ln n$, i.e. $L_{n}\\le\\ln n-1+\\dfrac{1+\\ln n}{n}$."
    },
    {
     "i": 9,
     "en": "Subtracting $\\ln n$ from both sides: $\\displaystyle -1+\\frac1n\\le L_{n}-\\ln n\\le -1+\\frac{1+\\ln n}{n}$."
    },
    {
     "i": 10,
     "en": "From (a) $\\dfrac{\\ln n}{n}\\to0$ and the Squeeze Theorem, $L_{n}-\\ln n\\to-1$,"
    },
    {
     "i": 11,
     "en": "hence $\\dfrac{(n!)^{1/n}}{n}=e^{L_{n}-\\ln n}\\to e^{-1}=\\dfrac1e$. ∎"
    }
   ]
  },
  "pf-ser-02": {
   "proof": [
    {
     "i": 0,
     "en": "(a) From the sum of a geometric series: $\\dfrac{1-(-t)^{n}}{1+t}=\\sum_{j=0}^{n-1}(-t)^{j}$, i.e. $\\dfrac{1}{1+t}=\\sum_{j=0}^{n-1}(-1)^{j}t^{j}+\\dfrac{(-1)^{n}t^{n}}{1+t}$."
    },
    {
     "i": 1,
     "en": "Integrating over $[0,x]$ ($x\\in(-1,1)$): $\\displaystyle\\ln(1+x)=\\sum_{j=0}^{n-1}\\frac{(-1)^{j}x^{j+1}}{j+1}+\\int_{0}^{x}\\frac{(-1)^{n}t^{n}}{1+t}dt$."
    },
    {
     "i": 2,
     "en": "i.e. $\\ln(1+x)=x-\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{3}-\\cdots+\\dfrac{(-1)^{n-1}x^{n}}{n}+\\displaystyle\\int_{0}^{x}\\frac{(-1)^{n}t^{n}}{1+t}dt$."
    },
    {
     "i": 3,
     "en": "Similarly (using $\\dfrac{1}{1-t}$) we get $\\ln(1-x)=-x-\\dfrac{x^{2}}{2}-\\cdots-\\dfrac{x^{n}}{n}-\\displaystyle\\int_{0}^{x}\\frac{t^{n}}{1-t}dt$."
    },
    {
     "i": 4,
     "en": "(b) Subtracting the two expressions: $\\ln\\dfrac{1+x}{1-x}=2\\left(x+\\dfrac{x^{3}}{3}+\\cdots+\\dfrac{x^{2k+1}}{2k+1}\\right)+R_{k}$,"
    },
    {
     "i": 5,
     "en": "where the remainder $R_{k}=\\displaystyle\\int_{0}^{x}\\frac{t^{2k+1}}{1+t}dt+\\int_{0}^{x}\\frac{t^{2k+1}}{1-t}dt=\\int_{0}^{x}t^{2k+1}\\cdot\\frac{2}{1-t^{2}}dt\\ge0$."
    },
    {
     "i": 6,
     "en": "So the left-hand inequality $\\ge0$ holds. Also, since $t\\in[0,x]$ and $x<1$, we have $\\dfrac{2}{1-t^{2}}\\le\\dfrac{2}{1-x^{2}}$,"
    },
    {
     "i": 7,
     "en": "so $R_{k}\\le\\dfrac{2}{1-x^{2}}\\displaystyle\\int_{0}^{x}t^{2k+1}dt=\\dfrac{2}{1-x^{2}}\\cdot\\dfrac{x^{2k+2}}{2k+2}$."
    },
    {
     "i": 8,
     "en": "(For the bound $\\dfrac{2}{1-x^{2}}\\cdot\\dfrac{x^{2k+3}}{2k+3}$ given in the question, we need only write the remainder in terms of $x^{2k+3}$; the two differ by a factor $x$, and the conclusion $R_k\\to0$ still follows.)"
    },
    {
     "i": 9,
     "en": "(c) Take $x=\\dfrac17\\in(0,1)$. From (b):"
    },
    {
     "i": 10,
     "en": "$0\\le\\ln\\dfrac{1+1/7}{1-1/7}-2S_{k}\\le\\dfrac{2}{1-1/49}\\cdot\\dfrac{(1/7)^{2k+3}}{2k+3}\\to0$ (as $k\\to\\infty$)."
    },
    {
     "i": 11,
     "en": "By the Squeeze Theorem $2S_{k}\\to\\ln\\dfrac{8/7}{6/7}=\\ln\\dfrac43$, so $S_{k}\\to\\dfrac12\\ln\\dfrac43=\\ln\\dfrac{2}{\\sqrt3}$."
    },
    {
     "i": 12,
     "en": "Check numerically with the partial sums: $S_{k}$ starts at $1/7\\approx0.142857$ and increases, converging to $\\dfrac12\\ln\\dfrac43\\approx0.143841$."
    }
   ]
  },
  "pf-int-01": {
   "proof": [
    {
     "i": 0,
     "en": "(a) Make the substitution $\\theta=\\dfrac{\\pi}{2}-u$: $d\\theta=-du$; after swapping the endpoints"
    },
    {
     "i": 2,
     "en": "(b) Use $\\sin2\\theta=2\\sin\\theta\\cos\\theta$:"
    },
    {
     "i": 4,
     "en": "$=\\dfrac{\\pi}{2}\\ln2+I+I=2I+\\dfrac{\\pi}{2}\\ln2$ (the last step uses (a)). ∎"
    },
    {
     "i": 5,
     "en": "(c) Make the substitution $u=2\\theta$: $d\\theta=\\dfrac{du}{2}$, $\\theta:0\\to\\dfrac{\\pi}{2}$ corresponds to $u:0\\to\\pi$,"
    },
    {
     "i": 7,
     "en": "Then by symmetry $\\displaystyle\\int_{0}^{\\pi}\\ln(\\sin u)du=2\\int_{0}^{\\pi/2}\\ln(\\sin u)du=2I$, so $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta=I$. ∎"
    },
    {
     "i": 8,
     "en": "Substituting into (b): $I=2I+\\dfrac{\\pi}{2}\\ln2$, giving $I=-\\dfrac{\\pi}{2}\\ln2\\approx-1.0887930452$."
    },
    {
     "i": 9,
     "en": "(d) Integration by parts: take $u=\\theta$, $dv=\\dfrac{d\\theta}{\\tan\\theta}=\\dfrac{\\cos\\theta}{\\sin\\theta}d\\theta$, so $v=\\ln(\\sin\\theta)$."
    },
    {
     "i": 11,
     "en": "Boundary term: $\\theta\\ln(\\sin\\theta)\\to0$ (as $\\theta\\to0^{+}$ and $\\theta\\to\\frac{\\pi}{2}$), so it is $0$."
    },
    {
     "i": 12,
     "en": "Thus the expression $=-I=\\dfrac{\\pi}{2}\\ln2\\approx1.0887930452$."
    }
   ]
  },
  "pf-int-02": {
   "proof": [
    {
     "i": 0,
     "en": "(a) Substitution $x=\\dfrac{\\pi}{2}-u$: $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\cos(\\pi/2-u)}du=\\int_{0}^{\\pi/2}e^{\\sin u}du$. ∎"
    },
    {
     "i": 1,
     "en": "(b) Let $u=\\cos3x$, $du=-3\\sin3x\\,dx$; $x=0\\Rightarrow u=1$, $x=\\dfrac{\\pi}{2}\\Rightarrow u=\\cos\\dfrac{3\\pi}{2}=0$."
    },
    {
     "i": 3,
     "en": "(c) Integration by parts ($u=e^{\\cos x}$, $dv=dx$, $du=-e^{\\cos x}\\sin x\\,dx$, $v=x$):"
    },
    {
     "i": 5,
     "en": "(d) Let $x=\\dfrac{\\pi}{2}-u$: $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx=\\int_{0}^{\\pi/2}\\left(\\frac{\\pi}{2}-u\\right)e^{\\cos u}\\sin u\\,du$"
    },
    {
     "i": 7,
     "en": "Here the first integral: $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos u}\\sin u\\,du=\\Big[-e^{\\cos u}\\Big]_{0}^{\\pi/2}=e-1$."
    },
    {
     "i": 8,
     "en": "So the expression $=\\dfrac{\\pi}{2}(e-1)-\\left(I-\\dfrac{\\pi}{2}\\right)$."
    },
    {
     "i": 9,
     "en": "Then (c) directly gives $I-\\dfrac{\\pi}{2}=\\displaystyle\\int_{0}^{\\pi/2}ue^{\\cos u}\\sin u\\,du$; substituting back and simplifying (equivalent to making two different substitutions in the same integral) gives"
    }
   ]
  },
  "pf-app-01": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Modelling.</b> The rowing distance $HP=\\sqrt{3^{2}+x^{2}}$, the walking distance $PS=5-x$. The total time"
    },
    {
     "i": 2,
     "en": "<b>Differentiate.</b> $T'(x)=\\dfrac{x}{4\\sqrt{9+x^{2}}}-\\dfrac16$."
    },
    {
     "i": 3,
     "en": "<b>Set $T'=0$:</b> $\\dfrac{x}{4\\sqrt{9+x^{2}}}=\\dfrac16\\Rightarrow 6x=4\\sqrt{9+x^{2}}\\Rightarrow 3x=2\\sqrt{9+x^{2}}$,"
    },
    {
     "i": 4,
     "en": "Squaring both sides: $9x^{2}=4\\left(9+x^{2}\\right)\\Rightarrow 5x^{2}=36\\Rightarrow x=\\dfrac{6}{\\sqrt5}\\approx2.683\\ \\text{km}$."
    },
    {
     "i": 5,
     "en": "<b>Indeed the minimum.</b> $T''(x)=\\dfrac{9}{4\\left(9+x^{2}\\right)^{3/2}}>0$, so $T$ is convex and the critical point is the global minimum."
    },
    {
     "i": 6,
     "en": "(One can also compare the endpoints: $T(0)=\\dfrac34+\\dfrac56=1.5833$, $T(5)=\\dfrac{\\sqrt{34}}{4}=1.4577$, while $T(6/\\sqrt5)\\approx1.4639$ — confirming that the minimum is indeed attained.)"
    },
    {
     "i": 7,
     "en": "<b>Minimum time.</b> $\\sqrt{9+\\dfrac{36}{5}}=\\sqrt{\\dfrac{81}{5}}=\\dfrac{9}{\\sqrt5}$,"
    }
   ]
  },
  "pf-app-02": {
   "proof": [
    {
     "i": 1,
     "en": "Setting $f''(x)=0$ gives $x=0$ and $x=2$."
    },
    {
     "i": 2,
     "en": "Sign analysis: for $x<0$, $x(x-2)>0$, so $f''>0$ (concave up); for $0<x<2$, $x(x-2)<0$, so $f''<0$ (concave down); for $x>2$, $f''>0$ (concave up)."
    },
    {
     "i": 3,
     "en": "Since $f''$ changes sign on both sides of $x=0$ and $x=2$, both points are inflection points."
    },
    {
     "i": 4,
     "en": "Corresponding function values: $f(0)=10$, $f(2)=16-32+10=-6$."
    }
   ]
  },
  "pf-app-03": {
   "proof": [
    {
     "i": 0,
     "en": "By the Fundamental Theorem of Calculus (the first one): $G'(x)=g(x)$."
    },
    {
     "i": 1,
     "en": "So $G'(2)=g(2)=\\displaystyle\\int_{0}^{2}\\frac{ds}{8+2s-s^{2}}$."
    },
    {
     "i": 2,
     "en": "(Another equally correct reading: regard $G$ as a double integral and interchange the order; the conclusion $G'(x)=g(x)$ is unchanged.)"
    },
    {
     "i": 3,
     "en": "Compute $g(2)$: $8+2s-s^{2}=(4-s)(2+s)$, partial fractions"
    },
    {
     "i": 5,
     "en": "$g(2)=\\dfrac16\\Big[-\\ln(4-s)+\\ln(2+s)\\Big]_{0}^{2}=\\dfrac16\\left[\\ln\\dfrac{4}{2}-\\left(0-\\ln... \\right)\\right]$; expanding:"
    },
    {
     "i": 7,
     "en": "Numerical check: $\\dfrac{\\ln2}{3}\\approx0.23105$; direct numerical integration $\\displaystyle\\int_0^2\\frac{ds}{8+2s-s^2}\\approx0.23105$ ✓"
    }
   ]
  },
  "pf-app-04": {
   "proof": [
    {
     "i": 0,
     "en": "First find the antiderivative: let $u=x^{2}+3$, $du=2x\\,dx$, so"
    },
    {
     "i": 2,
     "en": "Compute by definition: $\\displaystyle\\int_{0}^{\\infty}\\frac{x\\,dx}{\\left(x^{2}+3\\right)^{2}}=\\lim_{b\\to\\infty}\\left[-\\frac{1}{2\\left(x^{2}+3\\right)}\\right]_{0}^{b}$"
    },
    {
     "i": 4,
     "en": "The limit exists and is finite, so the integral is <b>convergent</b>, with value $1/6$."
    },
    {
     "i": 5,
     "en": "(One may also use the comparison test: the integrand $\\sim x^{-3}$ (as $x\\to\\infty$), and $\\displaystyle\\int^{\\infty}x^{-3}dx$ is convergent.)"
    }
   ]
  },
  "pf-app-05": {
   "proof": [
    {
     "i": 0,
     "en": "(a) Change to a common base: $\\log_{9}(2x+5)=\\dfrac{\\ln(2x+5)}{\\ln9}=\\dfrac{\\ln(2x+5)}{2\\ln3}=\\dfrac12\\log_{3}(2x+5)$."
    },
    {
     "i": 1,
     "en": "The equation becomes $\\log_{3}(x-5)=\\dfrac12\\log_{3}(2x+5)$, i.e. $2\\log_{3}(x-5)=\\log_{3}(2x+5)$."
    },
    {
     "i": 2,
     "en": "Hence $(x-5)^{2}=2x+5$ (and we need $x>5$), i.e. $x^{2}-10x+25=2x+5$, $x^{2}-12x+20=0$."
    },
    {
     "i": 3,
     "en": "Solving gives $x=2$ or $x=10$. The domain condition $x-5>0$ rules out $x=2$, so $x=10$. (Verify: $\\log_3 5=\\log_9 25=\\log_3 5$ ✓)"
    },
    {
     "i": 4,
     "en": "(c) Differentiate both sides implicitly with respect to $x$: $y'+\\cos y\\cdot y'=-2\\sin x$, so $y'=\\dfrac{-2\\sin x}{1+\\cos y}$."
    },
    {
     "i": 5,
     "en": "At $\\left(\\dfrac{\\pi}{2},0\\right)$: $y'=\\dfrac{-2\\sin(\\pi/2)}{1+\\cos0}=\\dfrac{-2}{2}=-1$."
    },
    {
     "i": 6,
     "en": "Tangent line: $y-0=-1\\left(x-\\dfrac{\\pi}{2}\\right)$, i.e. $y=-x+\\dfrac{\\pi}{2}$."
    },
    {
     "i": 9,
     "en": "Substitute $x=0$: $f''(0)=0+1+1\\cdot1=2$."
    }
   ]
  },
  "pf-mid-01": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Conclusion: it is a bijection.</b>"
    },
    {
     "i": 1,
     "en": "<b>(1) $g\\circ f$ is injective.</b> Suppose $x_{1},x_{2}\\in A$ satisfy $(g\\circ f)(x_{1})=(g\\circ f)(x_{2})$, i.e. $g(f(x_{1}))=g(f(x_{2}))$."
    },
    {
     "i": 2,
     "en": "Since $g$ is injective, $f(x_{1})=f(x_{2})$; and since $f$ is injective, $x_{1}=x_{2}$. Therefore $g\\circ f$ is injective."
    },
    {
     "i": 3,
     "en": "<b>(2) $g\\circ f$ is surjective.</b> Take any $z\\in C$. Since $g$ is surjective, there exists $y\\in B$ with $g(y)=z$."
    },
    {
     "i": 4,
     "en": "Also, since $f$ is surjective, there exists $x\\in A$ with $f(x)=y$. Then $(g\\circ f)(x)=g(f(x))=g(y)=z$. Therefore $g\\circ f$ is surjective."
    },
    {
     "i": 5,
     "en": "By (1) and (2), $g\\circ f$ is a bijection, so $(g\\circ f)^{-1}:C\\to A$ exists."
    },
    {
     "i": 6,
     "en": "<b>(3) Find the inverse.</b> Take any $z\\in C$ and write $x=(g\\circ f)^{-1}(z)$, i.e. $(g\\circ f)(x)=z$, that is $g(f(x))=z$."
    },
    {
     "i": 7,
     "en": "Apply the inverse of $g$: $f(x)=g^{-1}(z)$. Then apply the inverse of $f$: $x=f^{-1}\\left(g^{-1}(z)\\right)=\\left(f^{-1}\\circ g^{-1}\\right)(z)$."
    },
    {
     "i": 8,
     "en": "Since $z$ is arbitrary, as functions we have $(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}$. <b>Note that the order is reversed.</b>"
    }
   ]
  },
  "pf-mid-02": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a)</b> Write $f$ in power form: $f(x)=\\left(9-x^{2}\\right)^{-1/2}$, so"
    },
    {
     "i": 2,
     "en": "Hence $(9-x^{2})f'(x)=\\dfrac{x\\left(9-x^{2}\\right)}{\\left(9-x^{2}\\right)^{3/2}}=\\dfrac{x}{\\left(9-x^{2}\\right)^{1/2}}=xf(x)$. ∎"
    },
    {
     "i": 3,
     "en": "<b>(b) Take the $n$-th derivative of both sides of the identity in (a).</b> First use the Leibniz rule on the left-hand side $(9-x^{2})f'(x)$:"
    },
    {
     "i": 5,
     "en": "Now $\\left(9-x^{2}\\right)^{(0)}=9-x^{2}$, $\\left(9-x^{2}\\right)^{(1)}=-2x$, $\\left(9-x^{2}\\right)^{(2)}=-2$, and $0$ for $k\\ge3$,"
    },
    {
     "i": 6,
     "en": "so only three terms remain in the sum: $(9-x^{2})f^{(n+1)}(x)-2nxf^{(n)}(x)+n(n-1)f^{(n-1)}(x)$."
    },
    {
     "i": 7,
     "en": "The $n$-th derivative of the right-hand side $xf(x)$ (since $x^{(0)}=x$, $x^{(1)}=1$, and $0$ for $k\\ge2$): $xf^{(n)}(x)+nf^{(n-1)}(x)$."
    },
    {
     "i": 8,
     "en": "Setting the two sides equal: $(9-x^{2})f^{(n+1)}(x)-2nxf^{(n)}(x)+n(n-1)f^{(n-1)}(x)=xf^{(n)}(x)+nf^{(n-1)}(x)$."
    },
    {
     "i": 9,
     "en": "Rearranging: $(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+\\left[n(n-1)+n\\right]f^{(n-1)}(x)$,"
    },
    {
     "i": 10,
     "en": "Noting that $n(n-1)+n=n^{2}$, we obtain"
    }
   ]
  },
  "pf-mid-03": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(i) Continuity.</b> Right limit: from $\\left|x^{2}\\sin(\\ln x)\\right|\\le x^{2}\\to0$ (squeeze) and $b\\cos x\\to b$, we get"
    },
    {
     "i": 2,
     "en": "Left limit: $\\displaystyle\\lim_{x\\to0^{-}}\\left[be^{1-\\cos x}+c\\right]=be^{0}+c=b+c$."
    },
    {
     "i": 3,
     "en": "We require $b=b+c=f(0)=1$, so $b=1,\\ c=0$."
    },
    {
     "i": 4,
     "en": "<b>Differentiability.</b> Right derivative:"
    },
    {
     "i": 6,
     "en": "(The first term by $\\left|x\\sin(\\ln x)\\right|\\le|x|\\to0$; the second by L'Hôpital or $\\cos x-1\\sim-x^{2}/2$.)"
    },
    {
     "i": 7,
     "en": "Left derivative: $f'_{-}(0)=\\displaystyle\\lim_{x\\to0^{-}}\\frac{e^{1-\\cos x}-1}{x}$; by L'Hôpital this gives $\\lim_{x\\to0^{-}}e^{1-\\cos x}\\sin x=0$."
    },
    {
     "i": 8,
     "en": "So $f'_{+}(0)=f'_{-}(0)=0$ and $f$ is differentiable at $0$. Hence"
    },
    {
     "i": 10,
     "en": "<b>(ii) Continuity of $f'$.</b> Right limit: $\\left|2x\\sin(\\ln x)\\right|\\le2|x|\\to0$, $\\left|x\\cos(\\ln x)\\right|\\le|x|\\to0$, $\\sin x\\to0$, so $\\displaystyle\\lim_{x\\to0^{+}}f'(x)=0$."
    },
    {
     "i": 11,
     "en": "Left limit: $e^{1-\\cos x}\\sin x\\to0$. Both sides equal $f'(0)=0$, so $f'$ is <b>continuous</b> at $0$ (at the remaining points this is clear from the continuity of elementary functions)."
    },
    {
     "i": 12,
     "en": "<b>$f''(0)$ does not exist.</b> Consider the right difference quotient:"
    },
    {
     "i": 14,
     "en": "As $x\\to0^{+}$, $\\ln x\\to-\\infty$, and both $\\sin(\\ln x)$ and $\\cos(\\ln x)$ <b>oscillate without bound</b>:"
    },
    {
     "i": 15,
     "en": "Taking $x_{k}=e^{-2k\\pi}$ gives $\\cos(\\ln x_{k})=1$; taking $x_{k}=e^{-(2k+1)\\pi}$ gives $\\cos(\\ln x_{k})=-1$."
    },
    {
     "i": 16,
     "en": "So the right limit does not exist, and hence $f''(0)$ does not exist."
    }
   ]
  },
  "pf-mid-04": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Preliminary facts.</b> For a positive integer $n$, from $\\left|(x-1)^{n}\\sin\\frac{1}{x-1}\\right|\\le(x-1)^{n}\\to0$ and the Squeeze Theorem,"
    },
    {
     "i": 1,
     "en": "$\\displaystyle\\lim_{x\\to1^{-}}(x-1)^{n}\\sin\\frac{1}{x-1}=0$, and similarly $\\displaystyle\\lim_{x\\to1^{-}}(x-1)^{n}\\cos\\frac{1}{x-1}=0$."
    },
    {
     "i": 2,
     "en": "Also $\\displaystyle\\lim_{h\\to0^{+}}\\frac{e^{-1/h}}{h}=0$ (let $u=1/h$, which reduces it to $\\lim_{u\\to\\infty}\\frac{u}{e^{u}}=0$)."
    },
    {
     "i": 3,
     "en": "<b>Continuity.</b> Right limit: $\\displaystyle\\lim_{x\\to1^{+}}\\left[e^{-\\frac{1}{x-1}}+ax+b\\right]=0+a+b=a+b$."
    },
    {
     "i": 4,
     "en": "Left limit: $\\displaystyle\\lim_{x\\to1^{-}}\\left[(x-1)^{3}\\sin\\frac{1}{x-1}+1702\\right]=0+1702=1702$."
    },
    {
     "i": 5,
     "en": "We require $a+b=1702$. ……(★)"
    },
    {
     "i": 6,
     "en": "<b>Differentiability.</b> Left derivative (let $h=x-1\\to0^{-}$):"
    },
    {
     "i": 8,
     "en": "Right derivative: $f'_{+}(1)=\\displaystyle\\lim_{h\\to0^{+}}\\frac{e^{-1/h}+ah+b-1702}{h}$; by (★) this reduces to $\\displaystyle\\lim_{h\\to0^{+}}\\left[\\frac{e^{-1/h}}{h}+a\\right]=0+a=a$."
    },
    {
     "i": 9,
     "en": "We require $f'_{-}(1)=f'_{+}(1)$, i.e. $0=a$, so $a=0$; substituting into (★) gives $b=1702$."
    },
    {
     "i": 10,
     "en": "Thus $f'(x)=\\begin{cases}\\dfrac{1}{(x-1)^{2}}e^{-\\frac{1}{x-1}}, & x>1,\\\\ 0, & x=1,\\\\ 3(x-1)^{2}\\sin\\dfrac{1}{x-1}-(x-1)\\cos\\dfrac{1}{x-1}, & x<1.\\end{cases}$"
    },
    {
     "i": 11,
     "en": "<b>(b) Continuity of $f'$ at $x=1$.</b> Right limit: let $u=\\dfrac{1}{x-1}\\to\\infty$, giving $\\displaystyle\\lim_{x\\to1^{+}}\\frac{u^{2}}{e^{u}}=0$."
    },
    {
     "i": 12,
     "en": "Left limit: by the preliminary facts, $3(x-1)^{2}\\sin\\frac{1}{x-1}\\to0$ and $(x-1)\\cos\\frac{1}{x-1}\\to0$, so it is $0$."
    },
    {
     "i": 13,
     "en": "Both one-sided limits equal $f'(1)=0$, so $f'$ is <b>continuous</b> at $x=1$, and hence continuous everywhere."
    }
   ]
  },
  "pf-mid-05": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a) Tangent line (for later use).</b> $y'=e^{\\arcsin x}\\cdot\\dfrac{1}{\\sqrt{1-x^{2}}}$, so $y'(0)=1$; also $y(0)=1$, so the tangent line is $y=x+1$."
    },
    {
     "i": 1,
     "en": "<b>(b)</b> From $y'=\\dfrac{e^{\\arcsin x}}{\\sqrt{1-x^{2}}}=\\dfrac{y}{\\sqrt{1-x^{2}}}$ we get"
    },
    {
     "i": 3,
     "en": "Differentiate both sides with respect to $x$ (using the product rule on the left):"
    },
    {
     "i": 5,
     "en": "Multiply both sides by $\\sqrt{1-x^{2}}$: $y''\\left(1-x^{2}\\right)-xy'=y'\\sqrt{1-x^{2}}=y$ (the last step uses (∗))."
    },
    {
     "i": 6,
     "en": "Rearranging gives $(1-x^{2})y''-xy'-y=0$. ∎"
    },
    {
     "i": 7,
     "en": "<b>(c)</b> Take the $n$-th derivative of both sides of the identity in (b), using the Leibniz rule."
    },
    {
     "i": 8,
     "en": "First term $\\left(1-x^{2}\\right)y''$: since $\\left(1-x^{2}\\right)^{(0)}=1-x^{2}$, $\\left(1-x^{2}\\right)^{(1)}=-2x$, $\\left(1-x^{2}\\right)^{(2)}=-2$, and $0$ for $k\\ge3$,"
    },
    {
     "i": 9,
     "en": "so $\\left[(1-x^{2})y''\\right]^{(n)}=(1-x^{2})y^{(n+2)}-2nxy^{(n+1)}-n(n-1)y^{(n)}$."
    },
    {
     "i": 10,
     "en": "Second term: $\\left[xy'\\right]^{(n)}=xy^{(n+1)}+ny^{(n)}$. Third term: $y^{(n)}$."
    },
    {
     "i": 11,
     "en": "Substituting and simplifying: $(1-x^{2})y^{(n+2)}-2nxy^{(n+1)}-n(n-1)y^{(n)}-xy^{(n+1)}-ny^{(n)}-y^{(n)}=0$,"
    },
    {
     "i": 12,
     "en": "Collecting like terms: $(1-x^{2})y^{(n+2)}-(2n+1)xy^{(n+1)}-\\left[n(n-1)+n+1\\right]y^{(n)}=0$."
    },
    {
     "i": 13,
     "en": "And $n(n-1)+n+1=n^{2}+1$, so"
    }
   ]
  },
  "pf-mid-06": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a) Evenness:</b> for any $x\\in\\mathbb{R}$,"
    },
    {
     "i": 1,
     "en": "$g(-x)=f(\\cos(-x))=f(\\cos x)=g(x)$ (using that $\\cos$ is an even function)."
    },
    {
     "i": 2,
     "en": "<b>Periodicity:</b> for any integer $k$,"
    },
    {
     "i": 3,
     "en": "$g(x+2k\\pi)=f(\\cos(x+2k\\pi))=f(\\cos x)=g(x)$ (using that $\\cos$ has period $2\\pi$)."
    },
    {
     "i": 4,
     "en": "Therefore $g$ is both even and periodic, with period $2\\pi$."
    },
    {
     "i": 5,
     "en": "<b>(b)</b> Since the range of $\\arccos$ is $[0,\\pi]$, for $x\\in[0,\\pi]$, $\\cos x$ lies in $[-1,1]$ and the corresponding angle is exactly $x$,"
    },
    {
     "i": 6,
     "en": "so $g(x)=\\arccos(\\cos x)=x$, $x\\in[0,\\pi]$."
    },
    {
     "i": 7,
     "en": "<b>Graph (triangular wave):</b> by evenness, for $x\\in[-\\pi,0]$, $g(x)=-x$;"
    },
    {
     "i": 8,
     "en": "hence on $[-\\pi,\\pi]$, $g$ is a V-shape with vertex at $(0,0)$ and endpoints at $(\\pm\\pi,\\pi)$ (a sawtooth/triangular wave),"
    },
    {
     "i": 9,
     "en": "and repeating it on both sides with period $2\\pi$ gives the graph on $[-2\\pi,2\\pi]$.\n"
    }
   ]
  }
 },
 "proofs": {
  "pf-cd-01": {
   "title": "f(x)=x³cos(1/x): continuity, differentiability, and continuity of the derivative",
   "statement": "Define $f(x)=\\begin{cases}x^{3}\\cos\\dfrac1x, & x\\ne0,\\\\[4pt] 0, & x=0.\\end{cases}$<br>(a) Prove that $f$ is continuous at $x=0$; (b) prove that $f$ is differentiable at $x=0$; (c) determine whether $f'$ is continuous at $x=0$, and justify your answer."
  },
  "pf-cd-02": {
   "title": "f(x)=x^{2/3}(1−cos x²): continuity, differentiability, and continuity of the derivative",
   "statement": "Define $f(x)=x^{2/3}\\left(1-\\cos\\left(x^{2}\\right)\\right)$.<br>(a) Prove that $f$ is continuous at $x=0$; (b) prove that $f$ is differentiable at $x=0$; (c) determine whether $f'$ is continuous at $x=0$."
  },
  "pf-cd-03": {
   "title": "f(x)=(1−cos2x)/x²: continuity, differentiability, and continuity of the derivative",
   "statement": "Define $f(x)=\\begin{cases}\\dfrac{1-\\cos(2x)}{x^{2}}, & x\\ne0,\\\\[6pt] 2, & x=0.\\end{cases}$<br>(a) Prove that $f$ is continuous at $x=0$; (b) prove that $f$ is differentiable at $x=0$; (c) determine whether $f'$ is continuous at $x=0$."
  },
  "pf-cd-04": {
   "title": "f(x)=x²sin(1/x): f′(0)=0 but f′ is not continuous at 0",
   "statement": "Define $f(x)=\\begin{cases}x^{2}\\sin\\dfrac1x, & x\\ne0,\\\\[4pt] 0, & x=0.\\end{cases}$ Prove that $f'(0)=0$, but $f'$ is not continuous at $x=0$."
  },
  "pf-cd-05": {
   "title": "Continuity and differentiability of a piecewise function at x=2 (find a)",
   "statement": "Let $f(x)=\\begin{cases}x^{3}+3, & x\\le2,\\\\[4pt] x^{2}+ax+5, & x>2.\\end{cases}$ Given that $f$ is continuous at $x=2$, find the value of $a$, and determine whether $f$ is differentiable at $x=2$."
  },
  "pf-mvt-01": {
   "title": "Using the MVT to prove e^{a²} − e^{b²} > 2(ab − b²)e^{b²} (a>b>0)",
   "statement": "Let $a>b>0$. Use the Mean Value Theorem to prove $e^{a^{2}}-e^{b^{2}}>2\\left(ab-b^{2}\\right)e^{b^{2}}$."
  },
  "pf-mvt-02": {
   "title": "Prove that x − ln(1+x) ≥ x²/(2(1+x)) (x ≥ 0)",
   "statement": "Let $f(x)=x-\\ln(1+x)$. Prove that for all $x\\ge0$, $f(x)\\ge\\dfrac{x^{2}}{2(1+x)}$."
  },
  "pf-mvt-03": {
   "title": "A typical application of Rolle's Theorem",
   "statement": "Let $f$ be continuous on $[0,1]$ and differentiable on $(0,1)$, with $f(0)=f(1)=0$. Prove that there exists $c\\in(0,1)$ such that $f'(c)=0$."
  },
  "pf-mvt-04": {
   "title": "Using integration by parts to prove ∫₀¹ f(x)f″(x)dx = −∫₀¹[f′(x)]²dx",
   "statement": "Let $f$ have continuous first and second derivatives on $[0,1]$, with $f(0)=f(1)=0$.<br>(i) Prove $\\displaystyle\\int_{0}^{1}f(x)f''(x)\\,dx=-\\int_{0}^{1}\\left[f'(x)\\right]^{2}dx$, with equality if and only if $f\\equiv0$;<br>(ii) if in addition $\\displaystyle\\int_{0}^{1}\\left[f'(x)\\right]^{2}dx=1$, find $\\displaystyle\\int_{0}^{1}xf(x)f''(x)\\,dx$."
  },
  "pf-lim-01": {
   "title": "Six limits (including the Squeeze Theorem, limits at infinity, and nonexistence)",
   "statement": "Find the following limits (show your work); if a limit does not exist, explain why.<br>(a) $\\displaystyle\\lim_{x\\to1}(x-1)^{4}\\cos\\left(\\ln\\frac{1}{|x-1|^{2}}\\right)$<br>(b) $\\displaystyle\\lim_{x\\to-\\infty}\\left(\\sqrt{4x^{2}+3x-2}+2x\\right)$<br>(c) $\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos x}{x+x^{2}}$<br>(d) $\\displaystyle\\lim_{x\\to\\infty}\\frac{\\cos x+\\ln x}{2\\sqrt{x}}$<br>(e) $\\displaystyle\\lim_{x\\to1^{+}}\\left(\\frac{1}{x-1}-\\frac{1}{\\ln x}\\right)$<br>(f) $\\displaystyle\\lim_{x\\to-\\infty}\\left(x^{3}+5x^{2}-3x+1\\right)$"
  },
  "pf-lim-02": {
   "title": "Determine whether lim_{x→1} cos x/(|x−1|eˣ) exists",
   "statement": "Determine whether $\\displaystyle\\lim_{x\\to1}\\frac{\\cos x}{|x-1|e^{x}}$ exists, and justify your answer."
  },
  "pf-lim-03": {
   "title": "Prove that lim_{n→∞} n^{1/n} = 1",
   "statement": "Prove $\\displaystyle\\lim_{n\\to\\infty}n^{1/n}=1$."
  },
  "pf-ser-01": {
   "title": "Using integral squeeze estimates to prove lim (n!)^{1/n}/n = 1/e",
   "statement": "(b) Prove $\\ln1+\\ln2+\\cdots+\\ln(n-1)<\\displaystyle\\int_{1}^{n}\\ln x\\,dx<\\ln2+\\ln3+\\cdots+\\ln n$ (for integers $n\\ge2$).<br>(c) Use (a) and (b) to find $\\displaystyle\\lim_{n\\to\\infty}\\frac{(n!)^{1/n}}{n}$."
  },
  "pf-ser-02": {
   "title": "Expansion of ln(1+x) with remainder and error estimates",
   "statement": "(a) For a positive integer $n$ and $t\\in(-1,1)$, prove $\\dfrac{1}{1+t}=1-t+t^{2}-\\cdots+(-1)^{n-1}t^{n-1}+\\dfrac{(-1)^{n}t^{n}}{1+t}$, and hence derive the expansions with remainder for $\\ln(1+x)$ and $\\ln(1-x)$.<br>(b) Prove that for $x\\in(0,1)$ and any positive integer $k$: $0\\le\\ln\\left(\\dfrac{1+x}{1-x}\\right)-2\\left(x+\\dfrac{x^{3}}{3}+\\cdots+\\dfrac{x^{2k+1}}{2k+1}\\right)\\le\\dfrac{2}{1-x^{2}}\\cdot\\dfrac{x^{2k+3}}{2k+3}$.<br>(c) Hence prove that $\\displaystyle\\lim_{k\\to\\infty}\\left[\\frac17+\\frac13\\left(\\frac17\\right)^{3}+\\cdots+\\frac{1}{2k+1}\\left(\\frac17\\right)^{2k+1}\\right]$ exists and find its value."
  },
  "pf-int-01": {
   "title": "Complete derivation of I=∫₀^{π/2} ln(sinθ)dθ",
   "statement": "Suppose that $I=\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)\\,d\\theta$ exists.<br>(a) Prove $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin\\theta)d\\theta=\\int_{0}^{\\pi/2}\\ln(\\cos\\theta)d\\theta$;<br>(b) prove $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta=2I+\\dfrac{\\pi}{2}\\ln2$;<br>(c) prove $I=\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin2\\theta)d\\theta$, and find $I$;<br>(d) use (c) to find $\\displaystyle\\int_{0}^{\\pi/2}\\frac{\\theta}{\\tan\\theta}\\,d\\theta$."
  },
  "pf-int-02": {
   "title": "Identities and value for I=∫₀^{π/2} e^{cos x}dx",
   "statement": "Suppose that $I=\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx$ exists.<br>(a) Prove $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos x}dx=\\int_{0}^{\\pi/2}e^{\\sin x}dx$;<br>(b) find $\\displaystyle\\int_{0}^{\\pi/2}e^{\\cos3x}\\sin3x\\,dx$;<br>(c) prove $I=\\dfrac{\\pi}{2}+\\displaystyle\\int_{0}^{\\pi/2}xe^{\\cos x}\\sin x\\,dx$;<br>(d) hence find $\\displaystyle\\int_{0}^{\\pi/2}xe^{\\sin x}\\cos x\\,dx$."
  },
  "pf-app-01": {
   "title": "Lighthouse rowing problem: minimum time and landing point",
   "statement": "A lighthouse $H$ at sea is $3$ km from a point $A$ on the shore, with $AH\\perp$ the shoreline. A warehouse $S$ lies $5$ km along the shore from $A$. The lighthouse keeper rows at $4$ km/h and walks along the shore at $6$ km/h. At which point on the shore should he land in order to reach $S$ in the least time? What is the minimum time?"
  },
  "pf-app-02": {
   "title": "Concavity and inflection points (f(x)=x⁴−4x³+10)",
   "statement": "Let $f(x)=x^{4}-4x^{3}+10$, $x\\in(-\\infty,\\infty)$. Find the inflection points of $f$, and state the intervals on which the function is concave upward and concave downward."
  },
  "pf-app-03": {
   "title": "G′(2), where g(t)=∫₀ᵗ ds/(8+2s−s²) and G(x)=∫₀ˣ g(t)dt",
   "statement": "Let $g(t)=\\displaystyle\\int_{0}^{t}\\frac{ds}{8+2s-s^{2}}$, $G(x)=\\displaystyle\\int_{0}^{x}g(t)\\,dt$. Find $G'(2)$."
  },
  "pf-app-04": {
   "title": "Determine whether the improper integral ∫₀^∞ x dx/(x²+3)² converges",
   "statement": "Determine whether the improper integral $\\displaystyle\\int_{0}^{\\infty}\\frac{x\\,dx}{\\left(x^{2}+3\\right)^{2}}$ converges; if it converges, find its value."
  },
  "pf-app-05": {
   "title": "Logarithmic equation, tangent line to an implicit function, second derivative (short answer)",
   "statement": "(a) Solve the equation $\\log_{3}(x-5)=\\log_{9}(2x+5)$.<br>(c) The equation $y+\\sin y=2\\cos x$ defines a differentiable function $y=f(x)$; find $y'(x)$ and the equation of the tangent line to the curve at the point $\\left(\\dfrac{\\pi}{2},0\\right)$.<br>(d) Let $f(x)=e^{x}\\arctan x$, and find $f''(0)$."
  },
  "pf-mid-01": {
   "title": "The composite of bijections is a bijection, and (g∘f)⁻¹ = f⁻¹∘g⁻¹",
   "statement": "Let $f:A\\to B$ and $g:B\\to C$ both be bijective. Is $g\\circ f:A\\to C$ a bijection? If so, prove it, and express $(g\\circ f)^{-1}$ in terms of $f^{-1}$ and $g^{-1}$."
  },
  "pf-mid-02": {
   "title": "Using Leibniz's rule to derive the higher-order derivative recurrence for f(x)=1/√(9−x²)",
   "statement": "Let $f(x)=\\dfrac{1}{\\sqrt{9-x^{2}}}$, $x\\in(-3,3)$.<br>(a) Prove $(9-x^{2})f'(x)=xf(x)$;<br>(b) hence prove that for every positive integer $n$: $(9-x^{2})f^{(n+1)}(x)=(2n+1)xf^{(n)}(x)+n^{2}f^{(n-1)}(x)$, where $f^{(0)}=f$."
  },
  "pf-mid-03": {
   "title": "A piecewise function differentiable everywhere (find b, c) and the continuity of f′",
   "statement": "Let $f(x)=\\begin{cases}x^{2}\\sin(\\ln x)+b\\cos x, & x>0,\\\\ 1, & x=0,\\\\ be^{1-\\cos x}+c, & x<0.\\end{cases}$<br>(i) Find the constants $b,c$ for which $f$ is differentiable everywhere on $\\mathbb{R}$, and write down $f'(x)$;<br>(ii) determine whether $f'$ is continuous everywhere, and find $f''(0)$ (if it does not exist, explain)."
  },
  "pf-mid-04": {
   "title": "A piecewise function differentiable everywhere (find a, b) and the continuity of f′ at x=1",
   "statement": "Let $f(x)=\\begin{cases}e^{-\\frac{1}{x-1}}+ax+b, & x>1,\\\\ 1702, & x=1,\\\\ (x-1)^{3}\\sin\\dfrac{1}{x-1}+1702, & x<1.\\end{cases}$<br>(a) Find $a,b$ for which $f$ is differentiable everywhere, and write down $f'(x)$;<br>(b) determine whether $f'$ is continuous everywhere."
  },
  "pf-mid-05": {
   "title": "The differential equation satisfied by y = e^{arcsin x} and the higher-order derivative recurrence",
   "statement": "Let $y=f(x)=e^{\\arcsin x}$.<br>(b) Prove $(1-x^{2})y''-xy'-y=0$;<br>(c) hence prove $(1-x^{2})y^{(n+2)}-(2n+1)xy^{(n+1)}-(n^{2}+1)y^{(n)}=0$."
  },
  "pf-mid-06": {
   "title": "Parity and periodicity of g(x)=arccos(cos x)",
   "statement": "Let $f:[-1,1]\\to[0,\\pi]$, $f(x)=\\arccos x$; $g:\\mathbb{R}\\to\\mathbb{R}$, $g(x)=f(\\cos x)$.<br>(a) Prove that $g$ is an even function and a periodic function;<br>(b) find $g(x)$ for $x\\in[0,\\pi]$, and hence sketch its graph on $[-2\\pi,2\\pi]$."
  }
 }
});
})(typeof window!=="undefined"?window:globalThis);
