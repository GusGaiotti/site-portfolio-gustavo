import { TimelineItem } from '../cards/TimelineItem';
import { portfolioData } from '../../data/portfolio';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-black scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experiência</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600" />
            {portfolioData.experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                {...exp} 
                isLast={index === portfolioData.experiences.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};