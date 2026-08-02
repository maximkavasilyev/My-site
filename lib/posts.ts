import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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

export type Post = PostMeta & {
  contentHtml: string;
  ctaQuote: string | null;
};

function readPostFile(slug: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const date = data.date instanceof Date ? data.date : new Date(data.date);

  const meta: PostMeta = {
    slug,
    title: data.title as string,
    date: date.toISOString().slice(0, 10),
    type: data.type as PostType,
    product: (data.product ?? null) as Product,
    summary: data.summary as string,
  };

  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  const posts = files.map((file) => readPostFile(file.replace(/\.md$/, "")).meta);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { meta, content } = readPostFile(slug);

  // markdown-заголовок в теле дублирует frontmatter title — рендерим title отдельно, убираем из тела.
  // gray-matter оставляет ведущие пустые строки перед `#`, поэтому trimStart() обязателен для ^-якоря.
  const withoutHeading = content.trimStart().replace(/^#\s+.+\n+/, "").trimEnd();

  // конвенция: у продуктового поста последняя цитата в файле — это CTA, не рядовой blockquote
  let ctaQuote: string | null = null;
  let body = withoutHeading;

  if (meta.type === "product") {
    const quoteMatch = withoutHeading.match(/\n>\s*(.+)$/);
    if (quoteMatch) {
      ctaQuote = quoteMatch[1].trim();
      body = withoutHeading.slice(0, quoteMatch.index).trimEnd();
    }
  }

  const processed = await remark().use(html).process(body);

  return { ...meta, contentHtml: processed.toString(), ctaQuote };
}
