import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", title: /Максим/ },
  { path: "/about/", title: /Обо мне/ },
  { path: "/projects/", title: /Проекты/ },
  { path: "/blog/", title: /Блог/ },
  { path: "/contact/", title: /Контакты/ },
];

for (const { path, title } of pages) {
  test(`${path} отдаёт 200 и правильный title`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(title);
  });
}

test("хедер: клик по каждому пункту ведёт на нужный URL", async ({ page }) => {
  const links: [string, string][] = [
    ["Обо мне", "/about/"],
    ["Проекты", "/projects/"],
    ["Блог", "/blog/"],
    ["Контакты", "/contact/"],
  ];

  for (const [label, expected] of links) {
    await page.goto("/");
    await page.locator("header").getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${expected}$`));
  }
});

test("футер: ссылка на RSS указывает на /rss.xml", async ({ page }) => {
  await page.goto("/");
  const rss = page.locator("footer").getByRole("link", { name: "RSS" });
  await expect(rss).toHaveAttribute("href", "/rss.xml");
});

test("клавиатурный фокус виден акцентным outline, не браузерным дефолтом", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab"); // skip-link
  await page.keyboard.press("Tab"); // логотип
  await page.keyboard.press("Tab"); // первая ссылка хедера

  // :focus-visible матчится не синхронно с keydown в Chromium — небольшая пауза,
  // иначе изредка читаем ещё не применившийся computed style.
  await expect(async () => {
    const outlineColor = await page.evaluate(
      () => getComputedStyle(document.activeElement as Element).outlineColor,
    );
    // rgb(181, 80, 44) — #B5502C, акцентный цвет из design tokens
    expect(outlineColor).toBe("rgb(181, 80, 44)");
  }).toPass({ timeout: 2000 });
});

test("product links carry shared UTM parameters", async ({ page }) => {
  const products = [
    ["Pro-leads", "https://pro-leads.ru/?utm_source=maxightai.ru&utm_medium=referral&utm_campaign=product-links"],
    ["Tender Audit", "https://tenderaudit.ru/?utm_source=maxightai.ru&utm_medium=referral&utm_campaign=product-links"],
  ] as const;

  await page.goto("/projects/");
  for (const [name, href] of products) {
    await expect(page.locator("main").getByRole("link", { name: `Перейти на ${name} →` })).toHaveAttribute("href", href);
    await expect(page.locator("footer").getByRole("link", { name, exact: true })).toHaveAttribute("href", href);
  }
});
