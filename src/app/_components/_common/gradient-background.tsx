interface GradientBackgroundProps {
  fromColor?: string;
  toColor?: string;
  direction?: 'to bottom' | 'to top' | 'to right' | 'to left';
}

export default function GradientBackground({
  fromColor = '#ecfeff',
  toColor = '#cffafe',
  direction = 'to bottom',
}: GradientBackgroundProps) {
  return (
    <div 
      className="absolute inset-0 -z-10"
      style={{
        background: `linear-gradient(${direction}, ${fromColor}, ${toColor})`
      }}
    />
  );
}
