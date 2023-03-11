/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "#0c2840",
        "title-color": "#000000",
        "text-color": "#292929",
        "text-color-2": "#7c7c7c",
        "text-color-3": "#a9b3bb",
        "border-color": "#e8e8e8",
        "create-blog-btn-color": "#1473e6",
        "menu-active-color": "#e8ebed",
        "menu-mobile-active-color": "#f0f0f0",
        "footer-color": "#181821",
        "purple-color": "#6828fa",
        "pink-color": "#ffbaa4",
        "blue-color": "#2877fa",
        "blue-purple-color": "#6717cd",
        "red-color": "#fe215e",
        "orange-color": "#ff9402",
        "blue-light-color": "#007efe",
        "blue-white-color": "#06c3fe",
        "check-color": "#1b74e4",
        "quote-color": "#757575",
        "facebook-color": "#4267b2",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        60: "60px",
      },
      keyframes: {
        fade: {
          "0%": { "margin-top": "-10px", opacity: "0" },
          "100%": { "margin-top": "0px", opacity: "1" },
        },
        "bottom-up": {
          "0%": { top: "60%", opacity: "0" },
          "100%": { top: "50%", opacity: "1" },
        },
      },
      animation: {
        fade: "fade .3s ease-in-out",
        "bottom-up": "bottom-up .3s ease-in-out",
      },
      backgroundImage: {
        "login-background": "url('/src/assets/images/bg_login_register.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
