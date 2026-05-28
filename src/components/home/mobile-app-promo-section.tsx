"use client";

import { motion } from "framer-motion";
import { Smartphone, ExternalLink, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MobileAppPromoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl border border-primary/15 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 md:p-12 overflow-hidden relative">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200/40 to-orange-200/40 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div className="flex-1 text-center md:text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-sm font-semibold text-indigo-600 shadow-sm">
                <Smartphone className="w-4 h-4" />
                Danışan Portalı & Mobil Uygulama
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              >
                Diyet Süreciniz Artık <br className="hidden md:block" /> Cebinizde!
              </motion.h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                Size özel hazırlanan beslenme programınıza, değişim listelerine, su takip araçlarına ve gelişim grafiklerinize tek tıkla ulaşın. Motivasyonunuzu her an yüksek tutun!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                <Link href="/mobil-uygulamamiz" className="w-full sm:w-auto">
                  <Button className="w-full h-12 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-base font-semibold shadow-md transition-all rounded-xl">
                    Uygulamayı İncele
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-1/3 flex justify-center"
            >
              <div className="relative w-48 h-96 bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl z-20 w-24 mx-auto"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 z-10"></div>
                <Activity className="w-16 h-16 text-white/50 animate-pulse z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
