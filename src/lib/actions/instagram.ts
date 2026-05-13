"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createInstagramPost(formData: FormData) {
  const imageUrl = formData.get("imageUrl") as string;
  const postUrl = formData.get("postUrl") as string;
  const caption = formData.get("caption") as string;
  const label = formData.get("label") as string;

  if (!imageUrl) return;

  const maxOrder = await prisma.instagramPost.aggregate({ _max: { order: true } });
  const order = (maxOrder._max.order ?? 0) + 1;

  await prisma.instagramPost.create({
    data: { imageUrl, postUrl: postUrl || null, caption: caption || null, label: label || null, order },
  });

  revalidatePath("/");
  revalidatePath("/admin/(protected)/instagram");
  redirect("/admin/instagram");
}

export async function updateInstagramPost(id: string, formData: FormData) {
  const imageUrl = formData.get("imageUrl") as string;
  const postUrl = formData.get("postUrl") as string;
  const caption = formData.get("caption") as string;
  const label = formData.get("label") as string;
  const active = formData.get("active") === "on";

  await prisma.instagramPost.update({
    where: { id },
    data: { imageUrl, postUrl: postUrl || null, caption: caption || null, label: label || null, active },
  });

  revalidatePath("/");
  revalidatePath("/admin/(protected)/instagram");
  redirect("/admin/instagram");
}

export async function deleteInstagramPost(id: string) {
  await prisma.instagramPost.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/(protected)/instagram");
}

export async function reorderInstagramPost(id: string, direction: "up" | "down") {
  const post = await prisma.instagramPost.findUnique({ where: { id } });
  if (!post) return;

  const neighbor = await prisma.instagramPost.findFirst({
    where: { order: direction === "up" ? { lt: post.order } : { gt: post.order } },
    orderBy: { order: direction === "up" ? "desc" : "asc" },
  });

  if (!neighbor) return;

  await prisma.$transaction([
    prisma.instagramPost.update({ where: { id }, data: { order: neighbor.order } }),
    prisma.instagramPost.update({ where: { id: neighbor.id }, data: { order: post.order } }),
  ]);

  revalidatePath("/");
  revalidatePath("/admin/(protected)/instagram");
}
