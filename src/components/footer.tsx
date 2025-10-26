import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[var(--brand-light)] to-white border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Ezgi Evgin Aktaş - Beslenme ve Diyet Danışmanlığı"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Uzman diyetisyen ile sağlıklı beslenme ve kilo yönetimi
              programları. Online danışmanlık hizmeti.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/ezgievginaktas"
                target="_blank"
                className="hover:text-[var(--brand-primary)] transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
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
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifler"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tarifler
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  10 Günlük Roket Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  2 Diyet + 2 Motivasyon
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  4 Diyet Danışmanlığı
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sürdürülebilir Yaşam
                </Link>
              </li>
              <li>
                <Link
                  href="/hesaplayicilar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  BMI Hesaplama
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <a
                  href="tel:+905333104970"
                  className="hover:text-primary transition-colors"
                >
                  0533 310 49 70
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
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
