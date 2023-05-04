import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '5rem',

  height: '47rem',
  maxHeight: 'calc(90vh - 7.75rem)',

  maxWidth: '80vw',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '1.825rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    lineHeight: '2.8rem',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    lineHeight: '2.8rem',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.8rem',
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
