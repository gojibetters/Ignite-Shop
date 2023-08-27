import { useState } from 'react'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import { HomeProps } from '@/pages/index.type'
import { stripe } from '@/lib/stripe'

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const defaultPrice = product.default_price as Stripe.Price
    const price = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(defaultPrice.unit_amount ? defaultPrice.unit_amount / 100 : 0)

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

export function useHome({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2.15,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  console.log(products)

  const [currentSlide, setCurrentSlide] = useState(0)

  const isFirstSlide = !(currentSlide === 0)
  const isLastSlide = !(currentSlide === products.length - 1)

  return {
    sliderRef,
    instanceRef,
    isFirstSlide,
    isLastSlide,
  }
}
