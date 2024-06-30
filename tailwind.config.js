/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl2: "1200px", // Custom breakpoint named 'xl2'
      },
      colors: {
        default: "#212529",
        primary: "#32353a",
        accent: "#e84545",
        secondary: "#3a3939",
        aboutBg: "#F4F4F4",
      },
      backgroundImage: {
        "hero-image":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg')",
        "stats-image":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/stats-bg.jpg')",
      },
      fontFamily: {
        opensans: ["OpenSans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        accordian: "0px 5px 25px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

// --background-color: #ffffff; /* Background color for the entire website, including individual sections */
// --default-color: #212529; /* Default color used for the majority of the text content across the entire website */
// --heading-color: #32353a; /* Color for headings, subheadings and title throughout the website */
// --accent-color: #e84545; /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out
