import type { Metadata } from "next";

const PAGE_URL = "https://ezgievginaktas.com/fonksiyonel-tip-diyetisyeni-ankara";

export const metadata: Metadata = {
  title: "Fonksiyonel Tıp Diyetisyeni Ankara — Bütüncül Beslenme",
  description:
    "Ankara Eryaman'da bütüncül yaklaşımla fonksiyonel tıp diyetisyeni Ezgi Evgin. Sindirim/bağırsak sağlığı, otoimmün durumlar, eliminasyon diyeti ve hücresel beslenme.",
  keywords: [
    "fonksiyonel tıp diyetisyeni ankara",
    "ankara fonksiyonel tıp diyetisyeni",
    "bütüncül diyetisyen ankara",
    "fonksiyonel tıp beslenmesi",
    "eryaman fonksiyonel tıp diyetisyeni",
    "eliminasyon diyeti ankara",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Fonksiyonel Tıp Diyetisyeni Ankara — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Kronik hastalıklarda kök neden analizi, eliminasyon diyeti ve mikrobiyom odaklı bütüncül beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonksiyonel Tıp Diyetisyeni Ankara — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Bütüncül ve hücresel odaklı beslenme danışmanlığı — Ankara Eryaman ve online.",
  },
};

export default function FonksiyonelTipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
