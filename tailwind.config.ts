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
        whiteColor: "hsl(0, 0%, 100%)",
        darkBlueColor: "hsl(240, 67%, 8%)",
        darkGrayColor: "hsl(240, 17%, 26%)",
        lightGrayColor: "hsl(240, 6%, 54%)",
        mercuryColor: "hsl(194, 48%, 49%)",
        venusColor: "hsl(33, 82%, 61%)",
        earthColor: "hsl(263, 67%, 51%)",
        marsColor: "hsl(10, 63%, 51%)",
        jupiterColor: "hsl(2, 68%, 53%)",
        saturnColor: "hsl(17, 73%, 46%)",
        uranusColor: "hsl(169, 73%, 44%)",
        neptuneColor: "hsl(222, 87%, 56%)",
      },
      fontFamily: {
        antonioFont: ["Antonio", "sans-serif"],
        spartanFont: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
