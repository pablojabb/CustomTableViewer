/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#ffffff",
          text: "#a7a4b1",
          "m-btn": "#b8daff",
          "s-btn": "#f5f5f5",
          "content-bg": "#cce5ff",
          "content-text": "#1962b0",
          "important-text": "#2a2b2c",
        },
        dark: {
          bg: "#121212",
          text: "#a79f8f",
          "m-btn": "#b8daff",
          "s-btn": "#222222",
          "content-bg": "#8190a0",
          "content-text": "#0a2f59",
          "important-text": "#e1e2e1",
        },
      },
    },
  },
  content: ["./**/*.tsx"],
  plugins: []
}