import React, { useState, useEffect } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  gradient: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, gradient }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className={`bg-gradient-to-r ${gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};