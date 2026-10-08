# FCMS 题库练习 · Question Bank

香港理工大学（PolyU）四门课程的**离线刷题 + 讲义精读**站点。纯静态，无后端、无网络请求。

## 内容

| 学科 | 填空 | 证明 | 讲义精读 | 模拟卷 |
|---|---|---|---|---|
| **AMA1702** 微积分 Calculus | 183 | 27 | 8 讲 | 3 套 |
| **AMA1751** 线性代数 Linear Algebra | 55 | 6 | 7 讲 | 3 套 |
| **COMP2012** 离散数学 Discrete Mathematics | 59 | 6 | 8 讲 | 3 套 |
| **COMP1010** 计算思维与 Python | 64 | 6 | 12 讲 | 3 套 |
| **合计** | **361** | **45** | **35 讲** | **12 套** |

另有 **434 条中英对照术语**、**207 个讲义→练题跳转**、COMP2012 的 **9 道 SVG 图形题**。

## 特点

- **不是选择题** —— 自己输入答案，判定引擎做符号等价 + 数值采样，支持多种等价写法
- **中英双语** —— 英文授课，题面与解答均为上英下中；讲义为中文讲解 + 英文术语标注
- **完全离线** —— KaTeX 与符号计算库都内置，无 CDN 依赖
- **进度本地保存** —— 记录存在浏览器 `localStorage`，不上传任何数据

## 使用

直接打开 `index.html` 即可。若浏览器对 `file://` 有限制：

```bash
python3 -m http.server 8899
# 然后打开 http://127.0.0.1:8899/
```

## 结构

```
index.html          入口
js/                 registry(注册表) / engine(判定引擎) / app(界面)
subjects/           四个学科的题库聚合
questions/          AMA1702 题库（其余学科题目内联在 subjects/）
notes/              讲义精读数据
papers/             模拟卷结构
i18n/               英文层
vendor/             KaTeX + nerdamer（离线）
```

新增一个学科只需 `subjects/xxx.js` + `index.html` 两行，不动 `js/app.js`。

---

作者：**RadoN**　|　页面带有 RadoN 水印
