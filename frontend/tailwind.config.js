/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bahama-blue-800": "#006893",
        "tarawera-blue-950": "#003a53",
        "solitude-blue-100": "#deefff",
        "picton-blue-500": "#00adef",
        "blumine-blue-900": "#00587c",
        "sail-blue-200": "#b6dfff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
