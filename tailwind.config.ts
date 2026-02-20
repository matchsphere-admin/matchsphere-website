import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3faf7",
          100: "#dff2e8",
          500: "#2f8a62",
          600: "#256e4f",
          700: "#1d5940",
          900: "#123528",
        },
      },
    },
  },
  plugins: [],
};

export default config;
