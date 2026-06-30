import { skillTagGroups } from "@/data/siteContent";
import { Reveal } from "./Reveal";
import { TextPressure } from "./TextPressure";

export function SkillTags() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-[1700px] gap-10">
        <Reveal>
          <p className="section-kicker">
            <TextPressure text="工具与技能栈" />
          </p>
          <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <h2 className="single-line-title text-[clamp(1.45rem,2.25vw,2.75rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
              <TextPressure text="强调可迁移的AI与运营能力" />
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[#5c5751]">
              技能标签围绕岗位能力组织，突出 <span className="soft-mark px-1">AI 工具使用</span>、内容运营、增长实验、产品数据意识和视觉视频交付能力
            </p>
          </div>
        </Reveal>

        <Reveal className="glass-panel-strong grid gap-0 overflow-hidden md:grid-cols-2 xl:grid-cols-3" delay={0.08}>
          {skillTagGroups.map((group) => (
            <div key={group.title} className="border-b border-r border-black/10 p-6 sm:p-7">
              <h3 className="single-line-title text-lg font-black text-[#171513]">
                <TextPressure text={group.title} />
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="glass-chip px-3 py-2 text-sm text-[#342e33]">
                    <TextPressure text={tag} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
