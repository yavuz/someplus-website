import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { company } from "@/lib/company";

// Google Play'in haber uygulamaları politikası, uygulamanın iletişim
// bilgilerini gösteren bir web sayfası istiyor; Play'deki web sitesi bu sayfa.
export const metadata: Metadata = {
  title: "Gündem",
  description: "Gündem haber uygulaması: iletişim bilgileri, gizlilik politikası ve yayıncı bilgisi.",
};

export default function GundemPage() {
  return (
    <InfoPage
      locale="tr"
      eyebrow="Gündem"
      title="Gündem haber uygulaması"
      intro="Gündem, Türkiye'deki haber sitelerinin herkese açık RSS akışlarını tek listede toplayan, iOS ve Android için bir haber uygulamasıdır. someplus.work tarafından geliştirilir ve yayınlanır."
      sections={[
        {
          title: "İletişim",
          body: (
            <>
              Uygulamayla ilgili soru, öneri ve şikâyetleriniz için{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> adresine yazabilirsiniz.
              Aynı bilgiler uygulamada Ayarlar → İletişim bölümünde de yer alır.
            </>
          ),
        },
        {
          title: "Haberler ve yayıncılar",
          body: (
            <>
              Haberler, başlıklar ve görseller ilgili yayın kuruluşlarına aittir. Uygulama her haberin
              hangi kaynaktan geldiğini gösterir ve haberin tamamı için yayıncının sitesine
              yönlendirir. Kaynağınızın listeden çıkarılmasını istiyorsanız{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> adresine yazın.
            </>
          ),
        },
        {
          title: "Gizlilik",
          body: (
            <>
              Uygulamanın hangi verileri nasıl işlediğini{" "}
              <a href="/privacy/gundem/">Gündem Gizlilik Politikası</a>'nda bulabilirsiniz.
            </>
          ),
        },
        {
          title: "Uygulamayı indirin",
          body: (
            <>
              <a href="https://apps.apple.com/app/id690291826">App Store</a> ·{" "}
              <a href="https://play.google.com/store/apps/details?id=co.yapps.gundem">Google Play</a>
            </>
          ),
        },
      ]}
      backLabel="Ana sayfaya dön"
    />
  );
}
