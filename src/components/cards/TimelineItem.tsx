import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TimelineItemProps {
  position: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  color: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  position, 
  company, 
  period, 
  description, 
  technologies, 
  color}) => (
  <div className="relative mb-12 ml-8 sm:ml-20">
    <div className={`absolute -left-[44px] sm:-left-[76px] w-4 h-4 rounded-full`} 
         style={{ backgroundColor: `var(--${color}-600, #9333ea)` }} />
    <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20">
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <div className="mb-2 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold text-white">{position}</h3>
            <p className="text-gray-300">{company}</p>
          </div>
          <span className="text-sm text-gray-500 sm:ml-4">{period}</span>
        </div>
      </div>
      <ul className="text-gray-300 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="text-purple-500 mr-2 mt-1" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);