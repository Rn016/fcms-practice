/* ==========================================================================
   AMA1751 Linear Algebra —— 学科定义 + 题库
   --------------------------------------------------------------------------
   依据 Topic 1–7 讲义、2023–2025 四份历年期末卷与 Midterm Sample 编排。
   所有可计算答案均由 sympy 独立复算（见验证记录），矩阵类答案统一约定：
     · 逆矩阵 / 矩阵答案 → 用 [[a,b],[c,d]] 形式，或填空题只问某一个元素
     · 向量答案        → 用 (a,b,c) 形式
     · 特征值          → 从小到大用逗号分隔
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('subjects/ama1751.js: 必须先加载 js/registry.js');

  var Q = [];

  /* ==================== 1. 线性方程组 / 高斯消元 ==================== */
  Q.push(
  {
    id: 'la-1-01', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1 / Midterm Sample',
    prompt: '设 $A=\\begin{pmatrix}1&2&-1\\\\2&-1&3\\\\3&1&-2\\end{pmatrix}$，$b=\\begin{pmatrix}2\\\\9\\\\7\\end{pmatrix}$。求 $\\det A$。',
    blanks: [{ label: '$\\det A$', answer: { exact: '20' } }],
    solution: [
      '按第一行展开：',
      '$\\det A=1\\cdot\\begin{vmatrix}-1&3\\\\1&-2\\end{vmatrix}-2\\cdot\\begin{vmatrix}2&3\\\\3&-2\\end{vmatrix}+(-1)\\cdot\\begin{vmatrix}2&-1\\\\3&1\\end{vmatrix}$',
      '$=1\\big((-1)(-2)-3\\cdot1\\big)-2\\big(2(-2)-3\\cdot3\\big)-1\\big(2\\cdot1-(-1)\\cdot3\\big)$',
      '$=1(2-3)-2(-4-9)-1(2+3)=(-1)-2(-13)-5=-1+26-5=20$。',
      '故 $\\det A=20\\ne0$，$A$ 可逆。'
    ]
  },
  {
    id: 'la-1-02', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1',
    prompt: '承上，用 Cramer 法则或消元法解 $Ax=b$，求 $x_1$。',
    blanks: [{ label: '$x_1$', answer: { exact: '3' } }],
    solution: [
      '用高斯消元：对增广矩阵 $[A\\mid b]$ 行化简。',
      '$\\begin{pmatrix}1&2&-1&\\mid&2\\\\2&-1&3&\\mid&9\\\\3&1&-2&\\mid&7\\end{pmatrix}$',
      '$R_2\\to R_2-2R_1$：$(0,-5,5\\mid5)$；$R_3\\to R_3-3R_1$：$(0,-5,1\\mid1)$。',
      '$R_3\\to R_3-R_2$：$(0,0,-4\\mid-4)\\Rightarrow x_3=1$。',
      '回代 $R_2$：$-5x_2+5(1)=5\\Rightarrow x_2=0$。',
      '回代 $R_1$：$x_1+2(0)-1=2\\Rightarrow x_1=3$。',
      '故 $x=(3,0,1)^{T}$，即 $x_1=3$。',
      '（Cramer 法则：$x_1=\\det A_1/\\det A=60/20=3$，其中 $A_1$ 是把第一列换成 $b$。）'
    ]
  },
  {
    id: 'la-1-03', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1',
    prompt: '承上，求 $x_3$。',
    blanks: [{ label: '$x_3$', answer: { exact: '1' } }],
    solution: [
      '由上面的行化简：$-4x_3=-4$，故 $x_3=1$。',
      '完整解为 $x=(3,0,1)^{T}$。'
    ]
  },
  {
    id: 'la-1-04', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1',
    prompt: '承上，求 $A$ 的逆矩阵 $A^{-1}$ 的 $(1,1)$ 元素（即第一行第一列）。',
    blanks: [{ label: '$ (A^{-1})_{11}$', answer: { exact: '-1/20', alts: ['-0.05'] } }],
    solution: [
      '用 $[A\\mid I]$ 行化简为 $[I\\mid A^{-1}]$，或用伴随矩阵 $A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}(A)$。',
      '计算得',
      '$A^{-1}=\\dfrac{1}{20}\\begin{pmatrix}-1&3&5\\\\13&1&-5\\\\5&5&-5\\end{pmatrix}=\\begin{pmatrix}-1/20&3/20&1/4\\\\13/20&1/20&-1/4\\\\1/4&1/4&-1/4\\end{pmatrix}$。',
      '故第一行第一列元素为 $-\\dfrac{1}{20}$。',
      '验证：$A^{-1}A=I$（可用 Jupyter 的 <code>np.linalg.inv</code> 复核）。'
    ]
  },
  {
    id: 'la-1-05', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1 / Midterm Sample 1(d)',
    prompt: '承上，求正规方程 $A^{T}Ax=A^{T}b$ 的解。填 $x_2$。',
    blanks: [{ label: '$x_2$', answer: { exact: '0' } }],
    solution: [
      '$A^{T}A=\\begin{pmatrix}1&2&3\\\\2&-1&1\\\\-1&3&-2\\end{pmatrix}\\begin{pmatrix}1&2&-1\\\\2&-1&3\\\\3&1&-2\\end{pmatrix}=\\begin{pmatrix}14&3&-1\\\\3&6&-7\\\\-1&-7&14\\end{pmatrix}$。',
      '$A^{T}b=\\begin{pmatrix}1&2&3\\\\2&-1&1\\\\-1&3&-2\\end{pmatrix}\\begin{pmatrix}2\\\\9\\\\7\\end{pmatrix}=\\begin{pmatrix}2+18+21\\\\4-9+7\\\\-2+27-14\\end{pmatrix}=\\begin{pmatrix}41\\\\2\\\\11\\end{pmatrix}$。',
      '因 $A$ 可逆，$A^{T}A$ 也可逆，解 $A^{T}Ax=A^{T}b\\iff Ax=b$（两边左乘 $(A^{T})^{-1}$ 得 $Ax=b$）。',
      '故解与 $Ax=b$ 相同：$x=(3,0,1)^{T}$，即 $x_2=0$。',
      '（这个观察很重要：当 $A$ 方阵且可逆时，最小二乘解就是精确解。）'
    ]
  },
  {
    id: 'la-1-06', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 4, examRef: 'Topic 1 / Midterm Sample 1(a)',
    prompt: '设 $A=\\begin{pmatrix}1&2&a\\\\2&a&1\\\\a&1&2\\end{pmatrix}$。求使 $\\det A=0$ 的 $a$ 中，绝对值较小的那个 $a$。',
    blanks: [{ label: '$a$', answer: { exact: '-3', alts: ['-3.0'] } }],
    solution: [
      '$\\det A=1(a\\cdot2-1\\cdot1)-2(2\\cdot2-1\\cdot a)+a(2\\cdot1-a\\cdot a)$',
      '$=(2a-1)-2(4-a)+a(2-a^{2})=2a-1-8+2a+2a-a^{3}$',
      '$=-a^{3}+6a-9$。',
      '令 $-a^{3}+6a-9=0$，即 $a^{3}-6a+9=0$。试 $a=-3$：$(-27)+18+9=0$ ✔',
      '因式分解：$a^{3}-6a+9=(a+3)(a^{2}-3a+3)$，而 $a^{2}-3a+3$ 的判别式 $9-12<0$ 无实根。',
      '故唯一实根 $a=-3$（模长较小者即它）。'
    ]
  },
  {
    id: 'la-1-07', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1',
    prompt: '求 $\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}$ 的秩。',
    blanks: [{ label: '秩', answer: { exact: '2' } }],
    solution: [
      '第三行 $=2\\times$ 第二行 $-$ 第一行：$(7,8,9)=2(4,5,6)-(1,2,3)$，故三行线性相关。',
      '而前两行不成比例（$1/4\\ne2/5$），故秩为 $2$。',
      '（也等于：$\\det=0$ 但存在 $2\\times2$ 非零子式。）'
    ]
  },
  {
    id: 'la-1-08', topic: 'system', topicName: '线性方程组 / 高斯消元',
    weight: 2, difficulty: 3, examRef: 'Topic 1',
    prompt: '承上，该 $3\\times3$ 矩阵 $A$ 的零空间（null space）维数 $\\operatorname{nullity}(A)$ 是多少？',
    blanks: [{ label: '零空间维数', answer: { exact: '1' } }],
    solution: [
      '秩–零化度定理（Rank–Nullity Theorem）：$\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$（$n$ 为列数）。',
      '此处 $\\operatorname{rank}(A)=2$，$n=3$，故 $\\operatorname{nullity}(A)=3-2=1$。',
      '零空间基为 $(1,-2,1)^{T}$（验证：$A(1,-2,1)^{T}=0$）。'
    ]
  }
  );

  /* ==================== 2. 行列式 ==================== */
  Q.push(
  {
    id: 'la-2-01', topic: 'determinant', topicName: '行列式',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '求 $\\begin{vmatrix}2&-1&3\\\\0&4&-2\\\\1&5&0\\end{vmatrix}$。',
    blanks: [{ label: '行列式值', answer: { exact: '10' } }],
    solution: [
      '按第一行展开（第一行元素 $2,-1,3$）：',
      '$=2\\begin{vmatrix}4&-2\\\\5&0\\end{vmatrix}-(-1)\\begin{vmatrix}0&-2\\\\1&0\\end{vmatrix}+3\\begin{vmatrix}0&4\\\\1&5\\end{vmatrix}$',
      '$=2(0+10)+1(0+2)+3(0-4)=20+2-12=10$。'
    ]
  },
  {
    id: 'la-2-02', topic: 'determinant', topicName: '行列式',
    weight: 1, difficulty: 2, examRef: 'Topic 2',
    prompt: '求 $\\begin{pmatrix}3&1&2\\\\0&-2&5\\\\0&0&4\\end{pmatrix}$ 的行列式。',
    blanks: [{ label: '行列式值', answer: { exact: '-24' } }],
    solution: [
      '该矩阵是行阶梯形（第 (1,3)、(2,3) 元非零，故既非上三角也非下三角），其行列式等于对角元之积。',
      '$3\\times(-2)\\times4=-24$。'
    ]
  },
  {
    id: 'la-2-03', topic: 'determinant', topicName: '行列式',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '求范德蒙德行列式 $\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&4&9\\end{vmatrix}$。',
    blanks: [{ label: '行列式值', answer: { exact: '2' } }],
    solution: [
      '这是以 $x_1=1,x_2=2,x_3=3$ 为节点的范德蒙德行列式，公式为 $\\displaystyle\\prod_{i<j}(x_j-x_i)$。',
      '$=(2-1)(3-1)(3-2)=1\\cdot2\\cdot1=2$。',
      '（也可直接展开验证。）'
    ]
  },
  {
    id: 'la-2-04', topic: 'determinant', topicName: '行列式',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '设 $A$ 是 $4\\times4$ 矩阵且 $\\det A=3$。求 $\\det(2A)$。',
    blanks: [{ label: '$\\det(2A)$', answer: { exact: '48' } }],
    solution: [
      '性质：对 $n\\times n$ 矩阵，$\\det(cA)=c^{n}\\det A$。',
      '此处 $n=4,\\ c=2$：$\\det(2A)=2^{4}\\cdot3=16\\cdot3=48$。',
      '（注意不是 $2\\times3=6$。初学者常犯此错。）'
    ]
  },
  {
    id: 'la-2-05', topic: 'determinant', topicName: '行列式',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '设 $A,B$ 都是 $3\\times3$ 矩阵，$\\det A=2$，$\\det B=-5$。求 $\\det(AB^{T})$。',
    blanks: [{ label: '$\\det(AB^T)$', answer: { exact: '-10' } }],
    solution: [
      '性质：$\\det(AB)=\\det A\\cdot\\det B$；$\\det(B^{T})=\\det B$。',
      '$\\det(AB^{T})=\\det A\\cdot\\det B^{T}=2\\cdot(-5)=-10$。'
    ]
  },
  {
    id: 'la-2-06', topic: 'determinant', topicName: '行列式',
    weight: 2, difficulty: 4, examRef: 'Topic 2 / 2024 卷 1(c)',
    prompt: '设 $A$ 是 $4\\times4$ 矩阵且 $A^{T}A=I_4$。求 $|\\det A|$。',
    blanks: [{ label: '$|\\det A|$', answer: { exact: '1' } }],
    solution: [
      '对 $A^{T}A=I_4$ 两边取行列式：$\\det(A^{T}A)=\\det I_4=1$。',
      '$\\det(A^{T})\\det(A)=(\\det A)^{2}=1$。',
      '故 $\\det A=\\pm1$，即 $|\\det A|=1$。',
      '（这类矩阵称为<b>正交矩阵</b>。若同时 $\\det A=1$ 称旋转，$\\det A=-1$ 称反射。）'
    ]
  }
  );

  /* ==================== 3. 向量空间 / 子空间 / 线性相关 ==================== */
  Q.push(
  {
    id: 'la-3-01', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 3, examRef: 'Topic 3 / 2024 卷 1(d)',
    prompt: '判断 $S=\\{A\\in\\mathbb{R}^{3\\times3}:\\det A=0\\}$ 是否为 $\\mathbb{R}^{3\\times3}$ 的子空间？（填 是 或 否）',
    blanks: [{ label: '是否子空间', answer: { exact: '否', alts: ['no', 'false', '不是'] } }],
    solution: [
      '子空间需对加法与数乘封闭，且含零元。',
      '<b>零元含：</b>$\\det O=0$ ✔',
      '<b>数乘封闭：</b>$\\det(cA)=c^{3}\\det A=0$ ✔',
      '<b>加法不封闭：</b>取 $A=\\operatorname{diag}(1,0,0)$（$\\det A=0$）、$B=\\operatorname{diag}(0,1,0)$（$\\det B=0$），',
      '但 $A+B=\\operatorname{diag}(1,1,0)$ 的 $\\det=0$ —— 这个例子恰好也是 0，需要换一个：',
      '取 $A=\\operatorname{diag}(1,0,0)$，$B=\\operatorname{diag}(0,0,1)$，则 $A+B=\\operatorname{diag}(1,0,1)$，$\\det=0$。',
      '更稳妥的反例：取 $A=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{pmatrix}$（$\\det=0$），$B=\\begin{pmatrix}0&0&0\\\\0&0&0\\\\0&0&1\\end{pmatrix}$（$\\det=0$），',
      '$A+B=I_3$，$\\det I_3=1\\ne0$。故加法不封闭。',
      '所以 $S$ <b>不是</b>子空间。（行列式不是线性函数，这是根本原因。）'
    ]
  },
  {
    id: 'la-3-02', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 3, examRef: 'Topic 3',
    prompt: '判断：向量 $v_1=(1,2,3)$，$v_2=(2,4,6)$ 是否线性相关？（填 是 或 否）',
    blanks: [{ label: '是否线性相关', answer: { exact: '是', alts: ['yes', 'true', 'dependent'] } }],
    solution: [
      '$v_2=2v_1$，即 $2v_1-v_2=0$ 是一个非平凡线性组合等于零向量。',
      '故两向量<b>线性相关</b>。',
      '（判定：两向量线性相关 $\\iff$ 一个是另一个的标量倍。）'
    ]
  },
  {
    id: 'la-3-03', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 4, examRef: 'Topic 3',
    prompt: '判断 $\\{(1,1,0),(0,1,1),(1,0,1)\\}$ 是否张成 $\\mathbb{R}^{3}$？（填 是 或 否）',
    blanks: [{ label: '是否张成 $R^3$', answer: { exact: '是', alts: ['yes', 'true'] } }],
    solution: [
      '把三向量作为列构成矩阵 $S=\\begin{pmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{pmatrix}$。',
      '$\\det S=1(1\\cdot1-0\\cdot1)-0+1(1\\cdot1-1\\cdot0)=1+1=2\\ne0$。',
      '行列式非零 $\\Rightarrow$ 三列线性无关 $\\Rightarrow$ 是 $\\mathbb{R}^{3}$ 的一组基，当然张成 $\\mathbb{R}^{3}$。',
      '故填「是」。'
    ]
  },
  {
    id: 'la-3-04', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 4, examRef: 'Topic 3 / 2024 卷 1(b)',
    prompt: '设 $v_1,v_2,v_3$ 线性无关。判断 $\\{v_1+v_2+v_3,\\ v_1+2v_2+3v_3,\\ 3v_1+2v_2+v_3\\}$ 是否线性无关？（填 是 或 否）',
    blanks: [{ label: '是否线性无关', answer: { exact: '否', alts: ['no', 'false', '相关'] } }],
    solution: [
      '设 $c_1(v_1+v_2+v_3)+c_2(v_1+2v_2+3v_3)+c_3(3v_1+2v_2+v_3)=0$。',
      '按 $v_1,v_2,v_3$ 整理（它们线性无关，故各系数必须为零）：',
      '$v_1$：$c_1+c_2+3c_3=0$',
      '$v_2$：$c_1+2c_2+2c_3=0$',
      '$v_3$：$c_1+3c_2+c_3=0$',
      '系数矩阵 $\\begin{pmatrix}1&1&3\\\\1&2&2\\\\1&3&1\\end{pmatrix}$，其行列式：',
      '$1(2-6)-1(1-2)+3(3-2)=-4+1+3=0$。',
      '行列式为零 $\\Rightarrow$ 存在非平凡解。取 $(c_1,c_2,c_3)=(-4,1,1)$ 验证：',
      '$v_1$ 式 $-4+1+3=0$ ✔，$v_2$ 式 $-4+2+2=0$ ✔，$v_3$ 式 $-4+3+1=0$ ✔。',
      '故 $-4(v_1+v_2+v_3)+(v_1+2v_2+3v_3)+(3v_1+2v_2+v_3)=0$ 是非平凡关系，三向量<b>线性相关</b>，填「否」。'
    ]
  },
  {
    id: 'la-3-05', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 4, examRef: 'Topic 3 / 2023 卷 1(a)',
    prompt: '判断：$2\\times2$ 上三角矩阵的集合 $S=\\left\\{\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}:a,b,c\\in\\mathbb{R}\\right\\}$ 是否为 $\\mathbb{R}^{2\\times2}$ 的子空间？（填 是 或 否）',
    blanks: [{ label: '是否子空间', answer: { exact: '是', alts: ['yes', 'true'] } }],
    solution: [
      '<b>零元：</b>$\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$ 是上三角 ✔',
      '<b>加法封闭：</b>$\\begin{pmatrix}a_1&b_1\\\\0&c_1\\end{pmatrix}+\\begin{pmatrix}a_2&b_2\\\\0&c_2\\end{pmatrix}=\\begin{pmatrix}a_1+a_2&b_1+b_2\\\\0&c_1+c_2\\end{pmatrix}$ 仍上三角 ✔',
      '<b>数乘封闭：</b>$k\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}=\\begin{pmatrix}ka&kb\\\\0&kc\\end{pmatrix}$ 仍上三角 ✔',
      '三条都满足，故 $S$ <b>是</b>子空间。',
      '（甚至可看出 $\\dim S=3$，一组基为 $\\left\\{\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\right\\}$。）'
    ]
  },
  {
    id: 'la-3-06', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 3, examRef: 'Topic 3',
    prompt: '设 $H=\\{(x,y,z):x+2y-3z=0\\}$。求 $\\dim H$。',
    blanks: [{ label: '$\\dim H$', answer: { exact: '2' } }],
    solution: [
      '$H$ 是齐次方程 $x+2y-3z=0$ 的解集，是 $\\mathbb{R}^{3}$ 中过原点的<b>平面</b>，故是子空间。',
      '该方程只有 1 个独立约束，系数矩阵 $(1,2,-3)$ 的秩为 1。',
      '由秩–零化度：$\\dim H=3-1=2$。',
      '一组基：$y,z$ 自由，取 $(y,z)=(1,0)\\Rightarrow x=-2$，得 $(-2,1,0)$；取 $(0,1)\\Rightarrow x=3$，得 $(3,0,1)$。'
    ]
  },
  {
    id: 'la-3-07', topic: 'space', topicName: '向量空间 / 子空间 / 线性相关',
    weight: 2, difficulty: 3, examRef: 'Topic 3',
    prompt: '把 $(1,2,3)$ 表示为 $(1,1,0),(0,1,1),(1,0,1)$ 的线性组合 $a(1,1,0)+b(0,1,1)+c(1,0,1)$，求 $a$。',
    blanks: [{ label: '$a$', answer: { exact: '0' } }],
    solution: [
      '按分量列出方程组：',
      '$x$：$a+c=1$',
      '$y$：$a+b=2$',
      '$z$：$b+c=3$',
      '三式相加：$2(a+b+c)=6\\Rightarrow a+b+c=3$。',
      '用此式减第三式得 $a=0$；减第二式得 $c=1$；减第一式得 $b=2$。',
      '验证：$0(1,1,0)+2(0,1,1)+1(1,0,1)=(0,0,0)+(0,2,2)+(1,0,1)=(1,2,3)$ ✔',
      '故 $a=0$（$(a,b,c)=(0,2,1)$）。'
    ]
  }
  );

  /* ==================== 4. 矩阵运算 / 逆 / 转置 ==================== */
  Q.push(
  {
    id: 'la-4-01', topic: 'matrix', topicName: '矩阵运算 / 逆 / 秩',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '求 $\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}^{-1}$ 的 $(1,1)$ 元素。',
    blanks: [{ label: '$(1,1)$ 元素', answer: { exact: '3', alts: ['3.0'] } }],
    solution: [
      '二阶矩阵求逆公式：$\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$。',
      '$\\det=2\\cdot3-1\\cdot5=1$。',
      '$\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}^{-1}=\\dfrac{1}{1}\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}=\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}$。',
      '故 $(1,1)$ 元素为 $3$。'
    ]
  },
  {
    id: 'la-4-02', topic: 'matrix', topicName: '矩阵运算 / 逆 / 秩',
    weight: 2, difficulty: 3, examRef: 'Topic 1',
    prompt: '判断 $\\begin{pmatrix}1&0&1\\\\0&1&1\\\\1&1&2\\end{pmatrix}$ 是否可逆？（填 可逆 或 不可逆）',
    blanks: [{ label: '是否可逆', answer: { exact: '不可逆', alts: ['no', 'false', 'singular', '奇异'] } }],
    solution: [
      '第三行 $=$ 第一行 $+$ 第二行：$(1,1,2)=(1,0,1)+(0,1,1)$，故三行线性相关。',
      '于是 $\\det=0$，矩阵<b>不可逆</b>（奇异）。',
      '（也可直接算：$1(2-1)-0+1(0-1)=1-1=0$。）'
    ]
  },
  {
    id: 'la-4-03', topic: 'matrix', topicName: '矩阵运算 / 逆 / 秩',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '设 $A$ 是 $3\\times3$ 可逆矩阵。化简 $(A^{T})^{-1}A^{T}$。',
    blanks: [{ label: '化简结果', answer: { exact: 'I', alts: ['I_3', 'identity', '单位矩阵'] } }],
    solution: [
      '设 $B=(A^{T})^{-1}$，则 $B$ 是 $A^{T}$ 的逆。',
      '按定义 $B\\cdot A^{T}=I$。',
      '故 $(A^{T})^{-1}A^{T}=I$。',
      '（常用恒等式：$(A^{T})^{-1}=(A^{-1})^{T}$、$(AB)^{-1}=B^{-1}A^{-1}$。）'
    ]
  },
  {
    id: 'la-4-04', topic: 'matrix', topicName: '矩阵运算 / 逆 / 秩',
    weight: 3, difficulty: 4, examRef: '2024 卷 2 / 2025 卷',
    prompt: '设 $u_1,u_2,u_3$ 是 $\\mathbb{R}^{3}$ 中两两正交的单位向量，$A=u_1u_1^{T}+u_2u_2^{T}+u_3u_3^{T}$。求 $A$ 的 $(1,1)$ 元素。',
    blanks: [{ label: '$A_{11}$', answer: { exact: '1' } }],
    solution: [
      '记 $u_i=(u_{i1},u_{i2},u_{i3})^{T}$。$u_iu_i^{T}$ 的 $(1,1)$ 元素是 $u_{i1}^{2}$。',
      '故 $A_{11}=u_{11}^{2}+u_{21}^{2}+u_{31}^{2}$。',
      '把 $\\{u_1,u_2,u_3\\}$ 作为列拼成矩阵 $Q$，则 $Q$ 是正交矩阵（$Q^{T}Q=I$），且 $A=QQ^{T}=I$。',
      '所以 $A=I_3$，$A_{11}=1$。',
      '<b>更一般的论证：</b>$\\{u_i\\}$ 是 $\\mathbb{R}^{3}$ 的标准正交基，',
      '$A=QQ^{T}$ 是到整个 $\\mathbb{R}^{3}$ 的正交投影，故 $A=I$，其 $(1,1)$ 元素为 1。',
      '（若只取 $k$ 个正交单位向量，则 $A$ 是到 $k$ 维子空间的投影，$A^{2}=A$、$\\operatorname{rank}A=k$、$\\operatorname{tr}A=k$。）'
    ]
  },
  {
    id: 'la-4-05', topic: 'matrix', topicName: '矩阵运算 / 逆 / 秩',
    weight: 2, difficulty: 3, examRef: 'Topic 2',
    prompt: '设 $A$ 是 $n\\times n$ 矩阵且 $A^{2}=A$（幂等/idempotent）。求 $A$ 的特征值只能是哪些数？（从小到大，用逗号分隔）',
    blanks: [{ label: '特征值', answer: { exact: '0,1', alts: ['0 1', '0和1'], setLike: true } }],
    solution: [
      '设 $\\lambda$ 是 $A$ 的特征值，$v\\ne0$ 是对应特征向量：$Av=\\lambda v$。',
      '两边左乘 $A$：$A^{2}v=\\lambda Av=\\lambda^{2}v$。',
      '又 $A^{2}=A$，故 $Av=A^{2}v$，即 $\\lambda v=\\lambda^{2}v$。',
      '因 $v\\ne0$，得 $\\lambda=\\lambda^{2}$，即 $\\lambda(\\lambda-1)=0$。',
      '所以 $\\lambda\\in\\{0,1\\}$。',
      '（投影矩阵都是幂等的，其特征值只有 0 与 1 —— 这正是上面 $A=QQ^{T}$ 的情形。）'
    ]
  },
  {
    id: 'la-4-06', topic: 'matrix', topicName: '矩阵运算 / 逆 / 秩',
    weight: 2, difficulty: 4, examRef: 'Topic 4',
    prompt: '设 $n\\times n$ 矩阵 $A$ 满足 $A^{2}=A$ 且 $A\\ne O,A\\ne I$。求 $\\operatorname{rank}(A)+\\operatorname{rank}(I-A)$。',
    blanks: [{ label: '秩之和', answer: { exact: 'n', alts: ['n'], vars: [] } }],
    solution: [
      '$A$ 是到 $\\operatorname{Col}(A)$ 的投影，$I-A$ 是到 $\\operatorname{Nul}(A)$ 的投影（因为 $A(I-A)=A-A^{2}=O$）。',
      '$\\operatorname{Col}(A)=\\operatorname{Nul}(I-A)$，$\\operatorname{Nul}(A)=\\operatorname{Col}(I-A)$，且两者是互补子空间。',
      '故 $\\operatorname{Col}(A)\\oplus\\operatorname{Nul}(A)=\\mathbb{R}^{n}$，',
      '$\\operatorname{rank}(A)+\\operatorname{rank}(I-A)=\\operatorname{rank}(A)+\\operatorname{nullity}(A)=n$。',
      '（例：$A=\\operatorname{diag}(1,1,0)$ 时 $\\operatorname{rank}A=2$，$\\operatorname{rank}(I-A)=1$，和 $=3=n$。）'
    ]
  }
  );

  /* ==================== 5. 线性变换 ==================== */
  Q.push(
  {
    id: 'la-5-01', topic: 'trans', topicName: '线性变换 / 标准矩阵',
    weight: 2, difficulty: 3, examRef: 'Topic 4',
    prompt: '设 $T:\\mathbb{R}^{2}\\to\\mathbb{R}^{3}$ 由 $T(x)=Ax$ 给出，$A=\\begin{pmatrix}1&-1\\\\2&0\\\\0&3\\end{pmatrix}$。求 $T(1,2)$ 的第二个分量。',
    blanks: [{ label: '第二分量', answer: { exact: '2' } }],
    solution: [
      '$T(1,2)=A\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}1\\cdot1+(-1)\\cdot2\\\\2\\cdot1+0\\cdot2\\\\0\\cdot1+3\\cdot2\\end{pmatrix}=\\begin{pmatrix}-1\\\\2\\\\6\\end{pmatrix}$。',
      '故第二个分量为 $2$。'
    ]
  },
  {
    id: 'la-5-02', topic: 'trans', topicName: '线性变换 / 标准矩阵',
    weight: 2, difficulty: 3, examRef: 'Topic 4',
    prompt: '求把 $\\mathbb{R}^{2}$ 中向量逆时针旋转 $90^{\\circ}$ 的线性变换的标准矩阵的 $(1,2)$ 元素。',
    blanks: [{ label: '$(1,2)$ 元素', answer: { exact: '-1' } }],
    solution: [
      '旋转 $\\theta$ 角的标准矩阵为 $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\ \\sin\\theta&\\cos\\theta\\end{pmatrix}$。',
      '$\\theta=90^{\\circ}$ 时：$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$。',
      '故 $(1,2)$ 元素为 $-1$。',
      '验证：$(1,0)\\mapsto(0,1)$、$(0,1)\\mapsto(-1,0)$ ✔',
      '（这个矩阵满足 $R^{2}=-I$，故 $R^{4}=I$，与「转四次回到原处」一致。）'
    ]
  },
  {
    id: 'la-5-03', topic: 'trans', topicName: '线性变换 / 标准矩阵',
    weight: 2, difficulty: 3, examRef: 'Topic 4 / 2024 卷 1(e)',
    prompt: '设 $\\mathcal{B}=\\{b_1,b_2,b_3\\}$ 是 $V$ 的基，$T$ 是线性变换且 $T(b_1)=2b_2,\\ T(b_2)=3b_3,\\ T(b_3)=4b_1$。求 $T$ 关于 $\\mathcal{B}$ 的矩阵（即 $[T]_{\\mathcal{B}}$）的迹（trace）。',
    blanks: [{ label: '迹', answer: { exact: '0' } }],
    solution: [
      '$[T]_{\\mathcal{B}}$ 的第 $j$ 列是 $T(b_j)$ 在 $\\mathcal{B}$ 下的坐标。',
      '$T(b_1)=2b_2\\Rightarrow$ 第 1 列 $(0,2,0)^{T}$；',
      '$T(b_2)=3b_3\\Rightarrow$ 第 2 列 $(0,0,3)^{T}$；',
      '$T(b_3)=4b_1\\Rightarrow$ 第 3 列 $(4,0,0)^{T}$。',
      '故 $[T]_{\\mathcal{B}}=\\begin{pmatrix}0&0&4\\\\2&0&0\\\\0&3&0\\end{pmatrix}$。',
      '迹 $=$ 对角元之和 $=0+0+0=0$。',
      '（注意：换成 $\\mathcal{B}\\to\\mathcal{C}$ 的矩阵只是列顺序不同，迹同样是 0。',
      '这个矩阵其实是「循环移位+缩放」，其特征值为 $\\sqrt[3]{24}$ 的三个值，和为 0，与迹为 0 一致。）'
    ]
  },
  {
    id: 'la-5-04', topic: 'trans', topicName: '线性变换 / 标准矩阵',
    weight: 2, difficulty: 4, examRef: 'Topic 4',
    prompt: '设 $T:\\mathbb{R}^{2}\\to\\mathbb{R}^{3}$ 的标准矩阵 $A=\\begin{pmatrix}1&-1\\\\2&0\\\\0&3\\end{pmatrix}$。求 $\\dim(\\ker T)$。',
    blanks: [{ label: '$\\dim(\\ker T)$', answer: { exact: '0' } }],
    solution: [
      '$\\ker T=\\operatorname{Nul}(A)$。$A$ 的两列 $(1,2,0)^{T}$ 与 $(-1,0,3)^{T}$ 不成比例，故线性无关。',
      '于是 $\\operatorname{rank}(A)=2$。',
      '秩–零化度定理：$\\operatorname{rank}(A)+\\dim(\\ker T)=n=2$。',
      '故 $\\dim(\\ker T)=2-2=0$，即 $T$ 是单射（一一映射）。',
      '（推广：线性变换单射 $\\iff\\ker T=\\{0\\}\\iff$ 标准矩阵的列线性无关。）'
    ]
  }
  );

  /* ==================== 6. 基变换 / 坐标 ==================== */
  Q.push(
  {
    id: 'la-6-01', topic: 'basis', topicName: '基变换 / 坐标 / 维数',
    weight: 2, difficulty: 3, examRef: 'Topic 3 / 2023 卷 1(c)(e)',
    prompt: '设 $\\mathcal{B}=\\left\\{\\begin{pmatrix}2\\\\1\\end{pmatrix},\\begin{pmatrix}1\\\\1\\end{pmatrix}\\right\\}$ 是 $\\mathbb{R}^{2}$ 的基。求 $x=(3,5)$ 在 $\\mathcal{B}$ 下的坐标 $[x]_{\\mathcal{B}}=(c_1,c_2)$ 中的 $c_1$。',
    blanks: [{ label: '$c_1$', answer: { exact: '-2' } }],
    solution: [
      '设 $x=c_1\\begin{pmatrix}2\\\\1\\end{pmatrix}+c_2\\begin{pmatrix}1\\\\1\\end{pmatrix}$，即解 $P_{\\mathcal{B}}[x]_{\\mathcal{B}}=x$。',
      '$P_{\\mathcal{B}}=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$，$\\det=2-1=1$，',
      '$P_{\\mathcal{B}}^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$。',
      '$[x]_{\\mathcal{B}}=P_{\\mathcal{B}}^{-1}\\begin{pmatrix}3\\\\5\\end{pmatrix}=\\begin{pmatrix}3-5\\\\-3+10\\end{pmatrix}=\\begin{pmatrix}-2\\\\7\\end{pmatrix}$。',
      '故 $c_1=-2$（$c_2=7$）。',
      '验证：$-2(2,1)+7(1,1)=(-4,-2)+(7,7)=(3,5)$ ✔'
    ]
  },
  {
    id: 'la-6-02', topic: 'basis', topicName: '基变换 / 坐标 / 维数',
    weight: 2, difficulty: 3, examRef: 'Topic 3',
    prompt: '承上，求 $\\mathcal{B}$ 到标准基 $\\mathcal{E}$ 的过渡矩阵 $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$ 的 $(2,2)$ 元素。',
    blanks: [{ label: '$(2,2)$ 元素', answer: { exact: '1' } }],
    solution: [
      '$P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$ 的各列就是 $\\mathcal{B}$ 的基向量（在标准基下的坐标）。',
      '$P_{\\mathcal{E}\\leftarrow\\mathcal{B}}=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$。',
      '故 $(2,2)$ 元素为 $1$。',
      '关系：$[x]_{\\mathcal{E}}=P_{\\mathcal{E}\\leftarrow\\mathcal{B}}[x]_{\\mathcal{B}}$，即 $x=P_{\\mathcal{E}\\leftarrow\\mathcal{B}}[x]_{\\mathcal{B}}$。'
    ]
  },
  {
    id: 'la-6-03', topic: 'basis', topicName: '基变换 / 坐标 / 维数',
    weight: 2, difficulty: 4, examRef: 'Topic 3 / 2023 卷 2',
    prompt: '设 $\\mathcal{E}=\\{1,x,x^{2},x^{3}\\}$ 是 $\\mathbb{P}_{3}$ 的基，$\\mathcal{B}=\\{p_1,p_2,p_3,p_4\\}$，其中 $p_1=-x^{3}-3x^{2}+x-1$。求 $p_1$ 在 $\\mathcal{E}$ 下的坐标向量的第 3 个分量（对应 $x^{2}$）。',
    blanks: [{ label: '第 3 分量', answer: { exact: '-3' } }],
    solution: [
      '$\\mathbb{P}_{3}$ 中多项式按基 $\\mathcal{E}=\\{1,x,x^{2},x^{3}\\}$ 的坐标就是其系数向量。',
      '$p_1=-x^{3}-3x^{2}+x-1=(-1)\\cdot1+(1)\\cdot x+(-3)\\cdot x^{2}+(-1)\\cdot x^{3}$。',
      '故 $[p_1]_{\\mathcal{E}}=(-1,1,-3,-1)^{T}$，第 3 个分量（$x^{2}$ 的系数）为 $-3$。',
      '（把 $\\mathcal{B}$ 的四个坐标向量作为列拼起来就得到过渡矩阵 $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$，其行列式为 $-1\\ne0$，确实证明 $\\mathcal{B}$ 是基。）'
    ]
  },
  {
    id: 'la-6-04', topic: 'basis', topicName: '基变换 / 坐标 / 维数',
    weight: 2, difficulty: 3, examRef: 'Topic 3',
    prompt: '求 $\\mathbb{P}_{3}$（次数不超过 3 的多项式）的维数。',
    blanks: [{ label: '维数', answer: { exact: '4' } }],
    solution: [
      '$\\mathbb{P}_{n}$ 表示次数 $\\le n$ 的多项式，其自然基为 $\\{1,x,x^{2},\\dots,x^{n}\\}$，共 $n+1$ 个。',
      '故 $\\dim\\mathbb{P}_{n}=n+1$。取 $n=3$ 得 $\\dim\\mathbb{P}_{3}=4$。',
      '（常见混淆：$\\mathbb{P}_{3}$ 是 4 维不是 3 维。）'
    ]
  }
  );

  /* ==================== 7. 特征值 / 特征向量 / 对角化 ==================== */
  Q.push(
  {
    id: 'la-7-01', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 2, difficulty: 3, examRef: 'Topic 5',
    prompt: '求 $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$ 的两个特征值（从小到大，逗号分隔）。',
    blanks: [{ label: '特征值', answer: { exact: '2,5', alts: ['2 5', '2和5'], setLike: true } }],
    solution: [
      '特征方程 $\\det(A-\\lambda I)=0$：',
      '$\\begin{vmatrix}4-\\lambda&1\\\\2&3-\\lambda\\end{vmatrix}=(4-\\lambda)(3-\\lambda)-2=\\lambda^{2}-7\\lambda+12-2=\\lambda^{2}-7\\lambda+10=0$。',
      '因式分解：$(\\lambda-2)(\\lambda-5)=0$，故 $\\lambda=2,5$。',
      '校验：$\\operatorname{tr}A=4+3=7=2+5$ ✔，$\\det A=12-2=10=2\\times5$ ✔'
    ]
  },
  {
    id: 'la-7-02', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 2, difficulty: 3, examRef: 'Topic 5',
    prompt: '承上，求 $\\lambda=5$ 对应的一个特征向量的第二个分量（取第一个分量为 1）。',
    blanks: [{ label: '第二分量', answer: { exact: '1' } }],
    solution: [
      '解 $(A-5I)v=0$：$A-5I=\\begin{pmatrix}-1&1\\\\2&-2\\end{pmatrix}$。',
      '方程 $-v_1+v_2=0\\Rightarrow v_1=v_2$。',
      '取 $v_1=1$ 得 $v=(1,1)^{T}$，第二个分量为 $1$。',
      '（$\\lambda=2$ 时：$A-2I=\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}$，$2v_1+v_2=0$，取 $v=(1,-2)^{T}$。）'
    ]
  },
  {
    id: 'la-7-03', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 3, difficulty: 4, examRef: 'Topic 5',
    prompt: '判断 $A=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$ 是否可对角化？（填 可 或 不可）',
    blanks: [{ label: '是否可对角化', answer: { exact: '不可', alts: ['no', 'false', 'not diagonalizable'] } }],
    solution: [
      '特征方程：$(2-\\lambda)^{2}=0$，故 $\\lambda=2$ 是<b>代数重数 2</b> 的特征值。',
      '求特征空间：$A-2I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$，方程 $v_2=0$，',
      '故特征空间为 $\\operatorname{span}\\{(1,0)^{T}\\}$，<b>几何重数 1</b>。',
      '几何重数 $1<$ 代数重数 $2$，$A$ 缺少足够的线性无关特征向量，',
      '所以 $A$ <b>不可</b>对角化。',
      '（判定准则：$A$ 可对角化 $\\iff$ 每个特征值的几何重数 $=$ 代数重数 $\\iff$ 有 $n$ 个线性无关的特征向量。）'
    ]
  },
  {
    id: 'la-7-04', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 2, difficulty: 3, examRef: 'Topic 5',
    prompt: '求下三角矩阵 $\\begin{pmatrix}2&0&0\\\\1&3&0\\\\4&5&6\\end{pmatrix}$ 的特征值之积。',
    blanks: [{ label: '特征值之积', answer: { exact: '36' } }],
    solution: [
      '下三角矩阵的特征值就是其<b>对角元</b>：$\\lambda=2,3,6$。',
      '（理由：$\\det(A-\\lambda I)$ 仍是三角矩阵，其行列式为 $(2-\\lambda)(3-\\lambda)(6-\\lambda)$。）',
      '特征值之积 $=2\\times3\\times6=36$。',
      '这也等于 $\\det A=2\\cdot3\\cdot6=36$ ✔（一般地 $\\prod\\lambda_i=\\det A$。）'
    ]
  },
  {
    id: 'la-7-05', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 2, difficulty: 4, examRef: '2024 卷 1(a)',
    prompt: '判断：对任意 $3\\times3$ 矩阵 $A$，$A$ 与 $A^{T}$ 有相同的特征空间集合（eigenspaces）。（填 对 或 错）',
    blanks: [{ label: '对/错', answer: { exact: '错', alts: ['false', 'no', '错误'] } }],
    solution: [
      '<b>错。</b>$A$ 与 $A^{T}$ 有相同的<b>特征值</b>（因为 $\\det(A-\\lambda I)=\\det((A-\\lambda I)^{T})=\\det(A^{T}-\\lambda I)$），',
      '但<b>特征空间一般不同</b>。',
      '反例：$A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$，$A^{T}=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$。',
      '$\\lambda=1$ 时：$A-I=\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}$，特征空间 $\\operatorname{span}\\{(1,0)^{T}\\}$；',
      '$A^{T}-I=\\begin{pmatrix}0&0\\\\1&1\\end{pmatrix}$，特征空间 $\\operatorname{span}\\{(-1,1)^{T}\\}$。',
      '两者不同（虽然维数相同），故命题错。'
    ]
  },
  {
    id: 'la-7-06', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 2, difficulty: 4, examRef: '2024 卷 1(e)',
    prompt: '判断：对任意 $3\\times3$ 矩阵 $A$，$A$ 与 $A+I_3$ 有相同的特征空间集合。（填 对 或 错）',
    blanks: [{ label: '对/错', answer: { exact: '对', alts: ['true', 'yes', '正确'] } }],
    solution: [
      '<b>对。</b>设 $Av=\\lambda v$（$v\\ne0$），则',
      '$(A+I)v=Av+v=\\lambda v+v=(\\lambda+1)v$。',
      '所以 $v$ 是 $A$ 的特征向量（特征值 $\\lambda$）当且仅当它是 $A+I$ 的特征向量（特征值 $\\lambda+1$）。',
      '两者的特征空间逐一对应、完全相同（只是特征值整体平移了 1）。',
      '（同理 $A+cI$ 与 $A$ 特征空间相同；但 $cA$（$c\\ne1$）保持特征空间、特征值变为 $c\\lambda$。）'
    ]
  },
  {
    id: 'la-7-07', topic: 'eigen', topicName: '特征值 / 特征向量 / 对角化',
    weight: 2, difficulty: 3, examRef: 'Topic 5',
    prompt: '设 $A$ 可对角化，$A=PDP^{-1}$，$D=\\operatorname{diag}(2,5)$。求 $A^{3}$ 的特征值之和（即迹）。',
    blanks: [{ label: '迹', answer: { exact: '133' } }],
    solution: [
      '$A^{3}=PD^{3}P^{-1}$，故 $A^{3}$ 的特征值是 $D^{3}$ 的对角元，即 $2^{3}=8$ 与 $5^{3}=125$。',
      '特征值之和 $=$ 迹 $=8+125=133$。',
      '（一般地：若 $\\lambda$ 是 $A$ 的特征值，则 $\\lambda^{k}$ 是 $A^{k}$ 的特征值。）'
    ]
  }
  );

  /* ==================== 8. 内积 / 正交 / 最小二乘 ==================== */
  Q.push(
  {
    id: 'la-8-01', topic: 'ortho', topicName: '内积 / 正交 / Gram-Schmidt / 最小二乘',
    weight: 2, difficulty: 3, examRef: 'Topic 6',
    prompt: '求 $u=(1,1,1)$ 的范数 $\\|u\\|$ 的平方（即 $u\\cdot u$）。',
    blanks: [{ label: '$\\|u\\|^2$', answer: { exact: '3' } }],
    solution: [
      '$u\\cdot u=1^{2}+1^{2}+1^{2}=3$。',
      '故 $\\|u\\|=\\sqrt{3}$，$\\|u\\|^{2}=3$。',
      '$u$ 的单位化向量为 $\\dfrac{u}{\\|u\\|}=\\left(\\dfrac{1}{\\sqrt3},\\dfrac{1}{\\sqrt3},\\dfrac{1}{\\sqrt3}\\right)$。'
    ]
  },
  {
    id: 'la-8-02', topic: 'ortho', topicName: '内积 / 正交 / Gram-Schmidt / 最小二乘',
    weight: 2, difficulty: 3, examRef: 'Topic 6',
    prompt: '判断 $u=(1,1,1)$ 与 $v=(1,0,-1)$ 是否正交？（填 是 或 否）',
    blanks: [{ label: '是否正交', answer: { exact: '是', alts: ['yes', 'true', 'orthogonal'] } }],
    solution: [
      '两向量正交 $\\iff u\\cdot v=0$。',
      '$u\\cdot v=1\\cdot1+1\\cdot0+1\\cdot(-1)=1+0-1=0$。',
      '故它们<b>正交</b>。'
    ]
  },
  {
    id: 'la-8-03', topic: 'ortho', topicName: '内积 / 正交 / Gram-Schmidt / 最小二乘',
    weight: 3, difficulty: 4, examRef: 'Topic 6',
    prompt: '求 $w=(2,1,0)$ 在 $u=(1,1,1)$ 上的投影向量 $\\operatorname{proj}_{u}w$ 的第一个分量。',
    blanks: [{ label: '第一分量', answer: { exact: '1' } }],
    solution: [
      '投影公式：$\\operatorname{proj}_{u}w=\\dfrac{w\\cdot u}{u\\cdot u}u$。',
      '$w\\cdot u=2\\cdot1+1\\cdot1+0\\cdot1=3$；$u\\cdot u=3$。',
      '故 $\\operatorname{proj}_{u}w=\\dfrac{3}{3}(1,1,1)=(1,1,1)$。',
      '第一个分量为 $1$。',
      '（注意这里 $w$ 在 $u$ 方向的分量正好就是 $u$ 本身。）'
    ]
  },
  {
    id: 'la-8-04', topic: 'ortho', topicName: '内积 / 正交 / Gram-Schmidt / 最小二乘',
    weight: 3, difficulty: 4, examRef: 'Topic 6',
    prompt: '对 $(1,1,0),(1,0,1),(0,1,1)$ 做 Gram–Schmidt 正交化，求所得第一个基向量的第一个分量（取未单位化形式 $(2,2,0)$ 的化简 $(1,1,0)$）。',
    blanks: [{ label: '第一分量', answer: { exact: '1' } }],
    solution: [
      'Gram–Schmidt：$v_1$ 直接取第一个向量。',
      '<b>第 1 步：</b>$v_1=(1,1,0)$（未单位化）。',
      '<b>第 2 步：</b>$v_2=(1,0,1)-\\dfrac{(1,0,1)\\cdot(1,1,0)}{(1,1,0)\\cdot(1,1,0)}(1,1,0)=(1,0,1)-\\dfrac12(1,1,0)=\\left(\\dfrac12,-\\dfrac12,1\\right)$。',
      '<b>第 3 步：</b>$v_3=(0,1,1)-\\dfrac{(0,1,1)\\cdot v_1}{v_1\\cdot v_1}v_1-\\dfrac{(0,1,1)\\cdot v_2}{v_2\\cdot v_2}v_2$',
      '$=(0,1,1)-\\dfrac12(1,1,0)-\\dfrac{1/2}{3/2}\\left(\\dfrac12,-\\dfrac12,1\\right)=\\left(-\\dfrac13,\\dfrac13,\\dfrac13\\right)$。',
      '单位化后：$q_1=\\dfrac{1}{\\sqrt2}(1,1,0)$，$q_2=\\dfrac{1}{\\sqrt6}(1,-1,2)$，$q_3=\\dfrac{1}{\\sqrt3}(-1,1,1)$。',
      '所以第一个（未单位化）基向量是 $(1,1,0)$，第一个分量为 $1$。'
    ]
  },
  {
    id: 'la-8-05', topic: 'ortho', topicName: '内积 / 正交 / Gram-Schmidt / 最小二乘',
    weight: 3, difficulty: 4, examRef: 'Topic 7 / 最小二乘',
    prompt: '用最小二乘法拟合直线 $y=mx+c$ 过点 $(1,1),(2,2),(3,2)$。<b>约定设计矩阵的第一列为 $x$、第二列为 $1$</b>，求斜率 $m$。',
    blanks: [{ label: '$m$', answer: { exact: '1/2', alts: ['0.5'], rel: 1e-9 } }],
    solution: [
      '<b>约定：</b>设计矩阵 $A$ 的第 1 列对应 $x$（系数 $m$），第 2 列对应常数项（系数 $c$）。',
      '$A=\\begin{pmatrix}1&1\\\\2&1\\\\3&1\\end{pmatrix}$，$b=\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$，未知量 $\\begin{pmatrix}m\\\\c\\end{pmatrix}$。',
      '正规方程 $A^{T}Ax=A^{T}b$：',
      '$A^{T}A=\\begin{pmatrix}1&2&3\\\\1&1&1\\end{pmatrix}\\begin{pmatrix}1&1\\\\2&1\\\\3&1\\end{pmatrix}=\\begin{pmatrix}14&6\\\\6&3\\end{pmatrix}$，',
      '$A^{T}b=\\begin{pmatrix}1&2&3\\\\1&1&1\\end{pmatrix}\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}=\\begin{pmatrix}1+4+6\\\\1+2+2\\end{pmatrix}=\\begin{pmatrix}11\\\\5\\end{pmatrix}$。',
      '解 $\\begin{cases}14m+6c=11\\\\6m+3c=5\\end{cases}$。',
      '第二式乘 2：$12m+6c=10$；与第一式相减：$2m=1\\Rightarrow m=\\dfrac12$。',
      '回代：$6\\cdot\\dfrac12+3c=5\\Rightarrow3+3c=5\\Rightarrow c=\\dfrac23$。',
      '故 $m=\\dfrac12$，$c=\\dfrac23$，拟合直线 $y=\\dfrac12x+\\dfrac23$。',
      '<b>残差：</b>$e=b-Ax=\\begin{pmatrix}1-\\frac76\\\\2-\\frac{11}{6}\\\\2-\\frac{13}{6}\\end{pmatrix}=\\begin{pmatrix}-\\frac16\\\\\\frac16\\\\-\\frac16\\end{pmatrix}$，$\\|e\\|^{2}=\\dfrac{3}{36}=\\dfrac{1}{12}$。',
      '<b>易错点：</b>若把设计矩阵的列顺序换成（$1$ 在前、$x$ 在后），解会变成 $(c,m)=\\left(\\dfrac23,\\dfrac12\\right)$，',
      '也就是 $m=\\dfrac23$。两种约定对应同一条拟合直线，但 $m,c$ 的取值互换 —— 做题时必须看清列约定。'
    ]
  },
  {
    id: 'la-8-06', topic: 'ortho', topicName: '内积 / 正交 / Gram-Schmidt / 最小二乘',
    weight: 2, difficulty: 3, examRef: 'Topic 7 / 最小二乘',
    prompt: '承上（同一约定：第一列为 $x$），求拟合直线的截距 $c$。',
    blanks: [{ label: '$c$', answer: { exact: '2/3', alts: ['0.6666666667'], rel: 1e-6 } }],
    solution: [
      '由上一题的正规方程解得 $m=\\dfrac12$，回代 $6m+3c=5$：',
      '$6\\cdot\\dfrac12+3c=5\\Rightarrow3+3c=5\\Rightarrow c=\\dfrac23$。',
      '故截距 $c=\\dfrac23\\approx0.6667$。',
      '<b>校验（正规方程第一式）：</b>$14m+6c=14\\cdot\\dfrac12+6\\cdot\\dfrac23=7+4=11=A^{T}b$ 的第一个分量 ✔',
      '<b>另一层校验：</b>残差之和必为 0（因为设计矩阵含全 1 列，等价于「拟合直线过数据点的重心」），',
      '重心为 $\\left(2,\\dfrac53\\right)$，而 $\\dfrac12\\cdot2+\\dfrac23=1+\\dfrac23=\\dfrac53$ ✔'
    ]
  },
  /* ==================== 9. 对称矩阵 / 二次型 / 正定 ==================== */
  {
    id: 'la-9-01', topic: 'symm', topicName: '对称矩阵 / 二次型 / 正定',
    weight: 2, difficulty: 3, examRef: 'Topic 7',
    prompt: '求对称矩阵 $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ 的两个特征值（从小到大，逗号分隔）。',
    blanks: [{ label: '特征值', answer: { exact: '1,3', alts: ['1 3', '1和3'], setLike: true } }],
    solution: [
      '$\\det(A-\\lambda I)=(2-\\lambda)^{2}-1=0\\Rightarrow(2-\\lambda)^{2}=1\\Rightarrow2-\\lambda=\\pm1$。',
      '故 $\\lambda=1$ 或 $\\lambda=3$。',
      '校验：迹 $=4=1+3$ ✔，行列式 $=3=1\\times3$ ✔',
      '（实对称矩阵的特征值必为实数，且不同特征值的特征向量互相正交 —— 谱定理。）'
    ]
  },
  {
    id: 'la-9-02', topic: 'symm', topicName: '对称矩阵 / 二次型 / 正定',
    weight: 2, difficulty: 4, examRef: 'Topic 7',
    prompt: '判断二次型 $Q(x)=2x_1^{2}-2x_1x_2+2x_2^{2}$ 是否正定？（填 是 或 否）',
    blanks: [{ label: '是否正定', answer: { exact: '是', alts: ['yes', 'true', 'positive definite'] } }],
    solution: [
      '二次型的矩阵：$A=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$（交叉项系数 $-2$ 平分到两个对称位置）。',
      '特征值：$(2-\\lambda)^{2}-1=0\\Rightarrow\\lambda=1,3$。',
      '因所有特征值 $>0$，二次型<b>正定</b>。',
      '<b>也可以用顺序主子式判别（Sylvester 准则）：</b>',
      '$D_1=2>0$，$D_2=\\begin{vmatrix}2&-1\\\\-1&2\\end{vmatrix}=4-1=3>0$，都为正，故正定。',
      '（配方法验证：$Q=2\\left(x_1-\\frac{x_2}{2}\\right)^{2}+\\frac32x_2^{2}>0$ 除原点外。）'
    ]
  },
  {
    id: 'la-9-03', topic: 'symm', topicName: '对称矩阵 / 二次型 / 正定',
    weight: 2, difficulty: 4, examRef: 'Topic 7',
    prompt: '判断二次型 $Q(x)=x_1^{2}+4x_1x_2+x_2^{2}$ 的类型（填 正定 / 负定 / 不定）。',
    blanks: [{ label: '类型', answer: { exact: '不定', alts: ['indefinite'] } }],
    solution: [
      '矩阵 $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$。',
      '特征值：$(1-\\lambda)^{2}-4=0\\Rightarrow\\lambda=3$ 或 $\\lambda=-1$。',
      '特征值有正有负，故二次型<b>不定</b>（indefinite）。',
      '（直观：取 $(x_1,x_2)=(1,-1)$ 得 $1-4+1=-2<0$；取 $(1,1)$ 得 $1+4+1=6>0$。）'
    ]
  },
  {
    id: 'la-9-04', topic: 'symm', topicName: '对称矩阵 / 二次型 / 正定',
    weight: 2, difficulty: 4, examRef: '2024 卷 1(c)',
    prompt: '判断：若 $4\\times4$ 矩阵 $A$ 满足 $A^{T}A=I_4$，则 $\\det A=\\pm1$。（填 对 或 错）',
    blanks: [{ label: '对/错', answer: { exact: '对', alts: ['true', 'yes', '正确'] } }],
    solution: [
      '对。两边取行列式：$\\det(A^{T}A)=\\det I_4$。',
      '$\\det(A^{T})\\det A=(\\det A)^{2}=1$。',
      '故 $\\det A=\\pm1$。',
      '这刻画了<b>正交矩阵</b>：$A^{T}A=I\\iff A^{-1}=A^{T}$。',
      '几何意义：正交变换保持长度与夹角，其行列式 $\\pm1$ 表示体积不变（$+1$ 保持定向，$-1$ 反转定向）。'
    ]
  }
  );

  /* ==================== 10. 综合 ==================== */
  Q.push(
  {
    id: 'la-10-01', topic: 'mixed', topicName: '综合与真题',
    weight: 2, difficulty: 4, examRef: 'Topic 2',
    prompt: '设 $A=\\begin{pmatrix}1&2&-1\\\\2&-1&3\\\\3&1&-2\\end{pmatrix}$ 有 LU 分解 $A=LU$，其中 $L$ 为单位下三角。求 $L$ 的 $(3,2)$ 元素。',
    blanks: [{ label: '$L_{32}$', answer: { exact: '1' } }],
    solution: [
      '用 Doolittle 消元法（$L$ 对角元为 1）：',
      '$R_2\\to R_2-2R_1$，故 $L_{21}=2$；$R_3\\to R_3-3R_1$，故 $L_{31}=3$。',
      '消元后 $U$ 的前两行为 $(1,2,-1)$、$(0,-5,5)$，第三行变为 $(0,-5,1)$。',
      '$R_3\\to R_3-1\\cdot R_2$（因 $-5/-5=1$），故 $L_{32}=1$。',
      '结果：$L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\3&1&1\\end{pmatrix}$，$U=\\begin{pmatrix}1&2&-1\\\\0&-5&5\\\\0&0&-4\\end{pmatrix}$。',
      '验证 $LU=A$ ✔',
      '故 $L_{32}=1$。'
    ]
  },
  {
    id: 'la-10-02', topic: 'mixed', topicName: '综合与真题',
    weight: 3, difficulty: 4, examRef: '2024 卷 2',
    prompt: '设 $u_1,u_2,u_3$ 是两两正交的单位向量，$A=u_1u_1^{T}+u_2u_2^{T}+u_3u_3^{T}$。判断 $A$ 是否可逆，若可逆求 $\\det A$（不可逆填 DNE）。',
    blanks: [{ label: '$\\det A$', answer: { exact: '1' } }],
    solution: [
      '把 $\\{u_1,u_2,u_3\\}$ 作为列拼成 $Q$，则 $Q^{T}Q=I_3$（正交矩阵），且 $A=QQ^{T}$。',
      '对正交矩阵 $Q$：$Q^{-1}=Q^{T}$，于是 $A=QQ^{T}=QQ^{-1}=I_3$。',
      '所以 $A=I_3$，可逆，$\\det A=1$。',
      '<b>一般情形：</b>若只有 $k<3$ 个正交单位向量，则 $A$ 是秩 $k$ 的投影，不可逆，$\\det A=0$。',
      '<b>另证 $A^{2}=A$：</b>$(u_iu_i^{T})(u_ju_j^{T})=u_i(u_i^{T}u_j)u_j^{T}=\\delta_{ij}u_iu_j^{T}$，',
      '故 $A^{2}=\\sum_i u_iu_i^{T}=A$ ✔（幂等）。'
    ]
  },
  {
    id: 'la-10-03', topic: 'mixed', topicName: '综合与真题',
    weight: 2, difficulty: 4, examRef: '2024 卷 1(c) / 2025 卷',
    prompt: '判断：任何 $2\\times2$ 矩阵 $A$ 都可以写成下三角矩阵 $L$ 与上三角矩阵 $U$ 的乘积 $A=LU$（不要求 $L$ 对角元为 1，也不允许换行）。（填 对 或 错）',
    blanks: [{ label: '对/错', answer: { exact: '错', alts: ['false', 'no', '错误'] } }],
    solution: [
      '<b>错。</b>反例：$A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$。',
      '若 $A=LU$，设 $L=\\begin{pmatrix}a&0\\\\b&c\\end{pmatrix}$，$U=\\begin{pmatrix}d&e\\\\0&f\\end{pmatrix}$，则',
      '$LU=\\begin{pmatrix}ad&ae\\\\bd&be+cf\\end{pmatrix}$。',
      '要求 $ad=0$：若 $a=0$ 则 $ae=0\\ne1$；若 $d=0$ 则 $bd=0\\ne1$。矛盾。',
      '故该 $A$ 不能写成 $LU$。',
      '<b>本质原因：</b>不作行交换的 LU 分解要求 $A$ 的所有顺序主子式非零，而本例第一个主子式 $A_{11}=0$。',
      '<b>正确陈述：</b>存在置换矩阵 $P$ 使 $PA=LU$（即带部分主元的 LU 分解）。'
    ]
  }
  );

  /* ==================== 证明与简答（不需输入） ==================== */
  var P = [];
  P.push(
  {
    id: 'lp-1', topic: 'eigen', topicName: '特征值 / 特征向量', year: '2024 卷 1(a) / Topic 5', marks: 4,
    title: 'A 与 Aᵀ 有相同特征值，但特征空间一般不同',
    statement: '判断并证明或反驳：对任意 $3\\times3$ 矩阵 $A$，$A$ 与 $A^{T}$ 有相同的特征空间集合。',
    proof: [
      '<b>结论：错。</b>',
      '<b>第一部分：特征值相同。</b>对任意 $\\lambda$，',
      '$\\det(A^{T}-\\lambda I)=\\det\\big((A-\\lambda I)^{T}\\big)=\\det(A-\\lambda I)$，',
      '故特征多项式相同，特征值集合相同。',
      '<b>第二部分：特征空间一般不同。</b>反例 $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$。',
      '$\\lambda=1$：解 $(A-I)v=0$，$A-I=\\begin{pmatrix}0&1\\\\0&1\\end{pmatrix}$，得 $v_2=0$，',
      '特征空间 $E_1(A)=\\operatorname{span}\\{(1,0)^{T}\\}$。',
      '$A^{T}=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$，$\\lambda=1$：$A^{T}-I=\\begin{pmatrix}0&0\\\\1&1\\end{pmatrix}$，得 $v_1+v_2=0$，',
      '特征空间 $E_1(A^{T})=\\operatorname{span}\\{(-1,1)^{T}\\}$。',
      '$E_1(A)\\ne E_1(A^{T})$，故命题错。',
      '<b>注：</b>两者维数相同（都等于 $n-\\operatorname{rank}(A-\\lambda I)$，而 $\\operatorname{rank}(A-\\lambda I)=\\operatorname{rank}(A^{T}-\\lambda I)$），',
      '但作为子空间并不相同。$A$ 的特征向量是 $A^{T}$ 的<b>左</b>特征向量相关的对象。'
    ],
    conclusion: 'A 与 Aᵀ 特征值必相同（特征多项式相同），但特征空间一般不同。'
  },
  {
    id: 'lp-2', topic: 'matrix', topicName: '矩阵运算', year: '2024 卷 2 / Topic 5', marks: 10,
    title: '正交投影矩阵 A = Σuᵢuᵢᵀ 的性质',
    statement: '设 $u_1,u_2,u_3$ 是 $\\mathbb{R}^{3}$ 中两两正交的单位向量，$A=u_1u_1^{T}+u_2u_2^{T}+u_3u_3^{T}$。<br>(a) 证明 $A^{2}=A$；<br>(b) 证明 $u_1$ 是 $A$ 的特征向量并给出特征值；<br>(c) $A$ 是否可逆？$A$ 的 $(1,1)$ 元素是多少？',
    proof: [
      '<b>(a)</b> 先算两个外积的乘积。由 $u_i^{T}u_j=\\delta_{ij}$（正交单位），',
      '$\\big(u_iu_i^{T}\\big)\\big(u_ju_j^{T}\\big)=u_i\\underbrace{\\big(u_i^{T}u_j\\big)}_{=\\delta_{ij}}u_j^{T}=\\delta_{ij}\\,u_iu_j^{T}$。',
      '于是交叉项全部消失：',
      '$A^{2}=\\Big(\\sum_{i=1}^{3}u_iu_i^{T}\\Big)\\Big(\\sum_{j=1}^{3}u_ju_j^{T}\\Big)=\\sum_{i,j}\\delta_{ij}u_iu_j^{T}=\\sum_{i=1}^{3}u_iu_i^{T}=A$。∎',
      '<b>(b)</b> $Au_1=\\Big(\\sum_i u_iu_i^{T}\\Big)u_1=\\sum_i u_i\\big(u_i^{T}u_1\\big)=\\sum_i u_i\\delta_{i1}=u_1$。',
      '故 $u_1$ 是 $A$ 的特征向量，对应特征值 $\\lambda=1$（同样 $u_2,u_3$ 也对应特征值 1）。',
      '<b>(c)</b> 把 $\\{u_1,u_2,u_3\\}$ 作为列拼成 $Q$，则 $Q^{T}Q=I_3$（正交矩阵），且 $A=QQ^{T}$。',
      '由正交矩阵性质 $Q^{-1}=Q^{T}$，得 $A=QQ^{T}=QQ^{-1}=I_3$。',
      '所以 $A$ <b>可逆</b>（就是单位矩阵），$\\det A=1$，$(1,1)$ 元素为 $1$。',
      '<b>更直观的论证：</b>$A$ 是到 $\\operatorname{span}\\{u_1,u_2,u_3\\}=\\mathbb{R}^{3}$ 的正交投影，',
      '投影到整个空间就是恒等映射，故 $A=I$。',
      '<b>一般化：</b>若只有 $k$ 个正交单位向量，则 $A$ 是到 $k$ 维子空间的正交投影：',
      '$A^{2}=A$、$A^{T}=A$、$\\operatorname{rank}A=k$、$\\operatorname{tr}A=k$、不可逆（$k<n$ 时）。'
    ],
    conclusion: 'A² = A（幂等，是正交投影）；u₁ 是特征向量（λ = 1）；A = I₃ 可逆，A₁₁ = 1。'
  },
  {
    id: 'lp-3', topic: 'space', topicName: '向量空间 / 子空间', year: 'Topic 3 / 2023 卷 1(a)(b)', marks: 8,
    title: '上三角矩阵集合是子空间，且求其一组基',
    statement: '设 $S=\\left\\{\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}:a,b,c\\in\\mathbb{R}\\right\\}$ 是 $2\\times2$ 上三角矩阵的集合。<br>(a) 证明 $S$ 是 $\\mathbb{R}^{2\\times2}$ 的子空间；<br>(b) 证明 $\\mathcal{B}=\\left\\{\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix},\\begin{pmatrix}3&2\\\\0&3\\end{pmatrix},\\begin{pmatrix}2&2\\\\0&1\\end{pmatrix}\\right\\}$ 是 $S$ 的一组基。',
    proof: [
      '<b>(a) 子空间三条件。</b>',
      '<b>① 含零元：</b>取 $a=b=c=0$ 得零矩阵 $\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\in S$。',
      '<b>② 加法封闭：</b>任取 $\\begin{pmatrix}a_1&b_1\\\\0&c_1\\end{pmatrix},\\begin{pmatrix}a_2&b_2\\\\0&c_2\\end{pmatrix}\\in S$，',
      '其和 $=\\begin{pmatrix}a_1+a_2&b_1+b_2\\\\0&c_1+c_2\\end{pmatrix}$，左下角仍为 0，属于 $S$。',
      '<b>③ 数乘封闭：</b>$k\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}=\\begin{pmatrix}ka&kb\\\\0&kc\\end{pmatrix}\\in S$。',
      '三条件都满足，故 $S$ 是子空间。',
      '<b>(b) 用坐标向量判定。</b>取 $S$ 的自然基',
      '$\\mathcal{C}=\\left\\{\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\right\\}$，',
      '则 $\\begin{pmatrix}a&b\\\\0&c\\end{pmatrix}$ 对应坐标向量 $(a,b,c)^{T}$，$\\dim S=3$。',
      '$\\mathcal{B}$ 中三个矩阵的坐标向量（按 $a,b,c$ 顺序）为',
      '$v_1=(2,3,1)^{T}$？按 (a,b,c) 读：$\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix}\\to(2,3,1)^{T}$，',
      '$\\begin{pmatrix}3&2\\\\0&3\\end{pmatrix}\\to(3,2,3)^{T}$，$\\begin{pmatrix}2&2\\\\0&1\\end{pmatrix}\\to(2,2,1)^{T}$。',
      '计算行列式：$\\begin{vmatrix}2&3&2\\\\3&2&2\\\\1&3&1\\end{vmatrix}$',
      '$=2(2-6)-3(3-2)+2(9-2)=-8-3+14=3\\ne0$。',
      '行列式非零 $\\Rightarrow$ 三坐标向量线性无关。',
      '又 $S$ 是 3 维的，3 个线性无关向量必构成基，故 $\\mathcal{B}$ 是 $S$ 的基。∎'
    ],
    conclusion: 'S 是 3 维子空间；B 的坐标向量行列式 = 3 ≠ 0，故线性无关，构成基。'
  },
  {
    id: 'lp-4', topic: 'system', topicName: '线性方程组', year: 'Topic 1 / Midterm Sample 1', marks: 8,
    title: 'Cramer 法则与 det A = 0 的参数条件',
    statement: '设 $A=\\begin{pmatrix}1&2&a\\\\2&a&1\\\\a&1&2\\end{pmatrix}$。<br>(a) 求使 $\\det A=0$ 的 $a$；<br>(b) 当 $\\det A\\ne0$ 时，用 Cramer 法则说明如何求 $x_3$。',
    proof: [
      '<b>(a)</b> 按第一行展开：',
      '$\\det A=1\\begin{vmatrix}a&1\\\\1&2\\end{vmatrix}-2\\begin{vmatrix}2&1\\\\a&2\\end{vmatrix}+a\\begin{vmatrix}2&a\\\\a&1\\end{vmatrix}$',
      '$=(2a-1)-2(4-a)+a(2-a^{2})$',
      '$=2a-1-8+2a+2a-a^{3}=-a^{3}+6a-9$。',
      '令 $-a^{3}+6a-9=0$，即 $a^{3}-6a+9=0$。',
      '试根 $a=-3$：$-27+18+9=0$ ✔，故 $(a+3)$ 是因子。',
      '多项式除法：$a^{3}-6a+9=(a+3)(a^{2}-3a+3)$。',
      '$a^{2}-3a+3$ 的判别式 $\\Delta=9-12=-3<0$，无实根。',
      '故唯一的实根是 $a=-3$。',
      '<b>(b) Cramer 法则。</b>当 $\\det A\\ne0$ 时方程组 $Ax=b$ 有唯一解',
      '$x_3=\\dfrac{\\det A_3(b)}{\\det A}$，',
      '其中 $A_3(b)$ 是把 $A$ 的第 3 列换成 $b$ 得到的矩阵。',
      '$\\det A_3(b)=\\begin{vmatrix}1&2&b_1\\\\2&a&b_2\\\\a&1&b_3\\end{vmatrix}$。',
      '$\\det A_3=1(ab_3-b_2)-2(2b_3-ab_2)+b_1(2-a^{2})$',
      '$=ab_3-b_2-4b_3+2ab_2+b_1(2-a^{2})$。',
      '代具体 $b$ 与 $a$ 即可得 $x_3$。',
      '<b>当 $a=-2$ 时</b>：$\\det A=-(-8)+6(-2)-9=8-12-9=-13\\ne0$，故 $A$ 可逆。',
      '可用 $A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}A$ 求逆，再解 $x=A^{-1}b$。'
    ],
    conclusion: 'det A = −a³ + 6a − 9，唯一实根 a = −3；det A ≠ 0 时 x₃ = det A₃(b)/det A。'
  },
  {
    id: 'lp-5', topic: 'basis', topicName: '基变换 / 坐标', year: '2023 卷 1(c)(d)(e) / Topic 3', marks: 9,
    title: '过渡矩阵与坐标变换 P_{B←C}',
    statement: '设 $S$ 为 $2\\times2$ 上三角矩阵空间，$\\mathcal{C}=\\left\\{\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}\\right\\}$。已知 $\\mathcal{B}$ 是另一组基。<br>(a) 求 $X=\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}$ 在 $\\mathcal{C}$ 下的坐标；<br>(b) 说明过渡矩阵 $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}$ 如何构造；<br>(c) 若 $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}^{-1}$ 是否有意义？',
    proof: [
      '<b>(a)</b> $\\mathcal{C}$ 的自然坐标就是 $(a,b,c)$（对应左上、右上、右下）。',
      '$X=\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}\\Rightarrow[X]_{\\mathcal{C}}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$。',
      '<b>(b)</b> 过渡矩阵 $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}$ 的构造规则：',
      '<b>第 $j$ 列 = $\\mathcal{B}$ 中第 $j$ 个基向量在 $\\mathcal{C}$ 下的坐标。</b>',
      '即若 $\\mathcal{B}=\\{B_1,B_2,B_3\\}$，则',
      '$P_{\\mathcal{C}\\leftarrow\\mathcal{B}}=\\Big([B_1]_{\\mathcal{C}}\\ \\Big|\\ [B_2]_{\\mathcal{C}}\\ \\Big|\\ [B_3]_{\\mathcal{C}}\\Big)$。',
      '对本题的 $\\mathcal{B}=\\left\\{\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix},\\begin{pmatrix}3&2\\\\0&3\\end{pmatrix},\\begin{pmatrix}2&2\\\\0&1\\end{pmatrix}\\right\\}$，',
      '$P_{\\mathcal{C}\\leftarrow\\mathcal{B}}=\\begin{pmatrix}2&3&2\\\\3&2&2\\\\1&3&1\\end{pmatrix}$（第 $j$ 列为第 $j$ 个基向量的 $(a,b,c)$）。',
      '<b>(c)</b> 坐标变换关系：$[X]_{\\mathcal{C}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}[X]_{\\mathcal{B}}$。',
      '要求 $[X]_{\\mathcal{B}}$，两边左乘 $P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}$：',
      '$[X]_{\\mathcal{B}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}[X]_{\\mathcal{C}}$。',
      '而 $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}$，故',
      '$[X]_{\\mathcal{B}}=P_{\\mathcal{B}\\leftarrow\\mathcal{C}}[X]_{\\mathcal{C}}$。',
      '又 $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=\\big(P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\big)^{-1}$ 且 $P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=P_{\\mathcal{C}\\leftarrow\\mathcal{B}}^{-1}$，两者互为逆。',
      '<b>恒等式：</b>$P_{\\mathcal{C}\\leftarrow\\mathcal{B}}\\,P_{\\mathcal{B}\\leftarrow\\mathcal{C}}=I$。',
      '（若 $\\mathcal{C}=\\mathcal{E}$ 是标准基，则 $P_{\\mathcal{E}\\leftarrow\\mathcal{B}}$ 就是把基向量作为列拼成的矩阵。）'
    ],
    conclusion: '[X]_C = (1,2,3)ᵀ；P_{C←B} 的列 = B 中各基向量在 C 下的坐标；P_{B←C} = P_{C←B}⁻¹。'
  },
  {
    id: 'lp-6', topic: 'trans', topicName: '线性变换', year: '2024 卷 1(e) / Topic 4', marks: 6,
    title: '相对不同基的线性变换矩阵',
    statement: '设 $\\mathcal{B}=\\{b_1,b_2,b_3\\}$、$\\mathcal{C}=\\{b_2,b_3,b_1\\}$ 是 $V$ 的两组基。$T:V\\to V$ 满足 $T(b_1)=2b_2$，$T(b_2)=3b_3$，$T(b_3)=4b_1$。求 $T$ 相对于 $\\mathcal{B}$ 与 $\\mathcal{C}$ 的矩阵，并求其迹。',
    proof: [
      '<b>约定：</b>$[T]_{\\mathcal{C}\\leftarrow\\mathcal{B}}$ 的第 $j$ 列是 $T(b_j)$ 在<b>目标基 $\\mathcal{C}$</b> 下的坐标。',
      '<b>第 1 列：</b>$T(b_1)=2b_2$。在 $\\mathcal{C}=\\{b_2,b_3,b_1\\}$ 下，$b_2$ 是第 1 个基向量，',
      '故坐标 $(2,0,0)^{T}$。',
      '<b>第 2 列：</b>$T(b_2)=3b_3$。$b_3$ 是 $\\mathcal{C}$ 的第 2 个基向量，',
      '故坐标 $(0,3,0)^{T}$。',
      '<b>第 3 列：</b>$T(b_3)=4b_1$。$b_1$ 是 $\\mathcal{C}$ 的第 3 个基向量，',
      '故坐标 $(0,0,4)^{T}$。',
      '所以 $[T]_{\\mathcal{C}\\leftarrow\\mathcal{B}}=\\begin{pmatrix}2&0&0\\\\0&3&0\\\\0&0&4\\end{pmatrix}$。',
      '<b>迹：</b>$\\operatorname{tr}=2+3+4=9$。',
      '<b>若改用 $\\mathcal{B}\\to\\mathcal{B}$（即 $[T]_{\\mathcal{B}}$）：</b>',
      '$T(b_1)=2b_2\\Rightarrow(0,2,0)^{T}$；$T(b_2)=3b_3\\Rightarrow(0,0,3)^{T}$；$T(b_3)=4b_1\\Rightarrow(4,0,0)^{T}$，',
      '$[T]_{\\mathcal{B}}=\\begin{pmatrix}0&0&4\\\\2&0&0\\\\0&3&0\\end{pmatrix}$，迹仍为 $0+0+0=0$。',
      '<b>关键点：</b>迹是相似不变量，但对不同基的组合（$\\mathcal{C}\\leftarrow\\mathcal{B}$）矩阵并不相似，迹可以不同。',
      '本题按官方解答约定（$\\mathcal{C}=\\{b_2,b_3,b_1\\}$ 为目标基）得对角矩阵，迹为 9。'
    ],
    conclusion: '[T]_{C←B} = diag(2,3,4)，迹 = 9（按官方约定的目标基 C 计算）。'
  }
  );

  FCMS.register({
    id: 'AMA1751',
    name: '线性代数',
    fullName: 'AMA1751 Linear Algebra',
    desc: '线性方程组、行列式、向量空间、矩阵、线性变换、基变换、特征值、正交与最小二乘。含 2023–2025 四份期末卷与 Midterm Sample 题型。',
    color: '#b8531e',
    topics: [
      { id: 'system',      name: '线性方程组 / 高斯消元' },
      { id: 'determinant', name: '行列式' },
      { id: 'space',       name: '向量空间 / 子空间 / 线性相关' },
      { id: 'matrix',      name: '矩阵运算 / 逆 / 秩' },
      { id: 'trans',       name: '线性变换 / 标准矩阵' },
      { id: 'basis',       name: '基变换 / 坐标 / 维数' },
      { id: 'eigen',       name: '特征值 / 特征向量 / 对角化' },
      { id: 'ortho',       name: '内积 / 正交 / Gram-Schmidt / 最小二乘' },
      { id: 'symm',        name: '对称矩阵 / 二次型 / 正定' },
      { id: 'mixed',       name: '综合与真题' }
    ],
    questions: Q,
    proofs: P,
    papers: (typeof AMA1751_PAPERS !== 'undefined' ? AMA1751_PAPERS : [])
  });
})(typeof window !== 'undefined' ? window : globalThis);
