import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import theme from './src/styles/theme'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: theme.colors,
    extend: {
      fontFamily: {
        sans: [theme.fonts.sans, ...defaultTheme.fontFamily.sans],
        mono: [theme.fonts.mono, ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
export default config
