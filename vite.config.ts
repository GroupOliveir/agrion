import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: { enabled: false },
    }),
    nitro({
      preset: "cloudflare-pages",
    }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
