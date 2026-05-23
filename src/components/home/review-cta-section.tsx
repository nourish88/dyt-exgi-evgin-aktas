"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getClientAppLoginUrl } from "@/lib/client-app-url";
import {
  DOKTORTAKVIMI_PROFILE_URL,
  GOOGLE_MAPS_PROFILE_URL,
} from "@/lib/external-links";

export function ReviewCtaSection() {
  const clientAppUrl = getClientAppLoginUrl();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-3xl border border-primary/15 bg-gradient-to-br from-pink-50 to-cyan-50 p-8 md:p-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-sm font-semibold text-[var(--brand-dark)]">
              <Star className="w-4 h-4 text-[var(--brand-warning)] fill-[var(--brand-warning)]" />
              Danışan Deneyimleri
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold"
            >
              Deneyiminizi Paylaşın, Bize Destek Olun!
            </motion.h2>

            <div className="flex justify-center gap-1 my-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-6">
              Sizlerin başarısı ve memnuniyeti bizim en büyük motivasyonumuz. 
              Google ve DoktorTakvimi üzerinde bırakacağınız <strong className="text-[var(--brand-dark)]">5 yıldızlı</strong> bir yorum, 
              hem bize destek olacak hem de sağlıklı yaşama adım atmak isteyen diğer danışanlara rehberlik edecektir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={GOOGLE_MAPS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto h-14 px-8 bg-[#4285F4] hover:bg-[#3a77df] text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Google&apos;da Değerlendir
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href={DOKTORTAKVIMI_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-pink-50 text-lg font-semibold shadow-md hover:shadow-lg transition-all">
                  DoktorTakvimi&apos;nde Yorum Yap
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-black/5">
              <p className="text-sm text-muted-foreground mb-3">Danışan portalını aktif kullanıyor musunuz?</p>
              <a href={clientAppUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-muted-foreground hover:text-[var(--brand-dark)]">
                  Uygulamaya Git
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
