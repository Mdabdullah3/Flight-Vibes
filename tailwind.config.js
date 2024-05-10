/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#E74C3C",
          secondary: "#141618",
          neutral: "#ffff",
          "base-100": "#ffff",
          info: "#ECF0F3",
          success: "#ffff",
          warning: "#DF7E07",
          error: "#FA5C5C",
          lightPrimary: "#F4F7FE",
          blueSecondary: "#4318FF",
          brandLinear: "#868CFF",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}