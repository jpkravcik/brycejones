module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      height:{
        '128': '32rem',
        '144': '36rem'
      },

      backgroundImage: {
        'home-bg': "url('assets/c-680.jpg')",
      },

      keyframes: {
        'fade-in' : {
          '0%' : {
            opacity: '0',
            transform: 'translateY(-40px)'
          },

          '100%' : {
            opacity: '1',
            transform: 'translateY(0)'
          },

        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out'
      },

      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Vujahday: ["Vujahday Script", "cursive"],
      },
    },
  },
  plugins: [],
}
