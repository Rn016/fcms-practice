/* ==========================================================================
   FCMS 题库练习 — 学科注册表
   每个学科的题库文件调用 FCMS.register({...}) 注册自己。
   这样新增学科只需加一个文件 + 一行 script，不用改 app.js。
   ========================================================================== */
(function (root) {
  'use strict';

  var SUBJECTS = [];

  /**
   * 注册一个学科
   * @param {Object} cfg
   *   id        学科代号，如 'AMA1702'
   *   name      中文名，如 '微积分'
   *   fullName  全称
   *   desc      简介
   *   topics    [{ id, name }]  主题表（顺序即展示顺序）
   *   questions 计算填空题目数组
   *   proofs    证明/简答题数组（可选）
   *   papers    模拟卷结构数组（可选）
   */
  function register(cfg) {
    if (!cfg || !cfg.id) throw new Error('FCMS.register: 缺少 id');
    // 去重（重复调用时覆盖）
    for (var i = 0; i < SUBJECTS.length; i++) {
      if (SUBJECTS[i].id === cfg.id) { SUBJECTS[i] = cfg; return cfg; }
    }
    SUBJECTS.push(cfg);
    return cfg;
  }

  /* ------------------------------------------------ 讲义精读（notes） */

  // { subjectId: [ {no,title,titleEn,tags,blocks,terms}, ... ] }
  var NOTES = {};

  function registerNotes(cfg) {
    if (!cfg || !cfg.subjectId) throw new Error('FCMS.registerNotes: 缺少 subjectId');
    NOTES[cfg.subjectId] = cfg.topics || [];
    return cfg;
  }

  function notesOf(subjectId) { return NOTES[subjectId] || []; }
  function hasNotes(subjectId) { return (NOTES[subjectId] || []).length > 0; }

  /* ------------------------------------------------ 双语（i18n） */

  // 英文层：{ subjectId: { topics:{zh:en}, questions:{id:{prompt,blanks[],solution[]}},
  //                       proofs:{id:{title,statement,given,conclusion,proof[]}} } }
  var EN = {};

  /**
   * 注册某学科的英文翻译层。结构与科目题库一一对应，
   * 翻译缺失时自动回退到中文，因此可以分批补翻。
   */
  function registerEn(subjectId, layer) {
    if (!subjectId || !layer) return;
    EN[subjectId] = Object.assign(EN[subjectId] || {}, layer);
  }

  function enFor(subjectId) { return EN[subjectId] || null; }

  /** 取英文翻译；没有则回退中文 */
  function pick(subjectId, path, zh) {
    var e = EN[subjectId];
    if (!e) return zh;
    var cur = e;
    for (var i = 0; i < path.length; i++) {
      if (cur == null) return zh;
      cur = cur[path[i]];
    }
    return (typeof cur === 'string' && cur.length) ? cur : zh;
  }

  function all() { return SUBJECTS.slice(); }
  function byId(id) {
    for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].id === id) return SUBJECTS[i];
    return null;
  }

  root.FCMS = {
    register: register, all: all, byId: byId,
    registerEn: registerEn, enFor: enFor, pick: pick,
    registerNotes: registerNotes, notesOf: notesOf, hasNotes: hasNotes,
    version: '1.2'
  };
})(typeof window !== 'undefined' ? window : globalThis);
