'use client';

import GradientBackground from "@/app/_components/_common/gradient-background";
import MyProjects from "@/app/_components/projects/accordion";
import { Text, Title } from "@mantine/core";

export default function Projects() {
  return (
    <div>
      <GradientBackground fromColor="cyan-50" toColor="cyan-100" />
            
      <div className="relative flex flex-col justify-center items-center py-10 px-4">
        {/* Content */}
        <Title
          order={1} mb="md"
        >
          <span className="text-blue-500">My</span> Works
        </Title>
        <div className="max-w-2xl text-center space-y-2">
          <Text className="text-gray-500 dark:text-gray-500 italic">
            This is a collection of <span className="underline">projects</span> and <span className="underline">activities</span> that I have worked on!
          </Text>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <MyProjects />
      </div>

    </div>
  );
}
