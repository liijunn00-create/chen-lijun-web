const navItems = [
  { label: "项目", href: "#work" },
  { label: "作品", href: "#evidence" },
  { label: "AI能力", href: "#ai-skills" },
  { label: "概览", href: "#about" },
  { label: "联系", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-4 sm:px-8">
      <nav className="mx-auto flex max-w-[1700px] items-center justify-between border border-black/10 bg-[#f6f1ec]/80 px-4 py-3 text-[12px] uppercase tracking-[0.18em] text-[#1e1c1a] backdrop-blur-xl">
        <a href="#top" className="font-semibold">
          陈丽君作品集
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#7a86a1]">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@example.com"
          className="border border-[#1e1c1a] px-4 py-2 transition hover:bg-[#1e1c1a] hover:text-[#f6f1ec]"
        >
          联系
        </a>
      </nav>
    </header>
  );
}
