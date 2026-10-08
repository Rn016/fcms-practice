/* ==========================================================================
   COMP1010 计算思维与 Python — 模拟卷
   --------------------------------------------------------------------------
   按本课程期末卷标准题型编排：概念题 + 伪代码/流程 + Python 代码输出 + 算法。
   代码输出题的答案均由真实解释器运行取得。
   ========================================================================== */
(function (root) {
  'use strict';
  root.COMP1010_PAPERS = [

    /* ---------------- 期末模拟卷 A（120 分钟 / 100 分） ---------------- */
    {
      id: 'p1-final-a',
      name: '计算思维 期末模拟卷 A',
      kind: 'final',
      time: 120,
      total: 100,
      note: '按本课程期末卷标准结构编排：8 道大题共 100 分，120 分钟。第 3、4 题需要在纸上追踪代码执行结果。',
      sections: [
        { no: '1.', title: '计算思维概念（简答，填关键词）', marks: 12, count: 4,
          pools: [{ bank: 'p1-1' }, { bank: 'ct' }] },
        { no: '2.', title: '数据表示与进制转换', marks: 10, count: 3,
          pools: [{ bank: 'p1-2' }, { bank: 'basics' }] },
        { no: '3.', title: '伪代码与循环追踪', marks: 14, count: 4,
          pools: [{ bank: 'p1-3' }, { bank: 'p1-4' }, { bank: 'datastruct' }] },
        { no: '4.', title: '条件判断与多分支', marks: 12, count: 3,
          pools: [{ bank: 'p1-4' }, { bank: 'control' }] },
        { no: '5.', title: 'Python 代码输出（追踪执行结果）', marks: 18, count: 5,
          pools: [{ bank: 'p1-2' }, { bank: 'p1-3' }, { bank: 'p1-4' }, { bank: 'p1-7' }, { bank: 'p1-8' }] },
        { no: '6.', title: '函数、作用域与递归', marks: 12, count: 3,
          pools: [{ bank: 'p1-5' }, { bank: 'function' }] },
        { no: '7.', title: '文件读写与异常处理', marks: 12, count: 3,
          pools: [{ bank: 'p1-6' }, { bank: 'fileexc' }] },
        { no: '8.', title: '算法与复杂度（排序·查找）', marks: 10, count: 3,
          pools: [{ bank: 'p1-7' }, { bank: 'algo' }] }
      ]
    },

    /* ---------------- 期末模拟卷 B（编程实操重点） ---------------- */
    {
      id: 'p1-final-b',
      name: '计算思维 期末模拟卷 B（编程实操重点）',
      kind: 'final',
      time: 120,
      total: 100,
      note: '偏重代码追踪与 Python 实操细节（别名、可变默认参数、排序稳定性等易错点）。7 道大题共 100 分，120 分钟。',
      sections: [
        { no: '1.', title: '计算思维与问题求解方法', marks: 12, count: 3,
          pools: [{ bank: 'p1-1' }, { bank: 'ct' }] },
        { no: '2.', title: '数据表示', marks: 10, count: 3,
          pools: [{ bank: 'p1-2' }, { bank: 'basics' }] },
        { no: '3.', title: 'Python 数据结构与操作', marks: 16, count: 4,
          pools: [{ bank: 'p1-3' }, { bank: 'datastruct' }] },
        { no: '4.', title: '控制流与代码追踪', marks: 18, count: 5,
          pools: [{ bank: 'p1-4' }, { bank: 'p1-7' }, { bank: 'control' }] },
        { no: '5.', title: '函数、递归与作用域', marks: 16, count: 4,
          pools: [{ bank: 'p1-5' }, { bank: 'function' }] },
        { no: '6.', title: '文件、异常与调试', marks: 14, count: 3,
          pools: [{ bank: 'p1-6' }, { bank: 'fileexc' }] },
        { no: '7.', title: '综合应用题', marks: 14, count: 4,
          pools: [{ bank: 'p1-8' }, { bank: 'mixed' }] }
      ]
    },

    /* ---------------- 期中模拟卷（前半学期 / 70 分） ---------------- */
    {
      id: 'p1-mid-a',
      name: '计算思维 期中模拟卷（前半学期）',
      kind: 'midterm',
      time: 90,
      total: 70,
      note: '覆盖计算思维概念、数据表示、伪代码与循环、条件判断。6 道大题共 70 分，90 分钟。',
      sections: [
        { no: '1.', title: '计算思维核心概念', marks: 12, count: 4,
          pools: [{ bank: 'p1-1' }, { bank: 'ct' }] },
        { no: '2.', title: '进制转换与数据表示', marks: 12, count: 3,
          pools: [{ bank: 'p1-2' }, { bank: 'basics' }] },
        { no: '3.', title: '伪代码与迭代', marks: 14, count: 4,
          pools: [{ bank: 'p1-3' }, { bank: 'datastruct' }] },
        { no: '4.', title: '条件判断与逻辑运算', marks: 14, count: 4,
          pools: [{ bank: 'p1-4' }, { bank: 'control' }] },
        { no: '5.', title: '代码追踪（写出输出）', marks: 12, count: 3,
          pools: [{ bank: 'p1-3' }, { bank: 'p1-4' }] },
        { no: '6.', title: '综合题', marks: 6, count: 2,
          pools: [{ bank: 'p1-8' }, { bank: 'mixed' }] }
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
