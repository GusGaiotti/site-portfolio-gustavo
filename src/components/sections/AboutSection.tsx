import { Code, Server, Cloud, Award } from 'lucide-react';
import { SkillCard } from '../cards/SkillCard';

export const AboutSection = () => {
  const skills = [
    { icon: Code, title: 'Frontend', description: 'React, Next.js, TypeScript, Tailwind CSS', color: 'purple' },
    { icon: Server, title: 'Backend', description: 'Javascript (Node.js), Java, Python', color: 'blue' },
    { icon: Cloud, title: 'Cloud', description: 'AWS (Lambda, CloudWatch, CodeBuild, S3, SQS...)', color: 'green' },
    { icon: Award, title: 'Finanças', description: 'Certificação do mercado financeiro: CPA-20 ANBIMA', color: 'yellow' }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-black to-gray-900/20 scroll-mt-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Sobre Mim</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Possuo experiência na construção de soluções back-end e front-end de alta performance. Tenho familiaridade com Java, JavaScript e Python, com proficiência na criação de interfaces modernas com frameworks como React, Angular e Tailwind CSS.               </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Ao longo da minha carreira, contribuí para projetos desafiadores incluindo a participação ativa na construção de SaaS's e desenvolvimento de automações para instituições financeiras.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Sou certificado CPA-20, o que me proporciona uma base sólida para trabalhar em projetos no mercado financeiro. 
              <br/>
              <br/>
              Hoje continuo me desenvolvendo profissionalmente, estudando constantemente novas tecnologias, com foco 
              em entregar valor de forma colaborativa e alinhada com as melhores práticas do mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};