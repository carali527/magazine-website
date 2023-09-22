const { inset } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                NotoSans:['Noto Sans, Noto Sans TC, sans-serif'],
            },
            screens: {
                sm: '576px',
                //@media (min-width: 576px) { /* ... */ }
                md: '768px',
                //@media (min-width: 768px) { /* ... */ }
                lg: '970px',
                //@media (min-width: 970px) { /* ... */ }
                xl: '1040px',
                //@media (min-width: 1040px) { /* ... */ }
            },
            boxShadow: {
                nav: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
            },
            zIndex: {
                '11': '11',
            },
            colors: {
                'grey-black': '#222222',
            },
        }
    }
};

