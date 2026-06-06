import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Award, 
  Stethoscope, 
  Star,
  Quote
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LocalProofSection } from "@/components/local-seo/local-proof-section";

export const metadata: Metadata = {
  title: "Ankara Diyetisyen — Beslenme Danışmanlığı | Dyt. Ezgi Evgin",
  description:
    "Ankara'da diyetisyen arıyorsanız: Eryaman ofisinde yüz yüze veya online beslenme danışmanlığı. Kişiye özel plan, haftalık görüşme ve danışan portalı ile takip.",
  keywords: [
    "ankara diyetisyen",
    "diyetisyen ankara",
    "ankara beslenme uzmanı",
    "ankara diyetisyen randevu",
    "ankara en iyi diyetisyen",
    "eryaman diyetisyen",
    "etimesgut diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ankara-diyetisyen",
  },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/ankara-diyetisyen",
    title: "Ankara Diyetisyen — Beslenme ve Diyet Danışmanlığı",
    description:
      "Ankara'da klinik diyetisyen desteği: Eryaman ofisinde yüz yüze veya online beslenme danışmanlığı. Başkent Üniversitesi deneyimi ve kişiye özel planlar.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ankara'da diyetisyen randevusu almak istiyorum.",
  "ankara-diyetisyen"
);

const faqPairs = [
  {
    q: "Ankara'da diyetisyen randevu fiyatları / seans ücretleri ne kadar?",
    a: "Diyetisyen seans ücretleri alacağınız paketin süresine (1 aylık, 3 aylık) ve görüşme modeline (online veya yüz yüze) göre değişiklik göstermektedir. Bütçenize en uygun programı seçmek ve güncel fiyat bilgisi almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz."
  },
  {
    q: "Online diyet ile yüz yüze (ofis) görüşmesi arasında kalite farkı var mı?",
    a: "Kesinlikle kalite veya süreç işleyişi farkı yoktur. İster Eryaman'daki ofisimize gelin, ister Ankara'nın öbür ucundan (veya şehir dışından) online katılın; haftalık 45 dakikalık görüşmelerimiz, danışan portalı erişiminiz ve WhatsApp üzerinden günlük anlık iletişim hakkınız aynı standartta korunur."
  },
  {
    q: "Randevular sadece Etimesgut / Eryaman bölgesinde mi yapılıyor?",
    a: "Yüz yüze görüşmelerimiz ulaşımı çok kolay olan Eryaman - Etimesgut sınırlarındaki Atayıldız Plaza'daki ofisimizde gerçekleşmektedir. Ancak Yenimahalle, Çankaya, Sincan veya Keçiören gibi uzak ilçelerden trafik sorunu yaşamak istemeyen danışanlarımız genellikle online diyet programlarımızı tercih etmektedir."
  },
  {
    q: "Diyet listelerinde yasaklar, aç kalma veya bulması zor yiyecekler oluyor mu?",
    a: "Hayır. Diyet felsefemiz 'yasaksız' ve 'sürdürülebilir' bir beslenme modeline dayanır. Listeleriniz; bütçenize, mutfak kültürünüze ve sevdiğiniz gıdalara göre şekillenir. Aç kalmadan, stres yapmadan, porsiyon kontrolü ve dengeleme mantığıyla ilerleriz."
  },
  {
    q: "İlk görüşme (seans) ne kadar sürüyor ve neler konuşuluyor?",
    a: "İlk görüşmemiz yaklaşık 45 dakika sürmektedir. Bu görüşmede detaylı anamnez (sağlık geçmişiniz) alınır, kan tahlilleriniz incelenir, çalışma rutininiz ve beslenme alışkanlıklarınız masaya yatırılır. Ardından size en uygun taslak program birlikte oluşturulur."
  },
  {
    q: "Süreç boyunca sadece liste mi veriyorsunuz, takip nasıl yapılıyor?",
    a: "Sadece PDF bir liste verip sizi yalnız bırakmıyoruz. Kendi akıllı telefon uygulamanız (Danışan Portalı) üzerinden listelerinizi, değişim tablolarınızı görebilirsiniz. Ayrıca öğünlerinizin fotoğraflarını yükleyebilir ve gün içinde takıldığınız her noktayı WhatsApp veya uygulama içinden mesaj atarak sorabilirsiniz."
  },
  {
    q: "İnsülin direnci, tiroid veya PCOS gibi hastalıklarım var, yardımcı oluyor musunuz?",
    a: "Evet. Klinik beslenme uzmanlığı kapsamında; İnsülin direnci, Hashimoto Tiroidi, Polikistik Over Sendromu (PCOS), diyabet ve sindirim sistemi hastalıkları gibi durumlara özel tıbbi beslenme tedavisi (diyet) uygulanmaktadır."
  },
  {
    q: "Kredi kartı ile ödeme yapabiliyor muyuz?",
    a: "Evet, hem online ödeme altyapısı üzerinden hem de ofisimizde kredi kartı veya banka havalesi / EFT ile ödeme yapma imkanınız bulunmaktadır."
  },
  {
    q: "Çocuk ve ergen beslenmesi konusunda destek veriyor musunuz?",
    a: "Evet. Büyüme ve gelişme çağındaki çocukların ve ergenlerin artan enerji ve makro/mikro besin ögesi ihtiyaçlarını karşılayacak, onların psikolojisini yormayacak özel beslenme programları hazırlıyoruz."
  },
  {
    q: "Randevu almak için ne kadar süre önceden iletişime geçmeliyim?",
    a: "Özellikle hafta sonu ve mesai sonrası (akşam) saatleri çok hızlı dolduğu için, planladığınız tarihten en az 3-4 gün önce iletişime geçerek randevunuzu kesinleştirmeniz iyi olacaktır."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPairs.map(p => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: { "@type": "Answer", text: p.a }
  }))
};

export default function AnkaraDiyetisyenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", item: "https://ezgievginaktas.com/" },
          {
            name: "Ankara Diyetisyen",
            item: "https://ezgievginaktas.com/ankara-diyetisyen",
          },
        ]}
      />
      
      <main className="min-h-screen bg-white">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-20 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left z-10 order-2 lg:order-1">
                <div className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-[var(--brand-primary)]">
                  <MapPin className="w-4 h-4 mr-1.5" /> Ankara & Online
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--brand-dark)] leading-[1.15]">
                  Ankara Diyetisyen: <br className="hidden lg:block"/>
                  <span className="bg-gradient-to-r from-[var(--brand-primary)] to-pink-500 bg-clip-text text-transparent">
                    Bilimsel Yaklaşım, <br className="hidden lg:block"/>Kişiye Özel Plan
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  İnternetteki kopya diyet listelerinden sıkıldınız mı? Başkent Üniversitesi klinik tecrübesiyle, sizin kan değerlerinize, mesainize ve damak tadınıza tamamen özel hazırlanan beslenme programlarıyla kalıcı başarıya ulaşın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full h-14 px-8 text-base shadow-lg rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-dark)] transition-colors">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hemen Ücretsiz Ön Görüşme Yapın
                    </Button>
                  </a>
                  <Link href="/programlar" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base rounded-xl border-slate-300">
                      Süreç ve Paketler
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-none z-10 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/instagram/posts/clinic-01.jpeg"
                    alt="Ankara diyetisyen Ezgi Evgin Eryaman ofisi"
                    width={800}
                    height={1000}
                    priority
                    className="w-full h-auto object-cover max-h-[600px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <Card className="p-4 bg-white/95 backdrop-blur shadow-xl border-0">
                       <p className="font-bold text-[var(--brand-dark)] flex items-center gap-2">
                         <Star className="w-5 h-5 text-yellow-500 fill-yellow-500"/> 5.0 Google Puanı
                       </p>
                       <p className="text-sm text-slate-600 mt-1">Yüzlerce mutlu danışan ve kalıcı sonuçlar.</p>
                     </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL PROOF (Trust Signals) */}
        <LocalProofSection areaName="Ankara ve çevresi" whatsappLink={whatsappLink} />

        {/* CONTENT (Pillar Page Deep Dive) */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:text-[var(--brand-dark)] prose-a:text-[var(--brand-primary)]">
              
              <h2>Neden Profesyonel Bir Ankara Diyetisyeni İle Çalışmalısınız?</h2>
              <p>
                Günümüzde bilgiye ulaşmak çok kolay. Sosyal medyada "1 ayda 10 kilo verdiren liste" gibi iddialı ancak gerçek dışı vaatlerle sıkça karşılaşıyoruz. Ancak insan vücudu bir makine değildir; <strong>stres düzeyiniz, uyku saatleriniz, kan tahlilleriniz, genetik mirasınız ve psikolojik durumunuz</strong> metabolizmanızın nasıl çalışacağını belirler.
              </p>
              <p>
                Ankara'da profesyonel bir diyetisyen arayışında olmanızın temel nedeni, internette okuduğunuz genel geçer kuralların size uymamasıdır. Dyt. Ezgi Evgin olarak felsefem, sizi aç bırakmak veya sevdiğiniz tüm yiyecekleri hayatınızdan çıkarmak değildir. Amaç, <strong>doğru porsiyon kontrolünü öğretmek</strong>, kaçamakları nasıl dengeleyeceğinizi anlatmak ve bu süreci ömür boyu sürecek kalıcı bir alışkanlığa çevirmektir.
              </p>

              <div className="my-12 p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
                <h3 className="flex items-center gap-3 mt-0 mb-6 text-2xl">
                  <GraduationCap className="w-8 h-8 text-[var(--brand-primary)]" />
                  E-E-A-T: Uzmanlık ve Deneyim (Dyt. Ezgi Evgin)
                </h3>
                <p className="mt-0">
                  Beslenme ve sağlık çok ciddi bir uzmanlık gerektirir (Google algoritmalarında dahi YMYL - Your Money Your Life kategorisindedir). Sürecinizi emanet ettiğiniz kişinin akademik ve klinik altyapısı başarınızın anahtarıdır:
                </p>
                <ul className="space-y-4 font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span><strong>Akademik Temel:</strong> Başkent Üniversitesi Beslenme ve Diyetetik bölümünden elde edilen güncel, kanıta dayalı ve bilimsel akademik altyapı.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span><strong>Klinik Deneyim:</strong> Poliklinik, hastane ve yoğun bakım süreçlerini kapsayan yüzlerce vakalık pratik gözlem ve hastalık/diyet yönetimi tecrübesi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span><strong>Modern Yaklaşım:</strong> Geleneksel "kibrit kutusu peynir" ezberlerinin ötesinde, danışanın yaşam alanına, çalışma saatlerine ve psikolojisine uyum sağlayan esnek planlama modeli.</span>
                  </li>
                </ul>
              </div>

              <h2>Hangi Alanlarda Klinik Danışmanlık Veriyoruz?</h2>
              <p>
                "Sadece zayıflamak istiyorum" diyebilirsiniz; ancak o kilonun altında yatan görünmez engeller (örneğin İnsülin direnci) olabilir. Kliniğimizde sadece estetik amaçlı değil, <strong>tıbbi beslenme tedavisi</strong> kapsamında da danışmanlık veriyoruz:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                {[
                  { title: "Kilo Verme & Yönetimi", link: "/ankara-kilo-verme-diyetisyen" },
                  { title: "İnsülin Direnci Diyeti", link: "/insulin-direnci-diyeti-ankara" },
                  { title: "PCOS (Polikistik Over) Beslenmesi", link: "/pcos-diyetisyen-ankara" },
                  { title: "Hamilelik ve Emzirme Dönemi", link: "/hamilelik-beslenmesi-ankara" },
                  { title: "Sporcu Beslenmesi", link: "/sporcu-beslenmesi-ankara" },
                  { title: "Çocuk ve Ergen Beslenmesi", link: "/cocuk-beslenmesi-diyetisyen" }
                ].map(srv => (
                  <Link key={srv.title} href={srv.link} className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-[var(--brand-primary)] hover:shadow-md transition-all group">
                    <Stethoscope className="w-6 h-6 text-[var(--brand-primary)] group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-800">{srv.title}</span>
                  </Link>
                ))}
              </div>

              <h2>Yüz Yüze Görüşme: Eryaman - Etimesgut Ofisi</h2>
              <p>
                Fiziksel olarak ofisimize gelmek, profesyonel tartımlarımızla tanışmak ve yüz yüze motivasyon almak isteyen danışanlarımız için Ankara'nın çok merkezi bir noktasındayız. <strong>Altay Mahallesi, Ata Yıldız Plaza</strong>'daki kliniğimiz, Optimum AVM karşısında olup ulaşımı oldukça rahattır. 
                <br/><br/>
                Ağırlıklı olarak <Link href="/eryaman-diyetisyen">Eryaman</Link>, <Link href="/etimesgut-diyetisyen">Etimesgut</Link>, <Link href="/sincan-diyetisyen">Sincan</Link> ve Yenimahalle bölgesinden gelen danışanlarımızı ağırlıyoruz. Ancak Batıkent ve Çayyolu gibi bölgelerden de çevre yolu üzerinden kolayca ulaşım sağlanabilmektedir.
              </p>

              <h2>Gelecek Vaktiniz Yok mu? "Online Diyet" Seçeneği</h2>
              <p>
                Ankara trafiğinde zaman kaybetmek istemiyor, yoğun mesai saatlerinde çalışıyor veya evden çıkmakta zorlanıyorsanız; tüm süreci <strong>akıllı telefonunuzdan</strong> yönetebilirsiniz. 
              </p>
              <p>
                Online diyet hizmetimiz, PDF gönderilen sıradan paketlerin aksine; <Link href="/online-diyetisyen">özel bir danışan mobil portalı</Link>, her hafta görüntülü (video) seanslar ve anlık WhatsApp iletişimini içerir. Ankara dışından veya yurtdışından da birçok danışanımızla aynı yüksek standartlarda çalışıyoruz.
              </p>
              
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Danışan Neler Söylüyor?</h2>
               <p className="text-muted-foreground mt-3">Ankara'da diyetisyen sürecini bizimle tamamlayan danışanlarımızın başarı hikayeleri ve yorumları.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  text: "Yıllardır veremediğim dirençli kilolarım vardı. Eryaman'daki ofise görüşmeye gittiğim ilk gün bile ne kadar doğru bir yerde olduğumu anladım. Listeler asla sıkıcı değil, her şey benim sevdiğim gıdalardan oluşuyordu. Toplam 12 kilo verdik!",
                  name: "Ayşe Y."
                },
                {
                  text: "İnsülin direncim yüzünden sürekli tatlı krizlerine giriyordum. Ezgi Hanım süreci o kadar güzel yönetti ki, hem aç kalmadım hem de tahlil sonuçlarım 3 ayın sonunda normale döndü. Özellikle danışan portalı uygulamasından çok memnun kaldım.",
                  name: "Mehmet K."
                },
                {
                  text: "Çankaya'da oturduğum için online diyet paketini seçtim. Başta 'acaba ofise gitmesem eksik kalır mı' diyordum ama her hafta yapılan 45 dakikalık video görüşmeler sayesinde motivasyonum hep zirvedeydi. Hedefimize çok kolay ulaştık.",
                  name: "Elif S."
                }
              ].map((rev, idx) => (
                <Card key={idx} className="p-6 bg-slate-50 border-0 shadow-sm relative pt-10">
                  <Quote className="w-8 h-8 text-[var(--brand-primary)]/20 absolute top-4 left-4" />
                  <p className="text-slate-600 italic leading-relaxed relative z-10 text-sm">"{rev.text}"</p>
                  <div className="mt-6 flex items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-[var(--brand-primary)]">
                       {rev.name.charAt(0)}
                     </div>
                     <span className="font-bold text-[var(--brand-dark)]">{rev.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE FAQ SECTION */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-10 text-center">
              Ankara Diyetisyen Danışmanlığı Hakkında Sıkça Sorulan Sorular
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqPairs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-100 rounded-xl px-6 py-2 shadow-sm data-[state=open]:border-[var(--brand-primary)] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-[var(--brand-dark)] hover:no-underline text-[15px]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-4 pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="py-20 bg-[var(--brand-dark)] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 max-w-3xl text-center relative z-10 space-y-8">
            <Award className="w-16 h-16 text-pink-400 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sağlıklı Bir Başlangıç Yapmaya Hazır Mısınız?</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Size en uygun programı seçmek, ücretsiz ön değerlendirme yapmak ve sürecin detaylarını konuşmak için şimdi bize ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 bg-white text-[var(--brand-dark)] hover:bg-slate-50 rounded-xl shadow-xl hover:shadow-2xl transition-all font-bold text-base">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp'tan İletişime Geçin
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
