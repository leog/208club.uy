import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'
import LightsButton from './LightsButton'

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
          <Link href="/" className="dark:hidden block">
            <img src="/logo_black.png" className='w-60' />
          </Link>
          <Link href="/" className="hidden dark:block">
            <img src="/logo.png" className='w-60' />
          </Link>
          <div className='flex gap-3 mt-5 md:mt-0'>
            <h4
              className={`text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
            <LightsButton />
          </div>
        </header >
      )

    case 2:
      return (
        <header className='mb-10 mt-16 flex flex-col md:flex-row items-center gap-5 md:mb-12 justify-between'>
          <Link href="/" className="dark:hidden block">
            <img src="/logo_black.png" className='w-60' />
          </Link>
          <Link href="/" className="hidden dark:block">
            <img src="/logo.png" className='w-60' />
          </Link>
          <LightsButton />
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
