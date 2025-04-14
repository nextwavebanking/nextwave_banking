import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '480px',
        md: '850px',
        lg: '900px',
        '2xl': '1024px',
        '3xl': '1440px',
      },
      height: {
        'screen-minus-96': 'calc(100vh - 96px)',
      },
      keyframes: {
        bounceIcon: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-10px) translateX(10px)', opacity: '0' },
          '60%': { transform: 'translateY(10px) translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        bounceIcon: 'bounceIcon .6s ease-out ',
      },
    },
  },
  plugins: [],
}

export default config
