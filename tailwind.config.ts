import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'BlueCenter' : '#186EDD',
        'WhiteCenter' : '#F5F5F5',
        'GrayCenter' : '#E9E9E9',
        'TextProd' : '#8d8d8d',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom': '1px 4px 8px 1px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'piscina': "url('/img/tarde-de-verao-a-beira-da-piscina.jpg')",
      },
      screens: {
        '3xl': '1730px', 
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
