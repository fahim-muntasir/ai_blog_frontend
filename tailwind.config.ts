import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark8: "var(--dark8)",
        dark40: "var(--dark40)",
        dark15: "var(--dark15)",
        grey50: "var(--grey50)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'kumbh': ['var(--font-kumbh-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
