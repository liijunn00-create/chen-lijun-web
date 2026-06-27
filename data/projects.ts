export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  role: string;
  summary: string;
  image: string;
  tags: string[];
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "growth-os",
    title: "AI Growth Decision System",
    eyebrow: "CORE AI PROJECT",
    period: "2026",
    role: "AI运营系统设计 / Dify Workflow / RAG / Multi-Agent",
    summary:
      "这是我作品集中最核心的AI项目。我把增长团队的思考过程拆成Business Parser、User Insight、Diagnosis、Experiment、Execution、Evaluation等Agent链路，用Dify Workflow、RAG知识库和结构化Prompt把增长策略从经验判断转成可复用系统。",
    image: "/images/project-growth.svg",
    tags: ["Dify Workflow", "RAG Knowledge Base", "Multi-Agent", "Prompt Engineering"],
    metrics: ["8个决策模块", "输入驱动输出变化", "自动化增长报告"],
  },
  {
    slug: "digital-park-growth",
    title: "Digital Park B2B Content Loop",
    eyebrow: "B2B CONTENT GROWTH",
    period: "2025",
    role: "内容运营 & 增长策略实习生",
    summary:
      "围绕数字产业园招商业务搭建抖音、公众号、小红书内容矩阵，把行业趋势、政策解读、园区案例串联成从曝光到线索再到销售跟进的增长闭环。",
    image: "/images/project-park.svg",
    tags: ["Content Matrix", "Lead Generation", "B2B Strategy", "Event Growth"],
    metrics: ["20万+内容曝光", "460+有效B端线索", "70+企业入驻转化"],
  },
  {
    slug: "hard-tech-seo",
    title: "Hard-tech SEO & Content Growth",
    eyebrow: "SEO / INDUSTRIAL CONTENT",
    period: "2024",
    role: "内容运营 & SEO增长实习生",
    summary:
      "面向硬科技B2B业务建立行业关键词库和技术解析内容体系，并结合信息流投放、KOL共创与私域承接提升工业客户询盘效率。",
    image: "/images/project-energy.svg",
    tags: ["SEO", "KOL Collaboration", "A/B Testing", "Private Domain"],
    metrics: ["50+行业关键词", "500+工业客户询盘", "210万+KOL曝光"],
  },
];
