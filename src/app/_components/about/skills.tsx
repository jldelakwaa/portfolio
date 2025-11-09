import { Title, Grid, Card, Badge } from '@mantine/core';
import SkillSets from '@/app/_data/skillsData';

// SkillCard component with hover effects and icons
function SkillCard({ skillType }: { skillType: string }) {
    const skill = SkillSets.find(s => s.type === skillType);

    if (!skill) return null;

    return (
        <Card
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
            className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-default"
        >
            <Card.Section withBorder inheritPadding py="xs">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <skill.icon size={24} className="text-lg sm:text-xl" stroke={1.5} />
                    <Title order={4} className="text-center text-md sm:text-base md:text-lg">{skill.type}</Title>
                </div>
            </Card.Section>
            <Card.Section inheritPadding py="xs" className="py-2 sm:py-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                    {skill.Skills.map((skillItem, index) => {
                        const IconComponent = skillItem.icon;
                        return (
                            <Badge
                                key={index}
                                variant="gradient"
                                size="lg"
                                className="transition-all duration-200 hover:scale-110 text-[10px] sm:text-xs flex items-center gap-1"
                            >
                                <div className="flex items-center gap-1">
                                    <IconComponent size={16} stroke={1.5} />
                                    {skillItem.name}
                                </div>

                            </Badge>
                        );
                    })}
                </div>
            </Card.Section>
        </Card>
    );
}

export default function Skills() {
    return (
        <div className="w-full max-w-5xl mx-auto px-2 py-2 sm:px-4 sm:py-4">
            <Title order={1} mb="md" className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">👨‍💻 Skills & Technologies</Title>
            <div className="my-3 sm:my-4 md:my-8">
                <Grid gutter={{ base: 'xs', sm: 'sm', md: 'md' }}>
                    {/* Row 1 - Frontend & Backend */}
                    <Grid.Col span={{ base: 12, sm: 8 }}>
                        <SkillCard skillType='Frontend' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <SkillCard skillType='Backend' />
                    </Grid.Col>

                    {/* Row 2 - Frameworks, Database, Dev Tools */}
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <SkillCard skillType='Frameworks' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <SkillCard skillType='Database' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <SkillCard skillType='Version Control' />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <SkillCard skillType='Dev Tools' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <SkillCard skillType='Environment' />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 12 }}>
                        <SkillCard skillType='Networks & System' />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <SkillCard skillType='Languages' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 8 }}>
                        <SkillCard skillType='Productivity' />
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
}