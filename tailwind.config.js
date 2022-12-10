/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1e56d7",
					50: "#eff7ff",
					100: "#e2effe",
					200: "#bfddfe",
					300: "#94c9fc",
					400: "#61aaf9",
					500: "#3c89f5",
					600: "#266aea",
					700: "#1e56d7",
					800: "#1f46ae",
					900: "#1f3e89",
				},
				secondary: {
					DEFAULT: "#5F6368",
					50: "#f5f6f6",
					100: "#e5e6e8",
					200: "#ced0d3",
					300: "#acb0b4",
					400: "#83888d",
					500: "#686d72",
					600: "#5f6368",
					700: "#4c4f52",
					800: "#434547",
					900: "#3b3c3e",
				},
				active: "#E6F3EF",
				hover: "#F5F5F5",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const utilities = {
				".just-comment": {
					"--color-primary": "#1e56d7",
					"--color-secondary": "#5F6368",
					"--color-active": "#E6F3EF",
				},
				".header": {
					width: "100%",
					height: "300px",
					"background-size": "cover",
					"background-position": "right center",
					"background-repeat": "no-repeat",
					// "position": "relative",
				},
				/* Hide scrollbar for IE, Edge and Firefox */
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					/* IE and Edge */
					"scrollbar-width": "none",
					/* Firefox */
				},
				/* Hide scrollbar for Chrome, Safari and Opera */
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
				".appbar": {
					position: "fixed",
					padding: "0px 8px",
					top: "0",
					width: "100%",
					"box-shadow": "0px 0px 3px rgba(0,0,0,0.20)",
					"background-color": "white",
					"z-index": "5",
				},
				".navbar-content": {
					display: "flex",
					"flex-direction": "column",
					"align-items": "center",
					"justify-content": "center",
					"flex-grow": "1",
					color: "#5F6368",
				},
				".navbar-content:hover:not(.navbar-active)": {
					"border-radius": "10px",
					margin: "8px 0px",
					"background-color": "#F5F5F5",
					color: "#01875f",
				},
				".navbar-icon": {
					"font-size": "30px",
				},
				".navbar-active": {
					"border-radius": "10px",
					margin: "8px 0px",
					"background-color": "#E6F3EF",
					color: "#01875f",
				},
			};
			addUtilities(utilities);
		}),
	],
};
