import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Mail, Download } from "lucide-react";

export default async function NewsletterPage() {
  const subscribers = await prisma.newsletter.findMany({
    orderBy: { createdAt: "desc" },
  });

  const activeCount = subscribers.filter((s) => s.active).length;

  const csvData = "Ad,E-posta,Tarih\n" +
    subscribers
      .filter((s) => s.active)
      .map((s) => `${s.name ?? ""},${s.email},${new Date(s.createdAt).toLocaleDateString("tr-TR")}`)
      .join("\n");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Newsletter Listesi</h1>
          <p className="text-sm text-gray-500">{activeCount} aktif üye · {subscribers.length} toplam</p>
        </div>
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`}
          download="newsletter-listesi.csv"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-700 transition-colors"
        >
          <Download className="w-4 h-4" /> CSV İndir
        </a>
      </div>

      {subscribers.length === 0 ? (
        <Card className="p-12 text-center">
          <Mail className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Henüz newsletter üyesi yok.</p>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Ad</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">E-posta</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">{sub.name ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{sub.email}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sub.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {sub.active ? "Aktif" : "Çıkış Yaptı"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(sub.createdAt).toLocaleDateString("tr-TR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}
