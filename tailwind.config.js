/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1B192E",
        "secondary-color": "#FBC200",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-headerShadow": "0 5px 5px rgba(57, 63, 72, 0.3)",
      },
      fontFamily: {
        "ubuntu-family": "'Ubuntu', sans-serif",
      },
      backgroundImage: {
        "home-background":
          "url(https://img.freepik.com/free-vector/finances-management-budget-assessment-financial-literacy-accounting-idea-financier-with-cash-economist-holding-golden-coin-cartoon-character_335657-1604.jpg?w=826&t=st=1683495394~exp=1683495994~hmac=456785ea67414f28e9d9918d68fafe441eaadb06e47a9f8d6d32bb45e4167edc)",
      },
    },
  },
  plugins: [],
};
