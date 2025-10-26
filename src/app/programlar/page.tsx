"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/image-slider";
import { placeholderImages } from "@/lib/placeholder-images";
import { Check, MessageCircle, Clock, Users, Star } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "10 Günlük Roket Program",
    slug: "10-gunluk-roket-program",
    description:
      "Hızlı sonuç almak isteyenler için özel tasarlanmış yoğun diyet programı.",
    longDescription:
      "Kısa sürede etkili sonuçlar elde etmek isteyenler için ideal bir program. Metabolizmanızı hızlandıran, detoks etkisi yaratan ve enerji seviyenizi artıran bilimsel temelli beslenme planı.",
    duration: "10 Gün",
    ideal: "Hızlı kilo vermek isteyenler için",
    features: [
      "Kişiye özel 10 günlük diyet programı",
      "Günlük öğün planlaması",
      "Alışveriş listesi",
      "WhatsApp destek",
      "Hızlı sonuç garantisi",
      "Detoks etkisi",
    ],
    badge: "Popüler",
    gradient: "from-pink-500 to-rose-500",
    whatsappMessage:
      "Merhaba, 10 Günlük Roket Program hakkında detaylı bilgi almak istiyorum.",
  },
  {
    id: 2,
    name: "2 Diyet + 2 Motivasyon Görüşmesi (2D2M)",
    slug: "2d2m-danismanlik",
    description:
      "Dengeli bir süreç için 2 diyet programı ve 2 motivasyon görüşmesi içeren paket.",
    longDescription:
      "Orta vadeli hedefleriniz için tasarlanmış, hem beslenme programı hem de psikolojik destek içeren kapsamlı paket. Motivasyon görüşmeleriyle süreç boyunca yanınızdayız.",
    duration: "60 Gün",
    ideal: "Dengeli kilo verme süreçleri için",
    features: [
      "2 kişiye özel diyet programı",
      "2 online motivasyon görüşmesi",
      "60 günlük detaylı takip",
      "Haftalık WhatsApp desteği",
      "Vücut ölçüm takibi",
      "Beslenme eğitimi",
    ],
    badge: "En Çok Tercih Edilen",
    gradient: "from-cyan-500 to-blue-500",
    whatsappMessage:
      "Merhaba, 2D2M Danışmanlık paketi hakkında detaylı bilgi almak istiyorum.",
  },
  {
    id: 3,
    name: "4 Diyet Danışmanlığı (4D)",
    slug: "4d-danismanlik",
    description:
      "Kapsamlı takip ve düzenli görüşmelerle uzun vadeli, kalıcı sonuçlar.",
    longDescription:
      "Yaşam tarzı değişikliği yapmak ve kalıcı sonuçlar elde etmek isteyenler için en kapsamlı programımız. 4 aylık süreçte düzenli görüşmeler ve profesyonel takip.",
    duration: "120 Gün",
    ideal: "Kalıcı sonuçlar isteyenler için",
    features: [
      "4 kişiye özel diyet programı",
      "4 online görüşme (30'ar dakika)",
      "120 günlük kapsamlı takip",
      "Sınırsız WhatsApp desteği",
      "Detaylı vücut analizi",
      "Egzersiz önerileri",
      "Aylık değerlendirme raporları",
    ],
    badge: "Uzun Vadeli",
    gradient: "from-purple-500 to-indigo-500",
    whatsappMessage:
      "Merhaba, 4 Diyet Danışmanlığı paketi hakkında detaylı bilgi almak istiyorum.",
  },
  {
    id: 4,
    name: "Sürdürülebilir Yaşam Paketi",
    slug: "surdurulebilir-yasam",
    description:
      "Yaşam tarzı değişikliği için kapsamlı beslenme koçluğu programı.",
    longDescription:
      "Sadece kilo vermek değil, yaşam tarzınızı tamamen değiştirmek isteyenler için premium paketimiz. Alışkanlık koçluğu, psikolojik destek ve sürdürülebilir beslenme planıyla hayatınızı dönüştürün.",
    duration: "Kişiye Özel",
    ideal: "Yaşam tarzı değişikliği isteyenler için",
    features: [
      "Kişiye özel yaşam planı",
      "Sürdürülebilir beslenme programı",
      "Alışkanlık koçluğu",
      "Aylık düzenli görüşmeler",
      "Sınırsız WhatsApp desteği",
      "Psikolojik destek",
      "Stres yönetimi teknikleri",
      "Yaşam boyu beslenme rehberi",
    ],
    badge: "Premium",
    gradient: "from-green-500 to-emerald-500",
    whatsappMessage:
      "Merhaba, Sürdürülebilir Yaşam Paketi hakkında detaylı bilgi almak istiyorum.",
  },
];

function ProgramCard({ program }: { program: (typeof programs)[0] }) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(program.whatsappMessage);
    window.open(`https://wa.me/905333104970?text=${message}`, "_blank");
  };

  return (
    <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5`}
      />

      <div className="relative z-10 p-8 space-y-6">
        {/* Header */}
        <div>
          <Badge className="mb-3">{program.badge}</Badge>
          <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
          <p className="text-muted-foreground">{program.description}</p>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 py-4 border-y">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{program.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-secondary" />
            <span className="text-sm">{program.ideal}</span>
          </div>
        </div>

        {/* Long Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {program.longDescription}
        </p>

        {/* Features */}
        <div>
          <h4 className="font-semibold mb-3">Paket İçeriği:</h4>
          <ul className="space-y-2">
            {program.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-[var(--brand-success)] mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white h-12 text-base font-semibold"
          size="lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp'tan Bilgi Al & Kayıt Ol
        </Button>
      </div>
    </Card>
  );
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Online Diyet{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Programlarımız
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Size en uygun programı seçin, sağlıklı yaşam yolculuğunuza hemen
              başlayın. Dünyanın neresinde olursanız olun, uzman diyetisyen
              desteğiyle hedeflerinize ulaşın.
            </p>
          </div>
        </div>
      </section>

      {/* Why Online */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden Online{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Diyet?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Zaman Tasarrufu",
                description: "Evden çıkmadan randevu alın",
              },
              {
                icon: Users,
                title: "Esnek Program",
                description: "Size uygun saatlerde görüşmeler",
              },
              {
                icon: Star,
                title: "Sürekli Destek",
                description: "WhatsApp ile 7/24 iletişim",
              },
              {
                icon: MessageCircle,
                title: "Her Yerden",
                description: "Dünyanın her yerinden erişim",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gradient-to-br from-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-4xl mx-auto">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hala Kararsız Mısınız?
            </h2>
            <p className="text-lg text-white/90">
              Size en uygun programı seçmenizde yardımcı olalım. WhatsApp
              üzerinden ücretsiz danışmanlık alın!
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/905333104970?text=Merhaba, hangi programın bana uygun olduğu konusunda yardım almak istiyorum.",
                  "_blank"
                )
              }
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold h-14 px-10 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ücretsiz Danışmanlık Al
            </Button>
          </div>
        </div>
      </section>

      {/* Program Sonuçları */}
      <ImageSlider
        images={placeholderImages.programResults}
        title="Program Sonuçları"
        autoplay={true}
        autoplayInterval={5500}
      />
    </div>
  );
}
