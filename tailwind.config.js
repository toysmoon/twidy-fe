module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
      apple: ['Apple SD Gothic Neo'],
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
        gray1: 'var(--colors-gray1)',
        gray3: 'var(--colors-gray3)',
        gray4: 'var(--colors-gray4)',
        gray5: 'var(--colors-gray5)',
        gray6: 'var(--colors-gray6)',
        twitter: 'var(--colors-twitter)',
        orange: 'var(--colors-orange)',
        yellow: 'var(--colors-yellow)',
        mint: 'var(--colors-mint)',
        heart: 'var(--colors-heart)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
