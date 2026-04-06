# Diyetisyen Ezgi Evgin Aktaş - Website

Modern, responsive ve SEO-friendly diyetisyen web sitesi. Next.js 15, React 19, TypeScript, Tailwind CSS ve Prisma ile geliştirilmiştir.

## 🚀 Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Next.js 15 App Router
- ✅ TypeScript desteği
- ✅ Tailwind CSS v3.4 + Shadcn/ui komponentleri
- ✅ Framer Motion animasyonları
- ✅ WhatsApp entegrasyonu (ücretsiz Click to Chat)
- ✅ BMI ve BMR hesaplayıcıları
- ✅ Blog sistemi
- ✅ Tarifler bölümü
- ✅ SEO optimizasyonu
- ✅ Prisma ORM + Neon PostgreSQL hazır
- ✅ Mobile-first yaklaşım

## 📋 Gereksinimler

- Node.js 18.17 veya üzeri
- npm veya yarn
- Neon PostgreSQL hesabı (ücretsiz)

## 🛠️ Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Environment Variables

`.env.example` dosyasını `.env` olarak kopyalayın:

```bash
cp .env.example .env
```

Ardından `.env` dosyasını düzenleyin:

```env
# Neon PostgreSQL Connection String
DATABASE_URL="postgresql://username:password@host.neon.tech/dbname?sslmode=require"

# NextAuth Secret (terminalde: openssl rand -base64 32)
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# WhatsApp & İletişim
NEXT_PUBLIC_WHATSAPP_NUMBER="905333104970"
NEXT_PUBLIC_PHONE_NUMBER="0533 310 49 70"
NEXT_PUBLIC_EMAIL="ezgievgin_dytsyn@hotmail.com"

# Site URL (production)
NEXT_PUBLIC_SITE_URL="https://ezgievginaktas.com"
```

### 3. Neon PostgreSQL Kurulumu

1. [Neon.tech](https://neon.tech) adresine gidin ve ücretsiz hesap oluşturun
2. Yeni bir proje oluşturun
3. Connection string'i kopyalayın
4. `.env` dosyasına `DATABASE_URL` olarak ekleyin

### 4. Veritabanı Migrasyonu

```bash
npx prisma generate
npx prisma db push
```

### 5. Development Server'ı Başlatın

```bash
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📦 Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Vercel'e Deploy

1. GitHub'a push edin
2. [Vercel Dashboard](https://vercel.com) üzerinden import edin
3. Environment variables'ları ekleyin
4. Deploy edin

```bash
# Alternatif: Vercel CLI
npm i -g vercel
vercel
```

## 🗂️ Proje Yapısı

```
src/
├── app/                      # Next.js App Router
│   ├── (pages)/
│   │   ├── page.tsx         # Ana sayfa
│   │   ├── hakkimda/        # Hakkımda
│   │   ├── programlar/      # Diyet programları
│   │   ├── blog/            # Blog sistemi
│   │   ├── tarifler/        # Tarifler
│   │   ├── hesaplayicilar/  # BMI/BMR hesaplayıcı
│   │   ├── iletisim/        # İletişim formu
│   │   ├── kvkk/            # KVKK sayfası
│   │   ├── gizlilik-politikasi/
│   │   └── kullanim-sartlari/
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React komponentleri
│   ├── ui/                  # Shadcn/ui komponentleri
│   ├── home/                # Ana sayfa bölümleri
│   ├── navbar.tsx           # Navigasyon
│   ├── footer.tsx           # Footer
│   └── whatsapp-float.tsx   # WhatsApp floating button
├── lib/                     # Yardımcı fonksiyonlar
│   └── prisma.ts            # Prisma client
└── prisma/
    └── schema.prisma        # Database schema
```

## 🎨 Renk Paleti

```css
Primary:   #FF6B9D (Pembe)
Secondary: #4ECDC4 (Turkuaz)
Accent:    #95E1D3 (Açık Yeşil/Mint)
Dark:      #2C3E50
Light:     #F8F9FA
Success:   #10B981
Warning:   #F59E0B
```

## 📱 Özellikler Detayı

### WhatsApp Entegrasyonu

Projede 3 farklı WhatsApp entegrasyonu vardır:

1. **Floating Button**: Sağ alt köşede sabit WhatsApp butonu
2. **Navbar Button**: Header'da WhatsApp iletişim butonu
3. **Program Cards**: Her program kartında WhatsApp butonu

Örnek kullanım:

```tsx
const whatsappLink = `https://wa.me/905333104970?text=${encodeURIComponent(
  "Merhaba!"
)}`;
```

### Hesaplayıcılar

- **BMI Hesaplama**: Vücut kitle indeksi hesaplama
- **BMR Hesaplama**: Bazal metabolizma hızı ve günlük kalori ihtiyacı

### Blog & Tarifler

Şu anda demo verilerle çalışıyor. Gerçek implementasyonda Prisma üzerinden veritabanından veri çekilecek.

## 🔧 Teknolojiler

- **Framework**: Next.js 15.x
- **Language**: TypeScript 5.7.x
- **Styling**: Tailwind CSS 3.4.x
- **UI Components**: Shadcn/ui
- **Animation**: Framer Motion 11.x
- **Database**: Prisma 6.x + Neon PostgreSQL
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand 5.x
- **SEO**: next-seo 6.x
- **Notifications**: Sonner

## 📝 Yapılacaklar

- [ ] Admin panel (blog/tarif CRUD)
- [ ] NextAuth.js entegrasyonu (admin girişi)
- [ ] Email servisi (Resend/SendGrid)
- [ ] Image upload (Cloudinary)
- [ ] Instagram feed entegrasyonu
- [ ] Google Analytics
- [ ] Sitemap otomatik oluşturma

## 🤝 İletişim

- **Telefon**: 0533 310 49 70
- **Email**: ezgievgin_dytsyn@hotmail.com
- **WhatsApp**: [Mesaj Gönder](https://wa.me/905333104970)

## 📄 Lisans

Bu proje Ezgi Evgin Aktaş için özel olarak geliştirilmiştir.

---

**Not**: Projeyi çalıştırmadan önce `.env` dosyasını düzenlemeyi unutmayın!
