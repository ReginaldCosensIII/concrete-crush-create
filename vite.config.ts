import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output" // Forces Lovable to stop outputting to dist/
    }
  },
  tanstackStart: {
    server: { 
      entry: "server",
    },
  },
});
