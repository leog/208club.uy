import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import type { Post, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

export interface IndexPageProps {
  author: {
    posts: Post[];
    name: string;
    bio: string;
    authorPic: string;
    introPost?: Post;
  }
  settings: Settings;
}

export default function AuthorPage(props: IndexPageProps) {
  const { settings, author } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={false}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          <div className='flex mb-6 gap-4 items-start bg-gray-50 border border-gray-200 dark:bg-gray-900 dark:border-gray-500 p-4 rounded-br-3xl rounded-tl-3xl'>
            <div className="flex flex-shrink-0">
              <Image
                src={
                  author.authorPic
                    ? urlForImage(author.authorPic).height(96).width(96).fit('crop').url()
                    : 'https://source.unsplash.com/96x96/?face'
                }
                className="rounded-full"
                height={96}
                width={96}
                alt={author.name}
              />
            </div>
            <div className='flex flex-col'>
              <div className="font-bold text-3xl">{author.name}</div>
              {author.introPost ? <div className="text-xl font-medium">{author.introPost.excerpt}</div> : author.bio && (<div className="text-xl font-medium">{author.bio}</div>)}
              {author.introPost && (<div className="text-lg font-medium">
                <Link className='underline decoration-neon' href={`/posts/${author.introPost.slug}`}><span className='text-neon'>▶</span> Ir al post de presentación</Link>
              </div>)}
            </div>
          </div>
          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
            Posts de {author.name.split(" ")[0]}:
          </h2>
          {author.posts.length > 0 && <MoreStories title={false} posts={author.posts} />}
        </Container>
      </Layout>
    </>
  )
}
