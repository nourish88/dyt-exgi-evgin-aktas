# 🚀 SEO Kılavuzu - Ezgi Evgin Aktaş Website

## ✅ Tamamlanan SEO Optimizasyonları

### 1. **Structured Data (Schema.org) ✓**

- ✅ LocalBusiness schema (Google My Business için)
- ✅ Person schema (Kişisel marka için)
- ✅ WebSite schema (Site bilgileri)
- ✅ ProfessionalService schema (Hizmet bilgileri)
- ✅ JSON-LD formatı (Google'ın önerdiği format)

### 2. **Meta Tags ✓**

- ✅ Gelişmiş title stratejisi (template kullanımı)
- ✅ Detaylı description (150-160 karakter)
- ✅ **15+ hedef keyword** (diyetisyen ankara, online diyetisyen, vb.)
- ✅ Open Graph tags (Facebook/WhatsApp paylaşımları)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Robots meta tags

### 3. **Teknik SEO ✓**

- ✅ Sitemap.xml (otomatik oluşturuluyor)
- ✅ Robots.txt
- ✅ Lang attribute (lang="tr")
- ✅ Semantic HTML5
- ✅ Mobile-first responsive design
- ✅ Fast loading (Next.js optimization)

### 4. **Local SEO ✓**

- ✅ Adres bilgileri (Etimesgut, Ankara)
- ✅ Telefon numarası
- ✅ Çalışma saatleri
- ✅ Coğrafi koordinatlar
- ✅ Yerel keyword'ler (ankara, etimesgut, eryaman)

---

## 📋 YAPILACAKLAR LİSTESİ (ÖNEMLİ!)

### 🔴 Kritik - Hemen Yapılmalı

#### 1. **Google Search Console Kurulumu**

```bash
1. https://search.google.com/search-console adresine git
2. "Add Property" → Domain seçeneğini seç
3. DNS verification yap
4. Sitemap ekle: https://ezgievginaktas.com/sitemap.xml
5. Verification code'u layout.tsx'teki ilgili alana ekle
```

#### 2. **Google My Business (GMB) Kaydı**

```bash
1. https://business.google.com adresine git
2. İşletme adı: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı"
3. Kategori: "Diyetisyen" veya "Nutritionist"
4. Adres: Eryaman Altay mah. Orhan Bey cad. Atayıldız plaza, no:1/70 kat:8
5. Telefon: +90 533 310 49 70
6. Website: https://ezgievginaktas.com
7. Çalışma saatleri ekle
8. Fotoğraflar ekle (ofis, diploma, çalışma anları)
9. Hizmetleri ekle (Online Diyet, Kilo Yönetimi, vb.)
```

#### 3. **Sosyal Medya Profil Linkleri**

- Instagram: https://instagram.com/dyt_ezgievgin ✓ (eklendi)
- Facebook sayfası oluştur ve ekle
- LinkedIn profili oluştur
- Bu linkleri structured-data.tsx'teki `sameAs` array'ine ekle

#### 4. **İçerik Optimizasyonu**

Her sayfada:

- ✅ H1 tag (sadece 1 tane olmalı)
- ✅ H2, H3 hiyerarşisi
- ❌ Alt text'ler (resimlere eklenecek)
- ❌ Internal linkler (sayfa içi bağlantılar artırılacak)
- ❌ Blog içerikleri (daha fazla blog yazısı)

---

### 🟡 Önemli - 1-2 Hafta İçinde

#### 5. **Blog Stratejisi**

Hedef keyword'ler için blog yazıları:

- "Ankara'da online diyetisyen nasıl bulunur?"
- "Kilo verme için 10 altın kural" ✓ (var)
- "Online diyet programı nedir, nasıl çalışır?"
- "Sağlıklı kilo verme için beslenme önerileri"
- "Etimesgut'ta diyetisyen tavsiyeleri"
- "WhatsApp üzerinden diyet danışmanlığı"

Ayda minimum **4-8 blog** yazısı yayınla!

#### 6. **Backlink Stratejisi**

- Yerel direktörlere kayıt:
  - Foursquare
  - Yelp Turkey
  - Yandex Maps
  - Apple Maps
  - Türkiye İş Rehberi
- Sağlık portallarına profil:
  - Sağlık portalları
  - Diyet ve beslenme forumları
- Guest blog yazıları

#### 7. **Performance Optimization**

```bash
# Core Web Vitals iyileştirme
1. Image optimization (tüm görselleri WebP'ye çevir)
2. Lazy loading (otomatik, ama kontrol et)
3. CSS/JS minification (Next.js otomatik yapar)
4. CDN kullanımı (Vercel otomatik)
```

#### 8. **Analytics Kurulumu**

```bash
# Google Analytics 4
1. https://analytics.google.com → yeni property oluştur
2. Measurement ID al (G-XXXXXXXXXX)
3. Next.js'e entegre et
4. Conversion tracking kur (WhatsApp tıklamaları, form gönderileri)
```

---

### 🟢 İyileştirme - Zaman Buldukça

#### 9. **Müşteri Yorumları**

- Google My Business'a müşteri yorumları topla
- Testimonials section'a gerçek yorumlar ekle
- Fotoğraflı referanslar (izinli)

#### 10. **Video İçerik**

- YouTube kanalı aç
- Kısa beslenme ipuçları (YouTube Shorts)
- Müşteri başarı hikayeleri (izinli)
- Video sitemap oluştur

#### 11. **Sosyal Sinyal**

- Instagram'da düzenli paylaşım
- Facebook'ta sayfa oluştur
- LinkedIn'de profesyonel içerik
- Pinterest (tarif görselleri)

---

## 🎯 Hedef Keyword'ler

### Birincil (Primary)

1. **diyetisyen ankara** (yüksek rekabet)
2. **online diyetisyen** (orta rekabet)
3. **beslenme danışmanı ankara** (orta rekabet)
4. **kilo verme programı** (yüksek rekabet)

### İkincil (Secondary)

5. etimesgut diyetisyen
6. eryaman diyetisyen
7. online diyet programı
8. whatsapp diyetisyen
9. uzaktan diyet
10. kişiye özel diyet

### Long-tail (Uzun Kuyruk)

11. ankara'da online beslenme danışmanlığı
12. etimesgut'ta kilo verme programı
13. whatsapp üzerinden diyet danışmanlığı
14. online diyetisyen fiyatları ankara
15. eryaman beslenme koçu

---

## 📊 Başarı Metrikleri (Takip Edilecek)

### İlk 3 Ay Hedefleri:

- ✅ Google Search Console'a kayıt
- ✅ Google My Business profili aktif
- ⏳ Sitede günlük 50+ ziyaret
- ⏳ "diyetisyen ankara" için ilk 50'ye gir
- ⏳ 10+ organik keyword'de görünür ol

### 6 Ay Hedefleri:

- 🎯 Günlük 100+ organik ziyaret
- 🎯 "online diyetisyen" için ilk 20'ye gir
- 🎯 "etimesgut diyetisyen" için 1. sayfada
- 🎯 Google My Business'ta 20+ yorum
- 🎯 50+ backlink

### 12 Ay Hedefleri:

- 🚀 Günlük 200-300 organik ziyaret
- 🚀 5+ keyword için 1. sayfada
- 🚀 50+ blog yazısı
- 🚀 Google My Business'ta 50+ yorum
- 🚀 Domain Authority (DA) 20+

---

## 🔍 SEO Kontrol Listesi (Deployment Öncesi)

- [x] Structured data eklendi
- [x] Meta tags optimize edildi
- [x] Sitemap oluşturuldu
- [x] Robots.txt hazır
- [x] Mobile responsive
- [x] Page speed optimize
- [ ] Google Search Console verification
- [ ] Google Analytics kuruldu
- [ ] Google My Business oluşturuldu
- [ ] Tüm görsellerde alt text var
- [ ] Internal linking yapıldı
- [ ] Canonical URL'ler doğru
- [ ] 404 sayfası özelleştirildi
- [ ] SSL sertifikası aktif (Vercel otomatik)

---

## 💡 Pro İpuçları

### 1. **Düzenli İçerik**

- Haftada 1-2 blog yazısı yayınla
- Instagram'daki içerikleri blog'a da ekle
- Müşteri sorularını blog konusu yap

### 2. **Yerel Odak**

- "Ankara" kelimesini içeriğe doğal şekilde serpiştir
- Yerel etkinliklere katıl, bunları paylaş
- Ankara'daki diğer sağlık profesyonelleriyle network

### 3. **Kullanıcı Deneyimi**

- Sayfa yüklenme hızı < 3 saniye
- Mobile-first tasarım ✓
- Kolay navigasyon ✓
- Net CTA'lar (WhatsApp butonu) ✓

### 4. **Conversion Optimization**

- WhatsApp butonu her yerde görünür ✓
- Telefon numarası kolayca bulunabilir ✓
- Programlar açık ve net ✓
- Sosyal kanıt (testimonials) var ✓

---

## 📞 Hızlı Destek

### SEO Araçları (Ücretsiz)

- Google Search Console
- Google Analytics
- Google My Business
- Bing Webmaster Tools
- Ubersuggest (keyword research)
- PageSpeed Insights

### SEO Kontrol Siteleri

- https://search.google.com/test/rich-results (Schema test)
- https://pagespeed.web.dev (Hız testi)
- https://validator.schema.org (Schema validator)
- https://www.xml-sitemaps.com (Sitemap validator)

---

## 🎉 Sonuç

Site SEO açısından **%70 hazır**! Kalan %30:

- Google hesapları kurulumu (Search Console, Analytics, GMB)
- Düzenli içerik üretimi (blog)
- Backlink çalışmaları
- Müşteri yorumları toplama

**İlk yapılacak:** Google Search Console ve Google My Business kayıtları!

Başarılar! 🚀
