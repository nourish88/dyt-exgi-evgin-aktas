import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Diyetisyen Ezgi Evgin Aktaş",
  description: "Web sitesi kullanım şartları ve koşulları.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Kullanım Şartları</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Bu web sitesini (ezgievginaktas.com) kullanarak aşağıdaki kullanım
            şartlarını kabul etmiş olursunuz.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Hizmet Kapsamı
            </h2>
            <p>
              Web sitemiz, online beslenme danışmanlığı hizmeti sunmaktadır.
              Verilen bilgiler genel nitelikte olup, kişiye özel sağlık
              önerileri içermez. Kişiye özel program için doğrudan iletişime
              geçilmelidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Kullanıcı Sorumlulukları
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Verdiğiniz bilgilerin doğru ve güncel olması sizin
                sorumluluğunuzdadır
              </li>
              <li>
                Başkalarının haklarını ihlal edici davranışlarda bulunamazsınız
              </li>
              <li>Web sitesine zarar verecek faaliyetlerde bulunamazsınız</li>
              <li>İçerikleri izinsiz kopyalayamaz veya dağıtamazsınız</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Fikri Mülkiyet Hakları
            </h2>
            <p>
              Web sitesindeki tüm içerikler (yazılar, görseller, tasarımlar)
              telif hakkıyla korunmaktadır. İzinsiz kullanımı yasaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Sorumluluk
            </h2>
            <p>
              Web sitesinde yer alan bilgiler genel bilgilendirme amaçlıdır.
              Bireysel sağlık durumunuz için mutlaka bir sağlık uzmanına
              danışmalısınız.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Hizmet Değişiklikleri
            </h2>
            <p>
              Hizmetlerimizde, fiyatlarımızda ve web sitesi içeriğinde önceden
              haber vermeksizin değişiklik yapma hakkını saklı tutarız.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. İptal ve İade
            </h2>
            <p>
              Online danışmanlık hizmetlerinde, hizmet başlamadan önce iptal
              talebinde bulunabilirsiniz. Hizmet başladıktan sonra iade
              yapılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Uygulanacak Hukuk
            </h2>
            <p>
              Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir.
              Uyuşmazlıklar Ankara mahkemelerinde çözümlenir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. İletişim
            </h2>
            <p>
              Kullanım şartları hakkında sorularınız için bizimle iletişime
              geçebilirsiniz:
            </p>
            <p className="font-semibold">
              E-posta: info@ezgievginaktas.com
              <br />
              Telefon: 0533 310 49 70
            </p>
          </section>

          <p className="text-sm italic">Son güncelleme: Ekim 2025</p>
        </div>
      </div>
    </div>
  );
}
