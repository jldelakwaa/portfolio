import { Card, Text, Badge, Title, Group, Stack, Divider } from '@mantine/core';
import { IconBriefcase, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';
import { experienceData } from '@/app/_data/experienceData';

export default function Experience() {
    // Show the latest experience by default (index 0, which is most recent)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedExp = experienceData[selectedIndex];

    return (
        <div className="px-2 py-2 sm:px-4 sm:py-4 md:py-8 max-w-5xl mx-auto w-full">
            <Title order={1} mb="md" className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">💼 Work Experience</Title>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 sm:gap-4 md:gap-8">
                    {/* Left side - Period Navigation */}
                    <div className="md:sticky md:top-24 md:self-start">
                        <Stack gap="xs" className="gap-1.5 sm:gap-2 md:gap-4">
                            {experienceData.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`cursor-pointer transition-all duration-200 text-left md:text-right md:pr-4 p-1.5 sm:p-2 md:p-3 rounded-lg select-none
                                        ${selectedIndex === index 
                                            ? 'bg-blue-500 ' 
                                            : 'hover:bg-blue-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <Group>
                                        <div className="flex items-center gap-1.5 sm:gap-2 md:justify-end whitespace-nowrap">
                                        {selectedIndex === index && (
                                            <IconCalendar size={14} className="text-white flex-shrink-0 sm:w-4 sm:h-4" />
                                        )}
                                        <Text 
                                            size="sm" 
                                            fw={selectedIndex === index ? 700 : 500} 
                                            c={selectedIndex === index ? "white" : "dimmed"}
                                            className="text-[10px] sm:text-xs md:text-sm"
                                        >
                                            {exp.period}
                                        </Text>
                                    </div>
                                    </Group>
                                </div>
                            ))}
                        </Stack>
                    </div>

                    {/* Right side - Selected Experience Card */}
                    <Card 
                        shadow="md" 
                        padding="md" 
                        radius="md" 
                        withBorder 
                        className="hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-right-5 p-3 sm:p-4 md:p-6"
                    >
                        {/* Header */}
                        <div className="mb-3 sm:mb-4">
                            <Group justify="space-between" wrap="wrap" className="mb-1.5 sm:mb-2">
                                <div>
                                    <Text size="xl" fw={700} className="mb-1 text-base sm:text-lg md:text-xl">
                                        {selectedExp.position}
                                    </Text>
                                    <Group gap="xs">
                                        <IconBriefcase size={16} className="text-gray-600 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                                        <Text size="lg" fw={500} c="blue" className="text-sm sm:text-base md:text-lg">
                                            {selectedExp.company}
                                        </Text>
                                    </Group>
                                </div>
                            </Group>

                            <Group>
                                <Text size="sm" c="dimmed" className="text-[10px] sm:text-xs md:text-sm">
                                    {selectedExp.type}
                                </Text>
                            </Group>

                            <Group gap="xs" className="mt-1.5 sm:mt-2">
                                <IconMapPin size={14} className="text-gray-500 flex-shrink-0 sm:w-4 sm:h-4" />
                                <Text size="sm" c="dimmed" className="text-[10px] sm:text-xs md:text-sm">
                                    {selectedExp.location}
                                </Text>
                            </Group>
                        </div>

                        <Divider className="my-2 sm:my-3" />

                        {/* Description */}
                        <Text size="sm" className="mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm">
                            {selectedExp.description}
                        </Text>

                        {/* Achievements */}
                        {selectedExp.achievements && selectedExp.achievements.length > 0 && (
                            <div className="mt-3 sm:mt-4">
                                <Text size="sm" mb="xs" fw={600} className="text-xs sm:text-sm">Key Achievements:</Text>
                                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 ml-1 sm:ml-2">
                                    {selectedExp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-[10px] sm:text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-tight sm:leading-normal">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        {selectedExp.technologies && selectedExp.technologies.length > 0 && (
                            <div className="mt-3 sm:mt-4">
                                <Text size="sm" mb="xs" fw={600} className="text-xs sm:text-sm">Technologies:</Text>
                                <Group gap="xs">
                                    {selectedExp.technologies.map((tech, i) => (
                                        <Badge key={i} size="sm" variant="filled" color="blue.5" className="text-[10px] sm:text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </Group>
                            </div>
                        )}

                        {/* Skills */}
                        {selectedExp.Skills && selectedExp.Skills.length > 0 && (
                            <div className="mt-3 sm:mt-4">
                                <Text size="sm" mb="xs" fw={600} className="text-xs sm:text-sm">Skills:</Text>
                                <Group gap="xs">
                                    {selectedExp.Skills.map((skill, i) => (
                                        <Badge key={i} size="sm" variant="filled" color="green.5" className="text-[10px] sm:text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </Group>
                            </div>
                        )}

                    </Card>
                </div>
            </div>
        </div>
    );
}