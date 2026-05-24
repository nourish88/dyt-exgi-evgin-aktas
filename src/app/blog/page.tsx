import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight, Sparkles, Instagram, MessageCircle } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Beslenme & Sağlıklı Yaşam Blogu",
  description:
    "Sağlıklı beslenme, kilo verme, insülin direnci, hamile beslenmesi ve güncel diyet konularında uzman diyetisyen kaleminden makaleler.",
  alternates: { canonical: "https://ezgievginaktas.com/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/blog",
    title: "Beslenme & Sağlıklı Yaşam Blogu | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Sağlıklı beslenme, kilo verme, insülin direnci ve güncel diyet konularında uzman diyetisyen kaleminden makaleler.",
  },
};

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

async function getBlogPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

  const whatsappLink = buildWhatsAppApiUrl(
    "Merhaba, blog yazılarınızı okudum, danışmanlık hakkında bilgi almak istiyorum.",
    "blog_page"
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
              <BookOpen className="w-3.5 h-3.5" />
              Uzman Diyetisyen Yazıları
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Beslenme &{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Sağlıklı Yaşam Blogu
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kilo verme, insülin direnci, hamilelik, sporcu beslenmesi ve
              güncel diyet konularında uzman diyetisyen kaleminden, pratik ve
              uygulanabilir yazılar.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <EmptyBlogState whatsappLink={whatsappLink} />
          ) : (
            <div className="max-w-7xl mx-auto space-y-12">
              {/* Featured Post (only when more than 3 posts) */}
              {posts.length > 3 && featuredPost && (
                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <Card className="overflow-hidden border-2 hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {featuredPost.image ? (
                        <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          <Badge className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-[var(--brand-dark)] font-semibold">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Öne Çıkan
                          </Badge>
                        </div>
                      ) : (
                        <div className="relative min-h-[300px] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-white/60" />
                          <Badge className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-[var(--brand-dark)]">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Öne Çıkan
                          </Badge>
                        </div>
                      )}

                      <div className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <Badge variant="secondary" className="bg-pink-50 text-pink-700 hover:bg-pink-100 border-0">
                            {featuredPost.category}
                          </Badge>
                          <span>•</span>
                          <span>{formatDate(featuredPost.createdAt)}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {calculateReadingTime(featuredPost.content)} dk
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="pt-3">
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] group-hover:gap-3 transition-all">
                            Yazıyı Oku <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )}

              {/* Regular Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(posts.length > 3 ? restPosts : posts).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                    <Card className="h-full overflow-hidden border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col">
                      {/* Image */}
                      {post.image ? (
                        <div className="relative aspect-video overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <Badge className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--brand-dark)] font-medium border-0">
                            {post.category}
                          </Badge>
                        </div>
                      ) : (
                        <div className="relative aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 flex items-center justify-center">
                          <span className="text-5xl font-bold text-white/40">
                            {post.title.charAt(0)}
                          </span>
                          <Badge className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--brand-dark)] font-medium border-0">
                            {post.category}
                          </Badge>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <span>{formatDate(post.createdAt)}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {calculateReadingTime(post.content)} dk okuma
                          </span>
                        </div>

                        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] group-hover:gap-2.5 transition-all">
                            Devamını Oku <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                          {post.tags.length > 0 && (
                            <span className="text-xs text-muted-foreground">
                              #{post.tags[0]}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Bottom CTA */}
              <BottomCTA whatsappLink={whatsappLink} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function EmptyBlogState({ whatsappLink }: { whatsappLink: string }) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Animated empty card */}
      <Card className="overflow-hidden border-2 border-dashed border-pink-200 bg-gradient-to-br from-pink-50/50 via-white to-cyan-50/50">
        <div className="p-10 md:p-14 text-center space-y-5">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-[var(--brand-primary)]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
            İlk Yazılar Yolda
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Beslenme, kilo yönetimi, insülin direnci ve sağlıklı yaşam üzerine
            uzman içerikler hazırlanıyor. Yeni yazılardan haberdar olmak için
            bültenimize katılın veya Instagram&apos;dan takip edin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
            <a
              href="https://instagram.com/dyt_ezgievgin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:opacity-90 text-white h-12 px-6"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram&apos;dan Takip Et
              </Button>
            </a>
            <Link href="/tarifler">
              <Button variant="outline" size="lg" className="h-12 px-6">
                Tariflere Göz At
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Topic preview cards */}
      <div className="mt-10">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
          Yakında bu konularda yazılar olacak
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Kilo Verme", color: "from-pink-100 to-pink-50" },
            { label: "İnsülin Direnci", color: "from-purple-100 to-purple-50" },
            { label: "Hamile Beslenmesi", color: "from-cyan-100 to-cyan-50" },
            { label: "Sporcu Beslenmesi", color: "from-green-100 to-green-50" },
          ].map((topic) => (
            <div
              key={topic.label}
              className={`bg-gradient-to-br ${topic.color} rounded-xl p-4 text-center border border-white/60`}
            >
              <p className="text-sm font-semibold text-[var(--brand-dark)]">
                {topic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA: while waiting, talk on WhatsApp */}
      <Card className="mt-10 p-6 md:p-8 bg-white border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <MessageCircle className="w-7 h-7 text-green-600" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-[var(--brand-dark)] mb-1">
              Beklemek yerine doğrudan sorabilirsiniz
            </h3>
            <p className="text-sm text-muted-foreground">
              Beslenme veya diyet konusunda merak ettiğiniz bir şey varsa,
              WhatsApp&apos;tan yazabilirsiniz — kişiye özel cevap.
            </p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-12 px-6 whitespace-nowrap">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp&apos;tan Yaz
            </Button>
          </a>
        </div>
      </Card>
    </div>
  );
}

function BottomCTA({ whatsappLink }: { whatsappLink: string }) {
  return (
    <Card className="p-8 md:p-10 text-center bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
      <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mb-3">
        Kişiye Özel Plana Hazır mısınız?
      </h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Yazıları okudunuz, kendinize özel bir plan istiyorsanız — birlikte
        çalışmaya başlayalım.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="h-12 px-8">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp&apos;tan Yaz
          </Button>
        </a>
        <Link href="/randevu">
          <Button variant="outline" size="lg" className="h-12 px-8">
            Randevu Sayfası
          </Button>
        </Link>
      </div>
    </Card>
  );
}
