import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackStartVite } from "@tanstack/react-start-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackStartVite(),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    tsconfigPaths: true, // substitui o plugin vite-tsconfig-paths nativamente
  },
});