import Link from "next/link";
import { type Locale, platformLinks, products } from "@/lib/products";
import { ProductShowcase } from "./product-showcase";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const copy = {
  tr: {
    eyebrow: "Bağımsız dijital ürün stüdyosu",
    titleLead: "Daha sakin bir dijital gün için",
    titleAccent: "küçük, güçlü araçlar.",
    description:
      "Sekmelerden e-ticarete kadar, günlük işleri daha hızlı ve anlaşılır hâle getiren hafif ürünler tasarlıyoruz.",
    primaryCta: "Ürünleri keşfet",
    secondaryCta: "Yaklaşımımız",
    signal: "Chrome · Firefox · WordPress · Adobe Commerce · iOS",
    visualTitle: "Tek tek düşünülmüş.",
    visualBody: "Hafif, odaklı ve gereksiz karmaşadan uzak.",
    stats: [
      ["8", "Chrome ürünü"],
      ["5", "Platform"],
      ["1", "Ortak yaklaşım"],
    ],
    productsEyebrow: "Ürünler",
    productsTitle: "Doğru anda işe yarayan araçlar.",
    productsDescription:
      "Her ürün tek bir gerçek probleme odaklanır. Büyük paketler yerine hızlı öğrenilen, sade araçlar.",
    featureEyebrow: "Öne çıkan",
    featureTitle: "İçeriği seç. Yapay zekâyı seç. Devam et.",
    featureDescription:
      "Open with AI, seçili metni veya açık sayfayı kullandığın yapay zekâ aracına taşır. Ücretsiz, açık ve hafif.",
    featureCta: "Open with AI’ı keşfet",
    principlesEyebrow: "Yaklaşım",
    principlesTitle: "Daha az özellik değil. Daha az sürtünme.",
    principles: [
      [
        "Odaklı",
        "Her ürün, net bir işi mümkün olan en kısa yoldan tamamlar.",
      ],
      [
        "Hafif",
        "Kaynak tüketimini, gereksiz izinleri ve arayüz kalabalığını düşük tutarız.",
      ],
      [
        "Güvenilir",
        "Beklenmedik davranışlar yerine anlaşılır kontroller ve şeffaflık.",
      ],
    ],
    platformsEyebrow: "Platformlar",
    platformsTitle: "Tek bir ekosistemle sınırlı değiliz.",
    platformsDescription:
      "Tarayıcıdan içerik yönetimine, e-ticaretten mobil uygulamalara kadar ürün geliştirdiğimiz alanlar.",
    platformCta: "Platformu aç",
    closingTitle: "Dijital iş akışında daha az sürtünme.",
    closingDescription:
      "Ürünleri keşfet, ihtiyacın olan aracı seç ve kaldığın yerden devam et.",
    closingCta: "Tüm ürünleri gör",
    supportCta: "Destek merkezi",
  },
  en: {
    eyebrow: "Independent digital product studio",
    titleLead: "Small, powerful tools for a",
    titleAccent: "calmer digital day.",
    description:
      "From browser tabs to commerce, we design lightweight products that make everyday work faster and clearer.",
    primaryCta: "Explore products",
    secondaryCta: "Our principles",
    signal: "Chrome · Firefox · WordPress · Adobe Commerce · iOS",
    visualTitle: "Thought through, one by one.",
    visualBody: "Lightweight, focused, and free from unnecessary complexity.",
    stats: [
      ["8", "Chrome products"],
      ["5", "Platforms"],
      ["1", "Shared approach"],
    ],
    productsEyebrow: "Products",
    productsTitle: "Tools that help at the right moment.",
    productsDescription:
      "Each product focuses on one real problem. Simple tools that are quick to learn instead of oversized suites.",
    featureEyebrow: "Featured",
    featureTitle: "Select the content. Pick the AI. Keep moving.",
    featureDescription:
      "Open with AI carries selected text or the current page into the AI tool you use. Free, open, and lightweight.",
    featureCta: "Explore Open with AI",
    principlesEyebrow: "Principles",
    principlesTitle: "Not fewer capabilities. Less friction.",
    principles: [
      [
        "Focused",
        "Every product completes a clear job through the shortest useful path.",
      ],
      [
        "Lightweight",
        "We keep resource use, unnecessary permissions, and interface clutter low.",
      ],
      [
        "Dependable",
        "Clear controls and transparency instead of surprising behavior.",
      ],
    ],
    platformsEyebrow: "Platforms",
    platformsTitle: "We are not limited to one ecosystem.",
    platformsDescription:
      "The spaces where we build, from browsers and content management to commerce and mobile apps.",
    platformCta: "Open platform",
    closingTitle: "Less friction in your digital workflow.",
    closingDescription:
      "Explore the products, choose the right tool, and get back to what matters.",
    closingCta: "See all products",
    supportCta: "Support center",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const openWithAi = products.find((product) => product.slug === "open-with-ai")!;

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{text.eyebrow}</span>
              <h1>
                {text.titleLead} <em>{text.titleAccent}</em>
              </h1>
              <p>{text.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">
                  {text.primaryCta}
                  <span aria-hidden="true">↓</span>
                </a>
                <a className="button button-secondary" href="#principles">
                  {text.secondaryCta}
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label={text.visualTitle}>
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="product-cluster">
                {products.slice(0, 5).map((product, index) => (
                  <div className={`cluster-icon icon-${index + 1}`} key={product.slug}>
                    <img src={product.icon} alt="" width="64" height="64" />
                  </div>
                ))}
                <div className="cluster-core">
                  <span>someplus</span>
                  <strong>+</strong>
                </div>
              </div>
              <div className="visual-note">
                <span>{text.signal}</span>
                <strong>{text.visualTitle}</strong>
                <p>{text.visualBody}</p>
              </div>
            </div>
          </div>

          <div className="shell stat-strip">
            {text.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{text.productsEyebrow}</span>
                <h2>{text.productsTitle}</h2>
              </div>
              <p>{text.productsDescription}</p>
            </div>
            <ProductShowcase locale={locale} />
          </div>
        </section>

        <section className="section feature-section">
          <div className="shell feature-card">
            <div className="feature-visual">
              <img src={openWithAi.icon} alt="" width="112" height="112" />
              <span>ChatGPT</span>
              <span>Claude</span>
              <span>Gemini</span>
              <span>Perplexity</span>
            </div>
            <div className="feature-copy">
              <span className="eyebrow eyebrow-light">{text.featureEyebrow}</span>
              <h2>{text.featureTitle}</h2>
              <p>{text.featureDescription}</p>
              <a
                className="button button-white"
                href={openWithAi.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.featureCta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section principles-section" id="principles">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{text.principlesEyebrow}</span>
                <h2>{text.principlesTitle}</h2>
              </div>
            </div>
            <div className="principle-grid">
              {text.principles.map(([title, description], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section platforms-section" id="platforms">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{text.platformsEyebrow}</span>
                <h2>{text.platformsTitle}</h2>
              </div>
              <p>{text.platformsDescription}</p>
            </div>
            <div className="platform-list">
              {platformLinks.map((platform, index) => {
                const external = platform.href.startsWith("http");
                return (
                  <a
                    href={platform.href}
                    key={platform.name}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <span className="platform-index">0{index + 1}</span>
                    <strong>{platform.name}</strong>
                    <span>{platform.note[locale]}</span>
                    <span className="platform-action">
                      {text.platformCta} <b aria-hidden="true">↗</b>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section closing-section">
          <div className="shell closing-card">
            <span className="closing-mark">+</span>
            <h2>{text.closingTitle}</h2>
            <p>{text.closingDescription}</p>
            <div>
              <a className="button button-primary" href="#products">
                {text.closingCta}
              </a>
              <Link
                className="button button-secondary"
                href={locale === "tr" ? "/support" : "/en/support"}
              >
                {text.supportCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
