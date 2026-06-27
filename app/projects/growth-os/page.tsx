import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectCase } from "@/data/projectCases";

export const metadata: Metadata = {
  title: "AI增长决策系统 | 陈丽君作品集",
  description: "基于Dify的多Agent增长实验操作系统项目案例。",
};

const projectCase = getProjectCase("growth-os");

const outputImages = [
  {
    title: "业务背景与用户洞察",
    src: "/images/ai-projects/growth-os/test-output/contentpilot-business-insight.png",
    note: "系统将 ContentPilot AI 的产品阶段、目标、约束和用户分群整理成增长诊断前置输入。",
  },
  {
    title: "关键发现与增长诊断",
    src: "/images/ai-projects/growth-os/test-output/contentpilot-diagnosis.png",
    note: "输出P0/P1/P2问题优先级，明确7日留存、激活率和持续生产习惯之间的核心瓶颈。",
  },
  {
    title: "增长实验设计",
    src: "/images/ai-projects/growth-os/test-output/contentpilot-experiment-design-1.png",
    note: "围绕身份标签化模板、AI闭环保存、AI评分召回等场景设计可验证实验。",
  },
  {
    title: "运营素材与触达话术",
    src: "/images/ai-projects/growth-os/test-output/contentpilot-materials-1.png",
    note: "生成Push文案A/B、社群话术和实验触发策略，将增长方案转化为可执行素材。",
  },
  {
    title: "小红书与短视频脚本",
    src: "/images/ai-projects/growth-os/test-output/contentpilot-materials-2.png",
    note: "进一步输出小红书标题、正文大纲、标签、CTA和短视频分镜脚本。",
  },
  {
    title: "指标体系与触发时机",
    src: "/images/ai-projects/growth-os/test-output/contentpilot-metrics.png",
    note: "沉淀北极星指标、漏斗指标和素材触发时机，支持后续实验监测与复盘。",
  },
];

export default function GrowthOsPage() {
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
            <h1 className="max-w-5xl text-[clamp(2.1rem,4.8vw,5.8rem)] font-black leading-[1.02] tracking-normal">
              {projectCase.title}
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-9 text-[#3f3a35]">{projectCase.subtitle}</p>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-9 text-[#5c5751]">{projectCase.overview}</p>
            <a
              href="/docs/ai-projects/ai-growth-experiment-report.docx"
              className="glass-chip mt-8 inline-flex px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#171513] transition hover:bg-[#171513] hover:text-[#f6f1ec]"
              download
            >
              下载Word作战报告
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <InfoPanel title="项目职责" items={projectCase.roles} />
          <InfoPanel title="使用工具" items={projectCase.tools} />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-8">
          {projectCase.sections.map((section) => (
            <article key={section.title} className="glass-panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.35fr_0.65fr] lg:p-12">
              <div>
                <p className="section-kicker">{section.kicker}</p>
                <h2 className="text-[clamp(1.55rem,2.4vw,2.8rem)] font-black leading-tight">{section.title}</h2>
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
        <div className="mx-auto grid max-w-[1700px] gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="section-kicker">Workflow Evidence</p>
              <h2 className="section-title">Dify完整工作流</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#504b45]">
              下图为AI增长实验操作系统的完整节点结构，从原始输入、业务抽取、RAG检索、多Agent推理，到Word报告导出和Answer节点输出，展示了系统级AI运营工作流的实际搭建能力。
            </p>
          </div>
          <div className="glass-panel overflow-hidden p-4 sm:p-6">
            <div className="relative h-[360px] overflow-auto bg-[#171513]/90 p-3 sm:h-[520px]">
              <Image
                src="/images/ai-projects/growth-os-workflow.png"
                alt="AI增长实验操作系统Dify完整工作流"
                width={3584}
                height={768}
                className="h-full min-w-[1600px] object-contain"
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
              <h2 className="section-title">测试输出样例</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#504b45]">
              以下为AI增长实验操作系统的另一组测试结果，案例对象为 ContentPilot AI。系统围绕激活率、7日留存、首次生成后的保存与再使用行为，输出业务背景、用户洞察、增长诊断、实验设计、运营素材和指标体系。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {outputImages.map((item, index) => (
              <article key={item.src} className="glass-panel overflow-hidden">
                <div className="relative flex h-[560px] items-center justify-center overflow-hidden bg-[#171513]/88 p-3 sm:h-[620px]">
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
                  <h3 className="text-xl font-black text-[#171513]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#625c55]">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="section-kicker">Workflow</p>
            <h2 className="section-title">系统链路</h2>
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
            <h2 className="section-title">核心能力</h2>
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

      <section className="min-h-screen px-5 py-20 text-[#f6f1ec] sm:px-8">
        <div className="glass-dark mx-auto flex min-h-[72vh] max-w-[1700px] flex-col justify-between gap-16 p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#dcaec1]">Outcome</p>
              <h2 className="text-[clamp(1.7rem,3.2vw,4.2rem)] font-black leading-[1.08]">项目成果</h2>
            </div>
            <div>
              <p className="max-w-4xl text-2xl leading-10 text-[#e9e0d8]">{projectCase.outcome}</p>
              <a
                href="/docs/ai-projects/ai-growth-experiment-report.docx"
                className="mt-10 inline-flex border border-white/15 bg-white/[0.08] px-5 py-5 text-lg font-semibold backdrop-blur-xl transition hover:bg-white/15"
                download
              >
                下载《AI运营增长实验作战报告》
              </a>
            </div>
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

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="glass-panel bg-[rgba(248,218,229,0.38)] p-7 sm:p-10">
      <h2 className="mb-8 text-2xl font-black">{title}</h2>
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
