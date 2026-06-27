export type ProjectCase = {
  slug: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  overview: string;
  roles: string[];
  tools: string[];
  sections: {
    title: string;
    kicker: string;
    body: string;
    points?: string[];
  }[];
  workflow: string[];
  features: string[];
  outcome: string;
  applications: string[];
};

export const projectCases: ProjectCase[] = [
  {
    slug: "growth-os",
    title: "AI增长决策系统",
    subtitle: "基于Dify的多Agent增长实验操作系统",
    eyebrow: "核心AI项目",
    overview:
      "面向增长运营和AI产品运营场景的Multi-Agent决策系统。用户输入自然语言业务Brief后，系统自动完成业务信息抽取、Growth Playbook知识库检索、用户洞察、增长诊断、实验设计、执行落地、指标体系、复盘报告、对抗性质量检查和Word作战报告导出，使AI从单次回答升级为可复用的增长决策流程。",
    roles: ["AI Native系统架构设计", "Dify Workflow搭建", "RAG知识库配置", "多Agent职责拆解", "Prompt结构设计", "LLM-as-Judge质量控制", "DOCX报告导出测试"],
    tools: ["Dify Workflow", "RAG Knowledge Base", "Multi-Agent", "Prompt Engineering", "Code Node", "DOCX Export"],
    sections: [
      {
        title: "增长决策依赖人工经验，难以沉淀为系统",
        kicker: "Problem",
        body:
          "传统增长运营工作往往分散在用户洞察、问题诊断、实验设计、内容执行和数据复盘等不同角色中。方案容易停留在空泛建议，缺少明确假设、指标、成功标准和复盘规则，难以形成可持续迭代的增长实验机制。",
        points: ["洞察与诊断分散", "实验假设不清晰", "指标与执行脱节", "复盘难以沉淀为方法库"],
      },
      {
        title: "用Multi-Agent重构增长团队工作方式",
        kicker: "Solution",
        body:
          "系统将增长运营流程拆解为输入理解层、知识增强层、多Agent决策层、增长作战台、执行落地层、对抗性质量检查层和最终输出层。每个Agent只负责一个明确任务，并通过RAG知识库和结构化Prompt约束输出质量。",
        points: ["自然语言Brief结构化", "Growth Playbook增强", "多Agent串行决策", "LLM-as-Judge质量审查"],
      },
    ],
    workflow: [
      "输入理解层：识别产品名称、产品阶段、目标用户、增长目标、核心问题、可用渠道、约束条件和关键指标",
      "结构化处理层：Code Node将业务信息转换为business_brief和retrieval_query，保证下游变量稳定",
      "知识增强层：Growth Playbook知识库检索AARRR、用户分层、激活、留存、A/B测试、北极星指标和复盘方法",
      "用户洞察Agent：分析用户分层、生命周期阶段、行为特征和关键流失点",
      "增长诊断Agent：判断增长问题类型、根因、优先级和指标解释",
      "实验设计Agent：生成3-5个两周内可验证的增长实验，并明确假设、目标用户、执行动作、周期、指标和成功标准",
      "增长作战台Agent：整合用户洞察、诊断结论、实验方案和风险提示，形成统一增长策略框架",
      "执行落地层：输出执行清单、运营素材、指标体系、埋点建议和复盘模板",
      "对抗性质量检查层：通过Optimist、Critic、Judge三角色审查可执行性、风险和必须修改项",
      "最终输出层：汇总为增长实验作战报告，并导出Word文档用于展示、复盘和面试沟通",
    ],
    features: [
      "自然语言业务Brief自动转化为结构化增长输入",
      "Growth Playbook RAG知识库增强专业判断",
      "用户洞察、增长诊断、实验设计、风险评估分Agent协作",
      "实验方案包含假设、动作、周期、主指标、辅助指标、风险指标和成功标准",
      "执行清单、运营素材、指标体系和复盘模板形成完整落地闭环",
      "Optimist / Critic / Judge对抗性质量检查降低过度乐观风险",
      "最终导出可用于业务讨论的DOCX增长作战报告",
    ],
    outcome:
      "该系统覆盖增长运营从策略判断到执行复盘的完整决策链路，将业务输入、方法论检索、多Agent推理、执行资产生成、指标设计和质量审查整合为可运行的Dify工作流。最终产物包括完整工作流结构图和《AI运营增长实验作战报告》Word文件，是AI Native运营系统设计能力的核心证明材料。",
    applications: ["增长策略决策", "新用户激活", "用户留存优化", "实验复盘沉淀"],
  },
  {
    slug: "ai-content-matrix",
    title: "AI内容矩阵自动化工作流",
    subtitle: "基于Dify的多平台运营内容自动生成系统",
    eyebrow: "AI内容运营系统",
    overview:
      "面向内容运营、新媒体运营和产品推广场景的AI Native执行层系统。系统将一次运营需求、产品信息或内容主题拆解为平台化内容策略，并生成适配小红书、Bilibili、YouTube、Instagram、X/Twitter等平台的标题、正文、脚本、Hashtag、封面文案、图片提示词和Markdown汇总。",
    roles: ["内容工作流架构设计", "平台化Agent拆解", "Prompt编写", "Dify节点配置", "API接入", "自动化测试", "输出结构设计"],
    tools: ["Dify Workflow", "LLM Prompt Engineering", "ImgRender API", "HTTP Request", "Python Code Node", "Template Transform"],
    sections: [
      {
        title: "多平台内容生产分散，平台适配成本高",
        kicker: "Problem",
        body:
          "传统内容运营中，多平台生产往往依赖一稿多发，标题、正文、封面、标签和脚本之间缺少统一策略。小红书、B站/YouTube、Instagram和X/Twitter的内容机制差异明显，人工改写不仅耗时，也容易造成平台语气失配和交付物不完整。",
        points: ["一稿多发适配度低", "标题正文封面标签缺少统一策略", "平台风格差异带来反复改写", "多工具切换降低交付效率"],
      },
      {
        title: "用平台化Agent重构内容生产链路",
        kicker: "Solution",
        body:
          "系统将内容生产拆解为输入层、内容理解层、平台策略层、内容生成层和素材汇总层。不同平台由独立Agent负责策略适配，而不是让一个通用Prompt同时生成所有内容，从而提升输出的差异化和可用性。",
        points: ["内容主题与卖点识别", "平台机制差异化适配", "标题正文脚本标签联动生成", "Markdown交付物统一汇总"],
      },
    ],
    workflow: [
      "输入层：接收运营需求、产品信息、内容主题、目标用户、专有名词、背景信息和正文风格",
      "内容理解层：识别内容主题、产品卖点、传播目标和用户阅读场景",
      "平台策略层：按小红书、B站/YouTube、Instagram、X/Twitter等平台机制拆分内容逻辑",
      "小红书Agent生成种草感标题、正文、生活化表达和Hashtag",
      "Bilibili / YouTube Agent生成视频选题、简介、观看留存结构和置顶评论",
      "Instagram Agent生成视觉导向的简洁文案和标签组合",
      "X / Twitter Agent生成观点表达和线程结构，增强连续阅读和传播性",
      "图片生成节点输出封面图提示词，并通过ImgRender API生成图片URL",
      "Markdown汇总节点整理不同平台输出，形成可复制、可发布的内容交付物",
    ],
    features: [
      "平台化Agent分工，而非单一通用文案生成",
      "从运营需求到选题、标题、正文、脚本、Hashtag、封面文案和图片提示词的完整输出",
      "小红书强调种草感、标题吸引力和生活化表达",
      "Bilibili / YouTube强调选题结构、视频脚本和观看留存",
      "Instagram强调视觉表达、简洁文案和Hashtag",
      "X / Twitter强调观点表达、线程结构和传播性",
      "输出Markdown汇总，便于运营人员直接复制和发布",
    ],
    outcome:
      "该系统将内容运营执行流程产品化，把多平台内容策略、文案生成、标签生成、视频简介、封面提示词和Markdown汇总整合为可运行工作流。它解决的是多平台内容生产中的重复改写和交付分散问题，体现AI内容运营自动化、平台策略理解、AIGC链路设计和Prompt节点编排能力。",
    applications: ["课程推广", "产品发布", "活动宣传", "个人品牌运营"],
  },
];

export function getProjectCase(slug: string) {
  return projectCases.find((projectCase) => projectCase.slug === slug);
}
