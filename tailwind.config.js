/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caldea: ["Caladea", "serif"],
        mono: ["Major Mono Display", "monospace"],
        ultra: ["Ultra", "serif"],
        epi: ["Epilogue", "sans-serif"],
        alice: ["Alice", "serif"],
      },
    },
  },
  plugins: [],
};
