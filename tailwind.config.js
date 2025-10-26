// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translateX(-150px)" },
          "100%": { transform: "translateX(0)" },
        },
        fillUp: {
          "0%": { transform: "translateY(150px)" },
          "100%": { transform: "translateY(-5px)" },
        },
        fillDown: {
          "0%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(150px)" },
        },
      },
      animation: {
        wave: "wave 0.5s linear infinite",
        fillUp: "fillUp 0.7s cubic-bezier(.2,.6,.8,.4) forwards",
        fillDown: "fillDown 0.7s cubic-bezier(.2,.6,.8,.4) forwards",
      },
    },
  },
  plugins: [],
};