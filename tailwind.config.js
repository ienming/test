/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      'serif': ['Cormorant', 'serif'],
      'sans': ['Oswald', 'sans']
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '2.75rem',
      '6xl': '3.75rem',
      '7xl': '4.875rem',
      '8xl': '6.875rem',
      '9xl': '7.5rem'
    },
    extend: {},
  },
  plugins: [],
}

