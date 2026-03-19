'use client';

import Info from "../../_components/contact/Info";
import Form from "../../_components/contact/form";
import GradientBackground from "@/app/_components/_common/gradient-background";
import { ActionIcon, Text, Title } from "@mantine/core";
import { IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react';

export default function Contact() {
  return (
    <div className="relative min-h-[calc(100vh-12rem)]">
      <GradientBackground />

      <section className="relative max-w-6xl mx-auto flex flex-col items-center px-4 pt-4 pb-10 sm:pb-12">
        <div className="max-w-2xl text-center space-y-2 mb-5 sm:mb-6">
          <Title order={1} className="text-4xl sm:text-5xl md:text-6xl">
            Contact <span className="text-blue-500">Me</span>
          </Title>
          <Text className="text-foreground/70 italic text-sm sm:text-base leading-relaxed">
            Open for collaboration, project work, and opportunities.
          </Text>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="w-full px-1 sm:px-2 lg:pr-8 mt-8">
            <Text fw={700} className="text-2xl sm:text-3xl mb-4">
              Contact Details
            </Text>

            <Text className="text-foreground/65 text-sm sm:text-base leading-relaxed mb-4">
              Best way to reach me is by email. I usually reply within 24 hours.
            </Text>

            <Info />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="rounded-lg border border-cyan-200/80 bg-white/60 px-3 py-2">
                <p className="text-[11px] uppercase tracking-wide text-foreground/55">Availability</p>
                <p className="text-sm font-semibold text-foreground/85">Open to collaboration</p>
              </div>
              <div className="rounded-lg border border-cyan-200/80 bg-white/60 px-3 py-2">
                <p className="text-[11px] uppercase tracking-wide text-foreground/55">Timezone</p>
                <p className="text-sm font-semibold text-foreground/85">GMT+8 (Manila)</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <ActionIcon size="lg" color="white" bg={'blue'} variant="filled" radius="md" component="a" href='https://www.facebook.com/jldelakwaah/' target='_blank' aria-label="Facebook profile">
                <IconBrandFacebook size={20} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="white" bg={'gray'} variant="filled" radius="md" component="a" href='https://github.com/jldelakwaa' target='_blank' aria-label="GitHub profile">
                <IconBrandGithub size={20} stroke={1.5} />
              </ActionIcon>
            </div>
          </div>

          <div className="w-full">
            <Form />
          </div>
        </div>

        <footer className="w-full mt-10 pt-5 text-center">
          <p className="text-sm text-foreground/65 italic">
            Thanks for stopping by.
          </p>
          <p className="text-sm text-foreground/70 mt-1">
            &copy; {new Date().getFullYear()} <span className="text-indigo-600">John Lester</span> · Dev | Netwk
          </p>
        </footer>
      </section>
    </div>
  );
}
