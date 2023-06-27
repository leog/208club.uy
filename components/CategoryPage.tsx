import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import type { Post, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

import Footer from './Footer'

export interface IndexPageProps {
    category: {
        posts: Post[];
        name: string;
        description: string;
    }
    settings: Settings
}

export default function CategoryPage(props: IndexPageProps) {
    const { settings, category } = props
    const { title = demo.title, description = demo.description } = settings || {}

    return (
        <>
            <IndexPageHead settings={settings} />

            <Layout preview={false}>
                <Container>
                    <BlogHeader title={title} description={description} level={1} />
                    <div className='flex mb-6 gap-4 items-start bg-gray-50 border border-gray-200 p-4 rounded-br-3xl rounded-tl-3xl justify-center'>
                        <div className='flex flex-col text-center'>
                            <div className="font-bold text-3xl">Categoría {category.name}</div>
                            <div className="text-xl font-medium">{category.description}</div>
                        </div>
                    </div>
                    <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
                        Posts de la categoría:
                    </h2>
                    {category.posts.length > 0 && <MoreStories title={false} posts={category.posts} />}
                </Container>
                <Footer />
            </Layout>
        </>
    )
}
