"use client";

import { capabilityCards, heroContent } from "@/data/siteContent";
import { stats } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

// 屏 1 浮动信号点(与屏 2 三张能力卡的能力来源对齐)
const coverSignals = [
  { label: "知识解锁", meta: "Knowledge", x: 14, y: 26 },
  { label: "策略判断", meta: "Decision", x: 72, y: 22 },
  { label: "工作流智能", meta: "Workflow", x: 18, y: 72 },
  { label: "系统在线", meta: "System", x: 76, y: 74 },
] as const;

export function Hero() {
  // 屏 2 数据来源:前 3 项 stats + 前 3 项 capabilityCards
  const boardStats = stats.slice(0, 3);
  const boardCapabilities = capabilityCards.slice(0, 3);

  return (
    <>
      {/* 屏 1:封面(开场动画) */}
      <section
        id="top"
        className="cover-opening relative overflow-hidden px-5 pt-24 sm:px-8"
      >
        <video
          className="cover-video"
          src="/images/hero-motion.webm"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="cover-field" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex max-w-[1700px] flex-col justify-end pb-10">
          <div className="relative">
            <div className="cover-stage-wrap">
              <div className="cover-chip cover-fade-in-0">
                {heroContent.kicker}
              </div>

              <h1 className="cover-title mt-7 max-w-[1120px] text-[clamp(2.4rem,5.4vw,5.6rem)] font-black leading-[0.98] tracking-normal text-[#17151a]">
                <span className="cover-clip-line cover-clip-line-1">
                  {heroContent.titleLines[0]}
                </span>
                <span className="cover-clip-line cover-clip-line-2">
                  {heroContent.titleLines[1]}
                </span>
              </h1>

              <Reveal delay={0.42} y={14} className="cover-subline mt-7 max-w-3xl">
                <p className="text-[clamp(0.98rem,1.18vw,1.18rem)] leading-[1.7] text-[#2f2a30]">
                  {heroContent.subtitle}
                </p>
              </Reveal>
            </div>

            {/* 中心核:发光环 + 状态短语 */}
            <div className="cover-core" aria-hidden="true">
              <div className="cover-core-ring" />
              <div className="cover-core-ring cover-core-ring-soft" />
              <div className="cover-core-text">
                <span>System 01 · Unlocked</span>
                <strong>Knowledge · Decision · Workflow · System</strong>
              </div>
            </div>

            {/* 4 个浮动信号点 */}
            <div className="cover-signal-layer" aria-hidden="true">
              {coverSignals.map((node, i) => (
                <div
                  key={node.meta}
                  className={`cover-signal-dot cover-signal-dot-${i + 1}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span className="signal-dot" />
                  <div className="cover-signal-text">
                    <strong>{node.label}</strong>
                    <em>{node.meta}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 底部状态条 */}
          <Reveal delay={2.1} y={10} className="cover-status-line mt-8">
            <span className="cover-status-dot" />
            <span>System 01 · Knowledge · Decision · Workflow · System Online</span>
          </Reveal>
        </div>
      </section>

      {/* 屏 2:系统状态/证据 */}
      <section
        id="status"
        className="relative overflow-hidden px-5 pt-12 sm:px-8 sm:pt-16 lg:pt-20"
      >
        <div className="relative z-10 mx-auto max-w-[1700px]">
          <Reveal delay={2.4} y={18}>
            <span className="section-kicker">系统状态</span>
          </Reveal>

          <Reveal delay={2.45} y={22}>
            <h2 className="cover-section-title mt-5 max-w-[1080px] text-[clamp(2rem,4.4vw,4.4rem)] font-black leading-[1.02] tracking-normal text-[#17151a]">
              运营系统的运行证据
            </h2>
          </Reveal>

          <Reveal delay={2.5} y={16} className="mt-5 max-w-3xl">
            <p className="text-[clamp(0.95rem,1.12vw,1.1rem)] leading-[1.7] text-[#3a3742]">
              以可量化数据展示关键结果,以下三组指标分别对应内容分发规模、线索质量与增长转化效率
            </p>
          </Reveal>

          {/* 3 张数据卡 */}
          <div className="cover-stat-grid mt-10">
            {boardStats.map((item, i) => (
              <Reveal key={item.label} delay={2.5 + i * 0.1} y={18}>
                <div className="cover-stat">
                  <span className="cover-stat-index">{String(i + 1).padStart(2, "0")}</span>
                  <strong className="cover-stat-value">{item.value}</strong>
                  <span className="cover-stat-label">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 3 张能力卡 */}
          <div className="cover-capability-grid mt-6">
            {boardCapabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={2.8 + i * 0.1} y={20}>
                <article className="cover-capability glass-panel">
                  <header className="cover-capability-head">
                    <span className="cover-capability-tag">{`0${i + 1}`}</span>
                    <h3 className="cover-capability-title">{cap.title}</h3>
                  </header>
                  <p className="cover-capability-summary">{cap.summary}</p>
                  <ul className="cover-capability-tags">
                    {cap.tags.slice(0, 4).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
