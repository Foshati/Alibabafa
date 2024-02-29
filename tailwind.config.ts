import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    mytheme: {
      primary: "#ffaa05",
      secondary: "#008a00",
      accent: "#a8a600",
      neutral: "#0e0911",
      "base-100": "#192230",
      info: "#00c3ff",
      success: "#00dc77",
      warning: "#ff4e00",
      error: "#c0234a",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("daisyui")],
};
export default config;
