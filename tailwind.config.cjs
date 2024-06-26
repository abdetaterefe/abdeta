const config = {
	darkMode: 'class',
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
