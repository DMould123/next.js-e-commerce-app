import './globals.css'

import { Inter } from 'next/font/google'
import Link from 'next/link'

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
        <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
          <Link href={'/'} passHref>
            <h1
              className="uppercase cursor-pointer hover:scale-110"
              style={{ textDecoration: 'none' }}
            >
              DM Tutorial Centre
            </h1>
          </Link>
          <div className="group">
            <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping"></i>
          </div>
        </header>

        <div className="flex-1">{children}</div>
        <div id="portal"></div>
      </body>
    </html>
  )
}
