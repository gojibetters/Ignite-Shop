import Header from '@/components/Header'
import { ReactNode } from 'react'
import { Container } from './defaultLayout.style'

interface LayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
}
