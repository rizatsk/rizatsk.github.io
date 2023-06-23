/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js,php}", "./*.php", "./includes/*.php"],
  theme: {
    container: {
      center: true,
      padding: "16px 0",
    },
    extend: {
      colors: {
        primary: "#2B91CA",
        dark: "#05364d",
        darkFooter: "#021017",
        grey: "#797979",
      },
      dropShadow: {
        '3xl': '0px -10px 60px rgba(0, 0, 0, 0.1)',
        'borderProduct': '0px 4px 15px rgba(0, 0, 0, 0.25);',
        'imageXl': '10px 10px 0px rgba(0, 0, 0, 0.1)',
        'imageSm': '5px 5px 0px rgba(0, 0, 0, 0.1)'
      },
      boxShadow: {
        'challanges': '0px 8px 20px rgba(0, 0, 0, 0.25)',
        'hoverFly': '7px 7px 0px 0px rgba(0,0,0,0.1)',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      listStyleType: {
        arrow: '›',
      },
    },
  },
  plugins: [],
}