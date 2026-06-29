import { capabilityCards } from "@/data/siteContent";
import { Reveal } from "./Reveal";

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="section-shell pt-8">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">核心能力证明</p>
          <div className="grid gap-6 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
            <h2 className="section-title">能力不是罗列，是被项目验证</h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5c5751]">
              网站内容按能力证据组织：AI系统、内容增长、业务转化、活动执行、视觉表达和视频脚本都落到可查看的项目与作品材料中。
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityCards.map((capability, index) => (
            <Reveal
              key={capability.title}
              className="glass-panel-strong group flex min-h-[330px] flex-col justify-between overflow-hidden p-0 transition hover:-translate-y-1 hover:border-[#9b84b4]/40"
              delay={index * 0.05}
            >
              <div className="p-6 sm:p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="h-2 w-10 bg-[#9b84b4]/70 transition group-hover:w-16" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7a86a1]">Capability</span>
                </div>
                <h3 className="single-line-title text-[clamp(1.18rem,1.55vw,1.55rem)] font-black leading-tight text-[#171513]">{capability.title}</h3>
                <p className="mt-5 text-base leading-7 text-[#4d4842]">{capability.summary}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {capability.proof.map((item) => (
                    <span key={item} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-black/10 bg-white/12 p-5">
                <div className="flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-[0.12em] text-[#6d6870]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
