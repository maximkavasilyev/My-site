import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostType = "product" | "expert";
export type Product = "pro-leads" | "tender-audit" | null;

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  product: Product;
  summary: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    const date = data.date instanceof Date ? data.date : new Date(data.date);

    return {
      slug,
      title: data.title as string,
      date: date.toISOString().slice(0, 10),
      type: data.type as PostType,
      product: (data.product ?? null) as Product,
      summary: data.summary as string,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
