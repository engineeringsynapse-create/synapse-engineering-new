/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#00F0FF',
				dark: '#030303',
				graphite: '#0A0A0A',
			},
			animation: {
				'marquee': 'marquee 25s linear infinite',
				'fade-in': 'fadeIn 1s ease-out forwards',
				'fade-in-up': 'fadeInUp 1s ease-out forwards',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-33.33%)' },
				},
				fadeIn: {
					'from': { opacity: '0' },
					'to': { opacity: '1' },
				},
				fadeInUp: {
					'from': { opacity: '0', transform: 'translateY(20px)' },
					'to': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};