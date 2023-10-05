import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { ArrowLeft, ArrowRight, ShoppingCart } from 'phosphor-react'

import 'keen-slider/keen-slider.min.css'

import { HomeProps } from './index.type'
import { useHome, getStaticProps } from '@/hooks/useHome'

import {
  IconContainer,
  HomeContainer,
  Product,
  ProductContainer,
  InformationContainer,
  Arrow,
  Footer,
  Container,
} from '@/styles/pages/home'

export default function Home({ products }: HomeProps) {
  const { sendToCheckout, instanceRef, isFirstSlide, isLastSlide, sliderRef } =
    useHome({
      products,
    })

  return (
    <Container>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>

      <HomeContainer className="navigation-wrapper">
        {isFirstSlide && (
          <Arrow data-side="left" onClick={() => instanceRef.current?.prev()}>
            <ArrowLeft size={48} color="#C4C4CC" />
          </Arrow>
        )}

        <ProductContainer ref={sliderRef} className="keen-slider">
          {products.map((product, index) => (
            <Product
              key={product.id}
              className={`keen-slider__slide number-slide${index}`}
              backgroundFade={index % 2 === 0}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={520}
                height={480}
              />

              <Footer>
                <Link href={`/product/${product.id}`}>
                  <InformationContainer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </InformationContainer>
                </Link>

                <IconContainer
                  onClick={() => {
                    sendToCheckout.mutate()
                  }}
                >
                  <ShoppingCart size={32} color="#FFF" weight="bold" />
                </IconContainer>
              </Footer>
            </Product>
          ))}
        </ProductContainer>

        {isLastSlide ? (
          <Arrow data-side="right" onClick={() => instanceRef.current?.next()}>
            <ArrowRight size={48} color="#C4C4CC" />
          </Arrow>
        ) : null}
      </HomeContainer>
    </Container>
  )
}

export { getStaticProps }
