"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavProps {
  isBooted: boolean;
}

export default function Nav({ isBooted }: NavProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (target: string) => {
    const isHome = pathname === "/";
    if (target === "blog") return "/blog";
    if (target === "projects") return "/projects";
    return isHome ? `#${target}` : `/#${target}`;
  };

  const navLinks = [
    { label: "About", href: getHref("about") },
    { label: "Projects", href: getHref("projects") },
    { label: "Skills", href: getHref("skills") },
    { label: "Timeline", href: getHref("timeline") },
    { label: "Blog", href: getHref("blog") },
  ];

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-20 py-4 flex items-center justify-between border-b transition-all duration-600 ease-in-out ${
        isBooted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      } ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-border/80 shadow-md"
          : "bg-bg/40 backdrop-blur-sm border-border/40"
      }`}
    >
      <Link href="/" className="nav-logo font-mono text-[0.82rem] text-teal tracking-[0.08em]">
        thato<span className="text-text-dim">.dev</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-mono text-[0.72rem] text-text-dim hover:text-teal tracking-[0.06em] uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact CTA */}
      <div className="hidden md:block">
        <Link
          href={pathname === "/contact" ? "#" : "/contact"}
          className="nav-cta font-mono text-[0.72rem] text-teal border border-teal-dim/60 hover:border-teal px-4 py-2 uppercase tracking-[0.06em] transition-all duration-200 hover:bg-teal/8 hover:shadow-glow"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-teal font-mono text-xs focus:outline-none border border-border px-3 py-1.5 rounded-[4px]"
      >
        {mobileMenuOpen ? "CLOSE" : "MENU"}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-[65px] left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-5 md:hidden z-50">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-[0.8rem] text-text hover:text-teal tracking-[0.06em] uppercase block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-cta font-mono text-center text-[0.8rem] text-teal border border-teal-dim/60 hover:border-teal py-2.5 uppercase tracking-[0.06em] block hover:bg-teal/8"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
