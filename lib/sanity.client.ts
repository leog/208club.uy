import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  authorSlugsQuery,
  Category,
  categorySlugsQuery,
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postsByAuthorSlugQuery,
  postsByCategorySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllAuthorSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(authorSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllCategorySlugs(): Promise<Pick<Category, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(categorySlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getAuthorPosts(slug: string): Promise<{ posts: Post[]; name: string; bio: string; authorPic: string; }> {
  if (client) {
    return (await client.fetch(postsByAuthorSlugQuery, { slug })) || { name: "", bio: "", authorPic: "", posts: [] }
  }
  return { name: "", bio: "", authorPic: "", posts: [] }
}

export async function getPostsByCategory(slug: string): Promise<{ posts: Post[] }> {
  if (client) {
    return (await client.fetch(postsByCategorySlugQuery, { slug })) || { posts: [] }
  }
  return { posts: [] }
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post & { related: Post[] }; }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: { _id: null, related: [] } }
}
