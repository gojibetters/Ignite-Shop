import { ShoppingCart, X } from 'phosphor-react'

import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from '../Dialog/styles'

import {
  ButtonContainer,
  CheckoutContainer,
  CheckoutProducts,
  CheckoutResume,
  FinishButton,
  IconButton,
  Quantity,
  TotalValue,
} from './style'

export default function Checkout() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <ButtonContainer>
          <ShoppingCart size={32} weight="bold" />
        </ButtonContainer>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <CheckoutContainer>
            <span>Sacola de compras</span>
            <CheckoutProducts></CheckoutProducts>

            <CheckoutResume>
              <Quantity>
                <span>Quantidade</span>
                <span>3 itens</span>
              </Quantity>

              <TotalValue>
                <span>Valor total</span>
                <span>R$ 270,00</span>
              </TotalValue>
            </CheckoutResume>

            <FinishButton>Finalizar compra</FinishButton>
          </CheckoutContainer>

          <DialogClose asChild>
            <IconButton>
              <X size={24} />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}
