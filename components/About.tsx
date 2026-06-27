import Image from "next/image";
import { profileHighlights, stats } from "@/data/skills";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-[#f6f1ec] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-[1700px] gap-12">
        <Reveal>
          <p className="section-kicker">个人概览</p>
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <h2 className="text-[clamp(1.9rem,3.4vw,4.2rem)] font-black leading-[1.08] tracking-normal text-[#171513]">
              简洁介绍，重点留给作品。
            </h2>
            <p className="max-w-3xl text-xl leading-8 text-[#4a4641]">
              我是陈丽君，应届毕业生，方向集中在B2B内容增长、产品运营和AI驱动运营系统。个人资料只做快速理解，网站重点展示我的项目、作品证据和AI应用能力。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <Reveal className="relative min-h-[360px] overflow-hidden border border-black/10 bg-[#d7d2ca]" delay={0.05}>
            <Image
              src="/images/portrait-abstract.svg"
              alt="Chen Lijun portrait illustration"
              fill
              className="object-cover"
              priority
            />
          </Reveal>
          <div className="grid gap-6">
            <Reveal className="grid gap-4 md:grid-cols-3" delay={0.1}>
              {profileHighlights.map((highlight) => (
                <div key={highlight} className="border border-black/10 bg-[#fbf8f3] p-5 text-base leading-7 text-[#403c37]">
                  {highlight}
                </div>
              ))}
            </Reveal>
            <Reveal className="grid gap-4 md:grid-cols-2" delay={0.16}>
              <div className="border border-black/10 bg-[#ebe6df] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#7a746d]">实习经历</p>
                <h3 className="text-2xl font-black text-[#171513]">佛山新基地实业集团</h3>
                <p className="mt-2 text-sm text-[#625c55]">内容运营 & 增长策略实习生 / 数字产业园B2B业务</p>
              </div>
              <div className="border border-black/10 bg-[#ebe6df] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#7a746d]">实习经历</p>
                <h3 className="text-2xl font-black text-[#171513]">广东佛燃科技有限公司</h3>
                <p className="mt-2 text-sm text-[#625c55]">内容运营 & SEO增长实习生 / 硬科技B2B业务</p>
              </div>
            </Reveal>
            <Reveal className="grid grid-cols-2 border-t border-l border-black/10 md:grid-cols-6" delay={0.22}>
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-black/10 p-5">
                  <div className="text-3xl font-black text-[#171513]">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.12em] text-[#77716a]">{stat.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
