import Link from "next/link";
import { MDXPost } from "@/lib/mdx";

interface BlogCardProps {
  post: MDXPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Format the date to show only the year or month + year
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "2025";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", { year: "numeric" });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="blog-card reveal bg-surface border border-border p-8 flex flex-col gap-3 transition-all duration-300 hover:border-teal-dim hover:-translate-y-1 group min-h-[280px]">
      <div className="blog-meta flex gap-4 font-mono text-[0.65rem] text-text-dim">
        <span>{formatDate(post.metadata.date)}</span>
        <span>{post.readingTime || "5 min read"}</span>
      </div>
      <h3 className="blog-title font-serif text-[1.1rem] text-white leading-snug group-hover:text-teal transition-colors duration-200">
        <Link href={`/blog/${post.slug}`} className="block">
          {post.metadata.title}
        </Link>
      </h3>
      <p className="blog-excerpt text-[0.85rem] text-text-mid leading-relaxed flex-grow">
        {post.metadata.excerpt || post.metadata.description}
      </p>
      <div className="blog-read font-mono text-[0.68rem] text-teal tracking-[0.06em] mt-1 group-hover:underline">
        <Link href={`/blog/${post.slug}`}>
          Read note →
        </Link>
      </div>
    </div>
  );
}
