import { TextPressure } from "./TextPressure";

const navItems = [
  { label: "项目", href: "#work" },
  { label: "能力", href: "#capabilities" },
  { label: "作品", href: "#evidence" },
  { label: "成果", href: "#experience" },
  { label: "浮层", href: "#about" },
  { label: "联系", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-4 sm:px-8">
      <nav className="glass-panel-strong mx-auto flex max-w-[1700px] items-center justify-between px-4 py-3 text-[12px] uppercase tracking-[0.16em] text-[#1e1c1a]">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <span className="signal-dot h-2.5 w-2.5 rounded-full bg-[#9b84b4]" />
          <span>
            <TextPressure text="陈丽君作品集" />
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="px-3 py-2 transition hover:bg-white/20 hover:text-[#7a86a1]">
              <TextPressure text={item.label} />
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@example.com"
          className="glass-chip px-4 py-2 transition hover:bg-[#1e1c1a] hover:text-[#f6f1ec]"
        >
          <TextPressure text="联系" />
        </a>
      </nav>
    </header>
  );
}
