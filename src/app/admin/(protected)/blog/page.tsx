import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { deleteBlogPost, togglePublished } from "@/lib/actions/blog";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Yazıları</h1>
          <p className="text-sm text-gray-500">{posts.length} yazı</p>
        </div>
        <Link href="/admin/blog/yeni">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white gap-2">
            <Plus className="w-4 h-4" /> Yeni Yazı
          </Button>
        </Link>
      </div>

      {posts.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-500 mb-4">Henüz blog yazısı yok.</p>
          <Link href="/admin/blog/yeni">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white gap-2">
              <Plus className="w-4 h-4" /> İlk Yazıyı Ekle
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id} className="p-4">
              <div className="flex items-center gap-4">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.published ? "Yayında" : "Taslak"}
                    </span>
                    <span className="text-xs text-gray-400">{post.category}</span>
                  </div>
                  <p className="font-semibold text-gray-800 truncate">{post.title}</p>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <form
                    action={async () => {
                      "use server";
                      await togglePublished(post.id, !post.published);
                    }}
                  >
                    <button
                      type="submit"
                      title={post.published ? "Taslağa al" : "Yayına al"}
                      className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </form>
                  <Link href={`/admin/blog/${post.id}`}>
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await deleteBlogPost(post.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
                      onClick={(e) => {
                        if (!confirm(`"${post.title}" silinsin mi?`)) e.preventDefault();
                      }}
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
