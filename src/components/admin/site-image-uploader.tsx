"use client";

import { useState, useRef } from "react";
import { Upload, X, RotateCcw } from "lucide-react";
import { upsertSiteImage, deleteSiteImage } from "@/lib/actions/site-images";

type Props = {
  imageKey: string;
  label: string;
  subtitle?: string;
  currentUrl: string | null;
  isOverridden: boolean;
};

export function SiteImageUploader({ imageKey, label, subtitle, currentUrl, isOverridden }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(currentUrl);
  const [overridden, setOverridden] = useState(isOverridden);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError("");
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Yükleme hatası");
      await upsertSiteImage(imageKey, json.url);
      setPreviewUrl(json.url);
      setOverridden(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Hata");
    } finally {
      setUploading(false);
    }
  };

  const handleReset = async () => {
    await deleteSiteImage(imageKey);
    setOverridden(false);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Image preview */}
      <div className="relative h-40 bg-gray-100">
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewUrl} alt={label} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <Upload className="w-8 h-8" />
          </div>
        )}
        {overridden && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
            Özel görsel
          </div>
        )}
      </div>

      {/* Info + actions */}
      <div className="p-3">
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5 truncate">{subtitle}</p>}

        <div className="flex items-center gap-2 mt-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            <Upload className="w-3.5 h-3.5" />
            {uploading ? "Yükleniyor…" : "Görsel Yükle"}
          </button>

          {overridden && (
            <form action={handleReset}>
              <button
                type="submit"
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
                title="Varsayılan görsele dön"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Sıfırla</span>
              </button>
            </form>
          )}
        </div>

        {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </div>
  );
}
