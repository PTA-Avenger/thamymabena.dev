"use client";

import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: "BOOT", suffix: " portfolio kernel v1.0", type: "ok" },
  { text: "LOAD", suffix: " projects.db ................", type: "ok" },
  { text: "INIT", suffix: " skills.registry ............", type: "ok" },
  { text: "BIND", suffix: " experience.log .............", type: "ok" },
  { text: "LINK", suffix: " contact.api ................", type: "warn", tail: " 1 cert pending" },
];

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check session storage to see if we've already booted
    if (typeof window !== "undefined") {
      const hasBooted = sessionStorage.getItem("has_booted");
      if (hasBooted === "true") {
        setShouldRender(false);
        onComplete();
        return;
      }
    }

    // Step-by-step lines rendering
    const lineTimers = BOOT_LINES.map((_, index) => {
      return setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, (0.1 + index * 0.22) * 1000);
    });

    // Progress bar fill (simulates the 1.8s + 0.4s delay barfill keyframe)
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 400);

    // Fade out and complete boot sequence after 2.3 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("has_booted", "true");
      }
    }, 2300);

    const completeTimer = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 2900); // 2300ms + 600ms transition time

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(progressTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      id="boot"
      className={`fixed inset-0 bg-bg z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFading ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="font-mono text-[0.78rem] text-teal w-[min(520px,90vw)] flex flex-col gap-[2px]">
        {BOOT_LINES.map((line, index) => {
          const isVisible = index < visibleLines;
          return (
            <div
              key={index}
              className={`transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              <span className="text-teal mr-2">{line.text}</span>
              <span className="text-text-dim">{line.suffix}</span>
              {line.type === "warn" ? (
                <span className="text-amber ml-2">{line.tail}</span>
              ) : (
                <span className="text-teal ml-2">✓</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-7 w-[min(520px,90vw)]">
        <div className="font-mono text-[0.72rem] text-text-dim mb-2">
          Initialising portfolio.thato.dev ...
        </div>
        <div className="h-[2px] bg-border rounded-[2px] overflow-hidden">
          <div
            className="h-full bg-teal shadow-[0_0_8px_var(--teal)] transition-all duration-[1800ms] ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
