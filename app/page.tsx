"use client";

import { useState } from "react";
import {
  PenLine,
  Users,
  GitFork,
  Map,
  BookOpen,
  ShieldCheck,
  Download,
  Menu,
  X,
  Check,
  Minus,
  Feather,
  Github,
} from "lucide-react";

const GITHUB_URL = "https://github.com/nguyendangkin/nastenka-novel-edit-app";
const GITHUB_RELEASES = `${GITHUB_URL}/releases`;

/* ─── DATA ─── */

const NAV_LINKS = [
  { label: "Tính năng", href: "#features" },
  { label: "Cách dùng", href: "#how-it-works" },
  { label: "So sánh", href: "#comparison" },
];

const FEATURES = [
  {
    icon: PenLine,
    title: "Soạn thảo văn bản",
    desc: "Editor với toolbar cơ bản, @mention nhân vật, tự động lưu khi viết.",
  },
  {
    icon: Users,
    title: "Quản lý nhân vật",
    desc: "Ghi chú thông tin nhân vật — tên, vai trò, tính cách, tiểu sử — ở một nơi duy nhất.",
  },
  {
    icon: GitFork,
    title: "Sơ đồ quan hệ",
    desc: "Vẽ mối quan hệ giữa các nhân vật trên sơ đồ trực quan, phân loại theo màu.",
  },
  {
    icon: Map,
    title: "Dàn cốt truyện",
    desc: "Sắp xếp cốt truyện theo cấu trúc 3 hồi. Kéo thả các điểm nhấn giữa các hồi.",
  },
  {
    icon: BookOpen,
    title: "Wiki nội bộ",
    desc: "Ghi chú về thế giới tiểu thuyết — địa điểm, sự kiện, phong tục — liên kết chéo với nhau.",
  },
  {
    icon: ShieldCheck,
    title: "Offline & riêng tư",
    desc: "Dữ liệu lưu trên máy tính của bạn. Không cần đăng nhập, không cần kết nối mạng.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Tạo dự án",
    desc: "Đặt tên cho tiểu thuyết, chọn thể loại, viết vài dòng mô tả. Dữ liệu được lưu vào một file trên máy tính của bạn.",
  },
  {
    step: "02",
    title: "Viết và sắp xếp",
    desc: "Chia bản thảo thành các chương và cảnh. Viết trực tiếp trong editor, nội dung được lưu tự động.",
  },
  {
    step: "03",
    title: "Xây dựng thế giới",
    desc: "Tạo thẻ nhân vật, ghi chú địa điểm, vẽ sơ đồ quan hệ, dàn cốt truyện — tất cả gắn với bản thảo.",
  },
  {
    step: "04",
    title: "Xuất bản thảo",
    desc: "Khi viết xong, xuất toàn bộ bản thảo ra file DOCX để gửi cho nhà xuất bản hoặc in ấn.",
  },
];

const COMPARISON = {
  headers: ["", "Nastenka", "Scrivener", "Google Docs", "Notion"],
  rows: [
    { feature: "Viết dài (tiểu thuyết)", values: [true, true, "partial", false] },
    { feature: "Ghi chú nhân vật", values: [true, false, false, "partial"] },
    { feature: "Sơ đồ quan hệ", values: [true, false, false, false] },
    { feature: "Dàn cốt truyện", values: [true, "partial", false, false] },
    { feature: "Wiki nội bộ", values: [true, false, false, "partial"] },
    { feature: "Chạy offline", values: [true, true, false, false] },
    { feature: "Miễn phí", values: [true, false, true, "partial"] },
    { feature: "Giao diện tiếng Việt", values: [true, false, true, true] },
  ],
};

/* ─── COMPONENTS ─── */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-semibold tracking-tight text-ink">
          Nastenka
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-ash transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg p-2 text-ash transition-colors hover:text-ink"
            aria-label="GitHub"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            <Download size={15} />
            Tải xuống
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ash transition-colors hover:text-ink md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-ash transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 text-sm text-ash transition-colors hover:text-ink"
          >
            <Github size={16} strokeWidth={1.5} />
            GitHub
          </a>
          <a
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            <Download size={15} />
            Tải xuống
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl leading-[1.1] font-light tracking-tight text-ink md:text-6xl lg:text-7xl">
            Một ứng dụng
            <br />
            <span className="font-medium italic">để viết tiểu thuyết.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ash">
            Nastenka là ứng dụng desktop giúp bạn viết và sắp xếp tiểu thuyết.
            Quản lý nhân vật, cốt truyện, thế giới quan — tất cả offline, trên máy tính của bạn.
          </p>

          <div className="mt-8">
            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-ink"
            >
              <Download size={16} />
              Tải xuống miễn phí
            </a>
          </div>

          <div className="mt-10 inline-flex gap-8 border-t border-ink/8 pt-7 text-sm text-ash">
            <span>Windows, macOS & Linux</span>
            <span>·</span>
            <span>Miễn phí</span>
            <span>·</span>
            <span>Tiếng Việt</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            Tính năng chính
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ash">
            Những công cụ cơ bản dành cho người viết tiểu thuyết.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="feature-card group rounded-2xl border border-ink/5 bg-ivory/60 p-7"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-dim text-gold">
                <f.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight text-ivory md:text-5xl">
            Cách sử dụng
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-mist/70">
            Bốn bước cơ bản để bắt đầu viết với Nastenka.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {WORKFLOW_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/5 bg-charcoal/40 p-7"
            >
              <div className="mb-4 font-display text-3xl font-light text-gold/40">
                {s.step}
              </div>
              <h3 className="font-display text-xl font-semibold text-ivory">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/70">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={16} className="mx-auto text-gold" />;
  if (value === false) return <Minus size={14} className="mx-auto text-mist/30" />;
  return <span className="text-xs text-mist">Một phần</span>;
}

function Comparison() {
  return (
    <section id="comparison" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            So sánh nhanh
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ash">
            Nastenka so với một số công cụ viết phổ biến khác.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-ink/5 bg-ivory/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/5">
                {COMPARISON.headers.map((h, i) => (
                  <th
                    key={h || "feature"}
                    className={`px-5 py-4 text-left font-display text-base font-semibold ${i === 1
                      ? "comparison-highlight text-gold"
                      : "text-ash"
                      }`}
                  >
                    {i === 1 && <Feather size={14} className="inline mr-1.5 -mt-0.5" />}
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr key={row.feature} className="border-b border-ink/3 last:border-0">
                  <td className="px-5 py-3.5 text-left text-ash font-medium">{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`px-5 py-3.5 text-center ${i === 0 ? "comparison-highlight" : ""}`}
                    >
                      <ComparisonCell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CTAFooter() {
  return (
    <>
      <section id="download" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-gold">
            <Feather size={24} strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            Thử dùng Nastenka
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-ash">
            Tải về và dùng thử. Miễn phí, không cần đăng ký tài khoản.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-ink"
            >
              <Download size={16} />
              Tải cho Windows
            </a>
            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 px-8 py-4 text-sm font-medium text-ash transition-all hover:border-ink/25 hover:text-ink"
            >
              <Download size={16} />
              Tải cho macOS
            </a>
            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 px-8 py-4 text-sm font-medium text-ash transition-all hover:border-ink/25 hover:text-ink"
            >
              <Download size={16} />
              Tải cho Linux
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <span className="font-display text-lg font-semibold text-ink">
            Nastenka
          </span>

          <div className="flex items-center gap-6 text-sm text-ash">
            <a href="#features" className="transition-colors hover:text-ink">Tính năng</a>
            <a href="#comparison" className="transition-colors hover:text-ink">So sánh</a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
              aria-label="GitHub"
            >
              <Github size={16} strokeWidth={1.5} />
              GitHub
            </a>
          </div>

          <p className="text-xs text-mist">
            © 2026 Nastenka. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

/* ─── PAGE ─── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <CTAFooter />
      </main>
    </>
  );
}
