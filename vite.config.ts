
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    outDir: "./dist",
  },
  server: {
    port: 3000
  }
});