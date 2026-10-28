import Link from "next/link";
import { type Locale } from "@/lib/products";

const copy = {
  tr: {
    nav: [
      ["/#hizmetler", "Hizmetler"],
      ["/#surec", "Süreç"],
      ["/#projeler", "Projelerimiz"],
      ["/#sss", "SSS"],
    ],
    cta: "Teklif Al",
    ctaHref: "/#teklif",
    languageHref: "/en",
    languageLabel: "EN",
    home: "/",
  },
  en: {
    nav: [
      ["/en#services", "Services"],
      ["/en#process", "Process"],
      ["/en#work", "Our work"],
      ["/en#faq", "FAQ"],
    ],
    cta: "Get a quote",
    ctaHref: "/en#quote",
    languageHref: "/",
    languageLabel: "TR",
    home: "/en",
  },
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const labels = copy[locale];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={labels.home} aria-label="someplus.work">
          <img src="/logo.svg" alt="someplus.work" width="208" height="60" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {labels.nav.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button-primary header-cta" href={labels.ctaHref}>
            {labels.cta}
          </Link>
          <Link className="language-button" href={labels.languageHref}>
            {labels.languageLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
