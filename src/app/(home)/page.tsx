'use client';

import Avatar from "../ui/home/avatar";
import Hero from "../ui/home/hero";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 py-10 lg:py-16 bg-cyan-50 gap-8 lg:gap-12">
      <div className="w-full lg:w-3/5 order-2 lg:order-1 flex items-center justify-center">
        <Hero />
      </div>
      <div className="w-full lg:w-2/5 flex justify-center items-center order-1 lg:order-2">
        <Avatar />
      </div>
    </div>
  );
}
