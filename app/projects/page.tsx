import { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/content/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Thato Mabena",
  description: "Explore the technical write-ups and live repositories for systems built by Thato Mabena.",
};

export default function ProjectsPage() {
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

      <header className="mb-12">
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white leading-tight mb-4">
          All <em className="font-serif not-italic text-teal">Projects</em>
        </h1>
        <p className="text-[1rem] text-text-mid max-w-[520px]">
          A comprehensive view of the systems and applications I have independently architected and shipped.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border/40 border border-border/40">
        {projectsData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
