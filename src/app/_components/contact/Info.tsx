import { IconAt, IconMapPin } from '@tabler/icons-react';

export default function Info() {
    const data = [
        {
            type: "Email",
            description: "jldelakwaa@gmail.com",
            note: "For project inquiries and collaboration",
            icon: IconAt,
        },
        {
            type: "Location",
            description: "Cavite, Philippines",
            note: "Remote-friendly for global teams",
            icon: IconMapPin,
        },
    ];

    return (
        <div className="space-y-5">
            {data.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/80 bg-white/70 text-blue-600">
                        <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                        <p className="text-[11px] uppercase tracking-wide text-foreground/55">{item.type}</p>
                        <p className="text-base sm:text-lg font-semibold leading-tight text-foreground/90">{item.description}</p>
                        <p className="text-sm text-foreground/65 mt-1">{item.note}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
