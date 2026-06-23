import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson',
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Quinta do Espinhal',
  description:
    'Um refúgio de tranquilidade a pouco mais de uma hora de Lisboa, em pleno Ribatejo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt'
      className={`${playfairDisplay.variable} ${crimsonPro.variable} h-full antialiased`}
    >
      <Analytics />
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
