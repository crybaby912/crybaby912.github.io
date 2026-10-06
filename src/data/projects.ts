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
  poster?: string;
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
    eyebrow: '可治理的 Agent 执行平台',
    year: '2026',
    status: '演示可用 / 持续开发',
    description: '基于 Spring Boot 与 React 的可视化、可持久化、可恢复 AI 工作流与 Agent 编排平台，持续补齐会话安全、资源边界与运行观测。',
    summary: 'AI Agent Workflow 将一次模型调用拆成可治理的执行链路：用户在 React 画布中组合输入、LLM、Agent、Supervisor、HTTP 和 TTS 节点；后端以 DAG 与持久化任务承载取消、重试、恢复和事件回放，再用 Tool/Skill、Provider/Prompt、项目权限、预算与出站策略控制副作用。最新迭代补齐会话 Cookie、Agent 发布快照、事件分页、SSE 取消传播和跨服务 Trace。',
    tech: ['Java 17 / Spring Boot 3.5', 'React 18 / TypeScript', 'React Flow / Zustand', 'PostgreSQL / Flyway', 'Redis / Docker', 'SSE / Prometheus / OTLP'],
    cover: '/projects/ai-agent-workflow/agent-workflow-02-execution-timeline.png',
    coverFit: 'contain',
    cardSignal: 'Agent / Supervisor / 可恢复执行',
    github: 'https://github.com/crybaby912/ai-agent-workflow',
    role: '独立设计与全栈开发',
    platforms: ['React / Vite 工作流工作台', 'Spring Boot API / Worker', 'PostgreSQL / Redis 数据层', 'FastAPI TTS 服务', 'Prometheus / Grafana / OTLP 观测栈'],
    metrics: [
      { value: '50 VU', label: '普通 DAG 压测', note: 'Create p95 195.54 ms / Completion p95 1303.90 ms；HTTP 失败率 0.21%，整体 PASS' },
      { value: '100%', label: '终态与幂等收敛', note: '终态收敛、取消成功、幂等回放和 SSE 完成率均为 100%，重复执行 ID 为 0' },
      { value: '278/278', label: '后端回归通过', note: 'Java 17 verify：68 个 Suite，失败、错误和跳过均为 0（2026-09-16）' },
      { value: 'SLO + OTLP', label: '跨服务运行观测', note: '任务、节点、租约、事件与 Agent 预算指标接入 Prometheus/Grafana 和 OTLP' },
    ],
    problem: {
      title: 'AI 应用真正难的是执行边界，不是画布。',
      body: '单次模型调用只要返回文本；进入多步骤执行后，任务是否可恢复、旧 Worker 是否会覆盖新状态、客户端断开是否还能取消上游调用、配置版本是否漂移、工具和出站资源是否越权，都必须在任务、事件、日志和指标中被复核。',
      constraints: [
        '工作流、Agent 发布版本、执行任务、节点/Agent Step、Supervisor child Run 和 Artifact 在重启与重试后仍可追踪。',
        'Tool/Skill、Provider、文件、HTTP 与 TTS 都要在项目权限、固定版本、Schema、预算、超时和资源配额内运行。',
        '取消、SSE 断线、租约接管、事件持久化失败与过期清理都要有明确终态、游标或告警，不能把异常留在 RUNNING。',
      ],
    },
    workflow: [
      { step: '01', title: '把画布收敛成可发布版本', body: 'React Flow 节点注册表提供输入、LLM、Agent、Supervisor、HTTP 和 TTS 的配置与校验；服务端检查节点、边、DAG 和项目边界，工作流只引用 Provider、Prompt 与能力版本。', artifact: 'React Flow / Registry / Version' },
      { step: '02', title: '让长任务脱离请求生命周期', body: '持久化任务先进入 PENDING，Worker 通过带 owner 与 attempt 的租约认领；超时、取消、重试、重跑、事件游标、持久化重试和死信回放共同收敛执行状态。', artifact: 'PostgreSQL / Lease / Replay' },
      { step: '03', title: '让 Agent 在执行契约内循环', body: 'Agent 以结构化决策执行 plan -> tool call -> observe -> verify；发布快照、完整 name@version、项目白名单、JSON Schema、Token/成本/超时预算与有界并发共同限制运行范围。', artifact: 'Agent Runtime / Tool / Budget' },
      { step: '04', title: '把协作结果接到观测链路', body: '固定 Researcher、Writer、Reviewer 计划通过父子 Run、依赖调度、Artifact 版本和来源追踪完成协作；SSE 断开会取消上游，OTLP、Prometheus/Grafana 和分层 E2E 留下复核信号。', artifact: 'Supervisor / SSE / OTLP / SLO' },
    ],
    architecture: [
      { layer: '01 / 工作台与交互', title: '配置、执行和协作在同一工作台', body: 'React Flow 画布、Agent/Tool/Skill 管理、Provider/Prompt 管理和 Execution Center 共享项目上下文；SSE 事件流、游标回放以及 Modal/Sheet 焦点与 ARIA 语义让状态可见、可操作。', tags: ['React 18', 'TypeScript', 'SSE'] },
      { layer: '02 / DAG 与任务运行时', title: 'Worker 租约与可恢复执行', body: 'WorkflowEngine 负责依赖、并行、取消和超时；ExecutionTaskService 负责任务快照、租约 owner/attempt fencing、终态条件更新、事件持久化重试和死信回放。', tags: ['Spring Boot', 'PostgreSQL', 'Worker'] },
      { layer: '03 / Agent 与资源治理', title: '发布快照、Registry 与项目权限', body: 'Agent 发布校验生成不可变版本，运行时固定 Provider、Prompt、Skill 和 Tool 引用；Workspace/Project RBAC、白名单、Schema、预算和资源配额共同决定能力边界。', tags: ['Agent Runtime', 'Tool/Skill', 'RBAC'] },
      { layer: '04 / 出站服务与观测', title: '出站边界和跨服务信号', body: 'Provider fallback、HTTP/LLM 出站策略和 TTS 鉴权、大小与并发限制保护外部调用；Micrometer、Prometheus/Grafana SLO 告警与 OTLP Trace 串起 API、Worker 和 TTS。', tags: ['FastAPI TTS', 'OTLP', 'SLO'] },
    ],
    decisions: [
      { title: '把 Agent 做成 DAG 节点', problem: '如果 Agent 另起一套任务状态机，取消、恢复、SSE 和项目权限会出现两套语义。', decision: '将 Agent 作为现有工作流节点，由 WorkflowEngine 和持久化任务承载外部生命周期，Agent Runtime 只负责受限的内部循环。', result: 'Agent 可以复用任务租约、取消、恢复、事件回放和权限边界，减少跨服务状态不一致。' },
      { title: '发布快照，执行只读版本', problem: '管理界面可以继续修改 Agent、Prompt 或 Tool；如果执行直接读取可变定义，重试和历史任务可能悄悄改变语义。', decision: 'Agent 只有通过发布校验才能进入工作流；执行任务引用不可变 Agent definition version，Provider、Prompt 和 Skill 也使用明确版本。', result: '重试、回放和审计使用同一配置快照，配置变更不会让历史任务漂移。' },
      { title: '租约 fencing 与终态条件更新成对出现', problem: 'Worker 租约过期后，新实例可能接管任务；旧实例若仍能写节点、事件、用量或终态，就会覆盖新执行结果。', decision: '每次 claim 生成 owner 与递增 attempt，续租、节点、事件、用量、finish 和 cancel 都携带 fencing 条件，并用双 Worker 场景回归。', result: '故障接管不会放大旧 Worker 的迟到写入，任务状态和审计事件保持单一归属。' },
      { title: '事件按游标回放，断线就停止上游', problem: '一次性加载全部事件会放大长任务的内存和响应边界；SSE 断开后继续调用 Provider/TTS 还会浪费资源。', decision: 'REST/SSE 统一 after、limit、nextCursor 和回放窗口；发送失败立即传播取消信号，停止后续调度与上游流。', result: '事件消费有明确批次和断点，浏览器离开页面后外部调用能尽快收敛。' },
    ],
    incidents: [
      { title: 'Agent 配置变更让历史执行产生漂移风险', symptom: '管理界面修改或停用 Agent 后，旧工作流的重试若重新读取当前定义，可能使用不同的 Prompt、Tool 或预算。', rootCause: '运行任务没有强制引用已发布的不可变 Agent 版本，配置生命周期和执行生命周期耦合。', fix: '增加 Agent 发布校验与不可变版本快照，运行时固定引用并在执行中拒绝未发布或不完整的能力组合。', lesson: '可恢复任务必须同时保存业务输入和执行配置，不能只保存一份可变的 Agent ID。' },
      { title: '旧 Worker 在租约过期后仍可能写回状态', symptom: '实例故障或网络延迟触发租约接管后，旧 Worker 仍可能迟到写入节点、事件、用量或成功终态。', rootCause: '认领和完成只依赖任务状态与时间，没有把每次尝试的 owner/attempt 作为写入 fencing 条件。', fix: '所有租约、节点、事件、用量和终态更新统一携带 owner/attempt，并增加双 Worker 故障转移与拒绝旧写入的回归验证。', lesson: '分布式恢复的正确性不止是“有人接管”，还要证明旧执行者失去写权限。' },
      { title: 'SSE 断开后上游仍继续消耗资源', symptom: '浏览器离开执行页面后，Provider 或 TTS 调用仍可能继续，长任务取消延迟变长。', rootCause: '发送事件失败只记录日志，取消标志没有贯穿到外部调用和后续节点调度。', fix: 'SSE 断开立即传播取消信号，外部流使用可中断调用，WorkflowEngine 在调度前后检查取消状态，并补充断开回归测试。', lesson: '流式响应不是旁路通知；连接生命周期必须参与任务生命周期和资源回收。' },
      { title: '大任务事件回放缺少明确边界', symptom: '执行中心一次性读取历史事件，长任务重连时响应、内存和首屏状态都不可控。', rootCause: 'REST 查询、SSE 初始回放和前端状态更新没有共享游标与批次契约。', fix: '统一 after、limit、nextCursor 和回放窗口，前端增量合并事件；持久化失败进入可重放的死信记录。', lesson: '事件流要像数据接口一样定义分页、断点、过期和重放语义。' },
      { title: '取消与完成并发导致终态竞态', symptom: '用户取消与 Worker 完成几乎同时发生时，任务状态、取消指标和事件顺序可能出现不一致。', rootCause: '取消和完成路径没有共享同一套终态条件更新与重复提交保护。', fix: '使用条件更新收敛终态，取消传播覆盖 DAG/Agent/Supervisor/Tool，并通过 k6 结果观察终态收敛、取消成功、幂等回放和重复 ID。', lesson: '可靠性验证要覆盖竞争窗口，而不是只验证串行的成功路径。' },
    ],
    evidence: [
      { value: '278/278', label: '后端回归通过', detail: 'Java 17 下 68 个 Suite 全部通过，失败、错误和跳过均为 0；覆盖执行、权限、Agent、资源、安全与观测边界。' },
      { value: '24/24', label: 'Runtime Mock API E2E', detail: '期望状态全部匹配，覆盖 Tool、预算、取消、恢复和 Supervisor 协议；确定性 Mock 不代表真实 Provider 质量。' },
      { value: '2/2', label: 'Agent 浏览器 E2E', detail: '从 Agent 配置到 Tool 调用时间线、Supervisor child Run、Artifact 和来源追踪的主路径。' },
      { value: '50 VU', label: '普通 DAG k6', detail: '2026-09-16 隔离 Compose：HTTP 失败率 0.21%，终态/取消/幂等/SSE 均为 100%，固定 Mock LLM，不替代 Agent 或真实 Provider 压测。' },
      { value: '6/6', label: '真实 Provider 历史样本', detail: '2026-08-07 单次低额度 API E2E，费用 0.007359 CNY；仅证明当时指定提交与配置下的有限链路，不代表当前完成率或 SLA。' },
    ],
    screenshotIntro: '这里选取从登录、画布编排到 Agent/Tool/Skill 管理、Provider/Prompt 治理、执行事件回放与只读分享的关键界面。截图用于展示产品链路；性能、权限与观测结论以仓库测试和报告为准。',
    screenshotSections: [
      { key: 'desktop', eyebrow: '01 / 平台工作台', title: '从画布配置到执行证据', body: '当前工作台路径是：先配置 Provider/Prompt 与 Agent 能力，再绑定工作流，随后在任务中心通过 SSE 事件、终态和 Artifact 回看结果。' },
    ],
    screenshots: [
      { src: '/projects/ai-agent-workflow/agent-workflow-01-canvas.png', title: '工作流可视化编排', caption: '节点注册表提供输入、LLM、Agent、Supervisor 与工具节点，画布只保存配置引用，不保存密钥。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-02-execution-timeline.png', title: 'Agent 与 Supervisor 执行时间线', caption: '运行检视展示节点耗时、Agent 步骤、Tool 调用、Token、成本与终态，SSE 事件沿同一条执行链回传。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-demo.gif', poster: '/projects/ai-agent-workflow/agent-workflow-demo-poster.png', title: '90 秒浏览器演示', caption: '隔离 Compose 环境中的真实浏览器演示，串起 Agent 管理、Tool 调用摘要、Supervisor 执行和来源追踪。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-03-agent-center.png', title: 'Agent 管理中心', caption: '项目内管理 Agent、Tool/Skill 绑定、Provider 引用和预算边界；发布快照让执行使用明确版本。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-04-supervisor-plan.png', title: 'Supervisor 协作计划配置', caption: '固定 Researcher、Writer、Reviewer 计划显式配置依赖、Tool、预算和截止时间，避免动态扩大协作范围。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-05-tool-registry.png', title: 'Tool 注册中心', caption: '工具版本、描述、权限范围、输入 Schema 与项目白名单在同一个注册中心管理。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-06-skill-registry.png', title: 'Skill 版本管理', caption: 'Skill 以发布版本绑定 Prompt、Tool 和预算策略，执行时不会隐式切换到最新版本。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-07-provider-prompt.png', title: 'Provider 密钥与 Prompt 版本', caption: 'Provider Secret 脱敏管理、受控轮换与 Prompt 模板版本共同构成可复现的模型配置边界。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-08-agent-policy.png', title: 'Agent 节点预算与白名单', caption: 'Agent 节点显式配置 Agent 引用、Tool 白名单、最大轮数、Token、成本和超时预算。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-09-tool-audit.png', title: 'Agent 工具调用审计', caption: '审计视图保留 Tool 调用状态、幂等结果、Token 与延迟摘要，敏感正文不直接展示。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-10-source-trace.png', title: 'Supervisor 来源追踪', caption: 'Supervisor Artifact 按来源和版本追踪 Researcher、Writer、Reviewer 的结果链。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-11-execution-replay.png', title: '执行中心与事件回放', caption: '任务中心通过 SSE 增量接收事件，并按游标回放历史；支持取消、检查点重试、全量重跑和终态复核。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-12-workspace-permissions.png', title: '工作区项目与成员权限', caption: 'Workspace 与 Project 分层管理 Owner、Editor、Viewer，Provider Secret、工作流和执行历史按权限隔离。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-13-share-links.png', title: '只读分享链接管理', caption: 'Owner 创建、查看和撤销只读分享链接，分享结果不开放执行权限，也不暴露密钥和成员信息。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-14-public-snapshot.png', title: '公开只读工作流快照', caption: '公开页面只展示脱敏的工作流结构和预生成结果，让演示可以脱离登录工作台被复核。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-15-login.png', title: '登录页面', caption: '无状态 JWT 登录入口，进入后按用户恢复所属 Workspace 与 Project 上下文。', group: 'platform', kind: 'desktop' },
      { src: '/projects/ai-agent-workflow/agent-workflow-16-register.png', title: '注册页面', caption: '注册后进入默认协作空间，再配置 Provider、Prompt、Agent 和工作流。', group: 'platform', kind: 'desktop' },
    ],
    nextSteps: ['为 Agent Runtime 单独建立 10 / 25 VU Mock 压测与多实例故障接管证据；当前 50 VU 结果仅覆盖普通 DAG。', '继续完善 Agent Run 终态、迭代次数、Tool 延迟、预算终止和恢复结果的专属面板，并把 OTLP Trace 与告警 Runbook 串起来。', '在明确需求下选择原生 tool_calls、WAITING_APPROVAL + 可审计写 Tool 或动态多 Agent 之一；当前 Supervisor 仍是固定 Researcher、Writer、Reviewer 计划。'],
  },
];

export const featuredProject = projects[0];
