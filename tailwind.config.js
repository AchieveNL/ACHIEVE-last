const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Achieve.nl Brand Colors
        achieve: {
          purple: "#8138FB",
          navy: "#1E2470",
          blue: "#2563EB",
          gray: {
            50: "#F8F9FA",
            100: "#F1F3F4",
            200: "#E9ECEF",
            300: "#DEE2E6",
            400: "#CED4DA",
            500: "#ADB5BD",
            600: "#6C757D",
            700: "#495057",
            800: "#343A40",
            900: "#212529",
          },
        },
        // shadcn/ui color system using Achieve colors
        border: "#E9ECEF",
        input: "#E9ECEF",
        ring: "#8138FB",
        background: "#FFFFFF",
        foreground: "#1E2470",
        primary: {
          DEFAULT: "#8138FB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1E2470",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC3545",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#1E2470",
        },
        accent: {
          DEFAULT: "#F8F9FA",
          foreground: "#1E2470",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E2470",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E2470",
        },
        // Keep your existing semantic colors
        success: {
          50: "#f0fdf4",
          500: "#22c55e",
          600: "#16a34a",
        },
        warning: {
          50: "#fffbeb",
          500: "#f59e0b",
          600: "#d97706",
        },
        error: {
          50: "#fef2f2",
          500: "#ef4444",
          600: "#dc2626",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
