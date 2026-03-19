import { StaticImageData } from 'next/image';
import TupImage from '@/../public/school/tup.png';

interface Experience {
    id: number;
    img: StaticImageData;
    position: string;
    company: string;
    location: string;
    period: string;
    startDate: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
    Skills: string[];
}

const experienceData: Experience[] = [
    {
        id: 3,
        img: TupImage,
        position: 'Kintone Developer',
        company: 'Coliconstruct Engineering Services',
        location: "20 NHA Comm'l & Ind'l Compound, Brgy. Gavino Maderan, Luzon Avenue, General Mariano Alvarez, 4117 Cavite",
        period: '2026 - Present',
        startDate: '2026',
        type: 'Part-time | Remote',
        description: 'Build and maintain kintone plugins, applications, and user interfaces. Provide remote IT support and leverage AI tools to accelerate development and automation.',
        achievements: [
            'Created Project Management System using kintone for internal use',
            'Created PH Standard HR Management System Application Integrated with LiLo API, It include Employee Information, Attendance, Calendar Visuals, and Payroll with Kintone as the backend database',
            'Delivered multiple custom kintone plugins and applications to enhance business processes',
            'Improved user experience by enhancing kintone UI components',
            'Provided remote IT support, resolving technical issues and ensuring smooth operations',
            'Leveraged AI tools to accelerate development and automate routine tasks, increasing efficiency',
        ],
        technologies:
            [
                'Kintone',
                'JavaScript',
                'HTML',
                'CSS',
                'AI (Codex, Claude, Gemini)',
                'Git',
                'Visual Studio Code',
                'Google Workspace',
                'Lilo Attendance App'
            ],
        Skills:
            [
                'Kintone Development',
                'Plugin Development',
                'UI Design',
                'Automation',
                'AI-assisted Coding',
                'Remote Collaboration',
                'Problem Solving',
                'API Integration',
            ],
    },
    {
        id: 2,
        img: TupImage,
        position: 'Jr. Software Engineer',
        company: 'Coredev Inc.',
        location: 'Cebu based | Imus, Cavite, Philippines',
        period: '2025 - Present',
        startDate: '2025',
        type: 'Full-time | Remote Hybrid',
        description: 'Develop and maintain software applications, collaborating with cross-functional teams to define, design, and ship new features. Troubleshoot and debug applications, ensuring optimal performance and user experience.',
        achievements: [
            'Regular Employee',
            'Completed a project application',
            'Handled 4 Legacy and 5 Modern Systems',
            'Migrate legacy systems to the latest modern versions',
            'Handled security vulnerabilities (Authentication, Authorization, and Accounting)',
            'Handled database queries and optimization',
        ],
        technologies:
            [
                'MySQL Workbench',
                'Postman',
                'Docker',
                'XAMPP',
                'Visual Studio Code',
                'Gitlab',
                'Asana',
                'Google Spreadsheet',
                'Viber',
                'Microsoft Teams',
            ],
        Skills:
            [
                'JavaScript',
                'HTML',
                'CSS',
                'Tailwind CSS',
                'PHP',
                'Laravel',
                'React',
                'Node.js',
                'MySQL',
                'Git',
                'Linux',
                'Windows',
            ],
    },
    {
        id: 1,
        img: TupImage,
        position: 'IT Staff | Network Operations Specialist',
        company: 'Infinity Inc. Fiber Blaze',
        location: 'Dasmariñas, Cavite, Philippines',
        period: '2024 - 2025',
        startDate: '2024',
        type: 'Full-time | On-site',
        description: 'Monitor and maintain network infrastructure to ensure optimal performance and reliability. Collaborate with cross-functional teams to troubleshoot and resolve network issues, implement security protocols, and support the deployment of new technologies.',
        achievements: [
            'Regular Employee',
            'Candidate as Team Leader',
            'Created Appscript Spreadsheet automation for report generation',
            'Successfully handled network outages and minimized downtime',
            'Improved network performance through proactive monitoring and maintenance',
            'Created Autocad pole maps for network planning and optimization',
        ],
        technologies:
            [
                'Huawei Device',
                'Fiber Optics',
                'Ethernet',
                'Wireless Network',
                'LAN', 'WAN', 'VPN', 'DNS', 'DHCP', 'NAT', 'TCP/IP', 'ipv4', 'ipv6',
                'Network Monitoring Tools',
                'Cacti',
                'iMaster NCE (Network Cloud Engine)',
                'Viber',
                'Google Spreadsheet',
            ],
        Skills: 
            [
                'Network Maintenance',
                'Network Troubleshooting',
                'Network Design',
                'Autocad',
                'Automation scripts',
                'Customer Support',
                'Linux',
                'Windows',
                'Microsoft Office',
                'Appscript',
                'IP Subnetting',
            ],
    },
];
export { experienceData };