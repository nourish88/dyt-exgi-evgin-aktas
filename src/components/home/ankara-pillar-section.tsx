import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Stethoscope,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

// "Ankara Diyetisyen" pillar içeriği — eski /ankara-diyetisyen sayfası ana
// sayfaya konsolide edildi (301). Tek H1 + E-E-A-T + hizmet linkleri + FAQ
// server-render edilir; cannibalization önlenir, equity korunur.

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ankara'da diyetisyen randevusu almak istiyorum.",
  "home-ankara-pillar"
);

const services = [
  { title: "Kilo Verme & Yönetimi", link: "/ankara-kilo-verme-diyetisyen" },
  { title: "İnsülin Direnci Diyeti", link: "/insulin-direnci-diyeti-ankara" },
  { title: "PCOS (Polikistik Over) Beslenmesi", link: "/pcos-diyetisyen-ankara" },
  { title: "Hamilelik ve Emzirme Dönemi", link: "/hamilelik-beslenmesi-ankara" },
  { title: "Sporcu Beslenmesi", link: "/sporcu-beslenmesi-ankara" },
  { title: "Çocuk ve Ergen Beslenmesi", link: "/cocuk-beslenmesi-diyetisyen" },
];

const faqPairs = [
  {
    q: "Ankara'da diyetisyen randevu fiyatları / seans ücretleri ne kadar?",
    a: "Diyetisyen seans ücretleri alacağınız paketin süresine (1 aylık, 3 aylık) ve görüşme modeline (online veya yüz yüze) göre değişiklik göstermektedir. Bütçenize en uygun programı seçmek ve güncel fiyat bilgisi almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.",
  },
  {
    q: "Online diyet ile yüz yüze (ofis) görüşmesi arasında kalite farkı var mı?",
    a: "Kesinlikle kalite veya süreç işleyişi farkı yoktur. İster Eryaman'daki ofisimize gelin, ister Ankara'nın öbür ucundan (veya şehir dışından) online katılın; haftalık 45 dakikalık görüşmelerimiz, danışan portalı erişiminiz ve WhatsApp üzerinden günlük anlık iletişim hakkınız aynı standartta korunur.",
  },
  {
    q: "Randevular sadece Etimesgut / Eryaman bölgesinde mi yapılıyor?",
    a: "Yüz yüze görüşmelerimiz ulaşımı çok kolay olan Eryaman - Etimesgut sınırlarındaki Atayıldız Plaza'daki ofisimizde gerçekleşmektedir. Ancak Yenimahalle, Çankaya, Sincan veya Keçiören gibi uzak ilçelerden trafik sorunu yaşamak istemeyen danışanlarımız genellikle online diyet programlarımızı tercih etmektedir.",
  },
  {
    q: "Diyet listelerinde yasaklar, aç kalma veya bulması zor yiyecekler oluyor mu?",
    a: "Hayır. Diyet felsefemiz 'yasaksız' ve 'sürdürülebilir' bir beslenme modeline dayanır. Listeleriniz; bütçenize, mutfak kültürünüze ve sevdiğiniz gıdalara göre şekillenir. Aç kalmadan, stres yapmadan, porsiyon kontrolü ve dengeleme mantığıyla ilerleriz.",
  },
  {
    q: "İlk görüşme (seans) ne kadar sürüyor ve neler konuşuluyor?",
    a: "İlk görüşmemiz yaklaşık 45 dakika sürmektedir. Bu görüşmede detaylı anamnez (sağlık geçmişiniz) alınır, kan tahlilleriniz incelenir, çalışma rutininiz ve beslenme alışkanlıklarınız masaya yatırılır. Ardından size en uygun taslak program birlikte oluşturulur.",
  },
  {
    q: "Süreç boyunca sadece liste mi veriyorsunuz, takip nasıl yapılıyor?",
    a: "Sadece PDF bir liste verip sizi yalnız bırakmıyoruz. Kendi akıllı telefon uygulamanız (Danışan Portalı) üzerinden listelerinizi, değişim tablolarınızı görebilirsiniz. Ayrıca öğünlerinizin fotoğraflarını yükleyebilir ve gün içinde takıldığınız her noktayı WhatsApp veya uygulama içinden mesaj atarak sorabilirsiniz.",
  },
  {
    q: "İnsülin direnci, tiroid veya PCOS gibi hastalıklarım var, yardımcı oluyor musunuz?",
    a: "Evet. Klinik beslenme uzmanlığı kapsamında; İnsülin direnci, Hashimoto Tiroidi, Polikistik Over Sendromu (PCOS), diyabet ve sindirim sistemi hastalıkları gibi durumlara özel tıbbi beslenme tedavisi (diyet) uygulanmaktadır.",
  },
  {
    q: "Kredi kartı ile ödeme yapabiliyor muyuz?",
    a: "Evet, hem online ödeme altyapısı üzerinden hem de ofisimizde kredi kartı veya banka havalesi / EFT ile ödeme yapma imkanınız bulunmaktadır.",
  },
  {
    q: "Çocuk ve ergen beslenmesi konusunda destek veriyor musunuz?",
    a: "Evet. Büyüme ve gelişme çağındaki çocukların ve ergenlerin artan enerji ve makro/mikro besin ögesi ihtiyaçlarını karşılayacak, onların psikolojisini yormayacak özel beslenme programları hazırlıyoruz.",
  },
  {
    q: "Randevu almak için ne kadar süre önceden iletişime geçmeliyim?",
    a: "Özellikle hafta sonu ve mesai sonrası (akşam) saatleri çok hızlı dolduğu için, planladığınız tarihten en az 3-4 gün önce iletişime geçerek randevunuzu kesinleştirmeniz iyi olacaktır.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPairs.map((p) => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: { "@type": "Answer", text: p.a },
  })),
};

export function AnkaraPillarSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* PILLAR — tek H1, "Ankara Diyetisyen" */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-5 mb-12">
            <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-[var(--brand-primary)]">
              Ankara &amp; Online Beslenme Danışmanlığı
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--brand-dark)] leading-[1.15]">
              Ankara Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-pink-500 bg-clip-text text-transparent">
                Bilimsel Yaklaşım, Kişiye Özel Plan
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              İnternetteki kopya diyet listelerinden sıkıldınız mı? Başkent
              Üniversitesi klinik tecrübesiyle; kan değerlerinize, mesainize ve
              damak tadınıza tamamen özel hazırlanan beslenme programlarıyla
              kalıcı başarıya ulaşın. Eryaman ofisinde yüz yüze veya{" "}
              <Link href="/online-diyetisyen" className="text-[var(--brand-primary)] hover:underline font-medium">
                online diyetisyen
              </Link>{" "}
              desteğiyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 text-base shadow-lg rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-dark)] transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ücretsiz Ön Görüşme Yapın
                </Button>
              </a>
              <Link href="/programlar" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base rounded-xl border-slate-300">
                  Süreç ve Paketler
                </Button>
              </Link>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-[var(--brand-dark)] prose-a:text-[var(--brand-primary)]">
            <h2>Neden Profesyonel Bir Ankara Diyetisyeni İle Çalışmalısınız?</h2>
            <p>
              İnsan vücudu bir makine değildir;{" "}
              <strong>
                stres düzeyiniz, uyku saatleriniz, kan tahlilleriniz, genetik
                mirasınız ve psikolojik durumunuz
              </strong>{" "}
              metabolizmanızın nasıl çalışacağını belirler. Ankara&apos;da
              profesyonel bir diyetisyen arayışında olmanızın temel nedeni,
              internette okuduğunuz genel geçer kuralların size uymamasıdır. Dyt.
              Ezgi Evgin olarak felsefem; sizi aç bırakmak değil,{" "}
              <strong>doğru porsiyon kontrolünü öğretmek</strong> ve bu süreci
              ömür boyu sürecek kalıcı bir alışkanlığa çevirmektir.
            </p>

            <div className="my-12 p-8 bg-slate-50 rounded-2xl border border-slate-200 not-prose">
              <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-[var(--brand-dark)]">
                <GraduationCap className="w-8 h-8 text-[var(--brand-primary)]" />
                Uzmanlık ve Deneyim (Dyt. Ezgi Evgin)
              </h3>
              <ul className="space-y-4 font-medium text-slate-700 list-none p-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span>
                    <strong>Akademik Temel:</strong> Başkent Üniversitesi Beslenme
                    ve Diyetetik bölümünden elde edilen güncel, kanıta dayalı
                    akademik altyapı.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span>
                    <strong>Klinik Deneyim:</strong> Poliklinik ve hastane
                    süreçlerini kapsayan yüzlerce vakalık pratik gözlem ve
                    hastalık/diyet yönetimi tecrübesi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span>
                    <strong>Modern Yaklaşım:</strong> Danışanın yaşam alanına,
                    çalışma saatlerine ve psikolojisine uyum sağlayan esnek
                    planlama modeli.
                  </span>
                </li>
              </ul>
            </div>

            <h2>Hangi Alanlarda Klinik Danışmanlık Veriyoruz?</h2>
            <p>
              Kliniğimizde sadece estetik amaçlı değil,{" "}
              <strong>tıbbi beslenme tedavisi</strong> kapsamında da danışmanlık
              veriyoruz:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
              {services.map((srv) => (
                <Link
                  key={srv.title}
                  href={srv.link}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-[var(--brand-primary)] hover:shadow-md transition-all group"
                >
                  <Stethoscope className="w-6 h-6 text-[var(--brand-primary)] group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-slate-800">{srv.title}</span>
                </Link>
              ))}
            </div>

            <h2>Yüz Yüze Görüşme: Eryaman - Etimesgut Ofisi</h2>
            <p>
              <strong>Altay Mahallesi, Ata Yıldız Plaza</strong>&apos;daki
              kliniğimiz, Optimum AVM karşısında olup ulaşımı oldukça rahattır.
              Ağırlıklı olarak{" "}
              <Link href="/eryaman-diyetisyen">Eryaman</Link>, Etimesgut, Sincan
              ve Yenimahalle bölgesinden gelen danışanlarımızı ağırlıyoruz.
              Batıkent ve Çayyolu gibi bölgelerden de çevre yolu üzerinden
              kolayca ulaşım sağlanabilmektedir.
            </p>

            <h2>Vaktiniz Yok mu? Online Diyet Seçeneği</h2>
            <p>
              Ankara trafiğinde zaman kaybetmek istemiyorsanız tüm süreci akıllı
              telefonunuzdan yönetebilirsiniz.{" "}
              <Link href="/online-diyetisyen">Online diyet hizmetimiz</Link>;
              özel bir danışan mobil portalı, her hafta görüntülü seanslar ve
              anlık WhatsApp iletişimini içerir.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-10 text-center">
            Ankara Diyetisyen Danışmanlığı Hakkında Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-3">
            {faqPairs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-100 hover:border-[var(--brand-primary)]/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none">
                  <span className="font-semibold text-[var(--brand-dark)]">
                    {faq.q}
                  </span>
                  <span className="text-[var(--brand-primary)] text-xl shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
