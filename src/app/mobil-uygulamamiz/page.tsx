import type { Metadata } from "next";
import MobileAppClient from "./mobile-app-client";

const PAGE_URL = "https://ezgievginaktas.com/mobil-uygulamamiz";

export const metadata: Metadata = {
  title: "Diyetisyen Mobil Uygulaması — Ezgi Evgin Danışan Portalı",
  description:
    "Öğün öncesi bildirimler, su hatırlatıcıları, grafiksel gelişim takibi ve diyetisyenle anlık mesajlaşma sunan online diyet takip uygulamamız.",
  keywords: [
    "diyetisyen mobil uygulama",
    "diyet takip uygulaması",
    "online diyet uygulaması",
    "danışan takip portalı",
    "öğün hatırlatıcı",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Diyet Takip Uygulaması | Ezgi Evgin Beslenme",
    description:
      "Öğün öncesi bildirimler, su hatırlatıcıları, grafiksel gelişim takibi ve diyetisyenle anlık mesajlaşma sunan online diyet takip uygulamamız.",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ezgi Evgin Danışan Portalı",
  operatingSystem: "Web, iOS, Android (PWA)",
  applicationCategory: "HealthAndFitnessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  description:
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı danışanları için özel geliştirilmiş; öğün bildirimleri, su hatırlatıcıları ve diyetisyenle iletişim kurmayı sağlayan ilerici web uygulaması (PWA).",
  url: PAGE_URL,
};

export default function MobileAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <MobileAppClient />
    </>
  );
}
