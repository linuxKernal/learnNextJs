import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav><h2>NextJs</h2> <ul><li>home</li><li>docs</li><li>about</li></ul></nav>
        {children}
        </body>
    </html>
  )
}
