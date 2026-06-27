import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectCase } from "@/data/projectCases";

export const metadata: Metadata = {
  title: "AI内容矩阵自动化工作流 | 陈丽君作品集",
  description: "基于Dify的多平台运营内容自动生成系统项目案例。",
};

const projectCase = getProjectCase("ai-content-matrix");

const outputImages = [
  {
    title: "小红书正文",
    src: "/images/ai-projects/content-matrix/result-xiaohongshu-copy.png",
    note: "系统根据输入的课程背景和正文风格，生成适合小红书语境的口语化种草正文。",
  },
  {
    title: "小红书 / 抖音 / B站标签",
    src: "/images/ai-projects/content-matrix/result-tags-bilibili.png",
    note: "自动拆分平台标签与视频简介结构，减少跨平台发布前的手工整理。",
  },
  {
    title: "Bilibili视频简介",
    src: "/images/ai-projects/content-matrix/result-bilibili-detail.png",
    note: "生成包含课程亮点、适合人群、权益信息和置顶评论的B站发布素材。",
  },
  {
    title: "YouTube视频简介",
    src: "/images/ai-projects/content-matrix/result-youtube-detail.png",
    note: "面向英文/长视频平台的描述模板，强调课程价值、学习路径和行动引导。",
  },
  {
    title: "Instagram / X内容",
    src: "/images/ai-projects/content-matrix/result-instagram-x.png",
    note: "输出适配海外社媒平台的短内容和主题标签，支持同一主题的国际化分发。",
  },
  {
    title: "X / Twitter Thread 01",
    src: "/images/ai-projects/content-matrix/result-x-thread-1.png",
    note: "将课程卖点拆成连续Thread结构，用编号方式承接用户阅读路径。",
  },
  {
    title: "X / Twitter Thread 02",
    src: "/images/ai-projects/content-matrix/result-x-thread-2.png",
    note: "延续Thread内容，补充适合人群、价格锚点和转发关注引导。",
  },
];

export default function AiContentMatrixPage() {
  if (!projectCase) {
    return null;
  }

  return (
    <main className="min-h-screen text-[#171513]">
      <header className="px-5 py-5 sm:px-8">
        <nav className="glass-panel-strong mx-auto flex max-w-[1700px] items-center justify-between px-4 py-3 text-[12px] uppercase tracking-[0.18em]">
          <Link href="/" className="font-semibold transition hover:text-[#7a86a1]">
            陈丽君作品集
          </Link>
          <Link href="/#work" className="glass-chip px-4 py-2 transition hover:bg-[#1e1c1a] hover:text-[#f6f1ec]">
            返回项目
          </Link>
        </nav>
      </header>

      <section className="px-5 pb-16 pt-10 sm:px-8 lg:pb-24">
        <div className="glass-panel-strong mx-auto grid max-w-[1700px] gap-10 p-7 sm:p-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end lg:p-14">
          <div>
            <p className="section-kicker">{projectCase.eyebrow}</p>
            <h1 className="single-line-title max-w-5xl text-[clamp(2rem,4vw,4.8rem)] font-black leading-[1.02] tracking-normal">
              {projectCase.title}
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-9 text-[#3f3a35]">{projectCase.subtitle}</p>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-[#5c5751]">{projectCase.overview}</p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <InfoPanel title="项目职责" items={projectCase.roles} />
          <InfoPanel title="使用工具" items={projectCase.tools} tone="blue" />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-8">
          {projectCase.sections.map((section) => (
            <article key={section.title} className="glass-panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.35fr_0.65fr] lg:p-12">
              <div>
                <p className="section-kicker">{section.kicker}</p>
                <h2 className="single-line-title text-[clamp(1.25rem,1.7vw,2.15rem)] font-black leading-tight">{section.title}</h2>
              </div>
              <div>
                <p className="text-xl leading-9 text-[#403c37]">{section.body}</p>
                {section.points ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <span key={point} className="glass-chip px-4 py-3 text-sm font-semibold text-[#3b353b]">
                        {point}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="section-kicker">Workflow</p>
            <h2 className="section-title">工作流结构</h2>
          </div>
          <div className="grid gap-3">
            {projectCase.workflow.map((step, index) => (
              <div key={step} className="glass-panel grid gap-4 p-5 sm:grid-cols-[88px_1fr] sm:items-center">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-[#7a86a1]">Step {index + 1}</span>
                <p className="text-lg leading-8 text-[#342f2b]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="section-kicker">Features</p>
            <h2 className="section-title">核心功能</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectCase.features.map((feature) => (
              <div key={feature} className="glass-panel min-h-[150px] p-6">
                <p className="text-xl font-bold leading-8">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="section-kicker">Workflow Evidence</p>
              <h2 className="section-title">Dify全链路模型</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#504b45]">
              该工作流从基础要求、专有名词、背景信息和正文风格出发，依次完成多平台文案生成、标签生成、Bilibili/YouTube详情生成、封面图渲染请求、图片URL提取和最终Markdown汇总。
            </p>
          </div>
          <div className="glass-panel overflow-hidden p-4 sm:p-6">
            <div className="relative h-[360px] overflow-auto bg-[#171513]/90 p-3 sm:h-[520px]">
              <Image
                src="/images/ai-projects/content-matrix/content-matrix-workflow.png"
                alt="AI内容矩阵自动化工作流Dify全链路模型"
                width={8257}
                height={1988}
                className="h-full min-w-[1800px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-10">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="section-kicker">Output Evidence</p>
              <h2 className="section-title">生成结果展示</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#504b45]">
              以下为工作流实际生成的多平台输出结果，包含小红书、抖音、Bilibili、YouTube、Instagram和X/Twitter等内容资产。截图保持原始比例展示，不遮盖关键信息。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {outputImages.map((item, index) => (
              <article key={item.src} className="glass-panel overflow-hidden">
                <div className="relative flex h-[620px] items-center justify-center overflow-hidden bg-[#171513]/88 p-3">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    priority={index < 2}
                  />
                </div>
                <div className="p-5">
                  <h3 className="single-line-title text-xl font-black text-[#171513]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#625c55]">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-8 border-t border-black/10 pt-16 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="section-kicker">Tech Stack</p>
            <h2 className="section-title">技术与自动化节点</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {projectCase.tools.map((tool) => (
              <span key={tool} className="glass-chip px-4 py-3 text-sm font-semibold text-[#342e33]">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen px-5 py-20 text-[#f6f1ec] sm:px-8">
        <div className="glass-dark mx-auto flex min-h-[72vh] max-w-[1700px] flex-col justify-between gap-16 p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#dcaec1]">Outcome</p>
              <h2 className="single-line-title text-[clamp(1.55rem,2.55vw,3.35rem)] font-black leading-[1.08]">项目成果</h2>
            </div>
            <p className="max-w-4xl text-2xl leading-10 text-[#e9e0d8]">{projectCase.outcome}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectCase.applications.map((application) => (
              <span key={application} className="border border-white/15 bg-white/[0.08] px-5 py-5 text-lg font-semibold backdrop-blur-xl">
                {application}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoPanel({ title, items, tone = "pink" }: { title: string; items: string[]; tone?: "pink" | "blue" }) {
  const background = tone === "blue" ? "bg-[rgba(248,218,229,0.34)]" : "bg-[rgba(248,218,229,0.42)]";

  return (
    <article className={`${background} glass-panel p-7 sm:p-10`}>
      <h2 className="single-line-title mb-8 text-2xl font-black">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="glass-chip px-4 py-3 text-sm font-semibold text-[#342f2b]">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
