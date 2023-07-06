import * as PrimitiveDialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '@/styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const DialogOverlay = styled(PrimitiveDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(PrimitiveDialog.Content, {
  backgroundColor: '$grey900',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  position: 'fixed',
  top: 0,
  right: 0,
  minHeight: '100vh',
  width: '30rem',
  padding: 25,

  zIndex: 10,

  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(PrimitiveDialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$grey100',
  fontSize: 17,
})

export const DialogDescription = styled(PrimitiveDialog.Description, {
  margin: '10px 0 20px',
  color: '$grey300',
  fontSize: 15,
  lineHeight: 1.5,
})

export const DialogRoot = styled(PrimitiveDialog.Root, {})

export const DialogTrigger = styled(PrimitiveDialog.Trigger, {})

export const DialogPortal = styled(PrimitiveDialog.Portal, {})

export const DialogClose = styled(PrimitiveDialog.Close, {
  '&:hover': {
    background: '$grey900',

    svg: { color: '$white' },
  },
  cursor: 'pointer',
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
