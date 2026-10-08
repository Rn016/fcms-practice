/* ==========================================================================
   AMA1751 Linear Algebra 讲义精读
   依据 Topic 1–7 讲义整理；中文讲解为主，英文标注专有名词。
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('notes/ama1751.js: 必须先加载 js/registry.js');
  var T = [];

  /* ---------- A1 线性方程组与高斯消元 ---------- */
  T.push({
    no: 'A1', title: '线性方程组与高斯消元', titleEn: 'Linear Systems and Gaussian Elimination',
    tags: ['linear system', 'Gaussian elimination', 'rank', 'consistency'],
    qids: ['la-1-01', 'la-1-02', 'la-1-04', 'la-1-07', 'la-1-08'],
    blocks: [
      { t: 'p', md: '线性代数的起点是**线性方程组**（system of linear equations）。整门课的核心问题可以概括为：$A\\mathbf{x}=\\mathbf{b}$ 有没有解？有多少解？怎么求？' },
      { t: 'h', md: '一、三种初等行变换' },
      { t: 'p', md: '[[Gaussian elimination|高斯消元]] 只允许三种操作（都不改变解集）：' },
      { t: 'ol', items: [
        '**交换**两行（interchange）；',
        '**某行乘以非零常数**（scaling）；',
        '**某行加上另一行的倍数**（row addition）—— 这是最常用的消元操作。'
      ]},
      { t: 'warn', md: '**禁止**对**列**做这类操作（会改变解集）。允许交换列，但必须同时交换未知量的顺序，容易出错，尽量不用。' },
      { t: 'h', md: '二、增广矩阵与行化简' },
      { t: 'p', md: '把 $A\\mathbf{x}=\\mathbf{b}$ 写成**增广矩阵**（augmented matrix）$[A\\mid\\mathbf{b}]$，消元直到**行阶梯形**（row echelon form），再**回代**（back-substitution）求解。' },
      { t: 'h', md: '三、解的存在性与唯一性（核心判据）' },
      { t: 'tbl', head: ['条件', '结论', '几何意义'],
        rows: [
          ['$\\operatorname{rank}(A)<\\operatorname{rank}([A|\\mathbf b])$', '<b>无解</b>（inconsistent）', '出现了 $0=1$ 这类矛盾行'],
          ['$\\operatorname{rank}(A)=\\operatorname{rank}([A|\\mathbf b])=n$', '<b>唯一解</b>', '所有列都是主元列，无自由变量'],
          ['$\\operatorname{rank}(A)=\\operatorname{rank}([A|\\mathbf b])<n$', '<b>无穷多解</b>', '存在自由变量（free variable）']
        ]},
      { t: 'note', md: '**秩–零化度定理**（Rank–Nullity Theorem）：$\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$，其中 $n$ 是**列数**（未知量个数）。自由度 = 自由变量个数 = nullity。' },
      { t: 'h', md: '四、方阵可逆的等价条件' },
      { t: 'p', md: '对 $n\\times n$ 矩阵 $A$，下列命题**互相等价**（考试常考「以下哪个成立」）：' },
      { t: 'ul', items: [
        '$A$ 可逆（invertible）；',
        '$\\det A\\neq0$；',
        '$\\operatorname{rank}(A)=n$（满秩）；',
        '$A\\mathbf x=\\mathbf b$ 对任意 $\\mathbf b$ 有唯一解；',
        '$A\\mathbf x=\\mathbf 0$ 只有零解（$\\operatorname{Nul}A=\\{\\mathbf 0\\}$）；',
        '$A$ 的列向量线性无关，构成 $\\mathbb R^{n}$ 的一组基。'
      ]},
      { t: 'h', md: '五、Cramer 法则' },
      { t: 'p', md: '当 $\\det A\\neq0$ 时，$x_i=\\dfrac{\\det A_i(\\mathbf b)}{\\det A}$，其中 $A_i(\\mathbf b)$ 是把 $A$ 的第 $i$ 列换成 $\\mathbf b$ 得到的矩阵。' },
      { t: 'note', md: '**实用建议**：Cramer 法则**只适合 2×2、3×3 手算**；$n$ 稍大时计算量是 $O(n\\cdot n!)$，远不如高斯消元（$O(n^{3})$）。但它的**理论价值**很高（用于推导公式）。' }
    ],
    terms: [
      ['system of linear equations', '线性方程组'],
      ['augmented matrix', '增广矩阵'],
      ['Gaussian elimination', '高斯消元'],
      ['elementary row operation', '初等行变换'],
      ['row echelon form', '行阶梯形'],
      ['back-substitution', '回代'],
      ['consistent / inconsistent', '相容（有解）/ 不相容（无解）'],
      ['free variable', '自由变量'], ['pivot', '主元'],
      ['rank', '秩'], ['nullity', '零化度'],
      ['Rank–Nullity Theorem', '秩–零化度定理'],
      ['Cramer\'s rule', '克拉默法则']
    ]
  });

  /* ---------- A2 行列式 ---------- */
  T.push({
    no: 'A2', title: '行列式', titleEn: 'Determinants',
    tags: ['determinant', 'cofactor', 'triangular', 'properties'],
    qids: ['la-2-01', 'la-2-02', 'la-2-03', 'la-2-04', 'la-2-05', 'la-2-06'],
    blocks: [
      { t: 'p', md: '[[determinant|行列式]] 是一个把方阵映射为**数值**的函数，它判断矩阵是否可逆，也给出面积／体积的缩放比例。' },
      { t: 'h', md: '一、计算手段（按效率排序）' },
      { t: 'ol', items: [
        '**三角矩阵**：$\\det = $ 对角元之积（最快）；',
        '**先做行变换化成三角**：注意每次行交换要**变号**；',
        '**按含零最多的行／列展开**（cofactor expansion）：$\\det A=\\sum_j a_{ij}(-1)^{i+j}M_{ij}$；',
        '**2×2** 直接 $ad-bc$；**3×3** 用对角线法则（Sarrus）。'
      ]},
      { t: 'h', md: '二、必须记住的性质' },
      { t: 'tbl', head: ['性质', '公式'],
        rows: [
          ['转置不变', '$\\det(A^{T})=\\det A$'],
          ['乘积可拆', '$\\det(AB)=\\det A\\cdot\\det B$'],
          ['<b>数乘要取 $n$ 次幂</b>', '$\\det(cA)=c^{n}\\det A$（$n$ 为阶数）'],
          ['逆矩阵', '$\\det(A^{-1})=\\dfrac{1}{\\det A}$'],
          ['交换两行', '行列式<b>变号</b>'],
          ['某行乘 $c$', '行列式<b>乘 $c$</b>'],
          ['某行加另一行倍数', '行列式<b>不变</b>'],
          ['两行相同 / 成比例', '$\\det = 0$']
        ]},
      { t: 'warn', md: '**最常错的一条**：$\\det(cA)=c^{n}\\det A$ **不是** $c\\det A$。例如 $4\\times4$ 矩阵、$c=2$、$\\det A=3$，则 $\\det(2A)=2^{4}\\cdot3=48$。' },
      { t: 'h', md: '三、范德蒙德行列式' },
      { t: 'p', md: '$\\begin{vmatrix}1&1&1\\\\x_1&x_2&x_3\\\\x_1^{2}&x_2^{2}&x_3^{2}\\end{vmatrix}=\\displaystyle\\prod_{i<j}(x_j-x_i)$。三阶即 $(x_2-x_1)(x_3-x_1)(x_3-x_2)$。' },
      { t: 'note', md: '**看到「$1,x,x^{2}$ 各行」的形状就想到范德蒙德**，直接套公式比展开快得多。' },
      { t: 'h', md: '四、行列式与可逆性' },
      { t: 'p', md: '$A$ 可逆 $\\iff \\det A\\neq0$。**推论**：若 $A^{T}A=I$（正交矩阵），则 $(\\det A)^{2}=1$，故 $\\det A=\\pm1$。' },
      { t: 'h', md: '五、伴随矩阵与逆' },
      { t: 'p', md: '$A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}(A)$，其中 $\\operatorname{adj}(A)$ 是**伴随矩阵**（余子式矩阵的转置）。' },
      { t: 'p', md: '**2×2 速记**：$\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ —— 主对角交换、副对角变号。' }
    ],
    terms: [
      ['determinant', '行列式'], ['cofactor expansion', '余子式展开'],
      ['minor', '余子式'], ['cofactor', '代数余子式'],
      ['adjugate / adjoint matrix', '伴随矩阵'],
      ['upper / lower triangular', '上三角 / 下三角'],
      ['Vandermonde determinant', '范德蒙德行列式'],
      ['orthogonal matrix', '正交矩阵'],
      ['singular / nonsingular', '奇异 / 非奇异']
    ]
  });

  /* ---------- A3 向量空间与线性相关 ---------- */
  T.push({
    no: 'A3', title: '向量空间、子空间与线性相关', titleEn: 'Vector Spaces, Subspaces and Linear (In)dependence',
    tags: ['vector space', 'subspace', 'span', 'basis', 'independence'],
    qids: ['la-3-01', 'la-3-02', 'la-3-03', 'la-3-04', 'la-3-05', 'la-3-06', 'la-3-07'],
    blocks: [
      { t: 'p', md: '本讲建立线性代数的**结构框架**：什么叫「同一个空间」、什么叫「独立的方向」、什么叫「够用的方向」。' },
      { t: 'h', md: '一、子空间的三条判据' },
      { t: 'p', md: '$S$ 是向量空间 $V$ 的**子空间**（subspace）当且仅当：' },
      { t: 'ol', items: [
        '**含零向量**：$\\mathbf 0\\in S$；',
        '**对加法封闭**：$\\mathbf u,\\mathbf v\\in S\\Rightarrow\\mathbf u+\\mathbf v\\in S$；',
        '**对数乘封闭**：$\\mathbf u\\in S,\\ c\\in\\mathbb R\\Rightarrow c\\mathbf u\\in S$。'
      ]},
      { t: 'warn', md: '**常见误判**：$\\{A:\\det A=0\\}$ **不是**子空间 —— 取合适的两者相加可得可逆矩阵。而行列式不是线性函数，这正是根本原因。' },
      { t: 'h', md: '二、线性相关 / 无关' },
      { t: 'p', md: '$\\{\\mathbf v_1,\\dots,\\mathbf v_k\\}$ **线性相关**（linearly dependent）$\\iff$ 存在**不全为零**的 $c_i$ 使 $\\sum c_i\\mathbf v_i=\\mathbf 0$。' },
      { t: 'ul', items: [
        '**两向量**相关 $\\iff$ 一个是另一个的标量倍；',
        '**含零向量**的集合必定相关；',
        '**向量的个数 $>$ 维数**时必定相关（例如 $\\mathbb R^{3}$ 中任意 4 个向量相关）；',
        '**无关集合的子集仍无关**；**相关集合的超集仍相关**。'
      ]},
      { t: 'note', md: '**判断方法（把向量作为列拼成矩阵 $A$）**：$A\\mathbf x=\\mathbf 0$ 只有零解 $\\iff$ 列线性无关 $\\iff \\operatorname{rank}(A)=$ 向量个数 $\\iff$ 无自由变量。' },
      { t: 'h', md: '三、张成、基与维数' },
      { t: 'tbl', head: ['概念', '英文', '定义'],
        rows: [
          ['张成', '<b>span</b>', '$\\operatorname{span}\\{\\mathbf v_i\\}=$ 所有线性组合的集合'],
          ['生成集', 'spanning set', '其张成等于整个空间'],
          ['线性无关', 'linearly independent', '没有冗余方向'],
          ['<b>基</b>', '<b>basis</b>', '<b>既生成又线性无关</b>（不多不少）'],
          ['维数', '<b>dimension</b>', '基中向量的个数（唯一确定）']
        ]},
      { t: 'p', md: '**判断一组向量是否为基**：把它们作为列拼成方阵，$\\det\\neq0$（或秩等于维数）即为基。' },
      { t: 'h', md: '四、线性变换的保「独立」性质' },
      { t: 'p', md: '**线性无关向量组在可逆变换下仍线性无关**；但在不可逆变换下可能变成相关（因为可被「压扁」）。' },
      { t: 'note', md: '**考试技巧**：题目给「$\\mathbf v_1,\\mathbf v_2,\\mathbf v_3$ 线性无关，判断 $\\{\\mathbf v_1+\\mathbf v_2,\\ \\mathbf v_2+\\mathbf v_3,\\ \\mathbf v_3+\\mathbf v_1\\}$ 是否无关」时，**设线性组合为零，按 $\\mathbf v_i$ 整理**，得到关于系数的方程组，再判断该方程组是否有非零解。核心是「把新向量用已知基表示，转成系数矩阵的秩问题」。' }
    ],
    terms: [
      ['vector space', '向量空间'], ['subspace', '子空间'],
      ['span', '张成（生成）'], ['spanning set', '生成集'],
      ['linear combination', '线性组合'],
      ['linearly independent / dependent', '线性无关 / 相关'],
      ['basis', '基'], ['dimension', '维数'],
      ['trivial / nontrivial solution', '平凡解 / 非平凡解'],
      ['closed under addition / scalar multiplication', '对加法 / 数乘封闭'],
      ['homogeneous system', '齐次方程组']
    ]
  });

  /* ---------- A4 矩阵运算、逆与秩 ---------- */
  T.push({
    no: 'A4', title: '矩阵运算、逆与秩', titleEn: 'Matrix Operations, Inverse and Rank',
    tags: ['matrix', 'inverse', 'rank', 'transpose', 'idempotent'],
    qids: ['la-4-01', 'la-4-02', 'la-4-03', 'la-4-04', 'la-4-05', 'la-4-06', 'la-10-01'],
    blocks: [
      { t: 'p', md: '矩阵是线性变换的**载体**，也是数据结构的核心。本讲整理运算规则与几个高频结论。' },
      { t: 'h', md: '一、转置与逆的运算律' },
      { t: 'tbl', head: ['公式', '注意'],
        rows: [
          ['$(A^{T})^{T}=A$', '——'],
          ['$(AB)^{T}=B^{T}A^{T}$', '<b>顺序反转</b>'],
          ['$(A+B)^{T}=A^{T}+B^{T}$', '——'],
          ['$(AB)^{-1}=B^{-1}A^{-1}$', '<b>顺序反转</b>'],
          ['$(A^{T})^{-1}=(A^{-1})^{T}$', '两者可交换'],
          ['$(cA)^{-1}=\\dfrac1c A^{-1}$', '$c\\neq0$']
        ]},
      { t: 'warn', md: '**顺序反转**是最容易忘的：$(AB)^{-1}=B^{-1}A^{-1}$，不是 $A^{-1}B^{-1}$。用「穿鞋袜」比喻记忆：先穿袜再穿鞋，脱时先脱鞋再脱袜。' },
      { t: 'h', md: '二、秩的性质' },
      { t: 'ul', items: [
        '$\\operatorname{rank}(A)=\\operatorname{rank}(A^{T})$；',
        '$\\operatorname{rank}(A)\\le\\min(m,n)$（不超过行列数的小者）；',
        '$\\operatorname{rank}(AB)\\le\\min(\\operatorname{rank}A,\\operatorname{rank}B)$；',
        '$\\operatorname{rank}(A)=\\operatorname{rank}(A^{T}A)$（重要，用于最小二乘）。'
      ]},
      { t: 'h', md: '三、幂等矩阵（投影）' },
      { t: 'p', md: '若 $A^{2}=A$，称 $A$ **幂等**（**idempotent**）。核心结论：' },
      { t: 'ul', items: [
        '特征值只能是 **0 或 1**（由 $\\lambda=\\lambda^{2}$ 推出）；',
        '$A$ 是投影到 $\\operatorname{Col}(A)$ 上的投影矩阵；',
        '$\\operatorname{rank}(A)+\\operatorname{rank}(I-A)=n$；',
        '$\\operatorname{tr}(A)=\\operatorname{rank}(A)$（迹等于秩）。'
      ]},
      { t: 'note', md: '**正交投影矩阵**的完整刻画：$A=A^{T}$（对称）且 $A^{2}=A$（幂等）。若 $\\{\\mathbf u_i\\}$ 是**标准正交**向量组，则 $A=\\sum_i\\mathbf u_i\\mathbf u_i^{T}$ 就是到 $\\operatorname{span}\\{\\mathbf u_i\\}$ 的正交投影。' },
      { t: 'h', md: '四、LU 分解' },
      { t: 'p', md: '$A=LU$（$L$ 单位下三角、$U$ 上三角）就是**高斯消元的矩阵形式**：$L$ 存的是消元系数。' },
      { t: 'warn', md: '**不作行交换的 LU 分解不总存在**。反例：$A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$，因为第一步主元为 0。一般需要**带部分主元**：$PA=LU$。' },
      { t: 'p', md: '**Doolittle 算法**：从 $A$ 消元得到 $U$；消元时用的乘数 $m_{ij}$ 依次填入 $L$ 的对应位置（对角元为 1）。' }
    ],
    terms: [
      ['matrix', '矩阵'], ['transpose', '转置'],
      ['inverse matrix', '逆矩阵'], ['invertible / singular', '可逆 / 奇异'],
      ['rank', '秩'], ['trace', '迹'],
      ['idempotent', '幂等'], ['projection matrix', '投影矩阵'],
      ['orthogonal projection', '正交投影'],
      ['LU decomposition', 'LU 分解'],
      ['partial pivoting', '部分主元法'],
      ['elementary matrix', '初等矩阵']
    ]
  });

  /* ---------- A5 线性变换与基变换 ---------- */
  T.push({
    no: 'A5', title: '线性变换与基变换', titleEn: 'Linear Transformations and Change of Basis',
    tags: ['linear transformation', 'standard matrix', 'change of basis', 'coordinate'],
    qids: ['la-5-01', 'la-5-02', 'la-5-03', 'la-5-04', 'la-6-01', 'la-6-02', 'la-6-03'],
    blocks: [
      { t: 'p', md: '本讲把「矩阵」理解为**线性变换的坐标表示**，并说明换一组基之后矩阵如何变化。' },
      { t: 'h', md: '一、线性变换的两条件' },
      { t: 'p', md: '$T$ 是线性变换（linear transformation）$\\iff$ 对任意 $\\mathbf u,\\mathbf v$ 与标量 $c$：$T(\\mathbf u+\\mathbf v)=T(\\mathbf u)+T(\\mathbf v)$、$T(c\\mathbf u)=cT(\\mathbf u)$。' },
      { t: 'p', md: '**等价说法**：$T(c\\mathbf u+d\\mathbf v)=cT(\\mathbf u)+dT(\\mathbf v)$（保持线性组合）。' },
      { t: 'h', md: '二、标准矩阵' },
      { t: 'p', md: '$T:\\mathbb R^{n}\\to\\mathbb R^{m}$ 的**标准矩阵**（standard matrix）的第 $j$ 列就是 $T(\\mathbf e_j)$（第 $j$ 个标准基向量的像）。' },
      { t: 'note', md: '**记忆口诀**：**「标准矩阵的列 = 标准基的像」**。求标准矩阵就是逐个代入 $\\mathbf e_1,\\mathbf e_2,\\dots$。' },
      { t: 'h', md: '三、常见几何变换的标准矩阵' },
      { t: 'tbl', head: ['变换', '标准矩阵'],
        rows: [
          ['逆时针旋转 $\\theta$', '$\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\ \\sin\\theta&\\cos\\theta\\end{pmatrix}$'],
          ['关于 $x$ 轴反射', '$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$'],
          ['关于 $y=x$ 反射', '$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$'],
          ['沿 $x$ 方向伸缩 $k$ 倍', '$\\begin{pmatrix}k&0\\\\0&1\\end{pmatrix}$'],
          ['投影到 $x$ 轴', '$\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$']
        ]},
      { t: 'p', md: '验证：旋转 $90^{\\circ}$ 的矩阵 $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ 满足 $R^{2}=-I$，故 $R^{4}=I$ —— 与「转四次回到原处」一致。' },
      { t: 'h', md: '四、核与像' },
      { t: 'ul', items: [
        '**核**（kernel / null space）：$\\ker T=\\{\\mathbf x:T(\\mathbf x)=\\mathbf 0\\}$；',
        '**像**（image / range）：$\\operatorname{Im}T=\\{T(\\mathbf x)\\}$；',
        '$T$ **单射**（injective）$\\iff\\ker T=\\{\\mathbf 0\\}$；',
        '$\\dim(\\ker T)+\\dim(\\operatorname{Im}T)=n$（秩–零化度定理）。'
      ]},
      { t: 'h', md: '五、基变换与过渡矩阵' },
      { t: 'p', md: '设 $\\mathcal B=\\{\\mathbf b_1,\\dots,\\mathbf b_n\\}$ 是一组基。**过渡矩阵**（change-of-coordinates matrix）$P_{\\mathcal B}$ 的各列就是 $\\mathbf b_i$ 在标准基下的坐标。' },
      { t: 'p', md: '关系式：$\\mathbf x=P_{\\mathcal B}[\\mathbf x]_{\\mathcal B}$，反过来 $[\\mathbf x]_{\\mathcal B}=P_{\\mathcal B}^{-1}\\mathbf x$。' },
      { t: 'note', md: '**一般情形的口诀**：$P_{\\mathcal C\\leftarrow\\mathcal B}$ 的**第 $j$ 列 = $\\mathcal B$ 中第 $j$ 个基向量在 $\\mathcal C$ 下的坐标**。并且 $P_{\\mathcal B\\leftarrow\\mathcal C}=P_{\\mathcal C\\leftarrow\\mathcal B}^{-1}$。' },
      { t: 'h', md: '六、相似矩阵' },
      { t: 'p', md: '同一线性变换在不同基下的矩阵满足 $B=P^{-1}AP$，此时称 $A$ 与 $B$ **相似**（similar）。' },
      { t: 'p', md: '**相似不变量**：行列式、迹、秩、特征多项式 —— 这些量换基后不变，因此可用它们快速检验两个矩阵是否可能相似。' }
    ],
    terms: [
      ['linear transformation', '线性变换'],
      ['standard matrix', '标准矩阵'], ['standard basis', '标准基'],
      ['rotation / reflection', '旋转 / 反射'],
      ['kernel / null space', '核 / 零空间'],
      ['image / range', '像 / 值域'],
      ['injective / surjective / bijective', '单射 / 满射 / 双射'],
      ['change-of-coordinates matrix', '过渡矩阵'],
      ['change of basis', '基变换'], ['similar matrices', '相似矩阵'],
      ['similarity invariant', '相似不变量']
    ]
  });

  /* ---------- A6 特征值与对角化 ---------- */
  T.push({
    no: 'A6', title: '特征值、特征向量与对角化', titleEn: 'Eigenvalues, Eigenvectors and Diagonalisation',
    tags: ['eigenvalue', 'eigenvector', 'diagonalisation', 'multiplicity'],
    qids: ['la-7-01', 'la-7-02', 'la-7-03', 'la-7-04', 'la-7-05', 'la-7-06', 'la-7-07'],
    blocks: [
      { t: 'p', md: '特征值回答一个问题：**哪些方向在变换下只被拉伸、不被旋转？** 这是本课程最重要的概念之一。' },
      { t: 'h', md: '一、定义与求法' },
      { t: 'p', md: '若 $A\\mathbf v=\\lambda\\mathbf v$ 且 $\\mathbf v\\neq\\mathbf 0$，则 $\\lambda$ 是**特征值**（eigenvalue）、$\\mathbf v$ 是对应**特征向量**（eigenvector）。' },
      { t: 'ol', items: [
        '写出**特征方程**：$\\det(A-\\lambda I)=0$，解出 $\\lambda$；',
        '对每个 $\\lambda$，解**齐次方程组** $(A-\\lambda I)\\mathbf v=\\mathbf 0$，其解空间即**特征空间**（eigenspace）。'
      ]},
      { t: 'h', md: '二、两个快速校验' },
      { t: 'p', md: '对 $n\\times n$ 矩阵：$\\displaystyle\\sum\\lambda_i=\\operatorname{tr}(A)$，$\\displaystyle\\prod\\lambda_i=\\det A$。' },
      { t: 'note', md: '**这两个等式极其有用**：算出特征值后立刻验证，能抓出大部分计算错误。三角矩阵的特征值就是**对角元**。' },
      { t: 'h', md: '三、可对角化的判据（考试核心）' },
      { t: 'p', md: '$A$ 可对角化（diagonalisable）$\\iff$ 有 $n$ 个线性无关的特征向量 $\\iff$ **每个特征值的几何重数 = 代数重数**。' },
      { t: 'tbl', head: ['概念', '含义'],
        rows: [
          ['<b>代数重数</b><br>algebraic multiplicity', '特征方程中 $(\\lambda-\\lambda_0)$ 的幂次'],
          ['<b>几何重数</b><br>geometric multiplicity', '$\\dim\\operatorname{Nul}(A-\\lambda_0 I)$ = 特征空间的维数'],
          ['关系', '恒有 几何重数 $\\le$ 代数重数']
        ]},
      { t: 'warn', md: '**经典反例**：$A=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$。特征值 $\\lambda=2$ 的**代数重数为 2**，但 $A-2I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ 的解空间只有一维（**几何重数 1**），故**不可对角化**。' },
      { t: 'h', md: '四、可对角化时的分解' },
      { t: 'p', md: '若 $A=PDP^{-1}$，其中 $D=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$，$P$ 的列是对应特征向量。' },
      { t: 'ul', items: [
        '$A^{k}=PD^{k}P^{-1}$（幂运算变成对角元的幂）；',
        '$A$ 的特征值 $\\lambda$ ⇒ $A^{k}$ 的特征值 $\\lambda^{k}$；',
        '$A+cI$ 与 $A$ 有**相同的特征空间**，特征值整体平移 $c$。'
      ]},
      { t: 'h', md: '五、$A$ 与 $A^{T}$ 的关系（易考）' },
      { t: 'p', md: '$A$ 与 $A^{T}$ 有**相同的特征多项式**（$\\det(A-\\lambda I)=\\det((A-\\lambda I)^{T})$），因此**特征值相同**。' },
      { t: 'warn', md: '但**特征空间一般不同**！例：$A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$ 与 $A^{T}=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$ 在 $\\lambda=1$ 时的特征空间分别是 $\\operatorname{span}\\{(1,0)^{T}\\}$ 与 $\\operatorname{span}\\{(-1,1)^{T}\\}$。维数相同但子空间不同。' }
    ],
    terms: [
      ['eigenvalue', '特征值'], ['eigenvector', '特征向量'],
      ['eigenspace', '特征空间'],
      ['characteristic equation', '特征方程'],
      ['characteristic polynomial', '特征多项式'],
      ['diagonalisable', '可对角化'],
      ['algebraic multiplicity', '代数重数'],
      ['geometric multiplicity', '几何重数'],
      ['similar matrices', '相似矩阵'],
      ['defective matrix', '亏损矩阵（不可对角化）']
    ]
  });

  /* ---------- A7 内积、正交与最小二乘 ---------- */
  T.push({
    no: 'A7', title: '内积、正交、最小二乘', titleEn: 'Inner Products, Orthogonality and Least Squares',
    tags: ['inner product', 'orthogonal', 'Gram-Schmidt', 'least squares', 'symmetric'],
    qids: ['la-8-01', 'la-8-02', 'la-8-03', 'la-8-04', 'la-8-05', 'la-9-01', 'la-9-02', 'la-9-04'],
    blocks: [
      { t: 'p', md: '本讲引入**长度与角度**，从而能在向量空间里谈「垂直」与「最近」。这直接导出**最小二乘**这一最重要的实际应用。' },
      { t: 'h', md: '一、内积、范数与正交' },
      { t: 'p', md: '**内积**（inner product）：$\\mathbf u\\cdot\\mathbf v=\\sum u_iv_i=\\mathbf u^{T}\\mathbf v$；**范数**（norm）：$\\|\\mathbf u\\|=\\sqrt{\\mathbf u\\cdot\\mathbf u}$；**正交**（orthogonal）：$\\mathbf u\\cdot\\mathbf v=0$。' },
      { t: 'h', md: '二、投影：最小二乘的几何基础' },
      { t: 'p', md: '$\\mathbf w$ 在 $\\mathbf u$ 上的**投影**（projection）：$\\operatorname{proj}_{\\mathbf u}\\mathbf w=\\dfrac{\\mathbf w\\cdot\\mathbf u}{\\mathbf u\\cdot\\mathbf u}\\mathbf u$。' },
      { t: 'note', md: '**几何意义**：$\\mathbf w-\\operatorname{proj}_{\\mathbf u}\\mathbf w$ 与 $\\mathbf u$ **正交** —— 这就是「最近点」的特征，也是最小二乘的本质。' },
      { t: 'h', md: '三、Gram–Schmidt 正交化' },
      { t: 'p', md: '把一组线性无关向量化为**标准正交组**：' },
      { t: 'ol', items: [
        '$\\mathbf v_1=\\mathbf u_1$；',
        '$\\mathbf v_2=\\mathbf u_2-\\dfrac{\\mathbf u_2\\cdot\\mathbf v_1}{\\mathbf v_1\\cdot\\mathbf v_1}\\mathbf v_1$；',
        '$\\mathbf v_3=\\mathbf u_3-\\dfrac{\\mathbf u_3\\cdot\\mathbf v_1}{\\mathbf v_1\\cdot\\mathbf v_1}\\mathbf v_1-\\dfrac{\\mathbf u_3\\cdot\\mathbf v_2}{\\mathbf v_2\\cdot\\mathbf v_2}\\mathbf v_2$；',
        '最后把每个 $\\mathbf v_i$ **单位化**：$\\mathbf q_i=\\mathbf v_i/\\|\\mathbf v_i\\|$。'
      ]},
      { t: 'warn', md: '**每一步都要减去「对所有之前向量的投影」**，漏减任何一个都会导致结果不满足正交性。算完务必验证 $\\mathbf q_i\\cdot\\mathbf q_j=0$（$i\\neq j$）。' },
      { t: 'h', md: '四、最小二乘' },
      { t: 'p', md: '当 $A\\mathbf x=\\mathbf b$ **无解**（超定方程组）时，求使 $\\|A\\mathbf x-\\mathbf b\\|$ 最小的 $\\hat{\\mathbf x}$。' },
      { t: 'p', md: '**正规方程**（normal equations）：$A^{T}A\\hat{\\mathbf x}=A^{T}\\mathbf b$。' },
      { t: 'ol', items: [
        '按题意写出**设计矩阵** $A$（注意：**列的顺序决定了未知量的顺序**）；',
        '算 $A^{T}A$ 与 $A^{T}\\mathbf b$；',
        '解 $A^{T}A\\hat{\\mathbf x}=A^{T}\\mathbf b$；',
        '代回得拟合函数，可再算**残差**（residual）验证。'
      ]},
      { t: 'warn', md: '**最大失分点：列约定不一致**。例如拟合 $y=mx+c$，若把第一列设为 $x$，解出的是 $(m,c)$；若第一列设为 $1$，解出的是 $(c,m)$ —— **同一题两种约定会得到互换的 $m,c$**。答题时必须先写清约定。' },
      { t: 'h', md: '五、对称矩阵与二次型' },
      { t: 'ul', items: [
        '**实对称矩阵**的特征值全为**实数**，且不同特征值的特征向量**互相正交**（谱定理）；',
        '**二次型**（quadratic form）$Q(\\mathbf x)=\\mathbf x^{T}A\\mathbf x$，其中 $A$ 可取对称矩阵（交叉项系数**平分**到对称位置）；',
        '**正定**（positive definite）$\\iff$ 所有特征值 $>0$ $\\iff$ 所有**顺序主子式** $>0$（Sylvester 准则）。'
      ]},
      { t: 'p', md: '例：$Q=2x_1^{2}-2x_1x_2+2x_2^{2}$ 的矩阵为 $\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$（交叉项 $-2x_1x_2$ 平分为 $-1,-1$），特征值 $1,3$ 均正，故**正定**。' },
      { t: 'note', md: '**判断正定性的三条路**：① 特征值全正；② 顺序主子式全正；③ 配方法化为平方和。考试里哪种快用哪种 —— 2×2 用①，3×3 用②。' }
    ],
    terms: [
      ['inner product', '内积'], ['dot product', '点积'],
      ['norm', '范数'], ['unit vector', '单位向量'],
      ['orthogonal', '正交'], ['orthonormal', '标准正交'],
      ['projection', '投影'], ['Gram–Schmidt process', '格拉姆–施密特正交化'],
      ['least squares', '最小二乘'], ['normal equations', '正规方程'],
      ['residual', '残差'], ['overdetermined system', '超定方程组'],
      ['symmetric matrix', '对称矩阵'], ['quadratic form', '二次型'],
      ['positive definite', '正定'], ['spectral theorem', '谱定理'],
      ['leading principal minor', '顺序主子式']
    ]
  });

  FCMS.registerNotes({ subjectId: 'AMA1751', topics: T });
})(typeof window !== 'undefined' ? window : globalThis);
