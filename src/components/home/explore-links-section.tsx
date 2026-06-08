import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  {
    href: "/eryaman-diyetisyen",
    title: "Eryaman Diyetisyen",
    desc: "Atayıldız Plaza (Optimum AVM karşısı) kliniğimizde yüz yüze kişiye özel beslenme danışmanlığı.",
  },
  {
    href: "/online-diyetisyen",
    title: "Online Diyetisyen",
    desc: "Türkiye ve yurtdışından katılabileceğiniz kişiye özel online beslenme danışmanlığı ve haftalık takip.",
  },
  {
    href: "/hakkimda",
    title: "Dyt. Ezgi Evgin Aktaş",
    desc: "Eğitimi, klinik deneyimi ve yasaksız beslenme yaklaşımıyla uzman diyetisyen Ezgi Evgin Aktaş'ı tanıyın.",
  },
  {
    href: "/hesaplayicilar",
    title: "Hesaplayıcılar",
    desc: "Vücut kitle indeksi (BMI), ideal kilo ve günlük kalori ihtiyacınızı ücretsiz hesaplayın.",
  },
  {
    href: "/tarifler",
    title: "Sağlıklı Tarifler",
    desc: "Diyetisyen onaylı, düşük kalorili ve besleyici pratik yemek tarifleri.",
  },
  {
    href: "/blog",
    title: "Beslenme Blogu",
    desc: "Sağlıklı beslenme, kilo yönetimi ve güncel diyet konularında uzman makaleler.",
  },
];

export function ExploreLinksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)]">
            Size nasıl yardımcı olabilirim?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Online diyetisyen desteği için{" "}
            <Link
              href="/online-diyetisyen"
              className="text-[var(--brand-primary)] underline underline-offset-4"
            >
              online diyetisyen sayfasını inceleyin
            </Link>{" "}
            ya da aşağıdaki sayfalardan daha fazla bilgi edinin.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Yüz yüze görüşme için{" "}
            <Link
              href="/eryaman-diyetisyen"
              className="text-[var(--brand-primary)] underline underline-offset-4"
            >
              Eryaman diyetisyen
            </Link>{" "}
            ya da{" "}
            <Link
              href="/ankara-kilo-verme-diyetisyen"
              className="text-[var(--brand-primary)] underline underline-offset-4"
            >
              Ankara kilo verme
            </Link>{" "}
            sayfalarına göz atabilirsiniz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl border bg-white p-6 transition-colors hover:border-[var(--brand-primary)]"
            >
              <h3 className="font-semibold text-lg text-[var(--brand-dark)] flex items-center justify-between">
                {l.title}
                <ArrowRight className="w-4 h-4 text-[var(--brand-primary)] transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {l.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
