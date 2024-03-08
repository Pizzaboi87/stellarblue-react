/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        codePro: ["Code Pro", "sans-serif"],
      },
      backgroundImage: {
        gradientblue:
          "radial-gradient( circle farthest-corner at 10% 20%, #E3F9FF 0%, #C0F3FD 100% )",
        gradientdarkblue:
          "radial-gradient( circle farthest-corner at 10% 20%, #091D55 0%, #000000 100% )",
      },
      colors: {
        textlight: "#F1FAEE",
        textdark: "#0D1B2A",
        bgdark: "#80849c",
        stellar: "#3d87d3",
      },
    },
  },
  plugins: [],
};
