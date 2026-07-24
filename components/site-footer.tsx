import Link from "next/link";
import { type Locale } from "@/lib/products";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <img src="/logo.svg" alt="someplus.work" width="174" height="50" />
          <p>
            {isTr
              ? "Dijital hayatı daha sakin, hızlı ve kullanışlı hâle getiren bağımsız ürünler."
              : "Independent products that make digital life calmer, faster, and more useful."}
          </p>
        </div>
        <div className="footer-links">
          <Link href={isTr ? "/privacy" : "/en/privacy"}>
            {isTr ? "Gizlilik" : "Privacy"}
          </Link>
          <Link href={isTr ? "/support" : "/en/support"}>
            {isTr ? "Destek" : "Support"}
          </Link>
          <a href="#products">{isTr ? "Ürünler" : "Products"}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 someplus.work</span>
        <span>{isTr ? "Özenle ve bağımsız geliştirildi." : "Thoughtfully built and independent."}</span>
      </div>
    </footer>
  );
}
