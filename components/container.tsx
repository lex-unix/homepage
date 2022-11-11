import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  title?: string
  description: string
  type?: string
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ title, description, type, children }) => {
  const router = useRouter()
  const t = title ? `${title} - Lex Unix` : 'Lex Unix'

  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Alexey Miin" />
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://lex-unix.kyivangels.com${router.asPath}`}
        />
        <meta property="og:image" content="/lex-unix-og.png" />
        <meta property="og:title" content={t} />
        <meta property="og:site_name" content="Lex Unix" />
        <meta property="og:type" content={`${type ? type : 'website'}`} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://lex-unix.kyivangels.com${router.asPath}`}
        />
      </Head>
      <main className="main">{children}</main>
    </>
  )
}

export default Container
