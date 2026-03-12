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
  title: "Nastenka — Novel Writing Software",
  description:
    "Write novels like a pro, local-first. Manage characters, plot, relationships — all in one desktop app.",
  keywords: [
    "novel writing",
    "writing software",
    "creative writing",
    "Nastenka",
    "book writing app",
  ],
  openGraph: {
    title: "Nastenka — Novel Writing Software",
    description:
      "Write novels like a pro, local-first. Manage characters, plot, relationships — all offline.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${baskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
