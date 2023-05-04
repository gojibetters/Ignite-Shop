import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '2xl',
    color: '$gray100',
  },

  p: {
    fontSize: 'xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: 'lg',
    color: '$green500',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  maxWidth: '20rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '1rem',

  img: {
    objectFit: 'cover',
  },
})

export const ProductImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '1rem',
  width: '9rem',
  height: '8.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: '50%',
})

export const Information = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '3rem',

  gap: '1.5rem',
})
