import { useState } from 'react';

interface BubbleProps {
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
}

const Bubble = ({ size, left, duration, delay, color }: BubbleProps) => {
  const [blobType] = useState(() => Math.floor(Math.random() * 3) + 1);
  const [pulseDuration] = useState(() => 8 + Math.random() * 4);

  const moveStyle = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    bottom: `-${size + 50}px`,
  };

  return (
    <div className="absolute animate-float" style={moveStyle}>
      <div
        className={`w-full h-full opacity-80 animate-blob-${blobType} ${color}`}
        style={{ animationDuration: `${pulseDuration}s` }}
      />
    </div>
  );
};
export default Bubble;
