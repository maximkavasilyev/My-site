import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";

const PROJECTS_FILE = path.join(process.cwd(), "content/pages/projects.md");

export type ProjectSlug = "pro-leads" | "tender-audit";

export type Project = {
  slug: ProjectSlug;
  name: string;
  contentHtml: string;
};

const KNOWN_PROJECTS: Record<string, ProjectSlug> = {
  "Pro-leads": "pro-leads",
  "Tender Audit": "tender-audit",
};

export async function getProjectsPage() {
  const raw = fs.readFileSync(PROJECTS_FILE, "utf8");

  const titleMatch = raw.match(/^#\s+(.+)/);
  const title = titleMatch ? titleMatch[1].trim() : "Проекты";

  const sections = raw.split(/^##\s+/m).slice(1);

  const projects = await Promise.all(
    sections.map(async (section) => {
      const [firstLine, ...rest] = section.split("\n");
      const name = firstLine.trim();
      const slug = KNOWN_PROJECTS[name];

      if (!slug) {
        throw new Error(
          `content/pages/projects.md: неизвестная секция "## ${name}" — ожидались только ${Object.keys(KNOWN_PROJECTS).join(", ")}. Если это новый продукт, обнови KNOWN_PROJECTS в lib/projects.ts осознанно.`,
        );
      }

      const processed = await remark().use(html).process(rest.join("\n").trim());

      return { slug, name, contentHtml: processed.toString() } satisfies Project;
    }),
  );

  return { title, projects };
}
