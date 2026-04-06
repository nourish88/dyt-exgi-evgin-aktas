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
];
