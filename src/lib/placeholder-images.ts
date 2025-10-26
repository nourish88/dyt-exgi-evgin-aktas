// Placeholder images for slider
export const placeholderImages = {
  // Ana sayfa - Başarı hikayeleri
  successStories: [
    "/api/placeholder/800/600?text=A&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=B&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=C&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=D&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=E&bg=1A2332&color=white",
  ],

  // Hakkımda - Çalışmalarımızdan kareler
  workGallery: [
    "/api/placeholder/800/600?text=1&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=2&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=3&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=4&bg=FFB3D9&color=1A2332",
  ],

  // Programlar - Program sonuçları
  programResults: [
    "/api/placeholder/800/600?text=1&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=2&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=3&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=4&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=5&bg=1A2332&color=white",
  ],

  // Blog - Öne çıkan görseller
  featuredImages: [
    "/api/placeholder/800/600?text=A&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=B&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=C&bg=1A2332&color=white",
  ],

  // Tarifler - Lezzetli anlarımız
  recipeMoments: [
    "/api/placeholder/800/600?text=1&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=2&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=3&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=4&bg=E91E8C&color=white",
  ],

  // Hesaplayıcılar - Dönüşüm hikayeleri
  transformationStories: [
    "/api/placeholder/800/600?text=A&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=B&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=C&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=D&bg=1A2332&color=white",
  ],

  // İletişim - Bize katılanlar
  communityMembers: [
    "/api/placeholder/800/600?text=1&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=2&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=3&bg=FFB3D9&color=1A2332",
  ],
};

// Fallback: Gradient backgrounds with letters
export const createPlaceholderImage = (letter: string, index: number) => {
  const gradients = [
    "from-pink-400 to-rose-500",
    "from-blue-600 to-indigo-800",
    "from-pink-300 to-purple-400",
    "from-rose-400 to-pink-500",
    "from-indigo-600 to-blue-800",
  ];

  return {
    src: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#E91E8C;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1A2332;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#grad)"/>
        <text x="400" y="300" font-family="Arial, sans-serif" font-size="120" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.8">${letter}</text>
      </svg>
    `)}`,
    alt: `Placeholder image ${letter}`,
  };
};
