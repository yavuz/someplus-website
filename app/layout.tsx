import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "someplus.work";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "someplus.work — Küçük, güçlü dijital araçlar",
      template: "%s | someplus.work",
    },
    description:
      "Chrome, Firefox, WordPress, Adobe Commerce ve iOS için hafif, odaklı ve güvenilir dijital ürünler.",
    applicationName: "someplus.work",
    authors: [{ name: "someplus.work" }],
    creator: "someplus.work",
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    openGraph: {
      type: "website",
      siteName: "someplus.work",
      title: "someplus.work — Küçük, güçlü dijital araçlar",
      description:
        "Daha sakin bir dijital gün için hafif, odaklı ve güvenilir ürünler.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "someplus.work — Dijital ürünler. Daha az sürtünme.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "someplus.work — Küçük, güçlü dijital araçlar",
      description:
        "Daha sakin bir dijital gün için hafif, odaklı ve güvenilir ürünler.",
      images: [`${origin}/og.png`],
    },
  };
}

const themeScript = `
  (() => {
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
