import { test, expect } from "@playwright/test";
import { getAllPosts } from "@/lib/posts";

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

test("Главная показывает превью из 3 постов, ссылка 'Все посты' ведёт в блог", async ({
  page,
}) => {
  await page.goto("/");
  // h3 на Главной есть только внутри PostCard — "чем занимаюсь"/"проекты" используют <p>
  await expect(page.locator("main h3")).toHaveCount(3);
  await expect(page.getByRole("link", { name: "Все посты →" })).toHaveAttribute(
    "href",
    "/blog/",
  );
});
