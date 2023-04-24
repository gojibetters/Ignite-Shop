import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'
import { ButtonContainer, Container, Header } from '@/styles/pages/app'
import logoImg from '../assets/logo.svg'
import Link from 'next/link'
import { ShoppingCart } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" width={130} height={52} />
        </Link>
        <Link href="/checkout">
          <ButtonContainer>
            <ShoppingCart size={32} color="#8D8D99" weight="bold" />
          </ButtonContainer>
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
