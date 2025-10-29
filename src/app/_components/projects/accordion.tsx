import { Group, Avatar, Text, Accordion } from '@mantine/core';
import { Project_list } from '@/app/_data/projectData';

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="md" size="lg" />
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
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control aria-label={item.label}>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
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