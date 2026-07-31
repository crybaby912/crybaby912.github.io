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
  },
];

export const featuredProject = projects[0];
