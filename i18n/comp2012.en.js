/* COMP2012 英文翻译层 — 由 /tmp/fcms/build_i18n.js 生成，请勿手改 */
(function(root){
  if(!root.FCMS) return;
  root.FCMS.registerEn("COMP2012", {
 "name": "Discrete Mathematics",
 "desc": "Logic, sets, algorithms, induction, counting, graphs, trees and Boolean circuits. Includes six finals (2014–2025).",
 "topics": {
  "逻辑与证明": "Logic and proofs",
  "基本结构（集合·函数·序列·和）": "Basic structures (sets, functions, sequences, sums)",
  "算法与复杂度": "Algorithms and complexity",
  "归纳法与递归": "Induction and recursion",
  "计数": "Counting",
  "图论 I（基本概念·连通性）": "Graph theory I (basic concepts, connectivity)",
  "图论 II（欧拉·哈密顿·最短路）": "Graph theory II (Euler, Hamilton, shortest paths)",
  "图论 III（流网络·最大流最小割）": "Graph theory III (flow networks, max-flow min-cut)",
  "树 I（基本性质·生成树）": "Trees I (basic properties, spanning trees)",
  "树 II（二叉树·遍历·Huffman）": "Trees II (binary trees, traversal, Huffman)",
  "布尔代数与电路": "Boolean algebra and circuits",
  "综合与真题": "Comprehensive and past-paper questions"
 },
 "questions": {
  "cm-1-01": {
   "prompt": "Write the contrapositive of the proposition $p\\to q$.",
   "blanks": [
    "Contrapositive"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The contrapositive of $p\\to q$ is $\\neg q\\to\\neg p$."
    },
    {
     "i": 1,
     "en": "The original proposition and its contrapositive are <b>logically equivalent</b> (this is the basis of proof by contradiction)."
    },
    {
     "i": 2,
     "en": "Note the distinction: the converse is $q\\to p$; the inverse is $\\neg p\\to\\neg q$; neither is equivalent to the original proposition."
    }
   ]
  },
  "cm-1-02": {
   "prompt": "Use a truth table to determine whether $(p\\to q)\\land(q\\to r)\\to(p\\to r)$ is a tautology?",
   "blanks": [
    "Tautology? (enter yes or no)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is a hypothetical syllogism, and it is a tautology."
    },
    {
     "i": 1,
     "en": "Verification: if both $(p\\to q)$ and $(q\\to r)$ are true, then when $p$ is true $q$ is true, hence $r$ is true, so $p\\to r$ is true."
    },
    {
     "i": 2,
     "en": "The conclusion is false only when $p$ is true and $r$ is false, but then $q$, whether true or false, makes one of the premises false, so the premises cannot both be true."
    },
    {
     "i": 3,
     "en": "Hence the formula is a tautology (fill in \\\"yes\\\")."
    }
   ]
  },
  "cm-1-03": {
   "prompt": "Using quantifiers and logical symbols, write an equivalent form of “not all students have taken discrete mathematics” (move the negation inside the quantifier).",
   "blanks": [
    "Equivalent form"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Original proposition: $\\neg\\forall x\\,S(x)$, where $S(x)$ means \\\"$x$ has taken discrete mathematics\\\"."
    },
    {
     "i": 1,
     "en": "By De Morgan's laws (quantifier form): $\\neg\\forall x\\,S(x)\\iff\\exists x\\,\\neg S(x)$."
    },
    {
     "i": 2,
     "en": "That is, \\\"there exists a student who has not taken discrete mathematics\\\"."
    }
   ]
  },
  "cm-1-04": {
   "prompt": "Prove: if $n$ is an integer and $n^{2}$ is odd, then $n$ is odd. (Use proof by contradiction or the contrapositive.)",
   "blanks": [
    "Proof method (enter contradiction or direct)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Using the contrapositive (equivalent to proof by contradiction):</b> prove \\\"if $n$ is even, then $n^{2}$ is even\\\"."
    },
    {
     "i": 1,
     "en": "Let $n=2k$ ($k\\in\\mathbb{Z}$); then $n^{2}=4k^{2}=2(2k^{2})$, which is even."
    },
    {
     "i": 2,
     "en": "The contrapositive holds $\\Rightarrow$ the original proposition holds: if $n^{2}$ is odd, then $n$ must be odd. ∎"
    },
    {
     "i": 3,
     "en": "(Another way to write it: suppose $n$ is even, derive that $n^{2}$ is even, contradicting that $n^{2}$ is odd.)"
    }
   ]
  },
  "cm-2-01": {
   "prompt": "Let $A=\\{1,2,3\\}$, $B=\\{2,3,4\\}$. Find $|A\\cup B|$.",
   "blanks": [
    "$|A\\cup B|$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Inclusion–Exclusion Principle: $|A\\cup B|=|A|+|B|-|A\\cap B|$."
    },
    {
     "i": 1,
     "en": "$A\\cap B=\\{2,3\\}$, so $|A\\cap B|=2$."
    },
    {
     "i": 2,
     "en": "$|A\\cup B|=3+3-2=4$ (that is, $\\{1,2,3,4\\}$)."
    }
   ]
  },
  "cm-2-02": {
   "prompt": "Find $\\displaystyle\\sum_{k=1}^{100}k$.",
   "blanks": [
    "Sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Formula for the sum of an arithmetic sequence: $\\displaystyle\\sum_{k=1}^{n}k=\\frac{n(n+1)}{2}$."
    },
    {
     "i": 1,
     "en": "Take $n=100$: $\\dfrac{100\\cdot101}{2}=5050$."
    }
   ]
  },
  "cm-2-03": {
   "prompt": "Find $\\displaystyle\\sum_{k=1}^{10}2^{k}$.",
   "blanks": [
    "Sum"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Sum of a geometric sequence: $\\displaystyle\\sum_{k=0}^{n}r^{k}=\\frac{r^{n+1}-1}{r-1}$ ($r\\ne1$)."
    }
   ]
  },
  "cm-2-04": {
   "prompt": "Let $A$ have $3$ elements and $B$ have $4$ elements. How many distinct functions are there from $A$ to $B$?",
   "blanks": [
    "Number of functions"
   ],
   "solution": [
    {
     "i": 0,
     "en": "For the function $f:A\\to B$ to be a function, each element of $A$ must be assigned exactly one image in $B$."
    },
    {
     "i": 1,
     "en": "Each element of $A$ has $|B|=4$ choices, and the elements are independent, so there are $4^{3}=64$ in total."
    },
    {
     "i": 2,
     "en": "In general: $|B|^{|A|}$."
    }
   ]
  },
  "cm-2-05": {
   "prompt": "How many elements does the power set of a set with $n$ elements have?",
   "blanks": [
    "Size of the power set"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The power set $\\mathcal{P}(A)$ is the set of all subsets of $A$."
    },
    {
     "i": 1,
     "en": "When forming a subset, each element of $A$ has two states, \\\"chosen\\\" or \\\"not chosen\\\", and the elements are independent,"
    },
    {
     "i": 2,
     "en": "so there are $\\underbrace{2\\times2\\times\\cdots\\times2}_{n}=2^{n}$ subsets in total, i.e. $|\\mathcal{P}(A)|=2^{n}$."
    }
   ]
  },
  "cm-3-01": {
   "prompt": "Determine: is $3n^{2}+5n+7$ $O(n^{2})$? (enter yes or no)",
   "blanks": [
    "Is it $O(n^2)$?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "We need to find constants $C>0$ and $k$ such that $n\\ge k$ implies $3n^{2}+5n+7\\le C n^{2}$."
    },
    {
     "i": 1,
     "en": "When $n\\ge1$, $5n\\le5n^{2}$ and $7\\le7n^{2}$, so $3n^{2}+5n+7\\le15n^{2}$."
    },
    {
     "i": 2,
     "en": "Taking $C=15,\\ k=1$ suffices, so it is $O(n^{2})$. (In fact it is also $\\Theta(n^{2})$.)"
    }
   ]
  },
  "cm-3-02": {
   "prompt": "In the worst case, the number of comparisons made by bubble sort is $\\Theta(n^{k})$; give $k$.",
   "blanks": [
    "$k$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Each pass of bubble sort \\\"bubbles\\\" the current largest element to the end; the $i$-th pass performs $n-i$ comparisons."
    },
    {
     "i": 1,
     "en": "Total number of comparisons $=\\displaystyle\\sum_{i=1}^{n-1}(n-i)=\\frac{n(n-1)}{2}=\\Theta(n^{2})$."
    },
    {
     "i": 2,
     "en": "Hence $k=2$."
    }
   ]
  },
  "cm-3-03": {
   "prompt": "For binary search on an array of $n$ sorted elements, how many comparisons are needed in the worst case? (Express it using $\\Theta$; the base of the $\\log$ need not be written.)",
   "blanks": [
    "Worst-case number of comparisons"
   ],
   "solution": [
    {
     "i": 0,
     "en": "After each comparison the search interval is halved, so there are at most $\\lceil\\log_{2}(n+1)\\rceil$ iterations."
    },
    {
     "i": 1,
     "en": "Therefore the worst case is $\\Theta(\\log n)$ comparisons."
    }
   ]
  },
  "cm-3-04": {
   "prompt": "Use a greedy algorithm for the coin-changing problem: the coin denominations are $\\{1,5,10,25\\}$ and the change to give is $63$ cents. What is the minimum number of coins used?",
   "blanks": [
    "Minimum number of coins"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Greedy strategy: each time take the largest denomination not exceeding the remaining amount."
    },
    {
     "i": 1,
     "en": "$63-25=38$ (1 coin) $\\to 38-25=13$ (2 coins) $\\to 13-10=3$ (3 coins) $\\to 3-1-1-1=0$ (3 more coins)."
    },
    {
     "i": 2,
     "en": "Total $2+1+3=6$ coins."
    },
    {
     "i": 3,
     "en": "(For this set of denominations the greedy choice is optimal; this is also the general method for questions of the 2025 Paper 2(a) type.)"
    }
   ]
  },
  "cm-4-01": {
   "prompt": "Use mathematical induction to prove $\\displaystyle\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}$. Give the difference between the two sides of the equality that must be proved in the inductive step (after simplification).",
   "blanks": [
    "Inductive step: simplified result of $\\frac{k(k+1)}{2}+(k+1)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Base case</b> $n=1$: left-hand side $=1$, right-hand side $=\\dfrac{1\\cdot2}{2}=1$, so it holds."
    },
    {
     "i": 1,
     "en": "<b>Inductive hypothesis</b>: suppose it holds for $n=k$, i.e. $\\displaystyle\\sum_{i=1}^{k}i=\\frac{k(k+1)}{2}$."
    },
    {
     "i": 2,
     "en": "<b>Inductive step</b>: for $n=k+1$"
    },
    {
     "i": 4,
     "en": "This is exactly the result of substituting $n=k+1$ into $\\dfrac{n(n+1)}{2}$, so the proposition holds for every positive integer $n$. ∎"
    }
   ]
  },
  "cm-4-02": {
   "prompt": "Use mathematical induction to prove: for $n\\ge7$, $n!>3^{n}$. Give the key inequality that must be verified in the inductive step (expressed in terms of $k$): from $k!>3^{k}$ deduce $(k+1)!>3^{k+1}$, $k+1$ only needs to be greater than or equal to what?",
   "blanks": [
    "$k+1\\ge$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Base case</b> $n=7$: $7!=5040>3^{7}=2187$ ✔"
    },
    {
     "i": 1,
     "en": "<b>Inductive hypothesis</b>: suppose that for some $k\\ge7$ we have $k!>3^{k}$."
    },
    {
     "i": 2,
     "en": "<b>Inductive step</b>: $(k+1)!=(k+1)\\cdot k!>(k+1)\\cdot3^{k}$."
    },
    {
     "i": 3,
     "en": "To make $(k+1)\\cdot3^{k}>3^{k+1}=3\\cdot3^{k}$, we only need $k+1>3$."
    },
    {
     "i": 4,
     "en": "And when $k\\ge7$ we have $k+1\\ge8>3$, which clearly holds, so $(k+1)!>3^{k+1}$."
    },
    {
     "i": 5,
     "en": "Therefore for all $n\\ge7$ we have $n!>3^{n}$. ∎ (The key threshold is exactly $3$.)"
    }
   ]
  },
  "cm-4-03": {
   "prompt": "Use mathematical induction to prove that $n^{3}-n$ is divisible by $3$ ($n$ a positive integer). Give the simplified result of $f(k+1)-f(k)$ in the inductive step (where $f(n)=n^{3}-n$).",
   "blanks": [
    "$f(k+1)-f(k)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Base case</b> $n=1$: $1-1=0$ is divisible by $3$ ✔"
    },
    {
     "i": 1,
     "en": "<b>Inductive hypothesis</b>: $3\\mid(k^{3}-k)$."
    },
    {
     "i": 2,
     "en": "<b>Inductive step</b>: let $f(n)=n^{3}-n$; then"
    },
    {
     "i": 4,
     "en": "This is a multiple of $3$; moreover, by the inductive hypothesis $f(k)$ is a multiple of $3$,"
    },
    {
     "i": 5,
     "en": "so $f(k+1)=f(k)+3k(k+1)$ is also a multiple of $3$. ∎"
    }
   ]
  },
  "cm-4-04": {
   "prompt": "Recursively define $a_{1}=2$, $a_{n}=3a_{n-1}+1$ ($n\\ge2$). Find $a_{4}$.",
   "blanks": [
    "$a_4$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Substitute term by term into the recurrence:"
    },
    {
     "i": 5,
     "en": "Hence $a_{4}=67$."
    }
   ]
  },
  "cm-5-01": {
   "prompt": "From $8$ people, in how many ways can $3$ people be chosen to form a committee?",
   "blanks": [
    "Number of ways to choose"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Order does not matter, so use a combination: $\\dbinom{8}{3}=\\dfrac{8!}{3!\\,5!}=\\dfrac{8\\cdot7\\cdot6}{6}=56$."
    }
   ]
  },
  "cm-5-02": {
   "prompt": "In how many ways can $5$ different books be arranged in a row?",
   "blanks": [
    "Number of arrangements"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Number of permutations $5!=5\\cdot4\\cdot3\\cdot2\\cdot1=120$."
    }
   ]
  },
  "cm-5-03": {
   "prompt": "From a standard deck of $52$ playing cards, $5$ cards are drawn. In how many ways can this be done?",
   "blanks": [
    "Number of ways to choose"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Numerator $=311875200$, denominator $=120$, so $\\dbinom{52}{5}=2598960$."
    }
   ]
  },
  "cm-5-04": {
   "prompt": "Use the Inclusion–Exclusion Principle: how many integers from $1$ to $100$ are divisible by $2$ or $3$?",
   "blanks": [
    "Number"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $A$ be the set of numbers divisible by $2$ and $B$ the set divisible by $3$."
    },
    {
     "i": 2,
     "en": "$A\\cap B$ is the set of numbers divisible by $6$, and $|A\\cap B|=\\lfloor100/6\\rfloor=16$."
    },
    {
     "i": 3,
     "en": "Inclusion–Exclusion: $|A\\cup B|=50+33-16=67$."
    }
   ]
  },
  "cm-5-05": {
   "prompt": "In how many ways can $6$ identical balls be placed into $4$ different boxes, with empty boxes allowed?",
   "blanks": [
    "Number of ways"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is \\\"stars and bars\\\": the number of ways to place $n$ identical balls into $k$ distinct boxes with empty boxes allowed is $\\dbinom{n+k-1}{k-1}$."
    },
    {
     "i": 1,
     "en": "Take $n=6,\\ k=4$: $\\dbinom{6+4-1}{4-1}=\\dbinom{9}{3}=\\dfrac{9\\cdot8\\cdot7}{6}=84$."
    }
   ]
  },
  "cm-5-06": {
   "prompt": "Use the Binomial Theorem: in the expansion of $(x+2)^{5}$, find the coefficient of the $x^{3}$ term.",
   "blanks": [
    "Coefficient of $x^3$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "$x^{3}$ corresponds to $5-k=3$, i.e. $k=2$: coefficient $=\\dbinom{5}{2}\\cdot2^{2}=10\\cdot4=40$."
    }
   ]
  },
  "cm-5-07": {
   "prompt": "Over the letters $A,B,C,D,E$, how many strings of length $5$ have no two adjacent letters equal?",
   "blanks": [
    "Number of strings"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The 1st digit has $5$ choices; afterwards each digit only has to differ from the <b>previous one</b>, giving $4$ choices each."
    },
    {
     "i": 1,
     "en": "Altogether $5\\cdot4^{4}=5\\cdot256=1280$ such numbers."
    }
   ]
  },
  "cm-6-01": {
   "prompt": "An undirected simple graph has $6$ vertices, and every vertex has degree $3$. How many edges does the graph have?",
   "blanks": [
    "Number of edges"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Handshaking lemma: $\\displaystyle\\sum_{v}\\deg(v)=2|E|$."
    },
    {
     "i": 1,
     "en": "The left-hand side $=6\\times3=18$, so $|E|=\\dfrac{18}{2}=9$."
    }
   ]
  },
  "cm-6-02": {
   "prompt": "How many edges does the complete graph $K_{7}$ have?",
   "blanks": [
    "Number of edges"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Every pair of vertices in $K_{n}$ is joined by exactly one edge, so $|E|=\\dbinom{n}{2}$."
    }
   ]
  },
  "cm-6-03": {
   "prompt": "Determine: does there exist a simple graph with $5$ vertices whose degree sequence is $(4,4,4,4,2)$? (enter exists or does not exist)",
   "blanks": [
    "Does it exist?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "First check the degree sum: $4+4+4+4+2=18$, which is even ✔ (the necessary condition of the handshaking lemma is satisfied)."
    },
    {
     "i": 1,
     "en": "But $4$ vertices have degree $4$, and the graph has only $5$ vertices; a degree of $4$ means the vertex is joined to <b>all</b> the other vertices."
    },
    {
     "i": 2,
     "en": "Let these $4$ vertices be $v_1,v_2,v_3,v_4$; they are pairwise adjacent, and they are all adjacent to the 5th vertex (vertex $5$, that is $v_5$)."
    },
    {
     "i": 3,
     "en": "Then the degree of $v_5$ is at least $4$, contradicting $\\deg(v_5)=2$."
    },
    {
     "i": 4,
     "en": "Hence no such simple graph <b>exists</b>. (Degree sequences can be checked systematically with the Havel–Hakimi algorithm.)"
    }
   ]
  },
  "cm-6-04": {
   "prompt": "A connected planar graph has $10$ vertices and $15$ edges. Into how many faces does it divide the plane (including the outer face)?",
   "blanks": [
    "Number of faces"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Euler's formula: for a connected planar graph, $v-e+f=2$."
    },
    {
     "i": 1,
     "en": "Substituting $v=10,\\ e=15$: $10-15+f=2\\Rightarrow f=7$."
    },
    {
     "i": 2,
     "en": "(Including the outer face.)"
    }
   ]
  },
  "cm-7-01": {
   "prompt": "What is the necessary and sufficient condition for a connected graph to have an Euler circuit? (Describe it in terms of vertex degrees.)",
   "blanks": [
    "Condition"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Theorem: a connected graph has an Euler circuit $\\iff$ every vertex has <b>even</b> degree."
    },
    {
     "i": 1,
     "en": "Intuitive reason: each time an Euler circuit passes through a vertex it \\\"enters once and leaves once\\\", contributing 2 to the degree."
    },
    {
     "i": 2,
     "en": "Similarly, an Euler path (not a circuit) exists $\\iff$ there are exactly $0$ or $2$ odd-degree vertices."
    }
   ]
  },
  "cm-7-02": {
   "prompt": "When Dijkstra's algorithm is used to find a shortest path, if the graph contains a <b>negative-weight edge</b>, is the algorithm still correct? (enter correct or not correct)",
   "blanks": [
    "Still correct?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The correctness of Dijkstra's greedy approach relies on the property that \\\"a settled shortest distance is never improved again\\\","
    },
    {
     "i": 1,
     "en": "and this requires all edge weights to be <b>non-negative</b>."
    },
    {
     "i": 2,
     "en": "When negative-weight edges exist, detouring along a negative edge may give a shorter route than the greedy choice, and the algorithm produces a wrong result."
    },
    {
     "i": 3,
     "en": "In that case the Bellman–Ford algorithm should be used (it handles negative weights and can detect negative cycles)."
    },
    {
     "i": 4,
     "en": "So fill in \\\"not correct\\\"."
    }
   ]
  },
  "cm-7-03": {
   "prompt": "Following graph H of 2025 paper C2 (a directed graph with starting point $S$). The question on the “order in which vertices are extracted” by Dijkstra's algorithm depends on the figure. Now: what is the time complexity of Dijkstra's algorithm when implemented with a binary heap? (Express it in terms of $V,E$.)",
   "blanks": [
    "Time complexity"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Use a binary heap as the priority queue:"
    },
    {
     "i": 1,
     "en": "Each vertex is extracted once, giving $O(V\\log V)$ in total; each edge is relaxed once (and may be pushed into the queue), giving $O(E\\log V)$ in total."
    },
    {
     "i": 2,
     "en": "Altogether $O((V+E)\\log V)$, which for a connected graph is usually written $O(E\\log V)$."
    },
    {
     "i": 3,
     "en": "(A naive array implementation gives $O(V^{2})$; a Fibonacci heap improves it to $O(E+V\\log V)$.)"
    }
   ]
  },
  "cm-7-04": {
   "prompt": "Does the complete graph $K_{n}$ ($n\\ge3$) always have a Hamiltonian circuit? (enter always or not always)",
   "blanks": [
    "Conclusion"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Any two vertices of $K_{n}$ are adjacent, so we may traverse all the vertices in any order and return to the starting point;"
    },
    {
     "i": 1,
     "en": "for example $v_{1}\\to v_{2}\\to\\cdots\\to v_{n}\\to v_{1}$ is a Hamiltonian circuit."
    },
    {
     "i": 2,
     "en": "Hence for $n\\ge3$, $K_{n}$ <b>definitely</b> has a Hamiltonian circuit."
    },
    {
     "i": 3,
     "en": "(Note: deciding whether a Hamiltonian circuit exists in a general graph is NP-complete; there is no simple necessary and sufficient condition.)"
    }
   ]
  },
  "cm-8-01": {
   "prompt": "State the Max-flow min-cut theorem.",
   "blanks": [
    "Statement of the theorem"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Max-flow min-cut theorem:</b> in a flow network, the <b>value of a maximum flow</b> from the source $s$ to the sink $t$ equals the <b>capacity of a minimum cut</b> among all $s$-$t$ cuts."
    },
    {
     "i": 1,
     "en": "That is, $\\displaystyle\\max_{f}|f|=\\min_{C}\\operatorname{cap}(C)$."
    },
    {
     "i": 2,
     "en": "Key points:"
    },
    {
     "i": 3,
     "en": "① A cut $(S,T)$ is a partition of the vertices into $S\\ni s$ and $T\\ni t$; its capacity is the sum of the weights of all edges directed from $S$ to $T$ (counting only the $S\\to T$ direction)."
    },
    {
     "i": 4,
     "en": "② Proof idea: the capacity of any cut $\\ge$ the value of any flow (a flow must cross the cut); equality is attained when no augmenting path exists in the residual network."
    },
    {
     "i": 5,
     "en": "③ In practice: first find a maximum flow, then do a reachability search from $s$ in the residual network; the cut given by the reachable set $S$ is a minimum cut."
    }
   ]
  },
  "cm-8-02": {
   "prompt": "When finding a maximum flow, one standard way to determine whether the current flow is maximum is to look at the residual network. What is the condition?",
   "blanks": [
    "Condition"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Theorem: a flow $f$ is a maximum flow $\\iff$ its residual network $G_{f}$ contains <b>no</b> path from the source $s$ to the sink $t$ (no augmenting path)."
    },
    {
     "i": 1,
     "en": "If an augmenting path exists, pushing more flow along it yields a larger flow;"
    },
    {
     "i": 2,
     "en": "if none exists, then in the residual network the vertices reachable from $s$ are exactly $S$, which forms a cut whose capacity is exactly the current flow value, so by the max-flow min-cut theorem the flow is already maximum."
    }
   ]
  },
  "cm-8-03": {
   "prompt": "In a flow network, if the capacity of every edge is an integer, then the value of the maximum flow must be an integer. (enter yes or no)",
   "blanks": [
    "Integer?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is the \\\"integral flow theorem\\\":"
    },
    {
     "i": 1,
     "en": "if all capacities are integers, then there is a maximum flow in which the flow on every edge is an integer."
    },
    {
     "i": 2,
     "en": "Reason: the Ford–Fulkerson algorithm starts from the zero flow and each augmentation along an augmenting path is $=\\min$ (residual capacities), an integer,"
    },
    {
     "i": 3,
     "en": "so the flow remains integral after every step, and the maximum flow obtained when the algorithm terminates is also integral."
    }
   ]
  },
  "cm-9-01": {
   "prompt": "A tree has $15$ vertices. How many edges does it have?",
   "blanks": [
    "Number of edges"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Characteristic property of trees: a tree with $n$ vertices has exactly $n-1$ edges."
    },
    {
     "i": 1,
     "en": "Hence $15-1=14$ edges."
    },
    {
     "i": 2,
     "en": "(Equivalent characterisations: connected and acyclic; $n-1$ edges and acyclic; exactly one simple path between any two vertices.)"
    }
   ]
  },
  "cm-9-02": {
   "prompt": "State the steps of Kruskal's algorithm for finding a minimum spanning tree (summarize the key operation in one sentence).",
   "blanks": [
    "Key operation"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Kruskal's algorithm:</b>"
    },
    {
     "i": 1,
     "en": "① Sort all edges of the graph by weight <b>from smallest to largest</b>;"
    },
    {
     "i": 2,
     "en": "② Examine each edge in turn: if adding it to the current forest does not <b>form a cycle</b>, add it; otherwise skip it;"
    },
    {
     "i": 3,
     "en": "③ Stop when the number of chosen edges reaches $n-1$ ($n$ being the number of vertices)."
    },
    {
     "i": 4,
     "en": "Correctness: this is a greedy algorithm on a matroid, and it can be proved to yield the globally optimal minimum spanning tree."
    },
    {
     "i": 5,
     "en": "(Compare Prim's algorithm: start from one vertex and each time add the minimum edge joining the \\\"chosen set\\\" and the \\\"unchosen set\\\".)"
    }
   ]
  },
  "cm-9-03": {
   "prompt": "How many distinct spanning trees does the complete graph $K_{n}$ have? (Use Cayley's formula; give the expression in terms of $n$.)",
   "blanks": [
    "Number of spanning trees"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Cayley's formula:</b> the complete graph $K_{n}$ has $n^{n-2}$ distinct spanning trees."
    },
    {
     "i": 1,
     "en": "For example, $K_{3}$ has $3^{1}=3$ spanning trees and $K_{4}$ has $4^{2}=16$."
    },
    {
     "i": 2,
     "en": "(This result can also be proved by the bijection between Prüfer sequences and spanning trees.)"
    }
   ]
  },
  "cm-10-01": {
   "prompt": "A binary tree has $i$ internal vertices. How many leaves does it have?",
   "blanks": [
    "Number of leaves"
   ],
   "solution": [
    {
     "i": 0,
     "en": "For a full binary tree (every internal vertex has exactly 2 children): let $\\ell$ be the number of leaves and $i$ the number of internal vertices,"
    },
    {
     "i": 1,
     "en": "then the number of edges $=2i$ (each internal vertex has 2 edges going down), and also the number of edges $=\\ell+i-1$ (a property of trees)."
    }
   ]
  },
  "cm-10-02": {
   "prompt": "The infix form of an expression is $a+b\\times c$. Write it in postfix (postfix / reverse Polish) form.",
   "blanks": [
    "Postfix form"
   ],
   "solution": [
    {
     "i": 0,
     "en": "First draw the expression tree according to operator precedence: multiplication takes precedence, so the root is $+$ and the right subtree is $\\times$."
    },
    {
     "i": 1,
     "en": "Root $+$; left child $a$; right child $\\times$; the left child of $\\times$ is $b$ and its right child is $c$."
    },
    {
     "i": 2,
     "en": "Postorder traversal (left, right, root): $a\\to b\\to c\\to \\times\\to +$, i.e. <b>abc*+</b>."
    },
    {
     "i": 3,
     "en": "(Infix $a+b\\times c$; prefix $+a\\times bc$.)"
    }
   ]
  },
  "cm-10-03": {
   "prompt": "Huffman coding: the characters and their frequencies are $A:5,\\ B:2,\\ C:1,\\ D:1$. Find the codeword length (number of bits) of $A$ in an optimal code.",
   "blanks": [
    "Code length of $A$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Constructing the Huffman tree:</b> each time merge the two nodes of smallest frequency."
    },
    {
     "i": 1,
     "en": "Frequency set $\\{5,2,1,1\\}$. Merge the two smallest: $1+1=2$ (the parent of $C,D$), giving $\\{5,2,2\\}$."
    },
    {
     "i": 2,
     "en": "Then merge the two smallest: $2+2=4$, giving $\\{5,4\\}$."
    },
    {
     "i": 3,
     "en": "Finally merge $5+4=9$ as the root."
    },
    {
     "i": 4,
     "en": "<b>Tree shape:</b> the left child of the root $9$ is weight $5$ (the letter $A$), and the right child is the subtree of weight $4$."
    },
    {
     "i": 5,
     "en": "Hence $A$ is at depth $1$, so its codeword has length <b>1</b> bit."
    },
    {
     "i": 6,
     "en": "(A corresponding code is, for example, $A=0$, $B=10$, $C=110$, $D=111$; average codeword length $=\\frac{5\\cdot1+2\\cdot2+1\\cdot3+1\\cdot3}{9}=\\frac{15}{9}=1.667$ bits/character.)"
    }
   ]
  },
  "cm-10-04": {
   "prompt": "For a binary tree with $n$ vertices, what shape corresponds to its maximum height (the most levels)? Express the maximum height in terms of $n$.",
   "blanks": [
    "Maximum height"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The height (number of levels) of a binary tree depends on its shape."
    },
    {
     "i": 1,
     "en": "The \\\"thinnest\\\" case: every internal vertex has only one child, forming a chain,"
    },
    {
     "i": 2,
     "en": "in which case, counted in \\\"levels\\\" (root at level 1) there are $n$ levels; counted in \\\"edges\\\", the height is $n-1$."
    },
    {
     "i": 3,
     "en": "The \\\"fattest\\\" case (completely balanced) has height $\\lceil\\log_{2}(n+1)\\rceil$."
    },
    {
     "i": 4,
     "en": "So the maximum height is $n$ (levels) or $n-1$ (edges); the question counts levels and gives $n$."
    }
   ]
  },
  "cm-11-01": {
   "prompt": "Simplify the Boolean expression $x+\\bar{x}y$ (absorption law).",
   "blanks": [
    "Simplified result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$x+\\bar{x}y=(x+\\bar{x})(x+y)$ (distributive law: $a+\\bar a b=(a+\\bar a)(a+b)$)."
    },
    {
     "i": 1,
     "en": "Since $x+\\bar x=1$, we get $=1\\cdot(x+y)=x+y$."
    },
    {
     "i": 2,
     "en": "This is called the absorption law."
    }
   ]
  },
  "cm-11-02": {
   "prompt": "Use De Morgan's laws to simplify $\\overline{x\\bar{y}}$.",
   "blanks": [
    "Simplified result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "De Morgan's laws: $\\overline{ab}=\\bar a+\\bar b$, $\\overline{a+b}=\\bar a\\bar b$."
    }
   ]
  },
  "cm-11-03": {
   "prompt": "Write the simplified sum-of-products form of $\\bar{x}\\bar{y}+\\bar{x}y+xy$.",
   "blanks": [
    "Simplified result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Grouping by $x$: $(\\bar x\\bar y+\\bar x y)+(xy)$ is inconvenient; instead combine as follows:"
    },
    {
     "i": 3,
     "en": "Altogether: $\\bar x\\bar y+\\bar x y+xy=\\bar x+xy=\\bar x+y$."
    },
    {
     "i": 4,
     "en": "(The result can also be read off from a Karnaugh map.)"
    }
   ]
  },
  "cm-11-04": {
   "prompt": "Let the inputs of a half adder be $x,y$, with outputs the sum $s$ and the carry $c$. Write the Boolean expressions for $s$ and $c$ (using XOR and AND).",
   "blanks": [
    "$s$",
    "$c$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "A half adder performs one-bit binary addition: the sum bit and the carry bit of $x+y$."
    },
    {
     "i": 1,
     "en": "Truth table: $0+0\\to(0,0)$; $0+1\\to(1,0)$; $1+0\\to(1,0)$; $1+1\\to(0,1)$ (sum 0, carry 1, since 2 is written 10)."
    },
    {
     "i": 2,
     "en": "The sum bit is 1 when the inputs differ, which is <b>XOR</b>: $s=x\\oplus y=x\\bar y+\\bar x y$."
    },
    {
     "i": 3,
     "en": "The carry bit is 1 when both inputs are 1, which is <b>AND</b>: $c=xy$."
    }
   ]
  },
  "cm-12-01": {
   "prompt": "Prove: $\\sqrt{2}$ is irrational. (Give the method used in the proof.)",
   "blanks": [
    "Method"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Proof by contradiction.</b> Suppose $\\sqrt{2}$ is rational; then it can be written as a fraction in lowest terms $\\sqrt{2}=\\dfrac{p}{q}$, where $p,q$ are coprime and $q\\ne0$."
    },
    {
     "i": 1,
     "en": "Squaring both sides: $2q^{2}=p^{2}$."
    },
    {
     "i": 2,
     "en": "Hence $p^{2}$ is even, so $p$ is even (the square of an odd number is still odd). Let $p=2k$."
    },
    {
     "i": 3,
     "en": "Substituting gives $2q^{2}=4k^{2}$, i.e. $q^{2}=2k^{2}$, so $q^{2}$ is also even, and hence $q$ is also even."
    },
    {
     "i": 4,
     "en": "Thus $p,q$ are both even, contradicting \\\"$p,q$ are coprime\\\"."
    },
    {
     "i": 5,
     "en": "Therefore $\\sqrt{2}$ is not rational, i.e. it is irrational. ∎"
    }
   ]
  },
  "cm-12-02": {
   "prompt": "Prove: among any $n\\ge2$ people, there are always two people who know the same number of people in the group (an application of the “handshaking lemma”; assume the acquaintance relation is symmetric). Give the key justification of the proof.",
   "blanks": [
    "Key justification"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Regard each person's \\\"number of acquaintances\\\" as a degree, taking values in $0,1,\\dots,n-1$, i.e. $n$ possible values."
    },
    {
     "i": 1,
     "en": "<b>Key:</b> $0$ and $n-1$ cannot both occur (if someone knows nobody, then nobody can know everybody)."
    },
    {
     "i": 2,
     "en": "So there are in fact only $n-1$ possible values, while the number of people is $n$."
    },
    {
     "i": 3,
     "en": "By the <b>Pigeonhole Principle</b>, distributing $n$ people among $n-1$ possible values means two people must have the same value. ∎"
    }
   ]
  },
  "cm-12-03": {
   "prompt": "Determine: “every binary tree has more internal vertices than leaves”. (enter true or false)",
   "blanks": [
    "True/False"
   ],
   "solution": [
    {
     "i": 0,
     "en": "False. For a full binary tree (every internal vertex has exactly 2 children), $\\ell=i+1$, i.e. the number of leaves is <b>greater</b> than the number of internal vertices."
    },
    {
     "i": 1,
     "en": "For example, a full binary tree with only a root (an internal vertex) has 2 leaves: $i=1,\\ \\ell=2$."
    },
    {
     "i": 2,
     "en": "So \\\"the number of internal vertices is greater than the number of leaves\\\" does not hold."
    }
   ]
  },
  "cm-12-04": {
   "prompt": "Let $f:\\mathbb{Z}\\to\\mathbb{Z}$, $f(n)=2n$. Determine whether $f$ is surjective (onto). (enter yes or no)",
   "blanks": [
    "Surjective?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The image of $f$ is the set of all <b>even numbers</b>, i.e. $\\{2n:n\\in\\mathbb{Z}\\}$."
    },
    {
     "i": 1,
     "en": "Odd numbers (such as $1$) are not in the image, so there is no $n$ with $f(n)=1$."
    },
    {
     "i": 2,
     "en": "Therefore $f$ is not surjective (which also shows it is not bijective)."
    },
    {
     "i": 3,
     "en": "(But $f$ is injective: $2n_1=2n_2\\Rightarrow n_1=n_2$.)"
    }
   ]
  },
  "cm-13-01": {
   "prompt": "<svg viewBox=\"0 0 600 340\" width=\"100%\" role=\"img\" style=\"max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px\"><defs><marker id=\"ahDij\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L0,6 L8,3 z\" fill=\"#5b6478\"/></marker></defs><text x=\"12\" y=\"22\" font-size=\"14\" font-weight=\"700\" fill=\"#2b3445\">Directed graph H (numbers on the arrows are edge weights)</text><line x1=\"76.4\" y1=\"168.6\" x2=\"173.6\" y2=\"101.4\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"114.0\" y=\"122.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"125.0\" y=\"134.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">3</text><line x1=\"76.8\" y1=\"190.8\" x2=\"183.2\" y2=\"259.2\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"119.0\" y=\"212.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"130.0\" y=\"224.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">5</text><line x1=\"191.1\" y1=\"110.0\" x2=\"198.9\" y2=\"250.0\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"184.0\" y=\"167.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"195.0\" y=\"179.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"207.1\" y1=\"100.3\" x2=\"322.9\" y2=\"169.7\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"254.0\" y=\"122.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"265.0\" y=\"134.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">6</text><line x1=\"216.8\" y1=\"259.2\" x2=\"323.2\" y2=\"190.8\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"259.0\" y=\"212.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"270.0\" y=\"224.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">2</text><line x1=\"217.2\" y1=\"259.8\" x2=\"452.8\" y2=\"120.2\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"324.0\" y=\"177.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"335.0\" y=\"189.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">4</text><line x1=\"357.6\" y1=\"170.5\" x2=\"452.4\" y2=\"119.5\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"394.0\" y=\"132.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"405.0\" y=\"144.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"358.7\" y1=\"187.0\" x2=\"521.3\" y2=\"248.0\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"429.0\" y=\"204.5\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"440.0\" y=\"216.5\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">7</text><line x1=\"478.7\" y1=\"128.0\" x2=\"531.3\" y2=\"237.0\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahDij)\"/><rect x=\"494.0\" y=\"169.5\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"505.0\" y=\"181.5\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">2</text><circle cx=\"60.0\" cy=\"180.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"60.0\" y=\"185.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">S</text><circle cx=\"190.0\" cy=\"90.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"190.0\" y=\"95.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">A</text><circle cx=\"200.0\" cy=\"270.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"200.0\" y=\"275.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">B</text><circle cx=\"340.0\" cy=\"180.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"340.0\" y=\"185.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">C</text><circle cx=\"470.0\" cy=\"110.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"470.0\" y=\"115.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">D</text><circle cx=\"540.0\" cy=\"255.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"540.0\" y=\"260.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">E</text></svg><br><b>(a)</b> Run Dijkstra's algorithm from the source $S$ and give the order in which the vertices are extracted (separate with →).<br><b>(b)</b> Find the length of the shortest path from $S$ to $E$.<br><b>(c)</b> Write down that shortest path.",
   "blanks": [
    "Order of extraction (separate with - or ,)",
    "Shortest distance from $S$ to $E$",
    "Shortest path (separate with - or ,)"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Algorithm review:</b> in each round Dijkstra selects from the unsettled vertices the vertex $u$ with the smallest current distance, adds it to the settled set,"
    },
    {
     "i": 1,
     "en": "and relaxes all its outgoing neighbours using $u$. All edge weights are required to be non-negative."
    },
    {
     "i": 2,
     "en": "<b>Step-by-step process ($d$ denotes the currently known shortest distance):</b>"
    },
    {
     "i": 3,
     "en": "Initial: $d(S)=0$, the rest are $\\infty$."
    },
    {
     "i": 4,
     "en": "<b>Round 1:</b> extract $S$ ($d=0$). Relax $S\\to A$: $d(A)=3$; $S\\to B$: $d(B)=5$."
    },
    {
     "i": 5,
     "en": "<b>Round 2:</b> the smallest among the unsettled is $A$ (3), so extract $A$."
    },
    {
     "i": 6,
     "en": "Relax $A\\to B$: $3+1=4 < 5$ → $d(B)=4$ (updated!); $A\\to C$: $d(C)=3+6=9$."
    },
    {
     "i": 7,
     "en": "<b>Round 3:</b> the smallest is $B$ (4), so extract $B$."
    },
    {
     "i": 8,
     "en": "Relax $B\\to C$: $4+2=6 < 9$ → $d(C)=6$; $B\\to D$: $d(D)=4+4=8$."
    },
    {
     "i": 9,
     "en": "<b>Round 4:</b> the smallest is $C$ (6), so extract $C$."
    },
    {
     "i": 10,
     "en": "Relax $C\\to D$: $6+1=7 < 8$ → $d(D)=7$; $C\\to E$: $d(E)=6+7=13$."
    },
    {
     "i": 11,
     "en": "<b>Round 5:</b> the smallest is $D$ (7), so extract $D$. Relax $D\\to E$: $7+2=9 < 13$ → $d(E)=9$."
    },
    {
     "i": 12,
     "en": "<b>Round 6:</b> extract $E$ (9)."
    },
    {
     "i": 13,
     "en": "<b>(a) Order of extraction:</b> $S \\to A \\to B \\to C \\to D \\to E$"
    },
    {
     "i": 14,
     "en": "<b>(b) Final distances:</b> $d(S)=0,\\ d(A)=3,\\ d(B)=4,\\ d(C)=6,\\ d(D)=7,\\ d(E)=9$. So the shortest distance from $S$ to $E$ is <b>9</b>."
    },
    {
     "i": 15,
     "en": "<b>(c) Shortest path:</b> trace back along the updates of $d$: $E\\leftarrow D\\leftarrow C\\leftarrow B\\leftarrow A\\leftarrow S$,"
    },
    {
     "i": 16,
     "en": "i.e. $S \\to A \\to B \\to C \\to D \\to E$, of length $3+1+2+1+2=9$ ✔"
    },
    {
     "i": 17,
     "en": "<b>Common pitfalls:</b> ① if $d(B)$ is not updated in Round 2 (left at 5), everything afterwards is wrong;"
    },
    {
     "i": 18,
     "en": "② using $S\\to B\\to D\\to E$ ($5+4+2=11$) is not shortest;"
    },
    {
     "i": 19,
     "en": "③ you must answer according to the \\\"order of extraction\\\", not by vertex numbering."
    }
   ]
  },
  "cm-13-02": {
   "prompt": "<svg viewBox=\"0 0 600 340\" width=\"100%\" role=\"img\" style=\"max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px\"><text x=\"12\" y=\"22\" font-size=\"14\" font-weight=\"700\" fill=\"#2b3445\">Weighted undirected graph G</text><line x1=\"60.0\" y1=\"140.0\" x2=\"60.0\" y2=\"240.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"49.0\" y=\"177.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"60.0\" y=\"189.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">3</text><line x1=\"80.0\" y1=\"118.9\" x2=\"230.0\" y2=\"111.1\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"144.0\" y=\"102.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"155.0\" y=\"114.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">10</text><line x1=\"79.8\" y1=\"257.0\" x2=\"170.2\" y2=\"243.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"114.0\" y=\"237.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"125.0\" y=\"249.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">8</text><line x1=\"75.7\" y1=\"247.6\" x2=\"234.3\" y2=\"122.4\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"144.0\" y=\"172.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"155.0\" y=\"184.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">6</text><line x1=\"209.9\" y1=\"241.5\" x2=\"370.1\" y2=\"253.5\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"279.0\" y=\"234.5\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"290.0\" y=\"246.5\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">4</text><line x1=\"263.9\" y1=\"124.4\" x2=\"376.1\" y2=\"240.6\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"309.0\" y=\"169.5\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"320.0\" y=\"181.5\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">5</text><line x1=\"270.0\" y1=\"111.3\" x2=\"380.0\" y2=\"118.7\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"314.0\" y=\"102.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"325.0\" y=\"114.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">2</text><line x1=\"391.5\" y1=\"235.1\" x2=\"398.5\" y2=\"139.9\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"384.0\" y=\"174.5\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"395.0\" y=\"186.5\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">7</text><line x1=\"407.9\" y1=\"246.1\" x2=\"502.1\" y2=\"198.9\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"444.0\" y=\"209.5\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"455.0\" y=\"221.5\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">9</text><line x1=\"417.3\" y1=\"130.1\" x2=\"502.7\" y2=\"179.9\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"449.0\" y=\"142.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"460.0\" y=\"154.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><circle cx=\"60.0\" cy=\"120.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"60.0\" y=\"125.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">A</text><circle cx=\"60.0\" cy=\"260.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"60.0\" y=\"265.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">B</text><circle cx=\"190.0\" cy=\"240.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"190.0\" y=\"245.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">C</text><circle cx=\"250.0\" cy=\"110.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"250.0\" y=\"115.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">D</text><circle cx=\"390.0\" cy=\"255.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"390.0\" y=\"260.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">E</text><circle cx=\"400.0\" cy=\"120.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"400.0\" y=\"125.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">F</text><circle cx=\"520.0\" cy=\"190.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"520.0\" y=\"195.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">G</text></svg><br><b>(a)</b> Use Kruskal's algorithm to find a minimum spanning tree, and list the selected edges <b>in the order they are chosen</b> (e.g. AB, CD).<br><b>(b)</b> Find the total weight of the minimum spanning tree.",
   "blanks": [
    "Order of edge selection (comma-separated, in selection order)",
    "Total weight"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Kruskal's algorithm:</b> ① sort all edges by weight from smallest to largest; ② examine them in turn and add each edge if it does not form a cycle; ③ stop once $n-1$ edges have been chosen."
    },
    {
     "i": 1,
     "en": "<b>Edges sorted by weight:</b>"
    },
    {
     "i": 3,
     "en": "<b>Check one by one (7 vertices already chosen, so $7-1=6$ edges must be chosen):</b>"
    },
    {
     "i": 4,
     "en": "① FG(1): does not form a cycle → <b>chosen</b> (1 edge chosen)"
    },
    {
     "i": 5,
     "en": "② DF(2): $D$ is connected to $F$-$G$ but $D$ is new → does not form a cycle → <b>chosen</b> (2)"
    },
    {
     "i": 6,
     "en": "③ AB(3): does not form a cycle → <b>chosen</b> (3)"
    },
    {
     "i": 7,
     "en": "④ CE(4): does not form a cycle → <b>chosen</b> (4)"
    },
    {
     "i": 8,
     "en": "⑤ DE(5): $D$ belongs to $\\{F,G,D\\}$ and $E$ belongs to $\\{C,E\\}$, two different groups → does not form a cycle → <b>chosen</b> (5)"
    },
    {
     "i": 9,
     "en": "⑥ BD(6): $B$ belongs to $\\{A,B\\}$ and $D$ belongs to $\\{F,G,D,C,E\\}$, different groups → does not form a cycle → <b>chosen</b> (6)"
    },
    {
     "i": 10,
     "en": "There are now $7-1=6$ edges, and all 7 vertices are connected — <b>stop</b>."
    },
    {
     "i": 11,
     "en": "<b>(a) Order of chosen edges:</b> <code>FG, DF, AB, CE, DE, BD</code>"
    },
    {
     "i": 12,
     "en": "<b>(b) Total weight:</b> $1+2+3+4+5+6 = \\mathbf{21}$"
    },
    {
     "i": 13,
     "en": "<b>Verify connectivity:</b> use union-find to check that in the end all vertices belong to the same set ✔ (otherwise some edge was chosen wrongly)."
    },
    {
     "i": 14,
     "en": "<b>Uniqueness:</b> all edge weights are distinct → the minimum spanning tree is <b>unique</b>."
    },
    {
     "i": 15,
     "en": "If edges of equal weight exist, there may be several different minimum spanning trees (with the same total weight)."
    },
    {
     "i": 16,
     "en": "<b>Common pitfalls:</b> ① the edges must be examined in weight order (not in vertex order);"
    },
    {
     "i": 17,
     "en": "② once an edge would form a cycle it must be skipped and you continue with the next edge, rather than sorting again;"
    },
    {
     "i": 18,
     "en": "③ stop as soon as the number of edges reaches $n-1$; choosing one more edge would necessarily form a cycle."
    }
   ]
  },
  "cm-13-03": {
   "prompt": "<svg viewBox=\"0 0 600 340\" width=\"100%\" role=\"img\" style=\"max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px\"><defs><marker id=\"ahMf\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L0,6 L8,3 z\" fill=\"#5b6478\"/></marker></defs><text x=\"12\" y=\"22\" font-size=\"14\" font-weight=\"700\" fill=\"#2b3445\">Flow network (source S, sink E; numbers are capacities)</text><line x1=\"66.8\" y1=\"169.2\" x2=\"173.2\" y2=\"100.8\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"109.0\" y=\"122.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"120.0\" y=\"134.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">6</text><line x1=\"66.8\" y1=\"190.8\" x2=\"173.2\" y2=\"259.2\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"109.0\" y=\"212.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"120.0\" y=\"224.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">3</text><line x1=\"210.0\" y1=\"90.0\" x2=\"360.0\" y2=\"90.0\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"274.0\" y=\"77.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"285.0\" y=\"89.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"204.5\" y1=\"103.8\" x2=\"365.5\" y2=\"256.2\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"274.0\" y=\"167.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"285.0\" y=\"179.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">4</text><line x1=\"204.5\" y1=\"256.2\" x2=\"365.5\" y2=\"103.8\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"274.0\" y=\"167.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"285.0\" y=\"179.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"210.0\" y1=\"270.0\" x2=\"360.0\" y2=\"270.0\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"274.0\" y=\"257.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"285.0\" y=\"269.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">2</text><line x1=\"397.4\" y1=\"99.8\" x2=\"522.6\" y2=\"170.2\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"449.0\" y=\"122.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"460.0\" y=\"134.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">4</text><line x1=\"397.4\" y1=\"260.2\" x2=\"522.6\" y2=\"189.8\" stroke=\"#5b6478\" stroke-width=\"2\" marker-end=\"url(#ahMf)\"/><rect x=\"449.0\" y=\"212.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"460.0\" y=\"224.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">5</text><circle cx=\"50.0\" cy=\"180.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"50.0\" y=\"185.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">S</text><circle cx=\"190.0\" cy=\"90.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"190.0\" y=\"95.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">A</text><circle cx=\"190.0\" cy=\"270.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"190.0\" y=\"275.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">B</text><circle cx=\"380.0\" cy=\"90.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"380.0\" y=\"95.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">C</text><circle cx=\"380.0\" cy=\"270.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"380.0\" y=\"275.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">D</text><circle cx=\"540.0\" cy=\"180.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"540.0\" y=\"185.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">E</text></svg><br>Find the value of the maximum flow from the source $S$ to the sink $E$, and give the capacity of the minimum cut.",
   "blanks": [
    "Maximum flow",
    "Minimum cut capacity"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>First state the capacity of each edge:</b> $S\\to A=6$, $S\\to B=3$, $A\\to C=1$, $A\\to D=4$,"
    },
    {
     "i": 2,
     "en": "<b>Method 1: find all $s$-$t$ cuts and take the one of minimum capacity.</b>"
    },
    {
     "i": 3,
     "en": "The capacity of a cut = the sum of the capacities of all edges directed from the $S$ side to the $T$ side (counting only the $S\\to T$ direction)."
    },
    {
     "i": 4,
     "en": "Enumerate all partitions of $\\{A,B,C,D\\}$:"
    },
    {
     "i": 5,
     "en": "· $S$ side $=\\{S\\}$: capacity $=6+3=9$"
    },
    {
     "i": 6,
     "en": "· $S$ side $=\\{S,A\\}$: $A\\to C(1)+A\\to D(4)+S\\to B(3)=8$"
    },
    {
     "i": 7,
     "en": "· $S$ side $=\\{S,B\\}$: $S\\to A(6)+B\\to C(1)+B\\to D(2)=9$"
    },
    {
     "i": 8,
     "en": "· $S$ side $=\\{S,C\\}$: $S\\to A(6)+S\\to B(3)+C\\to E(4)=13$"
    },
    {
     "i": 9,
     "en": "· $S$ side $=\\{S,D\\}$: $S\\to A(6)+S\\to B(3)+D\\to E(5)=14$"
    },
    {
     "i": 10,
     "en": "· $S$ side $=\\{S,A,B\\}$: $A\\to C(1)+A\\to D(4)+B\\to C(1)+B\\to D(2)=8$"
    },
    {
     "i": 11,
     "en": "· $S$ side $=\\{S,A,B,D\\}$: $A\\to C(1)+B\\to C(1)+D\\to E(5)=7$ ← <b>minimum</b>"
    },
    {
     "i": 12,
     "en": "· $S$ side $=\\{S,A,B,C\\}$: $A\\to D(4)+B\\to D(2)+C\\to E(4)=10$"
    },
    {
     "i": 13,
     "en": "· all remaining partitions have capacity $\\ge 8$"
    },
    {
     "i": 14,
     "en": "<b>Minimum cut $=\\{S,A,B,D\\} \\mid \\{C,E\\}$, capacity $=1+1+5=\\mathbf{7}$.</b>"
    },
    {
     "i": 15,
     "en": "<b>Method 2: find a maximum flow directly (Edmonds–Karp / augmenting paths).</b>"
    },
    {
     "i": 16,
     "en": "· Path 1: $S\\to A\\to C\\to E$, bottleneck $\\min(6,1,4)=1$ → flow 1"
    },
    {
     "i": 17,
     "en": "· Path 2: $S\\to A\\to D\\to E$, bottleneck $\\min(5,4,5)=4$ → flow 4 (total 5)"
    },
    {
     "i": 18,
     "en": "· Path 3: $S\\to B\\to D\\to E$, bottleneck $\\min(3,2,1)=1$ → flow 1 (total 6)"
    },
    {
     "i": 19,
     "en": "· Path 4: $S\\to B\\to C\\to E$, bottleneck $\\min(2,1,3)=1$ → flow 1 (total 7)"
    },
    {
     "i": 20,
     "en": "At this point the capacity of $C\\to E$ is exhausted (paths 1 and 4 each use 1 unit, 2 units in total)."
    },
    {
     "i": 21,
     "en": "check the residual network: from $S$ we can only reach $A$ (0 left) and $B$ (0 left) — there is no augmenting path, so the flow is maximum."
    },
    {
     "i": 22,
     "en": "<b>Maximum flow $= \\mathbf{7}$.</b>"
    },
    {
     "i": 23,
     "en": "<b>Verify the theorem:</b> maximum flow $7$ $=$ minimum cut capacity $7$ ✔ (max-flow min-cut theorem)"
    },
    {
     "i": 24,
     "en": "<b>Key points for the exam answer:</b> the question asks you to \\\"draw all possible cuts\\\", so the enumeration above must be written out,"
    },
    {
     "i": 25,
     "en": "not just the final number — the enumeration of the cuts is itself where the marks are."
    }
   ]
  },
  "cm-13-04": {
   "prompt": "<svg viewBox=\"0 0 600 340\" width=\"100%\" role=\"img\" style=\"max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px\"><text x=\"12\" y=\"22\" font-size=\"14\" font-weight=\"700\" fill=\"#2b3445\">Undirected graph for the adjacency matrix / list</text><line x1=\"100.0\" y1=\"90.0\" x2=\"210.0\" y2=\"90.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"144.0\" y=\"77.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"155.0\" y=\"89.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"80.0\" y1=\"110.0\" x2=\"80.0\" y2=\"230.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"69.0\" y=\"157.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"80.0\" y=\"169.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"230.0\" y1=\"110.0\" x2=\"230.0\" y2=\"230.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"219.0\" y=\"157.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"230.0\" y=\"169.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"100.0\" y1=\"250.0\" x2=\"210.0\" y2=\"250.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"144.0\" y=\"237.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"155.0\" y=\"249.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><line x1=\"250.0\" y1=\"250.0\" x2=\"360.0\" y2=\"250.0\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"294.0\" y=\"237.0\" width=\"22\" height=\"17\" rx=\"3\" fill=\"#ffffff\" opacity=\"0.92\"/><text x=\"305.0\" y=\"249.0\" font-size=\"13\" font-weight=\"600\" fill=\"#b8531e\" text-anchor=\"middle\">1</text><circle cx=\"80.0\" cy=\"90.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"80.0\" y=\"95.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">a</text><circle cx=\"230.0\" cy=\"90.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"230.0\" y=\"95.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">b</text><circle cx=\"80.0\" cy=\"250.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"80.0\" y=\"255.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">c</text><circle cx=\"230.0\" cy=\"250.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"230.0\" y=\"255.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">d</text><circle cx=\"380.0\" cy=\"250.0\" r=\"20\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"380.0\" y=\"255.0\" font-size=\"15\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">e</text></svg><br><b>(a)</b> Write the adjacency matrix of this graph (in alphabetical order $a,b,c,d,e$, using 0/1).<br><b>(b)</b> What is the degree of vertex $d$?",
   "blanks": [
    "Adjacency matrix (25 entries, row by row, separated by spaces or commas)",
    "$\\deg(d)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Adjacency list (read off from the graph):</b>"
    },
    {
     "i": 2,
     "en": "<b>(a) Adjacency matrix</b> (a 1 in row $i$, column $j$ means there is an edge; the matrix of an undirected graph is symmetric):"
    },
    {
     "i": 3,
     "en": "Row $a$: adjacent to $b,c$ → <code>0 1 1 0 0</code>"
    },
    {
     "i": 4,
     "en": "Row $b$: adjacent to $a,d$ → <code>1 0 0 1 0</code>"
    },
    {
     "i": 5,
     "en": "Row $c$: adjacent to $a,d$ → <code>1 0 0 1 0</code>"
    },
    {
     "i": 6,
     "en": "Row $d$: adjacent to $b,c,e$ → <code>0 1 1 0 1</code>"
    },
    {
     "i": 7,
     "en": "Row $e$: adjacent to $d$ → <code>0 0 0 1 0</code>"
    },
    {
     "i": 8,
     "en": "So the matrix is <code>01000;10100;10010;01101;00010</code>."
    },
    {
     "i": 9,
     "en": "<b>(b)</b> $d$ is adjacent to the three vertices $b,c,e$, so $\\deg(d)=\\mathbf{3}$."
    },
    {
     "i": 10,
     "en": "<b>Check (handshaking lemma):</b> the vertex degrees are $2,2,2,3,1$,"
    },
    {
     "i": 11,
     "en": "sum of degrees $=10=2\\times5=2|E|$ ✔ (the graph has 5 edges)"
    },
    {
     "i": 12,
     "en": "<b>Key points:</b> ① the adjacency matrix of an undirected graph must be <b>symmetric</b>; ② the diagonal entries are all 0 (a simple graph has no self-loops);"
    },
    {
     "i": 13,
     "en": "③ the sum of the entries in row $i$ $=\\deg(\\text{vertex}_i)$."
    }
   ]
  },
  "cm-13-05": {
   "prompt": "<svg viewBox=\"0 0 600 320\" width=\"100%\" role=\"img\" style=\"max-width:600px;margin:10px 0;background:#fbfcfe;border:1px solid #e3e8f0;border-radius:8px\"><text x=\"12\" y=\"22\" font-size=\"14\" font-weight=\"700\" fill=\"#2b3445\">Expression tree</text><line x1=\"300\" y1=\"92\" x2=\"160\" y2=\"148\" stroke=\"#5b6478\" stroke-width=\"2\"/><line x1=\"300\" y1=\"92\" x2=\"440\" y2=\"148\" stroke=\"#5b6478\" stroke-width=\"2\"/><line x1=\"160\" y1=\"192\" x2=\"90\" y2=\"243\" stroke=\"#5b6478\" stroke-width=\"2\"/><line x1=\"160\" y1=\"192\" x2=\"230\" y2=\"243\" stroke=\"#5b6478\" stroke-width=\"2\"/><line x1=\"440\" y1=\"192\" x2=\"370\" y2=\"243\" stroke=\"#5b6478\" stroke-width=\"2\"/><line x1=\"440\" y1=\"192\" x2=\"510\" y2=\"243\" stroke=\"#5b6478\" stroke-width=\"2\"/><rect x=\"278\" y=\"48\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#fff4e0\" stroke=\"#b8860b\" stroke-width=\"2\"/><text x=\"300\" y=\"77\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">*</text><rect x=\"138\" y=\"148\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"160\" y=\"177\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">+</text><rect x=\"418\" y=\"148\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#eef3ff\" stroke=\"#2f5bd7\" stroke-width=\"2\"/><text x=\"440\" y=\"177\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">-</text><rect x=\"68\" y=\"243\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#eaf6ee\" stroke=\"#17915b\" stroke-width=\"2\"/><text x=\"90\" y=\"272\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">a</text><rect x=\"208\" y=\"243\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#eaf6ee\" stroke=\"#17915b\" stroke-width=\"2\"/><text x=\"230\" y=\"272\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">b</text><rect x=\"348\" y=\"243\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#eaf6ee\" stroke=\"#17915b\" stroke-width=\"2\"/><text x=\"370\" y=\"272\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">c</text><rect x=\"488\" y=\"243\" width=\"44\" height=\"44\" rx=\"8\" fill=\"#eaf6ee\" stroke=\"#17915b\" stroke-width=\"2\"/><text x=\"510\" y=\"272\" font-size=\"18\" font-weight=\"700\" fill=\"#1f2a44\" text-anchor=\"middle\">d</text></svg><br>The infix form of this expression tree is $(a+b)\\times(c-d)$. Write its <b>prefix</b> and <b>postfix</b> forms.",
   "blanks": [
    "Prefix form",
    "Postfix form"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Three traversals (all start from the root; they differ in when the root is visited):</b>"
    },
    {
     "i": 1,
     "en": "· <b>Preorder</b>: root → left → right, giving the <b>prefix</b> expression"
    },
    {
     "i": 2,
     "en": "· <b>Inorder</b>: left → root → right, giving the <b>infix</b> expression"
    },
    {
     "i": 3,
     "en": "· <b>Postorder</b>: left → right → root, giving the <b>postfix</b> expression (reverse Polish notation)"
    },
    {
     "i": 4,
     "en": "<b>Prefix (root-left-right):</b>"
    },
    {
     "i": 5,
     "en": "Root $\\times$ → left subtree ($+$ → $a$ → $b$) → right subtree ($-$ → $c$ → $d$)"
    },
    {
     "i": 6,
     "en": "This gives <code>* + a b - c d</code>, written <b>*+ab-cd</b>."
    },
    {
     "i": 7,
     "en": "<b>Postfix (left-right-root):</b>"
    },
    {
     "i": 8,
     "en": "Left subtree ($a$ → $b$ → $+$) → right subtree ($c$ → $d$ → $-$) → root $\\times$"
    },
    {
     "i": 9,
     "en": "This gives <code>a b + c d - *</code>, written <b>ab+cd-*</b>."
    },
    {
     "i": 10,
     "en": "<b>Verify the evaluation of the postfix expression (using a stack):</b>"
    },
    {
     "i": 11,
     "en": "Read $a,b$ and push them → on reaching $+$, pop both, add them and push $(a+b)$ →"
    },
    {
     "i": 12,
     "en": "read $c,d$ and push them → on reaching $-$ pop and push $(c-d)$ → on reaching $*$ pop both, multiply them, giving $(a+b)(c-d)$ ✔"
    },
    {
     "i": 13,
     "en": "<b>Why prefix/postfix are needed:</b> they determine the order of operations uniquely <b>without parentheses</b>,"
    },
    {
     "i": 14,
     "en": "which makes it easy for a computer to evaluate them directly with a stack (used in compilers' intermediate representations and in calculators)."
    },
    {
     "i": 15,
     "en": "<b>Common pitfalls:</b> ① postfix is not simply \\\"infix reversed\\\"; ② do not insert spaces between operators, which causes confusion (the question allows both forms)."
    }
   ]
  },
  "cp-1": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Direct proof</b>: start from the premise $p$ and obtain the conclusion $q$ by logical deduction."
    },
    {
     "i": 1,
     "en": "Example: prove \\\"if $n$ is odd then $n^{2}$ is odd\\\". Let $n=2k+1$; then $n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$ is odd."
    },
    {
     "i": 2,
     "en": "<b>Proof by contrapositive</b>: prove $\\neg q\\to\\neg p$, since it is logically equivalent to $p\\to q$."
    },
    {
     "i": 3,
     "en": "Example: proving \\\"if $n^{2}$ is odd then $n$ is odd\\\" is equivalent to proving \\\"if $n$ is even then $n^{2}$ is even\\\". Let $n=2k$; then $n^{2}=2(2k^{2})$ is even."
    },
    {
     "i": 4,
     "en": "<b>Proof by contradiction</b>: assume $\\neg(p\\to q)$, i.e. \\\"$p$ is true and $q$ is false\\\", and derive a contradiction."
    },
    {
     "i": 5,
     "en": "Example: suppose $n^{2}$ is odd but $n$ is even; then $n^{2}$ is even, contradicting that $n^{2}$ is odd."
    },
    {
     "i": 6,
     "en": "<b>Connection:</b> at the level of propositional logic, proof by contrapositive and proof by contradiction are equivalent (both use $p\\to q\\equiv\\neg q\\to\\neg p$),"
    },
    {
     "i": 7,
     "en": "but proof by contradiction has a wider scope (it can be used to prove nonexistence, irrationality and other propositions that cannot be stated \\\"directly\\\", such as $\\sqrt2$ being irrational)."
    },
    {
     "i": 8,
     "en": "<b>A classic example of reductio ad absurdum:</b> proving that $\\sqrt{2}$ is irrational — suppose $\\sqrt2=p/q$ in lowest terms and derive that $p,q$ are both even, a contradiction."
    }
   ]
  },
  "cp-2": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Base case</b> $n=7$:"
    },
    {
     "i": 1,
     "en": "$7!=5040$, $3^{7}=2187$, and $5040>2187$ ✔"
    },
    {
     "i": 2,
     "en": "<b>Inductive hypothesis</b>: suppose that for some $k\\ge7$ we have $k!>3^{k}$."
    },
    {
     "i": 3,
     "en": "<b>Inductive step</b>: prove $(k+1)!>3^{k+1}$."
    },
    {
     "i": 4,
     "en": "$(k+1)!=(k+1)\\cdot k!>(k+1)\\cdot3^{k}$ (using the inductive hypothesis and $k+1>0$)."
    },
    {
     "i": 5,
     "en": "To obtain $(k+1)!>3^{k+1}=3\\cdot3^{k}$, we only need $k+1>3$, i.e. $k>2$."
    },
    {
     "i": 6,
     "en": "And for $k\\ge7$ we have $k>2$, which clearly holds, so $(k+1)\\cdot3^{k}>3\\cdot3^{k}=3^{k+1}$."
    },
    {
     "i": 7,
     "en": "Thus $(k+1)!>3^{k+1}$, and the inductive step is complete."
    },
    {
     "i": 8,
     "en": "By the principle of mathematical induction, for all $n\\ge7$ we have $n!>3^{n}$. ∎"
    }
   ]
  },
  "cp-3": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Statement of the algorithm:</b> maintain the set $S$ of vertices with settled shortest distances (initially $\\{s\\}$) and the set of unsettled vertices;"
    },
    {
     "i": 1,
     "en": "each round, select from the unsettled vertices the vertex $u$ with the smallest current distance, add it to $S$, and relax all its neighbours using $u$."
    },
    {
     "i": 2,
     "en": "<b>Basis for correctness (with non-negative weights):</b> let $u$ be the unsettled vertex currently closest to the source; if there were a shorter path to $u$,"
    },
    {
     "i": 3,
     "en": "that path must first leave $S$, passing through some edge $(x,y)$ ($x\\in S,y\\notin S$)."
    },
    {
     "i": 4,
     "en": "Then $d(y)\\le d(x)+w(x,y)\\le d(u)$ (non-negative weights ensure $w\\ge0$), contradicting that \\\"$u$ is the smallest\\\"; hence $d(u)$ is already the final shortest distance."
    },
    {
     "i": 5,
     "en": "<b>Counterexample with negative weights:</b> take vertices $s,a,b$ with edges $s\\to a$ of weight $2$, $s\\to b$ of weight $3$, and $b\\to a$ of weight $-2$."
    },
    {
     "i": 6,
     "en": "In the first round Dijkstra selects $a$ (distance 2), fixes $d(a)=2$ and adds it to $S$;"
    },
    {
     "i": 7,
     "en": "in the second round it selects $b$ (distance 3) and relaxes $b\\to a$, obtaining $d(a)\\le3-2=1<2$,"
    },
    {
     "i": 8,
     "en": "but $a$ has already been extracted and is not updated again, so the algorithm wrongly outputs $d(a)=2$, whereas the true shortest distance is $1$ (the path $s\\to b\\to a$)."
    },
    {
     "i": 9,
     "en": "<b>Reason for the failure:</b> non-negative weights are the premise for \\\"the distance of an extracted vertex is never improved again\\\"; negative weights break this premise."
    },
    {
     "i": 10,
     "en": "<b>Alternative algorithms:</b> Bellman–Ford ($O(VE)$) handles negative weights and can detect negative cycles;"
    },
    {
     "i": 11,
     "en": "if all-pairs shortest paths are needed, Johnson's algorithm can be used (first reweight with Bellman–Ford, then run Dijkstra)."
    }
   ]
  },
  "cp-4": {
   "proof": [
    {
     "i": 0,
     "en": "First introduce two basic facts."
    },
    {
     "i": 1,
     "en": "<b>Fact 1: the capacity of any $s$-$t$ cut $\\ge$ the value of any $s$-$t$ flow.</b>"
    },
    {
     "i": 2,
     "en": "Let the cut be $(S,T)$ ($s\\in S,t\\in T$). Sum the flow-conservation relations across the cut:"
    },
    {
     "i": 4,
     "en": "Since $0\\le f(x,y)\\le c(x,y)$ and the second term is $\\ge0$, we have"
    },
    {
     "i": 6,
     "en": "from which $\\max|f|\\le\\min\\operatorname{cap}$ follows immediately."
    },
    {
     "i": 7,
     "en": "<b>Fact 2: if the residual network $G_f$ contains no $s\\to t$ path, then there is a cut whose capacity $=|f|$.</b>"
    },
    {
     "i": 8,
     "en": "Let $S$ be as follows: the set of vertices reachable from $s$ in $G_f$, and $T=V\\setminus S$. Since there is no path, $t\\in T$, so $(S,T)$ is a valid cut."
    },
    {
     "i": 9,
     "en": "For any $x\\in S,y\\in T$: if $f(x,y)<c(x,y)$, then the residual edge $x\\to y$ exists and $y$ should belong to $S$, a contradiction; hence $f(x,y)=c(x,y)$."
    },
    {
     "i": 10,
     "en": "If $f(y,x)>0$, then the residual edge $x\\to y$ exists (a backward edge), again a contradiction; hence $f(y,x)=0$."
    },
    {
     "i": 11,
     "en": "Substituting into the decomposition in Fact 1 gives $|f|=\\operatorname{cap}(S,T)$."
    },
    {
     "i": 12,
     "en": "<b>Combining:</b> by Fact 1, $\\max|f|\\le\\min\\operatorname{cap}$;"
    },
    {
     "i": 13,
     "en": "take a flow $f^{*}$ attaining the maximum; its residual network must contain no augmenting path (otherwise more flow could be pushed), so by Fact 2 there is a cut with $\\operatorname{cap}=|f^{*}|=\\max|f|$."
    },
    {
     "i": 14,
     "en": "Therefore $\\min\\operatorname{cap}\\le\\max|f|$. Squeezing the two sides gives $\\max|f|=\\min\\operatorname{cap}$. ∎"
    }
   ]
  },
  "cp-5": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Algorithm:</b> ① sort all edges by increasing weight; ② examine each edge in turn and add it if adding it does not form a cycle; ③ stop once $n-1$ edges have been chosen."
    },
    {
     "i": 1,
     "en": "<b>Proof (exchange argument):</b> let the algorithm output $T$ and let $T^{*}$ be some minimum spanning tree."
    },
    {
     "i": 2,
     "en": "If $T\\ne T^{*}$, take the first edge $e$ of $T$ (in the order the algorithm adds edges) that is not in $T^{*}$."
    },
    {
     "i": 3,
     "en": "Adding $e$ to $T^{*}$ creates a unique cycle $C$. Since $T$ is a forest, $C$ must contain some edge $e'\\notin T$."
    },
    {
     "i": 4,
     "en": "<b>Key:</b> when the algorithm chose $e$, all edges of smaller weight than $e$ had already been examined."
    },
    {
     "i": 5,
     "en": "By the properties of minimum spanning trees (the cut property), one can prove that $w(e)\\le w(e')$;"
    },
    {
     "i": 6,
     "en": "otherwise, if $w(e')<w(e)$, then the algorithm, before examining $e$, had already processed $e'$: since every edge of the cycle $C$ of $T^{*}\\cup\\{e\\}$ other than $e$ lies in $T^{*}$, the edge $e'$ would not form a cycle with the edges the algorithm had chosen, so the algorithm would have chosen $e'$ rather than $e$, a contradiction."
    },
    {
     "i": 7,
     "en": "Thus $T'=T^{*}-\\{e'\\}+\\{e\\}$ is also a spanning tree with $w(T')\\le w(T^{*})$, hence still a minimum spanning tree,"
    },
    {
     "i": 8,
     "en": "but it has one more edge in common with $T$. Repeating this exchange process, $T^{*}$ can eventually be turned into $T$, so $w(T)=w(T^{*})$."
    },
    {
     "i": 9,
     "en": "Therefore the $T$ output by Kruskal's algorithm is a minimum spanning tree. ∎"
    },
    {
     "i": 10,
     "en": "<b>Another viewpoint:</b> the edge sets of a graph form a <b>graphic matroid</b>, and Kruskal is exactly the greedy algorithm on a matroid, which has been proved optimal for matroids."
    }
   ]
  },
  "cp-6": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Two sets:</b> $|A\\cup B|=|A|+|B|-|A\\cap B|$."
    },
    {
     "i": 1,
     "en": "<b>Three sets:</b>"
    },
    {
     "i": 3,
     "en": "<b>Proof idea (indicator function method):</b> for any element $x$, define the indicator function"
    },
    {
     "i": 4,
     "en": "$\\mathbf{1}_{A}(x)=1$ if $x\\in A$ and $0$ otherwise. Then $|A|=\\sum_{x}\\mathbf{1}_A(x)$."
    },
    {
     "i": 5,
     "en": "The left-hand side $|A\\cup B\\cup C|$ counts the elements that belong to at least one set, each such $x$ contributing $1$."
    },
    {
     "i": 6,
     "en": "On the right-hand side, for the same $x$: if $x$ belongs to $r$ sets ($1\\le r\\le3$), then it is counted"
    },
    {
     "i": 7,
     "en": "$\\dbinom r1-\\dbinom r2+\\dbinom r3$ times."
    },
    {
     "i": 8,
     "en": "Substituting $r=1,2,3$ gives $1,\\ 2-1=1,\\ 3-3+1=1$ respectively, all equal to $1$;"
    },
    {
     "i": 9,
     "en": "and when $x$ belongs to no set ($r=0$), the right-hand side is $0$, agreeing with the left-hand side."
    },
    {
     "i": 10,
     "en": "Thus both sides make the same contribution for every element, and the identity holds. ∎"
    },
    {
     "i": 11,
     "en": "<b>General form:</b> $\\displaystyle\\Big|\\bigcup_{i=1}^{n}A_i\\Big|=\\sum_{\\varnothing\\ne J\\subseteq[n]}(-1)^{|J|+1}\\Big|\\bigcap_{i\\in J}A_i\\Big|$."
    }
   ]
  }
 },
 "proofs": {
  "cp-1": {
   "title": "Overview of common proof methods: direct, contrapositive, contradiction, reductio ad absurdum",
   "statement": "Explain the differences and connections among “direct proof”, “proof by contrapositive” and “proof by contradiction”, and give one example of each that applies to the parity of $n^{2}$."
  },
  "cp-2": {
   "title": "Mathematical induction: prove n! > 3ⁿ (n ≥ 7)",
   "statement": "Use mathematical induction to prove: for every integer $n\\ge7$, $n!>3^{n}$."
  },
  "cp-3": {
   "title": "Dijkstra's algorithm: why can it not handle negative-weight edges?",
   "statement": "(2025 paper C2 required running Dijkstra on a directed graph and giving the dequeue order. The figure cannot be presented here, so this is changed to a conceptual proof question.) State Dijkstra's algorithm and prove: when a negative-weight edge exists, the algorithm may give an incorrect result."
  },
  "cp-4": {
   "title": "Proof of the Max-flow min-cut theorem",
   "statement": "Prove the Max-flow min-cut theorem: in a flow network, the value of the maximum flow from $s$ to $t$ equals the capacity of the minimum $s$-$t$ cut."
  },
  "cp-5": {
   "title": "Kruskal's algorithm yields a minimum spanning tree",
   "statement": "State Kruskal's algorithm and prove that the spanning tree it produces is minimum. (2025 paper B2 presented a specific weighted graph and required finding the MST; the figure cannot be presented, so this is changed to a proof question.)"
  },
  "cp-6": {
   "title": "Inclusion–Exclusion Principle",
   "statement": "State the Inclusion–Exclusion Principle for two and for three sets, and explain the idea of its proof (using characteristic functions or a Venn diagram)."
  }
 }
});
})(typeof window!=="undefined"?window:globalThis);
