import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  // Social links are configurable, so a missing mailto entry must not crash the page.
  const mailLink = socialMediaLinks.find((media) =>
    media.link.startsWith("mailto")
  );
  let mail = mailLink
    ? mailLink.link.substring("mailto:".length)
    : undefined;
  // The section flagged with `work: true` in portfolio.js holds the current role.
  // If no section is flagged, fall back to the first section that has experiences
  // so a renamed/restructured experience list never breaks the whole site.
  const sections = experience.sections ?? [];
  const workSection = sections.find((section) => section.work);
  const job =
    workSection?.experiences?.at(0) ??
    sections.find((section) => section.experiences?.length > 0)
      ?.experiences[0];

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    // jobTitle and worksFor are only meaningful when a role is configured.
    ...(job
      ? {
          jobTitle: job.title,
          worksFor: {
            "@type": "Organization",
            name: job.company,
          },
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
