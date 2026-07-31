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
└─ pages/
   ├─ index.astro                作品集首页
   ├─ 404.astro                  GitHub Pages 自定义 404
   └─ projects/[slug].astro      项目详情页模板
public/
└─ food-hero.jpg                 项目视觉素材
.github/workflows/deploy.yml     GitHub Pages 自动部署
```

## 新增项目

在 `src/data/projects.ts` 的 `projects` 数组中添加一个项目对象，填写 `slug`、项目描述、技术栈、亮点和架构信息。详情页会根据 `slug` 自动生成，首页也会把第一项之外的项目加入更多项目列表，例如：

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
