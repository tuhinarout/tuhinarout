/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Combine content paths from both configs
  ],
  theme: {
    extend: {
      screens: {
        
        sm: "520px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      animation: {
        backgroundPositionSpin: "background-position-spin 3000ms infinite alternate",
        meteor: "meteor 5s linear infinite",
        pulseSlow: "pulse-slow 6s infinite cubic-bezier(0.4, 0, 0.6, 1)", // Added pulse-slow
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        "pulse-slow": {
          "0%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.05)", opacity: 0.7 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
