export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  backgroundGradient: string;
  backgroundImage?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı ile Kişiye Özel Beslenme",
    description:
      "Fonksiyonel tıp diyetisyeni Ezgi Evgin olarak Ankara Eryaman ofisinde bedeninize, tahlillerinize ve yaşam düzeninize uygun kalıcı planlar sunuyorum.",
    backgroundGradient: "from-pink-600/70 via-rose-700/70 to-pink-900/70",
    backgroundImage: "/images/instagram/posts/clinic-01.jpeg",
  },
  {
    id: 2,
    title: "Danışan Portalı ve Sürekli Diyetisyen Desteği",
    description:
      "Nerede olursanız olun mesajlaşma, öğün geri bildirimi ve hatırlatmalarla süreç kopmadan ilerler. Haftalık görüşmelerle planınız güncellenir.",
    backgroundGradient: "from-cyan-700/70 via-teal-800/70 to-cyan-900/70",
    backgroundImage: "/images/instagram/posts/clinic-03.jpeg",
  },
  {
    id: 3,
    title: "Kalıcı Alışkanlık ve Kilo Yönetimi",
    description:
      "Hızlı çözüm yerine yaşam tarzınıza uyumlu beslenme. Kişiye özel diyet programları ve uzman rehberliğiyle hedeflerinize güvenle yaklaşın.",
    backgroundGradient: "from-fuchsia-700/70 via-purple-800/70 to-pink-900/70",
    backgroundImage: "/images/instagram/posts/clinic-06.jpeg",
  },
  {
    id: 4,
    title: "Uygulama ile Takip: Diyet, Grafik, Bildirimler",
    description:
      "Danışan portalında planlarınız, mesajlarınız ve gelişim grafikleriniz tek yerde. Sürecin her aşamasında yanınızdayız.",
    backgroundGradient: "from-blue-700/70 via-indigo-800/70 to-blue-900/70",
    backgroundImage: "/images/instagram/posts/clinic-02.jpeg",
  },
  {
    id: 5,
    title: "Klinikte Yüz Yüze Danışmanlık",
    description:
      "Eryaman ofisinde ölçü, değerlendirme ve birebir beslenme planlaması.",
    backgroundGradient: "from-emerald-700/70 via-teal-800/70 to-cyan-900/70",
    backgroundImage: "/images/instagram/posts/clinic-04.jpeg",
  },
  {
    id: 6,
    title: "Süreç İçi Destek ve Motivasyon",
    description:
      "Hedefe giden yolda düzenli iletişim, öğün geri bildirimi ve kişiye özel ayarlamalarla ilerleyin.",
    backgroundGradient: "from-rose-700/70 via-pink-800/70 to-fuchsia-900/70",
    backgroundImage: "/images/instagram/posts/clinic-05.jpeg",
  },
];

export const aboutPageSliderImages = Array.from(
  new Set([
    ...heroSlides.map((s) => s.backgroundImage).filter(Boolean) as string[],
    "/images/clinic/tgrt-haber-ornek-menu.jpg",
    "/images/clinic/tgrt-haber-ornek-ogun.jpg",
    "/images/clinic/basina-demec-verirken.jpg",
    "/images/clinic/ilkokul-cocuklari-beslenme-egitimi.jpg",
    "/images/clinic/okullarda-egitim.jpg",
    "/images/clinic/kamu-kurumlari-dengeli-beslenme-egitimi.jpg",
    "/images/clinic/saglik-beslenme-egitimi.jpg",
    "/images/clinic/egitim-verirken.jpg",
    "/images/clinic/kamu-kurumlari-egitimi.jpg",
    "/images/clinic/egitimde.jpg",
    "/images/instagram/posts/post-09.jpeg",
    "/images/instagram/posts/post-07.jpeg",
    "/images/instagram/posts/post-04.jpeg",
    "/images/instagram/posts/post-01.jpeg",
  ])
);
