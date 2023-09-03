/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './NavBar.jsx'],
	theme: {
		extend: {
			borderWidth: {
				'6': '6px',
				'0.5': '0.5px',
			}
		},
	},
	plugins: [],
}
