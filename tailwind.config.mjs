/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Inter"', 'system-ui'],
			  },
			  fontWeight: {
				thin: '100',
				hairline: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			  },
		},
	},
	variants: {
		extend: {
		  scale: ['hover'],
		},
	  },
	plugins: [],
}



//  'Open Sans', sans-serif;
