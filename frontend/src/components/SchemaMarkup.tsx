export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.superstern.de",
    name: "Super Stern",
    image: "https://www.superstern.de/logo.png",
    description: "Professioneller Reinigungsservice in Berlin - Büroreinigung, Unterhaltsreinigung, Baureinigung, Fensterreinigung und Umzugsreinigung.",
    url: "https://www.superstern.de",
    telephone: "",
    email: "kontakt@superstern.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wielandstraße 11a",
      addressLocality: "Berlin",
      postalCode: "10629",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
    priceRange: "€€",
    sameAs: [],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Unterhaltsreinigung",
        description: "Regelmäßige Reinigung für Ihr Zuhause und Büros. Boden wischen, Staub saugen/wischen, Bad- und Küchenreinigung.",
        provider: {
          "@type": "LocalBusiness",
          name: "Super Stern",
          url: "https://www.superstern.de",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "2.50",
          unitText: "m²",
        },
      },
      {
        "@type": "Service",
        name: "Büroreinigung",
        description: "Professionelle Reinigung von Arbeitsplätzen, Konferenzräumen und Sozialflächen.",
        provider: {
          "@type": "LocalBusiness",
          name: "Super Stern",
          url: "https://www.superstern.de",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "3.00",
          unitText: "m²",
        },
      },
      {
        "@type": "Service",
        name: "Baureinigung",
        description: "Beseitigung von Baustaub, Farbresten und Zementschleier nach Renovierungen.",
        provider: {
          "@type": "LocalBusiness",
          name: "Super Stern",
          url: "https://www.superstern.de",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "5.00",
          unitText: "m²",
        },
      },
      {
        "@type": "Service",
        name: "Glas- und Fensterreinigung",
        description: "Streifenfreies Putzen aller Glasflächen inklusive Rahmen.",
        provider: {
          "@type": "LocalBusiness",
          name: "Super Stern",
          url: "https://www.superstern.de",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "4.50",
          unitText: "m²",
        },
      },
      {
        "@type": "Service",
        name: "Umzugsreinigung",
        description: "Besenreine und tiefgehende Übergabereinigung für Vermieter und Neumieter.",
        provider: {
          "@type": "LocalBusiness",
          name: "Super Stern",
          url: "https://www.superstern.de",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "4.00",
          unitText: "m²",
        },
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
