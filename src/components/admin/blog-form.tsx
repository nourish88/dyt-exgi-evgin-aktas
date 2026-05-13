"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { BlogPost } from "@prisma/client";

const CATEGORIES = [
  "Beslenme", "Kilo Yönetimi", "Tarifler", "Sağlıklı Yaşam",
  "Spor Beslenmesi", "Diyet İpuçları", "Çocuk Beslenmesi", "Gebelik Beslenmesi",
];

type Props = {
  post?: BlogPost;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

export function BlogForm({ post, action, submitLabel }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={action} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="title">Başlık *</Label>
          <Input id="title" name="title" defaultValue={post?.title} required placeholder="Blog yazısı başlığı" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="category">Kategori *</Label>
          <select
            id="category"
            name="category"
            defaultValue={post?.category}
            required
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
          >
            <option value="">Kategori seçin</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="tags">Etiketler (virgülle ayırın)</Label>
          <Input
            id="tags"
            name="tags"
            defaultValue={post?.tags?.join(", ")}
            placeholder="diyet, sağlık, beslenme"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="excerpt">Kısa Açıklama *</Label>
          <textarea
            id="excerpt"
            name="excerpt"
            defaultValue={post?.excerpt}
            required
            rows={2}
            placeholder="Blog yazısının kısa özeti (liste sayfasında gösterilir)"
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm resize-none"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="content">İçerik * (Markdown desteklenir)</Label>
          <textarea
            id="content"
            name="content"
            defaultValue={post?.content}
            required
            rows={18}
            placeholder="## Başlık&#10;&#10;Yazı içeriği... Markdown kullanabilirsiniz.&#10;&#10;**Kalın**, *italik*, - liste, ### Alt başlık"
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm font-mono resize-y"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <Label htmlFor="image">Kapak Görseli URL</Label>
          <Input
            id="image"
            name="image"
            type="url"
            defaultValue={post?.image ?? ""}
            placeholder="https://... veya /images/blog/gorsel.jpg"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            id="published"
            name="published"
            type="checkbox"
            defaultChecked={post?.published ?? false}
            className="w-4 h-4 rounded border-gray-300"
          />
          <Label htmlFor="published" className="cursor-pointer">Hemen yayına al</Label>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
          {submitLabel}
        </Button>
        <a href="/admin/blog" className="text-sm text-gray-500 hover:text-gray-700">
          İptal
        </a>
      </div>
    </form>
  );
}
