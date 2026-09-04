export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sewa Paws",
    url: "https://sewapaws.com",
    description:
      "An emerging animal-focused startup creating thoughtful solutions for animal care and welfare.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}