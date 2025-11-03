import { Carousel } from '@mantine/carousel';
import { Card, Text, Badge, Title } from '@mantine/core';
import Image from 'next/image';
import { educationData } from '@/app/_data/educationData';

export default function Education() {
  return (
    <div className="px-2 py-2 sm:px-4 sm:py-4 md:py-8 max-w-5xl mx-auto text-center mb-2 sm:mb-4 w-full">
      <Title order={1} mb="md" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">🎓Education</Title>
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
            <Card shadow="sm" padding="md" radius="md" withBorder className="h-full">
              <div className="flex flex-col h-full items-center px-1.5 sm:px-2 md:px-4">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                  <edu.icon size={24} className={`text-${edu.color}-500 sm:w-7 sm:h-7 md:w-8 md:h-8`} />
                  <Badge color={edu.color} size="md" className="text-[10px] sm:text-xs md:text-sm">
                    {edu.level}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <Image width={32} height={32} src={edu.img} alt={edu.school} className="object-contain sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  <Text size="xl" fw={600} className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
                    {edu.school}
                  </Text>
                </div>
                
                <Text size="sm" c="dimmed" className="mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs md:text-sm">
                  📅 {edu.year}
                </Text>
                
                <Text size="md" className="mt-auto text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight sm:leading-normal">
                  {edu.description}
                  {edu.relevant && (
                    <span className="block mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">{edu.relevant}</span>
                  )}
                </Text>

                <Text size="sm" c="yellow.8" mt={3} className="text-[10px] sm:text-xs md:text-sm text-center">
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