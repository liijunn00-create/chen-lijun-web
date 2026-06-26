import Image from "next/image";
import { stats } from "@/data/skills";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-shell bg-[#f6f1ec]">
      <div className="section-grid">
        <Reveal>
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">我把内容，当成增长系统来设计。</h2>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative min-h-[520px] overflow-hidden border border-black/10 bg-[#d7d2ca]" delay={0.05}>
            <Image
              src="/images/portrait-abstract.svg"
              alt="Chen Lijun portrait illustration"
              fill
              className="object-cover"
              priority
            />
          </Reveal>
          <div className="space-y-8">
            <Reveal className="max-w-4xl text-[clamp(1.8rem,3.2vw,4.6rem)] font-semibold leading-[1.04] text-[#171513]" delay={0.08}>
              我擅长把复杂行业内容拆成用户能理解、愿意收藏、可以转化的路径。
            </Reveal>
            <Reveal className="grid gap-6 text-lg leading-8 text-[#4a4641] md:grid-cols-2" delay={0.16}>
              <p>
                在数字产业园和硬科技B2B项目中，我参与过多平台内容矩阵、SEO内容体系、KOL内容共创、线索承接和活动增长链路搭建。
              </p>
              <p>
                我正在进一步把运营经验产品化，用AI工作流、RAG知识库和Multi-Agent机制模拟增长团队的判断过程，输出可执行实验方案。
              </p>
            </Reveal>
            <Reveal className="grid grid-cols-2 border-t border-l border-black/10 md:grid-cols-3" delay={0.22}>
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-black/10 p-5">
                  <div className="text-4xl font-black text-[#171513]">{stat.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.12em] text-[#77716a]">{stat.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
