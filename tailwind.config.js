/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primary_text: "var(--color-primary_text)",
        primary_bg: "#CDE9FF",
      },
      fontFamily: {
        roboto: ["Roboto_400Regular"],
        robotobold: ["Roboto_700Bold"],
        quicksand: ["Quicksand_400Regular"],
        quicksandbold: ["Quicksand_700Bold"],
      },
    },
  },
  plugins: [],
};
