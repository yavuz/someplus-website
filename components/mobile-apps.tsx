import Link from "next/link";
import { appStoreDeveloperUrl, googlePlayDeveloperUrl, mobileApps } from "@/lib/apps";
import type { Locale } from "@/lib/products";

const copy = {
  tr: {
    id: "uygulamalar",
    eyebrow: "Mobil uygulamalarımız",
    title: "App Store ve Google Play’de yayında.",
    description:
      "iOS ve Android için kendi geliştirip yayınladığımız uygulamalar. Her biri gerçek kullanıcılarla büyüyor, düzenli güncelleniyor ve aynı ekip tarafından destekleniyor.",
    details: "Detaylar",
    allApple: "Tüm App Store uygulamaları",
    allGoogle: "Tüm Google Play uygulamaları",
  },
  en: {
    id: "apps",
    eyebrow: "Our mobile apps",
    title: "Live on the App Store and Google Play.",
    description:
      "Apps we built and publish ourselves for iOS and Android. Each one grows with real users, gets regular updates, and is supported by the same team.",
    details: "Details",
    allApple: "All App Store apps",
    allGoogle: "All Google Play apps",
  },
} as const;

export function MobileApps({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <section className="section products-section" id={text.id}>
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{text.eyebrow}</span>
            <h2>{text.title}</h2>
          </div>
          <p>{text.description}</p>
        </div>
        <div className="product-grid">
          {mobileApps.map((app) => (
            <article className="product-card app-card" key={app.slug}>
              <div>
                <div className="product-card-top">
                  <img src={app.icon} alt="" width="58" height="58" loading="lazy" />
                  <span>{app.label[locale]}</span>
                </div>
                <h3>{app.name}</h3>
                <p>{app.description[locale]}</p>
              </div>
              <div className="app-card-links">
                {app.appStore && (
                  <a href={app.appStore} target="_blank" rel="noopener noreferrer">
                    App Store <span aria-hidden="true">↗</span>
                  </a>
                )}
                {app.googlePlay && (
                  <a href={app.googlePlay} target="_blank" rel="noopener noreferrer">
                    Google Play <span aria-hidden="true">↗</span>
                  </a>
                )}
                {app.page && (
                  <Link href={app.page[locale]}>
                    {text.details} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="app-store-row">
          <a className="button button-secondary" href={appStoreDeveloperUrl} target="_blank" rel="noopener noreferrer">
            {text.allApple}
            <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href={googlePlayDeveloperUrl} target="_blank" rel="noopener noreferrer">
            {text.allGoogle}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
