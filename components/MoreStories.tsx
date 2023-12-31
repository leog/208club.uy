import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function MoreStories({ posts, title = true }: { posts: Post[]; title?: boolean }) {
  return (
    <section>
      {title && (<h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Más posts
      </h2>)}
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post, idx) => (
          <PostPreview
            key={idx}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            categories={post.categories}
          />
        ))}
      </div>
    </section>
  )
}
