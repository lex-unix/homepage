import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import readingTime from 'reading-time'

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      format: 'mdx'
    }
  })

  return {
    html: mdxSource,
    readingTime: readingTime(source).text
  }
}
