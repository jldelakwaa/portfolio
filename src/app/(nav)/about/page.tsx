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
    <>
      <div className="relative flex flex-col justify-center items-center py-4 sm:py-6 md:py-10 px-2 sm:px-4">
        <GradientBackground fromColor="cyan-50" toColor="cyan-100" />

        {/* Content */}
        <Title
          order={1}
          mb="xs"
          mt="xs"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          About <span className="text-blue-500">Me</span>
        </Title>

        <div className="max-w-5xl text-center space-y-1 mb-2 sm:mb-4">
          <Text className="text-gray-500 dark:text-gray-500 italic text-xs sm:text-sm md:text-base">
            My name is <span className="underline">John Lester Dela Cruz</span>, Nice to meet you!
          </Text>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 w-full">
          <Bio />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
        </div>
      </div>
    </>
  );
}
