const config = {
	darkMode: 'class',
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
			colors: {
				'myBlue': {
					'50': '#eff8ff',
					'100': '#daefff',
					'200': '#bde3ff',
					'300': '#90d3ff',
					'400': '#5cb9fe',
					'500': '#3699fb',
					'600': '#207af0',
					'700': '#1864dd',
					'800': '#1a51b3',
					'900': '#1c4992',
				},
			}
		},

	},

	plugins: [require('@tailwindcss/typography'),]
};

module.exports = config;
