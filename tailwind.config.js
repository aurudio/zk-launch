/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				GR: 'GR-regular',
				medium: 'GR-medium',
				semibold: 'GR-semibold',
				extrabold: 'GR-extrabold',
			},
		},
	},
	plugins: [],
}
