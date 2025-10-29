import PacketTracerImage from '@/../public/projects/packet-tracer.png';
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
}

const Project_list: Project[] = [
  {
    id: 1,
    image: PacketTracerImage,
    label: 'Packet Tracer',
    description: 'Network Simulation Tool for Cisco Activities',
    content: "Using Cisco Packet Tracer, I designed and simulated various network topologies to enhance my understanding of networking concepts. This tool allowed me to visualize network configurations, test connectivity, and troubleshoot issues in a virtual environment, which significantly improved my practical skills in network management and design. Most of activity for Network Fundamentals course were accomplished using this tool.",
    link: 'https://drive.google.com/drive/folders/1kkJ3kldvazzystbtWYJBqybnxQXsY9TI?usp=drive_link',
    preview: PacketTracerImage,
    type: 'activity',

  },
];

export { Project_list };