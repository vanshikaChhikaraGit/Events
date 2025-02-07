import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'// Keep Tailwind as a Vite plugin
import path from "path"
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Tailwind CSS as a Vite plugin
  ],
  resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
