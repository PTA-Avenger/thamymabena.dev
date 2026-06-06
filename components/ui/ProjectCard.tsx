import Link from "next/link";
import { Project } from "@/content/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isDemoAvailable = project.demo && project.demo !== "#";

  return (
    <div className="project-card reveal bg-surface border border-border p-9 flex flex-col relative overflow-hidden transition-all duration-300 hover:border-teal-dim hover:-translate-y-1 hover:shadow-2xl group min-h-[580px]">
      {/* Glow top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="project-num font-mono text-[0.64rem] text-text-dim tracking-[0.12em] mb-4">
        {project.num}
      </div>

      <h3 className="font-serif text-[1.4rem] text-white leading-tight mb-5 hover:text-teal transition-colors duration-200">
        <Link href={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      </h3>

      {/* Problem Block */}
      <div className="project-problem-block mb-4">
        <div className="project-block-label font-mono text-[0.6rem] tracking-[0.14em] uppercase text-text-dim mb-1.5">
          {"// Problem"}
        </div>
        <div className="project-problem-text text-[0.85rem] text-text-mid leading-relaxed border-l border-border pl-3">
          {project.problem}
        </div>
      </div>

      {/* Solution Block */}
      <div className="project-solution-block mb-5">
        <div className="project-block-label font-mono text-[0.6rem] tracking-[0.14em] uppercase text-text-dim mb-1.5">
          {"// Solution"}
        </div>
        <div className="project-solution-text text-[0.88rem] text-textDefault/90 leading-relaxed">
          {project.solution}
        </div>
      </div>

      {/* Craft Block */}
      <div className="project-craft-block bg-teal/4 border border-teal-dim/40 p-4 mb-6">
        <div className="project-craft-label font-mono text-[0.6rem] text-teal tracking-[0.14em] uppercase mb-2.5">
          ⚙ The Craft — Patterns &amp; Architecture
        </div>
        <div className="project-tags flex flex-wrap gap-1.5 mb-2.5">
          {project.patterns.slice(0, 4).map((pattern) => (
            <span
              key={pattern}
              className="tag font-mono text-[0.65rem] text-teal border border-teal-dim/60 px-2 py-0.5 tracking-wider"
            >
              {pattern}
            </span>
          ))}
        </div>
        <div className="project-craft-note text-[0.78rem] text-text-dim leading-relaxed">
          {project.craftNote}
        </div>
      </div>

      {/* Buttons */}
      <div className="project-btns flex gap-2 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost font-mono text-[0.72rem] text-text-mid border border-border px-5 py-2.5 uppercase tracking-[0.08em] hover:border-teal-dim hover:text-teal inline-flex items-center justify-center gap-1.5 flex-1 transition-all duration-200"
        >
          ⌥ Code
        </a>
        {isDemoAvailable ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-mono text-[0.72rem] bg-teal text-bg px-5 py-2.5 uppercase tracking-[0.08em] font-bold inline-flex items-center justify-center gap-1.5 flex-1 transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
          >
            ↗ Live Demo
          </a>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="btn-primary font-mono text-[0.72rem] bg-teal text-bg px-5 py-2.5 uppercase tracking-[0.08em] font-bold inline-flex items-center justify-center gap-1.5 flex-1 transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
          >
            Details →
          </Link>
        )}
      </div>
    </div>
  );
}
