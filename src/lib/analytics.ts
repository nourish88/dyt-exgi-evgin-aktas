declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(source: string): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "whatsapp_click", { source });
}
