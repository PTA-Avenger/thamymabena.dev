import { projectsData } from "@/content/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 max-w-[1140px] mx-auto relative z-10">
      <div className="section-label reveal font-mono text-[0.68rem] text-teal tracking-[0.16em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-teal-dim">
        Projects
      </div>
      <h2 className="section-heading reveal font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-[1.15] mb-4">
        Things I&apos;ve <em className="font-serif not-italic text-teal">built</em>
      </h2>
      <p className="section-sub reveal text-[1rem] text-text-mid max-w-[520px] mb-14">
        End-to-end systems, designed and shipped independently.
      </p>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border/40 border border-border/40">
        {projectsData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
