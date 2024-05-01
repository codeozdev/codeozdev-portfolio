import PaddingContainer from '@/components/layout/padding-container'
import Header from '@/components/navigation/header'
import { ThemeProvider } from '@/components/provider/provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressContentEditableWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <PaddingContainer>
            <Header />
            {children}
          </PaddingContainer>
        </ThemeProvider>
      </body>
    </html>
  )
}
