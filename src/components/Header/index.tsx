import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/assets/logo.svg'
import { Container } from './styles'
import Checkout from '../Checkout'

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={52} />
      </Link>

      <Checkout />
    </Container>
  )
}
