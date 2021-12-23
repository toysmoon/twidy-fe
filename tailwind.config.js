module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
      nunito: ['Nunito'],
    },
    extend: {
      spacing: {
        '1px': '1px',
        18: '4.5rem',
        26: '6.5rem',
      },
      colors: {
        primary: 'var(--colors-primary)',
        secondary: 'var(--colors-secondary)',
        gray1: '#1d1d1f',
        gray3: '#828282',
        gray4: '#a1a1a6',
        gray5: '#e0e0e0',
        gray6: '#f5f5f7',
        twitter: '#1DA1F2',
        orange: '#FF9533',
        yellow: '#FFDC23',
        mint: '#00C2B7',
        heart: '#ff508f',
        violet: '#9b26b0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
