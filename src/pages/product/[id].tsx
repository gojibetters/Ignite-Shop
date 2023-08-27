import Head from 'next/head'
import Image from 'next/image'

import { useProduct, getStaticProps, getStaticPaths } from './useProduct'
import { ProductProps } from './type'

import {
  Container,
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from './style'

export default function Product({ product }: ProductProps) {
  const { isCreatingCheckoutSession, handleBuyProduct } = useProduct({
    product,
  })

  return (
    <Container>
      <Head>
        <title>{product.name} - Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </Container>
  )
}

export { getStaticProps, getStaticPaths }
