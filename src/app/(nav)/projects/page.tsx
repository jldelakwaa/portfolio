'use client';

import GradientBackground from "@/app/_components/_common/gradient-background";
import MyProjects from "@/app/_components/projects/accordion";
import { Text, Title } from "@mantine/core";

export default function Projects() {
  return (
    <div className="relative min-h-[calc(100vh-12rem)]">
      <GradientBackground />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center px-4 pt-4 pb-10 sm:pb-12">
        {/* Content */}
        <Title order={1} mb="md" className="text-4xl sm:text-5xl md:text-6xl">
          <span className="text-blue-500">My</span> Works
        </Title>
        <div className="max-w-2xl text-center space-y-2 mb-5 sm:mb-6">
          <Text className="text-foreground/70 italic text-sm sm:text-base leading-relaxed">
            This is a collection of <span className="underline">projects</span> and <span className="underline">activities</span> that I have worked on!
          </Text>
        </div>
        <div className="w-full">
          <MyProjects />
        </div>
      </div>
    </div>
  );
}
