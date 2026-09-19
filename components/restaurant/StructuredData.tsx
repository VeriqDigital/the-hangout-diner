import { siteConfig, siteUrl, directionsUrl } from "@/config/site";
import type { BusinessInfo } from "@/sanity/lib/types";
export default function StructuredData({
  business,
}: {
  business: BusinessInfo;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    hasMap: business.directionsUrl || directionsUrl(business.address),
    ...(siteUrl ? { url: siteUrl, hasMenu: `${siteUrl}/menu` } : {}),
    sameAs: [business.facebookUrl, business.instagramUrl].filter(Boolean),
    openingHoursSpecification: business.hours.flatMap((day) =>
      day.status === "open"
        ? (day.periods || []).map((period) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${day.day}`,
            opens: period.opens,
            closes: period.closes,
          }))
        : day.status === "closed"
          ? [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: `https://schema.org/${day.day}`,
                opens: "00:00",
                closes: "00:00",
              },
            ]
          : [],
    ),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
