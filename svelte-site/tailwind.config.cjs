/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["corporate", "light", "business"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "business", // name of one of the included themes for dark mode
		 },
	
	
	};

	

module.exports = config;
