export type EvidenceItem = {
  title: string;
  type: "image" | "pdf" | "placeholder";
  src?: string;
  note: string;
  links?: {
    label: string;
    href: string;
  }[];
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
    subtitle: "账号运营",
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
    subtitle: "文案策划",
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
        title: "创业计划书完整版PDF",
        type: "pdf",
        src: "/docs/full-plans/startup-plan.pdf",
        note: "展示从项目背景、商业模式、市场分析到执行规划的完整计划书写作能力。",
      },
      {
        title: "商业计划书完整版PDF",
        type: "pdf",
        src: "/docs/full-plans/business-plan.pdf",
        note: "用于展示商业逻辑梳理、用户需求分析、产品定位和落地路径表达能力。",
      },
      {
        title: "彩色跑策划书完整版PDF",
        type: "pdf",
        src: "/docs/full-plans/color-run-plan.pdf",
        note: "校园活动策划类文档，体现活动目标、流程安排、传播设计和执行管理能力。",
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
    subtitle: "运营系统",
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
    subtitle: "视觉排版",
    description:
      "这里展示我对海报、活动物料和商业视觉的排版控制能力。重点呈现标题层级、画面气质、信息组织和不同场景下的视觉表达。",
    items: [
      {
        title: "秋日集市活动海报",
        type: "image",
        src: "/images/design-layout/autumn-market-poster.jpeg",
        note: "面向校园集市活动的视觉物料，使用柔和渐变、水彩肌理和中英文字层级，强化轻松、手作、生活方式氛围。",
      },
      {
        title: "学生会招新海报",
        type: "image",
        src: "/images/design-layout/student-union-recruitment.jpeg",
        note: "校园组织招新物料，核心信息包括部门、时间、地点和公众号来源，体现活动信息的清晰传达能力。",
      },
      {
        title: "海边漫步音乐会海报",
        type: "image",
        src: "/images/design-layout/seaside-concert-poster.jpeg",
        note: "以大标题、日期和地点为主视觉骨架，结合海边纹理背景，练习活动海报的信息优先级与视觉节奏。",
      },
      {
        title: "光影动态展览海报",
        type: "image",
        src: "/images/design-layout/light-in-motion-poster.jpg",
        note: "黑白高对比排版练习，突出字体重量、留白比例和展览类海报的现代感。",
      },
      {
        title: "春日梦境海报",
        type: "image",
        src: "/images/commercial-posters/spring-heart-dream-poster.jpg",
        note: "偏梦幻风格的春日主题视觉，练习透明材质、泡泡元素和高饱和柔色画面的统一控制。",
      },
      {
        title: "玩偶产品视觉海报",
        type: "image",
        src: "/images/commercial-posters/jellycat-sleepover-poster.png",
        note: "围绕玩偶产品做商业化场景包装，强调产品主体、情绪氛围和电商视觉的生活方式表达。",
      },
      {
        title: "可口可乐夏日场景海报",
        type: "image",
        src: "/images/commercial-posters/coca-cola-summer-poster.png",
        note: "以夏日消费场景为核心，结合手写字与插画化人物，体现品牌情绪文案和场景视觉合成能力。",
      },
    ],
  },
  {
    title: "推文制作",
    subtitle: "公众号编辑",
    description:
      "这里展示我参与校园公众号内容生产的痕迹，包括选题、标题、封面图、正文排版和活动传播承接。",
    items: [
      {
        title: "公众号推文列表与选题呈现",
        type: "image",
        src: "/images/wechat-editorial/article-list-operation.png",
        note: "展示账号内容列表、标题表达和阅读数据，用于说明我对校园公众号选题包装与内容运营节奏的参与。",
      },
      {
        title: "彩色跑活动推文正文",
        type: "image",
        src: "/images/wechat-editorial/color-run-article.png",
        note: "展示活动推文正文页，包含活动背景阐释、视觉头图和互动数据，体现推文结构与活动传播文案能力。",
      },
    ],
  },
  {
    title: "小组报告PPT",
    subtitle: "汇报材料",
    description:
      "这里展示小组汇报、课程报告和商业展示类PPT，重点体现选题策划、结构化表达、视觉排版和汇报材料组织能力。",
    items: [
      {
        title: "萌宠乐园项目PPT",
        type: "image",
        src: "/images/report-decks/pet-paradise-deck-cover.png",
        note: "小组项目汇报型PPT，适合展示项目概念、视觉风格、商业表达和团队汇报材料的完整组织能力。",
        links: [
          { label: "查看PDF版", href: "/docs/presentations/pet-paradise-deck.pdf" },
          { label: "下载PPTX", href: "/docs/presentations/pet-paradise-deck.pptx" },
        ],
      },
      {
        title: "创新创业大赛PPT",
        type: "image",
        src: "/images/report-decks/innovation-entrepreneurship-competition-cover.png",
        note: "比赛路演型PPT，适合展示项目叙事、商业模式表达、视觉包装和面向评委的结构化汇报能力。",
        links: [
          { label: "查看PDF版", href: "/docs/presentations/innovation-entrepreneurship-competition.pdf" },
          { label: "下载PPTX", href: "/docs/presentations/innovation-entrepreneurship-competition.pptx" },
        ],
      },
    ],
  },
  {
    title: "拍摄剪辑能力",
    subtitle: "视频生产",
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
