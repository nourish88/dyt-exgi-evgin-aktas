export function HomeFaqJsonLd() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Online diyet danışmanlığı nasıl çalışır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İlk görüşmede sağlık geçmişiniz, beslenme alışkanlıklarınız ve hedefleriniz değerlendirilir. Size özel haftalık beslenme programı hazırlanır. WhatsApp, danışan portalı veya görüntülü görüşme ile haftalık takip yapılır.",
        },
      },
      {
        "@type": "Question",
        name: "Ankara dışından online diyet hizmeti alabilir miyim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Türkiye'nin her yerinden ve yurt dışından online diyet danışmanlığı verilmektedir. Tüm görüşmeler dijital olarak yapılır; programlar mobil danışan portalı üzerinden takip edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Eryaman'da yüz yüze diyetisyen randevusu nasıl alabilirim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eryaman Altay Mahallesi'ndeki ofisimizde yüz yüze görüşme için web sitesi üzerinden randevu sayfasından, DoktorTakvimi profilinden veya WhatsApp üzerinden randevu alabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı Hakkında",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Başkent Üniversitesi Beslenme ve Diyetetik mezunu uzman Ezgi Evgin Beslenme ve Diyet Danışmanlığı; Ankara Eryaman ofisinde ve online olarak kişiye özel beslenme danışmanlığı hizmeti vermektedir. Resmi web sitesi: ezgievginaktas.com",
        },
      },
      {
        "@type": "Question",
        name: "Diyet süreci ne kadar sürer ve fiyatlandırma nasıl?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Programlar genellikle 1, 3 veya 6 aylık paketler şeklinde sunulur. Hedefinize ve mevcut durumunuza göre süre değişebilir. Güncel fiyatlar ve paket detayları için randevu sayfasından iletişime geçebilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "BMI ve günlük kalori ihtiyacımı nasıl hesaplayabilirim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sitemizdeki Hesaplayıcılar sayfasından ücretsiz olarak vücut kitle indeksi (BMI), ideal kilo ve günlük kalori ihtiyacınızı hesaplayabilirsiniz.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}
