import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <Link href="/" className="hover:underline">
            <img src="/logo_black.png" className='w-60' />
          </Link>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </header >
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter flex md:justify-start justify-center">
            <Link href="/" className="hover:underline">
              <img src="/logo_black.png" className='w-60' />
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
