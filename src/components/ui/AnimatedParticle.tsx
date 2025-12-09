
import React from 'react';

type ParticleColor = 'purple' | 'blue' | 'pink';
type ParticleSize = '2' | '3' | '4';

interface AnimatedParticleProps {
  color: ParticleColor;
  size: ParticleSize;
  position: string;
  delay: number;
}

const sizeToClass: Record<ParticleSize, string> = {
  '2': 'w-2 h-2',
  '3': 'w-3 h-3',
  '4': 'w-4 h-4',
};

const colorToClass: Record<ParticleColor, string> = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
};

export const AnimatedParticle: React.FC<AnimatedParticleProps> = ({ 
  color, 
  size, 
  position, 
  delay 
}) => (
  <div
    className={`absolute ${position} ${sizeToClass[size]} ${colorToClass[color]} rounded-full`}
    style={{ 
      animation: `particleFloat 6s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  />
);
