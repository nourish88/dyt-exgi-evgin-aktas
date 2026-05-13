"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

type Props = {
  value: string;
  onChange: (url: string) => void;
  label?: string;
};

export function ImageUpload({ value, onChange, label = "Görsel" }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError("");
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const json = await res
        .json()
        .catch(() => ({ error: "Sunucu görsel yükleme cevabını okuyamadı." }));
      if (!res.ok) throw new Error(json.error ?? "Yükleme hatası");
      if (!json.url) throw new Error("Yükleme tamamlandı ama görsel URL'si alınamadı.");
      onChange(json.url);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Hata");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-700">{label}</p>

      {value ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
          <img src={value} alt="Yüklenen görsel" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="w-full h-36 rounded-lg border-2 border-dashed border-gray-300 hover:border-pink-400 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-gray-50 hover:bg-pink-50"
        >
          {uploading ? (
            <p className="text-sm text-gray-500">Yükleniyor...</p>
          ) : (
            <>
              <Upload className="w-6 h-6 text-gray-400" />
              <p className="text-sm text-gray-500">Fotoğraf yükle</p>
              <p className="text-xs text-gray-400">JPEG, PNG, WEBP · max 5MB</p>
            </>
          )}
        </div>
      )}

      {/* URL ile de eklenebilir */}
      <div className="flex gap-2">
        <ImageIcon className="w-4 h-4 text-gray-400 mt-2 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="veya görsel URL'si / site içi yol yapıştır"
          className="flex-1 h-8 rounded-md border border-input bg-transparent px-3 py-1 text-xs shadow-sm"
        />
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

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
