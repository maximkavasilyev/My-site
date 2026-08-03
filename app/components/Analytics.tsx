import Script from "next/script";

// Выключено по умолчанию — рендерится, только если задан NEXT_PUBLIC_PLAUSIBLE_DOMAIN
// на билде. Plausible выбран как отправная точка (без cookies, один script-тег, подходит
// статическому экспорту), но замена на другой провайдер — это только этот файл.
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function Analytics() {
  if (!PLAUSIBLE_DOMAIN) return null;

  return (
    <Script
      strategy="afterInteractive"
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
    />
  );
}
