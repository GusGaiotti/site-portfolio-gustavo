import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#experience', label: 'Experiência' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            <a href="#home" aria-label="Gustavo Gaiotti - Voltar ao início">GG</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-gray-800 z-40"
          role="menu"
        >
          <div className="flex flex-col py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 transition"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};