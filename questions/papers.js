/* ==========================================================================
   AMA1702 刷题系统 — 模拟卷结构（严格按官方试卷的题号与配分）
   --------------------------------------------------------------------------
   每份卷子定义若干「大题」，每道大题：
     no      官方题号（如 "1."、"2."）
     title   官方题目类型描述
     marks   官方配分
     count   从题库抽几道小题
     pools   候选来源，按优先级排列；每项 { bank, topic?, qids? }
   评分按官方配分：每道小题得分 = marks / count，全部小问答对才得该小题分。
   ========================================================================== */
(function (root) {
  'use strict';

  var PAPERS = [
    /* ------------------------------------------------------------------
       2025-26 S1 期中（26 Oct 2025，90 分钟，4 题 100 分）
       ------------------------------------------------------------------ */
    {
      id: 'mid-2526',
      name: '2025-26 S1 期中模拟卷',
      kind: 'midterm',
      time: 90,
      total: 100,
      note: '按 2025 年 10 月 26 日期中卷的题号与配分编排：4 道大题，共 100 分，时间 90 分钟，开卷（可带一张 A4 手写备忘）。',
      sections: [
        {
          no: '1.',
          title: '函数、定义域、复合与反函数',
          marks: 25,
          count: 3,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-2-02', 'mp-2-01', 'mp-1-01'] },
            { bank: 'MIDPAST', topic: 'function' },
            { bank: 'MIDPAST', topic: 'set' },
            { bank: 'MID', topic: 'function' }
          ]
        },
        {
          no: '2.',
          title: '极限（须写出过程；不允许用 Taylor 展开）',
          marks: 35,
          count: 4,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-3-01', 'mp-3-02', 'mp-3-05', 'mp-3-07'] },
            { bank: 'MIDPAST', topic: 'limit' },
            { bank: 'MID', topic: 'limit' }
          ]
        },
        {
          no: '3.',
          title: '高阶导数与递推关系',
          marks: 20,
          count: 3,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-4-01', 'mp-4-02', 'mp-4-03'] },
            { bank: 'MIDPAST', topic: 'deriv' },
            { bank: 'MID', topic: 'deriv' }
          ]
        },
        {
          no: '4.',
          title: '分段函数的连续性与可导性',
          marks: 20,
          count: 2,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-5-01', 'mp-5-02'] },
            { bank: 'MIDPAST', topic: 'contdiff' },
            { bank: 'MID', topic: 'contdiff' }
          ]
        }
      ],
      proofs: [
        { id: 'pf-mid-01', marks: 13 },
        { id: 'pf-mid-02', marks: 10 },
        { id: 'pf-mid-03', marks: 20 },
        { id: 'pf-mid-05', marks: 10 }
      ]
    },

    /* ------------------------------------------------------------------
       2024-25 S1 期中（21 Oct 2024，90 分钟，5 题 100 分）
       ------------------------------------------------------------------ */
    {
      id: 'mid-2425',
      name: '2024-25 S1 期中模拟卷',
      kind: 'midterm',
      time: 90,
      total: 100,
      note: '按 2024 年 10 月 21 日期中卷的题号与配分编排：5 道大题（25/35/15/10/15），共 100 分，时间 90 分钟。',
      sections: [
        {
          no: '1.',
          title: '函数、定义域、复合与反函数',
          marks: 25,
          count: 3,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-1-02', 'mp-1-03', 'mp-1-04'] },
            { bank: 'MIDPAST', qids: ['mp-1-05', 'mp-2-03'] },
            { bank: 'MIDPAST', topic: 'function' },
            { bank: 'MIDPAST', topic: 'set' }
          ]
        },
        {
          no: '2.',
          title: '极限（须写出过程）',
          marks: 35,
          count: 5,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-3-09', 'mp-3-10', 'mp-3-15', 'mp-3-11', 'mp-3-14', 'mp-3-12', 'mp-3-13'] },
            { bank: 'MIDPAST', topic: 'limit' },
            { bank: 'MID', topic: 'limit' }
          ]
        },
        {
          no: '3.',
          title: '隐函数求导与高阶导数递推（y = e^{arcsin x}）',
          marks: 15,
          count: 2,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-4-04', 'mp-4-05'] },
            { bank: 'MIDPAST', topic: 'deriv' }
          ]
        },
        {
          no: '4.',
          title: '函数的奇偶性与周期性',
          marks: 10,
          count: 2,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-6-01', 'mp-6-02'] },
            { bank: 'MID', topic: 'function' }
          ]
        },
        {
          no: '5.',
          title: '分段函数处处可导（求 a, b）',
          marks: 15,
          count: 2,
          pools: [
            { bank: 'MIDPAST', qids: ['mp-5-03', 'mp-5-04'] },
            { bank: 'MIDPAST', topic: 'contdiff' },
            { bank: 'MID', topic: 'contdiff' }
          ]
        }
      ],
      proofs: [
        { id: 'pf-mid-04', marks: 15 },
        { id: 'pf-mid-06', marks: 10 },
        { id: 'pf-mid-05', marks: 10 }
      ]
    },

    /* ------------------------------------------------------------------
       期末卷（2025 年 12 月 8 日，2 小时，5 题 100 分）
       ------------------------------------------------------------------ */
    {
      id: 'final-2025',
      name: '期末模拟卷（2025 真题结构）',
      kind: 'final',
      time: 120,
      total: 100,
      note: '按 2025 年 12 月 8 日期末卷的题号与配分编排：5 道大题（10/30/30/10/20），共 100 分，时间 2 小时。',
      sections: [
        {
          no: '1.',
          title: '分段函数的连续性、可导性、导数连续性',
          marks: 10,
          count: 2,
          pools: [
            { bank: 'FINAL', qids: ['fin-1-01', 'fin-1-02', 'fin-1-03'] },
            { bank: 'FINAL', topic: 'contdiff' },
            { bank: 'PAST', topic: 'contdiff' }
          ]
        },
        {
          no: '2.',
          title: '计算下列积分（换元 / 部分分式 / 三角 / 广义积分）',
          marks: 30,
          count: 4,
          pools: [
            { bank: 'FINAL', qids: ['fin-2-01', 'fin-2-02', 'fin-2-03', 'fin-2-04', 'fin-2-05'] },
            { bank: 'FINAL', topic: 'integral' },
            { bank: 'PAST', topic: 'integral' }
          ]
        },
        {
          no: '3.',
          title: '面积、弧长与旋转体体积',
          marks: 30,
          count: 2,
          pools: [
            { bank: 'FINAL', qids: ['fin-3-01', 'fin-3-02', 'fin-3-03', 'fin-3-04'] },
            { bank: 'PAST', qids: ['past-3-04', 'past-3-08'] },
            { bank: 'FINAL', topic: 'appl' },
            { bank: 'PAST', topic: 'appl' }
          ]
        },
        {
          no: '4.',
          title: '幂级数与用级数计算积分',
          marks: 10,
          count: 2,
          pools: [
            { bank: 'FINAL', qids: ['fin-4-01', 'fin-4-02'] },
            { bank: 'PAST', qids: ['past-4-03'] },
            { bank: 'FINAL', topic: 'series' },
            { bank: 'PAST', topic: 'series' }
          ]
        },
        {
          no: '5.',
          title: '定积分的性质与对称性',
          marks: 20,
          count: 2,
          pools: [
            { bank: 'FINAL', qids: ['fin-5-01', 'fin-5-02', 'fin-5-03', 'fin-5-04'] },
            { bank: 'FINAL', topic: 'symm' },
            { bank: 'FINAL', qids: ['fin-5-08', 'fin-5-09', 'fin-5-10'] }
          ]
        }
      ],
      proofs: [
        { id: 'pf-int-02', marks: 20 },
        { id: 'pf-int-01', marks: 20 },
        { id: 'pf-ser-02', marks: 20 }
      ]
    }
  ];

  root.AMA1702_PAPERS = PAPERS;
})(typeof window !== 'undefined' ? window : globalThis);
