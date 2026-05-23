import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	vite: {
		ssr: {
			// Mantenemos tus librerías externas para evitar errores de hidratación
			noExternal: ['react-icons', 'lucide-react', '@studio-freight/lenis', 'framer-motion'],
		},
		// Optimización para asegurar que las variables .env se carguen en la API
		optimizeDeps: {
			exclude: ['@resvg/resvg-js'],
		},
	},
});