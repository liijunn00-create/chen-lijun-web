import Image from "next/image";
import { evidenceGroups } from "@/data/evidence";
import { Reveal } from "./Reveal";

export function EvidenceStudio() {
  return (
    <section id="evidence" className="section-shell bg-[#f6f1ec]">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">Evidence Studio</p>
          <h2 className="section-title max-w-6xl">我会在这里集中展示真实作品证据，而不是把素材随意堆满页面。</h2>
        </Reveal>
        <div className="space-y-14">
          {evidenceGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <section className="border-t border-black/12 pt-7">
                <div className="mb-8 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#7a86a1]">{group.subtitle}</p>
                    <h3 className="text-[clamp(2rem,4vw,5.4rem)] font-black uppercase leading-[0.92] tracking-normal text-[#171513]">
                      {group.title}
                    </h3>
                  </div>
                  <p className="max-w-3xl text-lg leading-8 text-[#504b45]">{group.description}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item, itemIndex) => (
                    <article
                      key={`${group.title}-${item.title}`}
                      className={
                        item.type === "placeholder"
                          ? "min-h-[300px] border border-dashed border-black/20 bg-[#eee7df] p-6"
                          : "border border-black/10 bg-[#fbf8f3]"
                      }
                    >
                      {item.type === "image" && item.src ? (
                        <div className="relative flex h-[520px] items-center justify-center overflow-hidden bg-[#e4dfd7] p-3">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-contain"
                            sizes="(min-width: 1024px) 25vw, 100vw"
                            priority={groupIndex === 0 && itemIndex < 2}
                          />
                        </div>
                      ) : null}
                      {item.type === "pdf" && item.src ? (
                        <a
                          href={item.src}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-[520px] flex-col justify-between bg-[#dfe7ec] p-6 transition hover:bg-[#d8e1e8]"
                        >
                          <span className="text-xs uppercase tracking-[0.22em] text-[#6a7580]">PDF Document</span>
                          <span className="text-4xl font-black uppercase leading-none text-[#171513]">Open Full Plan</span>
                        </a>
                      ) : null}
                      {item.type === "placeholder" ? (
                        <div className="flex h-full min-h-[260px] flex-col justify-between">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#938b82]">Reserved Slot</span>
                          <p className="max-w-sm text-3xl font-semibold leading-tight text-[#292520]">{item.title}</p>
                        </div>
                      ) : null}
                      <div className="p-5">
                        <h4 className="text-xl font-semibold text-[#171513]">{item.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-[#625c55]">{item.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
