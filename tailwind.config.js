/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      newFont: ["SF Pro Display"],
      logo: ["Playfair Display, serif"],
    },
    minHeight: {
      40: "40rem",
      44: "11rem",
    },
    minWidth: {
      30: "30rem",
    },

    extend: {
      height: {
        412: "412px",
        500: "500px",
        765: "765px",
        800: "800px",
        1000: "1000px",
      },
      width: {
        461: "461px",
        800: "800px",
        1080: "1080px",
      },
      colors: {
        newgray: "#0f0f0f",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        94: "0.94",
      },
      backgroundImage: {
        stars: "url('assets/stars.png')",
      },
    },
  },
  plugins: [],
};
