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

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const published = formData.get("published") === "on";
  const tagsRaw = formData.get("tags") as string;
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

  const slug = slugify(title) + "-" + Date.now().toString(36);

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
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

  await prisma.blogPost.update({
    where: { id },
    data: { title, content, excerpt, category, image: image || null, published, tags },
  });

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
