/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img1.jpg')",
        "bg-img-2": "url('/img2.jpg')",
        "bg-img-3": "url('/hero_mp4.mp4')",
        air_hero: "url('/Air-hero-image.jpg')",
        london: "url('/panoramic-view-london-sunset-uk.jpg')",
        miami: "url('/Miami.jpg')",
        abidjan: "url('/abidjan.jpg')",
        quebec: "url('/quebec.webp')",
        newyork: "url('/newyork.webp')",
        mexico:
          "url('/freepik__nezahualcoyotl-mexico-aestic-photo-paysages-with-s__23090.jpeg')",
        dubai:
          "url('/freepik__uae-dubai-aestic-photo-for-a-tourism__23091.jpeg')",
        pekin: "url('/city-water_.jpg')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/Air-hero-image.jpg')",
        "pattern-2": "url('/pattern-bg.png')",
        airplane: "url('/airplane.svg')",
      },
      screens: {
        break: { max: "800px" }, // Ajout du breakpoint personnalisé
        break2: { max: "1096px" }, // Ajout du breakpoint personnalisé
        mini: "500px", // je rajoute un dernier point de rupture à 110px pour les input "depart et destination"
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  keyframes: {
    scroll: {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
  animation: {
    scroll: "scroll 10s linear infinite",
  },
  variants: {},
  plugins: [],
};
