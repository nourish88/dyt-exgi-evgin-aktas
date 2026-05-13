import { prisma } from "@/lib/prisma";
import { FileText, UtensilsCrossed, MessageSquare, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default async function AdminDashboard() {
  const [blogCount, recipeCount, unreadMessages, newsletterCount] = await Promise.all([
    prisma.blogPost.count(),
    prisma.recipe.count(),
    prisma.contactMessage.count({ where: { status: "UNREAD" } }),
    prisma.newsletter.count({ where: { active: true } }),
  ]);

  const recentMessages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    { label: "Blog Yazısı", value: blogCount, icon: FileText, href: "/admin/blog", color: "text-blue-600 bg-blue-50" },
    { label: "Tarif", value: recipeCount, icon: UtensilsCrossed, href: "/admin/tarifler", color: "text-green-600 bg-green-50" },
    { label: "Okunmamış Mesaj", value: unreadMessages, icon: MessageSquare, href: "/admin/mesajlar", color: "text-orange-600 bg-orange-50" },
    { label: "Newsletter Üyesi", value: newsletterCount, icon: Mail, href: "/admin/newsletter", color: "text-purple-600 bg-purple-50" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-0.5">Hoş geldiniz, Ezgi Hanım.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link href="/admin/blog/yeni">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-dashed border-2 border-pink-200 hover:border-pink-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center">
                <FileText className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Yeni Blog Yazısı</p>
                <p className="text-xs text-gray-500">Yeni içerik oluştur</p>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="/admin/tarifler/yeni">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-dashed border-2 border-green-200 hover:border-green-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Yeni Tarif</p>
                <p className="text-xs text-gray-500">Tarif ekle</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Recent messages */}
      {recentMessages.length > 0 && (
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Son Mesajlar</h2>
            <Link href="/admin/mesajlar" className="text-xs text-pink-600 hover:underline flex items-center gap-1">
              Tümü <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${msg.status === "UNREAD" ? "bg-orange-400" : "bg-gray-300"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800">{msg.name}</p>
                  <p className="text-xs text-gray-500 truncate">{msg.message}</p>
                </div>
                <p className="text-xs text-gray-400 shrink-0">
                  {new Date(msg.createdAt).toLocaleDateString("tr-TR")}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
