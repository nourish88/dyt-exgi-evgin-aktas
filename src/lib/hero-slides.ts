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
    backgroundGradient: "from-pink-400 via-rose-500 to-pink-600",
    backgroundImage: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e91e8c;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#f472b6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e91e8c;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad1)"/>
        <circle cx="300" cy="200" r="150" fill="white" opacity="0.1"/>
        <circle cx="1600" cy="800" r="200" fill="white" opacity="0.1"/>
        <circle cx="1000" cy="400" r="100" fill="white" opacity="0.15"/>
      </svg>
    `)}`,
  },
  {
    id: 2,
    title: "Sağlıklı Yaşam Birlikte Başlasın",
    description:
      "Online beslenme danışmanlığı ile dünyanın neresinde olursanız olun, kişiye özel diyet programları ve uzman desteğiyle hedeflerinize ulaşın.",
    backgroundGradient: "from-cyan-400 via-teal-500 to-cyan-600",
    backgroundImage: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#14b8a6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad2)"/>
        <circle cx="400" cy="600" r="180" fill="white" opacity="0.1"/>
        <circle cx="1500" cy="300" r="150" fill="white" opacity="0.1"/>
        <circle cx="800" cy="900" r="120" fill="white" opacity="0.15"/>
      </svg>
    `)}`,
  },
  {
    id: 3,
    title: "Size Özel Beslenme Programları",
    description:
      "Kişiye özel diyet programları ve uzman desteğiyle hedeflerinize ulaşın. Her bireyin ihtiyacı farklıdır, programlarımız da öyle.",
    backgroundGradient: "from-pink-300 via-purple-400 to-pink-500",
    backgroundImage: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f9a8d4;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#c084fc;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad3)"/>
        <circle cx="600" cy="400" r="200" fill="white" opacity="0.1"/>
        <circle cx="1400" cy="700" r="160" fill="white" opacity="0.1"/>
        <circle cx="1100" cy="200" r="130" fill="white" opacity="0.15"/>
      </svg>
    `)}`,
  },
  {
    id: 4,
    title: "Uzman Diyetisyen Rehberliği",
    description:
      "7/24 online destek ve profesyonel takip sistemi. Yolculuğunuzun her anında yanınızdayız, sorularınız için her zaman hazırız.",
    backgroundGradient: "from-blue-500 via-indigo-600 to-blue-700",
    backgroundImage: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a2332;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#4f46e5;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad4)"/>
        <circle cx="350" cy="500" r="170" fill="white" opacity="0.1"/>
        <circle cx="1550" cy="400" r="190" fill="white" opacity="0.1"/>
        <circle cx="900" cy="800" r="140" fill="white" opacity="0.15"/>
      </svg>
    `)}`,
  },
];
