import { PreviewSuspense } from '@sanity/preview-kit'
import Footer from 'components/Footer'
import PostPage from 'components/PostPage'
import {
  getAllCategories,
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { Category, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewPostPage = lazy(() => import('components/PreviewPostPage'))

interface PageProps {
  post: Post
  morePosts: Post[]
  settings?: Settings
  preview: boolean
  token: string | null
  categories: Category[]
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { settings, post, morePosts, preview, token, categories } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <>
            <PostPage
              loading
              preview
              post={post}
              morePosts={morePosts}
              settings={settings}
            />

            <Footer categories={categories} />
          </>
        }
      >
        <PreviewPostPage
          token={token}
          post={post}
          morePosts={morePosts}
          settings={settings}
        />
      </PreviewSuspense>
    )
  }

  return (
    <>
      <PostPage post={post} morePosts={morePosts} settings={settings} />
      <Footer categories={categories} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, { post }, categories = []] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug, token),
    getAllCategories()
  ])

  if (!post._id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts: post.related,
      settings,
      categories,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}
