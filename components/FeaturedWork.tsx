import Link from "next/link";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { TextPressure } from "./TextPressure";

export function FeaturedWork() {
  return (
    <section id="work" className="section-shell">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">
            <TextPressure text="精选项目" />
          </p>
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <h2 className="section-title max-w-5xl">
              <TextPressure text="把项目作为能力证据来观看" />
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5c5751]">
              AI项目被拆成<span className="soft-mark px-1">决策层</span>与<span className="soft-mark px-1">执行层</span>：增长实验系统负责判断问题与设计方案，内容矩阵系统负责生成多平台运营素材
            </p>
          </div>
        </Reveal>
        <div className="case-gallery space-y-8">
          {projects.map((project, index) => {
            const card = (
              <article className="case-exhibit case-study-card case-study-card-solo group overflow-hidden">
                <div className="case-study-body case-study-body-solo p-7 sm:p-10 lg:p-12">
                  <div className="case-study-layout">
                    <div className="case-copy">
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="case-type-label">
                            <TextPressure text={project.eyebrow} />
                          </span>
                          <span className="glass-chip px-3 py-2 text-xs font-semibold text-[#6f6770]">
                            <TextPressure text={project.period} />
                          </span>
                        </div>
                        <div className="studio-rule mt-6" />
                      </div>

                      <div>
                        <h3 className="single-line-title text-[clamp(1.45rem,2.05vw,2.55rem)] font-black leading-[1.04] tracking-normal text-[#17151a]">
                          <TextPressure text={project.title} />
                        </h3>
                        <div className="case-meta-grid mt-7">
                          <div>
                            <span>
                              <TextPressure text="我的角色" />
                            </span>
                            <strong>
                              <TextPressure text={project.role} />
                            </strong>
                          </div>
                          <div>
                            <span>
                              <TextPressure text="使用工具" />
                            </span>
                            <strong>
                              <TextPressure text={project.tags.slice(0, 3).join(" / ")} />
                            </strong>
                          </div>
                        </div>
                      </div>
                      <p className="max-w-5xl text-[clamp(1rem,1.25vw,1.28rem)] leading-8 text-[#403c37]">{project.summary}</p>
                      <div className="case-outcome-row">
                        <span>
                          <TextPressure text="成果 / 亮点" />
                        </span>
                        <div>
                          {project.metrics.map((metric) => (
                            <strong key={metric}>
                              <TextPressure text={metric} />
                            </strong>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                            <TextPressure text={tag} />
                          </span>
                        ))}
                      </div>
                      {project.detailHref ? (
                        <span className="inline-flex w-fit border border-[#171513]/18 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#171513] transition group-hover:bg-[#171513] group-hover:text-[#f8f5ef]">
                          <TextPressure text="查看项目详情" />
                        </span>
                      ) : null}
                    </div>

                    <div className="case-liquid-visual" aria-hidden="true">
                      <div className="case-liquid-orb case-liquid-orb-a" />
                      <div className="case-liquid-orb case-liquid-orb-b" />
                      <div className="case-liquid-capsule case-liquid-capsule-eyebrow">
                        <TextPressure text={project.eyebrow} />
                      </div>
                      <div className="case-liquid-capsule case-liquid-capsule-title">
                        <TextPressure text={project.title} />
                      </div>
                      <div className="case-liquid-metrics">
                        {project.metrics.slice(0, 3).map((metric) => (
                          <span key={metric}>
                            <TextPressure text={metric} />
                          </span>
                        ))}
                      </div>
                    </div>
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
