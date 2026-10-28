import Link from "next/link";
import { type Locale } from "@/lib/products";
import { type Service, serviceHref, services } from "@/lib/services";
import { ServiceIcon } from "./service-icon";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const copy = {
  tr: {
    home: "Ana sayfa",
    services: "Hizmetler",
    servicesHref: "/#hizmetler",
    cta: "Ücretsiz teklif alın",
    quoteHref: "/#teklif",
    featuresEyebrow: "Neler yapıyoruz",
    featuresTitle: "Kapsam",
    deliverablesEyebrow: "Teslimatlar",
    deliverablesTitle: "Proje sonunda elinizde olacaklar.",
    relatedEyebrow: "Diğer hizmetler",
    relatedTitle: "Birlikte çalışabileceğimiz diğer alanlar.",
    more: "Detaylı bilgi",
    closingTitle: "Projenizi konuşalım.",
    closingBody: "İhtiyacınızı dinleyelim, size özel bir yol haritası ve teklif hazırlayalım. Ön görüşme ücretsizdir.",
  },
  en: {
    home: "Home",
    services: "Services",
    servicesHref: "/en#services",
    cta: "Get a free quote",
    quoteHref: "/en#quote",
    featuresEyebrow: "What we do",
    featuresTitle: "Scope",
    deliverablesEyebrow: "Deliverables",
    deliverablesTitle: "What you will have at the end of the project.",
    relatedEyebrow: "Other services",
    relatedTitle: "Other areas we can work on together.",
    more: "Learn more",
    closingTitle: "Let’s talk about your project.",
    closingBody: "Tell us what you need and we will prepare a tailored roadmap and quote. The initial consultation is free.",
  },
};

export function ServicePage({ service, locale }: { service: Service; locale: Locale }) {
  const text = copy[locale];
  const related = services.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="service-hero">
          <div className="shell">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href={locale === "tr" ? "/" : "/en"}>{text.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href={text.servicesHref}>{text.services}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title[locale]}</span>
            </nav>
            <span className="service-card-icon">
              <ServiceIcon name={service.icon} />
            </span>
            <span className="eyebrow">{text.services}</span>
            <h1>{service.title[locale]}</h1>
            <p>{service.intro[locale]}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={text.quoteHref}>
                {text.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{text.featuresEyebrow}</span>
                <h2>{text.featuresTitle}</h2>
              </div>
            </div>
            <div className="feature-grid">
              {service.features[locale].map(([title, body], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell deliverables">
            <div>
              <span className="eyebrow">{text.deliverablesEyebrow}</span>
              <h2>{text.deliverablesTitle}</h2>
            </div>
            <ul>
              {service.deliverables[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section related-services">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{text.relatedEyebrow}</span>
                <h2>{text.relatedTitle}</h2>
              </div>
            </div>
            <div className="service-grid">
              {related.map((item) => (
                <Link className="service-card" href={serviceHref(item, locale)} key={item.id}>
                  <span className="service-card-icon">
                    <ServiceIcon name={item.icon} />
                  </span>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.summary[locale]}</p>
                  <span className="service-card-link">
                    {text.more} <b aria-hidden="true">→</b>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section closing-section">
          <div className="shell closing-card">
            <span className="closing-mark">+</span>
            <h2>{text.closingTitle}</h2>
            <p>{text.closingBody}</p>
            <div>
              <Link className="button button-primary" href={text.quoteHref}>
                {text.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
