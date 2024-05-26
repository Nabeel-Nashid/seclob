/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'diagonal': 'polygon(0% 100%, 0% 0%, 100% 0%, 80% 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-diagonal': {
          'clip-path': 'polygon(0% 100%, 0% 0%, 100% 0%, 80% 100%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],
}

