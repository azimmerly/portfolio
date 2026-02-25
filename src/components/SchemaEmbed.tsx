import Script from "next/script";
import type { Person, WithContext } from "schema-dts";

import { URLS } from "@/consts";

const SCHEMA: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrew Zimmerly",
  jobTitle: "Software Engineer",
  url: "https://andrewzimmerly.com",
  sameAs: [URLS.github, URLS.linkedin],
} as const;

export const SchemaEmbed = () => (
  <Script
    id="jsonld-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
  />
);
