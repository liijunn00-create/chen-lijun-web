import { experienceCases } from "@/data/siteContent";
import { Reveal } from "./Reveal";

export function ExperienceCases() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">业务场景与成果</p>
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <h2 className="section-title">经历保持简洁，重点呈现业务价值</h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5c5751]">
              实习与校园经历不按时间堆叠，而按业务场景展示：B2B内容增长、硬科技SEO、校园传播统筹，对应内容策略、线索转化和项目执行能力。
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {experienceCases.map((item, index) => (
            <Reveal key={item.title} className="glass-panel-strong p-6 sm:p-8" delay={index * 0.06}>
              <div className="flex min-h-full flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7a86a1]">{item.org}</p>
                <h3 className="single-line-title mt-4 text-[clamp(1.18rem,1.55vw,1.6rem)] font-black leading-tight text-[#171513]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#4d4842]">{item.context}</p>

                <div className="mt-7 border-t border-black/10 pt-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#8a847b]">关键动作</p>
                  <div className="grid gap-3">
                    {item.actions.map((action) => (
                      <span key={action} className="text-sm leading-6 text-[#4d4842]">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {item.results.map((result) => (
                    <span key={result} className="glass-chip px-3 py-3 text-sm font-semibold text-[#342e33]">
                      {result}
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
