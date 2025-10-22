"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container, Group, Burger, Paper, Transition } from "@mantine/core";

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // shrink after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Who?", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-cyan-50 transition-all duration-300`}
    >
      <Container
        size="lg"
        className={`flex items-center justify-between transition-all duration-300 
          ${scrolled ? "py-4" : "py-12"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 tracking-tight font-mono ml-4"
        >
          <span className="text-blue-600 font-extrabold">jl</span>_delacruz
        </Link>

        <div className="flex items-center">
          {/* Desktop Nav */}
          <Group gap="lg" visibleFrom="sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`mr-3 relative font-semibold font-mono text-gray-800 hover:text-blue-500 transition-colors
                  ${isActive ? "text-blue-600 after:w-full" : "after:w-0"}
                  after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-blue-500 after:transition-all
                `}
                >
                  {item.name}
                </Link>
              );
            })}
          </Group>

          {/* Mobile Burger */}
          <div className="mr-4">
            <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
          </div>

          <Link
            href="/contact"
            className="hidden bg-lime-200 rounded-xl sm:flex items-center justify-center font-semibold font-mono text-gray-800 hover:text-blue-500 transition-colors"
            aria-label="Contact"
          >
            {/* Show icon only on small-medium screens */}
            <span className="sm:block md:hidden px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            {/* Show text on larger screens */}
            <span className="hidden md:block px-4 py-1">
              Contact
            </span>
          </Link>
        </div>
      </Container>

      {/* Mobile Nav Drawer */}
      <Transition
        mounted={opened}
        transition="pop-top-right"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Paper
            withBorder
            shadow="md"
            radius="md"
            style={styles}
            className="sm:hidden absolute top-full left-0 w-full bg-cyan-50"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 font-medium text-gray-800 hover:bg-blue-100 transition"
                onClick={() => setOpened(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-3 font-medium text-gray-800 hover:bg-blue-100 transition"
              onClick={() => setOpened(false)}
            >
              Contact
            </Link>
          </Paper>
        )}
      </Transition>
    </nav>
  );
}
