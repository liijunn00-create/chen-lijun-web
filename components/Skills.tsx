import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="section-shell bg-[#dbe3ea]">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">Capabilities</p>
          <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
            <h2 className="section-title">我想呈现的是复合型运营能力。</h2>
            <p className="text-xl leading-8 text-[#384049]">
              内容运营、产品运营、增长策略、AI系统设计和创意生产不是分散能力，它们共同服务于一个目标：让内容产生业务结果。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <article className="flex min-h-[420px] flex-col justify-between border border-black/10 bg-[#eef3f6] p-7">
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#75808b]">0{index + 1}</p>
                  <h3 className="text-4xl font-black uppercase leading-none text-[#171513]">{group.title}</h3>
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
