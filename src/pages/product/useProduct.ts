import { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { ProductProps } from './type'

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Nh9ss9LS0CueKt' } }],
    fallback: 'blocking',
  }
}

export function useProduct({ product }: ProductProps) {
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

  return {
    product,
    isCreatingCheckoutSession,
    handleBuyProduct,
  }
}
