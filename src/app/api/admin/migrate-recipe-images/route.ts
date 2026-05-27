import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function contentTypeFor(file: string): string {
  const ext = file.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  if (ext === "png") return "image/png";
  if (ext === "webp") return "image/webp";
  if (ext === "gif") return "image/gif";
  return "application/octet-stream";
}

function isAlreadyOnBlob(url: string): boolean {
  return url.includes(".vercel-storage.com") || url.includes("blob.vercel-storage");
}

export async function POST() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN eksik" }, { status: 500 });
  }

  const recipes = await prisma.recipe.findMany({
    select: { id: true, slug: true, image: true },
  });

  const results: Array<{ slug: string; status: string; url?: string; error?: string }> = [];

  for (const r of recipes) {
    if (!r.image) {
      results.push({ slug: r.slug, status: "skip:no-image" });
      continue;
    }
    if (isAlreadyOnBlob(r.image)) {
      results.push({ slug: r.slug, status: "skip:already-blob" });
      continue;
    }

    try {
      const res = await fetch(r.image);
      if (!res.ok) throw new Error(`fetch ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const fileName = r.image.split("/").pop() ?? `${r.slug}.jpg`;
      const key = `uploads/${Date.now()}-${fileName}`;
      const blob = await put(key, buf, {
        access: "public",
        contentType: contentTypeFor(fileName),
      });
      await prisma.recipe.update({
        where: { id: r.id },
        data: { image: blob.url },
      });
      results.push({ slug: r.slug, status: "migrated", url: blob.url });
    } catch (e) {
      results.push({
        slug: r.slug,
        status: "error",
        error: e instanceof Error ? e.message : String(e),
      });
    }
  }

  return NextResponse.json({ results });
}
