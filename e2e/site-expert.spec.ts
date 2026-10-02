import { test, expect } from "@playwright/test";

for (const width of [375, 390]) {
  test(`длинный кейс раскрывается с обычной анимацией при ${width}×667`, async ({ page }) => {
    await page.setViewportSize({ width, height: 667 });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/blog/static-site-with-markdown/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("html")).toHaveAttribute("data-js", "true");
    await page.locator(".prose > :first-child").scrollIntoViewIfNeeded();
    await expect(page.locator(".prose").locator("xpath=ancestor::*[contains(@class, 'reveal')]")).toHaveCSS("opacity", "1");
  });
}

for (const javaScriptEnabled of [true, false]) {
  test(`схема кейса не расширяет страницу на 320px, JS=${javaScriptEnabled}`, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 320, height: 667 },
      javaScriptEnabled,
      reducedMotion: "reduce",
    });
    try {
      const page = await context.newPage();
      await page.goto("/blog/static-site-with-markdown/");
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
      await expect(page.locator(".prose pre")).toHaveCSS("overflow-x", "auto");
    } finally {
      await context.close();
    }
  });
}

for (const width of [390, 768, 1440]) {
  test(`главная, кейс и проекты без переполнения при ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });

    for (const [name, path] of [
      ["home", "/"],
      ["case", "/blog/static-site-with-markdown/"],
      ["projects", "/projects/"],
    ]) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      // Reduced motion должен показывать и блоки ниже первого экрана, до прокрутки.
      for (const block of await page.locator(".reveal").all()) {
        await expect(block).toHaveCSS("opacity", "1");
      }
      await expect(page.locator('header img[alt="MaxightAI"]')).toBeVisible();
      await expect(async () => {
        const imageWidth = await page.locator('header img[alt="MaxightAI"]').evaluate(
          (img: HTMLImageElement) => img.naturalWidth,
        );
        expect(imageWidth).toBe(128);
      }).toPass();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await page.screenshot({ path: testInfo.outputPath(`${name}-${width}.png`), fullPage: true });
    }
  });
}
