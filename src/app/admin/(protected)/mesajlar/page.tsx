import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail, Trash2, CheckCheck, Check } from "lucide-react";
import { markMessageRead, markMessageReplied, deleteMessage } from "@/lib/actions/messages";

const STATUS_LABEL: Record<string, { label: string; class: string }> = {
  UNREAD: { label: "Okunmamış", class: "bg-orange-100 text-orange-700" },
  READ: { label: "Okundu", class: "bg-blue-100 text-blue-700" },
  REPLIED: { label: "Yanıtlandı", class: "bg-green-100 text-green-700" },
};

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unreadCount = messages.filter((m) => m.status === "UNREAD").length;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">İletişim Mesajları</h1>
        <p className="text-sm text-gray-500">
          {messages.length} mesaj
          {unreadCount > 0 && <span className="ml-2 text-orange-600 font-medium">· {unreadCount} okunmamış</span>}
        </p>
      </div>

      {messages.length === 0 ? (
        <Card className="p-12 text-center">
          <MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Henüz mesaj yok.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => {
            const status = STATUS_LABEL[msg.status] ?? STATUS_LABEL.UNREAD;
            return (
              <Card key={msg.id} className={`p-5 ${msg.status === "UNREAD" ? "border-orange-200" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${status.class}`}>
                        {status.label}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(msg.createdAt).toLocaleDateString("tr-TR", {
                          day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
                        })}
                      </span>
                    </div>

                    <p className="font-semibold text-gray-900">{msg.name}</p>
                    {msg.subject && <p className="text-sm text-gray-600 font-medium mt-0.5">{msg.subject}</p>}
                    <p className="text-sm text-gray-700 mt-2 whitespace-pre-wrap">{msg.message}</p>

                    <div className="flex items-center gap-4 mt-3">
                      {msg.phone && (
                        <a
                          href={`tel:${msg.phone}`}
                          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-pink-600"
                        >
                          <Phone className="w-3 h-3" /> {msg.phone}
                        </a>
                      )}
                      <a
                        href={`mailto:${msg.email}`}
                        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-pink-600"
                      >
                        <Mail className="w-3 h-3" /> {msg.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {msg.status === "UNREAD" && (
                      <form action={async () => { "use server"; await markMessageRead(msg.id); }}>
                        <button type="submit" title="Okundu işaretle" className="p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors">
                          <Check className="w-4 h-4" />
                        </button>
                      </form>
                    )}
                    {msg.status !== "REPLIED" && (
                      <form action={async () => { "use server"; await markMessageReplied(msg.id); }}>
                        <button type="submit" title="Yanıtlandı işaretle" className="p-2 rounded-lg hover:bg-green-50 text-gray-400 hover:text-green-600 transition-colors">
                          <CheckCheck className="w-4 h-4" />
                        </button>
                      </form>
                    )}
                    <form action={async () => { "use server"; await deleteMessage(msg.id); }}>
                      <button type="submit" className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
