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
        border: "#3700b3",
        text: "#BB86FC",
        bodyBg: "#121212",
        secondary: "#03c51d",
        error: "#cf6679",
        link: "#0070E0",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(border|text|containerBg|bodyBg|containerHover|error|link|secondary)/,
      variants: ["before", "hover", "focus"],
    },
  ],
};
export default config;
