/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
      './pages/*.html'
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
                secondary: '#FFC700',
                positive: '#009A22',
                alert: '#FF0000'
            }
        },
        fontFamily: {
            'proxima': ["proxima", "Quicksand", "sans-serif"]
        }
    }
}