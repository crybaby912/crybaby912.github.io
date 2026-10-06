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
├─ components/SiteHeader.astro   共享玻璃导航与动效开关
├─ data/projects.ts              项目数据与案例内容
├─ scripts/                      弹簧、展开、显影与页面交互
├─ styles/site.css               首页与详情页共享视觉系统
├─ styles/motion.css             玻璃表面、动效与无障碍降级
└─ pages/
   ├─ index.astro                作品集首页
   ├─ 404.astro                  GitHub Pages 自定义 404
   └─ projects/[slug].astro      项目详情页模板
public/
├─ licenses/design-systems.txt   动效来源与 MIT 许可
└─ projects/                     两个项目的真实截图与预览
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

## 动效来源与约束

动效改编自 [design-systems](https://github.com/ruiqichenbiec/design-systems) 的 Lens 弹簧、玻璃表面和 Overture 展开、显影、FLIP 换位规则。固定版本与完整 MIT 许可见 `public/licenses/design-systems.txt`。

页面使用原生 CSS、Web Animations API 和按需运行的弹簧计算，不引入整套 WebGL/WebGPU、音频或示例资源。玻璃效果是 CSS 透明、模糊与高光的近似表现，不是真实光学折射。截图保持完整，不做循环缩放。

导航提供“暂停动效”；系统开启减少动态效果时自动停用。离屏装饰停止运行，禁用 JavaScript 时正文与项目链接仍可阅读。

## 发布

仓库推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署到 GitHub Pages。站点地址配置在 `astro.config.mjs`：

```js
site: 'https://crybaby912.github.io'
```
