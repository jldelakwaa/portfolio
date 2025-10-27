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
        credentialId: 'course=react-foundations&user=108057&certId=react-foundations-108057-1761550766259',
        credentialUrl: 'https://nextjs.org/learn/certificate?course=react-foundations&user=108057&certId=react-foundations-108057-1761550766259',
        pdfUrl: '/certificates/webdev/react-foundations-certificate.pdf',
        skills: ['React', 'Next.js'],
        description: 'Explored the foundational knowledge for React and Next.js, and you migrated from a simple React Application to a Next.js application.'
    },
    {
        id: 2,
        title: 'Next.js Pages Router Fundamentals',
        issuer: 'Vercel',
        date: 'October 2025',
        category: 'Web Development',
        credentialId: 'course=pages-router&user=108057&certId=pages-router-108057-1761551600509',
        credentialUrl: 'https://nextjs.org/learn/certificate?course=pages-router&user=108057&certId=pages-router-108057-1761551600509',
        pdfUrl: '/certificates/webdev/pages-router-certificate.pdf',
        skills: ['React', 'Next.js', 'Pages Router'],
        description: 'Explored the foundational knowledge and Next.js Pages Router, Hierarchical Routing and Dynamic Routing.'
    },
    {
        id: 3,
        title: 'Next.js App Router Fundamentals',
        issuer: 'Vercel',
        date: 'October 2025',
        category: 'Web Development',
        credentialId: 'course=app-router&user=108057&certId=app-router-108057-1761551600509',
        credentialUrl: 'https://nextjs.org/learn/certificate?course=app-router&user=108057&certId=app-router-108057-1761551600509',
        pdfUrl: '/certificates/webdev/dashboard-app-certificate.pdf',
        skills: ['React', 'Next.js', 'App Router'],
        description: 'Explored the foundational knowledge and Next.js App Router, Dynamic Routing.'
    },
    
];
