import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "7rem",
        // "3xl": "8rem",
        // "4xl": "9rem",
      },
      screens: {
        sm: "640px",
        md: "786px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        // "3xl": "1650px",
        // "4xl": "1850px",
      },
    },
    extend: {
      colors: {
        "vox-gray": {
          DEFAULT: "#C1C7D0",
          lighter: "#F6F9FE",
          light: "#ECF3FF",
          medium: "#C7D3EB",
          dark: "#C5C5C5",
          darker: "#929292",
          solitude: "#E1ECFF",
          alice: "#ECF4FF",
        },
        "vox-blue": {
          DEFAULT: "#3D89FB",
          lighter: "#47A7EC",
          light: "#5188F7",
          dark: "#0057FF",
        },
        "vox-pink": {
          DEFAULT: "#F76AC2",
          light: "#EC88C6",
          dark: "#F968C2",
        },
        "vox-purple": {
          light: "#AFA7FF",
          dark: "#A98CF7",
        },
        charcoal: {
          DEFAULT: "#14181F",
          lightest: "#2A303A",
          lighter: "#25292F",
          light: "#1E2229",
          dark: "#191D24",
          darker: "#1E1E1E",
          darkest: "#0f1826",
          cloudburst: "#383F49",
          russian: "#0F1218",
          midnight: "#112036",
        },
        manatee: "#7F829A",
        turquoise: {
          DEFAULT: "#50EE7C",
          light: "#6BD270",
          dark: "#47ECB7",
          darker: "#1DAA75",
        },
        attention: {
          DEFAULT: "#F4A627",
          light: "#EC9F47",
          lighter: "#FC9F77",
          dark: "#FAC21C",
        },
        roman: {
          DEFAULT: "#E95C5C",
          light: "#EC4747",
          dark: "#FF1F41",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
