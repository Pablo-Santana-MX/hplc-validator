import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kriterion HPLC | S-labs',
  description: 'Enterprise statistical engine for chromatographic method validation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}