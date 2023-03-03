module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "7rem",
        "2xl": "4rem",
      },
    },
    fontFamily: {
      dancingscript: ["Dancing Script", "cursive"],
      cormorant:[ 'Cormorant', 'serif'],
      Pinyon:['Pinyon Script','cursive'],
      Zeyada:['Zeyada', 'cursive'],
      Bilbo:['Bilbo Swash Caps', 'cursive'],
      Carlo:['MonteCarlo', 'cursive'],
      Greatviibes:['Great Vibes', 'cursive'],
      Paris:['Parisienne', 'cursive'],
      Tangerine:['Tangerine', 'cursive']
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://img.freepik.com/free-photo/limonium-carnations-flowers-waffle-cones-isolated-white-background_23-2148066464.jpg?w=1060&t=st=1677718205~exp=1677718805~hmac=ca7b85d6c597632832672d051f621e2096c3969ae5e668175a65ba20917502bf')",
      },
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )",
        "glass-card": "4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)",
      },

      colors: {
        bg: {
          DEFAULT: "#ff5555",
          200: "#272727",
          300: "#2e2e2e",
        },
        primary: {
          DEFAULT: "#ff5555",
          50: "#F7C6C6",
          100: "#F5B4B4",
          200: "#F09090",
          300: "#EC6C6C",
          400: "#E74848",
          500: "#DA1E37",
          600: "#B61818",
          700: "#841212",
          800: "#530B0B",
          900: "#210404",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#ff5555",
          "primary-focus": "#E74848",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
