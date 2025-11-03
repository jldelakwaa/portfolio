'use client';

import Avatar from "../_components/home/avatar";
import Hero from "../_components/home/hero";
import GradientBackground from "../_components/_common/gradient-background";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Pattern */}
      <GradientBackground fromColor="cyan-50" toColor="cyan-100" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-6 md:px-12 lg:px-20 gap-8 lg:gap-12">
        <div className="w-full lg:w-3/5 order-2 lg:order-1 flex items-center justify-center">
          <Hero />
        </div>
        <div className="w-full lg:max-w-2/5 flex justify-center items-center order-1 lg:order-2">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
