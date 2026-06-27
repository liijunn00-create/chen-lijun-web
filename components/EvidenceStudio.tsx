import Image from "next/image";
import { evidenceGroups } from "@/data/evidence";
import { Reveal } from "./Reveal";

function PdfCover({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-[520px] overflow-hidden bg-[#e4dde5] p-6 transition"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,242,236,0.96),rgba(225,207,218,0.86)_46%,rgba(198,215,225,0.82))]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(23,21,19,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,19,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute -right-20 top-16 h-64 w-64 rounded-full border border-[#171513]/15 bg-[#d8e5ec]/60 transition duration-700 group-hover:scale-110" />
      <div className="absolute -left-16 bottom-16 h-52 w-52 rounded-full border border-[#171513]/10 bg-[#e5c9d5]/65 transition duration-700 group-hover:translate-x-3" />
      <div className="absolute bottom-16 right-10 h-28 w-28 rotate-12 border border-[#171513]/15 bg-[#f3eee7]/50" />
      <div className="absolute left-8 top-24 h-px w-28 bg-[#171513]/30" />
      <div className="absolute bottom-28 left-8 h-px w-40 bg-[#171513]/20" />
      <div className="relative z-10 flex w-full flex-col justify-between border border-[#171513]/15 bg-[#f8f3ed]/48 p-6 backdrop-blur-[2px]">
        <div className="flex items-start justify-between gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6c7681]">完整PDF</span>
          <span className="text-right text-xs uppercase tracking-[0.18em] text-[#8d7d88]">作品归档</span>
        </div>
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[#756f69]">策划 / 商业 / 文案</p>
          <h4 className="max-w-[18rem] text-[clamp(1.7rem,2.6vw,3.1rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
            {title.replace("完整版PDF", "")}
          </h4>
        </div>
        <div className="flex items-end justify-between gap-6">
          <span className="text-xs uppercase tracking-[0.18em] text-[#756f69]">打开文档</span>
          <span className="flex h-12 w-12 items-center justify-center border border-[#171513]/25 text-xl transition group-hover:bg-[#171513] group-hover:text-[#f8f3ed]">
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

export function EvidenceStudio() {
  return (
    <section id="evidence" className="section-shell bg-[#f6f1ec]">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">作品证据</p>
          <h2 className="section-title max-w-6xl">我会在这里集中展示真实作品证据，而不是把素材随意堆满页面。</h2>
        </Reveal>
        <div className="space-y-14">
          {evidenceGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <section className="border-t border-black/12 pt-7">
                <div className="mb-8 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#7a86a1]">{group.subtitle}</p>
                    <h3 className="text-[clamp(1.7rem,2.4vw,3.1rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
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
                      {item.type === "video" && item.src ? (
                        <div className="flex h-[520px] items-center justify-center overflow-hidden bg-[#171513] p-3">
                          <video
                            src={item.src}
                            controls
                            preload="metadata"
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : null}
                      {item.type === "pdf" && item.src ? (
                        <PdfCover title={item.title} href={item.src} />
                      ) : null}
                      {item.type === "placeholder" ? (
                        <div className="flex h-full min-h-[260px] flex-col justify-between">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#938b82]">预留位置</span>
                          <p className="max-w-sm text-3xl font-semibold leading-tight text-[#292520]">{item.title}</p>
                        </div>
                      ) : null}
                      <div className="p-5">
                        <h4 className="text-xl font-semibold text-[#171513]">{item.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-[#625c55]">{item.note}</p>
                        {item.links ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="border border-black/10 bg-[#ebe6df] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#171513] transition hover:bg-[#171513] hover:text-[#f6f1ec]"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
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
