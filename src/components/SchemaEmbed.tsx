import Script from "next/script";
import type { Person, WithContext } from "schema-dts";

const SCHEMA: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrew Zimmerly",
  jobTitle: "Software Engineer",
  url: "https://andrewzimmerly.com",
  sameAs: [
    "https://github.com/azimmerly",
    "https://linkedin.com/in/andrewzimmerly",
  ],
} as const;

export const SchemaEmbed = () => (
  <Script
    id="jsonld-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
  />
);
