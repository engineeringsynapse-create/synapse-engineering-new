import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // Mantenemos 'server' para el despliegue en Vercel
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    // Esta opción ayuda a Vercel a gestionar mejor las rutas dinámicas
    imageService: true,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    ssr: {
      // Aseguramos que estas librerías se procesen correctamente en el servidor
      noExternal: ['react-icons', 'lucide-react', '@studio-freight/lenis', 'framer-motion'],
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});