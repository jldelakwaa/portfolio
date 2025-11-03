import { Carousel } from '@mantine/carousel';
import { Card, Text, Badge, Title } from '@mantine/core';
import Image from 'next/image';
import { educationData } from '@/app/_data/educationData';

export default function Education() {
  return (
    <div className="px-4 py-4 sm:py-8 max-w-5xl mx-auto text-center mb-4 w-full">
      <Title order={1} mb="md" className="text-2xl sm:text-3xl md:text-4xl">🎓Education</Title>
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
        slideSize={{ base: '100%', sm: '95%' }}
        slideGap={{ base: 8, sm: 12 }}
        withControls={false}
        withIndicators
      >
        {educationData.map((edu, index) => (
          <Carousel.Slide key={index}>
            <Card shadow="sm" padding="lg" radius="md" withBorder className="h-full">
              <div className="flex flex-col h-full items-center px-2 sm:px-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <edu.icon size={28} className={`text-${edu.color}-500 sm:w-8 sm:h-8`} />
                  <Badge color={edu.color} size="lg" className="text-xs sm:text-sm">
                    {edu.level}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Image width={40} height={40} src={edu.img} alt={edu.school} className="object-contain sm:w-12 sm:h-12" />
                  <Text size="xl" fw={600} className="text-base sm:text-lg md:text-xl text-center">
                    {edu.school}
                  </Text>
                </div>
                
                <Text size="sm" c="dimmed" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                  📅 {edu.year}
                </Text>
                
                <Text size="md" className="mt-auto text-xs sm:text-sm md:text-base text-center">
                  {edu.description}
                  {edu.relevant && (
                    <span className="block mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{edu.relevant}</span>
                  )}
                </Text>

                <Text size="sm" c="yellow.8" mt={4} className="text-xs sm:text-sm text-center">
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