import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/image-slider";
import { placeholderImages } from "@/lib/placeholder-images";
import { Clock, Users, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Sağlıklı Tarifler | Diyetisyen Ezgi Evgin Aktaş",
  description:
    "Lezzetli ve sağlıklı tarifler. Düşük kalorili, fit ve besleyici yemek tarifleri.",
};

const recipes = [
  {
    id: 1,
    title: "Kinoa Salatası",
    description:
      "Protein açısından zengin, doyurucu ve lezzetli kinoa salatası tarifi.",
    category: "Salata",
    difficulty: "Kolay",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    calories: 280,
    slug: "kinoa-salatasi",
  },
  {
    id: 2,
    title: "Fırında Somon",
    description:
      "Omega-3 açısından zengin, sağlıklı ve pratik fırında somon tarifi.",
    category: "Ana Yemek",
    difficulty: "Orta",
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    calories: 320,
    slug: "firinda-somon",
  },
  {
    id: 3,
    title: "Yulaf Ezmeli Kurabiye",
    description:
      "Şekersiz ve sağlıklı yulaf ezmeli kurabiye tarifi. Tatlı krizlerinize çözüm.",
    category: "Tatlı",
    difficulty: "Kolay",
    prepTime: 10,
    cookTime: 15,
    servings: 12,
    calories: 85,
    slug: "yulaf-ezmeli-kurabiye",
  },
  {
    id: 4,
    title: "Yeşil Detoks Smoothie",
    description: "Vitaminlerle dolu, enerji veren yeşil smoothie tarifi.",
    category: "İçecek",
    difficulty: "Çok Kolay",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 120,
    slug: "yesil-detoks-smoothie",
  },
  {
    id: 5,
    title: "Tavuklu Wrap",
    description:
      "Pratik ve doyurucu, protein açısından zengin tavuklu wrap tarifi.",
    category: "Ara Öğün",
    difficulty: "Kolay",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    calories: 350,
    slug: "tavuklu-wrap",
  },
  {
    id: 6,
    title: "Sebzeli Omlet",
    description:
      "Kahvaltı için ideal, vitamin ve mineral deposu sebzeli omlet.",
    category: "Kahvaltı",
    difficulty: "Çok Kolay",
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    calories: 220,
    slug: "sebzeli-omlet",
  },
];

const categories = [
  "Tümü",
  "Kahvaltı",
  "Ana Yemek",
  "Salata",
  "Ara Öğün",
  "Tatlı",
  "İçecek",
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Recipes Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/tarifler/${recipe.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/30">
                        {recipe.title.charAt(0)}
                      </div>
                    </div>
                    {/* Badges */}
                    <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm">
                      {recipe.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
                    >
                      {recipe.difficulty}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {recipe.description}
                    </p>

                    {/* Meta Info */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t text-xs">
                      <div className="flex flex-col items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium">
                          {recipe.prepTime + recipe.cookTime} dk
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="font-medium">
                          {recipe.servings} kişilik
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">
                          {recipe.calories} kcal
                        </span>
                      </div>
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
              Daha Fazla Tarif Yükle
            </Button>
          </div>
        </div>
      </section>

      {/* Lezzetli Anlarımız */}
      <ImageSlider
        images={placeholderImages.recipeMoments}
        title="Lezzetli Anlarımız"
        autoplay={true}
        autoplayInterval={6500}
      />
    </div>
  );
}
