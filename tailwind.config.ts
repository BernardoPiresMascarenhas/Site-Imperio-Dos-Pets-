import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Paleta premium da marca
        brand: {
          50:  "#F7F1FB",
          100: "#EFE2F5",
          200: "#DCC5EA",
          300: "#C29ED9",
          400: "#A172C2",
          500: "#7E4BAA",
          600: "#5B2A86", // PRIMARY
          700: "#4A2070",
          800: "#3A1858",
          900: "#2A1140",
        },
        sage: {
          50:  "#F2F6F2",
          100: "#E0EAE1",
          200: "#C3D5C5",
          300: "#9FB9A2",
          400: "#7A9E7E", // SECONDARY (verde sálvia)
          500: "#5E835F",
          600: "#4A6A4B",
        },
        gold: {
          400: "#D9B978",
          500: "#C9A55C", // ACCENT (dourado)
          600: "#A8843F",
        },
        cream: {
          50:  "#FDFBF7",
          100: "#FAF7F2", // BACKGROUND
          200: "#F2EDE3",
          300: "#E8E0D1",
        },
        ink: {
          900: "#1A1410",
          800: "#2A2520",
          700: "#3A332C",
          500: "#6B645A",
          400: "#8F8779",
        },
        // legados mantidos por compatibilidade
        customGreen: "#DCE4CC",
        customWhite: "#FFFFFF",
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgb(91 42 134 / 0.08)',
        'soft-lg': '0 20px 50px -12px rgb(91 42 134 / 0.15)',
        'gold': '0 8px 30px -8px rgb(201 165 92 / 0.4)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(34 197 94 / 0.5)' },
          '50%':      { boxShadow: '0 0 0 14px rgb(34 197 94 / 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
