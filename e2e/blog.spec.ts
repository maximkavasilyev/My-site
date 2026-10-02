import { test, expect } from "@playwright/test";
import fs from "node:fs";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

test("загрузчик убирает заголовок из тела Markdown при LF и CRLF", async () => {
  const readFile = fs.readFileSync;
  try {
    for (const newline of ["\n", "\r\n"]) {
      // Меняем только прочитанный текст одного поста в процессе теста, файлы не трогаем.
      fs.readFileSync = ((...args: Parameters<typeof readFile>) => {
        const content = readFile(...args);
        return typeof content === "string" && String(args[0]).endsWith("complexity-stays-inside.md")
          ? content.replace(/\r?\n/g, newline)
          : content;
      }) as typeof readFile;
      const post = await getPostBySlug("complexity-stays-inside");
      expect(post.contentHtml).not.toMatch(/<h1[ >]/);
      expect(post.contentHtml).toContain("<h2>");
    }
  } finally {
    fs.readFileSync = readFile;
  }
});

test("лента блога показывает все посты в стабильном порядке", async ({ page }) => {
  await page.goto("/blog/");
  const titles = await page.locator("main h3").allTextContents();
  expect(titles).toEqual(getAllPosts().map((post) => post.title));
});

test("продуктовый пост: CTA-блок из cta_quote ведёт на правильный продукт", async ({ page }) => {
  await page.goto("/blog/suppliers-lose-before-submission/");
  const cta = page.getByRole("link", { name: /Перейти на Tender Audit/ });
  await expect(cta).toBeVisible();
  await expect(cta).toHaveText(/Перейти на Tender Audit/);
});

test("экспертный пост: без CTA-кнопки, есть ссылка на Обо мне", async ({ page }) => {
  await page.goto("/blog/complexity-stays-inside/");
  await expect(page.getByRole("link", { name: /Перейти на/ })).toHaveCount(0);
  const aboutLink = page.getByRole("link", { name: /Больше о подходе/ });
  await expect(aboutLink).toHaveAttribute("href", "/about/");
});

test("карточка поста в ленте ведёт на детальную страницу", async ({ page }) => {
  await page.goto("/blog/");
  await page.getByRole("link").filter({ hasText: "Государственные закупки" }).click();
  await expect(page).toHaveURL(/\/blog\/government-procurement-as-b2b-source\/$/);
});

test("Главная показывает выбранные материалы в редакционном порядке", async ({
  page,
}) => {
  await page.goto("/");
  const selection = page.getByRole("region", { name: "С чего начать" });
  await expect(selection.getByRole("heading", { level: 3 })).toHaveText([
    "Как выбрать первый процесс для AI-автоматизации",
    "Как я принимаю архитектурные решения при создании AI-продуктов",
    "Сложность должна оставаться внутри системы, а не у пользователя",
  ]);
  const slugs = [
    "ai-automation-first-process",
    "architecture-decisions-in-ai-products",
    "complexity-stays-inside",
  ];
  for (const [index, slug] of slugs.entries()) {
    const link = selection.locator('a[href^="/blog/"]').nth(index);
    await expect(link).toHaveAttribute("href", `/blog/${slug}/`);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`/blog/${slug}/$`));
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.goto("/");
  }
  await expect(selection.getByRole("link", { name: "Все материалы →" })).toHaveAttribute(
    "href",
    "/blog/",
  );
});

test("Кейс сайта доступен с главной и использует экспертный шаблон", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Читать кейс →" }).click();
  await expect(page).toHaveURL(/\/blog\/static-site-with-markdown\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Как я устроил этот сайт: Markdown, Next.js и статический экспорт",
  );
  await expect(page.locator("main").getByRole("link", { name: /Перейти на/ })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Больше о подходе/ })).toBeVisible();
});
