import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
export default function Form () {
    return (
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            radius="md"
            styles={{ label: { fontWeight: 700 } }}
          />
          <TextInput
            label="Name"
            placeholder="Your name"
            mt="md"
            radius="md"
            styles={{ label: { fontWeight: 700 } }}
          />
          <Textarea
            required
            label="Message"
            placeholder="your message"
            minRows={4}
            mt="md"
            radius="md"
            styles={{ label: { fontWeight: 700 } }}
          />

          <Group justify="flex-end" mt="md">
            <Button radius="md">
              Send message
            </Button>
          </Group>
        </div>
    );
}