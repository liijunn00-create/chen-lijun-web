import Link from "next/link";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";

export function FeaturedWork() {
  return (
    <section id="work" className="section-shell">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">精选项目</p>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title max-w-5xl">先看项目，再看经历</h2>
            <p className="max-w-md text-lg leading-8 text-[#5c5751]">
              AI项目被拆成<span className="soft-mark px-1">决策层</span>与<span className="soft-mark px-1">执行层</span>：增长实验系统负责判断问题与设计方案，内容矩阵系统负责生成多平台运营素材
            </p>
          </div>
        </Reveal>
        <div className="space-y-5">
          {projects.map((project, index) => {
            const card = (
              <article className="glass-panel-strong group grid overflow-hidden transition duration-500 hover:border-[#b67f98]/45 hover:bg-[#fff0f7]/64 lg:grid-cols-[0.34fr_0.66fr]">
                <div className="flex min-h-[300px] flex-col justify-between border-b border-black/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#7a86a1]">{project.eyebrow}</span>
                      <span className="glass-chip px-3 py-2 text-xs font-semibold text-[#6f6770]">{project.period}</span>
                    </div>
                    <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-[#b66f91]">
                      Module {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div>
                    <h3 className="single-line-title text-[clamp(1.45rem,2.1vw,2.75rem)] font-black leading-[1.02] tracking-normal text-[#17151a]">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-base font-semibold leading-7 text-[#4b454d]">{project.role}</p>
                  </div>
                </div>
                <div className="flex min-h-[300px] flex-col justify-between p-7 sm:p-9">
                  <p className="max-w-5xl text-[clamp(1.05rem,1.45vw,1.45rem)] leading-9 text-[#403c37]">{project.summary}</p>
                  <div className="mt-9 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.detailHref ? (
                      <span className="glass-chip inline-flex px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#171513] transition group-hover:bg-[#171513] group-hover:text-[#f8f5ef]">
                        查看项目详情
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-8 grid gap-2 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="border-t border-black/10 pt-4 text-sm font-semibold text-[#5c5751]">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );

            return (
              <Reveal key={project.slug} delay={index * 0.08}>
                {project.detailHref ? (
                  <Link href={project.detailHref} className="block text-inherit">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
