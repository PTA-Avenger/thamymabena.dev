import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface MDXMetadata {
  title: string;
  description: string;
  category?: string;
  date?: string;
  github?: string;
  demo?: string;
  excerpt?: string;
}

export interface MDXPost {
  slug: string;
  metadata: MDXMetadata;
  content: string;
  readingTime?: string;
}

function getReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getProjectBySlug(slug: string): Promise<MDXPost | null> {
  try {
    const filePath = path.join(CONTENT_DIR, "projects", `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      metadata: data as MDXMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading project MDX for ${slug}:`, error);
    return null;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<MDXPost | null> {
  try {
    const filePath = path.join(CONTENT_DIR, "blog", `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      metadata: data as MDXMetadata,
      content,
      readingTime: getReadingTime(content),
    };
  } catch (error) {
    console.error(`Error reading blog MDX for ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<MDXPost[]> {
  try {
    const blogDir = path.join(CONTENT_DIR, "blog");
    if (!fs.existsSync(blogDir)) return [];

    const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

    const posts = files.map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        metadata: data as MDXMetadata,
        content,
        readingTime: getReadingTime(content),
      };
    });

    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata.date || "");
      const dateB = new Date(b.metadata.date || "");
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error("Error reading all blog posts:", error);
    return [];
  }
}
