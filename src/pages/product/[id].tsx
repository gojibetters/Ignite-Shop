import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    defaultPriceId: string
    price: string
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)
      console.error(error)
    }
  }

  return (
    <>
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
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Nh9ss9LS0CueKt' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params ? params.id : ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const defaultPrice = product.default_price as Stripe.Price

  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(defaultPrice.unit_amount ? defaultPrice.unit_amount / 100 : 0)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        defaultPriceId: defaultPrice.id,
        price,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour,
  }
}
