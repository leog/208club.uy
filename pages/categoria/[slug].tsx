import { PreviewSuspense } from '@sanity/preview-kit'
import CategoryPage from 'components/CategoryPage'
import IndexPage from 'components/IndexPage'
import {
    getAllAuthorSlugs,
    getAllCategorySlugs,
    getAuthorPosts,
    getPostsByCategory,
    getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewPostPage = lazy(() => import('components/PreviewPostPage'))

interface PageProps {
    category: {
        posts: Post[];
        name: string;
        description: string;
    }
    settings?: Settings
}

interface Query {
    [key: string]: string
}

interface PreviewData {
    token?: string
}

export default function Page(props: PageProps) {
    const { settings, category } = props

    return (
        <CategoryPage category={category} settings={settings} />
    )
}

export const getStaticProps: GetStaticProps<
    PageProps,
    Query,
    PreviewData
> = async (ctx) => {
    const { params = {} } = ctx

    const [settings, categoryPosts] = await Promise.all([
        getSettings(),
        getPostsByCategory(params.slug),
    ])

    return {
        props: {
            category: categoryPosts[0],
            settings,
        },
    }
}

export const getStaticPaths = async () => {
    const slugs = await getAllCategorySlugs()

    return {
        paths: slugs?.map(({ slug }) => `/categoria/${slug}`) || [],
        fallback: 'blocking',
    }
}
