'use client';

import { Title, Card, Text, Badge, Group, Modal, Image, Button, Tabs } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconExternalLink, IconCalendar, IconCertificate, IconAward } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { certificateData, Certificate } from '@/app/_data/certificateData';

// Group certificates by category
const categories = ['All', ...Array.from(new Set(certificateData.map(cert => cert.category)))];

function CertificateCard({ certificate, onClick }: { certificate: Certificate; onClick: () => void }) {
    return (
        <Card 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            withBorder 
            className="h-full min-h-[300px] max-w-[380px] mx-auto flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            onClick={onClick}
        >
            {/* Certificate Preview - Fixed Height */}
            <Card.Section className="relative h-36 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 flex-shrink-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <IconCertificate size={64} className="text-blue-400 dark:text-blue-600" />
                    {certificate.pdfUrl && (
                        <Badge variant="filled" color="blue" size="sm">
                            PDF Certificate
                        </Badge>
                    )}
                </div>
            </Card.Section>

            {/* Content area with flex-grow to fill remaining space */}
            <div className="mt-4 flex-grow flex flex-col">
                <Badge color="blue" variant="light" size="sm" mb="xs" className="w-fit">
                    {certificate.category}
                </Badge>
                
                {/* Title with fixed height and line clamping */}
                <Text fw={600} size="lg" className="mb-2 line-clamp-2 min-h-[3.5rem]">
                    {certificate.title}
                </Text>
                
                <Group gap="xs" className="mb-2">
                    <IconAward size={16} className="text-gray-500 flex-shrink-0" />
                    <Text size="sm" c="dimmed" className="line-clamp-1">
                        {certificate.issuer}
                    </Text>
                </Group>

                {/* Skills - Push to bottom */}
                <div className="mt-auto">
                    {certificate.skills && certificate.skills.length > 0 && (
                        <Group gap="xs">
                            {certificate.skills.slice(0, 3).map((skill, index) => (
                                <Badge key={index} size="xs" variant="dot">
                                    {skill}
                                </Badge>
                            ))}
                            {certificate.skills.length > 3 && (
                                <Badge size="xs" variant="outline">
                                    +{certificate.skills.length - 3}
                                </Badge>
                            )}
                        </Group>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [activeTab, setActiveTab] = useState<string>('All');
    
    // Create autoplay ref with slow delay (3 seconds) - useMemo to ensure it recreates properly
    const autoplay = useRef(
        Autoplay({ 
            delay: 2500, 
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            playOnInit: true
        })
    );

    const filteredCertificates = activeTab === 'All' 
        ? certificateData 
        : certificateData.filter(cert => cert.category === activeTab);

    // Reset autoplay when changing tabs
    useEffect(() => {
        if (activeTab === 'All') {
            autoplay.current.reset();
        }
    }, [activeTab]);

    return (
        <div className="px-4 py-8 max-w-6xl mx-auto">
            <Title order={1} mb="md" className="text-center">
                🏆 Certificates & Achievements
            </Title>

            {/* Category Tabs */}
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value || 'All')} className="mb-6">
                <Tabs.List className="flex-wrap justify-center">
                    {categories.map((category) => (
                        <Tabs.Tab key={category} value={category}>
                            {category}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
            </Tabs>

            {/* Carousel View */}
            <style jsx global>{`
                .mantine-Carousel-indicator {
                    width: 12px;
                    height: 4px;
                    transition: width 250ms ease;
                    background-color: #94a3b8;
                }

                .mantine-Carousel-indicator[data-active] {
                    width: 40px;
                    background-color: #3b82f6;
                }

                .mantine-Carousel-root {
                    max-width: 100%;
                }
            `}</style>
            <Carousel
                slideSize={{
                    base: 'calc(100% - 32px)',
                    xs: filteredCertificates.length === 1 ? '400px' : 'calc(50% - 16px)',
                    sm: filteredCertificates.length === 1 ? '400px' : filteredCertificates.length === 2 ? 'calc(50% - 16px)' : 'calc(33.333% - 16px)',
                    md: filteredCertificates.length === 1 ? '400px' : filteredCertificates.length === 2 ? 'calc(50% - 16px)' : 'calc(33.333% - 16px)'
                }}
                slideGap="md"
                withIndicators
                plugins={activeTab === 'All' ? [autoplay.current] : []}
                onMouseEnter={activeTab === 'All' ? autoplay.current.stop : undefined}
                onMouseLeave={activeTab === 'All' ? autoplay.current.reset : undefined}
                className="pb-8"
            >
                {filteredCertificates.map((cert) => (
                    <Carousel.Slide key={cert.id}>
                        <CertificateCard 
                            certificate={cert} 
                            onClick={() => setSelectedCertificate(cert)}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>

            {/* Show message if no certificates in category */}
            {filteredCertificates.length === 0 && (
                <div className="text-center py-12">
                    <Text c="dimmed">No certificates found in this category</Text>
                </div>
            )}

            {/* Certificate Details Modal */}
            <Modal
                opened={selectedCertificate !== null}
                onClose={() => setSelectedCertificate(null)}
                size="lg"
                title={
                    <Group>
                        <IconCertificate size={24} className="text-blue-500" />
                        <Text fw={600}>Certificate Details</Text>
                    </Group>
                }
                centered
            >
                {selectedCertificate && (
                    <div>
                        {/* Certificate PDF Preview */}
                        {selectedCertificate.pdfUrl && (
                            <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                <iframe
                                    src={`${selectedCertificate.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-88"
                                    title={selectedCertificate.title}
                                />
                            </div>
                        )}

                        <Badge color="blue" size="lg" mb="md">
                            {selectedCertificate.category}
                        </Badge>

                        <Title order={3} className="mb-3">
                            {selectedCertificate.title}
                        </Title>

                        <Group gap="md" className="mb-4">
                            <Group gap="xs">
                                <IconAward size={18} />
                                <Text size="sm" fw={500}>
                                    {selectedCertificate.issuer}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <IconCalendar size={18} />
                                <Text size="sm" c="dimmed">
                                    {selectedCertificate.date}
                                </Text>
                            </Group>
                        </Group>

                        {selectedCertificate.description && (
                            <Text size="sm" className="mb-4">
                                {selectedCertificate.description}
                            </Text>
                        )}

                        {selectedCertificate.credentialId && (
                            <div className="mb-3">
                                <Text size="sm" fw={500} className="mb-1">Credential ID:</Text>
                                <Text size="sm" c="dimmed" className="font-mono">
                                    {selectedCertificate.credentialId}
                                </Text>
                            </div>
                        )}

                        {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                            <div className="mb-4">
                                <Text size="sm" fw={500} className="mb-2">Skills Covered:</Text>
                                <Group gap="xs">
                                    {selectedCertificate.skills.map((skill, index) => (
                                        <Badge key={index} variant="light">
                                            {skill}
                                        </Badge>
                                    ))}
                                </Group>
                            </div>
                        )}

                        <Group grow mt="md">
                            {selectedCertificate.pdfUrl && (
                                <Button
                                    component="a"
                                    href={selectedCertificate.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    rightSection={<IconExternalLink size={16} />}
                                    variant="filled"
                                >
                                    View PDF
                                </Button>
                            )}
                            {selectedCertificate.credentialUrl && (
                                <Button
                                    component="a"
                                    href={selectedCertificate.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    rightSection={<IconExternalLink size={16} />}
                                    variant="light"
                                >
                                    Verify Online
                                </Button>
                            )}
                        </Group>
                    </div>
                )}
            </Modal>
        </div>
    );
}