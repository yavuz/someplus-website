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
        <span>App Store</span>
        <small>{locale === "tr" ? "iOS için indir" : "Download for iOS"}</small>
      </a>
      <a className={styles.store} href={solayaStores.google}>
        <span>Google Play</span>
        <small>{locale === "tr" ? "Android için indir" : "Download for Android"}</small>
      </a>
    </div>
  );
}
