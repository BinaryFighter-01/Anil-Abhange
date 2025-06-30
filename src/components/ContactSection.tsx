
import { useState, FormEvent, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll opacity-0">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="card-3d h-full">
            <h3 className="text-2xl font-bold text-ai-purple mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-ai-purple/20 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-medium text-ai-light mb-1">Email</h4>
                  <a href="mailto:anilabhange219411@gmail.com" className="text-ai-cyan hover:text-ai-purple transition-colors duration-300">
                    anilabhange219411@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-ai-purple/20 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-medium text-ai-light mb-1">Phone</h4>
                  <a href="tel:+919322053790" className="text-ai-cyan hover:text-ai-purple transition-colors duration-300">
                    +91-932-205-3790
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-ai-purple/20 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-medium text-ai-light mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ai-cyan hover:text-ai-purple transition-colors duration-300">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-ai-purple/20 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-purple">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-medium text-ai-light mb-1">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-ai-cyan hover:text-ai-purple transition-colors duration-300">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-semibold text-ai-light mb-4">Working Hours</h4>
              <p className="text-ai-light/70">
                Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                Available for remote collaboration across time zones
              </p>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="card-3d">
            <h3 className="text-2xl font-bold text-ai-purple mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-ai-light mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-ai-dark/70 border border-ai-purple/30 rounded-lg px-4 py-3 text-ai-light focus:outline-none focus:border-ai-cyan transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-ai-light mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-ai-dark/70 border border-ai-purple/30 rounded-lg px-4 py-3 text-ai-light focus:outline-none focus:border-ai-cyan transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-ai-light mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-ai-dark/70 border border-ai-purple/30 rounded-lg px-4 py-3 text-ai-light focus:outline-none focus:border-ai-cyan transition-colors duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-ai-purple to-ai-cyan text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
