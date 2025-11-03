'use client';

import { Title, Card, Text, Badge, Group, Modal, Button, Tabs } from '@mantine/core';
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
            padding="md" 
            radius="md" 
            withBorder 
            className="h-full min-h-[240px] sm:min-h-[260px] md:min-h-[280px] max-w-[380px] mx-auto flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer p-2.5 sm:p-3 md:p-4"
            onClick={onClick}
        >
            {/* Certificate Preview - Fixed Height */}
            <Card.Section className="relative h-24 sm:h-28 md:h-32 lg:h-36 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 flex-shrink-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2">
                    <IconCertificate size={40} className="text-blue-400 dark:text-blue-600 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                    {certificate.pdfUrl && (
                        <Badge variant="filled" color="blue" size="xs" className="text-[9px] sm:text-[10px] md:text-xs">
                            PDF Certificate
                        </Badge>
                    )}
                </div>
            </Card.Section>

            {/* Content area with flex-grow to fill remaining space */}
            <div className="mt-2 sm:mt-2.5 md:mt-3 lg:mt-4 flex-grow flex flex-col">
                <Badge color="blue" variant="light" size="xs" mb="xs" className="w-fit text-[9px] sm:text-[10px] md:text-xs">
                    {certificate.category}
                </Badge>
                
                {/* Title with fixed height and line clamping */}
                <Text fw={600} size="lg" className="mb-1.5 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">
                    {certificate.title}
                </Text>
                
                <Group gap="xs" className="mb-1.5 sm:mb-2">
                    <IconAward size={12} className="text-gray-500 flex-shrink-0 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    <Text size="sm" c="dimmed" className="line-clamp-1 text-[10px] sm:text-xs md:text-sm">
                        {certificate.issuer}
                    </Text>
                </Group>

                {/* Skills - Push to bottom */}
                <div className="mt-auto">
                    {certificate.skills && certificate.skills.length > 0 && (
                        <Group gap="xs">
                            {certificate.skills.slice(0, 3).map((skill, index) => (
                                <Badge key={index} size="xs" variant="dot" className="text-[9px] sm:text-[10px] md:text-xs">
                                    {skill}
                                </Badge>
                            ))}
                            {certificate.skills.length > 3 && (
                                <Badge size="xs" variant="outline" className="text-[9px] sm:text-[10px] md:text-xs">
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
            delay: 2000, 
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            playOnInit: true
        })
    );

    const filteredCertificates = activeTab === 'All' 
        ? certificateData 
        : certificateData.filter(cert => cert.category === activeTab);

    // Get count for each category
    const getCategoryCount = (category: string) => {
        if (category === 'All') return certificateData.length;
        return certificateData.filter(cert => cert.category === category).length;
    };

    // Reset autoplay when changing tabs
    useEffect(() => {
        if (activeTab === 'All') {
            autoplay.current.reset();
        }
    }, [activeTab]);

    return (
        <div className="px-2 py-2 sm:px-4 sm:py-4 md:py-8 max-w-5xl mx-auto w-full">
            <Title order={1} mb="md" className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                🏆 Certificates & Achievements
            </Title>

            {/* Category Tabs */}
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value || 'All')} className="mb-3 sm:mb-4 md:mb-6">
                <Tabs.List className="flex-wrap justify-center gap-0.5 sm:gap-1">
                    {categories.map((category) => (
                        <Tabs.Tab
                            key={category}
                            value={category}
                            className="data-[active=true]:!bg-blue-500 data-[active=true]:!text-white !bg-white dark:!bg-gray-800 hover:!bg-blue-300 dark:hover:!bg-gray-700 rounded-md px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-2 transition-colors duration-200 !m-0.5 sm:!m-1 text-[10px] sm:text-xs md:text-sm"
                        >
                            {category} ({getCategoryCount(category)})
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
                    base: 'calc(100% - 16px)',
                    xs: filteredCertificates.length === 1 ? '400px' : 'calc(50% - 12px)',
                    sm: filteredCertificates.length === 1 ? '400px' : filteredCertificates.length === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 12px)',
                    md: filteredCertificates.length === 1 ? '400px' : filteredCertificates.length === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 12px)'
                }}
                slideGap={{ base: 'xs', sm: 'sm', md: 'md' }}
                withIndicators
                plugins={activeTab === 'All' ? [autoplay.current] : []}
                onMouseEnter={activeTab === 'All' ? autoplay.current.stop : undefined}
                onMouseLeave={activeTab === 'All' ? autoplay.current.reset : undefined}
                className="pb-6 sm:pb-8"
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
                <div className="text-center py-8 sm:py-12">
                    <Text c="dimmed" className="text-xs sm:text-sm">No certificates found in this category</Text>
                </div>
            )}

            {/* Certificate Details Modal */}
            <Modal
                opened={selectedCertificate !== null}
                onClose={() => setSelectedCertificate(null)}
                size="lg"
                title={
                    <Group>
                        <IconCertificate size={20} className="text-blue-500 sm:w-6 sm:h-6" />
                        <Text fw={600} className="text-sm sm:text-base">Certificate Details</Text>
                    </Group>
                }
                centered
            >
                {selectedCertificate && (
                    <div className="text-xs sm:text-sm md:text-base">
                        {/* Certificate PDF Preview */}
                        {selectedCertificate.pdfUrl && (
                            <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                <iframe
                                    src={`${selectedCertificate.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-64 sm:h-80 md:h-88"
                                    title={selectedCertificate.title}
                                />
                            </div>
                        )}

                        <Badge color="blue" size="md" mb="sm" className="text-[10px] sm:text-xs md:text-sm">
                            {selectedCertificate.category}
                        </Badge>

                        <Title order={3} className="mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">
                            {selectedCertificate.title}
                        </Title>

                        <Group gap="xs" className="mb-3 sm:mb-4 flex-wrap">
                            <Group gap="xs">
                                <IconAward size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <Text size="sm" fw={500} className="text-xs sm:text-sm">
                                    {selectedCertificate.issuer}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <IconCalendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <Text size="sm" c="dimmed" className="text-xs sm:text-sm">
                                    {selectedCertificate.date}
                                </Text>
                            </Group>
                        </Group>

                        {selectedCertificate.description && (
                            <Text size="sm" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                                {selectedCertificate.description}
                            </Text>
                        )}

                        {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                            <div className="mb-3 sm:mb-4">
                                <Text size="sm" fw={500} className="mb-1.5 sm:mb-2 text-xs sm:text-sm">Skills Covered:</Text>
                                <Group gap="xs">
                                    {selectedCertificate.skills.map((skill, index) => (
                                        <Badge key={index} variant="light" size="sm" className="text-[10px] sm:text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </Group>
                            </div>
                        )}

                        <Group grow mt="sm" className="mt-3 sm:mt-4">
                            {selectedCertificate.pdfUrl && (
                                <Button
                                    component="a"
                                    href={selectedCertificate.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    rightSection={<IconExternalLink size={14} className="sm:w-4 sm:h-4" />}
                                    variant="filled"
                                    size="sm"
                                    className="text-xs sm:text-sm"
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
                                    rightSection={<IconExternalLink size={14} className="sm:w-4 sm:h-4" />}
                                    variant="light"
                                    size="sm"
                                    className="text-xs sm:text-sm"
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