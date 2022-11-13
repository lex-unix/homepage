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

const Container: React.FC<Props> = ({
  title,
  description,
  image,
  type,
  children
}) => {
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
          content={`https://lex.kyivangels.com${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`${
            image ? image : 'https://lex.kyivangels.com/lex-unix-og.png'
          }`}
        />
        <meta property="og:title" content={t} />
        <meta property="og:site_name" content="lexunix.dev" />
        {type && <meta property="og:type" content={type} />}
        <link
          rel="canonical"
          href={`https://lex.kyivangels.com${router.asPath}`}
        />
      </Head>
      <main className="main">{children}</main>
    </>
  )
}

export default Container
