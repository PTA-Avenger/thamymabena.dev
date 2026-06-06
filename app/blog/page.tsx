import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import BlogCard from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "Technical Notes — Thato Mabena",
  description: "Read technical write-ups, architecture notes, and design decisions written by Thato Mabena.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

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
          Technical <em className="font-serif not-italic text-teal">Notes</em>
        </h1>
        <p className="text-[1rem] text-text-mid max-w-[520px]">
          Lessons learned, design decisions, and engineering trade-offs navigated during development.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border/40 border border-border/40">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-border bg-surface">
          <p className="font-mono text-sm text-text-dim">No posts found.</p>
        </div>
      )}
    </div>
  );
}
