import Link from "next/link";
import { type Locale } from "@/lib/products";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Section = {
  title: string;
  body: string;
};

export function InfoPage({
  locale,
  eyebrow,
  title,
  intro,
  sections,
  backLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  backLabel: string;
}) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="info-main">
        <div className="shell info-shell">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="info-intro">{intro}</p>
          <div className="info-sections">
            {sections.map((section, index) => (
              <section key={section.title}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              </section>
            ))}
          </div>
          <Link className="button button-primary" href={locale === "tr" ? "/" : "/en"}>
            <span aria-hidden="true">←</span>
            {backLabel}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
