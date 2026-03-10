/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        brand: {
          ink: "#1f1f1b",
          bone: "#f8f3ea",
          sand: "#e8dbc8",
          clay: "#b46f47",
          pine: "#2f5f4f",
          dusk: "#283043"
        }
      },
      boxShadow: {
        soft: "0 14px 30px rgba(33, 26, 20, 0.08)",
        card: "0 10px 24px rgba(35, 22, 13, 0.1)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out forwards"
      }
    }
  },
  plugins: []
};
