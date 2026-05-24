import { PrismaClient } from "@prisma/client";

const SLUG =
  "online-diyet-nasil-calisir-gercekten-yuz-yuze-diyet-kadar-etkili-mi";

const FAQ_HEADINGS = [
  "Online Diyette Tartı Kontrolü Nasıl Yapılıyor?",
  "Online Diyet Herkes İçin Uygun mu?",
  "Sadece Diyet Listesi mi Gönderiyorsunuz?",
  "Online Diyet Ankara Dışından da Alınabilir mi?",
  "Kalıcı Kilo Kontrolünün Anahtarı Nedir?",
];

function fixContent(raw: string): string {
  let content = raw;

  // Sayfa başlığı zaten H1 olarak render ediliyor; içerikteki tekrar eden H1 kaldırılır.
  content = content.replace(
    /^# Online Diyet Nasıl Çalışır\? Yüz Yüze Diyet Kadar Etkili mi\?\r?\n\r?\n/,
    ""
  );

  content = content.replace(
    "👉 Online programlarımı incelemek için ilgili sayfayı ziyaret edebilirsiniz.",
    "👉 [Online programlarımızı](/programlar) inceleyebilir veya [online diyet sayfasından](/online-diyet-ankara) detaylı bilgi alabilirsiniz."
  );

  content = content.replace(
    "Yüz yüze görüşmeyi tercih eden danışanlar için Eryaman / Etimesgut ofisim her zaman bir seçenek olarak devam ediyor.",
    "Yüz yüze görüşmeyi tercih eden danışanlar için [Eryaman / Etimesgut ofisimiz](/eryaman-diyetisyen) her zaman bir seçenek olarak devam ediyor."
  );

  content = content.replace(
    "Süreç hakkında detaylı bilgi almak için online diyet sayfasını inceleyebilir veya randevu oluşturabilirsiniz.",
    "Süreç hakkında detaylı bilgi almak için [online diyet sayfasını](/online-diyet-ankara) inceleyebilir veya [randevu oluşturabilirsiniz](/randevu)."
  );

  content = content.replace(
    "📱 WhatsApp üzerinden iletişime geçebilir,  \n📅 randevu oluşturabilir  \nveya online program detaylarını inceleyebilirsiniz.",
    "📱 [WhatsApp üzerinden iletişime geçebilir](/iletisim), 📅 [randevu oluşturabilir](/randevu) veya [online program detaylarını](/programlar) inceleyebilirsiniz."
  );

  for (const heading of FAQ_HEADINGS) {
    content = content.replace(`## ${heading}`, `### ${heading}`);
  }

  return content;
}

async function main() {
  const prisma = new PrismaClient();
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug: SLUG } });

    if (!post) {
      console.error("Blog post not found:", SLUG);
      process.exit(1);
    }

    const updated = fixContent(post.content);
    if (updated === post.content) {
      console.log("No changes needed.");
      return;
    }

    await prisma.blogPost.update({
      where: { id: post.id },
      data: { content: updated },
    });

    console.log("Updated online diyet blog content.");
    console.log("Sample links:", updated.match(/\[.+?\]\(.+?\)/g)?.slice(0, 5));
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(console.error);
