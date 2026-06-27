export type SkillGroup = {
  title: string;
  intro: string;
  items: string[];
};

export type AiCapability = {
  title: string;
  label: string;
  description: string;
  outputs: string[];
};

export const aiCapabilities: AiCapability[] = [
  {
    title: "工作流搭建",
    label: "Dify / 自动化",
    description: "具备将运营流程拆解为输入、判断、生成、复盘等节点，并搭建可复用AI工作流的能力。",
    outputs: ["Dify Workflow", "条件分支", "Code Node", "自动化报告"],
  },
  {
    title: "知识库系统",
    label: "RAG / 方法库",
    description: "能够将增长方法论、行业资料和项目经验整理为知识库，使AI输出更稳定、更贴近业务场景。",
    outputs: ["RAG知识库", "增长方法库", "行业资料检索", "案例复用"],
  },
  {
    title: "多智能体拆解",
    label: "Multi-Agent",
    description: "通过多Agent模拟增长团队分工，让AI分别承担洞察、诊断、实验设计和风险评估。",
    outputs: ["Business Parser", "Diagnosis Agent", "Experiment Agent", "QA Judge"],
  },
  {
    title: "提示词设计",
    label: "结构化输出",
    description: "Prompt设计重点在于目标、变量、约束和输出格式控制，确保AI稳定产出结构化结果。",
    outputs: ["Prompt Engineering", "JSON输出", "内容模板", "复盘框架"],
  },
  {
    title: "AIGC内容生产",
    label: "内容 / 视觉",
    description: "将AI应用于选题、脚本、标题、海报方向和产品视觉探索，提升内容生产效率。",
    outputs: ["选题生成", "脚本文案", "视觉参考", "产品海报"],
  },
  {
    title: "增长实验设计",
    label: "AI + 运营",
    description: "使用AI辅助完成用户分层、增长假设、A/B测试方案、指标体系和执行清单。",
    outputs: ["用户分层", "实验假设", "KPI设计", "执行Checklist"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "内容增长",
    intro: "能力重点不止于内容发布，更关注内容如何承担获客、信任建立和线索转化。",
    items: ["B2B内容策略", "内容矩阵运营", "SEO内容体系", "高转化选题机制"],
  },
  {
    title: "增长与产品运营",
    intro: "能够将运营动作拆解为用户分层、路径设计、指标追踪和实验迭代。",
    items: ["用户分层", "转化漏斗设计", "A/B Testing", "KPI看板思维"],
  },
  {
    title: "AI自动化",
    intro: "能够将运营经验结构化，转译为AI工作流、知识库和可复用的增长决策系统。",
    items: ["Dify Workflow", "RAG知识库", "Multi-Agent", "结构化Prompt"],
  },
  {
    title: "创意生产",
    intro: "覆盖文案、排版、推文、拍摄剪辑等内容生产闭环能力。",
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

export const profileHighlights = [
  "应届毕业生，方向集中在内容增长、产品运营和AI运营系统",
  "实习经历覆盖数字产业园与硬科技B2B业务",
  "作品集重点展示账号运营、策划文案、PPT汇报、视觉排版和AI增长系统",
];
