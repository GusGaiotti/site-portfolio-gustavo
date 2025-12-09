

import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const colorToClass: Record<string, string> = {
  purple: 'text-purple-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
};

export const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, color }) => (
  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
    <Icon className={`text-3xl mb-4 ${colorToClass[color] ?? 'text-gray-300'}`} size={36} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);
