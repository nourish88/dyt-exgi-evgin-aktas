/** @type {import('next-sitemap').IConfig} */

// Sayfa bazlı priority/changefreq override haritası.
// Burada listelenmeyen sayfalar default'a düşer (0.7 / weekly).
const PAGE_PRIORITY_MAP = {
  "/": { priority: 1.0, changefreq: "weekly" },
  // En kritik organik sayfalar (homepage + uzman + ana hizmet)
  "/online-diyet-ankara": { priority: 0.9, changefreq: "monthly" },
  "/ezgi-evgin-diyetisyen": { priority: 0.9, changefreq: "monthly" },
  "/hakkimda": { priority: 0.9, changefreq: "monthly" },
  "/programlar": { priority: 0.9, changefreq: "monthly" },
  "/randevu": { priority: 0.9, changefreq: "monthly" },
  // Yerel SEO ve ikincil hizmet sayfaları
  "/eryaman-diyetisyen": { priority: 0.85, changefreq: "monthly" },
  "/etimesgut-diyetisyen": { priority: 0.85, changefreq: "monthly" },
  "/sincan-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  "/cankaya-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  "/yenimahalle-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  "/batikent-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  "/ankara-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  "/ankara-kilo-verme-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  // Yeni uzmanlık sayfaları — eklendikçe burada da yer alacak
  "/insulin-direnci-diyeti-ankara": { priority: 0.8, changefreq: "monthly" },
  "/pcos-diyetisyen-ankara": { priority: 0.8, changefreq: "monthly" },
  "/hamilelik-beslenmesi-ankara": { priority: 0.8, changefreq: "monthly" },
  "/sporcu-beslenmesi-ankara": { priority: 0.8, changefreq: "monthly" },
  "/cocuk-beslenmesi-diyetisyen": { priority: 0.8, changefreq: "monthly" },
  // Servis sayfaları
  "/mobil-uygulamamiz": { priority: 0.7, changefreq: "monthly" },
  "/iletisim": { priority: 0.7, changefreq: "monthly" },
  // Blog / araç sayfaları
  "/blog": { priority: 0.8, changefreq: "weekly" },
  "/tarifler": { priority: 0.8, changefreq: "weekly" },
  "/hesaplayicilar": { priority: 0.7, changefreq: "monthly" },
  // Yasal sayfalar
  "/gizlilik-politikasi": { priority: 0.3, changefreq: "yearly" },
  "/kullanim-sartlari": { priority: 0.3, changefreq: "yearly" },
  "/kvkk": { priority: 0.3, changefreq: "yearly" },
};

// Build-time lastmod — deploy anındaki tarih.
// İdeal çözüm her sayfa için git log'tan lastmod almak, ancak deploy-time'ı
// tek sefer üretmek her sayfada aynı dakika dondurarak Google'a temiz bir
// "deployment" sinyali verir. Her deploy'da yenilenir.
const BUILD_LASTMOD = new Date().toISOString();

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ezgievginaktas.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  trailingSlash: false,
  exclude: [
    "/admin",
    "/admin/*",
    "/api/*",
    "/server-sitemap.xml",
    "/blog/[slug]",
    "/tarifler/[slug]",
  ],
  transform: async (config, path) => {
    const override = PAGE_PRIORITY_MAP[path];
    let priority = override?.priority ?? 0.7;
    let changefreq = override?.changefreq ?? "weekly";

    if (path.startsWith("/blog/") && path !== "/blog") {
      priority = 0.7;
      changefreq = "monthly";
    } else if (path.startsWith("/tarifler/") && path !== "/tarifler") {
      priority = 0.6;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: BUILD_LASTMOD,
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      (process.env.NEXT_PUBLIC_SITE_URL || "https://ezgievginaktas.com") +
        "/server-sitemap.xml",
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
  },
};
