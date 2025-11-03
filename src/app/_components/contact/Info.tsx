import { IconAt, IconMapPin } from '@tabler/icons-react';

export default function Info() {
    const data = [
        { type: "Email", description: "jldelakwaa@gmail.com", icon: IconAt },
        { type: "Location", description: "Cavite, Philippines", icon: IconMapPin },
    ];
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                    <item.icon className="text-2xl mr-4 text-blue-500" />
                    <div>   
                        <p className="text-lg font-bold">{item.type}</p>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}
