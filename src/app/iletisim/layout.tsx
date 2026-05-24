import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı ile iletişime geçin: WhatsApp, telefon, e-posta ve Ankara Eryaman ofisi adresi. Online beslenme danışmanlığı için randevu talebi.",
  alternates: {
    canonical: "https://ezgievginaktas.com/iletisim",
  },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/iletisim",
    title: "İletişim — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "WhatsApp, telefon, e-posta ve Eryaman ofis adresi. Online ve yüz yüze beslenme danışmanlığı için randevu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Ezgi Evgin Beslenme ve Diyet Danışmanlığı ile iletişim — WhatsApp, telefon, Eryaman ofis.",
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children;
}
