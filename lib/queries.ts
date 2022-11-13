const postFields = `
  _id,
  title,
  date,
  coverImage,
  description,
  "slug": slug.current
`

export const allPostsQuery = `
  *[_type == "post"] | order(date desc, _updatedAt desc) {
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

export const postBySlugQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postUpdateQuery = `*[_type == "post" && _id == $id].slug.current`
