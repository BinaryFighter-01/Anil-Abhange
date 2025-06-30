
import { useEffect, useRef } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillsSection = () => {
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
  
  // Skill categories - Easy to add more skills in the future
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "C/C++", "PHP"]
      // To add more programming languages, add new strings here
    },
    {
      title: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow / Keras","CNN", "MLP","scikit-learn", "Computer Vision"]
      // To add more ML & AI skills, add new strings here
    },
    {
      title: "Data Science & Analytics",
      skills: ["Pandas","seaborn",  "Plotly", "NumPy", "Power BI", "Excel"]
      // To add more Data Science skills, add new strings here
    },
    {
      title: "Web Development",
      skills: ["HTML/CSS", "Core JavaScript", "Bootstrap"]
      // To add more Web Development skills, add new strings here
    }
    // To add entirely new skill categories, add new objects here following the same structure
  ];
  
  // Tools and platforms - Easy to add more in the future
  const toolsAndPlatforms = [
    "Jupyter Notebook", "Google Colab", "VS Code", "PyCharm", 
    "Git", "GitHub", "Anaconda", "Linux (Ubuntu)", "Kaggle", 
    "Streamlit", "Excel"
    // To add more tools and platforms, add new strings here
  ];
  
  // Soft skills - Removed emojis to be consistent with other skills
  const softSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Teamwork",
    "Adaptability",
    "Leadership",
    "Communication",
    "Time Management",
    "Quick Learner",
    "Attention to Detail",
    "Creativity"
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">Skills</h2>
      
      {/* Section separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-ai-cyan/30 to-transparent mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="animate-on-scroll opacity-0 skills-container"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="card-3d hover-card-glow">
              <h3 className="text-xl font-bold text-ai-purple mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-ai-dark/70 text-ai-light/90 px-4 py-2 rounded-md border border-ai-purple/30 hover:border-ai-cyan hover:text-ai-cyan transition-colors duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 animate-on-scroll opacity-0 hover-card-glow" style={{ animationDelay: '0.6s' }}>
        <div className="card-3d">
          <h3 className="text-xl font-bold text-ai-purple mb-6">
            Tools & Platforms
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {toolsAndPlatforms.map((tool, index) => (
              <div 
                key={index}
                className="bg-ai-dark/70 text-ai-light/90 px-4 py-2 rounded-full border border-ai-purple/30 hover:border-ai-cyan hover:text-ai-cyan transition-colors duration-300 hover:scale-105"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 animate-on-scroll opacity-0 hover-card-glow" style={{ animationDelay: '0.7s' }}>
        <div className="card-3d">
          <h3 className="text-xl font-bold text-ai-purple mb-6">
            Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-ai-dark/70 rounded-xl p-4 text-center border border-ai-purple/20 hover:border-ai-cyan hover:scale-105 transition-all duration-300"
              >
                <div className="text-sm text-ai-light/90">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
