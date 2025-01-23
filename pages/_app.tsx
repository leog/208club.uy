import 'styles/globals.css'

import { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
