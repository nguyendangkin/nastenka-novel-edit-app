"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  Feather,
  Keyboard,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const GUMROAD_URL = "https://your-store.gumroad.com/l/nastenka";

/* ─── DATA ─── */

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "How It Works", href: "#how-it-works" },
];

const SCREENSHOTS = [
  { src: "/screenshot1.png", alt: "Screenshot 1" },
  { src: "/screenshot2.png", alt: "Screenshot 2" },
  { src: "/screenshot3.png", alt: "Screenshot 3" },
  { src: "/screenshot4.png", alt: "Screenshot 4" },
  { src: "/screenshot5.png", alt: "Screenshot 5" },
  { src: "/screenshot6.png", alt: "Screenshot 6" },
  { src: "/screenshot7.png", alt: "Screenshot 7" },
  { src: "/screenshot8.png", alt: "Screenshot 8" },
  { src: "/screenshot9.png", alt: "Screenshot 9" },
  { src: "/screenshot10.png", alt: "Screenshot 10" },
  { src: "/screenshot11.png", alt: "Screenshot 11" },
];

const FEATURES = [
  {
    icon: PenLine,
    title: "Text Editor",
    desc: "Editor with a basic toolbar, @mention characters, and auto-save while writing.",
  },
  {
    icon: Users,
    title: "Character Management",
    desc: "Record character information — name, role, personality, biography — all in one place.",
  },
  {
    icon: GitFork,
    title: "Relationship Map",
    desc: "Draw relationships between characters on a visual map, color-coded by type.",
  },
  {
    icon: Map,
    title: "Plot Outline",
    desc: "Organize your plot with a 3-act structure. Drag & drop plot points between acts.",
  },
  {
    icon: BookOpen,
    title: "Internal Wiki",
    desc: "Notes about your novel's world — locations, events, customs — cross-linked together.",
  },
  {
    icon: ShieldCheck,
    title: "Offline & Private",
    desc: "Data is stored on your computer. No login required, no internet connection needed.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Create a Project",
    desc: "Name your novel, pick a genre, write a short description. Data is saved to a file on your computer.",
  },
  {
    step: "02",
    title: "Write & Organize",
    desc: "Split your manuscript into chapters and scenes. Write directly in the editor with auto-save.",
  },
  {
    step: "03",
    title: "Build Your World",
    desc: "Create character cards, location notes, relationship maps, plot outlines — all linked to your manuscript.",
  },
  {
    step: "04",
    title: "Export Your Manuscript",
    desc: "When finished, export your entire manuscript to a DOCX file for publishers or printing.",
  },
];



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
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            <Download size={15} />
            Get Nastenka
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
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            <Download size={15} />
            Get Nastenka
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
            One app
            <br />
            <span className="font-medium italic">to write your novel.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ash">
            Nastenka is a desktop app that helps you write and organize your novel.
            Manage characters, plot, world‑building — all offline, on your computer.
          </p>

          <div className="mt-8">
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-ink"
            >
              <Download size={16} />
              Get Nastenka
            </a>
          </div>

          <div className="mt-10 inline-flex gap-8 border-t border-ink/8 pt-7 text-sm text-ash">
            <span>Windows 64-bit</span>
            <span>·</span>
            <span>Offline & Private</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement;
    if (!slide) return;
    isScrolling.current = true;
    container.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
    setTimeout(() => { isScrolling.current = false; }, 400);
  }, []);

  const goPrev = useCallback(() => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollToIndex]);

  const goNext = useCallback(() => {
    scrollToIndex(Math.min(SCREENSHOTS.length - 1, activeIndex + 1));
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      if (isScrolling.current) return;
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="screenshots" className="py-24 md:py-32 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight text-ivory md:text-5xl">
            See It in Action
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-mist/70">
            A clean interface focused on content — no ads, no distractions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Prev button */}
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/80 hover:border-white/25 hover:scale-105 disabled:!opacity-0 disabled:cursor-default"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={goNext}
            disabled={activeIndex === SCREENSHOTS.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-black/60 backdrop-blur-sm text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/80 hover:border-white/25 hover:scale-105 disabled:!opacity-0 disabled:cursor-default"
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slides container */}
          <div
            ref={scrollRef}
            className="carousel-track flex overflow-x-auto flex-nowrap border border-white/8 shadow-2xl"
          >
            {SCREENSHOTS.map((s, i) => (
              <div key={i} className="carousel-slide flex-none w-full min-w-full">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-auto block"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-200 ${
                i === activeIndex
                  ? "bg-gold scale-130"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
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
            Key Features
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ash">
            Essential tools built for novel writers.
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

function TipHighlights() {
  return (
    <section className="py-24 md:py-32 bg-ivory/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            Helpful Tips
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ash">
            Keyboard shortcuts and quick actions to help you write more smoothly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Tip 1: Ctrl+Space */}
          <div className="rounded-2xl border border-ink/8 bg-white/70 p-8 shadow-sm">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-dim text-gold">
              <Keyboard size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Quick Character Insert
            </h3>
            <div className="mt-2 mb-4 inline-flex items-center gap-2 rounded-lg bg-gold-dim px-3 py-1.5">
              <kbd className="font-mono text-xs font-semibold text-gold">Ctrl</kbd>
              <span className="text-gold/50 text-xs">+</span>
              <kbd className="font-mono text-xs font-semibold text-gold">Space</kbd>
            </div>
            <p className="text-sm leading-relaxed text-ash">
              While writing, press <strong className="text-ink">Ctrl + Space</strong> to open the character search popup.
              Type a name to filter, use <kbd className="font-mono text-xs bg-ink/5 px-1 py-0.5 rounded">↑↓</kbd> to navigate,
              and press <kbd className="font-mono text-xs bg-ink/5 px-1 py-0.5 rounded">Enter</kbd> to insert the name at the cursor position.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              If the character has a long name (multiple words), press{" "}
              <kbd className="font-mono text-xs bg-ink/5 px-1 py-0.5 rounded">Tab</kbd>{" "}
              to insert individual words instead of the full name.
            </p>
          </div>

          {/* Tip 2: Memory Points */}
          <div className="rounded-2xl border border-ink/8 bg-white/70 p-8 shadow-sm">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-dim text-gold">
              <Zap size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Create Memory Points
            </h3>
            <div className="mt-2 mb-4 inline-flex items-center gap-2 rounded-lg bg-gold-dim px-3 py-1.5">
              <span className="text-xs font-semibold text-gold">Select + Right‑click</span>
            </div>
            <p className="text-sm leading-relaxed text-ash">
              Highlight any passage — an important detail, an event, a character trait —
              then <strong className="text-ink">right‑click</strong> and choose{" "}
              <strong className="text-ink">&quot;Add Memory Point&quot;</strong>.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              The passage will be saved as a memory point for the scene, letting you look up key details
              without scrolling through the entire content.
            </p>
          </div>
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
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-mist/70">
            Four simple steps to start writing with Nastenka.
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


function CTAFooter() {
  return (
    <>
      <section id="download" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-gold">
            <Feather size={24} strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
            Get Nastenka
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-ash">
            Download instantly. Available for Windows 64-bit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-ink"
            >
              <Download size={16} />
              Get Nastenka
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
            <a href="#features" className="transition-colors hover:text-ink">Features</a>

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
        <Screenshots />
        <Features />
        <TipHighlights />
        <HowItWorks />

        <CTAFooter />
      </main>
    </>
  );
}
