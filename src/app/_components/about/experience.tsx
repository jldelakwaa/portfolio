import { Card, Text, Badge, Title, Group, Stack, Divider } from '@mantine/core';
import { IconBriefcase, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';
import { experienceData } from '@/app/_data/experienceData';

export default function Experience() {
    // Show the latest experience by default (index 0, which is most recent)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedExp = experienceData[selectedIndex];

    return (
        <div className="px-4 py-4 sm:py-8 max-w-5xl mx-auto w-full">
            <Title order={1} mb="xl" className="text-center text-2xl sm:text-3xl md:text-4xl">💼 Work Experience</Title>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                    {/* Left side - Period Navigation */}
                    <div className="md:sticky md:top-24 md:self-start">
                        <Stack gap="md" className="gap-2 sm:gap-4">
                            {experienceData.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`cursor-pointer transition-all duration-200 text-left md:text-right md:pr-4 p-2 sm:p-3 rounded-lg select-none
                                        ${selectedIndex === index 
                                            ? 'bg-blue-500 ' 
                                            : 'hover:bg-blue-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <Group>
                                        <div className="flex items-center gap-2 md:justify-end whitespace-nowrap">
                                        {selectedIndex === index && (
                                            <IconCalendar size={16} className="text-white flex-shrink-0" />
                                        )}
                                        <Text 
                                            size="sm" 
                                            fw={selectedIndex === index ? 700 : 500} 
                                            c={selectedIndex === index ? "white" : "dimmed"}
                                            className="text-xs sm:text-sm"
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
                        padding="lg" 
                        radius="md" 
                        withBorder 
                        className="hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-right-5 p-4 sm:p-6"
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <Group justify="space-between" wrap="wrap" className="mb-2">
                                <div>
                                    <Text size="xl" fw={700} className="mb-1 text-lg sm:text-xl">
                                        {selectedExp.position}
                                    </Text>
                                    <Group gap="xs">
                                        <IconBriefcase size={18} className="text-gray-600 flex-shrink-0" />
                                        <Text size="lg" fw={500} c="blue" className="text-base sm:text-lg">
                                            {selectedExp.company}
                                        </Text>
                                    </Group>
                                </div>
                            </Group>

                            <Group>
                                <Text size="sm" c="dimmed" className="text-xs sm:text-sm">
                                    {selectedExp.type}
                                </Text>
                            </Group>

                            <Group gap="xs" className="mt-2">
                                <IconMapPin size={16} className="text-gray-500 flex-shrink-0" />
                                <Text size="sm" c="dimmed" className="text-xs sm:text-sm">
                                    {selectedExp.location}
                                </Text>
                            </Group>
                        </div>

                        <Divider className="my-3" />

                        {/* Description */}
                        <Text size="sm" className="mb-4 text-xs sm:text-sm">
                            {selectedExp.description}
                        </Text>

                        {/* Achievements */}
                        {selectedExp.achievements && selectedExp.achievements.length > 0 && (
                            <div className="mt-4">
                                <Text size="sm" mb="xs" fw={600} className="text-xs sm:text-sm">Key Achievements:</Text>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    {selectedExp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        {selectedExp.technologies && selectedExp.technologies.length > 0 && (
                            <div className="mt-4">
                                <Text size="sm" mb="xs" fw={600} className="text-xs sm:text-sm">Technologies:</Text>
                                <Group gap="xs">
                                    {selectedExp.technologies.map((tech, i) => (
                                        <Badge key={i} size="sm" variant="filled" color="blue.5" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </Group>
                            </div>
                        )}

                        {/* Skills */}
                        {selectedExp.Skills && selectedExp.Skills.length > 0 && (
                            <div className="mt-4">
                                <Text size="sm" mb="xs" fw={600} className="text-xs sm:text-sm">Skills:</Text>
                                <Group gap="xs">
                                    {selectedExp.Skills.map((skill, i) => (
                                        <Badge key={i} size="sm" variant="filled" color="green.5" className="text-xs">
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