import Link from "next/link";
import { type Locale } from "@/lib/products";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const appStoreUrl = "https://apps.apple.com/cy/app/ezan-namaz-saatleri/id713708943";
const playStoreUrl = "https://play.google.com/store/apps/details?id=co.yapps.ezan";

type IconName = "clock" | "compass" | "book" | "beads" | "moon" | "widget";

const copy = {
  tr: {
    home: "Ana sayfa",
    work: "Projelerimiz",
    workHref: "/#projeler",
    eyebrow: "Kendi uygulamamız",
    titleSub: "Namaz Saatleri",
    intro:
      "Günün akışını beş vakit namazla buluşturur. Bulunduğun yerin doğru namaz vakitleri, canlı kıble pusulası, Kur’an-ı Kerim ve ihtiyaç duyduğun dualar; hepsi tek, sade ve huzurlu bir uygulamada.",
    appStore: "Hemen indir",
    playStore: "Hemen indir",
    heroNote: ["Ücretsiz", "Hesap gerekmez", "iPhone · Apple Watch · Android"],
    stats: [
      ["13", "hesaplama yöntemi, Diyanet dahil"],
      ["6", "vakit ve canlı geri sayım"],
      ["114", "sure, Osmanlı hattıyla tam mushaf"],
      ["99", "isim, anlamlarıyla Esmaül Hüsna"],
    ],
    featuresEyebrow: "Özellikler",
    featuresTitle: "İbadet için gereken her şey, tek yerde.",
    featuresDescription:
      "Ezan 5.0 baştan yenilendi: daha huzurlu bir ana ekran, Kur’an-ı Kerim, dualar, zikirmatik, dini günler, kaza takibi ve zekât hesaplama.",
    features: [
      {
        icon: "clock",
        title: "Güvenilir namaz vakitleri",
        body: "Bulunduğun yere göre imsak, güneş, öğle, ikindi, akşam ve yatsı. Bir sonraki vakte canlı geri sayım, her vakit için ezan bildirimi ve paylaşılabilir aylık imsakiye.",
      },
      {
        icon: "compass",
        title: "Kıble pusulası",
        body: "Dünyanın her yerinden Kâbe’yi gösteren canlı pusula. Net hizalama uyarısı, doğruluk göstergesi ve Kâbe’ye uzaklık.",
      },
      {
        icon: "book",
        title: "Kur’an-ı Kerim",
        body: "Osmanlı hattıyla tam mushaf, yer imleri ve “kaldığın yerden devam et”. Günün ayetini şık bir görsel kart olarak paylaş.",
      },
      {
        icon: "beads",
        title: "Zikir, dualar ve Esmaül Hüsna",
        body: "Titreşimli zikirmatik, günün her anı için dualar ve anlamlarıyla Allah’ın 99 ismi.",
      },
      {
        icon: "moon",
        title: "Ramazan ve dini günler",
        body: "Sahur ve iftar geri sayımı, oruç takibi, Hicri takvim, yaklaşan dini günler, kaza namazı takibi, zekât hesaplama ve yakındaki camiler.",
      },
      {
        icon: "widget",
        title: "Her an gözünün önünde",
        body: "Ana ekran widget’larıyla vakitler uygulamayı açmadan karşında. Bir sonraki vakte geri sayım her zaman bir bakış uzaklığında.",
      },
    ] as { icon: IconName; title: string; body: string }[],
    galleryEyebrow: "Ekranlar",
    galleryTitle: "Sade, huzurlu, gece gündüz okunaklı.",
    gallery: [
      ["home", "Ana ekran: vakitler ve canlı geri sayım"],
      ["qibla", "Kıble pusulası"],
      ["quran", "Kur’an-ı Kerim"],
      ["dhikr", "Zikirmatik"],
      ["duas", "Dualar"],
      ["dark", "Karanlık tema"],
    ],
    platformsEyebrow: "Platformlar",
    platformsTitle: "Telefonunda, bileğinde, kilit ekranında.",
    platforms: [
      {
        name: "iPhone ve Apple Watch",
        requirement: "iOS 16.6 ve üzeri",
        items: [
          "Ana ekran ve kilit ekranı widget’ları",
          "Canlı Etkinlik ve Dynamic Island’da geri sayım",
          "Vakitleri bileğine taşıyan Apple Watch uygulaması",
          "Ezan Pro ile iCloud üzerinden cihazlar arası eşitleme",
        ],
        cta: "App Store’da görüntüle",
        href: appStoreUrl,
      },
      {
        name: "Android",
        requirement: "Google Play",
        items: [
          "Ana ekran widget’ları",
          "Bildirim çubuğunda sonraki vakte geri sayım",
          "Vakitten önce hatırlatma ve dakika düzeltmeleri",
          "Google hesabına otomatik yedekleme; yeni telefonda kaldığın yerden",
        ],
        cta: "Google Play’de görüntüle",
        href: `${playStoreUrl}&hl=tr`,
      },
    ],
    privacyEyebrow: "Gizlilik",
    privacyTitle: "Vakitlerin telefonunda hesaplanır.",
    privacyBody:
      "Ezan’ı kullanmak için hesap açmana gerek yok. Konumun sunucularımıza gönderilmez; vakitler ve kıble yönü cihazında hesaplanır.",
    privacyPoints: [
      ["Hesap yok", "Ad, e-posta veya telefon numarası istemeyiz."],
      ["Konum cihazda kalır", "Konum yalnızca uygulamayı kullanırken alınır; istersen şehrini elle seçebilirsin."],
      ["Takip yok", "Uygulamanın kendisinde analiz veya kullanıcı takibi aracı yoktur."],
      ["Kayıtların senin", "Yer imleri, zikir ve kaza sayaçları cihazında ve kendi yedeklerinde kalır."],
    ],
    privacyLink: "Gizlilik politikasını okuyun",
    proEyebrow: "Ezan Pro",
    proTitle: "İbadet için gereken her şey ücretsiz kalır.",
    proBody: "Ezan Pro deneyimi kişiselleştirmek isteyenler için. 7 gün ücretsiz dene, dilediğin zaman mağaza ayarlarından iptal et.",
    freeLabel: "Ücretsiz",
    freeItems: [
      "Namaz vakitleri, ezan bildirimleri ve imsakiye",
      "Kıble pusulası ve yakındaki camiler",
      "Kur’an-ı Kerim, dualar ve Esmaül Hüsna",
      "Zikirmatik, kaza takibi ve zekât hesaplama",
      "Widget’lar",
    ],
    proLabel: "Pro",
    proTrial: "7 gün ücretsiz",
    proItems: [
      "Reklamsız kullanım",
      "Ezan sesi seçenekleri",
      "Namaz ve zikir istatistikleri",
      "Temalar ve uygulama ikonları",
      "Ek widget’lar",
      "iCloud eşitleme (iPhone)",
    ],
    closingTitle: "Hiçbir vakti kaçırma.",
    closingBody: "Ezan’ı ücretsiz indir; vakitler, kıble ve Kur’an her an yanında olsun.",
    supportNote: "Soru ve önerileriniz için",
  },
  en: {
    home: "Home",
    work: "Our work",
    workHref: "/en#work",
    eyebrow: "Our own app",
    titleSub: "Prayer Times & Qibla",
    intro:
      "Ezan keeps your day in rhythm with the five daily prayers. Accurate prayer times for where you are, a live Qibla compass, the Holy Quran and the duas you need, in one calm and beautiful app.",
    appStore: "Download on the",
    playStore: "Get it on",
    heroNote: ["Free", "No account needed", "iPhone · Apple Watch · Android"],
    stats: [
      ["13", "calculation methods, including Diyanet"],
      ["6", "daily times with a live countdown"],
      ["114", "surahs, complete Uthmani Mushaf"],
      ["99", "Names of Allah, with meanings"],
    ],
    featuresEyebrow: "Features",
    featuresTitle: "Everything you need for worship, in one place.",
    featuresDescription:
      "Ezan 5.0 is a complete redesign: a calmer home screen, the Holy Quran, duas, a dhikr counter, religious days, a qada tracker and a zakat calculator.",
    features: [
      {
        icon: "clock",
        title: "Prayer times you can trust",
        body: "Fajr, Sunrise, Dhuhr, Asr, Maghrib and Isha for your exact location. A live countdown to the next prayer, adhan notifications and a shareable monthly prayer calendar.",
      },
      {
        icon: "compass",
        title: "Qibla compass",
        body: "A live compass that points to the Kaaba from anywhere, with clear alignment feedback, an accuracy indicator and the distance to the Kaaba.",
      },
      {
        icon: "book",
        title: "Holy Quran",
        body: "The complete Mushaf in Uthmani script, with bookmarks and “continue where you left off”. Share the verse of the day as a beautiful image card.",
      },
      {
        icon: "beads",
        title: "Dhikr, duas and the 99 Names",
        body: "A tasbih counter with gentle haptics, duas for every moment of the day and Asma ul Husna with meanings.",
      },
      {
        icon: "moon",
        title: "Ramadan and religious days",
        body: "Suhoor and iftar countdown, fasting tracker, Islamic calendar, upcoming religious days, qada prayer tracker, zakat calculator and nearby mosques.",
      },
      {
        icon: "widget",
        title: "Always at a glance",
        body: "Home screen widgets keep the times in front of you without opening the app. The countdown to the next prayer is always a glance away.",
      },
    ] as { icon: IconName; title: string; body: string }[],
    galleryEyebrow: "Screens",
    galleryTitle: "Calm, clear and easy to read, day or night.",
    gallery: [
      ["home", "Home: today’s prayers and a live countdown"],
      ["qibla", "Qibla compass"],
      ["quran", "Holy Quran"],
      ["dhikr", "Dhikr counter"],
      ["duas", "Duas"],
      ["dark", "Dark theme"],
    ],
    platformsEyebrow: "Platforms",
    platformsTitle: "On your phone, your wrist and your lock screen.",
    platforms: [
      {
        name: "iPhone and Apple Watch",
        requirement: "iOS 16.6 or later",
        items: [
          "Home and Lock Screen widgets",
          "Live Activity and Dynamic Island countdown",
          "Apple Watch app with your prayer times",
          "iCloud sync across devices with Ezan Pro",
        ],
        cta: "View on the App Store",
        href: appStoreUrl,
      },
      {
        name: "Android",
        requirement: "Google Play",
        items: [
          "Home screen widgets",
          "Countdown to the next prayer in the notification bar",
          "Reminders before each prayer and minute adjustments",
          "Automatic backup to your Google account, so a new phone picks up where you left off",
        ],
        cta: "View on Google Play",
        href: `${playStoreUrl}&hl=en`,
      },
    ],
    privacyEyebrow: "Privacy",
    privacyTitle: "Your prayer times are calculated on your phone.",
    privacyBody:
      "You don’t need an account to use Ezan. Your location is never sent to our servers; prayer times and the Qibla direction are calculated on your device.",
    privacyPoints: [
      ["No account", "We never ask for your name, e-mail address or phone number."],
      ["Location stays on device", "Location is used only while the app is open, or you can simply pick your city by hand."],
      ["No tracking", "The app itself contains no analytics or user-tracking tools."],
      ["Your records are yours", "Bookmarks, dhikr and qada counters stay on your device and in your own backups."],
    ],
    privacyLink: "Read the privacy policy",
    proEyebrow: "Ezan Pro",
    proTitle: "Everything you need for worship stays free.",
    proBody: "Ezan Pro is for those who want to make the app their own. Try it free for 7 days and cancel any time in your store settings.",
    freeLabel: "Free",
    freeItems: [
      "Prayer times, adhan notifications and prayer calendar",
      "Qibla compass and nearby mosques",
      "Holy Quran, duas and the 99 Names",
      "Dhikr counter, qada tracker and zakat calculator",
      "Widgets",
    ],
    proLabel: "Pro",
    proTrial: "7 days free",
    proItems: [
      "Ad-free experience",
      "Adhan sound choices",
      "Prayer and dhikr statistics",
      "Themes and app icons",
      "Extra widgets",
      "iCloud sync (iPhone)",
    ],
    closingTitle: "Never miss a prayer.",
    closingBody: "Download Ezan for free and keep prayer times, the Qibla and the Quran with you wherever you go.",
    supportNote: "Questions or suggestions?",
  },
};

function FeatureIcon({ name }: { name: IconName }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M12 6.5C10.5 5.2 8.2 4.5 4 4.5v13c4.2 0 6.5.7 8 2 1.5-1.3 3.8-2 8-2v-13c-4.2 0-6.5.7-8 2Z" />
          <path d="M12 6.5v13" />
        </svg>
      );
    case "beads":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.8" r="1.6" />
          <circle cx="6.9" cy="7.2" r="1.6" />
          <circle cx="17.1" cy="7.2" r="1.6" />
          <circle cx="5.2" cy="12.4" r="1.6" />
          <circle cx="18.8" cy="12.4" r="1.6" />
          <circle cx="8.2" cy="16.8" r="1.6" />
          <circle cx="15.8" cy="16.8" r="1.6" />
          <path d="M12 18.4v2.8" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M18.5 15.2A7.5 7.5 0 0 1 9 5.5a7.5 7.5 0 1 0 9.5 9.7Z" />
          <path d="m17 4.5.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" />
        </svg>
      );
    case "widget":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="2" />
          <rect x="13" y="4" width="7" height="7" rx="2" />
          <rect x="4" y="13" width="16" height="7" rx="2" />
        </svg>
      );
  }
}

function AppleMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 5.84c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.67 1.37-.58.67-1.09 1.76-.96 2.8 1.02.08 2.05-.52 2.69-1.28Z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg width="20" height="22" viewBox="2 1.5 19.5 21" aria-hidden="true">
      <path fill="#00c3ff" d="M3.6 2.3 13.4 12l-9.8 9.7c-.3-.2-.5-.6-.5-1V3.3c0-.4.2-.8.5-1Z" />
      <path fill="#00e676" d="M16.8 8.6 13.4 12 3.6 2.3c.3-.2.8-.2 1.2 0l12 6.3Z" />
      <path fill="#ff3d48" d="m16.8 15.4-12 6.3c-.4.2-.9.2-1.2 0l9.8-9.7 3.4 3.4Z" />
      <path fill="#ffd200" d="M20.4 10.5c.8.5.8 1.6 0 2.1l-3.6 2.8-3.4-3.4 3.4-3.4 3.6 1.9Z" />
    </svg>
  );
}

function StoreButtons({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <div className="ezan-stores">
      <a className="ezan-store" href={appStoreUrl} target="_blank" rel="noopener noreferrer">
        <AppleMark />
        <span>
          <small>{text.appStore}</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a
        className="ezan-store"
        href={`${playStoreUrl}&hl=${locale}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PlayMark />
        <span>
          <small>{text.playStore}</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  );
}

function StarPattern({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <rect x="80" y="80" width="240" height="240" />
      <rect x="80" y="80" width="240" height="240" transform="rotate(45 200 200)" />
      <circle cx="200" cy="200" r="170" />
      <circle cx="200" cy="200" r="120" />
    </svg>
  );
}

export function EzanPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const shots = locale === "tr" ? "/images/ezan" : "/images/ezan/en";

  return (
    <>
      <SiteHeader locale={locale} languageHref={locale === "tr" ? "/en/ezan" : "/ezan"} />
      <main className="ezan-page">
        <section className="ezan-hero">
          <StarPattern className="ezan-pattern ezan-pattern-a" />
          <StarPattern className="ezan-pattern ezan-pattern-b" />
          <div className="shell ezan-hero-inner">
            <div className="ezan-hero-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href={locale === "tr" ? "/" : "/en"}>{text.home}</Link>
                <span aria-hidden="true">/</span>
                <Link href={text.workHref}>{text.work}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Ezan</span>
              </nav>
              <img
                className="ezan-icon"
                src="/images/ezan/icon.png"
                alt=""
                width="96"
                height="96"
              />
              <span className="ezan-eyebrow">{text.eyebrow}</span>
              <h1>
                Ezan
                <span>{text.titleSub}</span>
              </h1>
              <p>{text.intro}</p>
              <StoreButtons locale={locale} />
              <ul className="ezan-hero-note">
                {text.heroNote.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ezan-hero-visual">
              <img
                className="ezan-shot ezan-shot-back"
                src={`${shots}/qibla.webp`}
                alt=""
                width="720"
                height="1564"
              />
              <img
                className="ezan-shot ezan-shot-front"
                src={`${shots}/home.webp`}
                alt={text.gallery[0][1]}
                width="720"
                height="1564"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="ezan-stats" aria-label={text.featuresEyebrow}>
          <div className="shell">
            <dl>
              {text.stats.map(([value, label]) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section ezan-features">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="ezan-eyebrow">{text.featuresEyebrow}</span>
                <h2>{text.featuresTitle}</h2>
              </div>
              <p>{text.featuresDescription}</p>
            </div>
            <div className="ezan-feature-grid">
              {text.features.map((feature) => (
                <article key={feature.title}>
                  <span className="ezan-feature-icon">
                    <FeatureIcon name={feature.icon} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ezan-gallery-section">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="ezan-eyebrow">{text.galleryEyebrow}</span>
                <h2>{text.galleryTitle}</h2>
              </div>
            </div>
          </div>
          <ul className="ezan-gallery" tabIndex={0} aria-label={text.galleryEyebrow}>
            {text.gallery.map(([name, caption]) => (
              <li key={name}>
                <img
                  src={`${shots}/${name}.webp`}
                  alt={caption}
                  width="720"
                  height="1564"
                  loading="lazy"
                />
                <span>{caption}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section ezan-platforms">
          <div className="shell">
            <div className="section-heading compact">
              <div>
                <span className="ezan-eyebrow">{text.platformsEyebrow}</span>
                <h2>{text.platformsTitle}</h2>
              </div>
            </div>
            <div className="ezan-platform-grid">
              {text.platforms.map((platform) => (
                <article key={platform.name}>
                  <header>
                    <span className="ezan-platform-mark">
                      {platform.href.includes("apple") ? <AppleMark /> : <PlayMark />}
                    </span>
                    <div>
                      <h3>{platform.name}</h3>
                      <small>{platform.requirement}</small>
                    </div>
                  </header>
                  <ul>
                    {platform.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={platform.href} target="_blank" rel="noopener noreferrer">
                    {platform.cta}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ezan-privacy">
          <div className="shell ezan-privacy-card">
            <div className="ezan-privacy-copy">
              <span className="ezan-eyebrow">{text.privacyEyebrow}</span>
              <h2>{text.privacyTitle}</h2>
              <p>{text.privacyBody}</p>
              <a className="ezan-text-link" href="/privacy/ezan/">
                {text.privacyLink}
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="ezan-privacy-points">
              {text.privacyPoints.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section ezan-pro">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="ezan-eyebrow">{text.proEyebrow}</span>
                <h2>{text.proTitle}</h2>
              </div>
              <p>{text.proBody}</p>
            </div>
            <div className="ezan-plan-grid">
              <article className="ezan-plan">
                <h3>{text.freeLabel}</h3>
                <ul>
                  {text.freeItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="ezan-plan ezan-plan-pro">
                <h3>
                  {text.proLabel}
                  <span>{text.proTrial}</span>
                </h3>
                <ul>
                  {text.proItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section ezan-closing">
          <div className="shell ezan-closing-card">
            <StarPattern className="ezan-pattern ezan-pattern-c" />
            <img src="/images/ezan/icon.png" alt="" width="80" height="80" />
            <h2>{text.closingTitle}</h2>
            <p>{text.closingBody}</p>
            <StoreButtons locale={locale} />
            <small>
              {text.supportNote}{" "}
              <a href="mailto:info@someplus.work">info@someplus.work</a>
            </small>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
