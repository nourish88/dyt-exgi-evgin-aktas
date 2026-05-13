import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { RecipeForm } from "@/components/admin/recipe-form";
import { updateRecipe } from "@/lib/actions/recipes";

type Props = { params: Promise<{ id: string }> };

export default async function EditRecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = await prisma.recipe.findUnique({ where: { id } });
  if (!recipe) notFound();

  const action = updateRecipe.bind(null, id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tarifi Düzenle</h1>
        <p className="text-sm text-gray-500">{recipe.title}</p>
      </div>
      <Card className="p-6">
        <RecipeForm recipe={recipe} action={action} submitLabel="Güncelle" />
      </Card>
    </div>
  );
}
