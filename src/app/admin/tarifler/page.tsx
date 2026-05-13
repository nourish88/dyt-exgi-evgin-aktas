import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Clock, Flame } from "lucide-react";
import { deleteRecipe } from "@/lib/actions/recipes";

export default async function AdminTariflerPage() {
  const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tarifler</h1>
          <p className="text-sm text-gray-500">{recipes.length} tarif</p>
        </div>
        <Link href="/admin/tarifler/yeni">
          <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
            <Plus className="w-4 h-4" /> Yeni Tarif
          </Button>
        </Link>
      </div>

      {recipes.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-500 mb-4">Henüz tarif yok.</p>
          <Link href="/admin/tarifler/yeni">
            <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
              <Plus className="w-4 h-4" /> İlk Tarifi Ekle
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-3">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="p-4">
              <div className="flex items-center gap-4">
                {recipe.image && (
                  <img src={recipe.image} alt={recipe.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    {recipe.category && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">{recipe.category}</span>
                    )}
                    {recipe.difficulty && (
                      <span className="text-xs text-gray-400">{recipe.difficulty}</span>
                    )}
                  </div>
                  <p className="font-semibold text-gray-800 truncate">{recipe.title}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    {recipe.prepTime && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {recipe.prepTime + (recipe.cookTime ?? 0)} dk
                      </span>
                    )}
                    {recipe.calories && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Flame className="w-3 h-3" /> {recipe.calories} kcal
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Link href={`/admin/tarifler/${recipe.id}`}>
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteRecipe(recipe.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
