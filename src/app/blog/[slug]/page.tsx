import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPublishedPost(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug },
  });
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post || !post.published) {
    return {
      title: "Blog Yazısı Bulunamadı",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post || !post.published) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [post.image] : undefined,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Person",
      name: "Ezgi Evgin Aktaş",
    },
    publisher: {
      "@type": "Organization",
      name: "Diyetisyen Ezgi Evgin Aktaş",
      logo: {
        "@type": "ImageObject",
        url: "https://ezgievginaktas.com/logo.svg",
      },
    },
    mainEntityOfPage: `https://ezgievginaktas.com/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container mx-auto max-w-3xl px-4">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--brand-primary)] hover:underline"
        >
          Bloga dön
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="rounded-full bg-pink-100 px-3 py-1 font-medium text-pink-700">
              {post.category}
            </span>
            <span>{formatDate(post.createdAt)}</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-[var(--brand-dark)] md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </header>

        {post.image && (
          <div className="mt-10 overflow-hidden rounded-xl bg-muted">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-video w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-slate mt-10 max-w-none prose-headings:text-[var(--brand-dark)] prose-a:text-[var(--brand-primary)]">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-8">
          <Link href="/blog">
            <Button variant="outline">Tüm Blog Yazıları</Button>
          </Link>
        </footer>
      </article>
    </main>
  );
}
