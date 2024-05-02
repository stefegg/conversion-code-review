import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        primaryDark: "#181818",
        primaryLight: "#1F2E47",
        secondary: "#bce7fd",
        accentDark: "#923021",
        accentLight: "#cd0909",
        tertiaryLight: "#ffdd00",
        tertiaryDark: "#F2bb05",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(text|primaryDark|primaryLight|secondary|accentDark|accentLight|tertiaryLight|tertiaryDark)/,
      variants: ["before", "hover", "focus"],
    },
  ],
};
export default config;
