import type { Metadata } from "next";
import CalculatorsClient from "./calculators-client";

export const metadata: Metadata = {
  title: "BMI, İdeal Kilo & Kalori Hesaplayıcıları",
  description:
    "Ücretsiz vücut kitle indeksi (BMI), ideal kilo ve günlük kalori ihtiyacı hesaplayıcıları. Diyetisyen Ezgi Evgin Aktaş ile sağlıklı hedeflerinizi belirleyin.",
  alternates: { canonical: "https://ezgievginaktas.com/hesaplayicilar" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/hesaplayicilar",
    title: "Sağlıklı Yaşam Hesaplayıcıları | Diyetisyen Ezgi Evgin Aktaş",
    description:
      "Ücretsiz BMI, ideal kilo ve günlük kalori ihtiyacı hesaplayıcıları.",
  },
};

export default function CalculatorsPage() {
  return <CalculatorsClient />;
}
