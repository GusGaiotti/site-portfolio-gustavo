import { Rocket, Bot, Globe } from 'lucide-react';
import { AchievementCard } from '../cards/AchievementCard';
import { portfolioData } from '../../data/portfolio';

export const AchievementsSection = () => {
  const iconMap = {
    'Rocket': Rocket,
    'Bot': Bot,
    'Globe': Globe
  };

  return (
    <section className="py-16 bg-black scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Principais Conquistas</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {portfolioData.achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <AchievementCard 
                key={index} 
                {...achievement} 
                icon={IconComponent}
                color={achievement.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
