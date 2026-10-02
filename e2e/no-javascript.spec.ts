import { test, expect } from '@playwright/test';

test('homepage shows main content without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto('/');

  await expect(page.locator('main')).toContainText('Максим.');
  await expect(page.locator('main')).toContainText('Разработчик, архитектор систем, AI.');
  await expect(page.getByRole('region', { name: 'С чего начать' }).getByRole('heading', { level: 3 })).toHaveCount(3);
  await page.getByRole('link', { name: 'Для создателей', exact: true }).click();
  await expect(page).toHaveURL(/\/#start$/);
  await page.getByRole('link', { name: 'Читать кейс →' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Как я устроил этот сайт: Markdown, Next.js и статический экспорт');
  await page.goto('/projects/');
  await expect(page.locator('#pro-leads')).toContainText('Граница применения.');
  await expect(page.locator('#tender-audit')).toContainText('Граница применения.');

  await context.close();
});
