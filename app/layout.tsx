import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Telestory - View and Download Telegram Stories',
  description: 'Telestory lets you watch and save Telegram stories. Access any user\'s stories, save them for later, and share with friends - all without revealing your identity.',
  icons: [{ rel: 'icon', type: 'image/png', url: '/icon.png' }],
  openGraph: {
    title: 'Blockfirst - образовательная блокчейн платформа',
    description:
      'Начните свой путь в web3 с помощью специально разработанной платформы и персонального AI-ментора ',
    images: [{ url: '/og-image.jpeg' }],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
