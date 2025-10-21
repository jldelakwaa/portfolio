import Link from "next/link";

export default function PrimaryButton({ text, href }: { text: string, href: string }) {
    return (
        <Link
            className="inline-block rounded-sm border px-12 py-3 text-sm font-mono font-bold
            border-indigo-600 bg-indigo-600 
            text-white hover:bg-transparent hover:text-indigo-600"
            href={href}
        >
            {text}
        </Link>
    );
}