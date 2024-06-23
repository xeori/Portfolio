/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0369a1",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screems: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
