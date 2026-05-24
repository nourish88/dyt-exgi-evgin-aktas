import {
  DOKTORTAKVIMI_PROFILE_URL,
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalClinic"],
    "@id": "https://ezgievginaktas.com",
    name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Online beslenme danışmanlığı, kilo yönetimi programları ve sağlıklı yaşam koçluğu hizmeti veren uzman diyetisyen.",
    image: "https://ezgievginaktas.com/ezgi_evgin.png",
    logo: "https://ezgievginaktas.com/ezgi_evgin.png",
    url: "https://ezgievginaktas.com",
    telephone: "+905462650440",
    email: "ezgievgin_dytsyn@hotmail.com",
    medicalSpecialty: "DietNutrition",
    alternateName: [
      "Diyetisyen Ezgi Evgin",
      "Dyt. Ezgi Evgin Aktaş",
      "Ezgi Evgin",
      "Diyetisyen Ezgi Evgin Yorumları",
      "Ata Yıldız Plaza Diyetisyen",
      "Diyetisyen",
    ],
    sameAs: [
      "https://diyetisyenezgievgin.com",
      DOKTORTAKVIMI_PROFILE_URL,
      INSTAGRAM_PROFILE_URL,
      GOOGLE_MAPS_PROFILE_URL,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Altay mah. Orhan Bey cad. Atayıldız no:1/70 kat:8",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06820",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.947",
      longitude: "32.677",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
        ],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Ankara", containedInPlace: { "@type": "Country", name: "Türkiye" } },
      { "@type": "Place", name: "Eryaman, Etimesgut, Ankara" },
      { "@type": "Country", name: "Türkiye" },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beslenme ve Diyet Programları",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Beslenme Danışmanlığı",
            description:
              "Kişiye özel online diyet programları ve beslenme danışmanlığı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kilo Yönetimi Programı",
            description:
              "Bilimsel yöntemlerle sağlıklı ve kalıcı kilo verme programları",
          },
        },
      ],
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ezgi Evgin Aktaş",
    alternateName: ["Ezgi Evgin", "Dyt Ezgi Evgin", "Diyetisyen Ezgi Evgin", "Diyetisyen Ezgi Evgin Yorumları", "Ata Yıldız Plaza Diyetisyen"],
    jobTitle: "Diyetisyen",
    description:
      "Uzman diyetisyen; Ankara Eryaman ve online diyet ile beslenme danışmanlığı",
    url: "https://ezgievginaktas.com",
    image: "https://ezgievginaktas.com/ezgi_evgin.png",
    telephone: "+905462650440",
    email: "ezgievgin_dytsyn@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    sameAs: [
      "https://diyetisyenezgievgin.com",
      INSTAGRAM_PROFILE_URL,
      DOKTORTAKVIMI_PROFILE_URL,
      GOOGLE_MAPS_PROFILE_URL,
    ],
    knowsAbout: [
      "Beslenme ve Diyetetik",
      "Online Diyet Danışmanlığı",
      "Kilo Yönetimi",
      "İnsülin Direnci ve Beslenme",
      "Sporcu Beslenmesi",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ezgievginaktas.com/#website",
    url: "https://ezgievginaktas.com",
    name: "Diyetisyen Ezgi Evgin Aktaş",
    description: "Online beslenme danışmanlığı ve kilo yönetimi programları",
    publisher: {
      "@type": "Person",
      name: "Ezgi Evgin Aktaş",
    },
    inLanguage: "tr-TR",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description: "Online ve yüz yüze beslenme danışmanlığı hizmetleri",
    image: "https://ezgievginaktas.com/ezgi_evgin.png",
    telephone: "+905462650440",
    email: "ezgievgin_dytsyn@hotmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Altay mah. Orhan Bey cad. Atayıldız no:1/70 kat:8",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06820",
      addressCountry: "TR",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Ankara", containedInPlace: { "@type": "Country", name: "Türkiye" } },
      { "@type": "Place", name: "Eryaman, Etimesgut, Ankara" },
      { "@type": "Country", name: "Türkiye" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}
