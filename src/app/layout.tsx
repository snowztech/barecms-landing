import type { Metadata } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'BareCMS - Lightweight Open-Source Headless CMS',
  description: 'A lightweight, open-source headless CMS designed with bare minimalism in mind.',
  keywords: [
    'headless cms',
    'open source',
    'lightweight cms',
    'minimalist cms',
    'content management',
    'api first',
    'barecms',
    'go',
    'react',
    'docker'
  ],
  authors: [{ name: 'SnowzTech', url: 'https://github.com/snowztech' }],
  creator: 'SnowzTech',
  publisher: 'SnowzTech',
  applicationName: 'BareCMS',
  category: 'technology',
  classification: 'Content Management System',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://barecms.dev',
    siteName: 'BareCMS',
    title: 'BareCMS - Lightweight Open-Source Headless CMS',
    description: 'A lightweight, open-source headless CMS designed with bare minimalism in mind.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BareCMS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BareCMS - Lightweight Open-Source Headless CMS',
    description: 'A lightweight, open-source headless CMS designed with bare minimalism in mind.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://barecms.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#6b7770" />
        <meta name="msapplication-TileColor" content="#6b7770" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}