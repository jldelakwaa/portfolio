'use client';

import { Text, Title } from "@mantine/core";
import Bio from "../../_components/about/bio";
import Education from "../../_components/about/education";
import Experience from "../../_components/about/experience";
import Skills from "../../_components/about/skills";
import Certificates from "../../_components/about/certificates";
import GradientBackground from "@/app/_components/_common/gradient-background";

export default function About() {
  return (
    <div className="relative min-h-[calc(100vh-12rem)]">
      <GradientBackground />
      
      <section className="relative max-w-6xl mx-auto flex flex-col items-center px-4 pt-4 pb-10 sm:pb-12">
        <div className="max-w-2xl text-center space-y-2 mb-5 sm:mb-6">
          <Title order={1} className="text-4xl sm:text-5xl md:text-6xl">
            About <span className="text-blue-500">Me</span>
          </Title>
          <Text className="text-foreground/70 italic text-sm sm:text-base leading-relaxed">
            My name is <span className="underline">John Lester Dela Cruz</span>, Nice to meet you!
          </Text>
        </div>

        <div className="w-full flex flex-col items-center gap-2 sm:gap-4 md:gap-6">
          <Bio />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
        </div>
      </section>
    </div>
  );
}
