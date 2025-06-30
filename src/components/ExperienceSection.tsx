
import { useEffect, useRef } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
  
  // Experience data - Easy to add more items in the future
  const experiences: ExperienceItem[] = [
    {
      title: "AI & ASD Intern",
      company: "Engineering Bay Corporation, Pune",
      period: "Dec 2024 - Jan 2025",
      description: [
        "Developed a UAV-based object detection system using the YOLOv8 deep learning model.",
        "Trained and optimized the model to accurately detect and classify various objects in aerial imagery.",
        "Tested the model in simulated and real-world UAV scenarios, ensuring accuracy and reliability for robust deployment."
      ]
    },
    {
      title: "Technical Head",
      company: "Lawbook",
      period: "Jan 2023 - Present",
      description: [
        "Led backend development using Python (Flask), optimizing API integrations for enhanced performance.",
        "Collaborated with cross-functional teams to develop interactive features, improving user engagement.",
        "Managed version control and deployment pipelines, ensuring seamless application updates."
      ]
    },
    
    {
      title: "Technical Head, National Service Scheme (NSS)",
      company: "PES Modern College of Engineering, Pune-05",
      period: "May 2023 - Present",
      description: [
        "Led end-to-end technical management of large-scale events, including digital infrastructure, data handling, and real-time coordination.",
        "Designed and automated workflows using Excel, Google Drive, and Forms to streamline operations and reporting."
      ]
    }
    // To add more experience entries in the future, add new objects here following the same structure
    // {
    //   title: "New Position",
    //   company: "Company Name",
    //   period: "Start Date - End Date",
    //   description: [
    //     "Description point 1",
    //     "Description point 2",
    //     "Description point 3"
    //   ]
    // }
  ];
  
  return (
    <section id="experience" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">Experience</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-ai-purple/30 via-ai-cyan to-ai-purple/30"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll opacity-0 relative md:flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-ai-cyan border-4 border-ai-dark shadow-glow"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                <div className="card-3d">
                  <div className="absolute -top-2 -right-2 bg-ai-purple text-white text-xs px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-ai-cyan mb-1">
                    {exp.title}
                  </h3>
                  
                  <p className="text-ai-light/80 font-medium mb-4">
                    {exp.company}
                  </p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-ai-purple mr-2">•</div>
                        <p className="text-ai-light/70">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Future experience section */}
      <div className="pt-12">
        {/* Additional experiences will be added here in the future */}
      </div>
    </section>
  );
};

export default ExperienceSection;
