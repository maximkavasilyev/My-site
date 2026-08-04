import { test, expect } from "@playwright/test";

test("несуществующая страница — русский брендированный 404, не дефолт Next.js", async ({
  page,
}) => {
  const response = await page.goto("/this-page-does-not-exist/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Страница не найдена" })).toBeVisible();
  await expect(page.getByRole("link", { name: "На главную" })).toHaveAttribute("href", "/");
});
