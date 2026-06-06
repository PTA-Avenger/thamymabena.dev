import { MDXPost } from "@/lib/mdx";
import BlogCard from "../ui/BlogCard";

interface BlogGridProps {
  posts: MDXPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section id="blog" className="py-24 px-6 md:px-20 max-w-[1140px] mx-auto border-t border-border relative z-10">
      <div className="section-label reveal font-mono text-[0.68rem] text-teal tracking-[0.16em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-teal-dim">
        Technical Notes
      </div>
      <h2 className="section-heading reveal font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-[1.15] mb-4">
        Lessons <em className="font-serif not-italic text-teal">learned</em>
      </h2>
      <p className="section-sub reveal text-[1rem] text-text-mid max-w-[520px] mb-14">
        Decisions I made, trade-offs I navigated, and what I&apos;d do differently.
      </p>

      <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border/40 border border-border/40">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
