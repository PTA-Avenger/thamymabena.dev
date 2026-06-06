"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "",
  });
  const [status, setStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honeypot) {
      // Honeypot triggered (spam). Silently succeed but do nothing.
      setStatus({ submitting: false, success: true, error: null });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        _honeypot: "",
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({
        submitting: false,
        success: false,
        error: errorMessage,
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 max-w-[1140px] mx-auto border-t border-border relative z-10">
      <div className="section-label reveal font-mono text-[0.68rem] text-teal tracking-[0.16em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-teal-dim">
        Contact
      </div>

      <div className="contact-inner reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mt-12">
        {/* Left column info */}
        <div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-white leading-none mb-5">
            Let&apos;s <em className="font-serif not-italic text-teal">build</em><br />something.
          </h2>
          <p className="text-[1rem] text-text-mid leading-relaxed mb-9">
            Open to graduate programme opportunities from late 2026.
            Based in Pretoria — available nationwide and remotely.
          </p>
          <div className="contact-links flex flex-col gap-2">
            <a
              className="contact-link font-mono text-[0.75rem] text-text-mid border border-border px-5 py-3 hover:border-teal-dim hover:text-teal hover:shadow-glow flex items-center gap-2.5 transition-all duration-200"
              href="mailto:thamymabena@gmail.com"
            >
              <span className="text-teal font-sans">✉</span> thamymabena@gmail.com
            </a>
            <a
              className="contact-link font-mono text-[0.75rem] text-text-mid border border-border px-5 py-3 hover:border-teal-dim hover:text-teal hover:shadow-glow flex items-center gap-2.5 transition-all duration-200"
              href="tel:+27698616677"
            >
              <span className="text-teal font-sans">✆</span> 069 861 6677
            </a>
            <a
              className="contact-link font-mono text-[0.75rem] text-text-mid border border-border px-5 py-3 hover:border-teal-dim hover:text-teal hover:shadow-glow flex items-center gap-2.5 transition-all duration-200"
              href="https://linkedin.com/in/thato-mabenadev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-teal font-sans">in</span> linkedin.com/in/thato-mabenadev
            </a>
            <a
              className="contact-link font-mono text-[0.75rem] text-text-mid border border-border px-5 py-3 hover:border-teal-dim hover:text-teal hover:shadow-glow flex items-center gap-2.5 transition-all duration-200"
              href="https://github.com/PTA-Avenger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-teal font-sans">⌥</span> github.com/PTA-Avenger
            </a>
          </div>
        </div>

        {/* Right column form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Honeypot field */}
            <input
              type="text"
              name="_honeypot"
              value={formData._honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-100 bg-surface border border-border px-4 py-3.5 font-mono text-[0.78rem] text-textDefault/95 placeholder-text-dim/80 outline-none focus:border-teal transition-colors duration-200"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-100 bg-surface border border-border px-4 py-3.5 font-mono text-[0.78rem] text-textDefault/95 placeholder-text-dim/80 outline-none focus:border-teal transition-colors duration-200"
              />
            </div>
            
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-surface border border-border px-4 py-3.5 font-mono text-[0.78rem] text-textDefault/95 placeholder-text-dim/80 outline-none focus:border-teal transition-colors duration-200"
            />
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full bg-surface border border-border px-4 py-3.5 font-mono text-[0.78rem] text-textDefault/95 placeholder-text-dim/80 outline-none focus:border-teal transition-colors duration-200 min-h-[130px] resize-y"
            />
            
            <button
              type="submit"
              disabled={status.submitting}
              className="bg-teal text-bg px-7 py-3.5 font-mono text-[0.78rem] font-bold tracking-[0.1em] uppercase cursor-pointer hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {status.success && (
              <div className="border border-teal-dim text-teal font-mono text-[0.78rem] py-3 text-center bg-teal/4 mt-2">
                Message sent successfully! ✓
              </div>
            )}

            {status.error && (
              <div className="border border-red-500/40 text-red-400 font-mono text-[0.78rem] py-3 text-center bg-red-950/20 mt-2">
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
