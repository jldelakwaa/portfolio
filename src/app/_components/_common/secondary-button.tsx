import Link from "next/link";

export default function SecondaryButton({ text, href }: { text: string, href: string }) {
    return (
        <Link
            className="inline-block rounded-sm border px-12 py-3 text-sm font-mono font-bold
            border-lime-200 bg-lime-200 dark:bg-lime-500/20 dark:border-lime-500/40
            text-foreground/80 hover:bg-transparent hover:border-lime-600 hover:text-lime-600"
            href={href}
        >
            {text}
        </Link>
    );
}
