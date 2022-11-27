function withOpacity(varName) {
return ({opacityValue}) => {
  if(opacityValue != undefined){
    return `rgba(var(${varName}), ${opacityValue})`
  }
  return `rgba(var(${varName}))`
}
}

module.exports = {
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{html,js}']
,
  theme: {
    extend: {
      textColor: {
          skin: {
            base:  withOpacity('--color-text-base'),
            muted:  withOpacity('--color-text-muted'),
            inverted:  withOpacity('--color-text-inverted'),
          }
      }
    ,
    backgroundColor: {
      skin: {
        fill:  withOpacity('--color-fill'),
        'button-accent': withOpacity('--color-button-accent'),
        'button-accent-hover': withOpacity('--color-button-accent-hover'),
        'button-muted':withOpacity('--color-button-muted')
      }
    },
    gradientColorStops: {
      skin: {
        hue:  withOpacity('--color-fill'),
      }
    },
      fontFamily: {
        sans:"'cairo'",
        Poppins: "'Poppins', sans-serif",
        Quicksand: "'Quicksand', sans-serif",
      },
      colors: {
        'color-header': '#60b4df',
        'color-overlay': 'rgb(56, 165, 238, 0.5)',
        'text-primary': '#69bde7',
        'color-grey': '#9194A2',
        'color-main-one': '#f0f1ef',
        'color-main-two': '#4964a1',
        'color-main-three': '#7eb57a',
        'color-main-four': '#7b49d2',
        'color-main-five': '#7b57f6',
        'color-main-six': ' #f9f9fa',
        'color-main-seven': '#b9dObd',
        'color-main-eight': ' #5e4978',
        'color-main-nine': ' #7ab378',
        'bookmark-white': '#f7f7f7',
        'border-color':'#e6ecf5',
        'default-primary':'#7774e7',
        'default-success':'#37c936',
        'default-text-color':'#72777a',
        'default-warning':'#fc0',
        'default-white':'#fff',
        'sellar-primary': '#7b57f6',
        'windows-green':'#7ab378',
        'light':  'var(--light)',
        'dark':  'var(--dark)',
        'darker':  'var(--darker)',
        'primary': {
          'DEFAULT':  'var(--color-primary)',
          '50':  'var(--color-primary-50)',
          '100':  'var(--color-primary-100)',
          'light':  'var(--color-primary-light)',
          'lighter':  'var(--color-primary-lighter)',
          'dark':  'var(--color-primary-dark)',
          'darker':  'var(--color-primary-darker)',
        },
      }
    },
  },
  plugins: [],
}
