import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Flame } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ImageSlider } from "@/components/ui/image-slider";
import { placeholderImages } from "@/lib/placeholder-images";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Sağlıklı Tarifler | Diyetisyen Ezgi Evgin Aktaş",
  description:
    "Lezzetli ve sağlıklı tarifler. Düşük kalorili, fit ve besleyici yemek tarifleri.",
};

export default async function RecipesPage() {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sağlıklı{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Tarifler
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Lezzetli, sağlıklı ve kolay tariflerle mutfağınıza renk katın
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {recipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20"
                >
                  {recipe.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                      {recipe.category && (
                        <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm">
                          {recipe.category}
                        </Badge>
                      )}
                      {recipe.difficulty && (
                        <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm">
                          {recipe.difficulty}
                        </Badge>
                      )}
                    </div>
                  ) : (
                    <div className="relative h-48 bg-linear-to-br from-green-100 via-yellow-100 to-orange-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/40">{recipe.title.charAt(0)}</span>
                      {recipe.category && (
                        <Badge className="absolute top-4 left-4 bg-white/90">{recipe.category}</Badge>
                      )}
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>

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
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <ImageSlider
        images={placeholderImages.recipeMoments}
        title="Lezzetli Anlarımız"
        autoplay={true}
        autoplayInterval={6500}
      />
    </div>
  );
}
