import Image from "next/image";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";

export function FeaturedWork() {
  return (
    <section id="work" className="section-shell bg-[#ebe6df]">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">Featured Work</p>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title max-w-5xl">精选项目不是罗列经历，而是展示我如何拆解增长问题。</h2>
            <p className="max-w-md text-lg leading-8 text-[#5c5751]">
              三个核心方向：AI运营系统、B2B内容增长、硬科技SEO与线索转化。
            </p>
          </div>
        </Reveal>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <article className="group grid overflow-hidden border border-black/10 bg-[#f8f5ef] lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[420px] overflow-hidden border-b border-black/10 bg-[#d8dde1] lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                </div>
                <div className="flex min-h-[420px] flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <div className="mb-10 flex items-center justify-between gap-5 text-xs uppercase tracking-[0.2em] text-[#7a746d]">
                      <span>{project.eyebrow}</span>
                      <span>{project.period}</span>
                    </div>
                    <h3 className="max-w-4xl text-[clamp(2.6rem,5.8vw,7.8rem)] font-black uppercase leading-[0.88] tracking-normal text-[#171513]">
                      {project.title}
                    </h3>
                    <p className="mt-7 max-w-3xl text-xl leading-8 text-[#403c37]">{project.summary}</p>
                  </div>
                  <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8a847b]">Role</p>
                      <p className="text-lg font-semibold text-[#171513]">{project.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="border border-black/10 bg-[#e8d8df] px-3 py-2 text-sm text-[#342e33]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 grid gap-2 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="border-t border-black/10 pt-4 text-sm text-[#5c5751]">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
