import { aiCapabilities, skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="ai-skills" className="section-shell bg-[#dbe3ea]">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">AI能力</p>
          <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
            <h2 className="section-title">用AI将运营能力系统化。</h2>
            <p className="text-xl leading-8 text-[#384049]">
              AI不仅用于文案生成，更用于搭建工作流、知识库、Agent协作、内容生成和增长实验系统，使运营判断能够被复用、验证和持续优化。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {aiCapabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.05}>
              <article className="group flex min-h-[430px] flex-col justify-between overflow-hidden border border-black/10 bg-[#edf2f5] p-7 transition hover:bg-[#f4edf2]">
                <div>
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#75808b]">
                      能力 0{index + 1}
                    </span>
                    <span className="max-w-[12rem] text-right text-xs uppercase tracking-[0.16em] text-[#8b7585]">
                      {capability.label}
                    </span>
                  </div>
                  <h3 className="text-[clamp(1.7rem,2.5vw,3.1rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
                    {capability.title}
                  </h3>
                  <p className="mt-6 text-base leading-7 text-[#46515b]">{capability.description}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-2">
                  {capability.outputs.map((output) => (
                    <span key={output} className="border border-black/10 bg-white/35 px-3 py-2 text-sm font-semibold text-[#171513]">
                      {output}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="grid gap-8 border-t border-black/10 pt-12 lg:grid-cols-[0.48fr_0.52fr]">
            <h3 className="text-[clamp(2rem,3.8vw,4.8rem)] font-black leading-[1.05] tracking-normal text-[#171513]">
              运营能力栈
            </h3>
            <p className="text-xl leading-8 text-[#384049]">
              AI能力作为效率放大器，底层仍然依托内容策略、用户转化、产品运营和创意生产能力。相关能力将在作品集证据区持续补充真实材料。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <article className="flex min-h-[360px] flex-col justify-between border border-black/10 bg-[#eef3f6] p-7">
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#75808b]">0{index + 1}</p>
                  <h3 className="text-3xl font-black leading-tight text-[#171513]">{group.title}</h3>
                  <p className="mt-6 text-base leading-7 text-[#46515b]">{group.intro}</p>
                </div>
                <ul className="mt-8 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-black/10 pt-3 text-sm font-semibold text-[#171513]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
