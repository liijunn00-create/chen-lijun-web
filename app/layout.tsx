import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陈丽君 | Growth Operator Portfolio",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
