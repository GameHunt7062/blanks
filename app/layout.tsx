import type { Metadata } from 'next'
import './globals.css'

const LOGO = '/BlanK.png'
const SITE = 'https://blankbot.vercel.app'

export const metadata: Metadata = {
  title: { default: 'BlanK-AsseT', template: '%s — BlanK-AsseT' },
  description: 'The Discord bot built for serious servers. Powerful moderation, smart automation, and advanced server management — free, always.',
  metadataBase: new URL(SITE),
  openGraph: {
    title: 'BlanK-AsseT — Discord Bot',
    description: 'The Discord bot built for serious servers. Powerful moderation, smart automation, and advanced server management — free, always.',
    url: SITE,
    siteName: 'BlanK-AsseT',
    images: [{ url: LOGO, width: 1080, height: 1080, alt: 'BlanK-AsseT' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'BlanK-AsseT — Discord Bot',
    description: 'The Discord bot built for serious servers.',
    images: [LOGO],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/BlanK.png', type: 'image/png', sizes: '1080x1080' },
    ],
    shortcut: '/favicon.ico',
    apple: '/BlanK.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
