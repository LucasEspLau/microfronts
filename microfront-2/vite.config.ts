// microfront-2/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        microfront2: 'src/main.tsx', // Punto de entrada para el microfrontend
      },
      output: {
        entryFileNames: 'microfront-2.js', // Nombre del archivo JS
        format: 'es', // Módulo ES
      },
    },
  },
});
