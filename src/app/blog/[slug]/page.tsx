import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  User,
  Eye,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ShareButtons } from "@/components/blog/share-buttons";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { getRelatedPagesForPost } from "@/lib/related-pages";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPublishedPost(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug },
  });
}

async function getRelatedPosts(currentId: string, category: string) {
  return prisma.blogPost.findMany({
    where: {
      published: true,
      category,
      id: { not: currentId },
    },
    orderBy: { createdAt: "desc" },
    take: 3,
  });
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function absoluteImageUrl(image?: string | null) {
  if (!image) return undefined;
  if (image.startsWith("http")) return image;
  return `https://ezgievginaktas.com${image}`;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

// Markdown içeriğinden "SSS / Sıkça Sorulan Sorular" bölümünü tarayıp
// her `### Soru?` + sonrasındaki düz metin paragrafını Q&A olarak çıkarır.
// En az 2 çift bulunursa FAQPage JSON-LD üretilir.
function extractFaqPairs(content: string): { q: string; a: string }[] {
  const lines = content.split("\n");
  const faqHeading = /^##\s+(SSS|Sıkça\s+Sorulan(\s+Sorular)?)\b/i;
  let inFaq = false;
  let i = 0;
  const pairs: { q: string; a: string }[] = [];

  while (i < lines.length) {
    const line = lines[i];
    if (!inFaq && faqHeading.test(line)) {
      inFaq = true;
      i += 1;
      continue;
    }
    if (inFaq && /^##\s+/.test(line) && !faqHeading.test(line)) break;
    if (inFaq) {
      const m = line.match(/^###\s+(.+?)\s*$/);
      if (m) {
        const q = m[1].trim();
        const answerLines: string[] = [];
        i += 1;
        while (i < lines.length) {
          const l = lines[i];
          if (/^###\s+/.test(l) || /^##\s+/.test(l)) break;
          if (l.trim()) answerLines.push(l.trim());
          i += 1;
        }
        const a = answerLines.join(" ").replace(/\s+/g, " ").trim();
        if (q && a) pairs.push({ q, a });
        continue;
      }
    }
    i += 1;
  }
  return pairs;
}

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const lines = content.split("\n");
  const headings: { id: string; text: string; level: number }[] = [];
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[ğ]/g, "g")
        .replace(/[ü]/g, "u")
        .replace(/[ş]/g, "s")
        .replace(/[ı]/g, "i")
        .replace(/[ö]/g, "o")
        .replace(/[ç]/g, "c")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ id, text, level });
    }
  }
  return headings;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post || !post.published) {
    return {
      title: "Blog Yazısı Bulunamadı",
    };
  }

  const imageUrl = absoluteImageUrl(post.image);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
    canonical: `/blog/${post.slug,
    languages: {
      "tr-TR": `/blog/${post.slug,
      "x-default": `/blog/${post.slug,
    },
  },`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post || !post.published) notFound();

  // Fire-and-forget view increment
  prisma.blogPost
    .update({ where: { id: post.id }, data: { views: { increment: 1 } } })
    .catch(() => {});

  const relatedPosts = await getRelatedPosts(post.id, post.category);
  const readingTime = calculateReadingTime(post.content);
  const headings = extractHeadings(post.content);
  const postUrl = `https://ezgievginaktas.com/blog/${post.slug}`;

  const whatsappLink = buildWhatsAppApiUrl(
    `Merhaba, "${post.title}" yazınızı okudum, danışmanlık hakkında bilgi almak istiyorum.`,
    `blog_${post.slug}`
  );

  const imageUrl = absoluteImageUrl(post.image);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Person",
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
      url: "https://ezgievginaktas.com/hakkimda",
    },
    publisher: {
      "@type": "Organization",
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
      logo: {
        "@type": "ImageObject",
        url: "https://ezgievginaktas.com/ezgi_evgin.png",
      },
    },
    mainEntityOfPage: postUrl,
  };

  const faqPairs = extractFaqPairs(post.content);
  const faqSchema =
    faqPairs.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPairs.map((p) => ({
            "@type": "Question",
            name: p.q,
            acceptedAnswer: { "@type": "Answer", text: p.a },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero with image */}
      {post.image && (
        <div className="relative h-64 md:h-96 overflow-hidden bg-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent" />
        </div>
      )}

      <article className={`container mx-auto max-w-3xl px-4 ${post.image ? "-mt-32 md:-mt-48 relative z-10" : "py-12"}`}>
        {/* Top Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Bloga dön
          </Link>

          {/* Header */}
          <header>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-0">
                {post.category}
              </Badge>
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground pb-6 border-b border-gray-100">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Ezgi Evgin Beslenme ve Diyet Danışmanlığı
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.createdAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readingTime} dk okuma
              </span>
              {post.views > 0 && (
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  {post.views.toLocaleString("tr-TR")} görüntülenme
                </span>
              )}
            </div>

            {/* Share - top */}
            <div className="mt-5">
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </header>

          {/* TOC */}
          {headings.length >= 3 && (
            <nav className="mt-8 p-5 rounded-xl bg-gradient-to-br from-pink-50/60 to-cyan-50/60 border border-pink-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-dark)] mb-3">
                İçindekiler
              </p>
              <ol className="space-y-1.5 text-sm">
                {headings.map((h, idx) => (
                  <li
                    key={`${h.id}-${idx}`}
                    className={h.level === 3 ? "pl-4" : ""}
                  >
                    <a
                      href={`#${h.id}`}
                      className="text-gray-700 hover:text-[var(--brand-primary)] hover:underline transition-colors"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Content */}
          <div className="prose prose-slate prose-lg mt-10 max-w-none prose-headings:text-[var(--brand-dark)] prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-20 prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-[var(--brand-primary)] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-[var(--brand-dark)] prose-img:rounded-xl prose-img:shadow-sm prose-blockquote:border-l-[var(--brand-primary)] prose-blockquote:bg-pink-50/40 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-li:leading-relaxed prose-ul:my-4 prose-ol:my-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({ href, children, node, ...props }) => {
                  if (href?.startsWith("/")) {
                    return (
                      <Link href={href} {...props as any}>
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                      {children}
                    </a>
                  );
                },
                h1: ({ children, node, ...props }) => {
                  return <h2 {...props}>{children}</h2>;
                },
                h2: ({ children, node, ...props }) => {
                  const text = String(children);
                  const id = text
                    .toLowerCase()
                    .replace(/[ğ]/g, "g")
                    .replace(/[ü]/g, "u")
                    .replace(/[ş]/g, "s")
                    .replace(/[ı]/g, "i")
                    .replace(/[ö]/g, "o")
                    .replace(/[ç]/g, "c")
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-");
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({ children, node, ...props }) => {
                  const text = String(children);
                  const id = text
                    .toLowerCase()
                    .replace(/[ğ]/g, "g")
                    .replace(/[ü]/g, "u")
                    .replace(/[ş]/g, "s")
                    .replace(/[ı]/g, "i")
                    .replace(/[ö]/g, "o")
                    .replace(/[ç]/g, "c")
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-");
                  return <h3 id={id} {...props}>{children}</h3>;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Etiketler
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Share - bottom */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <ShareButtons url={postUrl} title={post.title} />
          </div>
        </div>

        {/* In-page CTA */}
        <Card className="mt-8 p-6 md:p-8 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <MessageCircle className="w-7 h-7 text-[var(--brand-primary)]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-[var(--brand-dark)] mb-1">
                Bu konuda size özel plan ister misiniz?
              </h3>
              <p className="text-sm text-muted-foreground">
                Genel bilgi yazıları yol göstericidir, ama her kişinin metabolizması,
                sağlık geçmişi ve yaşam tarzı farklıdır. Birebir görüşmeyle
                süreciniz hızlanır.
              </p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-6 whitespace-nowrap">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp&apos;tan Yaz
              </Button>
            </a>
          </div>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 pb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                İlgili Yazılar
              </h2>
              <Link
                href="/blog"
                className="text-sm font-medium text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
              >
                Tümü <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="group block"
                >
                  <Card className="h-full overflow-hidden border-2 hover:border-primary/20 hover:shadow-lg transition-all">
                    {rp.image ? (
                      <div className="aspect-video overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/40">
                          {rp.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1.5">
                        {calculateReadingTime(rp.content)} dk okuma
                      </p>
                      <h3 className="font-semibold text-sm leading-snug text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* İlgili hizmetler — kategori ve etiket bazlı iç linkleme.
            Aynı kategoriden yazıların alttaki RelatedPosts bölümünden farklı
            olarak, burada blog yazısının konusuna göre yönlendirilecek
            hizmet/landing sayfaları listelenir. */}
        {(() => {
          const relatedServicePages = getRelatedPagesForPost(
            post.category,
            post.tags,
            6
          );
          return (
            <section className="mt-12 rounded-2xl border bg-white p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-4">
                İlgili hizmetler & sayfalar
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Bu yazıdaki konular için size en uygun beslenme danışmanlığı
                hizmetlerimiz:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {relatedServicePages.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group block rounded-xl border p-4 hover:shadow-md transition bg-white hover:border-[var(--brand-primary)]"
                  >
                    <p className="font-semibold text-gray-900 group-hover:text-[var(--brand-primary)] transition-colors">
                      {l.label}
                    </p>
                    {l.hint && (
                      <p className="text-sm text-gray-500 mt-1">
                        {l.hint}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Bottom navigation */}
        <footer className="mt-12 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tüm Yazılar
            </Button>
          </Link>
          <Link href="/randevu">
            <Button>
              Randevu Al
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </footer>
      </article>
    </main>
  );
}
