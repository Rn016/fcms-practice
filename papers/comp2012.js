/* ==========================================================================
   COMP2012 离散数学 — 模拟卷
   --------------------------------------------------------------------------
   按本课程期末卷标准题型与配分编排：逻辑证明 + 计数 + 图论 + 树/布尔 四大板块。
   pools 里的 bank 由 app.js 的 resolveBank 按学科解析（id 前缀或主题名）。
   ========================================================================== */
(function (root) {
  'use strict';
  root.COMP2012_PAPERS = [

    /* ---------------- 期末模拟卷 A（120 分钟 / 100 分） ---------------- */
    {
      id: 'cm-final-a',
      name: '离散数学 期末模拟卷 A',
      kind: 'final',
      time: 120,
      total: 100,
      note: '按本课程期末卷标准结构编排：8 道大题共 100 分，120 分钟。图论与计数占分最高，末题为证明题。',
      sections: [
        { no: '1.', title: '命题逻辑与推理', marks: 10, count: 3,
          pools: [{ bank: 'cm-1' }, { bank: 'logic' }] },
        { no: '2.', title: '集合、函数与序列求和', marks: 10, count: 3,
          pools: [{ bank: 'cm-2' }, { bank: 'structures' }] },
        { no: '3.', title: '算法与复杂度分析', marks: 10, count: 2,
          pools: [{ bank: 'cm-3' }, { bank: 'algorithm' }] },
        { no: '4.', title: '数学归纳法与递归', marks: 12, count: 3,
          pools: [{ bank: 'cm-4' }, { bank: 'induction' }] },
        { no: '5.', title: '计数（排列·组合·容斥·鸽巢）', marks: 14, count: 4,
          pools: [{ bank: 'cm-5' }, { bank: 'counting' }] },
        { no: '6.', title: '图论（连通性·欧拉·哈密顿·最短路）', marks: 18, count: 5,
          pools: [{ bank: 'cm-6' }, { bank: 'cm-7' }, { bank: 'graph' }, { bank: 'graph2' }] },
        { no: '7.', title: '树、Huffman 编码与布尔代数', marks: 16, count: 4,
          pools: [{ bank: 'cm-9' }, { bank: 'cm-10' }, { bank: 'cm-11' }, { bank: 'tree2' }] },
        { no: '8.', title: '证明题（须写出完整证明）', marks: 10, count: 1,
          pools: [{ bank: 'cm-12' }] }
      ]
    },

    /* ---------------- 期末模拟卷 B（图论与组合重点） ---------------- */
    {
      id: 'cm-final-b',
      name: '离散数学 期末模拟卷 B（图论 / 组合重点）',
      kind: 'final',
      time: 120,
      total: 100,
      note: '图论与组合数学加权卷，含网络流、生成树、Huffman 编码等应用题。7 道大题共 100 分，120 分钟。',
      sections: [
        { no: '1.', title: '逻辑与基本结构', marks: 12, count: 3,
          pools: [{ bank: 'cm-1' }, { bank: 'cm-2' }, { bank: 'logic' }] },
        { no: '2.', title: '归纳法与递归', marks: 12, count: 3,
          pools: [{ bank: 'cm-4' }, { bank: 'induction' }] },
        { no: '3.', title: '计数原理', marks: 14, count: 4,
          pools: [{ bank: 'cm-5' }, { bank: 'counting' }] },
        { no: '4.', title: '图论 I：基本概念与连通性', marks: 14, count: 3,
          pools: [{ bank: 'cm-6' }, { bank: 'graph' }] },
        { no: '5.', title: '图论 II：欧拉·哈密顿·最短路径', marks: 16, count: 4,
          pools: [{ bank: 'cm-7' }, { bank: 'cm-13' }, { bank: 'cm-14' }, { bank: 'graph2' }] },
        { no: '6.', title: '图论 III：网络流与最小割', marks: 12, count: 3,
          pools: [{ bank: 'cm-8' }, { bank: 'graph3' }] },
        { no: '7.', title: '树与布尔代数', marks: 20, count: 5,
          pools: [{ bank: 'cm-9' }, { bank: 'cm-10' }, { bank: 'cm-11' }, { bank: 'tree2' }] }
      ]
    },

    /* ---------------- 期中模拟卷（前半学期 / 80 分） ---------------- */
    {
      id: 'cm-mid-a',
      name: '离散数学 期中模拟卷（前半学期）',
      kind: 'midterm',
      time: 90,
      total: 80,
      note: '覆盖逻辑、集合、算法、归纳、计数五个板块（不含图论）。6 道大题共 80 分，90 分钟。',
      sections: [
        { no: '1.', title: '命题逻辑与证明方法', marks: 14, count: 4,
          pools: [{ bank: 'cm-1' }, { bank: 'logic' }] },
        { no: '2.', title: '集合、函数与序列', marks: 14, count: 4,
          pools: [{ bank: 'cm-2' }, { bank: 'structures' }] },
        { no: '3.', title: '算法与复杂度', marks: 12, count: 3,
          pools: [{ bank: 'cm-3' }, { bank: 'algorithm' }] },
        { no: '4.', title: '数学归纳法与递归', marks: 14, count: 4,
          pools: [{ bank: 'cm-4' }, { bank: 'induction' }] },
        { no: '5.', title: '计数原理', marks: 16, count: 4,
          pools: [{ bank: 'cm-5' }, { bank: 'counting' }] },
        { no: '6.', title: '证明题', marks: 10, count: 1,
          pools: [{ bank: 'cm-12' }] }
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
