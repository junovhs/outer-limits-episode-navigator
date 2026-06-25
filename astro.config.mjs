import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://junovhs.github.io",
  base: "/outer-limits-episode-navigator",
  integrations: [react()],
});
