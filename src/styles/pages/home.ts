import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',

  background: '$gray900',

  width: '100%',
  minHeight: '50rem',

  marginLeft: 'auto',

  position: 'relative',

  button: {
    border: 'none',
    cursor: 'pointer',

    position: 'absolute',

    zIndex: 10,

    height: '100%',

    '&[data-side=left]': {
      left: 0,

      padding: '0 4.5rem 0 1rem',

      background:
        'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
    },

    '&[data-side=right]': {
      left: 'auto',
      right: 0,

      padding: '0 1rem 0 4.5rem',

      background:
        'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
    },

    '&:disabled': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'not-allowed',
    },
  },
})

export const ProductContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
})

export const Product = styled('div', {
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  width: '52.2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Footer = styled('div', {})
