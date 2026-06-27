import Link from "next/link";
import type { Metadata } from "next";
import { getProjectCase } from "@/data/projectCases";

export const metadata: Metadata = {
  title: "AI内容矩阵自动化工作流 | 陈丽君作品集",
  description: "基于Dify的多平台运营内容自动生成系统项目案例。",
};

const projectCase = getProjectCase("ai-content-matrix");

export default function AiContentMatrixPage() {
  if (!projectCase) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f6f1ec] text-[#171513]">
      <header className="px-5 py-5 sm:px-8">
        <nav className="mx-auto flex max-w-[1700px] items-center justify-between border border-black/10 bg-[#f6f1ec]/80 px-4 py-3 text-[12px] uppercase tracking-[0.18em] backdrop-blur-xl">
          <Link href="/" className="font-semibold transition hover:text-[#7a86a1]">
            陈丽君作品集
          </Link>
          <Link href="/#work" className="border border-[#1e1c1a] px-4 py-2 transition hover:bg-[#1e1c1a] hover:text-[#f6f1ec]">
            返回项目
          </Link>
        </nav>
      </header>

      <section className="px-5 pb-16 pt-10 sm:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1700px] gap-10 border-b border-black/10 pb-14 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className="section-kicker">{projectCase.eyebrow}</p>
            <h1 className="max-w-5xl text-[clamp(2.4rem,6vw,7rem)] font-black leading-[1.02] tracking-normal">
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
            <article key={section.title} className="grid gap-8 border border-black/10 bg-[#f8f5ef] p-7 sm:p-10 lg:grid-cols-[0.35fr_0.65fr] lg:p-12">
              <div>
                <p className="section-kicker">{section.kicker}</p>
                <h2 className="text-[clamp(1.8rem,3vw,3.4rem)] font-black leading-tight">{section.title}</h2>
              </div>
              <div>
                <p className="text-xl leading-9 text-[#403c37]">{section.body}</p>
                {section.points ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <span key={point} className="border border-black/10 bg-[#efe8ee] px-4 py-3 text-sm font-semibold text-[#3b353b]">
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

      <section className="bg-[#e7edf2] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="section-kicker">Workflow</p>
            <h2 className="section-title">工作流结构</h2>
          </div>
          <div className="grid gap-3">
            {projectCase.workflow.map((step, index) => (
              <div key={step} className="grid gap-4 border border-black/10 bg-[#f8f5ef] p-5 sm:grid-cols-[88px_1fr] sm:items-center">
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
              <div key={feature} className="min-h-[150px] border border-black/10 bg-[#f8f5ef] p-6">
                <p className="text-xl font-bold leading-8">{feature}</p>
              </div>
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
              <span key={tool} className="border border-black/10 bg-[#e8d8df] px-4 py-3 text-sm font-semibold text-[#342e33]">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#171513] px-5 py-20 text-[#f6f1ec] sm:px-8">
        <div className="mx-auto flex min-h-[72vh] max-w-[1700px] flex-col justify-between gap-16">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#dcaec1]">Outcome</p>
              <h2 className="text-[clamp(2rem,4vw,5.2rem)] font-black leading-[1.08]">项目成果</h2>
            </div>
            <p className="max-w-4xl text-2xl leading-10 text-[#e9e0d8]">{projectCase.outcome}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectCase.applications.map((application) => (
              <span key={application} className="border border-white/15 bg-white/5 px-5 py-5 text-lg font-semibold">
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
  const background = tone === "blue" ? "bg-[#e7edf2]" : "bg-[#efe0e7]";

  return (
    <article className={`${background} border border-black/10 p-7 sm:p-10`}>
      <h2 className="mb-8 text-3xl font-black">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="border border-black/10 bg-[#f8f5ef] px-4 py-3 text-sm font-semibold text-[#342f2b]">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
