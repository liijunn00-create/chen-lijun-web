import type { Metadata } from "next";
import { NoisyGlowBackground } from "@/components/NoisyGlowBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "陈丽君 | AI运营作品集",
  description:
    "陈丽君的个人作品集，展示B2B内容增长、AI运营系统、产品运营、文案策划与创意生产能力。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .glass-panel {
                backdrop-filter: var(--glass-filter) !important;
                -webkit-backdrop-filter: var(--glass-filter) !important;
              }
              .glass-panel-strong,
              .evidence-gallery-window {
                backdrop-filter: var(--glass-filter-strong) !important;
                -webkit-backdrop-filter: var(--glass-filter-strong) !important;
              }
              .glass-chip {
                backdrop-filter: var(--glass-filter-chip) !important;
                -webkit-backdrop-filter: var(--glass-filter-chip) !important;
              }
            `,
          }}
        />
        <NoisyGlowBackground />
        <div className="site-content relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
