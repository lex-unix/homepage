import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  title?: string
  description: string
  image?: string
  type?: string
  children: React.ReactNode
}

const Container: React.FC<Props> = props => {
  const { children, title, description, ...otherMeta } = props
  const router = useRouter()
  const t = title ? `${title} - Lex Unix` : 'Lex Unix'
  const meta = {
    image: 'https://lexunix.me/lex-unix-og.png',
    type: 'website',
    ...otherMeta
  }

  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Alexey Miin" />
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://lexunix.me${router.asPath}`}
        />
        <meta property="og:image" content={meta.image} />
        <meta property="og:title" content={t} />
        <meta property="og:site_name" content="lexunix.me" />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={`https://lexunix.me${router.asPath}`} />
      </Head>
      <main className="main">{children}</main>
    </>
  )
}

export default Container
