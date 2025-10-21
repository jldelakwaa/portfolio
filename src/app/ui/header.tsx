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
    { name: "Contact", href: "/contact" },
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

        {/* Desktop Nav */}
        <Group gap="lg" visibleFrom="sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isContact = item.name === "Contact";
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`mr-3 relative font-semibold font-mono text-gray-800 hover:text-blue-500 transition-colors
                  ${isActive ? "text-blue-600 after:w-full" : "after:w-0"}
                  ${isContact ? "text-gray-600 bg-lime-200 pl-3 pr-3 rounded-lg" : "text-gray-800"} 
                  after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-blue-500 after:transition-all
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </Group>

        {/* Mobile Burger */}
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          hiddenFrom="sm"
          aria-label="Toggle navigation"
        />
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
          </Paper>
        )}
      </Transition>
    </nav>
  );
}
