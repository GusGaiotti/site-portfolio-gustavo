import { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { TechIcon } from '../ui/TechIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const technologies = portfolioData.skills.technologies;
  const totalItems = technologies.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para obter os 3 itens visíveis (anterior, atual, próximo)
  const getVisibleItems = () => {
    const items = [];
    
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = totalItems - 1;
      if (index >= totalItems) index = 0;
      
      items.push({
        ...technologies[index],
        position: i, // -1 = esquerda, 0 = centro, 1 = direita
        index: index
      });
    }
    
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-black to-gray-900/20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tecnologias que já trabalhei
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-purple-600 text-white p-2 md:p-4 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            aria-label="Tecnologia anterior"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-purple-600 text-white p-2 md:p-4 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            aria-label="Próxima tecnologia"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 px-12 sm:px-16 md:px-20 py-8">
            {visibleItems.map((tech) => {
              const isCentered = tech.position === 0;
              const isLeft = tech.position === -1;
              const isRight = tech.position === 1;
              
              return (
                <div 
                  key={`${tech.index}-${tech.position}`}
                  className={`relative flex flex-col items-center transition-all duration-500 ease-out cursor-pointer ${
                    isCentered 
                      ? 'transform scale-100 z-10' 
                      : 'transform scale-75 opacity-60 hover:opacity-80 hover:scale-80'
                  }`}
                  onClick={isLeft ? goToPrevious : isRight ? goToNext : undefined}
                >
                  <div className={`rounded-xl border transition-all duration-500 ${
                    isCentered 
                      ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-400 p-4 sm:p-6 md:p-8 shadow-2xl shadow-purple-500/30' 
                      : 'bg-gray-900/60 border-gray-700 p-3 sm:p-4 md:p-6 hover:border-gray-600'
                  }`}>
                    <TechIcon 
                      iconName={tech.icon}
                      className={`transition-all duration-500 ${tech.color} ${
                        isCentered ? 'h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20' : 'h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14'
                      }`} 
                    />
                  </div>
                  
                  <span className={`mt-2 md:mt-4 font-medium transition-all duration-500 whitespace-nowrap text-center ${
                    isCentered 
                      ? 'text-sm sm:text-base md:text-lg text-purple-300' 
                      : 'text-xs sm:text-sm text-gray-400'
                  }`}>
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};