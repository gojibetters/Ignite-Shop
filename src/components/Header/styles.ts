import { styled } from '@/styles'

export const Container = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '80vw',
  margin: '0 auto',
  height: '7.75rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    objectFit: 'cover',
  },
})

export const ButtonContainer = styled('div', {
  backgroundColor: '#202024',
  padding: '0.75rem',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
})
