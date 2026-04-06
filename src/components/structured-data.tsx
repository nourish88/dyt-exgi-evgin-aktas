export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ezgievginaktas.com",
    name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Online beslenme danışmanlığı, kilo yönetimi programları ve sağlıklı yaşam koçluğu hizmeti veren uzman diyetisyen.",
    image: "https://ezgievginaktas.com/logo.svg",
    logo: "https://ezgievginaktas.com/logo.svg",
    url: "https://ezgievginaktas.com",
    telephone: "+905462650440",
    email: "info@ezgievginaktas.com",
    sameAs: [
      "https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara",
      "https://www.instagram.com/dyt_ezgievgin",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Eryaman Altay mah. Orhan Bey cad. Atayıldız plaza, no:1/70 kat:8",
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
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Ankara", containedInPlace: { "@type": "Country", name: "Türkiye" } },
      { "@type": "Place", name: "Eryaman, Etimesgut, Ankara" },
      { "@type": "Country", name: "Türkiye" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "130",
      bestRating: "5",
      worstRating: "1",
    },
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
    alternateName: ["Ezgi Evgin", "Dyt Ezgi Evgin", "Diyetisyen Ezgi Evgin"],
    jobTitle: "Diyetisyen",
    description:
      "Uzman diyetisyen; Ankara Eryaman ve online diyet ile beslenme danışmanlığı",
    url: "https://ezgievginaktas.com",
    image: "https://ezgievginaktas.com/logo.svg",
    telephone: "+905462650440",
    email: "info@ezgievginaktas.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    sameAs: [
      "https://www.instagram.com/dyt_ezgievgin",
      "https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara",
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
    image: "https://ezgievginaktas.com/logo.svg",
    telephone: "+905462650440",
    email: "info@ezgievginaktas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Eryaman Altay mah. Orhan Bey cad. Atayıldız plaza, no:1/70 kat:8",
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
