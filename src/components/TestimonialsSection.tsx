
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  testimonial: string;
}

const TestimonialsSection = () => {
  const testimonialsData: Testimonial[] = [
    {
      name: "Prashant Kanal",
      position: "Senior Project Manager",
      company: "Tech Innovations Inc.",
      testimonial: "Anil's ability to solve complex problems with elegant code is truly impressive. His work on our AI-powered analytics dashboard exceeded our expectations."
    },
    {
      name: "Rudra Hatte",
      position: "CTO",
      company: "DataCraft Solutions",
      testimonial: "Working with Anil was a pleasure. His technical expertise in machine learning and commitment to quality made him an invaluable asset to our team."
    },
    {
      name: "A. G. Sharma",
      position: "Product Lead",
      company: "Future Systems",
      testimonial: "Anil consistently delivered high-quality work ahead of schedule. His understanding of both technical details and business objectives made him stand out."
    },
    {
      name: "Sunil Chaturvedi",
      position: "CEO",
      company: "InnoTech Startups",
      testimonial: "We hired Anil for a complex data science project, and he exceeded all expectations. His passion for technology and problem-solving skills are exceptional."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const maxIndex = testimonialsData.length - 1;
  
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
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  
  const currentTestimonial = testimonialsData[currentIndex];
  
  return (
    <section id="testimonials" ref={sectionRef} className="section-container responsive-box">
      <h2 className="section-title animate-on-scroll opacity-0">What People Say</h2>
      <div className="w-24 h-px bg-ai-cyan/10 mx-auto mb-16"></div>
      
      <div className="animate-on-scroll opacity-0 flex items-center justify-center space-x-6">
        <button
          onClick={handlePrev}
          className="bg-ai-dark/40 hover:bg-ai-purple/20 p-2 rounded-full transition-colors duration-300 flex-shrink-0"
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={24} className="text-ai-light" />
        </button>
        
        <div className="card-3d w-full max-w-4xl relative p-8 min-h-[300px] flex flex-col auto-box">
          <div className="testimonial-content mb-8 content-container">
            <div className="text-5xl text-ai-cyan mb-4 text-center">❝</div>
            <p className="text-ai-light/90 text-xl leading-relaxed text-center text-container">
              {currentTestimonial.testimonial}
            </p>
          </div>
          
          <div className="mt-auto flex items-center justify-end">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-ai-purple to-ai-cyan flex items-center justify-center mr-4 text-white text-xl font-semibold flex-shrink-0">
                {currentTestimonial.name[0]}
              </div>
              
              <div className="content-container">
                <h3 className="text-lg font-bold text-ai-cyan text-container">{currentTestimonial.name}</h3>
                <p className="text-sm text-ai-light/70 text-container">{currentTestimonial.position}, {currentTestimonial.company}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-ai-cyan w-4' : 'bg-ai-light/30'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button
          onClick={handleNext}
          className="bg-ai-dark/40 hover:bg-ai-purple/20 p-2 rounded-full transition-colors duration-300 flex-shrink-0"
          aria-label="Next testimonial"
        >
          <ArrowRight size={24} className="text-ai-light" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
