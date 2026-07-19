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
import { PERSON_NAME, PERSON_PROFILE_URL } from "@/lib/seo-entities";

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
      "Ezgi Evgin Beslenme ve Diyet Danışmanlığı | Ankara",
    template: "%s | Dyt. Ezgi Evgin",
  },
  description:
    "Ankara Eryaman'da yüz yüze beslenme danışmanlığı ve kişiye özel diyet programları. Dyt. Ezgi Evgin ile sağlıklı kilo yönetimine başlayın.",
  keywords: [
    "ankara diyetisyen",
    "eryaman diyetisyen",
    "dyt ezgi evgin",
    "kişiye özel diyet programı",
  ],
  authors: [{ name: PERSON_NAME, url: PERSON_PROFILE_URL }],
  creator: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  publisher: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
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
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı | Ankara Diyetisyen",
    description:
      "Ankara Eryaman'da yüz yüze beslenme danışmanlığı, sağlıklı kilo verme ve kişiye özel diyet programları.",
    // images otomatik olarak app/opengraph-image.tsx'den 1200x630 üretiliyor
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Ankara Eryaman odaklı yüz yüze beslenme danışmanlığı",
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
        <meta name="geo.position" content="39.9669753;32.6358095" />
        <meta name="ICBM" content="39.9669753, 32.6358095" />
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
