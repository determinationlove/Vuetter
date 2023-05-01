/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", 
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/assst/views/*.{vue,js,ts,jsx,tsx}",
        "./src/assst/components/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            spacing: {
                '60vh': '60vh',
            }
        },
    },
    plugins: [],
};
