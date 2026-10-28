import Link from "next/link";
import { company, phoneHref, whatsappHref } from "@/lib/company";
import { type Locale } from "@/lib/products";
import { serviceHref, services } from "@/lib/services";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";
  const home = isTr ? "/" : "/en";

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <img src="/logo.svg" alt="someplus.work" width="174" height="50" />
          <p>
            {isTr
              ? "Kurumsal yazılım, web, e-ticaret, mobil uygulama ve yapay zekâ alanlarında uçtan uca dijital çözümler."
              : "End-to-end digital solutions across enterprise software, web, e-commerce, mobile apps, and AI."}
          </p>
        </div>
        <div className="footer-columns">
          <div>
            <h2>{isTr ? "Hizmetler" : "Services"}</h2>
            {services.map((service) => (
              <Link href={serviceHref(service, locale)} key={service.id}>
                {service.title[locale]}
              </Link>
            ))}
          </div>
          <div>
            <h2>{isTr ? "Kurumsal" : "Company"}</h2>
            <Link href={`${home}#${isTr ? "projeler" : "work"}`}>
              {isTr ? "Projelerimiz" : "Our work"}
            </Link>
            <Link href={`${home}#${isTr ? "surec" : "process"}`}>
              {isTr ? "Çalışma süreci" : "How we work"}
            </Link>
            <Link href={isTr ? "/kvkk" : "/en/data-protection"}>
              {isTr ? "KVKK Aydınlatma Metni" : "Data protection notice"}
            </Link>
            <Link href={isTr ? "/privacy" : "/en/privacy"}>
              {isTr ? "Gizlilik" : "Privacy"}
            </Link>
            <Link href={isTr ? "/support" : "/en/support"}>
              {isTr ? "Ürün desteği" : "Product support"}
            </Link>
          </div>
          <div>
            <h2>{isTr ? "İletişim" : "Contact"}</h2>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phone && <a href={phoneHref(company.phone)}>{company.phone}</a>}
            {company.whatsapp && (
              <a href={whatsappHref(company.whatsapp)} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            )}
            {company.address && <address>{company.address}</address>}
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © 2026 {company.legalName || company.brand}
          {company.taxOffice && company.taxNumber
            ? ` · ${company.taxOffice} V.D. ${company.taxNumber}`
            : ""}
        </span>
        <span>{isTr ? "Tüm hakları saklıdır." : "All rights reserved."}</span>
      </div>
      {company.whatsapp && (
        <a
          className="whatsapp-float"
          href={whatsappHref(company.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isTr ? "WhatsApp ile yazın" : "Message us on WhatsApp"}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
            <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.3-.2Z" />
          </svg>
        </a>
      )}
    </footer>
  );
}
