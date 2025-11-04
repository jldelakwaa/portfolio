import { StaticImageData } from 'next/image';

interface Project {
    id: number;
    image: string | StaticImageData;
    label: string;
    description: string;
    content: string;
    link?: string;
    preview?: string | StaticImageData;
    type: 'activity' | 'project';
    skills: string[];
    github?: string;
}

const Project_list: Project[] = [
  {
    id: 1,
    image: '/projects/packet-tracer/packet-tracer.png',
    label: 'Packet Tracer Lab',
    description: 'Network Simulation Tool for Cisco',
    content: "Using Cisco Packet Tracer, I designed and simulated various network topologies to enhance my understanding of networking concepts. This tool allowed me to visualize network configurations, test connectivity, and troubleshoot issues in a virtual environment, which significantly improved my practical skills in network management and design. Most of activity for Network Fundamentals course were accomplished using this tool.",
    link: 'https://drive.google.com/drive/folders/1kkJ3kldvazzystbtWYJBqybnxQXsY9TI?usp=drive_link',
    preview: '/projects/packet-tracer/preview.png',
    type: 'activity',
    skills: [
      'Network Topology Design',
      'Cisco IOS CLI',
      'Router Configuration',
      'Switch Configuration',
      'VLAN Configuration',
      'IP Addressing & Subnetting',
      'Static & Dynamic Routing',
      'Network Troubleshooting',
      'Network Security',
    ],
  },
  {
    id: 2,
    image: '/projects/cyber-security/cyber-security.png',
    label: 'Cyber Security Lab',
    description: 'Cybersecurity Simulations and Exercises',
    content: "Through the Google Cybersecurity Professional Certificate program, I completed comprehensive hands-on activities covering essential security concepts and practices. The program included practical exercises in security frameworks, network security analysis, incident response, and security operations. I gained experience with industry-standard tools and methodologies for identifying vulnerabilities, analyzing security incidents, and implementing security controls. These activities provided foundational knowledge in security risk management, threat detection, and security compliance that are crucial for modern cybersecurity professionals.",
    link: 'https://drive.google.com/drive/folders/1kkJ3kldvazzystbtWYJBqybnxQXsY9TI?usp=drive_link',
    preview: '/projects/cyber-security/preview.png',
    type: 'activity',
    skills: [
      'Security Frameworks & Controls',
      'Threat Analysis & Detection',
      'Incident Response',
      'Security Risk Management',
      'Network Security',
      'Linux',
      'SQL',
      'Python',
      'Security Information & Event Management (SIEM)',
    ],
  },
  {
    id: 3,
    image: '/school/tup.png',
    label: 'Online Test Paper Checker',
    description: 'Capstone Project - Test Checker using Google Cloud Vision API',
    content: "An automated test paper checking system that leverages OCR technology and webcam integration to streamline the grading process. The application captures images of physical test papers through a webcam, processes them using Google Cloud Vision API to extract handwritten or printed text, and automatically compares the answers against a predefined answer key. The system then calculates and displays the score, significantly reducing manual grading time for educators. Built with a modern full-stack architecture using React and Next.js for the frontend, Flask for the backend API, and MySQL for data persistence. This project demonstrates practical application of computer vision, image processing, and web development technologies to solve real-world educational challenges.",
    link: 'https://capstone-auto-checker.vercel.app/',
    preview: '/projects/capstone/preview.png',
    type: 'project',
    skills: [
      'OCR',
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'node.js',
      'MySQL',
      'Google Cloud Vision API',
    ],
    github: 'https://github.com/jldelakwaa/Capstone-AutoChecker',
  },
  {
    id: 99,
    image: '/projects/portfolio/portfolio.png',
    label: 'Personal Portfolio',
    description: 'Current Portfolio Website using Next.js + Mantine UI + Tailwind CSS',
    content: "This personal portfolio website showcases my skills, projects, and experiences as a software developer and network operations specialist. Built with Next.js for server-side rendering and optimized performance, the site features a clean and modern design using Mantine UI components combined with Tailwind CSS for custom styling. It includes sections for my bio, project highlights, and contact information, providing visitors with an engaging overview of my professional background. The portfolio is fully responsive, ensuring a seamless experience across devices, and is deployed on Vercel for fast and reliable access. This project demonstrates my proficiency in modern web development technologies and my ability to create visually appealing and functional web applications.",
    link: 'https://portfolio-taupe-eight-38.vercel.app/',
    preview: '/projects/portfolio/preview.png',
    type: 'project',
    skills: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Mantine UI',
      'HTML',
      'CSS',
      'JavaScript',
      'node.js',
      'Vercel',
    ],
    github: 'https://github.com/jldelakwaa/portfolio',
  },
];

export { Project_list };