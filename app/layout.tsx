import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nastenka — Phần mềm viết tiểu thuyết",
  description:
    "Viết tiểu thuyết chuyên nghiệp, local-first. Quản lý nhân vật, cốt truyện, quan hệ — tất cả trong một ứng dụng desktop miễn phí.",
  keywords: [
    "viết tiểu thuyết",
    "phần mềm viết sách",
    "novel writing",
    "Nastenka",
    "creative writing",
  ],
  openGraph: {
    title: "Nastenka — Phần mềm viết tiểu thuyết",
    description:
      "Viết tiểu thuyết chuyên nghiệp, local-first. Quản lý nhân vật, cốt truyện, quan hệ — tất cả offline, miễn phí.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${baskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
