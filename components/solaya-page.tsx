import Link from "next/link";
import { type Locale } from "@/lib/products";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SolayaOrb } from "./solaya-orb";
import { SolayaStoreLinks } from "./solaya-store-links";

// Uygulamanın kürelerinin renkleri (app/lib/theme/palette.dart ile aynı).
const colors = {
  gold: "#F6C66B",
  peach: "#E9A87C",
  rain: "#8D99A8",
  ice: "#A9D6F5",
  ember: "#F08A5D",
  night: "#9C93D8",
};

type IconName = "sun" | "week" | "island" | "siri" | "traces" | "touch" | "tune" | "lock";

const copy = {
  tr: {
    home: "Ana sayfa",
    work: "Projelerimiz",
    workHref: "/#projeler",
    eyebrow: "Kendi uygulamamız",
    tagline: "Dışarı çıkmak için en iyi an.",
    intro:
      "Rakam yok, tablo yok. Solaya havayı senin için okur ve tek bir ışığa çevirir: altınsa çık. Koşu, yürüyüş, çocuklarla park, köpek gezdirme, bisiklet ya da çamaşır; her biri için günün en tatlı saatini bulur.",
    heroNote: ["Hesap gerekmez", "Konumun ~10 km’ye yuvarlanır", "6 dil"],
    orbHint: "Küreye dokun ya da tutup esnet",
    states: [
      { color: colors.gold, meaning: "Altınsa çık." },
      { color: colors.peach, meaning: "Şeftaliyse olur, ama ideal değil." },
      { color: colors.rain, meaning: "Griyse biraz bekle." },
      { color: colors.ice, meaning: "Buz mavisiyse sıkı giyin." },
      { color: colors.ember, meaning: "Korsa çok sıcak, gölgede kal." },
      { color: colors.night, meaning: "Moruysa ışık yok, yarına bak." },
    ],
    languageEyebrow: "Işığın dili",
    languageTitle: "Renge bakman yeter.",
    languageBody:
      "Kürenin rengi o saatin hâlidir. Altı renk, altı cümle; bir kez öğrenince havaya bakmana gerek kalmaz.",
    featuresEyebrow: "Özellikler",
    featuresTitle: "Sade görünür, çok şey bilir.",
    featuresBody:
      "Sıcaklık, hissedilen sıcaklık, rüzgar, nem, yağmur ihtimali, hava kalitesi, UV ve gün ışığı; hepsi her saat için tartılır, sana tek bir ışık olarak gelir.",
    features: [
      {
        icon: "sun",
        title: "Altın saat",
        body: "“En iyi an 15:00 – 18:00. Sonra kararıyor.” Neden öyle olduğunu tek dokunuşla görürsün; günü parmağınla kaydırıp saat saat gezersin.",
      },
      {
        icon: "week",
        title: "Haftanın ışığı",
        body: "Yedi günün küreleri yan yana. Hafta sonu planını hava belirlesin; istersen takvimindeki boş saatlerle eşleştir.",
      },
      {
        icon: "island",
        title: "Kilit ekranı ve Dynamic Island",
        body: "Altın saat yaklaşınca küre kilit ekranında belirir, sayaç akar. Başlayınca “Şimdi çık.” der, bitince kendiliğinden gider.",
      },
      {
        icon: "siri",
        title: "Siri’ye sor",
        body: "“Solaya dışarı çıksam mı?” Uygulamayı açmadan, internet beklemeden cevap.",
      },
      {
        icon: "traces",
        title: "Işık izleri",
        body: "Altın saatte çıktığında “Çıktım” de; haftan küçük ışıklarla dolar. Sayaç yok, seri yok, suçluluk yok.",
      },
      {
        icon: "touch",
        title: "Dokun, dinle",
        body: "Küre hamur gibi esner, her dokunuşta yumuşak bir nota çalar. Telefon sessizdeyse susar.",
      },
      {
        icon: "tune",
        title: "Sana göre",
        body: "Serin mi seversin, sıcak mı? Hava kirliliğine hassas mısın? Uyanık olduğun saatler hangileri? Işık buna göre okur.",
      },
      {
        icon: "lock",
        title: "Sende kalır",
        body: "Hesap yok, takip yok, reklam yok. Konumun yaklaşık 10 km’lik bir kareye yuvarlanır; günlüğün telefonundan çıkmaz.",
      },
    ] as { icon: IconName; title: string; body: string }[],
    galleryEyebrow: "Uygulamadan",
    galleryTitle: "Bir bakışta, bütün gün.",
    gallery: [
      ["today", "Bugün: tek ışık, tek cümle"],
      ["week", "Hafta ve ışık izlerin"],
      ["why", "Neden şimdi?"],
      ["onboarding", "Işığın dilini öğren"],
    ],
    plusEyebrow: "Solaya+",
    plusTitle: "Ücretsiz sürüm tek başına yeter.",
    plusBody:
      "Bugün ve yarın, bir aktivite, sabah özeti, kilit ekranı geri sayımı ve ışık izleri herkese açık. Solaya+ ile bütün aktiviteler, yedi günün ışığı, altın saat hatırlatıcısı, hafta sonu planı ve takvimle plan. Yedi gün ücretsiz dene.",
    faqEyebrow: "Sorular",
    faq: [
      [
        "Altın saat ne demek?",
        "Fotoğrafçılardaki altın saat değil: seçtiğin aktivite için havanın en tatlı olduğu saatler. Sabah da olabilir, öğle de; koşu için başka, çamaşır için başka.",
      ],
      ["Hava verisi nereden geliyor?", "Open-Meteo’nun saatlik tahminleri ve hava kalitesi verisinden."],
      [
        "Konumumu vermek zorunda mıyım?",
        "Hayır. İzin vermezsen bölgendeki büyük bir şehrin havasını okur. İzin verirsen konumun yaklaşık 10 km’lik bir kareye yuvarlanarak gönderilir.",
      ],
      ["Hangi dillerde?", "Türkçe, İngilizce, İspanyolca, Almanca, Portekizce ve Japonca."],
      ["Android var mı?", "Evet. Solaya, iOS için App Store’da ve Android için Google Play’de yayında."],
    ],
    closingTitle: "Işığa bak, dışarı çık.",
    privacy: "Gizlilik politikası",
    support: "Destek",
  },
  en: {
    home: "Home",
    work: "Our work",
    workHref: "/en#work",
    eyebrow: "Our own app",
    tagline: "The best time to be outside.",
    intro:
      "No numbers, no charts. Solaya reads the weather for you and turns it into a single light: gold means go. Running, walking, the park with kids, the dog, a ride or the laundry; it finds the sweetest hours of the day for each.",
    heroNote: ["No account", "Location rounded to ~10 km", "6 languages"],
    orbHint: "Tap the light, or hold and stretch it",
    states: [
      { color: colors.gold, meaning: "Gold means go." },
      { color: colors.peach, meaning: "Peach is okay, not ideal." },
      { color: colors.rain, meaning: "Gray means wait a bit." },
      { color: colors.ice, meaning: "Ice blue means bundle up." },
      { color: colors.ember, meaning: "Ember means too hot, find shade." },
      { color: colors.night, meaning: "Violet means no light, try tomorrow." },
    ],
    languageEyebrow: "The language of the light",
    languageTitle: "Just look at the color.",
    languageBody:
      "The orb’s color is the mood of that hour. Six colors, six sentences; learn them once and you won’t need to check the weather.",
    featuresEyebrow: "Features",
    featuresTitle: "Looks simple, knows a lot.",
    featuresBody:
      "Temperature, feels-like, wind, humidity, rain chance, air quality, UV and daylight are weighed for every hour and reach you as one light.",
    features: [
      {
        icon: "sun",
        title: "Golden hour",
        body: "“Best time 3 PM – 6 PM. Then it gets dark.” See why with one tap, and swipe through the day hour by hour.",
      },
      {
        icon: "week",
        title: "The week’s light",
        body: "Seven days of orbs side by side. Let the weather plan your weekend, and match it with the free hours in your calendar.",
      },
      {
        icon: "island",
        title: "Lock screen and Dynamic Island",
        body: "As golden hour nears, the orb appears on your lock screen with a countdown. It says “Go now.” when it starts and leaves on its own when it ends.",
      },
      {
        icon: "siri",
        title: "Ask Siri",
        body: "“Should I go outside with Solaya?” An answer without opening the app or waiting for the network.",
      },
      {
        icon: "traces",
        title: "Light traces",
        body: "Tap “I went out” at golden hour and your week fills with little lights. No counters, no streaks, no guilt.",
      },
      {
        icon: "touch",
        title: "Touch and listen",
        body: "The orb stretches like dough and plays a soft note with every touch. It stays quiet when your phone is on silent.",
      },
      {
        icon: "tune",
        title: "Tuned to you",
        body: "Like it cool or warm? Sensitive to air pollution? Which hours are you awake? The light reads accordingly.",
      },
      {
        icon: "lock",
        title: "Stays with you",
        body: "No account, no tracking, no ads. Your location is rounded to a ~10 km square; your journal never leaves your phone.",
      },
    ] as { icon: IconName; title: string; body: string }[],
    galleryEyebrow: "From the app",
    galleryTitle: "The whole day at a glance.",
    gallery: [
      ["today", "Today: one light, one sentence"],
      ["week", "Your week and light traces"],
      ["why", "Why now?"],
      ["onboarding", "Learn the language of the light"],
    ],
    plusEyebrow: "Solaya+",
    plusTitle: "The free version is enough on its own.",
    plusBody:
      "Today and tomorrow, one activity, the morning summary, the lock screen countdown and light traces are free for everyone. Solaya+ adds every activity, seven days of light, golden hour reminders, the weekend plan and calendar planning. Try it free for seven days.",
    faqEyebrow: "Questions",
    faq: [
      [
        "What does golden hour mean here?",
        "Not the photographer’s golden hour: it’s when the weather is sweetest for the activity you chose. It can be morning or noon, and it differs for a run and for the laundry.",
      ],
      ["Where does the weather come from?", "Open-Meteo’s hourly forecasts and air quality data."],
      [
        "Do I have to share my location?",
        "No. Without permission it reads the weather of a big city in your region. With permission, your location is rounded to a ~10 km square before it is sent.",
      ],
      ["Which languages?", "English, Turkish, Spanish, German, Portuguese and Japanese."],
      ["Is there an Android version?", "Yes. Solaya is available on the App Store for iOS and Google Play for Android."],
    ],
    closingTitle: "Look at the light, go outside.",
    privacy: "Privacy policy",
    support: "Support",
  },
};

export function SolayaPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const shots = locale === "tr" ? "/images/solaya" : "/images/solaya/en";

  return (
    <>
      <SiteHeader locale={locale} languageHref={locale === "tr" ? "/en/solaya" : "/solaya"} />
      <main className="solaya-page" lang={locale}>
        <section className="solaya-hero">
          <div className="solaya-sky" aria-hidden="true" />
          <div className="shell solaya-hero-inner">
            <div className="solaya-hero-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href={locale === "tr" ? "/" : "/en"}>{text.home}</Link>
                <span aria-hidden="true">/</span>
                <Link href={text.workHref}>{text.work}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Solaya</span>
              </nav>
              <span className="solaya-eyebrow">{text.eyebrow}</span>
              <h1>
                Solaya
                <span>{text.tagline}</span>
              </h1>
              <p>{text.intro}</p>
              <SolayaStoreLinks locale={locale} />
              <ul className="solaya-note">
                {text.heroNote.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <SolayaOrb states={text.states} hint={text.orbHint} />
          </div>
        </section>

        <section className="solaya-language">
          <div className="shell">
            <span className="solaya-eyebrow">{text.languageEyebrow}</span>
            <h2>{text.languageTitle}</h2>
            <p className="solaya-lead">{text.languageBody}</p>
            <ul className="solaya-swatches">
              {text.states.map((s) => (
                <li key={s.color}>
                  <span className="solaya-dot" style={{ ["--c" as string]: s.color }} aria-hidden="true" />
                  {s.meaning}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="solaya-features">
          <div className="shell">
            <span className="solaya-eyebrow">{text.featuresEyebrow}</span>
            <h2>{text.featuresTitle}</h2>
            <p className="solaya-lead">{text.featuresBody}</p>
            <div className="solaya-feature-grid">
              {text.features.map((f) => (
                <article key={f.title}>
                  <span className="solaya-feature-icon" aria-hidden="true">
                    <FeatureIcon name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solaya-gallery-section">
          <div className="shell">
            <span className="solaya-eyebrow">{text.galleryEyebrow}</span>
            <h2>{text.galleryTitle}</h2>
          </div>
          <ul className="solaya-gallery" tabIndex={0} aria-label={text.galleryEyebrow}>
            {text.gallery.map(([name, caption]) => (
              <li key={name}>
                <img src={`${shots}/${name}.webp`} alt={caption} width="603" height="1311" loading="lazy" />
                <span>{caption}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="solaya-plus">
          <div className="shell solaya-plus-inner">
            <span className="solaya-eyebrow">{text.plusEyebrow}</span>
            <h2>{text.plusTitle}</h2>
            <p className="solaya-lead">{text.plusBody}</p>
          </div>
        </section>

        <section className="solaya-faq">
          <div className="shell">
            <span className="solaya-eyebrow">{text.faqEyebrow}</span>
            <div className="solaya-faq-list">
              {text.faq.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="solaya-closing">
          <div className="solaya-sky solaya-sky-dusk" aria-hidden="true" />
          <div className="shell">
            <img className="solaya-icon" src="/images/solaya/icon.png" alt="" width="88" height="88" />
            <h2>{text.closingTitle}</h2>
            <SolayaStoreLinks locale={locale} />
            <p className="solaya-links">
              <a href="/privacy/solaya/">{text.privacy}</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:info@someplus.work?subject=Solaya">{text.support}</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

function FeatureIcon({ name }: { name: IconName }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "sun":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <circle cx="12" cy="12" r="4.5" {...p} />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" {...p} />
        </svg>
      );
    case "week":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          {[4, 9, 14, 19].map((x, i) => (
            <circle key={x} cx={x + 0.5} cy="12" r={i === 1 ? 2.6 : 1.8} {...p} />
          ))}
        </svg>
      );
    case "island":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect x="3" y="8" width="18" height="8" rx="4" {...p} />
          <circle cx="7.5" cy="12" r="1.8" {...p} />
          <path d="M13 12h4.5" {...p} />
        </svg>
      );
    case "siri":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M3 12h2M6.5 9v6M10 6v12M13.5 8.5v7M17 10.5v3M20.5 11.5v1" {...p} />
        </svg>
      );
    case "traces":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <circle cx="5" cy="15" r="2" {...p} />
          <circle cx="12" cy="10" r="2.6" {...p} />
          <circle cx="19" cy="14" r="1.6" {...p} />
          <path d="M6.8 14l3.3-2.6M14.4 11.3l3.2 1.9" {...p} strokeDasharray="1.5 2" />
        </svg>
      );
    case "touch":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 4.5c4.4 0 7.5 2.9 7.5 7 0 4.6-3.6 8-7.8 8-4.3 0-7.2-3.2-7.2-7.4 0-4.5 3-7.6 7.5-7.6z" {...p} />
          <path d="M9 12.5c.8 1.2 1.9 1.8 3 1.8s2.2-.6 3-1.8" {...p} />
        </svg>
      );
    case "tune":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M4 7h10M18 7h2M4 17h4M12 17h8" {...p} />
          <circle cx="16" cy="7" r="2" {...p} />
          <circle cx="10" cy="17" r="2" {...p} />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect x="5" y="10.5" width="14" height="10" rx="3" {...p} />
          <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...p} />
        </svg>
      );
  }
}
