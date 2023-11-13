/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      main: "#C5E4E8",
      header: "#486C6D",
      result: "#00474B",
      input_bg: "#F3F8FA",
      green_number: "#21C3AA",
      disabled: "#c1e1e3",
      label: "#818F92",
      input_placeholder: "#ACBFC0",
      input_color: "#12474A",
      button_bg: "#12474A",
      button_bg_hover: "#298d94",
      red: "#fca5a5",
      warning: "#e65545",
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
