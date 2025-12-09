
import { Navigation } from './components/ui/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 Gustavo Gaiotti. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
