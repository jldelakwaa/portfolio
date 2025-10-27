'use client';

import Image from "next/image";
import Navbar from "../../_components/header";
import Info from "../../_components/contact/Info";
import Form from "../../_components/contact/form";
import HideFooter from "../../_components/hide-footer";
import { Text, Title } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconMail, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react';
import Link from "next/dist/client/link";
export default function Contact() {
  return (
    <div className="bg-cyan-100 py-8 px-8 min-h-[calc(100vh-8rem)] mt-30">
      <HideFooter />
      <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto items-center justify-center h-full">
        <div className="lg:w-1/2">
          <Title>
            Contact <span className="text-blue-500">Me</span>
          </Title>
          <Text className="text-gray-500 dark:text-gray-500 italic" mb={20}>
            Pleased to meet you!
          </Text>
          <Info />
          <div className="flex gap-4 mt-6 ml-5">
            <ActionIcon size="lg" color="white" bg={'blue'} variant="subtle" component="a" href='https://www.facebook.com/jldelakwaah/' target='_blank'>
              <IconBrandFacebook size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="white" bg={'gray'} variant="subtle" component="a" href='https://github.com/jldelakwaa' target='_blank'>
              <IconBrandGithub size={20} stroke={1.5} />
            </ActionIcon>
          </div>
        </div>

        <div className="w-full lg:w-1/2 ">
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
