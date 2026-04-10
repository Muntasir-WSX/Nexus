/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F0F5F1',
        'brand-surface': '#FBFEFC',
        'brand-primary': '#E3F3E9',
        'brand-secondary': '#FEF3F1',
        'brand-accent': '#D9F5E6',
        'brand-text-primary': '#333333',
        'brand-text-secondary': '#666666',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
