import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Bilgilendirme | Diyetisyen Ezgi Evgin Aktaş",
  description:
    "Kişisel verilerin korunması ve işlenmesi hakkında bilgilendirme metni.",
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">KVKK Bilgilendirme Metni</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Veri Sorumlusu
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
              kişisel verileriniz; veri sorumlusu olarak Ezgi Evgin Aktaş
              tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p>
              Toplanan kişisel verileriniz, online diyet danışmanlığı hizmeti
              vermek, iletişim sağlamak, randevu yönetimi yapmak ve yasal
              yükümlülükleri yerine getirmek amacıyla işlenmektedir.
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
              3. İşlenen Kişisel Veriler
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kimlik bilgileri (ad, soyad, doğum tarihi)</li>
              <li>İletişim bilgileri (telefon, e-posta, adres)</li>
              <li>
                Sağlık verileri (kilo, boy, hastalık bilgileri, alerjiler)
              </li>
              <li>
                Fiziksel ve fizyolojik veriler (vücut ölçüleri, kan değerleri)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Kişisel Verilerin Aktarılması
            </h2>
            <p>
              Toplanan kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde
              belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde
              gerektiğinde yasal yükümlülüklerimizi yerine getirmek için yetkili
              kamu kurum ve kuruluşlarına aktarılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
            </h2>
            <p>
              Kişisel verileriniz, online form doldurma, WhatsApp iletişimi,
              e-posta ve telefon görüşmeleri yoluyla elektronik ortamda
              toplanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Kişisel Veri Sahibinin Hakları
            </h2>
            <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
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
                KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel
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
              7. İletişim
            </h2>
            <p>
              Kişisel verilerinizle ilgili sorularınız için bizimle iletişime
              geçebilirsiniz:
            </p>
            <p className="font-semibold">
              E-posta: info@ezgievginaktas.com
              <br />
              Telefon: 0546 265 04 40
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
