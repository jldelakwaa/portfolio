'use client';

import { Text, Title } from "@mantine/core";
import Bio from "../../_components/about/bio";
import Education from "../../_components/about/education";
import Experience from "../../_components/about/experience";
import Skills from "../../_components/about/skills";
import Certificates from "../../_components/about/certificates";

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
        
        <div className="max-w-5xl text-center space-y-2">
          <Text className="text-gray-500 dark:text-gray-500 italic">
            My name is <span className="underline">John Lester Dela Cruz</span>, Nice to meet you!
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
