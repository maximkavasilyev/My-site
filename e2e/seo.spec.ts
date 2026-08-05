import { test, expect } from "@playwright/test";
import { getAllPosts } from "@/lib/posts";

test("robots.txt отдаётся и закрывает /design-system от индексации", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("Disallow: /design-system/");
  expect(body).toContain("Sitemap:");
});

test("sitemap.xml валиден и содержит все посты", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("<urlset");
  expect(body).toContain("/blog/suppliers-lose-before-submission/");
});

test("rss.xml валиден, содержит все посты, экранирован", async ({ request }) => {
  const res = await request.get("/rss.xml");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("<rss version=\"2.0\"");
  const itemCount = (body.match(/<item>/g) ?? []).length;
  expect(itemCount).toBe(getAllPosts().length);
});

test("og:image присутствует на Главной и на посте, указывает на разные картинки", async ({
  page,
}) => {
  await page.goto("/");
  const homeOg = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(homeOg).toContain("/opengraph-image");

  await page.goto("/blog/complexity-stays-inside/");
  const postOg = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(postOg).toContain("/blog/complexity-stays-inside/opengraph-image");
  expect(postOg).not.toBe(homeOg);
});

test("RSS автообнаружение — <link rel=alternate> в head", async ({ page }) => {
  await page.goto("/");
  const feed = page.locator('link[type="application/rss+xml"]');
  await expect(feed).toHaveAttribute("href", /\/rss\.xml$/);
});
