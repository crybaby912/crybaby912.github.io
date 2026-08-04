# CRYBABY912 作品集

基于 Astro 的个人项目作品集，展示全栈系统、AI 应用和真实工程复盘。

## 本地开发

项目要求 Node.js `>=22.12.0`。安装依赖后，按仓库约定使用后台模式启动：

```powershell
npm install
astro dev --background
```

打开 <http://localhost:4321>。后台服务可使用以下命令管理：

```powershell
astro dev status
astro dev logs
astro dev stop
```

构建生产版本：

```powershell
npm run build
npm run preview
```

## 项目结构

```text
src/
├─ data/projects.ts              项目数据与案例内容
├─ styles/site.css               首页与详情页共享视觉系统
└─ pages/
   ├─ index.astro                作品集首页
   ├─ 404.astro                  GitHub Pages 自定义 404
   └─ projects/[slug].astro      项目详情页模板
public/
├─ ai-agent-workflow-demo.gif    AI 工作流真实界面演示
└─ projects/food-take-out/       食汇外卖用户端与商家端截图
.github/workflows/deploy.yml     GitHub Pages 自动部署
```

## 新增案例

在 `src/data/projects.ts` 的 `projects` 数组中添加完整项目对象。首页和详情页会自动读取数据，不需要复制页面模板。

项目图片放入 `public/`，数据中的 `cover` 使用以 `/` 开头的路径。截图或 GIF 使用 `coverFit: 'contain'` 保证完整显示，需要铺满区域时再使用 `coverFit: 'cover'`。

每个案例建议保留以下信息：

- 定位：标题、类别、状态、简介
- 技术与结果：技术栈、角色、运行端、指标
- 实现过程：问题约束、工作流、系统分层
- 工程复盘：关键取舍、故障现象、根因与修复
- 交付证据：测试范围、验证结果和下一步

## 发布

仓库推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署到 GitHub Pages。站点地址配置在 `astro.config.mjs`：

```js
site: 'https://crybaby912.github.io'
```
