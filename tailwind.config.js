/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './pages/*.html',
        './styles/*.css',
        './scripts/*.js'
    ],
    content: [
        './pages/*.html',
        './styles/*.css',
        './scripts/*.js'
    ],
    theme: {
        extend: {
            colors: {
                main: '#05096C',
                "main-dark": '#040759', 
                secondary: '#FFC700',
                positive: '#009A22',
                alert: '#FF0000'
            }
        },
        fontFamily: {
            'quicksand': ["Quicksand", "proxima", "sans-serif"]
        }
    }
}