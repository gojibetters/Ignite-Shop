import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { ArrowLeft, ArrowRight } from 'phosphor-react'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product, ProductContainer } from '@/styles/pages/home'
import { useState } from 'react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const isFirstSlide = !(currentSlide === 0)
  const isLastSlide = !(currentSlide === products.length - 1)

  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>

      <HomeContainer className="navigation-wrapper">
        {isFirstSlide && (
          <button data-side="left" onClick={() => instanceRef.current?.prev()}>
            <ArrowLeft size={48} color="#C4C4CC" />
          </button>
        )}

        <ProductContainer ref={sliderRef} className="keen-slider">
          {products.map((product, index) => {
            return (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                prefetch={false}
              >
                <Product className={`keen-slider__slide number-slide${index}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={520}
                    height={480}
                  />

                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </ProductContainer>

        {isLastSlide ? (
          <button data-side="right" onClick={() => instanceRef.current?.next()}>
            <ArrowRight size={48} color="#C4C4CC" />
          </button>
        ) : null}
      </HomeContainer>
    </>
  )
}

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
