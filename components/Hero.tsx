"use client";

import { heroContent } from "@/data/siteContent";

const signalNodes = [
  { label: "业务输入", meta: "Brief", x: "8%", y: "18%" },
  { label: "用户洞察", meta: "Insight", x: "38%", y: "34%", mobileHidden: true },
  { label: "增长诊断", meta: "RAG", x: "16%", y: "58%" },
  { label: "实验设计", meta: "Agent", x: "58%", y: "54%", mobileHidden: true },
  { label: "内容生成", meta: "AIGC", x: "72%", y: "26%" },
  { label: "作品证据", meta: "Proof", x: "70%", y: "74%" },
];

const proofStats = [
  { value: "2", label: "核心AI系统" },
  { value: "6", label: "能力证据模块" },
  { value: "210万+", label: "传播曝光" },
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
        <div className="glass-panel-strong hero-stage mb-6 grid gap-6 overflow-hidden p-6 sm:p-9 lg:mb-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-stretch lg:p-10">
          <div className="flex min-h-[390px] flex-col justify-between sm:min-h-[620px] lg:min-h-[600px]">
            <div>
              <p className="hero-soft-in mb-6 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6c6b66]">
                {heroContent.kicker}
              </p>
              <div className="overflow-hidden">
                <h1 className="hero-rise single-line-title max-w-[1120px] text-[clamp(2.7rem,6vw,6.8rem)] font-black leading-[0.96] tracking-normal text-[#17151a]">
                  {heroContent.titleLines[0]}
                </h1>
              </div>
              <div className="overflow-hidden pb-2">
                <h1 className="hero-rise-delay single-line-title text-[clamp(2.7rem,6vw,6.8rem)] font-black leading-[0.96] tracking-normal text-[#17151a]">
                  {heroContent.titleLines[1]}
                </h1>
              </div>
            </div>
            <div className="hero-soft-in-late mt-8 max-w-4xl">
              <p className="text-[clamp(1rem,1.45vw,1.45rem)] leading-[1.58] text-[#2f2a30]">
                以<span className="soft-mark px-1">AI工作流</span>、内容增长和产品运营思维为核心，将运营流程拆解为可运行、可复用、可迭代的增长系统
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                {heroContent.keywords.map((item) => (
                  <span key={item} className="glass-chip px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-soft-in-late cover-board relative min-h-[430px] overflow-hidden p-5 sm:min-h-[520px] sm:p-7 lg:min-h-[600px]">
            <div className="cover-board-grid" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#6f6770]">
                <span>增长系统图谱</span>
                <span>AI Native</span>
              </div>
              <div className="studio-rule mt-5" />
            </div>

            <div className="cover-map relative z-10 my-8 min-h-[300px] sm:my-10 sm:min-h-[360px] lg:min-h-[390px]">
              <svg className="cover-paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M9 21 C26 18, 29 34, 42 36 S63 25, 74 28" fill="none" stroke="rgba(93,113,141,0.34)" strokeWidth="0.55" strokeLinecap="round" />
                <path d="M18 61 C34 58, 36 42, 46 39 S58 50, 68 57 S72 70, 75 78" fill="none" stroke="rgba(182,111,145,0.34)" strokeWidth="0.55" strokeLinecap="round" />
                <path d="M22 64 C34 78, 49 77, 60 58 S70 35, 80 28" fill="none" stroke="rgba(93,113,141,0.34)" strokeWidth="0.55" strokeLinecap="round" />
                <path d="M44 38 C52 50, 57 57, 66 57" fill="none" stroke="rgba(182,111,145,0.34)" strokeWidth="0.55" strokeLinecap="round" />
              </svg>
              {signalNodes.map((node) => (
                <div
                  key={node.label}
                  className={`cover-node absolute z-20 min-w-[7.25rem] -translate-x-1/2 -translate-y-1/2 grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1 border border-black/10 bg-[#fff6fa]/80 px-2.5 py-2 text-sm shadow-[0_16px_40px_rgba(81,75,91,0.10)] backdrop-blur-xl sm:grid sm:min-w-[9.5rem] sm:px-4 sm:py-3 sm:text-base ${
                    node.mobileHidden ? "hidden" : "grid"
                  }`}
                  style={{ left: node.x, top: node.y }}
                >
                  <span className="signal-dot h-2.5 w-2.5 rounded-full bg-[#b66f91]" />
                  <span className="whitespace-nowrap font-semibold text-[#17151a]">{node.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5d718d]">{node.meta}</span>
                </div>
              ))}
              <div className="cover-core">
                <span>Growth OS</span>
                <strong>内容到增长决策</strong>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="glass-panel-strong p-4">
                  <div className="text-2xl font-black text-[#17151a]">{stat.value}</div>
                  <div className="mt-2 text-xs leading-5 text-[#6f6770]">{stat.label}</div>
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
