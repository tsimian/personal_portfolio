/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "#1DA1F2",
        lightGray: "#f4f4f4",
        gray: "#777",
        dark: "#242526",
      },
    },
  },
  plugins: [require("daisyui")],
};
