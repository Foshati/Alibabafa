import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      mytheme: {
        primary: "#ff00ff",

        secondary: "#ff00ff",

        accent: "#00ffff",

        neutral: "#ff00ff",

        "base-100": "#ff00ff",

        info: "#0000ff",

        success: "#00ff00",

        warning: "#00ff00",

        error: "#ff0000",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
