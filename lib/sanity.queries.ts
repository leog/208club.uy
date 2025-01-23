import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, bio, "slug": slug.current, picture},
  categories[]->{
    name, 
    "slug": slug.current
  }
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const allCategoriesQuery = groq`
*[_type == "category"] {
  name, 
  description,
  "slug": slug.current
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields},
    "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..2] {
      ${postFields}
    }
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postsByAuthorSlugQuery = groq`
*[_type == "author" && slug.current == $slug][0] {
  name,
  bio,
  "introPost": *[_type == "post" && slug.current == ^.intro->slug.current ][0] { "slug": slug.current, excerpt },
  "authorPic": picture.asset->url,
  "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]{
    title,
    "slug": slug.current,
    coverImage,
    excerpt,
    categories[]->{
      name, 
      "slug": slug.current
    }
  }
}
`

export const postsByCategorySlugQuery = groq`
*[_type == "category" && slug.current == $slug] {
  name,
  description,
  "posts": *[_type=='post' && references(^._id)]{
    title,
    "slug": slug.current,
    coverImage,
    excerpt,
    categories[]->{
      name, 
      "slug": slug.current
    }
  }
}
`

export const authorSlugsQuery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`

export const categorySlugsQuery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  slug?: string
  bio?: string
  picture?: any
  intro?: Post
}

export interface Category {
  name: string
  slug: string
  description: string
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  categories?: Category[]
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
