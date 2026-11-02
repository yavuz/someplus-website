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
    title: "17020 Muayene Yönetim Platformu",
    intro:
      "ISO/IEC 17020 kapsamında periyodik kontrol yapan muayene kuruluşları için iş emrinden imzalı rapora tek zincir. Planlama, saha muayenesi, teknik onay, raporlama ve müşteriye teslim aynı platformda; web panelleri ve Android, iPhone, iPad için saha uygulamasıyla.",
    tags: ["Web paneli", "Android", "iPhone", "iPad", "Müşteri portalı"],
    cta: "Tanıtım talep edin",
    quoteHref: "/#teklif",
    chainEyebrow: "Zincir",
    chainTitle: "İş emrinden imzalı rapora tek zincir.",
    chainDescription:
      "Her adım bir öncekinin kaydı üzerine kurulur; rapor, sahadaki ölçümden müşteriye teslimine kadar kopmadan ilerler.",
    chain: [
      ["İş emri ve planlama", "Müşteri ve tesis kayıtlarından iş emri açılır, ekip planlanır. Çakışan görevler engellenir; ekip görevi kabul ya da reddeder."],
      ["Saha muayenesi", "Muayene web panelinden veya saha uygulamasından yapılır. Uygulama çevrimdışı çalışır, karekod okutur ve bağlantı gelince verileri güvenle eşitler."],
      ["Dört göz teknik onay", "Rapor ikinci bir yetkilinin onayından geçer; raporu hazırlayan kişi kendi raporunu onaylayamaz."],
      ["Sabitlenen PDF rapor", "PDF rapor onay anında oluşturulur ve sabitlenir; sonradan yapılan şablon değişiklikleri onu etkilemez."],
      ["E-imza ve teslim", "Rapor sağlayıcıdan bağımsız, sıralı bir imza akışından geçer ve müşteri portalında müşteriye teslim edilir."],
      ["Sonraki periyodik kontrol", "Bir sonraki kontrol tarihi hesaplanır ve yeni bir iş emrine dönüşür; zincir yeniden başlar."],
    ],
    featuresEyebrow: "Modüller",
    featuresTitle: "Muayene kuruluşunun ihtiyaç duyduğu her şey.",
    features: [
      ["Sürümlü kontrol formları", "Formül, nokta tabloları ve koşullu alanlar içeren dinamik formlar. Şablon değişse de eski raporlar olduğu gibi kalır."],
      ["Kalibrasyon takibi", "Ölçüm cihazlarının kalibrasyon geçerliliği izlenir; geçersiz kalibrasyonlu cihazla yapılan muayene onaya gönderilemez."],
      ["TÜRKAK Ek-1 ve Excel", "TÜRKAK Ek-1 listesi ve Excel raporları doğrudan platformdan alınır."],
      ["İSG-KATİP sözleşmeleri", "İSG-KATİP sözleşmeleri müşteri ve tesis bazında takip edilir."],
      ["Karekodla doğrulama", "Raporun gerçekliği karekodla herkese açık olarak doğrulanır; doğrulama ekranında müşteri adı gösterilmez."],
      ["Kalite yönetimi", "Doküman ve revizyon, uygunsuzluk ve DÖF, aksiyon, eğitim, YGG toplantıları ve bakım kayıtları."],
      ["Müşteri portalı", "Müşteriler raporlarına ve kendilerine açılan dokümanlara kendi portallarından ulaşır."],
      ["Kuruluşa ayrı veritabanı", "Her muayene kuruluşunun verisi kendi veritabanında tutulur."],
      ["Yetki ve işlem geçmişi", "Rol ve tesis bazlı yetkilendirme; kim, neyi, ne zaman yaptı kayıt altında."],
    ],
    closingTitle: "Kuruluşunuz için konuşalım.",
    closingBody:
      "Muayene süreçlerinizi dinleyelim, platformu kendi iş akışınız üzerinden birlikte inceleyelim.",
  },
  en: {
    home: "Home",
    work: "Our work",
    workHref: "/en#work",
    eyebrow: "Our own product",
    title: "17020 Inspection Management Platform",
    intro:
      "One chain from work order to signed report, for inspection bodies carrying out periodic inspections under ISO/IEC 17020. Planning, field inspection, technical approval, reporting, and delivery to the client on one platform, with web panels and a field app for Android, iPhone, and iPad.",
    tags: ["Web panel", "Android", "iPhone", "iPad", "Client portal"],
    cta: "Request a demo",
    quoteHref: "/en#quote",
    chainEyebrow: "The chain",
    chainTitle: "One chain from work order to signed report.",
    chainDescription:
      "Each step builds on the record of the one before, so a report moves from the field measurement to client delivery without a break.",
    chain: [
      ["Work orders and planning", "Work orders are opened from client and site records and assigned to a team. Conflicting assignments are blocked; the team accepts or declines each task."],
      ["Field inspection", "Inspections are carried out in the web panel or the field app. The app works offline, scans QR codes, and syncs data securely once a connection is back."],
      ["Four-eyes technical approval", "Every report is approved by a second authorised person; whoever prepared a report cannot approve it."],
      ["Locked PDF report", "The PDF report is generated and locked at the moment of approval; later template changes do not affect it."],
      ["E-signature and delivery", "The report goes through a provider-independent, sequential signing flow and is delivered to the client through the client portal."],
      ["Next periodic inspection", "The next inspection date is calculated and turned into a new work order, and the chain starts again."],
    ],
    featuresEyebrow: "Modules",
    featuresTitle: "Everything an inspection body needs.",
    features: [
      ["Versioned inspection forms", "Dynamic forms with formulas, measurement point tables, and conditional fields. Past reports stay exactly as issued when a template changes."],
      ["Calibration tracking", "Calibration validity of measuring instruments is tracked; an inspection done with an instrument out of calibration cannot be sent for approval."],
      ["TÜRKAK Annex 1 and Excel", "The TÜRKAK (Turkish Accreditation Agency) Annex 1 list and Excel reports come straight from the platform."],
      ["İSG-KATİP contracts", "Contracts registered in İSG-KATİP, Türkiye’s occupational health and safety system, are tracked per client and site."],
      ["QR code verification", "Anyone can verify a report’s authenticity with its QR code; the verification page does not show the client’s name."],
      ["Quality management", "Documents and revisions, nonconformities and CAPA, actions, training, management review meetings, and maintenance records."],
      ["Client portal", "Clients reach their reports and the documents shared with them through their own portal."],
      ["Separate database per organisation", "Each inspection body’s data is kept in its own database."],
      ["Permissions and audit trail", "Role- and site-based permissions, with a record of who did what and when."],
    ],
    closingTitle: "Let’s talk about your organisation.",
    closingBody:
      "Tell us how your inspections run today and we will walk through the platform using your own workflow.",
  },
};

export function InspectionPlatformPage({ locale }: { locale: Locale }) {
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
              <span aria-current="page">17020</span>
            </nav>
            <span className="service-card-icon">
              <ServiceIcon name="inspection" />
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
              <Link className="button button-primary" href={text.quoteHref}>
                {text.cta}
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
            <div>
              <Link className="button button-primary" href={text.quoteHref}>
                {text.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
