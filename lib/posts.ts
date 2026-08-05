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
  ctaQuote: string | null;
};

export type Post = PostMeta & {
  contentHtml: string;
};

const POST_TYPES: readonly PostType[] = ["product", "expert"];
const PRODUCTS: readonly Exclude<Product, null>[] = ["pro-leads", "tender-audit"];

function fail(file: string, message: string): never {
  throw new Error(`Некорректный фронтматтер в content/posts/${file}: ${message}`);
}

function validateMeta(file: string, data: Record<string, unknown>): PostMeta {
  const slug = file.replace(/\.md$/, "");

  if (typeof data.title !== "string" || data.title.trim() === "") {
    fail(file, `поле "title" обязательно и должно быть непустой строкой`);
  }

  const dateValue = data.date instanceof Date ? data.date : new Date(data.date as string);
  if (Number.isNaN(dateValue.getTime())) {
    fail(file, `поле "date" отсутствует или не парсится как дата, получено: ${JSON.stringify(data.date)}`);
  }

  if (!POST_TYPES.includes(data.type as PostType)) {
    fail(
      file,
      `поле "type" должно быть одним из ${POST_TYPES.join(" | ")}, получено: ${JSON.stringify(data.type)}`,
    );
  }
  const type = data.type as PostType;

  const product = (data.product ?? null) as Product;
  if (type === "product") {
    if (!PRODUCTS.includes(product as Exclude<Product, null>)) {
      fail(
        file,
        `для type: product поле "product" должно быть одним из ${PRODUCTS.join(" | ")}, получено: ${JSON.stringify(data.product)}`,
      );
    }
  } else if (product !== null) {
    fail(file, `для type: expert поле "product" должно отсутствовать или быть null, получено: ${JSON.stringify(data.product)}`);
  }

  if (typeof data.summary !== "string" || data.summary.trim() === "") {
    fail(file, `поле "summary" обязательно и должно быть непустой строкой`);
  }

  const ctaQuote = typeof data.cta_quote === "string" ? data.cta_quote : null;
  if (type === "product" && (!ctaQuote || ctaQuote.trim() === "")) {
    fail(file, `для type: product поле "cta_quote" обязательно и должно быть непустой строкой`);
  }
  if (type === "expert" && ctaQuote) {
    fail(file, `для type: expert поле "cta_quote" не используется — уберите его или смените type`);
  }

  return {
    slug,
    title: data.title as string,
    date: dateValue.toISOString().slice(0, 10),
    type,
    product,
    summary: data.summary as string,
    ctaQuote,
  };
}

function readPostFile(file: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  return { meta: validateMeta(file, data), content };
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  const posts = files.map((file) => readPostFile(file).meta);

  return posts.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.slug.localeCompare(b.slug);
  });
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { meta, content } = readPostFile(`${slug}.md`);

  // markdown-заголовок в теле дублирует frontmatter title — рендерим title отдельно, убираем из тела.
  // gray-matter оставляет ведущие пустые строки перед `#`, поэтому trimStart() обязателен для ^-якоря.
  const body = content.trimStart().replace(/^#\s+.+\n+/, "").trimEnd();

  const processed = await remark().use(html).process(body);

  return { ...meta, contentHtml: processed.toString() };
}
