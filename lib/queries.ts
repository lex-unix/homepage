const postFields = `
  _id,
  title,
  date,
  coverImage,
  "slug": slug.current
`

export const allPostsQuery = `
  *[_type == "post"] | order(date desc, _updatedAt desc) {
  description,
  ${postFields}
}`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}
`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`
