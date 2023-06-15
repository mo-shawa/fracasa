const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			brand: "#342EE0",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
}
