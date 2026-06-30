import { TextPressure } from "./TextPressure";

export function Footer() {
  return (
    <footer className="px-5 pb-8 text-[#8f8982] sm:px-8">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between">
        <span>
          <TextPressure text="陈丽君个人作品集" />
        </span>
        <span>
          <TextPressure text="基于 Next.js / Tailwind / Framer Motion 构建" />
        </span>
      </div>
    </footer>
  );
}
