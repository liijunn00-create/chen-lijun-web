import Image from "next/image";
import { evidenceGroups, type EvidenceItem } from "@/data/evidence";
import { CircularGallery } from "./CircularGallery";
import { Reveal } from "./Reveal";

const highlightTerms = [
  "AI",
  "Dify",
  "RAG",
  "Multi-Agent",
  "内容矩阵",
  "增长闭环",
  "线索转化",
  "平台策略",
  "结构化表达",
  "视觉排版",
  "前期制作能力",
  "拍摄执行",
  "长文案组织能力",
  "品牌营销策划",
  "月销量60+",
  "B端用户",
  "小红书",
  "短视频脚本",
  "拉片分镜",
  "电影分镜脚本",
];

function HighlightText({ text, className }: { text: string; className: string }) {
  const pattern = new RegExp(`(${highlightTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.replace(/[。.]$/g, "").split(pattern);

  return (
    <p className={className}>
      {parts.map((part, index) =>
        highlightTerms.includes(part) ? (
          <span key={`${part}-${index}`} className="soft-mark px-1">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
}

const visualGalleryItems = (items: EvidenceItem[]) =>
  items
    .filter((item) => item.type === "image" && item.src)
    .map((item) => ({
      image: item.src as string,
      text: item.title,
    }));

const circularGalleryGroupTitles = new Set(["账号运营优质笔记", "设计排版能力", "推文制作"]);

function EvidenceCircularGallery({ items }: { items: EvidenceItem[] }) {
  return (
    <div className="evidence-gallery-window glass-panel relative h-[min(66vw,620px)] min-h-[420px] overflow-hidden bg-transparent">
      <CircularGallery
        items={visualGalleryItems(items)}
        bend={3}
        textColor="#171513"
        borderRadius={0.05}
        font="bold 28px Figtree"
        scrollSpeed={2}
        scrollEase={0.02}
      />
    </div>
  );
}

function PdfCover({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass-panel group relative flex h-[520px] overflow-hidden p-6 transition"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,242,236,0.72),rgba(225,207,218,0.54)_46%,rgba(198,215,225,0.58))]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,21,19,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,19,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute right-8 top-16 h-48 w-64 border border-[#171513]/12 bg-white/22 backdrop-blur-xl transition duration-700 group-hover:translate-x-3" />
      <div className="absolute bottom-16 left-8 h-44 w-72 border border-[#171513]/10 bg-[#e5c9d5]/40 backdrop-blur-xl transition duration-700 group-hover:-translate-y-2" />
      <div className="absolute bottom-16 right-10 h-28 w-28 rotate-12 border border-[#171513]/15 bg-[#f3eee7]/40 backdrop-blur-lg" />
      <div className="absolute left-8 top-24 h-px w-28 bg-[#171513]/30" />
      <div className="absolute bottom-28 left-8 h-px w-40 bg-[#171513]/20" />
      <div className="glass-panel-strong relative z-10 flex w-full flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6c7681]">完整PDF</span>
          <span className="text-right text-xs uppercase tracking-[0.18em] text-[#8d7d88]">作品归档</span>
        </div>
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[#756f69]">策划 / 商业 / 文案</p>
          <h4 className="single-line-title max-w-[18rem] text-[clamp(1.15rem,1.45vw,1.8rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
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
    <section id="evidence" className="section-shell">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">作品证据</p>
          <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <h2 className="section-title max-w-6xl">真实作品按能力场景展开</h2>
            <p className="max-w-2xl text-lg leading-8 text-[#5c5751]">
              每组保留一件重点作品作为主证据，其余材料作为辅助证据，既展示完整作品，也避免素材无序堆叠。
            </p>
          </div>
        </Reveal>
        <div className="space-y-14">
          {evidenceGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <section className="evidence-set border-t border-black/12 pt-7">
                <div className="mb-8 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#7a86a1]">{group.subtitle}</p>
                    <h3 className="single-line-title text-[clamp(1.35rem,1.8vw,2.15rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
                      {group.title}
                    </h3>
                  </div>
                  <HighlightText text={group.description} className="max-w-3xl text-lg leading-8 text-[#504b45]" />
                </div>
                {circularGalleryGroupTitles.has(group.title) ? (
                  <EvidenceCircularGallery items={group.items} />
                ) : (
                  <div className="evidence-grid grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {group.items.map((item, itemIndex) => (
                      <article
                        key={`${group.title}-${item.title}`}
                        className={`${itemIndex === 0 ? "evidence-feature" : "evidence-support"} ${
                          item.type === "placeholder" ? "glass-panel min-h-[300px] border-dashed p-6" : "glass-panel overflow-hidden"
                        }`}
                      >
                        {item.type === "image" && item.src ? (
                          <div className={`${itemIndex === 0 ? "h-[620px]" : "h-[430px]"} relative flex items-center justify-center overflow-hidden bg-white/28 p-3`}>
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
                          <div className={`${itemIndex === 0 ? "h-[620px]" : "h-[430px]"} flex items-center justify-center overflow-hidden bg-[#171513]/88 p-3`}>
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
                            <p className="max-w-sm text-2xl font-semibold leading-tight text-[#292520]">{item.title}</p>
                          </div>
                        ) : null}
                        <div className="p-5">
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7a86a1]">
                            {itemIndex === 0 ? "重点作品" : "辅助证据"}
                          </p>
                          <h4 className="single-line-title text-lg font-semibold text-[#171513] sm:text-xl">{item.title}</h4>
                          <HighlightText text={item.note} className="mt-3 text-sm leading-6 text-[#625c55]" />
                          {item.links ? (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {item.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="glass-chip px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#171513] transition hover:bg-[#171513] hover:text-[#f6f1ec]"
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
                )}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
