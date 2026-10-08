/* ==========================================================================
   AMA1751 线性代数 — 模拟卷
   --------------------------------------------------------------------------
   结构参照本课程期末考试的标准题型与配分（计算题为主，证明题占一档）。
   pools 里的 bank 用「id 前缀」或「主题名」，由 app.js 的 resolveBank 按学科解析。
   ========================================================================== */
(function (root) {
  'use strict';
  root.AMA1751_PAPERS = [

    /* ---------------- 期末模拟卷 A（120 分钟 / 100 分） ---------------- */
    {
      id: 'la-final-a',
      name: '线性代数 期末模拟卷 A',
      kind: 'final',
      time: 120,
      total: 100,
      note: '按本课程期末卷的标准题型编排：8 道大题共 100 分，120 分钟。计算题须写出过程；第 8 题为证明题。',
      sections: [
        { no: '1.', title: '线性方程组与高斯消元', marks: 14, count: 3,
          pools: [{ bank: 'la-1', qids: ['la-1-02', 'la-1-05', 'la-1-08'] }, { bank: 'system' }] },
        { no: '2.', title: '行列式的计算与性质', marks: 12, count: 3,
          pools: [{ bank: 'la-2' }, { bank: 'determinant' }] },
        { no: '3.', title: '向量空间、线性相关与基', marks: 14, count: 3,
          pools: [{ bank: 'la-3' }, { bank: 'space' }, { bank: 'basis' }] },
        { no: '4.', title: '矩阵运算、逆矩阵与秩', marks: 14, count: 3,
          pools: [{ bank: 'la-4' }, { bank: 'matrix' }] },
        { no: '5.', title: '线性变换与基变换', marks: 12, count: 3,
          pools: [{ bank: 'la-5' }, { bank: 'la-6' }, { bank: 'trans' }] },
        { no: '6.', title: '特征值与对角化', marks: 16, count: 4,
          pools: [{ bank: 'la-7' }, { bank: 'eigen' }] },
        { no: '7.', title: '内积、正交化与最小二乘', marks: 14, count: 3,
          pools: [{ bank: 'la-8' }, { bank: 'la-9' }, { bank: 'ortho' }, { bank: 'symm' }] },
        { no: '8.', title: '证明题（须写出完整证明）', marks: 4, count: 1,
          pools: [{ bank: 'la-10' }] }
      ]
    },

    /* ---------------- 期中模拟卷（90 分钟 / 70 分） ---------------- */
    {
      id: 'la-mid-a',
      name: '线性代数 期中模拟卷（前半学期）',
      kind: 'midterm',
      time: 90,
      total: 70,
      note: '覆盖前半学期（线性方程组 → 线性变换）内容。6 道大题共 70 分，90 分钟。',
      sections: [
        { no: '1.', title: '线性方程组与高斯消元', marks: 14, count: 3,
          pools: [{ bank: 'la-1' }, { bank: 'system' }] },
        { no: '2.', title: '行列式', marks: 12, count: 3,
          pools: [{ bank: 'la-2' }, { bank: 'determinant' }] },
        { no: '3.', title: '向量空间与线性相关', marks: 14, count: 3,
          pools: [{ bank: 'la-3' }, { bank: 'space' }] },
        { no: '4.', title: '矩阵运算、逆与秩', marks: 14, count: 3,
          pools: [{ bank: 'la-4' }, { bank: 'matrix' }] },
        { no: '5.', title: '线性变换与基', marks: 12, count: 3,
          pools: [{ bank: 'la-5' }, { bank: 'la-6' }, { bank: 'trans' }] },
        { no: '6.', title: '综合题', marks: 4, count: 1,
          pools: [{ bank: 'la-10' }] }
      ]
    },

    /* ---------------- 期末模拟卷 B（后半学期重点） ---------------- */
    {
      id: 'la-final-b',
      name: '线性代数 期末模拟卷 B（后半学期重点）',
      kind: 'final',
      time: 120,
      total: 100,
      note: '后半学期重点卷：特征值、对角化、正交化、二次型占比更高，适合考前冲刺。7 道大题共 100 分，120 分钟。',
      sections: [
        { no: '1.', title: '矩阵与行列式（基础运算）', marks: 14, count: 3,
          pools: [{ bank: 'la-2' }, { bank: 'la-4' }, { bank: 'determinant' }] },
        { no: '2.', title: '向量空间与基变换', marks: 14, count: 3,
          pools: [{ bank: 'la-3' }, { bank: 'la-6' }, { bank: 'space' }] },
        { no: '3.', title: '线性变换', marks: 12, count: 3,
          pools: [{ bank: 'la-5' }, { bank: 'trans' }] },
        { no: '4.', title: '特征值与特征向量', marks: 18, count: 4,
          pools: [{ bank: 'la-7' }, { bank: 'eigen' }] },
        { no: '5.', title: '对角化判定与应用', marks: 16, count: 4,
          pools: [{ bank: 'la-7' }, { bank: 'eigen' }] },
        { no: '6.', title: '内积、Gram–Schmidt 与最小二乘', marks: 16, count: 4,
          pools: [{ bank: 'la-8' }, { bank: 'ortho' }] },
        { no: '7.', title: '对称矩阵、二次型与正定', marks: 10, count: 3,
          pools: [{ bank: 'la-9' }, { bank: 'symm' }] }
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
