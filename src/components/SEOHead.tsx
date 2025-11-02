import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
}

const SEOHead = ({
  title = "OneUAE Awards 2026 - Celebrating Unity, Vision, and Excellence",
  description = "OneUAE Awards celebrates exceptional individuals and organizations shaping the UAE's future. Join us January 4th, 2026 at Zabeel Ladies Club for an evening of national pride and excellence.",
  keywords = "UAE awards, OneUAE, national excellence, UAE leaders, innovation awards, Dubai awards, Emirates recognition, 2026 awards",
  path = "",
  image = "https://oneuaeawards.ae/og-image.jpg",
}: SEOHeadProps) => {
  const siteUrl = "https://oneuaeawards.ae";
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="OneUAE Awards" />
      <meta property="og:locale" content="en_AE" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "OneUAE Awards",
          url: siteUrl,
          logo: `${siteUrl}/android-chrome-512x512.png`,
          description:
            "OneUAE Awards celebrates exceptional individuals and organizations shaping the UAE's future.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@oneuaeawards.ae",
            telephone: "+971562555100",
            contactType: "Customer Service",
          },
          sameAs: [
            // Add social media URLs when available
          ],
        })}
      </script>

      {/* Structured Data - Event */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "OneUAE Awards 2026",
          description:
            "An exclusive black-tie ceremony celebrating unity, vision, and excellence in the United Arab Emirates.",
          startDate: "2026-01-04T18:00:00+04:00",
          endDate: "2026-01-04T23:00:00+04:00",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Zabeel Ladies Club",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "OneUAE Awards",
            url: siteUrl,
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
