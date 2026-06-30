import { TextPressure } from "./TextPressure";
import Link from "next/link";
import { projects } from "@/data/projects";
import { featuredWorkContent } from "@/data/siteContent";
import { Reveal } from "./Reveal";

export function FeaturedWork() {
  return (
    <section id="work" className="section-shell">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">精选项目</p>
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <h2 className="section-title max-w-5xl"><TextPressure text={featuredWorkContent.title} /></h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5c5751]">
              AI项目被拆成<span className="soft-mark px-1">决策层</span>与<span className="soft-mark px-1">执行层</span>：增长实验系统负责判断问题与设计方案，内容矩阵系统负责生成多平台运营素材
            </p>
          </div>
        </Reveal>
        <div className="case-gallery space-y-8">
          {projects.map((project, index) => {
            const card = (
              <article className={`case-exhibit case-study-card group grid overflow-hidden ${index % 2 === 1 ? "lg:grid-cols-[0.5fr_0.5fr]" : "lg:grid-cols-[0.46fr_0.54fr]"}`}>
                <div className={`case-visual relative min-h-[340px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="case-visual-grid" />
                  <div className="case-orbit case-orbit-a" />
                  <div className="case-orbit case-orbit-b" />
                  <div className="case-plate">
                    <span>{project.eyebrow}</span>
                    <strong>{project.title}</strong>
                  </div>
                  <div className="case-signal-list">
                    {project.metrics.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                </div>
                <div className="case-study-body flex min-h-[390px] flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="case-type-label">{project.eyebrow}</span>
                      <span className="glass-chip px-3 py-2 text-xs font-semibold text-[#6f6770]">{project.period}</span>
                    </div>
                    <div className="studio-rule mt-6" />
                  </div>
                  <div>
                    <h3 className="single-line-title text-[clamp(1.45rem,2.05vw,2.55rem)] font-black leading-[1.04] tracking-normal text-[#17151a]">
                      {project.title}
                    </h3>
                    <div className="case-meta-grid mt-7">
                      <div>
                        <span>我的角色</span>
                        <strong>{project.role}</strong>
                      </div>
                      <div>
                        <span>使用工具</span>
                        <strong>{project.tags.slice(0, 3).join(" / ")}</strong>
                      </div>
                    </div>
                  </div>
                  <p className="mt-8 max-w-5xl text-[clamp(1rem,1.25vw,1.28rem)] leading-8 text-[#403c37]">{project.summary}</p>
                  <div className="case-outcome-row mt-9">
                    <span>成果 / 亮点</span>
                    <div>
                      {project.metrics.map((metric) => (
                        <strong key={metric}>{metric}</strong>
                      ))}
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.detailHref ? (
                    <span className="mt-10 inline-flex w-fit border border-[#171513]/18 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#171513] transition group-hover:bg-[#171513] group-hover:text-[#f8f5ef]">
                      查看项目详情
                    </span>
                  ) : null}
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
