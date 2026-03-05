import type { MetadataRoute } from "next";

import { SITE_URL } from "@/consts";

const sitemap = (): MetadataRoute.Sitemap => [{ url: SITE_URL, priority: 1 }];

export default sitemap;
