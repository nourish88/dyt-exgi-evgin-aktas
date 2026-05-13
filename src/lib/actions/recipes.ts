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

export async function createRecipe(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const difficulty = formData.get("difficulty") as string;
  const image = formData.get("image") as string;
  const prepTime = parseInt(formData.get("prepTime") as string) || null;
  const cookTime = parseInt(formData.get("cookTime") as string) || null;
  const servings = parseInt(formData.get("servings") as string) || 1;
  const calories = parseInt(formData.get("calories") as string) || null;

  const ingredientsRaw = formData.get("ingredients") as string;
  const ingredients = ingredientsRaw.split("\n").map((l) => l.trim()).filter(Boolean);

  const stepsRaw = formData.get("steps") as string;
  const steps = stepsRaw.split("\n").map((l) => l.trim()).filter(Boolean);

  const slug = slugify(title) + "-" + Date.now().toString(36);

  await prisma.recipe.create({
    data: {
      title, slug, description, category, difficulty,
      image: image || null, prepTime, cookTime, servings, calories,
      ingredients, steps,
    },
  });

  revalidatePath("/tarifler");
  revalidatePath("/admin/tarifler");
  redirect("/admin/tarifler");
}

export async function updateRecipe(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const difficulty = formData.get("difficulty") as string;
  const image = formData.get("image") as string;
  const prepTime = parseInt(formData.get("prepTime") as string) || null;
  const cookTime = parseInt(formData.get("cookTime") as string) || null;
  const servings = parseInt(formData.get("servings") as string) || 1;
  const calories = parseInt(formData.get("calories") as string) || null;

  const ingredientsRaw = formData.get("ingredients") as string;
  const ingredients = ingredientsRaw.split("\n").map((l) => l.trim()).filter(Boolean);

  const stepsRaw = formData.get("steps") as string;
  const steps = stepsRaw.split("\n").map((l) => l.trim()).filter(Boolean);

  await prisma.recipe.update({
    where: { id },
    data: {
      title, description, category, difficulty,
      image: image || null, prepTime, cookTime, servings, calories,
      ingredients, steps,
    },
  });

  revalidatePath("/tarifler");
  revalidatePath("/admin/tarifler");
  redirect("/admin/tarifler");
}

export async function deleteRecipe(id: string) {
  await prisma.recipe.delete({ where: { id } });
  revalidatePath("/tarifler");
  revalidatePath("/admin/tarifler");
}
