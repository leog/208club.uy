import { PreviewSuspense } from '@sanity/preview-kit'
import Footer from 'components/Footer'
import IndexPage from 'components/IndexPage'
import { getAllCategories, getAllPosts, getSettings } from 'lib/sanity.client'
import { Category, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import generateRssFeed from 'utils/generateRSSFeed'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
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
  const { posts, settings, preview, token, categories } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <>
            <IndexPage loading preview posts={posts} settings={settings} />
            <Footer categories={categories} />
          </>
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <>
      <IndexPage posts={posts} settings={settings} />
      <Footer categories={categories} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = [], categories = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
    getAllCategories()
  ])

  await generateRssFeed();

  return {
    props: {
      posts,
      settings,
      categories,
      preview,
      token: previewData.token ?? null,
    },
  }
}
