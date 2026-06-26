import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="flex min-h-screen items-end bg-[#1b1917] px-5 py-10 text-[#f6f1ec] sm:px-8">
      <div className="mx-auto grid w-full max-w-[1700px] gap-12 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
        <Reveal>
          <p className="mb-7 text-xs uppercase tracking-[0.26em] text-[#c6b8c6]">Contact</p>
          <h2 className="max-w-6xl text-[clamp(4rem,10vw,13rem)] font-black uppercase leading-[0.85] tracking-normal">
            Let content become growth.
          </h2>
        </Reveal>
        <Reveal className="space-y-8" delay={0.12}>
          <p className="text-2xl leading-snug text-[#ded6cf]">
            我正在寻找新媒体运营、内容增长、产品运营、AI运营方向的机会，期待把内容能力和系统化思维放进真实业务里。
          </p>
          <div className="space-y-3 text-lg">
            <a className="block border-t border-white/15 pt-4 transition hover:text-[#e7b8cb]" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <span className="block border-t border-white/15 pt-4 text-[#aaa19a]">Guangdong / Remote Available</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
