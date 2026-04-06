import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StructuredData } from "@/components/structured-data";
import { GoogleAnalytics } from "@/components/google-analytics";

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
      "Diyetisyen Ezgi Evgin Aktaş | Online Beslenme Danışmanlığı Ankara",
    template: "%s | Diyetisyen Ezgi Evgin Aktaş",
  },
  description:
    "Ankara ve Eryaman diyetisyen Ezgi Evgin Aktaş: online diyet Ankara, yüz yüze beslenme danışmanlığı Etimesgut–Eryaman, kişiye özel program ve uygulama ile takip. Ezgi Evgin (Dyt Ezgi Evgin) ile sürdürülebilir kilo yönetimi.",
  keywords: [
    "ankara diyetisyen",
    "eryaman diyetisyen",
    "online diyet ankara",
    "ezgi evgin",
    "ezgi evgin aktaş",
    "dyt ezgi evgin",
    "diyetisyen ankara",
    "diyetisyen eryaman",
    "etimesgut diyetisyen",
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
    siteName: "Diyetisyen Ezgi Evgin Aktaş",
    title: "Diyetisyen Ezgi Evgin Aktaş | Online Beslenme Danışmanlığı Ankara",
    description:
      "Ankara Eryaman ve Etimesgut'ta online beslenme danışmanlığı, sağlıklı kilo verme ve kişiye özel diyet programları.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Diyetisyen Ezgi Evgin Aktaş",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyetisyen Ezgi Evgin Aktaş",
    description:
      "Eryaman ve Etimesgut odaklı online/yüz yüze beslenme danışmanlığı",
    images: ["/logo.svg"],
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
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
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
