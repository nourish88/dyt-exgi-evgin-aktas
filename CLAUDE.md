# CLAUDE.md

Dyt. Ezgi Evgin Aktaş — Ankara merkezli diyetisyen sitesi. Next.js 16 (App Router) + TypeScript + Tailwind + Prisma (PostgreSQL) + NextAuth + Vercel Blob.

## İletişim dili

- Kullanıcıyla **Türkçe** konuş. Açıklamalar, sorular, commit mesajlarının özeti — hepsi Türkçe.
- Kod içeriği (değişken/fonksiyon adları, identifier'lar) İngilizce kalır. Kullanıcıya görünen UI metni Türkçe.
- Commit/PR başlığı İngilizce olabilir (mevcut git history böyle).

## Mimari kısayollar

- **Yazı tipleri (content):** `BlogPost`, `Recipe`, `InstagramPost`, `SiteImage` — hepsi Prisma'da. CRUD server action olarak [src/lib/actions/](src/lib/actions/) altında.
- **Admin paneli:** [src/app/admin/(protected)/](<src/app/admin/(protected)/>) — NextAuth ile korunuyor ([src/lib/auth.ts](src/lib/auth.ts)). Tek admin var, env'den (`ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`).
- **Public içerik sayfaları:** `/blog`, `/blog/[slug]`, `/tarifler`, `/tarifler/[slug]` — DB'den okur, statik değil.
- **Yerel SEO sayfaları:** Ankara semt isimleri (cankaya, eryaman, batikent, yenimahalle, sincan, vb.) → her biri ayrı landing page. **Cannibalization'a dikkat:** semt sayfaları birbirine çok benzemesin, her sayfanın kendi semt-özel sinyali olsun (geo koordinat, adres, semt-spesifik içerik).

## Görseller — ÖNEMLİ

- Yeni içerik görselleri (blog, tarif, instagram, site image) **her zaman Vercel Blob'a** yüklenir, repo'ya commit edilmez.
- Upload yolu: [src/components/admin/image-upload.tsx](src/components/admin/image-upload.tsx) → `/api/admin/upload` ([src/app/api/admin/upload/route.ts](src/app/api/admin/upload/route.ts)) → `@vercel/blob` `put()`.
- Form'larda `<input type="text" name="image">` ile düz URL inputu **kullanma**. Onun yerine `ImageUpload` bileşenini kullan ve `name="image"` hidden input'a state'i bağla (örnek: [src/components/admin/blog-form.tsx](src/components/admin/blog-form.tsx), [src/components/admin/recipe-form.tsx](src/components/admin/recipe-form.tsx)).
- Render tarafı `<img src={...image}>` — Blob URL'leri absolute, ekstra işleme gerek yok. `absoluteImageUrl` helper'ı sadece OG/JSON-LD için relative path'leri tamamlar.
- [public/images/](public/images/) altındaki dosyalar **legacy** — yeni içerik için oraya dosya ekleme. Mevcut referansları görürsen Blob'a migrate etmeyi öner.

## SEO — bilinen kurallar

- Her sayfanın kendi `metadata`, OpenGraph ve canonical URL'i olmalı.
- Yerel SEO landing'lerine breadcrumb JSON-LD ([src/components/breadcrumb-jsonld.tsx](src/components/breadcrumb-jsonld.tsx)) ve dahili linkler ekli — yeni semt sayfası eklerken aynı pattern.
- Sahte testimonial, sahte sertifika/iddia yazma. Geçmişte (`eryaman` sayfası) e-fatura iddiası ve fake yorumlar temizlendi.
- Sitemap otomatik üretiliyor: `next-sitemap` + [src/app/server-sitemap.xml/route.ts](src/app/server-sitemap.xml/route.ts) (dinamik içerik için).

## Veritabanı işleri

- Prisma client: [src/lib/prisma.ts](src/lib/prisma.ts) — singleton.
- Lokal'de DB'ye yazan tek seferlik script yazmak yerine, mümkünse `/api/admin/...` altında auth'lu bir endpoint kur ve kullanıcıdan production'da bir kez tetiklemesini iste. Sebep: `BLOB_READ_WRITE_TOKEN` ve `DATABASE_URL` lokal `.env`'de placeholder (`************`), gerçek değerler Vercel env'inde.
- Migration script'i şart olduğunda `scripts/` altına koy ve `npx tsx scripts/...` ile çalışır olsun.

## Komutlar

- `npm run dev` — Turbopack ile dev server
- `npm run build` — `prisma generate && next build && next-sitemap`
- `npm run lint` — ESLint
- Test runner yok; UI/feature doğrulaması admin paneli + tarayıcıdan manuel.

## Çalışma stili (kullanıcı tercihleri)

- Açıklama isteyince **kısa** cevap ver; gereksiz özet/tekrar yapma.
- Form/UI değişikliğinde mevcut bileşen pattern'lerini (örn. `ImageUpload`, blog-form yapısı) yeniden kullan — yeni soyutlama uydurma.
- Risky/destructive bir şey yapmadan (force push, dosya silme, prod DB'ye yazma) onay iste.
- Push isteyince commit + push'u tek hamlede yap, sonra commit hash'ini dön.

# CLAUDE.md — ezgievginaktas.com

Bu dosya, bu repoda çalışan Claude Code (ve diğer AI ajanları) için bağlayıcı kurallardır. **Organik arama trafiği ve yerel SEO** bu projenin birincil iş hedefidir. Bir kural SEO, Core Web Vitals, yerel sıralama veya erişilebilirliği bozma riski taşıyorsa uygulanmaz; durum kullanıcıya bildirilir.

---

## 1. Proje Kimliği & Sabitler

Tek doğruluk kaynağı — bu değerler `src/lib/site.ts` içinde tutulur, her yerde oradan import edilir.

```ts
SITE_NAME       = "Ezgi Evgin Beslenme ve Diyet Danışmanlığı"
PRACTITIONER    = "Dyt. Ezgi Evgin Aktaş"            // Diyetisyen / Beslenme Uzmanı
SITE_URL        = "https://ezgievginaktas.com"
LOCALE          = "tr_TR"                            // tek dil — şu an i18n yok
SCHEMA_TYPE     = "Dietitian"                         // Schema.org: LocalBusiness + MedicalBusiness alt tipi

PHONE           = "+905462650440"                    // görünen: 0546 265 04 40
WHATSAPP        = "905462650440"
EMAIL           = "ezgievgin_dytsyn@hotmail.com"

ADDRESS         = "Altay Mah. Orhan Bey Cad. Atayıldız No:1, Eryaman / Ankara"
LANDMARK        = "Atayıldız Plaza (Optimum AVM karşısı)"
GEO_LAT         = 39.9669753
GEO_LNG         = 32.6358095
REGION_CODE     = "TR-06"                            // Ankara

# Profiller / sameAs
INSTAGRAM       = "https://www.instagram.com/dyt_ezgievgin/"
DOKTORTAKVIMI   = "https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
GOOGLE_REVIEW   = "https://g.page/r/CQiEjUVZv7iDEBM/review"
CLIENT_PORTAL   = "https://diet-six.vercel.app/login"   # harici — dış uygulama
GSC_VERIFY      = "Q3VVByxsORC_2cAitdb6jxy1hIkv864O4aArpuNosss"
```

Bu, tek lokasyonlu, tek uzmanlı bir **yerel sağlık/danışmanlık işletmesi** sitesidir. Kimlik doğrulama, dashboard, kullanıcı state'i bu repoda YOKTUR — danışan portalı (`CLIENT_PORTAL`) ayrı bir harici uygulamadır. Bu repo public, içerik ağırlıklı pazarlama/yerel-SEO sitesidir; SPA pattern'leri varsayılan olarak yasaktır.

---

## 2. Tech Stack (sabit — sürüm değişikliği önerme)

- **Next.js 16** — App Router only. Pages Router asla.
- **React 19** — Server Components varsayılan.
- **TypeScript** — `strict: true`. `any` yasak.
- **Tailwind CSS v4** — utility-first; CSS-in-JS yok.
- **shadcn/ui** — erişilebilir UI primitive'leri (Radix tabanlı).
- **Zod v4** — runtime şema doğrulama (form, içerik payload, env).
- **next/font**, **next/image** — zorunlu (manuel font/`<img>` yasak).

Eklenmesi yasak (gerekçesiz): TanStack Query, Auth.js, Zustand, axios. Bunlar SPA/uygulama pattern'leridir; içerik+yerel SEO sitesinde gerekmez.

---

## 3. Bilgi Mimarisi (mevcut yapı — koru)

Site üç tip sayfa etrafında kurulu. Yeni sayfa eklerken doğru kategoriye yerleştir:

**A. Çekirdek sayfalar:** Ana Sayfa, Hakkımda (`/hakkimda`), Online Diyet (`/online-diyetisyen`), Programlar (`/programlar`), Randevu (`/randevu`), İletişim (`/iletisim`), Hesaplayıcılar (`/hesaplayicilar` — BMI, ideal kilo, kalori), Tarifler (`/tarifler`), Blog (`/blog`).

**B. Yerel SEO bölge sayfaları** (`/<ilce>-diyetisyen`): Eryaman, Etimesgut, Sincan, Yenimahalle, Batıkent, Çankaya, Ankara, Atayıldız Plaza, ayrıca `/ankara-kilo-verme-diyetisyen`, `/online-diyetisyen`. Her biri o bölgeye özgü `areaServed` + **benzersiz içerik** ile.

**C. Uzmanlık sayfaları** (`/<konu>-...-ankara`): insülin direnci diyeti, PCOS, hamilelik beslenmesi, sporcu beslenmesi, çocuk beslenmesi.

**Yasal:** `/kvkk`, `/gizlilik-politikasi`, `/kullanim-sartlari`.

> ⚠️ **Doorway page riski:** Bölge sayfaları (B) birbirinin kopyası olamaz. Her sayfada o ilçeye özgü gerçek değer (ulaşım, semt referansı, yerel bağlam, benzersiz açıklama) bulunmalı. Şablon doldurup şehir adı değiştiren ince/yinelenen içerik Google tarafından "doorway page" olarak cezalandırılır. Yeni bölge sayfası eklerken bu kural ihlal edilemez.

---

## 4. Render Stratejisi

### 4.1 Server / Client Component Mimarisi (crawlability'nin temeli)

Next.js'te SEO'nun kökü budur: Googlebot'un indekslediği şey **sunucuda render edilen HTML**'dir. İçerik client tarafında JS ile basılıyorsa eksik/gecikmeli indekslenme riski doğar. İçeriğin tamamı Server Component'ten gelmek **zorundadır**.

- **Varsayılan RSC:** Her component aksi gerekmedikçe Server Component'tir. `"use client"` ağacın **en derin yaprağında** olur; sayfa/layout seviyesinde asla.
- **İçerik sınırı:** Görünür metin/başlık/link (h1, açıklamalar, bölge ve uzmanlık içerikleri, SSS, yorum metinleri, CTA başlıkları) **daima** Server Component'ten render edilir. Client Component yalnızca şu **etkileşim adacıkları** için: hesaplayıcı formları (BMI/ideal kilo/kalori), mobil menü toggle, accordion/tab, carousel, WhatsApp/randevu buton davranışı.
- **Veri çekme:** Server Component içinde `await fetch` / dosya okuma ile (build veya request anında). `useEffect` içinde içerik fetch'i **YASAK** — crawler boş HTML görür.
- **Sınır pattern'i:** Client Component'lere içerik `children` (server-rendered) veya prop olarak geçilir; client'ın **içine metin gömülmez**. Örn. interaktif accordion'da başlık + gövde server'dan `children` gelir, client yalnızca aç/kapa state'ini yönetir → metin HTML'de kalır.
- **Hidrasyon maliyeti:** Gereksiz client component bundle'ı şişirir, INP/LCP'yi bozar. Statik bölümler RSC bırakılır; "her şeyi client yapma" eğilimi yasaktır.
- **Streaming:** Yavaş/ikincil bölümler `<Suspense>` ile sarılır; hero/h1 (LCP) bloklanmaz. Gerekirse route-level `loading.tsx`.
- **`next/dynamic`:** Ağır, below-the-fold, etkileşimli widget'lar bölünebilir; ancak **kritik/indekslenecek içerik asla `ssr: false` ile yüklenmez** — crawler göremez.

**Test:** JavaScript kapalıyken (veya `view-source`) her sayfanın ana içeriği — h1, bölge/uzmanlık metinleri, SSS — HTML'de mevcut olmalı. Değilse o bölüm Server Component'e taşınır.

### 4.2 Statik / Dinamik Seçimi

**Varsayılan: Static (SSG).** Tercih sırası:

1. **Static** — çekirdek, bölge, uzmanlık, yasal sayfalar. Blog/tarif için `generateStaticParams`.
2. **ISR** — sık değişmeyen içerik (`export const revalidate` / `revalidateTag`).
3. **Dynamic (SSR)** — yalnızca gerçekten request-time veri gerekiyorsa; gerekçesi belirtilir.
4. **Client Component** — yalnızca §4.1'deki etkileşim adacıkları için, en yaprak seviyede.

---

## 5. SEO — Zorunlu Kurallar

### 5.1 Metadata

- Her route'ta `metadata` (statik) veya `generateMetadata` (dinamik) **zorunlu**.
- Zorunlu alanlar: `title`, `description`, `alternates.canonical` (her sayfa **kendine** canonical — bölge sayfaları ana sayfaya canonical VERMEZ), `openGraph`, `twitter`.
- Root layout'ta: `metadataBase = new URL(SITE_URL)`, `title.template = "%s | Ezgi Evgin Diyetisyen"`, GSC verification, `robots: index/follow, max-image-preview:large`.
- `description` her sayfada benzersiz, ~150–160 karakter, yerel anahtar kelime doğal (ör. "Eryaman diyetisyen", "online diyet Ankara").

### 5.2 Yapısal Veri (JSON-LD) — yerel SEO'nun kalbi

Root/ilgili sayfalarda:

- **`Dietitian`** (LocalBusiness): `name`, `image`, `@id` (`${SITE_URL}/#business`), `url`, `telephone`, `email`, `priceRange`, `address` (PostalAddress — Altay Mah. ...), `geo` (GeoCoordinates — lat/lng), `areaServed` (Ankara + ilçeler), `openingHoursSpecification`, `hasMap`, `sameAs` (Instagram, DoktorTakvimi, Google).
- **`Person`** — Ezgi Evgin Aktaş; `jobTitle: "Diyetisyen"`, `worksFor: { @id: business }`, `sameAs`. (Hakkımda sayfasında.)
- **`WebSite`** + (varsa site içi arama) `SearchAction`.
- **`BreadcrumbList`** — tüm alt sayfalarda.
- **`MedicalWebPage` / `Service`** — uzmanlık & program sayfalarında (insülin direnci, PCOS vb.).
- **`FAQPage`** — SSS bölümü olan sayfalarda (içerikteki gerçek soru-cevapla birebir).

> ⚠️ **AggregateRating / Review uyarısı:** Danışan yorumları DoktorTakvimi'nden derleniyor. Üçüncü-parti yorumları kendi sitende `AggregateRating`/`Review` schema'sı olarak işaretleme — Google "self-serving / aggregated review" politikası ihlali sayar ve yapısal veri cezası verebilir. Bu yorumlar için DoktorTakvimi'ne **link ver**, schema ekleme. Sadece doğrudan toplanmış birinci-parti yorumlar işaretlenebilir.

### 5.3 Teknik Dosyalar

- `app/sitemap.ts` — tüm indekslenebilir route'lar (çekirdek + bölge + uzmanlık + blog + tarif), `lastModified` ile.
- `app/robots.ts` — `index/follow`, sitemap referansı. `/api`, portal redirect gibi değersiz path'ler disallow.
- `app/opengraph-image.tsx` (+ `twitter-image.tsx`) — `next/og` `ImageResponse`, 1200×630. (Zaten mevcut — koru.)
- Yerel arama için Google Search Console verification metadata'da tutulur.

### 5.4 Linkleme & Semantik

- İç linkler **daima** `next/link`; anchor metni anlamlı ve anahtar kelime içeren ("Eryaman diyetisyen", "randevu alın" — asla "tıklayın").
- Bölge/uzmanlık sayfaları arası iç linkleme güçlü tutulur (mevcut footer hub yapısı korunur).
- Sayfa başına **tek `<h1>`**, hiyerarşi atlanmaz.
- Semantik landmark'lar: `<header> <nav> <main> <article> <section> <footer>`.

---

## 6. Core Web Vitals — Performans Bütçesi

- **LCP < 2.5s:** hero görseli `priority`; clinic/hero görseli asla lazy değil.
- **CLS < 0.1:** tüm `next/image`'lerde width/height; `next/font` swap; istatistik/yorum bloklarına sonradan layout-shift yaptırma.
- **INP < 200ms:** hesaplayıcı gibi JS'i yaprak client component'te tut; gereksiz client component yok.
- WhatsApp/DoktorTakvimi/üçüncü parti scriptler `next/script` ile `lazyOnload`/`afterInteractive`.
- `next/font` self-host, `display: "swap"`.

---

## 7. Erişilebilirlik (a11y = SEO + KVKK uyumu)

- Tüm `next/image`'lerde anlamlı `alt`; dekoratif `alt=""`.
- Klavye erişimi + görünür focus; AA kontrast (4.5:1).
- Form input'larına `<label>`; shadcn/ui (Radix) primitive'leri kullan.
- WhatsApp/telefon/randevu CTA'ları erişilebilir buton/link olarak.

---

## 8. TypeScript Konvansiyonları

- `strict: true`, `noUncheckedIndexedAccess: true`.
- `any` yasak; bilinmeyen için `unknown` + Zod ile daralt.
- Tip-only import: `import type { ... }`.
- Dış veri (içerik dosyaları, form, `process.env`) **daima** Zod ile parse; `as` ile cast yasak.
- Env doğrulaması `src/env.ts`'te merkezi.
- JSON-LD üreticileri tip-güvenli (`schema-dts` önerilir).

---

## 9. Stil (Tailwind v4) & İçerik Dili

- Utility-first; arbitrary value minimumda; tema token'ları `@theme`'de.
- Responsive mobile-first (trafiğin çoğu mobil — WhatsApp/randevu akışı mobil öncelikli test edilir).
- `<html lang="tr">`. Türkçe slug normalizasyonu: küçük harf, Türkçe karakter sadeleştirme (`ş→s, ı→i, ğ→g, ü→u, ö→o, ç→c`), tire ayraç.
- Şu an tek dil; çok dil **eklenmez** (gerekirse `alternates.languages` + hreflang ile planlanır).

---

## 10. Proje Yapısı

```
app/
  layout.tsx                      # metadataBase, lang=tr, font, GSC verify, Dietitian+WebSite JSON-LD
  page.tsx                        # ana sayfa
  sitemap.ts / robots.ts
  opengraph-image.tsx / twitter-image.tsx
  hakkimda/ online-diyet-ankara/ programlar/ randevu/ iletisim/
  hesaplayicilar/ tarifler/ blog/[slug]/
  (bolgeler)/<ilce>-diyetisyen/   # yerel SEO landing'leri
  (uzmanlik)/<konu>-...-ankara/   # PCOS, insülin direnci, vb.
  kvkk/ gizlilik-politikasi/ kullanim-sartlari/
src/
  components/                     # ui/ (shadcn) + bölümler
  lib/
    site.ts                       # §1 sabitler — tek kaynak
    seo.ts                        # buildMetadata() helper
    schema.ts                     # Dietitian/Person/WebSite/Breadcrumb/Service/FAQ üreticileri
    slug.ts                       # Türkçe slug normalize
  env.ts                          # Zod env
content/                          # blog/tarif/bölge içerik kaynağı
```

---

## 11. Komutlar

```bash
pnpm dev
pnpm build       # deploy öncesi DAIMA
pnpm lint
pnpm typecheck   # tsc --noEmit
```

Görev "bitti" sayılmaz; `pnpm typecheck` + `pnpm build` temiz geçmeden.

---

## 12. Yapılmayacaklar (Hard Don'ts)

- ❌ Client-side fetch ile görünür içerik render (crawler görmez).
- ❌ Layout/page seviyesinde `"use client"`.
- ❌ `<img>` (her zaman `next/image`), internal `<a>` (her zaman `next/link`).
- ❌ Metadata'sız route; bölge sayfasını ana sayfaya canonical verme.
- ❌ Bölge sayfalarında şablon-kopya/ince içerik (doorway page).
- ❌ DoktorTakvimi yorumlarını kendi sitende `AggregateRating`/`Review` olarak işaretleme.
- ❌ `any`, denetlenmemiş dış veri, `as` ile tip zorlaması.
- ❌ Birden fazla `<h1>`; heading hiyerarşisi atlama.
- ❌ Boyutsuz görsel/embed (CLS); senkron üçüncü parti script.

---

## 13. Yeni Sayfa Checklist'i

- [ ] Doğru kategori (çekirdek / bölge / uzmanlık / yasal)
- [ ] `generateMetadata`/`metadata`: benzersiz title + description + **kendine canonical** + OG + twitter
- [ ] Tek `<h1>`, semantik hiyerarşi
- [ ] İlgili JSON-LD (Dietitian/Service/MedicalWebPage/FAQ + BreadcrumbList)
- [ ] Bölge sayfasıysa: benzersiz yerel içerik + o ilçeye `areaServed`
- [ ] `sitemap.ts`'e dahil
- [ ] LCP görseli `priority`; diğerleri lazy + boyutlu; `alt` metinleri
- [ ] İç linkler `next/link`, anahtar kelimeli anchor; footer hub'a bağlantı
- [ ] `pnpm typecheck && pnpm build` temiz
