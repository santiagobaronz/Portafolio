import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			'poppins': ['system-ui']
		},
		screens: {
			sm: '425px',
			md: '700px',
			lg: '1024px',
			xl: '1220px',
		},
		container: {
			center: true,
		},
		colors: {
			'white': '#f4f4f5',
			'green': '#159184',
			"gray": '#65656d',
			"gray-hover": '#202022',
			"stroke": 'hsla(240,5%,96%,.1)',
			'black': {
				'50': '#f7f7f7',
				'100': '#e3e3e3',
				'200': '#c8c8c8',
				'300': '#a4a4a4',
				'400': '#818181',
				'500': '#666666',
				'600': '#515151',
				'700': '#252525',
				'800': '#18181b',
				'900': '#0f0f0f',
			},
		}
	},
	plugins: [],
}

export default config;