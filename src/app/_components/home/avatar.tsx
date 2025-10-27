import Image from 'next/image';
import avatarImage from '@/../public/avatar.png';

export default function Avatar() {
    return (
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
            <Image
                src={avatarImage}
                alt="John Lester avatar"
                fill
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                priority
                className="rounded-2xl shadow-2xl object-cover object-[center_20%] ring-4 ring-indigo-600/10"
            />
        </div>
    );
}