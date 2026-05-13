import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { InstagramForm } from "@/components/admin/instagram-form";
import { updateInstagramPost } from "@/lib/actions/instagram";

export default async function EditInstagramPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.instagramPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gönderiyi Düzenle</h1>
        <p className="text-sm text-gray-500 mt-1">Değişiklikler kaydedilince sitede güncellenir</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <InstagramForm
          post={post}
          action={updateInstagramPost.bind(null, id)}
          submitLabel="Kaydet"
        />
      </div>
    </div>
  );
}
