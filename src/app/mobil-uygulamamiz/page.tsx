import type { Metadata } from "next";
import MobileAppClient from "./mobile-app-client";

export const metadata: Metadata = {
  title: "Mobil Uygulama — Danışan Takip Portalı",
  description:
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı danışan portalı: beslenme programınızı telefonunuzdan takip edin, öğün hatırlatıcıları alın ve diyetisyeninizle anlık iletişim kurun.",
  alternates: { canonical: "https://ezgievginaktas.com/mobil-uygulamamiz" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/mobil-uygulamamiz",
    title: "Mobil Uygulamamız — Danışan Portalı | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Beslenme programınızı telefonunuzdan takip edin, öğün hatırlatıcıları alın ve anlık iletişim kurun.",
  },
};

export default function MobileAppPage() {
  return <MobileAppClient />;
}
