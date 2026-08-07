export type ProjectMetric = {
  value: string;
  label: string;
  note: string;
};

export type ProjectWorkflowStep = {
  step: string;
  title: string;
  body: string;
  artifact: string;
};

export type ProjectArchitectureLayer = {
  layer: string;
  title: string;
  body: string;
  tags: string[];
};

export type ProjectDecision = {
  title: string;
  problem: string;
  decision: string;
  result: string;
};

export type ProjectIncident = {
  title: string;
  symptom: string;
  rootCause: string;
  fix: string;
  lesson: string;
};

export type ProjectEvidence = {
  value: string;
  label: string;
  detail: string;
};

export type ProjectScreenshot = {
  src: string;
  title: string;
  caption: string;
  group: 'user' | 'admin' | 'platform';
  kind: 'mobile' | 'desktop';
};

export type ProjectScreenshotSection = {
  key: 'mobile' | 'desktop';
  eyebrow: string;
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  year: string;
  status: string;
  description: string;
  summary: string;
  tech: string[];
  cover: string;
  coverFit: 'contain' | 'cover';
  cardSignal?: string;
  heroPreview?: string;
  heroPreviewFit?: 'contain' | 'cover';
  screenshots?: ProjectScreenshot[];
  screenshotIntro?: string;
  screenshotSections?: ProjectScreenshotSection[];
  github: string;
  role: string;
  platforms: string[];
  metrics: ProjectMetric[];
  problem: {
    title: string;
    body: string;
    constraints: string[];
  };
  workflow: ProjectWorkflowStep[];
  architecture: ProjectArchitectureLayer[];
  decisions: ProjectDecision[];
  incidents: ProjectIncident[];
  evidence: ProjectEvidence[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: 'food-take-out',
    title: '食汇外卖',
    category: '业务系统',
    eyebrow: '全栈业务系统',
    year: '2026',
    status: '已上线 / 持续迭代',
    description: '面向校园餐饮场景的全栈外卖系统，覆盖点餐、订单、配送、商家经营和 AI 客服。',
    summary: '这不是一个只展示菜品的页面，而是一条从用户点餐延伸到商家经营的完整业务链。订单状态、库存、优惠、配送和 AI 都必须在同一个业务事实下工作。',
    tech: ['Spring Boot', 'Vue / uni-app', 'MySQL', 'Redis', 'Spring AI', 'WebSocket'],
    cover: '/projects/food-take-out/food-cover-collage.png',
    coverFit: 'cover',
    cardSignal: '用户端 + 商家端业务链',
    heroPreview: '/projects/food-take-out/food-hero-preview.png',
    heroPreviewFit: 'cover',
    screenshots: [
      { src: '/projects/food-take-out/food-dashboard.png', title: '\u5546\u5bb6\u5de5\u4f5c\u53f0', caption: '\u8ba2\u5355\u3001\u7ecf\u8425\u6570\u636e\u4e0e\u83dc\u54c1\u72b6\u6001\u96c6\u4e2d\u5728\u540c\u4e00\u4e2a\u5de5\u4f5c\u53f0\u3002', group: 'admin', kind: 'desktop' },
      { src: '/projects/food-take-out/food-order-mobile.png', title: '\u70b9\u9910\u9996\u9875', caption: '\u5148\u786e\u8ba4\u5e97\u94fa\u3001\u914d\u9001\u4fe1\u606f\u548c\u4f18\u60e0\uff0c\u518d\u8fdb\u5165\u70b9\u9910\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-menu-mobile.png', title: '\u70ed\u95e8\u83dc\u54c1', caption: '\u63a8\u8350\u83dc\u3001\u70ed\u95e8\u83dc\u548c\u8bc4\u4ef7\u6cbf\u7740\u540c\u4e00\u6761\u6d4f\u89c8\u8def\u5f84\u5c55\u5f00\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-flash-sale-mobile.png', title: '\u9650\u65f6\u79d2\u6740', caption: '\u4ef7\u683c\u3001\u5e93\u5b58\u548c\u4e0b\u5355\u52a8\u4f5c\u5171\u540c\u66b4\u9732\u9ad8\u5e76\u53d1\u94fe\u8def\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-coupons-mobile.png', title: '\u4f18\u60e0\u5238\u4e2d\u5fc3', caption: '\u53ef\u9886\u53d6\u4e0e\u5df2\u9886\u53d6\u72b6\u6001\u6e05\u6670\u5206\u5f00\uff0c\u907f\u514d\u91cd\u590d\u4f7f\u7528\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-address-mobile.png', title: '\u6536\u8d27\u5730\u5740', caption: '\u8054\u7cfb\u4eba\u3001\u5730\u5740\u3001\u914d\u9001\u5b9a\u4f4d\u548c\u6807\u7b7e\u96c6\u4e2d\u5728\u4e00\u6761\u8868\u5355\u6d41\u7a0b\u4e2d\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-location-mobile.png', title: '\u5730\u56fe\u9009\u70b9', caption: '\u641c\u7d22\u3001\u5730\u56fe\u5b9a\u4f4d\u548c\u9644\u8fd1\u5730\u70b9\u786e\u8ba4\u5f62\u6210\u8fde\u7eed\u64cd\u4f5c\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-reviews-mobile.png', title: '\u5168\u7ad9\u8bc4\u4ef7', caption: '\u8bc4\u5206\u5206\u5e03\u4e0e\u83dc\u54c1\u53cd\u9988\u5171\u540c\u7ec4\u6210\u5b8c\u6574\u7684\u8bc4\u4ef7\u9875\u9762\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-product-review-mobile.png', title: '\u5546\u54c1\u8bc4\u4ef7', caption: '\u661f\u7ea7\u3001\u6587\u5b57\u8bc4\u4ef7\u548c AI \u8f85\u52a9\u6c47\u805a\u5230\u63d0\u4ea4\u524d\u4e00\u6b65\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-messages-mobile.png', title: '\u6d88\u606f\u4e2d\u5fc3', caption: '\u4eba\u5de5\u5ba2\u670d\u3001AI \u5ba2\u670d\u4e0e\u7cfb\u7edf\u901a\u77e5\u5206\u522b\u62e5\u6709\u6e05\u6670\u5165\u53e3\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-service-mobile.png', title: '\u4eba\u5de5\u5ba2\u670d', caption: '\u4f1a\u8bdd\u9875\u540c\u65f6\u4fdd\u7559\u8425\u4e1a\u65f6\u95f4\u3001\u8ba2\u5355\u72b6\u6001\u548c\u56de\u590d\u53cd\u9988\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-ai-mobile.png', title: 'AI \u667a\u80fd\u5ba2\u670d', caption: '\u53d7\u63a7\u52a8\u4f5c\u628a\u63a8\u8350\u4e0e\u8bc4\u4ef7\u8fde\u63a5\u5230\u771f\u5b9e\u4e1a\u52a1\u6570\u636e\u3002', group: 'user', kind: 'mobile' },
      { src: '/projects/food-take-out/food-flash-sale-admin.png', title: '\u79d2\u6740\u6d3b\u52a8\u7ba1\u7406', caption: '\u5546\u5bb6\u7aef\u96c6\u4e2d\u63a7\u5236\u5546\u54c1\u3001\u5e93\u5b58\u548c\u6d3b\u52a8\u65f6\u95f4\u3002', group: 'admin', kind: 'desktop' },
      { src: '/projects/food-take-out/food-coupons-admin.png', title: '\u4f18\u60e0\u5238\u7ba1\u7406', caption: '\u53d1\u884c\u91cf\u3001\u53ef\u9886\u53d6\u5e93\u5b58\u3001\u6709\u6548\u671f\u548c\u53d1\u5e03\u72b6\u6001\u653e\u5728\u4e00\u8d77\u3002', group: 'admin', kind: 'desktop' },
      { src: '/projects/food-take-out/food-reviews-admin.png', title: '\u8bc4\u4ef7\u7ba1\u7406', caption: '\u5546\u5bb6\u6309\u72b6\u6001\u7b5b\u9009\u8bc4\u4ef7\uff0c\u5e76\u53ef\u7528 AI \u8f85\u52a9\u6574\u7406\u56de\u590d\u3002', group: 'admin', kind: 'desktop' },
      { src: '/projects/food-take-out/food-service-admin.png', title: '\u4eba\u5de5\u5ba2\u670d\u5de5\u4f5c\u53f0', caption: '\u4f1a\u8bdd\u5217\u8868\u3001\u8ba2\u5355\u4e0a\u4e0b\u6587\u548c\u56de\u590d\u52a8\u4f5c\u5728\u540c\u4e00\u4e2a\u5de5\u4f5c\u53f0\u5b8c\u6210\u3002', group: 'admin', kind: 'desktop' },
    ],
    github: 'https://github.com/crybaby912/food-take-out',
    role: '独立设计与全栈开发',
    platforms: ['微信小程序用户端', 'Vue 商家管理端', 'Spring Boot 服务端', 'AI 智能客服'],
    metrics: [
      { value: '5,272', label: '秒杀验收请求', note: '单实例本地验收，业务成功率 100%' },
      { value: '34 ms', label: '秒杀 p95', note: 'JMeter 20 线程 / 60 秒' },
      { value: '66', label: '回归用例基线', note: '49 个执行通过，17 个基础设施门控' },
      { value: '3', label: '交互端', note: '小程序 / 管理端 / 服务端 API' },
    ],
    problem: {
      title: '外卖系统的难点不是列表，而是状态一致性。',
      body: '用户看到的价格、商家看到的订单、库存剩余和 AI 给出的答案，必须来自同一套业务状态。任何一处只在前端“看起来成功”，都会在支付、取消或高并发场景里暴露。',
      constraints: [
        '订单状态需要在用户端、商家端和服务端之间收敛。',
        '限流只能削峰，库存正确性必须由原子扣减和唯一约束兜底。',
        'DeepSeek 或地图服务异常时，基础点餐和订单链路不能被拖垮。',
      ],
    },
    workflow: [
      { step: '01', title: '先建模业务状态', body: '把点餐、堂食、支付、接单、制作、配送、取消和取餐拆成明确状态，订单保存下单时的费用与收货快照。', artifact: '订单状态机 / 领域快照' },
      { step: '02', title: '再跑通多端链路', body: '小程序负责用户动作，商家端负责经营与履约，Spring Boot 统一校验归属、状态和幂等，WebSocket 推送新订单与催单。', artifact: 'uni-app + Vue + REST / WebSocket' },
      { step: '03', title: '把高并发边界拆开', body: 'Guava 做单实例边缘保护，Redis Lua 做跨实例限流，数据库原子 SQL 与唯一约束负责最终库存正确性。', artifact: 'Redis Lua + MySQL 原子扣减' },
      { step: '04', title: '让 AI 只做擅长的事', body: '客服读取真实菜单、订单、营业状态和 FAQ；加购、评价和转人工使用受控动作协议，外部模型不可用时走本地 FAQ、推荐和业务兜底。', artifact: 'SSE / RAG / 本地 fallback' },
    ],
    architecture: [
      { layer: '01 / 用户体验', title: '用户与商家界面', body: '小程序承载点餐、订单和 AI 对话，Vue 管理端承载菜品、库存、优惠、评价和经营报表。', tags: ['uni-app', 'Vue 2', 'Element UI'] },
      { layer: '02 / 业务接口', title: '统一业务入口', body: 'Spring Boot 按用户归属和当前状态校验请求，支付、取消、评价和优惠券核销都在服务层重新确认。', tags: ['Spring Boot', 'JWT', 'MyBatis'] },
      { layer: '03 / 数据一致性', title: '库存与订单事实', body: 'MySQL 保存订单快照和状态，Redis 提供限流、缓存与秒杀窗口；限流失效时也不改变库存正确性。', tags: ['MySQL 8', 'Redis DB10', 'Lua'] },
      { layer: '04 / 智能能力', title: '可控的 AI 边界', body: 'Spring AI 接入 DeepSeek 与 Embedding，SSE 输出自然语言；动作协议和本地降级让 AI 不越权、不阻断基础业务。', tags: ['Spring AI', 'DeepSeek', 'SSE'] },
    ],
    decisions: [
      { title: '限流不承担库存正确性', problem: '把“请求少一点”当成“库存不会超卖”，多实例或网络抖动时仍然会失效。', decision: 'Redis Lua 只做共享限流，数据库用原子扣减、活动约束和唯一索引做最终裁决。', result: '秒杀验收 5,272 次请求全部通过，库存边界不会被单一中间件绑架。' },
      { title: 'AI 输出必须落在动作边界内', problem: '模型可以回答“已帮你加购”，但它实际上没有权限改变购物车。', decision: '把加购、推荐、评价和转人工拆成受控动作，模型只返回意图和参数，真正执行由客户端与服务端完成。', result: 'AI 可以连接真实业务，又不会把模型幻觉当成订单事实。' },
      { title: '订单保存业务快照', problem: '菜品价格、地址和配送配置会变化，历史订单不能跟着当前配置漂移。', decision: '下单时保存收货人、费用、菜品和优惠快照，详情页只展示订单自己的事实。', result: '支付、取消、评价和售后都围绕不可变订单上下文工作。' },
    ],
    incidents: [
      { title: '支付页把临时前端状态当成订单账本', symptom: '秒杀下单后支付页金额为 0、商品名回退成店铺名、订单号显示 -；普通下单链路却看起来正常。', rootCause: '秒杀接口只返回 `orderId` 供轮询，支付页却优先读取普通结算链路写入的 Vuex `orderData`；同时前端使用 `orderNumber`，后端订单详情契约字段是 `number`。', fix: '进入支付页统一按 `orderId` 拉取订单详情，在页面边界归一化 `amount / orderAmount`、明细商品和 `number / orderNumber`，并用秒杀端到端脚本 20 / 20 验证展示字段。', lesson: '订单详情接口才是支付页的事实来源；前端状态只能做降级缓存，不能承担跨入口的订单账本职责。' },
      { title: 'Mock 支付提示成功，订单实际上仍未支付', symptom: '用户看到支付成功并跳转成功页，但数据库订单仍是未支付状态，后续商家端无法按已支付订单履约。', rootCause: '支付请求把不存在的 `orderNumber` 传给后端，`paySuccess(undefined)` 直接返回；Mock 支付又返回成功，掩盖了服务端状态没有更新的问题。', fix: '支付参数改用订单详情中的真实 `number`，失败路径增加明确提示；回归验证秒杀和普通订单的 `payStatus=1`、`status=2`。', lesson: '支付成功页必须建立在服务端状态确认之上，Mock 只能模拟外部支付，不能跳过业务状态断言。' },
      { title: 'SSE 中文回复变成问号或带 data: 前缀', symptom: 'AI 客服流式输出在浏览器里出现乱码，部分消息还把协议前缀直接展示给用户。', rootCause: '默认 Writer 的编码和手写 SSE 分帧没有在边界处固定，前端又把传输层内容当成业务文本。', fix: '后端改为 UTF-8 OutputStream，明确事件分帧；前端只解析 data 字段并为流式结束保留历史。', lesson: '流式协议的字符集、分帧和 UI 解析必须一起验证，不能只看最终字符串。' },
      { title: '重建后 Redis 缓存反序列化导致首页 500', symptom: '后端重建后菜品接口突然 500，首页看起来像是前端白屏。', rootCause: 'Redis DB10 中仍保留旧版本 JDK 序列化的 `DishVO`，类结构变化后触发 `InvalidClassException`。', fix: '定位实际 Redis database，清理旧缓存并回源重建；同时把缓存兼容性和部署后的清理动作写入运行手册。', lesson: '缓存不是“可有可无”的内存，版本变更必须考虑序列化协议和失效策略。' },
      { title: '限流成功仍不能证明库存不会超卖', symptom: '秒杀请求被限流后看起来很安全，但多实例、重复提交或取消订单恢复库存时，单靠限流仍可能产生超卖或重复恢复。', rootCause: '把“请求少一点”和“库存状态正确”混成了一个问题；边缘限流不具备跨流程事务语义。', fix: 'Redis Lua 负责共享窗口限流，数据库原子扣减和唯一约束负责最终正确性；取消与超时恢复库存使用幂等状态校验，并用真实 Redis / MySQL 集成测试验证。', lesson: '面试中要把削峰、防重和库存正确性分开解释，任何一个中间件都不应该被当成完整一致性方案。' },
    ],
    evidence: [
      { value: '100%', label: '秒杀业务成功率', detail: '5,272 / 5,272 请求通过 code=1 断言。' },
      { value: '49 / 49', label: '默认回归通过', detail: '另外 17 个测试因外部基础设施被显式门控。' },
      { value: 'Mock', label: '当前支付模式', detail: '开发环境使用 Mock 支付，未把真实微信支付写成已完成能力。' },
    ],
    nextSteps: ['接入真实微信支付、回调验签和退款闭环。', '将当前单机秒杀压测迁移到隔离多实例环境，补齐容量边界。', '继续把 FAQ 检索从本地向量升级为可观测的混合检索。'],
  },
  {
    slug: 'ai-agent-workflow',
    title: 'AI Agent Workflow',
    category: 'AI 系统',
    eyebrow: '可恢复 Agent 平台',
    year: '2026',
    status: '演示可用 / 持续开发',
    description: '基于 Spring Boot 与 React 的可视化、可持久化、可恢复 AI 工作流与 Agent 编排平台。',
    summary: 'AI Agent Workflow 把一次模型调用扩展成可治理的执行系统：用户在浏览器画布上组合输入、LLM、Agent、Supervisor、HTTP 和 TTS 节点，后端将工作流固化为任务，再用 Agent Runtime、Tool/Skill Registry 和事件回放处理失败、恢复与协作。',
    tech: ['Java 17 / Spring Boot', 'React / TypeScript', 'React Flow', 'PostgreSQL / Flyway', 'Redis / Docker', 'SSE / Prometheus'],
    cover: '/projects/ai-agent-workflow/agent-workflow-02-execution-timeline.png',
    coverFit: 'contain',
    cardSignal: 'Agent / Supervisor / 可恢复执行',
    github: 'https://github.com/crybaby912/ai-agent-workflow',
    role: '独立设计与全栈开发',
    platforms: ['React 工作流工作台', 'Spring Boot 执行 API', 'PostgreSQL / Redis 数据层', 'FastAPI TTS 微服务', 'Prometheus / Grafana 观测栈'],
    metrics: [
      { value: '50 VU', label: '普通 DAG 压测并发', note: '10 / 25 / 50 VU 门槛通过，固定延迟 Mock LLM' },
      { value: '101 ms', label: '创建任务 p95', note: '50 VU / 30 秒，HTTP 失败率 0%' },
      { value: '795 ms', label: '完成任务 p95', note: '普通 DAG 任务完成，不替代 Agent Runtime 性能结论' },
      { value: '191/191', label: '后端测试通过', note: '52 个 Suite，无失败、错误或跳过' },
    ],
    problem: {
      title: 'AI 应用真正难的是执行边界，不是画布。',
      body: '一次同步模型调用只需要返回结果；进入多步骤执行后，任务排队、节点失败、客户端断开、重复认领、Tool 副作用、模型切换、密钥隔离和事件回放都会成为系统问题。页面上的“运行成功”必须能在数据库、日志和指标里被复核。',
      constraints: [
        '任务、节点、Agent Step、Supervisor child Run 和 Artifact 在重启后仍要可追踪。',
        'Agent Tool 调用必须通过项目权限、固定版本、Schema、预算、超时和幂等校验。',
        'Provider 失败、SSE 断线、取消、重试和重跑不能造成重复副作用或卡在 RUNNING。',
      ],
    },
    workflow: [
      { step: '01', title: '先把意图画成可校验 DAG', body: 'React Flow 节点注册表提供输入、LLM、Agent、Supervisor、HTTP 和 TTS 节点的配置与校验，保存的工作流只引用 Provider 和版本，不把密钥写进画布。', artifact: 'React Flow / Node Registry' },
      { step: '02', title: '再把执行变成持久化任务', body: '创建 execution 先写入 PENDING，Worker 通过 claim/lease 认领为 RUNNING；任务、节点状态、事件和成功输出由 PostgreSQL 持久化，支持取消、重试和重跑。', artifact: 'PostgreSQL / Flyway / Worker' },
      { step: '03', title: '让 Agent 在边界内循环', body: 'Agent 按 plan -> tool call -> observe -> verify 执行，Tool Registry 校验 Agent/Skill 绑定、项目权限、Schema、预算、超时和幂等键；上下文超限时保存摘要 checkpoint。', artifact: 'Agent Runtime / Tool Registry' },
      { step: '04', title: '用 Supervisor 组织可复核协作', body: '固定 Researcher、Writer、Reviewer 计划通过父子 Run、依赖调度、Artifact 版本和来源追踪完成协作；SSE、Trace、Prometheus 与分层 E2E 共同留下交付证据。', artifact: 'Supervisor / SSE / E2E / Metrics' },
    ],
    architecture: [
      { layer: '01 / 工作台体验', title: '从画布到运行检视', body: '节点面板、React Flow 画布、配置检视器、Agent Center 和运行时间线共享注册表与执行上下文，用户能从配置一路看到节点、Tool 和子任务状态。', tags: ['React 18', 'TypeScript', 'React Flow'] },
      { layer: '02 / 执行运行时', title: 'DAG 与 Agent Runtime', body: 'WorkflowEngine 负责 DAG 依赖、并行、取消和 SSE；AgentExecutor 复用持久化任务链路，执行受预算和工具白名单约束的多轮循环。', tags: ['Spring Boot', 'DAG', 'Agent Loop'] },
      { layer: '03 / 数据与治理', title: '可恢复的协作边界', body: 'PostgreSQL 保存工作流版本、任务、事件、Agent、Tool、Skill 和 Artifact，Flyway 管理迁移；Redis 提供配额与登录保护，Workspace/Project RBAC 隔离资源。', tags: ['PostgreSQL', 'Flyway', 'RBAC'] },
      { layer: '04 / 外部能力', title: 'Provider 与出站安全', body: 'Provider 链处理重试和 fallback，AES-256-GCM 加密密钥；HTTP / LLM 出站地址经过白名单与私网拒绝策略，Prometheus/Grafana 记录可观测信号。', tags: ['Spring AI', 'AES-256-GCM', 'Prometheus'] },
    ],
    decisions: [
      { title: '把 Agent 做成 DAG 节点', problem: '如果 Agent 另起一套任务状态机，取消、恢复、SSE 和项目权限会出现两套语义。', decision: '将 Agent 作为现有工作流节点，由 WorkflowEngine 和持久化任务承载外部生命周期，Agent Runtime 只负责受限的内部循环。', result: 'Agent 可以复用任务租约、取消、恢复、事件回放和权限边界，减少跨服务状态不一致。' },
      { title: 'Tool 先过 Registry，再进入执行器', problem: '模型返回工具名不代表它拥有调用权限，直接执行会绕过项目边界、Schema 和副作用控制。', decision: '以项目绑定、Agent/Skill 白名单、固定版本、JSON Schema、预算、超时和幂等键组成分层校验，失败返回明确错误码。', result: 'Tool 调用可审计、可重放，成功副作用不会因重试被重复执行。' },
      { title: 'Supervisor 先收敛场景，再扩展自由度', problem: '任意动态多 Agent 编排很容易失去预算、依赖、来源和失败语义。', decision: '当前只支持固定 Researcher、Writer、Reviewer 技术报告计划，父级预算、child Run、Artifact 版本和来源追踪由服务端约束。', result: '协作链路可以稳定演示和验证，同时明确不把固定场景包装成通用动态多 Agent。' },
      { title: '把评测证据分层解释', problem: 'Mock Gateway、真实 Provider 样本和普通 DAG 压测回答的是不同问题，混在一起会夸大质量或容量结论。', decision: '分别归档 Runtime Mock API E2E、真实 Provider API E2E、浏览器 E2E 和普通 DAG k6 结果。', result: '每个数字都带有测试模式、样本范围和不能证明的边界。' },
    ],
    incidents: [
      { title: '保存工作流执行时 Tool 落到了错误项目', symptom: '浏览器里配置的 Agent 能保存，但异步执行时 Tool 绑定或 Provider 解析到了默认项目，导致受控工具被拒绝。', rootCause: '执行入口只拿到了工作流 JSON，没有把保存工作流所属的项目上下文传入引擎。', fix: '服务端加载保存工作流时注入不可由客户端写入的执行项目上下文，WorkflowEngine 优先使用服务端 MDC 项目 ID，并用 API Mock E2E 和浏览器 E2E 验证。', lesson: '异步任务必须从服务端恢复租户上下文，不能信任画布 JSON 里的项目字段。' },
      { title: '首节点失败后任务卡住 5 分钟', symptom: 'DAG 首节点或并行分支失败时，下游不会继续执行，但执行线程仍等待整个 latch 超时。', rootCause: '失败和取消路径没有与成功路径一样完成节点终态收敛，未提交的下游也没有得到明确的跳过状态。', fix: '把节点完成计数和取消处理统一放入 finally，补充首节点失败、并行分支失败和客户端取消的秒级回归测试。', lesson: '并发执行最难的不是启动线程，而是让所有退出路径都能收敛到同一个终态。' },
      { title: 'HTTP 节点可访问内网地址', symptom: '最初的 HTTP Executor 接受任意 URL，理论上可以访问容器网段、回环地址或云元数据。', rootCause: '只校验 URL 格式不等于校验目标地址；DNS 解析和实际连接之间还存在重绑定窗口。', fix: '增加出站地址策略，限制协议、主机名和解析结果，拒绝私网/回环/链路本地/保留地址，并让 HTTP 客户端使用已校验的解析结果。', lesson: 'SSRF 防护必须在“解析目标”和“建立连接”两处形成同一条约束。' },
      { title: '浏览器测试在错误 Tab 查找 Agent 配置', symptom: '测试等待 Agent 选择器时超时，但真实界面已经可以配置 Agent；执行时间线位于运行检视页。', rootCause: '测试把配置页和运行检视页当成了同一个交互状态，没有按真实用户路径切换 Tab。', fix: '测试先进入配置页完成 Agent 设置，再切换到运行检视页断言时间线、child Run、Artifact 和来源追踪；当前 Agent 浏览器用例 2/2 通过。', lesson: '浏览器 E2E 要验证用户路径和状态边界，不能只按组件名称寻找元素。' },
      { title: '批量写事件反而让 p95 变差', symptom: '为了减少数据库写入尝试跨任务事件合批，50 VU 下完成 p95 进一步恶化。', rootCause: '批处理线程增加排队和锁竞争，事件延迟抵消了单次写入减少的收益。', fix: '撤回合批实验，保留任务 ID 投影、实例内派发去重和终态条件更新，并用同一隔离环境重新压测。', lesson: '性能优化要以可重复的 p95 和资源指标为准，不能因为“写得更少”就假设系统更快。' },
    ],
    evidence: [
      { value: '191/191', label: '后端回归通过', detail: '52 个 Suite 覆盖 DAG、持久化、权限、Agent、Supervisor、Provider 和安全边界。' },
      { value: '24/24', label: 'Runtime Mock E2E', detail: '期望状态全部匹配，包含 Tool、预算、取消、恢复和 Supervisor 协议。' },
      { value: '2/2', label: 'Agent 浏览器 E2E', detail: '从 Agent 配置到执行时间线、child Run、Artifact 和来源追踪的主路径。' },
      { value: '6/6', label: '真实 Provider 样本', detail: '单次低额度 API E2E，费用 0.007359 CNY，不代表生产完成率或 SLA。' },
    ],
    screenshotIntro: '这里选取从登录、画布编排到 Agent 治理、Supervisor 协作、任务回放与只读分享的关键界面，点击任意界面可以查看完整截图。',
    screenshotSections: [
      { key: 'desktop', eyebrow: '01 / 平台工作台', title: '从画布到治理，再到执行回放', body: '界面按真实使用路径排列：先配置工作区和 Provider，再在画布组合 Agent/Supervisor，最后在运行检视和分享页复核结果。' },
    ],
    screenshots: [
      { src: '/projects/ai-agent-workflow/agent-workflow-01-canvas.png', title: '工作流可视化编排', caption: '节点注册表提供输入、LLM、Agent、Supervisor 与工具节点，画布只保存配置引用，不保存密钥。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-02-execution-timeline.png', title: 'Agent 与 Supervisor 执行时间线', caption: '运行检视展示节点耗时、Agent 步骤、Tool 调用、Token、成本与终态，SSE 事件沿同一条执行链回传。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-demo.gif', title: '90 秒浏览器演示', caption: '隔离 Compose 环境中的真实浏览器演示，串起 Agent 管理、Tool 调用摘要、Supervisor 执行和来源追踪。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-03-agent-center.png', title: 'Agent 管理中心', caption: '项目内创建 Agent，固定 System Prompt、Provider 引用和 Skill 版本，并查看当前状态与预算摘要。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-04-supervisor-plan.png', title: 'Supervisor 协作计划配置', caption: '固定 Researcher、Writer、Reviewer 计划显式配置依赖、Tool、预算和截止时间，避免动态扩大协作范围。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-05-tool-registry.png', title: 'Tool 注册中心', caption: '工具版本、描述、权限范围、输入 Schema 与项目白名单在同一个注册中心管理。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-06-skill-registry.png', title: 'Skill 版本管理', caption: 'Skill 以发布版本绑定 Prompt、Tool 和预算策略，执行时不会隐式切换到最新版本。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-07-provider-prompt.png', title: 'Provider 密钥与 Prompt 版本', caption: 'Provider Secret 脱敏管理与 Prompt 模板版本共同构成可复现的模型配置边界。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-08-agent-policy.png', title: 'Agent 节点预算与白名单', caption: 'Agent 节点显式配置 Agent 引用、Tool 白名单、最大轮数、Token、成本和超时预算。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-09-tool-audit.png', title: 'Agent 工具调用审计', caption: '审计视图保留 Tool 调用状态、幂等结果、Token 与延迟摘要，敏感正文不直接展示。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-10-source-trace.png', title: 'Supervisor 来源追踪', caption: 'Supervisor Artifact 按来源和版本追踪 Researcher、Writer、Reviewer 的结果链。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-11-execution-replay.png', title: '持久化任务中心与事件回放', caption: '任务中心查询持久化任务，按事件序号回放 SSE，并支持取消、重试、重跑和节点状态复核。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-12-workspace-permissions.png', title: '工作区项目与成员权限', caption: 'Workspace 与 Project 分层管理 Owner、Editor、Viewer，Provider Secret、工作流和执行历史按权限隔离。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-13-share-links.png', title: '只读分享链接管理', caption: 'Owner 创建、查看和撤销只读分享链接，分享结果不开放执行权限，也不暴露密钥和成员信息。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-14-public-snapshot.png', title: '公开只读工作流快照', caption: '公开页面只展示脱敏的工作流结构和预生成结果，让演示可以脱离登录工作台被复核。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-15-login.png', title: '登录页面', caption: '无状态 JWT 登录入口，进入后按用户恢复所属 Workspace 与 Project 上下文。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-16-register.png', title: '注册页面', caption: '注册后进入默认协作空间，再配置 Provider、Prompt、Agent 和工作流。', group: 'platform', kind: 'desktop' },
    ],
    nextSteps: ['补齐多实例 Worker 故障接管演练，并为 Agent Runtime 单独建立 10 / 25 VU 性能证据。', '补齐 Agent Run、迭代次数、Tool 延迟、预算终止和恢复结果的专属指标与 Grafana 面板。', '继续收敛原生 tool_calls、人工审批和可审计写 Tool 等边界，保持固定 Supervisor 与动态多 Agent 的能力区分。'],
  },
];

export const featuredProject = projects[0];
