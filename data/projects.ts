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
      "核心AI项目。增长团队的思考过程被拆解为Business Parser、User Insight、Diagnosis、Experiment、Execution、Evaluation等Agent链路，并通过Dify Workflow、RAG知识库和结构化Prompt，将增长策略从经验判断转化为可复用系统。",
    tags: ["Dify Workflow", "RAG Knowledge Base", "Multi-Agent", "Prompt Engineering"],
    metrics: ["8个决策模块", "输入驱动输出变化", "自动化增长报告"],
  },
  {
    slug: "ai-content-matrix",
    title: "AI内容矩阵自动化工作流",
    eyebrow: "AI内容运营系统",
    period: "2026",
    role: "工作流设计 / Prompt编写 / Dify节点配置 / API接入",
    summary:
      "基于Dify搭建的多平台运营内容自动生成系统。一次输入可转化为小红书、微博、抖音、视频号、X、Instagram、Bilibili、YouTube等平台内容资产，并通过ImgRender API自动生成封面图链接。",
    tags: ["Dify Workflow", "Prompt Engineering", "ImgRender API", "HTTP Request", "Code Node"],
    metrics: ["8个平台适配", "图文内容同步生成", "结构化输出结果"],
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
