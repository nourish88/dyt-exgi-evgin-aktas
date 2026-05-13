"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function upsertSiteImage(key: string, url: string, alt?: string) {
  await prisma.siteImage.upsert({
    where: { key },
    create: { key, url, alt: alt ?? null },
    update: { url, alt: alt ?? undefined },
  });
  revalidatePath("/");
  revalidatePath("/hakkimda");
  revalidatePath("/admin/(protected)/gorseller");
}

export async function deleteSiteImage(key: string) {
  await prisma.siteImage.deleteMany({ where: { key } });
  revalidatePath("/");
  revalidatePath("/hakkimda");
  revalidatePath("/admin/(protected)/gorseller");
}
