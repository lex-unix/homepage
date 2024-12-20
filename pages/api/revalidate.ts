import type { NextApiRequest, NextApiResponse } from 'next'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { sanityClient } from '@/lib/sanity-server'
import { postUpdateQuery } from '@/lib/queries'

export const config = {
  api: {
    bodyParser: false
  }
}

async function readBody(readable: NextApiRequest) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const body = await readBody(req)
  if (
    !isValidSignature(
      body,
      signature,
      process.env.SANITY_STUDIO_REVALIDATE_SECRET as string
    )
  ) {
    res.status(401).json({ message: 'Invalid signature' })
    return
  }

  const { _id: id } = JSON.parse(body)
  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ message: 'Invalid _id' })
  }

  try {
    const slug = await sanityClient.fetch(postUpdateQuery, { id })
    await Promise.all([
      res.revalidate('/'),
      res.revalidate('/writing'),
      res.revalidate(`/writing/${slug}`)
    ])
    return res.status(200).json({ message: `Updated ${slug}` })
  } catch (err: any) {
    return res.status(500).json({ message: err.message })
  }
}
