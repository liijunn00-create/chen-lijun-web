"use client";

import { heroContent } from "@/data/siteContent";

const signalNodes = [
  { label: "知识解锁", meta: "Knowledge", x: "14%", y: "24%" },
  { label: "策略判断", meta: "Decision", x: "42%", y: "36%", mobileHidden: true },
  { label: "工作流智能", meta: "Workflow", x: "20%", y: "64%" },
  { label: "内容系统", meta: "Content", x: "66%", y: "28%" },
  { label: "运营执行", meta: "Operation", x: "72%", y: "68%" },
];

const conceptTags = ["System 01 Unlocked", "Workflow Intelligence", "AI Operations Portfolio"];

const workflowCards = [
  { title: "AI系统", label: "System 01", value: "Unlocked" },
  { title: "知识解锁", label: "RAG Layer", value: "Context Ready" },
  { title: "工作流智能", label: "Agent Flow", value: "Running" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-24 sm:px-8 lg:min-h-screen">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-18 saturate-[0.55]"
        src="/images/hero-motion.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-cover-field" />
      <div className="relative z-10 mx-auto flex max-w-[1700px] flex-col justify-end pb-8 lg:min-h-[calc(100vh-6rem)] lg:pb-10">
        <div className="glass-panel-strong hero-stage mb-6 grid gap-6 overflow-hidden p-6 sm:p-9 lg:mb-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-stretch lg:p-10">
          <div className="hero-ghost-word" aria-hidden="true">
            Workflow Intelligence
          </div>
          <div className="hero-sphere hero-sphere-a" />
          <div className="hero-sphere hero-sphere-b" />
          <div className="relative z-10 flex min-h-[440px] flex-col justify-between sm:min-h-[620px] lg:min-h-[620px]">
            <div>
              <div className="hero-soft-in mb-8 flex flex-wrap gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#4f5e73]">
                {conceptTags.map((tag) => (
                  <span key={tag} className="hero-status-chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-rise single-line-title max-w-[1120px] text-[clamp(2.7rem,5.7vw,6rem)] font-black leading-[0.96] tracking-normal text-[#17151a]">
                  {heroContent.titleLines[0]}
                </h1>
              </div>
              <div className="overflow-hidden pb-2">
                <h1 className="hero-rise-delay single-line-title text-[clamp(2.7rem,5.7vw,6rem)] font-black leading-[0.96] tracking-normal text-[#17151a]">
                  {heroContent.titleLines[1]}
                </h1>
              </div>
            </div>
            <div className="hero-soft-in-late mt-8 max-w-4xl">
              <p className="max-w-3xl text-[clamp(1rem,1.28vw,1.28rem)] leading-[1.7] text-[#2f2a30]">
                Intelligent workflows, content systems, and AI-powered operations
              </p>
              <div className="mt-8 grid max-w-3xl gap-3 text-sm text-[#4b454d] sm:grid-cols-3">
                {workflowCards.map((card) => (
                  <div key={card.title} className="hero-mini-card">
                    <span>{card.label}</span>
                    <strong>{card.title}</strong>
                    <em>{card.value}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-soft-in-late cover-board workflow-cover relative min-h-[470px] overflow-hidden p-5 sm:min-h-[560px] sm:p-7 lg:min-h-[620px]">
            <div className="cover-board-grid" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#6f6770]">
                <span>System 01 Unlocked</span>
                <span>AI Native</span>
              </div>
              <div className="studio-rule mt-5" />
            </div>

            <div className="cover-map relative z-10 my-8 min-h-[300px] sm:my-10 sm:min-h-[360px] lg:min-h-[390px]">
              <svg className="cover-paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M11 25 C25 14, 38 31, 49 32 S68 18, 84 28" />
                <path d="M16 66 C31 55, 43 45, 50 39 S64 43, 77 70" />
                <path d="M20 69 C34 82, 54 76, 62 58 S73 40, 86 34" />
                <path d="M44 38 C52 50, 58 57, 72 62" />
              </svg>
              <div className="unlock-ring" />
              <div className="floating-module floating-module-a">Knowledge Base</div>
              <div className="floating-module floating-module-b">Prompt Layer</div>
              {signalNodes.map((node) => (
                <div
                  key={node.label}
                  className={`cover-node absolute z-20 min-w-[7.25rem] -translate-x-1/2 -translate-y-1/2 grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1 border border-black/10 bg-[#f4f6f9]/82 px-2.5 py-2 text-sm shadow-[0_16px_40px_rgba(78,89,110,0.11)] backdrop-blur-xl sm:grid sm:min-w-[9.5rem] sm:px-4 sm:py-3 sm:text-base ${
                    node.mobileHidden ? "hidden" : "grid"
                  }`}
                  style={{ left: node.x, top: node.y }}
                >
                  <span className="signal-dot h-2.5 w-2.5 rounded-full bg-[#9b84b4]" />
                  <span className="whitespace-nowrap font-semibold text-[#17151a]">{node.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#667f9a]">{node.meta}</span>
                </div>
              ))}
              <div className="cover-core">
                <span>Workflow Intelligence</span>
                <strong>AI系统 / 知识解锁 / 工作流智能</strong>
              </div>
            </div>

            <div className="relative z-10 grid gap-3 sm:grid-cols-3">
              {heroContent.keywords.slice(0, 3).map((item, index) => (
                <div key={item} className="workflow-token">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="hero-soft-in-late glass-panel grid gap-0 overflow-hidden text-sm uppercase tracking-[0.18em] text-[#4b4843] md:grid-cols-3">
          {heroContent.ctas.map((cta) => (
            <a key={cta.href} href={cta.href} className="border-black/10 px-5 py-5 transition hover:bg-white/20 hover:text-[#17151a] md:border-r">
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
