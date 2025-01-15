/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-green": "#00ff99",
        "custom-yellow": "#ffcc33",
        "custom-black": "#1a1a1a",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #00ff99, #ffcc33, #1a1a1a)",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)",
      },
    },
  },
  plugins: [],
};
