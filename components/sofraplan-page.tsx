import Link from "next/link";
import { type Locale } from "@/lib/products";
import { ServiceIcon } from "./service-icon";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const copy = {
  tr: {
    home: "Ana sayfa",
    work: "Projelerimiz",
    workHref: "/#projeler",
    eyebrow: "Kendi ürünümüz",
    title: "SofraPlan — Catering ve Tabldot Yönetim Platformu",
    intro:
      "Toplu yemek ve tabldot üreticileri için reçete maliyetinden hakedişe tek zincir. Çift fireli hammadde hesabı, 4 kap tabldot menü planlama, aşçıbaşı üretim föyü, sahada kaybolan termobox ve küvet takibi, 72 saat şahit numune ve asgari garanti hesaplı hakediş mutabakatı.",
    tags: [
      "Firma yönetim paneli",
      "Müşteri portalı",
      "Aşçıbaşı mutfak föyü",
      "Termobox emanet takibi",
      "HACCP & Numune",
      "Hakediş mutabakatı",
    ],
    ctaPrimary: "Canlı demoyu inceleyin",
    demoHref: "https://sofra.someplus.work",
    ctaSecondary: "Tanıtım talep edin",
    quoteHref: "/#teklif",
    chainEyebrow: "Zincir",
    chainTitle: "Reçeteden hakedişe tek zincir.",
    chainDescription:
      "Her adım bir öncekinin verisi üzerine kurulur; reçetedeki bir gram fireden ay sonu hakediş mutabakatına kadar operasyon kopmadan ilerler.",
    chain: [
      [
        "Çift fireli reçete maliyeti",
        "Tabağa giren pişmiş et ile depodan çıkacak çiğ miktar arasındaki ayıklama ve pişme firelerini ayrı hesaplar; gramaj maliyetinde kuruş sapmasını önler.",
      ],
      [
        "4 kap tabldot menü planlama",
        "Çorba, ana yemek, yardımcı ve tamamlayıcı dengesini denetler; 28 günlük döngü şablonları ve tekrar uyarılarıyla dengeli aylık menüler üretir.",
      ],
      [
        "Günlük adet ve cut-off kilitleme",
        "Müşteriler günlük kişi sayılarını portal veya telefonla bildirir; belirlenen saatte siparişler kilitlenir, acil eklemeler sözleşme toleransına göre fiyatlandırılır.",
      ],
      [
        "Aşçıbaşı mutfak föyü ve hat ayrımı",
        "Bildirilen adetleri menüyle çarparak kazan reçetelerini ve depo hammadde ihtiyaçlarını hazırlar; taşıma yemek ile yerinde üretim hatlarını ayrı planlar.",
      ],
      [
        "Termobox ve küvet emanet takibi",
        "Müşteriye bırakılan dolu gastronorm küvet ve termobox'lar ile toplanan boşlar durak bazında caride bakiye olarak izlenir; kap kaybını sıfırlar.",
      ],
      [
        "Asgari garanti hesaplı hakediş",
        "Ay sonunda fiili teslimat ile sözleşmedeki asgari garanti karşılaştırılır; eksik adetler tamamlanarak tek tıkla mutabakat icmali ve fatura taslağı basılır.",
      ],
    ],
    featuresEyebrow: "Modüller",
    featuresTitle: "Catering işletmesinin ihtiyaç duyduğu her şey.",
    features: [
      [
        "FEFO lot yönetimi",
        "Hammadde düşümleri son kullanma tarihi en yakın lottan otomatik yapılır; aşçıbaşına fiili lotu seçme esnekliği sağlanır.",
      ],
      [
        "72 saat şahit numune & HACCP",
        "Günlük yemeklerden alınan şahit numuneler kaydedilir, 72 saat sonra güvenli imha alarmı verilir; Tarım İl Müdürlüğü denetim raporu tek tıkla dökülür.",
      ],
      [
        "Yerinde üretim & taşıma yemek ayrımı",
        "Yerinde üretim yapılan projelere yemek değil hammadde sevk edilir; taşıma müşterilerine ise porsiyonlanmış küvetler sevk edilir.",
      ],
      [
        "Müşteri değerlendirme portalı",
        "Müşteri yetkilileri günlük yemekleri 1-5 yıldızla değerlendirir ve yorum bırakır; memnuniyet kalitesi anlık izlenir.",
      ],
      [
        "Food Cost ve kârlılık analitiği",
        "Gerçekleşen malzeme maliyeti ile satış cirosu oranlanarak müşteri ve menü bazında brüt kârlılık kuruş hassasiyetinde raporlanır.",
      ],
      [
        "Kritik sıcaklık sapma alarmları",
        "Mal kabul, pişirme, sıcak tutma ve sevkiyat kritik kontrol noktalarında sıcaklık limit dışına çıktığında anında düzeltici aksiyon istenir.",
      ],
      [
        "Özel diyet ve alerjen yönetimi",
        "Glutensiz, diyabetik, vejetaryen gibi özel tabldot bildirimleri standart üretimden ayrılarak doğru etiketlerle paketlenir.",
      ],
      [
        "Tedarikçi ve mal kabul kontrolü",
        "Satın alma siparişleri irsaliye ve araç sıcaklığıyla teslim alınır; ağırlıklı ortalama maliyet otomatik güncellenir.",
      ],
      [
        "İşlem geçmişi ve denetim izi",
        "Hakediş, fiyat, reçete ve siparişlerde kimin ne zaman değişiklik yaptığı eksiksiz kayıt altına alınır.",
      ],
    ],
    closingTitle: "Catering işletmeniz için konuşalım.",
    closingBody:
      "Mevcut reçete, menü ve hakediş akışınızı dinleyelim; SofraPlan'ı kendi operasyonunuz üzerinden birlikte inceleyelim.",
  },
  en: {
    home: "Home",
    work: "Our work",
    workHref: "/en#work",
    eyebrow: "Our own product",
    title: "SofraPlan — Contract Catering & Food Service Platform",
    intro:
      "One unbroken chain from recipe costing to billing for contract caterers and mass food service. Dual-waste raw ingredient math, 4-course menu planning, kitchen production sheets, field container and thermal box tracking, 72-hour witness sample compliance, and guaranteed minimum monthly reconciliation.",
    tags: [
      "Operations panel",
      "Client portal",
      "Kitchen production sheets",
      "Thermal box tracking",
      "HACCP & Samples",
      "Billing",
    ],
    ctaPrimary: "Explore live demo",
    demoHref: "https://sofra.someplus.work",
    ctaSecondary: "Request a demo",
    quoteHref: "/en#quote",
    chainEyebrow: "The chain",
    chainTitle: "One chain from recipe to billing.",
    chainDescription:
      "Every step builds directly upon the previous record; from a single gram of yield loss to the end-of-month client reconciliation statement.",
    chain: [
      [
        "Dual-waste recipe costing",
        "Separates raw cleaning waste and cooking shrinkage; ensures accurate portion grammage without margin calculation errors.",
      ],
      [
        "4-course menu balance",
        "Enforces the balance between soup, main, side, and dessert; avoids repetition across 28-day rotational menu cycles.",
      ],
      [
        "Daily headcounts & cut-off locking",
        "Clients report headcounts via their portal; orders automatically lock at cut-off, and late additions apply contract urgency surcharges.",
      ],
      [
        "Kitchen sheets & facility split",
        "Calculates batch cauldron recipes and warehouse pull lists; cleanly distinguishes central dispatch food from on-site raw ingredients.",
      ],
      [
        "Thermal box & container tracking",
        "Durable gastronorm pans and thermal boxes left on site are tracked per delivery stop, ending equipment loss in the field.",
      ],
      [
        "Guaranteed minimum billing",
        "Reconciles delivered quantities against contractual minimum commitments, generating one-click invoices with zero disputes.",
      ],
    ],
    featuresEyebrow: "Modules",
    featuresTitle: "Everything a catering business needs.",
    features: [
      [
        "FEFO inventory lots",
        "Ingredients are deducted from lots nearest expiration, with flexible override authority for head chefs.",
      ],
      [
        "72-hour witness samples & HACCP",
        "Daily witness samples are logged with automated 72-hour safe disposal alerts and one-click official health inspection exports.",
      ],
      [
        "Central vs. on-site facility split",
        "On-site kitchens receive raw ingredients with transfer waybills, while delivered clients receive portioned temperature-controlled pans.",
      ],
      [
        "Client feedback portal",
        "Client personnel rate meals with 1–5 stars and leave actionable feedback, tracking satisfaction trends in real time.",
      ],
      [
        "Food cost & margin analytics",
        "Tracks real ingredient consumption against billed revenue to measure exact gross margin per client and menu item.",
      ],
      [
        "Critical temperature limits",
        "Logs receiving, cooking, holding, and transport temperatures with mandatory corrective actions on threshold breaches.",
      ],
      [
        "Special diets & allergen tags",
        "Gluten-free, diabetic, and vegetarian meal requests are partitioned and clearly labeled during morning prep.",
      ],
      [
        "Supplier receiving inspection",
        "Goods receipts capture supplier waybill numbers and vehicle delivery temperatures, recalculating weighted average costs.",
      ],
      [
        "Full audit trail",
        "Every change to pricing, contracts, recipe ingredients, and daily headcounts is permanently logged.",
      ],
    ],
    closingTitle: "Let’s talk about your catering operations.",
    closingBody:
      "Tell us how your catering workflow runs today and we will walk through SofraPlan using your own operation.",
  },
};

export function SofraPlanPage({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="service-hero">
          <div className="shell">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href={locale === "tr" ? "/" : "/en"}>{text.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href={text.workHref}>{text.work}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">SofraPlan</span>
            </nav>
            <span className="service-card-icon">
              <ServiceIcon name="catering" />
            </span>
            <span className="eyebrow">{text.eyebrow}</span>
            <h1>{text.title}</h1>
            <p>{text.intro}</p>
            <div className="work-tags">
              {text.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={text.demoHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.ctaPrimary}
                <span aria-hidden="true">↗</span>
              </a>
              <Link className="button button-secondary" href={text.quoteHref}>
                {text.ctaSecondary}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{text.chainEyebrow}</span>
                <h2>{text.chainTitle}</h2>
              </div>
              <p>{text.chainDescription}</p>
            </div>
            <ol className="process-grid">
              {text.chain.map(([title, description], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section services-section">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{text.featuresEyebrow}</span>
                <h2>{text.featuresTitle}</h2>
              </div>
            </div>
            <div className="feature-grid">
              {text.features.map(([title, body], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section closing-section">
          <div className="shell closing-card">
            <span className="closing-mark">+</span>
            <h2>{text.closingTitle}</h2>
            <p>{text.closingBody}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                className="button button-white"
                href={text.demoHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.ctaPrimary}
                <span aria-hidden="true">↗</span>
              </a>
              <Link className="button button-secondary" href={text.quoteHref}>
                {text.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
