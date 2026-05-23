import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Başkent Üniversitesi Beslenme ve Diyetetik mezunu Dyt. Ezgi Evgin Aktaş'ın eğitim, deneyim ve danışmanlık yaklaşımı. Ankara Eryaman ofisi ve online beslenme danışmanlığı.",
  alternates: {
    canonical: "https://ezgievginaktas.com/hakkimda",
  },
  openGraph: {
    type: "profile",
    url: "https://ezgievginaktas.com/hakkimda",
    title: "Hakkımda — Diyetisyen Ezgi Evgin Aktaş",
    description:
      "Uzman diyetisyen Ezgi Evgin Aktaş — eğitim, deneyim ve beslenme danışmanlığı yaklaşımı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımda — Diyetisyen Ezgi Evgin Aktaş",
    description:
      "Uzman diyetisyen Ezgi Evgin Aktaş — eğitim, deneyim ve beslenme danışmanlığı yaklaşımı.",
  },
};

export default function HakkimdaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
