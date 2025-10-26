"use client";

import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Bu gerçek uygulamada Prisma'dan gelecek
function getBlogPost(slug: string) {
  // Demo data
  return {
    title: "Sağlıklı Kilo Verme İçin 10 Altın Kural",
    excerpt:
      "Kalıcı ve sağlıklı bir şekilde kilo vermek için mutlaka bilmeniz gereken 10 temel kural...",
    content: `
# Sağlıklı Kilo Verme İçin 10 Altın Kural

Kalıcı ve sağlıklı bir şekilde kilo vermek istiyorsanız, doğru yöntemleri bilmek çok önemlidir. İşte size yol gösterecek 10 altın kural:

## 1. Gerçekçi Hedefler Belirleyin

Haftalık 0.5-1 kg kilo kaybı sağlıklı kabul edilir. Aşırı hızlı kilo kaybı sağlıksız ve sürdürülemez.

## 2. Düzenli Öğün Atlamayın

Öğün atlamak metabolizmayı yavaşlatır ve aşırı açlığa yol açarak kontrolsüz yemeye neden olabilir.

## 3. Bol Su İçin

Günde en az 2-2.5 litre su içmek metabolizmayı hızlandırır ve toklukhissini artırır.

## 4. Protein Ağırlıklı Beslenin

Protein tokluk hissini uzatır ve kas kaybını önler. Her öğünde protein kaynağı bulundurun.

## 5. Lifli Besinleri Tercih Edin

Tam tahıllar, sebzeler ve meyveler sindirimi düzenler ve uzun süre tok tutar.

## 6. Düzenli Egzersiz Yapın

Haftada en az 3-4 gün 30-45 dakika egzersiz yapın. Hem kardiyo hem de direnç egzersizleri önemlidir.

## 7. Uyku Düzeninize Dikkat Edin

Yetersiz uyku açlık hormonu grelinini artırır ve kilo almaya neden olur. Günde 7-8 saat uyuyun.

## 8. Stres Yönetimi

Kronik stres kilo almaya ve kilo verememeye neden olabilir. Meditasyon, yoga gibi aktiviteler faydalıdır.

## 9. Porsiyon Kontrolü

Sağlıklı besinler bile fazla tüketildiğinde kilo aldırabilir. Porsiyon kontrolüne dikkat edin.

## 10. Sabırlı Olun

Kilo verme süreci zaman alır. Hızlı sonuç almaya çalışmak yerine yaşam tarzı değişikliği yapın.

---

## Sonuç

Bu 10 kuralı uygulayarak sağlıklı ve kalıcı bir şekilde kilo verebilirsiniz. Unutmayın, her birey farklıdır ve kişiye özel bir program için mutlaka bir diyetisyene danışmalısınız.

### Kişiye Özel Program İçin

Online diyet programlarımı inceleyebilir veya WhatsApp üzerinden benimle iletişime geçebilirsiniz.
    `,
    category: "Beslenme",
    date: "15 Ekim 2025",
    readTime: "5 dk",
    slug,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Blog'a Dön
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 space-y-6">
          <Badge>{post.category}</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} okuma</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto gap-2">
              <Share2 className="w-4 h-4" />
              Paylaş
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="w-full h-[400px] bg-gradient-to-br from-pink-100 via-cyan-100 to-green-100 rounded-2xl flex items-center justify-center">
            <div className="text-6xl font-bold text-white/30">
              {post.title.charAt(0)}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:my-4 prose-li:text-gray-700 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[var(--brand-primary)]/10 via-[var(--brand-secondary)]/10 to-[var(--brand-accent)]/10 rounded-2xl border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">
            Kişiye Özel Program İster Misiniz?
          </h3>
          <p className="text-muted-foreground mb-6">
            Size özel hazırlanacak beslenme programı ile hedeflerinize ulaşın.
            Online danışmanlık hizmetimiz hakkında bilgi almak için iletişime
            geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/programlar">
              <Button size="lg">Programları İncele</Button>
            </Link>
            <Link
              href="https://wa.me/905333104970?text=Merhaba"
              target="_blank"
            >
              <Button size="lg" variant="outline" className="border-2">
                WhatsApp'tan Yaz
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
