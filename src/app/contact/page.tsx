'use client';

import Image from "next/image";
import Navbar from "../ui/header";
import Info from "../ui/contact/Info";
import Form from "../ui/contact/form";
import HideFooter from "../ui/hide-footer";
import { Text, Title } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconMail, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react';
import Link from "next/dist/client/link";
export default function Contact() {
  return (
    <div className="bg-cyan-100 py-8 px-8 min-h-[calc(100vh-8rem)] mt-30">
      <HideFooter />
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-center justify-center h-full">
        <div className="lg:w-1/2">
          <Title>
            Contact <span className="text-blue-500">Me</span>
          </Title>
          <Text mt="sm" mb={30}>
            Happy to work with you!
          </Text>
          <Info />
          <div className="flex gap-4 mt-6 ml-5">
            <ActionIcon size="lg" color="Blue" variant="subtle" component="a" href='https://www.facebook.com/jldelakwaah/' target='_blank'>
              <IconBrandFacebook size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="Black" variant="subtle" component="a" href='https://github.com/jldelakwaa' target='_blank'>
              <IconBrandGithub size={20} stroke={1.5} />
            </ActionIcon>
          </div>
        </div>

        <div className="w-1/3">
          <Form />
        </div>
      </div>

      <div className="flex items-center justify-center mt-18">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} <span className="text-indigo-600">John Lester</span> · Dev | Netwk
        </p>
      </div>
    </div>
  );
}
