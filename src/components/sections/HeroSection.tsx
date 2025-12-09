import { useState, useEffect } from 'react';
import { AnimatedParticle } from '../ui/AnimatedParticle';
import { portfolioData } from '../../data/portfolio';

export const HeroSection = () => {
  const [text, setText] = useState('');
  const { personal } = portfolioData;
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(personal.title.slice(0, index));
      index++;
      if (index > personal.title.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 scroll-mt-24" aria-label="Seção inicial">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <AnimatedParticle color="purple" size="2" position="top-20 left-10" delay={0} />
      <AnimatedParticle color="blue" size="3" position="top-40 right-20" delay={1} />
      <AnimatedParticle color="pink" size="2" position="bottom-20 left-1/3" delay={2} />
      <AnimatedParticle color="purple" size="4" position="bottom-40 right-1/3" delay={3} />
      <AnimatedParticle color="blue" size="2" position="top-60 left-1/4" delay={1.5} />
      <AnimatedParticle color="pink" size="3" position="bottom-60 right-1/4" delay={2.5} />
      <AnimatedParticle color="purple" size="2" position="top-80 right-10" delay={0.5} />
      <AnimatedParticle color="blue" size="4" position="bottom-80 left-20" delay={3.5} />
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-70" />
              <img 
                src={personal.photo}
                alt={`${personal.name} - foto de perfil`}
                width={192}
                height={192}
                decoding="async"
                loading="eager"
                draggable={false}
                className="w-full h-full rounded-full object-cover ring-2 ring-black relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-40" />
            </div>
          </div>
          
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
            Olá, eu sou <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{personal.name}</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 h-8 sm:h-9 md:h-10">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            {personal.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a 
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform text-white text-sm sm:text-base"
            >
              Entre em Contato
            </a>
            <a 
              href="#experience"
              className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 rounded-lg font-semibold hover:border-purple-500 transition text-white text-sm sm:text-base"
            >
              Ver Meu Trabalho
            </a>
          </div>
          
          <div className="flex justify-center gap-10 mt-19">
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};