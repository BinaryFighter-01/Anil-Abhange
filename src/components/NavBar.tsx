
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Updated navigation links order as requested
  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];
  
  const handleDownloadResume = () => {
    // Direct link to resume
    const resumeUrl = '/lovable-uploads/1edeb756-4b02-4962-9771-7ecdecf026ee.png';
    
    // Create an anchor element and initiate download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Anil_Abhange_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-ai-dark/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with white square background without animation */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-lg p-1.5">
              <span className="text-4xl font-bold bg-gradient-to-r from-ai-blue to-ai-cyan bg-clip-text text-transparent">
                AA
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation with normal spacing */}
          <div className="hidden md:flex items-center justify-end">
            <div className="flex items-center space-x-5">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`nav-link text-ai-light hover:text-ai-cyan transition-colors duration-300 text-sm font-medium cursor-pointer relative ${
                    activeLink === link.to ? 'active-nav-link' : ''
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
            
            {/* Download Resume Button */}
            <Button 
              onClick={handleDownloadResume}
              className="ml-5 bg-gradient-to-r from-ai-blue to-ai-cyan text-white hover:shadow-lg hover:from-ai-cyan hover:to-ai-blue transition-all hover-glow"
            >
              <Download size={16} className="mr-1" />
              Resume
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-ai-light hover:text-ai-cyan focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ai-dark/95 backdrop-blur-lg py-2 px-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-link text-ai-light hover:text-ai-cyan transition-colors duration-300 text-sm font-medium py-2 cursor-pointer ${
                  activeLink === link.to ? 'text-ai-cyan' : ''
                }`}
              >
                {link.name}
              </ScrollLink>
            ))}
            
            {/* Mobile Download Resume Button */}
            <Button 
              onClick={handleDownloadResume}
              className="mt-2 w-full bg-gradient-to-r from-ai-blue to-ai-cyan text-white hover:shadow-lg hover:from-ai-cyan hover:to-ai-blue transition-all"
              size="sm"
            >
              <Download size={16} className="mr-1" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
