export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  metrics: string[];
  detailHref?: string;
};

export const projects: Project[] = [
  {
    slug: "growth-os",
    title: "AI增长决策系统",
    eyebrow: "核心AI项目",
    period: "2026",
    role: "AI运营系统设计 / Dify Workflow / RAG / Multi-Agent",
    summary:
      "AI Native运营系统中的决策层项目。系统模拟增长团队的完整工作方式，将业务Brief转化为用户洞察、增长诊断、实验设计、执行清单、指标体系、复盘模板和Word作战报告。",
    tags: ["Dify Workflow", "RAG Knowledge Base", "Multi-Agent", "Prompt Engineering"],
    metrics: ["策略决策层", "多Agent增长诊断", "全自动化流程"],
    detailHref: "/projects/growth-os",
  },
  {
    slug: "ai-content-matrix",
    title: "AI内容矩阵自动化工作流",
    eyebrow: "AI内容运营系统",
    period: "2026",
    role: "工作流设计 / Prompt编写 / Dify节点配置 / API接入",
    summary:
      "AI Native运营系统中的执行层项目。系统将一次运营输入拆解为多平台内容策略，并生成小红书、抖音、Bilibili、YouTube、Instagram、X等平台的标题、正文、Hashtag、视频简介和封面素材。",
    tags: ["Dify Workflow", "Prompt Engineering", "ImgRender API", "HTTP Request", "Code Node"],
    metrics: ["执行落地层", "多平台内容适配", "图文素材自动汇总"],
    detailHref: "/projects/ai-content-matrix",
  },
  {
    slug: "digital-park-growth",
    title: "数字产业园内容增长闭环",
    eyebrow: "B2B内容增长",
    period: "2025",
    role: "内容运营 & 增长策略实习生",
    summary:
      "围绕数字产业园招商业务搭建抖音、公众号、小红书内容矩阵，把行业趋势、政策解读、园区案例串联成从曝光到线索再到销售跟进的增长闭环。",
    tags: ["Content Matrix", "Lead Generation", "B2B Strategy", "Event Growth"],
    metrics: ["20万+内容曝光", "460+有效B端线索", "70+企业入驻转化"],
  },
  {
    slug: "hard-tech-seo",
    title: "硬科技SEO内容增长",
    eyebrow: "SEO / 工业内容",
    period: "2024",
    role: "内容运营 & SEO增长实习生",
    summary:
      "面向硬科技B2B业务建立行业关键词库和技术解析内容体系，并结合信息流投放、KOL共创与私域承接提升工业客户询盘效率。",
    tags: ["SEO", "KOL Collaboration", "A/B Testing", "Private Domain"],
    metrics: ["50+行业关键词", "500+工业客户询盘", "210万+KOL曝光"],
  },
];
