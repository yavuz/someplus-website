import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { SolayaStoreLinks } from "@/components/solaya-store-links";

export const metadata: Metadata = {
  title: "Solaya’yı indir",
  description: "Solaya’yı iOS için App Store’dan veya Android için Google Play’den indir.",
  openGraph: {
    type: "website",
    url: "https://someplus.work/solaya/get/",
    title: "Solaya — Dışarı çıkmak için en iyi an",
    description: "Altınsa çık. Solaya havayı senin için okur, dışarı çıkmak için en iyi saati bulur. iOS ve Android için indir.",
    siteName: "Solaya",
    locale: "tr_TR",
    images: [{ url: "https://someplus.work/images/solaya/icon.png", width: 512, height: 512, alt: "Solaya uygulama ikonu" }],
  },
  twitter: {
    card: "summary",
    title: "Solaya — Dışarı çıkmak için en iyi an",
    description: "Altınsa çık. Dışarı çıkmak için en iyi saati bul. iOS ve Android için indir.",
    images: ["https://someplus.work/images/solaya/icon.png"],
  },
  other: {
    "apple-itunes-app": "app-id=6834972254",
    "google-play-app": "app-id=app.solaya",
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="solaya-page" lang="tr" style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "48px 24px" }}>
      <Script src="/solaya-redirect.js" strategy="beforeInteractive" />
      <section style={{ maxWidth: 540 }}>
        <img src="/images/solaya/icon.png" alt="" width="88" height="88" style={{ borderRadius: 22, marginBottom: 24 }} />
        <h1>Solaya’yı indir</h1>
        <p style={{ margin: "16px 0 28px", lineHeight: 1.7 }}>
          Dışarı çıkmak için en iyi anı bul. Telefonunda uygun mağazaya otomatik yönlendirilirsin.
          Yönlendirme başlamazsa mağazanı aşağıdan seç.
        </p>
        <SolayaStoreLinks locale="tr" />
        <p style={{ marginTop: 32 }}><Link href="/solaya/">Solaya’yı keşfet →</Link></p>
      </section>
    </main>
  );
}
