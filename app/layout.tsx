import { SidebarProvider } from '@/contexts/sidebar-context'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'TylooTube',
  description:
    'A modern YouTube clone built with Next.js 15, TailwindCSS and ShadCN, leveraging the latest web technologies to create a seamless video sharing and viewing experience.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <html lang='en'>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </html>
    </SidebarProvider>
  )
}
