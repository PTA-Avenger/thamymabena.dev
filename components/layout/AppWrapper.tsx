"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BootScreen from "./BootScreen";
import Nav from "./Nav";
import Footer from "./Footer";
import CursorGlow from "../ui/CursorGlow";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasBooted = sessionStorage.getItem("has_booted");
      if (hasBooted === "true") {
        setIsBooted(true);
      }
    }
  }, []);

  // Scroll Reveal Implementation using IntersectionObserver
  useEffect(() => {
    if (!isBooted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Slight delay to ensure React DOM has completed rendering
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname, isBooted]);

  return (
    <>
      <CursorGlow />
      <BootScreen onComplete={() => setIsBooted(true)} />
      
      <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isBooted ? "opacity-100" : "opacity-0"}`}>
        <Nav isBooted={isBooted} />
        <main className="flex-grow relative z-10 pt-[73px]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
