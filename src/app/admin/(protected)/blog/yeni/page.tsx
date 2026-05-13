import { Card } from "@/components/ui/card";
import { BlogForm } from "@/components/admin/blog-form";
import { createBlogPost } from "@/lib/actions/blog";

export default function NewBlogPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Yeni Blog Yazısı</h1>
      </div>
      <Card className="p-6">
        <BlogForm action={createBlogPost} submitLabel="Kaydet" />
      </Card>
    </div>
  );
}
