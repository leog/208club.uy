import AuthorPage from 'components/AuthorPage'
import {
    getAllAuthorSlugs,
    getAuthorPosts,
    getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

interface PageProps {
    author: {
        posts: Post[];
        name: string;
        bio: string;
        authorPic: string;
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
    const { settings, author } = props

    return (
        <AuthorPage author={author} settings={settings} />
    )
}

export const getStaticProps: GetStaticProps<
    PageProps,
    Query,
    PreviewData
> = async (ctx) => {
    const { params = {} } = ctx

    const [settings, authorPosts] = await Promise.all([
        getSettings(),
        getAuthorPosts(params.slug),
    ])

    return {
        props: {
            author: authorPosts,
            settings,
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
