const postFields = `
  _id,
  title,
  description,
  date,
  coverImage,
  "slug": slug.current
`

export const allPosts = `
  *[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`
