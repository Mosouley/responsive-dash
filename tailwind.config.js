module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  purge: ["./**/*.html"]
,
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Quicksand: "'Quicksand', sans-serif",
      },
      colors: {
        'color-header': '#60b4df',
        'color-overlay': 'rgb(56, 165, 238, 0.5)',
        'text-primary': '#69bde7',
        'color-grey': '#9194A2',
        'bookmark-white': '#f7f7f7',
        'border-color':'#e6ecf5',
        'default-primary':'#7774e7',
        'default-success':'#37c936',
        'default-text-color':'#72777a',
        'default-warning':'#fc0',
        'default-white':'#fff',
      }
    },
  },
  plugins: [],
}
