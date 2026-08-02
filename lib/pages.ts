import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";

const PAGES_DIR = path.join(process.cwd(), "content/pages");

export async function getPageBySlug(slug: string) {
  const file = `${slug}.md`;
  let raw = fs.readFileSync(path.join(PAGES_DIR, file), "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1); // BOM
  const trimmed = raw.trimStart();

  const titleMatch = trimmed.match(/^#\s+(.+)/);
  if (!titleMatch) {
    throw new Error(`content/pages/${file}: не найден заголовок первого уровня ("# ...") в начале файла`);
  }

  const title = titleMatch[1].trim();
  const body = trimmed.replace(/^#\s+.+\n+/, "").trimEnd();

  const processed = await remark().use(html).process(body);

  return { title, contentHtml: processed.toString() };
}

export type Channel = { label: string; href: string; primary: boolean };

export async function getContactPage() {
  const file = "contact.md";
  let raw = fs.readFileSync(path.join(PAGES_DIR, file), "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1); // BOM
  const trimmed = raw.trimStart();

  const titleMatch = trimmed.match(/^#\s+(.+)/);
  if (!titleMatch) {
    throw new Error(`content/pages/${file}: не найден заголовок первого уровня ("# ...") в начале файла`);
  }
  const title = titleMatch[1].trim();

  const leadMatch = trimmed.replace(/^#\s+.+\n+/, "").match(/^(.+)/);
  const lead = leadMatch ? leadMatch[1].trim() : "";

  const linkPattern = /^-\s*\[([^\]]+)\]\(([^)]+)\)\s*$/gm;
  const channels: Channel[] = [];
  let match: RegExpExecArray | null;
  while ((match = linkPattern.exec(trimmed))) {
    channels.push({ label: match[1].trim(), href: match[2].trim(), primary: channels.length === 0 });
  }

  if (channels.length === 0) {
    throw new Error(`content/pages/${file}: не найдено ни одной ссылки-канала вида "- [Название](url)"`);
  }

  return { title, lead, channels };
}
