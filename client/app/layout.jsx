import Navbar  from '../components/Navbar'  
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CONTRA EL FUEGO',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w mx-auto">
          <Navbar />
        </div>
        <div className="max-w mx-auto px-20 mt-8">
          {children}
        </div>
      </body>
    </html>
  )
}
