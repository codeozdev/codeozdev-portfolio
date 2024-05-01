'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: any) {
  return (
    <NextThemesProvider attribute='class' enableSystem={true}>
      {children}
    </NextThemesProvider>
  )
}
