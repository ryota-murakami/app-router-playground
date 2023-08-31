import type React from 'react'

const title = 'Route Groups'

export const metadata = {
  openGraph: {
    images: [`/api/og?title=${title}`],
    title,
  },
  title,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
