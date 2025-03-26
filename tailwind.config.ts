import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pareraBlue: "#17355d",
        pareraRed:  "#e94242",
        pareraGrey: "#5a5758",
        primary: "#ffdf00",
        secondary: "#5e376d",
        background: "#f8f9fa",
        dark: "#1e1e1e",
        text: "#2d2d2d",
        "text-secondary": "#6c757d",
        success: "#4caf50",
        warning: "#ff9800",
        error: "#e53935",
        info: "#2196f3",
      },
    },
  },
  plugins: [],
} satisfies Config;


module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#ffdf00",
        secondary: "#5e376d",
        background: "#f8f9fa",
        dark: "#1e1e1e",
        text: "#2d2d2d",
        "text-secondary": "#6c757d",
        success: "#4caf50",
        warning: "#ff9800",
        error: "#e53935",
        info: "#2196f3",
      },
    },
  },
};
