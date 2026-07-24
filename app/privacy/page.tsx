import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Gizlilik",
  description: "someplus.work ürünlerinin gizlilik yaklaşımı.",
};

export default function PrivacyPage() {
  return (
    <InfoPage
      locale="tr"
      eyebrow="Gizlilik"
      title="Güven, ürünün bir parçasıdır."
      intro="Ürünlerimizi gereksiz veri toplamadan, anlaşılır izinlerle ve mümkün olan en küçük erişim alanıyla tasarlamayı hedefliyoruz."
      sections={[
        {
          title: "En az veri yaklaşımı",
          body: "Bir özellik için gerekli olmayan veriyi istememeyi ve işlemleri mümkün olduğunda cihaz üzerinde tutmayı tercih ederiz.",
        },
        {
          title: "Ürüne özel koşullar",
          body: "Her ürünün kullandığı izinler ve veri akışı farklı olabilir. Kesin ve güncel bilgiler için ilgili mağaza sayfasındaki gizlilik açıklaması geçerlidir.",
        },
        {
          title: "Üçüncü taraf hizmetleri",
          body: "Bir ürün harici bir hizmetle çalışıyorsa, o hizmetin kendi gizlilik koşulları da geçerli olabilir. Entegrasyonları açıkça belirtmeye özen gösteririz.",
        },
        {
          title: "Değişiklikler",
          body: "Ürün davranışında veya veri kullanımında önemli bir değişiklik olduğunda ilgili ürün açıklamasını ve gizlilik bilgisini güncelleriz.",
        },
      ]}
      backLabel="Ana sayfaya dön"
    />
  );
}
