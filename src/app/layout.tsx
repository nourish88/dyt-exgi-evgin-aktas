import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StructuredData } from "@/components/structured-data";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MetaPixel } from "@/components/meta-pixel";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezgievginaktas.com"),
  title: {
    default:
      "Diyetisyen Ezgi Evgin Aktaş | Ezgi Evgin | Ankara Eryaman",
    template: "%s | Dyt. Ezgi Evgin Aktaş",
  },
  description:
    "Ankara ve Eryaman diyetisyen Ezgi Evgin Aktaş: online diyet Ankara, yüz yüze beslenme danışmanlığı Etimesgut–Eryaman, kişiye özel program ve uygulama ile takip. Ezgi Evgin (Dyt Ezgi Evgin) ile sürdürülebilir kilo yönetimi.",
  keywords: [
    "ankara diyetisyen",
    "eryaman diyetisyen",
    "eryaman 1 etap diyetisyen",
    "eryaman diyetisyen tavsiye",
    "online diyet ankara",
    "ezgi evgin",
    "ezgi evgin aktaş",
    "dyt ezgi evgin",
    "diyetisyen ezgi evgin yorumları",
    "diyetisyen ezgi evgin yorumlar",
    "diyetisyen ankara",
    "diyetisyen eryaman",
    "etimesgut diyetisyen",
    "ata yıldız plaza diyetisyen",
    "altay mah. orhan bey cad. atayıldız no:1",
    "diyetgen",
    "ankara kilo verme",
    "online diyetisyen",
    "beslenme danışmanı ankara",
    "kilo verme programı",
    "online diyet programı",
    "kişiye özel diyet",
    "whatsapp diyetisyen",
    "uzaktan diyet",
    "Ezgi Evgin Aktaş",
  ],
  authors: [{ name: "Ezgi Evgin Aktaş" }],
  creator: "Ezgi Evgin Aktaş",
  publisher: "Ezgi Evgin Aktaş",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ezgievginaktas.com",
    siteName: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı | Online Beslenme Danışmanlığı Ankara",
    description:
      "Ankara Eryaman ve Etimesgut'ta online beslenme danışmanlığı, sağlıklı kilo verme ve kişiye özel diyet programları.",
    // images otomatik olarak app/opengraph-image.tsx'den 1200x630 üretiliyor
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Eryaman ve Etimesgut odaklı online/yüz yüze beslenme danışmanlığı",
    // images otomatik olarak app/twitter-image.tsx veya opengraph-image.tsx'den
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ezgievginaktas.com",
  },
  verification: {
    google: "Q3VVByxsORC_2cAitdb6jxy1hIkv864O4aArpuNosss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <StructuredData />
        {/* Geo meta — yerel SEO sinyali (Bing, Yandex ve dolaylı Google) */}
        <meta name="geo.region" content="TR-06" />
        <meta name="geo.placename" content="Etimesgut, Ankara — Atayıldız Plaza" />
        <meta name="geo.position" content="39.947;32.677" />
        <meta name="ICBM" content="39.947, 32.677" />
        {/* hreflang — tek dil site hijyeni */}
        <link rel="alternate" hrefLang="tr-TR" href="https://ezgievginaktas.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://ezgievginaktas.com/" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        <MetaPixel />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
