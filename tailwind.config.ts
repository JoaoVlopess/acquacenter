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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'piscina': "url('/img/tarde-de-verao-a-beira-da-piscina.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
