import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorAvatar(props: Author) {
  const { name, picture, slug } = props
  return (
    <Link href={`/autor/${slug}`} className="flex items-center hover:cursor-pointer">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={picture.alt ?? name}
        />
      </div>
      <div className="text-xl font-bold underline decoration-neon">{name}</div>
    </Link>
  )
}
