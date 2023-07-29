/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ":global(.dark)"],
  content: ["./projects/demo/src/**/*.{html,ts,scss}"],
  theme: {
    extend: {},
  },
  // plugins: [
  //   function ({ addBase, theme }) {
  //     function extractColorVars(colorObj, colorGroup = "") {
  //       return Object.keys(colorObj).reduce((vars, colorKey) => {
  //         const value = colorObj[colorKey];

  //         const newVars =
  //           typeof value === "string"
  //             ? { [`--color${colorGroup}-${colorKey}`]: value }
  //             : extractColorVars(value, `-${colorKey}`);

  //         return { ...vars, ...newVars };
  //       }, {});
  //     }
  //     addBase({
  //       ":root": extractColorVars(theme("colors")),
  //     });
  //   },
  // ],
};
