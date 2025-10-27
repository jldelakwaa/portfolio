interface Skill {
    type: string;
    icon: string;
    color: string;
    Skills: string[];
}

const SkillSets: Skill[] = [
    {
        type: 'Frontend',
        icon: '💻',
        color: 'blue',
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
        type: 'Backend',
        icon: '⚙️',
        color: 'green',
        Skills:
            [
                'Node.js',
                'PHP',
                'Python',
                'Flask',
            ],
    },
    {
        type: 'Database',
        icon: '🗄️',
        color: 'orange',
        Skills:
            [
                'MySQL',
                'PostgreSQL',
            ],
    },
    {
        type: 'Frameworks',
        icon: '🚀',
        color: 'violet',
        Skills:
            [
                'Laravel',
                'Next.js',
            ],
    },
    {
        type: 'Environment',
        icon: '🌍',
        color: 'cyan',
        Skills:
            [
                'Docker',
                'WSL2',
                'XAMPP',
                'Windows 11',
            ],
    },
    {
        type: 'Version Control',
        icon: '🔀',
        color: 'indigo',
        Skills:
            [
                'Git',
                'GitHub',
                'GitLab',
            ],
    },
    {
        type: 'Dev Tools',
        icon: '🛠️',
        color: 'gray',
        Skills:
            [
                'VS Code',
                'Postman',
                'Figma',
                'MySQL Workbench',
            ],
    },
    {
        type: 'Networks & System',
        icon: '🌐',
        color: 'teal',
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
                'iMaster NCE',
            ],
    },
    {
        type: 'Productivity',
        icon: '📊',
        color: 'grape',
        Skills:
            [
                'Microsoft Office',
                'Google Workspace',
                'Appscript',
                'Autocad',
                'Canva',
                'MIT App Inventor',
            ],
    },
    {
        type: 'Languages',
        icon: '🗣️',
        color: 'pink',
        Skills:
            [
                'Filipino (Native)',
                'English (Advanced)',
                'Japanese (Learning)',
            ],
    },
];

export default SkillSets;