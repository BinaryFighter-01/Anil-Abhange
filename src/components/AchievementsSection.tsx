
import { useEffect, useRef } from 'react';

interface Achievement {

  title: string;
  organization?: string;
  date?: string;
  description: string;
}

interface Certificate {
  name: string;
  link: string; // Added link property
}

const AchievementsSection = () => {
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
  
  // Achievements data - Easy to add more in the future
  const achievements: Achievement[] = [
    {
      title: "UAV Object Detection System",
      organization: "Engineering Bay Hackathon",
      date: "January 2025",
      description: "Developed a real-time aerial object detection system that achieved 92% accuracy in challenging environments."
    },
    {
      title: "Interactive Constitution Platform",
      organization: "Legal Tech Innovation Challenge",
      date: "November 2023",
      description: "Created an educational platform that simplified complex legal concepts, winning the Best Educational Tool award."
    },
    {
      title: "Data Science Excellence Award",
      organization: "College Department Recognition",
      date: "October 2023",
      description: "Received recognition for exceptional analysis and visualization project on regional agricultural patterns."
    },
    {
      title: "Technical Leadership Award",
      organization: "National Service Scheme",
      date: "June 2023",
      description: "Honored for implementing digital solutions that improved event management efficiency by 40%."
    }
    // To add more achievements, add new objects here following the same structure
  ];
  
  // Certifications with links - Updated structure
  const certifications: Certificate[] = [
    { name: "Maharashtra Student Innovation Challenge 2023 organised by Maharashtra State Innovation Society (MSInS)", link: "https://drive.google.com/file/d/154oAis0Z_mNT7SS41SX98TKlyUMnGzn6/view?usp=sharing" },
    { name: "Python for Data Science - edX & IBM", link: "https://courses.edx.org/certificates/" },
    { name: "Deep Learning Fundamentals - NVIDIA Deep Learning Institute", link: "https://courses.nvidia.com/certificates/" },
    { name: "SQL Database Management - Microsoft", link: "https://learn.microsoft.com/en-us/users/me/transcript/" },
    { name: "Data Visualization with Power BI - Microsoft", link: "https://learn.microsoft.com/en-us/users/me/transcript/" },
    { name: "Problem Solving (Basic) - HackerRank", link: "https://www.hackerrank.com/certificates/" }
    // To add more certifications, add new objects here with name and link
  ];
  
  // Skill assessment - Easy to add more in the future
  const skillAssessments = [
    { skill: "Python Programming", score: 92 },
    { skill: "Data Analysis", score: 88 },
    { skill: "Machine Learning", score: 84 },
    { skill: "Problem Solving", score: 90 }
    // To add more skill assessments, add new objects here
  ];
  
  return (
    <section id="achievements" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">Achievements & Certifications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-ai-purple mb-8">Key Achievements</h3>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="card-3d transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-ai-purple/10"
              >
                <div className="flex items-start">
                  {/* Achievement icon */}
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-ai-purple/20 flex items-center justify-center text-ai-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                        <circle cx="12" cy="8" r="7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-ai-cyan mb-1">{achievement.title}</h4>
                    
                    <div className="flex flex-wrap justify-between mb-2">
                      {achievement.organization && (
                        <span className="text-sm text-ai-light/80">{achievement.organization}</span>
                      )}
                      {achievement.date && (
                        <span className="text-xs text-ai-light/60">{achievement.date}</span>
                      )}
                    </div>
                    
                    <p className="text-ai-light/70 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-ai-purple mb-8">Certifications</h3>
          
          <div className="card-3d">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ai-dark/70 border border-ai-purple/20 rounded-lg px-5 py-4 flex items-center space-x-3 hover:border-ai-cyan transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-ai-cyan/20 flex items-center justify-center text-ai-cyan">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="m9 16 2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <span className="text-sm text-ai-light/90">{cert.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 card-3d animate-on-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-xl font-bold text-ai-purple mb-4">Skills Assessment Scores</h4>
            
            <div className="space-y-5">
              {skillAssessments.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-ai-light/90">{item.skill}</span>
                    <span className="text-sm text-ai-cyan font-semibold">{item.score}/100</span>
                  </div>
                  
                  <div className="h-2 bg-ai-dark/80 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-ai-purple to-ai-cyan rounded-full"
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Space for future certificates */}
      <div className="mt-12">
        {/* Future certificates will be added here */}
      </div>
    </section>
  );
};

export default AchievementsSection;
