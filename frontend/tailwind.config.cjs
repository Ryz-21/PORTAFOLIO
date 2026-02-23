/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx,html}'
	],
	darkMode: 'class', // switch theme by adding class "dark" on <html>
	theme: {
		extend: {
			colors: {
				// Palette focused on black & white with useful semantic names
				bg: {
					DEFAULT: '#ffffff',
					dark: '#000000'
				},
				fg: {
					DEFAULT: '#000000',
					muted: '#6b7280', // gray-500
					dark: '#ffffff'
				}
			},
			// optional: tighter container widths
			container: {
				center: true,
				padding: '1rem'
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
}
