import { Card } from "@/components/ui/card";
import { RecipeForm } from "@/components/admin/recipe-form";
import { createRecipe } from "@/lib/actions/recipes";

export default function NewRecipePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Yeni Tarif</h1>
      </div>
      <Card className="p-6">
        <RecipeForm action={createRecipe} submitLabel="Tarifi Kaydet" />
      </Card>
    </div>
  );
}
