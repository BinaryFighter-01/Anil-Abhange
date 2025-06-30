
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  const stats = [
    { label: 'Projects Completed', value: 15, icon: '📊' },
    { label: 'Technical Skills', value: 20, icon: '💻' },
    { label: 'AI Models Built', value: 8, icon: '🧠' },
    { label: 'Years Learning', value: 3, icon: '📚' },

  ];
  
  return (
    <section id="about" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="card-3d h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-ai-purple">Who I Am</h3>
            
            <p className="text-lg mb-4 text-ai-light/90">
              I'm an <span className="text-ai-purple font-semibold">AI & Data Science</span> undergraduate with a passion for solving real-world problems through technology.
            </p>
            
            <p className="text-lg mb-8 text-ai-light/80">
              My expertise includes <span className="text-ai-cyan">Python</span>, <span className="text-ai-cyan">SQL</span>, 
              <span className="text-ai-cyan"> Power BI</span>, <span className="text-ai-cyan">Excel</span>, and 
              <span className="text-ai-cyan"> Google Colab</span> with experience in building ML models using 
              <span className="text-ai-cyan"> Pandas</span>, <span className="text-ai-cyan">NumPy</span>, and <span className="text-ai-cyan">scikit-learn</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="bg-ai-cyan hover:bg-ai-cyan/90 text-white py-2 px-6 rounded-md transition-all duration-300 text-center"
              >
                Contact Me
              </a>
              
              <a 
                href="/lovable-uploads/90ec94de-334e-43fd-9cb0-0081c1f2ba94.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-ai-purple/10 text-ai-purple border border-ai-purple py-2 px-6 rounded-md transition-all duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="card-3d h-full">
            <h3 className="text-2xl font-bold mb-6 text-ai-purple">What I Do</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-ai-purple/20 rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <path d="M12 18v-6" /><path d="M8 18v-1" /><path d="M16 18v-3" />
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-ai-light">Data Analysis & Visualization</h4>
                  <p className="text-ai-light/70 mt-1">Transform raw data into meaningful insights through advanced analytics and beautiful visualizations.</p>
                </div>
              </li>

              
              
              <li className="flex items-start space-x-3">
                <div className="bg-ai-purple/20 rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-ai-light">Machine Learning Models</h4>
                  <p className="text-ai-light/70 mt-1">Design and develop ML models using Python frameworks to solve complex business problems.</p>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <div className="bg-ai-purple/20 rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m9 8 3 3-3 3" />
                    <path d="M13 12h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-ai-light">AI System Development</h4>
                  <p className="text-ai-light/70 mt-1">Building innovative AI solutions like UAV object detection systems and interactive platforms.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="animate-on-scroll opacity-0 card-3d py-6 px-4 text-center"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-ai-cyan mb-1">{stat.value}+</div>
            <div className="text-ai-light/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
