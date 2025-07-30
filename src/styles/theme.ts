import colors from 'tailwindcss/colors'

export const themeColors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: colors.white,
  black: colors.black,
  gray: colors.gray,
  primary: colors.blue,
  secondary: colors.purple,
}

export const themeFonts = {
  sans: 'var(--font-geist-sans)',
  mono: 'var(--font-geist-mono)',
}

const theme = { colors: themeColors, fonts: themeFonts }
export default theme
