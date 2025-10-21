import Link from "next/link";

export default function SecondaryButton({ text, href }: { text: string, href: string }) {
    return (
        <Link
            className="inline-block rounded-sm border px-12 py-3 text-sm font-mono font-bold
            border-lime-200 bg-lime-200
            text-gray-600 hover:bg-transparent hover:border-lime-600 hover:text-lime-600"
            href={href}
        >
            {text}
        </Link>
    );
}