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
      <div className="relative flex flex-col justify-center items-center py-6 sm:py-10 px-4">
        <GradientBackground fromColor="cyan-50" toColor="cyan-100" />

        {/* Content */}
        <Title
          order={1}
          mb="md"
          mt="md"
          className="text-2xl sm:text-3xl md:text-4xl"
        >
          About <span className="text-blue-500">Me</span>
        </Title>

        <div className="max-w-5xl text-center space-y-2">
          <Text className="text-gray-500 dark:text-gray-500 italic text-sm sm:text-base">
            My name is <span className="underline">John Lester Dela Cruz</span>, Nice to meet you!
          </Text>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6">
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
