import '../styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700', '400'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Test codeleap',
  description: 'Created by Yuri Galvão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
