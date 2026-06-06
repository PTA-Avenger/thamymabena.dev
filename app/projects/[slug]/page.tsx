import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { projectsData } from "@/content/data/projects";
import { getProjectBySlug } from "@/lib/mdx";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Thato Mabena`,
    description: project.solution,
    openGraph: {
      title: `${project.title} — Thato Mabena`,
      description: project.solution,
      images: [`/api/og?title=${encodeURIComponent(project.title)}`],
    },
    twitter: {
      title: `${project.title} — Thato Mabena`,
      description: project.solution,
      images: [`/api/og?title=${encodeURIComponent(project.title)}`],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const mdxData = await getProjectBySlug(params.slug);
  if (!mdxData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "applicationCategory": project.slug === "bridgepay" ? "BusinessApplication" : "DeveloperApplication",
    "operatingSystem": "All",
    "description": project.solution,
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
    },
  };

  return (
    <article className="py-16 px-6 md:px-20 max-w-[860px] mx-auto relative z-10">
      {/* Search Engine Software Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation and Back button */}
      <div className="mb-10">
        <Link
          href="/#projects"
          className="font-mono text-[0.72rem] text-teal hover:text-white uppercase tracking-[0.08em] inline-flex items-center gap-2"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero header */}
      <header className="mb-12 border-b border-border pb-8">
        <div className="font-mono text-[0.68rem] text-teal tracking-[0.12em] uppercase mb-3">
          {project.category} · {project.num.split(" / ")[0]}
        </div>
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white leading-tight mb-6">
          {project.title}
        </h1>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] text-text-mid border border-border px-5 py-2.5 uppercase tracking-[0.06em] hover:border-teal hover:text-teal transition-all duration-200"
          >
            ⌥ GitHub Repository
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.72rem] bg-teal text-bg px-5 py-2.5 uppercase tracking-[0.06em] font-bold hover:shadow-glow transition-all duration-200"
            >
              ↗ Live Deployment
            </a>
          )}
        </div>
      </header>

      {/* Structured Expanded Cards */}
      <section className="grid grid-cols-1 gap-6 mb-12">
        <div className="bg-surface border border-border p-6 rounded-[4px]">
          <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-text-dim mb-2">
            {"// Problem Statement"}
          </div>
          <p className="text-[0.92rem] text-text-mid leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="bg-surface border border-border p-6 rounded-[4px]">
          <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-text-dim mb-2">
            {"// Solution Implemented"}
          </div>
          <p className="text-[0.95rem] text-white leading-relaxed">
            {project.solution}
          </p>
        </div>

        <div className="bg-teal/4 border border-teal-dim/30 p-6 rounded-[4px]">
          <div className="font-mono text-[0.65rem] text-teal tracking-[0.14em] uppercase mb-3">
            ⚙ Patterns &amp; Architectures
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.patterns.map((pattern) => (
              <span
                key={pattern}
                className="font-mono text-[0.65rem] text-teal border border-teal-dim/50 px-2 py-0.5"
              >
                {pattern}
              </span>
            ))}
          </div>
          <p className="text-[0.88rem] text-text-mid leading-relaxed">
            {project.craftNote}
          </p>
        </div>
      </section>

      {/* Rich MDX Write-Up Content */}
      <section className="prose-custom">
        <MDXRemote source={mdxData.content} />
      </section>
    </article>
  );
}
