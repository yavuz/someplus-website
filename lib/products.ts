export type Locale = "tr" | "en";
export type ProductCategory =
  | "focus"
  | "personalize"
  | "productivity"
  | "communication";

export type Product = {
  slug: string;
  name: string;
  icon: string;
  href: string;
  category: ProductCategory;
  featured?: boolean;
  description: Record<Locale, string>;
  label: Record<Locale, string>;
};

export const products: Product[] = [
  {
    slug: "smart-tab-suspender",
    name: "Smart Tab Suspender",
    icon: "/images/icons/smart_tab_suspender.png",
    href: "https://chromewebstore.google.com/detail/smart-tab-suspender/mmhfonkfehekiofpkjiofjeoofloidog",
    category: "focus",
    featured: true,
    label: { tr: "Bellek & hız", en: "Memory & speed" },
    description: {
      tr: "Kullanılmayan sekmeleri otomatik askıya alır, belleği rahatlatır ve tek tıkla geri getirir.",
      en: "Automatically suspends inactive tabs, frees memory, and restores them with one click.",
    },
  },
  {
    slug: "open-with-ai",
    name: "Open with AI",
    icon: "/images/icons/openwithai.png",
    href: "https://someplus.work/openwithai/",
    category: "productivity",
    featured: true,
    label: { tr: "Yapay zekâ", en: "AI workflow" },
    description: {
      tr: "Seçili metni veya açık sayfayı ChatGPT, Claude, Gemini ve diğer yapay zekâ araçlarına gönderir.",
      en: "Sends selected text or the current page to ChatGPT, Claude, Gemini, and other AI tools.",
    },
  },
  {
    slug: "tabio",
    name: "Tabio",
    icon: "/images/icons/tabio.png",
    href: "https://chromewebstore.google.com/detail/tabio/nckidmkgahoolemnaaklgcfpdmlfnofb",
    category: "focus",
    featured: true,
    label: { tr: "Oturumlar", en: "Sessions" },
    description: {
      tr: "Sekme oturumlarını profiller hâlinde kaydeder; iş, ev ve özel çalışma alanları arasında geçiş sağlar.",
      en: "Saves tab sessions as profiles and lets you switch between work, home, and custom spaces.",
    },
  },
  {
    slug: "tabtint",
    name: "TabTint",
    icon: "/images/icons/tabtint.png",
    href: "https://chromewebstore.google.com/detail/tabtint/bngecoefhbooakaodjlfegpbjhlhkfif",
    category: "personalize",
    label: { tr: "Sekme renkleri", en: "Tab colors" },
    description: {
      tr: "Sekmeleri geçici renklerle ayırır veya alan adı ve URL için kalıcı renk kuralları oluşturur.",
      en: "Adds temporary tab colors or permanent color rules for domains and URLs.",
    },
  },
  {
    slug: "sidekick-wa",
    name: "SideKick WA",
    icon: "/images/icons/sidekick_whatsapp.png",
    href: "https://chromewebstore.google.com/detail/sidekick-wa/ijfnpjcikndpffampjljggnnobagahkf",
    category: "communication",
    label: { tr: "WhatsApp Web", en: "WhatsApp Web" },
    description: {
      tr: "WhatsApp Web’e akıllı notlar, etiketleme ve gizlilik bulanıklaştırma özellikleri ekler.",
      en: "Adds smart notes, tagging, and privacy blur features to WhatsApp Web.",
    },
  },
  {
    slug: "chromashift",
    name: "ChromaShift",
    icon: "/images/icons/chroma_shift.png",
    href: "https://chromewebstore.google.com/detail/chromashift/ifngfcdoccfbgagjiahnbkajaikjaiek",
    category: "personalize",
    label: { tr: "Görsel konfor", en: "Visual comfort" },
    description: {
      tr: "Karanlık mod, gece ışığı ve yazı tipi özelleştirmeleriyle web’i gözlerine göre düzenler.",
      en: "Adapts the web to your eyes with dark mode, night shift, and font customization.",
    },
  },
  {
    slug: "send-to-phone",
    name: "Send to Phone (QR)",
    icon: "/images/icons/send2phone.png",
    href: "https://chromewebstore.google.com/detail/send-to-phone-qr/ffdfngiplmmpfjehaalakfbanlkmneph",
    category: "productivity",
    label: { tr: "Cihazlar arası", en: "Cross-device" },
    description: {
      tr: "Açık sayfayı takip parametrelerinden arındırıp QR kod ile telefonuna gönderir.",
      en: "Cleans tracking parameters and sends the current page to your phone with a QR code.",
    },
  },
  {
    slug: "donefetti",
    name: "Donefetti!",
    icon: "/images/icons/donefetti.png",
    href: "https://chromewebstore.google.com/detail/donefetti/pdckdimjeaaomlgdnhppaogacipeigod",
    category: "personalize",
    label: { tr: "Mikro mutluluk", en: "Micro delight" },
    description: {
      tr: "Başarıyla gönderilen formları renkli bir konfeti anıyla kutlar.",
      en: "Celebrates successful form submissions with a colorful burst of confetti.",
    },
  },
];

export const platformLinks = [
  {
    name: "Chrome",
    href: "#products",
    note: { tr: "8 araç", en: "8 tools" },
  },
  {
    name: "Firefox",
    href: "https://addons.mozilla.org/en-US/firefox/user/19607411/",
    note: { tr: "Tarayıcı eklentileri", en: "Browser add-ons" },
  },
  {
    name: "WordPress",
    href: "https://profiles.wordpress.org/someplus/",
    note: { tr: "Yönetim araçları", en: "Management tools" },
  },
  {
    name: "Adobe Commerce",
    href: "https://commercemarketplace.adobe.com/partner/infosomepla35b",
    note: { tr: "E-ticaret modülleri", en: "Commerce modules" },
  },
  {
    name: "iOS",
    href: "https://apps.apple.com/us/developer/yavuz-yildirim/id968847927",
    note: { tr: "Mobil uygulamalar", en: "Mobile apps" },
  },
] as const;
