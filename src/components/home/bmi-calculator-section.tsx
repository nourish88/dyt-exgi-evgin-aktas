"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, Activity } from "lucide-react";
import Link from "next/link";

export function BMICalculatorSection() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      // Kategori belirleme
      if (bmiValue < 18.5) {
        setCategory("Zayıf");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Fazla Kilolu");
      } else {
        setCategory("Obez");
      }
    }
  };

  const getCategoryColor = () => {
    if (category === "Normal") return "text-green-600 bg-green-50";
    if (category === "Zayıf") return "text-blue-600 bg-blue-50";
    if (category === "Fazla Kilolu") return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Calculator className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Ücretsiz Hesaplama</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                Vücut Kitle{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  İndeksinizi
                </span>{" "}
                Öğrenin
              </h2>

              <p className="text-lg text-muted-foreground">
                BMI (Vücut Kitle İndeksi), boy ve kilo oranınıza göre sağlıklı
                kilo aralığınızı belirlemenize yardımcı olur. Hemen hesaplayın
                ve durumunuzu öğrenin!
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Hızlı Analiz</div>
                    <div className="text-xs text-muted-foreground">
                      Anında sonuç alın
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Detaylı Rapor</div>
                    <div className="text-xs text-muted-foreground">
                      Kategori bilgisi
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/hesaplayicilar">
                  <Button variant="outline" className="border-2 border-primary">
                    Detaylı Hesaplayıcılar
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-xl bg-gradient-to-br from-white to-pink-50/30">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="height" className="text-base font-semibold">
                      Boyunuz (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Örn: 170"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-2 h-12 text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="weight" className="text-base font-semibold">
                      Kilonuz (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Örn: 70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-2 h-12 text-lg"
                    />
                  </div>

                  <Button
                    onClick={calculateBMI}
                    className="w-full h-12 text-lg bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90"
                    disabled={!height || !weight}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Hesapla
                  </Button>

                  {bmi !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4 pt-4 border-t"
                    >
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">
                          Vücut Kitle İndeksiniz
                        </div>
                        <div className="text-5xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                          {bmi}
                        </div>
                      </div>

                      <div
                        className={`text-center py-3 px-4 rounded-lg font-semibold ${getCategoryColor()}`}
                      >
                        {category}
                      </div>

                      <p className="text-xs text-center text-muted-foreground">
                        Kişiye özel beslenme programı için bizimle iletişime
                        geçin
                      </p>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
