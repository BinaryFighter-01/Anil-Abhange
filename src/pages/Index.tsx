
import { useEffect, useState } from 'react';
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Preload the resume image
    const resumeImage = new Image();
    resumeImage.src = '/lovable-uploads/1edeb756-4b02-4962-9771-7ecdecf026ee.png';
    
    // Add CSS variable for section title lines
    document.documentElement.style.setProperty('--section-title-line', 'block w-24 h-px bg-ai-cyan/10 mx-auto mb-16');
    
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-ai-dark flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-t-ai-cyan border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border-4 border-t-transparent border-r-ai-blue border-b-transparent border-l-transparent rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '7s' }}></div>
            <div className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-ai-green border-l-transparent rounded-full animate-spin-slow" style={{ animationDuration: '5s' }}></div>
          </div>
          <div className="mt-6 text-xl text-ai-light/80">Loading Portfolio...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <ParticleBackground />
      <NavBar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
        <TestimonialsSection />
      </main>
      
      <FooterSection />
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Index;
