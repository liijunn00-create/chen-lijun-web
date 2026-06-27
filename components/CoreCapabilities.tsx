import { capabilityCards } from "@/data/siteContent";
import { Reveal } from "./Reveal";

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="section-shell pt-8">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">核心能力证明</p>
          <div className="grid gap-6 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
            <h2 className="section-title">能力不是罗列，是被项目验证。</h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5c5751]">
              网站内容按能力证据组织：AI系统、内容增长、业务转化、活动执行、视觉表达和视频脚本都落到可查看的项目与作品材料中。
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityCards.map((capability, index) => (
            <Reveal
              key={capability.title}
              className="glass-panel-strong flex min-h-[330px] flex-col justify-between p-6 sm:p-7"
              delay={index * 0.05}
            >
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a86a1]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-black leading-tight text-[#171513]">
                  {capability.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#4d4842]">{capability.summary}</p>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8a847b]">对应证据</p>
                  <div className="flex flex-wrap gap-2">
                    {capability.proof.map((item) => (
                      <span key={item} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
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
