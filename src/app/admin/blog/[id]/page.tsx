import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { BlogForm } from "@/components/admin/blog-form";
import { updateBlogPost } from "@/lib/actions/blog";

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  const action = updateBlogPost.bind(null, id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Yazısını Düzenle</h1>
        <p className="text-sm text-gray-500">{post.title}</p>
      </div>
      <Card className="p-6">
        <BlogForm post={post} action={action} submitLabel="Güncelle" />
      </Card>
    </div>
  );
}
