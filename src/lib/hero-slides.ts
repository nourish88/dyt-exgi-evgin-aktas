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
    title: "Ankara, Eryaman ve Türkiye Genelinde Kişiye Özel Beslenme",
    description:
      "Yüz yüze (Etimesgut–Eryaman) veya online diyet ile hedefinize uygun, uygulanabilir planlar. Aç kalmadan sürdürülebilir adımlar ve uygulama üzerinden düzenli takip.",
    backgroundGradient: "from-pink-600/70 via-rose-700/70 to-pink-900/70",
    backgroundImage: "/images/instagram/posts/clinic-01.jpeg",
  },
  {
    id: 2,
    title: "Online Diyet ve Anlık Diyetisyen Desteği",
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
      "Eryaman–Etimesgut bölgesinde ofis ortamında ölçü, değerlendirme ve birebir beslenme planlaması.",
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

/** Hakkımda sayfası küçük çerçeveli galeri — klinik + ofis görselleri */
export const aboutPageSliderImages = Array.from(
  new Set([
    ...heroSlides.map((s) => s.backgroundImage).filter(Boolean) as string[],
    "/images/instagram/posts/post-09.jpeg",
    "/images/instagram/posts/post-07.jpeg",
    "/images/instagram/posts/post-04.jpeg",
    "/images/instagram/posts/post-01.jpeg",
  ])
);
