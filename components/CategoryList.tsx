import { Category } from "lib/sanity.queries";
import Link from "next/link";

export default function CategoryList({ categories }: { categories: Category[] }) {
    return (
        <section>
            <h3 className="text-3xl mb-4">Navega por categoría:</h3>
            <ul className="flex flex-col gap-2 mb-16 list-disc list-inside">
                {categories.map((cat, idx) => (
                    <Link href={`/categoria/${cat.slug}`} key={idx}>
                        <li className="bg-gray-50 rounded-tr-3xl rounded-bl-3xl">
                            <span className="text-2xl underline decoration-neon">{cat.name}</span>
                            <p>{cat.description}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}