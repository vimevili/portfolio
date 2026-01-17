import { useState } from 'react';
import type { Bubble as BubbleType } from '../../interfaces';
import { Bubble } from '../ui';

const LavaBackground = () => {
  const [bubbles] = useState<BubbleType[]>(() => {
    const bubblesPossibleColors = [
      'bg-gradient-to-br from-orange-300 to-red-300',
      'bg-gradient-to-r from-red-200 via-pink-200 to-violet-200',
      'bg-gradient-to-r from-sky-300 to-rose-200',
      'bg-gradient-to-br from-sky-300 to-red-200',
      'bg-gradient-to-bl from-indigo-200 to-pink-200',
    ];

    const bubblesPossiblePositions = [5, 20, 50, 70, 85];

    return Array.from({ length: 7 }).map((_, i) => {
      const bubbleBasePosition =
        bubblesPossiblePositions[i % bubblesPossiblePositions.length];

      const jitter = Math.random() * 10 - 5;

      return {
        id: i,
        size: Math.random() * 350 + 150,
        left: Math.max(0, Math.min(100, bubbleBasePosition + jitter)),
        duration: Math.random() * 15 + 5,
        delay: Math.random() * 5,
        color:
          bubblesPossibleColors[
            Math.floor(Math.random() * bubblesPossibleColors.length)
          ],
      };
    });
  });

  return (
    <div className="fixed inset-0 w-full h-dvh overflow-hidden bg-slate-50 dark:bg-slate-950 -z-10">
      <div className="absolute inset-0 bg-linear-to-tr from-orange-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 opacity-100" />
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
    </div>
  );
};
export default LavaBackground;
