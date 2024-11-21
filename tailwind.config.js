/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js,jsx,tsx}', // Include public folder if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

