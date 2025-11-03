import { Carousel } from '@mantine/carousel';
import { Card, Text, Badge, Timeline, Title } from '@mantine/core';
import Image from 'next/image';
import { educationData } from '@/app/_data/educationData';

export default function Education() {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto text-center mb-4">
      <Title order={1} mb="md">🎓Education</Title>
      <div>
        <style jsx global>{`
          .mantine-Carousel-indicator {
            width: 12px;
            height: 6px;
            transition: width 250ms ease;
            background-color: #94a3b8;
          }

          .mantine-Carousel-indicator[data-active] {
            width: 40px;
          }

          .mantine-Carousel-indicators {
            bottom: -24px;
          }
        `}</style>
        <Carousel
        slideSize="95%"
        slideGap={8}
        withControls={false}
        withIndicators
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