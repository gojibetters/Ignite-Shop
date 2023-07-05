import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/assets/logo.svg'
import { Container, ButtonContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={52} />
      </Link>

      <Link href="/checkout">
        <ButtonContainer>
          <ShoppingCart size={32} color="#8D8D99" weight="bold" />
        </ButtonContainer>
      </Link>
    </Container>
  )
}
