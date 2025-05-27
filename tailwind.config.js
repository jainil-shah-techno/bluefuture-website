/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
    important: false,
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    images: {
        domains: ['localhost'],
    },
    theme: {
        extend: {
            fontFamily: {
                'inter': ["'Inter'", 'sans-serif'],
            },
            backgroundImage: {
                'footer-gradient': 'linear-gradient(90deg,rgba(8, 68, 255, 0.2) 0%, rgba(72, 8, 255, 0.2) 100%)',
                'button-gradient': 'linear-gradient(90deg,rgba(8, 68, 255, 1) 0%, rgba(72, 8, 255, 1) 100%)',
                'border-gradient': 'linear-gradient(90deg,rgba(8, 68, 255, 0.7) 0%, rgba(72, 8, 255, 0.7) 100%)',
                'community-gradient': 'linear-gradient(90deg,rgba(8, 68, 255, 0.15) 0%, rgba(72, 8, 255, 0.15) 100%)',
                'profile-gradient': 'linear-gradient(90deg,rgba(8, 68, 255, 0.9) 0%, rgba(72, 8, 255, 0.9) 100%)',
                'yellow-gradient': 'linear-gradient(90deg,rgba(255, 165, 0, 1) 0%, rgba(246, 179, 18, 1) 100%);'
            },
            colors: {
                "dark-blue": "#00010D",
                "light-blue": "#0844FF",
                "dark-orange": "#E17517",
                "dark-primary": "#19D5E7",
                "dark-secondary": "#9AA0A6",
                "dark-tertiary": "#7B838A",
                "light-primary": "#161616",
                "light-secondary": "#7A8188",
                "light-tertiary": "#ADB9C6",
                "light-gray": "#B8C1CC",
                "lighter-gray": "#7A8188",
                "dark-black": "#02021E",
                "career-bg": '#0C0F18',
                "input-bg": '#191951',
                "border-info": '#393964',
                "community-border": '#333A4F',
                "light-black": '#333A4F',
                "Trade-Event-slider-bg": '#0C0F18',
                "Testimonial-Border": '#6B6D82',
                "faq-border": "#CCCCCC",
                "featured-events": "#151A27",
                "border-color": "#FFA500"            
            },
            spacing: {
                28: "7rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                h1: ['2.25rem', { lineHeight: '0', fontWeight: '500' }],
                h2: ['1.875rem', { lineHeight: '0', fontWeight: '700' }],
                h3: ['1.5rem', { lineHeight: '0', fontWeight: '600' }],
                h4: ['1.25rem', { lineHeight: '0', fontWeight: '500' }],
                h5: ['1.125rem', { lineHeight: '0', fontWeight: '600' }],
                h6: ['1rem', { lineHeight: '0', fontWeight: '600' }],
                subtitle1: ['0.875rem', { lineHeight: '0', fontWeight: '400' }],
                bodyLarge: ['1rem', { lineHeight: '20px', fontWeight: '400' }],
                bodySmall: ['0.875rem', { lineHeight: '20px', fontWeight: '400' }],
                buttonLarge: ['0.875rem', { lineHeight: '20px', fontWeight: '600' }],
                buttonSmall: ['0.75rem', { lineHeight: '20px', fontWeight: '400' }],
                caption: ['0.75rem', { lineHeight: '0', fontWeight: '400' }],
            },
            boxShadow: {
                small: "0 5px 10px rgba(0, 0, 0, 0.12)",
                medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
            },
        },
    },
    variants: {
        fill: ['hover', 'focus'], // this line does the trick
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function({ addVariant, e }) {
          addVariant('third-child', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${e(`third-child${separator}${className}`)}:nth-child(3)`
            })
          })
        }),
        plugin(function({ addVariant, e }) {
          addVariant('fifth-child', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${e(`fifth-child${separator}${className}`)}:nth-child(5)`
            })
          })
        }),
        plugin(function({ addVariant, e }) {
          addVariant('seven-child', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${e(`seven-child${separator}${className}`)}:nth-child(7)`
            })
          })
        })
    ],
};
