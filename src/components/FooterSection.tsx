
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';

const FooterSection = () => {
  const [visible, setVisible] = useState(false);
  
  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Register scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-ai-dark/50 backdrop-blur-lg border-t border-ai-cyan/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-lg p-1.5 mr-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-ai-blue to-ai-cyan bg-clip-text text-transparent">
                  AA
                </span>
              </div>
              <h3 className="footer-name text-xl font-bold text-ai-light">Anil Abhange</h3>
            </div>
            
            <p className="footer-description text-ai-light/70 max-w-md mb-4">
              Building intelligent solutions with Machine Learning, Python, and Data Science expertise.
            </p>
            
            {/* Location */}
            <div className="footer-location flex items-center text-ai-light/70 mb-4">
              <MapPin size={18} className="text-ai-purple mr-2" />
              <span>Pune, India</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="min-w-[150px]">
              <h4 className="footer-section-title text-ai-cyan font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="footer-link text-ai-light/70 hover:text-ai-cyan transition-colors duration-300 cursor-pointer"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="footer-link text-ai-light/70 hover:text-ai-cyan transition-colors duration-300 cursor-pointer"
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="footer-link text-ai-light/70 hover:text-ai-cyan transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="footer-link text-ai-light/70 hover:text-ai-cyan transition-colors duration-300 cursor-pointer"
                  >
                    Education
                  </ScrollLink>
                </li>
              </ul>
            </div>
            
            <div className="min-w-[150px]">
              <h4 className="footer-section-title text-ai-cyan font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="footer-contact flex items-start text-ai-light/70">
                  <Mail size={16} className="text-ai-purple mr-2 flex-shrink-0 mt-0.5" />
                  <a 
                    href="mailto:anilabhange219411@gmail.com" 
                    className="hover:text-ai-cyan transition-colors break-all text-xs sm:text-sm"
                  >
                    anilabhange219411@gmail.com
                  </a>
                </li>
                <li className="footer-contact flex items-center text-ai-light/70">
                  <Phone size={16} className="text-ai-purple mr-2 flex-shrink-0" />
                  <a href="tel:+919322053790" className="hover:text-ai-cyan transition-colors">+91 9322053790</a>
                </li>
                <li className="mt-4">
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.linkedin.com/in/anil-b-abhange" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a 
                      href="https://github.com/BinaryFighter-01" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                    <a 
                      href="https://twitter.com/anilabhange" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
                      aria-label="Twitter"
                    >
                      <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a 
                      href="https://instagram.com/heyanil" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a 
                      href="https://gitlab.com/anil-b-abhange" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
                      aria-label="GitLab"
                    >
                      <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94L2.27 9.67c.12-.4.5-.67.93-.67h17.6c.43 0 .81.27.93.67l1.22 3.78a.84.84 0 0 1-.3.94z"/><path d="M12 13.11L7.35 8.46 5.08 13.11h6.92z"/><path d="M16.65 8.46L12 13.11h6.92l-2.27-4.65z"/></svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ai-cyan/10 mt-12 pt-8">
          <div className="flex flex-col items-center">
            <p className="footer-copyright text-ai-light/50 text-sm text-center">
              &copy; {year} Anil Abhange. All rights reserved.
            </p>
            <p className="footer-copyright text-ai-light/50 text-sm text-center mt-2">
              Made with ❤️ by Anil Abhange
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`${
          visible ? 'opacity-100' : 'opacity-0'
        } fixed bottom-8 right-8 bg-ai-purple/80 hover:bg-ai-purple p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-white" size={20} />
      </button>
    </footer>
  );
};

export default FooterSection;
