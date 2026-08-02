import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайт полностью статический: контент из markdown в репозитории, без API-роутов,
  // middleware и next/image. Экспорт в HTML/CSS/JS — VPS обслуживает через nginx,
  // без Node-процесса.
  output: "export",
  // /about -> /about/index.html вместо /about.html — простейший вариант для static-хостинга:
  // nginx отдаёт директории через try_files $uri $uri/ =404, без угадывания .html-расширений.
  // Пример конфига — deploy/nginx.conf.example. Меняя это значение, синхронизируй его.
  trailingSlash: true,
};

export default nextConfig;
