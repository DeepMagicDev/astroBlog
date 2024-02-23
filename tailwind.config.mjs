/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ocr: ["ocr-a-std"]
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dracula"]
	}
}
