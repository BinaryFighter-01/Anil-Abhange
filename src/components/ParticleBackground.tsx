
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const themeRef = useRef<'dark' | 'light'>('dark');
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Check theme
    const checkTheme = () => {
      const isDark = !document.documentElement.classList.contains('light-mode');
      themeRef.current = isDark ? 'dark' : 'light';
      initParticles();
    };
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    // Initialize particles with colors based on theme
    const initParticles = () => {
      particlesRef.current = [];
      const numParticles = Math.floor(window.innerWidth * window.innerHeight / 15000);
      
      // Colors based on theme
      let colors = themeRef.current === 'dark' 
        ? ['rgba(0, 173, 181, 0.7)', 'rgba(61, 90, 254, 0.7)', 'rgba(0, 255, 171, 0.4)'] 
        : ['rgba(74, 144, 226, 0.5)', 'rgba(92, 107, 192, 0.5)', 'rgba(0, 188, 212, 0.3)'];
      
      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      // Clear with theme-appropriate color
      if (themeRef.current === 'dark') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      particlesRef.current.forEach((particle, index) => {
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particle with slight wave effect
        const time = Date.now() * 0.001;
        const waveX = Math.sin(time * 0.5 + index * 0.2) * 0.1;
        const waveY = Math.cos(time * 0.5 + index * 0.2) * 0.1;
        
        particle.x += particle.speedX + waveX;
        particle.y += particle.speedY + waveY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Connect particles near the mouse
        const mouseRadius = 150;
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          // Draw connections with opacity based on distance and theme
          const lineOpacity = 1 - distance / mouseRadius;
          if (themeRef.current === 'dark') {
            ctx.strokeStyle = `rgba(0, 173, 181, ${lineOpacity * 0.8})`;
          } else {
            ctx.strokeStyle = `rgba(74, 144, 226, ${lineOpacity * 0.5})`;
          }
          
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          
          // Gently push particles away from mouse
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRadius - distance) / mouseRadius;
          
          particle.speedX -= forceDirectionX * force * 0.02;
          particle.speedY -= forceDirectionY * force * 0.02;
        }
        
        // Connect nearby particles (less aggressive connections)
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const lineOpacity = 0.1 - distance / 1000;
            if (themeRef.current === 'dark') {
              ctx.strokeStyle = `rgba(0, 173, 181, ${lineOpacity})`;
            } else {
              ctx.strokeStyle = `rgba(74, 144, 226, ${lineOpacity})`;
            }
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    checkTheme();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
