"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Lütfen email adresinizi girin");
      return;
    }

    setIsLoading(true);

    // API call simülasyonu (gerçek implementasyonda backend'e istek atılacak)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast.success("Başarıyla abone oldunuz! 🎉");
      setEmail("");

      // 3 saniye sonra formu tekrar göster
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Sağlıklı Yaşam İpuçları
            </h2>
            <p className="text-lg text-white/90">
              Beslenme, diyet ve sağlıklı yaşam hakkında haftalık ipuçları ve
              özel içerikleri kaçırmayın!
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {!isSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Email adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/95 backdrop-blur-sm border-0 text-base flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8"
                >
                  {isLoading ? (
                    "Gönderiliyor..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Abone Ol
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-full py-4 px-8 max-w-md mx-auto"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-[var(--brand-success)]" />
                </div>
                <span className="text-white font-semibold">
                  Başarıyla abone oldunuz!
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-white/70"
          >
            Email adresiniz güvendedir. Spam göndermiyoruz. 🔒
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-sm text-white/80">Aktif Abone</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Haftalık</div>
              <div className="text-sm text-white/80">İçerik Paylaşımı</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">%100</div>
              <div className="text-sm text-white/80">Ücretsiz</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
