import type { Metadata } from "next";
import "./globals.css";

const origin = "https://someplus.work";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "someplus.work — Kurumsal Yazılım ve Dijital Çözümler",
    template: "%s | someplus.work",
  },
  description:
    "Kurumsal yazılım, web sitesi, e-ticaret, mobil uygulama ve yapay zekâ çözümleri. Fikirden yayına uçtan uca dijital hizmet.",
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
    title: "someplus.work — Kurumsal Yazılım ve Dijital Çözümler",
    description:
      "Kurumsal yazılım, web, e-ticaret, mobil uygulama ve yapay zekâ alanlarında uçtan uca dijital çözümler.",
    images: [
      {
        url: `${origin}/og.png`,
        width: 1536,
        height: 1024,
        alt: "someplus.work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "someplus.work — Kurumsal Yazılım ve Dijital Çözümler",
    description:
      "Kurumsal yazılım, web, e-ticaret, mobil uygulama ve yapay zekâ alanlarında uçtan uca dijital çözümler.",
    images: [`${origin}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="/fonts/WEB/css/satoshi.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
