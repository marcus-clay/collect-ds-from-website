import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import { FeatureCard } from "../components/FeatureCard/FeatureCard";
import { GradientText } from "../components/GradientText/GradientText";
import { NavDots } from "../components/NavDots/NavDots";

// ── Icons ──────────────────────────────────────────────────────
const NoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 5h12M4 8h8M4 11h10M4 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 10c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 13v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// ── Features data ──────────────────────────────────────────────
const features = [
  {
    icon: <NoteIcon />,
    title: "Generate personal notes",
    description: "Surf automatically captures key insights as you browse, building your personal knowledge base without any effort.",
  },
  {
    icon: <BrainIcon />,
    title: "Understand anything",
    description: "Ask questions about any page and get instant, intelligent answers grounded in what you're reading.",
  },
  {
    icon: <SearchIcon />,
    title: "Explore your interests",
    description: "Discover content tailored to what you actually care about — not what an algorithm thinks you should see.",
  },
];

// ── Testimonials data ──────────────────────────────────────────
const testimonials = [
  { name: "Sarah K.", role: "Product Designer", text: "Surf changed the way I research. I spend half the time getting twice the insight." },
  { name: "Marc D.", role: "Engineer", text: "The notes feature alone is worth it. My second brain is finally keeping up with my first one." },
  { name: "Léa T.", role: "Student", text: "I use Surf for every paper I write. It's like having a research assistant that never sleeps." },
];

// ── Navbar ─────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-border">
      <GradientText as="span" font="tanker" className="text-xl tracking-tight">
        Surf
      </GradientText>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-sm text-brand-dark/60 hover:text-brand-dark transition-colors duration-200">
          Features
        </a>
        <a href="#testimonials" className="text-sm text-brand-dark/60 hover:text-brand-dark transition-colors duration-200">
          Testimonials
        </a>
        <a href="https://github.com" className="text-brand-dark/40 hover:text-brand-dark transition-colors duration-200">
          <GitHubIcon />
        </a>
      </nav>

      <Button variant="primary" size="sm" leftIcon={<DownloadIcon />}>
        Download Surf
      </Button>
    </header>
  );
}

// ── Hero ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-20">
      <div className="max-w-3xl flex flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-brand-dark/50 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-pulse" />
          Open Beta — now available
        </span>

        <GradientText as="h1" font="tanker" className="text-5xl md:text-6xl leading-tight">
          Elevate your thinking
        </GradientText>

        <GradientText as="p" variant="heading-muted" font="switzer" className="text-lg md:text-xl font-normal max-w-xl leading-relaxed">
          The browser built for people who think. Browse smarter, capture more, understand faster.
        </GradientText>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Button variant="primary" size="lg" leftIcon={<DownloadIcon />}>
            Download Surf
          </Button>
          <Button variant="ghost" size="lg">
            Join the open Beta
          </Button>
        </div>
      </div>
    </section>
  );
}

// ── Features ───────────────────────────────────────────────────
function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="px-8 py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <GradientText as="h2" font="switzer" className="text-3xl font-bold mb-3">
          Built for deep work
        </GradientText>
        <p className="text-brand-dark/50 text-md max-w-md mx-auto">
          Every feature designed to extend your thinking, not replace it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            icon={f.icon}
            title={f.title}
            description={f.description}
            selected={activeIndex === i}
            onSelect={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="px-8 py-24 bg-gradient-heading">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-white font-switzer">
          What people are saying
        </h2>

        <div className="relative w-full min-h-[120px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={[
                "absolute inset-0 flex flex-col items-center gap-3 transition-opacity duration-300",
                i === active ? "opacity-100" : "opacity-0 pointer-events-none",
              ].join(" ")}
            >
              <p className="text-white/80 text-lg leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-white font-semibold text-sm">{t.name}</span>
                <span className="text-white/50 text-xs">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        <NavDots
          count={testimonials.length}
          active={active}
          onChange={setActive}
          className="[&_button]:bg-white/30 [&_button.opacity-40]:bg-white"
        />
      </div>
    </section>
  );
}

// ── CTA Banner ─────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="px-8 py-24 text-center flex flex-col items-center gap-6">
      <GradientText as="h2" font="tanker" className="text-4xl md:text-5xl">
        Ready to think better?
      </GradientText>
      <p className="text-brand-dark/50 text-md max-w-sm">
        Free during the open beta. Available on macOS.
      </p>
      <Button variant="primary" size="lg" leftIcon={<DownloadIcon />}>
        Download Surf — it's free
      </Button>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
      <GradientText as="span" font="tanker" className="text-lg">
        Surf
      </GradientText>
      <p className="text-xs text-brand-dark/30">
        © {new Date().getFullYear()} Deta. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-xs text-brand-dark/40 hover:text-brand-dark/70 transition-colors">Privacy</a>
        <a href="#" className="text-xs text-brand-dark/40 hover:text-brand-dark/70 transition-colors">Terms</a>
        <a href="https://github.com" className="text-brand-dark/30 hover:text-brand-dark/60 transition-colors">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────────
export function Landing() {
  return (
    <div className="min-h-screen font-switzer">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
