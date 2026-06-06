"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasBooted = sessionStorage.getItem("has_booted") === "true";
    // If it's a fresh boot, wait for 2.3 seconds. Otherwise, trigger immediately.
    const delay = hasBooted ? 100 : 2300;
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section id="hero" className="min-height-100vh flex flex-col justify-center pt-28 px-6 md:px-20 max-w-[1140px] mx-auto">
        <div className="opacity-0">Loading...</div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-73px)] flex flex-col justify-center py-20 px-6 md:px-20 max-w-[1140px] mx-auto relative z-10"
    >
      <div
        className="font-mono text-[0.72rem] text-teal tracking-[0.14em] uppercase mb-5 transition-all duration-500 transform"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "100ms",
        }}
      >
        &gt; BSc Information Technology · NWU · Graduating Nov 2026
      </div>

      <h1
        className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.0] text-white tracking-[-0.01em] mb-4 transition-all duration-600 transform"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "200ms",
        }}
      >
        Thato<br />
        <em className="font-serif not-italic text-teal">Mabena</em>
      </h1>

      <div
        className="font-mono text-[clamp(0.78rem,1.5vw,0.95rem)] text-teal tracking-[0.03em] mb-7 max-w-[680px] leading-relaxed border-l-2 border-teal-dim pl-4 transition-all duration-600 transform"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "350ms",
        }}
      >
        Final-year BSc IT graduate architecting distributed systems and AI pipelines in C#, Java &amp; Python —
        shipping production-grade code end-to-end, from system design through to deployment.
      </div>

      <p
        className="max-w-[560px] text-[1.05rem] text-textDefault/90 leading-[1.75] mb-12 transition-all duration-600 transform"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "500ms",
        }}
      >
        Based in Pretoria. I design systems that handle real conditions: concurrent load, model failures,
        distributed state, and demanding latency requirements. Available for graduate programmes from late 2026.
      </p>

      <div
        className="flex flex-wrap gap-4 transition-all duration-600 transform"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "650ms",
        }}
      >
        <Link
          href="#projects"
          className="font-mono text-[0.78rem] bg-teal text-bg px-7 py-3.5 uppercase tracking-[0.08em] font-bold transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5 inline-flex items-center gap-2"
        >
          ↓ View Projects
        </Link>
        <a
          href="https://github.com/PTA-Avenger"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.78rem] text-text-mid border border-border px-7 py-3.5 uppercase tracking-[0.08em] transition-all duration-200 hover:border-teal-dim hover:text-teal inline-flex items-center gap-2"
        >
          ⌥ GitHub
        </a>
        <a
          href="https://linkedin.com/in/thato-mabenadev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.78rem] text-text-mid border border-border px-7 py-3.5 uppercase tracking-[0.08em] transition-all duration-200 hover:border-teal-dim hover:text-teal inline-flex items-center gap-2"
        >
          in LinkedIn
        </a>
        <a
          href="/ThatoMabena_CV.docx"
          download
          className="font-mono text-[0.78rem] text-text-mid border border-border px-7 py-3.5 uppercase tracking-[0.08em] transition-all duration-200 hover:border-teal-dim hover:text-teal inline-flex items-center gap-2"
        >
          📄 Download CV
        </a>
      </div>

      <div
        className="mt-20 font-mono text-[0.68rem] text-text-dim tracking-[0.1em] uppercase flex items-center gap-3 transition-all duration-600 transform"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "800ms",
        }}
      >
        Scroll to explore
        <span className="block w-10 h-[1px] bg-text-dim animate-[scrollline_2s_infinite]" />
      </div>
    </section>
  );
}
