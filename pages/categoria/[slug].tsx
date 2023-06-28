import { PreviewSuspense } from '@sanity/preview-kit'
import CategoryPage from 'components/CategoryPage'
import Footer from 'components/Footer'
import IndexPage from 'components/IndexPage'
import {
    getAllAuthorSlugs,
    getAllCategories,
    getAllCategorySlugs,
    getAuthorPosts,
    getPostsByCategory,
    getSettings,
} from 'lib/sanity.client'
import { Category, Post, Settings } from 'lib/sanity.queries'
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
    categories: Category[]
}

interface Query {
    [key: string]: string
}

interface PreviewData {
    token?: string
}

export default function Page(props: PageProps) {
    const { settings, category, categories } = props

    return (
        <>
            <CategoryPage category={category} settings={settings} />
            <Footer categories={categories} />
        </>
    )
}

export const getStaticProps: GetStaticProps<
    PageProps,
    Query,
    PreviewData
> = async (ctx) => {
    const { params = {} } = ctx

    const [settings, categoryPosts, categories = []] = await Promise.all([
        getSettings(),
        getPostsByCategory(params.slug),
        getAllCategories()
    ])

    return {
        props: {
            category: categoryPosts[0],
            settings,
            categories,
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
