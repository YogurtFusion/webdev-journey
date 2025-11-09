// app/not-found.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <main className={inter.className} style={{padding: 24}}>
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>
    </main>
  )
}
