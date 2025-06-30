
import { useEffect, useRef } from 'react';
import { ExternalLink, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Create an interactive game-like animation background
    const points = [];
    const numPoints = 150; // Increased for more density
    const spread = Math.min(width, height) * 0.8;
    
    for (let i = 0; i < numPoints; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * spread * 0.5;
      
      points.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: Math.random() * spread - spread / 2,
        size: Math.random() * 2 + 1,
        color: i % 5 === 0 ? '#8B5CF6' : i % 3 === 0 ? '#0EA5E9' : i % 2 === 0 ? '#00ADB5' : '#ffffff',
        opacity: Math.random() * 0.3 + 0.1,
        speedFactor: Math.random() * 0.5 + 0.5, // For varying speeds
      });
    }
    
    let rotationSpeed = 0.0003;
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = (-(e.clientY - rect.top) / height) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const rotationX = mouseY * 0.0002;
      const rotationY = mouseX * 0.0002;
      
      const sortedPoints = [...points].sort((a, b) => a.z - b.z);
      
      sortedPoints.forEach(point => {
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        
        const y1 = point.y;
        const z1 = point.z;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = z1 * cosX + y1 * sinX;
        
        const x1 = point.x;
        const x2 = x1 * cosY - z2 * sinY;
        const z3 = z2 * cosY + x1 * sinY;
        
        const scale = 800 / (800 + z3);
        const x3 = centerX + x2 * scale;
        const y3 = centerY + y2 * scale;
        const size = point.size * scale;
        
        ctx.globalAlpha = point.opacity * scale;
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(x3, y3, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add connecting lines for network effect
        if (Math.random() > 0.99) {
          const nearestPoints = sortedPoints
            .filter(p => p !== point && Math.abs(p.z - point.z) < 50)
            .slice(0, 3);
            
          nearestPoints.forEach(nearPoint => {
            const np = sortedPoints.find(p => p === nearPoint);
            if (np) {
              const npScale = 800 / (800 + np.z);
              const npx = centerX + (np.x * cosY - np.z * sinY) * npScale;
              const npy = centerY + (np.y * cosX - np.z * sinX) * npScale;
              
              ctx.beginPath();
              ctx.moveTo(x3, y3);
              ctx.lineTo(npx, npy);
              ctx.strokeStyle = `rgba(0, 173, 181, ${0.1 * scale})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }
      });
      
      points.forEach(point => {
        const cosY = Math.cos(rotationSpeed * point.speedFactor);
        const sinY = Math.sin(rotationSpeed * point.speedFactor);
        const x = point.x;
        const z = point.z;
        point.x = x * cosY - z * sinY;
        point.z = z * cosY + x * sinY;
      });
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden hero-section-mobile">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-80" />
      
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl px-4 items-center justify-center md:justify-between">
        <div className="text-center md:text-right md:ml-8 order-1 md:order-2">
          <h1 className="hero-name text-4xl sm:text-6xl font-bold mb-6">
            <span className="hero-intro block text-sm sm:text-base mb-1 text-ai-light/80">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-purple to-ai-cyan">Anil Abhange</span>
          </h1>
          
          {/* Updated static role with no check mark and made it bold */}
          <div className="hero-role text-2xl sm:text-3xl mb-6 text-ai-light/80 flex items-center justify-center md:justify-end">
            <div className="font-bold">
              AI, DS & ML Enthusiast
            </div>
          </div>
          
          <p className="hero-description text-md max-w-md mx-auto md:ml-auto md:mr-0 mb-6 text-ai-light/70">
            Building intelligent solutions with Artificial Intelligence , Machine Learning, and Data Science
          </p> 
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-6 mb-6">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button 
                className="hero-button bg-gradient-to-r from-ai-purple to-ai-cyan hover:from-ai-cyan hover:to-ai-purple text-white font-semibold px-6 py-2 rounded-full shadow-lg hover-glow"
              >
                Hire Me
              </Button>
            </ScrollLink>
            
            <a 
              href="https://www.linkedin.com/in/anil-b-abhange" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button flex items-center gap-2 bg-gray-800/60 border border-ai-green/30 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover-glow"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-ai-green"></span>
              </span>
              Available for Work
              <ExternalLink size={16} />
            </a>
          </div>
          
          {/* Social media icons moved below buttons with only LinkedIn, Twitter, and GitHub */}
          <div className="flex gap-4 justify-center md:justify-end mb-6">
            <a 
              href="https://www.linkedin.com/in/anil-b-abhange" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/anilabhange" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a 
              href="https://github.com/BinaryFighter-01" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-ai-light/70 hover:text-ai-cyan transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        
        {/* Profile photo moved above buttons on mobile */}
        <div className="profile-container w-full max-w-sm md:max-w-md mb-8 md:mb-0 order-2 md:order-1">
          <div className="profile-photo-rectangular relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-ai-purple to-ai-cyan opacity-80 blur-md rounded-lg"></div>
            <div className="relative overflow-hidden rounded-lg border-2 border-ai-cyan/50">
              <img 
                src="/lovable-uploads/c1b328c5-5933-4020-a4e3-e0756a4f8589.png" 
                alt="Anil Abhange" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
