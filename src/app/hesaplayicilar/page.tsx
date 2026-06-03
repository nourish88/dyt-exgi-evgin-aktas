import type { Metadata } from "next";
import CalculatorsClient from "./calculators-client";

export const metadata: Metadata = {
  title: { absolute: "BMI, İdeal Kilo ve Kalori Hesaplayıcıları" },
  description: "Ücretsiz vücut kitle indeksi (BMI), ideal kilo ve günlük kalori ihtiyacı hesaplama araçları. Kendi ölçümlerinizi hemen yapın.",
  alternates: {
    canonical: "https://ezgievginaktas.com/hesaplayicilar" ,
    languages: {
      "tr-TR": "https://ezgievginaktas.com/hesaplayicilar" ,
      "x-default": "https://ezgievginaktas.com/hesaplayicilar" ,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/hesaplayicilar",
    title: "Sağlıklı Yaşam Hesaplayıcıları | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Ücretsiz BMI, ideal kilo ve günlük kalori ihtiyacı hesaplayıcıları.",
  },
};

export default function CalculatorsPage() {
  return <CalculatorsClient />;
}
