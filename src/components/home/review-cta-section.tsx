"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getClientAppLoginUrl } from "@/lib/client-app-url";

const GOOGLE_MAPS_PROFILE_URL =
  "https://www.google.com/maps/place/Diyetisyen+Ezgi+Evgin/@39.9669753,32.6332346,17z/data=!3m1!4b1!4m6!3m5!1s0x14d330d2f71d4659:0x83b8bf59458d8408!8m2!3d39.9669753!4d32.6358095!16s%2Fg%2F11dymr8nhs?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

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
              Yorumunuzu Paylaşın
            </motion.h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deneyiminizi Google ve DoktorTakvimi profillerinde paylaşarak
              diğer danışanlara da yol gösterebilirsiniz. Danışan portalını aktif
              kullanıyorsanız uygulama deneyiminizden de bahsetmeniz çok kıymetli.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a href={clientAppUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 px-7 border-2">
                  Danışan Portalı
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href={GOOGLE_MAPS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 px-7 bg-[#4285F4] hover:bg-[#3a77df] text-white">
                  Google&apos;da İşletmeyi Aç
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="h-12 px-7 border-2">
                  DoktorTakvimi Yorumları
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
