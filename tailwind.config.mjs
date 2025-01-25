/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
        phonescroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xxs:'320px',
        xs: '475px',  // Extra small screens, e.g., small phones
        sm: '640px',  // Small devices like phones
        md: '768px',  // Medium devices like tablets
        lg: '1024px', // Large devices like laptops
        xl: '1280px', // Extra large devices like desktops
        '2xl': '1536px', // Extra extra large screens
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ['rounded'], // Enable rounded scrollbars
  },
};
