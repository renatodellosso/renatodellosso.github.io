/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
          colors: {
            // https://coolors.co/000000-ffffff-0caadc-e12fee-0cf574
            primary: "#0CF574",
            secondary: "#0CAADC",
            accent: "#E12FEE"
          }
        },
    },
    plugins: [],
};
