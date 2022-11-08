import Head from 'next/head'
import React from 'react'

interface Props {
  title?: string
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ title, children }) => {
  const t = title ? `${title} - Lex Unix` : 'Lex Unix'
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="description" content="Lex Unix homepage" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">{children}</main>
    </>
  )
}

export default Container
