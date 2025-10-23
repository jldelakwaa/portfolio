
import { Card, Text } from "@mantine/core";
import Image from 'next/image';
import BioImage from '@/app/images/bio.jpg';

export default function PersonalInfo() {
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
                    {/* Left side */}
                    <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                        <Image
                            src={BioImage}
                            alt="bio image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    {/* Right side */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">John Doe</h2>
                        <p className="text-lg text-blue-600 mb-6">Full Stack Developer</p>
                        
                        <Text className="text-gray-700 mb-6 leading-relaxed">
                            Passionate software developer with a keen eye for creating elegant solutions 
                            to complex problems. I specialize in building modern web applications that 
                            deliver exceptional user experiences.
                        </Text>

                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="font-semibold min-w-[120px] text-gray-800">Location:</span>
                                <span className="text-gray-600">San Francisco, CA</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold min-w-[120px] text-gray-800">Experience:</span>
                                <span className="text-gray-600">3+ years</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold min-w-[120px] text-gray-800">Email:</span>
                                <span className="text-gray-600">john.doe@example.com</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold min-w-[120px] text-gray-800">Languages:</span>
                                <span className="text-gray-600">English, Spanish</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold min-w-[120px] text-gray-800">Availability:</span>
                                <span className="text-green-600 font-medium">Open to opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}