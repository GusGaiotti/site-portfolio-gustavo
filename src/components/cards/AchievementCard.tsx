import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

const colorMap = {
  purple: 'text-purple-500 hover:border-purple-500 from-purple-600 to-blue-600',
  blue: 'text-blue-500 hover:border-blue-500 from-blue-600 to-cyan-600',
  green: 'text-green-500 hover:border-green-500 from-green-600 to-emerald-600'
};

export const AchievementCard: React.FC<AchievementCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  color = 'purple'
}) => {
  const colorClass = colorMap[color as keyof typeof colorMap] || colorMap.purple;
  const [iconColor, borderColor, gradient] = colorClass.split(' ');

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
      <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 ${borderColor} transition-all`}>
        <div className={`text-4xl mb-4 ${iconColor}`}>
          <Icon size={48} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};