import { Carousel } from '@mantine/carousel';
import { Card, Text, Badge, Timeline, Title } from '@mantine/core';
import { IconSchool, IconBook, IconCertificate } from '@tabler/icons-react';
import Image from 'next/image';
import TupImage from '@/app/images/school/tup.png';
import MmscImage from '@/app/images/school/mmsc.png';
import GmathsImage from '@/app/images/school/gmaths.png';
import FvresImage from '@/app/images/school/fvres.png';

const educationData = [
{
    level: 'College',
    school: 'Technological University of the Philippines, Cavite',
    year: '2020 - 2024',
    icon: IconCertificate,
    description: 'BET - Computer Engineering Technology',
    extra: 'Graduated as Cum laude',
    relevant: 'Relevant coursework: Networks, Software Development, and Hardware Systems',
    img: TupImage,
    color: 'violet'
  },
  {
    level: 'Senior High School',
    school: 'My Messiah School of Cavite',
    year: '2018 - 2020',
    icon: IconSchool,
    description: 'STEM Track',
    extra: 'Graduated with high honors',
    img: MmscImage,
    color: 'teal'
  },
  {
    level: 'Junior High School',
    school: 'General Mariano Alvarez Technical High School',
    year: '2014 - 2018',
    icon: IconSchool,
    description: 'Academic excellence',
    extra: 'Graduated with honors',
    img: GmathsImage,
    color: 'cyan'
  },
  {
    level: 'Elementary',
    school: 'Family Village Resources Elementary School',
    year: '2008 - 2014',
    icon: IconBook,
    description: 'Foundation years',
    extra: 'Graduate with honors',
    img: FvresImage,
    color: 'blue'
  },
];

export default function Education() {
  return (
    <div className="px-4 py-8 max-w-2xl mx-auto min-w-4xl text-center">
      <Title order={2} mb="md">🎓Education</Title>
      <div>
        <Carousel
        slideSize="90%"
        slideGap={8}
        withControls={false}
        withIndicators
        styles={{
          indicator: {
            width: 12,
            height: 6,
            transition: 'width 250ms ease',
            backgroundColor: '#94a3b8',
            '&[data-active]': {
              width: 40,
              backgroundColor: '#3b82f6',
            },
          },
          indicators: {
            bottom: -24,
          },
        }}
      >
        {educationData.map((edu, index) => (
          <Carousel.Slide key={index}>
            <Card shadow="sm" padding="lg" radius="md" withBorder className="h-full">
              <div className="flex flex-col h-full items-center">
                <div className="flex items-center gap-3 mb-4">
                  <edu.icon size={32} className={`text-${edu.color}-500`} />
                  <Badge color={edu.color} size="lg">
                    {edu.level}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Image width={48} height={48} src={edu.img} alt={edu.school} className="object-contain" />
                  <Text size="xl" fw={600}>
                    {edu.school}
                  </Text>
                </div>
                
                <Text size="sm" c="dimmed" className="mb-4">
                  📅 {edu.year}
                </Text>
                
                <Text size="md" className="mt-auto">
                  {edu.description}
                  {edu.relevant && (
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{edu.relevant}</span>
                  )}
                </Text>

                <Text size="sm" c="yellow.8" mt={4}>
                  {edu.extra}
                </Text>

              </div>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
      </div>
      
    </div>
  );
}