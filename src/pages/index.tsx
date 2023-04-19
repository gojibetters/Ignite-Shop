import { GetStaticProps } from 'next'
import Image from 'next/image'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={520}
              height={480}
            />

            <footer>
              <strong>{product.name}</strong>
              <span>R${product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const defaultPrice = product.default_price as Stripe.Price
    const price = new Intl.NumberFormat().format(
      defaultPrice.unit_amount ? defaultPrice.unit_amount / 100 : 0,
    )

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price,
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
