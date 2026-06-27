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
      "面向产品增长、内容运营和用户转化场景的AI增长实验操作系统。系统将业务描述转化为结构化增长诊断、实验方案、执行清单、运营素材、指标体系、复盘模板和最终Word作战报告，体现AI工作流、RAG知识库和多Agent协作在运营决策中的落地能力。",
    roles: ["系统架构设计", "Dify Workflow搭建", "RAG知识库配置", "多Agent职责拆解", "Prompt结构设计", "DOCX报告导出测试"],
    tools: ["Dify Workflow", "RAG Knowledge Base", "Multi-Agent", "Prompt Engineering", "Code Node", "DOCX Export"],
    sections: [
      {
        title: "增长方案难以复用和标准化",
        kicker: "Problem",
        body:
          "传统增长运营方案高度依赖人工经验，常见问题包括诊断过程不透明、实验设计不成体系、输出格式不稳定、复盘难以沉淀。对于需要持续做增长实验的产品或内容业务，单次方案产出并不能形成可复用的运营系统。",
        points: ["策略判断依赖经验", "实验方案格式不统一", "执行素材与指标脱节", "复盘结果难以沉淀为方法库"],
      },
      {
        title: "用多Agent模拟增长团队决策",
        kicker: "Solution",
        body:
          "系统将增长团队的工作拆解为业务信息抽取、用户洞察、增长诊断、实验设计、风险评估、作战台整合、执行清单、运营素材、指标体系、复盘报告和对抗性质量检查等节点，使AI不只是生成文本，而是按明确职责完成连续推理。",
        points: ["业务信息结构化", "RAG增长方法论检索", "多Agent串行协作", "最终报告自动导出"],
      },
    ],
    workflow: [
      "Start节点接收产品背景、目标用户、增长目标和业务约束",
      "业务信息抽取Agent将自然语言输入转化为结构化业务Brief",
      "Build Query节点生成RAG检索问题和下游可用变量",
      "Growth Playbook知识库补充AARRR、留存、激活、复盘等方法论",
      "用户洞察Agent分析用户分层、生命周期阶段和关键流失点",
      "增长诊断Agent输出P0/P1/P2问题、根因和指标解释",
      "实验设计Agent生成2周内可验证的增长实验方案",
      "风险评估、执行清单、运营素材、指标体系和复盘Agent串行生成执行资产",
      "对抗性质量检查Agent从乐观者、批判者和裁判视角校验方案",
      "最终输出Agent汇总成增长实验作战报告并导出Word文档",
    ],
    features: [
      "从原始业务输入生成结构化增长报告",
      "通过RAG知识库调用增长方法论",
      "用多Agent拆分洞察、诊断、实验、执行和复盘",
      "输出执行清单、运营素材和指标体系",
      "引入对抗性QA检查方案风险",
      "自动导出DOCX格式作战报告",
    ],
    outcome:
      "项目将运营增长分析、策略制定、实验设计、素材生成和复盘沉淀整合到一个可运行的Dify工作流中。最终产物包括完整工作流结构图和《AI运营增长实验作战报告》Word文件，可作为AI运营系统设计能力的核心证明材料。",
    applications: ["产品增长实验", "新用户激活", "用户留存优化", "内容增长复盘"],
  },
  {
    slug: "ai-content-matrix",
    title: "AI内容矩阵自动化工作流",
    subtitle: "基于Dify的多平台运营内容自动生成系统",
    eyebrow: "AI内容运营系统",
    overview:
      "面向内容运营、自媒体创作者和产品推广场景的AI自动化工作流。系统将一次业务输入转化为多平台内容资产，包括社媒正文、短视频文案、英文平台内容、视频简介、hashtag和封面图链接，显著减少重复创作与跨平台改写成本。",
    roles: ["工作流设计", "Prompt编写", "Dify节点配置", "API接入", "自动化测试", "输出结构设计"],
    tools: ["Dify Workflow", "LLM Prompt Engineering", "ImgRender API", "HTTP Request", "Python Code Node", "Template Transform"],
    sections: [
      {
        title: "内容运营中的重复生产成本",
        kicker: "Problem",
        body:
          "多平台内容分发通常需要反复改写标题、正文、口播脚本、视频简介、hashtag和封面文案。不同平台的语气、结构、长度和信息优先级不同，人工处理容易造成效率低、风格不统一和发布资产缺失。",
        points: ["平台规则差异明显", "重复改写占用运营时间", "图文与视频素材经常割裂", "英文平台内容需要额外转译"],
      },
      {
        title: "用Dify把内容矩阵拆成自动化链路",
        kicker: "Solution",
        body:
          "工作流将基础要求、专有名词、背景信息和正文风格作为输入变量，分别进入多个LLM内容生成节点。不同节点负责不同平台的内容适配，再通过模板组装、图片渲染和URL提取节点完成最终汇总。",
        points: ["中文社媒内容生成", "短视频脚本生成", "英文平台内容生成", "封面图自动渲染", "结构化结果统一输出"],
      },
    ],
    workflow: [
      "用户输入基础要求、专有名词、背景信息与正文风格",
      "Dify工作流接收输入并分发到多个内容生成节点",
      "LLM节点分别生成小红书、微博、抖音、视频号、X、Instagram、Bilibili和YouTube内容",
      "Template Transform节点组装封面渲染参数",
      "ImgRender API自动生成竖版和横版封面图",
      "Python Code Node提取图片URL并清洗输出字段",
      "End Node汇总多平台正文、hashtag、视频简介与封面图链接",
    ],
    features: [
      "一次输入，生成多平台运营内容",
      "自动生成小红书、微博正文和hashtag",
      "自动生成抖音、视频号短视频文案",
      "自动生成X和Instagram英文社媒内容",
      "自动生成Bilibili和YouTube视频简介",
      "自动生成竖版和横版封面图URL",
      "结构化输出所有内容结果",
    ],
    outcome:
      "该工作流把原本需要人工分别撰写、改写和排版的多平台运营内容整合成一个自动化流程，帮助运营人员快速完成从主题策划到发布素材准备的过程，并让内容资产更容易被复用、检查和二次迭代。",
    applications: ["课程推广", "产品发布", "活动宣传", "个人品牌运营"],
  },
];

export function getProjectCase(slug: string) {
  return projectCases.find((projectCase) => projectCase.slug === slug);
}
