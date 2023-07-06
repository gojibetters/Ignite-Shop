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

import img from '@/assets/Variant6.png'

const products = [
  {
    id: 0,
    name: 'Camiseta Beyond the Limits',
    price: 'R$ 79,90',
    img,
  },
  {
    id: 1,
    name: 'Camiseta Limits',
    price: 'R$ 72,90',
    img,
  },
  {
    id: 2,
    name: 'Camiseta Beyond the Stars',
    price: 'R$ 71,90',
    img,
  },
]

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
                      src={product.img}
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
