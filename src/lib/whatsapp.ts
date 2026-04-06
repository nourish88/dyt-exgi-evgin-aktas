/**
 * WhatsApp deep links (shared by server and client components).
 * Digits only — no "+" — per api.whatsapp.com / web.whatsapp.com format.
 */
export const WHATSAPP_PHONE_DIGITS = "905462650440";

export function whatsappMessageWithSource(message: string, source?: string): string {
  const trimmed = message.trim();
  if (!source) return trimmed;
  return `${trimmed}\n\n[kaynak: ${source}]`;
}

export function buildWhatsAppApiUrl(message: string, source?: string): string {
  const text = whatsappMessageWithSource(message, source);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_DIGITS}&text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppWebUrl(message: string, source?: string): string {
  const text = whatsappMessageWithSource(message, source);
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE_DIGITS}&text=${encodeURIComponent(text)}`;
}
