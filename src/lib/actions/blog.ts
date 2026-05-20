"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Temiz slug üretir: önce verilen slug (varsa) ya da başlıktan slugify,
// çakışma halinde -2, -3 ... suffix ekler. SEO için Date.now() eki kaldırıldı.
async function generateUniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const root = slugify(base);
  let candidate = root || "blog";
  let i = 1;
  while (true) {
    const existing = await prisma.blogPost.findUnique({ where: { slug: candidate } });
    if (!existing || existing.id === ignoreId) return candidate;
    i += 1;
    candidate = `${root}-${i}`;
  }
}

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const published = formData.get("published") === "on";
  const tagsRaw = formData.get("tags") as string;
  const customSlug = (formData.get("slug") as string | null)?.trim();
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

  const slug = await generateUniqueSlug(customSlug || title);

  await prisma.blogPost.create({
    data: { title, slug, content, excerpt, category, image: image || null, published, tags },
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updateBlogPost(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const published = formData.get("published") === "on";
  const tagsRaw = formData.get("tags") as string;
  const customSlug = (formData.get("slug") as string | null)?.trim();
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

  const data: {
    title: string;
    content: string;
    excerpt: string;
    category: string;
    image: string | null;
    published: boolean;
    tags: string[];
    slug?: string;
  } = { title, content, excerpt, category, image: image || null, published, tags };

  if (customSlug) {
    data.slug = await generateUniqueSlug(customSlug, id);
  }

  await prisma.blogPost.update({ where: { id }, data });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deleteBlogPost(id: string) {
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function togglePublished(id: string, published: boolean) {
  await prisma.blogPost.update({ where: { id }, data: { published } });
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}
