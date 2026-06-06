import { getAllBlogPosts } from "@/lib/mdx";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Timeline from "@/components/sections/Timeline";
import BlogGrid from "@/components/sections/BlogGrid";
import ContactForm from "@/components/sections/ContactForm";

export default async function Home() {
  const allPosts = await getAllBlogPosts();
  // Limit to featured posts for the landing page
  const featuredPosts = allPosts.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thato Mabena",
    "jobTitle": "Software Engineer",
    "url": "https://thatom.dev",
    "sameAs": [
      "https://github.com/PTA-Avenger",
      "https://linkedin.com/in/thato-mabenadev"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "North-West University",
      "sameAs": "https://www.nwu.ac.za"
    },
    "knowsAbout": [
      "Distributed Systems",
      "AI & Machine Learning",
      "Natural Language Processing",
      "Data Engineering",
      "Software Architecture",
      "C# .NET",
      "Java Spring Boot",
      "Python"
    ]
  };

  return (
    <>
      {/* Search Engine Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Timeline />
      <BlogGrid posts={featuredPosts} />
      <ContactForm />
    </>
  );
}
