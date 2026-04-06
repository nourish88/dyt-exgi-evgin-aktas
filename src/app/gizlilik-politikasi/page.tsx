import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Diyetisyen Ezgi Evgin Aktaş",
  description:
    "Web sitesi gizlilik politikası ve kullanıcı bilgilerinin korunması.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Bu gizlilik politikası, ezgievginaktas.com web sitesini ziyaret eden
            kullanıcıların kişisel verilerinin nasıl toplandığı, kullanıldığı ve
            korunduğu hakkında bilgi vermektedir.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Toplanan Bilgiler
            </h2>
            <p>Web sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ad, soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Sağlık bilgileri (kilo, boy, kronik hastalıklar vb.)</li>
              <li>IP adresi ve tarayıcı bilgileri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Bilgilerin Kullanımı
            </h2>
            <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişiye özel beslenme programı hazırlamak</li>
              <li>İletişim kurmak ve randevu organize etmek</li>
              <li>Hizmet kalitesini iyileştirmek</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Çerezler
            </h2>
            <p>
              Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler
              kullanır. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Veri Güvenliği
            </h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve
              idari tedbirleri alıyoruz. Verileriniz şifrelenmiş bağlantılar
              üzerinden iletilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Üçüncü Taraflar
            </h2>
            <p>
              Kişisel bilgilerinizi, yasal zorunluluklar dışında üçüncü
              taraflarla paylaşmıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Kullanıcı Hakları
            </h2>
            <p>Kullanıcılar olarak şu haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel verilerinize erişim talep etme</li>
              <li>Yanlış verilerin düzeltilmesini isteme</li>
              <li>Verilerinizin silinmesini talep etme</li>
              <li>Veri işlemeye itiraz etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Politika Değişiklikleri
            </h2>
            <p>
              Bu gizlilik politikası zaman zaman güncellenebilir. Önemli
              değişiklikler olduğunda sizi bilgilendireceğiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. İletişim
            </h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime
              geçebilirsiniz:
            </p>
            <p className="font-semibold">
              E-posta: ezgievgin_dytsyn@hotmail.com
              <br />
              Telefon: 0546 265 04 40
            </p>
          </section>

          <p className="text-sm italic">Son güncelleme: Ekim 2025</p>
        </div>
      </div>
    </div>
  );
}
