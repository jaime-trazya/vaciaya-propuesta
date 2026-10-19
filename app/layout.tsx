import type { Metadata, Viewport } from 'next'
import { Fraunces, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vacía Ya · Solicita presupuesto para vaciar tu piso o local',
    template: '%s · Vacía Ya',
  },
  description:
    'Describe el inmueble que necesitas vaciar —piso, casa, oficina o local— y solicita presupuesto gratis a empresas especializadas.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export const viewport: Viewport = {
  themeColor: '#6b1d2a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${hanken.variable} bg-background`}>
      <body>{children}</body>
    </html>
  )
}
