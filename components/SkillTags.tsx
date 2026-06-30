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
              AI运营能力
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[#5c5751]">
              技能标签围绕岗位能力组织，适配 <span className="soft-mark px-1">AI 工具使用</span>、内容运营、增长实验、产品数据意识和视觉视频交付能力
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillTagGroups.map((group, index) => (
            <Reveal
              key={group.title}
              className="liquid-clear-panel skill-tag-card flex min-h-[260px] flex-col justify-between overflow-hidden p-6 transition hover:-translate-y-1 hover:border-[#9b84b4]/40 sm:p-7"
              delay={index * 0.05}
            >
              <div>
                <h3 className="single-line-title text-lg font-black text-[#171513]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span key={tag} className="liquid-clear-chip px-3 py-2 text-sm text-[#342e33]">
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
