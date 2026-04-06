import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Bilgilendirme | Diyetisyen Ezgi Evgin Aktaş",
  description:
    "6698 sayılı KVKK kapsamında kişisel verilerin işlenmesi, danışan portalı ve haklarınız hakkında bilgilendirme.",
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Bu sayfa, web sitemizi ziyaret etmeniz ve hizmet öncesi/sonrası iletişim
          sırasında işlenen kişisel veriler hakkında genel bilgilendirme sağlar.
          Danışan portalında (çevrimiçi takip uygulaması) sunulan hizmete ilişkin
          özel nitelikli veri işleme için uygulama içinde ayrıca{" "}
          <strong>açık rıza</strong> onayı istenmektedir.
        </p>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Veri sorumlusu
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
              uyarınca veri sorumlusu: <strong>Ezgi Evgin Aktaş</strong> (iletişim
              bilgileri aşağıdadır).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. İşlenme amaçları
            </h2>
            <p>
              Kişisel verileriniz; beslenme ve diyet danışmanlığı sözleşmesinin
              kurulması ve ifası, iletişim ve randevu koordinasyonu, yasal
              yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin
              iyileştirilmesi amaçlarıyla işlenir.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Online danışmanlık hizmeti sunmak</li>
              <li>
                Sağlık durumunuzu değerlendirmek ve beslenme programı hazırlamak
              </li>
              <li>İletişim ve bilgilendirme yapmak</li>
              <li>Hukuki yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. İşlenen veri kategorileri
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kimlik ve iletişim (ad, soyad, telefon, e-posta, adres)</li>
              <li>
                Hizmet kapsamında sizin paylaştığınız sağlık ve yaşam tarzına
                dair bilgiler (ör. kilo, boy, paylaşılan ölçüler, varsa hastalık
                veya alerji bilgisi)
              </li>
            </ul>
            <p className="mt-4">
              <strong>Laboratuvar sonuçları:</strong> Danışan verisi olarak{" "}
              <strong>
                laboratuvar veya kan tahlili sonucu sistemde saklanmaz
              </strong>
              ; tahlil arşivi tutulmaz. Gerekirse sonuçlar yalnızca sizin
              ilettiğiniz bilgi çerçevesinde danışmanlıkta değerlendirilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Çerezler ve ölçüm
            </h2>
            <p>
              Web sitemizde temel işlev ve (etkinleştirildiyse) ziyaret
              istatistikleri için çerez veya benzeri teknolojiler
              kullanılabilir. Ayrıntılar için{" "}
              <a href="/gizlilik-politikasi" className="text-primary hover:underline">
                Gizlilik Politikası
              </a>{" "}
              sayfasına bakabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Aktarım
            </h2>
            <p>
              Toplanan kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddelerinde
              belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde
              gerektiğinde yasal yükümlülüklerimizi yerine getirmek için yetkili
              kamu kurum ve kuruluşlarına aktarılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Toplama yöntemi ve hukuki sebepler
            </h2>
            <p>
              Kişisel verileriniz, online form doldurma, WhatsApp iletişimi,
              e-posta ve telefon görüşmeleri yoluyla elektronik ortamda
              toplanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. İlgili kişinin hakları
            </h2>
            <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>
                Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
              </li>
              <li>
                Kişisel verilerin işlenme amacını ve bunların amacına uygun
                kullanılıp kullanılmadığını öğrenme
              </li>
              <li>
                Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
                üçüncü kişileri bilme
              </li>
              <li>
                Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
                bunların düzeltilmesini isteme
              </li>
              <li>
                KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel
                verilerin silinmesini veya yok edilmesini isteme
              </li>
              <li>
                Yapılan düzeltme, silme ve yok edilme işlemlerinin, kişisel
                verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme
              </li>
              <li>
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
                analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun
                ortaya çıkmasına itiraz etme
              </li>
              <li>
                Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
                zarara uğraması hâlinde zararın giderilmesini talep etme
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. İletişim ve başvuru
            </h2>
            <p>
              Kişisel verilerinizle ilgili sorularınız için bizimle iletişime
              geçebilirsiniz:
            </p>
            <p className="font-semibold">
              E-posta: ezgievgin_dytsyn@hotmail.com
              <br />
              Telefon: 0546 265 04 40
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
