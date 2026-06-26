export type SkillGroup = {
  title: string;
  intro: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Content Growth",
    intro: "我不只做内容发布，更关注内容如何承担获客、信任建立和线索转化。",
    items: ["B2B内容策略", "内容矩阵运营", "SEO内容体系", "高转化选题机制"],
  },
  {
    title: "Growth & Product Ops",
    intro: "我会把运营动作拆成用户分层、路径设计、指标追踪和实验迭代。",
    items: ["用户分层", "转化漏斗设计", "A/B Testing", "KPI看板思维"],
  },
  {
    title: "AI Automation",
    intro: "我能够把运营经验结构化，转译成AI工作流和可复用的增长决策系统。",
    items: ["Dify Workflow", "RAG知识库", "Multi-Agent", "Prompt Engineering"],
  },
  {
    title: "Creative Production",
    intro: "我能完成从文案、排版、推文到拍摄剪辑的内容生产闭环。",
    items: ["文案策划", "推文制作", "视觉排版", "拍摄剪辑"],
  },
];

export const stats = [
  { value: "20万+", label: "内容曝光" },
  { value: "58%", label: "新媒体渠道访客占比" },
  { value: "460+", label: "B端有效线索" },
  { value: "70+", label: "企业入驻转化" },
  { value: "500+", label: "工业客户询盘" },
  { value: "210万+", label: "KOL传播曝光" },
];
