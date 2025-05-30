import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: true,  
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'smiles.html') 
      }
    }
  },
  publicDir: 'public' 
});