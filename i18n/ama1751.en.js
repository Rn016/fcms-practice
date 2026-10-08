/* AMA1751 英文翻译层 — 由 /tmp/fcms/build_i18n.js 生成，请勿手改 */
(function(root){
  if(!root.FCMS) return;
  root.FCMS.registerEn("AMA1751", {
 "name": "Linear Algebra",
 "desc": "Linear systems, determinants, vector spaces, matrices, linear transformations, change of basis, eigenvalues, orthogonality and least squares. Includes four finals (2023–2025) and the midterm sample.",
 "topics": {
  "线性方程组 / 高斯消元": "Systems of Linear Equations / Gaussian Elimination",
  "行列式": "Determinants",
  "向量空间 / 子空间 / 线性相关": "Vector Spaces / Subspaces / Linear Dependence",
  "矩阵运算 / 逆 / 秩": "Matrix Operations / Inverse / Rank",
  "线性变换 / 标准矩阵": "Linear Transformations / Standard Matrices",
  "基变换 / 坐标 / 维数": "Change of Basis / Coordinates / Dimension",
  "特征值 / 特征向量 / 对角化": "Eigenvalues / Eigenvectors / Diagonalization",
  "内积 / 正交 / Gram-Schmidt / 最小二乘": "Inner Products / Orthogonality / Gram–Schmidt / Least Squares",
  "对称矩阵 / 二次型 / 正定": "Symmetric Matrices / Quadratic Forms / Positive Definiteness",
  "综合与真题": "Comprehensive and Past Exam Questions"
 },
 "questions": {
  "la-1-01": {
   "prompt": "Let $A=\\begin{pmatrix}1&2&-1\\\\2&-1&3\\\\3&1&-2\\end{pmatrix}$, $b=\\begin{pmatrix}2\\\\9\\\\7\\end{pmatrix}$. Find $\\det A$.",
   "blanks": [
    "$\\det A$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Expand along the first row:"
    },
    {
     "i": 4,
     "en": "Hence $\\det A=20\\ne0$, so $A$ is invertible."
    }
   ]
  },
  "la-1-02": {
   "prompt": "Continuing from above, solve $Ax=b$ using Cramer's rule or elimination, and find $x_1$.",
   "blanks": [
    "$x_1$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Use Gaussian elimination: row reduce the augmented matrix $[A\\mid b]$."
    },
    {
     "i": 4,
     "en": "Back-substitute into $R_2$: $-5x_2+5(1)=5\\Rightarrow x_2=0$."
    },
    {
     "i": 5,
     "en": "Back-substitute into $R_1$: $x_1+2(0)-1=2\\Rightarrow x_1=3$."
    },
    {
     "i": 6,
     "en": "Hence $x=(3,0,1)^{T}$, that is, $x_1=3$."
    },
    {
     "i": 7,
     "en": "(Cramer's rule: $x_1=\\det A_1/\\det A=60/20=3$, where $A_1$ is obtained by replacing the first column with $b$.)"
    }
   ]
  },
  "la-1-03": {
   "prompt": "Continuing from above, find $x_3$.",
   "blanks": [
    "$x_3$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From the row reduction above: $-4x_3=-4$, so $x_3=1$."
    },
    {
     "i": 1,
     "en": "The complete solution is $x=(3,0,1)^{T}$."
    }
   ]
  },
  "la-1-04": {
   "prompt": "Continuing from above, find the $(1,1)$-entry of the inverse matrix $A^{-1}$ of $A$ (that is, first row, first column).",
   "blanks": [
    "$ (A^{-1})_{11}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Row reduce $[A\\mid I]$ to $[I\\mid A^{-1}]$, or use the adjugate matrix $A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}(A)$."
    },
    {
     "i": 1,
     "en": "Computing gives"
    },
    {
     "i": 3,
     "en": "Hence the first row, first column entry is $-\\dfrac{1}{20}$."
    },
    {
     "i": 4,
     "en": "Verify: $A^{-1}A=I$ (you can double-check with <code>np.linalg.inv</code> in Jupyter)."
    }
   ]
  },
  "la-1-05": {
   "prompt": "Continuing from above, find the solution of the normal equations $A^{T}Ax=A^{T}b$. Give $x_2$.",
   "blanks": [
    "$x_2$"
   ],
   "solution": [
    {
     "i": 2,
     "en": "Since $A$ is invertible, $A^{T}A$ is also invertible, and solving $A^{T}Ax=A^{T}b\\iff Ax=b$ (multiplying both sides on the left by $(A^{T})^{-1}$ gives $Ax=b$)."
    },
    {
     "i": 3,
     "en": "Hence the solution is the same as that of $Ax=b$: $x=(3,0,1)^{T}$, that is, $x_2=0$."
    },
    {
     "i": 4,
     "en": "(This observation matters: when $A$ is square and invertible, the least squares solution is the exact solution.)"
    }
   ]
  },
  "la-1-06": {
   "prompt": "Let $A=\\begin{pmatrix}1&2&a\\\\2&a&1\\\\a&1&2\\end{pmatrix}$. Among the values of $a$ for which $\\det A=0$, find the $a$ with smaller absolute value.",
   "blanks": [
    "$a$"
   ],
   "solution": [
    {
     "i": 3,
     "en": "Set $-a^{3}+6a-9=0$, that is, $a^{3}-6a+9=0$. Test $a=-3$: $(-27)+18+9=0$ ✔"
    },
    {
     "i": 4,
     "en": "Factorise: $a^{3}-6a+9=(a+3)(a^{2}-3a+3)$, and the discriminant of $a^{2}-3a+3$ is $9-12<0$, so there are no real roots."
    },
    {
     "i": 5,
     "en": "Hence the only real root is $a=-3$ (it is the one with smaller modulus)."
    }
   ]
  },
  "la-1-07": {
   "prompt": "Find the rank of $\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}$.",
   "blanks": [
    "Rank"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Row 3 $=2\\times$ row 2 $-$ row 1: $(7,8,9)=2(4,5,6)-(1,2,3)$, so the three rows are linearly dependent."
    },
    {
     "i": 1,
     "en": "The first two rows are not proportional ($1/4\\ne2/5$), so the rank is $2$."
    },
    {
     "i": 2,
     "en": "(Equivalently: $\\det=0$ but there is a nonzero $2\\times2$ minor.)"
    }
   ]
  },
  "la-1-08": {
   "prompt": "Continuing from above, what is the dimension of the null space of this $3\\times3$ matrix $A$, that is, $\\operatorname{nullity}(A)$?",
   "blanks": [
    "Nullity"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Rank–Nullity Theorem: $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$ ($n$ is the number of columns)."
    },
    {
     "i": 1,
     "en": "Here $\\operatorname{rank}(A)=2$ and $n=3$, so $\\operatorname{nullity}(A)=3-2=1$."
    },
    {
     "i": 2,
     "en": "A basis of the null space is $(1,-2,1)^{T}$ (verify: $A(1,-2,1)^{T}=0$)."
    }
   ]
  },
  "la-2-01": {
   "prompt": "Evaluate $\\begin{vmatrix}2&-1&3\\\\0&4&-2\\\\1&5&0\\end{vmatrix}$.",
   "blanks": [
    "Determinant"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Expand along the first row (the first row entries are $2,-1,3$):"
    }
   ]
  },
  "la-2-02": {
   "prompt": "Find the determinant of $\\begin{pmatrix}3&1&2\\\\0&-2&5\\\\0&0&4\\end{pmatrix}$.",
   "blanks": [
    "Determinant"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This matrix is in row echelon form (the (1,3) and (2,3) entries are nonzero, so it is neither upper triangular nor lower triangular), and its determinant equals the product of the diagonal entries."
    }
   ]
  },
  "la-2-03": {
   "prompt": "Evaluate the Vandermonde determinant $\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&4&9\\end{vmatrix}$.",
   "blanks": [
    "Determinant"
   ],
   "solution": [
    {
     "i": 0,
     "en": "This is a Vandermonde determinant with nodes $x_1=1,x_2=2,x_3=3$, given by the formula $\\displaystyle\\prod_{i<j}(x_j-x_i)$."
    },
    {
     "i": 2,
     "en": "(It can also be verified by direct expansion.)"
    }
   ]
  },
  "la-2-04": {
   "prompt": "Let $A$ be a $4\\times4$ matrix with $\\det A=3$. Find $\\det(2A)$.",
   "blanks": [
    "$\\det(2A)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Property: for an $n\\times n$ matrix, $\\det(cA)=c^{n}\\det A$."
    },
    {
     "i": 1,
     "en": "Here $n=4,\\ c=2$: $\\det(2A)=2^{4}\\cdot3=16\\cdot3=48$."
    },
    {
     "i": 2,
     "en": "(Note that it is not $2\\times3=6$. Beginners often make this mistake.)"
    }
   ]
  },
  "la-2-05": {
   "prompt": "Let $A,B$ both be $3\\times3$ matrices with $\\det A=2$ and $\\det B=-5$. Find $\\det(AB^{T})$.",
   "blanks": [
    "$\\det(AB^T)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Properties: $\\det(AB)=\\det A\\cdot\\det B$; $\\det(B^{T})=\\det B$."
    }
   ]
  },
  "la-2-06": {
   "prompt": "Let $A$ be a $4\\times4$ matrix with $A^{T}A=I_4$. Find $|\\det A|$.",
   "blanks": [
    "$|\\det A|$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Take the determinant of both sides of $A^{T}A=I_4$: $\\det(A^{T}A)=\\det I_4=1$."
    },
    {
     "i": 2,
     "en": "Hence $\\det A=\\pm1$, that is, $|\\det A|=1$."
    },
    {
     "i": 3,
     "en": "(Such matrices are called <b>orthogonal matrices</b>. If in addition $\\det A=1$ it is called a rotation, and if $\\det A=-1$ a reflection.)"
    }
   ]
  },
  "la-3-01": {
   "prompt": "Determine whether $S=\\{A\\in\\mathbb{R}^{3\\times3}:\\det A=0\\}$ is a subspace of $\\mathbb{R}^{3\\times3}$. (Enter yes or no)",
   "blanks": [
    "Is it a subspace?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "A subspace must be closed under addition and scalar multiplication, and must contain the zero element."
    },
    {
     "i": 1,
     "en": "<b>Contains zero:</b> $\\det O=0$ ✔"
    },
    {
     "i": 2,
     "en": "<b>Closed under scalar multiplication:</b> $\\det(cA)=c^{3}\\det A=0$ ✔"
    },
    {
     "i": 3,
     "en": "<b>Not closed under addition:</b> take $A=\\operatorname{diag}(1,0,0)$ ($\\det A=0$) and $B=\\operatorname{diag}(0,1,0)$ ($\\det B=0$),"
    },
    {
     "i": 4,
     "en": "but $A+B=\\operatorname{diag}(1,1,0)$ has $\\det=0$ — this example also happens to give 0, so we need another one:"
    },
    {
     "i": 5,
     "en": "Take $A=\\operatorname{diag}(1,0,0)$ and $B=\\operatorname{diag}(0,0,1)$; then $A+B=\\operatorname{diag}(1,0,1)$ and $\\det=0$."
    },
    {
     "i": 6,
     "en": "A safer counterexample: take $A=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{pmatrix}$ ($\\det=0$) and $B=\\begin{pmatrix}0&0&0\\\\0&0&0\\\\0&0&1\\end{pmatrix}$ ($\\det=0$),"
    },
    {
     "i": 7,
     "en": "$A+B=I_3$ and $\\det I_3=1\\ne0$. Hence it is not closed under addition."
    },
    {
     "i": 8,
     "en": "Therefore $S$ is <b>not</b> a subspace. (The determinant is not a linear function; this is the root cause.)"
    }
   ]
  },
  "la-3-02": {
   "prompt": "Determine whether the vectors $v_1=(1,2,3)$, $v_2=(2,4,6)$ are linearly dependent. (Enter yes or no)",
   "blanks": [
    "Linearly dependent?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$v_2=2v_1$, that is, $2v_1-v_2=0$ is a nontrivial linear combination equal to the zero vector."
    },
    {
     "i": 1,
     "en": "Hence the two vectors are <b>linearly dependent</b>."
    },
    {
     "i": 2,
     "en": "(Test: two vectors are linearly dependent $\\iff$ one is a scalar multiple of the other.)"
    }
   ]
  },
  "la-3-03": {
   "prompt": "Determine whether $\\{(1,1,0),(0,1,1),(1,0,1)\\}$ spans $\\mathbb{R}^{3}$. (Enter yes or no)",
   "blanks": [
    "Does it span $R^3$?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Form the matrix $S=\\begin{pmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{pmatrix}$ with the three vectors as its columns."
    },
    {
     "i": 2,
     "en": "The determinant is nonzero $\\Rightarrow$ the three columns are linearly independent $\\Rightarrow$ they form a basis of $\\mathbb{R}^{3}$, and of course they span $\\mathbb{R}^{3}$."
    },
    {
     "i": 3,
     "en": "So the answer is “yes”."
    }
   ]
  },
  "la-3-04": {
   "prompt": "Let $v_1,v_2,v_3$ be linearly independent. Determine whether $\\{v_1+v_2+v_3,\\ v_1+2v_2+3v_3,\\ 3v_1+2v_2+v_3\\}$ is linearly independent. (Enter yes or no)",
   "blanks": [
    "Linearly independent?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Suppose $c_1(v_1+v_2+v_3)+c_2(v_1+2v_2+3v_3)+c_3(3v_1+2v_2+v_3)=0$."
    },
    {
     "i": 1,
     "en": "Collect in terms of $v_1,v_2,v_3$ (they are linearly independent, so every coefficient must be zero):"
    },
    {
     "i": 5,
     "en": "The coefficient matrix is $\\begin{pmatrix}1&1&3\\\\1&2&2\\\\1&3&1\\end{pmatrix}$, whose determinant is:"
    },
    {
     "i": 7,
     "en": "The determinant is zero $\\Rightarrow$ a nontrivial solution exists. Take $(c_1,c_2,c_3)=(-4,1,1)$ and verify:"
    },
    {
     "i": 8,
     "en": "the $v_1$ equation $-4+1+3=0$ ✔, the $v_2$ equation $-4+2+2=0$ ✔, the $v_3$ equation $-4+3+1=0$ ✔."
    },
    {
     "i": 9,
     "en": "Hence $-4(v_1+v_2+v_3)+(v_1+2v_2+3v_3)+(3v_1+2v_2+v_3)=0$ is a nontrivial relation, the three vectors are <b>linearly dependent</b>, and the answer is “no”."
    }
   ]
  },
  "la-3-05": {
   "prompt": "Determine whether the set $S=\\left\\{\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}:a,b,c\\in\\mathbb{R}\\right\\}$ of $2\\times2$ upper triangular matrices is a subspace of $\\mathbb{R}^{2\\times2}$. (Enter yes or no)",
   "blanks": [
    "Is it a subspace?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Zero element:</b> $\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$ is upper triangular ✔"
    },
    {
     "i": 1,
     "en": "<b>Closed under addition:</b> $\\begin{pmatrix}a_1&b_1\\\\0&c_1\\end{pmatrix}+\\begin{pmatrix}a_2&b_2\\\\0&c_2\\end{pmatrix}=\\begin{pmatrix}a_1+a_2&b_1+b_2\\\\0&c_1+c_2\\end{pmatrix}$ is still upper triangular ✔"
    },
    {
     "i": 2,
     "en": "<b>Closed under scalar multiplication:</b> $k\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}=\\begin{pmatrix}ka&kb\\\\0&kc\\end{pmatrix}$ is still upper triangular ✔"
    },
    {
     "i": 3,
     "en": "All three conditions hold, so $S$ <b>is</b> a subspace."
    },
    {
     "i": 4,
     "en": "(We can even see that $\\dim S=3$, with a basis $\\left\\{\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\right\\}$.)"
    }
   ]
  },
  "la-3-06": {
   "prompt": "Let $H=\\{(x,y,z):x+2y-3z=0\\}$. Find $\\dim H$.",
   "blanks": [
    "$\\dim H$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$H$ is the solution set of the homogeneous equation $x+2y-3z=0$, a <b>plane</b> through the origin in $\\mathbb{R}^{3}$, hence a subspace."
    },
    {
     "i": 1,
     "en": "The equation has only 1 independent constraint, and the coefficient matrix $(1,2,-3)$ has rank 1."
    },
    {
     "i": 2,
     "en": "By rank–nullity: $\\dim H=3-1=2$."
    },
    {
     "i": 3,
     "en": "A basis: $y,z$ are free; taking $(y,z)=(1,0)\\Rightarrow x=-2$ gives $(-2,1,0)$, and taking $(0,1)\\Rightarrow x=3$ gives $(3,0,1)$."
    }
   ]
  },
  "la-3-07": {
   "prompt": "Express $(1,2,3)$ as the linear combination $a(1,1,0)+b(0,1,1)+c(1,0,1)$ of $(1,1,0),(0,1,1),(1,0,1)$, and find $a$.",
   "blanks": [
    "$a$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Write out the system of equations componentwise:"
    },
    {
     "i": 4,
     "en": "Adding the three equations: $2(a+b+c)=6\\Rightarrow a+b+c=3$."
    },
    {
     "i": 5,
     "en": "Subtracting the third equation from this gives $a=0$; subtracting the second gives $c=1$; subtracting the first gives $b=2$."
    },
    {
     "i": 6,
     "en": "Verify: $0(1,1,0)+2(0,1,1)+1(1,0,1)=(0,0,0)+(0,2,2)+(1,0,1)=(1,2,3)$ ✔"
    },
    {
     "i": 7,
     "en": "Hence $a=0$ ($(a,b,c)=(0,2,1)$)."
    }
   ]
  },
  "la-4-01": {
   "prompt": "Find the $(1,1)$-entry of $\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}^{-1}$.",
   "blanks": [
    "The $(1,1)$-entry"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Formula for the inverse of a 2×2 matrix: $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$."
    },
    {
     "i": 3,
     "en": "Hence the $(1,1)$ entry is $3$."
    }
   ]
  },
  "la-4-02": {
   "prompt": "Determine whether $\\begin{pmatrix}1&0&1\\\\0&1&1\\\\1&1&2\\end{pmatrix}$ is invertible. (Enter invertible or not invertible)",
   "blanks": [
    "Invertible?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Row 3 $=$ row 1 $+$ row 2: $(1,1,2)=(1,0,1)+(0,1,1)$, so the three rows are linearly dependent."
    },
    {
     "i": 1,
     "en": "Therefore $\\det=0$ and the matrix is <b>not invertible</b> (singular)."
    },
    {
     "i": 2,
     "en": "(It can also be computed directly: $1(2-1)-0+1(0-1)=1-1=0$.)"
    }
   ]
  },
  "la-4-03": {
   "prompt": "Let $A$ be a $3\\times3$ invertible matrix. Simplify $(A^{T})^{-1}A^{T}$.",
   "blanks": [
    "Simplified result"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $B=(A^{T})^{-1}$; then $B$ is the inverse of $A^{T}$."
    },
    {
     "i": 1,
     "en": "By definition $B\\cdot A^{T}=I$."
    },
    {
     "i": 2,
     "en": "Hence $(A^{T})^{-1}A^{T}=I$."
    },
    {
     "i": 3,
     "en": "(Useful identities: $(A^{T})^{-1}=(A^{-1})^{T}$, $(AB)^{-1}=B^{-1}A^{-1}$.)"
    }
   ]
  },
  "la-4-04": {
   "prompt": "Let $u_1,u_2,u_3$ be pairwise orthogonal unit vectors in $\\mathbb{R}^{3}$ and $A=u_1u_1^{T}+u_2u_2^{T}+u_3u_3^{T}$. Find the $(1,1)$-entry of $A$.",
   "blanks": [
    "$A_{11}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Write $u_i=(u_{i1},u_{i2},u_{i3})^{T}$. The matrix $u_iu_i^{T}$ has $(1,1)$ entry $u_{i1}^{2}$."
    },
    {
     "i": 1,
     "en": "Hence $A_{11}=u_{11}^{2}+u_{21}^{2}+u_{31}^{2}$."
    },
    {
     "i": 2,
     "en": "Assemble $\\{u_1,u_2,u_3\\}$ as the columns of a matrix $Q$; then $Q$ is an orthogonal matrix ($Q^{T}Q=I$) and $A=QQ^{T}=I$."
    },
    {
     "i": 3,
     "en": "So $A=I_3$ and $A_{11}=1$."
    },
    {
     "i": 4,
     "en": "<b>A more general argument:</b> $\\{u_i\\}$ is an orthonormal basis of $\\mathbb{R}^{3}$,"
    },
    {
     "i": 5,
     "en": "$A=QQ^{T}$ is the orthogonal projection onto all of $\\mathbb{R}^{3}$, so $A=I$ and its $(1,1)$ entry is 1."
    },
    {
     "i": 6,
     "en": "(If only $k$ orthonormal vectors are taken, then $A$ is the projection onto a $k$-dimensional subspace, with $A^{2}=A$, $\\operatorname{rank}A=k$ and $\\operatorname{tr}A=k$.)"
    }
   ]
  },
  "la-4-05": {
   "prompt": "Let $A$ be an $n\\times n$ matrix with $A^{2}=A$ (idempotent). Which numbers can the eigenvalues of $A$ be? (in increasing order, separated by commas)",
   "blanks": [
    "Eigenvalues"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $\\lambda$ be an eigenvalue of $A$ and $v\\ne0$ a corresponding eigenvector: $Av=\\lambda v$."
    },
    {
     "i": 1,
     "en": "Multiply both sides on the left by $A$: $A^{2}v=\\lambda Av=\\lambda^{2}v$."
    },
    {
     "i": 2,
     "en": "Also $A^{2}=A$, so $Av=A^{2}v$, that is, $\\lambda v=\\lambda^{2}v$."
    },
    {
     "i": 3,
     "en": "Since $v\\ne0$, we get $\\lambda=\\lambda^{2}$, that is, $\\lambda(\\lambda-1)=0$."
    },
    {
     "i": 4,
     "en": "So $\\lambda\\in\\{0,1\\}$."
    },
    {
     "i": 5,
     "en": "(Projection matrices are all idempotent, and their eigenvalues are only 0 and 1 — this is exactly the case $A=QQ^{T}$ above.)"
    }
   ]
  },
  "la-4-06": {
   "prompt": "Let the $n\\times n$ matrix $A$ satisfy $A^{2}=A$ and $A\\ne O,A\\ne I$. Find $\\operatorname{rank}(A)+\\operatorname{rank}(I-A)$.",
   "blanks": [
    "Sum of ranks"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$A$ is the projection onto $\\operatorname{Col}(A)$, and $I-A$ is the projection onto $\\operatorname{Nul}(A)$ (because $A(I-A)=A-A^{2}=O$)."
    },
    {
     "i": 1,
     "en": "$\\operatorname{Col}(A)=\\operatorname{Nul}(I-A)$ and $\\operatorname{Nul}(A)=\\operatorname{Col}(I-A)$, and the two are complementary subspaces."
    },
    {
     "i": 2,
     "en": "Hence $\\operatorname{Col}(A)\\oplus\\operatorname{Nul}(A)=\\mathbb{R}^{n}$,"
    },
    {
     "i": 4,
     "en": "(Example: for $A=\\operatorname{diag}(1,1,0)$, $\\operatorname{rank}A=2$ and $\\operatorname{rank}(I-A)=1$, with sum $=3=n$.)"
    }
   ]
  },
  "la-5-01": {
   "prompt": "Let $T:\\mathbb{R}^{2}\\to\\mathbb{R}^{3}$ be given by $T(x)=Ax$, where $A=\\begin{pmatrix}1&-1\\\\2&0\\\\0&3\\end{pmatrix}$. Find the second component of $T(1,2)$.",
   "blanks": [
    "Second component"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Hence the second component is $2$."
    }
   ]
  },
  "la-5-02": {
   "prompt": "Find the $(1,2)$-entry of the standard matrix of the linear transformation that rotates vectors in $\\mathbb{R}^{2}$ counterclockwise by $90^{\\circ}$.",
   "blanks": [
    "The $(1,2)$-entry"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The standard matrix for a rotation through angle $\\theta$ is $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\ \\sin\\theta&\\cos\\theta\\end{pmatrix}$."
    },
    {
     "i": 1,
     "en": "For $\\theta=90^{\\circ}$: $\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$."
    },
    {
     "i": 2,
     "en": "Hence the $(1,2)$ entry is $-1$."
    },
    {
     "i": 3,
     "en": "Verify: $(1,0)\\mapsto(0,1)$, $(0,1)\\mapsto(-1,0)$ ✔"
    },
    {
     "i": 4,
     "en": "(This matrix satisfies $R^{2}=-I$, so $R^{4}=I$, consistent with “four rotations return to the start”.)"
    }
   ]
  },
  "la-5-03": {
   "prompt": "Let $\\mathcal{B}=\\{b_1,b_2,b_3\\}$ be a basis of $V$ and let $T$ be a linear transformation with $T(b_1)=2b_2,\\ T(b_2)=3b_3,\\ T(b_3)=4b_1$. Find the trace of the matrix of $T$ relative to $\\mathcal{B}$ (that is, $[T]_{\\mathcal{B}}$).",
   "blanks": [
    "Trace"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$[T]_{\\mathcal{B}}$ has as its $j$-th column the coordinate vector of $T(b_j)$ relative to $\\mathcal{B}$."
    },
    {
     "i": 1,
     "en": "$T(b_1)=2b_2\\Rightarrow$ column 1 is $(0,2,0)^{T}$;"
    },
    {
     "i": 2,
     "en": "$T(b_2)=3b_3\\Rightarrow$ column 2 is $(0,0,3)^{T}$;"
    },
    {
     "i": 3,
     "en": "$T(b_3)=4b_1\\Rightarrow$ column 3 is $(4,0,0)^{T}$."
    },
    {
     "i": 4,
     "en": "Hence $[T]_{\\mathcal{B}}=\\begin{pmatrix}0&0&4\\\\2&0&0\\\\0&3&0\\end{pmatrix}$."
    },
    {
     "i": 5,
     "en": "Trace $=$ sum of the diagonal entries $=0+0+0=0$."
    },
    {
     "i": 6,
     "en": "(Note: changing to the matrix for $\\mathcal{B}\\to\\mathcal{C}$ only permutes the columns, and the trace is likewise 0."
    },
    {
     "i": 7,
     "en": "This matrix is in fact a “cyclic shift with scaling”; its eigenvalues are the three values of $\\sqrt[3]{24}$, whose sum is 0, consistent with the trace being 0.)"
    }
   ]
  },
  "la-5-04": {
   "prompt": "Let $A=\\begin{pmatrix}1&-1\\\\2&0\\\\0&3\\end{pmatrix}$ be the standard matrix of $T:\\mathbb{R}^{2}\\to\\mathbb{R}^{3}$. Find $\\dim(\\ker T)$.",
   "blanks": [
    "$\\dim(\\ker T)$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\ker T=\\operatorname{Nul}(A)$. The two columns of $A$, $(1,2,0)^{T}$ and $(-1,0,3)^{T}$, are not proportional, hence linearly independent."
    },
    {
     "i": 1,
     "en": "Therefore $\\operatorname{rank}(A)=2$."
    },
    {
     "i": 2,
     "en": "Rank–Nullity Theorem: $\\operatorname{rank}(A)+\\dim(\\ker T)=n=2$."
    },
    {
     "i": 3,
     "en": "Hence $\\dim(\\ker T)=2-2=0$, that is, $T$ is injective (one-to-one)."
    },
    {
     "i": 4,
     "en": "(Generalisation: a linear transformation is injective $\\iff\\ker T=\\{0\\}\\iff$ the columns of its standard matrix are linearly independent.)"
    }
   ]
  },
  "la-6-01": {
   "prompt": "Let $\\mathcal{B}=\\left\\{\\begin{pmatrix}2\\\\1\\end{pmatrix},\\begin{pmatrix}1\\\\1\\end{pmatrix}\\right\\}$ be a basis of $\\mathbb{R}^{2}$. Find $c_1$ in the coordinate vector $[x]_{\\mathcal{B}}=(c_1,c_2)$ of $x=(3,5)$ relative to $\\mathcal{B}$.",
   "blanks": [
    "$c_1$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Let $x=c_1\\begin{pmatrix}2\\\\1\\end{pmatrix}+c_2\\begin{pmatrix}1\\\\1\\end{pmatrix}$, that is, solve $P_{\\mathcal{B}}[x]_{\\mathcal{B}}=x$."
    },
    {
     "i": 4,
     "en": "Hence $c_1=-2$ ($c_2=7$)."
    },
    {
     "i": 5,
     "en": "Verify: $-2(2,1)+7(1,1)=(-4,-2)+(7,7)=(3,5)$ ✔"
    }
   ]
  },
  "la-6-02": {
   "prompt": "Continuing from above, find the $(2,2)$-entry of the change-of-coordinates matrix $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$ from $\\mathcal{B}$ to the standard basis $\\mathcal{E}$.",
   "blanks": [
    "The $(2,2)$-entry"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The columns of $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$ are exactly the basis vectors of $\\mathcal{B}$ (their coordinates in the standard basis)."
    },
    {
     "i": 2,
     "en": "Hence the $(2,2)$ entry is $1$."
    },
    {
     "i": 3,
     "en": "The relation is $[x]_{\\mathcal{E}}=P_{\\mathcal{E}\\leftarrow\\mathcal{B}}[x]_{\\mathcal{B}}$, that is, $x=P_{\\mathcal{E}\\leftarrow\\mathcal{B}}[x]_{\\mathcal{B}}$."
    }
   ]
  },
  "la-6-03": {
   "prompt": "Let $\\mathcal{E}=\\{1,x,x^{2},x^{3}\\}$ be a basis of $\\mathbb{P}_{3}$ and $\\mathcal{B}=\\{p_1,p_2,p_3,p_4\\}$, where $p_1=-x^{3}-3x^{2}+x-1$. Find the 3rd component (corresponding to $x^{2}$) of the coordinate vector of $p_1$ relative to $\\mathcal{E}$.",
   "blanks": [
    "Third component"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The coordinates of a polynomial in $\\mathbb{P}_{3}$ relative to the basis $\\mathcal{E}=\\{1,x,x^{2},x^{3}\\}$ are just its coefficient vector."
    },
    {
     "i": 2,
     "en": "Hence $[p_1]_{\\mathcal{E}}=(-1,1,-3,-1)^{T}$, and the 3rd component (the coefficient of $x^{2}$) is $-3$."
    },
    {
     "i": 3,
     "en": "(Assembling the four coordinate vectors of $\\mathcal{B}$ as columns gives the change-of-coordinates matrix $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$, whose determinant is $-1\\ne0$, which indeed proves that $\\mathcal{B}$ is a basis.)"
    }
   ]
  },
  "la-6-04": {
   "prompt": "Find the dimension of $\\mathbb{P}_{3}$ (polynomials of degree at most 3).",
   "blanks": [
    "Dimension"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$\\mathbb{P}_{n}$ denotes the polynomials of degree $\\le n$; its natural basis is $\\{1,x,x^{2},\\dots,x^{n}\\}$, which has $n+1$ elements."
    },
    {
     "i": 1,
     "en": "Hence $\\dim\\mathbb{P}_{n}=n+1$. Taking $n=3$ gives $\\dim\\mathbb{P}_{3}=4$."
    },
    {
     "i": 2,
     "en": "(A common confusion: $\\mathbb{P}_{3}$ is 4-dimensional, not 3-dimensional.)"
    }
   ]
  },
  "la-7-01": {
   "prompt": "Find the two eigenvalues of $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$ (in increasing order, separated by commas).",
   "blanks": [
    "Eigenvalues"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Characteristic equation $\\det(A-\\lambda I)=0$:"
    },
    {
     "i": 2,
     "en": "Factorising: $(\\lambda-2)(\\lambda-5)=0$, so $\\lambda=2,5$."
    },
    {
     "i": 3,
     "en": "Check: $\\operatorname{tr}A=4+3=7=2+5$ ✔, $\\det A=12-2=10=2\\times5$ ✔"
    }
   ]
  },
  "la-7-02": {
   "prompt": "Continuing from above, find the second component of an eigenvector corresponding to $\\lambda=5$ (take the first component to be 1).",
   "blanks": [
    "Second component"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Solve $(A-5I)v=0$: $A-5I=\\begin{pmatrix}-1&1\\\\2&-2\\end{pmatrix}$."
    },
    {
     "i": 1,
     "en": "The equation $-v_1+v_2=0\\Rightarrow v_1=v_2$."
    },
    {
     "i": 2,
     "en": "Taking $v_1=1$ gives $v=(1,1)^{T}$, whose second component is $1$."
    },
    {
     "i": 3,
     "en": "(For $\\lambda=2$: $A-2I=\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}$, $2v_1+v_2=0$, and taking $v=(1,-2)^{T}$.)"
    }
   ]
  },
  "la-7-03": {
   "prompt": "Determine whether $A=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$ is diagonalizable. (Enter diagonalizable or not diagonalizable)",
   "blanks": [
    "Diagonalizable?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Characteristic equation: $(2-\\lambda)^{2}=0$, so $\\lambda=2$ is an eigenvalue of <b>algebraic multiplicity 2</b>."
    },
    {
     "i": 1,
     "en": "Find the eigenspace: $A-2I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, the equation $v_2=0$,"
    },
    {
     "i": 2,
     "en": "so the eigenspace is $\\operatorname{span}\\{(1,0)^{T}\\}$, with <b>geometric multiplicity 1</b>."
    },
    {
     "i": 3,
     "en": "The geometric multiplicity $1<$ the algebraic multiplicity $2$, so $A$ lacks enough linearly independent eigenvectors,"
    },
    {
     "i": 4,
     "en": "and therefore $A$ is <b>not</b> diagonalizable."
    },
    {
     "i": 5,
     "en": "(Criterion: $A$ is diagonalizable $\\iff$ the geometric multiplicity of every eigenvalue $=$ its algebraic multiplicity $\\iff$ there are $n$ linearly independent eigenvectors.)"
    }
   ]
  },
  "la-7-04": {
   "prompt": "Find the product of the eigenvalues of the lower triangular matrix $\\begin{pmatrix}2&0&0\\\\1&3&0\\\\4&5&6\\end{pmatrix}$.",
   "blanks": [
    "Product of eigenvalues"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The eigenvalues of a lower triangular matrix are just its <b>diagonal entries</b>: $\\lambda=2,3,6$."
    },
    {
     "i": 1,
     "en": "(Reason: $\\det(A-\\lambda I)$ is still a triangular matrix, with determinant $(2-\\lambda)(3-\\lambda)(6-\\lambda)$.)"
    },
    {
     "i": 2,
     "en": "The product of the eigenvalues $=2\\times3\\times6=36$."
    },
    {
     "i": 3,
     "en": "This also equals $\\det A=2\\cdot3\\cdot6=36$ ✔ (in general $\\prod\\lambda_i=\\det A$.)"
    }
   ]
  },
  "la-7-05": {
   "prompt": "Determine: for any $3\\times3$ matrix $A$, do $A$ and $A^{T}$ have the same set of eigenspaces? (Enter true or false)",
   "blanks": [
    "True/False"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>False.</b> $A$ and $A^{T}$ have the same <b>eigenvalues</b> (because $\\det(A-\\lambda I)=\\det((A-\\lambda I)^{T})=\\det(A^{T}-\\lambda I)$),"
    },
    {
     "i": 1,
     "en": "but their <b>eigenspaces are generally different</b>."
    },
    {
     "i": 2,
     "en": "Counterexample: $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$, $A^{T}=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$."
    },
    {
     "i": 3,
     "en": "For $\\lambda=1$: $A-I=\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}$, eigenspace $\\operatorname{span}\\{(1,0)^{T}\\}$;"
    },
    {
     "i": 4,
     "en": "$A^{T}-I=\\begin{pmatrix}0&0\\\\1&1\\end{pmatrix}$, eigenspace $\\operatorname{span}\\{(-1,1)^{T}\\}$."
    },
    {
     "i": 5,
     "en": "The two are different (although they have the same dimension), so the statement is false."
    }
   ]
  },
  "la-7-06": {
   "prompt": "Determine: for any $3\\times3$ matrix $A$, do $A$ and $A+I_3$ have the same set of eigenspaces? (Enter true or false)",
   "blanks": [
    "True/False"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>True.</b> Suppose $Av=\\lambda v$ ($v\\ne0$); then"
    },
    {
     "i": 2,
     "en": "Thus $v$ is an eigenvector of $A$ (with eigenvalue $\\lambda$) if and only if it is an eigenvector of $A+I$ (with eigenvalue $\\lambda+1$)."
    },
    {
     "i": 3,
     "en": "The eigenspaces of the two correspond one to one and are exactly the same (only the eigenvalues are shifted by 1)."
    },
    {
     "i": 4,
     "en": "(Similarly $A+cI$ and $A$ have the same eigenspaces; but $cA$ ($c\\ne1$) keeps the eigenspaces and changes the eigenvalues to $c\\lambda$.)"
    }
   ]
  },
  "la-7-07": {
   "prompt": "Let $A$ be diagonalizable with $A=PDP^{-1}$ and $D=\\operatorname{diag}(2,5)$. Find the sum of the eigenvalues of $A^{3}$ (that is, the trace).",
   "blanks": [
    "Trace"
   ],
   "solution": [
    {
     "i": 0,
     "en": "$A^{3}=PD^{3}P^{-1}$, so the eigenvalues of $A^{3}$ are the diagonal entries of $D^{3}$, namely $2^{3}=8$ and $5^{3}=125$."
    },
    {
     "i": 1,
     "en": "The sum of the eigenvalues $=$ the trace $=8+125=133$."
    },
    {
     "i": 2,
     "en": "(In general: if $\\lambda$ is an eigenvalue of $A$, then $\\lambda^{k}$ is an eigenvalue of $A^{k}$.)"
    }
   ]
  },
  "la-8-01": {
   "prompt": "Find the square of the norm $\\|u\\|$ of $u=(1,1,1)$ (that is, $u\\cdot u$).",
   "blanks": [
    "$\\|u\\|^2$"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Hence $\\|u\\|=\\sqrt{3}$ and $\\|u\\|^{2}=3$."
    },
    {
     "i": 2,
     "en": "The normalised vector of $u$ is $\\dfrac{u}{\\|u\\|}=\\left(\\dfrac{1}{\\sqrt3},\\dfrac{1}{\\sqrt3},\\dfrac{1}{\\sqrt3}\\right)$."
    }
   ]
  },
  "la-8-02": {
   "prompt": "Determine whether $u=(1,1,1)$ and $v=(1,0,-1)$ are orthogonal. (Enter yes or no)",
   "blanks": [
    "Orthogonal?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Two vectors are orthogonal $\\iff u\\cdot v=0$."
    },
    {
     "i": 2,
     "en": "Hence they are <b>orthogonal</b>."
    }
   ]
  },
  "la-8-03": {
   "prompt": "Find the first component of the projection vector $\\operatorname{proj}_{u}w$ of $w=(2,1,0)$ onto $u=(1,1,1)$.",
   "blanks": [
    "First component"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Projection formula: $\\operatorname{proj}_{u}w=\\dfrac{w\\cdot u}{u\\cdot u}u$."
    },
    {
     "i": 2,
     "en": "Hence $\\operatorname{proj}_{u}w=\\dfrac{3}{3}(1,1,1)=(1,1,1)$."
    },
    {
     "i": 3,
     "en": "The first component is $1$."
    },
    {
     "i": 4,
     "en": "(Note that here the component of $w$ in the direction of $u$ is exactly $u$ itself.)"
    }
   ]
  },
  "la-8-04": {
   "prompt": "Apply Gram–Schmidt orthogonalization to $(1,1,0),(1,0,1),(0,1,1)$, and find the first component of the resulting first basis vector (take the simplified form $(1,1,0)$ of the unnormalized form $(2,2,0)$).",
   "blanks": [
    "First component"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Gram–Schmidt: $v_1$ is simply the first vector."
    },
    {
     "i": 1,
     "en": "<b>Step 1:</b> $v_1=(1,1,0)$ (not normalised)."
    },
    {
     "i": 2,
     "en": "<b>Step 2:</b> $v_2=(1,0,1)-\\dfrac{(1,0,1)\\cdot(1,1,0)}{(1,1,0)\\cdot(1,1,0)}(1,1,0)=(1,0,1)-\\dfrac12(1,1,0)=\\left(\\dfrac12,-\\dfrac12,1\\right)$."
    },
    {
     "i": 3,
     "en": "<b>Step 3:</b> $v_3=(0,1,1)-\\dfrac{(0,1,1)\\cdot v_1}{v_1\\cdot v_1}v_1-\\dfrac{(0,1,1)\\cdot v_2}{v_2\\cdot v_2}v_2$"
    },
    {
     "i": 5,
     "en": "After normalisation: $q_1=\\dfrac{1}{\\sqrt2}(1,1,0)$, $q_2=\\dfrac{1}{\\sqrt6}(1,-1,2)$, $q_3=\\dfrac{1}{\\sqrt3}(-1,1,1)$."
    },
    {
     "i": 6,
     "en": "So the first (unnormalised) basis vector is $(1,1,0)$, whose first component is $1$."
    }
   ]
  },
  "la-8-05": {
   "prompt": "Use least squares to fit the line $y=mx+c$ through the points $(1,1),(2,2),(3,2)$. <b>Convention: the first column of the design matrix is $x$ and the second column is $1$</b>. Find the slope $m$.",
   "blanks": [
    "$m$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>Convention:</b> column 1 of the design matrix $A$ corresponds to $x$ (coefficient $m$), and column 2 to the constant term (coefficient $c$)."
    },
    {
     "i": 1,
     "en": "$A=\\begin{pmatrix}1&1\\\\2&1\\\\3&1\\end{pmatrix}$, $b=\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$, with unknowns $\\begin{pmatrix}m\\\\c\\end{pmatrix}$."
    },
    {
     "i": 2,
     "en": "Normal equations $A^{T}Ax=A^{T}b$:"
    },
    {
     "i": 5,
     "en": "Solve $\\begin{cases}14m+6c=11\\\\6m+3c=5\\end{cases}$."
    },
    {
     "i": 6,
     "en": "Multiply the second equation by 2: $12m+6c=10$; subtract it from the first: $2m=1\\Rightarrow m=\\dfrac12$."
    },
    {
     "i": 7,
     "en": "Back-substitute: $6\\cdot\\dfrac12+3c=5\\Rightarrow3+3c=5\\Rightarrow c=\\dfrac23$."
    },
    {
     "i": 8,
     "en": "Hence $m=\\dfrac12$ and $c=\\dfrac23$, and the line of best fit is $y=\\dfrac12x+\\dfrac23$."
    },
    {
     "i": 9,
     "en": "<b>Residual:</b> $e=b-Ax=\\begin{pmatrix}1-\\frac76\\\\2-\\frac{11}{6}\\\\2-\\frac{13}{6}\\end{pmatrix}=\\begin{pmatrix}-\\frac16\\\\\\frac16\\\\-\\frac16\\end{pmatrix}$, $\\|e\\|^{2}=\\dfrac{3}{36}=\\dfrac{1}{12}$."
    },
    {
     "i": 10,
     "en": "<b>Common pitfall:</b> if the column order of the design matrix is swapped (the $1$ column first and $x$ second), the solution becomes $(c,m)=\\left(\\dfrac23,\\dfrac12\\right)$,"
    },
    {
     "i": 11,
     "en": "that is, $m=\\dfrac23$. The two conventions correspond to the same line of best fit, but the values of $m,c$ are interchanged — always check the column convention carefully when solving."
    }
   ]
  },
  "la-8-06": {
   "prompt": "Continuing from above (same convention: the first column is $x$), find the intercept $c$ of the line of best fit.",
   "blanks": [
    "$c$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "From the normal equations in the previous question we get $m=\\dfrac12$; back-substitute into $6m+3c=5$:"
    },
    {
     "i": 2,
     "en": "Hence the intercept is $c=\\dfrac23\\approx0.6667$."
    },
    {
     "i": 3,
     "en": "<b>Check (the first normal equation):</b> $14m+6c=14\\cdot\\dfrac12+6\\cdot\\dfrac23=7+4=11=A^{T}b$ is the first component ✔"
    },
    {
     "i": 4,
     "en": "<b>A further check:</b> the residuals must sum to 0 (because the design matrix contains a column of all 1s, which is equivalent to “the line of best fit passes through the centroid of the data points”),"
    },
    {
     "i": 5,
     "en": "the centroid is $\\left(2,\\dfrac53\\right)$, and $\\dfrac12\\cdot2+\\dfrac23=1+\\dfrac23=\\dfrac53$ ✔"
    }
   ]
  },
  "la-9-01": {
   "prompt": "Find the two eigenvalues of the symmetric matrix $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ (in increasing order, separated by commas).",
   "blanks": [
    "Eigenvalues"
   ],
   "solution": [
    {
     "i": 1,
     "en": "Hence $\\lambda=1$ or $\\lambda=3$."
    },
    {
     "i": 2,
     "en": "Check: the trace $=4=1+3$ ✔, the determinant $=3=1\\times3$ ✔"
    },
    {
     "i": 3,
     "en": "(The eigenvalues of a real symmetric matrix must be real, and eigenvectors for distinct eigenvalues are mutually orthogonal — the spectral theorem.)"
    }
   ]
  },
  "la-9-02": {
   "prompt": "Determine whether the quadratic form $Q(x)=2x_1^{2}-2x_1x_2+2x_2^{2}$ is positive definite. (Enter yes or no)",
   "blanks": [
    "Positive definite?"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The matrix of the quadratic form: $A=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$ (the cross-term coefficient $-2$ is split equally between the two symmetric positions)."
    },
    {
     "i": 1,
     "en": "Eigenvalues: $(2-\\lambda)^{2}-1=0\\Rightarrow\\lambda=1,3$."
    },
    {
     "i": 2,
     "en": "Since all the eigenvalues are $>0$, the quadratic form is <b>positive definite</b>."
    },
    {
     "i": 3,
     "en": "<b>It can also be decided by the leading principal minors (Sylvester's criterion):</b>"
    },
    {
     "i": 4,
     "en": "$D_1=2>0$ and $D_2=\\begin{vmatrix}2&-1\\\\-1&2\\end{vmatrix}=4-1=3>0$; both are positive, so it is positive definite."
    },
    {
     "i": 5,
     "en": "(Verification by completing the square: $Q=2\\left(x_1-\\frac{x_2}{2}\\right)^{2}+\\frac32x_2^{2}>0$ except at the origin.)"
    }
   ]
  },
  "la-9-03": {
   "prompt": "Determine the type of the quadratic form $Q(x)=x_1^{2}+4x_1x_2+x_2^{2}$ (enter positive definite / negative definite / indefinite).",
   "blanks": [
    "Type"
   ],
   "solution": [
    {
     "i": 0,
     "en": "The matrix is $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$."
    },
    {
     "i": 1,
     "en": "Eigenvalues: $(1-\\lambda)^{2}-4=0\\Rightarrow\\lambda=3$ or $\\lambda=-1$."
    },
    {
     "i": 2,
     "en": "The eigenvalues have both signs, so the quadratic form is <b>indefinite</b>."
    },
    {
     "i": 3,
     "en": "(Intuitively: taking $(x_1,x_2)=(1,-1)$ gives $1-4+1=-2<0$; taking $(1,1)$ gives $1+4+1=6>0$.)"
    }
   ]
  },
  "la-9-04": {
   "prompt": "Determine: if a $4\\times4$ matrix $A$ satisfies $A^{T}A=I_4$, then $\\det A=\\pm1$. (Enter true or false)",
   "blanks": [
    "True/False"
   ],
   "solution": [
    {
     "i": 0,
     "en": "True. Take the determinant of both sides: $\\det(A^{T}A)=\\det I_4$."
    },
    {
     "i": 2,
     "en": "Hence $\\det A=\\pm1$."
    },
    {
     "i": 3,
     "en": "This characterises <b>orthogonal matrices</b>: $A^{T}A=I\\iff A^{-1}=A^{T}$."
    },
    {
     "i": 4,
     "en": "Geometric meaning: an orthogonal transformation preserves lengths and angles, and its determinant $\\pm1$ means volumes are unchanged ($+1$ preserves orientation, $-1$ reverses it)."
    }
   ]
  },
  "la-10-01": {
   "prompt": "Let $A=\\begin{pmatrix}1&2&-1\\\\2&-1&3\\\\3&1&-2\\end{pmatrix}$ have the LU decomposition $A=LU$, where $L$ is unit lower triangular. Find the $(3,2)$-entry of $L$.",
   "blanks": [
    "$L_{32}$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Use Doolittle elimination (the diagonal entries of $L$ are 1):"
    },
    {
     "i": 1,
     "en": "$R_2\\to R_2-2R_1$, so $L_{21}=2$; $R_3\\to R_3-3R_1$, so $L_{31}=3$."
    },
    {
     "i": 2,
     "en": "After elimination the first two rows of $U$ are $(1,2,-1)$ and $(0,-5,5)$, and the third row becomes $(0,-5,1)$."
    },
    {
     "i": 3,
     "en": "$R_3\\to R_3-1\\cdot R_2$ (since $-5/-5=1$), so $L_{32}=1$."
    },
    {
     "i": 4,
     "en": "Result: $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\3&1&1\\end{pmatrix}$, $U=\\begin{pmatrix}1&2&-1\\\\0&-5&5\\\\0&0&-4\\end{pmatrix}$."
    },
    {
     "i": 5,
     "en": "Verify $LU=A$ ✔"
    },
    {
     "i": 6,
     "en": "Hence $L_{32}=1$."
    }
   ]
  },
  "la-10-02": {
   "prompt": "Let $u_1,u_2,u_3$ be pairwise orthogonal unit vectors and $A=u_1u_1^{T}+u_2u_2^{T}+u_3u_3^{T}$. Determine whether $A$ is invertible; if so, find $\\det A$ (enter DNE if not invertible).",
   "blanks": [
    "$\\det A$"
   ],
   "solution": [
    {
     "i": 0,
     "en": "Assemble $\\{u_1,u_2,u_3\\}$ as the columns of $Q$; then $Q^{T}Q=I_3$ (an orthogonal matrix) and $A=QQ^{T}$."
    },
    {
     "i": 1,
     "en": "For an orthogonal matrix $Q$, $Q^{-1}=Q^{T}$, so $A=QQ^{T}=QQ^{-1}=I_3$."
    },
    {
     "i": 2,
     "en": "So $A=I_3$, which is invertible, and $\\det A=1$."
    },
    {
     "i": 3,
     "en": "<b>General case:</b> if there are only $k<3$ orthonormal vectors, then $A$ is a projection of rank $k$, not invertible, and $\\det A=0$."
    },
    {
     "i": 4,
     "en": "<b>Another proof that $A^{2}=A$:</b> $(u_iu_i^{T})(u_ju_j^{T})=u_i(u_i^{T}u_j)u_j^{T}=\\delta_{ij}u_iu_j^{T}$,"
    },
    {
     "i": 5,
     "en": "so $A^{2}=\\sum_i u_iu_i^{T}=A$ ✔ (idempotent)."
    }
   ]
  },
  "la-10-03": {
   "prompt": "Determine: can any $2\\times2$ matrix $A$ be written as the product $A=LU$ of a lower triangular matrix $L$ and an upper triangular matrix $U$ (with no requirement that the diagonal entries of $L$ be 1, and with no row swaps allowed)? (Enter true or false)",
   "blanks": [
    "True/False"
   ],
   "solution": [
    {
     "i": 0,
     "en": "<b>False.</b> Counterexample: $A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$."
    },
    {
     "i": 1,
     "en": "If $A=LU$, write $L=\\begin{pmatrix}a&0\\\\b&c\\end{pmatrix}$ and $U=\\begin{pmatrix}d&e\\\\0&f\\end{pmatrix}$; then"
    },
    {
     "i": 3,
     "en": "We need $ad=0$: if $a=0$ then $ae=0\\ne1$; if $d=0$ then $bd=0\\ne1$. Contradiction."
    },
    {
     "i": 4,
     "en": "Hence this $A$ cannot be written as $LU$."
    },
    {
     "i": 5,
     "en": "<b>Root cause:</b> LU decomposition without row exchanges requires all the leading principal minors of $A$ to be nonzero, whereas here the first minor $A_{11}=0$."
    },
    {
     "i": 6,
     "en": "<b>Correct statement:</b> there exists a permutation matrix $P$ such that $PA=LU$ (that is, LU decomposition with partial pivoting)."
    }
   ]
  },
  "lp-1": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Conclusion: false.</b>"
    },
    {
     "i": 1,
     "en": "<b>Part 1: the eigenvalues are the same.</b> For any $\\lambda$,"
    },
    {
     "i": 3,
     "en": "so the characteristic polynomials are the same, and hence the sets of eigenvalues are the same."
    },
    {
     "i": 4,
     "en": "<b>Part 2: the eigenspaces are generally different.</b> Counterexample $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$."
    },
    {
     "i": 5,
     "en": "$\\lambda=1$: solve $(A-I)v=0$; $A-I=\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}$ gives $v_2=0$,"
    },
    {
     "i": 6,
     "en": "eigenspace $E_1(A)=\\operatorname{span}\\{(1,0)^{T}\\}$."
    },
    {
     "i": 7,
     "en": "$A^{T}=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$, $\\lambda=1$: $A^{T}-I=\\begin{pmatrix}0&0\\\\1&1\\end{pmatrix}$ gives $v_1+v_2=0$,"
    },
    {
     "i": 8,
     "en": "eigenspace $E_1(A^{T})=\\operatorname{span}\\{(-1,1)^{T}\\}$."
    },
    {
     "i": 9,
     "en": "$E_1(A)\\ne E_1(A^{T})$, so the statement is false."
    },
    {
     "i": 10,
     "en": "<b>Note:</b> the two have the same dimension (both equal $n-\\operatorname{rank}(A-\\lambda I)$, while $\\operatorname{rank}(A-\\lambda I)=\\operatorname{rank}(A^{T}-\\lambda I)$),"
    },
    {
     "i": 11,
     "en": "but as subspaces they are not the same. The eigenvectors of $A$ are objects related to the <b>left</b> eigenvectors of $A^{T}$."
    }
   ]
  },
  "lp-2": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a)</b> First compute the product of the two outer products. Since $u_i^{T}u_j=\\delta_{ij}$ (orthonormal),"
    },
    {
     "i": 2,
     "en": "Thus all the cross terms vanish:"
    },
    {
     "i": 5,
     "en": "Hence $u_1$ is an eigenvector of $A$ with eigenvalue $\\lambda=1$ (likewise $u_2,u_3$ also correspond to eigenvalue 1)."
    },
    {
     "i": 6,
     "en": "<b>(c)</b> Assemble $\\{u_1,u_2,u_3\\}$ as the columns of $Q$; then $Q^{T}Q=I_3$ (an orthogonal matrix) and $A=QQ^{T}$."
    },
    {
     "i": 7,
     "en": "By the property $Q^{-1}=Q^{T}$ of orthogonal matrices, $A=QQ^{T}=QQ^{-1}=I_3$."
    },
    {
     "i": 8,
     "en": "So $A$ is <b>invertible</b> (it is the identity matrix), $\\det A=1$, and the $(1,1)$ entry is $1$."
    },
    {
     "i": 9,
     "en": "<b>A more intuitive argument:</b> $A$ is the orthogonal projection onto $\\operatorname{span}\\{u_1,u_2,u_3\\}=\\mathbb{R}^{3}$,"
    },
    {
     "i": 10,
     "en": "projecting onto the whole space is the identity map, so $A=I$."
    },
    {
     "i": 11,
     "en": "<b>Generalisation:</b> if there are only $k$ orthonormal vectors, then $A$ is the orthogonal projection onto a $k$-dimensional subspace:"
    },
    {
     "i": 12,
     "en": "$A^{2}=A$, $A^{T}=A$, $\\operatorname{rank}A=k$, $\\operatorname{tr}A=k$, and not invertible (when $k<n$)."
    }
   ]
  },
  "lp-3": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a) The three subspace conditions.</b>"
    },
    {
     "i": 1,
     "en": "<b>① Contains zero:</b> taking $a=b=c=0$ gives the zero matrix $\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\in S$."
    },
    {
     "i": 2,
     "en": "<b>② Closed under addition:</b> take any $\\begin{pmatrix}a_1&b_1\\\\0&c_1\\end{pmatrix},\\begin{pmatrix}a_2&b_2\\\\0&c_2\\end{pmatrix}\\in S$,"
    },
    {
     "i": 3,
     "en": "their sum $=\\begin{pmatrix}a_1+a_2&b_1+b_2\\\\0&c_1+c_2\\end{pmatrix}$ has its lower-left entry still 0, so it belongs to $S$."
    },
    {
     "i": 4,
     "en": "<b>③ Closed under scalar multiplication:</b> $k\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}=\\begin{pmatrix}ka&kb\\\\0&kc\\end{pmatrix}\\in S$."
    },
    {
     "i": 5,
     "en": "All three conditions hold, so $S$ is a subspace."
    },
    {
     "i": 6,
     "en": "<b>(b) Decide using coordinate vectors.</b> Take the natural basis of $S$"
    },
    {
     "i": 8,
     "en": "then $\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}$ corresponds to the coordinate vector $(a,b,c)^{T}$, so $\\dim S=3$."
    },
    {
     "i": 9,
     "en": "The coordinate vectors of the three matrices in $\\mathcal{B}$ (in the order $a,b,c$) are"
    },
    {
     "i": 10,
     "en": "$v_1=(2,3,1)^{T}$? Reading in (a,b,c) order: $\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix}\\to(2,3,1)^{T}$,"
    },
    {
     "i": 12,
     "en": "Compute the determinant: $\\begin{vmatrix}2&3&2\\\\3&2&2\\\\1&3&1\\end{vmatrix}$"
    },
    {
     "i": 14,
     "en": "The determinant is nonzero $\\Rightarrow$ the three coordinate vectors are linearly independent."
    },
    {
     "i": 15,
     "en": "Since $S$ is 3-dimensional, three linearly independent vectors must form a basis, so $\\mathcal{B}$ is a basis of $S$. ∎"
    }
   ]
  },
  "lp-4": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a)</b> Expand along the first row:"
    },
    {
     "i": 4,
     "en": "Set $-a^{3}+6a-9=0$, that is, $a^{3}-6a+9=0$."
    },
    {
     "i": 5,
     "en": "Test the root $a=-3$: $-27+18+9=0$ ✔, so $(a+3)$ is a factor."
    },
    {
     "i": 6,
     "en": "Polynomial division: $a^{3}-6a+9=(a+3)(a^{2}-3a+3)$."
    },
    {
     "i": 7,
     "en": "The discriminant of $a^{2}-3a+3$ is $\\Delta=9-12=-3<0$, so there are no real roots."
    },
    {
     "i": 8,
     "en": "Hence the only real root is $a=-3$."
    },
    {
     "i": 9,
     "en": "<b>(b) Cramer's rule.</b> When $\\det A\\ne0$, the system $Ax=b$ has a unique solution"
    },
    {
     "i": 11,
     "en": "where $A_3(b)$ is the matrix obtained by replacing the 3rd column of $A$ with $b$."
    },
    {
     "i": 15,
     "en": "Substituting the specific $b$ and $a$ gives $x_3$."
    },
    {
     "i": 16,
     "en": "<b>When $a=-2$</b>: $\\det A=-(-8)+6(-2)-9=8-12-9=-13\\ne0$, so $A$ is invertible."
    },
    {
     "i": 17,
     "en": "we can use $A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}A$ to find the inverse, then solve $x=A^{-1}b$."
    }
   ]
  },
  "lp-5": {
   "proof": [
    {
     "i": 0,
     "en": "<b>(a)</b> The natural coordinates in $\\mathcal{C}$ are just $(a,b,c)$ (corresponding to upper-left, upper-right, lower-right)."
    },
    {
     "i": 2,
     "en": "<b>(b)</b> The rule for constructing the change-of-coordinates matrix $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}$:"
    },
    {
     "i": 3,
     "en": "<b>Column $j$ = the coordinates of basis vector $j$ of $\\mathcal{B}$ relative to $\\mathcal{C}$.</b>"
    },
    {
     "i": 4,
     "en": "That is, if $\\mathcal{B}=\\{B_1,B_2,B_3\\}$, then"
    },
    {
     "i": 6,
     "en": "For $\\mathcal{B}=\\left\\{\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix},\\begin{pmatrix}3&2\\\\0&3\\end{pmatrix},\\begin{pmatrix}2&2\\\\0&1\\end{pmatrix}\\right\\}$ in this question,"
    },
    {
     "i": 7,
     "en": "$P_{\\mathcal{C}\\leftarrow\\mathcal{B}}=\\begin{pmatrix}2&3&2\\\\3&2&2\\\\1&3&1\\end{pmatrix}$ (column $j$ is the coordinate $(a,b,c)$ of the $j$-th basis vector)."
    },
    {
     "i": 8,
     "en": "<b>(c)</b> Change-of-coordinates relation: $[X]_{\\mathcal{C}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}[X]_{\\mathcal{B}}$."
    },
    {
     "i": 9,
     "en": "To find $[X]_{\\mathcal{B}}$, multiply both sides on the left by $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}$:"
    },
    {
     "i": 11,
     "en": "Since $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}$,"
    },
    {
     "i": 13,
     "en": "Also $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=\\big(P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\big)^{-1}$ and $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}$; the two are mutual inverses."
    },
    {
     "i": 14,
     "en": "<b>Identity:</b> $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\,P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=I$."
    },
    {
     "i": 15,
     "en": "(If $\\mathcal{C}=\\mathcal{E}$ is the standard basis, then $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$ is the matrix formed by taking the basis vectors as columns.)"
    }
   ]
  },
  "lp-6": {
   "proof": [
    {
     "i": 0,
     "en": "<b>Convention:</b> $[T]_{\\mathcal{C}\\leftarrow\\mathcal{B}}$ has as its $j$-th column the coordinate vector of $T(b_j)$ relative to the <b>target basis $\\mathcal{C}$</b>."
    },
    {
     "i": 1,
     "en": "<b>Column 1:</b> $T(b_1)=2b_2$. Relative to $\\mathcal{C}=\\{b_2,b_3,b_1\\}$, $b_2$ is the 1st basis vector,"
    },
    {
     "i": 2,
     "en": "so the coordinate vector is $(2,0,0)^{T}$."
    },
    {
     "i": 3,
     "en": "<b>Column 2:</b> $T(b_2)=3b_3$. $b_3$ is the 2nd basis vector of $\\mathcal{C}$,"
    },
    {
     "i": 4,
     "en": "so the coordinate vector is $(0,3,0)^{T}$."
    },
    {
     "i": 5,
     "en": "<b>Column 3:</b> $T(b_3)=4b_1$. $b_1$ is the 3rd basis vector of $\\mathcal{C}$,"
    },
    {
     "i": 6,
     "en": "so the coordinate vector is $(0,0,4)^{T}$."
    },
    {
     "i": 7,
     "en": "Therefore $[T]_{\\mathcal{C}\\leftarrow\\mathcal{B}}=\\begin{pmatrix}2&0&0\\\\0&3&0\\\\0&0&4\\end{pmatrix}$."
    },
    {
     "i": 8,
     "en": "<b>Trace:</b> $\\operatorname{tr}=2+3+4=9$."
    },
    {
     "i": 9,
     "en": "<b>If instead $\\mathcal{B}\\to\\mathcal{B}$ is used (that is, $[T]_{\\mathcal{B}}$):</b>"
    },
    {
     "i": 11,
     "en": "$[T]_{\\mathcal{B}}=\\begin{pmatrix}0&0&4\\\\2&0&0\\\\0&3&0\\end{pmatrix}$, and the trace is still $0+0+0=0$."
    },
    {
     "i": 12,
     "en": "<b>Key point:</b> the trace is a similarity invariant, but for a combination of different bases ($\\mathcal{C}\\leftarrow\\mathcal{B}$) the matrices are not similar, so the traces can differ."
    },
    {
     "i": 13,
     "en": "Following the convention of the official solution ($\\mathcal{C}=\\{b_2,b_3,b_1\\}$ as the target basis), this question gives a diagonal matrix with trace 9."
    }
   ]
  }
 },
 "proofs": {
  "lp-1": {
   "title": "A and Aᵀ have the same eigenvalues, but their eigenspaces are generally different",
   "statement": "Determine and prove or disprove: for any $3\\times3$ matrix $A$, $A$ and $A^{T}$ have the same set of eigenspaces."
  },
  "lp-2": {
   "title": "Properties of the orthogonal projection matrix A = Σuᵢuᵢᵀ",
   "statement": "Let $u_1,u_2,u_3$ be pairwise orthogonal unit vectors in $\\mathbb{R}^{3}$ and $A=u_1u_1^{T}+u_2u_2^{T}+u_3u_3^{T}$.<br>(a) Prove that $A^{2}=A$;<br>(b) Prove that $u_1$ is an eigenvector of $A$ and give its eigenvalue;<br>(c) Is $A$ invertible? What is the $(1,1)$-entry of $A$?"
  },
  "lp-3": {
   "title": "The set of upper triangular matrices is a subspace; find a basis for it",
   "statement": "Let $S=\\left\\{\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}:a,b,c\\in\\mathbb{R}\\right\\}$ be the set of $2\\times2$ upper triangular matrices.<br>(a) Prove that $S$ is a subspace of $\\mathbb{R}^{2\\times2}$;<br>(b) Prove that $\\mathcal{B}=\\left\\{\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix},\\begin{pmatrix}3&2\\\\0&3\\end{pmatrix},\\begin{pmatrix}2&2\\\\0&1\\end{pmatrix}\\right\\}$ is a basis of $S$."
  },
  "lp-4": {
   "title": "Cramer's rule and the parameter condition for det A = 0",
   "statement": "Let $A=\\begin{pmatrix}1&2&a\\\\2&a&1\\\\a&1&2\\end{pmatrix}$.<br>(a) Find the values of $a$ for which $\\det A=0$;<br>(b) When $\\det A\\ne0$, explain how to use Cramer's rule to find $x_3$."
  },
  "lp-5": {
   "title": "Change-of-coordinates matrices and the coordinate transformation P_{B←C}",
   "statement": "Let $S$ be the space of $2\\times2$ upper triangular matrices and $\\mathcal{C}=\\left\\{\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\right\\}$. Suppose $\\mathcal{B}$ is another basis.<br>(a) Find the coordinates of $X=\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}$ relative to $\\mathcal{C}$;<br>(b) Explain how the change-of-coordinates matrix $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}$ is constructed;<br>(c) Does $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}^{-1}$ make sense?"
  },
  "lp-6": {
   "title": "Matrix of a linear transformation relative to different bases",
   "statement": "Let $\\mathcal{B}=\\{b_1,b_2,b_3\\}$ and $\\mathcal{C}=\\{b_2,b_3,b_1\\}$ be two bases of $V$. $T:V\\to V$ satisfies $T(b_1)=2b_2$, $T(b_2)=3b_3$, $T(b_3)=4b_1$. Find the matrix of $T$ relative to $\\mathcal{B}$ and $\\mathcal{C}$, and find its trace."
  }
 }
});
})(typeof window!=="undefined"?window:globalThis);
