# Google Search Console — Dizinleme Görevi (Claude / Tarayıcı Asistanı)

Aşağıdaki bloğu **Claude** veya tarayıcı otomasyonuna olduğu gibi yapıştırın. Site: **https://ezgievginaktas.com**

---

## PROMPT (kopyala-yapıştır)

```
Sen Google Search Console (GSC) üzerinde manuel SEO operatörüsün. Site: https://ezgievginaktas.com
Dil: Türkçe arayüz kullanıyorsan Türkçe menü adlarını kullan.

## Bağlam (GMB Yerel SEO Güncellemesi)
- Google Business Profil (GMB) kelimelerine uyumlu olarak ana sayfa layout, footer ve schema (Ata Yıldız Plaza, yorumlar vb.) güncellendi.
- /eryaman-diyetisyen sayfasına "eryaman 1 etap", "eryaman diyetisyen tavsiye" gibi hedef kelimeler yerleştirildi.
- /etimesgut-diyetisyen sayfasına "etimesgut belediyesi ücretsiz diyetisyen" hedef kitlesine yönelik bilgilendirme eklendi.
- robots.txt: sadece /admin ve /api disallow; blog, tarifler, hesaplayicilar AÇIK

## Görev 1 — Sitemap yenileme
1. GSC → Mülk seç: ezgievginaktas.com
2. Sol menü: **Dizin oluşturma** → **Site Haritaları** (Sitemaps)
3. Mevcut sitemap: https://ezgievginaktas.com/sitemap.xml
4. Durum “Başarılı” değilse veya last read eskiyse: sitemap’i yeniden gönder (Sil + tekrar ekle gerekmez; “Yeni site haritası ekle” ile aynı URL’yi tekrar göndermek yeterli)
5. https://ezgievginaktas.com/server-sitemap.xml varsa onu da kontrol et (robots.txt’te additionalSitemap olarak listeleniyor olabilir)

## Görev 2 — Öncelikli URL’ler için “Dizine ekleme talebi”
Sol menü: **URL denetimi** (URL Inspection). Her URL için:
- Üst arama kutusuna tam URL yapıştır
- **Canlı URL’yi test et** (Live test) — deploy’un yayıldığından emin ol
- Sonuç: “URL Google'da yok” veya “Dizine eklenmedi” ise → **Dizin oluşturma iste** (Request indexing)
- Günlük kota ~10–20 URL; önce aşağıdaki sırayı uygula

### Öncelik A (ACİL — GMB Güncellemesi Gören Sayfalar)
1. https://ezgievginaktas.com/
2. https://ezgievginaktas.com/eryaman-diyetisyen
3. https://ezgievginaktas.com/etimesgut-diyetisyen
4. https://ezgievginaktas.com/iletisim
5. https://ezgievginaktas.com/hakkimda
6. https://ezgievginaktas.com/ankara-diyetisyen
7. https://ezgievginaktas.com/online-diyet-ankara

### Öncelik B (yeni uzmanlık sayfaları)
8. https://ezgievginaktas.com/insulin-direnci-diyeti-ankara
9. https://ezgievginaktas.com/pcos-diyetisyen-ankara
10. https://ezgievginaktas.com/hamilelik-beslenmesi-ankara
11. https://ezgievginaktas.com/sporcu-beslenmesi-ankara
12. https://ezgievginaktas.com/cocuk-beslenmesi-diyetisyen

### Öncelik C (marka / içerik)
13. https://ezgievginaktas.com/ezgi-evgin-diyetisyen
14. https://ezgievginaktas.com/blog
15. https://ezgievginaktas.com/tarifler
16. https://ezgievginaktas.com/hesaplayicilar

Her URL için not al:
- Canlı test: HTTP 200 mü?
- Sayfa getirme: Başarılı mı?
- Dizin oluşturma: İzin verildi / Dizine eklendi / Beklemede?
- Tespit edilen canonical URL doğru mu?

## Görev 3 — Sayfa dizini raporu
1. **Dizin oluşturma** → **Sayfalar** (Pages)
2. “Dizine eklenmedi” sekmesine bak
3. Şu nedenleri filtrele ve listele:
   - Yönlendirme sayfası
   - Kopya, Google kullanıcıdan farklı canonical seçti
   - Bulunamadı (404)
   - Tarandı — şu an dizine eklenmedi
4. Her satır için önerilen aksiyonu yaz (düzelt / beklet / dizin talebi / canonical kontrol)

## Görev 4 — Core Web Vitals (mobil)
1. **Deneyim** → **Önemli Web Verileri** (Core Web Vitals)
2. Mobil raporda “Kötü URL” varsa listele
3. Özellikle /eryaman-diyetisyen ve ana sayfa için LCP/CLS notu al
4. Sonuçları tablo halinde özetle: URL | LCP | CLS | Öneri

## Görev 5 — Doğrulama (deploy sonrası)
Tarayıcıda veya URL Inspection “Canlı test” ile şunları doğrula:
- og:url sayfa URL’si ile eşleşiyor (ana sayfa değil)
- canonical doğru
- title ~60 karakter civarı, çift suffix yok

Test URL örneği: /eryaman-diyetisyen → og:url = https://ezgievginaktas.com/eryaman-diyetisyen

## Çıktı formatı
İş bitince şu formatta rapor ver:

### Özet
- Kaç URL için dizin talebi gönderildi
- Sitemap durumu
- Kritik hata var mı

### URL tablosu
| URL | Canlı test | Dizin talebi | Canonical OK | Not |

### Bekleyen manuel işler (kod dışı)
- DoktorTakvimi profil linkini /eryaman-diyetisyen yap
- 1 kaliteli backlink (Eryaman odaklı)

Kota dolduysa kalan URL’leri “Yarın devam” listesi olarak bırak.
```

---

## Hızlı kontrol listesi (insan)

- [ ] Vercel deploy yeşil
- [ ] https://ezgievginaktas.com/sitemap.xml yeni URL’leri içeriyor
- [ ] GSC sitemap yeniden okundu
- [ ] Öncelik A URL’leri → Request indexing
- [ ] Öncelik B URL’leri → Request indexing (ertesi gün kota varsa)
- [ ] Sayfa dizini → “Dizine eklenmedi” nedenleri not edildi
- [ ] CWV mobil raporu kontrol edildi
