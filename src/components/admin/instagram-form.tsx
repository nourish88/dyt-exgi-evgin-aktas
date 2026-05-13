"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUpload } from "./image-upload";
import type { InstagramPost } from "@prisma/client";

type Props = {
  post?: InstagramPost;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

export function InstagramForm({ post, action, submitLabel }: Props) {
  const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? "");

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="imageUrl" value={imageUrl} />

      <ImageUpload
        value={imageUrl}
        onChange={setImageUrl}
        label="Gönderi Görseli *"
      />

      <div className="space-y-1.5">
        <Label htmlFor="postUrl">Instagram Gönderi Linki</Label>
        <Input
          id="postUrl"
          name="postUrl"
          type="url"
          defaultValue={post?.postUrl ?? ""}
          placeholder="https://www.instagram.com/p/..."
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="label">Etiket (ör: Tarif, Motivasyon, Danışan)</Label>
        <Input
          id="label"
          name="label"
          defaultValue={post?.label ?? ""}
          placeholder="Motivasyon"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="caption">Açıklama (opsiyonel)</Label>
        <textarea
          id="caption"
          name="caption"
          defaultValue={post?.caption ?? ""}
          rows={3}
          placeholder="Gönderi açıklaması..."
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm resize-none"
        />
      </div>

      {post && (
        <div className="flex items-center gap-3">
          <input
            id="active"
            name="active"
            type="checkbox"
            defaultChecked={post.active}
            className="w-4 h-4 rounded border-gray-300"
          />
          <Label htmlFor="active" className="cursor-pointer">Aktif (sitede göster)</Label>
        </div>
      )}

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <Button
          type="submit"
          disabled={!imageUrl}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white hover:opacity-90"
        >
          {submitLabel}
        </Button>
        <a href="/admin/instagram" className="text-sm text-gray-500 hover:text-gray-700">İptal</a>
      </div>
    </form>
  );
}
