/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F3F2F2",
          100: "#FFFFFF"
        },
        secondary: {
          DEFAULT: "#DB3228",
          100: '#FF4036'
        },
        black: "#241F20",
        gray: {
          DEFAULT: "#6D7384",
          100: '#CFD3E3'
        },
      },
      fontFamily: {
        interthin: ["Inter-Thin", "sans-serif"],
        interextralight: ["Inter-ExtraLight", "sans-serif"],
        interlight: ["Inter-Light", "sans-serif"],
        interregular: ["Inter-Regular", "sans-serif"],
        intermedium: ["Inter-Medium", "sans-serif"],
        intersemibold: ["Inter-SemiBold", "sans-serif"],
        interbold: ["Inter-Bold", "sans-serif"],
        interextrabold: ["Inter-ExtraBold", "sans-serif"],
        interblack: ["Inter-Black", "sans-serif"],
        outfitthin: ["Outfit-Thin", "sans-serif"],
        outfitextralight: ["Outfit-ExtraLight", "sans-serif"],
        outfitlight: ["Outfit-Light", "sans-serif"],
        outfitregular: ["Outfit-Regular", "sans-serif"],
        outfitmedium: ["Outfit-Medium", "sans-serif"],
        outfitsemibold: ["Outfit-SemiBold", "sans-serif"],
        outfitbold: ["Outfit-Bold", "sans-serif"],
        outfitextrabold: ["Outfit-ExtraBold", "sans-serif"],
        outfitblack: ["Outfit-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};