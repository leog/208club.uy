import AuthorPage from 'components/AuthorPage'
import Footer from 'components/Footer'
import {
    getAllAuthorSlugs,
    getAllCategories,
    getAuthorPosts,
    getSettings,
} from 'lib/sanity.client'
import { Category, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

interface PageProps {
    author: {
        posts: Post[];
        name: string;
        bio: string;
        authorPic: string;
        introPost?: Post;
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
    const { settings, author, categories } = props

    return (
        <>
            <AuthorPage author={author} settings={settings} />
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

    const [settings, authorPosts, categories = []] = await Promise.all([
        getSettings(),
        getAuthorPosts(params.slug),
        getAllCategories()
    ])

    return {
        props: {
            author: authorPosts,
            settings,
            categories,
        },
    }
}

export const getStaticPaths = async () => {
    const slugs = await getAllAuthorSlugs()

    return {
        paths: slugs?.map(({ slug }) => `/autor/${slug}`) || [],
        fallback: 'blocking',
    }
}
