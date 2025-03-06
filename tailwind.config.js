// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Scanna index.html för Tailwind-klasser
    "./src/**/*.{js,ts,jsx,tsx}", // Scanna alla JS/TS/JSX/TSX-filer i src-mappen
  ],
  theme: {
    extend: {
      animation: {
        fadeInSlow: "fadeIn 3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
