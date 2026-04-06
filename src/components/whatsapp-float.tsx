"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppApiUrl, buildWhatsAppWebUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const FLOAT_MESSAGE = "Merhaba, randevu almak istiyorum.";

export function WhatsAppFloat() {
  const whatsappWebUrl = buildWhatsAppWebUrl(FLOAT_MESSAGE, "float");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackWhatsAppClick("float");

    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    const targetUrl = isMobile
      ? buildWhatsAppApiUrl(FLOAT_MESSAGE, "float")
      : whatsappWebUrl;

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.a
      href={whatsappWebUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 max-[380px]:bottom-20 z-50 flex items-center justify-center w-14 h-14 min-h-[44px] min-w-[44px] bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        WhatsApp&apos;tan Bize Ulaşın
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-900" />
      </motion.div>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
