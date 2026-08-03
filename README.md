# CRYBABY912 Portfolio

基于 Astro 的个人项目作品集，展示全栈系统、AI 应用和产品实践。

## 本地开发

项目要求 Node.js `>=22.12.0`。当前 Windows 环境的 Node 24 位于 `D:\Java_App`，如果终端仍优先使用旧版 Node，可以先执行：

```powershell
$env:Path = "D:\Java_App;$env:Path"
```

安装依赖并启动开发服务器：

```powershell
npm install
npm run dev
```

打开 <http://localhost:4321>。

构建生产版本：

```powershell
npm run build
npm run preview
```

## 目录说明

```text
src/
├─ data/projects.ts              项目数据，新增项目从这里开始
├─ styles/site.css               首页与详情页共享视觉系统
└─ pages/
   ├─ index.astro                作品集首页
   ├─ 404.astro                  GitHub Pages 自定义 404
   └─ projects/[slug].astro      项目详情页模板
public/
├─ food-hero.jpg                 食汇外卖项目视觉素材
└─ ai-agent-workflow-demo.gif    AI 工作流真实 UI 演示
.github/workflows/deploy.yml     GitHub Pages 自动部署
```

## 新增项目

在 `src/data/projects.ts` 的 `projects` 数组中添加一个完整项目对象。详情页和首页都会自动生成，不需要再复制页面模板。

建议按下面的分组填写内容：

- **定位**：`title`、`category`、`year`、`status`、`description`、`summary`
- **技术与结果**：`tech`、`role`、`platforms`、`metrics`
- **实现路径**：`problem`、`workflow`、`architecture`
- **工程复盘**：`decisions`、`incidents`
- **交付证据**：`evidence`、`nextSteps`、`github`

其中 `incidents` 不要只写“修复了一个样式问题”，优先记录会改变设计的故障：现象、根因、修复和最终留下的工程判断。`metrics` 要注明测试环境和口径，避免把本地单机数据写成生产容量承诺。

详情页会固定按以下顺序展示这些字段：

```text
项目概览 → 量化结果 → 问题约束 → 实现流程 → 系统架构
→ 关键决策 → Bug 复盘 → 验证证据 → 下一步
```

项目图片放入 `public/`，并在数据中的 `cover` 使用以 `/` 开头的路径。展示截图或 GIF 时使用 `coverFit: 'contain'` 保证完整显示；需要铺满图片区域时使用 `coverFit: 'cover'`。

```text
/projects/your-project-slug/
```

项目图片放入 `public/`，并在数据中的 `cover` 使用以 `/` 开头的路径。

## GitHub Pages 部署

仓库名称应为：

```text
crybaby912.github.io
```

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署。首次使用时，在仓库的 `Settings → Pages` 中将 Source 设置为 `GitHub Actions`。

站点地址配置在 `astro.config.mjs`：

```js
site: 'https://crybaby912.github.io'
```
