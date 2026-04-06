"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OnlineSupportFeatures } from "@/components/online-support-features";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Smartphone,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const iletisimWhatsappUrl = buildWhatsAppApiUrl("Merhaba", "iletisim_card");

export default function ContactPage() {
  const googleMapsPlaceUrl =
    "https://www.google.com/maps/place/Diyetisyen+Ezgi+Evgin/@39.9669753,32.6332346,17z/data=!3m1!4b1!4m6!3m5!1s0x14d330d2f71d4659:0x83b8bf59458d8408!8m2!3d39.9669753!4d32.6358095!16s%2Fg%2F11dymr8nhs?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "0546 265 04 40",
      link: "tel:+905462650440",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "info@ezgievginaktas.com",
      link: "mailto:info@ezgievginaktas.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Hemen Mesaj Gönder",
      link: iletisimWhatsappUrl,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Eryaman Altay mah. Orhan Bey cad.",
      subtitle: "Atayıldız plaza, no:1/70 kat:8, 06820 Etimesgut/Ankara",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cumartesi",
      subtitle: "09:00 - 18:00",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama",
      value: "Süreci Uygulamadan Takip Et",
      subtitle: "Diyet, öğün, bildirim ve grafiksel gelişim takibi",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              İletişime{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Geçin
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Sorularınız için bize ulaşın. Size yardımcı olmaktan mutluluk
              duyarız!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  if (!info.link) return;
                  if (info.title === "WhatsApp") {
                    trackWhatsAppClick("iletisim_card");
                  }
                  window.open(info.link, "_blank");
                }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.title}
                    </div>
                    <div className="font-semibold">{info.value}</div>
                    {info.subtitle && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {info.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10">
            <OnlineSupportFeatures />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-pink-50 to-white">
                <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
                <p className="text-muted-foreground mb-6">
                  Anında cevap almak için WhatsApp üzerinden bizimle iletişime
                  geçebilirsiniz. Online danışmanlık randevusu almak için de
                  WhatsApp&apos;ı kullanabilirsiniz.
                </p>
                <Button
                  onClick={() => {
                    trackWhatsAppClick("iletisim_cta");
                    window.open(
                      buildWhatsAppApiUrl(
                        "Merhaba, online danışmanlık hakkında bilgi almak istiyorum.",
                        "iletisim_cta"
                      ),
                      "_blank"
                    );
                  }}
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Mesaj Gönder
                </Button>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-cyan-50 to-white">
                <h3 className="text-2xl font-bold mb-4">
                  Sıkça Sorulan Sorular
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-1">
                      Online danışmanlık nasıl yapılıyor?
                    </div>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp veya Zoom üzerinden görüntülü veya sesli görüşme
                      yaparak danışmanlık veriyoruz.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      Program ne kadar sürede hazırlanır?
                    </div>
                    <p className="text-sm text-muted-foreground">
                      İlk görüşmeden sonra 24-48 saat içinde kişiye özel
                      programınız hazırlanır.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      Ödeme nasıl yapılıyor?
                    </div>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp üzerinden görüştükten sonra banka havalesi veya
                      EFT ile ödeme yapabilirsiniz.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
                <h3 className="text-2xl font-bold mb-4">
                  <MapPin className="inline w-6 h-6 mr-2 text-orange-600" />
                  Ofis Adresimiz
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Ezgi Evgin Beslenme ve Diyet Danışmanlığı
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Eryaman Altay mah. Orhan Bey cad.
                      <br />
                      Atayıldız plaza, no:1/70 kat:8
                      <br />
                      06820 Etimesgut/Ankara, Türkiye
                    </p>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="relative w-full h-64 rounded-xl overflow-hidden border-2 border-orange-100 shadow-md">
                    <iframe
                      src="https://www.google.com/maps?q=39.9669753,32.6358095&z=17&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ezgi Evgin Beslenme ve Diyet Danışmanlığı - Ofis Konumu"
                      className="absolute inset-0"
                    ></iframe>
                  </div>

                  <a
                    href={googleMapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    Google Maps&apos;te Aç
                  </a>

                  <p className="text-sm text-muted-foreground">
                    💡 Online danışmanlık hizmeti de veriyoruz. Dünyanın her
                    yerinden bize ulaşabilirsiniz!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
