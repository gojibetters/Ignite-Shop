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
  Product,
  ProductImage,
  ProductResume,
  Quantity,
  Title,
  TotalValue,
} from './style'

import products from '@/mock/products.json'

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
            <Title>Cesta de compras</Title>

            <CheckoutProducts>
              {products ? (
                products.map((product) => (
                  <Product key={product.id}>
                    <ProductImage
                      src={product.imageUrl}
                      alt=""
                      height={93}
                      width={100}
                    />

                    <ProductResume>
                      <span>{product.name}</span>

                      <span>
                        <strong>{product.price}</strong>
                      </span>

                      <button>Remover</button>
                    </ProductResume>
                  </Product>
                ))
              ) : (
                <span>Sem produtos na cesta.</span>
              )}
            </CheckoutProducts>

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
