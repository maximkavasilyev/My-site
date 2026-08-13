import { test, expect } from "@playwright/test";

// Узкий viewport (ниже Tailwind-брейкпоинта sm), без полной эмуляции мобильного устройства —
// это конкретно тест CSS-брейкпоинта/бургер-меню, не тач-инпута.
test.use({ viewport: { width: 390, height: 844 } });

test("мобильное меню: открытие переносит фокус, aria-controls корректен", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Открыть меню" });
  await expect(toggle).toHaveAttribute("aria-controls", "mobile-nav");

  await toggle.click();
  await expect(page.locator("#mobile-nav")).toBeVisible();

  const focused = await page.evaluate(() => document.activeElement?.textContent);
  expect(focused).toBe("Обо мне");

  const bodyOverflow = await page.evaluate(() => getComputedStyle(document.body).overflow);
  expect(bodyOverflow).toBe("hidden");
});

test("мобильное меню: Escape закрывает и возвращает фокус на кнопку", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Открыть меню" });
  await toggle.click();
  await expect(page.locator("#mobile-nav")).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-nav")).toHaveCount(0);

  const focused = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
  expect(focused).toBe("Открыть меню");

  const bodyOverflow = await page.evaluate(() => getComputedStyle(document.body).overflow);
  expect(bodyOverflow).not.toBe("hidden");
});

test("мобильное меню: Tab удерживает фокус внутри меню", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Открыть меню" }).click();
  const menu = page.locator("#mobile-nav");
  const close = menu.getByRole("button", { name: "Закрыть меню" });
  const firstLink = menu.getByRole("link", { name: "Обо мне", exact: true });
  const lastLink = menu.getByRole("link", { name: "Контакты", exact: true });

  await lastLink.focus();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();

  await close.focus();
  await page.keyboard.press("Shift+Tab");
  await expect(lastLink).toBeFocused();

  await firstLink.focus();
});

test("мобильное меню: клик по пункту ведёт на нужную страницу", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Открыть меню" }).click();
  await page.locator("#mobile-nav").getByRole("link", { name: "Проекты", exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/$/);
});
