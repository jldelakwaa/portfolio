"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    return (
        <nav className="w-full bg-cyan-50 text-gray-900 fixed top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">

                {/* Logo/Name */}
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    jl_delacruz
                </Link>

                {/* Desktop Nav */}
                <div className="hidden sm:flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-800 hover:text-blue-500 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}

            <div
                className={`sm:hidden bg-white border-t border-gray-200 shadow-sm 
                    transition-all duration-300 overflow-hidden 
                    ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

        </nav>
    );
}