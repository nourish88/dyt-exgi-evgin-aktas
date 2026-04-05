import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StructuredData } from "@/components/structured-data";

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
    "Ankara Eryaman ve Etimesgut'ta online/yüz yüze beslenme danışmanlığı, kilo verme ve kilo yönetimi programları. Uzman diyetisyen Ezgi Evgin Aktaş ile kişiye özel diyet programları.",
  keywords: [
    "diyetisyen ankara",
    "diyetisyen eryaman",
    "eryaman diyetisyen",
    "etimesgut diyetisyen",
    "ankara kilo verme",
    "eryaman kilo verme",
    "etimesgut kilo verme",
    "online diyetisyen",
    "beslenme danışmanı ankara",
    "kilo verme programı",
    "online diyet programı",
    "beslenme koçu",
    "sağlıklı kilo verme",
    "kişiye özel diyet",
    "whatsapp diyetisyen",
    "uzaktan diyet",
    "Ezgi Evgin Aktaş",
    "dyt ezgi evgin",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
  verification: {
    google: "google-site-verification-code", // Google Search Console'dan alınacak
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
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
