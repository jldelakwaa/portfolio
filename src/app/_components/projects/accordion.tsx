import { Group, Text, Accordion, Button, Grid, Badge, ActionIcon } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import { Project_list } from '@/app/_data/projectData';
import { IconBrandGithub } from '@tabler/icons-react';

interface AccordionLabelProps {
    label: string;
    image: string | StaticImageData;
    description: string;
    type: 'activity' | 'project';
}

function AccordionLabel({ label, image, description, type }: AccordionLabelProps) {
    return (
        <Group wrap="nowrap">
            <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <Text size="xl" c="blue">{label}</Text>
                <Text size="sm" c="dimmed" fw={400}>
                    <span className="underline">{description} | {type === 'project' ? ' Project Based' : ' Activity Based'}</span>
                </Text>
            </div>
        </Group>
    );
}

export default function MyProjects() {
    const items = Project_list.map((item) => (
        <Accordion.Item value={item.id.toString()} key={item.label}>
            <Accordion.Control aria-label={item.label} bg="#f8f9fa">
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel >
                <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <div className="flex flex-col h-full">
                            <div className="mb-4 mx-3">
                                <Text fw={600} size="lg" mb="sm">Description:</Text>
                                <Text size="sm" style={{ textAlign: 'justify', textIndent: '2rem', lineHeight: 1.6 }}>
                                    {item.content}
                                </Text>
                            </div>
                            <div className="mb-4 mx-3">
                                <Text fw={600} mb="md">Skills:</Text>
                                <Group gap="xs">
                                    {item.skills.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            variant="dot"
                                            size="md"
                                            radius="md"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </Group>
                            </div>
                            <div className="mt-auto mx-3 flex items-center gap-4">
                                {item.link && (
                                    <Button
                                        variant="gradient"
                                        component="a"
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        px={40}
                                        className="mt-auto lg:self-start hover:scale-105 transition-transform"
                                    >
                                        View {item.type === 'project' ? 'Project' : 'Activities'}
                                    </Button>
                                )}
                                {item.github && (
                                    <ActionIcon size="lg" color="white" bg={'gray'} variant="transparent" component="a" href={item.github} target="_blank" rel="noopener noreferrer">
                                        <IconBrandGithub size={20} stroke={1.5} />
                                    </ActionIcon>
                                )}
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        {item.preview && (
                            <div className="relative w-full h-84 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                                <Image
                                    src={item.preview}
                                    alt={item.label}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </Grid.Col>
                </Grid>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion
            chevronPosition="right"
            variant="contained"
            radius="md"
            style={{ maxWidth: '1080px', width: '100%' }}
            mb={20}
            className="object-contain"
        >
            {items}
        </Accordion>
    );
}