import Link from "next/link";
import { company, phoneHref, whatsappHref } from "@/lib/company";
import { type Locale } from "@/lib/products";
import { serviceHref, services } from "@/lib/services";
import { QuoteForm } from "./quote-form";
import { ServiceIcon } from "./service-icon";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const copy = {
  tr: {
    ids: { services: "hizmetler", process: "surec", work: "referanslar", faq: "sss", quote: "teklif" },
    eyebrow: "Kurumsal yazılım ve dijital çözümler",
    titleLead: "İşletmenizi dijitalde",
    titleAccent: "bir adım öne taşıyoruz.",
    description:
      "Kurumsal yazılımdan e-ticarete, mobil uygulamadan yapay zekâ entegrasyonuna kadar fikirden yayına uçtan uca çözümler geliştiriyoruz.",
    primaryCta: "Ücretsiz teklif alın",
    secondaryCta: "Hizmetlerimiz",
    panelTitle: "Hizmet alanlarımız",
    panelBadge: "Uçtan uca",
    noteLabel: "Analiz · Tasarım · Geliştirme · Yayın · Destek",
    noteTitle: "Tek ekip, tek muhatap.",
    noteBody: "Projenizin her aşamasını aynı ekip yönetir.",
    stats: [
      ["6", "Hizmet alanı"],
      ["3", "Platform: Web, iOS, Android"],
      ["1", "Ekip, tek muhatap"],
    ],
    servicesEyebrow: "Hizmetler",
    servicesTitle: "İhtiyacınız olan dijital çözüm, tek çatı altında.",
    servicesDescription:
      "İşletmenizin büyüklüğü ne olursa olsun, hedeflerinize uygun teknolojiyi seçiyor ve sonuç odaklı geliştiriyoruz.",
    serviceCta: "Detaylı bilgi",
    proofEyebrow: "Neden biz",
    proofTitle: "Yalnızca proje teslim etmiyoruz, ürün geliştiriyoruz.",
    proofDescription:
      "Kendi ürünlerimizi tasarlayıp geliştiriyor, yayında tutuyor ve gerçek kullanıcı geri bildirimleriyle iyileştiriyoruz. Bir ürünü yaşatmanın ne demek olduğunu bildiğimiz için projenizi teslimle bitmiş saymıyor, aynı mühendislik disiplinini sizin işinize taşıyoruz.",
    proofCta: "Referansımızı inceleyin",
    proofTags: ["Web", "iOS", "Android", "Yönetim paneli"],
    whyEyebrow: "Çalışma prensiplerimiz",
    whyTitle: "Güvenilir bir teknoloji ortağı.",
    why: [
      ["Şeffaf süreç", "Net kapsam, net takvim ve düzenli ilerleme raporlarıyla projenin her aşamasından haberdar olursunuz."],
      ["Ölçeklenebilir altyapı", "Bugünün ihtiyacını karşılarken yarının büyümesini taşıyabilecek, bakımı kolay sistemler kurarız."],
      ["Uzun vadeli destek", "Yayın sonrası bakım, güvenlik güncellemeleri ve geliştirmelerle yanınızda olmaya devam ederiz."],
    ],
    sectorsEyebrow: "Sektörler",
    sectorsTitle: "Farklı sektörlerin dijital ihtiyaçlarına çözüm.",
    sectors: ["Perakende ve e-ticaret", "Üretim ve sanayi", "Sağlık", "Eğitim", "Lojistik", "Turizm ve otelcilik", "Gayrimenkul", "Profesyonel hizmetler", "Kamu ve STK", "Girişimler"],
    processEyebrow: "Süreç",
    processTitle: "Fikirden yayına, planlı ve öngörülebilir.",
    processDescription:
      "Her projeyi aynı disiplinle yönetiyoruz; böylece sürprizlerle değil, planla ilerliyoruz.",
    process: [
      ["Analiz", "İhtiyaçlarınızı, hedeflerinizi ve mevcut sistemlerinizi birlikte inceliyoruz."],
      ["Teklif ve planlama", "Kapsamı, takvimi ve bütçeyi netleştiren detaylı bir teklif hazırlıyoruz."],
      ["Tasarım", "Kullanıcı deneyimini ve arayüzü, onayınıza sunarak tasarlıyoruz."],
      ["Geliştirme", "Düzenli aralıklarla çalışan sürümler paylaşarak geliştiriyoruz."],
      ["Test ve yayın", "Kapsamlı testlerin ardından projeyi güvenle yayına alıyoruz."],
      ["Destek", "Yayın sonrasında bakım, izleme ve geliştirmelerle devam ediyoruz."],
    ],
    workEyebrow: "Referanslar",
    workTitle: "Öne çıkan projemiz.",
    workDescription:
      "Fikir aşamasından yayına kadar uçtan uca geliştirdiğimiz, bugün yayında olan ve servis işletmelerine hizmet veren bir platform.",
    workLabel: "Servis ve tamir işletmeleri için işletme yönetimi",
    workBody:
      "Tezgah; iş kabulünü, müşteri bilgilendirmesini, stok ve kasa yönetimini tek platformda toplar. Ustalar işleri telefondan günceller, müşteriler işlerinin durumunu takip linkinden izler.",
    workScopeTitle: "Neler geliştirdik",
    workScope: [
      "iOS ve Android mobil uygulamaları",
      "İşletme sahipleri için web yönetim paneli",
      "WhatsApp ve SMS ile otomatik müşteri bilgilendirme",
      "İş emri, randevu, stok, kasa ve cari modülleri",
    ],
    workCta: "tzgah.com’u ziyaret edin",
    workMock: {
      business: "Adem Moto Servis",
      status: "Motorunuz parça bekliyor",
      steps: [["Teslim alındı", "09:12"], ["Arıza tespit edildi", "10:40"], ["Parça bekleniyor", ""], ["Teslime hazır", ""]],
      noteLabel: "Ustanın notu",
      note: "Balata yarın sabah geliyor, 14:00 gibi teslime hazır.",
    },
    faqEyebrow: "SSS",
    faqTitle: "Sıkça sorulan sorular.",
    faq: [
      ["Bir proje ne kadar sürer?", "Süre, kapsama göre değişir. Kurumsal bir web sitesi genellikle birkaç hafta, özel yazılım ve mobil uygulama projeleri ise birkaç ay sürer. Analiz aşamasının ardından size net bir takvim sunarız."],
      ["Fiyatlandırma nasıl yapılıyor?", "Ön görüşme ücretsizdir. İhtiyaçlarınızı dinledikten sonra kapsamı netleştirir, projeye göre sabit fiyatlı veya aylık çalışma modeline dayalı bir teklif hazırlarız."],
      ["Başka bir ekibin geliştirdiği projeyi devralabilir misiniz?", "Evet. Önce mevcut kodu ve altyapıyı inceler, riskleri ve iyileştirme önerilerini raporlarız; ardından bakım ve geliştirmeyi devralırız."],
      ["Yayın sonrasında destek veriyor musunuz?", "Evet. Düzenli bakım, güvenlik güncellemeleri, performans izleme ve yeni geliştirmeleri kapsayan destek paketleri sunuyoruz."],
      ["Mevcut sistemlerimizle entegrasyon mümkün mü?", "Evet. ERP, CRM, muhasebe, ödeme, kargo ve pazaryeri gibi sistemlerle API veya uygun yöntemlerle entegrasyon sağlıyoruz."],
    ],
    quoteEyebrow: "Teklif alın",
    quoteTitle: "Projenizi konuşalım.",
    quoteDescription:
      "Formu doldurun, ihtiyacınızı inceleyip size en kısa sürede dönüş yapalım. Ön görüşme ve teklif tamamen ücretsizdir.",
    contactEmail: "E-posta",
    contactPhone: "Telefon",
  },
  en: {
    ids: { services: "services", process: "process", work: "work", faq: "faq", quote: "quote" },
    eyebrow: "Enterprise software and digital solutions",
    titleLead: "We move your business",
    titleAccent: "a step ahead in digital.",
    description:
      "From enterprise software to e-commerce, mobile apps to AI integration, we build end-to-end solutions from idea to launch.",
    primaryCta: "Get a free quote",
    secondaryCta: "Our services",
    panelTitle: "What we do",
    panelBadge: "End to end",
    noteLabel: "Analysis · Design · Development · Launch · Support",
    noteTitle: "One team, one point of contact.",
    noteBody: "The same team manages every stage of your project.",
    stats: [
      ["6", "Service areas"],
      ["3", "Platforms: web, iOS, Android"],
      ["1", "Team, one point of contact"],
    ],
    servicesEyebrow: "Services",
    servicesTitle: "The digital solution you need, under one roof.",
    servicesDescription:
      "Whatever the size of your business, we choose the right technology for your goals and build with results in mind.",
    serviceCta: "Learn more",
    proofEyebrow: "Why us",
    proofTitle: "We don’t just deliver projects. We build products.",
    proofDescription:
      "We design, build, and run products of our own, improving them with feedback from real users. Because we know what it takes to keep a product alive, we don’t treat your project as finished at handover; we bring the same engineering discipline to your work.",
    proofCta: "See our work",
    proofTags: ["Web", "iOS", "Android", "Admin panels"],
    whyEyebrow: "How we work",
    whyTitle: "A technology partner you can rely on.",
    why: [
      ["Transparent process", "Clear scope, a clear timeline, and regular progress reports keep you informed at every stage."],
      ["Scalable foundations", "We build maintainable systems that meet today’s needs and can carry tomorrow’s growth."],
      ["Long-term support", "After launch, we stay with you through maintenance, security updates, and new development."],
    ],
    sectorsEyebrow: "Industries",
    sectorsTitle: "Solutions for the digital needs of many industries.",
    sectors: ["Retail and e-commerce", "Manufacturing", "Healthcare", "Education", "Logistics", "Tourism and hospitality", "Real estate", "Professional services", "Public sector and NGOs", "Startups"],
    processEyebrow: "Process",
    processTitle: "From idea to launch, planned and predictable.",
    processDescription:
      "We run every project with the same discipline, so we move forward with a plan rather than surprises.",
    process: [
      ["Analysis", "We review your needs, goals, and existing systems together."],
      ["Proposal and planning", "We prepare a detailed proposal that clarifies scope, timeline, and budget."],
      ["Design", "We design the user experience and interface with your approval at each step."],
      ["Development", "We build iteratively, sharing working versions at regular intervals."],
      ["Testing and launch", "After thorough testing, we take the project live with confidence."],
      ["Support", "After launch, we continue with maintenance, monitoring, and improvements."],
    ],
    workEyebrow: "Our work",
    workTitle: "Featured project.",
    workDescription:
      "A platform we built end to end, from idea to launch, that is live today and serving service businesses.",
    workLabel: "Business management for service and repair shops",
    workBody:
      "Tezgah brings job intake, customer updates, inventory, and cash management onto one platform. Technicians update jobs from their phones, and customers follow progress through a tracking link.",
    workScopeTitle: "What we built",
    workScope: [
      "iOS and Android mobile apps",
      "Web admin panel for business owners",
      "Automatic customer updates via WhatsApp and SMS",
      "Work order, appointment, inventory, cash, and accounts modules",
    ],
    workCta: "Visit tzgah.com",
    workMock: {
      business: "Adem Moto Servis",
      status: "Your motorcycle is waiting for parts",
      steps: [["Received", "09:12"], ["Diagnosed", "10:40"], ["Waiting for parts", ""], ["Ready for pickup", ""]],
      noteLabel: "Technician’s note",
      note: "Brake pads arrive tomorrow morning, ready around 14:00.",
    },
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions.",
    faq: [
      ["How long does a project take?", "It depends on scope. A corporate website usually takes a few weeks, while custom software and mobile apps take a few months. After the analysis phase we give you a clear timeline."],
      ["How is pricing determined?", "The initial consultation is free. After hearing your needs we clarify the scope and prepare a fixed-price or monthly engagement proposal."],
      ["Can you take over a project built by another team?", "Yes. We first review the existing code and infrastructure, report risks and improvement suggestions, and then take over maintenance and development."],
      ["Do you provide support after launch?", "Yes. We offer support packages covering regular maintenance, security updates, performance monitoring, and new development."],
      ["Can you integrate with our existing systems?", "Yes. We integrate with ERP, CRM, accounting, payment, shipping, and marketplace systems through APIs or other suitable methods."],
    ],
    quoteEyebrow: "Get a quote",
    quoteTitle: "Let’s talk about your project.",
    quoteDescription:
      "Fill in the form and we will review your needs and get back to you shortly. The consultation and quote are completely free.",
    contactEmail: "Email",
    contactPhone: "Phone",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const { ids } = text;

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{text.eyebrow}</span>
              <h1>
                {text.titleLead} <em>{text.titleAccent}</em>
              </h1>
              <p>{text.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={`#${ids.quote}`}>
                  {text.primaryCta}
                  <span aria-hidden="true">→</span>
                </a>
                <a className="button button-secondary" href={`#${ids.services}`}>
                  {text.secondaryCta}
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="hero-panel">
                <div className="hero-panel-head">
                  <strong>{text.panelTitle}</strong>
                  <span>{text.panelBadge}</span>
                </div>
                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <ServiceIcon name={service.icon} />
                      {service.title[locale]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="visual-note">
                <span>{text.noteLabel}</span>
                <strong>{text.noteTitle}</strong>
                <p>{text.noteBody}</p>
              </div>
            </div>
          </div>

          <div className="shell stat-strip">
            {text.stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section services-section" id={ids.services}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{text.servicesEyebrow}</span>
                <h2>{text.servicesTitle}</h2>
              </div>
              <p>{text.servicesDescription}</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <Link className="service-card" href={serviceHref(service, locale)} key={service.id}>
                  <span className="service-card-icon">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3>{service.title[locale]}</h3>
                  <p>{service.summary[locale]}</p>
                  <span className="service-card-link">
                    {text.serviceCta} <b aria-hidden="true">→</b>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section feature-section">
          <div className="shell feature-card">
            <div className="feature-visual">
              <img src="/logo.svg" alt="" width="112" height="112" className="feature-logo" />
              {text.proofTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="feature-copy">
              <span className="eyebrow eyebrow-light">{text.proofEyebrow}</span>
              <h2>{text.proofTitle}</h2>
              <p>{text.proofDescription}</p>
              <a className="button button-white" href={`#${ids.work}`}>
                {text.proofCta}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section principles-section">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{text.whyEyebrow}</span>
                <h2>{text.whyTitle}</h2>
              </div>
            </div>
            <div className="principle-grid">
              {text.why.map(([title, description], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectors-section">
          <div className="shell sectors-inner">
            <div>
              <span className="eyebrow">{text.sectorsEyebrow}</span>
              <h2>{text.sectorsTitle}</h2>
            </div>
            <ul className="sector-list">
              {text.sectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section process-section" id={ids.process}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{text.processEyebrow}</span>
                <h2>{text.processTitle}</h2>
              </div>
              <p>{text.processDescription}</p>
            </div>
            <ol className="process-grid">
              {text.process.map(([title, description], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section work-section" id={ids.work}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{text.workEyebrow}</span>
                <h2>{text.workTitle}</h2>
              </div>
              <p>{text.workDescription}</p>
            </div>
            <article className="work-card">
              <div className="work-copy">
                <span className="work-label">{text.workLabel}</span>
                <h3>Tezgah</h3>
                <p>{text.workBody}</p>
                <h4>{text.workScopeTitle}</h4>
                <ul>
                  {text.workScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="work-tags">
                  <span>iOS</span>
                  <span>Android</span>
                  <span>Web</span>
                </div>
                <a className="button button-primary" href="https://tzgah.com" target="_blank" rel="noopener noreferrer">
                  {text.workCta}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="work-visual" aria-hidden="true">
                <div className="work-phone">
                  <span className="work-url">tzgah.com/t/8KX2</span>
                  <strong>{text.workMock.business}</strong>
                  <p>{text.workMock.status}</p>
                  <small>Honda PCX · 34 ABC 123</small>
                  <ol>
                    {text.workMock.steps.map(([step, time], index) => (
                      <li className={index < 2 ? "done" : index === 2 ? "current" : ""} key={step}>
                        <span>{step}</span>
                        {time && <time>{time}</time>}
                      </li>
                    ))}
                  </ol>
                  <div className="work-note">
                    <span>{text.workMock.noteLabel}</span>
                    {text.workMock.note}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section faq-section" id={ids.faq}>
          <div className="shell faq-inner">
            <div>
              <span className="eyebrow">{text.faqEyebrow}</span>
              <h2>{text.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {text.faq.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-section" id={ids.quote}>
          <div className="shell quote-card">
            <div className="quote-copy">
              <span className="eyebrow">{text.quoteEyebrow}</span>
              <h2>{text.quoteTitle}</h2>
              <p>{text.quoteDescription}</p>
              <dl className="contact-list">
                <div>
                  <dt>{text.contactEmail}</dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
                {company.phone && (
                  <div>
                    <dt>{text.contactPhone}</dt>
                    <dd>
                      <a href={phoneHref(company.phone)}>{company.phone}</a>
                    </dd>
                  </div>
                )}
                {company.whatsapp && (
                  <div>
                    <dt>WhatsApp</dt>
                    <dd>
                      <a href={whatsappHref(company.whatsapp)} target="_blank" rel="noopener noreferrer">
                        {company.whatsapp}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <QuoteForm locale={locale} />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
