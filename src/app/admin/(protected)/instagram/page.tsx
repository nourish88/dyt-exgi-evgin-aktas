import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, ExternalLink } from "lucide-react";
import { deleteInstagramPost, reorderInstagramPost } from "@/lib/actions/instagram";

export default async function InstagramAdminPage() {
  const posts = await prisma.instagramPost.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Instagram Gönderileri</h1>
          <p className="text-sm text-gray-500 mt-1">
            {posts.length} gönderi · Aktif olanlar sitede gösterilir
          </p>
        </div>
        <Link
          href="/admin/instagram/yeni"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Yeni Gönderi
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-gray-500 mb-4">Henüz Instagram gönderisi eklenmemiş.</p>
          <Link
            href="/admin/instagram/yeni"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600"
          >
            <Plus className="w-4 h-4" />
            İlk Gönderiyi Ekle
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className={`flex items-center gap-4 bg-white rounded-xl border p-4 ${
                post.active ? "border-gray-200" : "border-gray-100 opacity-60"
              }`}
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.caption ?? "Instagram görseli"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {post.label && (
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                      {post.label}
                    </span>
                  )}
                  {!post.active && (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      Pasif
                    </span>
                  )}
                </div>
                {post.caption && (
                  <p className="text-sm text-gray-600 mt-1 truncate">{post.caption}</p>
                )}
                {post.postUrl && (
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    Instagram'da gör <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0">
                <form action={reorderInstagramPost.bind(null, post.id, "up")}>
                  <button
                    type="submit"
                    disabled={idx === 0}
                    className="p-1.5 text-gray-400 hover:text-gray-700 disabled:opacity-20 disabled:cursor-not-allowed"
                    title="Yukarı taşı"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </form>
                <form action={reorderInstagramPost.bind(null, post.id, "down")}>
                  <button
                    type="submit"
                    disabled={idx === posts.length - 1}
                    className="p-1.5 text-gray-400 hover:text-gray-700 disabled:opacity-20 disabled:cursor-not-allowed"
                    title="Aşağı taşı"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </form>
                <Link
                  href={`/admin/instagram/${post.id}`}
                  className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                  title="Düzenle"
                >
                  <Pencil className="w-4 h-4" />
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await deleteInstagramPost(post.id);
                  }}
                  onSubmit={(e) => {
                    if (!confirm("Bu gönderiyi silmek istediğinize emin misiniz?")) e.preventDefault();
                  }}
                >
                  <button
                    type="submit"
                    className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                    title="Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
