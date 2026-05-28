import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // Mantenemos 'server' para el despliegue dinámico en Vercel
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    // Eliminamos 'includeFiles' porque causaba el error de compilación
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    ssr: {
      // Aseguramos que estas librerías críticas se procesen en el servidor
      noExternal: ['react-icons', 'lucide-react', '@studio-freight/lenis', 'framer-motion'],
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});