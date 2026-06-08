import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MessageCircle, 
  CheckCircle2, 
  Smartphone, 
  ArrowRight, 
  Video, 
  CalendarDays, 
  Utensils, 
  LineChart 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

const PAGE_URL = "https://ezgievginaktas.com/online-diyetisyen";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dyt. Ezgi Evgin — Online Diyetisyen ve Beslenme Danışmanlığı",
  description:
    "Türkiye ve yurtdışı için online diyet ve beslenme danışmanlığı. Danışan portalı uygulaması, haftalık video görüşme ve anlık mesajlaşma ile sürdürülebilir zayıflama.",
  url: PAGE_URL,
  telephone: "+90 546 265 04 40",
  image: "https://ezgievginaktas.com/images/instagram/profile.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Altay Mah. Orhan Bey Cad. Atayıldız No:1/70 Kat:8",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06820",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "City", name: "İstanbul" },
    { "@type": "City", name: "Ankara" },
    { "@type": "City", name: "İzmir" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  priceRange: "₺₺",
  medicalSpecialty: "Nutrition",
};

const onlineDietitianServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Online Diyetisyen Hizmeti",
  alternateName: [
    "Online diyet",
    "Online beslenme danışmanlığı",
    "Uzaktan diyetisyen takibi",
  ],
  description:
    "Dyt. Ezgi Evgin ile Türkiye ve yurtdışından katılabileceğiniz, haftalık video görüşme, kişiye özel beslenme planı, danışan portalı ve anlık mesajlaşma desteği içeren online diyetisyen hizmeti.",
  serviceType: "Online beslenme danışmanlığı",
  url: PAGE_URL,
  provider: {
    "@type": "MedicalBusiness",
    name: "Dyt. Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    url: "https://ezgievginaktas.com",
    telephone: "+90 546 265 04 40",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Altay Mah. Orhan Bey Cad. Atayıldız No:1/70 Kat:8",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06820",
      addressCountry: "TR",
    },
  },
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: PAGE_URL,
    servicePhone: "+90 546 265 04 40",
  },
};

export const metadata: Metadata = {
  title: { absolute: "Online Diyetisyen | Kişiye Özel Online Diyet Takibi" },
  description:
    "Online diyetisyen Ezgi Evgin ile kişiye özel beslenme planı, haftalık video görüşme, danışan portalı ve anlık mesajlaşma desteği alın.",
  keywords: [
    "online diyetisyen",
    "online diyet",
    "uzaktan diyet",
    "online beslenme danışmanlığı",
    "online zayıflama",
    "online diyetisyen ankara",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Online Diyetisyen | Kişiye Özel Online Diyet Takibi",
    description:
      "Dyt. Ezgi Evgin ile haftalık video görüşme, danışan portalı ve anlık mesajlaşma destekli online diyetisyen süreci.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Diyetisyen | Kişiye Özel Online Diyet Takibi",
    description:
      "Haftalık video görüşme, kişiye özel beslenme planı ve danışan portalı ile online diyetisyen desteği.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, online diyetisyen hizmetiniz hakkında bilgi almak istiyorum.",
  "online-diyetisyen"
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Online diyetisyen süreci nasıl işliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Süreç; hedeflerinizi belirlediğimiz detaylı bir form doldurmanızla başlar. Ardından 45 dakikalık kapsamlı bir ilk video görüşme yaparız. Özel hazırlanan diyet listeniz danışan portalına yüklenir ve her hafta düzenli görüşmelerle ilerlemeyi takip ederiz.",
      },
    },
    {
      "@type": "Question",
      name: "Yurtdışından online diyete katılabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kesinlikle! Avrupa başta olmak üzere dünyanın her yerinden birçok danışanımız bulunuyor. Bulunduğunuz ülkedeki market ürünleri ve yaşam tarzınıza uygun listeler hazırlıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Online diyet ile yüz yüze görüşme arasında verim farkı var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiçbir fark yoktur. Hatta danışan portalımız üzerinden yapılan anlık mesajlaşma ve öğün takibi sayesinde online süreç genellikle çok daha yakın ve sıkı bir takip imkanı sunar.",
      },
    },
    {
      "@type": "Question",
      name: "Listelerimde yasaklar veya çok zor bulunan malzemeler olacak mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Diyet listelerimiz tamamen sizin bütçenize, mutfak alışkanlıklarınıza ve sevdiğiniz gıdalara göre 'yasaksız' bir mantıkla sürdürülebilir şekilde planlanır.",
      },
    },
  ],
};

const steps = [
  {
    icon: CalendarDays,
    title: "1. Değerlendirme & Görüşme",
    desc: "Kapsamlı anamnez formu ve 45 dk'lık ilk görüntülü görüşme ile sizi, bedeninizi ve rutininizi tanırız.",
  },
  {
    icon: Utensils,
    title: "2. Size Özel Planlama",
    desc: "Hazır şablonlar değil; sevdiğiniz besinlere ve çalışma temponuza uygun %100 kişiselleştirilmiş program yazılır.",
  },
  {
    icon: Smartphone,
    title: "3. Portal Üzerinden Erişim",
    desc: "Tüm listeniz, değişim tablolarınız ve alışveriş önerileriniz cebinizdeki danışan uygulamasına yüklenir.",
  },
  {
    icon: LineChart,
    title: "4. Haftalık Takip & Güncelleme",
    desc: "Her hafta yapılan görüşmelerle plan güncellenir, mesajlaşma paneli üzerinden her an soru sorabilirsiniz.",
  },
];

export default function OnlineDiyetisyenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(onlineDietitianServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", item: "https://ezgievginaktas.com/" },
          { name: "Online Diyetisyen", item: PAGE_URL },
        ]}
      />
      <main className="min-h-screen bg-slate-50">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/40 pt-20 pb-24 lg:pt-32 lg:pb-36 border-b border-pink-100/50">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="container relative mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              <div className="space-y-8 text-center lg:text-left z-10">
                <div className="inline-flex items-center rounded-full bg-pink-100/80 px-3 py-1 text-sm font-medium text-[var(--brand-primary)] ring-1 ring-inset ring-pink-200/50">
                  <Smartphone className="w-4 h-4 mr-2" /> Danışan Portalı ile Her An Yanınızda
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--brand-dark)] leading-[1.1]">
                  Online Diyetisyen ile <br className="hidden md:block"/>
                  <span className="bg-gradient-to-r from-[var(--brand-primary)] to-pink-500 bg-clip-text text-transparent">
                    Kişiye Özel Takip
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Online diyetisyen Ezgi Evgin ile iş temposu, yol veya şehir dışı engeli olmadan profesyonel beslenme danışmanlığı alın. Sıradan bir PDF listesi değil; haftalık video görüşmeler, kişiye özel online diyet planı ve mobil uygulama üzerinden günlük etkileşimli bir süreç yaşayın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full h-14 px-8 text-base shadow-xl shadow-pink-200/50 hover:shadow-pink-200/80 transition-all rounded-xl">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Bilgi ve Randevu Al
                    </Button>
                  </a>
                  <Link href="/randevu" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80">
                      Randevu Al
                    </Button>
                  </Link>
                </div>
                <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500"/> Yasaksız Listeler</span>
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500"/> Sürdürülebilir</span>
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500"/> Yurtdışı Uyumu</span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:w-[110%] z-10 perspective-1000">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/80 transform rotate-2 lg:-rotate-2 transition-transform duration-500 hover:rotate-0">
                  <Image
                    src="/images/online/online-diyet-yazarken.jpg"
                    alt="Online diyetisyen görüşmesi"
                    width={800}
                    height={600}
                    priority
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow hidden sm:flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Video className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Canlı Görüşme</p>
                      <p className="text-xs text-slate-500">Her hafta 1-e-1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 lg:py-28 bg-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">Online Diyetisyen Süreci Nasıl İlerliyor?</h2>
              <p className="text-lg text-slate-600">Karmaşık PDF dosyalarına son. Online diyet sürecinizi tamamen size özel ve yönetilebilir bir sistemle kuruyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-50 transition-all">
                    <step.icon className="w-7 h-7 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  
                  {idx !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-slate-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHT / APP */}
        <section className="py-20 lg:py-28 bg-[var(--brand-dark)] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container relative mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Teknolojiyi Sürecinize Dahil Edin</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Online diyetisyen takibi sadece WhatsApp'tan liste göndermek değildir. Danışan portalımız sayesinde günlük su tüketiminiz, porsiyon takipleriniz, değişim listeleriniz ve kilo grafikleriniz her an elinizin altında.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Öğün fotoğraflarınızı anında paylaşın",
                    "Aklınıza takılanları mesaj panelinden sorun",
                    "Kaçamak yaptığınızda telafi seçeneklerini görün",
                    "Gelişim analizlerinizi grafikler üzerinden izleyin"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/mobil-uygulamamiz">
                    <Button variant="outline" className="h-12 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-transparent">
                      Uygulama Detayları <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-[500px]">
                  {/* A stylistic representation of a phone mockup */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-[var(--brand-primary)] rounded-[3rem] shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
                      <div className="h-16 bg-slate-50 border-b border-slate-100 flex items-center justify-center font-bold text-slate-800 shadow-sm z-10">
                        Danışan Portalı
                      </div>
                      <div className="flex-1 p-4 bg-slate-50 space-y-4 overflow-hidden relative">
                        <div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100 p-3">
                          <div className="w-1/2 h-3 bg-slate-200 rounded-full mb-3"></div>
                          <div className="w-3/4 h-3 bg-pink-100 rounded-full mb-2"></div>
                          <div className="w-full h-3 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-1/2 h-32 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                          <div className="w-1/2 h-32 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-pink-50 to-cyan-50 rounded-xl border border-slate-100 p-3 flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)]/20"></div>
                           <div className="flex-1 space-y-2">
                             <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                             <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                           </div>
                        </div>
                        {/* Fade out bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS THIS FOR? */}
        <section className="py-20 bg-pink-50/50">
           <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-10">Online Diyetisyen Takibi Kimler İçin Uygun?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
                {[
                  "Kilo vermek / almak isteyenler",
                  "İnsülin Direnci & PCOS yönetimi",
                  "Hamilelik ve Emzirme dönemi",
                  "Yurtdışında yaşayıp Türk mutfağı özleyenler",
                  "Yoğun mesai nedeniyle kliniğe gidemeyenler",
                  "Sürdürülebilir alışkanlık kazanmak isteyenler"
                ].map((item, idx) => (
                  <Card key={idx} className="p-4 border-white shadow-sm hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-primary)] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </Card>
                ))}
              </div>
              <p className="mt-10 text-slate-500 text-sm">
                Ankara'da ikamet ediyor ve yüz yüze görüşmek istiyorsanız <Link href="/eryaman-diyetisyen" className="text-pink-600 hover:underline">Eryaman ofisimizi</Link> ziyaret edebilirsiniz.
              </p>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--brand-dark)] text-center mb-12">Sıkça Sorulan Sorular</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqJsonLd.mainEntity.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 border border-slate-100 rounded-xl px-6 py-2 shadow-sm data-[state=open]:border-pink-200 transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-[var(--brand-dark)] hover:no-underline">
                    {faq.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-4">
                    {faq.acceptedAnswer.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-600 to-[var(--brand-dark)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Yeni Bir Başlangıç Yapmaya Hazır mısınız?</h2>
            <p className="text-lg md:text-xl text-pink-100 max-w-xl mx-auto">
              Size en uygun görüşme modelini seçmek veya ücretsiz ön değerlendirme yapmak için hemen WhatsApp üzerinden iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 bg-white text-[var(--brand-dark)] hover:bg-slate-50 rounded-xl shadow-xl hover:shadow-2xl transition-all font-bold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ücretsiz Ön Görüşme İçin Yazın
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
