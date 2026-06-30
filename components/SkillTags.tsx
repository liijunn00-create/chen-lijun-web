import { skillTagGroups } from "@/data/siteContent";
import { Reveal } from "./Reveal";

export function SkillTags() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">工具与技能栈</p>
          <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <h2 className="single-line-title text-[clamp(1.45rem,2.25vw,2.75rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
              强调可迁移的AI与运营能力
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[#5c5751]">
              技能标签围绕岗位能力组织，突出 <span className="soft-mark px-1">AI 工具使用</span>、内容运营、增长实验、产品数据意识和视觉视频交付能力
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="case-exhibit case-study-card skill-stack-card overflow-hidden">
            <div className="case-study-body case-study-body-solo p-7 sm:p-10 lg:p-12">
              <div className="case-study-layout skill-stack-layout">
                <div className="skill-stack-grid">
                  {skillTagGroups.map((group) => (
                    <div key={group.title} className="skill-stack-group">
                      <h3 className="single-line-title text-lg font-black text-[#171513]">{group.title}</h3>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.tags.map((tag) => (
                          <span key={tag} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="case-liquid-visual skill-liquid-visual" aria-hidden="true">
                  <div className="case-liquid-orb case-liquid-orb-a" />
                  <div className="case-liquid-orb case-liquid-orb-b" />
                  <div className="case-liquid-capsule case-liquid-capsule-eyebrow">Toolkit</div>
                  <div className="case-liquid-capsule case-liquid-capsule-title">AI运营工具链</div>
                  <div className="case-liquid-metrics">
                    <span>AI Workflow</span>
                    <span>Growth Ops</span>
                    <span>Visual Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
