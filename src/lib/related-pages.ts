// Blog yazısının kategorisine göre, kullanıcıyı hangi hizmet/landing
// sayfasına yönlendireceğimizi belirleyen iç linkleme haritası.
//
// Amaç: blog yazıları (yüksek arama hacmi olan ama dönüşüm oranı düşük
// içerikler) -> hizmet sayfalarına link juice + kullanıcı akışı sağlamak.
//
// Her kategori, en alakalı 4-5 hizmet/uzmanlık sayfasına yönlendirilir.

export type RelatedPage = {
  href: string;
  label: string;
  /** Kısa, açıklayıcı badge metni (opsiyonel) */
  hint?: string;
};

// Tüm hizmet sayfaları için tek kaynaklı tanım — kategorilerde tekrar tekrar
// yazmayı önler ve typo riskini azaltır.
export const SERVICE_PAGES = {
  onlineDiyet: {
    href: "/online-diyetisyen",
    label: "Online Diyetisyen",
    hint: "Kişiye özel uzaktan takip",
  },
  eryaman: {
    href: "/eryaman-diyetisyen",
    label: "Eryaman Diyetisyen",
    hint: "Yüz yüze · Optimum AVM karşısı",
  },
  ankaraGenel: {
    href: "/",
    label: "Ankara Diyetisyen",
    hint: "Genel beslenme danışmanlığı",
  },
  kiloVerme: {
    href: "/ankara-kilo-verme-diyetisyen",
    label: "Kilo Verme Diyetisyeni",
    hint: "Kalıcı kilo yönetimi",
  },
  randevu: { href: "/randevu", label: "Randevu Al" },
  hesaplayicilar: {
    href: "/hesaplayicilar",
    label: "BMI & Kalori Hesapla",
    hint: "Ücretsiz araçlar",
  },
  ezgi: {
    href: "/hakkimda",
    label: "Dyt. Ezgi Evgin Aktaş",
    hint: "Hakkımda · uzman tanıtım",
  },
  // Uzmanlık sayfaları (henüz yayında olmayanlar yayına alındığında çalışacak)
  fonksiyonelTip: {
    href: "/fonksiyonel-tip-diyetisyeni-ankara",
    label: "Fonksiyonel Tıp Diyetisyeni",
    hint: "Bütüncül beslenme tedavisi",
  },
  insulinDirenci: {
    href: "/insulin-direnci-diyeti-ankara",
    label: "İnsülin Direnci Diyeti",
    hint: "Tanı sonrası beslenme planı",
  },
  pcos: {
    href: "/pcos-diyetisyen-ankara",
    label: "PCOS & Beslenme",
    hint: "Hormon dostu öğün düzeni",
  },
  hamilelik: {
    href: "/hamilelik-beslenmesi-ankara",
    label: "Hamilelik Beslenmesi",
    hint: "Trimester bazlı plan",
  },
  sporcu: {
    href: "/sporcu-beslenmesi-ankara",
    label: "Sporcu Beslenmesi",
    hint: "Performans & kompozisyon",
  },
  cocuk: {
    href: "/cocuk-beslenmesi-diyetisyen",
    label: "Çocuk Beslenmesi",
    hint: "Yaşa uygun, baskısız",
  },
  tarifler: { href: "/tarifler", label: "Sağlıklı Tarifler" },
} as const satisfies Record<string, RelatedPage>;

// Admin'deki kategori değerleriyle birebir eşleşmelidir.
// (bkz. src/components/admin/blog-form.tsx → CATEGORIES)
const CATEGORY_MAP: Record<string, RelatedPage[]> = {
  "Kilo Yönetimi": [
    SERVICE_PAGES.kiloVerme,
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.eryaman,
    SERVICE_PAGES.hesaplayicilar,
  ],
  Beslenme: [
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.ankaraGenel,
    SERVICE_PAGES.eryaman,
    SERVICE_PAGES.hesaplayicilar,
  ],
  Tarifler: [
    SERVICE_PAGES.tarifler,
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.hesaplayicilar,
  ],
  "Sağlıklı Yaşam": [
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.ankaraGenel,
    SERVICE_PAGES.eryaman,
    SERVICE_PAGES.ezgi,
  ],
  "Spor Beslenmesi": [
    SERVICE_PAGES.sporcu,
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.eryaman,
    SERVICE_PAGES.hesaplayicilar,
  ],
  "Diyet İpuçları": [
    SERVICE_PAGES.kiloVerme,
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.hesaplayicilar,
    SERVICE_PAGES.eryaman,
  ],
  "Çocuk Beslenmesi": [
    SERVICE_PAGES.cocuk,
    SERVICE_PAGES.eryaman,
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.ezgi,
  ],
  "Gebelik Beslenmesi": [
    SERVICE_PAGES.hamilelik,
    SERVICE_PAGES.eryaman,
    SERVICE_PAGES.onlineDiyet,
    SERVICE_PAGES.ezgi,
  ],
};

// Fallback — bilinmeyen kategoriler için makul bir hub-spoke set.
const DEFAULT_RELATED: RelatedPage[] = [
  SERVICE_PAGES.onlineDiyet,
  SERVICE_PAGES.eryaman,
  SERVICE_PAGES.ankaraGenel,
  SERVICE_PAGES.randevu,
  SERVICE_PAGES.ezgi,
];

/**
 * Blog yazısının kategorisine göre alakalı hizmet/landing sayfalarını döner.
 * Hiç eşleşme yoksa makul bir varsayılan set döner.
 */
export function getRelatedPagesForCategory(category: string): RelatedPage[] {
  return CATEGORY_MAP[category] ?? DEFAULT_RELATED;
}

/**
 * Etiketlere göre özel öneriler. Etiket bazlı eşleşme kategori eşleşmesinin
 * üstüne eklenir (tekilleştirilir) — daha hedefli iç linkleme sağlar.
 */
const TAG_HINTS: Record<string, RelatedPage> = {
  "insülin direnci": SERVICE_PAGES.insulinDirenci,
  "insulin direnci": SERVICE_PAGES.insulinDirenci,
  pcos: SERVICE_PAGES.pcos,
  hamilelik: SERVICE_PAGES.hamilelik,
  "hamile beslenmesi": SERVICE_PAGES.hamilelik,
  emzirme: SERVICE_PAGES.hamilelik,
  sporcu: SERVICE_PAGES.sporcu,
  "kas kazanımı": SERVICE_PAGES.sporcu,
  çocuk: SERVICE_PAGES.cocuk,
  ergen: SERVICE_PAGES.cocuk,
  kilo: SERVICE_PAGES.kiloVerme,
  "kilo verme": SERVICE_PAGES.kiloVerme,
  online: SERVICE_PAGES.onlineDiyet,
  eryaman: SERVICE_PAGES.eryaman,
  ankara: SERVICE_PAGES.ankaraGenel,
  fonksiyonel: SERVICE_PAGES.fonksiyonelTip,
  "fonksiyonel tıp": SERVICE_PAGES.fonksiyonelTip,
  bütüncül: SERVICE_PAGES.fonksiyonelTip,
  butuncul: SERVICE_PAGES.fonksiyonelTip,
  eliminasyon: SERVICE_PAGES.fonksiyonelTip,
};

export function getRelatedPagesForPost(
  category: string,
  tags: string[] = [],
  limit = 6
): RelatedPage[] {
  const fromCategory = getRelatedPagesForCategory(category);
  const fromTags: RelatedPage[] = [];

  for (const t of tags) {
    const hint = TAG_HINTS[t.trim().toLowerCase()];
    if (hint) fromTags.push(hint);
  }

  const seen = new Set<string>();
  const merged: RelatedPage[] = [];
  for (const p of [...fromTags, ...fromCategory]) {
    if (seen.has(p.href)) continue;
    seen.add(p.href);
    merged.push(p);
    if (merged.length >= limit) break;
  }
  return merged;
}
