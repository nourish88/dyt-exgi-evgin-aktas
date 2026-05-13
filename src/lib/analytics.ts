declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function ga(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

function fb(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", event, params);
}

export function trackWhatsAppClick(source: string): void {
  ga("whatsapp_click", { source });
  fb("Contact", { source });
}

export function trackContactFormSubmit(): void {
  ga("generate_lead", { method: "contact_form" });
  fb("Lead", { method: "contact_form" });
}

export function trackNewsletterSignup(): void {
  ga("sign_up", { method: "newsletter" });
  fb("Subscribe");
}

export function trackAppointmentClick(source: string): void {
  ga("schedule", { source });
  fb("Schedule", { source });
}
