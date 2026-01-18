import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avoca - The English Battle',
  description: '승부욕이 폭발하는 영어 배틀, 아보카',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
