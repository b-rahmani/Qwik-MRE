import baseConfig from './TailwindBase.js'

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: '#39b54a',
                    color11: '#e9f3e0',
                    color2: '#2e3192',
                    color3: '#4e4e4e',
                    color31: '#f8fafb',
                    color32: '#5a5a5a',
                }
            },
            fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                base: '1.2rem',
                xl: '1.25rem',
                lg: '1.45rem',
                xl: '1.5rem',
                '2xl': '1.7rem',
                '3xl': '1.9rem',
                '4xl': '2.4rem',
            },
            maxWidth: {
                'wide': '1600px',
                '8xl': '1500px'
            },
            keyframes: {
                fadeMenu: {
                    '0%': {
                        visibility: 'visible !important',
                        opacity: '0',
                        transform: 'translateY(0)',
                    },
                    '33%': {
                        visibility: 'visible !important',
                        opacity: '0',
                        transform: 'translateY(-100%)',
                    },
                    '66%': {
                        visibility: 'visible !important',
                        opacity: '1 ',
                        transform: 'translateY(20%)',
                        visibility: 'visible'
                    },
                    '100%': {
                        visibility: 'visible !important',
                        opacity: '1 !important',
                        transform: 'translateY(0)',
                        visibility: 'visible'
                    },
                },
                upDown: {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '33%': {
                        transform: 'translateY(-60%)',
                    },
                    '66%': {
                        transform: 'translateY(10%)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
                fromRight: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(100%)',
                    },
                    "1%": {
                        opacity: 1,
                    },
                    '90%': {
                        transform: 'translateX(-10%)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateX(0)',
                    },
                },

            },
            animation: {
                'fade-menu': 'fadeMenu 2s ease-in-out',
                'up-down': 'upDown 3s ease-in infinite',
                'from-right': 'fromRight 2s ease-in '
            },
        },
    }
}

export default config
