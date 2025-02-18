'use client'

import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider, useTheme } from 'next-themes'
import { SidebarProvider } from './sidebar-context'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system' disableTransitionOnChange>
      <SidebarProvider>{children}</SidebarProvider>
      <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return <Toaster position='top-right' theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
}
