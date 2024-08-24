import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./styles/globals.css",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				opacity: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				appearFromRight: {
					"0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
					"100%": { opacity: 1, transform: "translate(0);" },
				},
				wiggle: {
					"0%, 20%, 80%, 100%": {
						transform: "rotate(0deg)",
					},
					"30%, 60%": {
						transform: "rotate(-2deg)",
					},
					"40%, 70%": {
						transform: "rotate(2deg)",
					},
					"45%": {
						transform: "rotate(-4deg)",
					},
					"55%": {
						transform: "rotate(4deg)",
					},
				},
				popup: {
					"0%": { transform: "scale(0.8)", opacity: 0.8 },
					"50%": { transform: "scale(1.1)", opacity: 1 },
					"100%": { transform: "scale(1)", opacity: 1 },
				},
				shimmer: {
					"0%": { backgroundPosition: "0 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				opacity: "opacity 0.25s ease-in-out",
				appearFromRight: "appearFromRight 300ms ease-in-out",
				wiggle: "wiggle 1.5s ease-in-out infinite",
				popup: "popup 0.25s ease-in-out",
				shimmer: "shimmer 3s ease-out infinite alternate",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
} satisfies Config;

export default config;
