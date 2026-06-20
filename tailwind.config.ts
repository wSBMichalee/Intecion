import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "var(--navy-950)",
          900: "var(--navy-900)",
          800: "var(--navy-800)",
          700: "var(--navy-700)",
        },
        brand: {
          600: "var(--brand-600)",
          500: "var(--brand-500)",
          400: "var(--brand-400)",
          deep: "var(--brand-deep)",
        },
        ink: {
          900: "var(--ink-900)",
        },
        panel: {
          black: "var(--panel-black)",
        },
      },
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        "lg": "12px",
        "xl": "16px",
        "2xl": "20px",
      },
      boxShadow: {
        "card": "0 10px 30px rgba(0,0,0,.20)",
        "glow": "0 20px 60px rgba(0,0,0,.35)",
      }
    },
  },
  plugins: [],
};

export default config;
