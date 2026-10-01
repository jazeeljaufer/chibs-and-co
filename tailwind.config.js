/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FBF3E8',
        paper: '#FFFFFF',
        ink: '#2A1D3D',
        muted: '#5A4C70',
        cherry: '#D41F4B',
        wood: '#D2A363',
        woodLight: '#EBC184',
        sun: '#FFC63D',
        mint: '#79D2B8',
        blush: '#F26BA1',
        violet: '#8E5CF0'
      },
      fontFamily: {
        heading: ['Caprasimo', 'serif'],
        body: ['Figtree', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '24px',
      },
      boxShadow: {
        'warm': '0 10px 25px -5px rgba(42, 29, 61, 0.05), 0 8px 10px -6px rgba(42, 29, 61, 0.01)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}