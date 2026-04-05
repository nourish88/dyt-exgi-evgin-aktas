export const placeholderImages = {
  successStories: [
    "/api/placeholder/800/600?text=A&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=B&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=C&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=D&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=E&bg=1A2332&color=white",
  ],
  workGallery: [
    "/api/placeholder/800/600?text=1&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=2&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=3&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=4&bg=FFB3D9&color=1A2332",
  ],
  programResults: [
    "/api/placeholder/800/600?text=1&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=2&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=3&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=4&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=5&bg=1A2332&color=white",
  ],
  featuredImages: [
    "/api/placeholder/800/600?text=A&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=B&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=C&bg=1A2332&color=white",
  ],
  recipeMoments: [
    "/api/placeholder/800/600?text=1&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=2&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=3&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=4&bg=E91E8C&color=white",
  ],
  transformationStories: [
    "/api/placeholder/800/600?text=A&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=B&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=C&bg=FFB3D9&color=1A2332",
    "/api/placeholder/800/600?text=D&bg=1A2332&color=white",
  ],
  communityMembers: [
    "/api/placeholder/800/600?text=1&bg=E91E8C&color=white",
    "/api/placeholder/800/600?text=2&bg=1A2332&color=white",
    "/api/placeholder/800/600?text=3&bg=FFB3D9&color=1A2332",
  ],
};

export const createPlaceholderImage = (letter: string) => {
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
