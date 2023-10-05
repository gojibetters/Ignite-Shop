import Header from '@/components/Header'
import { ReactNode } from 'react'
import { Container } from './defaultLayout.style'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface LayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: LayoutProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </QueryClientProvider>
  )
}
