import { type Locale } from "./products";

export type ServiceIcon =
  | "enterprise"
  | "web"
  | "commerce"
  | "mobile"
  | "ai"
  | "support";

export type Service = {
  id: string;
  icon: ServiceIcon;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  intro: Record<Locale, string>;
  features: Record<Locale, [string, string][]>;
  deliverables: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    id: "enterprise",
    icon: "enterprise",
    slug: { tr: "kurumsal-yazilim", en: "enterprise-software" },
    title: {
      tr: "Kurumsal Yazılım Geliştirme",
      en: "Enterprise Software Development",
    },
    summary: {
      tr: "İş süreçlerinize özel yönetim panelleri, B2B portallar ve ERP/CRM entegrasyonları.",
      en: "Custom admin panels, B2B portals, and ERP/CRM integrations built around your processes.",
    },
    intro: {
      tr: "Hazır paketlerin karşılamadığı ihtiyaçlar için işletmenize özel yazılımlar geliştiriyoruz. Mevcut sistemlerinizle konuşan, ölçeklenebilir ve bakımı kolay çözümler sunuyoruz.",
      en: "We build software tailored to your business for needs that off-the-shelf packages cannot meet. Our solutions talk to your existing systems, scale with you, and stay easy to maintain.",
    },
    features: {
      tr: [
        ["Özel yazılım", "Süreçlerinize birebir uyan, sıfırdan tasarlanmış web tabanlı uygulamalar."],
        ["Yönetim panelleri", "Operasyon, stok, sipariş ve raporlama için rol bazlı yetkilendirmeli paneller."],
        ["B2B portallar", "Bayi, tedarikçi ve kurumsal müşterileriniz için sipariş ve takip portalları."],
        ["Sistem entegrasyonları", "ERP, CRM, muhasebe, ödeme ve kargo sistemleri arasında veri akışı."],
        ["API geliştirme", "Mobil uygulama ve üçüncü taraf servisler için güvenli, belgelenmiş API’ler."],
        ["Raporlama", "Dağınık veriyi tek ekranda toplayan, karar almayı hızlandıran gösterge panelleri."],
      ],
      en: [
        ["Custom software", "Web-based applications designed from scratch to match your processes."],
        ["Admin panels", "Role-based panels for operations, inventory, orders, and reporting."],
        ["B2B portals", "Ordering and tracking portals for dealers, suppliers, and corporate clients."],
        ["System integrations", "Data flow between ERP, CRM, accounting, payment, and shipping systems."],
        ["API development", "Secure, documented APIs for mobile apps and third-party services."],
        ["Reporting", "Dashboards that bring scattered data onto one screen and speed up decisions."],
      ],
    },
    deliverables: {
      tr: ["İhtiyaç analizi ve teknik doküman", "Arayüz tasarımı", "Kaynak kod ve kurulum", "Kullanıcı eğitimi", "Yayın sonrası destek"],
      en: ["Requirements analysis and technical documentation", "Interface design", "Source code and deployment", "User training", "Post-launch support"],
    },
  },
  {
    id: "web",
    icon: "web",
    slug: { tr: "kurumsal-web-sitesi", en: "corporate-websites" },
    title: {
      tr: "Kurumsal Web Sitesi",
      en: "Corporate Websites",
    },
    summary: {
      tr: "Markanızı doğru yansıtan, hızlı, mobil uyumlu ve arama motorlarına hazır web siteleri.",
      en: "Fast, mobile-friendly, search-ready websites that represent your brand properly.",
    },
    intro: {
      tr: "Kurumsal web siteniz, potansiyel müşterilerinizin sizinle ilk temas noktasıdır. Güven veren tasarım, hızlı altyapı ve kolay yönetilebilir içerikle bu ilk izlenimi güçlendiriyoruz.",
      en: "Your corporate website is often the first point of contact with potential clients. We strengthen that first impression with trustworthy design, fast infrastructure, and easy-to-manage content.",
    },
    features: {
      tr: [
        ["Özgün tasarım", "Hazır tema yerine markanıza özel, kurumsal kimliğinizle uyumlu arayüz."],
        ["Mobil uyumluluk", "Telefon, tablet ve masaüstünde kusursuz görünen esnek tasarım."],
        ["İçerik yönetimi", "WordPress veya özel panel ile içeriği teknik bilgi gerektirmeden güncelleme."],
        ["SEO altyapısı", "Arama motorlarında görünürlük için teknik SEO, hız ve yapılandırılmış veri."],
        ["Çok dilli yapı", "Yurt dışı müşterileriniz için birden fazla dilde içerik desteği."],
        ["Hız ve güvenlik", "Modern altyapı, SSL, yedekleme ve yüksek performans skorları."],
      ],
      en: [
        ["Original design", "An interface built for your brand and corporate identity instead of a stock theme."],
        ["Mobile-friendly", "Responsive design that looks right on phones, tablets, and desktops."],
        ["Content management", "Update content without technical knowledge via WordPress or a custom panel."],
        ["SEO foundations", "Technical SEO, speed, and structured data for search visibility."],
        ["Multilingual", "Content in multiple languages for your international clients."],
        ["Speed and security", "Modern infrastructure, SSL, backups, and high performance scores."],
      ],
    },
    deliverables: {
      tr: ["Site haritası ve içerik planı", "Tasarım ve geliştirme", "İçerik yönetim paneli", "Alan adı ve sunucu kurulumu", "Yönetim eğitimi"],
      en: ["Sitemap and content plan", "Design and development", "Content management panel", "Domain and hosting setup", "Admin training"],
    },
  },
  {
    id: "commerce",
    icon: "commerce",
    slug: { tr: "e-ticaret", en: "e-commerce" },
    title: {
      tr: "E-Ticaret Çözümleri",
      en: "E-Commerce Solutions",
    },
    summary: {
      tr: "Adobe Commerce (Magento) ve WooCommerce ile mağaza kurulumu, modül geliştirme ve entegrasyonlar.",
      en: "Store setup, module development, and integrations with Adobe Commerce (Magento) and WooCommerce.",
    },
    intro: {
      tr: "Adobe Commerce Marketplace’te yayınlanan kendi modüllerimizin deneyimiyle, satış yapan ve büyüyen e-ticaret altyapıları kuruyoruz. Sıfırdan mağaza kurulumundan mevcut sitenize özel modüle kadar her aşamada yanınızdayız.",
      en: "Drawing on our own modules published on the Adobe Commerce Marketplace, we build e-commerce platforms that sell and grow. From a brand-new store to a custom module for your existing site, we support every stage.",
    },
    features: {
      tr: [
        ["Mağaza kurulumu", "Adobe Commerce (Magento) veya WooCommerce ile uçtan uca e-ticaret sitesi."],
        ["Özel modül geliştirme", "Mağazanıza özgü iş kuralları için eklenti ve modül geliştirme."],
        ["Pazaryeri entegrasyonu", "Trendyol, Hepsiburada, Amazon gibi pazaryerleriyle ürün ve sipariş senkronizasyonu."],
        ["Ödeme ve kargo", "Sanal POS, ödeme kuruluşları ve kargo firmaları entegrasyonu."],
        ["ERP ve stok entegrasyonu", "Muhasebe ve stok sistemlerinizle otomatik veri akışı."],
        ["Performans ve sürüm geçişi", "Hız optimizasyonu, Magento sürüm yükseltme ve platform taşıma."],
      ],
      en: [
        ["Store setup", "End-to-end e-commerce sites with Adobe Commerce (Magento) or WooCommerce."],
        ["Custom modules", "Extensions and modules for business rules specific to your store."],
        ["Marketplace integration", "Product and order sync with marketplaces such as Trendyol, Hepsiburada, and Amazon."],
        ["Payment and shipping", "Virtual POS, payment provider, and shipping carrier integrations."],
        ["ERP and inventory", "Automated data flow with your accounting and inventory systems."],
        ["Performance and upgrades", "Speed optimization, Magento version upgrades, and platform migration."],
      ],
    },
    deliverables: {
      tr: ["Mağaza tasarımı ve kurulumu", "Ödeme ve kargo entegrasyonları", "Ürün aktarımı", "Yönetim eğitimi", "Bakım ve destek"],
      en: ["Store design and setup", "Payment and shipping integrations", "Product import", "Admin training", "Maintenance and support"],
    },
  },
  {
    id: "mobile",
    icon: "mobile",
    slug: { tr: "mobil-uygulama", en: "mobile-apps" },
    title: {
      tr: "Mobil Uygulama Geliştirme",
      en: "Mobile App Development",
    },
    summary: {
      tr: "iOS ve Android için kullanıcı dostu, performanslı ve mağazaya hazır mobil uygulamalar.",
      en: "User-friendly, high-performance, store-ready mobile apps for iOS and Android.",
    },
    intro: {
      tr: "Fikrinizi iOS ve Android kullanıcılarına ulaşan bir uygulamaya dönüştürüyoruz. Tasarımdan mağaza yayınına, yayın sonrası güncellemelere kadar süreci uçtan uca yönetiyoruz.",
      en: "We turn your idea into an app that reaches iOS and Android users. We manage the whole journey, from design and store release to post-launch updates.",
    },
    features: {
      tr: [
        ["iOS ve Android", "Her iki platformda da tutarlı deneyim sunan uygulamalar."],
        ["Kullanıcı deneyimi", "Kolay öğrenilen, akıcı ve markanıza uygun arayüz tasarımı."],
        ["Arka uç ve API", "Uygulamanızı besleyen yönetim paneli, veritabanı ve API altyapısı."],
        ["Bildirim ve analitik", "Anlık bildirimler, kullanıcı davranışı analizi ve raporlama."],
        ["Uygulama içi ödeme", "Abonelik, uygulama içi satın alma ve ödeme entegrasyonları."],
        ["Mağaza yayını", "App Store ve Google Play yayın süreçlerinin yönetimi."],
      ],
      en: [
        ["iOS and Android", "Apps that deliver a consistent experience on both platforms."],
        ["User experience", "Fluid, easy-to-learn interfaces that match your brand."],
        ["Backend and API", "The admin panel, database, and API infrastructure that power your app."],
        ["Notifications and analytics", "Push notifications, user behavior analysis, and reporting."],
        ["In-app payments", "Subscriptions, in-app purchases, and payment integrations."],
        ["Store release", "Managing the App Store and Google Play release processes."],
      ],
    },
    deliverables: {
      tr: ["Ürün kapsamı ve ekran akışları", "Arayüz tasarımı", "iOS ve Android uygulamaları", "Yönetim paneli ve API", "Mağaza yayını ve güncellemeler"],
      en: ["Product scope and screen flows", "Interface design", "iOS and Android apps", "Admin panel and API", "Store release and updates"],
    },
  },
  {
    id: "ai",
    icon: "ai",
    slug: { tr: "yapay-zeka-ve-otomasyon", en: "ai-and-automation" },
    title: {
      tr: "Yapay Zekâ ve Otomasyon",
      en: "AI and Automation",
    },
    summary: {
      tr: "Yapay zekâ destekli asistanlar, belge işleme ve tekrar eden işleri ortadan kaldıran otomasyonlar.",
      en: "AI-powered assistants, document processing, and automations that remove repetitive work.",
    },
    intro: {
      tr: "Yapay zekâyı somut iş sonuçlarına dönüştürüyoruz. Ekibinizin zamanını alan tekrarlı işleri otomatikleştiriyor, yapay zekâ modellerini mevcut sistemlerinize güvenli şekilde entegre ediyoruz.",
      en: "We turn AI into concrete business results. We automate the repetitive work that takes your team’s time and integrate AI models into your existing systems securely.",
    },
    features: {
      tr: [
        ["Kurumsal asistanlar", "Kendi dokümanlarınız ve verilerinizle çalışan yapay zekâ asistanları."],
        ["Müşteri hizmetleri", "Web sitesi ve mesajlaşma kanallarında sık sorulan soruları yanıtlayan botlar."],
        ["Belge işleme", "Fatura, form ve sözleşmelerden otomatik veri çıkarma ve sınıflandırma."],
        ["İş akışı otomasyonu", "Sistemler arası tekrarlı görevleri otomatik çalışan süreçlere dönüştürme."],
        ["İçerik üretimi", "Ürün açıklaması, rapor ve özet gibi içeriklerin yapay zekâ ile hızlandırılması."],
        ["Güvenli entegrasyon", "Verilerinizin gizliliğini koruyan, yetki kontrollü yapay zekâ kullanımı."],
      ],
      en: [
        ["Corporate assistants", "AI assistants that work with your own documents and data."],
        ["Customer service", "Bots that answer frequent questions on your website and messaging channels."],
        ["Document processing", "Automatic extraction and classification from invoices, forms, and contracts."],
        ["Workflow automation", "Turning repetitive cross-system tasks into automated processes."],
        ["Content generation", "Speeding up product descriptions, reports, and summaries with AI."],
        ["Secure integration", "Permission-controlled AI use that protects your data privacy."],
      ],
    },
    deliverables: {
      tr: ["Süreç analizi ve kullanım senaryoları", "Prototip ve pilot uygulama", "Sistem entegrasyonu", "Ekip eğitimi", "İzleme ve iyileştirme"],
      en: ["Process analysis and use cases", "Prototype and pilot", "System integration", "Team training", "Monitoring and improvement"],
    },
  },
  {
    id: "support",
    icon: "support",
    slug: { tr: "bakim-ve-destek", en: "maintenance-and-support" },
    title: {
      tr: "Bakım, Destek ve Danışmanlık",
      en: "Maintenance, Support, and Consulting",
    },
    summary: {
      tr: "Mevcut yazılımlarınız için düzenli bakım, güvenlik güncellemeleri ve teknik danışmanlık.",
      en: "Regular maintenance, security updates, and technical consulting for your existing software.",
    },
    intro: {
      tr: "Yazılım yayına alındıktan sonra da yaşamaya devam eder. Sitenizin, mağazanızın veya uygulamanızın güvenli, güncel ve sorunsuz çalışması için düzenli bakım ve teknik destek sağlıyoruz.",
      en: "Software keeps living after launch. We provide regular maintenance and technical support so your website, store, or app stays secure, up to date, and running smoothly.",
    },
    features: {
      tr: [
        ["Düzenli bakım", "Sürüm, eklenti ve kütüphane güncellemelerinin planlı yapılması."],
        ["Güvenlik", "Güvenlik açıklarının takibi, yamalar ve düzenli yedekleme."],
        ["Performans izleme", "Hız, erişilebilirlik ve hata takibiyle sorunları erken fark etme."],
        ["Geliştirme desteği", "Mevcut sisteminize yeni özellikler ve iyileştirmeler ekleme."],
        ["Devralma", "Başka ekipler tarafından geliştirilmiş projeleri inceleyip devralma."],
        ["Teknik danışmanlık", "Teknoloji seçimi, mimari ve dijital dönüşüm planlamasında rehberlik."],
      ],
      en: [
        ["Regular maintenance", "Planned updates for versions, plugins, and libraries."],
        ["Security", "Vulnerability tracking, patches, and regular backups."],
        ["Performance monitoring", "Catching issues early with speed, uptime, and error tracking."],
        ["Development support", "Adding new features and improvements to your existing system."],
        ["Project takeover", "Reviewing and taking over projects built by other teams."],
        ["Technical consulting", "Guidance on technology choices, architecture, and digital transformation."],
      ],
    },
    deliverables: {
      tr: ["Mevcut durum analizi", "Aylık bakım planı", "Öncelikli destek kanalı", "Düzenli raporlama"],
      en: ["Current state assessment", "Monthly maintenance plan", "Priority support channel", "Regular reporting"],
    },
  },
];

export function serviceHref(service: Service, locale: Locale) {
  return locale === "tr"
    ? `/hizmetler/${service.slug.tr}`
    : `/en/services/${service.slug.en}`;
}

export function findService(slug: string, locale: Locale) {
  return services.find((service) => service.slug[locale] === slug);
}
