import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      colors: {
        white: "#fff",
        dark: "#000",
        normal: "#828282",
        red: "#C70039",
        primary: "#ffbe33",
        secondary: "#222831",
        // green: "#116D6E"
        green: "#321E1E",
        dbg: "#232D3F",
        pbg: "#D2E3C8"

      },
      borderRadius: {
        pro: "5px 5px 0 37px",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        rb: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        header: 'box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
