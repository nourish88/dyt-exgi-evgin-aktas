import {
  DOKTORTAKVIMI_PROFILE_URL,
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";
import {
  BUSINESS_ID,
  BUSINESS_NAME,
  PERSON_ID,
  PERSON_NAME,
  PERSON_PROFILE_URL,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/seo-entities";

export function StructuredData() {
  const businessSchema = {
    "@type": ["LocalBusiness", "MedicalClinic"],
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    description:
      "Ankara Eryaman'da kilo yönetimi, klinik beslenme ve sağlıklı yaşam danışmanlığı hizmeti veren uzman diyetisyen.",
    image: "https://ezgievginaktas.com/ezgi_evgin.png",
    logo: "https://ezgievginaktas.com/ezgi_evgin.png",
    url: SITE_URL,
    telephone: "+905462650440",
    email: "ezgievgin_dytsyn@hotmail.com",
    medicalSpecialty: "DietNutrition",
    alternateName: [
      "Ezgi Evgin Beslenme ve Diyet Danışmanlık Merkezi",
      "Ata Yıldız Plaza Diyetisyen",
    ],
    sameAs: [
      INSTAGRAM_PROFILE_URL,
      GOOGLE_MAPS_PROFILE_URL,
    ],
    founder: { "@id": PERSON_ID },
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
      latitude: "39.9669753",
      longitude: "32.6358095",
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
      { "@type": "Place", name: "Eryaman" },
      { "@type": "AdministrativeArea", name: "Etimesgut" },
      { "@type": "Country", name: "Türkiye" },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beslenme ve Diyet Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Beslenme Danışmanlığı",
            description:
              "Kişiye özel diyet programları ve beslenme danışmanlığı",
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
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    givenName: "Ezgi",
    familyName: "Evgin Aktaş",
    alternateName: [
      "Ezgi Evgin",
      "Dyt. Ezgi Evgin",
      "Dyt Ezgi Evgin",
      "Diyetisyen Ezgi Evgin",
    ],
    jobTitle: "Diyetisyen",
    description:
      "Uzman diyetisyen; Ankara Eryaman'da beslenme danışmanlığı",
    url: PERSON_PROFILE_URL,
    image: `${SITE_URL}/images/instagram/profile.jpg`,
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
    ],
    worksFor: { "@id": BUSINESS_ID },
    knowsAbout: [
      "Beslenme ve Diyetetik",
      "Beslenme Danışmanlığı",
      "Kilo Yönetimi",
      "İnsülin Direnci ve Beslenme",
      "Sporcu Beslenmesi",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS_NAME,
    description: "Ankara Eryaman beslenme danışmanlığı ve kilo yönetimi programları",
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "tr-TR",
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [businessSchema, personSchema, websiteSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
  );
}
