import { Group, Text, Accordion, Button, Grid } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import { Project_list } from '@/app/_data/projectData';

interface AccordionLabelProps {
    label: string;
    image: string | StaticImageData;
    description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
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
                <Text>{label}</Text>
                <Text size="sm" c="dimmed" fw={400}>
                    {description}
                </Text>
            </div>
        </Group>
    );
}

export default function MyProjects() {
    const items = Project_list.map((item) => (
        <Accordion.Item value={item.id.toString()} key={item.label}>
            <Accordion.Control aria-label={item.label}>
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>
                <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div className="flex flex-col h-full">
                            <Text size="sm" className="mb-4 leading-relaxed text-justify" mx={12} mb={12} >
                                {item.content}
                            </Text>
                            {item.link && (
                                <Button
                                    variant="gradient"
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto w-fit"
                                >
                                    View
                                </Button>
                            )}
                        </div>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {item.preview && (
                            <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                                <Image
                                    src={item.preview}
                                    alt={item.label}
                                    className="object-contain w-full h-auto max-h-96"
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
        >
            {items}
        </Accordion>
    );
}