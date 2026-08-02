import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайт полностью статический: контент из markdown в репозитории, без API-роутов,
  // middleware и next/image. Экспорт в HTML/CSS/JS — VPS обслуживает через nginx,
  // без Node-процесса (см. ROADMAP.md, "Незакрытые вопросы").
  output: "export",
};

export default nextConfig;
