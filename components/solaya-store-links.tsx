import type { Locale } from "@/lib/products";
import styles from "./solaya-store-links.module.css";

export const solayaStores = {
  apple: "https://apps.apple.com/tr/app/solaya-time-to-go-outside/id6834972254",
  google: "https://play.google.com/store/apps/details?id=app.solaya",
};

export function SolayaStoreLinks({ locale }: { locale: Locale }) {
  return (
    <div className={styles.links} aria-label={locale === "tr" ? "Solaya’yı indir" : "Download Solaya"}>
      <a className={styles.store} href={solayaStores.apple}>
        <img className={styles.apple} src={`/images/store-badges/app-store-${locale}.svg`} alt={locale === "tr" ? "App Store’dan indirin" : "Download on the App Store"} />
      </a>
      <a className={styles.store} href={solayaStores.google}>
        <img className={locale === "en" ? `${styles.google} ${styles.googleEn}` : styles.google} src={`/images/store-badges/google-play-${locale}.png`} alt={locale === "tr" ? "Google Play’den alın" : "Get it on Google Play"} />
      </a>
    </div>
  );
}
