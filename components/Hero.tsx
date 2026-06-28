"use client";

import { heroContent } from "@/data/siteContent";

const signalNodes = [
  { label: "业务输入", meta: "Brief" },
  { label: "增长诊断", meta: "RAG" },
  { label: "实验设计", meta: "Agent" },
  { label: "内容生成", meta: "AIGC" },
  { label: "作品证据", meta: "Proof" },
];

const proofStats = [
  { value: "2", label: "核心AI系统" },
  { value: "6", label: "能力证据模块" },
  { value: "210万+", label: "传播曝光" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-24 sm:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25 saturate-[0.62]"
        src="/images/hero-motion.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(253,246,249,0.82),rgba(239,214,226,0.58)_45%,rgba(207,222,235,0.62))]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1700px] flex-col justify-end pb-10">
        <div className="glass-panel-strong mb-8 grid gap-8 overflow-hidden p-6 sm:p-9 lg:grid-cols-[0.57fr_0.43fr] lg:items-stretch lg:p-10">
          <div className="flex flex-col justify-between">
            <div>
              <p className="hero-soft-in mb-6 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6c6b66]">
                {heroContent.kicker}
              </p>
              <div className="overflow-hidden">
                <h1 className="hero-rise single-line-title max-w-[1120px] text-[clamp(2.6rem,6vw,7.2rem)] font-black leading-[0.94] tracking-normal text-[#17151a]">
                  {heroContent.titleLines[0]}
                </h1>
              </div>
              <div className="overflow-hidden pb-2">
                <h1 className="hero-rise-delay single-line-title text-[clamp(2.6rem,6vw,7.2rem)] font-black leading-[0.94] tracking-normal text-[#17151a]">
                  {heroContent.titleLines[1]}
                </h1>
              </div>
            </div>
            <div className="hero-soft-in-late mt-8 max-w-4xl">
              <p className="text-[clamp(1.05rem,1.6vw,1.65rem)] leading-[1.55] text-[#2f2a30]">
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

          <aside className="hero-soft-in-late glass-panel relative flex min-h-[520px] flex-col justify-between overflow-hidden p-5 sm:p-7">
            <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-[#cfdeeb]/40 blur-3xl" />
            <div className="absolute -bottom-20 left-12 h-64 w-64 rounded-full bg-[#efd6e2]/55 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#6f6770]">
                <span>Growth OS Board</span>
                <span>Live Proof</span>
              </div>
              <div className="studio-rule mt-5" />
            </div>

            <div className="relative z-10 my-10 grid gap-4">
              {signalNodes.map((node) => (
                <div
                  key={node.label}
                  className="grid grid-cols-[34px_1fr_auto] items-center gap-4"
                >
                  <span className="signal-dot flex h-3 w-3 rounded-full bg-[#b66f91]" />
                  <span className="glass-chip px-4 py-3 text-base font-semibold text-[#17151a]">{node.label}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5d718d]">{node.meta}</span>
                </div>
              ))}
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

        <div className="hero-soft-in-late glass-panel grid gap-0 overflow-hidden text-sm uppercase tracking-[0.18em] text-[#5b5852] md:grid-cols-3">
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
