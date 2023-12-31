/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            borderWidth: {
                '6': '6px',
                '0.5': '0.5px',
            },
            fontSize: {
                '2_5xl': ['1.625rem', {
					lineHeight: '1.5',
				}
                ]
            },
            typography: {
                quoteless: {
                    css: {
                        'blockquote p:first-of-type::before': {content: 'none'},
                        'blockquote p:first-of-type::after': {content: 'none'},
                    },
                },
                DEFAULT: {
                    css: {
                        maxWidth: '75%', // add required value here
                    }
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
