import '@/styles/globals.scss'
import '@/styles/command.scss'
import '@/styles/container.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import CommandMenu from '@/components/command-menu'
import Navbar from '@/components/navbar'
import CommandMenuObserver from '@/utils/command-menu-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <CommandMenuObserver>
        <Navbar />
        <CommandMenu />
      </CommandMenuObserver>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
