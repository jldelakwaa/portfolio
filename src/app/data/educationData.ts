import { IconSchool, IconBook, IconCertificate } from '@tabler/icons-react';
import TupImage from '@/app/images/school/tup.png';
import MmscImage from '@/app/images/school/mmsc.png';
import GmathsImage from '@/app/images/school/gmaths.png';
import FvresImage from '@/app/images/school/fvres.png';

export interface Education {
    level: string;
    school: string;
    year: string;
    icon: any;
    description: string;
    extra: string;
    relevant?: string;
    img: any;
    color: string;
}

export const educationData: Education[] = [
    {
        level: 'College',
        school: 'Technological University of the Philippines, Cavite',
        year: '2020 - 2024',
        icon: IconCertificate,
        description: 'BET - Computer Engineering Technology',
        extra: 'Graduated as Cum laude',
        relevant: 'Relevant coursework: Networks, Software Development, and Hardware Systems',
        img: TupImage,
        color: 'violet'
    },
    {
        level: 'Senior High School',
        school: 'My Messiah School of Cavite',
        year: '2018 - 2020',
        icon: IconSchool,
        description: 'STEM Track',
        extra: 'Graduated with high honors',
        img: MmscImage,
        color: 'teal'
    },
    {
        level: 'Junior High School',
        school: 'General Mariano Alvarez Technical High School',
        year: '2014 - 2018',
        icon: IconSchool,
        description: 'Academic excellence',
        extra: 'Graduated with honors',
        img: GmathsImage,
        color: 'cyan'
    },
    {
        level: 'Elementary',
        school: 'Family Village Resources Elementary School',
        year: '2008 - 2014',
        icon: IconBook,
        description: 'Foundation years',
        extra: 'Graduate with honors',
        img: FvresImage,
        color: 'blue'
    },
];
