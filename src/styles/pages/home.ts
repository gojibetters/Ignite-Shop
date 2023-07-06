import { styled } from '..'

export const Container = styled('div', {})

export const HomeContainer = styled('main', {
  display: 'flex',

  background: '$grey900',

  width: '100%',
  height: '47rem',
  maxHeight: 'calc(90vh - 7.75rem)',

  marginLeft: 'auto',

  position: 'relative',
})

export const Arrow = styled('button', {
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

    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(7, 7, 7, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
    },
  },

  '&[data-side=right]': {
    left: 'auto',
    right: 0,

    padding: '0 1rem 0 4.5rem',

    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(7, 7, 7, 0.75) 100%)',
    },
  },

  '&:disabled': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    cursor: 'not-allowed',
  },
})

export const ProductContainer = styled('div', {
  display: 'flex',
})

export const Product = styled('div', {
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  width: '52.2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&[data-background=direct]': {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100% )',
  },

  '&[data-background=inverted]': {
    background: 'linear-gradient(100deg, #7465d4 0%, #1ea483 100% )',
  },

  '&:hover': {
    boxShadow: '0px 0px 48px 0px rgba(0, 0, 0, 0.9)',

    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const Footer = styled('footer', {
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
})

export const InformationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$lg',
    color: '$grey100',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },
})

export const IconContainer = styled('button', {
  border: 0,
  cursor: 'pointer',

  backgroundColor: '$green500',
  padding: '0.75rem',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: '$green300',
  },
})

export const CheckoutContainer = styled('div', {})

export const Checkout = styled('div', {})

export const CheckoutInformation = styled('div', {})
