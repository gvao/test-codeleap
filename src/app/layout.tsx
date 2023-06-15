'use client'

import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { checkPageIsPublic } from '@/functions/check-routes'
import { PrivatePage } from '@/components/privatePage'
import AuthContextProvider from '@/context/auth'

const roboto = Roboto({
  weight: ['700', '400'],
  subsets: ['latin'],
})

// export const metadata = {
//   title: 'Test codeleap',
//   description: 'Created by Yuri Galvão',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  const isPublic: boolean = checkPageIsPublic(pathname)

  return (
    <html lang="en">
      <AuthContextProvider>

        <body className={roboto.className}>
          
          {isPublic && children}
          {!isPublic && (<PrivatePage>{children}</PrivatePage>) }

        </body>

      </AuthContextProvider>
    </html>
  )
}
