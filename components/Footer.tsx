import { Category } from 'lib/sanity.queries'
import Link from 'next/link'
import { MdRssFeed, MdWhatsapp } from 'react-icons/md'

import SubscribeForm from './SubscribeForm'

const navigation = {
  other: [
    { name: 'Funcionamiento', href: '/funcionamiento' },
    { name: 'Sponsors', href: '/sponsors' },
  ],
}

export default function Footer({
  categories = [],
}: {
  categories: Category[]
}) {
  return (
    <footer
      className="bg-white dark:bg-gray-900"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32 xl:px-0">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:col-span-2">
            <div className="space-y-2">
              <Link href="/" className="!mt-1 block dark:hidden">
                <img src="/logo_black.png" className="h-7" />
              </Link>
              <Link href="/" className="!mt-1 hidden dark:block">
                <img src="/logo.png" className="h-7" />
              </Link>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                Comunidad de propietarios de Peugeot 208 de Uruguay
              </p>
              <div className="flex flex-col gap-2">
                <svg width="0" height="0">
                  <linearGradient
                    xmlns="http://www.w3.org/2000/svg"
                    id="whatsapp-gradient"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                  </linearGradient>
                </svg>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://chat.whatsapp.com/FS3TEQ6YCiyGG2DEt3qUh5"
                  className="flex items-center gap-1 text-sm text-[#23b33a]"
                >
                  Unite al grupo{' '}
                  <MdWhatsapp
                    style={{ fill: 'url(#whatsapp-gradient)' }}
                    size="24px"
                  />
                </Link>
                <Link
                  href="/rss.xml"
                  rel="noreferrer"
                  target="_blank"
                  title="RSS"
                >
                  <MdRssFeed color="#ee802f" size="24px" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Categorias
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {categories.map((item) => (
                    <li key={item.name}>
                      <a
                        href={`/categoria/${item.slug}`}
                        title={item.description}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Más...
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.other.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Subscribite a nuestro newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              No te pierdas de ningun post, subscribite para recibirlos por
              email, al igual que nuevas fechas de encuentros y fotos.
            </p>
            <SubscribeForm />
          </div>
        </div>
        <div className="mt-16 flex justify-between border-t border-gray-900/10 pt-8 dark:border-gray-500 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; Peugeot 208 Club Uruguay {new Date().getFullYear()}
          </p>
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            Creado por{' '}
            <a
              className="font-bold underline decoration-neon"
              href="https://twitter.com/leog"
            >
              @leog
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

/*
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-4 mt-2">
                        <Link href="/" className="dark:hidden block">
                            <img src="/logo_black.png" className='h-7' />
                        </Link>
                        <Link href="/" className="hidden dark:block">
                            <img src="/logo.png" className='h-7' />
                        </Link>
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                            Comunidad de propietarios de Peugeot 208 de Uruguay
                        </p>
                        <Link
                            href="/rss.xml"
                            rel="noreferrer"
                            target="_blank"
                            className="inline-block"
                            title="RSS"
                        >
                            <MdRssFeed color="#ee802f" size="24px" />
                        </Link>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Categorias</h3>
                                <ul role="list" className="mt-2 space-y-4">
                                    {categories.map((item) => (
                                        <li key={item.name}>
                                            <a href={`/categoria/${item.slug}`} title={item.description} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Más...</h3>
                                <ul role="list" className="mt-2 space-y-4">
                                    {navigation.other.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Subscribite a nuestro newsletter</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            No te pierdas de ningun post, subscribite para recibirlos por email, al igual que nuevas fechas de encuentros y fotos.
                        </p>
                        <form className="mt-6 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                placeholder="Ingresa tu email"
                            />
                            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-neon px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-neon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                                >
                                    Subscribirse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 dark:border-gray-500 pt-8 sm:mt-20 lg:mt-24 flex justify-between">
                    <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">&copy; Peugeot 208 Club Uruguay {new Date().getFullYear()}</p>
                    <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">Creado por <a className="underline decoration-neon font-bold" href="https://twitter.com/leog">@leog</a></p>
                </div>
            </div>
        </footer>
    )
}
*/
