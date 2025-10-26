import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/image-slider";
import { placeholderImages } from "@/lib/placeholder-images";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Sağlık Blogu | Diyetisyen Ezgi Evgin Aktaş",
  description:
    "Sağlıklı beslenme, diyet, kilo verme ve yaşam tarzı hakkında uzman tavsiyeleri ve bilgiler.",
};

// Demo blog posts
const blogPosts = [
  {
    id: 1,
    title: "Sağlıklı Kilo Verme İçin 10 Altın Kural",
    excerpt:
      "Kalıcı ve sağlıklı bir şekilde kilo vermek için mutlaka bilmeniz gereken 10 temel kuralı sizler için derledik. Bu kuralları uygulayarak hedeflerinize daha kolay ulaşabilirsiniz.",
    category: "Beslenme",
    date: "15 Ekim 2025",
    readTime: "5 dk",
    slug: "saglikli-kilo-verme-icin-10-altin-kural",
    image: "/blog/kilo-verme.jpg",
  },
  {
    id: 2,
    title: "Metabolizmayı Hızlandıran Besinler",
    excerpt:
      "Metabolizmanızı doğal yollarla hızlandırmanıza yardımcı olacak süper besinleri keşfedin. Doğru beslenme ile enerji seviyenizi artırın.",
    category: "Sağlık",
    date: "12 Ekim 2025",
    readTime: "4 dk",
    slug: "metabolizmayi-hizlandiran-besinler",
    image: "/blog/metabolizma.jpg",
  },
  {
    id: 3,
    title: "Su İçmenin Kilo Vermeye Etkisi",
    excerpt:
      "Günlük su tüketiminin kilo kaybı sürecindeki rolü ve faydaları hakkında bilmeniz gerekenler. Doğru miktarda su içerek fark yaratın.",
    category: "İpuçları",
    date: "10 Ekim 2025",
    readTime: "3 dk",
    slug: "su-icmenin-kilo-vermeye-etkisi",
    image: "/blog/su-icmek.jpg",
  },
  {
    id: 4,
    title: "Sporcu Beslenmesinde Temel İlkeler",
    excerpt:
      "Spor yapanlar için ideal beslenme programı nasıl olmalı? Performansınızı artıracak beslenme önerileri.",
    category: "Sporcu Beslenmesi",
    date: "8 Ekim 2025",
    readTime: "6 dk",
    slug: "sporcu-beslenmesinde-temel-ilkeler",
    image: "/blog/sporcu.jpg",
  },
  {
    id: 5,
    title: "Glisemik İndeks Nedir? Nasıl Kullanılır?",
    excerpt:
      "Glisemik indeks ve glisemik yük kavramları, kan şekeri kontrolü ve sağlıklı beslenme için önemli araçlardır. Detaylı açıklama.",
    category: "Beslenme Bilimi",
    date: "5 Ekim 2025",
    readTime: "7 dk",
    slug: "glisemik-indeks-nedir",
    image: "/blog/glisemik.jpg",
  },
  {
    id: 6,
    title: "Hamilelikte Sağlıklı Beslenme",
    excerpt:
      "Hamilelik döneminde anne ve bebek sağlığı için bilinmesi gereken beslenme önerileri ve dikkat edilmesi gerekenler.",
    category: "Anne Sağlığı",
    date: "2 Ekim 2025",
    readTime: "8 dk",
    slug: "hamilelikte-saglikli-beslenme",
    image: "/blog/hamilelik.jpg",
  },
];

const categories = [
  "Tümü",
  "Beslenme",
  "Sağlık",
  "İpuçları",
  "Sporcu Beslenmesi",
  "Beslenme Bilimi",
  "Anne Sağlığı",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sağlık{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Blogu
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Sağlıklı beslenme, diyet ve yaşam tarzı hakkında uzman tavsiyeleri
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Blog yazılarında ara..."
                  className="h-14 pl-12 pr-4 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tümü" ? "default" : "outline"}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-pink-100 via-cyan-100 to-green-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/30">
                        {post.title.charAt(0)}
                      </div>
                    </div>
                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 pt-4 border-t text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2 group-hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary"
            >
              Daha Fazla Yükle
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-pink-50/50 to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-[var(--brand-primary)]/10 via-[var(--brand-secondary)]/10 to-[var(--brand-accent)]/10 border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Yeni Yazılardan Haberdar Olun
            </h3>
            <p className="text-muted-foreground mb-6">
              Haftalık olarak en güncel beslenme ipuçlarını ve blog yazılarını
              email'inize gönderelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email adresiniz"
                className="h-12 flex-1"
              />
              <Button size="lg" className="h-12 px-8">
                Abone Ol
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Öne Çıkan Görseller */}
      <ImageSlider
        images={placeholderImages.featuredImages}
        title="Öne Çıkan Görseller"
        autoplay={true}
        autoplayInterval={7000}
      />
    </div>
  );
}
