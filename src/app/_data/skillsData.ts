import { Icon } from '@tabler/icons-react';
import { 
    IconCode, 
    IconServer, 
    IconDatabase, 
    IconRocket, 
    IconWorld, 
    IconGitBranch, 
    IconTools, 
    IconNetwork, 
    IconChartBar, 
    IconLanguage,
    IconBrandJavascript,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandTypescript,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandNodejs,
    IconBrandPhp,
    IconBrandPython,
    IconBrandMysql,
    IconBrandLaravel,
    IconBrandNextjs,
    IconBrandDocker,
    IconBrandGit,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandVscode,
    IconBrandFigma,
    IconBrandUbuntu,
    IconBrandWindows,
    IconBrandGoogle,
    IconBrandOffice,
    IconFileCode,
    IconCodeCircle,
    IconApi,
    IconCloud,
    IconTerminal,
    IconRouter,
    IconWifi,
    IconServer2,
    IconDatabaseExport,
    IconChartPie,
    IconLanguageHiragana,
    IconCursorText,
    IconWorldWww,
    IconBrandAsana,
    IconApiApp,
    IconPalette,
    IconServerBolt
} from '@tabler/icons-react';

interface SkillItem {
    name: string;
    icon: Icon;
}

interface Skill {
    type: string;
    icon: Icon;
    color: string;
    Skills: SkillItem[];
}

const SkillSets: Skill[] = [
    {
        type: 'Frontend',
        icon: IconCode,
        color: 'blue',
        Skills: [
            { name: 'JavaScript', icon: IconBrandJavascript },
            { name: 'HTML', icon: IconBrandHtml5 },
            { name: 'CSS', icon: IconBrandCss3 },
            { name: 'TypeScript', icon: IconBrandTypescript },
            { name: 'React', icon: IconBrandReact },
            { name: 'Tailwind CSS', icon: IconBrandTailwind },
            { name: 'Mantine UI', icon: IconCodeCircle },
            { name: 'Material UI', icon: IconCodeCircle },
            { name: 'shadcn/ui', icon: IconCodeCircle },
        ],
    },
    {
        type: 'Backend',
        icon: IconServer,
        color: 'green',
        Skills: [
            { name: 'Node.js', icon: IconBrandNodejs },
            { name: 'PHP', icon: IconBrandPhp },
            { name: 'Python', icon: IconBrandPython },
        ],
    },
    {
        type: 'Database',
        icon: IconDatabase,
        color: 'orange',
        Skills: [
            { name: 'MySQL', icon: IconBrandMysql },
            { name: 'PostgreSQL', icon: IconDatabaseExport },
        ],
    },
    {
        type: 'Frameworks',
        icon: IconRocket,
        color: 'violet',
        Skills: [
            { name: 'Laravel', icon: IconBrandLaravel },
            { name: 'Next.js', icon: IconBrandNextjs },
            { name: 'Flask', icon: IconCodeCircle },
        ],
    },
    {
        type: 'Environment',
        icon: IconWorld,
        color: 'cyan',
        Skills: [
            { name: 'Docker', icon: IconBrandDocker },
            { name: 'WSL2', icon: IconTerminal },
            { name: 'XAMPP', icon: IconServerBolt },
            { name: 'Windows 11', icon: IconBrandWindows },
        ],
    },
    {
        type: 'Version Control',
        icon: IconGitBranch,
        color: 'indigo',
        Skills: [
            { name: 'Git', icon: IconBrandGit },
            { name: 'GitHub', icon: IconBrandGithub },
            { name: 'GitLab', icon: IconBrandGitlab },
        ],
    },
    {
        type: 'Dev Tools',
        icon: IconTools,
        color: 'gray',
        Skills: [
            { name: 'VS Code', icon: IconBrandVscode },
            { name: 'Cursor', icon: IconCursorText },
            { name: 'Postman', icon: IconApiApp },
            { name: 'Asana', icon: IconBrandAsana },
            { name: 'Figma', icon: IconBrandFigma },
            { name: 'Figjam', icon: IconBrandFigma },
            { name: 'MySQL Workbench', icon: IconDatabaseExport },
        ],
    },
    {
        type: 'Networks & System',
        icon: IconNetwork,
        color: 'teal',
        Skills: [
            { name: 'Cisco IOS', icon: IconRouter },
            { name: 'Packet Tracer', icon: IconNetwork },
            { name: 'Wireshark', icon: IconNetwork },
            { name: 'Nmap', icon: IconNetwork },
            { name: 'Linux', icon: IconBrandUbuntu },
            { name: 'Bash', icon: IconTerminal },
            { name: 'Windows', icon: IconBrandWindows },
            { name: 'PowerShell', icon: IconTerminal },
            { name: 'Fiber Optics', icon: IconRouter },
            { name: 'Ethernet', icon: IconRouter },
            { name: 'Wireless Network', icon: IconWifi },
            { name: 'IP Addressing', icon: IconServer2 },
            { name: 'IP Subnetting', icon: IconServer2 },
            { name: 'iMaster NCE', icon: IconCloud },
        ],
    },
    {
        type: 'Productivity',
        icon: IconChartBar,
        color: 'grape',
        Skills: [
            { name: 'Microsoft Office', icon: IconBrandOffice },
            { name: 'Google Workspace', icon: IconBrandGoogle },
            { name: 'Appscript', icon: IconFileCode },
            { name: 'Autocad', icon: IconTools },
            { name: 'Canva', icon: IconPalette },
            { name: 'MIT App Inventor', icon: IconCodeCircle },
        ],
    },
    {
        type: 'Languages',
        icon: IconLanguage,
        color: 'pink',
        Skills: [
            { name: 'Filipino (Native)', icon: IconLanguage },
            { name: 'English (Advanced)', icon: IconLanguage },
            { name: 'Japanese (Learning)', icon: IconLanguageHiragana },
        ],
    },
];

export default SkillSets;