import { test, expect } from '@playwright/test';

test('homepage shows main content without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto('/');

  await expect(page.locator('main')).toContainText('Максим.');
  await expect(page.locator('main')).toContainText('Разработчик, архитектор систем, AI.');

  await context.close();
});
