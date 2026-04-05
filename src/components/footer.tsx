import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, ExternalLink, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[var(--brand-light)] to-white border-t mt-20">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-4 space-y-5">
            <Image
              src="/logo.svg"
              alt="Ezgi Evgin Aktaş - Beslenme ve Diyet Danışmanlığı"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Eryaman ve Etimesgut merkezli; online ve yüz yüze beslenme
              danışmanlığı, kilo yönetimi ve sürdürülebilir yaşam odaklı
              diyetisyen hizmeti.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Ankara / Etimesgut - Eryaman
            </div>
            <div className="flex space-x-3">
              <Link
                href="https://instagram.com/dyt_ezgievgin"
                target="_blank"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimda"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Online Programlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4">Sistem Özellikleri</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Haftada 1 Görüşme
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Devamlı Online Takip
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mobil Uygulama Üzerinden Süreç Yönetimi
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Öğün Hatırlatıcı ve Bildirimler
                </Link>
              </li>
              <li>
                <Link
                  href="/hesaplayicilar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Grafiksel Kilo ve Aktivite Takibi
                </Link>
              </li>
              <li>
                <Link
                  href="/eryaman-diyetisyen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Eryaman Diyetisyen
                </Link>
              </li>
              <li>
                <Link
                  href="/ankara-kilo-verme-diyetisyen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ankara Kilo Verme
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border bg-white/80 p-5 space-y-4">
              <h4 className="font-semibold">İletişim & Yorumlar</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Phone size={16} />
                  <a
                    href="tel:+905462650440"
                    className="hover:text-primary transition-colors"
                  >
                    0546 265 04 40
                  </a>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Mail size={16} />
                  <a
                    href="mailto:info@ezgievginaktas.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@ezgievginaktas.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    DoktorTakvimi Profili
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Diyetisyen+Ezgi+Evgin/@39.9669753,32.6332346,17z/data=!3m1!4b1!4m6!3m5!1s0x14d330d2f71d4659:0x83b8bf59458d8408!8m2!3d39.9669753!4d32.6358095!16s%2Fg%2F11dymr8nhs?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    Google&apos;da Yorum Yap
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ezgi Evgin Aktaş. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/kvkk"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                KVKK
              </Link>
              <Link
                href="/gizlilik-politikasi"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kullanim-sartlari"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
