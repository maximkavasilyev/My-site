import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Локальные окружения с несовпадающей ревизией предустановленного браузера (и часто
        // запущенные под root, где Chromium требует --no-sandbox) могут задать путь явно,
        // не трогая обычный playwright install в CI/у остальных.
        launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
          ? {
              executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
              args: ["--no-sandbox"],
            }
          : undefined,
      },
    },
  ],
  webServer: {
    // Тестируем реальный статический экспорт (то, что реально уедет на VPS), не next dev.
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
