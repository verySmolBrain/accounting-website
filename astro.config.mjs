import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://accounting-website-9j6.pages.dev/",
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap(), compress(), robotsTxt()],
  output: "server",
  adapter: cloudflare()
});