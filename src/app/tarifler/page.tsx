import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Clock, Flame, MessageCircle, Users } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Sağlıklı & Diyet Tarifleri",
  description:
    "Diyetisyen onaylı lezzetli ve sağlıklı tarifler: düşük kalorili, fit, besleyici ve kolay yemek tarifleriyle mutfağınıza renk katın.",
  alternates: { canonical: "https://ezgievginaktas.com/tarifler" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/tarifler",
    title: "Sağlıklı Tarifler | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Diyetisyen onaylı, düşük kalorili ve besleyici sağlıklı yemek tarifleri.",
  },
};

export default async function RecipesPage() {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
  });
  const whatsappLink = buildWhatsAppApiUrl(
    "Merhaba, sağlıklı tariflerinizi inceledim. Bana uygun beslenme planı hakkında bilgi almak istiyorum.",
    "recipes_page"
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
              <ChefHat className="w-3.5 h-3.5" />
              Diyetisyen Onaylı Tarifler
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sağlıklı{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Tarifler
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tatlı krizleri, ara öğünler ve dengeli tabaklar için pratik,
              porsiyon kontrollü ve günlük hayata uyarlanabilir sağlıklı tarifler.
            </p>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {recipes.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Çok yakında lezzetli ve sağlıklı tarifler burada olacak!
              </p>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                  <Link key={recipe.id} href={`/tarifler/${recipe.slug}`} className="block group">
                    <Card className="h-full overflow-hidden border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col">
                      {recipe.image ? (
                        <div className="relative aspect-video overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={recipe.image}
                            alt={`${recipe.title} sağlıklı tarif görseli`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          {recipe.category && (
                            <Badge className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--brand-dark)] font-medium border-0">
                              {recipe.category}
                            </Badge>
                          )}
                          {recipe.difficulty && (
                            <Badge variant="secondary" className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm">
                              {recipe.difficulty}
                            </Badge>
                          )}
                        </div>
                      ) : (
                        <div className="relative aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 flex items-center justify-center">
                          <ChefHat className="w-14 h-14 text-white/60" />
                          {recipe.category && (
                            <Badge className="absolute top-4 left-4 bg-white/95 text-[var(--brand-dark)] border-0">
                              {recipe.category}
                            </Badge>
                          )}
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col">
                        <h2 className="text-lg font-bold mb-2 line-clamp-2 text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors leading-snug">
                          {recipe.title}
                        </h2>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1 leading-relaxed">
                          {recipe.description}
                        </p>

                        <div className="grid grid-cols-3 gap-2 pt-4 border-t text-xs">
                          {(recipe.prepTime || recipe.cookTime) && (
                            <div className="flex flex-col items-center gap-1">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="font-medium">{(recipe.prepTime ?? 0) + (recipe.cookTime ?? 0)} dk</span>
                            </div>
                          )}
                          <div className="flex flex-col items-center gap-1">
                            <Users className="w-4 h-4 text-secondary" />
                            <span className="font-medium">{recipe.servings} kişilik</span>
                          </div>
                          {recipe.calories && (
                            <div className="flex flex-col items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span className="font-medium">{recipe.calories} kcal</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] group-hover:gap-2.5 transition-all">
                            Tarifi Gör <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <Card className="p-6 md:p-8 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7 text-[var(--brand-primary)]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-[var(--brand-dark)] mb-1">
                      Tarifler güzel, plan kişiye özel olmalı
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Sağlıklı tarifler günlük hayatı kolaylaştırır; porsiyon,
                      öğün saati ve besin seçimi ise hedefinize göre planlanmalıdır.
                    </p>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="h-12 px-6 whitespace-nowrap">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp&apos;tan Sor
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
