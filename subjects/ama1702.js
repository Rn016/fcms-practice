/* ==========================================================================
   AMA1702 Calculus —— 学科定义
   把原有 5 个题库文件（midterm / mid_past / final / past / proofs / papers）
   聚合注册为一个学科。
   ========================================================================== */
(function (root) {
  'use strict';
  var FCMS = root.FCMS;
  if (!FCMS) throw new Error('subjects/ama1702.js: 必须先加载 js/registry.js');

  function tag(arr, moduleName) {
    return (arr || []).map(function (q) {
      var o = {};
      for (var k in q) if (Object.prototype.hasOwnProperty.call(q, k)) o[k] = q[k];
      o.module = moduleName;
      o.moduleName = moduleName;
      return o;
    });
  }

  var midMain = tag(root.AMA1702_MID, '期中模块');
  var midPast = tag(root.AMA1702_MIDPAST, '期中真题');
  var finMain = tag(root.AMA1702_FINAL, '期末模块');
  var finPast = tag(root.AMA1702_PAST, '期末真题');
  var questions = midMain.concat(midPast, finMain, finPast);

  var proofs = (root.AMA1702_PROOFS || []).map(function (q) {
    var o = {};
    for (var k in q) if (Object.prototype.hasOwnProperty.call(q, k)) o[k] = q[k];
    o.module = '证明与简答';
    return o;
  });

  // 模拟卷：按官方题号与配分
  var papers = (root.AMA1702_PAPERS || []).map(function (p) {
    var o = {};
    for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) o[k] = p[k];
    o.subjectId = 'AMA1702';
    return o;
  });

  FCMS.register({
    id: 'AMA1702',
    name: '微积分',
    fullName: 'AMA1702 Calculus',
    desc: '极限、求导、积分、级数。含 2024-25 / 2025-26 期中真题与 2023–2025 期末真题。',
    color: '#2f5bd7',
    topics: [
      { id: 'set',       name: '集合 / 绝对值 / 不等式' },
      { id: 'function',  name: '函数 / 定义域 / 复合 / 反函数' },
      { id: 'limit',     name: '极限 / 夹逼 / 连续' },
      { id: 'contdiff',  name: '连续性 / 可导性 / 分段函数' },
      { id: 'deriv',     name: '导数 / 链式 / 隐函数 / 高阶' },
      { id: 'mvt',       name: '中值定理 / 单调性 / 极值' },
      { id: 'integral',  name: '积分（换元·分部·部分分式·广义）' },
      { id: 'appl',      name: '面积 / 弧长 / 旋转体体积' },
      { id: 'series',    name: '幂级数 / 级数 / 泰勒展开' },
      { id: 'symm',      name: '定积分性质 / 对称性' }
    ],
    questions: questions,
    proofs: proofs,
    papers: papers
  });
})(typeof window !== 'undefined' ? window : globalThis);
