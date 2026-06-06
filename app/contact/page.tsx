import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Thato Mabena",
  description: "Get in touch with Thato Mabena for graduate programme opportunities, systems design, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="py-16 px-6 md:px-20 max-w-[1140px] mx-auto relative z-10">
      <div className="mb-10">
        <Link
          href="/"
          className="font-mono text-[0.72rem] text-teal hover:text-white uppercase tracking-[0.08em] inline-flex items-center gap-2"
        >
          ← Back to Home
        </Link>
      </div>

      <ContactForm />
    </div>
  );
}
