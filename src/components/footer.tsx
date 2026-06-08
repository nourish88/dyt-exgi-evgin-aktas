import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, ExternalLink, MapPin } from "lucide-react";
import {
  DOKTORTAKVIMI_PROFILE_URL,
  GOOGLE_BUSINESS_REVIEW_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[var(--brand-light)] to-white border-t mt-20">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-3 space-y-5">
            <Image
              src="/ezgi_evgin.png"
              alt="Ezgi Evgin Beslenme ve Diyet Danışmanlığı - Beslenme ve Diyet Danışmanlığı"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Eryaman ve Etimesgut merkezli; online ve yüz yüze beslenme
              danışmanlığı, kilo yönetimi ve sürdürülebilir yaşam odaklı
              diyetisyen hizmeti.
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              Altay Mah. Orhan Bey Cad. Atayıldız No:1, Eryaman / Ankara
            </div>
            <div className="flex space-x-3">
              <Link
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-105 hover:shadow-lg transition-all"
                title="Bizi Instagram'da Takip Edin"
              >
                <Instagram size={20} />
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
                  Sağlıklı Tarifler
                </Link>
              </li>
              <li>
                <Link
                  href="/randevu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Randevu Al
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Takip sistemi — gerçek ürün özellikleri */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Takip sistemi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Haftalık görüşme ve plan güncellemesi
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Online takip ve anlık iletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/mobil-uygulamamiz"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Danışan portalı — telefondan takip
                </Link>
              </li>
              <li>
                <Link
                  href="/programlar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Öğün hatırlatıcı ve bildirimler
                </Link>
              </li>
              <li>
                <Link
                  href="/hesaplayicilar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kilo ve aktivite hesaplayıcıları
                </Link>
              </li>
            </ul>
          </div>

          {/* Yerel bilgi sayfaları — arama için ayrı blok */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Hizmet bölgeleri & bilgi</h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Ankara ve çevrimiçi hizmet hakkında açıklayıcı sayfalar.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/eryaman-diyetisyen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Eryaman diyetisyen tavsiye
                </Link>
              </li>
              <li>
                <Link
                  href="/ankara-kilo-verme-diyetisyen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ankara kilo verme
                </Link>
              </li>
              <li>
                <Link
                  href="/online-diyetisyen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Online diyetisyen
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimda"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Diyetisyen Ezgi Evgin Aktaş
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-3 mt-6">Uzmanlık alanları</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/fonksiyonel-tip-diyetisyeni-ankara"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fonksiyonel tıp diyetisyeni
                </Link>
              </li>
              <li>
                <Link
                  href="/insulin-direnci-diyeti-ankara"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  İnsülin direnci diyeti
                </Link>
              </li>
              <li>
                <Link
                  href="/pcos-diyetisyen-ankara"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  PCOS diyetisyeni
                </Link>
              </li>
              <li>
                <Link
                  href="/hamilelik-beslenmesi-ankara"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hamilelik beslenmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/sporcu-beslenmesi-ankara"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sporcu beslenmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/cocuk-beslenmesi-diyetisyen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Çocuk beslenmesi
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
                    href="mailto:ezgievgin_dytsyn@hotmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    ezgievgin_dytsyn@hotmail.com
                  </a>
                </li>
                <li>
                  <a
                    href={DOKTORTAKVIMI_PROFILE_URL}
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
                    href={GOOGLE_BUSINESS_REVIEW_URL}
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
              © {currentYear} Ezgi Evgin Beslenme ve Diyet Danışmanlığı. Tüm hakları saklıdır.
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
