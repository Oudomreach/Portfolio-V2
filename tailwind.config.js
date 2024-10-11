/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'typing': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'slide-in': 'slide-in 5s ease-out infinite',
        'fade-in': 'fade-in 5s ease-in-out infinite',
        'typing': 'typing 3s steps(10) infinite alternate, blink 0.7s step-end infinite',
        'loop-scroll': 'loop-scroll 25s linear infinite',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}