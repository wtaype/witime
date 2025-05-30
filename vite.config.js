import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: true,  // ← ¡Agregado aquí!
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  publicDir: 'public' 
});