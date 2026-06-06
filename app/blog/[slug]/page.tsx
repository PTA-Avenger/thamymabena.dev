import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.metadata.title} — Thato Mabena`,
    description: post.metadata.excerpt || post.metadata.description,
    openGraph: {
      title: `${post.metadata.title} — Thato Mabena`,
      description: post.metadata.excerpt || post.metadata.description,
      images: [`/api/og?title=${encodeURIComponent(post.metadata.title)}`],
    },
    twitter: {
      title: `${post.metadata.title} — Thato Mabena`,
      description: post.metadata.excerpt || post.metadata.description,
      images: [`/api/og?title=${encodeURIComponent(post.metadata.title)}`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // Format the date
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <article className="py-16 px-6 md:px-20 max-w-[760px] mx-auto relative z-10">
      {/* Navigation */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="font-mono text-[0.72rem] text-teal hover:text-white uppercase tracking-[0.08em] inline-flex items-center gap-2"
        >
          ← Back to Notes
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 border-b border-border pb-8">
        <div className="font-mono text-[0.68rem] text-text-dim tracking-[0.12em] mb-4 flex gap-4">
          <span>{formatDate(post.metadata.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-serif text-[2.2rem] md:text-[3rem] text-white leading-tight mb-6">
          {post.metadata.title}
        </h1>
        {post.metadata.excerpt && (
          <p className="text-[1.05rem] text-text-mid leading-relaxed font-light">
            {post.metadata.excerpt}
          </p>
        )}
      </header>

      {/* Compiled MDX Body */}
      <section className="prose-custom">
        <MDXRemote source={post.content} />
      </section>
    </article>
  );
}
