import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'
import lineClamp from 'windicss/plugin/line-clamp'
import aspectRatio from 'windicss/plugin/aspect-ratio'

const defaultTheme = require('windicss/defaultTheme')

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,html}',
      'node_modules/majestic-ui/dist/*.js' //ADD CURRENT PATH
    ],
    exclude: ['node_modules', '.git'],
  },
  darkMode: 'class',
  plugins: [
    typography,
    lineClamp,
    aspectRatio,
  ],
  safelist: ['prose'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1152px',
      '2xl': '1366px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        grayscale: {
          'off-black': '#2A305F',
          ash: '#262338',
          body: '#4E4B66',
          label: '#B6B6C9',
          placehold: '#B6B6C9',
          line: '#D9DBE9',
          input: '#FBFBFC',
          bg: '#F0F0F3',
          'off-white': '#FFFFFF',
        },
        primary: {
          default: '#5468FF',
          dark: '#1A2493',
          darkmode: '#98A6FF',
          bg: '#BAC5FF',
          light: '#DCE2FF',
        },
        secondary: {
          default: '#005BD4',
          dark: '#0041AC',
          darkmode: '#50C8FC',
          bg: '#8DE9FF',
          light: '#E3FEFF',
        },
        success: {
          default: '#95DB7D',
          dark: '#267A20',
          darkmode: '#A6F787',
          bg: '#C6FFAB',
          light: '#F7FFEE',
        },
        warning: {
          default: '#FF8E68',
          dark: '#7A1317',
          darkmode: '#FFC7A4',
          bg: '#FFDEC2',
          light: '#FFF0E0',
        },
        error: {
          default: '#FB7575',
          dark: '#781638',
          darkmode: '#FDBAAC',
          bg: '#FED6C8',
          light: '#FEEDE3',
        },
        light: '#EFF0F6',
        dark: '#14142B',
      },
      borderRadius: {
        DEFAULT: '.5rem',
        '2.5xl': '1.25rem', // 20px
        '3.5xl': '1.75rem', // 28px
        '4xl': '2rem', // 32px
        '6xl': '3rem', // 48px
      },
      height: {
        'test': 'calc(100vh - 7.5rem)',
      },
      fontSize: {
        bodyxsmall: ['.75rem', { fontSize: '.75rem', lineHeight: '1.8333', fontWeight: 400, letterSpacing: '0.25px' }], // 12px
        bodysmall: ['.875rem', { fontSize: '.875rem', lineHeight: '1.714285', fontWeight: 400 }], // 14px
        bodymedium: ['1rem', { fontSize: '1rem', lineHeight: '1.5', fontWeight: 400 }], // 16px
        bodylarge: ['1.125rem', { fontSize: '1.125rem', lineHeight: '1.777', fontWeight: 400 }], // 18px
        bodyxlarge: ['1.25rem', { fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 400 }], // 20px
        displayxsmall: ['1.5rem', { fontSize: '1.5rem', lineHeight: '1.333', letterSpacing: '1px' }], // 24px
        displaysmall: ['2.5rem', { fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '1px' }], // 40px
        displaymedium: ['3rem', { fontSize: '3rem', lineHeight: '1.1666', letterSpacing: '1px' }], // 48px
        displaylarge: ['3.5rem', { fontSize: '3.5rem', lineHeight: '1.2857', letterSpacing: '1px' }], // 56px
        displayhuge: ['4rem', { fontSize: '4rem', lineHeight: '1.375', letterSpacing: '1px' }], // 88px
        displayxsmallbold: ['1.5rem', { fontSize: '1.5rem', lineHeight: '1.333', fontWeight: 700, letterSpacing: '1px' }], // 24px
        displaysmallbold: ['2.5rem', { fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 700, letterSpacing: '1px' }], // 40px
        displaymediumbold: ['3rem', { fontSize: '3rem', lineHeight: '1.1666', fontWeight: 700, letterSpacing: '1px' }], // 48px
        displaylargebold: ['3.5rem', { fontSize: '3.5rem', lineHeight: '1.2857', fontWeight: 700, letterSpacing: '1px' }], // 56px
        displayhugebold: ['4rem', { fontSize: '4rem', lineHeight: '1.375', fontWeight: 700, letterSpacing: '1px' }], // 88px
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grayscale.ash'),
            strong: {
              fontWeight: theme('fontWeight.bold'),
            },
            fontSize: theme('fontSize.normal'),
            lineHeight: theme('lineHeight.normal'),
            // p: {
            //     marginTop: theme('spacing.6'),
            //     marginBottom: theme('spacing.6'),
            // },
            // ul: {
            //     marginTop: theme('spacing.6'),
            //     marginBottom: theme('spacing.6'),
            // },
            // ol: {
            //     marginTop: theme('spacing.6'),
            //     marginBottom: theme('spacing.6'),
            // },
            // li: {
            //     marginTop: theme('spacing.6'),
            //     marginBottom: theme('spacing.6'),
            // },
            a: {
              fontWeight: theme('fontWeight.medium'),
            },
            h1: { fontSize: '4rem', lineHeight: '1.375', fontWeight: 700, letterSpacing: '1px' },
            h2: { fontSize: '4rem', lineHeight: '1.375', fontWeight: 700, letterSpacing: '1px' },
            h3: { fontSize: '3.5rem', lineHeight: '1.2857', fontWeight: 700, letterSpacing: '1px' },
            h4: { fontSize: '3rem', lineHeight: '1.1666', fontWeight: 700, letterSpacing: '1px' },
            h5: { fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 700, letterSpacing: '1px' },
            h6: { fontSize: '1.5rem', lineHeight: '1.333', fontWeight: 700, letterSpacing: '1px' },
          },
        },
      }),
      opacity: {
        65: '0.65',
      },
      spacing: {
        5.5: '1.375rem', // 22px
        15.5: '3.875rem', // 62px
        22: '5.5rem', // 88px
      },
      borderWidth: {
        DEFAULT: '2px',
      },
      dropShadow: {
        small: '0 0 1rem rgba(0, 0, 0, 0.04)',
        DEFAULT: '0 0 2rem rgba(0, 0, 0, 0.04)',
        medium: '0 0 2rem rgba(0, 0, 0, 0.04)',
        large: '0 0 4.5rem rgba(0, 0, 0, 0.04)',
      },
      boxShadow: {
        small: '0 0 1rem rgba(0, 0, 0, 0.04)',
        DEFAULT: '0 0 2rem rgba(0, 0, 0, 0.04)',
        medium: '0 0 2rem rgba(0, 0, 0, 0.04)',
        large: '0 0 4.5rem rgba(0, 0, 0, 0.04)',
        'small-primary-bg': '0 0 1rem #BAC5FF',
      },
      blur: {
        xl: '30px',
      },
      maxWidth: () => ({
        xs: '16.5rem',
        sm: '23rem',
      }),
    },
  },
})
