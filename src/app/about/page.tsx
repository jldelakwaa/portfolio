'use client';

import { Text, Title } from "@mantine/core";
import Bio from "../ui/about/bio";
import Education from "../ui/about/education";
import Image from "next/image";
import Experience from "../ui/about/experience";
import Skills from "../ui/about/skills";
import Certificates from "../ui/about/certificates";

export default function About() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center py-10 px-4">

        {/* Content */}
        <Title 
          order={1} mb="md"
        > 
          About <span className="text-blue-500">Me</span>
        </Title>
        
        <div className="max-w-2xl text-center space-y-2">
          <Text size="xl" className="text-gray-700 dark:text-gray-300">
            Welcome! 👋
          </Text>
          <Text size="lg" className="text-gray-600 dark:text-gray-400">
            My name is <span className="font-bold text-blue-600 dark:text-blue-400">John Lester Dela Cruz</span>
          </Text>
          <Text className="text-gray-500 dark:text-gray-500 italic">
            Pleased to meet you!
          </Text>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center gap-4">
        <Bio />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
      </div>
    </>
  );
}
