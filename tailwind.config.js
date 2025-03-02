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
          "m-btn-hover": "#a0c8f0",
          "m-btn-active": "#8eb8e0",
          "s-btn": "#eeeeee",
          "s-btn-hover": "#e0e0e0",
          "s-btn-active": "#d0d0d0",
          "content-bg": "#cce5ff",
          "content-text": "#1962b0",
          "important-text": "#2a2b2c"
        },
        dark: {
          bg: "#121212",
          text: "#c0c0c0",
          "m-btn": "#b8daff",
          "m-btn-hover": "#a0c8f0",
          "m-btn-active": "#8eb8e0",
          "s-btn": "#222222",
          "s-btn-hover": "#333333",
          "s-btn-active": "#444444",
          "content-bg": "#8190a0",
          "content-text": "#0a2f59",
          "important-text": "#e1e2e1"
        }
      }
    }
  },
  content: ["./**/*.tsx"],
  plugins: []
}
