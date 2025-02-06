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
        "base-200": "var(--base-200)",
        "base-300": "var(--base-300)",
        "base-content": "var(--base-content)",
        "base-content-secondary": "var(--base-content-secondary)",
        primary: "var(--primary)",
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
