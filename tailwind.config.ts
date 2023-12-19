import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hauora: ["var(--font-hauora)"],
      },
      maxWidth: {
        content: "1156px",
      },
      colors: {
        "brand-primary": "#264EEE",
        "brand-body": "#313236",
        "brand-gray": "#6F6F72",
        "brand-gray-50": "#E4ECF1",
        "brand-gray-100": "#909090",
        "brand-gray-150": "#9B9B9B",
        "brand-blue-50": "#EEF1FE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient":
          "linear-gradient(90deg, #264EEE 27.38%, rgba(255, 61, 46, 0.61) 77.83%)",
        g1: "linear-gradient(0deg, rgba(230, 235, 253, 1) 90%, rgba(255, 255, 255, 0) 100%)",
        g2: "linear-gradient(180deg, rgba(39, 79, 238, 0.12) 40%, rgba(39, 79, 238, 0.00) 100%)",
        g3: "linear-gradient(160deg, #264EEE 60%, #FF3D2E 122.88%)",
        g4: "linear-gradient(0deg, rgba(230,230,255,0.07) 0%, rgba(38,78,238,0.4) 50%, rgba(255,255,255,0.07) 100%)",
      },
      borderRadius: {
        xs: "3px",
        sm: "5px",
        md: "10px",
        lg: "18px",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "16px",
      },
      screens: {
        xl: "1116px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      boxShadow: {
        "2.5xl": "0px 4px 17px 0px rgba(38, 78, 238, 0.13)",
        "3xl": "0px 0px 50px 0px rgba(38, 78, 238, 0.12)",
        "4xl": "0px 12px 36px 0px rgba(38, 78, 238, 0.07)",
        "5xl": "0px 0px 54px 0px rgba(38, 78, 238, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
