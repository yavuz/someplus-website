import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: {
    canonical: "/kvkk",
    languages: { tr: "/kvkk", en: "/en/data-protection" },
  },
};

// TODO: Hukuki inceleme sonrası şirket bilgileriyle kesinleştirilmeli.
export default function KvkkPage() {
  const controller = company.legalName || company.brand;

  return (
    <InfoPage
      locale="tr"
      eyebrow="KVKK"
      title="Kişisel Verilerin Korunması Aydınlatma Metni"
      intro={`6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla ${controller} olarak, web sitemiz üzerinden paylaştığınız kişisel verilerin işlenmesine ilişkin sizi bilgilendirmek isteriz.`}
      sections={[
        {
          title: "İşlenen kişisel veriler",
          body: "Teklif ve iletişim formu aracılığıyla paylaştığınız ad soyad, şirket adı, e-posta adresi, telefon numarası ve mesaj içeriğiniz işlenmektedir.",
        },
        {
          title: "İşleme amaçları",
          body: "Kişisel verileriniz; talebinizin değerlendirilmesi, size teklif hazırlanması, sizinle iletişime geçilmesi ve olası sözleşme süreçlerinin yürütülmesi amaçlarıyla işlenir.",
        },
        {
          title: "Hukuki sebep ve toplama yöntemi",
          body: "Verileriniz, web sitesindeki form aracılığıyla elektronik ortamda toplanır ve KVKK’nın 5. maddesinde yer alan “bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması” ve “veri sorumlusunun meşru menfaati” hukuki sebeplerine dayanılarak işlenir.",
        },
        {
          title: "Aktarım",
          body: "Kişisel verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olarak ve e-posta iletimi gibi hizmetler için çalıştığımız hizmet sağlayıcılarla, gerekli güvenlik önlemleri alınarak paylaşılabilir. Bu hizmet sağlayıcıların sunucuları yurt dışında bulunabilir.",
        },
        {
          title: "Saklama süresi",
          body: "Verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen süreler kadar saklanır; sürenin sonunda silinir, yok edilir veya anonim hâle getirilir.",
        },
        {
          title: "Haklarınız",
          body: `KVKK’nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi ${company.email} adresine iletebilirsiniz.`,
        },
      ]}
      backLabel="Ana sayfaya dön"
    />
  );
}
