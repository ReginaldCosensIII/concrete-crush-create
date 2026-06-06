import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Pass the preset directly into the nitro config object
  nitro: {
    preset: "vercel"
  },
  tanstackStart: {
    server: { 
      entry: "server",
    },
  },
});
