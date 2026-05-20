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

export async function GET() {
  let posts: { slug: string; updatedAt: Date }[] = [];
  try {
    posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });
  } catch {
    posts = [];
  }

  const urls = posts
    .map(
      (p) =>
        `  <url>\n    <loc>${escapeXml(`${SITE_URL}/blog/${p.slug}`)}</loc>\n    <lastmod>${p.updatedAt.toISOString()}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
