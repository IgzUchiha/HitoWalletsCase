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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lime: {
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
        },
        psi: {
          DEFAULT: "#7CB518",
          light: "#8FD119",
          dark: "#5C8A12",
        },
      },
    },
  },
  plugins: [],
};
export default config;
