import Image from 'next/image';
import avatarImage from '@/../public/avatar.png';
import avatarSmileImage from '@/../public/avatar-smile.png';

export default function Avatar() {
    return (
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative group">
            <Image
                src={avatarImage}
                alt="John Lester avatar"
                fill
                priority
                className="w-full h-full rounded-2xl shadow-2xl object-cover object-[center_10%] transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
                src={avatarSmileImage}
                alt="John Lester avatar smiling"
                fill
                className="w-full h-full rounded-2xl shadow-2xl object-cover object-[center_10%] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
        </div>
    );
}