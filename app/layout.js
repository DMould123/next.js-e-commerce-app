import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={'min-h-screen flex flex-col relative ' + inter.className}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <div id="portal"></div>
      </body>
    </html>
  )
}
