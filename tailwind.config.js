/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},

    colors: {
      primary: {
        100: "#cedef7",
        200: "#9dbcf0",
        300: "#6b9be8",
        400: "#3a79e1",
        500: "#0958d9",
        600: "#0746ae",
        700: "#053582",
        800: "#042357",
        900: "#02122b"
      },
      success: {
        100: "#d6efd9",
        200: "#aedfb3",
        300: "#85d08e",
        400: "#5dc068",
        500: "#34b042",
        600: "#2a8d35",
        700: "#1f6a28",
        800: "#15461a",
        900: "#0a230d"
      },
      white: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
      },
      danger: {
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
      },
      black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
      },
      secondary: {
        100: "#e1def5",
        200: "#c3bdeb",
        300: "#a69ce1",
        400: "#887bd7",
        500: "#6a5acd",
        600: "#5548a4",
        700: "#40367b",
        800: "#2a2452",
        900: "#151229"
      },
      gray: {
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a"
      },
    },
    plugins: [],
  },
}
