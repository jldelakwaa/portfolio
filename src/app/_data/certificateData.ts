// TypeScript interface for certificate data
export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    category: string;
    credentialId?: string;
    credentialUrl?: string;
    pdfUrl?: string; // Path to certificate PDF file
    skills?: string[];
    description?: string;
}

export const certificateData: Certificate[] = [
    {
        id: 1,
        title: 'React Foundations for Next.js',
        issuer: 'Vercel',
        date: 'October 2025',
        category: 'Web Development',
        credentialUrl: 'https://nextjs.org/learn/certificate?course=react-foundations&user=108057&certId=react-foundations-108057-1761550766259',
        pdfUrl: '/certificates/webdev/react-foundations-certificate.pdf',
        skills: ['React', 'Next.js'],
        description: 'Foundational knowledge of React and Next.js development.'
    },
    {
        id: 2,
        title: 'Next.js Pages Router Fundamentals',
        issuer: 'Vercel',
        date: 'October 2025',
        category: 'Web Development',
        credentialUrl: 'https://nextjs.org/learn/certificate?course=pages-router&user=108057&certId=pages-router-108057-1761551600509',
        pdfUrl: '/certificates/webdev/pages-router-certificate.pdf',
        skills: ['React', 'Next.js', 'Pages Router'],
        description: 'Next.js Pages Router with hierarchical and dynamic routing.'
    },
    {
        id: 3,
        title: 'Next.js App Router Fundamentals',
        issuer: 'Vercel',
        date: 'October 2025',
        category: 'Web Development',
        credentialUrl: 'https://nextjs.org/learn/certificate?course=app-router&user=108057&certId=app-router-108057-1761551600509',
        pdfUrl: '/certificates/webdev/dashboard-app-certificate.pdf',
        skills: ['React', 'Next.js', 'App Router'],
        description: 'Next.js App Router and dynamic routing fundamentals.'
    },
    {
        id: 4,
        title: 'JavaScript Essentials 1',
        issuer: 'Cisco Networking Academy',
        date: 'June 2024',
        category: 'Web Development',
        credentialUrl: 'https://www.credly.com/go/veLIV69Y',
        pdfUrl: '/certificates/webdev/JavaScript_Essentials_1_Badge20240618-8-dw72q4.pdf',
        skills: ['JavaScript', 'Programming Basics'],
        description: 'JavaScript fundamentals including variables, control structures, and functions.'
    },
    {
        id: 5,
        title: 'Computer Hardware Basics',
        issuer: 'Cisco Networking Academy',
        date: 'April 2024',
        category: 'Hardware & Systems',
        credentialUrl: 'https://www.credly.com/badges/1c66089e-50a4-4893-9fff-267cbab536b9/public_url',
        pdfUrl: '/certificates/hardware-systems/Computer_Hardware_Basics_Badge20240618-7-qylxi0.pdf',
        skills: ['Computer Hardware', 'Basic Troubleshooting'],
        description: 'Computer hardware components, functions, and basic troubleshooting.'
    },
    {
        id: 6,
        title: 'Operating Systems Basics',
        issuer: 'Cisco Networking Academy',
        date: 'June 2024',
        category: 'Hardware & Systems',
        credentialUrl: 'https://www.credly.com/badges/4d6b4584-3dd0-4dfa-89f8-e57d7986b1fe/public_url',
        pdfUrl: '/certificates/hardware-systems/Operating_Systems_Basics_Badge20240624-6-isjguf.pdf',
        skills: ['Operating Systems', 'Basic Troubleshooting', 'Linux', 'Windows', 'macOS'],
        description: 'Operating systems installation, configuration, and troubleshooting.'
    },
    {
        id: 7,
        title: 'NDG Linux Unhatched',
        issuer: 'Cisco Networking Academy',
        date: 'December 2024',
        category: 'Hardware & Systems',
        credentialUrl: '',
        pdfUrl: '/certificates/hardware-systems/NDG Linux Unhatched-certificate.pdf',
        skills: ['Operating Systems', 'Basic Troubleshooting', 'Linux'],
        description: 'Foundational knowledge of Linux operating systems.'
    },

    {
        id: 8,
        title: 'Networking Basics',
        issuer: 'Cisco Networking Academy',
        date: 'April 2024',
        category: 'Networks',
        credentialUrl: 'https://www.credly.com/badges/ed8c0bcb-01be-4df7-ac3a-0d3215a2472e/public_url',
        pdfUrl: '/certificates/networks/Networking_Basics_Badge20240618-7-1i3mes.pdf',
        skills: ["IPv4 Addresses", "Network Media", "Application Layer Services", "Protocols Standards", "Network Types", "Wireless Access"],
        description: 'Foundational networking concepts and protocols.'
    },
    {
        id: 9,
        title: 'Networking Devices and Initial Configuration',
        issuer: 'Cisco Networking Academy',
        date: 'April 2024',
        category: 'Networks',
        credentialUrl: 'https://www.credly.com/badges/0d834d7c-5932-437d-8705-92db8d3e13cd/public_url',
        pdfUrl: '/certificates/networks/Networking_Devices_and_Initial_Configuration_Badge20240618-7-vzp4vk.pdf',
        skills: ["Cisco", "IOS", "DHCP", "Transport Layer Protocols", "Binary Systems", "Cisco Devices", "Virtualization and Cloud Services", "DNS", "IPv4 Subnetting", "Network Layer Protocols", "Hierarchical Network Design", "ARP", "Ethernet Operates"],
        description: 'Cisco devices configuration and network protocols.'
    },
    {
        id: 10,
        title: 'Network Addressing and Basic Troubleshooting',
        issuer: 'Cisco Networking Academy',
        date: 'June 2024',
        category: 'Networks',
        credentialUrl: 'https://www.credly.com/badges/9f16e705-bff5-4b3a-bebf-e0f2e872a54a/public_url',
        pdfUrl: '/certificates/networks/Network_Addressing_and_Basic_Troubleshooting_Badge20240618-7-xir77x.pdf',
        skills: ["Cisco Routers", "Copper and Fiber cabling", "Troubleshooting", "Cisco Switches", "IPv6 Addressing", "Network Troubleshooting"],
        description: 'Network addressing, cabling, and troubleshooting techniques.'
    },
    {
        id: 11,
        title: 'Network Support and Security',
        issuer: 'Cisco Networking Academy',
        date: 'August 2024',
        category: 'Networks',
        credentialUrl: 'https://www.credly.com/badges/2ef1cc29-991d-4f92-a857-14f7f88ec7ec/public_url',
        pdfUrl: '/certificates/networks/Network_Support_and_Security.pdf',
        skills: ['Documentation', 'Support', 'User support', 'Endpoint Devices', 'Help Desk', 'Network Troubleshooting'],
        description: 'Network support, security, and help desk operations.'
    },
    {
        id: 12,
        title: 'Network Technician Career Path',
        issuer: 'Cisco Networking Academy',
        date: 'August 2024',
        category: 'Networks',
        credentialUrl: 'https://www.credly.com/badges/d6b3f1c3-2aed-439e-af6b-c1faae593853/public_url',
        pdfUrl: '/certificates/networks/Network_Technician_Career_Path.pdf',
        skills: ['Networking Concepts', 'Network Devices', 'Basic Troubleshooting', 'Career Guidance'],
        description: 'Comprehensive network technician career training.'
    },
    {
        id: 13,
        title: 'Introduction to Packet Tracer',
        issuer: 'Cisco Networking Academy',
        date: 'February 2024',
        category: 'Networks',
        credentialUrl: 'https://www.credly.com/badges/b0d5b8e3-0a46-4723-9857-39e64dfcf158/public_url',
        pdfUrl: '/certificates/networks/Introduction_to_Packet_Tracer.pdf',
        skills: ['Packet Tracer', 'Network Simulation', 'Basic Networking', 'Cisco devices'],
        description: 'Network simulation using Cisco Packet Tracer.'
    },

    {
        id: 14,
        title: 'Foundations of Cybersecurity',
        issuer: 'Google Coursera',
        date: 'April 2025',
        category: 'Cybersecurity',
        credentialUrl: 'https://coursera.org/verify/K63O45H6EW7L',
        pdfUrl: '/certificates/cybersec/Coursera K63O45H6EW7L Foundations of Cybersecurity.pdf',
        skills: ["Cybersecurity", "Security Information and Event Management (SIEM)", "Security Management", "Ethical Standards And Conduct", "Security Controls", "Cyber Attacks", "Information Assurance", "Cyber Risk", "Data Ethics", "Network Analysis", "Cyber Security Strategy", "Incident Response"],
        description: 'Cybersecurity fundamentals, SIEM, and incident response.'
    },
    {
        id: 15,
        title: 'Play It Safe: Manage Security Risks',
        issuer: 'Google Coursera',
        date: 'April 2025',
        category: 'Cybersecurity',
        credentialUrl: 'https://coursera.org/verify/ZN30QYH8X8V1',
        pdfUrl: '/certificates/cybersec/Coursera ZN30QYH8X8V1 Play It Safe_ Manage Security Risks.pdf',
        skills: ["Security Information and Event Management (SIEM)", "Compliance Auditing", "Enterprise Security", "Threat Detection", "Incident Response", "Risk Analysis", "Threat Management", "Risk Management", "Auditing", "Vulnerability Management", "Open Web Application Security Project (OWASP)", "Cybersecurity", "Security Controls", "Information Systems Security", "Information Assurance"],
        description: 'Security risk management, threat detection, and compliance auditing.'
    },
    {
        id: 16,
        title: 'Connect and Protect: Networks and Network Security',
        issuer: 'Google Coursera',
        date: 'April 2025',
        category: 'Cybersecurity',
        credentialUrl: 'https://coursera.org/verify/XJ4WCM0RAPFZ',
        pdfUrl: '/certificates/cybersec/Coursera XJ4WCM0RAPFZ Connect and Protect_ Networks and Network Security.pdf',
        skills: ["Network Security", "Virtual Private Networks (VPN)", "Computer Networking", "Vulnerability Assessments", "Hardening", "Firewall", "Network Architecture", "Network Protocols", "TCP/IP", "Network Infrastructure", "Cloud Security", "Cybersecurity", "Cloud Computing", "Intrusion Detection and Prevention", "Encryption"],
        description: 'Network security, VPNs, firewalls, and intrusion prevention.'
    },
    {
        id: 17,
        title: 'Tools of the Trade: Linux and SQL',
        issuer: 'Google Coursera',
        date: 'April 2025',
        category: 'Cybersecurity',
        credentialUrl: 'https://coursera.org/verify/OS4Q0FV0QKDZ',
        pdfUrl: '/certificates/cybersec/Coursera OS4Q0FV0QKDZ Tools of the Trade_ Linux and SQL.pdf',
        skills: ["Linux Commands", "Authorization (Computing)", "Authentications", "Linux Operating Systems", "Relational Databases", "SQL", "File Systems", "Unix", "User Accounts", "Bash (Scripting Language)", "Command-Line Interface", "Database Management"],
        description: 'Linux commands, SQL, and database management for security.'
    },
    {
        id: 18,
        title: 'Assets, Threats, and Vulnerabilities',
        issuer: 'Google Coursera',
        date: 'October 2025',
        category: 'Cybersecurity',
        credentialUrl: 'https://coursera.org/verify/YUYN20WZSK9D',
        pdfUrl: '/certificates/cybersec/Coursera YUYN20WZSK9D Assets, Threats, and Vulnerabilities.pdf',
        skills: ["Cybersecurity", "Authentications", "Threat Modeling", "Authorization (Computing)", "Cyber Risk", "MITRE ATT&CK Framework", "Security Controls", "Security Strategy", "Data Security", "Threat Detection", "Cyber Attacks", "Malware Protection", "NIST 800-53", "Vulnerability Management", "Vulnerability Assessments", "Cryptography", "Threat Management", "Risk Management Framework", "Identity and Access Management", "Cyber Threat Intelligence"],
        description: 'Asset protection, threat analysis, and vulnerability management.'
    },
];
