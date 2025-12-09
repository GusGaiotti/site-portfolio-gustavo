import * as SimpleIcons from 'react-icons/si';
import type { IconType } from 'react-icons';

interface TechIconProps {
  iconName: string; 
  className?: string;
}

export const TechIcon = ({ iconName, className }: TechIconProps) => {
  const IconComponent = (SimpleIcons as Record<string, IconType>)[iconName] || SimpleIcons.SiCodeproject;
  return <IconComponent className={className} />;
};