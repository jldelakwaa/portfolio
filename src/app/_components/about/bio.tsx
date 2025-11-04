
import { Card, Text } from "@mantine/core";
import Image from 'next/image';
import BioImage from '@/../public/bio.jpg';

export default function Bio() {
    return (
        <div className="px-2 py-2 sm:px-4 sm:py-4 md:py-4 w-full">
            <Card
                shadow="sm"
                padding="0"
                radius="lg"
                withBorder
                className="max-w-5xl mx-auto overflow-hidden"
            >
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Text content */}
                    <div className="flex-1 p-3 sm:p-6 md:p-12 flex flex-col justify-center">
                        <Text size="lg" className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                            I&apos;m a <span className="font-semibold text-blue-500">Software Developer</span> and{" "}
                            <span className="font-semibold text-blue-500">Network Operations Specialist</span>{" "}
                            passionate about building innovative solutions.
                        </Text>

                        <div className="mt-3 sm:mt-4 md:mt-6 space-y-1.5 sm:space-y-2 md:space-y-3">
                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal">
                                    📍 <span className="font-bold">Location:</span> Remote | Cavite, Philippines
                                </Text>
                            </div>
                            
                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal">
                                    🎓 <span className="font-bold">Education:</span> Bachelor&apos;s Degree in Computer Engineering
                                </Text>
                            </div>

                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal">
                                    🎯 <span className="font-bold">Focus:</span> Full-stack development & Networks
                                </Text>
                            </div>

                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal">
                                    🚀 <span className="font-bold">Currently:</span> Jr. Developer (Laravel/React)
                                </Text>
                            </div>

                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Text size="sm" className="text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal">
                                    🌐 <span className="font-bold">Language:</span> Filipino (Native), English (Advance), & Japanese (Learning)
                                </Text>
                            </div>

                        </div>

                        <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 sm:mb-4 md:mb-2">
                            <Text size="md" className="leading-relaxed text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                I bridge the gap between development and operations, crafting seamless
                                digital experiences with modern web technologies. Always excited to collaborate
                                on innovative projects and connect with fellow developers.
                            </Text>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative w-full md:w-1/3 h-40 sm:h-56 md:h-auto">
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