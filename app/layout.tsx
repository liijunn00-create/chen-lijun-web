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
              .liquid-clear-panel {
                position: relative !important;
                isolation: isolate !important;
                border: 1px solid rgba(255, 255, 255, 0.54) !important;
                border-radius: 1.85rem !important;
                background:
                  linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.028) 45%, rgba(255, 255, 255, 0.1)),
                  radial-gradient(circle at 14% 18%, rgba(255, 255, 255, 0.24), transparent 15rem),
                  radial-gradient(circle at 88% 16%, rgba(190, 229, 244, 0.13), transparent 20rem),
                  radial-gradient(circle at 76% 86%, rgba(246, 205, 226, 0.11), transparent 18rem),
                  rgba(255, 255, 255, 0.048) !important;
                box-shadow:
                  inset 0 1px 0 rgba(255, 255, 255, 0.76),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.15),
                  inset 14px 0 26px rgba(255, 255, 255, 0.095),
                  inset -14px 0 26px rgba(111, 143, 160, 0.04),
                  0 16px 42px rgba(88, 69, 92, 0.05) !important;
                backdrop-filter: blur(18px) saturate(1.12) !important;
                -webkit-backdrop-filter: blur(18px) saturate(1.12) !important;
              }
              .liquid-clear-chip {
                border: 1px solid rgba(255, 255, 255, 0.48) !important;
                border-radius: 999px !important;
                background: rgba(255, 255, 255, 0.06) !important;
                box-shadow:
                  inset 0 1px 0 rgba(255, 255, 255, 0.52),
                  0 8px 18px rgba(88, 69, 92, 0.04) !important;
                backdrop-filter: blur(14px) saturate(1.1) !important;
                -webkit-backdrop-filter: blur(14px) saturate(1.1) !important;
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
