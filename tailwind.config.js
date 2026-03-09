/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cb-blue': '#0052FF',
                'cb-blue-dark': '#0040CC',
                'cb-dark': '#0A0B0D',
                'cb-gray': {
                    50: '#F9FAFB',
                    100: '#F4F7FA',
                    200: '#E8ECEF',
                    300: '#CFD6DC',
                    400: '#98A2B3',
                    500: '#667085',
                    600: '#475467',
                    700: '#344054',
                    800: '#1D2939',
                    900: '#101828',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
