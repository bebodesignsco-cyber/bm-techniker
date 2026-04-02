/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D33A3B",
          yellow: "#FEC00A",
        },
        background: "#000000",
        foreground: "#FFFFFF",
        card: {
          DEFAULT: "#0A0A0A",
          border: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "0.125rem",
        md: "0.125rem",
        sm: "0.125rem",
        DEFAULT: "0.125rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
