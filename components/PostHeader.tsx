import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

import PostCategories from './PostCategories'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'categories'>
) {
  const { title, coverImage, date, author, slug, categories } = props

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostCategories categories={categories} className='justify-center md:justify-start' />
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar bio={author.bio} name={author.name} slug={author.slug} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar bio={author.bio} name={author.name} slug={author.slug} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
