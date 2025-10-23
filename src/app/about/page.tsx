'use client';

import { Text, Title } from "@mantine/core";
import Bio from "../ui/about/bio";

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
      </div>
    </>
  );
}
