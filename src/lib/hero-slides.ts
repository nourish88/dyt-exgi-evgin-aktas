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
    title: "Hayalinizdeki Kiloya Ulaşın",
    description:
      "Bilimsel yöntemler ve özel programlarla kalıcı kilo verme. Sağlıklı ve sürdürülebilir bir yaşam için ilk adımı atın.",
    backgroundGradient: "from-pink-600/70 via-rose-700/70 to-pink-900/70",
    backgroundImage: "/images/instagram/posts/post-01.jpeg",
  },
  {
    id: 2,
    title: "Sağlıklı Yaşam Birlikte Başlasın",
    description:
      "Online beslenme danışmanlığı ile dünyanın neresinde olursanız olun, kişiye özel diyet programları ve uzman desteğiyle hedeflerinize ulaşın.",
    backgroundGradient: "from-cyan-700/70 via-teal-800/70 to-cyan-900/70",
    backgroundImage: "/images/instagram/posts/post-02.jpeg",
  },
  {
    id: 3,
    title: "Size Özel Beslenme Programları",
    description:
      "Kişiye özel diyet programları ve uzman desteğiyle hedeflerinize ulaşın. Her bireyin ihtiyacı farklıdır, programlarımız da öyle.",
    backgroundGradient: "from-fuchsia-700/70 via-purple-800/70 to-pink-900/70",
    backgroundImage: "/images/instagram/posts/post-03.jpeg",
  },
  {
    id: 4,
    title: "Uzman Diyetisyen Rehberliği",
    description:
      "7/24 online destek ve profesyonel takip sistemi. Yolculuğunuzun her anında yanınızdayız, sorularınız için her zaman hazırız.",
    backgroundGradient: "from-blue-700/70 via-indigo-800/70 to-blue-900/70",
    backgroundImage: "/images/instagram/posts/post-04.jpeg",
  },
];
