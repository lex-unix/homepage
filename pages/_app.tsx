import '@/styles/globals.scss'
import '@/styles/command.scss'
import '@/styles/container.scss'
import '@/styles/code.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import CommandMenu from '@/components/command-menu'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Navbar />
      <CommandMenu />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default MyApp
