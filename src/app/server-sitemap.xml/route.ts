import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ezgievginaktas.com";

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) =>
    c === "<"
      ? "&lt;"
      : c === ">"
      ? "&gt;"
      : c === "&"
      ? "&amp;"
      : c === "'"
      ? "&apos;"
      : "&quot;"
  );
}

function absoluteImageUrl(image?: string | null) {
  if (!image) return undefined;
  if (image.startsWith("http")) return escapeXml(image);
  return escapeXml(`${SITE_URL}${image}`);
}

export async function GET() {
  let posts: { slug: string; updatedAt: Date; image: string | null }[] = [];
  let recipes: { slug: string; updatedAt: Date; image: string | null }[] = [];
  try {
    posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true, image: true },
      orderBy: { updatedAt: "desc" },
    });
    recipes = await prisma.recipe.findMany({
      select: { slug: true, updatedAt: true, image: true },
      orderBy: { updatedAt: "desc" },
    });
  } catch {
    posts = [];
    recipes = [];
  }

  const blogUrls = posts.map((p) => {
    const imageUrl = absoluteImageUrl(p.image);
    const imageTag = imageUrl
      ? `\n    <image:image>\n      <image:loc>${imageUrl}</image:loc>\n    </image:image>`
      : "";
    return `  <url>\n    <loc>${escapeXml(`${SITE_URL}/blog/${p.slug}`)}</loc>\n    <lastmod>${p.updatedAt.toISOString()}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>${imageTag}\n  </url>`;
  });

  const recipeUrls = recipes.map((r) => {
    const imageUrl = absoluteImageUrl(r.image);
    const imageTag = imageUrl
      ? `\n    <image:image>\n      <image:loc>${imageUrl}</image:loc>\n    </image:image>`
      : "";
    return `  <url>\n    <loc>${escapeXml(`${SITE_URL}/tarifler/${r.slug}`)}</loc>\n    <lastmod>${r.updatedAt.toISOString()}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>${imageTag}\n  </url>`;
  });
  const urls = [...blogUrls, ...recipeUrls].join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
