/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tp: "#A6ADBB",
        p: "#7480FF",
        s: "#FF52D9",
        a: "#00CDB7",
        bg: "#2A323C",
        d: "#1D232A",
      },
      fontFamily: {
        header: ['"Bricolage Grotesque"', "serif"],
        body: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
