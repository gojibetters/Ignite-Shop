import { styled } from '@/styles'
import Image from 'next/image'

export const CheckoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  maxWidth: '100%',

  margin: '2.9375rem 1.4375rem 1.4375rem',
})

export const Title = styled('span', {
  fontSize: '$xl',
})

export const CheckoutProducts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '40rem',
  maxHeight: '40rem',

  gap: '1.5rem',

  overflowY: 'auto',

  marginTop: '2rem',
})

export const Product = styled('div', {
  display: 'flex',

  gap: '1.25rem',
})

export const ProductImage = styled(Image, {
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100% )',

  borderRadius: 8,
})

export const ProductResume = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    fontSize: '$md',
  },

  button: {
    background: 'transparent',
    color: '$green500',
    border: 0,

    fontSize: '$nl',
    textDecoration: 'underline',
    textAlign: 'start',

    cursor: 'pointer',
  },
})

export const CheckoutResume = styled('div', {
  marginTop: '1rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    '&:first-child': {
      fontSize: '$nl',
    },

    '&:last-child': {
      fontSize: '$md',
    },
  },
})

export const TotalValue = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',

  span: {
    '&:first-child': {
      fontSize: '$md',
    },

    '&:last-child': {
      fontSize: '$xl',
    },
  },
})

export const FinishButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,
  color: '$white',
  padding: '1.25rem 2rem',

  fontWeight: 'bold',
  fontSize: '$lg',
  cursor: 'pointer',

  marginTop: '2.5rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$grey500',
  position: 'absolute',
  top: 24,
  right: 24,

  '&:hover': { backgroundColor: '$white' },
  '&:focus': { boxShadow: '0 0 0 2px $grey900' },

  svg: {
    color: '$grey500',
  },
})

export const ButtonContainer = styled('div', {
  backgroundColor: '$grey800',
  padding: '0.75rem',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',

  '&:hover': {
    background: '$grey500',

    svg: {
      color: '$white',
    },
  },

  '&:active': {
    background: '$grey900',
  },

  svg: {
    color: '$grey500',
  },
})
