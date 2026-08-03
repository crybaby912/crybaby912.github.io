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
    category: 'COMMERCE SYSTEMS',
    eyebrow: 'FULL-STACK SYSTEM',
    year: '2026',
    status: 'SHIPPED / ITERATING',
    description: '面向校园餐饮场景的全栈外卖系统，覆盖点餐、订单、配送、商家经营和 AI 客服。',
    summary: '这不是一个只展示菜品的页面，而是一条从用户点餐延伸到商家经营的完整业务链。订单状态、库存、优惠、配送和 AI 都必须在同一个业务事实下工作。',
    tech: ['Spring Boot', 'Vue / uni-app', 'MySQL', 'Redis', 'Spring AI', 'WebSocket'],
    cover: '/food-hero.jpg',
    coverFit: 'cover',
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
      { layer: '01 / EXPERIENCE', title: '用户与商家界面', body: '小程序承载点餐、订单和 AI 对话，Vue 管理端承载菜品、库存、优惠、评价和经营报表。', tags: ['uni-app', 'Vue 2', 'Element UI'] },
      { layer: '02 / BUSINESS API', title: '统一业务入口', body: 'Spring Boot 按用户归属和当前状态校验请求，支付、取消、评价和优惠券核销都在服务层重新确认。', tags: ['Spring Boot', 'JWT', 'MyBatis'] },
      { layer: '03 / CONSISTENCY', title: '库存与订单事实', body: 'MySQL 保存订单快照和状态，Redis 提供限流、缓存与秒杀窗口；限流失效时也不改变库存正确性。', tags: ['MySQL 8', 'Redis DB10', 'Lua'] },
      { layer: '04 / INTELLIGENCE', title: '可控的 AI 边界', body: 'Spring AI 接入 DeepSeek 与 Embedding，SSE 输出自然语言；动作协议和本地降级让 AI 不越权、不阻断基础业务。', tags: ['Spring AI', 'DeepSeek', 'SSE'] },
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
    category: 'AI SYSTEMS',
    eyebrow: 'WORKFLOW ORCHESTRATION',
    year: '2026',
    status: 'DEMO READY / IN BUILD',
    description: '把一次性的画布调用，变成可恢复、可观测的 AI 执行系统。',
    summary: 'AI Agent Workflow 是一个可视化工作流编排平台：用户在 React Flow 画布上定义 DAG，后端把它持久化为任务，Worker 执行节点并通过 SSE 回传过程。重点不是“能调用模型”，而是失败后还能解释、恢复和验证。',
    tech: ['Spring Boot', 'Spring AI', 'React Flow', 'PostgreSQL', 'Redis', 'Prometheus'],
    cover: '/ai-agent-workflow-demo.gif',
    coverFit: 'contain',
    github: 'https://github.com/crybaby912/ai-agent-workflow',
    role: '独立设计与全栈开发',
    platforms: ['React 工作流画布', 'Spring Boot 执行 API', 'PostgreSQL / Redis 数据层', 'FastAPI TTS 微服务', 'Prometheus / Grafana 观测栈'],
    metrics: [
      { value: '50 VU', label: '最终压测并发', note: '隔离 Compose + Mock LLM' },
      { value: '101 ms', label: '创建任务 p95', note: '最终复测，门槛 < 300 ms' },
      { value: '795 ms', label: '完成任务 p95', note: '最终复测，门槛 < 2 s' },
      { value: '100%', label: '终态 / SSE / 幂等', note: '验收场景全部收敛' },
    ],
    problem: {
      title: '画布能运行，不代表执行系统可靠。',
      body: '一次同步调用只需要返回结果；一个真正的工作流平台还要处理任务排队、节点失败、客户端断开、重复认领、模型切换、密钥隔离和事件回放。页面上的“运行成功”必须能在数据库、日志和指标里被复核。',
      constraints: [
        '任务状态、节点状态和事件流需要在进程重启后仍可解释。',
        '外部 LLM / HTTP 节点不能访问未授权内网地址或泄露密钥。',
        'SSE 断线重连、取消和失败恢复不能把任务卡在 RUNNING。',
      ],
    },
    workflow: [
      { step: '01', title: '画布只描述意图', body: 'React Flow 节点注册表负责配置字段和校验，工作流定义只保存节点、边与 Provider 引用，不把密钥写进画布。', artifact: 'React Flow / Node Registry' },
      { step: '02', title: '任务先落库再执行', body: '创建请求先写入 PENDING，Worker 通过条件更新认领为 RUNNING；任务、节点检查点和事件均由 PostgreSQL 持久化。', artifact: 'PostgreSQL / Flyway / Worker' },
      { step: '03', title: 'DAG 并行并可恢复', body: 'Kahn 拓扑排序决定可执行节点，线程池并行跑分支，成功节点输出作为检查点，失败任务可从最近检查点重试。', artifact: 'DAG Engine / Checkpoint' },
      { step: '04', title: '结果要能被验证', body: 'SSE 推送实时事件，Last-Event-ID 支持回放；Prometheus 记录队列、节点、Provider、Token 和成本，k6 与 CI 给出交付证据。', artifact: 'SSE / Prometheus / k6 / CI' },
    ],
    architecture: [
      { layer: '01 / CANVAS', title: '工作流编排体验', body: '节点面板、画布、配置检视器和运行抽屉共享同一份注册表，新增节点不需要改多处分支。', tags: ['React 18', 'Vite', 'React Flow'] },
      { layer: '02 / EXECUTION', title: '持久化任务运行时', body: '任务从 PENDING 到 RUNNING，再进入 SUCCESS、FAILED 或 CANCELLED；节点日志、事件和 Trace ID 保持同一条执行链。', tags: ['Spring Boot', 'DAG', 'SSE'] },
      { layer: '03 / DATA', title: '可恢复的数据边界', body: 'PostgreSQL 保存任务、节点检查点和事件，Flyway 管理迁移；Redis Lua 负责跨实例的并发与配额控制。', tags: ['PostgreSQL', 'Flyway', 'Redis Lua'] },
      { layer: '04 / PROVIDERS', title: '受控的外部能力', body: 'OpenAI-compatible Provider 链处理重试与故障转移，AES-256-GCM 加密项目密钥，Base URL 由部署白名单约束。', tags: ['Spring AI', 'AES-256-GCM', 'Allowlist'] },
    ],
    decisions: [
      { title: '把“执行中”变成可恢复任务', problem: '仅依赖内存线程时，进程重启、客户端断开或节点失败都会让用户无法知道任务到底发生了什么。', decision: '先持久化任务和节点检查点，再由 Worker 认领；重试复用成功节点，事件按 ID 回放。', result: '任务可以查询、取消、恢复和重跑，运行状态不再藏在单个进程里。' },
      { title: 'Provider 失败要有第二条路', problem: '429、503 和网络抖动是外部模型的常态，直接把错误抛给工作流会放大一次瞬时故障。', decision: '统一 OpenAI-compatible Provider 链，按错误分类重试并切换备用 Provider；密钥加密保存，工作流只引用 Provider。', result: '失败可以被观测、计数和降级，密钥也不会进入工作流定义或日志。' },
      { title: '把安全边界放在出站连接之前', problem: '用户自定义 HTTP 或 LLM 地址若可随意访问，后端就可能成为 SSRF 代理。', decision: 'HTTP 节点解析地址并拒绝回环、私网、链路本地和保留地址；LLM Base URL 必须命中部署白名单。', result: '内网地址拒绝、DNS 解析和重定向边界都进入自动化测试。' },
    ],
    incidents: [
      { title: '首节点失败后任务卡住 5 分钟', symptom: 'DAG 首节点或并行分支失败时，下游不会继续执行，但执行线程仍等待整个 latch 超时。', rootCause: '失败和取消路径没有与成功路径一样完成节点终态收敛，未提交的下游也没有得到明确的跳过状态。', fix: '把节点完成计数和取消处理统一放入 finally，补充首节点失败、并行分支失败和客户端取消的秒级回归测试。', lesson: '并发执行最难的不是启动线程，而是让所有退出路径都能收敛到同一个终态。' },
      { title: 'HTTP 节点可访问内网地址', symptom: '最初的 HTTP Executor 接受任意 URL，理论上可以访问容器网段、回环地址或云元数据。', rootCause: '只校验 URL 格式不等于校验目标地址；DNS 解析和实际连接之间还存在重绑定窗口。', fix: '增加出站地址策略，限制协议、主机名和解析结果，拒绝私网/回环/链路本地/保留地址，并让 HTTP 客户端使用已校验的解析结果。', lesson: 'SSRF 防护必须在“解析目标”和“建立连接”两处形成同一条约束。' },
      { title: '登出后下一位用户看到上一位画布', symptom: '认证状态被清理了，但工作流列表和画布仍从全局持久化键恢复。', rootCause: 'authStore 与 workflowStore 的生命周期不一致，退出登录只清了 JWT 和音频缓存。', fix: '登出时清理工作流持久化状态，并按用户命名空间隔离本地数据；增加用户切换后的画布隔离回归。', lesson: '前端持久化也是多租户边界，不能因为数据在浏览器里就跳过身份生命周期设计。' },
      { title: '批量写事件反而让 p95 变差', symptom: '为了减少数据库写入尝试跨任务事件合批，50 VU 下完成 p95 从秒级进一步恶化。', rootCause: '批处理线程增加排队和锁竞争，事件延迟抵消了单次写入减少的收益。', fix: '撤回合批实验，保留任务 ID 投影、实例内派发去重和终态条件更新，并用同一隔离环境重新压测。', lesson: '性能优化要以可重复的 p95 和资源指标为准，不能因为“写得更少”就假设系统更快。' },
    ],
    evidence: [
      { value: '4 层', label: '交付验收门禁', detail: 'Testcontainers、WireMock、Playwright、k6 与 Trivy 共同验证。' },
      { value: '100%', label: 'SSE 终态事件', detail: '50 VU 场景下任务终态、取消和幂等重放全部收敛。' },
      { value: 'Trace ID', label: '可观测主线', detail: '请求、Worker、节点、Provider 和日志共享同一条关联标识。' },
    ],
    nextSteps: ['补齐多实例 Worker 的调度可视化和故障演练。', '把 Provider 评测样例、Prompt 版本和成本曲线做成可比较的报告。', '将分享链接、权限审计和任务回放继续收敛成面向团队的协作体验。'],
  },
];

export const featuredProject = projects[0];
