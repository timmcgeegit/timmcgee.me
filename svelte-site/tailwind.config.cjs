/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
			  corporate: {
				...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
				"primary": '#1c4f82',
				"primary-focus": "#14375b90",
			  },
			},'light', 'business',
		  ],
		  darkTheme: "business",
		},
	  }

module.exports = config;
