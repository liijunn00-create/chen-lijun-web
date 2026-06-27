import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="flex min-h-screen items-end px-5 py-10 text-[#f6f1ec] sm:px-8">
      <div className="glass-dark mx-auto grid w-full max-w-[1700px] gap-12 p-7 sm:p-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-end lg:p-14">
        <Reveal>
          <p className="mb-7 text-xs uppercase tracking-[0.26em] text-[#c6b8c6]">联系</p>
          <h2 className="max-w-6xl text-[clamp(2.4rem,5.2vw,6.4rem)] font-black leading-[1.08] tracking-normal">
            让内容成为增长系统。
          </h2>
        </Reveal>
        <Reveal className="space-y-8" delay={0.12}>
          <p className="text-2xl leading-snug text-[#ded6cf]">
            面向新媒体运营、内容增长、产品运营、AI运营方向，期待将内容能力与系统化思维应用于真实业务场景。
          </p>
          <div className="space-y-3 text-lg">
            <a className="block border-t border-white/15 pt-4 transition hover:text-[#e7b8cb]" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <span className="block border-t border-white/15 pt-4 text-[#aaa19a]">广东 / 可远程协作</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
