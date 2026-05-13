import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Opt-out of static rendering if we want real-time blog updates, or keep it static and revalidate.
export const revalidate = 3600; // revalidate every hour

async function getBlogPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[var(--brand-dark)]">
            Beslenme ve Sağlıklı Yaşam Blogu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sağlıklı beslenme, diyet ipuçları ve güncel sağlık bilgileri hakkında 
            uzman diyetisyen kaleminden makaleler.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              Henüz blog yazısı bulunmamaktadır. Çok yakında yeni içeriklerle karşınızdayız!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow bg-white">
                {post.image && (
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-3 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Button variant="outline" className="w-full text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-pink-50">
                      Devamını Oku
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
