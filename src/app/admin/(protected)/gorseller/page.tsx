import { prisma } from "@/lib/prisma";
import { heroSlides } from "@/lib/hero-slides";
import { SiteImageUploader } from "@/components/admin/site-image-uploader";

export default async function GorsellerAdminPage() {
  const siteImages = await prisma.siteImage.findMany();
  const imageMap: Record<string, string> = {};
  for (const img of siteImages) {
    imageMap[img.key] = img.url;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Site Görselleri</h1>
        <p className="text-sm text-gray-500 mt-1">
          Ana sayfadaki slayt görsellerini buradan güncelleyebilirsiniz.
          Görsel yüklemediğiniz slaytta varsayılan görsel görünmeye devam eder.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-base font-semibold text-gray-700 border-b border-gray-200 pb-2">
          Ana Sayfa Slayt Görselleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {heroSlides.map((slide) => (
            <SiteImageUploader
              key={slide.id}
              imageKey={`hero-${slide.id}`}
              label={`Slayt ${slide.id}`}
              subtitle={slide.title.slice(0, 50) + (slide.title.length > 50 ? "…" : "")}
              currentUrl={imageMap[`hero-${slide.id}`] ?? slide.backgroundImage ?? null}
              isOverridden={!!imageMap[`hero-${slide.id}`]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
