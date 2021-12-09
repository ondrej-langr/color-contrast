module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    fontFamily: {
      sans: ['"Quicksand"', 'sans-serif'],
    },
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        'dynamic-color': 'var(--global-text)',
      },
      screens: {
        xsm: '420px',
      },
    },
  },
};
