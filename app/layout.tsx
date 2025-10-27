import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hip Portfolio',
  description: 'Created with Hip',
  icons: {
    icon: "/favicon.png", // ✅ đường dẫn favicon
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
