import type { Locale } from "./products";

// Mobile apps published under the studio's App Store / Google Play accounts.
// Tezgah apps are left out here because Tezgah has its own card in the work section.
export const appStoreDeveloperUrl = "https://apps.apple.com/tr/developer/yavuz-yildirim/id968847927";
export const googlePlayDeveloperUrl = "https://play.google.com/store/apps/developer?id=Yavuz+Y%C4%B1ld%C4%B1r%C4%B1m";

export type MobileApp = {
  slug: string;
  name: string;
  icon: string;
  label: Record<Locale, string>;
  description: Record<Locale, string>;
  appStore?: string;
  googlePlay?: string;
  /** Detail page on this site, if there is one. */
  page?: Record<Locale, string>;
};

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;
const appStore = (path: string) => `https://apps.apple.com/tr/app/${path}`;

export const mobileApps: MobileApp[] = [
  {
    slug: "ezan",
    name: "Ezan",
    icon: "/images/apps/ezan.png",
    label: { tr: "Namaz vakitleri", en: "Prayer times" },
    description: {
      tr: "Namaz vakitleri, kıble pusulası, Kuran, imsakiye ve dualar; Apple Watch ve TV desteğiyle.",
      en: "Prayer times, Qibla compass, Quran, Ramadan calendar, and duas, with Apple Watch and TV support.",
    },
    appStore: appStore("ezan-prayer-times-qibla/id713708943"),
    googlePlay: play("co.yapps.ezan"),
    page: { tr: "/ezan", en: "/en/ezan" },
  },
  {
    slug: "solaya",
    name: "Solaya",
    icon: "/images/apps/solaya.png",
    label: { tr: "Hava durumu", en: "Weather" },
    description: {
      tr: "Havayı tek bir ışığa çevirir: yürüyüş, koşu ve dışarı çıkmak için günün en iyi saatini gösterir.",
      en: "Turns the weather into a single light, showing the best time of day to walk, run, or head outside.",
    },
    appStore: appStore("solaya-time-to-go-outside/id6834972254"),
    googlePlay: play("app.solaya"),
    page: { tr: "/solaya", en: "/en/solaya" },
  },
  {
    slug: "radar",
    name: "Radar WiFi",
    icon: "/images/apps/radar.png",
    label: { tr: "Ağ tarayıcı", en: "Network scanner" },
    description: {
      tr: "Wi-Fi ağınıza bağlı cihazları saniyeler içinde bulur, ne olduklarını ve yeni katılanları gösterir.",
      en: "Finds every device on your Wi-Fi in seconds, tells you what they are, and flags the new ones.",
    },
    appStore: appStore("radar-wifi-network-scanner/id1312632062"),
  },
  {
    slug: "gundem",
    name: "Gündem",
    icon: "/images/apps/gundem.png",
    label: { tr: "Haber", en: "News" },
    description: {
      tr: "Türkiye’deki haber sitelerinden son dakika başlıklarını, döviz ve altın fiyatlarıyla tek listede toplar.",
      en: "Collects breaking headlines from Turkish news sites in one feed, along with currency and gold prices.",
    },
    appStore: appStore("g%C3%BCndem-son-dakika-haberler/id690291826"),
    googlePlay: play("co.yapps.gundem"),
    page: { tr: "/gundem", en: "/gundem" },
  },
  {
    slug: "emeka",
    name: "Emeka",
    icon: "/images/apps/emeka.png",
    label: { tr: "Maaş & mesai", en: "Pay & overtime" },
    description: {
      tr: "Vardiyalı ve saatlik çalışanlar için; mesai, gece ve tatil ücretleriyle maaşınızı maaş gününden önce hesaplar.",
      en: "For shift and hourly workers: estimates your pay with overtime, night and holiday premiums before payday.",
    },
    appStore: appStore("emeka/id6828809503"),
    googlePlay: play("com.someplus.emeka"),
  },
  {
    slug: "fishnora",
    name: "FishNora",
    icon: "/images/apps/fishnora.png",
    label: { tr: "Balıkçılık", en: "Fishing" },
    description: {
      tr: "Hava, gelgit ve ayı birleştirip bugün nerede, ne zaman ve ne avlanacağınızı söyleyen balıkçılık asistanı.",
      en: "A fishing assistant that combines weather, tide, and moon to tell you where, when, and what to fish today.",
    },
    appStore: appStore("fishnora-sea-fishing-times/id6834028858"),
    googlePlay: play("app.fishnora"),
  },
  {
    slug: "plantpace",
    name: "PlantPace",
    icon: "/images/apps/plantpace.png",
    label: { tr: "Bitki bakımı", en: "Plant care" },
    description: {
      tr: "Saksı, ışık, mevsim ve havaya göre sulama, besleme ve saksı değiştirme zamanını nedenleriyle söyler.",
      en: "Tells you when to water, feed, or repot, and why, based on your pot, light, season, and weather.",
    },
    appStore: appStore("plantpace-plant-care/id6833990226"),
    googlePlay: play("app.plantpace"),
  },
  {
    slug: "framesake",
    name: "Framesake",
    icon: "/images/apps/framesake.png",
    label: { tr: "İlerleme fotoğrafı", en: "Progress photos" },
    description: {
      tr: "Düzenli çektiğiniz fotoğraflarla değişiminizi zaman içinde takip etmenizi sağlar.",
      en: "Tracks how you change over time with regularly taken progress photos.",
    },
    googlePlay: play("app.someplus.framesake"),
  },
  {
    slug: "listln",
    name: "listln",
    icon: "/images/apps/listln.png",
    label: { tr: "Sosyal ağ", en: "Social" },
    description: {
      tr: "Alışveriş, seyahat, kitap ve film listelerinizi oluşturup paylaşabileceğiniz, yorum yapabileceğiniz bir sosyal ağ.",
      en: "A social network for creating, sharing, and commenting on lists, from shopping to travel, books, and movies.",
    },
    appStore: appStore("listln/id6479205912"),
    googlePlay: play("co.listln.app"),
  },
];
