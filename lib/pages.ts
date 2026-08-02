import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";

const PAGES_DIR = path.join(process.cwd(), "content/pages");

export async function getPageBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(PAGES_DIR, `${slug}.md`), "utf8");

  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : "";
  const body = raw.replace(/^#\s+.+\n+/, "");

  const processed = await remark().use(html).process(body);

  return { title, contentHtml: processed.toString() };
}
