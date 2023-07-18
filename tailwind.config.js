/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58BF73',
        greenShed1: '#1F8E3D',
        greenShed2: '#B4ECD2',
        greenShed3: '#93D1B5',
        greenShed4: '#64B992',
        black1: '#181F1B',
        black2: '#1A1A1A',
        primaryGray1: '#E3E3E3',
        primaryGray2: '#BBE5C9',
        primaryGray3: '#C9C9C9',
      },
      boxShadow: {
        shadow1: '0px 6px 4px 0px rgba(27, 83, 49, 0.24)',
        shadow2: '-9px -9px 16px 0px rgba(238, 238, 238, 0.60), 10px 10px 17px 0px rgba(193, 208, 195, 0.26)',
        shadow2Hover: '-9px -9px 16px 0px rgba(255, 255, 255, 0.60), 12px 12px 20px 0px rgba(164, 198, 163, 0.50)',
        shadow3: '10px 10px 17px 0px rgba(194, 209, 196, 0.15)',
        shadow4: '0px 22px 30px 0px rgba(16, 112, 41, 0.08)',

      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}