export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  description: string;
  tech: string[];
  cover: string;
  github: string;
  summary: string;
  role: string;
  platforms: string[];
  highlights: { title: string; description: string }[];
  architecture: string[];
  introHeading: string;
  introAccent: string;
  highlightHeading: string;
  highlightAccent: string;
  architectureHeading: string;
  architectureAccent: string;
  ctaHeading: string;
  ctaAccent: string;
};

export const projects: Project[] = [
  {
    slug: 'food-take-out',
    title: '食汇外卖',
    eyebrow: 'FULL-STACK SYSTEM',
    year: '2026',
    description: '面向校园餐饮场景的全栈外卖系统，覆盖点餐、订单、配送、商家经营和 AI 客服。',
    tech: ['Spring Boot', 'Vue', 'TypeScript', 'MySQL', 'Redis', 'Spring AI'],
    cover: '/food-hero.jpg',
    github: 'https://github.com/crybaby912/food-take-out',
    summary: '这是一个从用户点餐一直延伸到商家经营的完整业务系统。重点不只是把功能做出来，还要让库存、订单、配送和 AI 能力在真实业务状态中保持一致。',
    role: '独立设计与全栈开发',
    platforms: ['微信小程序用户端', 'Vue 商家管理端', 'Spring Boot 服务端', 'AI 智能客服'],
    highlights: [
      { title: '完整点餐链路', description: '从菜品浏览、规格选择、购物车、Mock 支付到订单追踪，围绕用户动作设计连续反馈。' },
      { title: '秒杀与库存控制', description: '结合 Redis、Lua 和数据库约束处理库存扣减、限购与防超卖，保证高并发下的数据正确性。' },
      { title: '可落地的 AI 客服', description: '将实时菜单、订单、营业状态和 FAQ 接入会话，让 AI 回答可以连接到真实业务。' },
    ],
    architecture: ['uni-app / Vue 用户端', 'Vue 2 + Element UI 商家端', 'Spring Boot REST / SSE 服务', 'MySQL + Redis 数据层', 'Spring AI + FAQ RAG 能力'],
    introHeading: '从一顿饭开始，',
    introAccent: '把业务链路跑通。',
    highlightHeading: '我重点解决了',
    highlightAccent: '这些问题。',
    architectureHeading: '一条业务链，',
    architectureAccent: '多个可靠边界。',
    ctaHeading: '还有问题，',
    ctaAccent: '继续把它做深。',
  },
  {
    slug: 'ai-agent-workflow',
    title: 'AI Agent Workflow',
    eyebrow: 'AI WORKFLOW PLATFORM',
    year: '2026',
    description: '面向 AI 应用的可恢复工作流编排平台，将 DAG 执行、Provider 故障转移、权限隔离和可观测性组合成可运行的工程系统。',
    tech: ['Spring Boot', 'Spring AI', 'React', 'PostgreSQL', 'Redis', 'Prometheus'],
    cover: '/ai-agent-workflow-demo.gif',
    github: 'https://github.com/crybaby912/ai-agent-workflow',
    summary: '这个项目从一次性的画布调用，逐步升级成具备持久化任务、节点级检查点、失败恢复、项目权限、Provider 密钥隔离和 CI 验收证据的工作流平台。重点是让每次执行都可追踪、可恢复、可验证。',
    role: '独立设计与全栈开发',
    platforms: ['React 工作流画布', 'Spring Boot 执行 API', 'PostgreSQL / Redis 数据层', 'FastAPI TTS 微服务', 'Prometheus / Grafana 观测栈'],
    highlights: [
      { title: '把 DAG 执行变成持久化任务', description: '任务先进入 PENDING，再由 Worker 认领为 RUNNING，并记录节点状态、检查点、事件流和 Trace ID；失败任务可以从检查点恢复或全量重跑。' },
      { title: 'Provider 故障不会直接中断工作流', description: '统一 OpenAI-compatible Provider 链，覆盖 429、503 和超时重试与备用切换；项目级 API Key 使用 AES-256-GCM 加密保存，工作流只引用 Provider。' },
      { title: '用工程证据证明可交付性', description: '用 Testcontainers、WireMock、Playwright、k6、Prometheus/Grafana 和 Trivy 形成验收闭环；50 VU 压测下任务创建 p95 为 101.20 ms，完成 p95 为 795 ms。' },
    ],
    architecture: ['React + Vite + React Flow 工作流画布', 'Spring Boot + Spring AI 执行 API / SSE', 'PostgreSQL + Flyway 持久化任务和事件', 'Redis Lua 分布式限流与配额控制', 'FastAPI TTS + Prometheus/Grafana + CI 门禁'],
    introHeading: '从一次调用开始，',
    introAccent: '把执行系统做可靠。',
    highlightHeading: '我重点解决了',
    highlightAccent: '这些工程问题。',
    architectureHeading: '一条执行链，',
    architectureAccent: '多个可验证边界。',
    ctaHeading: '还有演进空间，',
    ctaAccent: '继续把平台做深。',
  },
];

export const featuredProject = projects[0];
