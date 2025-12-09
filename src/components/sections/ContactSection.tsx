import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const ContactSection = () => {
  const { personal } = portfolioData;
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-black to-gray-900/20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Entre em Contato</span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            Estou sempre interessado em novas oportunidades e projetos empolgantes. 
            Se você precisa de um desenvolvedor fullstack para sua equipe ou tem um projeto em mente, 
            sinta-se à vontade para entrar em contato!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href={`mailto:${personal.email}`}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center text-white"
            >
              <Mail className="mr-2" size={20} />
              Enviar Email
            </a>
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-purple-500 transition inline-flex items-center justify-center text-white"
            >
              <Linkedin className="mr-2" size={20} />
              Perfil no LinkedIn
            </a>
          </div>
          
          <div className="flex justify-center gap-8">
            <a 
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};