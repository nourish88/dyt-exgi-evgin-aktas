import { InstagramForm } from "@/components/admin/instagram-form";
import { createInstagramPost } from "@/lib/actions/instagram";

export default function NewInstagramPostPage() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Yeni Instagram Gönderisi</h1>
        <p className="text-sm text-gray-500 mt-1">Sitede gösterilecek görseli ekleyin</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <InstagramForm action={createInstagramPost} submitLabel="Gönderiyi Ekle" />
      </div>
    </div>
  );
}
