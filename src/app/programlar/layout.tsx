import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programlar — Beslenme Danışmanlığı",
  description:
    "Haftalık görüşme, devamlı online takip ve mobil uygulama desteğiyle kişiye özel beslenme programları. Ankara Eryaman ofisinde yüz yüze veya tüm Türkiye için online.",
  alternates: {
    canonical: "https://ezgievginaktas.com/programlar",
  },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/programlar",
    title: "Programlar — Online & Yüz Yüze Beslenme Danışmanlığı",
    description:
      "Haftalık görüşme, devamlı takip ve mobil uygulama desteğiyle kişiye özel diyet programları.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programlar — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Haftalık görüşme, devamlı takip ve mobil uygulama desteğiyle kişiye özel diyet programları.",
  },
};

export default function ProgramlarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
