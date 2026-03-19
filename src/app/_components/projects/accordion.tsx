import { Group, Text, Accordion, Button, Grid, Badge, ActionIcon, Tooltip } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import { Project_list } from '@/app/_data/projectData';
import { IconBrandGithub, IconPencil, IconBrandFigma } from '@tabler/icons-react';

interface AccordionLabelProps {
    label: string;
    image: string | StaticImageData;
    description: string;
    type: 'activity' | 'project';
}

function AccordionLabel({ label, image, description, type }: AccordionLabelProps) {
    return (
        <Group wrap="nowrap" className="items-start">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="space-y-1">
                <Text size="xl" c="blue" className="text-2xl sm:text-[2rem] leading-tight">{label}</Text>
                <Text size="sm" c="dimmed" fw={400} className="leading-snug">
                    {description}
                </Text>
                <Badge variant="light" color={type === 'project' ? 'blue' : 'teal'} size="sm" className="capitalize">
                    {type === 'project' ? 'Project Based' : 'Activity Based'}
                </Badge>
            </div>
        </Group>
    );
}

export default function MyProjects() {
    const items = Project_list.map((item) => (
        <Accordion.Item value={item.id.toString()} key={item.id} className="shadow-md mx-2 sm:mx-4 rounded-lg overflow-hidden border border-cyan-200/80 bg-white/70">
            <Accordion.Control 
                aria-label={item.label} 
                className="!bg-white/70 hover:!bg-white/90 transition-colors"
            >
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel className="!bg-white/85">
                <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <div className="flex flex-col h-full">
                            <div className="mb-4 mx-3">
                                <Text fw={600} size="lg" mb="sm">Description:</Text>
                                <Text size="sm" className="text-foreground/80 leading-relaxed" style={{ textAlign: 'justify' }}>
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
                                    <Tooltip label="View GitHub Repo" color="gray" withArrow>
                                        <ActionIcon size="lg" color="white" bg={'gray'} variant="transparent" component="a" href={item.github} target="_blank" rel="noopener noreferrer">
                                            <IconBrandGithub size={20} stroke={1.5} />
                                        </ActionIcon>
                                    </Tooltip>
                                )}
                                {item.figjam && (
                                    <Tooltip label="View Figjam" color="#9747ff" withArrow>
                                        <ActionIcon size="lg" color="white" bg={'#9747ff'} variant="transparent" component="a" href={item.figjam} target="_blank" rel="noopener noreferrer">
                                            <IconPencil size={20} stroke={1.5} />
                                        </ActionIcon>
                                    </Tooltip>
                                )}
                                {item.figma && (
                                    <Tooltip label="View Figma Design" color="blue" withArrow>
                                        <ActionIcon size="lg" color="white" bg={'blue'} variant="transparent" component="a" href={item.figma} target="_blank" rel="noopener noreferrer">
                                            <IconBrandFigma size={20} stroke={1.5} />
                                        </ActionIcon>
                                    </Tooltip>
                                )}
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        {item.preview && (
                            <div className="relative w-full h-72 sm:h-84 rounded-lg overflow-hidden border border-cyan-200 shadow-md hover:shadow-lg transition-shadow">
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
