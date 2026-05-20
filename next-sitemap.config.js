/** @type {import('next-sitemap').IConfig} */
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
  ],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (["/online-diyet-ankara", "/ezgi-evgin-diyetisyen", "/hakkimda", "/programlar", "/randevu"].includes(path)) {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path === "/blog" || path === "/tarifler" || path.startsWith("/blog/")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (["/hesaplayicilar", "/mobil-uygulamamiz", "/iletisim", "/ankara-diyetisyen", "/ankara-kilo-verme-diyetisyen", "/eryaman-diyetisyen"].includes(path)) {
      priority = 0.7;
      changefreq = "monthly";
    } else if (["/gizlilik-politikasi", "/kullanim-sartlari", "/kvkk"].includes(path)) {
      priority = 0.3;
      changefreq = "yearly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
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
