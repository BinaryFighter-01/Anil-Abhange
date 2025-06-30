
import { useEffect, useRef } from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details?: string[];
}

const EducationSection = () => {
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
  
  // Education data - Updated with requested details
  const educationData: Education[] = [
    {
      degree: "B.E. in Artificial Intelligence & Data Science",
      institution: "Savitribai Phule Pune University, India",
      period: "2022 - Present",
      grade: "SGPA(Sem-V): 9.0 /10.0",
      details: [
        "Coursework: Machine Learning, Data Mining, Computer Vision, Natural Language Processing, Big Data Analytics",
        "Research Focus: Deep Learning applications in real-world scenarios"
      ]
    },
    {
      degree: "12th Standard (PCMB)",
      institution: "Shri Ramrao VidyaMandir highschool and Junior College,Jath",
      period: "Completed",
      grade: "68%",
      details: [
        "Physics, Chemistry, Mathematics, Biology"
      ]
    },
    {
      degree: "10th Standard",
      institution: "GOVT. RESIDENTIAL SCHOOL Kavathe-Mahankal",
      period: "Completed",
      grade: "89%",
      details: []
    }
  ];
  
  // Languages data
  const languages = [
    "Marathi",
    "Hindi", 
    "English",
    "Kannada"
  ];
  
  // Continuous learning data
  const continuousLearning = [
    {
      title: "Machine Learning Specialization",
      provider: "--",
      date:"--",
      skills: ["Supervised Learning", "Neural Networks", "Decision Trees"]
    },
    {
      title: "Data Science",
      provider: "--",
      date: "--",
      skills: ["Data Analysis", "Data Visualization"]
    },
    {
      title: "Deep Learning Fundamentals",
      provider: "--",
      date: "--",
      skills: ["Neural Networks", "TensorFlow", "Image Classification"]
    }
  ];
  
  return (
    <section id="education" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">Education</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="card-3d relative overflow-hidden hover-card-glow">
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-ai-purple to-ai-cyan"></div>
                
                <div className="pl-6">
                  <div className="text-sm text-ai-purple font-medium mb-2">{edu.period}</div>
                  <h3 className="text-xl font-bold text-ai-cyan mb-1">{edu.degree}</h3>
                  <p className="text-ai-light/90 mb-2">{edu.institution}</p>
                  
                  {edu.grade && (
                    <div className="inline-block bg-ai-purple/20 text-ai-purple px-3 py-1 rounded-md text-sm mb-4">
                      {edu.grade}
                    </div>
                  )}
                  
                  {edu.details && edu.details.length > 0 && (
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-ai-cyan mr-2">•</span>
                          <span className="text-ai-light/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 card-3d animate-on-scroll opacity-0 hover-card-glow" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-ai-purple mb-6">Languages</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <div 
                  key={index}
                  className="bg-ai-dark/50 border border-ai-purple/20 hover:border-ai-cyan rounded-lg px-4 py-3 text-ai-light/80 hover:text-ai-cyan transition-colors duration-300 text-center"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="card-3d h-full flex flex-col hover-card-glow">
            <h3 className="text-xl font-bold text-ai-purple mb-6">Continuous Learning</h3>
            
            <div className="space-y-6 flex-grow mb-6">
              {continuousLearning.map((cert, index) => (
                <div key={index} className="border-b border-ai-purple/20 pb-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold text-ai-cyan">{cert.title}</h4>
                    <span className="text-sm text-ai-light/60">{cert.date}</span>
                  </div>
                  <p className="text-sm text-ai-light/70 mb-2">{cert.provider}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-ai-dark/70 text-ai-light/60 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold text-ai-light mb-4">Learning Philosophy</h4>
              <p className="text-ai-light/70">
                I believe in continuous growth and staying updated with the latest advancements in AI and Data Science. 
                My approach combines structured learning with hands-on projects to solidify concepts and build practical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
