import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import PostCategories from './PostCategories'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug' | 'categories'
  >
) {
  const { title, coverImage, date, excerpt, author, slug, categories } = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-1 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="underline decoration-[#BFDD0C]">
              {title || 'Untitled'}
            </Link>
          </h3>
          <h4>
            <PostCategories categories={categories} />
          </h4>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
          {author && (
            <AuthorAvatar slug={author.slug} bio={author.bio} name={author.name} picture={author.picture} />
          )}
        </div>
      </div>
    </section>
  )
}
