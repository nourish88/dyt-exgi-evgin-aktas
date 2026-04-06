/**
 * WhatsApp deep links (shared by server and client components).
 * Digits only — no "+" — per api.whatsapp.com / web.whatsapp.com format.
 */
export const WHATSAPP_PHONE_DIGITS = "905462650440";

/** Mesajda kaynak etiketi yok; tıklama kaynağı yalnızca analytics (ör. trackWhatsAppClick) ile tutulur. */
export function whatsappMessageWithSource(message: string, _source?: string): string {
  return message.trim();
}

export function buildWhatsAppApiUrl(message: string, source?: string): string {
  const text = whatsappMessageWithSource(message, source);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_DIGITS}&text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppWebUrl(message: string, source?: string): string {
  const text = whatsappMessageWithSource(message, source);
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE_DIGITS}&text=${encodeURIComponent(text)}`;
}
