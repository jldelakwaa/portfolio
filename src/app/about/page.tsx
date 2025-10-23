'use client';

import { Text, Title } from "@mantine/core";
import Bio from "../ui/about/bio";
import Education from "../ui/about/education";
import Image from "next/image";
import Experience from "../ui/about/experience";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Title>
          About <span className="text-blue-500">Me</span>
        </Title>
        <Text mt="sm" mb={30}>
          Welcome, My name is <span className="font-semibold underline">John Lester Dela Cruz</span>. Pleased to meet you!
        </Text>

        <Bio />
        <Education />
        <Experience />
      </div>
    </>
  );
}
