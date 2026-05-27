"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUpload } from "./image-upload";
import type { Recipe } from "@prisma/client";

const CATEGORIES = ["Kahvaltı", "Öğle Yemeği", "Akşam Yemeği", "Ara Öğün", "Salata", "Çorba", "Ana Yemek", "Tatlı", "İçecek", "Atıştırmalık"];
const DIFFICULTIES = ["Kolay", "Orta", "Zor"];

type Props = {
  recipe?: Recipe;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

export function RecipeForm({ recipe, action, submitLabel }: Props) {
  const [imageUrl, setImageUrl] = useState(recipe?.image ?? "");

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="image" value={imageUrl} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="title">Tarif Adı *</Label>
          <Input id="title" name="title" defaultValue={recipe?.title} required placeholder="Örn: Kinoa Salatası" />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="description">Açıklama *</Label>
          <textarea
            id="description"
            name="description"
            defaultValue={recipe?.description}
            required
            rows={3}
            placeholder="Tarif hakkında kısa açıklama"
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm resize-none"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="category">Kategori</Label>
          <select
            id="category"
            name="category"
            defaultValue={recipe?.category ?? ""}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
          >
            <option value="">Seçin</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="difficulty">Zorluk</Label>
          <select
            id="difficulty"
            name="difficulty"
            defaultValue={recipe?.difficulty ?? ""}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
          >
            <option value="">Seçin</option>
            {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="prepTime">Hazırlık Süresi (dk)</Label>
          <Input id="prepTime" name="prepTime" type="number" min="0" defaultValue={recipe?.prepTime ?? ""} placeholder="15" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="cookTime">Pişirme Süresi (dk)</Label>
          <Input id="cookTime" name="cookTime" type="number" min="0" defaultValue={recipe?.cookTime ?? ""} placeholder="30" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="servings">Kaç Kişilik</Label>
          <Input id="servings" name="servings" type="number" min="1" defaultValue={recipe?.servings ?? 1} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="calories">Kalori (kcal, porsiyon başına)</Label>
          <Input id="calories" name="calories" type="number" min="0" defaultValue={recipe?.calories ?? ""} placeholder="250" />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <ImageUpload
            value={imageUrl}
            onChange={setImageUrl}
            label="Tarif Görseli"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="ingredients">Malzemeler (her satıra bir malzeme) *</Label>
          <textarea
            id="ingredients"
            name="ingredients"
            defaultValue={recipe?.ingredients?.join("\n")}
            required
            rows={8}
            placeholder="1 su bardağı kinoa&#10;2 yemek kaşığı zeytinyağı&#10;1 limon suyu&#10;..."
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm resize-y font-mono"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="steps">Yapılış (her satıra bir adım) *</Label>
          <textarea
            id="steps"
            name="steps"
            defaultValue={recipe?.steps?.join("\n")}
            required
            rows={8}
            placeholder="Kinoayı yıkayın ve 2 su bardağı su ile haşlayın.&#10;Zeytinyağı ve limon suyunu karıştırın.&#10;..."
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm resize-y"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
          {submitLabel}
        </Button>
        <a href="/admin/tarifler" className="text-sm text-gray-500 hover:text-gray-700">
          İptal
        </a>
      </div>
    </form>
  );
}
