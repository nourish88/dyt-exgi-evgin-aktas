import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Başkent Üniversitesi Beslenme ve Diyetetik mezunu Ezgi Evgin Beslenme ve Diyet Danışmanlığı'ın eğitim, deneyim ve danışmanlık yaklaşımı. Ankara Eryaman ofisi ve online beslenme danışmanlığı.",
  alternates: {
    canonical: "https://ezgievginaktas.com/hakkimda",
  },
  openGraph: {
    type: "profile",
    url: "https://ezgievginaktas.com/hakkimda",
    title: "Hakkımda — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Uzman Ezgi Evgin Beslenme ve Diyet Danışmanlığı — eğitim, deneyim ve beslenme danışmanlığı yaklaşımı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımda — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Uzman Ezgi Evgin Beslenme ve Diyet Danışmanlığı — eğitim, deneyim ve beslenme danışmanlığı yaklaşımı.",
  },
};

export default function HakkimdaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
