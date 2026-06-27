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
