interface GradientBackgroundProps {
  fromColor?: string;
  toColor?: string;
  direction?: 'to-b' | 'to-t' | 'to-r' | 'to-l';
}

export default function GradientBackground({
  fromColor = 'cyan-50',
  toColor = 'cyan-100',
  direction = 'to-b',
}: GradientBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <div className={`relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-${direction} [&>div]:from-${fromColor} [&>div]:to-${toColor}`}>
        <div></div>
      </div>
    </div>
  );
}
