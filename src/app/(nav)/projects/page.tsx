'use client';

import Image from "next/image";
import Navbar from "../../_components/header";
import MyProjects from "@/app/_components/projects/accordion";
import { Text, Title } from "@mantine/core";

export default function Projects() {
  return (
    <div>
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

    </div >
  );
}
