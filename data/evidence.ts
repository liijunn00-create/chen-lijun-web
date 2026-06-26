export type EvidenceItem = {
  title: string;
  type: "image" | "pdf" | "placeholder";
  src?: string;
  note: string;
};

export type EvidenceGroup = {
  title: string;
  subtitle: string;
  description: string;
  items: EvidenceItem[];
};

export const evidenceGroups: EvidenceGroup[] = [
  {
    title: "账号运营优质笔记",
    subtitle: "Account Operation",
    description:
      "这里集中展示我做过的内容账号样例，包括硬科技行业科普、报告型笔记和个人小红书电商账号。图片保持原图完整展示，便于查看信息结构和互动数据。",
    items: [
      {
        title: "新能源赛道科普笔记",
        type: "image",
        src: "/images/energy-routes-xhs.jpg",
        note: "用低门槛结构解释复杂产业链，强调标题抓手、分层信息和收藏价值。",
      },
      {
        title: "氢能源行业报告型笔记",
        type: "image",
        src: "/images/hydrogen-report-xhs.jpg",
        note: "将报告内容转译成小红书可读表达，增强硬科技内容的传播感。",
      },
      {
        title: "氢能源产业链全景图",
        type: "image",
        src: "/images/energy-chain-xhs.jpg",
        note: "以资料整理和信息图逻辑承接B端用户的深度阅读需求。",
      },
      {
        title: "个人小红书运营账号",
        type: "image",
        src: "/images/disney-plush-xhs.png",
        note: "迪士尼玩偶垂类账号，围绕选品、笔记标题和交易节点运营，月销量60+。",
      },
    ],
  },
  {
    title: "文案写作能力",
    subtitle: "Copywriting",
    description:
      "这里展示我对活动策划、品牌定位、传播主张和长文案结构的处理能力。重点不是单句文案，而是把目标、受众、场景和转化动作写清楚。",
    items: [
      {
        title: "校园文化艺术节策划书",
        type: "image",
        src: "/images/campus-cultural-festival-page.png",
        note: "从活动背景、主题阐释、目标设定到执行结构，体现校园活动策划与长文案组织能力。",
      },
      {
        title: "完整策划书PDF",
        type: "pdf",
        src: "/images/campus-cultural-festival-copywriting.pdf",
        note: "保留完整文档入口，后续可作为面试官查看详细策划逻辑的资料。",
      },
      {
        title: "3秒清爽免洗洗发水品牌策划",
        type: "image",
        src: "/images/brand-marketing-plan-pages.png",
        note: "围绕品类重构、用户洞察、传播主张和增长机制展开，体现品牌营销策划写作能力。",
      },
    ],
  },
  {
    title: "运营能力展示",
    subtitle: "Operation System",
    description:
      "预留放置活动复盘、用户分层、投放A/B测试、SEO关键词库、私域转化链路等运营方法论材料。",
    items: [
      {
        title: "待上传：增长漏斗 / 复盘图",
        type: "placeholder",
        note: "建议补充曝光-互动-留资-转化路径截图，或活动复盘看板。",
      },
    ],
  },
  {
    title: "设计排版能力",
    subtitle: "Layout Design",
    description:
      "预留展示小组报告PPT、信息图、海报、推文头图等视觉排版作品，突出信息层级与审美控制。",
    items: [
      {
        title: "待上传：PPT / 海报 / 信息图",
        type: "placeholder",
        note: "建议上传横版PPT截图、报告封面、信息图长图，方便做成画廊。",
      },
    ],
  },
  {
    title: "推文制作",
    subtitle: "WeChat Editorial",
    description:
      "预留展示公众号推文、活动推送、标题策略和版式截图，突出选题、结构和阅读体验。",
    items: [
      {
        title: "待上传：公众号推文截图",
        type: "placeholder",
        note: "建议保留完整首屏、正文版式、阅读数据或后台数据截图。",
      },
    ],
  },
  {
    title: "小组报告PPT",
    subtitle: "Report Deck",
    description:
      "预留展示课程报告、竞品分析、行业研究或项目汇报PPT，体现结构化表达和研究整理能力。",
    items: [
      {
        title: "待上传：小组报告PPT",
        type: "placeholder",
        note: "建议选择3-5页代表页：封面、框架、分析图、结论页。",
      },
    ],
  },
  {
    title: "拍摄剪辑能力",
    subtitle: "Video Production",
    description:
      "预留展示短视频脚本、拍摄成片、剪辑节奏和活动记录影像，体现从策划到执行的内容生产能力。",
    items: [
      {
        title: "待上传：短视频 / 分镜 / 成片截图",
        type: "placeholder",
        note: "建议补充视频封面、脚本片段、播放数据和剪辑前后对比。",
      },
    ],
  },
];
