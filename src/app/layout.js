import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google clone Next js 13',
  description: 'Pixel perfect of google',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}    
        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}
