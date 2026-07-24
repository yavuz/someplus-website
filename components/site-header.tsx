import Link from "next/link";
import { type Locale } from "@/lib/products";
import { ThemeToggle } from "./theme-toggle";

const copy = {
  tr: {
    products: "Ürünler",
    principles: "Yaklaşım",
    platforms: "Platformlar",
    support: "Destek",
    theme: "Temayı değiştir",
    languageHref: "/en",
    languageLabel: "EN",
    home: "/",
  },
  en: {
    products: "Products",
    principles: "Principles",
    platforms: "Platforms",
    support: "Support",
    theme: "Change theme",
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
          <a href="#products">{labels.products}</a>
          <a href="#principles">{labels.principles}</a>
          <a href="#platforms">{labels.platforms}</a>
          <Link href={locale === "tr" ? "/support" : "/en/support"}>
            {labels.support}
          </Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle label={labels.theme} />
          <Link className="language-button" href={labels.languageHref}>
            {labels.languageLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
