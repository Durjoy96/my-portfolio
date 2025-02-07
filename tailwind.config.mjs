/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "var(--base-100)",
        "base-200": "#212121",
        "base-300": "#424242",
        "base-content": "var(--base-content)",
        "base-content-secondary": "var(--base-content-secondary)",
        primary: "rgb(245, 175, 0)",
        "primary-content": "var(--primary-content)",
      },
      fontFamily: {
        bricolageGrotesque: ["var(--font-bricolage-grotesque)"],
        pacifico: ["var(--font-pacifico)"],
      },
    },
  },
  plugins: [],
};
