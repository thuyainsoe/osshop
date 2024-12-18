/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdlg: "950px", // Adds a custom breakpoint at 950px
      },
      colors: {
        brandpink: "#BC1A8D",
        brandblue: "#0094CD",
        primary: "#FFFFFF",
        secondary: "#EFF0F5",
        heading: "#414141",
        description: "#828282",
      },
    },
  },
  plugins: [],
};
