const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ]
}

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-gray-200 border-t" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 text-center md:text-left">
                        <img
                            className="h-7 inline-block"
                            src="/logo_black.png"
                            alt="208Club.uy"
                        />
                        <p className="text-sm leading-6 text-gray-600">
                            Comunidad de propietarios de Peugeot 208 de Uruguay
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8 md:ml-24">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Más...</h3>
                                <ul role="list" className="mt-2 space-y-4">
                                    <li>
                                        <a href="/sobre-nosotros" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Sobre nosotros
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/funcionamiento" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Funcionamiento
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="xl:mt-0">
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribite a nuestro newsletter</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                No te pierdas de ningun post, subscribite para recibirlos por email, al igual que nuevas fechas de encuentros.
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
                                        className="flex w-full items-center justify-center rounded-md bg-[#BFDD0C] px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-[#BFDD0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                                    >
                                        Subscribirse
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex justify-between">
                    <p className="text-xs leading-5 text-gray-500">&copy; Peugeot 208 Club Uruguay {new Date().getFullYear()}</p>
                    <p className="text-xs leading-5 text-gray-500">Creado por <a className="underline decoration-[#BFDD0C] font-bold" href="https://twitter.com/leog">@leog</a></p>
                </div>
            </div>
        </footer>
    )
}
