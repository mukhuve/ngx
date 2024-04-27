/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ":global(.dark)"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"]
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    }
  },
  content: [
    "./projects/demo/**/*.{html,ts,scss}"
  ]
};
