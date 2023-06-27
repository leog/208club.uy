import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import PostCategories from './PostCategories'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-1 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="underline decoration-[#BFDD0C]">
          {title}
        </Link>
      </h3>
      <PostCategories categories={categories} />
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      {author && <Avatar slug={author.slug} bio={author.bio} name={author.name} picture={author.picture} />}
    </div>
  )
}
