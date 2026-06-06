import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  ChefHat,
  Clock,
  Flame,
  MessageCircle,
  Scale,
  Users,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { ShareButtons } from "@/components/blog/share-buttons";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

async function getRecipe(slug: string) {
  return prisma.recipe.findUnique({
    where: { slug },
  });
}

function stripLegacyRecipeSuffix(slug: string) {
  return slug.replace(/-[a-z0-9]{6,}$/i, "");
}

async function getLegacyRecipe(slug: string) {
  const cleanSlug = stripLegacyRecipeSuffix(slug);
  if (cleanSlug === slug) return null;

  return prisma.recipe.findUnique({
    where: { slug: cleanSlug },
  });
}

async function getRelatedRecipes(currentId: string, category?: string | null) {
  return prisma.recipe.findMany({
    where: {
      id: { not: currentId },
      ...(category ? { category } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 3,
  });
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function minutesToIsoDuration(minutes?: number | null) {
  if (!minutes) return undefined;
  return `PT${minutes}M`;
}

function getTotalTime(prepTime?: number | null, cookTime?: number | null) {
  return (prepTime ?? 0) + (cookTime ?? 0);
}

function absoluteImageUrl(image?: string | null) {
  if (!image) return undefined;
  if (image.startsWith("http")) return image;
  return `https://ezgievginaktas.com${image}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = (await getRecipe(slug)) ?? (await getLegacyRecipe(slug));

  if (!recipe) {
    return { title: "Tarif Bulunamadı" };
  }

  const url = `https://ezgievginaktas.com/tarifler/${recipe.slug}`;
  const image = absoluteImageUrl(recipe.image);

  return {
    title: recipe.title,
    description: recipe.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: recipe.title,
      description: recipe.description,
      images: image ? [{ url: image, alt: recipe.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const recipe = await getRecipe(slug);

  if (!recipe) {
    const legacyRecipe = await getLegacyRecipe(slug);
    if (legacyRecipe) permanentRedirect(`/tarifler/${legacyRecipe.slug}`);
  }

  if (!recipe) notFound();

  const relatedRecipes = await getRelatedRecipes(recipe.id, recipe.category);
  const totalTime = getTotalTime(recipe.prepTime, recipe.cookTime);
  const recipeUrl = `https://ezgievginaktas.com/tarifler/${recipe.slug}`;
  const recipeImage = absoluteImageUrl(recipe.image);
  const whatsappLink = buildWhatsAppApiUrl(
    `Merhaba, "${recipe.title}" tarifinizi gördüm. Bana uygun beslenme planı hakkında bilgi almak istiyorum.`,
    `recipe_${recipe.slug}`
  );

  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: recipeImage ? [recipeImage] : undefined,
    author: {
      "@type": "Person",
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
      url: "https://ezgievginaktas.com/hakkimda",
    },
    datePublished: recipe.createdAt.toISOString(),
    dateModified: recipe.updatedAt.toISOString(),
    prepTime: minutesToIsoDuration(recipe.prepTime),
    cookTime: minutesToIsoDuration(recipe.cookTime),
    totalTime: minutesToIsoDuration(totalTime),
    recipeYield: `${recipe.servings} porsiyon`,
    recipeCategory: recipe.category ?? "Sağlıklı Tarif",
    recipeCuisine: "Sağlıklı beslenme",
    keywords: [
      recipe.title,
      recipe.category,
      "sağlıklı tarif",
      "diyet tarif",
      "fit tarif",
      "diyetisyen tarifi",
    ]
      .filter(Boolean)
      .join(", "),
    nutrition: recipe.calories
      ? {
          "@type": "NutritionInformation",
          calories: `${recipe.calories} calories`,
        }
      : undefined,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
    mainEntityOfPage: recipeUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://ezgievginaktas.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sağlıklı Tarifler",
        item: "https://ezgievginaktas.com/tarifler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: recipe.title,
        item: recipeUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {recipe.image && (
        <div className="relative h-64 md:h-96 overflow-hidden bg-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recipe.image}
            alt={`${recipe.title} tarifi`}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent" />
        </div>
      )}

      <article className={`container mx-auto max-w-4xl px-4 ${recipe.image ? "-mt-32 md:-mt-48 relative z-10" : "py-12"}`}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <Link
            href="/tarifler"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Tariflere dön
          </Link>

          <header>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {recipe.category && (
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-0">
                  {recipe.category}
                </Badge>
              )}
              {recipe.difficulty && (
                <Badge variant="outline" className="text-xs">
                  {recipe.difficulty}
                </Badge>
              )}
              <Badge variant="outline" className="text-xs">
                Diyetisyen tarifi
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              {recipe.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {recipe.description}
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 pb-6 border-b border-gray-100">
              <RecipeMeta
                icon={<Clock className="w-4 h-4" />}
                label="Toplam süre"
                value={totalTime ? `${totalTime} dk` : "Pratik"}
              />
              <RecipeMeta
                icon={<Users className="w-4 h-4" />}
                label="Porsiyon"
                value={`${recipe.servings} kişilik`}
              />
              <RecipeMeta
                icon={<Flame className="w-4 h-4" />}
                label="Kalori"
                value={recipe.calories ? `${recipe.calories} kcal` : "Belirtilmedi"}
              />
              <RecipeMeta
                icon={<ChefHat className="w-4 h-4" />}
                label="Yayın tarihi"
                value={formatDate(recipe.createdAt)}
              />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mt-10">
            <section>
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
                Malzemeler
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex gap-3 text-gray-700 leading-relaxed">
                    <Scale className="w-4 h-4 mt-1 text-[var(--brand-primary)] shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
                Yapılışı
              </h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={`${index}-${step}`} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 font-bold text-sm flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div className="mt-10 rounded-2xl border border-pink-100 bg-pink-50/50 p-5">
            <h2 className="font-bold text-lg text-[var(--brand-dark)] mb-2">
              Diyetisyen notu
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Bu tarif sağlıklı bir alternatif sunar; ancak porsiyon miktarı,
              öğün zamanı ve yanında tüketilecek besinler kişinin hedefi,
              kan değerleri ve yaşam düzenine göre değişebilir.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <ShareButtons url={recipeUrl} title={recipe.title} />
          </div>
        </div>

        <Card className="mt-8 p-6 md:p-8 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <MessageCircle className="w-7 h-7 text-[var(--brand-primary)]" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg text-[var(--brand-dark)] mb-1">
                Bu tarif size uygun mu?
              </h2>
              <p className="text-sm text-muted-foreground">
                Kilo verme, insülin direnci, PCOS veya hamilelik gibi özel
                durumlarda tarifleri kişisel plana göre uyarlamak daha doğru olur.
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

        {relatedRecipes.length > 0 && (
          <section className="mt-12 pb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                Benzer Tarifler
              </h2>
              <Link
                href="/tarifler"
                className="text-sm font-medium text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
              >
                Tümü <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedRecipes.map((related) => (
                <Link
                  key={related.id}
                  href={`/tarifler/${related.slug}`}
                  className="group block"
                >
                  <Card className="h-full overflow-hidden border-2 hover:border-primary/20 hover:shadow-lg transition-all">
                    {related.image ? (
                      <div className="aspect-video overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={related.image}
                          alt={`${related.title} tarifi`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 flex items-center justify-center">
                        <ChefHat className="w-10 h-10 text-white/60" />
                      </div>
                    )}
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1.5">
                        {getTotalTime(related.prepTime, related.cookTime) || "Pratik"} dk
                      </p>
                      <h3 className="font-semibold text-sm leading-snug text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-12 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/tarifler">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tüm Tarifler
            </Button>
          </Link>
          <Link href="/randevu">
            <Button>
              Randevu Al
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </footer>
      </article>
    </main>
  );
}

function RecipeMeta({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-[var(--brand-primary)] mb-2">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {label}
        </span>
      </div>
      <p className="font-bold text-[var(--brand-dark)]">{value}</p>
    </div>
  );
}
