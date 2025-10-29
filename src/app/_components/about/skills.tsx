import { Title, Grid, Card, Badge, Text } from '@mantine/core';
import SkillSets from '@/app/_data/skillsData';

// SkillCard component with hover effects and icons
function SkillCard({ skillType }: { skillType: string }) {
    const skill = SkillSets.find(s => s.type === skillType);
    
    if (!skill) return null;

    return (
        <Card 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            withBorder 
            className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-default"
        >
            <Card.Section withBorder inheritPadding py="xs">
                <div className="flex items-center justify-center gap-2">
                    <Text size="xl">{skill.icon}</Text>
                    <Title order={4} className="text-center">{skill.type}</Title>
                </div>
            </Card.Section>
            <Card.Section inheritPadding py="sm">
                <div className="flex flex-wrap gap-2 justify-center">
                    {skill.Skills.map((skillName, index) => (
                        <Badge 
                            key={index} 
                            variant="gradient" 
                            size="md"
                            className="transition-all duration-200 hover:scale-110"
                        >
                            {skillName}
                        </Badge>
                    ))}
                </div>
            </Card.Section>
        </Card>
    );
}

export default function Skills() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <Title order={1} mb="xl" className="text-center">👨‍💻 Skills & Technologies</Title>
            <div className="my-8">
                <Grid gutter="md">
                    {/* Row 1 - Frontend & Backend */}
                    <Grid.Col span={{ base: 12, xs: 8 }}>
                        <SkillCard skillType='Frontend' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 4 }}>
                        <SkillCard skillType='Backend' />
                    </Grid.Col>

                    {/* Row 2 - Frameworks, Database, Dev Tools */}
                    <Grid.Col span={{ base: 12, xs: 4 }}>
                        <SkillCard skillType='Frameworks' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 4 }}>
                        <SkillCard skillType='Database' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 4 }}>
                        <SkillCard skillType='Version Control' />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, xs: 6 }}>
                        <SkillCard skillType='Dev Tools' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 6 }}>
                        <SkillCard skillType='Environment' />
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, xs: 12 }}>
                        <SkillCard skillType='Networks & System' />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, xs: 4 }}>
                        <SkillCard skillType='Languages' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, xs: 8 }}>
                        <SkillCard skillType='Productivity' />
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
}