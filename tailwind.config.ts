import type { Config } from "tailwindcss";
import { DEFAULT_COLOR, PRIMARY_COLOR, PURPLE_COLOR } from "./components/propertiesConstant";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: PRIMARY_COLOR,
        default_grey: DEFAULT_COLOR,
        purple: PURPLE_COLOR,
      }
    },
  },
  plugins: [],
};
export default config;
