/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'example_color': '#00ACEC',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
});