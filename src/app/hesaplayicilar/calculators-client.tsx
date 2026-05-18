"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, TrendingDown, Activity } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function CalculatorsPage() {
  // BMI State
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");

  // BMR State
  const [bmrAge, setBmrAge] = useState("");
  const [bmrGender, setBmrGender] = useState("");
  const [bmrHeight, setBmrHeight] = useState("");
  const [bmrWeight, setBmrWeight] = useState("");
  const [bmrActivity, setBmrActivity] = useState("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [dailyCalories, setDailyCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(bmiHeight) / 100;
    const w = parseFloat(bmiWeight);

    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setBmiCategory("Zayıf");
      else if (bmiValue >= 18.5 && bmiValue < 25) setBmiCategory("Normal");
      else if (bmiValue >= 25 && bmiValue < 30) setBmiCategory("Fazla Kilolu");
      else setBmiCategory("Obez");
    }
  };

  const calculateBMR = () => {
    const age = parseFloat(bmrAge);
    const height = parseFloat(bmrHeight);
    const weight = parseFloat(bmrWeight);

    if (age > 0 && height > 0 && weight > 0 && bmrGender) {
      let bmrValue: number;

      // Harris-Benedict Formülü
      if (bmrGender === "male") {
        bmrValue = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      setBmr(Math.round(bmrValue));

      // Aktivite seviyesine göre günlük kalori ihtiyacı
      if (bmrActivity) {
        const activityMultipliers: Record<string, number> = {
          sedentary: 1.2,
          light: 1.375,
          moderate: 1.55,
          active: 1.725,
          veryActive: 1.9,
        };
        const dailyCal = Math.round(
          bmrValue * activityMultipliers[bmrActivity]
        );
        setDailyCalories(dailyCal);
      }
    }
  };

  const getBMICategoryColor = () => {
    if (bmiCategory === "Normal")
      return "text-green-600 bg-green-50 border-green-200";
    if (bmiCategory === "Zayıf")
      return "text-blue-600 bg-blue-50 border-blue-200";
    if (bmiCategory === "Fazla Kilolu")
      return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Sağlık{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Hesaplayıcıları
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Vücut kitle indeksinizi ve günlük kalori ihtiyacınızı kolayca
              hesaplayın
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="bmi" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 h-14">
                <TabsTrigger value="bmi" className="text-base">
                  <Calculator className="w-4 h-4 mr-2" />
                  BMI Hesaplama
                </TabsTrigger>
                <TabsTrigger value="bmr" className="text-base">
                  <Activity className="w-4 h-4 mr-2" />
                  BMR Hesaplama
                </TabsTrigger>
              </TabsList>

              {/* BMI Calculator */}
              <TabsContent value="bmi">
                <Card className="p-8">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">
                        Vücut Kitle İndeksi (BMI)
                      </h3>
                      <p className="text-muted-foreground">
                        Boy ve kilo oranınıza göre sağlıklı kilo aralığınızı
                        öğrenin
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="bmi-height" className="text-base">
                          Boyunuz (cm)
                        </Label>
                        <Input
                          id="bmi-height"
                          type="number"
                          placeholder="Örn: 170"
                          value={bmiHeight}
                          onChange={(e) => setBmiHeight(e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="bmi-weight" className="text-base">
                          Kilonuz (kg)
                        </Label>
                        <Input
                          id="bmi-weight"
                          type="number"
                          placeholder="Örn: 70"
                          value={bmiWeight}
                          onChange={(e) => setBmiWeight(e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={calculateBMI}
                      className="w-full h-12 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]"
                      disabled={!bmiHeight || !bmiWeight}
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      BMI Hesapla
                    </Button>

                    {bmi !== null && (
                      <div className="space-y-4 pt-6 border-t">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-2">
                            Vücut Kitle İndeksiniz
                          </div>
                          <div className="text-5xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                            {bmi}
                          </div>
                        </div>

                        <div
                          className={`text-center py-4 px-6 rounded-xl font-semibold border-2 ${getBMICategoryColor()}`}
                        >
                          {bmiCategory}
                        </div>

                        {/* BMI Ranges */}
                        <div className="space-y-2 text-sm bg-muted/30 p-4 rounded-lg">
                          <div className="font-semibold mb-2">
                            BMI Kategori Aralıkları:
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>Zayıf: &lt; 18.5</div>
                            <div>Normal: 18.5 - 24.9</div>
                            <div>Fazla Kilolu: 25 - 29.9</div>
                            <div>Obez: ≥ 30</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              {/* BMR Calculator */}
              <TabsContent value="bmr">
                <Card className="p-8">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">
                        Bazal Metabolizma Hızı (BMR)
                      </h3>
                      <p className="text-muted-foreground">
                        Günlük kalori ihtiyacınızı hesaplayın
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="bmr-age" className="text-base">
                          Yaşınız
                        </Label>
                        <Input
                          id="bmr-age"
                          type="number"
                          placeholder="Örn: 30"
                          value={bmrAge}
                          onChange={(e) => setBmrAge(e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="bmr-gender" className="text-base">
                          Cinsiyetiniz
                        </Label>
                        <Select onValueChange={setBmrGender}>
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Erkek</SelectItem>
                            <SelectItem value="female">Kadın</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="bmr-height" className="text-base">
                          Boyunuz (cm)
                        </Label>
                        <Input
                          id="bmr-height"
                          type="number"
                          placeholder="Örn: 170"
                          value={bmrHeight}
                          onChange={(e) => setBmrHeight(e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="bmr-weight" className="text-base">
                          Kilonuz (kg)
                        </Label>
                        <Input
                          id="bmr-weight"
                          type="number"
                          placeholder="Örn: 70"
                          value={bmrWeight}
                          onChange={(e) => setBmrWeight(e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="bmr-activity" className="text-base">
                          Aktivite Seviyeniz
                        </Label>
                        <Select onValueChange={setBmrActivity}>
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedentary">
                              Hareketsiz (egzersiz yok)
                            </SelectItem>
                            <SelectItem value="light">
                              Az Hareketli (haftada 1-3 gün)
                            </SelectItem>
                            <SelectItem value="moderate">
                              Orta Hareketli (haftada 3-5 gün)
                            </SelectItem>
                            <SelectItem value="active">
                              Çok Hareketli (haftada 6-7 gün)
                            </SelectItem>
                            <SelectItem value="veryActive">
                              Aşırı Hareketli (günde 2 kez)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      onClick={calculateBMR}
                      className="w-full h-12 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]"
                      disabled={
                        !bmrAge || !bmrGender || !bmrHeight || !bmrWeight
                      }
                    >
                      <Activity className="w-5 h-5 mr-2" />
                      BMR Hesapla
                    </Button>

                    {bmr !== null && (
                      <div className="space-y-4 pt-6 border-t">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                            <div className="text-sm text-muted-foreground mb-2">
                              Bazal Metabolizma Hızınız
                            </div>
                            <div className="text-4xl font-bold text-secondary">
                              {bmr} kcal
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              (günlük temel ihtiyaç)
                            </div>
                          </div>

                          {dailyCalories && (
                            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                              <div className="text-sm text-muted-foreground mb-2">
                                Günlük Kalori İhtiyacınız
                              </div>
                              <div className="text-4xl font-bold text-green-600">
                                {dailyCalories} kcal
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                (aktivite dahil)
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="text-sm text-center text-muted-foreground bg-muted/30 p-4 rounded-lg">
                          Bu değerler Harris-Benedict formülü kullanılarak
                          hesaplanmıştır. Kişiye özel program için lütfen
                          bizimle iletişime geçin.
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Kişiye Özel Beslenme Programı İster Misiniz?
            </h2>
            <p className="text-lg text-white/90">
              Hesaplama sonuçlarınıza göre size özel hazırlanacak diyet programı
              için hemen başvurun!
            </p>
            <Button
              onClick={() => {
                trackWhatsAppClick("hesaplayicilar");
                window.open(
                  buildWhatsAppApiUrl(
                    "Merhaba, hesaplama sonuçlarıma göre kişiye özel program almak istiyorum.",
                    "hesaplayicilar"
                  ),
                  "_blank"
                );
              }}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-14 px-10"
            >
              WhatsApp'tan İletişime Geç
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
