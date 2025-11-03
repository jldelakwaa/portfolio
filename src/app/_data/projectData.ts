import PacketTracerImage from '@/../public/projects/packet-tracer/packet-tracer.png';
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
}

const Project_list: Project[] = [
  {
    id: 1,
    image: '/projects/packet-tracer/packet-tracer.png',
    label: 'Packet Tracer',
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
];

export { Project_list };