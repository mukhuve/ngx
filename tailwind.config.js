/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ":global(.dark)"],
  theme: {
    extend: {
      colors: {
        'base-100': '#f3f4f6',
        'base-200': '#e5e7eb',
        primary: '#0284c7',
        secondary: '#1e40af',
        neutral: '#262626',
      },
      fontFamily: {
        body: ["Nunito"]
      }
    }
  },
  content: [
    "./**/*.{html,ts,scss}"
  ]
};
