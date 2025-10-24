import { Title } from "@mantine/core";
import TupImage from '@/app/images/school/tup.png';

const SkillSets = [
    {
        id: 1,
        type: 'Frontend',
        Skills:
            [
                'JavaScript',
                'HTML',
                'CSS',
                'TypeScript',
                'React',
                'Tailwind CSS',
                'Mantine UI',
                'Material UI',
            ],
    },
    {
        id: 2,
        type: 'Backend',
        Skills:
            [
                'Node.js',
                'PHP',
                'Python',
                'Flask',
            ],
    },
    {
        id: 3,
        type: 'Database',
        Skills:
            [
                'MySQL',
                'PostgreSQL',
            ],
    },
    {
        id: 4,
        type: 'Full-Stack Frameworks',
        Skills:
            [
                'Laravel',
                'Next.js',
            ],
    },
    {
        id: 5,
        type: 'Version Control & Tools',
        Skills:
            [
                'Docker',
                'WSL2',
                'XAMPP',
                'Git',
                'GitHub',
                'GitLab',
                'VS Code',
                'Postman',
            ],
    },
    {
        id: 6,
        type: 'Networks & System',
        Skills:
            [
                'Cisco IOS',
                'Packet Tracer',
                'Wireshark',
                'Nmap',
                'Linux',
                'Bash',
                'Windows',
                'PowerShell',
                'Fiber Optics',
                'Ethernet',
                'Wireless Network',
                'IP Subnetting',
                'iMaster Network Cloud Engine',
            ],
    },
    {
        id: 7,
        type: 'Other',
        Skills:
            [
                'Word',
                'Excel',
                'PowerPoint',
                'Google Spreadsheet',
                'Appscript',
                'Autocad',
                'MIT App Inventor',
            ],
    },
    {
        id: 8,
        type: 'Languages',
        Skills:
            [
                'Filipino (Native)',
                'English (Advanced)',
                'Japanese (Learning)',
            ],
    },

];
export default function Skills() {
    return (
        <div className="px-4 py-8 max-w-5xl mx-auto">
            <Title order={2} mb="xl" className="text-center">👨‍💻 Skills</Title>

        </div>
    );
}