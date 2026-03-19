'use client';

import { ActionIcon, Container, Group } from '@mantine/core';
import { IconBrandFacebook, IconBrandGithub, IconMail } from '@tabler/icons-react';
import Link from 'next/dist/client/link';
import { usePathname } from 'next/navigation';


export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/contact') {
        return null;
    }

    return (
        <footer className="bg-cyan-100/90 py-10 transition-colors">
            <Container
                size="lg"
                className="flex items-center justify-between py-3 font-bold font-mono"
            >
                <p className="text-foreground/70">
                    &copy; {new Date().getFullYear()} <span className="text-indigo-600">John Lester</span> · Dev | Netwk
                </p>

                <Group gap={'lg'} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="white" bg={'lime.3'} variant="subtle" component={Link} href="/contact">
                        <IconMail size={20} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="white" bg={'blue'} variant="subtle" component="a" href='https://www.facebook.com/jldelakwaah/' target='_blank'>
                        <IconBrandFacebook size={20} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" color="white" bg={'gray'} variant="subtle" component="a" href='https://github.com/jldelakwaa' target='_blank'>
                        <IconBrandGithub size={20} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}
