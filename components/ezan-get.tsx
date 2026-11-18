import type { Metadata } from "next";
import { type Locale } from "@/lib/products";

// Store links without a storefront code, so each store opens in the visitor's own country and language.
const appStoreUrl = "https://apps.apple.com/app/id713708943";
const playStoreUrl = "https://play.google.com/store/apps/details?id=co.yapps.ezan";

const copy = {
  tr: {
    title: "Ezan – Namaz Saatleri ve Kıble",
    description:
      "Bulunduğun yerin doğru namaz vakitleri, canlı kıble pusulası, Kur’an-ı Kerim, dualar ve zikirmatik. iPhone, Apple Watch ve Android için ücretsiz.",
    redirecting: "Mağazaya yönlendiriliyorsun…",
    landing: "/ezan/",
    more: "Uygulama hakkında",
  },
  en: {
    title: "Ezan – Prayer Times & Qibla",
    description:
      "Accurate prayer times for your location, a live Qibla compass, the Holy Quran, duas and a dhikr counter. Free for iPhone, Apple Watch and Android.",
    redirecting: "Taking you to the store…",
    landing: "/en/ezan/",
    more: "About the app",
  },
} as const;

/**
 * Link shared from the app ("Share the app"). Phones go straight to their store; everything
 * else (desktop, unknown) lands on the app page. The page is static, so the choice is made in
 * the browser; link-preview crawlers do not run scripts and read the Open Graph tags instead.
 */
export function ezanGetMetadata(locale: Locale): Metadata {
  const t = copy[locale];
  const path = locale === "tr" ? "/ezan/get" : "/en/ezan/get";
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: t.landing },
    robots: { index: false, follow: true },
    openGraph: {
      title: t.title,
      description: t.description,
      url: path,
      images: [{ url: "/images/ezan/icon.png", width: 512, height: 512, alt: "Ezan" }],
    },
    twitter: {
      card: "summary",
      title: t.title,
      description: t.description,
      images: ["/images/ezan/icon.png"],
    },
  };
}

export function EzanGetPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  // iPadOS reports a Mac user agent; touch points tell it apart from a real Mac.
  const script = `(function(){var u=navigator.userAgent||"";var ios=/iPhone|iPad|iPod/i.test(u)||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1);var target=ios?${JSON.stringify(appStoreUrl)}:/Android/i.test(u)?${JSON.stringify(playStoreUrl)}:${JSON.stringify(t.landing)};location.replace(target);})();`;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 24,
        textAlign: "center",
      }}
    >
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <img src="/images/ezan/icon.png" alt="Ezan" width={96} height={96} style={{ borderRadius: 22 }} />
      <p>{t.redirecting}</p>
      <p style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <a href={appStoreUrl}>App Store</a>
        <a href={playStoreUrl}>Google Play</a>
        <a href={t.landing}>{t.more}</a>
      </p>
    </main>
  );
}
