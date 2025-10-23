
import { Card, Text } from "@mantine/core";
import Image from 'next/image';
import BioImage from '@/app/images/bio.jpg';
import Resume from "./resume";

export default function Bio() {
    return (
        <div className="px-4 py-8">
            <Card
                shadow="sm"
                padding="0"
                radius="lg"
                withBorder
                className="max-w-5xl mx-auto overflow-hidden"
            >
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Text content */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <Text size="lg" className="leading-relaxed">
                            I'm a <span className="font-semibold text-blue-500">Software Developer</span> and{" "}
                            <span className="font-semibold text-blue-500">Network Operations Specialist</span>{" "}
                            passionate about building innovative solutions.
                        </Text>

                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300">
                                    📍 <span className="font-medium">Location:</span> Remote | Cavite, Philippines
                                </Text>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300">
                                    🎯 <span className="font-medium">Focus:</span> Full-stack development & Networks
                                </Text>
                            </div>

                            <div className="flex items-center gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300">
                                    🚀 <span className="font-medium">Currently:</span> Jr. Developer (Laravel/React)
                                </Text>
                            </div>

                            <div className="flex items-center gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300">
                                    🌐 <span className="font-medium">Language:</span> Filipino (Native), English (Advance), & Japanese (Learning)
                                </Text>
                            </div>

                            <div className="flex items-center gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300">
                                    📅 <span className="font-medium">Availability:</span> Open to opportunities!
                                </Text>
                            </div>
                        </div>

                        <div className="mt-8 mb-8">
                            <Text size="md" className="leading-relaxed text-gray-600 dark:text-gray-400">
                                I bridge the gap between development and operations, crafting seamless
                                digital experiences with modern web technologies. Always excited to collaborate
                                on innovative projects and connect with fellow developers.
                            </Text>
                        </div>

                        <Resume />
                    </div>

                    {/* Right side - Image */}
                    <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                        <Image
                            src={BioImage}
                            alt="bio image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}