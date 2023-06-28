import { Post } from "lib/sanity.queries";
import Link from "next/link";

export default function PostCategories(props: Pick<Post, "categories"> & { className?: string }) {
    const { categories, className } = props
    return (
        <ul className={`mb-6 flex ${className}`}>
            {categories.map((cat, idx) =>
                <li key={idx}>
                    <Link href={`/categoria/${cat.slug}`} className="hover:underline flex items-center group italic">
                        <span className="text-neon">#</span><span>{cat.name}</span>
                    </Link>
                </li>
            )}
        </ul>
    )
}
