import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Destek",
  description: "someplus.work ürünleri için destek merkezi.",
};

export default function SupportPage() {
  return (
    <InfoPage
      locale="tr"
      eyebrow="Destek"
      title="Doğru kanaldan, daha hızlı çözüm."
      intro="Sorunun hangi üründe yaşandığını belirleyip aşağıdaki bilgilerle iletmen, problemi daha hızlı anlamamıza yardımcı olur."
      sections={[
        {
          title: "Ürünü belirt",
          body: "Ürün adını, kullandığın tarayıcı veya platformu ve mümkünse ürün sürümünü ekle.",
        },
        {
          title: "Sorunu tarif et",
          body: "Beklediğin davranışı, gerçekleşen sonucu ve sorunu tekrar oluşturmak için gereken adımları kısa ve net biçimde paylaş.",
        },
        {
          title: "Güvenli ekran görüntüsü",
          body: "Gerekliyse ekran görüntüsü ekleyebilirsin; kişisel bilgiler, mesajlar, erişim anahtarları veya özel adresler görünmemeli.",
        },
        {
          title: "Bize ulaş",
          body: "İlgili ürünün resmi Chrome, Firefox, WordPress, Adobe Commerce veya App Store sayfasındaki destek bağlantısını kullan. Böylece talep doğrudan doğru ürüne bağlanır.",
        },
      ]}
      backLabel="Ürünlere dön"
    />
  );
}
