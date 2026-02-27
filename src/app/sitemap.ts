import type { MetadataRoute } from "next";

import { SITE_URL } from "@/consts";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: SITE_URL, priority: 1 },
  { url: `${SITE_URL}/contact`, priority: 0.5 },
];

export default sitemap;
