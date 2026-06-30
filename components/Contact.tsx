import { Reveal } from "./Reveal";
import { TextPressure } from "./TextPressure";

export function Contact() {
  return (
    <section id="contact" className="flex min-h-screen items-end px-5 py-10 text-[#171513] sm:px-8">
      <div className="contact-glass-panel mx-auto grid w-full max-w-[1700px] gap-12 p-7 sm:p-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-end lg:p-14">
        <Reveal>
          <p className="mb-7 text-xs uppercase tracking-[0.26em] text-[#7a86a1]">
            <TextPressure text="陈丽君作品集" />
          </p>
          <h2 className="single-line-title max-w-6xl text-[clamp(1.8rem,3.4vw,4.4rem)] font-black leading-[1.08] tracking-normal">
            <TextPressure text="谢谢观看，期待联系" />
          </h2>
        </Reveal>
        <Reveal className="space-y-8" delay={0.12}>
          <p className="text-2xl leading-snug text-[#403c37]">
            面向新媒体运营、AI运营方向，期待将<span className="soft-mark px-1 text-[#171513]">内容能力</span>与<span className="soft-mark px-1 text-[#171513]">系统化思维</span>应用于真实业务场景
          </p>
          <div className="space-y-3 text-lg">
            <a className="block border-t border-[#171513]/12 pt-4 text-[#342f2b] transition hover:text-[#7a86a1]" href="mailto:junnn00@outlook.com">
              <TextPressure text="junnn00@outlook.com" />
            </a>
            <span className="block border-t border-[#171513]/12 pt-4 text-[#625c55]">
              <TextPressure text="广东深圳/面试通过可立刻到岗" />
            </span>
          <div className="contact-wechat border-t border-[#171513]/12 pt-6">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#7a86a1]">
              微信 / WeChat
            </p>
            <div className="flex items-start gap-5">
              <img
                src="/images/wechat-qr.jpg"
                alt="微信二维码"
                width={140}
                height={140}
                className="rounded-xl border border-[#171513]/12"
              />
              <p className="text-base leading-7 text-[#403c37]">
                扫码添加微信，备注「作品集」，我会尽快通过。<br />
                <span className="text-[#7a86a1]">（手机访问时可直接长按识别）</span>
              </p>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
